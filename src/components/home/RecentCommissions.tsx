const recentWork = [
  {
    id: 1,
    title: "Character Commission",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Pet Portrait",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Full Body Piece",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=500&h=500&fit=crop",
  },
];

export function RecentCommissions() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Recent Commissions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Some of my latest completed pieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {recentWork.map((piece) => (
            <div key={piece.id} className="group">
              <div className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square overflow-hidden rounded">
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mt-2 text-sm font-medium text-foreground text-center">{piece.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
