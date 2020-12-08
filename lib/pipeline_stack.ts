import * as cdk from '@aws-cdk/core';
import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as cpactions from '@aws-cdk/aws-codepipeline-actions';
import * as pipelines from '@aws-cdk/pipelines';

export class DunePipelineStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const sourceArtifact = new codepipeline.Artifact();
        const cloudAssemblyArtifact = new codepipeline.Artifact();

        new pipelines.CdkPipeline(this, 'Pipeline', {
            cloudAssemblyArtifact: cloudAssemblyArtifact,
            pipelineName: 'DunePipeline',
            sourceAction: new cpactions.GitHubSourceAction({
                actionName: 'GitHub',
                output: sourceArtifact,
                oauthToken: cdk.SecretValue.secretsManager('github-token'),
                owner: 'imyrvold',
                repo: 'cdkpipeline',
                trigger: cpactions.GitHubTrigger.POLL
            }),
            synthAction: new pipelines.SimpleSynthAction({
                sourceArtifact: sourceArtifact,
                cloudAssemblyArtifact: cloudAssemblyArtifact,
                installCommand: 'npm install -g aws-cdk',
                synthCommand: 'cdk synth'
            })
        });
    }
}