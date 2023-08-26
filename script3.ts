//1.
// Zadeklaruj odpowiednie typy dla zmiennych, biorąc pod uwagę przypisywane do nich wartości
// Tam, gdzie Twoim zdaniem to zasadne, przygotuj i użyj enum.

let foo: number | null = 5;
foo = 10;
foo = null;

let bar: string = 'Foobar!';
bar = 'test';

let num: number | string | null = 5;
num = '6';
num = null

enum Roles {
    admin = 'admin',
    moderator = 'moderator',
    user = 'user'
}

let userRole: Roles = Roles.admin;
userRole = Roles.user;
userRole = Roles.moderator;

let userIsLogged: boolean = true;
userIsLogged = false;

//2.
// Zadeklaruj odpowiednie typy dla stałych, patrząc na ich zawartość.
// Możesz dodać własne typy, aby uczytelnić kod. Koniecznie zadeklaruj też enuma dla ról użytkowników.
// Uwaga: liczba elementów w tablicy arr, a także ich typy mają być w założeniu niezmienne. Weź to pod uwagę.
// Wskazówka: zauważ, że `isLogged` nie jest obecne w każdym z obiektów. Trzeba więc uznać tę właściwość za opcjonalną.
// Możesz to zrobić identycznie, jak w przypadku opcjonalnych parametrów funkcji – `isLogged?: boolean`.

type User = {
    login: string;
    email: string;
    age: number;
    role?: Roles;
    isLogged?: boolean;
}

const userOne: User = {
    login: 'user1',
    email: 'user1@gmail.com',
    age: 20,
    role: Roles.admin,
    isLogged: true
}

const userTwo: User = {
    login: 'user2',
    email: 'user2@gmail.com',
    age: 30,
    role: Roles.moderator
}

const userThree: User = {
    login: 'user3',
    email: 'user3@gmail.com',
    age: 40,
    role: Roles.admin
}

const users: User[] = [];
users.push(userOne, userTwo, userThree);

const numbers: (number | string)[] = [5, 8, '8'];

const arr: (number | string)[] = ['John', 'admin', 20];

//3.
// Skonkretyzuj deklaracje funkcji, tak aby TS wiedział, czego powinien spodziewać się po argumentach, a także jaki będzie typ zwracanej wartości.
// Dla czytelności koniecznie przygotuj najpierw typ `User` opisujący użytkownika i korzystaj z niego tam, gdzie uznasz to za stosowne.

const addUser = (login: string, email: string, age: number): User => {
    const user: User = {login, email, age};
    users.push(user);
    return user;
}

const removeUser = (paramName: keyof User, paramValue: number): boolean => {
    const index: number = users.findIndex(user => user[paramName] === paramValue) as number;
    users.splice(index, 1);
    return true;
}

const addUsers = (...users: User[]): void => {
    for(const user of users) {
        addUser(user.login, user.email, user.age);
    }
}

const getUser = (paramName: keyof User, paramValue: number): User => {
    return users.find(user => user[paramName] === paramValue) as User;
}

//4.
// Funkcja `parseField` powinna przyjmować albo tekst albo wiek. Jeśli otrzyma tekst, powinna sparsować go przy użyciu funkcji `parseEmail`.
// Jeśli liczbę, to powinna potraktować ją jako wiek i użyć funkcji `parseAge`.
// Same funkcje `parseEmail` i `parseAge` są już gotowe i nie musisz ich w żaden sposób modyfikować.
// Zadbaj jednak o to, aby skonkretyzować funkcję `parseField`. Zadeklaruj jakiego typu oczekujemy w `fieldValue`, a także co będzie zwracane.
// Dodatkowo korzystając z "type guards" (if, typeof itd.), zmodyfikuj tę funkcję tak, aby uruchamiała tylko `parseEmail` albo tylko `parseAge`.
// zależnie od tego, jaki jest typ `fieldValue` przy konkretnym wywołaniu.

type StringNumNull = string | number | null;
const parseEmail = (val: string): string => {return val}
const parseAge = (val: number): number => {return val}

const parseField = (fieldValue: string | number): StringNumNull => {
    if(typeof fieldValue === 'string')
        return parseEmail(fieldValue);
    else if(typeof fieldValue === 'number')
        return parseAge(fieldValue);
    return null;
}

//5.
// Skonkretyzuj funkcję `titleClickHandler`. Zadbaj o to, aby TS wiedział iż `this` będzie w niej wskazywał na pewno na `HTMLButtonElement`.
// Upewnij go również o tym, że `inputElem` zostanie znaleziony i jest to zwykły input (`HTMLInputElement`)

const titleClickHandler = (): void => {
    this.addEventListener('click', () => {
        console.log('Kliknieto po operacji...');
    })
    const inputElem = document.querySelector('.input-elem') as HTMLInputElement;
    inputElem.value = 'Gotowe!';
}