import Header from './components/header';
import MainSection from './components/MainSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import DeliverablesSection from './components/DeliverablesSection';
import SellingInfo from './components/SellingInfo';
import ImageCarousel from './components/ImageCarousel';
import Guarantee from './components/Guarantee';
import Questions from './components/Questions';
import FinalCTA from './components/FinalCTA';
import Footer from './components/footer';
import Script from 'next/script';
import Image from 'next/image';
import Elipse from '@/images/Ellipse bg.svg';

export default function Home() {
  return (
    <div className="relative flex flex-col overflow-hidden">  

      {/* Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2106196856417598');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Facebook Pixel noscript alternative */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=2106196856417598&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* UTMify Script */}
      <Script
        id="utmify-script"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        strategy="afterInteractive"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
      />

      {/* Microsoft Clarity */}
      <Script
        id="ms-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qzo3zol10m");
          `,
        }}
      />
      
      <div>
        <Image 
        src={Elipse} 
        alt="Elipse Background" 
        className="absolute top-[-2%] left-[-10%] w-[700px] h-[700px] opacity-[0.07] blur-[64px] drop-shadow-[0_0_50px_rgba(52,199,89,0.2)]" loading="lazy"
      />
      <Image 
        src={Elipse} 
        alt="Elipse Background" 
        className="absolute bottom-[-15%] left-[10%] w-[700px] h-[700px] opacity-[0.07] blur-[64px] drop-shadow-[0_0_50px_rgba(52,199,89,0.2)]" loading="lazy"
      />
      <Image 
        src={Elipse} 
        alt="Elipse Background" 
        className="absolute top-[-20%] right-[90%] w-[700px] h-[700px] opacity-[0.07] blur-[64px] drop-shadow-[0_0_50px_rgba(52,199,89,0.2)]" loading="lazy"
      />
      <Image 
        src={Elipse} 
        alt="Elipse Background" 
        className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] opacity-[0.07] blur-[64px] drop-shadow-[0_0_50px_rgba(52,199,89,0.2)]" loading="lazy"
      />
      <Image 
        src={Elipse} 
        alt="Elipse Background" 
        className="absolute bottom-[12%] left-[-20%] w-[700px] h-[700px] opacity-[0.07] blur-[64px] drop-shadow-[0_0_50px_rgba(52,199,89,0.2)]" loading="lazy"
      />
      <Image 
        src={Elipse} 
        alt="Elipse Background" 
        className="absolute top-[5%] left-[95%] w-[700px] h-[700px] opacity-[0.07] blur-[64px] drop-shadow-[0_0_50px_rgba(52,199,89,0.2)]" loading="lazy"
      />
      <Image 
        src={Elipse} 
        alt="Elipse Background" width={120}
        className="absolute top-[58%] right-[5%] w-[700px] h-[700px] opacity-[0.07] blur-[64px] drop-shadow-[0_0_50px_rgba(52,199,89,0.2)] z-0" loading="lazy"
      />
      <Image 
        src={Elipse} 
        alt="Elipse Background" 
        className="absolute bottom-[35%] left-[2%] w-[700px] h-[700px] opacity-[0.07] blur-[64px] drop-shadow-[0_0_50px_rgba(52,199,89,0.2)]" loading="lazy"
      />
      <Image 
        src={Elipse} 
        alt="Elipse Background" 
        className="absolute bottom-[5%] right-[-60%] w-[700px] h-[700px] opacity-[0.07] blur-[64px] drop-shadow-[0_0_50px_rgba(52,199,89,0.2)]" loading="lazy"
      />
      </div>
      
      <main className="relative z-10">
        <Header></Header>
        <MainSection></MainSection>
        
        <ProblemSection></ProblemSection>
        
        <div className="h-[2px] bg-[#8EF27E] w-[100%] my-12 animate-pulse"></div>
        
        <SolutionSection></SolutionSection>
        
        <div className="h-[2px] bg-[#8EF27E] w-[100%] my-12 animate-pulse"></div>
        
        <DeliverablesSection></DeliverablesSection>
        
        <div className="h-[2px] bg-[#8EF27E] w-[100%] my-12 animate-pulse"></div>
        
        <ImageCarousel></ImageCarousel>
        
        <div className="h-[2px] bg-[#8EF27E] w-[100%] my-12 animate-pulse"></div>
        
        <div id="selling-info"><SellingInfo></SellingInfo></div>
        
        <div className="h-[2px] bg-[#8EF27E] w-[100%] my-12 animate-pulse"></div>
        
        <Guarantee></Guarantee>
        
        <div className="h-[2px] bg-[#8EF27E] w-[100%] animate-pulse my-12"></div>
        <Questions></Questions>
        
        <div className="h-[2px] bg-[#8EF27E] w-[100%] animate-pulse my-12"></div>
        <FinalCTA></FinalCTA>
        
        <Footer></Footer>
      </main>
    </div>
  );
}
