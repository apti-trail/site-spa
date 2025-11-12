import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { to: "/", label: "Home"}
    ];

    return(
        <nav>
            <div>
                <div>
                    AptiTrail
                </div>
                
                <div>
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div>

                </div>
            </div>
        </nav>
    );
}