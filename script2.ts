//1.
// Zadeklaruj odpowiednie typy dla zmiennych, biorąc pod uwagę przypisywane do nich wartości
// Tam, gdzie Twoim zdaniem to zasadne, przygotuj i użyj enum.

let foo = 5;
foo = 10;
foo = null;

let bar = 'Foobar!';
bar = 'test';

let num = 5;
num = '6';
num = null;

let userRole = 'admin';
userRole = 'user';
userRole = 'moderator';

let userIsLogged = true;
userIsLogged = false;

//2.
// Zadeklaruj odpowiednie typy dla stałych, patrząc na ich zawartość.
// Możesz dodać własne typy, aby uczytelnić kod. Koniecznie zadeklaruj też enuma dla ról użytkowników.
// Uwaga: liczba elementów w tablicy arr, a także ich typy mają być w założeniu niezmienne. Weź to pod uwagę.
// Wskazówka: zauważ, że `isLogged` nie jest obecne w każdym z obiektów. Trzeba więc uznać tę właściwość za opcjonalną.
// Możesz to zrobić identycznie, jak w przypadku opcjonalnych parametrów funkcji – `isLogged?: boolean`.

const userOne = {
    login: 'user1',
    email: 'user1@gmail.com',
    age: 20,
    role: 'admin',
    isLogged: true
}

const userTwo = {
    login: 'user2',
    email: 'user2@gmail.com',
    age: 30,
    role: 'moderator'
}

const userThree = {
    login: 'user3',
    email: 'user3@gmail.com',
    age: 40,
    role: 'admin'
}

const users = [];
users.push(userOne, userTwo, userThree);

const numbers = [5, 8, '8'];

const arr = ['John', 'admin', 20];

//3.
// Skonkretyzuj deklaracje funkcji, tak aby TS wiedział, czego powinien spodziewać się po argumentach, a także jaki będzie typ zwracanej wartości.
// Dla czytelności koniecznie przygotuj najpierw typ `User` opisujący użytkownika i korzystaj z niego tam, gdzie uznasz to za stosowne.

const addUser = (login, email, age) => {
    const user = { login, email, age};
    users.push(user);
    return user;
}

const removeUser = (paramName, paramValue) => {
    const index = users.findIndex(user => user[paramName] === paramValue);
    users.splice(index, 1);
    return true;
}

const addUsers = (...users) => {
    for(const user of users) {
        addUser(user.login, user.email, user.age);
    }
}

const getUser = (paramName, paramValue) => {
    return users.find(user => user[paramName] === paramValue);
}

//4.
// Funkcja `parseField` powinna przyjmować albo tekst albo wiek. Jeśli otrzyma tekst, powinna sparsować go przy użyciu funkcji `parseEmail`.
// Jeśli liczbę, to powinna potraktować ją jako wiek i użyć funkcji `parseAge`.
// Same funkcje `parseEmail` i `parseAge` są już gotowe i nie musisz ich w żaden sposób modyfikować.
// Zadbaj jednak o to, aby skonkretyzować funkcję `parseField`. Zadeklaruj jakiego typu oczekujemy w `fieldValue`, a także co będzie zwracane.
// Dodatkowo korzystając z "type guards" (if, typeof itd.), zmodyfikuj tę funkcję tak, aby uruchamiała tylko `parseEmail` albo tylko `parseAge`.
// zależnie od tego, jaki jest typ `fieldValue` przy konkretnym wywołaniu.

const parseEmail = (val: string): string => {return val}
const parseAge = (val: number): number => {return val}

const parseField = (fieldValue) => {
    return parseEmail(fieldValue);
    return parseAge(fieldValue);
}

//5.
// Skonkretyzuj funkcję `titleClickHandler`. Zadbaj o to, aby TS wiedział iż `this` będzie w niej wskazywał na pewno na `HTMLButtonElement`.
// Upewnij go również o tym, że `inputElem` zostanie znaleziony i jest to zwykły input (`HTMLInputElement`)

const titleClickHandler = () => {
    this.addEventListener('click', () => {
        console.log('Kliknieto po operacji...');
    })
    const inputElem = document.querySelector('.input-elem');
    inputElem.value = 'Gotowe!';
}