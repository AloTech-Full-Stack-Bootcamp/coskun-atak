const Koa = require("koa");
const app = new Koa();

// Response time middleware
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set("X-Response-Time", `${ms}ms`);
});

// Logger function
app.use(async (ctx, next) => {
    const startDate = Date();
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.url}, ${ctx.method}, ${startDate.toString()}, ${ms}ms`);
});

// Response
app.use(async ctx => {
    ctx.body = "Hello World";
});

app.listen(5000);