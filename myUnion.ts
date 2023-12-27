let score: number | string = 33  //this here tells you that score can be either string or number

score = "main nii bataooga"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let hitesh: User | Admin = { name: "hites", id: 123 }   //this example show that this user can be either User or Admin
hitesh = { username: "ankit", id: 123 }


const data: (string | number)[] = [1, 2, 3, ""]  //this will have both the string and number type of data but if you use like this is 

const data2: string[] | number[] = [1, 2, 3, 4]   //so in this particular case the array can be either complete string type of data or number kind of data both are not allowed.