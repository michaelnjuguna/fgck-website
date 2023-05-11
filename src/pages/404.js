import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function NotFound() {
  return (
    <Layout>
      <div className="container text-center mt-5">
      <div className="px-5 text-start">
      <h1>Page not found</h1>
      <h2 className="my-3">Oops! The page you are looking for has been removed or relocated.</h2>
      <button className="btn btn-primary btn-lg"><Link to='/' className="text-light text-decoration-none fs-4"><MdOutlineArrowBackIosNew/> Go Back</Link></button>
      </div>
      </div>
    </Layout>
  ) 
}

export const Head = () => <title>404 | Not found</title>
