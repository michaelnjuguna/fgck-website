import { Link } from "gatsby";
import * as React from "react";
import "./styles/footer.scss"
import Logo from "../images/logo2.png";
import { BsFillTelephonePlusFill } from "react-icons/bs";

export default function Footer(){
    return (
      <section className="bg-dark text-light footer mt-5">
        <div className="container">
          <div className="row pt-5 text-center">
            <div className="col-md mt-2 logo  text-start footer-info">
              <img
                src={Logo}
                alt="Full gospel churches of kenya, Machakos branch"
              />
            </div>
            <div className="col-md mt-2 text-start footer-info">
              <h4>Quick links</h4>
              <Link to="/" className="text-primary fs-3 text-decoration-none">
                Home
              </Link>
              <br />
              <Link
                to="/services"
                className="text-primary fs-3 text-decoration-none"
              >
                Services
              </Link>
              <br />
              <Link
                to="/give"
                className="text-primary fs-3 text-decoration-none"
              >
                Give
              </Link>
              <br />
            </div>
            <div className="col-md mt-2 text-start footer-info">
              <h4>Contact info</h4>
              <span>
                <p className="fs-4">
                <BsFillTelephonePlusFill className="text-primary"/> &nbsp;
                    +254 728 812436</p>
              </span>
            </div>
          </div>
        </div>
        <p className="text-center fs-5 footer-comment">
          Built & designed by &nbsp;
          <a
            className="text-primary text-decoration-none"
            href="https://michael-njuguna-developer.netlify.app/"
          >
            Michael Njuguna
          </a>
          .
        </p>
      </section>
    );
}