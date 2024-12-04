

const Footer = (props) => {
  let currDate = Date();

  return (
    <>
      <div className='bottom'>
        <footer>
          <div className='footer'>
            <h1 style={{ marginBottom: "20px", textTransform: "uppercase" }}>{props.ownerName}</h1>
            <p style={{ lineHeight: "26px" }}>{props.contant}</p>

          </div>
          <div className='footer'>
            <h1 style={{ marginBottom: "20px" }}>SOCIAL</h1>

            <ul>
              <i><a target='_blank' href='https://instagram.com/code.by.rajput?igshid=NGVhN2U2NjQ0Yg==' className='fa fa-instagram'></a></i>
              <i><a target='_blank' href='https://www.linkedin.com/in/rohit-rajput-31058125b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='fa fa-linkedin'></a></i>
              <i><a target='_blank' href='https://github.com/rohitraj-put' className='fa fa-github'></a></i>

            </ul>
            <h6><i className="fa fa-envelope-o" style={{ marginRight: "20px", marginLeft: "32px", fontSize: "20px" }}></i>rohitraj05072000@gmail.com</h6>
            <h6><i className="fa fa-map-marker" style={{ marginRight: "30px", marginLeft: "34px", fontSize: "20px" }}></i>Ghaziabad,India</h6>

          </div>
        </footer>
        <hr />
        <h6 style={{ textAlign: "center", color: "white" }}>{currDate}</h6>
        <p style={{ color: 'white', textAlign: 'center', margin: "20px 0 10px 0", textTransform: "uppercase" }}>Copyright©{new Date().getFullYear()}. Made by 🤍<a href='#'>{props.ownerName}</a></p>
      </div>
    </>
  )
}

export default Footer