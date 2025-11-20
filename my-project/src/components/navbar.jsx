export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-3 z-50">
      <ul className="flex justify-center gap-6 font-semibold">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}
