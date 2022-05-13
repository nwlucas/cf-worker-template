import { AppEnv, AppRequest } from '@/types/env';
import { error, ThrowableRouter } from 'itty-router-extras';

const router = ThrowableRouter();

router
  .get('/someroute', (req: AppRequest, _env: AppEnv, _ctx: ExecutionContext) => {
    return new Response(JSON.stringify(req), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  })
  .all('*', () => {
    return error(500, 'Bad request');
  });

const worker: ExportedHandler<AppEnv> = {
  fetch: (...args) =>
    router.handle(...args).then((response) => {
      return response;
    }),
};

export default worker;
