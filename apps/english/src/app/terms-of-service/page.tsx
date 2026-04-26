import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Gavel, Shield } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="w-full max-w-2xl space-y-4">
      <Link href="/" passHref>
        <Button variant="ghost" size="icon" className="bg-white shadow-md rounded-lg h-8 w-8">
          <ArrowLeft className="h-4 w-4 text-destructive" />
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>📜 Terms of Service</CardTitle>
          <CardDescription>Last Updated: October 26, 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /> 1. Acceptance of Terms</h3>
            <p>
              By accessing and using <b>English Words Learn</b> ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2"><Gavel className="h-5 w-5 text-primary" /> 2. Use of the Service</h3>
            <p>
              This service is provided for educational purposes. You agree not to use the service for any illegal or unauthorized purpose. You are responsible for all your activity in connection with the service.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> 3. Disclaimer of Warranties</h3>
            <p>
              The service is provided on an "as is" and "as available" basis. English Words Learn makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
