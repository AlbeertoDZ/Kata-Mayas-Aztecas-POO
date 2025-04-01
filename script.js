// Ejercicio 1 Construye las siguientes clases

class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    attack(){
        this.power;
    }

    defend(damage) {
        this.life - damage;
    }
}

class Maya extends Warrior {
    constructor(life, power){
        super(life,power)
    }

    drinkColacao(){
        this.power = power + 10;
    }
}

class Aztec extends Warrior {
    constructor(life,power) {
        super(life,power)
    }
    drinkNesquik(){
        this.life = life + 10;
    }
}

let peleadorMaya = new Maya(50, 10);
let peleadorAzteca = new Aztec(50, 10);
peleadorAzteca.drinkNesquik();
peleadorMaya.drinkColacao();
peleadorMaya.attack();
peleadorAzteca.defend();
peleadorAzteca.attack();
peleadorMaya.defend(); 