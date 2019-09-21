import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link, List } from "./styles";

const Contact = () => (
  <div>
    <div>
      <IconContext.Provider value={{ size: "50px" }}>
        <h2>Contact me!</h2>
        <List>
          <li>
            <Link
              href="https://www.linkedin.com/in/miguel-machado/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/mmCodingjs" target="_blank">
              <FaGithubSquare />
            </Link>
          </li>
        </List>
      </IconContext.Provider>
    </div>
  </div>
);

export default Contact;
