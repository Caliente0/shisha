# Caliente - Premium Shisha Lounge & Bar

A luxury shisha bar website featuring dark marble aesthetics, gold accents, and premium user experience.

## 🌟 Features

- **Luxury Design**: Dark marble background with elegant gold accents
- **Premium Effects**: Glassmorphism cards, gold glow effects, subtle smoke animations
- **Responsive Layout**: Mobile-first design that scales beautifully on all devices
- **Interactive Gallery**: Lightbox gallery with smooth navigation
- **Premium Menu**: Showcase of signature shishas and cocktails
- **Contact Integration**: Direct phone, WhatsApp, and maps integration
- **SEO Optimized**: Complete meta tags, structured data, and social sharing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm (install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation
```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd caliente-shisha-bar

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Design System

### Colors
- **Primary Gold**: `#9e8123` - Main brand color
- **Background**: Deep charcoal/black tones
- **Text**: White with various opacity levels (95%, 75%, 65%)
- **Glass Effects**: Semi-transparent surfaces with gold borders

### Typography  
- **Headings**: Playfair Display (serif, elegant)
- **Body Text**: Inter (modern, clean)

### Effects
- **Gold Glow**: Text shadows and box shadows using primary gold
- **Glassmorphism**: Blurred backgrounds with subtle borders
- **Smoke Animation**: Subtle background movement
- **Ember Particles**: Small glowing dots with random animation

## 📱 Sections

1. **Hero** - Main landing with call-to-action buttons
2. **About** - Three feature cards highlighting key offerings
3. **Gallery** - Interactive image gallery with lightbox
4. **Menu** - Premium shishas and cocktails with pricing
5. **Contact** - Location, hours, phone, and social links
6. **Footer** - Brand information and links

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - Premium component library
- **Lucide React** - Beautiful icons
- **TanStack Query** - Server state management

## 📞 Contact Information

- **Phone**: +357 55 555 555
- **Address**: Riviera Ave 21, City Center
- **Hours**: Daily 17:00 – 02:00
- **WhatsApp**: [Direct Link](https://wa.me/3575555555?text=Hello%20Caliente)

## 🚀 Deployment

### Netlify/Vercel (Recommended)
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on push

### Manual Deployment
```bash
npm run build
# Upload the contents of 'dist' folder to your hosting provider
```

## 🔧 Customization

### Adding Menu Items
Edit the `menuItems` array in `src/components/Menu.tsx`:

```javascript
const menuItems = [
  {
    id: 1,
    name: "Your Shisha",
    description: "Description here",
    price: "€20",
    tag: "New", // "Signature", "New", "Classic", "Premium"
    category: "shisha" // or "cocktail"
  }
];
```

### Gallery Images
Update the `galleryImages` array in `src/components/Gallery.tsx` or create a `public/data/gallery.json` file.

### Design System
Modify colors and effects in:
- `src/index.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind configuration

## 📈 Performance

- **Images**: WebP format with lazy loading
- **Fonts**: Google Fonts with display=swap
- **Bundle**: Optimized with Vite tree-shaking
- **Lighthouse Targets**: 95+ Performance, 100 Accessibility/SEO

## 🎯 SEO Features

- Complete meta tags for social sharing
- Structured data for local business
- Semantic HTML markup
- Optimized images with alt text
- Mobile-friendly design
- Fast loading performance

## 📄 License

Built for Caliente Shisha Lounge & Bar. All rights reserved.

---

*Gold warmth • Golden nights* ✨