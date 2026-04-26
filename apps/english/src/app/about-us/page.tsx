'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Target, BrainCircuit, Sparkles, Languages, Trophy, Mail, MapPin, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


export default function AboutUsPage() {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  const email = 'englishwordslearn146@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      toast({
        title: 'Email Copied!',
        description: `${email} has been copied to your clipboard.`,
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Failed to Copy',
        description: 'Could not copy email to clipboard.',
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-4 md:p-8">
      {/* Header Section with Back Button and Title */}
      <div className="flex items-center justify-between w-full mb-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm shadow-sm rounded-lg h-10 w-10 border hover:bg-accent">
            <ArrowLeft className="h-5 w-5 text-primary" />
          </Button>
        </Link>
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Image src="/app-logo.png" alt="Gyan Academy" width={96} height={96} className="h-24 w-24 object-contain" />
            <h1 className="text-xl font-bold bg-red-500 text-white py-2 px-6 rounded-tl-2xl rounded-br-2xl shadow-lg inline-block">Gyan Academy</h1>
          </div>
          <p className="text-xs text-muted-foreground mt-1 font-semibold tracking-wide">Gandhinagar, Gujarat</p>
        </div>
        <div className="w-10"></div> {/* Spacer to balance the back button */}
      </div>

      {/* Hero Text */}
      <div className="text-center space-y-4 -mt-4">
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
          જ્ઞાનના પાયાને મજબૂત બનાવતું અને સફળતાના શિખરે પહોંચાડતું એક વિશ્વસનીય માધ્યમ.
        </p>
      </div>

      {/* Mission Section */}
      <Card className="border-l-4 border-l-primary shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Target className="h-5 w-5 text-primary" />
            </div>
            અમારો ઉદ્દેશ્ય
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed text-sm">
            <b>Gyan Academy</b> માં અમારો મુખ્ય ઉદ્દેશ્ય દરેક વિદ્યાર્થી માટે શિક્ષણને <span className="text-foreground font-medium">સુલભ, રસપ્રદ અને અસરકારક</span> બનાવવાનો છે. અમે માનીએ છીએ કે મજબૂત પાયો અને સ્પષ્ટ સમજ એ જ્ઞાન પ્રાપ્તિના મુખ્ય આધારસ્તંભ છે. અમે વિદ્યાર્થીઓને સ્પર્ધાત્મક પરીક્ષાઓ અને શૈક્ષણિક અભ્યાસક્રમ માટે શ્રેષ્ઠ ગુણવત્તાવાળા સાધનો અને માર્ગદર્શન પૂરું પાડવા માટે સમર્પિત છીએ.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold flex items-center gap-2 px-2">
          <Sparkles className="h-5 w-5 text-yellow-500" />
          અમે શું પ્રદાન કરીએ છીએ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Feature 1 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                વિષય નિપુણતા
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              અંગ્રેજી વ્યાકરણ અને અન્ય જટિલ વિષયોના નિયમો ખૂબ જ સરળ અને સ્પષ્ટ ગુજરાતી ભાષામાં સમજાવવામાં આવે છે.
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Trophy className="h-5 w-5 text-orange-500" />
                પ્રેક્ટિસ ટેસ્ટ
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              તમારા જ્ઞાનને ચકાસવા અને આત્મવિશ્વાસ વધારવા માટે વિષય મુજબ વિવિધ સ્તરના પ્રેક્ટિસ ટેસ્ટ ઉપલબ્ધ છે.
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-purple-500" />
                સ્પેલિંગ જર્ની
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              2250+ થી વધુ અંગ્રેજી શબ્દોને રમતા-રમતા શીખવા માટે એક અનોખો અને ઇન્ટરેક્ટિવ ડિજિટલ પ્રવાસ.
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Languages className="h-5 w-5 text-green-500" />
                ઓનલાઈન ટ્રાન્સલેટર
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              અંગ્રેજી શબ્દો અને વાક્યોને તમારી પોતાની ભાષામાં ત્વરિત સમજવા માટેનું એક સરળ અને ઉપયોગી સાધન.
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Philosophy Section */}
      <Card className="bg-primary/5 border-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <BrainCircuit className="h-6 w-6 text-primary" />
            અમારી શિક્ષણ ફિલસૂફી
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground italic text-sm">
            "અમે માનીએ છીએ કે શીખવું એ બોજ નહીં, પણ આનંદ હોવો જોઈએ. એટલા માટે અમે અમારા લર્નિંગ મોડ્યુલ્સને ઇન્ટરેક્ટિવ અને ગેમ-આધારિત બનાવ્યા છે. અમારો હેતુ દરેક વિદ્યાર્થીને તેમના લક્ષ્યો સુધી પહોંચવા માટે પ્રોત્સાહિત કરવાનો છે."
          </p>
        </CardContent>
      </Card>

      {/* Footer / Contact Snippet */}
      <div className="flex flex-col items-center justify-center space-y-4 pt-8 border-t">
        <p className="text-sm text-muted-foreground font-medium">વધુ માહિતી માટે સંપર્ક કરો</p>
        <div className="flex items-center gap-2 p-2 rounded-lg border bg-secondary/50">
          <Mail className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">{email}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
            {isCopied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground pt-4">© {new Date().getFullYear()} Gyan Academy. All rights reserved.</p>
      </div>
    </div>
  );
}
