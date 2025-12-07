# GitHub & Vercel Deployment Instructions

## Step 1: Create GitHub Repository
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name it: `portfolio-website`
4. Don't initialize with README
5. Click "Create repository"

## Step 2: Push to GitHub
After creating the repository, run these commands (replace YOUR_USERNAME):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

## Step 3: Connect to Vercel
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Click "Continue with GitHub"
5. Authorize Vercel (if needed)
6. Select your `portfolio-website` repository
7. Click "Import"
8. Configure:
   - Framework Preset: "Other" or "Static Site"
   - Root Directory: `.` (leave as is)
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
9. Click "Deploy"

Your site will be live at: https://your-project-name.vercel.app

## Automatic Deployments
Every time you push changes to GitHub, Vercel will automatically redeploy your site!

