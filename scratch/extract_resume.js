const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

// Use tar or powershell Expand-Archive
const docxPath = 'd:/Durai/Personal/Inter/Durai_Pandi_Updated_ATS_Resume.docx';
const outDir = 'd:/Durai/Personal/Inter/portfolio/scratch/docx_extracted';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

try {
  execSync(`powershell -Command "Expand-Archive -Path '${docxPath}' -DestinationPath '${outDir}' -Force"`);
  const xmlContent = fs.readFileSync(path.join(outDir, 'word/document.xml'), 'utf8');
  // Simple regex to pull text inside <w:t> tags
  const matches = xmlContent.match(/<w:t[^>]*>(.*?)<\/w:t>/g) || [];
  const text = matches.map(m => m.replace(/<[^>]+>/g, '')).join(' ');
  console.log("=== RESUME CONTENT START ===");
  console.log(text);
  console.log("=== RESUME CONTENT END ===");
} catch (e) {
  console.error("Error extracting docx:", e);
}
