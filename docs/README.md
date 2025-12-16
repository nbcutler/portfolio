# Nolan Cutler - Data Governance Portfolio

A sophisticated portfolio site built with React + Vite, featuring TIAA brand colors and designed for Data Governance professionals. Features animated statistics, skill visualizations, and a refined dark theme.

![Portfolio Preview](preview.png)

## ✨ Features

- **Editorial Design Aesthetic** — Clean, professional look with warm copper accents
- **Animated Statistics** — Number counters and skill bars with smooth animations
- **Responsive Layout** — Works beautifully on desktop, tablet, and mobile
- **Side Navigation** — Elegant dot navigation for desktop users
- **Performance Optimized** — Built with Vite for fast loading
- **GitHub Pages Ready** — Includes automatic deployment workflow

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to GitHub Pages

1. **Create a GitHub repository** for your portfolio

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Configure GitHub Pages:**
   - Go to Repository → Settings → Pages
   - Under "Build and deployment", select **GitHub Actions**
   - The included workflow will automatically deploy on push to `main`

4. **Update base path (if needed):**
   If your repo isn't named `username.github.io`, update `vite.config.js`:
   ```js
   base: '/your-repo-name/',
   ```

## 📝 Customization

### Update Your Information

Edit the `portfolioData` object in `src/App.jsx`:

```jsx
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your professional tagline",
  email: "your.email@example.com",
  linkedin: "linkedin.com/in/yourprofile",
  github: "github.com/yourusername",
  
  stats: [
    { value: "50+", label: "Your Metric" },
    // ... more stats
  ],
  
  expertise: [
    { area: "Your Skill", level: 90 },
    // ... more skills
  ],
  
  experience: [
    {
      role: "Your Role",
      company: "Company Name",
      period: "2022 — Present",
      highlights: ["Achievement 1", "Achievement 2"]
    },
    // ... more experience
  ],
  
  // ... projects, certifications, tools
}
```

### Customize Colors

The portfolio uses TIAA's brand colors. Edit CSS variables in `src/index.css`:

```css
:root {
  --tiaa-blue: #041459;        /* TIAA Primary Blue */
  --tiaa-light-blue: #305AF3;  /* TIAA Light Blue */
  --tiaa-teal: #00AD97;        /* TIAA Teal (accent) */
  --bg-primary: #041459;       /* Main background */
  --bg-secondary: #030f42;     /* Section backgrounds */
  --accent: #00AD97;           /* Accent color */
  --highlight: #305AF3;        /* Highlight color */
}
```

### Change Fonts

The portfolio uses:
- **Instrument Serif** — Display headings
- **DM Sans** — Body text

To change fonts, update the Google Fonts import in `index.css` and the `--font-display` / `--font-body` variables.

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── src/
│   ├── App.jsx             # Main component & data
│   ├── index.css           # Styles
│   └── main.jsx            # React entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎨 Design Philosophy

This portfolio uses **TIAA's brand identity**:

- **Deep navy blue** (#041459) as the primary background
- **Vibrant teal** (#00AD97) for accents and highlights
- **Light blue** (#305AF3) for secondary highlights
- **Clean white** typography for maximum readability
- **Subtle animations** add polish without distraction
- **Data-driven components** (skill bars, animated stats) reinforce expertise

## 📄 License

MIT License — feel free to use this template for your own portfolio!

---

Built with ❤️ using React + Vite
