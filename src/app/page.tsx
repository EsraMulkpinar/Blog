import Blog from "@/modules/pages/blog/page";
export default function Home() {
  return (
    <main className="h-screen flex justify-center absolute z-10 top-1/2 right-1/2">
      <div className="container m-auto  border-2 border-white rounded-3xl p-10 backdrop-blur-sm">
        <Blog />
      </div>
    </main>
  );
}
