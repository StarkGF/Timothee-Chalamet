
export const throttle = (fn, delay) => {
  let canRun = true
  return function () {
    if (!canRun) ;
    else {
      canRun = false
      setTimeout(() => {
        fn.apply(this, arguments)
        canRun = true
      }, delay)
    }
  }
}
