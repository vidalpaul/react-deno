import { Application } from 'https://deno.land/x/oak@v7.7.0/mod.ts';
import router from './src/router.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
console.log('Now started listening on port: 8000');
