import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface FeaturedModelsProps {
  mobile?: boolean;
}

export default function FeaturedModels({ mobile }: FeaturedModelsProps) {
  return (
    <>
      {/* Mobile version */}
      {mobile && (
        <div className="group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary md:border-primary">
          <div className="space-y-2">
            <div>
              <a className="hover:underline" href="https://openrouter.ai/openai/gpt-4.1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-foreground font-medium">GPT-4.1</h3>
                  </div>
                  <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                    <div className="overflow-hidden rounded-full dark:invert">
                      <img
                        width="256"
                        height="256"
                        alt="Favicon for openai"
                        src="https://openrouter.ai/images/icons/OpenAI.svg"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex items-center">
                <span className="text-muted-foreground text-xs">
                  by{" "}
                  <a className="text-primary hover:underline" href="https://openrouter.ai/openai">
                    openai
                  </a>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
              <div>
                <p className="text-green-10 text-sm font-medium">47.0B</p>
                <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
              </div>
              <div>
                <p className="text-sm font-medium">771ms</p>
                <p className="text-muted-foreground text-[10px]">Latency</p>
              </div>
              <div>
                <p className="text-sm font-medium text-red-10">-1.71%</p>
                <p className="text-muted-foreground text-[10px]">Weekly growth</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer section for both */}
      <div className={`flex items-center justify-between ${mobile ? "px-2 pt-4" : ""}`}>
        <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
        {mobile ? (
          <a className="text-primary text-xs hover:underline" href="https://openrouter.ai/rankings?view=trending">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </a>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            className="text-primary text-xs hover:underline h-6 px-1.5"
          >
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </Button>
        )}
      </div>

      {/* Desktop version */}
      {!mobile && (
        <div className="space-y-3">
          {/* Gemini Model */}
          <div className="group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary border-slate-6">
            <div className="space-y-2">
              <div>
                <a className="hover:underline" href="https://openrouter.ai/google/gemini-2.5-pro-preview">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-foreground font-medium">Gemini 2.5 Pro Preview 06-05</h3>
                      <span className="bg-muted text-muted-foreground rounded-sm px-1.5 py-0.5 text-[10px]">New</span>
                    </div>
                    <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <div className="overflow-hidden rounded-full">
                        <img
                          width="256"
                          height="256"
                          alt="Favicon for google"
                          src="https://openrouter.ai/images/icons/GoogleGemini.svg"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex items-center">
                  <span className="text-muted-foreground text-xs">
                    by{" "}
                    <a className="text-primary hover:underline" href="https://openrouter.ai/google">
                      google
                    </a>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
                <div>
                  <p className="text-green-10 text-sm font-medium">15.4B</p>
                  <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
                </div>
                <div>
                  <p className="text-sm font-medium">2.2s</p>
                  <p className="text-muted-foreground text-[10px]">Latency</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-9">--</p>
                  <p className="text-muted-foreground text-[10px]">Weekly growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* GPT-4.1 Model */}
          <div className="group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary md:border-primary">
            <div className="space-y-2">
              <div>
                <a className="hover:underline" href="https://openrouter.ai/openai/gpt-4.1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-foreground font-medium">GPT-4.1</h3>
                    </div>
                    <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <div className="overflow-hidden rounded-full dark:invert">
                        <img
                          width="256"
                          height="256"
                          alt="Favicon for openai"
                          src="https://openrouter.ai/images/icons/OpenAI.svg"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex items-center">
                  <span className="text-muted-foreground text-xs">
                    by{" "}
                    <a className="text-primary hover:underline" href="https://openrouter.ai/openai">
                      openai
                    </a>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
                <div>
                  <p className="text-green-10 text-sm font-medium">47.0B</p>
                  <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
                </div>
                <div>
                  <p className="text-sm font-medium">771ms</p>
                  <p className="text-muted-foreground text-[10px]">Latency</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-red-10">-1.71%</p>
                  <p className="text-muted-foreground text-[10px]">Weekly growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Claude Sonnet 4 Model */}
          <div className="group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary border-slate-6">
            <div className="space-y-2">
              <div>
                <a className="hover:underline" href="https://openrouter.ai/anthropic/claude-sonnet-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-foreground font-medium">Claude Sonnet 4</h3>
                    </div>
                    <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <div className="overflow-hidden rounded-full">
                        <img
                          width="256"
                          height="256"
                          alt="Favicon for anthropic"
                          src="https://openrouter.ai/images/icons/Anthropic.svg"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex items-center">
                  <span className="text-muted-foreground text-xs">
                    by{" "}
                    <a className="text-primary hover:underline" href="https://openrouter.ai/anthropic">
                      anthropic
                    </a>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
                <div>
                  <p className="text-green-10 text-sm font-medium">214.4B</p>
                  <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
                </div>
                <div>
                  <p className="text-sm font-medium">1.6s</p>
                  <p className="text-muted-foreground text-[10px]">Latency</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-red-10">-18.11%</p>
                  <p className="text-muted-foreground text-[10px]">Weekly growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}