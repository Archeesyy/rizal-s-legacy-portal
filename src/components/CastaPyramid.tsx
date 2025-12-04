const CastaPyramid = () => {
  const levels = [
    {
      name: "Peninsulares",
      description: "Spanish-born in Spain",
      width: "w-1/4",
      color: "from-gold to-gold-light",
    },
    {
      name: "Insulares/Criollos",
      description: "Spanish-born in the Philippines",
      width: "w-2/5",
      color: "from-mahogany to-mahogany-light",
    },
    {
      name: "Mestizos",
      description: "Mixed Spanish-Filipino or Chinese-Filipino",
      width: "w-3/5",
      color: "from-primary to-primary/80",
    },
    {
      name: "Indios",
      description: "Native Filipinos - the majority",
      width: "w-4/5",
      color: "from-secondary to-secondary/80",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2 py-8">
      <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
        The Casta System
      </h3>
      {levels.map((level, index) => (
        <div
          key={level.name}
          className={`${level.width} transition-all duration-300 hover:scale-105 cursor-pointer group`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div
            className={`bg-gradient-to-r ${level.color} py-4 px-6 rounded-lg shadow-card text-center`}
          >
            <h4 className="font-playfair font-bold text-primary-foreground text-lg">
              {level.name}
            </h4>
            <p className="font-lato text-primary-foreground/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {level.description}
            </p>
          </div>
        </div>
      ))}
      <p className="font-lato text-muted-foreground text-sm mt-4 text-center max-w-md">
        Social mobility was nearly impossible. One's birth determined their entire life.
      </p>
    </div>
  );
};

export default CastaPyramid;
