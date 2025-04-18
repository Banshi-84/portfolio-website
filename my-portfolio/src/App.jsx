import Body from "./components/Body";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-slate-900">   
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="relative size-full bg-slate-700">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#5833ff_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
      </div>
      <div className="container mx-auto my-8">
        <Navbar /> 
        <Body />
        <About />
        <Tech />
        <Project />
        <Experience />
        <Form />
      </div>
    </div>
  );
};

export default App;


