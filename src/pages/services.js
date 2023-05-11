import * as React from "react";
import Layout from "../components/layout";
export default function Services() {
  return (
    <Layout>
      <section className="px-5 pt-5">
        <h1 className="pt-5">Our services</h1>
        {/* sunday services */}
        <div className="px-3">
          <h2>Sunday services</h2>
          <table class="table table-striped-columns">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fs-5">7:45am - 9:00am</td>
                <td className="fs-5">First Service</td>
              </tr>
              <tr>
                <td className="fs-5">9:00am - 10:00am</td>
                <td className="fs-5">Morning devotion</td>
              </tr>
              <tr>
                <td className="fs-5">9:00am - 10:00am</td>
                <td className="fs-5">Sunday School</td>
              </tr>
              <tr>
                <td className="fs-5">10:00am - 1:00pm</td>
                <td className="fs-5">Second Service</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* after sunday service */}
        <div className="px-3">
          <h2 className="pb-2">After Sunday services</h2>
          <table class="table table-striped-columns">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fs-5">Week 3</td>
                <td className="fs-5">Ladies and Men fellowship</td>
              </tr>
              <tr>
                <td className="fs-5">Week 4</td>
                <td className="fs-5">Youth seminar</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* midweek services */}
        <div className="px-3">
          <h2>Midweek  services</h2>
          <table class="table table-striped-columns">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fs-5">Wednesday 6:00pm - 8:00pm</td>
                <td className="fs-5">Youth Bible study</td>
              </tr>
              <tr>
                <td className="fs-5">Thursday 7:00pm - 8:00pm</td>
                <td className="fs-5">Home fellowship</td>
              </tr>
              <tr>
                <td className="fs-5">Friday 6:00pm - 7:45pm </td>
                <td className="fs-5">Prayers</td>
              </tr>
              <tr>
                <td className="fs-5">Saturday 3:00pm - 6:00pm</td>
                <td className="fs-5">Praise and worship practice</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => <title>Services</title>;
