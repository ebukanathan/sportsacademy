
import './Footer.css'
import wollo from "../../assets/wollo.jpg"


function Footer() {
  return (
    <div className="footer">
        <div className="footer-logo"><img src={wollo} alt="" width='70' height='70' /></div>
        <div className="footer-contacts">
          <div className="footer-contacts-item"><h4>phone no</h4></div>
          <div className="footer-contacts-item"><h4>contact us</h4></div>
          <div className="footer-contacts-item"><h4>Email</h4></div>
          <div className="footer-contacts-item"><h4>About us</h4></div>
          
        </div>
        <div className="footer-socialmedia"></div>
        <div className="footer-copyright"><p>Copyright &copy; reserved created by <a href="" className="hyperlink">e.nathan</a></p></div>
    </div>
  )
}

export default Footer