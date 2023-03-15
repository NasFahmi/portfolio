import Image from "next/image";
import Facebook from "../../../public/Facebook.png";
import Instagram from "../../../public/Instagram.png";
import Twitter from "../../../public/Twitter.png";
import Youtube from "../../../public/Youtube.png";
export default function Footer() {
    return (
        <div className='px-8 py-6 bg-Black2 text-whiteColor w-full'>
            <div className="flex justify-center items-center flex-col gap-5">
                <div className="flex justify-center items-center gap-4">
                    <Image alt="Facebook" src={Facebook} className='w-[15%]' />
                    <Image alt="Instagram" src={Instagram} className='w-[15%]' />
                    <Image alt="Twitter" src={Twitter} className='w-[15%]' />
                    <Image alt="Youtube" src={Youtube} className='w-[15%]' />
                </div>
                <h1><span className="text-Gray">Copyright 2023 - </span> Nasrul Fahmi</h1>
            </div>
        </div>
    )
}
