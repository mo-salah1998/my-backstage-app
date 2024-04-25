import { errorHandler } from '@backstage/backend-common';
import { LoggerService } from '@backstage/backend-plugin-api';
import express  from 'express';
import Router from 'express-promise-router';
// import { stringifyError } from '@backstage/errors';

export interface RouterOptions {
  logger: LoggerService;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  router.get('/users',async (_, res) => {
    try {
      const response = await fetch('http://localhost:3005/v1/api/testApi');
      const jsonData = await response.json();
      res.status(200).json(jsonData);

    } catch (error) {
      logger.error(`Unable to fetch users from the API: ${error}`);
      res.status(500).json({ message: 'Internal server error' });
    }
  })

  router.use(errorHandler());
  return router;
}
