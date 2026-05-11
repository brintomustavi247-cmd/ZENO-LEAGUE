# ============================================
# GENERATE MASKABLE ICON FOR ANDROID PWA
# Run: python generate-maskable-icon.py
# ============================================

from PIL import Image

def create_maskable_icon():
    # Load your existing logo
    src = Image.open('public/logo.png').convert('RGBA')
    
    # Create 512x512 canvas with SAFE ZONE (padding)
    size = 512
    padding = int(size * 0.15)  # 15% safe zone (Android requirement)
    
    # Create transparent canvas
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    
    # Calculate inner area (safe zone)
    inner_size = size - (padding * 2)
    
    # Resize logo to fit safe zone (maintain aspect ratio)
    logo_resized = src.resize((inner_size, inner_size), Image.LANCZOS)
    
    # Paste centered onto canvas
    offset = ((size - inner_size) // 2, (size - inner_size) // 2)
    canvas.paste(logo_resized, offset, logo_resized if logo_resized.mode == 'RGBA' else None)
    
    # Save as maskable icon
    output_path = 'public/icons/icon-maskable-512.png'
    canvas.save(output_path, 'PNG')
    print(f'✅ Created: {output_path}')
    print(f'   Size: {size}x{size} with {padding}px safe zone padding')

if __name__ == '__main__':
    create_maskable_icon()
    