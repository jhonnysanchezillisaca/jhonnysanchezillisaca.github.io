# Personal Resume

A modern, responsive HTML resume with automatic PDF generation.

## 🌐 Live Resume
- **HTML Version**: [View Online](https://jhonnysanchez.github.io/personal-resume/)
- **PDF Version**: [Download PDF](https://jhonnysanchez.github.io/personal-resume/Jhonny_Sanchez_Resume.pdf)

## 🛠️ Development

### Prerequisites
- Node.js 18+ (for PDF generation)
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/jhonnysanchez/personal-resume.git
cd personal-resume

# Install dependencies
npm install
```

### Local Development
```bash
# Serve the HTML file locally (Python)
npm run dev

# Or using Node.js http-server
npm run dev:node
```

Then open http://localhost:8000 in your browser.

### Generate PDF Manually
```bash
# Generate PDF from HTML
npm run generate-pdf
```

This creates `Jhonny_Sanchez_Resume.pdf` in the project root.

## 🤖 Automatic PDF Generation

The PDF is automatically regenerated when:
1. You push changes to `index.html` on the `main` branch
2. You manually trigger the GitHub Action

The generated PDF is committed back to the repository and available at the download link above.

## 📁 Project Structure
```
personal-resume/
├── index.html              # Main resume HTML
├── Jhonny_Sanchez_Resume.pdf # Generated PDF
├── generate-pdf.js         # PDF generation script
├── package.json           # Node.js dependencies
├── .github/workflows/     # GitHub Actions
└── README.md             # This file
```

## 🎨 Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Print Optimized**: Clean PDF export with proper formatting
- **Mobile-Friendly PDF**: Direct download link for mobile users
- **Auto-Generated**: PDF updates automatically when HTML changes
- **Professional Styling**: Clean, modern design based on StandardResume

## 🚀 Deployment
This resume is deployed using GitHub Pages. Any changes to the `main` branch are automatically deployed.

## 📝 Editing
1. Edit `index.html` to update your resume content
2. Commit and push to `main` branch
3. PDF will be automatically regenerated
4. Both HTML and PDF versions will be updated live

## 🔧 Technical Details
- **PDF Generation**: Puppeteer (headless Chrome)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Styling**: Modern CSS with print media queries