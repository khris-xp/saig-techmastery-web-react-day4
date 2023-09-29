import axios from "axios";
import { useState } from "react";
import './CreateUser.css';

export default function CreateUser() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        profile: "",
        position: "",
        company: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081', formData);
            console.log(response.data);
        } catch (error) {
            console.error("Error creating user: ", error);
        }
    };

    return (
        <div className="create-user-container">
            <h1>Create User</h1>
            <form onSubmit={handleSubmit} className="user-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="profile">Profile:</label>
                    <input
                        type="text"
                        id="profile"
                        name="profile"
                        value={formData.profile}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Create User</button>
            </form>
        </div>
    );
}
