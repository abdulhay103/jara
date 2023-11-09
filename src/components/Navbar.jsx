export default function Navbar() {
    return (
        <div className="jara_tm_header fixed top-[-200px] left-0 right-0 z-[10] w-full h-auto float-left clear-both bg-black flex items-center justify-between py-0 px-[50px] transition-all duration-300 middle:hidden">
            <div className="logo">
                <a className="inline-block" href="#">
                    <img
                        className="max-w-[200px] max-h-[50px]"
                        src="assets/img/logo/logo.png"
                        alt=""
                    />
                </a>
            </div>
            <div className="menu">
                <ul className="anchor_nav">
                    <li className="current mr-[75px] inline-block">
                        <a
                            className="text_hover_gradient text-white inline-block py-[30px] px-0 font-syne font-medium"
                            href="#home"
                        >
                            Home
                        </a>
                    </li>
                    <li className="mr-[75px] inline-block">
                        <a
                            className="text_hover_gradient text-white inline-block py-[30px] px-0 font-syne font-medium"
                            href="#about"
                        >
                            About
                        </a>
                    </li>
                    <li className="mr-[75px] inline-block">
                        <a
                            className="text_hover_gradient text-white inline-block py-[30px] px-0 font-syne font-medium"
                            href="#project"
                        >
                            Project
                        </a>
                    </li>
                    <li className="mr-[75px] inline-block">
                        <a
                            className="text_hover_gradient text-white inline-block py-[30px] px-0 font-syne font-medium"
                            href="#pricing"
                        >
                            Pricing
                        </a>
                    </li>
                    <li className="inline-block">
                        <a
                            className="text_hover_gradient text-white inline-block py-[30px] px-0 font-syne font-medium"
                            href="#blog"
                        >
                            Blog
                        </a>
                    </li>
                </ul>
            </div>
            <div className="social">
                <ul>
                    <li className="mr-[13px] inline-block">
                        <a className="text-white" href="#">
                            <i className="icon-facebook-1" />
                        </a>
                    </li>
                    <li className="mr-[13px] inline-block">
                        <a className="text-white" href="#">
                            <i className="icon-twitter-1" />
                        </a>
                    </li>
                    <li className="inline-block">
                        <a className="text-white" href="#">
                            <i className="icon-instagram-1" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
