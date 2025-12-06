import { Scale, BookOpen, Church, CheckCircle, Users } from "lucide-react";

const CourtroomRoom = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-mahogany py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          The Courtroom
        </h2>
        <p className="font-lato text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          The battle for Republic Act No. 1425—a law that would determine how Filipinos remember their national hero.
        </p>

        {/* Main Debate Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Scale className="text-gold" size={48} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Senator Recto */}
            <div className="bg-card p-8 rounded-2xl shadow-elegant border-t-4 border-gold relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/20 rounded-full">
                    <BookOpen className="text-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-primary">Senator Claro M. Recto</h3>
                    <p className="font-lato text-sm text-muted-foreground">Author of the Bill</p>
                  </div>
                </div>
                <div className="space-y-4 font-lato text-sm text-muted-foreground">
                  <p className="font-semibold text-primary">"Without Rizal's works, there would be no Filipino nation."</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={16} />
                      Studying Rizal instills nationalism and patriotism
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={16} />
                      Youth must understand the sacrifices of heroes
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={16} />
                      Reading unexpurgated versions provides complete education
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Church */}
            <div className="bg-card p-8 rounded-2xl shadow-elegant border-t-4 border-destructive relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-destructive/10 rounded-full blur-3xl group-hover:bg-destructive/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-destructive/20 rounded-full">
                    <Church className="text-destructive" size={28} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-primary">The Catholic Church</h3>
                    <p className="font-lato text-sm text-muted-foreground">Led by Fr. Jesus Cavanna</p>
                  </div>
                </div>
                <div className="space-y-4 font-lato text-sm text-muted-foreground">
                  <p className="font-semibold text-primary">"Forcing students to read anti-Catholic works violates religious freedom."</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive flex-shrink-0">✗</span>
                      Novels contain passages offensive to the Church
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive flex-shrink-0">✗</span>
                      Mandatory reading of unexpurgated versions is coercion
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive flex-shrink-0">✗</span>
                      Students should have freedom of conscience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Compromise */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gold/20 border-2 border-gold rounded-2xl p-8 shadow-elegant text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="text-gold" size={28} />
              <h3 className="font-playfair text-2xl font-bold text-primary">The Compromise</h3>
            </div>
            <p className="font-lato text-muted-foreground mb-6">
              Approved June 12, 1956 — On Philippine Independence Day
            </p>
            <div className="space-y-4 text-left max-w-xl mx-auto">
              <div className="bg-background/50 p-4 rounded-lg">
                <p className="font-lato text-sm text-foreground">
                  <span className="font-bold text-gold">The Law States:</span> All schools, colleges, and universities shall include in their curricula courses on the life, works, and writings of José Rizal, particularly the Noli Me Tangere and El Filibusterismo.
                </p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg">
                <p className="font-lato text-sm text-foreground">
                  <span className="font-bold text-gold">The Exception:</span> Students may request exemption from reading the unexpurgated versions for religious reasons. However, they still take the course with edited versions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Facts */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-playfair text-xl font-bold text-primary text-center mb-8">Key Facts About RA 1425</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Author", value: "Sen. Claro M. Recto" },
              { label: "Approved", value: "June 12, 1956" },
              { label: "Also Known As", value: "The Rizal Law" },
              { label: "Requirement", value: "All Filipino Students" },
            ].map((fact) => (
              <div key={fact.label} className="bg-card p-4 rounded-xl text-center shadow-card">
                <p className="font-lato text-xs text-muted-foreground uppercase tracking-wider mb-1">{fact.label}</p>
                <p className="font-playfair font-bold text-primary">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-16 text-center">
          <p className="font-playfair text-2xl text-gold italic max-w-2xl mx-auto">
            "The youth is the hope of our future."
          </p>
          <p className="font-lato text-sm text-muted-foreground mt-4">— Dr. José Rizal (1861-1896)</p>
        </div>
      </div>
    </div>
  );
};

export default CourtroomRoom;