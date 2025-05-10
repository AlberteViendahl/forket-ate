import Knap from "@/components/Knap";

const Proces = () => {
  return (
    <section className=" bg-beige bg-image">
      <h1 className="text-3xl text-darkblue flex justify-center py-10">
        Fra tanker til drømmehjem
      </h1>
      <div className="grid grid-cols-5 ">
        <div className="pl-10">
          <img src="/img/proces1.svg" alt="to der giver hånd" />
          <p className="pl-10 pb-10 text-brown">
            Uforpligtende snak <br></br>om dit drømmehjem
          </p>
        </div>

        <img src="/img/pil.svg" alt="pil" className="p-10 mt-10" />
        <div>
          <img src="/img/proces2.svg" alt="" />
          <p className="pl-10 pb-10 text-brown">Bygge aftale</p>
        </div>

        <img src="/img/pil.svg" alt="pil" className="p-10 mt-10" />
        <div>
          <img src="/img/proces3.svg" alt="" />
          <p className="pl-10 pb-10 text-brown">Artitektplan</p>
        </div>

        <div className="pl-10">
          <img src="/img/proces4.svg" alt="to der giver hånd" />
          <p className="pl-10 pb-10 text-brown">Fundament & Materialer</p>
        </div>
        <img src="/img/pil.svg" alt="pil" className="p-10 mt-10" />
        <div>
          <img src="/img/proces5.svg" alt="" />
          <p className="pl-10 pb-10 text-brown">Statusoversigt</p>
        </div>

        <img src="/img/pil.svg" alt="pil" className="p-10 mt-10" />
        <div>
          <img src="/img/proces6.svg" alt="" />
          <p className="pl-10 pb-10 text-brown">Dit drømmehjem</p>
        </div>
      </div>
      <Knap label="Vil du vide mere?" />
    </section>
  );
};

export default Proces;
