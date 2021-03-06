export default function SearchField() {
    return(
        <div className="relative w-full lg:max-w-[400px] h-[38px]">
            <input className="bg-white w-full h-full rounded outline-none px-4" placeholder="Cari cabai merah"/>
            <div className="absolute h-full px-[12px] w-fit right-0 -top-1/2 translate-y-[50%] rounded-r items-center bg-gray-100 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8F8E8E" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
        </div>
    )
}