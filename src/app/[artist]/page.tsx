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
      <section className="flex flex-col items-center gap-6">
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
        <InstagramMember username={member.instagramUsername || "k2.inked"} className="size-7.5 mb-8 tablet:mb-0 tablet:size-10" />
        <article className="tablet:text-lg space-y-4 text-sm">
          {member.paragraph.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </section>
    </PageLayout>
  );
};

export default ArtistPage;
