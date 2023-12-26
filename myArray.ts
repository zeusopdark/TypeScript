const arr: string[] = []   //string type of array

arr.push("ankit") //now we can push if we define the type as string only what i mean is string[] we have to define like this

type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({ name: "ankit", isActive: false });



export { };
