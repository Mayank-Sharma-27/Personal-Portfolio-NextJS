import Image from "next/image";

const About = () => {
  return (
    <section className="mt-32 text-white mx-[10%]" id="about">
      <h2 className="text-4xl font-bold uppercase tracking-widest mb-8">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/about/aboutImage.png"
          alt="Me sitting with a laptop"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <ul className="space-y-8">
          <li className="flex items-start gap-4">
            <Image
              src="/images/about/serverIcon.png"
              alt="Server icon"
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Backend Developer</h3>
              <p className="text-lg">
                I have experience developing scalable back-end systems and
                optimised APIs. I have worked in a fast growing startup where I
                build customer impacting features which helped the company grow
                by 7.5 times. I have also worked on preparing for high volume
                events at amazon such as Prime day and Black friday
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Image
              src="/images/about/cursorIcon.png"
              alt="Cursor icon"
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Frontend Development
              </h3>
              <p className="text-lg">
                I have build features for internal app which have been used by
                warehouse employees to ship orders.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
