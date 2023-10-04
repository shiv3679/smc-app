import React, { useState } from 'react';
import { Container, Form, Button, ProgressBar, Navbar } from 'react-bootstrap';

function SignUp({ onNavigate }) {  // Add onNavigate prop to allow navigation

    const [step, setStep] = useState(1);
    // States for each form data
    const [name, setName] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [contact, setContact] = useState('');
    const [videoEditingApp, setVideoEditingApp] = useState('');
    const [audioEditingApp, setAudioEditingApp] = useState('');
    const [contentWritingExperience, setContentWritingExperience] = useState('');
    const [socialMediaExperience, setSocialMediaExperience] = useState(false);
    const [socialMediaHandles, setSocialMediaHandles] = useState('');
    const [publicRelationsExperience, setPublicRelationsExperience] = useState('');
    const [graphicsDesigningSkills, setGraphicsDesigningSkills] = useState('');

    const skipToLastStep = () => {
        setStep(6);
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Registration Number</Form.Label>
                            <Form.Control type="text" value={regNumber} onChange={(e) => setRegNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="tel" value={contact} onChange={(e) => setContact(e.target.value)} />
                        </Form.Group>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Form.Label>Video Editing App</Form.Label>
                        <Form.Control as="select" value={videoEditingApp} onChange={(e) => setVideoEditingApp(e.target.value)}>
                            <option>DaVinci</option>
                            <option>Premiere Pro</option>
                            <option>VegasPro</option>
                            <option>Filmora</option>
                            <option>FinalCut</option>
                            <option>None</option>
                            <option>Other</option>
                        </Form.Control>
                        <Form.Label>Audio Editing App</Form.Label>
                        <Form.Control as="select" value={audioEditingApp} onChange={(e) => setAudioEditingApp(e.target.value)}>
                            <option>FLstudio</option>
                            <option>Audacity</option>
                            <option>Reaper</option>
                            <option>None</option>
                            <option>Other</option>
                        </Form.Control>
                    </div>
                );
            case 3:
                return (
                    <Form.Group>
                        <Form.Label>Content Writing Experience</Form.Label>
                        <Form.Control as="textarea" rows={3} maxLength={100} value={contentWritingExperience} onChange={(e) => setContentWritingExperience(e.target.value)} />
                    </Form.Group>
                );
            case 4:
                return (
                    <div>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Have Social Media Handling Experience?"
                            checked={socialMediaExperience}
                            onChange={(e) => setSocialMediaExperience(e.target.checked)}
                        />
                        {socialMediaExperience && (
                            <Form.Group>
                                <Form.Label>Social Media Handles Managed</Form.Label>
                                <Form.Control type="text" value={socialMediaHandles} onChange={(e) => setSocialMediaHandles(e.target.value)} placeholder="E.g., YouTube, Instagram, Facebook" />
                            </Form.Group>
                        )}
                    </div>
                );
            case 5:
                return (
                    <Form.Group>
                        <Form.Label>Public Relations - Hosting and Outreach Activities</Form.Label>
                        <Form.Control as="textarea" rows={3} value={publicRelationsExperience} onChange={(e) => setPublicRelationsExperience(e.target.value)} />
                    </Form.Group>
                );
            case 6:
                return (
                    <Form.Group>
                        <Form.Label>Graphics Designing Skills</Form.Label>
                        <Form.Control as="textarea" rows={3} value={graphicsDesigningSkills} onChange={(e) => setGraphicsDesigningSkills(e.target.value)} />
                    </Form.Group>
                );
            default:
                return null;
        }
        
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => onNavigate('home')}>Science Media Center</Navbar.Brand> 
                    {/* Added onNavigate function on clicking the brand */}
                </Container>
            </Navbar>
            <Container className="mt-4">
                <h2>Sign Up</h2>
                <ProgressBar now={step} max={6} label={`${step}/6`} />
                {renderStep()}   {/* <-- This line will render the fields for the current step */}
                <div className="d-flex justify-content-between mt-4">
                    {step > 1 && <Button variant="secondary" onClick={() => setStep(step - 1)}>Previous</Button>}
                    {step < 6 ? <Button variant="primary" onClick={() => setStep(step + 1)}>Next</Button> : <Button variant="success" onClick={() => { /* Submit the form */ }}>Finish</Button>}
                    {step < 6 && <Button variant="outline-danger" onClick={skipToLastStep}>Skip</Button>}
                </div>
            </Container>
        </div>
    );
}

export default SignUp;
