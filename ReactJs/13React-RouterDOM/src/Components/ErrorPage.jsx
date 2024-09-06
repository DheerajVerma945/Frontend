import React from 'react'
import { useRouteError,useNavigate,NavLink } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleError = ()=>{
        navigate(-1);
    }


    return (
        <div className='flex justify-center items-center flex-col p-4'>
            <figure className='m-7'>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxgan4UFsste0Vsfg_UWxMhh7szx-H5rROg&s" alt="Error 404 Page not found" className='h-72 w-96'/>
            </figure>
            <div className="text-center">
                <p className='p-2'>
                The page you are looking for could not be found.
                </p>
            </div>
            <button onClick={handleError} className="bg-orange-600 p-2 m-3 rounded-md text-white font-mono hover:p-3" > Back to Previous Page</button>
            <NavLink to="/" className="bg-orange-600 p-2 m-3 rounded-md text-white font-mono hover:p-3">Back to home page</NavLink>
            
        </div>
    )
}

export default ErrorPage
