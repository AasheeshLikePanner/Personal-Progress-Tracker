import { MdSpaceDashboard } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar(){


    return(
        <div className="h-screen w-16 items-center justify-center flex flex-col gap-5  bg-[#faedcd] shadow-lg">
            <Link to={"/"}>
            <TiHome
                size={30} 
                className="text-[#d4a373] hover:text-[#b4783b] transition-transform duration-300 transform hover:scale-125 cursor-pointer hover:-translate-y-2" 
            />
            </Link>
            <Link to={'/dashboard'}>
            <MdSpaceDashboard 
                size={30} 
                className="text-[#d4a373] hover:text-[#b4783b] transition-transform duration-300 transform hover:scale-125 cursor-pointer hover:-translate-y-2" 
            />
            </Link>
            <Link to={'/task'}>
            <LuFileSpreadsheet 
                size={30} 
                className="text-[#d4a373] hover:text-[#b4783b]  transition-transform duration-300 transform hover:scale-125 cursor-pointer hover:-translate-y-2" 
            />
            </Link>
        </div>
    )
}