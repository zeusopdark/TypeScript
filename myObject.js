"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ankit",
    email: "ankit@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "ankit", isPaid: true });
function createCourse() {
    return { name: "ankit", isPaid: false };
} //return type is an object {}
createCourse();
