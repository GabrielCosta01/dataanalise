import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import dataAnaliseLogo from "src/assets/dataanaliseDeitada.png";
import { Link } from "react-scroll";

interface NavLink {
    title: string;
    link: string;
}

const NavBar = () => {
    const navLinks: NavLink[] = [
        {
            title: "Quem somos",
            link: "quem-somos"
        },
        {
            title: "Produtos",
            link: "produtos",
        },
        {
        title: "O que fazemos",
        link: "o-que-fazemos"
        },
        {
        title: "Contato",
        link: "contact"
        },
    ];

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className="bg-black">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-white">
                            <Image
                                src={dataAnaliseLogo}
                                alt="logo da data analise"
                                width={250}
                            />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        className="text-gray-300 transition-all duration-500 cursor-pointer hover:bg-black hover:text-yellowDataAnalise px-3 py-2 rounded-md text-md font-medium"
                                        to={link.link}
                                        smooth={true}
                                        duration={500}
                                    >
                                        {link.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                        type="button"
                        onClick={handleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {open ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {open ? (
                <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link, index) => {
                    return (
                    <Link
                        key={index}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        to={link.link}
                        smooth={true}
                        duration={500}
                        onClick={() => setOpen(false)}
                    >
                        {link.title}
                    </Link>
                    );
                })}
                </div>
            ) : null}
        </div>
    );
};
export default NavBar;