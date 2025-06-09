"use client";
import { useState } from "react";
import Link from "next/link";

// Genanvendelig beskedkomponent
const Message = ({ sender, text }) => (
  <div
    className={`flex w-full items-start max-w-xl mx-auto ${
      sender === "user" ? "justify-end" : "justify-start"
    } mb-4`}
  >
    {sender === "martin" && (
      <img
        src="/img/martin.svg"
        alt="Martin"
        className="w-10 h-10 rounded-full mr-2"
      />
    )}
    <div
      className={`p-3 rounded-[15px] max-w-xs w-fit ${
        sender === "user"
          ? "bg-white text-darkblue mr-2"
          : "bg-lightblue text-darkblue"
      }`}
    >
      {text}
    </div>
    {sender === "user" && (
      <img
        src="/img/person.svg"
        alt="Bruger"
        className="w-10 h-10 rounded-full"
      />
    )}
  </div>
);

const Samtale = () => {
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState(1);

  function addTask(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const messageText = formData.get("message");

    if (!messageText.trim()) return;

    const userMessage = {
      id: messageId,
      text: messageText,
      sender: "user",
    };

    const martinReply = {
      id: messageId + 1,
      text: "Autosvar: Tusind tak for beskeden – jeg vender tilbage, så snart jeg kan. /Martin",
      sender: "martin",
    };

    setMessages((prev) => [...prev, userMessage, martinReply]);
    setMessageId((prev) => prev + 2);
    event.target.reset();
  }

  return (
    <section className="bg-beige text-darkblue min-h-screen">
      <h2 className="text-center text-2xl p-5">Dit hus i billeder</h2>

      <div className="flex justify-center">
        <p className="w-300 mb-5 text-center">
          Se de nyeste billeder fra byggepladsen og følg med i dit hjems
          udvikling – ét skridt ad gangen.
        </p>
      </div>

      <img
        className="mx-auto mb-5"
        src="/img/husapp.jpg"
        alt="hus der er i gang med at blive bygget"
      />

      {/* Statisk besked fra Martin */}
      <Message
        sender="martin"
        text={`Kære Camilla og Michael\n\nSå nåede jeres hus endnu en milepæl og har fået tag på! Hvor har jeg glædet mig til at dele det med jer – husk I altid er velkomne til at komme forbi til en skurvognskaffe og kage. God weekend!`}
      />

      {/* Statisk svar fra bruger */}
      <Message
        sender="user"
        text="Hvor ser det skønt ud, Martin! Jeg kan næsten ikke vente.. det må betyde, at jeg kommer forbi med kage i løbet af ugen"
      />

      {/* Dynamiske beskeder */}
      <div className="flex flex-col items-center space-y-2 mb-10 w-full">
        {messages.map((msg) => (
          <Message key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      {/* Form til nye beskeder */}
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

      {/* Tilbage-knap */}
      <div className="bg-white flex justify-center p-5 mt-10">
        <Link href="/App">
          <img src="/img/undo.svg" alt="Gå tilbage knap" />
        </Link>
      </div>
    </section>
  );
};

export default Samtale;
