import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import section1 from '../../public/section1.webp'
import section2 from '../../public/section2.webp'
import section3 from '../../public/section3.jpg'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <>
            <Navbar expand="lg" className="bg-dark navbar-dark mb-4" fixed="top">
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

            <Container>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <Container fluid>
                        <h1 className="display-5 fw-bold">Welcome, {user.name || 'User'}!</h1>
                        <p className="col-md-8 fs-4">
                            This is your dashboard. You can navigate to your profile or settings using the navbar above.
                        </p>
                    </Container>
                </div>

                <Row>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Users</Card.Title>
                                <Card.Text>
                                    Manage your users and their permissions here.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Analytics</Card.Title>
                                <Card.Text>
                                    View system performance and user activity.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Reports</Card.Title>
                                <Card.Text>
                                    Generate and download system reports.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <hr className="my-5" />

                <Row className="mb-5 align-items-center">
                    <Col md={7}>
                        <h2 className="featurette-heading">Recent Activity. <span className="text-muted">Check what's happening.</span></h2>
                        <p className="lead">Stay updated with the latest changes and user activities in your system. Monitor logins, updates, and new registrations in real-time.</p>
                    </Col>
                    <Col md={5}>
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={section1} alt="Activity Chart" />
                    </Col>
                </Row>

                <hr className="featurette-divider my-5" />

                <Row className="mb-5 align-items-center">
                    <Col md={7} className="order-md-2">
                        <h2 className="featurette-heading">Project Overview. <span className="text-muted">See the big picture.</span></h2>
                        <p className="lead">Track the progress of your ongoing projects. Visualize milestones, deadlines, and team contributions effectively.</p>
                    </Col>
                    <Col md={5} className="order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={section3} alt="Project Overview" />
                    </Col>
                </Row>

                <hr className="featurette-divider my-5" />

                <Row className="mb-5 align-items-center">
                    <Col md={7}>
                        <h2 className="featurette-heading">Team Collaboration. <span className="text-muted">Work together seamlessly.</span></h2>
                        <p className="lead">Foster better communication and collaboration among your team members. Share files, discuss ideas, and achieve goals together.</p>
                    </Col>
                    <Col md={5}>
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={section2} alt="Team Collaboration" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;