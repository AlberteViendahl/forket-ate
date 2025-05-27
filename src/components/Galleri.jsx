const Galleri = () => {
  return (
    <section className="bg-brown p-6 sm:p-10 md:p-20">
      <h1 className="text-center  xs:text-3xl md:text-5xl p-2 text-white font-extrabold pb-6 md:pb-10">
        INSPIRATION
      </h1>

      <p className="text-white mx-auto max-w-[600px] text-sm sm:text-base flex items-center gap-2">
        Drømmer du om dit perfekte hjem? På denne sige kan du udforske
        forskellige stilarter og materialer som andre drømte om - uanset om du
        foretrækker moderne minimalisme eller klassisk hygge, er mulighederne
        mange.
      </p>
      <br />
      <p className="text-white mx-auto max-w-[600px] text-sm sm:text-base flex items-center gap-2">
        Dette gør det nemt for dig at finde præcis de elementer, der passer til
        din stil og dine behov. Det betyder meget for os, at du får den perfekte
        blanding mellem kvalitet og sætter dit eget præg.
      </p>
      <br />
      <p className="text-white mx-auto max-w-[600px] text-sm sm:text-base flex items-center gap-2">
        Ved at holde musen over de interaktive prikker på billederne, kan du se
        detaljer om de anvendte produkter og materialer.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 sm:gap-5 p-4">
        {/* Billede 1 */}
        <div className="relative col-span-1 sm:col-span-2 md:col-span-4 m-0 p-0">
          <img
            src="/img/1.svg"
            className="w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute top-[20%] right-[29%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <h2 className="text-m">Døre og vinduer.</h2>
              <p className="text-[12px]">
                Træ/alu rammer med tre-lags energiruder, farver, U-værdi og
                monteringsinfo.
              </p>
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
              <p className="text-[12px]">
                Opbygning med 410 mm ydevæg med hvid netpuds, U-værdi, isolering
                og lag.
              </p>
            </div>
          </div>
        </div>

        {/* Billede 2 */}
        <div className="relative col-span-1 sm:col-span-1 md:col-span-2 m-0 p-0">
          <img
            src="/img/2.svg"
            className="w-full h-full object-cover rounded-12"
          />
          <div className="absolute top-[50%] right-[29%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <h2 className="text-m">Etagedæk mod garage.</h2>
              <p className="text-[12px]">
                Betondæk med gulvvarmeslanger og isoleringslag.
              </p>
            </div>
          </div>
        </div>

        {/* Billede 3 */}
        <div className="relative col-span-1 sm:col-span-1 md:col-span-2 m-0 p-0">
          <img
            src="/img/3.svg"
            className="w-full h-full object-cover rounded-12"
          />
          <div className="absolute top-[65%] right-[29%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <h2 className="text-m">Ventilation og varmesystem.</h2>
              <p className="text-[12px]">
                Mekanisk ventilation og luft-til-vand varmepumpe info.
              </p>
            </div>
          </div>
        </div>

        {/* Billede 4 */}
        <div className="relative col-span-1 sm:col-span-1 md:col-span-4 m-0 p-0">
          <img
            src="/img/4.svg"
            className="w-full h-full object-cover rounded-12"
          />
          <div className="absolute top-[44%] right-[18%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <h2 className="text-m">Indervægge i porebeton.</h2>
              <p className="text-[12px]">
                100 mm og 125 mm porebeton indvendige vægge med tykkelser.
              </p>
            </div>
          </div>
        </div>

        {/* Billede 5 */}
        <div className="relative col-span-1 sm:col-span-1 md:col-span-3 m-0 p-0">
          <img
            src="/img/5.svg"
            className="w-full h-full object-cover rounded-12"
          />
          <div className="absolute top-[15%] right-[29%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <h2 className="text-m">Gulv- og loftoverflader.</h2>
              <p className="text-[12px]">Gipslofter, akustikfelter</p>
            </div>
          </div>
        </div>

        {/* Billede 6 */}
        <div className="relative col-span-1 sm:col-span-2 md:col-span-3 row-span-2 m-0 p-0">
          <img
            src="/img/8.svg"
            className="w-full h-full object-cover rounded-12"
          />
          <div className="absolute top-[15%] right-[29%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <h2 className="text-m">Tagterrasse opbygning.</h2>
              <p className="text-[12px]">
                Insitustøbt tagterrasse med tagpap, isolering og overflade.
              </p>
            </div>
          </div>
          <div className="absolute top-[50%] left-[15%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <h2 className="text-m">Ydervæg mod garage</h2>
              <p className="text-[12px]">
                Speciel opbygning for garagevæg med mineraluld og porebeton.
              </p>
            </div>
          </div>
        </div>

        {/* Billede 7 */}
        <div className="relative col-span-1 sm:col-span-1 md:col-span-2 m-0 p-0">
          <img
            src="/img/6.svg"
            className="w-full h-full object-cover rounded-12"
          />
          <div className="absolute top-[40%] right-[35%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <h2 className="text-m">Letvægge med gipsplader.</h2>
              <p className="text-[12px]">
                Opbygning med fibergipsplader, skeletopbygning med mineraluld.
              </p>
            </div>
          </div>
        </div>

        {/* Billede 8 */}
        <div className="relative col-span-1 sm:col-span-1 md:col-span-1 m-0 p-0">
          <img
            src="/img/7.svg"
            className="w-full h-full object-cover rounded-12"
          />
          <div className="absolute top-[65%] right-[29%] group">
            <img
              src="/img/dot.svg"
              alt="dot"
              className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-2 w-48 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <h2 className="text-m">Energiklasse og tæthed.</h2>
              <p className="text-[12px]">
                BR18 standard, tæthedskrav og energiramme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galleri;
