export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-10 bg-gradient-to-b from-purple-50 to-violet-100 text-gray-800"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-violet-700 mb-4">
          About Me
        </h2>

        <p className="text-lg text-center text-gray-600 mb-12">
          Aspiring Frontend Developer • HTML • CSS • JavaScript
        </p>

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-violet-200">
          <h3 className="text-2xl font-semibold text-violet-700 mb-4">
            Who I Am
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I am <span className="font-semibold">Bhawna Diwan</span>, a dedicated and
            detail-oriented frontend developer who loves building clean, responsive,
            and user-friendly web applications.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy learning new technologies and improving my skills every day to
            become a professional and confident developer.
          </p>
        </div>

      </div>
    </section>
  );
}
