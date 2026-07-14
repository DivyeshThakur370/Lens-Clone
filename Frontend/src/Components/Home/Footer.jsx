import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer>
      {/* Testimonials strip */}
      <section className="bg-yellow-200 py-6 px-4 text-center sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 lg:px-10">
        <p className="text-2xl mb-2 text-gray-900 font-semibold sm:text-3xl md:text-3xl lg:text-4xl">
          Meet Our Happy Customers
        </p>
        <p className="text-sm text-gray-700 mb-5 sm:text-base md:mb-6 lg:mb-8">
          Real stories from people who found their perfect pair with Lenskart.
        </p>
        <div className="flex justify-center gap-5 flex-wrap px-2 sm:px-6 md:px-8 lg:px-10">
          <iframe
            src="https://www.youtube.com/embed/HYPqf_eVvvM"
            title="Customer Reviews"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md max-w-full flex-1 min-w-[280px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px]"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/SQm3RxXRunw"
            title="Lenskart Customer Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md max-w-full flex-1 min-w-[280px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px]"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/IZpUQ-S_LcM"
            title="Lenskart - The Customer Diaries"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md max-w-full flex-1 min-w-[280px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px]"
          ></iframe>
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="bg-slate-800 text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Get 10% off your first order
            </h3>
            <p className="text-sm text-slate-300 mt-1 sm:text-base">
              Subscribe for new arrivals, style tips and exclusive offers.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 rounded-md px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="submit"
              className="rounded-md bg-sky-500 hover:bg-sky-400 transition-colors px-4 py-2 font-medium text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Main dark footer */}
      <section className="bg-slate-900 text-white py-10 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-left pb-10 max-w-4xl">
            <h2 className="text-2xl mb-4 font-bold sm:text-3xl md:text-3xl lg:text-4xl">
              Buy the best eyewear from Lenskart
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              Lenskart is India&apos;s leading eyewear destination, blending an
              ever-growing network of offline stores with a seamless online
              experience. From prescription lenses to the latest frame trends,
              we help millions of customers see and look their best every day.
            </p>
            <p className="mb-0 leading-relaxed text-slate-300">
              Shop{" "}
              <a href="#" className="text-sky-400 hover:text-sky-300 no-underline">
                sunglasses
              </a>
              ,{" "}
              <a href="#" className="text-sky-400 hover:text-sky-300 no-underline">
                eyeglasses
              </a>{" "}
              and{" "}
              <a href="#" className="text-sky-400 hover:text-sky-300 no-underline">
                contact lenses
              </a>{" "}
              for men, women and kids — with free home trial, free shipping and
              a 14-day easy return policy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pb-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <div>
              <h3 className="text-lg mb-3 font-semibold">Shop</h3>
              <ul className="list-none p-0 space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white no-underline">Eyeglasses</a></li>
                <li><a href="#" className="hover:text-white no-underline">Sunglasses</a></li>
                <li><a href="#" className="hover:text-white no-underline">Contact Lenses</a></li>
                <li><a href="#" className="hover:text-white no-underline">Kids Glasses</a></li>
                <li><a href="#" className="hover:text-white no-underline">Blu Cut Lenses</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-3 font-semibold">Services</h3>
              <ul className="list-none p-0 space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white no-underline">Store Locator</a></li>
                <li><a href="#" className="hover:text-white no-underline">Buying Guide</a></li>
                <li><a href="#" className="hover:text-white no-underline">Frame Size Guide</a></li>
                <li><a href="#" className="hover:text-white no-underline">Home Eye Test</a></li>
                <li><a href="#" className="hover:text-white no-underline">Gold Membership</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-3 font-semibold">About Us</h3>
              <ul className="list-none p-0 space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white no-underline">Our Story</a></li>
                <li><a href="#" className="hover:text-white no-underline">We Are Hiring</a></li>
                <li><a href="#" className="hover:text-white no-underline">Refer &amp; Earn</a></li>
                <li><a href="#" className="hover:text-white no-underline">Press &amp; News</a></li>
                <li><a href="#" className="hover:text-white no-underline">Lenskart Coupons</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-3 font-semibold">Help</h3>
              <ul className="list-none p-0 space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white no-underline">FAQs</a></li>
                <li><a href="#" className="hover:text-white no-underline">Track Order</a></li>
                <li><a href="#" className="hover:text-white no-underline">Shipping &amp; Returns</a></li>
                <li><a href="#" className="hover:text-white no-underline">Contact Support</a></li>
                <li><a href="#" className="hover:text-white no-underline">Warranty</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <h3 className="text-lg mb-3 font-semibold">Get in Touch</h3>
              <ul className="list-none p-0 space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <MdPhone className="mt-1 flex-shrink-0" />
                  <a href="tel:+911800111111" className="hover:text-white no-underline">
                    1800-111-111 (Toll-Free)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MdEmail className="mt-1 flex-shrink-0" />
                  <a href="mailto:support@lenskart.com" className="hover:text-white no-underline">
                    support@lenskart.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MdLocationOn className="mt-1 flex-shrink-0" />
                  <span>Lenskart HQ, Faridabad, Haryana, India</span>
                </li>
              </ul>

              <div className="mt-4">
                <p className="text-sm text-slate-300 mb-2">Download the app</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <a href="#" aria-label="Google Play Store">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                      alt="Google Play Store"
                      className="max-w-[120px]"
                    />
                  </a>
                  <a href="#" aria-label="Apple App Store">
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="App Store"
                      className="max-w-[120px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social + payment strip */}
          <div className="border-t border-slate-700 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 text-slate-300">
              <span className="text-sm">Follow us</span>
              <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><FaYoutube /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn /></a>
            </div>
            <div className="text-sm text-slate-400">
              We accept: Visa · Mastercard · UPI · Net Banking · COD
            </div>
          </div>
        </div>
      </section>

      {/* Copyright bar */}
      <div className="bg-slate-950 text-slate-400 text-center py-4 px-4 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {currentYear} Lenskart Clone. Built for learning purposes. All
            product names, logos, and brands are property of their respective
            owners.
          </span>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-white no-underline">Privacy Policy</a>
            <a href="#" className="hover:text-white no-underline">Terms of Use</a>
            <a href="#" className="hover:text-white no-underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
