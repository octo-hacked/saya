export default function Footer() {
    return (
      <footer className=" py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="Saya Logo" className="mb-4 w-32" />
            <p className="text-gray-600">
              Elevate your expectations with our premium-quality elevator solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
  
          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Installation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Repair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Maintenance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Modernization</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">24/7 Service</a></li>
            </ul>
          </div>
  
          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <p className="text-gray-600">Shop No. 11, Pavitra Heights, 411 002, near Bhaji Mandai, New Nana Peth, Ganesh Peth, Pune, Maharashtra 411002</p>
            <p className="mt-4">
              <span className="font-semibold">Phone: </span>
              <a href="tel:+919372226748" className="text-blue-600 hover:underline">+91 9372226748</a>
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              <a href="mailto:sayapromotes@gmail.com" className="text-blue-600 hover:underline">sayapromotes@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
  