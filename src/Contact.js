import React from "react";
function Contact() {
  return (
    <>
      <div className="design">
        <div className="container6">
          <div className="box6">
            <div className="icon">
              <i className="fa fa-map"></i>
            </div>
            <div className="content6">
              <h1>Find Us</h1>
              <p>
                We are situated at Nayabazar Rd, Kathmandu.
                <br />
                In-front of SASA Banquet.
                <br />
                You can view this google map too..{" "}
                <i className="fa fa-smile-0"></i>
              </p>
              <iframe
                title="IFRAME"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8501788126387!2d85.30585331541566!3d27.721911731457915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e40594e121%3A0xf27abc6d80b6728e!2sSherman%20Auto%20Link!5e0!3m2!1sen!2snp!4v1578761180717!5m2!1sen!2snp"
                width="400"
                height="250"
                frameBorder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
          <div className="box6">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <div className="content6">
              <h1>Call Us</h1>
              <p>
                Telephone number: xxx-xxx-xxxx
                <br />
                Mobile number 1: xxx-xxx-xxxx
                <br />
                Mobile number 3: xxx-xxx-xxxx
                <br />
              </p>
              <div className="or">OR</div>
              <div className="after">find us on social media applications</div>
              <div className="socialSa">
                <a href="https://fb.com">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://fb.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://fb.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://fb.com">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://fb.com">
                  <i className="fab fa-discord"></i>
                </a>
                <a href="https://fb.com">
                  <i class="fab fa-viber"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="box6">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="content">
              <h1>E-mail Us</h1>
              <p>
                <form action="main.html" method="post">
                  <input
                    type="email"
                    name="email"
                    className="text-input name2-input"
                    placeholder="Enter your Email"
                    required
                  />
                  <br />
                  <input
                    type="Name"
                    name="Name"
                    className="text-input name2-input"
                    placeholder="Enter your Full name"
                    required
                  />
                  <br />
                  <input
                    type="number"
                    name="number"
                    className="text-input name2-input"
                    placeholder="Enter your Phone number"
                    required
                  />
                  <br />
                  <textarea
                    name="message"
                    className="text-input comment-input"
                    placeholder="Comment"
                    row="4"
                    required
                  ></textarea>
                  <br />
                  <button type="submit" className="btn">
                    <i className="fas fa-envelope"></i>
                    Send
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
