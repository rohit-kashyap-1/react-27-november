import React, { useState } from 'react'
import Dashboard from './Dashboard'

//conditional rendering
export default function Homepage() {
    const [login, setLogin] = useState(true)
    const [username,setUsername]  =useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const admin_username = 'admin'
    const admin_password = 'rohit@123'
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(username===admin_username && password===admin_password){
            //ok
            setLogin(true)
            setError('')
        }else{
            setError('Username or password are incorrect!')
        }
    }

    return (
        <div className='container mt-4'>
            {(login === false) ? <div className='row'>
                <div className='col-md-4'>
                    <div className='p-4 rounded border'>
                        <h3>Login</h3>
                        <form onSubmit={handleSubmit}>
                            <input type='text' className='form-control mb-3' placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}} />
                            <input type='text' className='form-control mb-3' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
                            <div className='text-danger mb-2'>{error}</div>
                            <button className='btn btn-dark'>Login</button>
                        </form>
                    </div>
                </div>
            </div> : <Dashboard />}


        </div>
    )
}
