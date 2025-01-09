import marketing from "../assets/Marketing-bro.svg";

function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:h-[88vh] px-10 pt-14 lg:pt-0">
      <div className="px-10 pt-3 lg:pt-10">
        <div>
          <h1 className="text-5xl lg:text-7xl text-center lg:text-left">
            Increase Your Leads by{" "}
            <span className="text-6xl lg:text-8xl font-bold italic font-mono">
              10x
            </span>
          </h1>
        </div>
        <div className="flex justify-center lg:justify-start">
          <a
            href="/"
            className="text-center bg-primary hover:bg-green-300 duration-150 rounded-3xl border-4 border-black font-bold my-6 mr-4 px-4 py-2"
          >
            Book a Free Consultation
          </a>
          <a
            href="/"
            className="text-center hover:bg-accent duration-150 rounded-3xl border-4 border-black font-bold my-6 ml-4 px-4 py-2"
          >
            Learn More
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
