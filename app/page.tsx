import ClientSuccessStories from "@/components/ClientSuccessStories"
import ContactSection from "@/components/ContactSection"
import EquipmentRange from "@/components/EquipmentRange"
import EquipmentShowcase from "@/components/EquipmentShowcase"
import HeroSection from "@/components/HeroSection"
import KitchenQuote from "@/components/KitchenQuote"
import KitchenSolutions from "@/components/KitchenSolutions"
import OurProcess from "@/components/OurProcess"
import QualityStandards from "@/components/QualityStandards"
import ServiceAreas from "@/components/ServiceAreas"
import WhyChoose from "@/components/WhyChoose"

export default function Home() {
  return (
    <>
      <HeroSection />
      <KitchenSolutions />
      <WhyChoose />
      <EquipmentRange />
      <ServiceAreas />
      <OurProcess />
      <EquipmentShowcase />
      <QualityStandards />
      <ContactSection />
      <ClientSuccessStories />
      <KitchenQuote />
    </>
  )
}
