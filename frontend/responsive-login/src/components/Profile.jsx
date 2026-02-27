import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <>
            <Navbar expand="lg" className="bg-dark navbar-dark mb-4">
                <Container>
                    <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/settings">Settings</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={handleLogout} style={{ color: "#ff4d4d", fontWeight: "bold" }}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="d-flex justify-content-center">
                <Card style={{ width: '100%', maxWidth: '600px' }}>
                    <Card.Header as="h5">User Profile</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>Name:</strong> {user.name || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item><strong>Email:</strong> {user.email || 'N/A'}</ListGroup.Item>
                        <ListGroup.Item><strong>Address:</strong> {user.address || 'N/A'}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Container>
        </>
    );
}

export default Profile;
