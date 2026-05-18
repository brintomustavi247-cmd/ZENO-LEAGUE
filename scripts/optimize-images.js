// scripts/optimize-images.js - Windows compatible
// Converts PNG icons to WebP for better compression
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToConvert = [
  { 
    src: path.join(__dirname, '..', 'public', 'logo.png'), 
    dest: path.join(__dirname, '..', 'public', 'logo.webp'),
    label: 'Logo'
  },
  { 
    src: path.join(__dirname, '..', 'public', 'icons', 'icon-192.png'), 
    dest: path.join(__dirname, '..', 'public', 'icons', 'icon-192.webp'),
    label: 'Icon 192x192'
  },
  { 
    src: path.join(__dirname, '..', 'public', 'icons', 'icon-512.png'), 
    dest: path.join(__dirname, '..', 'public', 'icons', 'icon-512.webp'),
    label: 'Icon 512x512'
  },
  { 
    src: path.join(__dirname, '..', 'public', 'icons', 'icon-maskable-512.png'), 
    dest: path.join(__dirname, '..', 'public', 'icons', 'icon-maskable-512.webp'),
    label: 'Icon Maskable 512x512'
  }
];

async function optimizeImages() {
  console.log('\n🎨 ZENO LEAGUE Image Optimization\n');
  console.log('Converting PNG images to WebP format...\n');
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  const results = [];
  
  for (const img of imagesToConvert) {
    if (!fs.existsSync(img.src)) {
      console.log(`⚠️  Skipping ${img.label} (${img.src} not found)`);
      continue;
    }
    
    try {
      // Convert to WebP with quality 80 and effort 6 (good balance)
      await sharp(img.src)
        .webp({ quality: 80, effort: 6 })
        .toFile(img.dest);
      
      const originalSize = fs.statSync(img.src).size;
      const newSize = fs.statSync(img.dest).size;
      const savings = originalSize - newSize;
      const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
      
      totalOriginal += originalSize;
      totalOptimized += newSize;
      
      results.push({
        name: img.label,
        before: (originalSize / 1024).toFixed(1),
        after: (newSize / 1024).toFixed(1),
        saved: savingsPercent
      });
      
      console.log(`✅ ${img.label}`);
      console.log(`   📦 Before: ${(originalSize / 1024).toFixed(1)} KB`);
      console.log(`   📦 After:  ${(newSize / 1024).toFixed(1)} KB`);
      console.log(`   💾 Saved:  ${savingsPercent}%\n`);
      
    } catch (err) {
      console.error(`❌ Error converting ${img.label}:`, err.message);
    }
  }
  
  if (results.length > 0) {
    console.log('═══════════════════════════════════════════');
    console.log('📊 Summary:');
    console.log(`   Total original: ${(totalOriginal / 1024).toFixed(1)} KB`);
    console.log(`   Total optimized: ${(totalOptimized / 1024).toFixed(1)} KB`);
    console.log(`   Total saved: ${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%`);
    console.log(`   Space saved: ${((totalOriginal - totalOptimized) / 1024).toFixed(1)} KB`);
    console.log('═══════════════════════════════════════════\n');
  }
  
  console.log('✨ Optimization complete!');
  console.log('💡 Next: Update manifest.json and index.html to use .webp files\n');
}

optimizeImages().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
