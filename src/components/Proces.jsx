import Knap from "@/components/Knap";

const Proces = () => {
  return (
    <section className=" bg-beige bg-image">
      <h2 className="text-3xl text-brown font-extrabold flex justify-center py-10">
        Fra tanker til drømmehjem
      </h2>
      <div className="grid grid-cols-5 ">
        <div className="pl-10">
          <img src="/img/proces1.svg" alt="to der giver hånd" />
          <p className="pl-10 pb-10 text-brown font-bold">
            Uforpligtende snak <br></br>om dit drømmehjem
          </p>
        </div>

        <img src="/img/pil.svg" alt="pil" className="p-10 mt-10" />
        <div>
          <img src="/img/proces2.svg" alt="" />
          <p className="pl-10 pb-10 text-brown font-bold">Bygge aftale</p>
        </div>

        <img src="/img/pil.svg" alt="pil" className="p-10 mt-10" />
        <div>
          <img src="/img/proces3.svg" alt="" />
          <p className="pl-10 pb-10 text-brown font-bold">Artitektplan</p>
        </div>

        <div className="pl-10">
          <img src="/img/proces4.svg" alt="to der giver hånd" />
          <p className="pl-10 pb-10 text-brown font-bold">
            Fundament & Materialer
          </p>
        </div>
        <img src="/img/pil.svg" alt="pil" className="p-10 mt-10" />
        <div className="">
          <img className="pl-5" src="/img/proces5.svg" alt="" />
          <p className="pl-10 pb-10 text-brown font-bold">Statusoversigt</p>
        </div>

        <img src="/img/pil.svg" alt="pil" className="p-10 mt-10" />
        <div>
          <img src="/img/proces6.svg" alt="" />
          <p className="pl-10 pb-10 text-brown font-bold">Dit drømmehjem</p>
        </div>
      </div>
      <Knap label="Vil du vide mere?" />
    </section>
  );
};

export default Proces;
