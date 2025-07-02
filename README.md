# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Deployment to Netlify

This project is configured for easy deployment to Netlify:

### Option 1: Connect GitHub Repository
1. Push your code to a GitHub repository
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Connect your GitHub account and select your repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Manual Deploy
1. Run `npm run build` locally
2. Go to [Netlify](https://netlify.com) and sign in
3. Drag and drop the `dist` folder to the deploy area
4. Your site will be live immediately

### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 or higher

The `netlify.toml` file is already configured with the correct settings for React Router and SPA redirects.

## Local Development

```bash
npm install
npm run dev
```