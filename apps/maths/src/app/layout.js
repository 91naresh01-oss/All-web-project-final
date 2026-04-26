import { Noto_Sans_Gujarati, Plus_Jakarta_Sans, Poppins} from 'next/font/google';
import './globals.css';
import './components.css';


const plusJakarta = Plus_Jakarta_Sans({
 subsets: ['latin'],
 weight: ['400', '600', '700', '800'],
 variable: '--font-main',
 display: 'swap',
});

const poppins = Poppins({
 subsets: ['latin'],
 weight: ['400', '600', '700'],
 variable: '--font-body',
 display: 'swap',
});

const notoSansGujarati = Noto_Sans_Gujarati({
 subsets: ['gujarati'],
 weight: ['400', '600', '700'],
 variable: '--font-gujarati',
 display: 'swap',
});

export const metadata = {
 title: 'ગણિત શીખો | Maths Learning Web App',
 description: 'ગુજરાતીમાં ગણિતની થ્યોરી અને ટેસ્ટ. સંખ્યાજ્ઞાન, બીજગણિત, ભૂમિતિ અને વધુ - સરળ ભાષામાં શીખો.',
 keywords: 'ગણિત, maths, gujarati maths, સંખ્યાજ્ઞાન, number system, maths theory, maths test',
};

export default function RootLayout({ children}) {
 return (
  <html lang="gu" className={`${plusJakarta.variable} ${poppins.variable} ${notoSansGujarati.variable}`}>
      <head>

      </head>
 <body>
  <div id="app-root" className="flex flex-col min-h-screen">
    <div className="flex-1">
      {children}
    </div>
  </div>
 </body>
 </html>
);
}
