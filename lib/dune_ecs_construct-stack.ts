import * as cdk from '@aws-cdk/core';
import * as ec2 from "@aws-cdk/aws-ec2";
import * as ecs from "@aws-cdk/aws-ecs";
import * as ecs_patterns from "@aws-cdk/aws-ecs-patterns";
import * as ecr from "@aws-cdk/aws-ecr"

export class DuneEcsConstructStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "DuneVpc", {
      maxAzs: 3 // Default is all AZs in region
    });

    const cluster = new ecs.Cluster(this, "DuneCluster", {
      vpc: vpc
    });

    const repository = new ecr.Repository(this, "dune-repository", {
      repositoryName: "dune"
    })

        // Create a load-balanced Fargate service and make it public
        new ecs_patterns.ApplicationLoadBalancedFargateService(this, "DuneFargateService", {
          serviceName: "DuneService",
          cluster: cluster, // Required
          cpu: 256, // Default is 256
          desiredCount: 1, // Default is 1
          taskImageOptions: { 
            image: ecs.ContainerImage.fromEcrRepository(repository),
            containerPort: 8080
          },
          memoryLimitMiB: 512, // Default is 512
          publicLoadBalancer: true // Default is false
        });
    
  }
}
