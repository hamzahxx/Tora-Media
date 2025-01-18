import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Navbar() {
  const container = useRef();
  // Reusable animation function
  function navbarAnimation(target) {
    const tl = gsap.timeline();
    tl.from("h1", {
      delay: 0.2,
      opacity: 0,
      duration: 0.5,
      y: -25,
    });
    tl.from(target, {
      stagger: 0.2,
      opacity: 0,
      duration: 0.2,
      y: -20,
    });
  }
  useGSAP(
    () => {
      const mediaSize = gsap.matchMedia();
      // Logic for nav items above size md
      mediaSize.add("(min-width: 768px)", () => {
        navbarAnimation("a");
      });

      // Logic for nav items below size md
      mediaSize.add("(max-width: 767px)", () => {
        navbarAnimation("#contact-btn");
      });
    },
    { scope: container },
  );
  return (
    <div
      ref={container}
      className="h-[12vh] px-10 flex justify-between items-center"
    >
      <h1 className="text-4xl pl-10 pr-16 text-text font-extrabold">Tora</h1>
      <ul className="hidden md:flex py-2 rounded-xl text-text">
        <a href="/" className="px-3 mx-3">
          <span className="duration-150 hover:font-extrabold">Home</span>
        </a>
        <a href="/" className="px-3 mx-3">
          <span className="duration-150 hover:font-extrabold">About</span>
        </a>
        <a href="/" className="px-3 mx-3">
          <span className="duration-150 hover:font-extrabold">Service</span>
        </a>
        <a href="/" className="px-3 mx-3">
          <span className="duration-150 hover:font-extrabold">Team</span>
        </a>
      </ul>
      <a href="/" id="contact-btn">
        <span className="text-2xl text-text font-extrabold px-8 py-1.5 md:py-2 border-2 border-black rounded-full duration-150 hover:text-white hover:bg-black">
          Contact
        </span>
      </a>
    </div>
  );
}

export default Navbar;
