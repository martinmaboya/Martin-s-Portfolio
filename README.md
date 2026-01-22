# Portfolio Website

A modern, responsive portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🎭 Smooth animations
- 🔍 SEO optimized
- 📊 TypeScript for type safety
- 🎯 Performance optimized
- ♿ Accessible components

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion (optional)
- **Deployment:** Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 🎨 Customization

### 1. Personal Information

Update the following in the respective component files:

- **Hero section** (`components/Hero.tsx`): Name, title, description
- **About section** (`components/About.tsx`): Bio, stats, highlights
- **Contact section** (`components/Contact.tsx`): Email, location, phone
- **Footer** (`components/Footer.tsx`): Social media links

### 2. Projects

Edit `components/Projects.tsx` to add your own projects:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    image: 'image-url',
    tags: ['Tech', 'Stack'],
    liveUrl: 'https://...',
    githubUrl: 'https://...',
  },
]
```

### 3. Skills

Modify `components/Skills.tsx` to update your skills and proficiency levels.

### 4. Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### 5. Metadata

Update SEO information in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description',
  // ...
}
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- **Netlify:** Use the Next.js plugin
- **AWS Amplify:** Follow their Next.js guide
- **Docker:** Use the provided Dockerfile (if created)

## 📧 Contact Form Setup

The contact form is currently set up with a simple alert. To make it functional:

### Option 1: Formspree

```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: API Route

Create `app/api/contact/route.ts`:

```typescript
export async function POST(request: Request) {
  const body = await request.json()
  // Send email using your preferred service
  return Response.json({ success: true })
}
```

### Option 3: Third-party Services

- EmailJS
- SendGrid
- Resend
- Nodemailer

## 🎯 Performance Optimization

- Images are optimized with Next.js Image component
- Components are code-split automatically
- Tailwind CSS purges unused styles in production
- Static generation for maximum performance

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

Feel free to use this portfolio template for your personal use.

## 🤝 Contributing

Suggestions and improvements are welcome!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
