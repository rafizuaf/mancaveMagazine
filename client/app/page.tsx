import Container from "@/components/ui/container";
import Image from "next/image";

export default function Home() {
  return (
      <main className="container">
        <div className="flex w-full">
          <div className="w-3/4 border-r-2 min-h-screen">
            <div className="pt-5">
              <p>Hellowwww</p>
            </div>
          </div>
          <div className="w-1/4 pl-5">
            <div className="pt-5">
              <p>Sidebar</p>
            </div>
          </div>
        </div>
      </main>
  );
}
