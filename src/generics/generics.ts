interface IFooBar  {
  foo: string;
  bar: string;
  car?: string
}


export const fooArr:  Array<IFooBar> = [
  {foo: 'one', bar: 'one'},
  {foo: 'second', bar: 'second'},
  {foo: 'third', bar: 'third'}
]

export function sortByKey<T>(data: Array<T>, key: keyof T) {
  data.sort((a,b) => {
    if(a[key]  > b[key]) {
      return 1;
    }
    if(a[key] < b[key]) {
      return -1
    } 
    return 0;
  })
}


sortByKey<IFooBar>(fooArr, 'foo')


class Animal { 
  public legCount: number;
  constructor(legCount: number) {
    this.legCount =legCount;
  }
}

export class Cat extends Animal {
  constructor()  {
    super(4)
  }
}

export class Kangoroo extends Animal {
  constructor(){
    super(2)
  }
}

export class Bacteria {}



function printLegCount<T extends Animal>(animal: T) {
  console.log(`My legs count is ${animal.legCount}`)
}


const myCat = new Cat() ;

const myKangaroo = new Kangoroo();

const myBacteria = new Bacteria();




printLegCount(myCat);

printLegCount(myKangaroo);

// printLegCount(myBacteria);
