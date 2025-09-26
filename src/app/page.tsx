import Carousel from "@/components/carousel";
import Features from "@/components/features";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 space-y-8">
      <Header />
      <Carousel />
      <Features />
    </div>
  );
}
