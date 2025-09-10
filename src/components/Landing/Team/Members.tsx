import Image from "next/image";
import Link from "next/link";
import { TEAM_LIST } from "@/data/teamData";

export const Members = () => {
  return (
    <div className="mt-20 flex flex-wrap justify-center gap-10 px-6 pb-12">
      {TEAM_LIST.map((member, i) => (
        <div
          key={member.id}
          className="group tablet:h-125 tablet:w-100 relative h-100 w-75 overflow-hidden rounded-3xl"
        >
          <Link
            href={member.route}
            aria-label={`${member.name} — ${member.style}`}
            className="absolute inset-0 z-10 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80 focus-visible:ring-offset-black"
          >

            <Image
              src={member.imgSrc}
              alt={member.alt}
              fill
              sizes="(min-width:1280px) 25rem, (min-width:768px) 22rem, 90vw"
              priority={i < 2}
              quality={90}
              className="h-full w-full object-cover grayscale-70 transition-transform duration-300 group-hover:scale-110"
            />

            {member.hoverImgSrc && (
              <Image
                src={member.hoverImgSrc}
                alt={member.alt}
                fill
                sizes="(min-width:1280px) 25rem, (min-width:768px) 22rem, 90vw"
                quality={90}
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                loading="lazy"
              />
            )}

            <span className="sr-only">{member.name}</span>
          </Link>

          <div className="bg-light/20 font-marcellus-sc relative z-40 mt-5 mb-4 px-2 py-2.5 text-center backdrop-blur-sm">
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className="text-xl">{member.style}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
