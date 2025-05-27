import Link from "next/link";

const Service = () => {
  return (
    <section className="m-20 rounded-12 bg-white">
      <h1 className="text-brown font-extrabold text-center xs:text-2xl md:text-5xl pt-10">
        FØLG DIT <br /> BYGGEPROJEKT
      </h1>

      <div className=" grid md:grid-cols-2 xs:grid-cols-1">
        <img
          src="/img/appmobil2.svg"
          alt="app mobil"
          className=" h-[80%] ml-10 mt-10 "
        />
        <div>
          <h2 className="font-bold xs:text-xl text-center text-brown mt-10">
            Følg med hele vejen – fra første spadestik til nøgleoverdragelse
          </h2>
          <p className="text-lg text-brown mt-5 xs:p-5 xs:w-300px md:w-[440px]">
            Med vores app får du som kunde dit eget login, hvor du nemt kan
            følge med i byggeprocessen af dit nye hjem – trin for trin. Du får
            adgang til en personlig side, hvor du kan se opdateringer, milepæle
            og billeder fra byggepladsen, så du altid ved, hvor langt byggeriet
            er.<br></br>​ <br></br>
            Du kan også kommunikere direkte med din kontaktperson, Martin, via
            den indbyggede chatfunktion. Har du spørgsmål, ønsker eller behov
            for afklaring, er hjælpen kun et klik væk.
            <br />
            <br />
            Download appen i dag og vær en aktiv del af rejsen mod dit
            drømmehjem. Uanset hvor du er, giver appen dig tryghed, overblik og
            fuld gennemsigtighed i processen.
          </p>
          <Link href="/App">
            <div className="mt-10 pb-5 p-5 flex">
              <img
                src="/img/GoogleP.png"
                alt="logo google play"
                className="h-12 object-cover w-[190px] m-0"
              />
              <img src="/img/appstore.svg" alt="appstore" className="h-12" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
