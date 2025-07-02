# Step-by-Step Netlify Deployment Guide

## Prerequisites
- A Netlify account (free at netlify.com)
- Your React app code
- Git/GitHub account (recommended)

## Method 1: GitHub Integration (Recommended)

### Step 1: Prepare Your Code
1. Ensure your code is in a GitHub repository
2. Verify `netlify.toml` exists in your root directory
3. Check that `_redirects` file exists in your public folder

### Step 2: Connect to Netlify
1. Go to https://netlify.com
2. Click "Sign up" or "Log in"
3. Once logged in, click "Add new site"
4. Select "Import an existing project"

### Step 3: Connect GitHub
1. Click "Deploy with GitHub"
2. Authorize Netlify to access your GitHub account
3. Select your repository from the list
4. Click on your repository name

### Step 4: Configure Build Settings
1. **Branch to deploy**: main (or master)
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`
4. Click "Deploy site"

### Step 5: Wait for Build
1. Netlify will automatically start building
2. Watch the deploy log for any errors
3. Build typically takes 1-3 minutes

### Step 6: Access Your Site
1. Once deployed, you'll get a random URL like `https://amazing-name-123456.netlify.app`
2. Click the URL to view your live site
3. You can customize the site name in Site settings

## Method 2: Manual Drag & Drop

### Step 1: Build Locally
1. Open terminal in your project folder
2. Run `npm install` (if not done already)
3. Run `npm run build`
4. This creates a `dist` folder

### Step 2: Deploy to Netlify
1. Go to https://netlify.com and log in
2. Look for the drag & drop area on your dashboard
3. Drag your entire `dist` folder to this area
4. Drop it and wait for upload

### Step 3: Site is Live
1. Your site will be live immediately
2. You'll get a random URL
3. Site can be updated by dragging new `dist` folders

## Troubleshooting

### Build Fails
- Check Node.js version (use 18+)
- Ensure all dependencies are in package.json
- Check build logs for specific errors

### 404 Errors on Refresh
- Verify `_redirects` file exists in public folder
- Check `netlify.toml` has correct redirect rules

### Site Not Updating
- Clear browser cache
- Check if new deploy was triggered
- Verify build completed successfully

## Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions

## Environment Variables (If Needed)
1. Go to Site settings > Environment variables
2. Click "Add variable"
3. Add your key-value pairs
4. Redeploy your site

Your React app should now be live on Netlify!