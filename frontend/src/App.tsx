import { CalendarSection } from "./sections/CalendarSection";
import { CatalogSection } from "./sections/CatalogSection";
import { ContactSection } from "./sections/ContactSection";
import { EmotionSection } from "./sections/EmotionSection";
import { FaqSection } from "./sections/FaqSection";
import { Footer } from "./sections/Footer";
import { GuaranteeSection } from "./sections/GuaranteeSection";
import { HeroSection } from "./sections/HeroSection";
import { HighlightsSection } from "./sections/HighlightsSection";
import { LeadMagnetSection } from "./sections/LeadMagnetSection";
import { OccasionsSection } from "./sections/OccasionsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

function App() {
  return (
    <div className="min-h-screen bg-ebony">
      <HeroSection />
      <HighlightsSection />
      <EmotionSection />
      <CatalogSection />
      <OccasionsSection />
      <CalendarSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <GuaranteeSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
