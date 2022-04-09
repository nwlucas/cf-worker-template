import { AppEnv, AppRequest } from '@/types/env';
import { error, ThrowableRouter, withContent, withParams } from 'itty-router-extras';

const router = ThrowableRouter();

router
  .get('/ingress/:prefix?', withParams, (req: AppRequest, env: AppEnv) => )
  .get('/slc/:hostname?', withParams, (req: AppRequest, env: AppEnv) => parseCertificate(req, env))
  .post('/cloud-init', withContent, (req: AppRequest, env: AppEnv) => parseCertificate(req, env))
  .all('*', () => {
    return error(500, 'Bad request');
  });

export default {
  fetch: router.handle,
};
