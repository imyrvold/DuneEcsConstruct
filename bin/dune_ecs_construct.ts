#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DuneEcsConstructStack } from '../lib/dune_ecs_construct-stack';

export const duneApiStackName = 'DuneEcsApiStack';
export const duneFunctionName = 'DuneWidgetStoreFuction';

const app = new cdk.App();
// new DuneEcsConstructStack(app, duneApiStackName, {
//     env: {
//         account: '515051544254',
//         region: 'eu-west-1'
//     }
// });
// new DunePipelineStack(app, 'DunePipelineStack');