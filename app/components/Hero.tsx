import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between mt-12 mx-[10%] bg-white rounded-lg p-8 md:p-16 shadow-lg">
      <div className="flex flex-col items-start text-black z-10 md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hi, I'm <span className="text-blue-600">Mayank</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          I'm an Amazon SDE2 with 5 years of expertise, passionate about
          tackling intricate challenges and applying technical prowess to drive
          effective business solutions.
        </p>
        <a
          href="mailto:mayank.sharma2796@gmail.com"
          className="bg-blue-600 text-white text-lg md:text-xl font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Contact Me
        </a>
      </div>
      <div className="relative mt-8 md:mt-0 md:w-1/2">
        <Image
          src="/images/hero/hero.png"
          alt="Mayank Sharma - Amazon SDE2"
          width={500}
          height={500}
          className="w-full max-w-md mx-auto rounded-lg shadow-lg animate-float"
        />
      </div>
      <div className="absolute w-[70vw] h-[70vw] min-w-[350px] top-[20px] left-[10vw] rounded-full bg-blue-100 opacity-30 filter blur-[100px] z-0" />
      <div className="absolute w-[70vw] h-[70vw] min-w-[350px] bottom-[20px] right-[10vw] rounded-full bg-blue-200 opacity-30 filter blur-[100px] z-0" />
    </section>
  );
};

export default Hero;
