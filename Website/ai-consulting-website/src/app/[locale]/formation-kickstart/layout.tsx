import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'formation_kickstart' })
  
  const isEnglish = locale === 'en'
  
  return {
    title: isEnglish 
      ? 'Kickstart Training - Create Your First Website with AI | Newcode'
      : 'Formation Kickstart - Créez votre premier site avec l\'IA | Newcode',
    description: isEnglish
      ? 'Learn to create websites with AI in 6 hours. Master agentic development tools and build your first web project without coding experience. Beginner-friendly training.'
      : 'Apprenez à créer des sites web avec l\'IA en 6 heures. Maîtrisez les outils de développement agentique et créez votre premier projet web sans expérience de codage. Formation pour débutants.',
    keywords: isEnglish
      ? 'AI web development, agentic programming, no-code training, website creation, AI tools, Lovable, Bolt, Cursor'
      : 'développement web IA, programmation agentique, formation no-code, création site web, outils IA, Lovable, Bolt, Cursor',
    authors: [{ name: 'Philippe Béliveau' }, { name: 'Newcode' }],
    openGraph: {
      title: isEnglish 
        ? 'Kickstart Training - Create Your First Website with AI'
        : 'Formation Kickstart - Créez votre premier site avec l\'IA',
      description: isEnglish
        ? 'Learn to create websites with AI in 6 hours. Master agentic development tools and build your first web project without coding experience.'
        : 'Apprenez à créer des sites web avec l\'IA en 6 heures. Maîtrisez les outils de développement agentique et créez votre premier projet web sans expérience de codage.',
      type: 'website',
      locale: locale,
      siteName: 'Newcode',
      images: [
        {
          url: '/images/formation-kickstart-og.jpg',
          width: 1200,
          height: 630,
          alt: isEnglish 
            ? 'Kickstart Training - AI Web Development'
            : 'Formation Kickstart - Développement Web IA'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: isEnglish 
        ? 'Kickstart Training - Create Your First Website with AI'
        : 'Formation Kickstart - Créez votre premier site avec l\'IA',
      description: isEnglish
        ? 'Learn to create websites with AI in 6 hours. Master agentic development tools.'
        : 'Apprenez à créer des sites web avec l\'IA en 6 heures. Maîtrisez les outils agentiques.',
      images: ['/images/formation-kickstart-og.jpg']
    },
    alternates: {
      canonical: `https://newcode.ai/${locale}/formation-kickstart`,
      languages: {
        'fr': 'https://newcode.ai/fr/formation-kickstart',
        'en': 'https://newcode.ai/en/formation-kickstart'
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  }
}

export default function FormationKickstartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}