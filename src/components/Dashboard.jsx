import React from 'react'
import Users from './Users'
import { Route, Routes } from 'react-router-dom'
import User from './User'

export default function Dashboard() {
    return (
        <div className='p-4 rounded border'>
            <h3>Dashboard</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis quibusdam recusandae. Sequi deserunt laboriosam reiciendis necessitatibus ut, aspernatur nam cum voluptas cumque cupiditate architecto, voluptate repudiandae dolor, nulla laudantium!</p>
            <hr></hr>
            <Routes>
                <Route path='/' element={<Users />} />
                <Route path='/user/:id' element={<User />} />
            </Routes>
        </div>
    )
}
