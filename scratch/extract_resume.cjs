const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const docxPath = 'd:/Durai/Personal/Inter/Durai_Pandi_Updated_ATS_Resume.docx';
const zipPath = 'd:/Durai/Personal/Inter/portfolio/scratch/temp_resume.zip';
const outDir = 'd:/Durai/Personal/Inter/portfolio/scratch/docx_extracted';

if (!fs.existsSync('d:/Durai/Personal/Inter/portfolio/scratch')) {
  fs.mkdirSync('d:/Durai/Personal/Inter/portfolio/scratch', { recursive: true });
}

fs.copyFileSync(docxPath, zipPath);

try {
  execSync(`powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${outDir}' -Force"`);
  const xmlContent = fs.readFileSync(path.join(outDir, 'word/document.xml'), 'utf8');
  const text = xmlContent.replace(/<w:p[^>]*>/g, '\n').replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  console.log("=== RESUME CONTENT START ===");
  console.log(text);
  console.log("=== RESUME CONTENT END ===");
} catch (e) {
  console.error("Error extracting docx:", e);
}
