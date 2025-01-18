import marketing from "../assets/Marketing-bro.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Hero() {
  const container = useRef();
  function heroAnimation(order, firstDelay) {
    const tl = gsap.timeline();
    order.forEach((selector) => {
      tl.from(selector, {
        opacity: 0,
        duration: 0.3,
        delay: firstDelay,
        stagger: selector === "a" ? 0.3 : 0,
      });
      firstDelay = 0;
    });
  }

  useGSAP(
    () => {
      const mediaSize = gsap.matchMedia();

      mediaSize.add("(min-width: 1024px)", () => {
        heroAnimation(["h1", "a", "img"], 1.7);
      });
      mediaSize.add("(min-width: 768px) and (max-width: 1023px)", () => {
        heroAnimation(["img", "h1", "a"], 1.7);
      });
      mediaSize.add("(max-width: 767px)", () => {
        heroAnimation(["img", "h1", "a"], 0.9);
      });

      mediaSize.add("all", () => {
        console.log("Error: Fallback animation executed.");
      });
    },
    { scope: container },
  );
  return (
    <div
      ref={container}
      className="flex flex-col-reverse lg:flex-row justify-center items-center lg:h-[88vh] px-10 pt-14 lg:pt-0"
    >
      <div className="px-10 pt-3 lg:pt-10">
        <div className="Hero-Content">
          <h1 className="text-5xl lg:text-7xl text-center lg:text-left">
            Increase Your Leads by{" "}
            <span className="text-6xl lg:text-8xl font-bold italic font-mono">
              10x
            </span>
          </h1>
        </div>
        <div className="h-full py-6 md:py-7 lg:py-8 flex justify-center lg:justify-start">
          <a href="/">
            <div className="text-center bg-primary hover:bg-green-300 duration-200 rounded-3xl border-4 border-black font-bold mr-2 lg:mr-4 px-2 lg:px-4 py-2">
              Book a Free Consultation
            </div>
          </a>
          <a href="/">
            <div className="text-center hover:bg-accent duration-150 rounded-3xl border-4 border-black font-bold ml-2 lg:ml-4 px-2 lg:px-4 py-2">
              Learn More
            </div>
          </a>
        </div>
      </div>
      <img
        src={marketing}
        className="lg:px-10 lg:py-0 h-[45vh] lg:h-[70vh] w-auto"
        alt="Marketing Image"
      />
    </div>
  );
}

export default Hero;
