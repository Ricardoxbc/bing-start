import clsx from "clsx";

import { Header } from "./components/header";
import { Links } from "./components/Content";

export default function App() {
  return (
    <>
      <header className="text-white">
        <Header />
      </header>
      <nav>
        <Links />
      </nav>
      <main className="px-8">
        <News />
      </main>
    </>
  );
}

import { BsStars } from "react-icons/bs";
export function News() {
  return (
    <div className="mx-auto my-2 flex w-full max-w-7xl flex-col gap-2 rounded-xl bg-white px-4 py-1">
      <div className="flex flex-row items-center justify-between">
        <div className="mr-4 flex max-w-full flex-row items-center justify-start gap-4 overflow-hidden">
          <a
            className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-blue-600 ring-1 ring-slate-300"
            href="#"
          >
            Descubrir
          </a>
          <LinkCategoryItem />
          <LinkCategoryItem />
          <LinkCategoryItem />
          <LinkCategoryItem />
          <LinkCategoryItem />
          <LinkCategoryItem />
        </div>
        <button className="flex flex-row items-center gap-2 rounded-full px-3 py-1 ring-1 ring-slate-600 hover:ring-slate-400">
          <BsStars />
          <span className="text-sm max-sm:hidden">Personalizar</span>
        </button>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 max-sm:grid-cols-1">
        <NewsCardLarge />
        <NewsCardDetails />
        <NewsCardSimple
          imageUrl={`https://picsum.photos/${Math.floor(
            Math.random() * 200 + 200,
          )}`}
        />
        <NewsCardSimple
          imageUrl={`https://picsum.photos/${Math.floor(
            Math.random() * 200 + 200,
          )}`}
        />
        <NewsCardSimple
          imageUrl={`https://picsum.photos/${Math.floor(
            Math.random() * 200 + 200,
          )}`}
        />
        <NewsCardSimple
          imageUrl={`https://picsum.photos/${Math.floor(
            Math.random() * 200 + 200,
          )}`}
        />
      </div>
    </div>
  );
}

import { RiChat1Line } from "react-icons/ri";
import { BsHandThumbsDown } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";

export function NewsCardSimple({
  imageUrl = "https://picsum.photos/600/300",
  title = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,  distinctio!",
}) {
  return (
    <div className="relative flex h-72 flex-col rounded-lg bg-white">
      <div className="h-32 overflow-clip">
        <img className="h-auto w-full" src={imageUrl} alt="" />
      </div>
      <div className="flex flex-row items-center gap-2 p-1 px-3 pt-3 ">
        <span className="text-sm text-slate-700">Debate</span>
        <span className="text-sm text-slate-700">1h</span>
      </div>
      <div className="px-3">
        <h2 className="max-h-20 overflow-hidden text-ellipsis text-xl font-medium leading-tight text-slate-800">
          {title}
        </h2>
      </div>
      <div className="absolute bottom-1 left-2 flex flex-row text-xl">
        <button className="rounded-md p-2 hover:bg-slate-300 hover:bg-opacity-30">
          <BsHandThumbsUp />
        </button>
        <button className="rounded-md p-2 hover:bg-slate-300 hover:bg-opacity-30">
          <BsHandThumbsDown />
        </button>
        <button className="rounded-md p-2 hover:bg-slate-300 hover:bg-opacity-30">
          <RiChat1Line />
        </button>
      </div>
    </div>
  );
}

export function NewsCardLarge({
  imageUrl = "https://picsum.photos/800/300",
  title = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,  distinctio sit amet consectetur adipisicing elit. Eaque!",
}) {
  return (
    <div className="relative flex h-72 flex-col justify-end rounded-lg bg-white sm:col-span-2">
      <div className="absolute inset-0 z-0 h-full w-full overflow-clip">
        <img className="h-auto w-full" src={imageUrl} alt="" />
      </div>
      <div className="z-10 flex h-44 flex-col justify-between bg-gradient-to-b from-transparent to-black pt-4 text-white">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2 p-1 px-3 pt-3 ">
            <span className="text-sm">Debate</span>
            <span className="text-sm">1h</span>
          </div>
          <div className="px-3">
            <h2 className="max-h-20 overflow-hidden text-ellipsis text-xl font-semibold leading-tight">
              {title}
            </h2>
          </div>
        </div>
        <div className="flex flex-row p-1 text-xl">
          <button className="rounded-md p-2 hover:bg-slate-300 hover:bg-opacity-30">
            <BsHandThumbsUp />
          </button>
          <button className="rounded-md p-2 hover:bg-slate-300 hover:bg-opacity-30">
            <BsHandThumbsDown />
          </button>
          <button className="rounded-md p-2 hover:bg-slate-300 hover:bg-opacity-30">
            <RiChat1Line />
          </button>
        </div>
      </div>
    </div>
  );
}

import { HiTrendingUp } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { FcBarChart } from "react-icons/fc";
export function NewsCardDetails() {
  return (
    <div className="relative flex h-72 flex-col rounded-lg bg-white bg-gradient-to-br from-purple-100 to-blue-200 px-3 py-1">
      <div className="mb-1 flex flex-row items-center justify-center gap-1">
        <span className="text-green-500">
          <HiTrendingUp />
        </span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-700 hover:underline">
          Sugerencias de la lista de seguimiento
        </span>
        <button className="rounded-full p-2.5 text-center hover:bg-slate-300 hover:bg-opacity-30">
          <BsThreeDots />
        </button>
      </div>
      <div className="flex flex-col gap-1.5">
        <CardDetailItem
          currentValue={35950.89}
          name=""
          token="DJI"
          trend={1.47}
        />
        <CardDetailItem
          currentValue={57557.13}
          name="Índice bursátil"
          token="UPKoin"
          trend={-0.11}
        />
        <CardDetailItem
          currentValue={35.42}
          name="Dólar estadounidense/Bolivares"
          token="USD/VES"
          trend={0}
        />
        <CardDetailItem
          currentValue={4007.57}
          name="Dólar usd/Pesos col"
          token="USD/COP"
          trend={0}
        />
        <CardDetailItem currentValue={38.57} name="" token="DJI" trend={1.47} />
      </div>
    </div>
  );
}

export function CardDetailItem({
  token = "DJI",
  name = "Bolivar soberano XD",
  trend = 1.47,
  currentValue = 12345.6,
}) {
  return (
    <div className="grid grid-cols-[6fr_2fr_2fr_1fr] overflow-hidden items-center rounded-md bg-slate-100 px-2 py-1 text-slate-700 hover:bg-white hover:bg-opacity-80">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <span className="text-sm font-semibold">{token}</span>
          <span className="text-green-500">
            <HiTrendingUp />
          </span>
        </div>
        <span
          className={clsx(
            "overflow-hidden text-ellipsis whitespace-nowrap text-[.6rem] font-semibold",
            {
              "text-green-600": trend > 1,
            },
          )}
        >
          {trend > 1 ? "Aumentando rápidamente" : name}
        </span>
      </div>
      <div className="justify-self-center">
        <span>
          <FcBarChart />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center text-xs text-slate-700">
        <span
          className={clsx("font-semibold", {
            "text-green-500": trend > 1,
            "text-red-500": trend < 0,
          })}
        >
          {trend.toFixed(2)}%
        </span>
        <span className="text-[.65rem] font-semibold">
          {currentValue.toFixed(2)}
        </span>
      </div>
      <button className="justify-self-center">
        <IoAddCircleOutline />
      </button>
    </div>
  );
}

export function LinkCategoryItem({ link = "#", label = "Deportes" }) {
  return (
    <a className="p-2 text-sm text-slate-800 hover:text-slate-500" href={link}>
      {label}
    </a>
  );
}
