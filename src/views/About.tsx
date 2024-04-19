import { useStateContext } from "../contexts/ContextProvider";

function About() {
  const { setActiveNavbarButton } = useStateContext();

  setActiveNavbarButton("about");

  return (
    <div className="flex flex-col gap-8 pt-24">
      <h1 className="animate-fade-down text-4xl animate-duration-500 animate-ease-out">
        About
      </h1>
      <h1 className="animate-fade-down animate-delay-100 animate-duration-500 animate-ease-out">
        This page is under construction...
      </h1>
    </div>
  );
}

export default About;
