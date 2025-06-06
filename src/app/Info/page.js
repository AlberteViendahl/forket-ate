import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Info from "@/components/Info";

export async function generateMetadata() {
  return {
    title:
      "Om Martin Ankjær | Professionel Tømrer & Totalentreprenør i Nordsjælland",
    description:
      "Skab dit drømmehjem med Ankjær Totalentreprise. Høj kvalitet og tæt dialog hele vejen. Få et tilbud nu!",
  };
}

export default function InfoPage() {
  return (
    <div className="overflow-hidden bg-image bg-beige">
      <Nav />
      <Info />
      <Footer />
    </div>
  );
}
