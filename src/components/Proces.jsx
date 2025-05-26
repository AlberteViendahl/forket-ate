import Knap from "@/components/Knap";

const Proces = () => {
  return (
    <section className=" bg-beige bg-image ">
      <h2 className="text-3xl text-brown font-extrabold flex justify-center py-10">
        Fra tanker til drømmehjem
      </h2>
      <div className="flex md:justify-around xs:justify-evenly">
        <div>
          <img
            className="md:h-200 md:w-200 xs:h-150 xs:w-150"
            src="/img/proces1.svg"
            alt="to der giver hånd"
          />
          <p className="text-center text-brown font-bold">
            1. Uforpligtende snak <br></br>om dit drømmehjem
          </p>
        </div>
        <img className="hidden md:block" src="/img/pil.svg" alt="en brun pil" />
        <div>
          <img
            className="md:h-200 md:w-200 xs:h-150 xs:w-150"
            src="/img/proces2.svg"
            alt="Bygge aftale"
          />
          <p className=" text-center text-brown font-bold">2. Bygge aftale</p>
        </div>
        <img className="hidden md:block" src="/img/pil.svg" alt="en brun pil" />
        <div>
          <img
            className="md:h-200 md:w-200 xs:h-150 xs:w-150"
            src="/img/proces3.svg"
            alt="Artitektplan"
          />
          <p className="text-center text-brown font-bold">3. Artitektplan</p>
        </div>
      </div>

      <div className="flex justify-evenly">
        <div>
          <img
            className="md:h-200 md:w-200 xs:h-150 xs:w-150"
            src="/img/proces4.svg"
            alt="værktøj"
          />
          <p className="text-center text-brown font-bold">
            4. Fundament & Materialer
          </p>
        </div>
        <img className="hidden md:block" src="/img/pil.svg" alt="en brun pil" />
        <div className="">
          <img
            className="md:h-200 md:w-200 xs:h-150 xs:w-150"
            src="/img/proces5.svg"
            alt="en telefon"
          />
          <p className="text-center text-brown font-bold">5. Statusoversigt</p>
        </div>

        <img className="hidden md:block" src="/img/pil.svg" alt="en brun pil" />
        <div>
          <img
            className="md:h-200 md:w-200 xs:h-150 xs:w-150"
            src="/img/proces6.svg"
            alt="et hus"
          />
          <p className="text-center text-brown font-bold">6. Dit drømmehjem</p>
        </div>
      </div>

      <Knap label="Vil du vide mere?" />
    </section>
  );
};

export default Proces;
