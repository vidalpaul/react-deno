import { Application, Router } from 'https://deno.land/x/oak@v7.7.0/mod.ts';

const app = new Application();

const router = new Router();

router
  .get('/', ({ response }) => {
    response.body = 'Home page';
  })
  .get('/new', ({ response }) => {
    response.body = 'New page';
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
