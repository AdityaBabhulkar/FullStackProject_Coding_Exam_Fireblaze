import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Button1 from 'react-bootstrap/Button';
import img1 from "../../public/login.jpg";
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post("http://localhost:5000/api/login", formData);
            alert(response.data.message);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setIsLoggedIn(true);
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="container" style={{ backgroundImage: `url(${img1})` }}>
            <div className="login-box">
                <div className="login-header">
                    <h1>Login</h1>
                </div>
                <div className="login-body">
                    <form onSubmit={handleSubmit}>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
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
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Button1 variant="primary" type="submit">Login</Button1>
                    </form>
                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;