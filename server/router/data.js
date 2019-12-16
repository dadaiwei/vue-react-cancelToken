const dataController = require('../controller/dataController')

const dataRouter = (router) => {
  router.get('/data', async (ctx) => {
    await dataController(ctx);
  })
}

module.exports = dataRouter;