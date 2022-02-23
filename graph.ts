const airports:string[] = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ")
const routes = [
    ["PHX", "LAX"],
    ["PHX", "JFK"],
    ["JFK", "OKC"],
    ["JFK", "HEL"],
    ["JFK", "LOS"],
    ["MEX", "LAX"],
    ["MEX", "BKK"],
    ["MEX", "LIM"],
    ["MEX", "EZE"],
    ["LIM", "BKK"]
]

const graph = new Map<string, string[]>()

function addNode(node:string){
    graph.set(node, [])
}

function connectEdge(from:string, to:string){
    graph.get(from).push(to)
    graph.get(to).push(from)
}

airports.forEach(addNode)

routes.forEach(route => connectEdge(...route as [string, string]))

const BFS = (start:string, dest:string) => {
    const queue = [start]
    // const visited:string[] = [start]
    const visited = new Set()

    while(queue.length>0){
        const node = queue.shift()
        const destinations = graph.get(node)

        for(const d of destinations){
            if(!visited.has(d)){
                visited.add(d)
                queue.push(d)
            }
            if(d === dest){
                console.log(visited)
                console.log(dest)
                break
            }
        }
    }
    console.log(visited)
}

// BFS("PHX", "OKC")

const DFS = (start:string, visited = new Set()) => {
    visited.add(start)
    const destinations = graph.get(start)
    for(const d of destinations){
        if(!visited.has(d)){
            DFS(d, visited)
        }
    }
    console.log(visited)
}

DFS("PHX")
