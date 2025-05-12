"use client";
import React from "react";

const OmOs = ({ imageUrl }) => {
  const styles = {
    container: {
      display: "flex",
      backgroundColor: "#35465F",
      paddingTop: "40px",
      paddingBottom: "40px",
      paddingLeft: "80px",
      paddingRight: "80px",
      borderRadius: "8px",

      color: "white",
    },
    imageSection: {
      flex: 1,
      marginTop: "100px",
      marginBottom: "100px",
    },
    textSection: {
      flex: 2,
      marginTop: "100px",
      marginBottom: "100px",
    },
    image: {
      maxWidth: "100%",
      borderRadius: "12px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img
          src={imageUrl || "/img/martin.svg"}
          alt="Om Os"
          style={styles.image}
        />
      </div>
      <div style={styles.textSection}>
        <h2 className="font-extrabold text-3xl">Om mig og min service</h2>
        <br />
        <p>
          Mit navn er Martin Ankjær, og jeg driver en dansk
          enkeltmandsvirksomhed med speciale i arkitekttegnede huse og
          tømrerarbejde i høj kvalitet. Som både tømrermester og entreprenør
          står jeg for hele processen – lige fra idé og tegning til færdigbygget
          hus.
        </p>
        <p>
          Hos mig er nybyg ikke bare et hus. Det er dit personlige,
          specialdesignede hjem – skabt præcis som du drømmer om det.
        </p>
        <p>
          Jeg hjælper dig med alt fra de første skitser til at navigere gennem
          regler, love og byggetilladelser. Du får en professionel tømrer på
          Sjælland. Jeg klarer den ikke helt alene men med de bedste
          håndværkere, jeg nøje udvælger til hvert enkelt projekt.
        </p>
        <p>
          Som lokal entreprenør i Nordsjælland og Storkøbenhavn tilbyder jeg
          totalentreprise og sørger for, at byggeprocessen er gennemsigtig hele
          vejen. Du kan nemlig logge ind via hjemmesiden og følge med i dit
          projekts udvikling, hvor jeg løbende uploader billeder ved milepæle.
          På den måde er du altid med på rejsen mod dit nye hus.
        </p>
        <p>
          Leder du efter den bedste tømrer på Sjælland og vil du bygge et hus,
          der passer til lige præcis dig? Så er du landet det rette sted.
        </p>
      </div>
    </div>
  );
};

export default OmOs;
