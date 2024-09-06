const fullName = {
    fName:"Dheeraj",
    lName:"Verma",
    eMail:"vermadheeraj945@gmail.com"
}
const userInfo= {
    ...fullName,
    id:1,
    userName:"vermadheeraj"
}

console.log("User Info ",userInfo)