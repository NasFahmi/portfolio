import Image from "next/image";
import Facebook from "../../../public/Facebook.png";
import Instagram from "../../../public/Instagram.png";
import Twitter from "../../../public/Twitter.png";
import Youtube from "../../../public/Youtube.png";
import Link from "next/link";
export default function Footer() {
    return (
        <div className='px-8 py-6 bg-Black2 text-whiteColor w-full'>
            <div className="flex justify-center items-center flex-col gap-5
            lg:gap-10 lg:mt-7">
                <div className="flex justify-center items-center gap-4">
                    <Link href=""><Image alt="Facebook" src={Facebook} className='w-[15%] lg:w-[100%]' /></Link>
                    <Link href=""><Image alt="Instagram" src={Instagram} className='w-[15%] lg:w-[100%]' /></Link>
                    <Link href=""><Image alt="Twitter" src={Twitter} className='w-[15%] lg:w-[100%]' /></Link>
                    <Link href=""><Image alt="Youtube" src={Youtube} className='w-[15%] lg:w-[100%]' /></Link>
                </div>
                <h1 className="lg:text-xl"><span className="text-Gray lg:text-xl">Copyright 2023 - </span> Nasrul Fahmi</h1>
            </div>
        </div>
    )
}
