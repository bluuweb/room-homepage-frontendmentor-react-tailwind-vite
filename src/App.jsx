import ImgHero1 from "./assets/images/desktop-image-hero-1.jpg";
import ImgAboutDark from "./assets/images/image-about-dark.jpg";
import ImgAboutLight from "./assets/images/image-about-light.jpg";
import IconArrowShop from "./components/icons/IconArrowShop";
import IconPrev from "./components/icons/IconPrev";
import IconNext from "./components/icons/IconNext";
import NavBar from "./components/navbar/NavBar";

const App = () => {
    return (
        <div className="">
            <NavBar />
            <header className="grid grid-cols-3 grid-rows-[10fr_1.5fr_10fr] lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
                <img
                    src={ImgHero1}
                    alt=""
                    className="col-start-1 col-end-4 row-start-1 row-end-3 h-full w-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3"
                />
                <article className="col-start-1 col-end-4 row-start-3 row-end-4 flex flex-col items-start justify-center py-4 px-8 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-12">
                    <h1 className="mb-6 text-4xl font-bold">
                        Discover innovative ways to decorate
                    </h1>
                    <p className="mb-8 text-gray-500">
                        We provide unmatched quality, comfort, and style for
                        property owners across the country. Our experts combine
                        form and function in bringing your vision to life.
                        Create a room in your own style with our collection and
                        make your property a reflection of you and what you
                        love.
                    </p>
                    <button className="flex items-center fill-black hover:fill-gray-500 hover:text-gray-500">
                        <span className="text-base font-bold uppercase tracking-[1rem]">
                            Shop now
                        </span>
                        <IconArrowShop className="" />
                    </button>
                </article>
                <div className="col-start-3 col-end-4 row-start-2 row-end-3 flex bg-black text-white lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3">
                    <button className="w-full">
                        <IconPrev className="mx-auto" />
                    </button>
                    <button className="w-full">
                        <IconNext className="mx-auto" />
                    </button>
                </div>
            </header>
            <main className="grid grid-cols-1 lg:grid-cols-7">
                <img
                    src={ImgAboutDark}
                    alt=""
                    className="h-full w-full lg:col-span-2"
                />
                <section className="flex flex-col justify-center py-4 px-8 lg:col-span-3 lg:px-16">
                    <h2 className="mb-4 text-lg font-bold uppercase tracking-[0.5rem]">
                        About our furniture
                    </h2>
                    <p className="text-gray-500">
                        Our multifunctional collection blends design and
                        function to suit your individual taste. Make each room
                        unique, or pick a cohesive theme that best express your
                        interests and what inspires you. Find the furniture
                        pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are
                        available to help you create your dream space.
                    </p>
                </section>
                <img
                    src={ImgAboutLight}
                    alt=""
                    className="h-full w-full lg:col-span-2"
                />
            </main>
        </div>
    );
};

export default App;
