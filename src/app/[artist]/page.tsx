import { notFound } from "next/navigation";
import {
  ArtistSlug,
  ARTIST_SLUGS,
  RESERVED_SLUGS,
  isArtistSlug,
} from "@/routes";
import { PageLayout } from "@/components/PageLayout";

type PageProps = {
  params: { artist: ArtistSlug };
};

export const dynamicParams = false;
export const generateStaticParams = (): PageProps["params"][] => {
  return ARTIST_SLUGS.filter((slug) => !RESERVED_SLUGS.has(slug)).map(
    (artist) => ({ artist }),
  );
};

const ArtistPage = ({ params }: PageProps) => {
  if (!isArtistSlug(params.artist) || RESERVED_SLUGS.has(params.artist)) {
    notFound();
  }

  return <PageLayout variant="light" headingName={params.artist} tabDeskClassName="w-140" ><div></div></PageLayout>
};
export default ArtistPage;
