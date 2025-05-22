const Service = () => {
  return (
    <section className="m-20 p-5 rounded-12 bg-white">
      <h1 className="text-darkblue font-extrabold text-center text-5xl mb-5">
        FØLG DIT <br /> BYGGEPROJEKT
      </h1>

      <div className=" grid md:grid-cols-2 xs:grid-cols-1">
        <img
          src="/img/appmobil2.svg"
          alt="app mobil"
          className=" h-[80%] ml-10 mt-10 border border-beige shadow rounded-15 "
        />
        <div>
          <p className="text-lg mt-10 w-500 ">
            I appen kan du se, hvor i processen huset er – og du kan direkte
            skrive til din kontaktperson og se billeder.<br></br>​ <br></br>
            Download appen i dag og vær en aktiv del af rejsen mod dit nye
            hjem.​ Med vores app kan du nemt følge med i opførelsen af dit nye
            hjem, uanset hvor du er.​ <br />
            <br />
            Appen giver dig adgang til opdateringer, billeder og milepæle i
            byggeprocessen, så du altid er informeret om, hvordan dit drømmehus
            tager form.
          </p>
          <div className="mt-10">
            <img src="/img/applogo.svg" alt="logo app" className="h-[20%]" />
            <img src="/img/appstore.svg" alt="appstore" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
