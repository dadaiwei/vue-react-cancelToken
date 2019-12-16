const handleMessage = (ctx) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const message = [];
        const names = ['小明', '小红', '小刚', '小智', '小小', '小沙', '小果', '小石头', '小山', '大大', '小青', '小等', '小强']
        for (let i = 1; i < 1000; i++) {
          let randomIndex = Math.ceil(Math.random(0, 1) * (names.length - 1))
          message.push({
            index: i,
            name: names[randomIndex],
            age: i * 2,
            money: Math.ceil(Math.random(0, 1) * 1000) * 100
          })
        }
        ctx.body = {
          success: true,
          message
        }
        resolve()
      }, 2000)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = handleMessage;