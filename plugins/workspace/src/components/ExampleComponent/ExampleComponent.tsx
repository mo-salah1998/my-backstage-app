import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core-components';
 import { useEntity } from '@backstage/plugin-catalog-react';

import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => {
  const { entity } = useEntity();
  const isActiveWorkspace = entity?.metadata.annotations['strivly.io/workspaces'] === 'true';

  if (!isActiveWorkspace) {
    return null;
  }
  return (
    <div>
        <Content>
          <ContentHeader title="Plugin title">
            <SupportButton>A description of your plugin goes here.</SupportButton>
          </ContentHeader>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <InfoCard title="Information card">
                <Typography variant="body1">
                  All content should be wrapped in a card like this.
                </Typography>
              </InfoCard>
            </Grid>
            <Grid item>
              <ExampleFetchComponent />
            </Grid>
          </Grid>
        </Content>
    </div>
  )
}




