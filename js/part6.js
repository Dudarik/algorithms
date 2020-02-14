function isSeller(name) {
  return name[name.length - 1] === "m";
}

const graph = {};
graph["you"] = ["alice", "bob", "claire", "alex"];
graph["bob"] = ["anuj", "peggy", "you"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];
graph["alex"] = [];

function search(name) {
  let sq = [],          //очередь
  sd = []               //Уже проверенные

  sq = sq.concat(graph[name])
  
  while(sq.length){
    let person = sq.shift()   
    
    if (sd.indexOf(person) === -1){
      if (isSeller(person)) return person

      sq = sq.concat(graph[person])
      sd.push(person)
    }
  }
  return false
}

console.log(search("you"));



































/*function search(name) {
  let search_queue = [],
    searched = []
  search_queue = search_queue.concat(graph[name])

  while (search_queue.length) {
    let person = search_queue.shift()
    if (searched.indexOf(person) === -1) {
      if (isSeller(person)) return person

      console.log(search_queue)
      search_queue = search_queue.concat(graph[person])
      searched.push(person)
    }
  }
  return false
}
console.log(search("you"));*/