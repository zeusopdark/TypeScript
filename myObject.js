"use strict";
// const User = {
//     name: "ankit",
//     email: "ankit@gmail.com"
//     , isActive: true
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function createUser({ name: string, isPaid: boolean }) {
// }
// createUser({ name: "ankit", isPaid: true });
function createCourse() {
    return { name: "ankit", isPaid: false };
} //return type is an object {}
//so the wierd part of passing object is that when we add extra parameter which is not defined in the function than it will give the error that's really weired but now the more wierd part is that when we define a variable and which is an object and that contains all the things which we defined in the function parameter and also additionaly we added some more variable and than pass that variable while calling the function than it will not give the error this is very wierd but this is how it works.
createCourse();
var myUser = { _id: "12345", name: "ankit", email: "ankit@gmail.com", isActive: false, cardCredentials: "haha" };
myUser.email = "abc@gmail.com"; //this is allowed
var name = { first_name: "ankit", last_name: "nishad" };
