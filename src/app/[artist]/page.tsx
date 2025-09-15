import { notFound } from "next/navigation";
import { isArtistSlug, RESERVED_SLUGS, ARTIST_SLUGS } from "@/routes";
import { PageLayout } from "@/components/PageLayout";
import { TEAM_BY_SLUG } from "@/data/teamData";

type ArtistParams = { artist: string };

export const dynamicParams = false;
export const generateStaticParams = (): ArtistParams[] =>
  ARTIST_SLUGS
    .filter((slug) => !RESERVED_SLUGS.has(slug))
    .map((artist) => ({ artist }));

const ArtistPage = async ({
  params,
}: {
  params: Promise<ArtistParams>;
}) => {
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
        <article className="space-y-4">
          {member.paragraph.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </section>
    </PageLayout>
  );
};

export default ArtistPage;
