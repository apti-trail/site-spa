import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { to: "/", label: "Home" }
    ];

    return(
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="font-bold text-xl">
                        <p>AptiTrail</p>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <div
                            onClick={toggleMenu}
                            className="focus:outline-none"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6"/>
                            ) : (
                                <Bars3Icon className="h-6 w-6"/>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 space-y-1">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="block"
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