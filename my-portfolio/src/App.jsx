import Navbar from "./components/Navbar";
import Body from "./components/Body";

const App = () => {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-slate-900">   
            <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>
            <div className="container mx-auto my-8 px-4 md:px-8">
                <Navbar />
                <Body />
            </div>
        </div>
    );
};

export default App;
