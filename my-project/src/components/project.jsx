// src/components/Projects.jsx

export default function Projects() {
  // 1. PROJECT DATA LIST
  const projectsData = [
    {
      title: "Mini OS",
      technologies: ["JavaScript", "HTML", "CSS"],
      imageUrl:"https://www.shutterstock.com/image-photo/business-technology-internet-network-concept-260nw-559459693.jpg",
      githubUrl: "https://github.com/bhawnadiwan24/mini-os",
      liveUrl: "#", // Add live link here (if you have it)
    },
    {
      title: "Book Management Library System",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "React"],
      imageUrl: "https://cdn.prod.website-files.com/65fabbf8f7f7323a634a308c/6697a8662e63dfe68b424df5_Group%201171275865.png", // Add your image here
      githubUrl: "https://github.com/bhawnadiwan24/Book_Management_Library_System",
      
    },
    {
      title: "Birthday Greeting",
      technologies: ["JavaScript", "HTML", "CSS"],
      imageUrl:
        "https://media.istockphoto.com/id/2098457266/vector/happy-birthday-cute-hand-drawn-doodle-lettering-postcard-time-to-celebrate-make-a-wish.jpg?s=612x612&w=0&k=20&c=Amv-O-gKa7nAcwn0jbzTXtrk1A8N2m2N1jNDgrvaFDg=",
      githubUrl: "https://github.com/bhawnadiwan24/Birthday_project",
      liveUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-10 bg-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center text-gray-900">
          My Technical Projects 🛠️
        </h2>

        {/* PROJECTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden 
              flex flex-col transition duration-300 transform hover:scale-[1.03] hover:shadow-indigo-400/50"
            >
              {/* Project Image */}
              <div className="h-40 w-full relative bg-indigo-50 flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-700">
                    {project.title}
                  </h3>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-3 border-t border-gray-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-1 bg-indigo-600 text-white rounded-lg font-semibold text-sm hover:bg-indigo-700 transition"
                  >
                    Live ↗️
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-1 bg-gray-300 text-gray-800 rounded-lg font-semibold text-sm hover:bg-gray-400 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
