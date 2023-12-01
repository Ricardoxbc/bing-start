import { IoOptionsOutline } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { MdOutlineClear } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { BsBing } from "react-icons/bs";
import { FcGlobe } from "react-icons/fc";

export function Header() {
  return (
    <div className="relative flex flex-row items-center justify-between p-3">
      <div className="ml-2 flex items-center justify-start gap-2 max-sm:absolute max-sm:left-2 max-sm:top-2">
        <span className="cursor-pointer rounded-md p-2 text-2xl hover:bg-slate-400 hover:bg-opacity-30">
          <IoOptionsOutline />
        </span>
        <div className="flex flex-row items-center justify-start gap-2 max-lg:hidden">
          <div className="w-5">
            <img
              className="h-auto w-full"
              src="https://c.s-microsoft.com/favicon.ico?v2"
            />
          </div>
          <h2 className="text-xl tracking-tighter">Microsoft start</h2>
        </div>
      </div>

      <div className="flex max-w-4xl flex-row flex-nowrap items-center justify-center text-black max-sm:m-auto max-sm:mt-8  md:w-1/2">
        <span className="grid h-12 place-content-center rounded-l-full bg-white px-5 text-xl">
          <IoSearchOutline />
        </span>
        <div className="flex h-12 w-full items-center justify-center bg-white">
          <input
            id="input-search"
            type="text"
            className="w-full border-none text-xl outline-none"
          />
        </div>
        <span className="z-10 grid h-12 place-content-center rounded-r-full bg-white px-5 text-xl">
          <span className="hidden">
            <MdOutlineClear />
          </span>
          <span className="block">
            <BsBing />
          </span>
        </span>
      </div>

      <div className="mr-2 flex items-center justify-end gap-0 text-2xl max-sm:absolute max-sm:right-2 max-sm:top-2">
        <div className="flex cursor-pointer flex-row items-center gap-2 rounded-md p-2 px-5 hover:bg-slate-400 hover:bg-opacity-30 max-lg:hidden">
          <span className="mr-2 hidden text-base xl:block">Ubicación</span>
          <FcGlobe />
          <h3 className="relative text-lg">
            31<span className="text-xs"> °C </span>
          </h3>
        </div>
        <div className="cursor-pointer rounded-md p-2 hover:bg-slate-400 hover:bg-opacity-30">
          <RiNotification2Line />
        </div>
        <div className="cursor-pointer rounded-md p-2 hover:bg-slate-400 hover:bg-opacity-30">
          <HiOutlineCog8Tooth />
        </div>
      </div>
    </div>
  );
}
