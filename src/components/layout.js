import * as React from "react";
import Navbar from "./menu";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        <Footer/>
        </>
    );
    }