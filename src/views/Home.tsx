import irobotlogo from "../assets/i-robot-logo.svg";

function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex justify-center">
        {/* <img src={irobotlogo} alt="logo" sizes="" /> */}
        <img src={irobotlogo} alt="SVG Logo Image" className="size-48"></img>
      </div>
      <div className="lex-col flex grow items-center justify-center font-medium">
        Currently under development...
      </div>
    </div>
  );
}

export default Home;
