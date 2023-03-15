import React from 'react'

export default function Contact() {
    return (
        <div className='container px-8 py-6'>
                <h1 className='text-whiteColor text-center text-xl font-medium mb-8'>Tell me about you next project</h1>
            <div className="bg-Black2 p-8 rounded-3xl text-whiteColor">
                <div className="">
                    <form action="" className='flex flex-col gap-4'>
                        <div className=" bg-Black3 px-3 py-2 rounded-lg flex flex-row justify-center items-center">
                            <label htmlFor=""  className='text-sm'>From: </label>
                            <input type="text" name="" id="" className='shadow bg-transparent appearance-none border-none rounded-md py-2 px-3  focus:outline-none w-full' />
                        </div>
                        <div className=" bg-Black3 px-3 py-2 rounded-lg flex flex-row justify-center items-center">
                            <label htmlFor=""  className='text-sm'>Subject: </label>
                            <input type="text" name="" id="" className='shadow bg-transparent appearance-none border-none rounded-md py-2 px-3  focus:outline-none w-full' />
                        </div>
                        <div className=" bg-Black3 px-3 py-2 rounded-lg flex flex-col h-40">
                            <label htmlFor=""  className='text-sm'>Message: </label>
                            {/* <input type="" name="" id="" className=' bg-transparent appearance-none border-none rounded-md focus:outline-none w-full overflow-y-auto' /> */}
                            <textarea name="" id="" cols="30" rows="10" className='bg-transparent appearance-none border-none rounded-md focus:outline-none w-full resize-none'></textarea>
                        </div>
                        <button type="submit" className='bg-Blue px-3 py-4  rounded-lg w-full'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
