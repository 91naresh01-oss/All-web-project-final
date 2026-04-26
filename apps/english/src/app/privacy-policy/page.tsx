import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Shield, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-2xl space-y-4">
      <Link href="/" passHref>
        <Button variant="ghost" size="icon" className="bg-white shadow-md rounded-lg h-8 w-8">
          <ArrowLeft className="h-4 w-4 text-destructive" />
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>🔒 Privacy Policy</CardTitle>
          <CardDescription>Last Updated: October 26, 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /> Introduction</h3>
            <p>
              Welcome to <b>English Words Learn</b>. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> Advertising and Data</h3>
            <p>
              To keep our services free, we use third-party advertising, including Google AdSense. These third-party vendors may use cookies to serve ads based on a user's prior visits to our website or other websites.
            </p>
            <p>
              Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ads Settings</a>.
            </p>
             <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. All user data, such as completed levels and dictionary words, is stored locally on your device or within your personal Firebase account if you log in.
             </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2"><Mail className="h-5 w-5 text-primary" /> Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <b><a href="mailto:englishwordslearn146@gmail.com" className="text-primary hover:underline">englishwordslearn146@gmail.com</a></b>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
