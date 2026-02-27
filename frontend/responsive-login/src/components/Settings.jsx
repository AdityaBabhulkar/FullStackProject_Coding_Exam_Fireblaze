import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Settings() {
    const navigate = useNavigate();

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
                    <Card.Body>
                        <Card.Title className="mb-4">Account Settings</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="formNotifications">
                                <Form.Check type="switch" id="custom-switch" label="Enable Notifications" defaultChecked />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDarkMode">
                                <Form.Check type="switch" id="custom-switch-2" label="Dark Mode" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formLanguage">
                                <Form.Label>Language</Form.Label>
                                <Form.Select area-label="Default select example">
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Settings;