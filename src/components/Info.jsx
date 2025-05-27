const Info = () => {
  return (
    <div className="flex flex-col mt-20 gap-6 px-4 pt-4 pb-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl mx-auto my-10 bg-white rounded-15">
      <h1 className="text-5xl font-bold text-brown pt-5 text-center pb-10">
        STIFTEREN BAG <br></br> ANKJÆR TOTALENTREPRISE
      </h1>
      <img
        src="/img/martinVinker.jpeg"
        alt="Martin Ankjær"
        className="h-[200px] w-[300px] rounded-12"
      />

      <h2 className="text-xl font-semibold text-brown">
        Et hus er mere end bare mursten – det er en drøm, der skal bygges fra
        bunden.
      </h2>

      <p className="text-brown">
        Hos Ankjær Totalentreprise handler det ikke bare om at bygge huse – det
        handler om at skabe hjem. Virksomheden drives af Martin Ankjær, en
        passioneret og erfaren enkeltmandsentreprenør med øje for kvalitet,
        detaljer og kundens unikke behov. Martin står selv i spidsen for hele
        processen – fra de første idéer og skitser til det færdige hus står
        klar. Han tager sig af alt fra nedrivning, byggetilladelser og
        arkitekttegninger til byggeledelse og udførelse. Kort sagt: Alt bliver
        skræddersyet og håndteret med et personligt engagement, der sikrer, at
        resultatet bliver præcis, som kunden har drømt om.
      </p>

      <p className="indent-4 text-brown">
        <q className="italic">
          Jeg bygger kun ét hus ad gangen – så jeg kan give hver kunde min fulde
          opmærksomhed.
        </q>
        <br />– Martin Ankjær
      </p>

      <p className="text-brown">
        Martin samarbejder med et netværk af nøje udvalgte håndværkere og
        underleverandører, som han stoler på og har arbejdet med gennem flere
        år. Det sikrer både høj kvalitet og en gnidningsfri byggeproces. Den
        eneste del af byggeriet han ikke selv tager hånd om, er at lægge
        fliserne på fortovet – resten klarer han.
      </p>

      <video
        src="/img/video_vedbaek.mp4"
        className="w-full h-[40%] z-0 rounded-12"
        autoPlay
        muted
        loop
        playsInline
      />

      <h3 className="font-bold text-lg text-brown">
        Kvalitet. Troværdighed. Personlighed.
      </h3>

      <p className="text-brown">
        Ankjær Totalentreprise bygger ikke typehuse. Hvert byggeri er unikt og
        opføres i tæt dialog med kunden. Det betyder, at du som kunde får
        indflydelse hele vejen og kan være tryg ved, at huset bliver præcis, som
        du ønsker det – både i udtryk, funktion og materialevalg. Virksomheden
        er nu klar til at træde ind i den digitale verden – med en professionel
        hjemmeside og tilstedeværelse på sociale medier. Det handler ikke bare
        om at vise, hvad Martin kan – men om at skabe tillid og synlighed, så
        nye kunder kan få øje på den kvalitet og det engagement, der ligger bag
        hvert eneste hus.
      </p>
      <img
        src="/img/vedbaekHus.jpeg"
        alt="vedbæk hus"
        className="h-[200px] w-[300px] rounded-12"
      />
      <h4 className="font-bold text-brown">
        Bæredygtighed og miljø – en integreret del af byggeriet
      </h4>
      <p className="text-brown">
        Hos Ankjær Totalentreprise bliver alle byggerier udført i
        overensstemmelse med gældende miljøkrav og bæredygtige standarder. Det
        betyder, at du som kunde ikke behøver at tage stilling til tekniske
        detaljer om energirammer, materialevalg eller lovgivning – det er en
        naturlig del af Martins arbejde. Kvalitet og ansvarlighed går hånd i
        hånd i alle projekter.
      </p>
    </div>
  );
};

export default Info;
