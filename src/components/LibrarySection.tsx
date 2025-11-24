import { useState } from "react";
import noliImage from "@/assets/noli-me-tangere.jpg";
import filiImage from "@/assets/el-filibusterismo.jpg";
import adiósImage from "@/assets/mi-ultimo-adios.jpg";
import womenImage from "@/assets/to-young-women.jpg";

interface Book {
  title: string;
  image: string;
  year: string;
  summary: string;
  significance: string;
}

const books: Book[] = [
  {
    title: "Noli Me Tangere",
    image: noliImage,
    year: "1887",
    summary:
      "A social novel that exposed the corruption and abuse of the Spanish colonial government and clergy in the Philippines.",
    significance:
      "This groundbreaking work awakened Filipino national consciousness and sparked the reform movement. It is considered one of the greatest novels in Philippine literature.",
  },
  {
    title: "El Filibusterismo",
    image: filiImage,
    year: "1891",
    summary:
      "The sequel to Noli Me Tangere, depicting a darker and more revolutionary narrative of Philippine society under Spanish rule.",
    significance:
      "This novel showed a more radical approach to reform, reflecting Rizal's growing frustration with Spanish colonial policies. It inspired revolutionary movements.",
  },
  {
    title: "Mi Último Adiós",
    image: adiósImage,
    year: "1896",
    summary:
      "His final poem, written hours before his execution, expressing his love for the Philippines and hope for its future.",
    significance:
      "This farewell poem has become one of the most famous pieces of Philippine literature. Hidden in an oil lamp, it was discovered after his death and inspired generations.",
  },
  {
    title: "To the Young Women of Malolos",
    image: womenImage,
    year: "1889",
    summary:
      "An essay celebrating Filipino women who fought for the right to education and advocating for women's empowerment.",
    significance:
      "This work demonstrated Rizal's progressive views on gender equality and education, inspiring Filipino women to pursue knowledge and independence.",
  },
];

const LibrarySection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section id="library" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
            The Library
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the literary masterpieces that ignited a revolution and
            continue to inspire millions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {books.map((book, index) => (
            <div
              key={index}
              className="perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative h-[500px] transition-transform duration-700 transform-style-3d ${
                  flippedCard === index ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    flippedCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                    <h3 className="font-playfair text-2xl font-bold text-primary-foreground">
                      {book.title}
                    </h3>
                    <p className="font-lato text-primary-foreground/80">
                      {book.year}
                    </p>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 backface-hidden bg-primary text-primary-foreground rounded-lg p-6 flex flex-col justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-accent">
                    {book.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-lato font-semibold text-sm uppercase tracking-wide mb-2">
                        Summary
                      </h4>
                      <p className="font-lato text-sm text-primary-foreground/90">
                        {book.summary}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-lato font-semibold text-sm uppercase tracking-wide mb-2">
                        Significance
                      </h4>
                      <p className="font-lato text-sm text-primary-foreground/90">
                        {book.significance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 font-lato text-muted-foreground italic">
          Hover over each book to reveal its story
        </p>
      </div>
    </section>
  );
};

export default LibrarySection;
