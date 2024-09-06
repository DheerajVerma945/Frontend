import { useState } from 'react';
import Input from './Input.jsx'


// function updateHeader(event){
//     setName(name);
//     event.preventDefault();
// }
// setFullName( (prev) =>{
//     if(name ==="fName"){
//         return {
//             fName: value,
//             lName: prev.lName
//         }
//     }
//     else if(name === "lName"){
//         return{
//             fName:prev.fName,
//             lName:value
//         }
//     }
// })

function Login() {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFullName((prev) => {
            return {
                ...prev,
                [name]:value
            }
        });
    }
    return (
        <>
            <div className="container">
                <h1>Hello {fullName.fName} {fullName.lName}</h1>

                <p>{fullName.email}</p>
                <form action="#">
                    <Input name="fName" onChange={handleChange} type="text" placeholder="First Name" />
                    <Input name="lName" onChange={handleChange} type="text" placeholder="Last Name" />
                    <Input type="text" name="eMail" onChange={handleChange} placeholder="Enter email" />

                    <br />
                    <button type='submit' >
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}
export default Login