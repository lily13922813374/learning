// 手写promise
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class NPromise {
  constructor(execute) {
    this.status = PENDING
    this.value = null
    this.result = null
  }
  
}