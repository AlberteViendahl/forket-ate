import Footer from "@/components/Footer";
import KontaktOs from "@/components/KontaktOs";
import Nav from "@/components/Nav";
import ServiceIndhold from "@/components/ServiceIndhold";

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
