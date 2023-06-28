import Head  from "next/head";
import Image  from "next/image";
import News from '@/components/News';



export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Head>
          <title className="text-black"> Friperie Mado </title>
        </Head>
      </div>

      <div className="object-cover bg-cover bg-top bg-no-repeat">
        <Image 
          src="/../public/images/image_background-friperie.jpg" 
          alt=""
          // width={1600}
          // height={900}
          // En commentant le width et height qui sont obligatoires
          // Je peux ajouter le prop fill={true} en dessous : 
          // l'image remplira automatiquement l'espace du parent
          fill={true}
          priority={true}
        />
      </div>
      <News />

    </main>
  )
}
