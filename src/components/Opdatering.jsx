const Opdatering = () => {
  return (
    <div className="bg-beige">
      <div className="flex justify-center">
        <img className="h-75 w-75" src="/img/proces1.svg" alt="" />
        <img className="h-75 w-75" src="/img/proces2.svg" alt="" />
        <img className="h-75 w-75" src="/img/proces3.svg" alt="" />
        <img className="h-75 w-75" src="/img/proces4.svg" alt="" />
        <img className="w-75" src="/img/pil.svg" alt="" />
        <img className="h-75 w-75" src="/img/proces6.svg" alt="" />
      </div>

      <div className="flex justify-center">
        <div className="w-400 h-5 border-2 border-brown relative overflow-hidden mt-5">
          <div className="bg-brown h-full animate-grow"></div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <p>Dit hus er 71% færdigt </p>
      </div>
    </div>
  );
};

export default Opdatering;
