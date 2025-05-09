const Service = () => {
  return (
    <section className="p-20">
      <h1 className="text-center mb-5">FØLG DIT BYGGEPROJEKT</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
      <img src="/img/appmobil1.svg" alt="app mobil" className="col-span-1 row-span-2 h-[50%]"/>

      <p className="col-span-2 row-span-1">
        Med vores app kan du nemt følge med i opførelsen af dit nye hjem, uanset
        hvor du er. Appen giver dig adgang til opdateringer, billeder og
        milepæle i byggeprocessen, så du altid er informeret om, hvordan dit
        drømmehus tager form.​
      </p>
      <div className="flex justify-center flex-col">
      <img src="/img/applogo.svg" alt="logo app" className="h-[50%]"/>
      <img src="/img/appstore.svg" alt="appstore"/>
      </div>
      <img src="/img/appmobil2.svg" alt="app mobil" className="row-span-2 col-span-1 h-[50%]"/>
      <p className="row-span-1 col-span-2">
        I appen kan du se, hvor i processen huset er – og du kan direkte skrive
        til din kontaktperson og se billeder.​ Download appen i dag og vær en
        aktiv del af rejsen mod dit nye hjem.​
      </p>
      </div>
    </section>
  );
};

export default Service;
