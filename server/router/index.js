const Router = require('koa-router');
const messageController = require('../controller/messageController')
const dataRouter = require('./data');

const router = new Router();

dataRouter(router)

router.get('/', async (ctx) => {
  ctx.body = 'Hello World.'
})

router.get('/message', async (ctx) => {
  await messageController(ctx);
})

module.exports = router;

