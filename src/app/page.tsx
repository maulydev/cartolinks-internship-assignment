import Carousel from "@/components/carousel/carousel";
import Features from "@/components/features/features";

export default function Home() {
  return (
    <div className="space-y-8">
      <Carousel />
      <Features />
    </div>
  );
}
