import { notFound } from "next/navigation";
import { isArtistSlug, RESERVED_SLUGS, ARTIST_SLUGS } from "@/routes";
import { PageLayout } from "@/components/PageLayout";
import { TEAM_BY_SLUG } from "@/data/teamData";
import Image from "next/image";
import { InstagramMember } from "@/components/Socialmedia/InstagramMember";

type ArtistParams = { artist: string };

export const dynamicParams = false;
export const generateStaticParams = (): ArtistParams[] =>
  ARTIST_SLUGS.filter((slug) => !RESERVED_SLUGS.has(slug)).map((artist) => ({
    artist,
  }));

const ArtistPage = async ({ params }: { params: Promise<ArtistParams> }) => {
  const { artist } = await params;

  if (!isArtistSlug(artist) || RESERVED_SLUGS.has(artist)) {
    notFound();
  }

  const member = TEAM_BY_SLUG[artist];

  if (!member) {
    notFound();
  }

  return (
    <PageLayout
      variant="light"
      headingName={member.name}
      tabDeskClassName="w-140"
    >
      <section className="tablet:flex-row tablet:items-start tablet:gap-30 mb-20 flex flex-col items-center gap-6">
        <div className="tablet:h-125 tablet:w-95 tablet:mb-0 relative mb-9 h-90 w-70 overflow-hidden rounded-3xl drop-shadow-lg/30">
          <Image
            alt={member.name}
            src={member.imgSrc}
            sizes="(min-width:1280px) 25rem, (min-width:768px) 22rem, 90vw"
            quality={90}
            fill
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="tablet:flex-col-reverse tablet:items-start flex max-w-3xl flex-col items-center gap-8">
          <InstagramMember
            username={member.instagramUsername || "k2.inked"}
            className="tablet:size-10 size-7.5"
          />
          <article className="tablet:text-base tablet:max-w-110 space-y-4 text-sm">
            {member.paragraph.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>
        </div>
      </section>
      <div className="tablet:grid-cols-3 tablet:gap-12.5 grid grid-cols-2 gap-2">
        {member.gallery?.map((src, i) => (
          <div
            key={i}
            className="tablet:size-75 relative size-32.5 overflow-hidden rounded-3xl drop-shadow-lg/30"
          >
            <Image
              alt={`${member.name} - zdjęcie pracy nr. ${i + 1}`}
              src={src}
              sizes="(min-width:1280px) 25rem, (min-width:768px) 22rem, 90vw"
              quality={90}
              fill
              priority={i < 2}
              className="h-full w-full cursor-pointer object-cover grayscale-75 transition-transform duration-300 hover:scale-110 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default ArtistPage;
