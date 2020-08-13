import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function CardComponent() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="card border-info ml-2 mb-3 d-flex justify-content-center "
        style={{ maxWidth: 250 }}
      >
        <div className="card-body py-0 mt-2">
          <h6 className="card-text text-center">Satish Bokka</h6>
          <p className="card-subtitle mb-2 text-muted text-center">
            Student, Developer
          </p>
        </div>
        <div className="card-footer">
          <div className="col-12 d-flex justify-content-center">
            <a href="https://github.com/satish019">
              <FontAwesomeIcon color="grey" className="mx-2" icon={faGithub} />
            </a>
            <a href="https://twitter.com/_var_const">
              <FontAwesomeIcon color="grey" className="mx-2" icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/bokka-satish-b34005185//">
              <FontAwesomeIcon
                color="grey"
                className="mx-2"
                icon={faLinkedin}
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
