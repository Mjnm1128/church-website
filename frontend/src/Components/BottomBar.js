import React from "react";
import "./BottomBar.css";
import FacebookIcon from "@material-ui/icons/Facebook";

function BottomBar() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a community church dedicated to serving God and preach the gospel in every nation.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="mailto:lwbc.nuevaecija@gmail.com">lwbc.nuevaecija@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel: 09982192200">0998 219 2200</a>
          </p>
          <p>Address: Zone 3, Nieves, San Leonardo Nueva Ecija, Philippines</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/lwbcnuevaecija/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 Living Water Baptist Church - Nueva Ecija. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default BottomBar;
