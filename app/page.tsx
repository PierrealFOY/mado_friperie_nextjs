import Head  from "next/head";
import News from '@/components/News';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/contact/ContactSection';


export default function Home() {
  return (

    <main className="mx-auto max-w-7xl px-4 sm:px-6 md:max-w-7lx ">
      <div>
        <Head>
          <title className="text-black"> Friperie Mado </title>
        </Head>
      </div>
      <News />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
