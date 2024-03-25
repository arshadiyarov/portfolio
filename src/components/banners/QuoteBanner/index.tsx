import React from "react";

const QuoteBanner = () => {
  return (
    <section className={"flex flex-col w-fit mx-auto"}>
      <div className={"border border-secondary w-fit p-8 text-2xl relative"}>
        Respect is intended to operate on a two-way street
        <img
          src="/img/quote-symbol.svg"
          alt="quote-symbol"
          className={"absolute -top-3 left-3 bg-main px-2"}
        />
        <img
          src="/img/quote-symbol.svg"
          alt="quote-symbol"
          className={"absolute -bottom-3 right-3 bg-main px-2"}
        />
      </div>
      <div className={"border border-secondary w-fit p-4 text-2xl self-end"}>
        - James Dobson
      </div>
    </section>
  );
};

export default QuoteBanner;
