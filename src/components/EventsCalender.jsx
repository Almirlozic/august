import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/lib/api";
import BtnNormal from "./BtnNormal";

export default function EventsCalender({ events }) {
  return (
    <section className="flex flex-col gap-2">
      {events.map((event, index) => (
        <article
          key={event.id}
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="md:w-[55%] relative min-h-72">
            <Image
              src={imageUrl(event.heroAsset.url)}
              alt={event.heroAsset.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-[45%] flex flex-col justify-between p-8 bg-zinc-950">
            <h2 className="uppercase font-bold tracking-wider text-white">{event.title}</h2>
            <p className="text-sm tracking-wide">
              <span className="text-brand">
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
                {" · "}
                {new Date(event.date).toLocaleTimeString("da-DK", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="text-white/50 ml-2">| {event.location.toUpperCase()}</span>
            </p>
            <p className="text-white/70 leading-relaxed text-sm">{event.excerpt}</p>
            {/*     <Link
              className="self-end border border-white/60 text-white px-8 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              href={`/events/${event.slug}`}
            >
              Read More
            </Link> */}
            <BtnNormal title="Read More" href={`/events/${event.slug}`} />
          </div>
        </article>
      ))}
    </section>
  );
}
