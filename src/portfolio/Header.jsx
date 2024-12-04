import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Image/logoweb.png'
import TypingAnimator from 'react-typing-animator';
import DownloadCV from '../Image/resume/resume.pdf'

const Header = (props) => {
    const textAni = ['front-end developer', 'javascript', 'react', 'RESPONSIVE design', 'web developer'];
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ position: "fixed" }}>
                <Container>
                    <img className='web-logo' style={{ width: "60px", marginRight: "10px", borderRadius: "50%" }} src={logo} alt='logoMain' />
                    <Navbar.Brand className='brand'>{props.ownerName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href='/' >Home</Nav.Link>
                            <Nav.Link href="#about" >About</Nav.Link>
                            <Nav.Link href="#skill" >Skills</Nav.Link>
                            <Nav.Link href="#project">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>

            <main>
                <div className='left'>
                    <h1 className='animate__animated animate__backInDown'>HEY, I'M {props.ownerName}
                        <TypingAnimator
                            textArray={textAni}
                            cursorColor="black"
                            textColor="black"
                            fontSize="2.5rem"
                            textTransform="uppercase"
                            loop
                            typingSpeed={30}
                            delaySpeed={1000}
                            backspace
                            height="80px"
                        />
                    </h1>
                    <p className='animate__animated animate__backInLeft'>{props.contant}</p>
                    <button class="CV_btn"><a href={DownloadCV} download="Rohit's CV" style={{ color: "white", textDecoration: "none" }} target='_blank' rel="noopener noreferrer">Download CV</a></button>
                </div>

                <div>
                    <div className='mouse'></div>
                </div>
            </main>

        </>
    )
}

export default Header