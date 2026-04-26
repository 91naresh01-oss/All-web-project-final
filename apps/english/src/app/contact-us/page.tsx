import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, MapPin, MessageSquare, Youtube, Instagram, Send, Globe, Smartphone, ExternalLink, Lightbulb } from 'lucide-react';

export default function ContactUsPage() {
  const mapLink = "https://maps.app.goo.gl/8E9j5JSvLspXTRKk7";
  const youtubeLink = "https://www.youtube.com/@Gyanacademy_gandhinagar";
  const appLink = "https://play.google.com/store/apps/details?id=com.gyanacademy.com";
  const telegramLink = "https://t.me/gyanacademygandhinagar";
  const instagramLink = "https://instagram.com/gyanacademy_official";
  const websiteLink = "https://gyanacademys.com";

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-4 px-4 bg-slate-50/50">
      <div className="w-full max-w-5xl space-y-4">

        {/* Compact Header Section */}
        <div className="flex items-center justify-between w-full">
          <Button variant="ghost" size="icon" className="h-9 w-9 bg-white shadow-sm border hover:bg-slate-100 rounded-full relative z-10" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 text-slate-700" />
            </Link>
          </Button>
          <div className="text-center flex-1 -ml-9 flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Image src="/app-logo.png" alt="Gyan Academy" width={96} height={96} className="h-24 w-24 object-contain" />
              <h1 className="text-xl md:text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 inline-block">
                અમારો સંપર્ક કરો
              </h1>
            </div>
            <p className="text-xs md:text-sm text-slate-500 font-medium mt-1 max-w-md mx-auto hidden md:block">
              અમને તમારી મદદ કરવામાં આનંદ થશે.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left: Contact Information Card */}
          <Card className="shadow-sm hover:shadow-md transition-all border-t-4 border-t-red-500 overflow-hidden">
            <CardHeader className="pb-2 pt-4 px-5">
              <CardTitle className="flex items-center gap-2 text-lg font-bold">
                <div className="bg-red-50 p-1.5 rounded-lg">
                  <MapPin className="h-4 w-4 text-red-600" />
                </div>
                ઓફિસનું સરનામું
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-5 pb-5">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <h3 className="font-bold text-base text-slate-800 mb-1">Gyan Academy</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Navkar Plaza, near Apna Bazar,<br />
                  Sector 6, ગાંધીનગર - 382006,<br />
                  ગુજરાત.
                </p>
                <div className="mt-2">
                  <Button variant="outline" size="sm" className="h-8 text-xs hover:bg-red-50 hover:text-red-600 border-slate-200" asChild>
                    <a href={mapLink} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5" /> Google Map પર જુઓ
                    </a>
                  </Button>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-semibold flex items-center gap-2 text-sm text-slate-800 mb-2">
                  <Mail className="h-4 w-4 text-blue-600" /> ઈમેલ સપોર્ટ
                </h3>
                <a href="mailto:englishwordslearn146@gmail.com" className="block font-medium text-blue-600 hover:underline text-sm truncate transition-colors bg-blue-50/50 p-2 rounded border border-blue-100/50">
                  englishwordslearn146@gmail.com
                </a>
                <p className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-1">
                  🕒 24-48 કલાકમાં જવાબ મળશે.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right: Social & Feedback Card */}
          <Card className="flex flex-col shadow-sm hover:shadow-md transition-all border-t-4 border-t-green-500 overflow-hidden">
            <CardHeader className="pb-2 pt-4 px-5">
              <CardTitle className="flex items-center gap-2 text-lg font-bold">
                <div className="bg-green-50 p-1.5 rounded-lg">
                  <MessageSquare className="h-4 w-4 text-green-600" />
                </div>
                સોશિયલ મીડિયા
              </CardTitle>
              <CardDescription className="text-xs">અમારી સાથે જોડાયેલા રહો</CardDescription>
            </CardHeader>
            <CardContent className="px-5 pb-5 flex-1 flex flex-col justify-between">

              {/* Compact Grid for Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                <Button variant="outline" size="sm" className="h-9 justify-start gap-2 hover:bg-red-50 hover:text-red-700 hover:border-red-200" asChild>
                  <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-4 w-4 text-red-600" />
                    <span className="text-xs font-semibold">YouTube</span>
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="h-9 justify-start gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" asChild>
                  <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                    <Send className="h-3.5 w-3.5 text-blue-500" />
                    <span className="text-xs font-semibold">Telegram</span>
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="h-9 justify-start gap-2 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200" asChild>
                  <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4 text-pink-600" />
                    <span className="text-xs font-semibold">Instagram</span>
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="h-9 justify-start gap-2 hover:bg-gray-50 hover:text-gray-900" asChild>
                  <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 text-gray-700" />
                    <span className="text-xs font-semibold">Website</span>
                  </a>
                </Button>
                <div className="sm:col-span-2">
                  <Button variant="default" size="sm" className="w-full h-9 bg-green-600 hover:bg-green-700 text-white gap-2 shadow-sm" asChild>
                    <a href={appLink} target="_blank" rel="noopener noreferrer">
                      <Smartphone className="h-4 w-4" />
                      <span className="text-xs font-bold">Gyan Academy App ડાઉનલોડ કરો</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Ultra Compact Feedback Section */}
              <div className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-100 flex items-start gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-amber-800 mb-0.5">અભિપ્રાય આપો</h4>
                  <p className="text-[10px] text-amber-700/80 leading-tight">
                    એપ્લિકેશન સુધારવા માટે કોઈ વિચાર છે? અમને ઈમેલ કરો.
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
