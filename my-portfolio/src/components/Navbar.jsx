import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center font-bold text-xl ml-10 text-emerald-700">
                <button className="border-2 border-neutral-800 rounded-md">
                    <a
                        href="https://docs.google.com/document/d/15cyBW1L7-Olpg4KSgDKLpiX2JPdM5yti/edit?usp=sharing&ouid=109890119586344133342&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2"
                    >
                        Resume
                    </a>
                </button>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <ul className="flex items-center justify-center gap-4">
                    <li>
                        <a href="https://www.linkedin.com/in/haruhiko-yoshida-423773333/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Banshi-84" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <AiFillTwitterCircle />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
