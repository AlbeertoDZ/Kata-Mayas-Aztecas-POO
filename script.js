// Ejercicio 1 Construye las siguientes clases

class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    attack(){
        return this.power;
    }

    defend(damage) {
        this.life -= damage;
        console.log(`has sufrido un daño de ${damage}, te queda ${this.life} de vida`)
    }
}

class Maya extends Warrior {
    constructor(life, power){
        super(life,power)
    }

    drinkColacao(){
        this.power += 10;
    }
}

class Aztec extends Warrior {
    constructor(life,power) {
        super(life,power)
    }
    drinkNesquik(){
        this.life += 10;
    }
}

let peleadorMaya = new Maya(200, 30);
let peleadorAzteca = new Aztec(200, 20);

peleadorAzteca.drinkNesquik();
peleadorMaya.drinkColacao();

const damageMaya = peleadorMaya.attack();

peleadorMaya.attack();
peleadorAzteca.defend(damageMaya);

const damageAzteca = peleadorAzteca.attack();

peleadorAzteca.attack();
peleadorMaya.defend(damageAzteca); 