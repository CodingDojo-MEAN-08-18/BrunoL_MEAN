function Ninja(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    
    
    this.sayName = function() {
        console.log("Hello my name is " + this.name);
        return this;
    }
    this.showStats = function() {
        console.log("Name:" + this.name +  ",Strength:" + this.strength + ",Speed:" + this.speed + ",Health:" + this.health);
        return this;
    }
    
    Ninja.prototype.punch = function(member) {
        member.health -= 5;
        console.log(member.name + " was punched by " + this.name + " and lost 5 Health!");
        return this;
    }

    this.kick = function(ninja) {
        const damage = this.strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
        return this;
    }


}

    

var ninja1 = new Ninja("Bill Gates");
var ninja2 = new Ninja("Hyabusa");

ninja1.sayName();
ninja2.sayName();

ninja2.kick(ninja1);

ninja1.showStats();
