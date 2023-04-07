// synchronous code = In an ordered sequence. Step-by-step linear instructions (start now, finish now)

// asynchronous code = Out of sequence. Ex: Access a database, fetch a file, tasks that take time (start now, finish sometime later)

console.log("START")
setTimeout(() => console.log("This is a asynchronous"), 5000)
console.log("END")
