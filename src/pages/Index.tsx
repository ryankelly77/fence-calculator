import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">React App Ready for Deployment</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Your application is configured and ready to deploy to Netlify
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <Link to="/deploy">
                  <Rocket className="w-5 h-5 mr-2" />
                  Deploy to Netlify
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open Netlify
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>✅ Ready to Deploy</CardTitle>
                <CardDescription>All configuration files are set up</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• netlify.toml configured</li>
                  <li>• SPA redirects ready</li>
                  <li>• Build settings optimized</li>
                  <li>• Dependencies resolved</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🚀 Quick Deploy</CardTitle>
                <CardDescription>Choose your deployment method</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• GitHub integration (recommended)</li>
                  <li>• Manual drag & drop</li>
                  <li>• Auto-deploy on push</li>
                  <li>• Custom domain support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <AppLayout />
        </div>
      </div>
    </AppProvider>
  );
};

export default Index;