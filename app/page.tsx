import DiscoverPage from "@/components/DiscoverPage";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center font-merriweather max-w-7xl overflow-hidden">
      <Hero />
    </main>
  );
}
