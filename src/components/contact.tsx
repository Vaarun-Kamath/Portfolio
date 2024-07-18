"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mvojklrr");
  if (state.succeeded) {
    return <p>Email Sucesssfully sent!</p>;
  }
  return (
    <div className="h-fit w-full flex justify-center items-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col w-full"
      >
        <input
          id="email"
          type="email"
          name="email"
          color="#111112"
          placeholder="Your Email"
          required
          className="text-slate-200 outline-none p-2 w-full bg-transparent border border-cyan-400"
        />
        <br />
        <br />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          placeholder="Body"
          name="message"
          color="#111112"
          required
          className="text-slate-200 outline-none p-2 flex items-center w-full h-32 bg-transparent border border-cyan-400"
        />
        <br />
        <br />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button
          type="submit"
          disabled={state.submitting}
          className="border border-cyan-400 p-3 hover:bg-cyan-400 hover:text-zinc-900 duration-200 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
