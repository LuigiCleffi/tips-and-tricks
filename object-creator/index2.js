function Person(name, age, jobTitle){
  return {name, age, jobTitle}
}

const bankClients = [
  Person("Luigi", 22, "Software Engineer"),
  Person("Cloverson", 39, "Manobrista")
]

console.log({...bankClients})