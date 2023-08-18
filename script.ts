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