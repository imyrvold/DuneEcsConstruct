#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DuneEcsConstructStack } from '../lib/dune_ecs_construct-stack';

const app = new cdk.App();
new DuneEcsConstructStack(app, 'DuneEcsConstructStack');
