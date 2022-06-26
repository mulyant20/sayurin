import Image from "next/image"

export default function Category({src, text}) {
    return(
        <div className="grow lg:grow-0 h-[66px] w-[66px] md:h-fit lg:w-fit bg-white rounded lg:rounded-full flex flex-col lg:flex-row items-center justiyf-center px-0 lg:px-2 lg:pr-4 py-0 lg:py-[2px] cursor-pointer hover:shadow">
            <div className="h-[40px] w-[40px] relative text-center">
                <Image src={`/icons/${src}.png`} layout='fill'/>
            </div>
                <p className="text-gray-400 text-[12px] lg:text-md">{text}</p>
        </div>
    )
}