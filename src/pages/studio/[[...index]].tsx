import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { metadata } from 'next-sanity/studio/metadata'
import config from '../../../sanity.config'

// rentrer cette commande permet de d'importer next-sanity studio et metadata qui n'étaient pas reconnus
// npm install next-sanity @sanity/client @portabletext/react @sanity/image-url

export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <NextStudio config={config} />
    </>
  )
}