# Hadiya Products API

This REST api application interacts with a DynamoDB table and can be deployed as AWS Lambda function.

## Strategy

We will deploy the source code and the node_modules dependencies seperately.

## Pre-deploy steps

1. Install the dependencies using 

```bash
npm install
```

2. Create another folder outside this project folder and create a folder within it named "nodejs".

```bash
cd ..
mkdir -p <any-name>/nodejs
```

3. **MOVE** the node_modules folder from your project to this newly created nodejs folder.

```bash
mv node_modules ../<any-name>/nodejs
```

4. Zip the **CONTENTS** of both code and dependencies folder

```bash
cd hadiya-products-lambda
zip -r ../hadiya-products-lambda.zip ./*
cd ..
cd <any-name>
zip -r ../<any-name>.zip ./*
```

5. Upload them to lambda seperately.. I won't tell you how.. Research on that