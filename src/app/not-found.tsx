import Link from "next/link";
import HeaderLink from "@/components/ui/links/HeaderLink";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
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
    </div>
  );
};

export default NotFoundPage;
