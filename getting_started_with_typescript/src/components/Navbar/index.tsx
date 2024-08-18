/**
 * Exercise: Refactor the NavBar component to use other components.
 * To solve this problem here is what you need: 
 * 1. Create a new component called NavItem that receives a prop called href.
 * 2. Create a new component called ProfilePic that receives a prop called src.
 * 3. Refactor the NavBar component to use the NavItem and ProfilePic components.
 */


function NavBar() {
  return (
    <nav className="w-full h-16 bg-gray-800 shadow-md">
      <ul className="items-center flex justify-between p-4">
        <div className="flex items-center space-x-8 text-white text-xl">
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </div>
        <div className="flex items-center">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </ul>
    </nav>
  );
}

export { NavBar };
