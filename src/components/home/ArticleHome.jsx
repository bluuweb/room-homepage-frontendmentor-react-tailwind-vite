import IconArrowShop from "../icons/IconArrowShop";

const ArticleHome = ({ hero }) => {
    return (
        <>
            <img
                src={hero.imgHero}
                alt={hero.title}
                className="col-start-1 col-end-4 row-start-1 row-end-3 h-full w-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3"
            />
            <article className="col-start-1 col-end-4 row-start-3 row-end-4 flex flex-col items-start justify-center p-8 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-16">
                <h1 className="mb-6 text-4xl font-bold">{hero.title}</h1>
                <p className="mb-8 text-gray-500">{hero.description}</p>
                <button className="flex items-center fill-black hover:fill-gray-500 hover:text-gray-500">
                    <span className="text-base font-bold uppercase tracking-[1rem]">
                        Shop now
                    </span>
                    <IconArrowShop />
                </button>
            </article>
        </>
    );
};

export default ArticleHome;
