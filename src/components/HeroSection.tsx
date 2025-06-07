import { ArrowRight, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import RoutingCurves from "./RoutingCurves";
import ProviderButtons from "./ProviderButtons";
import FeaturedModels from "./FeaturedModels";

export default function HeroSection() {
  return (
    <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
      {/* Hero Text */}
      <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
        <h1 className="my-0 w-full py-0 text-5xl font-semibold">
          <span className="mb-1 hidden md:block">The Unified</span>
          <span className="hidden md:block">Interface For LLMs</span>
          <span className="flex flex-col gap-0.5 text-3xl md:hidden">
            <div>The Unified</div>
            <div>Interface For LLMs</div>
          </span>
        </h1>
        <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
          Better{" "}
          <a href="https://openrouter.ai/models?order=pricing-low-to-high" className="text-primary hover:underline">
            prices
          </a>
          , better{" "}
          <a href="https://openrouter.ai/docs/features/uptime-optimization" className="text-primary hover:underline">
            uptime
          </a>
          , no subscription.
        </p>
      </div>

      {/* Chat Interface and Models */}
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
        {/* Chat Input */}
        <div className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
          {/* Routing Curves - Desktop */}
          <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
            <RoutingCurves className="h-80 w-12" />
          </div>
          
          <div className="flex w-full items-center justify-between gap-3 flex-row">
            <Input
              className="w-full appearance-none py-2 transition duration-150 ease-in-out placeholder:text-foreground/30 shadow-border focus:shadow-inner focus:outline-none text-muted-foreground bg-background focus:bg-background/80 h-10 flex-1 rounded-lg border-0 px-4"
              placeholder="Start a message..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <Button className="aspect-square h-10 px-3 group transition-colors md:aspect-auto md:flex-shrink-0">
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>

        {/* Models Section */}
        <div className="w-full min-w-80 space-y-3 md:w-auto">
          {/* Mobile Routing Curves */}
          <div className="block md:hidden">
            <RoutingCurves className="h-10 w-full" mobile />
            <ProviderButtons />
            <FeaturedModels mobile />
          </div>

          {/* Desktop Models */}
          <div className="hidden space-y-3 md:block">
            <FeaturedModels />
          </div>
        </div>
      </div>
    </div>
  );
}