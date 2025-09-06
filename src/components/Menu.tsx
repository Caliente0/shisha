import { Badge } from '@/components/ui/badge';

// Sample menu data - in a real app this would come from menu.json
const menuItems = [
  {
    id: 1,
    name: "Blue Flame",
    description: "Citrus mint • icy drip • velvet clouds",
    price: "€22",
    tag: "Signature",
    category: "shisha"
  },
  {
    id: 2,
    name: "Golden Peach",
    description: "Sun-ripe peach • creamy finish",
    price: "€20",
    tag: "New",
    category: "shisha"
  },
  {
    id: 3,
    name: "Midnight Grape",
    description: "Dark grape • cool mint",
    price: "€19",
    tag: "Classic",
    category: "shisha"
  },
  {
    id: 4,
    name: "Royal Amber",
    description: "Warm amber • spiced notes • golden essence",
    price: "€24",
    tag: "Premium",
    category: "shisha"
  },
  {
    id: 5,
    name: "Velvet Rose",
    description: "Persian rose • smooth finish • floral notes",
    price: "€21",
    tag: "Signature",
    category: "shisha"
  },
  {
    id: 6,
    name: "Tropical Breeze",
    description: "Mango passion • coconut twist • tropical escape",
    price: "€20",
    tag: "Classic",
    category: "shisha"
  },
  {
    id: 7,
    name: "Caliente Gold",
    description: "Premium gold leaf cocktail • champagne • 24k gold",
    price: "€35",
    tag: "Signature",
    category: "cocktail"
  },
  {
    id: 8,
    name: "Smoke & Mirrors",
    description: "Whiskey • smoked simple syrup • dry ice presentation",
    price: "€18",
    tag: "New",
    category: "cocktail"
  },
  {
    id: 9,
    name: "Golden Hour",
    description: "Aged rum • honey • gold dust rim",
    price: "€16",
    tag: "Classic",
    category: "cocktail"
  }
];

const getTagColor = (tag: string) => {
  switch (tag) {
    case 'Signature':
      return 'bg-primary text-primary-foreground';
    case 'New':
      return 'bg-green-600 text-white';
    case 'Premium':
      return 'bg-purple-600 text-white';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

const Menu = () => {
  return (
    <section id="menu" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold glow-gold mb-6">
            Menu Highlights
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-body">
            Discover our carefully curated selection of premium shishas and signature cocktails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="glass rounded-lg p-6 hover-glow transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    {item.name}
                  </h3>
                  <Badge 
                    className={`${getTagColor(item.tag)} text-xs font-medium mb-3`}
                  >
                    {item.tag}
                  </Badge>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary glow-gold">
                    {item.price}
                  </span>
                </div>
              </div>

              <p className="text-text-secondary font-body leading-relaxed italic">
                {item.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-4 pt-4 border-t border-primary/20">
                <div className="w-8 h-1 bg-primary rounded-full opacity-60"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-text-secondary mb-6 font-body">
            Experience the full range of our premium offerings
          </p>
          <div className="inline-flex items-center justify-center space-x-2 glass px-6 py-3 rounded-lg">
            <span className="text-primary font-heading font-semibold">
              Daily 17:00 – 02:00
            </span>
            <div className="w-2 h-2 bg-primary rounded-full shadow-ember animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;