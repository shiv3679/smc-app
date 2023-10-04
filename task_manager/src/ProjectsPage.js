import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';  
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectsPage({ onNavigate }) {

    // Mock project data (replace with actual data later)
    const projects = [
        {
            name: "Scientifically Speaking",
            description: "Check out our Scientifically Speaking video and podcast!",
            youtubeEmbedLink: "https://www.youtube.com/embed/bB4BDbUaA7Q?si=xwFxLIZUj9fDWWGR",
            spotifyEmbedLink: "https://open.spotify.com/embed/show/733amJrDa6SggOoEeO5JmZ?utm_source=generator"
        }
        // ... Add more projects as needed
    ];

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
                {/* Displaying Projects */}
                <h3>Projects</h3>
                {projects.map((project, index) => (
                    <Card className="mt-4" key={index}>
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Row>
                                <Col>
                                    {/* Embed YouTube video */}
                                    <iframe title="YouTube Video" width="100%" height="315" src={project.youtubeEmbedLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </Col>
                                <Col>
                                    {/* Embed Spotify track */}
                                    <iframe title="Spotify Podcast" style={{borderRadius: "12px"}} src={project.spotifyEmbedLink} width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" allowfullscreen></iframe>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    );
}

export default ProjectsPage;
