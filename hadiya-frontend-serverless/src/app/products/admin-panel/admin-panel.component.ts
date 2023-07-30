import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetProductsAPIResponseMapper } from 'src/app/utils/response-mappers';
import { Pagination, Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  protected products: Product[] = [];
  // protected pagination!: Pagination;
  protected currentPage: number = 1;
  protected pageItemLimit: number = 5;
  protected fetchItemLimit: number = 10;
  protected exclusiveStartKey: string | null = null;
  protected productsPaginatedList: Pagination[] = []
  // protected totalCount!: number;

  constructor(
    private productService: ProductsService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts(exclusiveStartKey: string | null = null, isDelete: boolean = false){
    this.productService.getAllProducts(this.fetchItemLimit, exclusiveStartKey)
    .subscribe(response => {
      if (response) {
        const fetchedProducts = GetProductsAPIResponseMapper(response) ?? [];
        if (isDelete) {
          this.products = [];
          this.products = [...fetchedProducts]
        }
        else
          this.products = [...this.products, ...fetchedProducts];
        if (response.data.lastEvaluatedKey)
          this.exclusiveStartKey = response.data.lastEvaluatedKey.id;
      }
    })
  }

  protected deleteProduct(id: string){
    this.productService.deleteProduct(id)
    .subscribe(response => {
      this.fetchProducts(null, true);
    })
    
  }

  protected editProduct(id: string){
    this.router.navigate(['forms/', id]);
  }

  protected pageChange(page: number){
    this.currentPage = page;
    if (this.isLastPage(this.currentPage)) this.fetchProducts(this.exclusiveStartKey);
    
  }

  private isLastPage(page: number) {
    if ((Math.ceil(this.products.length/this.pageItemLimit)) === page) return true;
    else return false; 
  }

}
