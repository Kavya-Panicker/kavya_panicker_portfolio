import {
  RxEnvelopeClosed,
  RxLinkedinLogo,
  RxGithubLogo,
  RxInstagramLogo,
} from "react-icons/rx";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const ContactInfo = () => (
  <section className="flex flex-col items-center justify-center w-full py-10 sm:py-16 md:py-20 px-2 sm:px-4 md:px-10">
    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 sm:mb-10 text-center">
      Contact Information
    </h2>

    <div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12 w-full max-w-md sm:max-w-xl md:max-w-2xl">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <span className="bg-purple-100 p-3 sm:p-4 rounded-full">
          <RxEnvelopeClosed className="text-purple-700" size={24} />
        </span>
        <a
          href="mailto:kavyasunilpanicker@gmail.com"
          className="text-base sm:text-lg text-gray-400 text-center sm:text-left break-all hover:underline"
        >
          kavyasunilpanicker@gmail.com
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <span className="bg-purple-100 p-3 sm:p-4 rounded-full">
          <FaPhoneAlt className="text-purple-700" size={20} />
        </span>
        <span className="text-base sm:text-lg text-gray-400 text-center sm:text-left">
          +91 9737611429
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <span className="bg-purple-100 p-3 sm:p-4 rounded-full">
          <FaMapMarkerAlt className="text-purple-700" size={20} />
        </span>
        <span className="text-base sm:text-lg text-gray-400 text-center sm:text-left">
          Chandkheda, Ahmedabad, Gujarat, India
        </span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-2 sm:gap-4">
      <span className="text-base sm:text-lg font-semibold text-white">
        Connect With Me
      </span>
      <div className="flex flex-row gap-6 sm:gap-8 mt-2">
        <a
          href="https://www.instagram.com/the_smooth_moves/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RxInstagramLogo className="text-white hover:text-pink-500" size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/kavya-panicker-0243412a2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RxLinkedinLogo className="text-white hover:text-blue-400" size={28} />
        </a>
        <a
          href="https://github.com/Kavya-Panicker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RxGithubLogo className="text-white hover:text-gray-400" size={28} />
        </a>
      </div>
    </div>
  </section>
);
