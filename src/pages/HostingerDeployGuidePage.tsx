import React, { useState } from 'react';
import { 
  Github, 
  Server, 
  Globe, 
  Terminal, 
  FolderTree, 
  CheckCircle2, 
  Copy, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  Code,
  Layers,
  Cpu
} from 'lucide-react';

export const HostingerDeployGuidePage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const gitSnippet = `# 1. Initialize local git repository
git init
git add .
git commit -m "feat: complete Nspyr Technical Services LLC web portal"

# 2. Add your GitHub remote repository
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/nspyr-technical-services.git

# 3. Push to GitHub
git push -u origin main`;

  const hostingerVpsSnippet = `# SSH into your Hostinger Ubuntu VPS
ssh root@YOUR_HOSTINGER_VPS_IP

# Install Node.js 20 LTS & PM2
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2

# Clone your Nspyr Tech repository
git clone https://github.com/YOUR_GITHUB_USERNAME/nspyr-technical-services.git
cd nspyr-technical-services

# Install dependencies and build project
npm install
npm run build

# Start production server with PM2 Process Manager
pm2 start npm --name "nspyr-portal" -- start
pm2 startup
pm2 save

# Setup Nginx Reverse Proxy to Port 3000
sudo nano /etc/nginx/sites-available/nspyrtech.com`;

  const nginxSnippet = `server {
    listen 80;
    server_name nspyrtech.com www.nspyrtech.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`;

  return (
    <div id="hostinger-deploy-guide-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-10 border border-slate-800 shadow-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
              <Server className="w-4 h-4 text-teal-300" />
              <span>Production Deployment Manual</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              GitHub &amp; Hostinger Deployment Guide
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Step-by-step instructions to commit this complete Nspyr Technical Services L.L.C portal to your private/public GitHub repository and deploy on Hostinger VPS or Cloud Hosting.
            </p>
          </div>
        </div>

        {/* 4 Execution Steps */}
        <div className="space-y-8">
          
          {/* Step 1: Git & GitHub */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Github className="w-5 h-5 text-slate-900" />
                    <span>Push to GitHub Repository</span>
                  </h3>
                  <p className="text-xs text-slate-500">Create a repo on github.com and push the codebase.</p>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(gitSnippet, 'git')}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedId === 'git' ? 'Copied!' : 'Copy Commands'}</span>
              </button>
            </div>

            <pre className="bg-slate-950 text-teal-300 p-4 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">
              {gitSnippet}
            </pre>
          </div>

          {/* Step 2: Architecture & Next.js / React Layout Mapping */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FolderTree className="w-5 h-5 text-teal-600" />
                  <span>Folder Structure &amp; Page Mapping</span>
                </h3>
                <p className="text-xs text-slate-500">Structure overview for both Next.js App Router and Vite Single Page architecture.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-900 text-slate-300 border border-slate-800">
                <span className="text-teal-400 font-bold block mb-2 font-sans text-xs">Current Vite / React Architecture:</span>
                <p className="leading-relaxed">
                  ├── src/<br/>
                  │   ├── context/AppContext.tsx (Routing + State)<br/>
                  │   ├── data/servicesData.ts (10 Services)<br/>
                  │   ├── data/industriesData.ts (6 UAE Sectors)<br/>
                  │   ├── components/<br/>
                  │   │   ├── Navbar.tsx<br/>
                  │   │   ├── Hero.tsx<br/>
                  │   │   ├── ServicesGrid.tsx<br/>
                  │   │   ├── DirectoryPreview.tsx<br/>
                  │   │   ├── TrustCompliance.tsx<br/>
                  │   │   └── Footer.tsx<br/>
                  │   ├── pages/<br/>
                  │   │   ├── HomePage.tsx<br/>
                  │   │   ├── ServicesPage.tsx<br/>
                  │   │   ├── StaffDirectoryPage.tsx<br/>
                  │   │   ├── StaffRegistrationPage.tsx<br/>
                  │   │   ├── ClientBookingPage.tsx<br/>
                  │   │   └── AdminDashboardPage.tsx<br/>
                  └── index.html
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 text-slate-300 border border-slate-800">
                <span className="text-sky-400 font-bold block mb-2 font-sans text-xs">Next.js App Router Direct Mapping:</span>
                <p className="leading-relaxed">
                  ├── app/<br/>
                  │   ├── page.tsx (Home / Landing)<br/>
                  │   ├── services/page.tsx<br/>
                  │   ├── staff/page.tsx (Directory)<br/>
                  │   ├── staff/[id]/page.tsx (Profile)<br/>
                  │   ├── register/staff/page.tsx (Form)<br/>
                  │   ├── book/page.tsx (Work Order)<br/>
                  │   ├── admin/page.tsx (Dashboard)<br/>
                  │   └── layout.tsx (Navbar + Footer)<br/>
                  ├── components/ (Reused identically)<br/>
                  └── public/ (Brand Assets)
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Hostinger VPS / Cloud Node.js Server Deployment */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Server className="w-5 h-5 text-indigo-600" />
                    <span>Hostinger VPS / Node.js Deployment</span>
                  </h3>
                  <p className="text-xs text-slate-500">Run production build with PM2 background daemon on Hostinger KVM VPS.</p>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(hostingerVpsSnippet, 'vps')}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedId === 'vps' ? 'Copied!' : 'Copy Script'}</span>
              </button>
            </div>

            <pre className="bg-slate-950 text-teal-300 p-4 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">
              {hostingerVpsSnippet}
            </pre>
          </div>

          {/* Step 4: Hostinger Domain & SSL for nspyrtech.com */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-emerald-600" />
                  <span>Domain DNS &amp; Free Let's Encrypt SSL</span>
                </h3>
                <p className="text-xs text-slate-500">Connect <code className="font-bold text-slate-900">nspyrtech.com</code> and enable automatic HTTPS.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 block">Hostinger DNS Records:</span>
                <p className="text-slate-600">In your Hostinger hPanel &gt; DNS Zone:</p>
                <div className="font-mono bg-white p-2.5 rounded border border-slate-200 space-y-1">
                  <div>Type: <strong>A</strong> | Name: <strong>@</strong> | Points to: <strong>YOUR_VPS_IP</strong></div>
                  <div>Type: <strong>CNAME</strong> | Name: <strong>www</strong> | Points to: <strong>@</strong></div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 block">Certbot SSL Command:</span>
                <p className="text-slate-600">Run on your Hostinger VPS terminal for instant SSL:</p>
                <div className="font-mono bg-white p-2.5 rounded border border-slate-200">
                  <code>sudo certbot --nginx -d nspyrtech.com -d www.nspyrtech.com</code>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
