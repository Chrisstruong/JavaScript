// promise = object that encapsulates the result of an asynchronous operation. let asynchronous return values like synchronous methods "I promise to return something in the future"

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

wait(3000).then(()=>console.log("Thanks for waiting"))