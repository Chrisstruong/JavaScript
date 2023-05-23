// const depthFirstPrint = (graph, source) => {
    // Iterative
//     const stack = [ source ]

//     while (stack.length > 0) {
//         const current = stack.pop()
//         console.log(current)

//         for (let neighbor of graph[current]) {
//             stack.push(neighbor)
//         }
//     }
// }

// const depthFirstPrint = (graph, source) => {
    // Recursive
//     console.log(source)
//     for (let neighbor of graph[source]) {
//         depthFirstPrint(graph, neighbor)
//     }
// }

const breathFirstPrint = (graph, source) => {
    const queue = [source]

    while (queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// depthFirstPrint(graph, 'a') //abdfce

breathFirstPrint(graph, 'a') //acbedf