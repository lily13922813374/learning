setTimeout(
  ()=>{console.log(0)}// push一个宏任务
)

new Promise((resolve,reject)=>{
  console.log(1)
  resolve()
}).then(
  /*P1.then start*/
  ()=>{
    console.log(2)
    new Promise((resolve,reject)=>{
      console.log(3)
      resolve()
    }).then(
      ()=>{console.log(4)}// P3.then
    ).then(
      ()=>{console.log(5)}// P3.then.then
    )
  }
  /*P1.then end*/
 ).then(
   ()=>{console.log(6)}// P1.then.then
)

new Promise((resolve,reject)=>{
  console.log(7)
  resolve() 
}).then(
  ()=>{console.log(8)}// P2.then
)



// 0 1 7 2 3 8 6 4 5
// 1 7 2 3 8 4 6 5 0 