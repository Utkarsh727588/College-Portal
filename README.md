# 🎓 College Portal

A modern, feature-rich college portal application built with React, featuring a multi-step application form, responsive design, and beautiful animations.

## 🌐 Live Demo

**Deployed on Vercel:** [https://your-app-name.vercel.app]([https://your-app-name.vercel.app](https://collegepotall-mdab7iks4-utkarsh5669s-projects.vercel.app/))

> 🔄 **Update this link:** Replace with your actual Vercel deployment URL after deploying

## ✨ Features

### 📝 Multi-Step Application Form
- **Step 1:** Course & Personal Details with Address Information
- **Step 2:** Family Details (Father, Mother, Guardian)
- **Step 3:** Education History (10th, 12th, Previous College)
- **Step 4:** Review & Submit with Edit Functionality

### 🎨 Design Highlights
- **Modern UI:** Purple gradient theme with smooth animations
- **Responsive Design:** Optimized for mobile, tablet, and desktop
- **Interactive Elements:** Hover effects, transitions, and transforms
- **Accessibility:** WCAG 2.1 AA compliant
- **Form Features:** Auto-fill address, smart validation, progress tracking

### 🚀 Technical Features
- React 18+ with Hooks
- CSS Modules for scoped styling
- Multi-step form state management
- Animated progress tracker
- Form validation ready
- Print-friendly review page

## 🛠️ Technologies Used

- **Frontend Framework:** React 18
- **Styling:** CSS Modules with Custom Properties
- **Routing:** React Router DOM
- **Form Handling:** React State Management
- **Icons:** Inline SVG
- **Build Tool:** Create React App
- **Deployment:** Vercel

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Utkarsh727588/College-Portal.git
   cd College-Portal/college-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
college-portal/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Button/
│   │   └── home/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Application.jsx
│   │   └── AboutUs.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Deployment on Vercel

### Method 1: Via GitHub (Recommended)

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - **Set Root Directory:** `college-portal`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - Click "Deploy"

3. **Get your live URL**
   - Vercel will provide a URL like: `https://college-portal-xyz.vercel.app`
   - Update the "Live Demo" section above with this URL

### Method 2: Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to project**
   ```bash
   cd college-portal
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts. For first deployment, select:
   - Set up and deploy: **Yes**
   - Link to existing project: **No**
   - Project name: **college-portal**
   - Directory: **./** (current directory)

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Configuration for Vercel

Create `vercel.json` in your `college-portal` folder:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "build"
}
```

This ensures React Router works correctly on Vercel.

## 📝 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).  
The page reloads when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.  
Optimizes React for best performance with minified bundles.

### `npm run eject`
**⚠️ One-way operation!** Ejects from Create React App for full configuration control.

## 🎨 Customization

### Change Theme Colors

Edit CSS custom properties in component `.module.css` files:

```css
:root {
  --purple-primary: #7c3aed;  /* Your primary color */
  --purple-dark: #6d28d9;     /* Darker shade */
  --pink-accent: #ec4899;     /* Accent color */
}
```

### Add New Pages

1. Create component in `src/pages/`
2. Add route in `src/routes/AppRoutes.jsx`
3. Update navigation in Header component

## 🔧 Environment Variables

Create `.env` file in root (if needed):

```env
REACT_APP_API_URL=your-api-url
REACT_APP_ENV=production
```

For Vercel, add environment variables in:
- Project Settings → Environment Variables

## 🐛 Troubleshooting

### Vercel Deployment Issues

**404 on page refresh**
- ✅ Solution: Add `vercel.json` with rewrites (see Deployment section)

**Build fails on Vercel**
- Check Node.js version compatibility
- Ensure all dependencies are in `package.json`
- Review build logs in Vercel dashboard

**Blank page after deployment**
- Check browser console for errors
- Verify `homepage` in `package.json` is correct
- Ensure build folder path is set to `build`

### Local Development Issues

**Port 3000 already in use**
```bash
# Kill the process on port 3000
npx kill-port 3000
# Then run npm start again
```

**Module not found errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [React Router Documentation](https://reactrouter.com/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Utkarsh**
- GitHub: [@Utkarsh727588](https://github.com/Utkarsh727588)
- Repository: [College-Portal](https://github.com/Utkarsh727588/College-Portal)

## 🙏 Acknowledgments

- Create React App team for the excellent boilerplate
- React community for amazing libraries and tools
- Vercel for seamless deployment

## 📞 Support

For support, open an issue in the GitHub repository.

---

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by Utkarsh
