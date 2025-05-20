const Galleri = () => {
  return (
    <section className="bg-brown p-20">
      <h1 className="text-center text-5xl p-2 text-white font-extrabold">
        INSPIRATION
      </h1>
      <p className="text-white mb-4">
        Drømmer du om dit perfekte hjem? På denne sige kan du udforske
        forskellige stilarter og materialer som andre drømte om - uanset om du
        foretrækker moderne minimalisme eller klassisk hygge, er mulighederne
        mange.​
      </p>
      <p className="text-white mb-4">
        Dette gør det nemt for dig at finde præcis de elementer, der passer til
        din stil og dine behov.​ Det betyder meget for os, at du får den
        perfekte blanding mellem kvalitet og sætter dit eget præg.{" "}
      </p>
      <p className="text-white mb-4">
        Ved at holde musen over de interaktive prikker på billederne, kan du se
        detaljer om de anvendte produkter og materialer.{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5 p-4">
      <div className="relative col-span-4 m-0 p-0">
          <img src="/img/1.svg" className="h-full w-full object-cover" />

          <div className="absolute top-[20%] right-[29%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <h2 className="text-m">Døre og vinduer.</h2>
            <p className="text-[12px]">Træ/alu rammer med tre-lags energiruder, farver, U-værdi og monteringsinfo.</p>
            </div>
          </div>
          <div className="absolute top-[50%] left-[29%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <h2 className="text-m">Ydervægge - Hvid netpuds.</h2>
            <p className="text-[12px]">Opbygning med 410 mm ydevæg med hvid netpuds, U-værdi, isolering og lag.</p>
            </div>
          </div>
        </div>


        <img
  src="/img/2.svg"
  className="col-span-1 sm:col-span-1 md:col-span-2 m-0 p-0 h-full object-cover rounded-12"
/>



        <img
          src="/img/3.svg"
          className="col-span-3 m-0 p-0 h-full object-cover rounded-12"
        />


        <img
          src="/img/4.svg"
          className="col-span-3 m-0 p-0 h-full object-cover rounded-12"
        />


        <img
          src="/img/5.svg"
          className="col-span-2 m-0 p-0 h-full w-full object-cover rounded-12"
        />


        <img
          src="/img/8.svg"
          className="col-span-4 row-span-2 m-0 p-0 h-full w-full object-cover rounded-12"
        />


        <img
          src="/img/6.svg"
          className="col-span-1 m-0 p-0 h-full object-cover rounded-12"
        />
        
        <img
          src="/img/7.svg"
          className="col-span-1 m-0 p-0 h-full object-cover rounded-12"
        />
      </div>
    </section>
  );
};

export default Galleri;
