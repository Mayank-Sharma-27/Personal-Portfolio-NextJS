import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="mt-32 bg-gradient-to-b from-gray-900 to-black py-16 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-12 md:mb-0 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations.
            </p>
            <a
              href="mailto:mayank.sharma2796@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
          <ul className="space-y-6">
            {[
              {
                icon: "emailIcon.png",
                text: "mayank.sharma2796@gmail.com",
                href: "mailto:mayank.sharma2796@gmail.com",
              },
              {
                icon: "linkedinIcon.png",
                text: "LinkedIn Profile",
                href: "https://www.linkedin.com/in/mayank-sharma-2002bb10b/",
              },
              {
                icon: "githubIcon.png",
                text: "GitHub Profile",
                href: "https://github.com/Mayank-Sharma-27/",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                  <Image
                    src={`/images/contact/${item.icon}`}
                    alt={`${item.text} icon`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg group-hover:text-blue-400 transition duration-300"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-16 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Mayank Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
