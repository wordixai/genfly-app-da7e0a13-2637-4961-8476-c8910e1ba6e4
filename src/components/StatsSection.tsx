export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
      <a href="https://openrouter.ai/rankings">
        <div className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-slate-6">
          <div className="p-4 md:p-6">
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <p className="text-3xl md:text-4xl font-bold text-foreground">8.4T</p>
              <p className="text-xs md:text-sm text-muted-foreground">Monthly Tokens</p>
            </div>
          </div>
        </div>
      </a>
      <div className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-slate-6">
        <div className="p-4 md:p-6">
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <p className="text-3xl md:text-4xl font-bold text-foreground">2.5M+</p>
            <p className="text-xs md:text-sm text-muted-foreground">Global Users</p>
          </div>
        </div>
      </div>
      <a href="https://openrouter.ai/models">
        <div className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-slate-6">
          <div className="p-4 md:p-6">
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <p className="text-3xl md:text-4xl font-bold text-foreground">60+</p>
              <p className="text-xs md:text-sm text-muted-foreground">Active Providers</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://openrouter.ai/models">
        <div className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-slate-6">
          <div className="p-4 md:p-6">
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <p className="text-3xl md:text-4xl font-bold text-primary">400+</p>
              <p className="text-xs md:text-sm text-muted-foreground">Models</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}