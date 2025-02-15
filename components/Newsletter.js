export default function Newsletter() {
    return (
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Find out what makes our elevator solutions stand out from the crowd – subscribe to our newsletter today.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }
  