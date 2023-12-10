// tsc first-app.ts - the command to convert ts to js
// ---------- Basic types string, number and boolean ----------
let userName: string = "Yevhen";
let userAge: number = 30;
let isValid: boolean = true;

// ---------- If we need to have multiple types ----------
let userID: string | number = "abc1";
userID = 123;

// ---------- Object type ----------
// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: "Yevhen",
  age: 34,
  isAdmin: true,
  id: "abc", // 123
};

// ---------- Array type ----------
// let hobbies: Array<string>;
let hobbies: string[];

// {name: string; age: number}[]

hobbies = ["Sports", "Cooking", "Reading"];

// ---------- Functions ----------
// : after parameters it means we want to implement a type for return value
// void - if we don't want return value from function
function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

function addWithReturn(a: number, b: number): number {
  const result = a + b;
  return result;
}

// Function as a parameter
function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}

calculate(2, 3, addWithReturn);

// ---------- Custom types ----------
type AddFn = (a: number, b: number) => number;

function calculateWithCustomType(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculateWithCustomType(2, 3, addWithReturn);

// ---------- Interface essentially for object types ----------
interface Credentials {
  password: string;
  email: string;
}

// We can extend the interface
// interface Credentials {
//   name: string;
// }

let creds: Credentials;

creds = {
  password: "password",
  email: "email@example.com",
};

// interface we can use for classes
class AuthCredentials implements Credentials {
  // At least we have to use key-values from interface
  password: string;
  email: string;
  // Also we can add additional key-values
  name: string;
}

function login(redentials: Credentials) {}

login(new AuthCredentials());

// ---------- Merging types ----------
type Admin = {
  permission: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
  permission: ["login"],
  userName: "Yevhen",
};

// ---------- Literal types ----------
type Role = "admin" | "user" | "editor";
let role: Role; // we need just "admin", "user", "editor"

// ---------- Type guards ----------
function performAction(action: string, role: Role) {
  if (role === "admin") {
    // ...
  }
}

// ---------- Generic types ----------
// When one type works with another type
let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<AppUser> = {
  storage: [],
  add(data) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Yevhen" },
  { age: 30 }
);
