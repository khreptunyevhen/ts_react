var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// tsc first-app.ts - the command to convert ts to js
// ---------- Basic types string, number and boolean ----------
var userName = "Yevhen";
var userAge = 30;
var isValid = true;
// ---------- If we need to have multiple types ----------
var userID = "abc1";
userID = 123;
// ---------- Object type ----------
// let user: object;
var user;
user = {
    name: "Yevhen",
    age: 34,
    isAdmin: true,
    id: "abc", // 123
};
// ---------- Array type ----------
// let hobbies: Array<string>;
var hobbies;
// {name: string; age: number}[]
hobbies = ["Sports", "Cooking", "Reading"];
// ---------- Functions ----------
// : after parameters it means we want to implement a type for return value
// void - if we don't want return value from function
function add(a, b) {
    var result = a + b;
    console.log(result);
}
function addWithReturn(a, b) {
    var result = a + b;
    return result;
}
// Function as a parameter
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 3, addWithReturn);
function calculateWithCustomType(a, b, calcFn) {
    calcFn(a, b);
}
calculateWithCustomType(2, 3, addWithReturn);
// We can extend the interface
// interface Credentials {
//   name: string;
// }
var creds;
creds = {
    password: "password",
    email: "email@example.com",
};
// interface we can use for classes
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(redentials) { }
login(new AuthCredentials());
var admin;
admin = {
    permission: ["login"],
    userName: "Yevhen",
};
var role; // we need just "admin", "user", "editor"
// ---------- Type guards ----------
function performAction(action, role) {
    if (role === "admin") {
        // ...
    }
}
// ---------- Generic types ----------
// When one type works with another type
var roles;
roles = ["admin", "editor"];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (data) { },
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: "Yevhen" }, { age: 30 });
