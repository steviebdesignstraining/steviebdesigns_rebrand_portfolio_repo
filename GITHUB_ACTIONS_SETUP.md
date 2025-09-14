# GitHub Actions & GA4 Setup Guide

This document contains all the required secrets and configuration for the GitHub Actions workflows.

## Required GitHub Repository Secrets

Navigate to your repository → Settings → Secrets and variables → Actions → New repository secret

### Vercel Deployment
- `VERCEL_TOKEN`: Your Vercel authentication token
- `VERCEL_ORG_ID`: Your Vercel organization ID  
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### WordPress Deployment (Optional)
- `SSH_PRIVATE_KEY`: SSH private key for server access
- `WP_HOST`: WordPress server hostname or IP
- `WP_USER`: SSH username
- `WP_TARGET_DIR`: Target directory path on server

### Google Analytics 4 (GA4)
- `GA4_MEASUREMENT_ID`: `G-LZRX2QNB5E`
- `GA4_API_SECRET`: `nnMI7rnzTK28fU5_AO7nag`

### Website Monitoring
- `SITE_URL`: `https://steviebdesigns.co.uk`

### Contact Form Email (Vercel Environment Variables)
These should be set in Vercel dashboard, not GitHub secrets:
- `GMAIL_USER`: `steviebdesigns1@gmail.com`
- `GMAIL_APP_PASSWORD`: Your Gmail app-specific password

## Workflow Overview

### 1. Vercel Deployment (`vercel-deploy.yml`)
- **Trigger**: Push to main branch, Pull requests
- **Purpose**: Deploy Next.js app to Vercel
- **Status**: ✅ Configured (requires Vercel project Root Directory = `web`)

### 2. WordPress Deployment (`wordpress-deploy.yml`) 
- **Trigger**: Push to main branch, Manual dispatch
- **Purpose**: Deploy files to WordPress server via SSH
- **Status**: ⚠️ Optional (requires SSH secrets)

### 3. GA4 Deployment Events (`ga4-deployment-event.yml`)
- **Trigger**: Push to main branch  
- **Purpose**: Send deployment events to Google Analytics
- **Status**: ✅ Configured

### 4. Website Health Check (`health-check.yml`)
- **Trigger**: Every 6 hours, Manual dispatch
- **Purpose**: Monitor site availability, report failures to GA4
- **Status**: ✅ Configured

### 5. Lighthouse Performance Audit (`lighthouse-audit.yml`)
- **Trigger**: Daily at 03:30 UTC, Manual dispatch
- **Purpose**: Performance monitoring and reports
- **Status**: ✅ Configured

## Manual Workflow Triggers

You can manually trigger these workflows from the GitHub Actions tab:
- Website Health Check
- WordPress Deployment  
- Lighthouse Performance Audit

## GA4 Integration Details

### Website Analytics
- **Implementation**: `src/components/Analytics.tsx`
- **Environment Variable**: `NEXT_PUBLIC_GA_ID=G-LZRX2QNB5E`
- **Loads**: Only in production environment

### Workflow Events
- **Deployment Events**: Sent on successful deployments
- **Health Check Failures**: Sent when site is down
- **Measurement Protocol**: Uses API secret for server-side events

## Troubleshooting

### Vercel Deployment Issues
1. Ensure Root Directory is set to `web` in Vercel project settings
2. Verify all Vercel secrets are correctly set
3. Check that `web/vercel.json` configuration is correct

### GA4 Events Not Appearing
1. Verify `GA4_MEASUREMENT_ID` and `GA4_API_SECRET` are correct
2. Check that events are being sent (view workflow logs)
3. GA4 events may take 24-48 hours to appear in reports

### Health Check Failures
1. Ensure `SITE_URL` secret is set correctly
2. Check that the website is actually accessible
3. Review curl output in workflow logs

### Contact Form 500 Errors
1. Set `GMAIL_USER` and `GMAIL_APP_PASSWORD` in Vercel environment variables
2. Generate Gmail app-specific password at: https://myaccount.google.com/apppasswords
3. Check Vercel function logs for specific error details
4. Verify Gmail SMTP settings and authentication

## Next Steps

1. ✅ Set all required secrets in GitHub repository
2. ⚠️ Update Vercel project Root Directory to `web`
3. ✅ Test manual workflow triggers
4. ✅ Monitor GA4 for incoming events
5. ⚠️ Configure WordPress SSH deployment (if needed)
