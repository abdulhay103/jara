export default function Hero() {
    return (
        <div
            className="jara_tm_section w-full h-auto clear-both float-left"
            id="home"
        >
            <div className="jara_tm_hero w-full min-w-[100vh] clear-both float-left bg-[#F3F3F3]">
                <div className="container">
                    <div className="content w-full h-auto flex items-center pt-[150px]">
                        <div className="left w-1/2 opacity-0 translate-x-[-30px] transition-all duration-300">
                            <div className="hello w-full h-auto relative mb-[6px]">
                                <span className="font-syne font-bold text-heading-color text-[20px] leading-[26px] pl-[50px]">
                                    <img
                                        className="svg absolute left-0 top-1/2 translate-y-[-50%] w-[40px] h-[40px]"
                                        src="/img/svg/hand.svg"
                                        alt=""
                                    />
                                    Hello, World!
                                </span>
                            </div>
                            <div className="title w-full float-left mb-[20px]">
                                <h2 className="text-heading-color font-syne text-[120px] font-bold leading-[115px]">
                                    I'm Jara
                                </h2>
                                <h3 className="text-[80px] leading-[88px]">
                                    UI Designer
                                </h3>
                            </div>
                            <div className="subtitle w-full float-left mb-[40px]">
                                <p className="text-heading-color lining-nums proportional-nums font-syne text-[32px] font-bold leading-[40px]">
                                    With 10 yrs experience
                                </p>
                            </div>
                            <div className="buttons w-full float-left flex">
                                <div className="jara_tm_button">
                                    <a className="anchor" href="#footer">
                                        Say Hello
                                    </a>
                                </div>
                                <div className="jara_tm_button_border">
                                    <a className="anchor" href="#project">
                                        My Works
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="right w-1/2 opacity-0 translate-x-[30px] transition-all duration-300">
                            <div className="in inline-block relative float-right">
                                <img
                                    className="max-h-[650px] max-w-[550px]"
                                    src="/img/about/1.jpg"
                                    alt=""
                                />
                                <div className="play">
                                    <img
                                        className="svg"
                                        src="/img/svg/rightArrow.svg"
                                        alt=""
                                    />
                                    <img
                                        className="animate_image"
                                        src="/img/video/1.png"
                                        alt=""
                                    />
                                    <a
                                        className="jara_tm_full_link popup-youtube"
                                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tm_partners w-full h-auto clear-both float-left flex items-center mt-[75px] pb-[50px] translate-y-[30px] opacity-0 transition-all duration-300">
                        <div className="text w-[15%]">
                            <p className="font-medium text-[18px] text-[rgba(22,21,19,.6)]">
                                Worked with
                                <br />
                                companies
                            </p>
                        </div>
                        <div className="list w-[85%] overflow-hidden relative">
                            <div className="marquee">
                                <ul className="flex">
                                    <li className="mr-20px flex items-center justify-center">
                                        <img
                                            className="max-w-[200px] max-h-[100px]"
                                            src="/img/partners/1.png"
                                            alt=""
                                        />
                                    </li>
                                    <li className="mr-20px flex items-center justify-center">
                                        <img
                                            className="max-w-[200px] max-h-[100px]"
                                            src="/img/partners/2.png"
                                            alt=""
                                        />
                                    </li>
                                    <li className="mr-20px flex items-center justify-center">
                                        <img
                                            className="max-w-[200px] max-h-[100px]"
                                            src="/img/partners/3.png"
                                            alt=""
                                        />
                                    </li>
                                    <li className="mr-20px flex items-center justify-center">
                                        <img
                                            className="max-w-[200px] max-h-[100px]"
                                            src="/img/partners/4.png"
                                            alt=""
                                        />
                                    </li>
                                    <li className="flex items-center justify-center">
                                        <img
                                            className="max-w-[200px] max-h-[100px]"
                                            src="/img/partners/5.png"
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
