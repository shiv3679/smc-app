import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

function HomePage({ onNavigate }) {

    const mockProfileCompletion = 3;  // For now, let's say 3 out of 6 sections are filled. Replace with actual data later.

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => onNavigate('home')}>Science Media Center</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => onNavigate('home')}>Home</Nav.Link>
                        <Nav.Link onClick={() => onNavigate('projects')}>Projects</Nav.Link>
                        <Nav.Link onClick={() => onNavigate('authentication')}>Dashboard</Nav.Link>
                        <Nav.Link onClick={() => onNavigate('signup')}>Signup</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="mt-4">
                {/* Mock Progress Bar for profile completion */}
                <ProgressBar now={mockProfileCompletion} max={6} label={`${Math.round((mockProfileCompletion/6)*100)}% Profile Completed`} />
                
                {/* Add a prompt for users to complete their profile */}
                <div className="alert alert-warning mt-4">
                    Please complete your profile for a better experience!
                </div>

                {/* Notice Board */}
                <div className="alert alert-info">
                    <strong>Notice:</strong> Check out our latest updates and announcements here!
                </div>
            </Container>
        </div>
    );
}

export default HomePage;

