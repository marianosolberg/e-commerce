import React, { useEffect, useState } from 'react'
import AdminUsers from '../components/AdminUsers'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../state/users'


export default function AdminUsersContainer({ changeMode}) {
    const users = useSelector(state => state.users) 
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setUsers())
    }, [])


    return (
        <AdminUsers users={users}/>
    )
}
