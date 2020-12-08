# Welcome to DuneEcsConstruct CDK TypeScript project!

This project demonstrates how to use CDK to deploy a Vapor 4 app to ECS Fargate.
The containers need to be pushed to AWS ECR when the ECR repository have been created.
It is created with this code:
```
const repository = new ecr.Repository(this, "dune-repository", {
      repositoryName: "dune"
    })
```
This is done in `dune_ecs_construct-stack.js`, I normally just refreshes the ECR-Repositories dashboard  
until I see that the repository have been created after I have done `cdk deploy`,, and then do a  
`docker push xxxxxxxx.dkr.ecr.eu-west-1.amazonaws.com/dune:latest`

The vapor app is expecting to receive requests on port 8080, and the database (MongoDB) is using  
port 27017. Change this to something else if you have other databases you want to use.

To be able to persist the database, I have set up an MongoDB Atlas account, and use a connectionString  
to the database in my vapor app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
