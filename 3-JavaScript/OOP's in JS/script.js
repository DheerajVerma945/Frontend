// // let student ={
// //         fullName : "Dheeraj",
// //         marks :23,
// //         getMarks:function(){
// //             console.log("Marks are",this.marks);
// //         },
// //         greet(){
// //             console.log("Hello ,How are you ?");
// //         }
// //     }
// //     const student2= {
// //         fullName : "Nikhil",
// //         greet(){
// //             console.log("Hello ,this is updated greet.");
// //         }
// //     }
// //     student.getMarks();

// //     student2.__proto__ = student;
// //     student2.greet();
// //     student.marks.toString();


//     // Classes in JavaScript 
//     class human{
//         constructor(name){
//             this.speices = "Homo sapeins";
//             this.name = name;
//         }
//         eat(){
//             console.log("Human Eating")
//         }
//         sleep(){
//             console.log("Human sleeping");
//         }
//     }
//     class boy extends human{
//         constructor(age){
//             super();
//             this.age = age; 
//         }
//         sleep(){
//             super.eat();
//             console.log("Boys sleeping");
//         }
//     }

//     let dheeraj = new boy(21);
//     dheeraj.sleep();
//     dheeraj.eat();
//     // console.log(dheeraj.name())



    // Q1
    // class user{
    //     constructor(name,email){
    //         this.name = name;
    //         this.email = email;
    //     }
    //     viewData(){
    //         console.log("Data :")
    //         console.log("Name -",this.name);
    //         console.log("Email -",this.email);
    //     }
    // }

    // Q2
    // class admin extends user{
    //     constructor(name,email){
    //         super(name,email);
    //         this.name = name;
    //         this.email = email;
    //     }
    //     editData(name,email){
    //         super.name = name;
    //         super.email = email;
    //     }

    // }

    // let obj1 = new user("NIKHIL","nikhil54321@gmail.com");
    // obj1.viewData();
    // let admin1 = new admin("Admin1","admin1@gmial.com");
    // admin1.editData("Ashutosh","ashutosh34@gmail.com");
    // obj1.viewData();



    // Error Handling
    let a = 5;
    let b =10;
    console.log(a);
    console.log(b);
    console.log(a+b);
    try{
        console.log(c);
    }
    catch(err){
        // console.log("Error -",err);
        throw new Error("Not defined");
    }
    console.log(a-b);




