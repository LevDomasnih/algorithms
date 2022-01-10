const graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy"];
graph.claire = ["thom", "jonny"];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const personIsSeller = name => name[name.length - 1] === "m";

const search = (name) => {
    let searchQueue = [...graph[name]]
    let searched = []

    while (searchQueue.length) {
        const person = searchQueue.shift()
        if (searched.indexOf(person) === -1) {
            if (personIsSeller(person)) {
                console.log(`${person} is a mango seller!`)
                return true
            } else {
                searchQueue = searchQueue.concat(graph[person])
                console.log(searchQueue)
                searched.push(person)
            }
        }
    }

    return false
}

search('you')
