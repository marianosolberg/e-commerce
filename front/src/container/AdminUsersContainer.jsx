import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminUsers from '../components/AdminUsers'

export default function AdminUsersContainer() {
    const [usuarios, setUsuarios] = useState([]) 
    
    useEffect(() => {
        axios.get("/api/admin/users")
        .then(({data}) => setUsuarios(data))
    }, [usuarios])


    return (
        <AdminUsers usuarios={usuarios}/>
    )
}
