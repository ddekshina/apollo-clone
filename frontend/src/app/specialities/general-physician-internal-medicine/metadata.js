export const metadata = {
    title: 'Consult Top General Physicians Online | Apollo 247 Clone',
    description: 'Book appointments with top general physicians and internal medicine specialists. Get medical advice, second opinions, and medical prescriptions online.',
    keywords: 'general physician, internal medicine, doctor consultation, online doctor, medical advice, Apollo 247 clone',
    openGraph: {
      title: 'Consult Top General Physicians Online | Apollo 247 Clone',
      description: 'Book appointments with top general physicians and internal medicine specialists. Get medical advice, second opinions, and medical prescriptions online.',
      type: 'website',
      url: 'https://apollo247-clone.vercel.app/specialties/general-physician-internal-medicine',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Apollo247 Clone - General Physician & Internal Medicine',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Consult Top General Physicians Online | Apollo 247 Clone',
      description: 'Book appointments with top general physicians and internal medicine specialists. Get medical advice, second opinions, and medical prescriptions online.',
      creator: '@yourusername',
      images: ['/twitter-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
    alternates: {
      canonical: 'https://apollo247-clone.vercel.app/specialties/general-physician-internal-medicine',
      languages: {
        'en-US': 'https://apollo247-clone.vercel.app/en-US/specialties/general-physician-internal-medicine',
        'hi-IN': 'https://apollo247-clone.vercel.app/hi-IN/specialties/general-physician-internal-medicine',
      },
    },
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      other: {
        me: ['your-email@example.com'],
      },
    },
    authors: [
      { name: 'Your Name', url: 'https://yourportfolio.com' },
    ],
    // Structured data for rich results
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'MedicalSpecialty',
      name: 'General Physician & Internal Medicine',
      description: 'Book appointments with top general physicians and internal medicine specialists. Get medical advice, second opinions, and medical prescriptions online.',
      url: 'https://apollo247-clone.vercel.app/specialties/general-physician-internal-medicine',
      provider: {
        '@type': 'MedicalOrganization',
        name: 'Apollo247 Clone',
        url: 'https://apollo247-clone.vercel.app',
      }
    }
  }