export default function Skills() {
  const skillsData = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript (ES6+)", icon: "💡" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Responsive Design", icon: "📱" },
    { name: "Flexbox & Grid", icon: "📐" },
    { name: "DOM Manipulation", icon: "⚙️" },
    { name: "Git & GitHub", icon: "🌳" },
    { name: "VS Code", icon: "💻" },
  ];

  const SkillCard = ({ name, icon }) => (
    <div
      className="flex flex-col items-center justify-center p-6 bg-white 
                 border border-indigo-200 rounded-2xl shadow-md 
                 hover:shadow-xl hover:bg-indigo-50 
                 transition duration-300 transform hover:-translate-y-1"
    >
      <span className="text-5xl mb-3">{icon}</span>
      <p className="text-sm font-semibold text-gray-800 text-center">
        {name}
      </p>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-10 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center 
                       text-transparent bg-clip-text bg-gradient-to-r 
                       from-indigo-400 to-purple-500">
          My Technical Skills
        </h2>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                     gap-6 sm:gap-8"
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>

      </div>
    </section>
  );
}
