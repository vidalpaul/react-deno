import { Context } from 'https://deno.land/x/oak@v7.7.0/mod.ts';

export const Register = async (ctx: Context) => {
  const req = await ctx.request.body().value;
  ctx.response.body = req;
};
