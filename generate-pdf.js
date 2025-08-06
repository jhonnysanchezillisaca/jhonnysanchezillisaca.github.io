const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  console.log('🚀 Starting PDF generation...');
  
  let browser;
  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2
    });

    // Load the HTML file
    const htmlPath = path.resolve(__dirname, 'index.html');
    const fileUrl = `file://${htmlPath}`;
    
    console.log('📄 Loading HTML file...');
    await page.goto(fileUrl, { 
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Hide the export options for PDF generation
    await page.addStyleTag({
      content: `
        .export-options { display: none !important; }
      `
    });

    // Wait a bit for fonts to load
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('🎨 Generating PDF...');
    
    // Generate PDF with optimized settings
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1cm',
        left: '1cm'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    });

    // Save PDF
    const outputPath = path.resolve(__dirname, 'Jhonny_Sanchez_Resume.pdf');
    fs.writeFileSync(outputPath, pdfBuffer);
    
    console.log('✅ PDF generated successfully!');
    console.log(`📁 Saved to: ${outputPath}`);
    
    // Get file size for info
    const stats = fs.statSync(outputPath);
    const fileSizeInKB = Math.round(stats.size / 1024);
    console.log(`📊 File size: ${fileSizeInKB} KB`);

  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the function
if (require.main === module) {
  generatePDF();
}

module.exports = generatePDF;