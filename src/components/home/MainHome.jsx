import ImgAboutDark from "../../assets/images/image-about-dark.jpg";
import ImgAboutLight from "../../assets/images/image-about-light.jpg";

const MainHome = () => {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-7">
            <img
                src={ImgAboutDark}
                alt=""
                className="h-full w-full lg:col-span-2"
            />
            <section className="flex flex-col justify-center p-8 lg:col-span-3 lg:px-16">
                <h2 className="mb-6 text-lg font-bold uppercase tracking-[0.5rem]">
                    About our furniture
                </h2>
                <p className="text-gray-500">
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </section>
            <img
                src={ImgAboutLight}
                alt=""
                className="h-full w-full lg:col-span-2"
            />
        </main>
    );
};

export default MainHome;
