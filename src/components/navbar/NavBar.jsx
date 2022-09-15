import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import IconHamburger from "../icons/IconHamburger";
import IconCloseMenu from "../icons/IconCloseMenu";
import NavLink from "./NavLink";

const NavBar = () => {
    const refNavbar = useRef(null);
    const [active, setActive] = useState(false);

    //https://fireship.io/snippets/use-media-query-hook/
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    useEffect(() => {
        if (isDesktop) {
            setActive(false);

            refNavbar.current.className =
                "absolute flex w-full items-center px-8 py-8 text-white lg:inline-flex lg:items-center";
            refNavbar.current.querySelector("#navbarNavegation").className =
                "hidden text-xl lg:flex lg:gap-4";
            refNavbar.current
                .querySelector("#navbarBrand")
                .classList.remove("hidden");
        }
    }, [isDesktop]);

    const handleClickHamburger = () => {
        setActive(!active);
        refNavbar.current
            .querySelector("#navbarBrand")
            .classList.toggle("hidden");
        if (
            !refNavbar.current
                .querySelector("#navbarNavegation")
                .classList.toggle("hidden")
        ) {
            // open menu
            refNavbar.current.className =
                "absolute flex w-full items-center justify-between px-8 py-8 text-black bg-white lg:inline-flex lg:items-center";

            refNavbar.current.querySelector("#navbarNavegation").className =
                "flex gap-4 text-xl font-bold";
        } else {
            refNavbar.current.className =
                "absolute flex w-full items-center px-8 py-8 text-white lg:inline-flex lg:items-center";
            refNavbar.current.querySelector("#navbarNavegation").className =
                "hidden text-xl lg:flex lg:gap-4";
        }
    };

    return (
        <nav
            className="absolute flex w-full items-center px-8 py-8 text-white lg:inline-flex lg:items-center"
            ref={refNavbar}
        >
            <button className="lg:hidden" onClick={handleClickHamburger}>
                {active ? <IconCloseMenu /> : <IconHamburger />}
            </button>
            <a
                href="#"
                id="navbarBrand"
                className="mx-auto mb-2 pr-[20px] text-3xl lg:ml-0 lg:mb-1 lg:mr-8 lg:pr-0"
            >
                room
            </a>
            <div
                className="hidden text-xl lg:flex lg:gap-4"
                id="navbarNavegation"
            >
                <NavLink text="home" />
                <NavLink text="shop" />
                <NavLink text="about" />
                <NavLink text="contact" />
            </div>
        </nav>
    );
};

export default NavBar;
