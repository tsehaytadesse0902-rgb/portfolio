# Tsehay Tadesse - Personal Portfolio Website

A beautiful, modern, and professional personal portfolio website showcasing skills, experience, and contact information for Tsehay Tadesse, Computer Engineer.

## 🎨 Features

- **Modern Design**: Clean, minimalistic UI with brown gradients and light creamy colors
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Interactive Elements**: Hover effects, form validation, and dynamic interactions
- **Professional Sections**: Hero, About, Skills, Projects, Experience, and Contact sections

## 📁 Project Structure

```
Tsehay Tadesse/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── script.js      # JavaScript functionality
├── images/
│   ├── profile-placeholder.jpg    # Profile photo (to be added)
│   ├── project-1.jpg              # Project image 1 (to be added)
│   ├── project-2.jpg              # Project image 2 (to be added)
│   ├── project-3.jpg              # Project image 3 (to be added)
│   └── project-4.jpg              # Project image 4 (to be added)
└── README.md          # This file
```

## 🚀 Setup Instructions

### 1. Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### 2. Installation

1. **Download/Clone the Project**
   - If you have the project files, ensure all folders (`css`, `js`, `images`) are in the same directory as `index.html`

2. **Add Your Images**
   - Replace `images/profile-placeholder.jpg` with your actual profile photo
   - Replace `images/project-1.jpg` through `images/project-4.jpg` with your project images
   - Recommended image sizes:
     - Profile photo: 350x350px (square, will be cropped to circle)
     - Project images: 600x400px (or similar aspect ratio)

3. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
   - Then navigate to `http://localhost:8000` in your browser

## ✏️ Customization Guide

### Personal Information

Edit the following in `index.html`:

1. **Hero Section** (lines ~40-60)
   - Update name, title, and description
   - Modify social media links

2. **About Section** (lines ~90-130)
   - Update personal introduction
   - Modify education and certification details

3. **Skills Section** (lines ~135-200)
   - Update skill names and percentages
   - Add or remove skills as needed

4. **Projects Section** (lines ~205-270)
   - Update project titles, descriptions, and tags
   - Link to actual project URLs

5. **Experience Section** (lines ~275-330)
   - Update work experience details
   - Modify dates, companies, and responsibilities

6. **Contact Section** (lines ~335-380)
   - Contact information is already set
   - Update social media links if needed

### Colors and Styling

Edit CSS variables in `css/style.css` (lines ~8-25):

```css
:root {
    --primary-brown: #8B6F47;    /* Main brown color */
    --dark-brown: #6B5638;        /* Darker brown */
    --light-brown: #A68B5B;       /* Lighter brown */
    --cream: #F5F1E8;             /* Cream background */
    --light-cream: #FAF8F3;       /* Light cream */
    /* ... more variables ... */
}
```

### Form Submission

The contact form currently uses a simulated submission. To connect it to a real backend:

1. **Update `js/script.js`** (around line 150)
   - Replace the simulated API call with your actual endpoint
   - Example:
   ```javascript
   const response = await fetch('https://your-api.com/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
   });
   ```

2. **Alternative: Use Email Service**
   - Consider using services like:
     - Formspree
     - EmailJS
     - Netlify Forms

### Download CV Button

Update the CV download functionality in `js/script.js` (around line 250):

1. Add your CV file to the project folder
2. Update the download link:
   ```javascript
   link.href = 'path/to/your-cv.pdf';
   link.download = 'Tsehay_Tadesse_CV.pdf';
   ```

## 🌐 Deployment

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Upload all project files
3. Go to Settings > Pages
4. Select main branch and `/root` folder
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify

1. Go to [Netlify](https://www.netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly

### Option 3: Vercel

1. Go to [Vercel](https://vercel.com)
2. Import your project
3. Deploy with one click

### Option 4: Traditional Web Hosting

1. Upload all files via FTP to your hosting provider
2. Ensure `index.html` is in the root directory
3. Your site will be accessible via your domain

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Poppins & Playfair Display)

## 📝 Notes

- All images should be optimized for web (use tools like TinyPNG)
- The website uses modern CSS features (may require fallbacks for very old browsers)
- Form validation is client-side only; add server-side validation for production
- Social media links are placeholders; update with your actual profiles

## 🎯 Future Enhancements

- Add dark mode toggle
- Implement blog section
- Add testimonials section
- Integrate Google Maps for location
- Add language switcher (if needed)
- Implement analytics tracking

## 📧 Contact

For questions or support regarding this portfolio template:
- Email: tsehayetadess0902@gmail.com
- Phone: +251-924-829-599

## 📄 License

This portfolio template is created for personal use. Feel free to customize it for your own portfolio.

---

**Built with ❤️ for Tsehay Tadesse**

