import Image from "next/image"
import { useState } from "react"

export default function CardProduct({nama, harga, satuan, jumbeli}) {
    const [isActive, setIsActive] = useState(false)
    
    const url = process.env.NEXT_PUBLIC_GITHUB_URL
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
    const handleActive = () => {
        isActive ? setIsActive(false) : setIsActive(true)
    }
    return(
        <div className="card-product min-h-[200px] bg-white/80 hover:bg-white hover:shadow-sm border border-transparent hover:border-primary rounded-[8px] relative p-2 duration-[150ms] ease-in">
            <div className="w-full h-24 rounded-[5px] border border-gray-200 overflow-hidden relative">
                <Image src='/img/productPlaceholder.png' width='150' height='150' layout="fill"/>
                <button className="absolute right-0 w-10 h-10 flex items-center justify-center" onClick={handleActive}>
                    {isActive? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF6D6A" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BFBFBF" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        )
                    }
                </button>
            </div>
            <p className="mt-2 text-md text-gray-400">{nama}</p>
            <p className="text-gray-500 text-[17px] font-semibold">Rp. {harga}<span className="text-gray-200 font-normal text-[14px]">/{satuan}</span></p>
            <div className="mt-2">
                <p className="text-gray-300 text-[12px] mb-2">Terjual {jumbeli}</p>
                <button
                    className="w-full py-1 text-sm text-blue-400 hover:text-white bg-blue-100 hover:bg-blue-600 rounded-[5px] duration-[150ms] ease-in">
                    Tambah
                </button>
            </div>
        </div>
    )
}