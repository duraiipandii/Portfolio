# Durai Pandi — .NET Backend Software Engineer 3D Portfolio

A modern, responsive, 3D developer portfolio built for **Durai Pandi** (.NET Backend Software Engineer, Chennai, India). Built with **React + Vite + Tailwind CSS + Three.js + Lucide Icons**.

---

## 🚀 Quick Deployment Guide for GitHub Pages

Deploying your portfolio to GitHub Pages takes less than 2 minutes so you can access it from anywhere!

### Step 1: Open Terminal in `portfolio/`
```bash
cd d:\Durai\Personal\Inter\portfolio
```

### Step 2: Initialize Git & Commit
```bash
git init
git add .
git commit -m "Initial commit of 3D portfolio"
git branch -M main
```

### Step 3: Create GitHub Repository
1. Go to [https://github.com/new](https://github.com/new)
2. Enter Repository Name: `portfolio` (or `durai-portfolio`)
3. Keep Public and click **Create repository**.

### Step 4: Push to GitHub & Deploy Live
```bash
# Link your repository (replace YOUR_GITHUB_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git

# Push code to GitHub
git push -u origin main

# Deploy live on GitHub Pages
npm run deploy
```

🎉 Your portfolio will be live at:
**`https://YOUR_GITHUB_USERNAME.github.io/portfolio/`**

---

## ⚡ Alternative Free Deployments

### Option A: Vercel (1-Click Deployment)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** > **Project** and select your `portfolio` repository.
3. Click **Deploy**. Vercel will automatically host your portfolio with instant global SSL!

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and sign in.
2. Click **Add new site** > **Import an existing project**.
3. Select your repository, set build command to `npm run build` and output directory to `dist`.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg               # Developer CLI icon
│   └── Durai_Pandi_Resume.pdf    # Resume PDF file for direct download
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Glass navbar & theme palette switcher
│   │   ├── Hero.jsx              # Hero header & C# 13 code terminal
│   │   ├── About.jsx             # Technical summary & specs
│   │   ├── Skills.jsx            # Filterable skills matrix
│   │   ├── Experience.jsx        # Timeline for Resulticks & Agilensmart
│   │   ├── Education.jsx         # B.E. Computer Science card
│   │   ├── Projects.jsx          # Realistic .NET project cards
│   │   ├── Contact.jsx           # Form & copy email widget
│   │   ├── ResumeModal.jsx       # Interactive in-browser resume viewer
│   │   ├── Card3D.jsx            # 3D perspective tilt engine
│   │   ├── ThreeBackground.jsx   # Three.js 3D WebGL particle background
│   │   └── Footer.jsx            # Copyright & back-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx      # Theme switcher context (5 tech themes)
│   ├── data/
│   │   └── portfolioData.js      # Updated ATS resume profile data
│   ├── App.jsx                   # Root application container
│   ├── index.css                 # 3D depth styles & Tailwind directives
│   └── main.jsx                  # React DOM entry point
├── .github/workflows/deploy.yml  # GitHub Actions automated deploy script
├── index.html                    # SEO head tags & Google fonts
├── vite.config.js                # Relative base path for GitHub Pages
└── package.json                  # Dependencies & gh-pages deploy script
```

---

## 📄 License
MIT © Durai Pandi
