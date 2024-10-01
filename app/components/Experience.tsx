import Image from "next/image";
import history from "../blogs/data/history.json";
import skills from "../blogs/data/skills.json";

const Experience = () => {
  return (
    <section
      className="mt-32 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 md:p-16 mx-[10%] shadow-2xl"
      id="experience"
    >
      <h2 className="text-4xl font-bold uppercase tracking-widest text-center mb-12 text-white">
        Professional Experience
      </h2>

      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-center mb-8 text-indigo-300">
          Work History
        </h3>
        <ul className="space-y-12">
          {history.map((item, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 bg-gray-800 bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-70"
            >
              <Image
                src={`/images/${item.imageSrc}`}
                alt={`${item.organisation} logo`}
                width={100}
                height={100}
                className="rounded-lg object-contain bg-white p-2 shadow-md"
              />
              <div>
                <h4 className="text-2xl font-semibold text-white">
                  {item.role}
                </h4>
                <p className="text-xl text-indigo-200">{item.organisation}</p>
                <p className="text-sm text-gray-400 mb-2">
                  <time dateTime={item.startDate}>{item.startDate}</time> -
                  <time dateTime={item.endDate}>{item.endDate}</time>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {item.experiences.map((exp, i) => (
                    <li key={i} className="text-sm text-gray-300">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-center mb-8 text-indigo-300">
          Technical Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-lg w-28 h-28 shadow-md transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
            >
              <Image
                src={`/images/${skill.imageSrc}`}
                alt={`${skill.title} icon`}
                width={48}
                height={48}
                className="mb-2"
              />
              <p className="text-sm text-center text-white">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
