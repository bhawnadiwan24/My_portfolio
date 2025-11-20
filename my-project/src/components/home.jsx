import image1 from '../assets/myphoto.jpg';


export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-6 sm:px-10 bg-gray-900 text-white"
    >
       {/* Profile Image */}
      <img
        src={image1}
        alt="Bhawna Diwan Profile Photo"
        className="w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 border-indigo-500 shadow-2xl object-cover mb-8 transition duration-300 ease-in-out hover:scale-[1.03]"
      />

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
        Hi, I'm Bhawna Diwan
      </h1>

      {/* Bio */}
      <p className="text-xl sm:text-2xl mt-3 max-w-2xl text-gray-300 font-light leading-relaxed">
        A <strong>Software Developer</strong> passionate about building modern, clean, and scalable web applications. 
        Skilled in <strong>HTML, CSS, and JavaScript</strong>.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 mb-8 max-w-xl">
        <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          Software Developer
        </span>
        <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          HTML & CSS
        </span>
        <span className="bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          JavaScript
        </span>
        <span className="bg-gray-700 text-gray-100 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          Passionate Learner
        </span>
      </div>

      {/* Button */}
      <a
        href="#about"
        className="mt-4 px-8 py-3 text-lg font-semibold rounded-full shadow-xl 
                   bg-indigo-600 text-white 
                   hover:bg-indigo-700 hover:shadow-2xl 
                   transition duration-300 ease-in-out transform hover:-translate-y-0.5"
      >
        Know More About Me 
      </a>
    </section>
  );
}


