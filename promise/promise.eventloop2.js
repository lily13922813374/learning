const promise1 = () => new Promise((resolve,reject)=>{
  console.log(1)
  resolve()
}).then(()=>{
  console.log(2)
  new Promise((resolve,reject)=>{
    console.log(3)
    resolve()
  }).then(()=>{
    console.log(4)
  }).then(()=>{
    console.log(5)}
  )
}).then(()=>{
  console.log(6)
})

// promise1()

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const saySomething = str => {
  console.log('saySomething', str)
  return new Promise((resolve, reject) => {
    console.log('1')
    resolve()
  }).then(() => {
    console.log(2)
  }).then(() => {
    console.log(3)
    setTimeout(() => {
      console.log('3-1')
    }, 1000)
  })
}
const failureCallback = str => {
  console.log('error happen')
}
wait(1000).then(() => saySomething("10 seconds")).then(() => {
  console.log(4)
})
.then(() => {
  // return get then() {
  //   return function (resolve, reject) {
  //     resolve('12345')
  //   }
  // }
})
.catch(failureCallback);