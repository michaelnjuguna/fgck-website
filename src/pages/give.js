import * as React from "react";
import Layout from "../components/layout";
import "./styles/give.scss"
export default function Give() {
  return (
    <Layout>
      <section className="px-5 give text-center ">
        <h1 className="pt-5">
          "Each of you should give what you have decided in your heart to give,
          not reluctantly or under compulsion, for God loves a cheerful giver."
        </h1>
        <h2 className="pt-2">2 Corinthians 9:7</h2>
        <h3 className="text-decoration-underline mt-3">Tithe</h3>
        <p className="fs-3">8045718</p>
        <h4 className="text-decoration-underline mt-3">Church Development Faulu Bank account.</h4>
        <p className="fs-3">Business Number: 328585 </p>
        <p className="fs-3">Account Number: 10050137258</p>
      </section>
    </Layout>
  );
}

export const Head = () => <title>Give Page</title>;