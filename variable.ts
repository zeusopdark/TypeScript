let greetings: string = "Ankit"

console.log(greetings);

let userId: number = 33456   //this one is not often necessary as typesript is smart enough that if we assign a number than in future we can only assign number in that variable nothing else it is not a best practice so its better that we just ignore the colon yes there is some special place where we should use like this so we will see it later.

let isLoggedIn: boolean = false

//so see this case 
//so basically i want that the hero var should only have the string but the function can return any value as what we needed to return so in this particular case we can use the colon to tell the typescript that hey only the string value should be assigned.
let hero: string;

function getHero() {
    return "thor"
}

hero = getHero()

export { };

