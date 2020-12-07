import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DuneEcsConstruct from '../lib/dune_ecs_construct-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DuneEcsConstruct.DuneEcsConstructStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
