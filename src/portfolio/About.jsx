import React, { useEffect } from 'react'
import AOS from 'aos'

const About = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <>
            <div className='about' id='about' >
                <h1 className='aboutme userText' style={{ textAlign: 'center', marginBottom: '80px' }} data-aos={"zoom-in-down"}>ABOUT ME</h1>
                <p className='aboutinfor' data-aos={"zoom-in-down"}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                <div className='mainabout'>

                    <div className='matterabout' data-aos={"zoom-in-down"}>
                        <h1>Get to know me!</h1>
                        <p style={{ marginTop: "30px", lineHeight: "30px", fontSize: "18px", textAlign: 'justify' }}>I'm a <strong>Frontend Developer</strong> at <strong>Namrata Universal</strong>  building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br /><br />

                            I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a target='_blank' href='https://www.linkedin.com/in/rohit-rajput-31058125b'>Linkedin</a> where I post useful content related to Web Development and Programming.<br /><br />

                            I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience.</p>
                        <button className='btn-contact btn-bg btn-hov'><a style={{ color: "white", textDecoration: "none" }} href='#contact'>{props.btn}</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About