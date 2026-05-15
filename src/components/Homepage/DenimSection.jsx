import img from "../../assets/banner1.webp";
const DenimSection = () => {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-16 py-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="uppercase tracking-[4px] text-sm text-gray-500 font-semibold">
              Discover Clo Denim
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black max-w-xl">
              Denim That Defines Your Style
            </h1>

            <p className="text-gray-600 text-xl max-w-lg leading-relaxed">
              Everyday comfort. Effortless style. Crafted for modern looks.
            </p>

            <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
              Shop Denim
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-[28px] shadow-lg max-w-162.5">
              <img
                src={img}
                alt="Denim Fashion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DenimSection;
