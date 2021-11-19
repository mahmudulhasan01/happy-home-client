import React from "react";

const Footer = () => {
  return (
    <footer id="about">
      <div className="bg-black py-5 d-flex justify-content-center d-flex align-items-center ">
        <div className="text-light">
          <i className="fab fa-facebook footer-icon me-2 fs-1 my-3"></i>
          <i className="fab fa-instagram-square footer-icon me-2 fs-1 my-3"></i>
          <i className="fab fa-twitter-square footer-icon me-2 fs-1 my-3"></i>
          <p>
            info. support. help <br />
            Terms or us. Privacy policy <br />
            <small>© 2021 Art of Living</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
