"use client";
import { useState } from "react";
import Link from "next/link";

const Samtale = () => {
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState(1);

  function addTask(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const messageText = formData.get("message");

    if (!messageText.trim()) return;

    const newMessage = {
      id: messageId,
      text: messageText,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageId((prev) => prev + 1);
    event.target.reset();
  }

  return (
    <section className="bg-beige text-darkblue min-h-screen">
      <h2 className="text-center text-2xl p-5">Dit hus i billeder</h2>

      <div className="flex justify-center">
        <p className="w-300 mb-5">
          Se de nyeste billeder fra byggepladsen og følg med i dit hjems
          udvikling – ét skridt ad gangen.
        </p>
      </div>

      <img
        className="mx-auto mb-5"
        src="/img/husapp.jpg"
        alt="hus der er i gang med at blive bygget"
      />

      <div className="flex justify-center mb-7">
        <div className="grid grid-cols-1">
          <img
            className="h-75 rounded-100"
            src="/img/martin.svg"
            alt="Billede af ejeren"
          />
        </div>
        <p className="w-300 ml-10 bg-lightblue rounded-12 p-2">
          Kære Camilla og Michael <br />
          <br />
          Så nåede jeres hus endnu en milepæl og har fået tag på! Hvor har jeg
          glædet mig til at dele det med jer – husk I altid er velkomne til at
          komme forbi til en skurvognskaffe og kage. God weekend!
        </p>
      </div>

      <div className="flex justify-center">
        <p className="w-300 bg-white rounded-15 p-2 ml-10">
          Hvor ser det skønt ud, Martin! Jeg kan næsten ikke vente.. det må
          betyde, at jeg kommer forbi med kage i løbet af ugen
        </p>
        <img
          className="ml-10"
          src="/img/person.svg"
          alt="illustration af en person"
        />
      </div>

      <div className="flex flex-col items-center space-y-4 mb-10 mr-12 max-w-xl mx-auto pr-20 mt-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="self-end bg-white text-darkblue p-3 rounded-[15px] max-w-xs w-fit"
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form
        onSubmit={addTask}
        className="flex gap-3 justify-center max-w-[70%] mx-auto"
      >
        <input
          type="text"
          name="message"
          placeholder="Skriv her"
          className="flex-1 h-10 rounded-[15px] pl-5 pr-5 border border-gray-300"
          autoComplete="off"
        />
        <button
          type="submit"
          title="Send besked"
          className="p-2 bg-blue-500 rounded-[15px] text-white"
        >
          Send
        </button>
      </form>

      <div className="bg-white flex justify-center p-5 mt-10">
        <Link href="/App">
          <img src="/img/undo.svg" alt="Gå tilbage knap" />
        </Link>
      </div>
    </section>
  );
};

export default Samtale;
