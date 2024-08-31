import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary text-xs flex items-center justify-center">
      <div className="max-w-6xl w-full p-5 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left">
          <div className="text-white text-4xl md:text-5xl font-bold w-60">
            Want to work
          </div>
          <div className="text-accent text-4xl md:text-5xl font-bold w-60">
            together?
          </div>
        </div>
        <div className="flex-1">
          <div className="relative bg-gray-800 rounded-2xl shadow-lg z-10">
            {/* HEADER */}
            <div className="flex items-center pl-5 p-3 bg-secondary rounded-t-2xl">
              <div className="flex-1 flex">
                <div className="w-2 h-2 mr-3 rounded-full bg-cyan-400"></div>
                <div className="w-2 h-2 mr-3 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-200"></div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="p-8 bg-primary border-4 rounded-b-2xl border-secondary">
              <div className="flex flex-col space-y-6">
                <div className="text-center md:text-left">
                  <div className="text-accent font-bold text-3xl md:text-4xl">
                    <p className="mb-2">Contact</p>
                  </div>
                  <div className="text-accent font-bold text-3xl md:text-4xl border-b-2 border-accent">
                    <p className="mb-3">Me</p>
                  </div>
                </div>

                {/* FORM FIELDS */}
                <div className="space-y-6">
                  {/* NAME */}
                  <div className="pb-1 border-b border-gray-600">
                    <input
                      className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                      placeholder="NAME"
                    />
                  </div>

                  {/* EMAIL*/}
                  <div className="pb-1 border-b border-gray-600">
                    <input
                      className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                      placeholder="EMAIL"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="pb-1 border-b border-gray-600">
                    <textarea
                      className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                      placeholder="MESSAGE"
                    ></textarea>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex justify-end space-x-10 pb-4">
                  <button className="text-white hover:border-b-2 hover:border-accent border-b-2 border-transparent">
                    CANCEL
                  </button>
                  <button className="text-accent g hover:border-b-2 hover:border-accent border-b-2 border-transparent">
                    SEND
                  </button>
                </div>

                {/* SOCIAL MEDIA ICONS */}
                <div className="flex space-x-4 h-7 mb-4">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="hover:text-accent"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className=" hover:text-accent"
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className=" hover:text-accent"
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className=" hover:text-accent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
