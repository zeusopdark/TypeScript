const User = {
    name: "ankit",
    email: "ankit@gmail.com"
    , isActive: true
}


// function createUser({ name: string, isPaid: boolean }) {

// }

// createUser({ name: "ankit", isPaid: true });

function createCourse(): { name: string, isPaid: boolean } {
    return { name: "ankit", isPaid: false }
}//return type is an object {}

//so the wierd part of passing object is that when we add extra parameter which is not defined in the function than it will give the error that's really weired but now the more wierd part is that when we define a variable and which is an object and that contains all the things which we defined in the function parameter and also additionaly we added some more variable and than pass that variable while calling the function than it will not give the error this is very wierd but this is how it works.

createCourse();


// type alias 

type User = {
    name: string,
    email: string,
    isActive: boolean
}

//now the type is User for the user which will have all the thing which we defined already above.
function createUser(user: User): User {
    return { name: "", email: "", isActive: true }
}

createUser({ name: "", email: "", isActive: true })

export { };