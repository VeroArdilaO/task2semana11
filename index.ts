// CLASES ABSTRACTAS
/* Construye una jerarquía de clases de tu pelicula favorita que cumpla con las siguientes entidades:

Character (Clase abstracta)
Contiene por lo menos el comportamiento de presentarse a sí mismo(introduce())
Protagonista principal que hereda de Character
No olvides agregar algunos comportamientos propios de este personaje. (métodos)
Antagonista principal que hereda de Character
No olvides agregar algunos comportamientos propios de este personaje. (métodos) */

abstract class Character {
  abstract introduce():string;
}

class HarryPotter extends Character {

      introduce() {
       return 'Good afternoon, my name is Harry James Potter and I belong to the 	Gryffindor House'
      }
      parselTongues(): boolean {
        return true 
      }
      firstWand():string {
        return '11", Holly, phoenix feather'
      } 
    
}

class DracoMalfoy extends Character {

      introduce():string {
        return 'Hello everyone I am Draco Lucius Malfoy Black and my House is the incredible Slytherin';
      }

      potions():string {
        return 'able to pass his O.W.L Ordinary Wizarding Level as the best in pot'
      }
      Wand(): string {
       return '10", Hawthorn, unicorn hair'
      }
      
}

const harry = new HarryPotter;
const draco = new DracoMalfoy;

console.log(harry.introduce());
console.log(draco.introduce());
