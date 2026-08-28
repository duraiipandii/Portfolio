# Durai Pandi — .NET Backend Software Engineer Portfolio

A modern, responsive, 3D developer portfolio built for **Durai Pandi** (.NET Backend Software Engineer, Chennai, India). Built with **React + Vite + Tailwind CSS + Three.js + Lucide Icons**.

---

## 🌐 Live GitHub Hosting Instructions

Your code is fully prepared, built, and committed locally for your repository **`duraiipandii/Portfolio-`**!

### Step 1: Open Terminal in `portfolio/`
```bash
cd d:\Durai\Personal\Inter\portfolio
```

### Step 2: Push Code to GitHub
Run the command below in your terminal (enter your GitHub credentials or PAT if prompted):
```bash
git push -u origin main
```

### Step 3: Deploy to GitHub Pages
Run the deploy script:
```bash
npm run deploy
```

---

🎉 Your live portfolio will be hosted at:
👉 **`https://duraiipandii.github.io/Portfolio-/`**

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
│   │   └── ThemeContext.jsx      # Tech stack themes (.NET 8/9 Blue, Cloud, AI, Linux)
│   ├── data/
│   │   └── portfolioData.js      # Updated ATS resume profile data
│   ├── App.jsx                   # Root application container
│   ├── index.css                 # 3D depth styles & Tailwind directives
│   └── main.jsx                  # React DOM entry point
├── .github/workflows/deploy.yml  # GitHub Actions automated deploy script
├── index.html                    # SEO head tags & Google fonts
├── vite.config.js                # Configured with base: '/Portfolio-/'
└── package.json                  # Dependencies & gh-pages deploy script
```

---

## 📄 License
MIT © Durai Pandi
