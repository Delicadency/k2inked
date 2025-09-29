"use client";
import Script from "next/script";
import { Button } from "@/components/Button/Button";
import { PageLayout } from "@/components/PageLayout";
import { path } from "@/routes";

export const GalleryLanding = () => {
  return (
    <PageLayout
      headingName="Nasze prace"
      variant="dark"
      tabDeskClassName="tablet:w-170 desktop:w-170"
    >
      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="afterInteractive"
      />
      <iframe
        src="https://cdn.lightwidget.com/widgets/438082b29386560ebccfe4a16ba55625.html"
        scrolling="no"
        loading="lazy"
        className="lightwidget-widget w-full overflow-hidden border-0"
      />

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

