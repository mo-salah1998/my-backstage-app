import { workspacePlugin } from './plugin';

describe('workspace', () => {
  it('should export plugin', () => {
    expect(workspacePlugin).toBeDefined();
  });
});
