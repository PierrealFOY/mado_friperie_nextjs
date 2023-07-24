This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Mado Friperie est le site vitrine d'une boutique située à Auray, en Bretagne ( 56 ). Le projet est actuellement en cours de développement et il est codé avec React ( côté client ) mais aussi Material UI, Tailwind, NextJs. Il s'agit d'une application web responsive, accessible sur format mobile et desktop, paramétré avec des breakpoints (Tailwind). Le site est déployé avec Vercel. 
-> lien du site : https://mado-friperie.vercel.app/ 

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Le site est déployé à l'aide de Vercel, hebergeur d'applications web côté client (React, Next...). Je développe sur les branches spécifiques aux fonctionnalités et commit sur celles-ci. Ensuite, je teste en local les modifications et si tout est OK, je push sur la branche main. La branche main est automatiquement mise à jour avec Vercel car elle est paramétrée comme branche par défaut. Ainsi, je n'ai pas à build (compiler) puis déployer depuis le terminal. Les droits du repository depuis GitHub sont accordés pour Vercel. Si erreur lors su déploiement, je peux, depuis la dashboard de Vercel, consulter les journaux pour avoir des informations sur l'origine de ces conflits.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
