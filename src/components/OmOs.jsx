"use client";
import React from "react";

const OmOs = () => {
  return (
    <div className="bg-darkblue p-10 sm:grid sm:grid-cols-2">
      <div className="flex justify-center items-center">
        <img src="/img/martin.svg" alt="Martin Ankjær" />
      </div>

      <div className="flex flex-col items-center sm:items-start px-4 sm:px-12 py-6">
        <h2
          className="font-extrabold md:text-3xl xs:text-xl text-white text-center sm:text-left py-5 "
          id="OmOs"
        >
          Om mig og min service
        </h2>
        <p className="text-white md:w-600 xs:w-400">
          Mit navn er Martin Ankjær, og jeg driver en dansk
          enkeltmandsvirksomhed med speciale i arkitekttegnede huse og
          tømrerarbejde i høj kvalitet. Som både tømrermester og entreprenør
          står jeg for hele processen – lige fra idé og tegning til færdigbygget
          hus.
          <br />
          <br />
          Hos mig er nybyg ikke bare et hus. Det er dit personlige,
          specialdesignede hjem – skabt præcis som du drømmer om det.
          <br />
          <br />
          Jeg hjælper dig med alt fra de første skitser til at navigere gennem
          regler, love og byggetilladelser. Du får en professionel tømrer på
          Sjælland. Jeg klarer den ikke helt alene men med de bedste
          håndværkere, jeg nøje udvælger til hvert enkelt projekt.
          <br />
          <br />
          Som lokal entreprenør i Nordsjælland og Storkøbenhavn tilbyder jeg
          totalentreprise og sørger for, at byggeprocessen er gennemsigtig hele
          vejen. Du kan nemlig logge ind via hjemmesiden og følge med i dit
          projekts udvikling, hvor jeg løbende uploader billeder ved milepæle.
          På den måde er du altid med på rejsen mod dit nye hus.
          <br />
          <br />
          Leder du efter den bedste tømrer på Sjælland og vil du bygge et hus,
          der passer til lige præcis dig? Så er du landet det rette sted.
        </p>
      </div>
    </div>
  );
};

export default OmOs;
