import { RxEnvelopeClosed, RxLinkedinLogo, RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInformation() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-[#e6ecfa] to-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-900 text-center">Contact Information</h2>
      <div className="flex flex-col gap-8 mb-12 w-full max-w-xl">
        <div className="flex items-center gap-6">
          <span className="bg-purple-100 p-4 rounded-full">
            <RxEnvelopeClosed className="text-purple-400" size={28} />
          </span>
          <span className="text-lg md:text-xl text-gray-800">vishwakarmabhishek2004@gmail.com</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="bg-purple-100 p-4 rounded-full">
            <FaPhoneAlt className="text-purple-400" size={24} />
          </span>
          <span className="text-lg md:text-xl text-gray-800">+91 9967805785</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="bg-purple-100 p-4 rounded-full">
            <FaMapMarkerAlt className="text-purple-400" size={24} />
          </span>
          <span className="text-lg md:text-xl text-gray-800">Airoli, Navi Mumbai, Maharashtra, India - 400708</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-xl font-semibold text-gray-900">Connect With Me</span>
        <div className="flex flex-row gap-8 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <RxInstagramLogo className="text-gray-800 hover:text-pink-500" size={36} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <RxLinkedinLogo className="text-gray-800 hover:text-blue-700" size={36} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <RxGithubLogo className="text-gray-800 hover:text-black" size={36} />
          </a>
        </div>
      </div>
    </section>
  );
} 