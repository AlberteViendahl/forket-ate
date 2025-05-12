const Service = () => {
  return (
    <section className="p-20">
      <h1 className="text-darkblue font-extrabold text-center text-5xl mb-5">
        FØLG DIT <br /> BYGGEPROJEKT
      </h1>

      <div className="flex gap-10 items-start p-10">
        <div className="w-1/3 flex flex-col items-center justify-start gap-5">
          <img
            src="/img/appmobil1.svg"
            alt="app mobil"
            className="max-w-full h-auto"
          />
          <p className="text-lg leading-relaxed mt-10  flex flex-col">
            I appen kan du se, hvor i processen huset er – og du kan direkte
            skrive til din kontaktperson og se billeder.<br></br>​ <br></br>
            Download appen i dag og vær en aktiv del af rejsen mod dit nye
            hjem.​
          </p>
        </div>

        <div className="w-2/3 flex flex-col justify-between relative">
          <div>
            <p className="text-lg leading-relaxed mt-10 ml-10 w-600">
              Med vores app kan du nemt følge med i opførelsen af dit nye hjem,
              uanset hvor du er.​ <br />
              <br />
              Appen giver dig adgang til opdateringer, billeder og milepæle i
              byggeprocessen, så du altid er informeret om, hvordan dit
              drømmehus tager form.
            </p>
          </div>

          <div className="mt-10 ml-10 top-1/2 relative">
            <img src="/img/applogo.svg" alt="logo app" className="h-[20%]" />
            <img src="/img/appstore.svg" alt="appstore" className="h-12" />
          </div>

          <div className="flex justify-end">
            <img src="/img/appmobil2.svg" alt="app mobil 2" className="w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
