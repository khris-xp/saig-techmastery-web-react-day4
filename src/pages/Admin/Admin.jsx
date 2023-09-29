import axios from "axios";
import { useEffect, useState } from "react";
import './Admin.css';

export default function Admin() {
    const [user, setUser] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchUser = async () => {
        const res = await axios.get('http://localhost:8081');
        setUser(res.data)
    }

    useEffect(() => {
        fetchUser()
    }, [fetchUser])
    return (
        <div>
            <h1>Users</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user.id}>
                            <td><img src={user.profile} alt={user.name} /></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.company}</td>
                            <td>{user.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-button">
                <a href="/create-user">
                    <button className="add-user-button">Add User</button>
                </a>
            </div>
        </div>
    )
}