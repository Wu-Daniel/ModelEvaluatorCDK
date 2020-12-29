#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ModelEvaluatorCdkStack } from '../lib/model_evaluator_cdk-stack';

const app = new cdk.App();
new ModelEvaluatorCdkStack(app, 'ModelEvaluatorCdkStack');
