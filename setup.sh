#!/bin/bash

# Siberian Struggle Website - GitHub Setup Script
# Run this with Claude Code

echo "🎮 Setting up Siberian Struggle website..."

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# Initialize git repo if not already initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📄 Adding files..."
git add .

# Initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Siberian Struggle website

- Landing page with game features
- Dev Diaries page
- Impressum (legal page)
- Social media links integrated"

echo ""
echo "✅ Local repository ready!"
echo ""
echo "📌 NEXT STEPS (manual):"
echo "1. Go to https://github.com/new"
echo "2. Create repository named: siberian-struggle"
echo "3. Make it Public"
echo "4. Do NOT add README (we already have one)"
echo "5. Create repository"
echo ""
echo "Then run these commands (replace YOUR_USERNAME):"
echo ""
echo "  git remote add origin https://github.com/YOUR_USERNAME/siberian-struggle.git"
echo "  git branch -M main"
echo "  git push -u origin main"
echo ""
echo "After push, enable GitHub Pages:"
echo "  Settings → Pages → Branch: main → Save"
echo ""
echo "🌐 Your site will be at: https://YOUR_USERNAME.github.io/siberian-struggle/"
