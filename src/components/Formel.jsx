const Formel = () => {
  return (
    <div className="bg-beige">
      <h1 className="text-darkblue font-extrabold text-center text-6xl pb-10 pt-10">
        BOOK ET <span className="italic">møde</span>
      </h1>
      <div className="sm:grid sm:grid-cols-3 pb-20">
        <div className="text-center sm:col-span-1">
          <p className="font-extrabold">EMAIL</p>
          <p className="pb-7">info@AnkjærEnterprise.com</p>

          <p className="font-extrabold">TLF NUMMER</p>
          <p className="pb-7">(+45) 12 34 56 78</p>

          <p className="font-extrabold">ADRESSE</p>
          <p className="pb-7">1234 Bueager Helsingør, Kbh, DK</p>

          <p className="font-extrabold">SOCIAL</p>
          {/*        <img className="pb-7" src="" alt="" /> */}
        </div>
        <hr className="pb-10 sm:hidden" />
        <form className="xs:w-300 sm:w-500 mx-auto sm:col-span-2 ">
          <input
            className=" bg-beige mb-5 rounded-12 w-300 h-40 sm:w-500 border-[1px] border-black p-5 "
            type="text"
            name="firstname"
            placeholder="Fornavn"
          />

          <input
            className="bg-beige mb-5 rounded-12 w-300 sm:w-500 h-40 border-[1px]  border-black p-5"
            type="text"
            name="lastname"
            placeholder="Efternavn"
          />

          <input
            className="bg-beige mb-5 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5"
            type="numbers"
            name="phone number"
            placeholder="Tlf nummer"
          />

          <input
            className="bg-beige mb-5 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5"
            type="mail"
            name="mail"
            placeholder="Email"
          />
          <input
            className="bg-beige mb-5 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5 pb-10"
            type="text"
            name="text"
            placeholder="Besked"
          />
          {/* knappen skal være her!!!! */}
        </form>
      </div>
    </div>
  );
};

export default Formel;
