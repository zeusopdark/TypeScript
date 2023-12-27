let tUser: [string, number, boolean];
tUser = ["", 1, true]   //the order must be same like we can't suffle this array this will give the problem

//the only problem with using tuple is we can use all the array method so let's suppose i pushed something in it which is of any type than it will not give error as the protocol which we defined .
tUser.push("ankit")  //see this we can push that which is quite strange behaviour there are some article of how this work if had the time just check them out.