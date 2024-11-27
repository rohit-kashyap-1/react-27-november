import React, { useEffect, useState } from 'react'
import loadingIcon from '../images/1495.gif'
import { Link } from 'react-router-dom'

export default function Users() {
    const [todos, setTodos] = useState([])

    useEffect(function () {
        setTimeout(function () {
            fetch('https://dummyjson.com/todos').then(response => response.json()).then((data) => {
                setTodos(data.todos)

            })
        }, 1000)
    }, [])
    //https://dummyjson.com/todos
    return (
        <div>
            {(todos.length !== 0) ? <div>
                <h4>Todos</h4>
                <div className='row'>
                    {todos.map((item,index) => {
                        return <div key={index} className='col-md-4 mb-3'>
                                    <Link to={'/user/'+item.id} className='border p-4 rounded d-block nav-link'>
                                        <h5 className='mb-0'>{item.todo}</h5>
                                    </Link>
                                </div>
                    })}
                </div>
            </div> : <img src={loadingIcon} />}
        </div>
    )
}
