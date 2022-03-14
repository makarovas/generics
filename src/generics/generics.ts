interface IFooBar  {
  foo: string;
  bar: string;
}


export const fooArr:  Array<IFooBar> = [
  {foo: 'one', bar: 'one'},
  {foo: 'second', bar: 'second'},
  {foo: 'third', bar: 'third'}
]





function sortByKey<T>(data: Array<T>, key: keyof T) {
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