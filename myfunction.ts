function addTwo(num: number) {
    return num + 2
}

function signUpUser(name: string, email: string, password: string) {
    return "Chutiya"
}
signUpUser("ankit", "ankitnishad400@gmial.com", "1234544")


function getVal(myVal: number): boolean | string {   //this function will either return string or number
    if (myVal > 5) {
        return true;
    }
    return "200 OK"
}
getVal(5)

addTwo(5); 