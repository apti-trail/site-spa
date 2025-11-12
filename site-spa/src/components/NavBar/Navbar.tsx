import { XMarkIcon } from "@heroicons/react/16/solid";
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
                    <div>
                        <p>AptiTrail</p>
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
                        <button
                            onClick={toggleMenu}
                            className="text-green-800 focus:outline-none"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6"/>
                            ) : (
                                <p className="h-6 w-6">x</p>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div>
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="block text-white hover:text-green-800"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}