import { useEffect, useState } from "react"
import Navbar from "../NavBar/Navbar";


export default function Header() {
    return(
        <header className="shadow-lg">
            <Navbar/>
        </header>
    );
}