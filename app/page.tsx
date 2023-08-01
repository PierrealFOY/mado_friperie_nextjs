import Head  from "next/head";
import News from '@/components/News';
import WelcomePicture from '@/components/WelcomePicture';
import AboutSection from '@/components/AboutSection';
import ShopCategories from '@/components/ShopCategories';
import ContactSection from '@/components/contact/ContactSection';


export default function Home() {
  return (

    <main className="mx-auto max-w-7xl px-4 sm:px-6 md:max-w-full">
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" className="rounded-full" />
          <title className="text-black"> Friperie Mado </title>
        </Head>
      </div>
      <WelcomePicture />
      <AboutSection />
      <ShopCategories />
      <News />
      <ContactSection />
    </main>
  )
}
