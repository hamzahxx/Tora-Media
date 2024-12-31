function Navbar() {
  return (
    <div className="bg-background h-[12vh] px-10 flex justify-between items-center">
      <h1 className="text-4xl pl-10 pr-16 text-text font-extrabold">Tora</h1>
      <ul className="hidden md:flex py-2 rounded-xl text-text">
        <a href="/" className="px-3 mx-3 duration-150 hover:font-extrabold">
          Home
        </a>
        <a href="/" className="px-3 mx-3 duration-150 hover:font-extrabold">
          About
        </a>
        <a href="/" className="px-3 mx-3 duration-150 hover:font-extrabold">
          Service
        </a>
        <a href="/" className="px-3 mx-3 duration-150 hover:font-extrabold">
          Team
        </a>
      </ul>
      <a
        href="/"
        className="text-2xl text-text font-extrabold px-8 py-1.5 md:py-2 border-2 border-black rounded-full duration-150 hover:text-white hover:bg-black"
      >
        Contact
      </a>
    </div>
  );
}

export default Navbar;
