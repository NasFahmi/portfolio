import HTML from "../../../public/HTML.png";
import ReactLogo from "../../../public/React.png";
import Tailwind from "../../../public/Tailwind.png";
import { UilGlobe, UilGithub, UilLocationArrow } from '@iconscout/react-unicons';

import Image from "next/image";
export default function Project() {
  return (
    <div className="container px-10 py-8 mx-auto max-w-[480px] 
    sm:max-w-[640px]
    lg:max-w-5xl
    xl:max-w-7xl" id="Project">
      <h1 className="text-whiteColor text-center text-xl font-medium mb-8
      sm:text-2xl">Project I have been Made</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10
      lg:grid-cols-4">
        <div className="bg-Black3 p-7 max-w-[330px] mx-auto rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-Black2 h-fit
        lg:max-w-[218px] 
        xl:max-w-[330px] ">
          <div className="flex justify-between flex-col gap-16">
            <div className=" ">
              <div className="flex justify-start items-center gap-4 mb-4">
                <Image src={HTML} alt='HTML' className="w-[10%]" />
                <Image src={ReactLogo} alt='React' className="w-[12%]" />
                <Image src={Tailwind} alt='Tailwind' className="w-[12%]" />
              </div>
              <div className="title text-whiteColor font-medium text-3xl mb-2">
                <h1 className="lg:text-sm
                xl:text-xl">Eventoy <br />
                  Landing Page</h1>
              </div>
              <div className="subtitle text-Gray font-normal">
                <p className="lg:text-xs
                xl:text-base">Find Any Perfect Venue For Whereever Life Takes You!</p>
              </div>
            </div>
            <div className="flex justify-center items-center text-whiteColor text-sm gap-2">
              <div className="flex justify-center items-center gap-2 ">
                <UilGlobe className="lg:w-4 xl:w-6"/>
                <div className="flex justify-center items-center gap-1 flex-row">
                  <p className="lg:text-xs xl:text-sm">Website</p>
                  <UilLocationArrow className="lg:w-4 xl:w-6" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <UilGithub  className="lg:w-4 xl:w-6"/>
                <div className="flex justify-center items-center gap-1 flex-row">
                  <p className="lg:text-xs xl:text-sm">Github</p>
                  <UilLocationArrow className="lg:w-4 xl:w-6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-Black3 p-7 max-w-[330px] mx-auto rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-Black2 h-fit
        lg:max-w-[218px] 
        xl:max-w-[330px] ">
          <div className="flex justify-between flex-col gap-16">
            <div className=" ">
              <div className="flex justify-start items-center gap-4 mb-4">
                <Image src={HTML} alt='HTML' className="w-[10%]" />
                <Image src={ReactLogo} alt='React' className="w-[12%]" />
                <Image src={Tailwind} alt='Tailwind' className="w-[12%]" />
              </div>
              <div className="title text-whiteColor font-medium text-3xl mb-2">
                <h1 className="lg:text-sm
                xl:text-xl">Eventoy <br />
                  Landing Page</h1>
              </div>
              <div className="subtitle text-Gray font-normal">
                <p className="lg:text-xs
                xl:text-base">Find Any Perfect Venue For Whereever Life Takes You!</p>
              </div>
            </div>
            <div className="flex justify-center items-center text-whiteColor text-sm gap-2">
              <div className="flex justify-center items-center gap-2 ">
                <UilGlobe className="lg:w-4 xl:w-6"/>
                <div className="flex justify-center items-center gap-1 flex-row">
                  <p className="lg:text-xs xl:text-sm">Website</p>
                  <UilLocationArrow className="lg:w-4 xl:w-6" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <UilGithub  className="lg:w-4 xl:w-6"/>
                <div className="flex justify-center items-center gap-1 flex-row">
                  <p className="lg:text-xs xl:text-sm">Github</p>
                  <UilLocationArrow className="lg:w-4 xl:w-6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-Black3 p-7 max-w-[330px] mx-auto rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-Black2 h-fit
        lg:max-w-[218px] 
        xl:max-w-[330px] ">
          <div className="flex justify-between flex-col gap-16">
            <div className=" ">
              <div className="flex justify-start items-center gap-4 mb-4">
                <Image src={HTML} alt='HTML' className="w-[10%]" />
                <Image src={ReactLogo} alt='React' className="w-[12%]" />
                <Image src={Tailwind} alt='Tailwind' className="w-[12%]" />
              </div>
              <div className="title text-whiteColor font-medium text-3xl mb-2">
                <h1 className="lg:text-sm
                xl:text-xl">Eventoy <br />
                  Landing Page</h1>
              </div>
              <div className="subtitle text-Gray font-normal">
                <p className="lg:text-xs
                xl:text-base">Find Any Perfect Venue For Whereever Life Takes You!</p>
              </div>
            </div>
            <div className="flex justify-center items-center text-whiteColor text-sm gap-2">
              <div className="flex justify-center items-center gap-2 ">
                <UilGlobe className="lg:w-4 xl:w-6"/>
                <div className="flex justify-center items-center gap-1 flex-row">
                  <p className="lg:text-xs xl:text-sm">Website</p>
                  <UilLocationArrow className="lg:w-4 xl:w-6" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <UilGithub  className="lg:w-4 xl:w-6"/>
                <div className="flex justify-center items-center gap-1 flex-row">
                  <p className="lg:text-xs xl:text-sm">Github</p>
                  <UilLocationArrow className="lg:w-4 xl:w-6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-Black3 p-7 max-w-[330px] mx-auto rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-Black2 h-fit
        lg:max-w-[218px] 
        xl:max-w-[330px] ">
          <div className="flex justify-between flex-col gap-16">
            <div className=" ">
              <div className="flex justify-start items-center gap-4 mb-4">
                <Image src={HTML} alt='HTML' className="w-[10%]" />
                <Image src={ReactLogo} alt='React' className="w-[12%]" />
                <Image src={Tailwind} alt='Tailwind' className="w-[12%]" />
              </div>
              <div className="title text-whiteColor font-medium text-3xl mb-2">
                <h1 className="lg:text-sm
                xl:text-xl">Eventoy <br />
                  Landing Page</h1>
              </div>
              <div className="subtitle text-Gray font-normal">
                <p className="lg:text-xs
                xl:text-base">Find Any Perfect Venue For Whereever Life Takes You!</p>
              </div>
            </div>
            <div className="flex justify-center items-center text-whiteColor text-sm gap-2">
              <div className="flex justify-center items-center gap-2 ">
                <UilGlobe className="lg:w-4 xl:w-6"/>
                <div className="flex justify-center items-center gap-1 flex-row">
                  <p className="lg:text-xs xl:text-sm">Website</p>
                  <UilLocationArrow className="lg:w-4 xl:w-6" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <UilGithub  className="lg:w-4 xl:w-6"/>
                <div className="flex justify-center items-center gap-1 flex-row">
                  <p className="lg:text-xs xl:text-sm">Github</p>
                  <UilLocationArrow className="lg:w-4 xl:w-6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
