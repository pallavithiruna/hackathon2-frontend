import React from "react";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { githubLink, linkedinLink } from "../General/General";

function Footer() {
  return (
    <div className="footer bg-light pb-5">
      <span>
        Get in Touch for <br />
        More Beautiful Web Contents
      </span>
      <div className="external-links">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="menu-links"
        >
          <Button
            startIcon={<GitHubIcon />}
            size="large"
            color="inherit"
            className="responsive-buttons"
          />
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noreferrer"
          className="menu-links"
        >
          <Button
            startIcon={<LinkedInIcon />}
            size="large"
            color="inherit"
            className="responsive-buttons"
          />
        </a>
      </div>
      <div className="external-links copyrights">
        <div>
          Copyrights © 2024| Made by Pallavi with 😊| All Rights Reserved{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;