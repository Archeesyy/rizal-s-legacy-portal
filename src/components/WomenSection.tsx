import { Card, CardContent } from "./ui/card";
import segundaImage from "@/assets/segunda-katigbak.jpg";
import leonorImage from "@/assets/leonor-rivera.jpg";
import josephineImage from "@/assets/josephine-bracken.jpg";

interface Woman {
  name: string;
  image: string;
  relationship: string;
  description: string;
}

const women: Woman[] = [
  {
    name: "Segunda Katigbak",
    image: segundaImage,
    relationship: "First Love (1877)",
    description:
      "Rizal's first romantic interest during his teenage years in Manila. She was a young woman from Lipa, Batangas, whom he met at the house of his friend. Though their romance was brief and unfulfilled, she left a lasting impression on the young Rizal and inspired his early poetry.",
  },
  {
    name: "Leonor Rivera",
    image: leonorImage,
    relationship: "The Great Love (1882-1888)",
    description:
      "Often considered the love of Rizal's life, Leonor was his sweetheart for over six years. Their long-distance relationship was maintained through coded letters. She inspired many of his poems and the character of María Clara in Noli Me Tangere. Their love ended when she was forced to marry an Englishman.",
  },
  {
    name: "Josephine Bracken",
    image: josephineImage,
    relationship: "Common-Law Wife (1895-1896)",
    description:
      "An Irish woman who became Rizal's companion during his exile in Dapitan. They lived together as husband and wife, though they were never formally married. She gave birth to a son who died shortly after birth. Josephine remained devoted to Rizal until his execution and was present during his final hours.",
  },
];

const WomenSection = () => {
  return (
    <section id="women" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
            The Women in Rizal's Life
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-2xl mx-auto">
            Behind every great man are the women who shaped his heart and
            inspired his works.
          </p>
        </div>

        <div className="relative overflow-x-auto pb-8">
          <div className="flex gap-8 px-4 md:px-8 min-w-max md:justify-center">
            {women.map((woman, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[350px] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <div className="relative h-[400px] overflow-hidden rounded-t-lg">
                  <img
                    src={woman.image}
                    alt={woman.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-3xl font-bold text-primary-foreground mb-2">
                      {woman.name}
                    </h3>
                    <p className="font-lato text-sm text-accent font-semibold">
                      {woman.relationship}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="font-lato text-foreground leading-relaxed">
                    {woman.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <p className="text-center mt-8 font-lato text-muted-foreground italic">
          Scroll horizontally to explore
        </p>
      </div>
    </section>
  );
};

export default WomenSection;
