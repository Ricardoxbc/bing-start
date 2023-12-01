import { IoIosAdd } from "react-icons/io";

const linksData = [
  {
    link: "https://www.google.com",
    logoUrl:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "Google",
  },
  {
    link: "https://www.facebook.com",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png",
    title: "Facebook",
  },
  {
    link: "https://www.youtube.com",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
    title: "YouTube",
  },
  {
    link: "https://www.twitter.com",
    logoUrl: "https://abs.twimg.com/icons/apple-touch-icon-192x192.png",
    title: "Twitter",
  },
  {
    link: "https://www.instagram.com",
    logoUrl:
      "https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",
    title: "Instagram",
  },
  {
    link: "https://www.netflix.com",
    logoUrl:
      "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",
    title: "Netflix",
  },
  {
    link: "https://www.whatsapp.com",
    logoUrl: "https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png",
    title: "WhatsApp",
  },
  {
    link: "https://www.microsoft.com",
    logoUrl: "https://c.s-microsoft.com/favicon.ico?v2",
    title: "Microsoft",
  },
];

export function Links() {
  return (
    <div className="mx-10 flex max-w-full flex-row items-center justify-center overflow-hidden text-white max-sm:grid max-sm:grid-cols-[repeat(5,1fr)] max-sm:grid-rows-2">
      {linksData.map((link) => (
        <LinkItem
          key={`${link.link}_${link.title}`}
          title={link.title}
          logoUrl={link.logoUrl}
          link={link.link}
        />
      ))}
      <button className="grid h-20 w-24 place-content-center rounded-lg hover:bg-slate-400 hover:bg-opacity-30">
        <span className="text-3xl text-slate-200">
          <IoIosAdd />
        </span>
      </button>
    </div>
  );
}

export function LinkItem({
  logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
  title = "www.youtube.com",
  link = "https://youtube.com",
}) {
  return (
    <a
      className="flex h-20 w-24 flex-col items-center gap-1 rounded-lg px-2 py-2 hover:bg-slate-400 hover:bg-opacity-30"
      href={link}
    >
      <div className="grid h-12 w-12 place-content-center rounded-xl bg-white p-2.5">
        <img src={logoUrl} alt={title} />
      </div>
      <div className="flex max-w-full">
        <span className="overflow-hidden text-ellipsis text-xs">{title}</span>
      </div>
    </a>
  );
}
