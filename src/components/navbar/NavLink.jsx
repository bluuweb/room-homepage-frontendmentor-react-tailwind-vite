const NavLink = ({ text }) => {
    return (
        <a href="#" className="relative">
            <span className="peer">{text}</span>
            <span className="absolute -bottom-1 left-0 inline-block h-1 w-full origin-center scale-0 bg-pink-500 opacity-0 transition duration-300 ease-in-out peer-hover:scale-100 peer-hover:opacity-100"></span>
        </a>
    );
};

export default NavLink;
