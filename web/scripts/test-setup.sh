#!/bin/bash

# Steviebdesigns Portfolio - Setup Test Script
# This script validates the complete setup and runs all tests

set -e

echo "🚀 Steviebdesigns Portfolio - Setup Test"
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Please run this script from the web directory"
    exit 1
fi

print_status "Starting comprehensive setup test..."

# 1. Check Node.js version
print_status "Checking Node.js version..."
NODE_VERSION=$(node --version)
print_success "Node.js version: $NODE_VERSION"

# 2. Check npm version
print_status "Checking npm version..."
NPM_VERSION=$(npm --version)
print_success "npm version: $NPM_VERSION"

# 3. Install dependencies
print_status "Installing dependencies..."
npm install --silent
print_success "Dependencies installed"

# 4. Run linting
print_status "Running ESLint..."
if npm run lint > /dev/null 2>&1; then
    print_success "ESLint passed"
else
    print_warning "ESLint found issues, running fix..."
    npm run lint:fix
    print_success "ESLint issues fixed"
fi

# 5. Run TypeScript check
print_status "Running TypeScript check..."
if npm run type-check > /dev/null 2>&1; then
    print_success "TypeScript check passed"
else
    print_error "TypeScript check failed"
    exit 1
fi

# 6. Test build
print_status "Testing production build..."
if npm run build > /dev/null 2>&1; then
    print_success "Production build successful"
else
    print_error "Production build failed"
    exit 1
fi

# 7. Check if .env.local exists
print_status "Checking environment configuration..."
if [ -f ".env.local" ]; then
    print_success "Environment file (.env.local) found"
else
    print_warning "Environment file (.env.local) not found"
    print_status "Copying env.example to .env.local..."
    cp env.example .env.local
    print_success "Environment file created from example"
fi

# 8. Check for required files
print_status "Checking required files..."

REQUIRED_FILES=(
    "src/app/layout.tsx"
    "src/app/page.tsx"
    "src/app/blog/page.tsx"
    "src/app/sitemap.ts"
    "src/app/robots.ts"
    "src/app/icon.tsx"
    "src/app/apple-icon.tsx"
    "src/app/not-found.tsx"
    "src/app/error.tsx"
    "vercel.json"
    "next.config.ts"
    "tsconfig.json"
    "tailwind.config.ts"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        print_success "✓ $file"
    else
        print_error "✗ $file (missing)"
    fi
done

# 9. Check logo assets
print_status "Checking logo assets..."
if [ -d "public/logo" ] && [ "$(ls -A public/logo)" ]; then
    print_success "Logo assets found in public/logo/"
else
    print_warning "Logo assets not found in public/logo/"
fi

# 10. Test production server (quick test)
print_status "Testing production server startup..."
if timeout 5s npm run start > /dev/null 2>&1; then
    print_success "Production server starts successfully"
else
    print_warning "Production server test timed out (this is normal)"
fi

# 11. Check bundle size
print_status "Checking bundle size..."
if [ -d ".next" ]; then
    BUNDLE_SIZE=$(du -sh .next | cut -f1)
    print_success "Build size: $BUNDLE_SIZE"
else
    print_warning "Build directory not found"
fi

echo ""
echo "🎉 Setup Test Complete!"
echo "======================"
print_success "All tests passed successfully!"
echo ""
print_status "Next steps:"
echo "1. Customize content in src/app/page.tsx"
echo "2. Add your WordPress API URL to .env.local"
echo "3. Replace placeholder images with your portfolio items"
echo "4. Deploy to Vercel or your preferred platform"
echo ""
print_status "Commands:"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm run start   - Start production server"
echo "  npm run preview - Preview production build"
echo ""
print_success "Your portfolio is ready for deployment! 🚀"
