import Footer from "@/components/Footer";
import KontaktOs from "@/components/KontaktOs";
import Nav from "@/components/Nav";
import ServiceIndhold from "@/components/ServiceIndhold";

export async function generateMetadata() {
  return {
    title: "Følg Dit Byggeprojekt i Realtid – Ankjær Totalentreprises App",
    description:
      "Hold styr på dit byggeri når som helst og hvor som helst. Få opdateringer og kontakt os let. Prøv appen i dag!",
  };
}

export default function Service() {
  return (
    <div className="overflow-hidden bg-beige bg-image">
      <Nav />
      <KontaktOs />
      <ServiceIndhold />
      <Footer />
    </div>
  );
}
