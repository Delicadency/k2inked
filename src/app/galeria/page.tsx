import { PageLayout } from "@/components/PageLayout";
import Script from "next/script";


const GalleryPage = () => {
  return <PageLayout variant="light" headingName="Galeria" tabDeskClassName="w-140">
    <div className="w-full">
      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="afterInteractive"
      />
      <iframe
        src="https://cdn.lightwidget.com/widgets/3ce1714c155e523791f22874b46963e4.html"
        className="lightwidget-widget w-full border-0 overflow-hidden"
        scrolling="no"
        loading="lazy"
      />
    </div>
  </PageLayout>;
};

export default GalleryPage;
