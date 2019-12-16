const handleMessage = (ctx) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const data = [];
        const fruits = ['香蕉', '苹果', '葡萄', '西瓜', '芒果', '沙果', '海棠', '欧楂', '山楂', '李子', '梅子', '罗甘莓', '柠檬']
        for (let i = 0; i < 100; i++) {
          let randomIndex = Math.ceil(Math.random(0, 1) * (fruits.length - 1))
          data.push({
            index: i,
            name: fruits[randomIndex],
            num: i,
            price: 5,
            total: i * 5
          })
        }
        ctx.hea
        ctx.body = {
          success: true,
          fruits: data
        }
        resolve()
      }, 2000)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = handleMessage;