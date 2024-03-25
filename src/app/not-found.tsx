import Link from "next/link";
import HeaderLink from "@/components/ui/links/HeaderLink";

const NotFoundPage = () => {
  return (
    <section className="flex justify-center items-center py-64 relative">
      <div className="text-center">
        <h1 className="text-8xl font-bold">
          4<span className={"text-primary"}>0</span>4
        </h1>
        <p className="text-xl mt-4">
          Oh no! The page you requested was not found.
        </p>
        <p className="mt-2">
          Perhaps you mistyped the address. Go back to{" "}
          <HeaderLink to={"/"} text={"home"} />.
        </p>
      </div>
      <img
        src="/img/dots4x5.svg"
        alt="dotx4x5"
        className={"absolute bottom-[125px] right-[125px] rotate-90"}
      />
      <img
        src="/img/dots5x5.svg"
        alt="dotx5x5"
        width={85}
        className={"absolute -left-[75px] top-[25px]"}
      />
      <img
        src="/img/rectangle.svg"
        alt="rectangle"
        width={175}
        className={"absolute -right-[125px] top-[75px]"}
      />
      <img
        src="/img/rectangle.svg"
        alt="rectangle"
        width={75}
        className={"absolute left-12 bottom-[50px]"}
      />
    </section>
  );
};

export default NotFoundPage;
