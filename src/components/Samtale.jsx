import Link from "next/link";
const Samtale = () => {
  return (
    <section className="bg-beige text-darkblue">
      <h2 className="text-center text-2xl p-5">Dit hus i billeder</h2>
      <div className="flex justify-center">
        <p className="w-300 mb-5">
          Se de nyeste billeder fra byggepladsen og følg med i dit hjems
          udvikling – ét skridt ad gangen.
        </p>
      </div>
      <img
        className=" mx-auto mb-5"
        src="/img/husapp.jpg"
        alt="hus der er i gang med at blive bygget"
      />
      <div className="flex justify-center mb-7">
        <div className="grid grid-cols-1">
          <img
            className="h-75 rounded-100"
            src="/img/martin.svg"
            alt="Billede af ejeren"
          />
        </div>

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
        <img
          className="ml-10"
          src="/img/person.svg"
          alt="illustration af en person"
        />
      </div>

      <div className="flex justify-center mt-5 pb-10">
        <input
          className="w-320 h-10 rounded-15 "
          type="text"
          placeholder=" Skriv her"
        />
        <img className="h-30 pl-3" src="/img/send.svg" alt="send" />
      </div>
      <div className="bg-lightblue flex justify-center p-5">
        <Link href="/App">
          <img src="/img/undo.svg" alt="Gå tilbage knap" />
        </Link>
      </div>
    </section>
  );
};

export default Samtale;
