interface User {
    email: String,
    userId: number,
    googleId?: string,
    startTrial(): string
}

const hitesh: User = {
    email: "ankit@gmail.com",
    userId: 22121,
    startTrial: () => { return "" }
} 