import irobotlogo from "../assets/i-robot-logo.png";

function Home() {
  return (
    <div className="flex h-screen flex-col bg-purple-500">
      <div className="flex justify-center bg-orange-200 p-10">
        {/* <img src={irobotlogo} alt="logo" sizes="" /> */}
        <img src={irobotlogo} alt="SVG Logo Image" className="size-48"></img>
      </div>
      <div className="grow bg-cyan-200">test</div>
    </div>
  );
}

export default Home;
