export default function Projects() {
  // PROJECT LIST
  const projects = [
    {
      title: "DOST Customer Portal",
      description:
        "The DOST Region VI Customer Portal is designed to enhance customer interaction and service efficiency. It provides a user-friendly platform for customers to access various services, information, and support related to DOST Region VI.",
      technologies: ["PHP", "Bulma CSS", "JavaScript"],
      link: "#",
      image: "/assets/images/cas.png",
    },
    {
      title: "DOST Customer Portal",
      description:
        "The DOST Region VI Customer Portal is designed to enhance customer interaction and service efficiency. It provides a user-friendly platform for customers to access various services, information, and support related to DOST Region VI.",
      technologies: ["Unity", "Textscript", "C++", "React"],
      link: "#",
      image: "/assets/images/cas.png",
    },
  ];

  return (
    <div className="bg-primary min-h-screen p-8">
      {/* TITLE */}
      <div className="relative flex items-center justify-center mb-12 pb-10">
        <h1 className="text-4xl font-bold text-center relative z-10 bg-primary px-4 text-accent">
          My Projects
        </h1>
        <div className="absolute w-80 border-t-2 border-gray-300"></div>
      </div>

      <div className="flex flex-col gap-8 items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row py-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } max-w-7xl w-full rounded-lg shadow-md transition-shadow duration-300 overflow-hidden`}
          >
            <div className="absolute bottom-0 border-t-2 left-0 w-full border-accent"></div>

            {/* IMAGES */}
            <div className="md:w-2/5">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* PROJECT DETAILS */}
            <div className="flex flex-col justify-between p-6 md:w-3/5">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                <p className="text-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* TECH STACK*/}
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-secondary text-text py-2 px-4 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-row space-x-5 mt-5">
                <a
                  href={project.link}
                  className="bg-accent hover:scale-105 transition-transform duration-300  py-2 px-4 rounded-lg inline-block w-24 text-primary text-center"
                >
                  GitHub
                </a>

                <a
                  href={project.link}
                  className="bg-primary border border-accent hover:scale-105 transition-transform duration-300 py-2 rounded-lg inline-block w-24 text-accent text-center"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}