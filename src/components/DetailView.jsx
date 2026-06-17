import Image from "next/image";
import { imageUrl } from "@/lib/api";
import {
  BsCalendar2,
  BsDoorOpen,
  BsClock,
  BsGeoAlt,
  BsTag,
  BsCurrencyDollar,
} from "react-icons/bs";
import { MdOutline18UpRating } from "react-icons/md";
import BtnNormal from "./BtnNormal";
const Detailview = ({ event }) => {
  return (
    <>
      <section className="relative w-full h-[500px]">
        <Image
          src={imageUrl(event.heroAsset.url)}
          alt={event.heroAsset.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2">
          <h1 className="uppercase font-bold text-white" style={{ fontSize: "var(--step-3)" }}>
            {event.title}
          </h1>
          <p className="text-brand text-sm tracking-wide">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-white/80 max-w-sm text-sm">{event.excerpt}</p>
        </div>
      </section>
      <section className="border border-(--color-brand) mx-8 my-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 divide-x divide-white/10">
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <BsCalendar2 className="text-brand text-xl" />
            <span className="text-white/50 text-xs uppercase tracking-wider">Date</span>
            <span className="text-white text-sm">
              {new Date(event.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <BsDoorOpen className="text-brand text-xl" />
            <span className="text-white/50 text-xs uppercase tracking-wider">Doors Open</span>
            <span className="text-white text-sm">
              {new Date(event.doorsOpen).toLocaleTimeString("da-DK", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <BsClock className="text-brand text-xl" />
            <span className="text-white/50 text-xs uppercase tracking-wider">Event Start</span>
            <span className="text-white text-sm">
              {new Date(event.date).toLocaleTimeString("da-DK", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <BsGeoAlt className="text-brand text-xl" />
            <span className="text-white/50 text-xs uppercase tracking-wider">Nightclub</span>
            <span className="text-white text-sm">{event.location}</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <BsTag className="text-brand text-xl" />
            <span className="text-white/50 text-xs uppercase tracking-wider">Category</span>
            <span className="text-white text-sm">{event.category}</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <BsCurrencyDollar className="text-brand text-xl" />
            <span className="text-white/50 text-xs uppercase tracking-wider">Price</span>
            <span className="text-white text-sm">{event.price}</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <MdOutline18UpRating className="text-brand text-xl" />
            <span className="text-white/50 text-xs uppercase tracking-wider">Age Limit</span>
            <span className="text-white text-sm">{event.ageLimit}</span>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-12 px-8 py-12">
        <div>
          <h2 className="uppercase tracking-widest text-white/50 text-sm mb-6">Lineup</h2>
          <ul className="flex flex-col divide-y divide-white/10">
            {event.lineup.map((artist, i) => (
              <li key={i} className="py-4 text-white font-medium">
                {artist}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="uppercase tracking-widest text-white/50 text-sm mb-6">Schedule</h2>
          <ul className="flex flex-col gap-4">
            {event.schedule.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white">
                <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
                <span className="text-brand font-medium">{item.time}</span>
                <span className="text-white/70">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-8 py-12 bg-zinc-950">
        <h2 className="uppercase tracking-widest text-white/50 text-sm mb-6">Description</h2>
        <p className="text-white max-w-3xl leading-relaxed" style={{ fontSize: "var(--step-1)" }}>
          {event.excerpt}
        </p>
        <div className="mt-8">
          <BtnNormal title="Book Event" href={`/book-table?eventId=${event.id}`} />
        </div>
      </section>
    </>
  );
};

export default Detailview;
