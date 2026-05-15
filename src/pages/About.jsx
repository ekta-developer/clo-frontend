import AboutUsImg from "../assets/Aboutus.png";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className=" py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <img src={AboutUsImg} alt="" className="w-2/3 h-full mx-auto" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto  items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Our Story & Philosophy</h2>
            <p className="text-gray-600 mb-4 leading-7">
              Founded with a vision to make online shopping simple, stylish, and
              accessible, CLO has grown into a trusted e-commerce platform
              serving thousands of happy customers. Our journey began with a
              simple idea-to create a shopping experience where quality,
              affordability, and customer satisfaction come together seamlessly.
              At CLO, we carefully curate every collection to ensure the perfect
              balance of modern style, premium quality, and everyday comfort.
              From trending essentials to timeless fashion pieces, every product
              is selected with our customers in mind. Your satisfaction remains
              at the heart of everything we do, inspiring us to continuously
              improve and innovate.
              <br />
              We believe in stories over seasons, personal style over trends,
              and comfort over appearance. Every collection is thoughtfully
              designed to combine modern style with everyday comfort, helping
              people express themselves with confidence.
            </p>

            <button className="bg-black text-white mt-4 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Explore Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
