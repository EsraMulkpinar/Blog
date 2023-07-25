import Image from "next/image";
import Blog from "./blog/page";

export default function Home() {
  return (
    <main className="h-screen flex justify-center">
      <div className="container m-auto  border-2 border-white rounded-3xl ">
        <Blog />
      </div>
    </main>
  );
}
