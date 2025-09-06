"use client";
import { Button } from "@/components/Button/Button";
import { PageLayout } from "@/components/PageLayout";
import { path } from "@/routes";

export const GalleryLanding = () => {
  const cards = Array.from({ length: 6 }).map((_, i) => (
    <div
      key={i}
      className="bg-light/90 tablet:h-75 tablet:w-75 h-38 w-38 rounded-2xl backdrop-blur-sm"
    />
  ));
  return (
    <PageLayout
      headingName="Nasze prace"
      variant="dark"
      tabDeskClassName="tablet:w-170 desktop:w-170"
    >
      {/* placeholder, to change later for LightWidget */}
      <div className="desktop:grid-cols-3 tablet:pb-20 grid grid-cols-2 gap-2 tablet:gap-8 pb-10">
        {cards}
      </div>

      <Button
        as="a"
        href={path.GALLERY}
        variant="primary"
        className="mx-auto mt-10"
        ariaLabel="Przejdź do galerii"
      >
        ZOBACZ WIĘCEJ
      </Button>
    </PageLayout>
  );
};
