/*
 * @Description: 根据设置阈值发出请求
 * @Author: Aboli
 * @Date: 2020-12-19 08:11:03
 * @LastEditTime: 2020-12-19 11:42:35
 * @LastEditors: Aboli  阿豹
 */

/*
    aryPromise: 请求方法数组
    threshold： 请求阈值，一次发出多少请求
    inTurn： 顺序请求
*/
const PromiseExecuteQueue = (aryPromise, threshold = 1, inTurn = true) => {
  const aryEmpty = Array.from({ length: threshold })
      //  每有一个promise完成或拒绝，再发出下一次请求
  const callback = (val) => {
          console.log(val)
          const getRandomIndex = () => ~~(aryPromise.length * Math.random())
          let randomIndex = getRandomIndex()
          if (inTurn) randomIndex = 0
          aryPromise.length > 0 && aryPromise[randomIndex]().then(callback, callback)
          aryPromise = aryPromise.filter((e, i) => i !== randomIndex)
      }
      //  先根据阈值找出首批执行的promise
  const aryIndexExecuteInfirstTick = threshold < aryPromise.length ? aryEmpty.map((e, i) => i) : aryPromise.map((e, i) => i)
  const aryPromiseExecuteInfirstTick = aryIndexExecuteInfirstTick.map(e => aryPromise[e])
  aryPromise = aryPromise.filter((e, i) => !aryIndexExecuteInfirstTick.includes(i))
  aryPromiseExecuteInfirstTick.forEach(e => Promise.resolve(e()).then(callback, callback))
}

let aryPequest = [
  () => new Promise((res, rej) => {
      setTimeout(() => {
          rej(1)
      }, 1e3)
  }),
  () => new Promise((res) => {
      setTimeout(() => {
          res(2)
      }, 1e3)
  }),
  () => new Promise((res) => {
      setTimeout(() => {
          res(3)
      }, 1e3)
  }),
  () => new Promise((res) => {
      setTimeout(() => {
          res(4)
      }, 1e3)
  }),
  () => new Promise((res) => {
      setTimeout(() => {
          res(5)
      }, 1e3)
  })
]

PromiseExecuteQueue(aryPequest, 3, true)