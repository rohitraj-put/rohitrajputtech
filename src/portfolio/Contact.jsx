import React, { useState, useRef, useEffect } from 'react'
import AOS from 'aos'


const Contact = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxd6u-7nqacdH8OTU8GjLL3l72eA6YI2T_3tS9XPpjx2By_6EgsTh2Sdiwg31eWYezsIg/exec"
  const [loading, setLoading] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

    }).then(res => {
      alert("“Thank you for contacting us”")
      setLoading(true)

    })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1 className='aboutme userText' id='contact' style={{ textAlign: 'center', marginBottom: '80px' }} data-aos={"zoom-in-down"}>{props.btn}</h1>
      <p className='aboutinfor' data-aos={"zoom-in-down"}>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <div className='contact' >
        <div className='login' data-aos={"flip-left"}>
          <img src={props.imgsrc} alt='techimg' />
        </div>
        <div className='login-contact' data-aos={"flip-up"}>
          <h2 style={{ textAlign: "center", marginTop: "20px", textTransform: "uppercase" }}>Get In Touch</h2>
          <form action="" method='post' id='login-form' autoComplete='off' name='google-sheet' style={{ fontFamily: "sans-serif" }} ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Enter Your Name" required />
            <input type="email" name='email' placeholder="Enter Your Email" required style={{ marginTop: '15px' }} />
            <textarea rows="7" cols="43" name='message' placeholder='Enter Your Message' style={{ marginTop: '15px', resize: "none" }}  ></textarea>
            <button className="btn-btn btn-hov" name='submit' value={loading ? "Loading..." : "SEND MESSAGE"}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact