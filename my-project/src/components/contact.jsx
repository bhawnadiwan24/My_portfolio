export default function Contact() {
  return (
    <section
      id="contact"
      // Changed background to a soft light blue (bg-blue-50) for separation
      className="py-24 px-6 sm:px-10 bg-blue-50 text-gray-800"
    >
      <div 
        className="max-w-xl mx-auto text-center p-8 rounded-2xl 
                   bg-white border-4 border-dashed border-blue-200 
                   shadow-2xl shadow-blue-200/50"
      >
        
        {/* Section Heading with an accent color */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-blue-800">
          Get In Touch 🤝
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          I am currently open to new opportunities and projects. Feel free to reach out!
        </p>

        {/* --- Contact Details List with Icons and Hover Effects --- */}
        <div className="space-y-6"> 
          
          {/* Email */}
          <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:ring-2 ring-blue-500 transition duration-300">
            <span className="text-xl text-blue-600">📧</span>
            <p className="text-lg text-gray-700">
              Email: 
              <a 
                href="mailto:bhawnadiwan24@navgurukul.org"
                className="font-semibold text-gray-900 ml-2 hover:text-blue-600 transition"
              >
                bhawnadiwan24@navgurukul.org
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:ring-2 ring-blue-500 transition duration-300">
            <span className="text-xl text-blue-600">📞</span>
            <p className="text-lg text-gray-700">
              Phone: 
              <span className="font-semibold text-gray-900 ml-2">
                +91 8305553447
              </span>
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:ring-2 ring-blue-500 transition duration-300">
            <span className="text-xl text-blue-600">📍</span>
            <p className="text-lg text-gray-700">
              Location: 
              <span className="font-semibold text-gray-900 ml-2">
                Jashpur, Chhattisgarh
              </span>
            </p>
          </div>
        </div>
        
        {/* Call to Action Button */}
        <a 
          href="https://linkedin.com/in/yourprofile" // 🔗 Add your LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-8 py-3 text-lg font-semibold rounded-full shadow-xl 
                     bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
        >
          Connect on LinkedIn 🤝
        </a>

      </div>
    </section>
  );
}
