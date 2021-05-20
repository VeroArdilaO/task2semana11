// CLASES ABSTRACTAS Y GENÉRICOS
/* Construye una jerarquía de clases de tu pelicula favorita que cumpla con las siguientes entidades:

Character (Clase abstracta)
Contiene por lo menos el comportamiento de presentarse a sí mismo(introduce())
Protagonista principal que hereda de Character
No olvides agregar algunos comportamientos propios de este personaje. (métodos)
Antagonista principal que hereda de Character
No olvides agregar algunos comportamientos propios de este personaje. (métodos) */


abstract class Character {
  abstract introduce(): string;
}

// CLASE PROTAGONISTA

class HarryPotter extends Character {
  introduce(): string {
    return 'Good afternoon, my name is Harry James Potter and I belong to the 	Gryffindor House';
  }
  parselTongues(): boolean {
    return true;
  }
  firstWand(): string {
    return '11", Holly, phoenix feather';
  }
  // Método Genérico

  SchoolGoals<T>(winner: T): T {
    return (winner = winner);
  }
}

// CLASE ANTAGONISTA

class DracoMalfoy extends Character {
  introduce(): string {
    return 'Hello everyone I am Draco Lucius Malfoy Black and my House is the incredible Slytherin';
  }

  potions(): string {
    return 'able to pass his O.W.L Ordinary Wizarding Level as the best in potions';
  }
  Wand(): string {
    return '10", Hawthorn, unicorn hair';
  }

  //Método Genérico

  personalData<T, Y>(data: T, brothers: Y): T {
    return {
      ...data,
      brothers: brothers
    };
  }
}

/* Uilizando la clase abstracta*/
const harry = new HarryPotter();
const draco = new DracoMalfoy();

console.log(harry.introduce());
console.log(draco.introduce());

/* Utilizando Genéricos para Harry 
método SchoolGoals
*/
console.log(harry.SchoolGoals('Quidditch cup'));
console.log(harry.SchoolGoals(true));

/* Utilizando Genéricos para Draco 
método personalData
*/
// Ejemplo 1 Brothers tipo string
console.log(
  draco.personalData(
    {
      name: 'Draco',
      lastName: 'Malfoy',
      age: 27,
      wiser: true
    },
    'Dont have any Brothers'
  )
);
// Ejemplo 2 Brothers tipo boolean
console.log(
  draco.personalData(
    {
      name: 'Draco',
      lastName: 'Malfoy',
      age: 27
    },
    false
  )
);
