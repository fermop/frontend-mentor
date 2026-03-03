import { HeroParallax } from "@/components/ui/hero-parallax";
import { frontendMentorProjects } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroParallax products={frontendMentorProjects.reverse()} />
    </main>
  );
}