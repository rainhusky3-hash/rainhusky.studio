import { ImageSlot } from "@/components/ui/ImageSlot";

const recentSlots = [
  { key: "recent-1", title: "Commission 1" },
  { key: "recent-2", title: "Commission 2" },
  { key: "recent-3", title: "Commission 3" },
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
          {recentSlots.map((slot) => (
            <div key={slot.key} className="group">
              <div className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <ImageSlot
                  storageKey={slot.key}
                  label="Upload Commission"
                  aspectRatio="square"
                  frameClassName="rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
