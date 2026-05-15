
const TrackOrder = () => {
  return (
    <div className="min-h-screen bg-[#f7f2eb] py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-sm border border-gray-200 p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-900">
            Track Your Order
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your order ID to track your shipment
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto space-y-5">
          {/* Order ID */}
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Enter Order ID"
              className="flex-1 border border-gray-300 px-4 py-4 outline-none focus:border-black"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="w-fit px-8 py-3 bg-black text-white text-lg font-medium hover:bg-gray-800 transition duration-300">
              Track Your Order
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-14 border border-gray-200 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-500">Order Number</p>
              <h2 className="text-xl  font-semibold">CLO2026</h2>
            </div>

            <div>
              <p className="text-sm text-gray-500">Estimated Delivery</p>
              <h2 className="text-xl font-semibold">20 May 2026</h2>
            </div>

            <div>
              <p className="text-sm text-gray-500">Current Status</p>
              <h2 className="text-xl font-semibold text-green-600">Shipped</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
