import Link from "next/link";
const Samtale = () => {
  return (
    <section className="bg-beige">
      <h2 className="text-center">Dit hus i billeder</h2>
      <div className="flex justify-center">
        <p className="w-300 mb-10">
          Se de nyeste billeder fra byggepladsen og følg med i dit hjems
          udvikling – ét skridt ad gangen.
        </p>
      </div>

      <div className="flex justify-center mb-7">
        <img className="h-75" src="/img/martin.svg" alt="" />
        <p className="w-300 ml-10 bg-lightblue rounded-12 p-2">
          Kære Camilla og Michael <br /> <br /> Så nåede jeres hus endnu en
          milepæl og har fået tag på!Hvor har jeg glædet mig til at dele det med
          jer - husk I altid er velkomne til at komme forbi til en
          skurvognskaffe og kage. God weekend!
        </p>
      </div>
      <div className="flex justify-center">
        <p className="w-300 bg-white rounded-15 p-2 ml-10">
          Hvor ser det skønt ud, Martin! Jeg kan næsten ikke vente.. det må
          betyde, at jeg kommer forbi med kage i løbet af ugen
        </p>
        <img className="ml-5" src="/img/person.svg" alt="" />
      </div>
      <div className="flex justify-center mt-5 pb-10">
        <input
          className="w-350 h-10 rounded-15 "
          type="text"
          placeholder=" Skriv her"
        />
      </div>
      <div className="bg-white flex justify-center p-5">
        <Link href="/App">
          <img src="/img/undo.svg" alt="Gå tilbage knap" />
        </Link>
      </div>
    </section>
  );
};

export default Samtale;
