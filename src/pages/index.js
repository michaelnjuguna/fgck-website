import * as React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby";
import {BsFillTelephonePlusFill} from "react-icons/bs";
import "./styles/index.scss"

 
export default function Home() {

  return (
    <Layout>
      <section className="px-5 pt-5 index-header">
        <header className="bg-light text-center m2-5 py-5">
          <h1 className="mb-3 fw-bold fst-italic main-heading">
            FULL GOSPEL CHURCHES OF KENYA, MACHAKOS BRANCH.
          </h1>
          <span className="text-dark">
            <h1>
              "Therefore go and make disciples of all nations, baptizing them in
              the name of the Father and of the Son and of the Holy Spirit."
            </h1>
            <h2 className="text-dark  mt-5">Matthew 28:19 NIV</h2>
          </span>
          <button className="btn btn-primary btn-lg mt-5">
            <a
              className="text-light text-decoration-none fs-5"
              href="tel:0728812436"
            >
              Contact Reverend / 0728812436 &nbsp;
              <BsFillTelephonePlusFill />{" "}
            </a>
          </button>
        </header>
      </section>
    </Layout>
  );
}


export const Head = () => <title>Home Page</title>

