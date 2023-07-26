import Blog from "@/modules/pages/blog/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex justify-center">
      <div className="container m-auto  border-2 border-white rounded-3xl ">
        <Blog />
      </div>
    </main>
  );
}
