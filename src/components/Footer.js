import React from "react"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">
      Created with{" "}
      <span role="img" aria-label="love heart">
        ❤️
      </span>{" "}
      by Faizan
    </h4>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://github.com/mdfaizan7"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i class="fab fa-github fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mohammad-faizan-azim-8a84b1142/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.reddit.com/user/faizu07"
            target="_blank"
            rel="noopener noreferrer"
            className="reddit"
          >
            <i className="fab fa-reddit-alien fa-2x" />
          </a>
        </li>
      </ul>
      <h5>
        <i className="fas fa-envelope" /> faizaanazim@gmail.com
      </h5>
    </div>
  </div>
)

export default Footer
