# Project Development Guide

## 1. Development Commands

### Core Scripts
- `npm run dev`: Start the development server
- `npm run build`: Create a production build
- `npm run start`: Run the production build
- `npm run lint`: Run ESLint for code quality checks

### Netlify-Specific Development
- `netlify dev`: Run the development server with full Netlify platform features
- `netlify link`: Connect local repository to deployed Netlify site

## 2. Project Architecture

### Core Technologies
- **Framework**: Next.js 16 (App Router)
- **UI Styling**: Tailwind CSS
- **Runtime**: React 19
- **Deployment**: Netlify Platform

### Directory Structure
- `/app`: Next.js App Router pages and route handlers
  - Includes specialized routes like:
    - `/blobs`: Blob storage demonstrations
    - `/classics`: Classic content pages
    - `/edge`: Edge function demonstrations
    - `/quotes`: Random quote generation
- `/components`: Reusable React components
- `/data`: Static data files
- `/netlify`: Netlify-specific configurations
- `/styles`: Global styling

## 3. Key Technologies

### Frontend
- React 19
- Next.js 16 App Router
- Tailwind CSS for styling
- Markdown rendering with `markdown-to-jsx`

### Backend & Infrastructure
- Netlify Edge Functions
- Netlify Blob Storage
- Route Handlers
- Image CDN

### Developer Tools
- ESLint for code quality
- PostCSS for CSS processing

## 4. Configuration Files

### `next.config.js`
- Configures:
  - React Compiler
  - Page redirects
  - URL rewrites

### `package.json`
- Defines project scripts
- Lists dependencies and devDependencies
- Specifies project metadata

### `postcss.config.js`
- Configures PostCSS plugins
- Integrates Tailwind CSS processing

## 5. Development Workflow

1. Install dependencies: `npm install`
2. Install Netlify CLI: `npm install netlify-cli@latest -g`
3. Link to Netlify site: `netlify link`
4. Start development: `netlify dev`

## 6. Deployment

- Automatic deployment through Netlify
- One-click deploy from GitHub repository
- Supports preview deployments

## 7. Notable Features

- Serverless Edge Functions
- Blob Storage Demonstrations
- Dynamic Route Handling
- Image CDN Integration
- Markdown Content Rendering

## 8. Best Practices

- Use App Router for page/route management
- Leverage Netlify primitives
- Follow React 19 and Next.js 16 best practices
- Utilize Tailwind for responsive design
