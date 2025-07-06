const firstName = 'John'
const lastName = 'Smith'
const age = 20
const weight = 80
const height = 185

console.log(firstName, lastName, age, 'y.o', weight, 'kg', height, 'cm')
console.log('Hello ' + firstName)

let notAdmin = 0
const users = [
  {
    name: 'Alex',
    isAdmin: false
  },
  {
    name: 'Anna',
    isAdmin: true
  },
  {
    name: 'Andrew',
    isAdmin: false
  },
  {
    name: 'Brad',
    isAdmin: true
  },
  {
    name: 'Daniel',
    isAdmin: false
  }
]

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin != true) {
    notAdmin++
  }
}

console.log(notAdmin)