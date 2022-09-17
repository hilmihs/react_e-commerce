import React, { useState } from 'react'
import AddButton from '../../components/AddButton'
import Header from '../../components/Header'
import ItemList from '../../containers/ItemList'
// import TodoForm from '../../components/TodoForm'
// import TodoList from '../../components/TodoList'
// import { Navigate } from "react-router-dom"
// import styles from './Todo.module.css'

// react hooks
export default function ItemBox(props) {

    // const [redirect, setRedirect] = useState(false)

    // const logout = async () => {
    //     await request.get('users/signout')
    //     localStorage.setItem('user', '')
    //     setRedirect(true)
    // }

    return (
        <React.Fragment>
            <Header />
            <AddButton />
            <ItemList />
        </React.Fragment>
    )

}