// const User = {
//     name: "ankit",
//     email: "ankit@gmail.com"
//     , isActive: true
// }


// function createUser({ name: string, isPaid: boolean }) {

// }

// createUser({ name: "ankit", isPaid: true });

function createCourse(): { name: string, isPaid: boolean } {
    return { name: "ankit", isPaid: false }
}//return type is an object {}

//so the wierd part of passing object is that when we add extra parameter which is not defined in the function than it will give the error that's really weired but now the more wierd part is that when we define a variable and which is an object and that contains all the things which we defined in the function parameter and also additionaly we added some more variable and than pass that variable while calling the function than it will not give the error this is very wierd but this is how it works.

createCourse();


// type alias 

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// //now the type is User for the user which will have all the thing which we defined already above.
// function createUser(user: User): User {
//     return { name: "", email: "", isActive: true }
// }

// createUser({ name: "", email: "", isActive: true })

type User = {
    readonly _id: string,   //this can't be mainupulated
    name: string,
    email: string,
    isActive: boolean,
    cardCredentials?: string  //this means we can provide or we can't its up to us it is optional
}

let myUser: User = { _id: "12345", name: "ankit", email: "ankit@gmail.com", isActive: false, cardCredentials: "haha" }

myUser.email = "abc@gmail.com"  //this is allowed
// myUser._id = "djsns"   ///this will give error as _id is readonly

type first = {
    first_name: string
}
type last = {
    last_name: string
}

type username = first & last;  //we can do like this as well when we create a variable with username type than we have to make an object with the firstname and the lastname

let name: username = { first_name: "ankit", last_name: "nishad" }
export { };