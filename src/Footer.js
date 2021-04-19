import React from "react";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section more">
            <h1 className="More">Keep in touch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              tenetur nostrum tempora ex cupiditate consequuntur officia maxime
              ut sapiente aut, dolore, quis aperiam quae, minima quam dolorum
              nemo obcaecati blanditiis.
            </p>
            <div className="more-contact">
              <span>
                <i className="fas fa-phone"></i> xxx-xxx-xxxx
              </span>
              <span>
                <i className="fas fa-envelope"></i>
                np03a190140@heraldcollege.edu.np
              </span>
            </div>
            <div className="social">
              <a href="http://fb.com">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="http://fb.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="http://fb.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="http://fb.com">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="http://fb.com">
                <i className="fab fa-discord"></i>
              </a>
              <a href="http://fb.com">
                <i className="fab fa-viber"></i>
              </a>
            </div>
          </div>
          <div className="footer-section result"></div>
          <div className="footer-section feedback">
            <h1>Give us feedback</h1>
            <br />
            <form action="main.html" method="post">
              <input
                type="email"
                name="email"
                className="text-input name-input"
                placeholder="Enter your Email"
                required
              />
              <br />
              <input
                type="Name"
                name="Name"
                className="text-input name-input"
                placeholder="Enter your Full name"
                required
              />
              <br />
              <input
                type="number"
                name="number"
                className="text-input name-input"
                placeholder="Enter your Phone number"
                required
              />
              <br />
              <textarea
                name="message"
                className="text-input feedback-input"
                placeholder="your Feedback"
                row="4"
                required
              ></textarea>
              <br />
              <button type="submit" className="btn">
                <i className="fas fa-envelope"></i>
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; Shermanautolink.com | Designed by Darshanman Buddhacharya
        </div>
      </div>
    </>
  );
}
export default Footer;
