import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { to: "/", label: "Home" },
        { to: "/integrantes", label: "Integrantes"}
    ];

    return(
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="hidden md:flex space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="font-semibold"
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
                <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg px-4 pt-4 pb-6 space-y-3 z-50 divide-y divide-[#2f2c79]">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="block font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        to="/login"
                        className="block font-semibold text-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>

                    <Link
                        to="/cadastro"
                        className="block font-semibold text-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Cadastro
                    </Link>
                </div>
            )}
        </nav>
    );
}