import HTML from "../../../public/HTML.png";
import CSS from "../../../public/CSS.png";
import Javascript from "../../../public/Javascript.png";
import Nodejs from "../../../public/NodeJS.png";
import ReactLogo from "../../../public/React.png";
import Nextjs from "../../../public/NextJs.png";
import Tailwind from "../../../public/Tailwind.png";
import Hero from "../../../public/HeroSection.png";
import { UilEnvelope, UilLocationArrow, UilGithub } from '@iconscout/react-unicons'
import Image from "next/image";
import Link from "next/link";
export default function Section() {
    return (
        <div className="container px-10 py-8 text-whiteColor grid grid-flow-row grid-cols-1 gap-5 mx-auto max-w-[480px]
        sm:max-w-[640px]
        lg:max-w-5xl lg:grid-flow-row lg:grid-cols-2 lg:gap-8
        xl:max-w-7xl">
            <div className="flex flex-col gap-5 xl:max-w-[550px]">
                <div className="bg-Blue px-3 py-4 flex justify-center items-center  rounded-lg w-52
                sm:w-60">
                    <h1 className="sm:text-lg">I’am Frontend Developer</h1>
                </div>
                <h1 className="text-2xl sm:text-3xl">Nasrul Fahmi Ulumuddin</h1>
                <p className="text-sm text-Gray mb-4 sm:text-base">Saya adalah seorang Frontend Developer yang berfokus pada pengembangan website yang dapat memberikan pengalaman pengguna yang terbaik dan responsif. Saya memiliki pengalaman dalam mengembangkan website dengan HTML, CSS, JavaScript dan berbagai framework seperti React dan Next Js</p>
                <div className="flex items-center justify-between w-[100%] gap-4">
                    <div><Link href='https://id.wikipedia.org/wiki/HTML'><Image src={HTML} alt='css' /></Link></div>
                    <div><Link href='https://en.wikipedia.org/wiki/CSS'><Image src={CSS} alt='css' /></Link></div>
                    <div><Link href='https://id.wikipedia.org/wiki/JavaScript'><Image src={Javascript} alt='css' /></Link></div>
                    <div><Link href='https://nodejs.org/en/'><Image src={Nodejs} alt='css' /></Link></div>
                    <div><Link href='https://reactjs.org/'><Image src={ReactLogo} alt='css' /></Link></div>
                    <div><Link href='https://nextjs.org/'><Image src={Nextjs} alt='css' /></Link></div>
                    <div><Link href='https://tailwindcss.com/'><Image src={Tailwind} alt='css' /></Link></div>
                </div>
                <div className="flex gap-2 justify-center items-center sm:justify-start sm:gap-4 sm:my-3">
                    <div className="w-10 h-10 rounded-full bg-Gray hidden sm:flex"></div>
                    <Link href="mailto:75nasrulfahmi@gmail.com"><div className="px-3 py-1 bg-DarkBlue rounded-md">
                        <div className="flex gap-2">
                            <UilEnvelope />
                            <div className="flex gap-1 justify-center items-center">
                                <h1 className="text-sm whitespace-nowrap">Mail me</h1>
                                <UilLocationArrow />
                            </div>
                        </div>
                    </div></Link>
                    <Link href='https://github.com/NasFahmi'><div className="px-3 py-1 bg-DarkBlue rounded-md flex justify-center items-center">
                        <div className="flex gap-2">
                            <UilGithub />
                            <div className="flex justify-center items-center gap-1 flex-row">
                                <p className="text-sm">Github</p>
                                <UilLocationArrow />

                            </div>
                        </div>
                    </div></Link>
                </div>
            </div>
            <div className="mt-6 flex justify-center items-center xl:justify-end">
                <Image src={Hero} alt='Section' className="sm:w-[70%] lg:w-[100%] xl:w-[80%]" />
            </div>
        </div>
    )
}
