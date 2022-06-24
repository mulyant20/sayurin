import Link from "next/link";

export default function NavbarDetail({title, path}) {
    return (
        <div className="w-screen h-[56px] lg:h-[72px] bg-primary">
            <div className="max-w-[500px] h-full flex items-center justify-center relative mx-auto">
            <Link href={path}>
                <button className="absolute top-1/2 -translate-y-1/2 left-0 w-[32px] h-[32px] flex justify-center items-center hover:bg-white/20 rounded duration-[160ms] ease-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </button>
            </Link>
            <h1 className="text-[20px] font-semibold text-white">
                {title}
            </h1>
        </div>
        </div>
    )
}