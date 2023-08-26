// {
//   const persons = [];

//   function addPerson(firstName, lastName, age) {
//     const name = firstName + lastName;
//     persons.push(name + ', ' + age);
//   }

//   let firstName = 'John';
//   let lastName = 'Doe';
//   let age = 18;

//   const person = {
//     firstName,
//     lastName,
//     age
//   }

//   addPerson(person.firstName, person.lastName);
//   addPerson('Amanda', 'Doe', 21);
//   addPerson('Thomas', 'Jefferson', 22);
// }
{
  const persons: string[] = [];

  function addPerson(firstName: string, lastName: string, age: number) {
    const name: string = firstName + lastName;
    persons.push(name + ', ' + age);
  }

  let firstName: string = 'John';
  let lastName: string = 'Doe';
  let age: number = 18;

  const person: {
    firstName: string;
    lastName: string;
    age: number;
  } = {
    firstName,
    lastName,
    age
  };

  addPerson(person.firstName, person.lastName, age);
  addPerson('Amanda', 'Doe', 21);
  addPerson('Thomas', 'Jefferson', 22);
}
// {
//   const JohnDoe = {
//     id: 1,
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 1
//   }
//   const AmandaDoe = {
//     id: 2,
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 2
//   }
//   const ThomasJefferson = {
//     id: 'rwe5345sfst3453543',
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 3
//   }

//   const names = [JohnDoe.firstName, AmandaDoe.firstName, ThomasJefferson.firstName];
//   const JohnDoeSummary = [JohnDoe.firstName, JohnDoe.lastName, JohnDoe.role];
// }
{
  enum Roles {
    Admin,
    Moderator,
    User
  };

  const JohnDoe: {
    id: string | number;
    firstName: string;
    lastName: string;
    role: Roles;
  } = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    role: Roles.Admin
  };
  const AmandaDoe: {
    id: string | number;
    firstName: string;
    lastName: string;
    role: Roles;
  } = {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    role: Roles.Moderator
  };
  const ThomasJefferson: {
    id: string | number;
    firstName: string;
    lastName: string;
    role: Roles;
  } = {
    id: 'rwe5345sfst3453543',
    firstName: 'John',
    lastName: 'Doe',
    role: Roles.User
  };

  const names: [
    string,
    string,
    string
  ] = [
    JohnDoe.firstName,
    AmandaDoe.firstName,
    ThomasJefferson.firstName
  ];

  const JohnDoeSummary: [
    string,
    string,
    Roles
  ] = [
    JohnDoe.firstName,
    JohnDoe.lastName,
    JohnDoe.role
  ];
}
// {
//   function join(valOne, valTwo) {
//     return valOne + valTwo;
//   }
  
//   const one = join('John', 'Doe'); // should return JohnDoe
//   const two = join(5, 6); // should return 11
//   const three = join(5, '5'); // should return false
// }
{
  function join(valOne: number | string, valTwo: number | string) {
    if(typeof valOne === 'number' && typeof valTwo === 'number')
      return (valOne + valTwo);
    else(typeof valOne === 'string' && typeof valTwo === 'string')
      return (valOne.toString() + valTwo.toString());
    return false;
  }
  
  const one = join('John', 'Doe'); // should return JohnDoe
  const two = join(5, 6); // should return 11
  const three = join(5, '5'); // should return false
}
// {
//   const permissions = {
//     admin: 'rwx',
//     moderator: 'rw',
//     user: 'r'
//   }

//   function checkRolePermissions(role) {
//     renderRoleDesc(permissions[role])
//   }
// }
// {
//   const permissions = {
//     admin: 'rwx',
//     moderator: 'rw',
//     user: 'r'
//   };
  
//   function checkRolePermissions(role: 'admin' | 'moderator' | 'user') {
//     renderRoleDesc(permissions[role]);
//   }
// }
{
  let test: any = 'foo';
  test.push('a');
  test.method();
  const bar: number = test;
}
// {
//   let test: unknown = 'foo';
//   test.push('a');
//   test.method();
//   const bar: number = test;
// }
// {
//   function sum(x: number, y: number): number {
//     return x + y;
//   }

//   const sum = function(x: number, y: number): number {
//     return x + y;
//   }

//   function sum(x: number, y: number): number {
//     return x + y;
//   }

//   const num: number = sum(5, 6);
// }
// {
//   function sum(x: number, y: number): number {
//     return x + y;
//   }
  
//   sum(5, 6); // O
//   sum(5); // X
//   sum(5, 7, 8); // X

//   function sum(x: number, y?: number): number {
//     return x + y;
//   }
  
//   sum(5, 6); // O
//   sum(5); // O
//   sum(5, 7, 8); // X

//   const sum = (x: number, y?: number): number => {
//     return x + y;
//   }
  
//   sum(5, 6) // O
//   sum(5) // O
//   sum(5, 7, 8) // X
// }
// {
//   function showMyName(name) {
//     console.log(name);
//   }
  
//   showMyName('John');
  
//   function square(a) {
//     return a * a;
//   }
  
//   square(10);
  
//   function sum(title, ...numbers) {
//     return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0);
//   }
  
//   sum('Numbers', 1, 6, 10);
  
//   const executeFunc = func => {
//     const title = 'Lorem Ipsum';
//     func(title, 24, ['Sport', 'Movies']);
//   }
  
//   executeFunc((title, age, hobbies) => {return true});
// }
{
  function showMyName(name: string): never {
    console.log(name);
  }
  
  showMyName('John');
  
  function square(a: number): number {
    return (a * a);
  }
  
  square(10);
  
  function sum(title: string, ...numbers: number[]): string {
    return (title + ' = ' + numbers.reduce((sum, num) => sum + num, 0));
  }
  
  sum('Numbers', 1, 6, 10);
  
  const executeFunc = (func: (title: string, age: string, hobbies: string) => boolean): never => {
    const title = 'Lorem Ipsum';
    func(title, 24, ['Sport', 'Movies']);
  }
  
  executeFunc((title: string, age: number, hobbies: string[]): boolean => {
    return (true);
  });
}
// {
//   function showUser(role: 'admin' | 'moderator' | 'user', name: 'Amanda' | 'John') {
//     ...
//   }
// }
{
  type userRole = 'admin' | 'moderator' | 'user';
  type userName = 'Amanda' | 'John';

  function showUser(role: userRole, name: userName) {
    // ...
  }
}
{
  type miltons = 'John' | 'Amanda';
  type clarks = 'Emilia' | 'Thomas';

  type names = miltons | clarks;

  let nameOne: names = 'John'; // O
  let nameTwo: names = 'Emilia'; // O
  let nameThree: names = 'Adam'; // X

  type stringNum = string | number;
  type names = stringNum & ('Foo' | 'Bar' | 12);

  let one: names = 'Foo'; // O
  let two: names = 'Bar'; // O
  let three: names = 'Adam'; // X
  let four: names = 12; // O
}
// {
//   let foo: string | number | boolean;
//   foo = 'bar';
//   foo = 12;
//   foo = false;

//   const bar: number = 12;

//   function baz(param: string): string | number | boolean {
//     return param;
//   }
// }
{
  type fooType = string | number | boolean;
  let foo: fooType;
  foo = 'bar';
  foo = 12;
  foo = false;
  
  const bar = 12;
  
  type bazType = string | number | boolean;
  function baz(param: string): bazType {
    return param;
  }
}
// {
//   type Person = {
//     firstName: string;
//     lastName: string;
//     age: number;
//   }
  
//   const per: Person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25
//   }
  
//   function showParam(param: 'firstName' | 'lastName' | 'age'): string | number {
//     return per[param];
//   }
  
//   let age = showParam('age');
//   let firstName = showParam('firstName');
// }
{
  type Person = {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  const per: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
  }
  
  type paramType = 'firstName' | 'lastName' | 'age';
  type paramReturnType = string | number;
  
  function showParam(param: paramType): paramReturnType {
    return per[param];
  }
  
  let age: number = <number> showParam('age');
  let firstName: string = <string> showParam('firstName');
}
{
  function convertToString(value: string | number | []): string {
    if(typeof value === 'string')
      return value;
    else if(typeof value === 'object' && Array.isArray(value))
      return value.join(', ');
    return value.toString();
  }
}
{
  function convertToString(value: string | number | []): string {
    if(typeof value === 'string') return value
    else if(typeof value === 'object' && Array.isArray(value)) return value.join(', ')
    else return value.toString();
  }
}
{
  class Foo {
    foo = 123;
    common = '123';
  }

  class Bar {
    bar = 123;
    common = '123';
  }

  function doStuff(arg: Foo | Bar) {
    if(arg instanceof Foo) {
      console.log(arg.foo); // OK
      console.log(arg.bar); // Error!
    }
    if(arg instanceof Bar) {
      console.log(arg.foo); // Error!
      console.log(arg.bar); // OK
    }

    console.log(arg.common); // OK
    console.log(arg.foo); // Error!
    console.log(arg.bar); // Error!
  }

  doStuff(new Foo());
  doStuff(new Bar());
}
{
  function setAnswer(answer: 'yes' | 'no' | 'idk') {
    if(answer === 'yes')
      user.positives++;
    else if(answer === 'no')
      user.negatives--;
    else
      console.log('Pick one...');
  }
}
{
  interface Person {
    age: number;
    firstName: string
  }

  const personOne: Person = {
    age: 18,
    firstName: 'John'
  }
  const personTwo: Person = {
    age: 28,
    firstName: 'Amanda'
  }

  function showPerson(person: Person) {
    console.log(person.age, person.firstName)
  }
  
  showPerson({
    age: 18,
    firstName: 'John'
  })
}
{
  interface Person {
    age: number;
    firstName: string;
    [propName: string]: any;
  }

  const personOne: Person = {
    age: 12,
    firstName: 'John'
  }
  const personTwo: Person = {
    age: 28,
    firstName: 'Amanda',
    test: 'abc',
    lastName: 'test'
  }
}
{
  interface Person {
    readonly age: number;
    readonly firstName: string
  }
  
  const personOne: Person = {
    age: 18,
    firstName: 'John',
  }
  
  personOne.firstName = 'Amanda' // error
}
{
  interface SetValueFunc {
    (param: string, value: string): boolean;
  }
  
  const setPersonParam: SetValueFunc = (param: string, value: string): boolean => {
    console.log('Param to set: ', param, 'Value to set', value);
    return true;
  }
  
  const setUserParam: SetValueFunc = (param: string, value: string): boolean => {
    console.log('Param to set: ', param, 'Value to set', value);
    return true;
  }
  
  setPersonParam('name', 'Amanda');
}
{
  interface NumArr {
    [index:number]: number
  }

const numbers: NumArr = [1, 2, 3];
const numbersTwo: NumArr = [3, 4, 9];
}
// {
//   const JohnDoe: {
//     name: string;
//     score: number;
//     inGame: boolean;
//   } = {
//     name: 'JohnDoeey',
//     score: 25,
//     inGame: true
//   }

//   const KatieDownson: {
//     name: string;
//     score: number;
//     inGame: boolean;
//   } = {
//     name: 'Kate98',
//     score: 24,
//     inGame: true
//   }

//   const ThomasBanes: {
//     name: string;
//     score: null;
//     inGame: boolean;
//   } = {
//     name: 'Kate98',
//     score: null,
//     inGame: false
//   }
// }
{
  interface Player {
    name: string;
    score: number | null;
    inGame: boolean;
  }

  const JohnDoe: Player = {
    name: 'JohnDoeey',
    score: 25,
    inGame: true
  }
  const KatieDownson: Player = {
    name: 'Kate98',
    score: 24,
    inGame: true
  }
  const ThomasBanes: Player = {
    name: 'Kate98',
    score: null,
    inGame: false
  }
}
// {
//   const showData = function(data) {
//     console.log(data)
//   }
  
//   const numbers = [1, 2, 3];
//   const numbersAndString = ['John', 4, 'Amanda'];
  
//   showData(numbers);
//   showData(numbersAndString);
// }
{
  interface DataFunc {
    (data: DataArray): void
  }
  
  interface DataArray {
    [index: number]: string | number;
  }
  
  const showData: DataFunc = function(data: DataArray): void {
    console.log(data)
  }
  
  const numbers: DataArray = [1, 2, 3];
  const numbersAndString: DataArray = ['John', 4, 'Amanda'];
  
  showData(numbers);
  showData(numbersAndString);
}
{
  interface Person {
    firstName: string;
    lastName: string;
    age: number
  }

  interface Employee extends Person {
    department: string;
  }

  const JohnDoe: Employee = {
    firstName = 'John',
    lastName = 'Doe',
    age = 22,
    department = 'IT'
  }
}
{
  interface Car {
    topSpeed: number;
    acceleration: number;
    engine: number;
    price: number
  }
  
  interface ModelT extends Car {}
  
  interface ModelE extends Car {
    sunRoof: boolean
  }
  
  const CarOne: ModelT = {
    topSpeed: 220,
    acceleration: 8,
    engine: 120,
    price: 200000
  }
  
  const CarTwo = {} as ModelE;
  CarTwo.topSpeed = 220;
  CarTwo.acceleration = 8;
  CarTwo.engine = 120;
  CarTwo.price = 200000;
  CarTwo.sunRoof = true;
}
// {
//   function Foo() {
//     this.bar = 'baz';
//   }
  
//   const obj = new Foo();
//   console.log(obj);
// }
{
  class Foo {
    constructor() {
      this.bar = 'baz';
    }
  }
  
  const obj = new Foo();
  console.log(obj);
}
// {
//   class Car {
//     model: string;
//     maxSpeed: number;
//     engine: number;
  
//     constructor(model: string) {
//       this.model = '--' + model + '--';
//       this.maxSpeed = 100;
//       this.engine = 120;
//     }
  
//     formatSpeed(value: number): string {
//       return value + 'km/h';
//     }
  
//     getCarInfo(): string {
//       return (
//         'Car info: '
//         + this.model
//         + ', '
//         + this.formatSpeed(this.maxSpeed)
//         + ', engine: '
//         + this.engine
//       );
//     }
//   }
// }
{
  class Car {
    private model: string;
    private maxSpeed: number;
    private engine: number;

    constructor(model: string) {
      this.model = model;
      this.maxSpeed = 100;
      this.engine = 120;
    }

    private formatSpeed(value: number): string {
      return value + 'km/h';
    }

    public getCarInfo(): string {
      return (
        'Car info: '
        + this.model
        + ', '
        + this.formatSpeed(this.maxSpeed)
        + ', engine: '
        + this.engine
      );
    }
  }

  const obj = new Car('Bolt II');
  obj.model = 'Bolt III'; // error
  obj.getCarInfo(); // OK
  obj.formatSpeed(120); // error
}
{
  class Parent {
    protected name: string = 'John';
  }

  class Child extends Parent {
    constructor() {
      super();
      console.log(this.name); // John
    }
  }

  const obj = new Child();
  obj.name = 'Amanda';
}
{
  class Car {
    private readonly model: string;
    public readonly maxSpeed: number;

    constructor(model: string) {
      this.model = model; // ok
      this.model = 'abc'; // not okay! It's readonly after first declaration
    }
  }
}
{
  class MathSet {
    static pi: number = 3.14;

    static calculateCircle(radius:number) {
      return this.pi * radius * radius;
    }
  }

  MathSet.pi; // returns 3.14
  MathSet.calculateCircle(2); // returns 12.56
}
{
  class MathSet {
    static pi: number = 3.14;
    public foo: string = 'bar';

    static calculateCircle(radius:number) {
      return this.pi * radius * radius;
    }
  }

  MathSet.pi; // returns 3.14
  MathSet.calculateCircle(2); // returns 12.56
  MathSet.foo; // Property 'foo' does not exist on type 'typeof MathSet'
}
{
  get name (): string {
    return this._name;
  }
  
  set name (name: string) {
    this._name = name;
  }
}
// {
//   abstract class Car {
//     constructor(private model: string) {
//       this.model = model; //ok
//     }
//   }
  
//   class SportCar extends Car {
//     private maxSpeed: number;
  
//     constructor(model: string) {
//       super(model);
//       this.maxSpeed = 100;
//     }
//   }
  
//   const objOne = new SportCar('Bolt II'); // OK!
//   const objTwo = new Car('Bolt II'); // error!
// }
{
  abstract class Car {
    constructor(private model: string) {
      this.model = model; //ok
    }
  
    abstract showCarSpeed(): number;
  }
  
  class SportCar extends Car {
    private maxSpeed: number;
  
    constructor(model: string) {
      super(model);
      this.maxSpeed = 100;
    }
  
    showCarSpeed() {
      return this.maxSpeed;
    }
  }
  
  const objOne = new SportCar('Bolt II'); // OK!
}
{
  interface CarInterface {
    foo: string;
    getCarInfo(): string;
  }
  
  class Car implements CarInterface {
    public foo: string = 'bar';
    private model: string;
    private maxSpeed: number;
    private engine: number;
  
    constructor(model: string) {
      this.model = model;
      this.maxSpeed = 100;
      this.engine = 120;
    }
  
    private formatSpeed(value: number): string {
      return value + 'km/h';
    }
  
    public getCarInfo(): string {
      return (
        'Car info: '
        + this.model
        + ', '
        + this.formatSpeed(this.maxSpeed)
        + ', engine: '
        + this.engine
      );
    }
  }
}
{
  interface User {
    name: string;
  }
  
  interface Player {
    score: number;
  }
  
  const JohnDoe: Player & User = {
    name: 'John',
    score: 5
  }
}
{
  interface TestInterface {
    test: string;
  }
  
  interface CarInterface {
    foo: string;
    getCarInfo(): string;
  }
  
  class Car implements CarInterface, TestInterface {
    test: string = 'test';
  }
}
// {
//   interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     gender?: 'M' | 'F';
//   }

//   const JohnDoe: Person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25
//   }

//   const AmandaDoe: Person = {
//     firstName: 'Amanda',
//     lastName: 'Doe',
//     age: 31,
//     gender: 'F'
//   }
// }
{
  type Person = {
    firstName: string;
    lastName: string;
    age: number;
    gender?: 'M' | 'F';
  }

  const JohnDoe: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
  }

  const AmandaDoe: Person = {
    firstName: 'Amanda',
    lastName: 'Doe',
    age: 31,
    gender: 'F'
  }
}
{
  type Person = string;
  const per: Person = 'John Doe';

  type Person = 'John' | 'Amanda';
  const per: Person = 'John';

  //

  interface Person {
    firstName: string;
  }

  interface Person {
    lastName: string;
  }

  const per: Person = {
    firstName: 'John',
    lastName: "Doe"
  }

  //

  type setParam = (param: string, value: string | number) => void;

  interface setParam {
    (param: string, value: string | number): void;
  }
}