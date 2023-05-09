import * as React from "react";
import Navbar from "./menu";

export default function Layout({ children }) {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        </>
    );
    }