import HTML from "../../../public/HTML.png";
import CSS from "../../../public/CSS.png";
import Javascript from "../../../public/Javascript.png";
import Nodejs from "../../../public/NodeJS.png";
import ReactLogo from "../../../public/React.png";
import NextJS from "../../../public/NextJS.png";
import Tailwind from "../../../public/Tailwind.png";
import Hero from "../../../public/HeroSection.png";
// import Facebook from "../../../public/Facebook.png";
// import Instagram from "../../../public/Instagram.png";
// import Twitter from "../../../public/Twitter.png";
// import Youtube from "../../../public/Youtube.png";
import Image from "next/image";
export default function Section() {
    return (
        <div className="container px-10 py-8 text-whiteColor flex flex-col gap-5">
            <div className="bg-Blue px-3 py-4  rounded-lg w-52">
                <h1>I’am Frontend Developer</h1>
            </div>
            <h1 className="text-2xl">Nasrul Fahmi Ulumuddin</h1>
            <p className="text-sm text-Gray">Saya adalah seorang Frontend Developer yang berfokus pada pengembangan website yang dapat memberikan pengalaman pengguna yang terbaik dan responsif. Saya memiliki pengalaman dalam mengembangkan website dengan HTML, CSS, JavaScript dan berbagai framework seperti React dan Next Js</p>
            <div className="flex items-center justify-between w-[100%] gap-4">
                <div><Image src={HTML} alt='css' /></div>
                <div><Image src={CSS} alt='css' /></div>
                <div><Image src={Javascript} alt='css' /></div>
                <div><Image src={Nodejs} alt='css' /></div>
                <div> <Image src={ReactLogo} alt='css' /></div>
                <div><Image src={NextJS} alt='css' /></div>
                <div><Image src={Tailwind} alt='css' /></div>
            </div>
            <div className="mt-6">
                <Image src={Hero} alt='Section'/>
            </div>
        </div>
    )
}
