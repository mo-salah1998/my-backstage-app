import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { workspacePlugin, WorkspacePage } from '../src/plugin';

createDevApp()
  .registerPlugin(workspacePlugin)
  .addPage({
    element: <WorkspacePage />,
    title: 'Root Page',
    path: '/workspace',
  })
  .render();
