const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="bg-[#f7f2eb] px-4 py-4 md:px-8 lg:px-16">
      {/* HERO */}
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-semibold leading-tight text-black md:text-4xl">
          We are here to help with your order.
        </h1>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl justify-center">
        {/* FORM CARD */}
        <div className="w-full max-w-3xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-black">
              How can we help?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form below and we’ll contact you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME + EMAIL */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="contactEmail"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Email address
                </label>

                <input
                  id="contactEmail"
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all focus:border-black"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label
                htmlFor="contactPhone"
                className="mb-2 block text-sm font-medium text-black"
              >
                Mobile number
              </label>

              <input
                id="contactPhone"
                type="tel"
                placeholder="Enter mobile number"
                className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all focus:border-black"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-black"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={6}
                placeholder="Tell us what you need help with"
                className="w-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-black"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="flex mx-auto h-12 items-center justify-center bg-black px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
