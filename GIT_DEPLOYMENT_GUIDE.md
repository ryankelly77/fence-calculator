# Git Deployment Guide

## Push Files to GitHub Repository

To push these files to https://github.com/ryankelly77/fence-calculator.git:

### Step 1: Initialize Git (if not already done)
```bash
git init
```

### Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/ryankelly77/fence-calculator.git
```

### Step 3: Add All Files
```bash
git add .
```

### Step 4: Commit Files
```bash
git commit -m "Initial commit: Fence calculator React app"
```

### Step 5: Push to GitHub
```bash
git push -u origin main
```

### Alternative: If repository already exists
If the repository already has content:
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

### Prerequisites
- Git installed on your system
- GitHub account access
- Repository permissions for https://github.com/ryankelly77/fence-calculator.git

### After Pushing to GitHub
1. Your code will be available at the GitHub repository
2. You can then connect it to Netlify for automatic deployments
3. Follow the DEPLOY_TO_NETLIFY.md guide for Netlify setup

### Troubleshooting
- If you get permission errors, ensure you're authenticated with GitHub
- Use `git status` to check current repository state
- Use `git remote -v` to verify remote repository URL