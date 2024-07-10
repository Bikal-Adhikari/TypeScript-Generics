function bioData<U>(arg: U): U {
  return arg;
}

console.log(bioData<string>("Test"));
console.log(bioData<number>(1));

class GenericNum<T> {
  zeroValue: T;

  constructor(zeroValue: T) {
    this.zeroValue = zeroValue;
  }
}

let obj1 = new GenericNum<number>(10);
let obj2 = new GenericNum<string>("GenericNumber");
console.log("GenericNum:", obj1.zeroValue);
console.log("GenericNum:", obj2.zeroValue);

interface lengthConstraint {
  length: number;
}

function testingForLength<T extends lengthConstraint>(arg: T): T {
  return arg;
}

interface genericObject {
  value: string;
  length: number;
}

interface type2Interface {
  color: string;
}
console.log(testingForLength<genericObject>({value:"100",length:5}));
