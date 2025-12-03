import { Scale, Users, BookOpen, AlertTriangle } from "lucide-react";

const RizalLawSection = () => {
  return (
    <section className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
            The Rizal Law (R.A. 1425)
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto">
            The law that mandates the study of Rizal's life, works, and writings — and the controversy behind it.
          </p>
        </div>

        {/* Overview */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-xl shadow-elegant overflow-hidden">
            <div className="bg-gold p-6 flex items-center gap-4">
              <Scale className="text-accent-foreground" size={32} />
              <div>
                <h3 className="font-playfair text-2xl font-bold text-accent-foreground">
                  Republic Act No. 1425
                </h3>
                <p className="font-lato text-accent-foreground/80 text-sm">
                  Signed: June 12, 1956 (60th Independence Day)
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="font-lato text-lg text-foreground leading-relaxed">
                The Rizal Law mandates that all schools, colleges, and universities in the Philippines include in 
                their curricula courses on the life, works, and writings of José Rizal, particularly his novels 
                <strong> Noli Me Tangere</strong> and <strong>El Filibusterismo</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* The Conflict */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="font-playfair text-3xl font-bold text-primary text-center mb-8">
            The Battle: Recto vs. The Church
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Senator Recto */}
            <div className="bg-gold/10 border-2 border-gold rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Users className="text-accent-foreground" size={28} />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-primary">
                    Senator Claro M. Recto
                  </h4>
                  <p className="font-lato text-sm text-gold">Author of the Bill</p>
                </div>
              </div>
              <div className="space-y-3 font-lato text-foreground">
                <p>
                  <strong>Argument:</strong> Filipinos must know their national hero's works to understand 
                  the struggles for freedom and develop nationalism.
                </p>
                <p>
                  <strong>Position:</strong> The unexpurgated (complete) versions of the novels must be 
                  read — including passages critical of the Church.
                </p>
                <p className="italic text-muted-foreground">
                  "The novels are historical documents that reveal the conditions that led to our revolution."
                </p>
              </div>
            </div>

            {/* The Catholic Church */}
            <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="text-destructive" size={28} />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-primary">
                    The Catholic Church
                  </h4>
                  <p className="font-lato text-sm text-destructive">Led by Fr. Jesus Cavanna</p>
                </div>
              </div>
              <div className="space-y-3 font-lato text-foreground">
                <p>
                  <strong>Argument:</strong> The novels contain passages that are "Anti-Catholic" and 
                  would undermine the faith of students.
                </p>
                <p>
                  <strong>Position:</strong> Forcing Catholic students to read unexpurgated versions 
                  violates their <strong>freedom of religion</strong>.
                </p>
                <p className="italic text-muted-foreground">
                  Threatened excommunication for legislators who voted for the bill.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Compromise */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-mahogany rounded-xl shadow-elegant p-8">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="text-gold" size={32} />
              <h3 className="font-playfair text-2xl font-bold text-gold">
                The Compromise Solution
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-playfair text-lg font-bold text-primary-foreground mb-3">
                  What the Law Requires:
                </h4>
                <ul className="font-lato text-primary-foreground space-y-2">
                  <li>• All schools must offer courses on Rizal's life and works</li>
                  <li>• Original, unexpurgated novels must be available in libraries</li>
                  <li>• The course is mandatory at the collegiate level</li>
                </ul>
              </div>
              <div>
                <h4 className="font-playfair text-lg font-bold text-primary-foreground mb-3">
                  The Religious Exemption:
                </h4>
                <ul className="font-lato text-primary-foreground space-y-2">
                  <li>• Students may request to read <strong>expurgated versions</strong> (censored)</li>
                  <li>• They must submit a written request citing religious reasons</li>
                  <li>• However, they <strong>still take the course</strong> — only the reading material differs</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gold/20 rounded-lg">
              <p className="font-lato text-primary-foreground text-center">
                <strong>Result:</strong> The law passed on <strong>June 12, 1956</strong>. 
                Today, millions of Filipino students study Rizal's novels every year — keeping his memory and 
                message alive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RizalLawSection;
