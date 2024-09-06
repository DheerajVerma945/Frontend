import Input from './Input.jsx'

function Register(props){
    return (
        <>
            <div className="container">
                <h1 >Hello </h1>
                <form action="#">
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
                <br />
                <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}
export default Register