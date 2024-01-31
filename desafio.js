class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    toAttack(){
        console.log(`O ${this.name} de ${this.age} anos, atacou usando ${this.type}`)
    }
    
}

let mago = new hero('Gandalf', '1500', 'magia')
let guerreiro = new hero('Aragorn', '450', 'espada')
let monge = new hero('Monk', '286', 'artes marciais')
let ninja = new hero('Tenchu', '21', 'shuriken')

mago.toAttack()
guerreiro.toAttack()
monge.toAttack()
ninja.toAttack()
