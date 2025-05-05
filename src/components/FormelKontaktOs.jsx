const FormelKontaktOs = () => {
  return (
    <div className="bg-orange">
      <h1 className="text-darkblue font-extrabold text-center text-6xl pb-10 pt-10">
        BOOK ET <span className="italic">møde</span>
      </h1>
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
  );
};

export default FormelKontaktOs;
