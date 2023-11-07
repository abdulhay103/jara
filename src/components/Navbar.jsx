export default function Navbar() {
    return (
        <div>
            <h1>hello</h1>
            <>
                {/* MOBILE MENU */}
                <div className="jara_tm_mobile_menu w-full h-auto fixed top-[-200px] left-0 hidden z-[10] transition-all duration-300 middle:block">
                    <div className="mobile_menu_inner w-full h-auto float-left clear-both bg-black px-[20px] py-[10px]">
                        <div className="mobile_in w-full h-auto clear-both float-left flex items-center justify-between">
                            <div className="logo">
                                <a href="#">
                                    <img
                                        className="max-w-[90px] max-h-[70px]"
                                        src="assets/img/logo/logo.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="trigger leading-[0]">
                                <div className="hamburger hamburger--slider">
                                    <div className="hamburger-box">
                                        <div className="hamburger-inner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown w-full h-auto clear-both float-left bg-black hidden">
                        <div className="dropdown_inner w-full h-auto clear-both float-left p-[20px]">
                            <ul className="anchor_nav">
                                <li className="float-left w-full">
                                    <a
                                        className="text-white inline-block p-0 font-syne font-medium"
                                        href="#home"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="float-left w-full">
                                    <a
                                        className="text-white inline-block p-0 font-syne font-medium"
                                        href="#about"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="float-left w-full">
                                    <a
                                        className="text-white inline-block p-0 font-syne font-medium"
                                        href="#project"
                                    >
                                        Project
                                    </a>
                                </li>
                                <li className="float-left w-full">
                                    <a
                                        className="text-white inline-block p-0 font-syne font-medium"
                                        href="#pricing"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li className="float-left w-full">
                                    <a
                                        className="text-white inline-block p-0 font-syne font-medium"
                                        href="#blog"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                            <div className="social w-full float-left pt-[30px] mt-[30px]">
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
                    </div>
                </div>
                {/* /MOBILE MENU */}
                {/* HEADER */}
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
                {/* /HEADER */}
            </>
        </div>
    );
}
