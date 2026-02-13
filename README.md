# Portfolio Website with 3D Animated Purple Background

An enhanced version of your portfolio with stunning 3D animated background effects using Three.js!

## 🎨 New Features

### 3D Animated Background
- **Floating 3D Shapes**: Torus, octahedron, icosahedron, and torus knot geometries
- **Particle System**: 1000 floating particles creating a cosmic effect
- **Dynamic Lighting**: Purple point lights and ambient lighting
- **Smooth Animations**: All shapes rotate continuously at different speeds
- **Responsive**: Automatically adapts to screen size

### Visual Enhancements
- **Animated Gradient Overlay**: Pulsing purple gradients that shift over time
- **Glass Morphism**: Backdrop blur effects on cards and code snippet
- **Smooth Transitions**: Hover effects on all interactive elements
- **Scroll Effects**: Navbar changes on scroll with blur effect

## 🚀 How to Deploy

### Method 1: Direct Upload to GitHub
1. Go to your repository: `https://github.com/aymenbrahimdjelloul/my-website`
2. Click on `index.html` → Edit (pencil icon)
3. Replace all content with the new `index.html`
4. Commit changes
5. Do the same for `style.css`

### Method 2: Using Git
```bash
cd my-website
# Replace index.html and style.css with the new files
git add index.html style.css
git commit -m "Add 3D animated purple background"
git push origin main
```

## 🎯 Technical Details

### Technologies Used
- **Three.js** (r128): For 3D graphics and animations
- **CSS3**: Modern animations and effects
- **Vanilla JavaScript**: Smooth scroll and interactive elements

### 3D Elements
1. **Torus** (purple wireframe) - Rotating at position (-10, 5, -10)
2. **Octahedron** (solid purple) - Rotating at position (15, -5, -15)
3. **Icosahedron** (purple wireframe) - Rotating at position (-15, -10, -20)
4. **Torus Knot** (solid purple) - Rotating at position (10, 10, -25)
5. **Particle Field** (1000 particles) - Slowly rotating cloud effect

### Color Palette
- Primary Purple: `#9333ea`
- Secondary Purple: `#7c3aed`
- Accent Purple: `#a855f7`
- Light Purple: `#c084fc`
- Dark Background: `#0f0520`

## ⚡ Performance Optimizations

- Transparent materials with optimized opacity
- Efficient particle rendering
- RequestAnimationFrame for smooth 60fps animations
- Responsive canvas that adapts to window resize
- Optimized geometry complexity

## 📱 Responsive Design

The website looks great on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 768px)

## 🎨 Customization Tips

### Change 3D Shape Colors
Edit the material colors in `index.html`:
```javascript
const material1 = new THREE.MeshStandardMaterial({ 
    color: 0x9333ea, // Change this hex color
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
```

### Adjust Animation Speed
Modify rotation speeds in the `animate()` function:
```javascript
torus.rotation.x += 0.005; // Increase for faster rotation
```

### Change Particle Count
```javascript
const particlesCount = 1000; // Increase for more particles
```

### Modify Gradient Colors
Edit the `.gradient-overlay` in `style.css`:
```css
background: 
    radial-gradient(ellipse at 20% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
    /* Add or modify gradients here */
```

## 🐛 Troubleshooting

### 3D shapes not showing?
- Make sure Three.js CDN is loading properly
- Check browser console for errors
- Try clearing browser cache

### Performance issues?
- Reduce particle count
- Decrease geometry complexity
- Lower opacity values

### Website not updating?
- Wait 2-5 minutes for GitHub Pages to rebuild
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

## 📞 Support

If you need help or want to customize further, feel free to reach out!

## 📄 License

MIT License - Feel free to use and modify!

---

**Enjoy your new 3D animated portfolio! 🚀✨**
