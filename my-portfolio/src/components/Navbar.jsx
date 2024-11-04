import { AiFillLinkedin,AiFillGithub,AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";


const Navbar = () => {
    return (
        <nav className="mb-25 flex items-center justify-between py-6">
            <div className=" flex flex-shrink-0  items-center font-bold text-xl ml-10 text-emerald-700 ">
                <button className="border-2 border-neutral-800 rounded-md b ">
                <a href="https://docs.google.com/document/d/15cyBW1L7-Olpg4KSgDKLpiX2JPdM5yti/edit?usp=sharing&ouid=109890119586344133342&rtpof=true&sd=true" target="blank" className="px-4 py-10 " >Resume</a>
                </button>
              </div> 
              <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <ul className="m-8 flex items-center justify-center gap-4 text-2xl">
               <a href="https://www.linkedin.com/in/haruhiko-yoshida-423773333/" target="blank"><AiFillLinkedin /></a>
                <a href= "https://github.com/Banshi-84" target="blank" ><AiFillGithub /></a>
                <a href="#" target="blank"><AiFillTwitterCircle /></a>
                <a href="#" target="blank"><AiFillInstagram /></a>
                </ul>
              </div>
                </nav>
    )
}

export default Navbar;
