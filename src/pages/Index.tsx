import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import GetStartedSection from "../components/GetStartedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="tabular-nums">
        <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
          <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
            <HeroSection />
            
            <div className="flex flex-col gap-8 md:gap-12">
              <StatsSection />
            </div>

            <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
              <GetStartedSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;