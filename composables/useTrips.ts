import type { TripLocation } from '~/types'
import type { Locale } from './useLocale'

interface TripsContentByLocale {
  trips: TripLocation[]
  backLabel: string
}

const tripsContentByLocale: Record<Locale, TripsContentByLocale> = {
  en: {
    backLabel: 'Back',
    trips: [
      {
        id: '1',
        slug: 'orlando-disney',
        name: 'Orlando - Disney',
        country: 'United States',
        coordinates: [28.3772, -81.5707],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768062926606-f42bb5e00480?w=400&h=300&fit=crop',
        description: 'The magical world of Disney'
      },
      {
        id: '2',
        slug: 'miami',
        name: 'Miami',
        country: 'United States',
        coordinates: [25.7617, -80.1918],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768063046947-f07df80c2b8a?w=400&h=300&fit=crop',
        description: 'The Magic City'
      },
      {
        id: '3',
        slug: 'key-west',
        name: 'Key West',
        country: 'United States',
        coordinates: [24.5551, -81.7800],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768063046940-fdbc96db78e9?w=400&h=300&fit=crop',
        description: 'Paradise at the southern tip of Florida'
      },
      {
        id: '4',
        slug: 'lisboa',
        name: 'Lisbon',
        country: 'Portugal',
        coordinates: [38.7223, -9.1393],
        thumbnailUrl: 'https://images.unsplash.com/photo-1703699428821-c283b5e2fe69?w=400&h=300&fit=crop',
        description: 'The city of seven hills'
      },
      {
        id: '5',
        slug: 'sintra',
        name: 'Sintra',
        country: 'Portugal',
        coordinates: [38.8029, -9.3817],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768064484872-6c2b5d62c409?w=400&h=300&fit=crop',
        description: 'Fairytale palaces and gardens'
      },
      {
        id: '6',
        slug: 'fatima',
        name: 'Fátima',
        country: 'Portugal',
        coordinates: [39.6318, -8.6544],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768063943719-8ff3e1679964?w=400&h=300&fit=crop',
        description: 'Sacred pilgrimage site'
      },
      {
        id: '7',
        slug: 'batalha',
        name: 'Batalha Monastery',
        country: 'Portugal',
        coordinates: [39.6603, -8.8246],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768064248821-56844c9e18b7?w=400&h=300&fit=crop',
        description: 'Gothic masterpiece and UNESCO World Heritage'
      },
      {
        id: '8',
        slug: 'ciudad-del-este',
        name: 'Ciudad del Este',
        country: 'Paraguay',
        coordinates: [-25.5096, -54.6114],
        thumbnailUrl: 'https://images.unsplash.com/photo-1517057970663-5d535acb0b3a?w=400&h=300&fit=crop',
        description: 'Border city and commercial hub'
      },
      {
        id: '9',
        slug: 'brasilia',
        name: 'Brasília',
        country: 'Brazil',
        coordinates: [-15.7801, -47.9292],
        thumbnailUrl: 'https://images.unsplash.com/photo-1663110380406-84665c264704?w=400&h=300&fit=crop',
        description: 'The modernist capital of Brazil'
      },
      {
        id: '10',
        slug: 'natal',
        name: 'Natal',
        country: 'Brazil',
        coordinates: [-5.7945, -35.2110],
        thumbnailUrl: 'https://images.unsplash.com/photo-1647696567309-e62c6910f985?w=400&h=300&fit=crop',
        description: 'City of the Sun'
      },
      {
        id: '11',
        slug: 'joao-pessoa',
        name: 'João Pessoa',
        country: 'Brazil',
        coordinates: [-7.1195, -34.8450],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768060689238-f580dbcae732?w=400&h=300&fit=crop',
        description: 'Where the sun rises first in the Americas'
      },
      {
        id: '12',
        slug: 'recife',
        name: 'Recife',
        country: 'Brazil',
        coordinates: [-8.0476, -34.8770],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768060487336-4ae4a9e48165?w=400&h=300&fit=crop',
        description: 'The Venice of Brazil'
      },
      {
        id: '13',
        slug: 'maceio',
        name: 'Maceió',
        country: 'Brazil',
        coordinates: [-9.6498, -35.7089],
        thumbnailUrl: 'https://images.unsplash.com/photo-1634783482216-cfe02fcc7533?w=400&h=300&fit=crop',
        description: 'Paradise of waters'
      },
      {
        id: '14',
        slug: 'bonito',
        name: 'Bonito',
        country: 'Brazil',
        coordinates: [-21.1267, -56.4836],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768059319001-8d744a9512d2?w=400&h=300&fit=crop',
        description: 'Ecotourism capital of Brazil'
      },
      {
        id: '15',
        slug: 'foz-do-iguacu',
        name: 'Foz do Iguaçu',
        country: 'Brazil',
        coordinates: [-25.5163, -54.5854],
        thumbnailUrl: 'https://plus.unsplash.com/premium_photo-1697729955700-6004e5402a74?w=400&h=300&fit=crop',
        description: 'Home of the majestic Iguazu Falls'
      },
      {
        id: '16',
        slug: 'pirenopolis',
        name: 'Pirenópolis',
        country: 'Brazil',
        coordinates: [-15.8511, -48.9592],
        thumbnailUrl: 'https://images.unsplash.com/photo-1710988285167-a8b6abe12f15?w=400&h=300&fit=crop',
        description: 'Colonial charm and waterfalls'
      },
      {
        id: '17',
        slug: 'chapada-dos-veadeiros',
        name: 'Chapada dos Veadeiros',
        country: 'Brazil',
        coordinates: [-14.1667, -47.8333],
        thumbnailUrl: 'https://images.unsplash.com/photo-1692191935998-a9ab6c9d99eb?w=400&h=300&fit=crop',
        description: 'Mystical highlands and ancient crystals'
      },
      {
        id: '18',
        slug: 'gramado',
        name: 'Gramado',
        country: 'Brazil',
        coordinates: [-29.3792, -50.8764],
        thumbnailUrl: 'https://images.unsplash.com/photo-1669384039953-cb9d1e70b604?w=400&h=300&fit=crop',
        description: 'European charm in southern Brazil'
      },
      {
        id: '19',
        slug: 'sao-paulo',
        name: 'São Paulo',
        country: 'Brazil',
        coordinates: [-23.5505, -46.6333],
        thumbnailUrl: 'https://images.unsplash.com/photo-1604212399401-5fd807a65e18?w=400&h=300&fit=crop',
        description: 'The vibrant megacity'
      },
      {
        id: '20',
        slug: 'salvador',
        name: 'Salvador',
        country: 'Brazil',
        coordinates: [-12.9714, -38.5014],
        thumbnailUrl: 'https://images.unsplash.com/photo-1646494835208-ba788b9a3ed5?w=400&h=300&fit=crop',
        description: 'Heart of Afro-Brazilian culture'
      },
      {
        id: '21',
        slug: 'fortaleza',
        name: 'Fortaleza',
        country: 'Brazil',
        coordinates: [-3.7172, -38.5433],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768061572221-93a00aa4cab9?w=400&h=300&fit=crop',
        description: 'Sun, beaches and forró'
      },
      {
        id: '22',
        slug: 'jericoacoara',
        name: 'Jericoacoara',
        country: 'Brazil',
        coordinates: [-2.7975, -40.5137],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768061572185-23753a6e6ecf?w=400&h=300&fit=crop',
        description: 'Paradise hidden in the dunes'
      },
      {
        id: '23',
        slug: 'campina-grande',
        name: 'Campina Grande',
        country: 'Brazil',
        coordinates: [-7.2306, -35.8811],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768061002302-2d1dfe2912d7?w=400&h=300&fit=crop',
        description: 'The biggest São João festival in the world'
      }
    ]
  },

  pt: {
    backLabel: 'Voltar',
    trips: [
      {
        id: '1',
        slug: 'orlando-disney',
        name: 'Orlando - Disney',
        country: 'Estados Unidos',
        coordinates: [28.3772, -81.5707],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768062926606-f42bb5e00480?w=400&h=300&fit=crop',
        description: 'O mundo mágico da Disney'
      },
      {
        id: '2',
        slug: 'miami',
        name: 'Miami',
        country: 'Estados Unidos',
        coordinates: [25.7617, -80.1918],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768063046947-f07df80c2b8a?w=400&h=300&fit=crop',
        description: 'A Cidade Mágica'
      },
      {
        id: '3',
        slug: 'key-west',
        name: 'Key West',
        country: 'Estados Unidos',
        coordinates: [24.5551, -81.7800],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768063046940-fdbc96db78e9?w=400&h=300&fit=crop',
        description: 'Paraíso no extremo sul da Flórida'
      },
      {
        id: '4',
        slug: 'lisboa',
        name: 'Lisboa',
        country: 'Portugal',
        coordinates: [38.7223, -9.1393],
        thumbnailUrl: 'https://images.unsplash.com/photo-1703699428821-c283b5e2fe69?w=400&h=300&fit=crop',
        description: 'A cidade das sete colinas'
      },
      {
        id: '5',
        slug: 'sintra',
        name: 'Sintra',
        country: 'Portugal',
        coordinates: [38.8029, -9.3817],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768064484872-6c2b5d62c409?w=400&h=300&fit=crop',
        description: 'Palácios e jardins de conto de fadas'
      },
      {
        id: '6',
        slug: 'fatima',
        name: 'Fátima',
        country: 'Portugal',
        coordinates: [39.6318, -8.6544],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768063943719-8ff3e1679964?w=400&h=300&fit=crop',
        description: 'Local sagrado de peregrinação'
      },
      {
        id: '7',
        slug: 'batalha',
        name: 'Mosteiro da Batalha',
        country: 'Portugal',
        coordinates: [39.6603, -8.8246],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768064248821-56844c9e18b7?w=400&h=300&fit=crop',
        description: 'Obra-prima gótica e Patrimônio Mundial da UNESCO'
      },
      {
        id: '8',
        slug: 'ciudad-del-este',
        name: 'Ciudad del Este',
        country: 'Paraguai',
        coordinates: [-25.5096, -54.6114],
        thumbnailUrl: 'https://images.unsplash.com/photo-1517057970663-5d535acb0b3a?w=400&h=300&fit=crop',
        description: 'Cidade fronteiriça e polo comercial'
      },
      {
        id: '9',
        slug: 'brasilia',
        name: 'Brasília',
        country: 'Brasil',
        coordinates: [-15.7801, -47.9292],
        thumbnailUrl: 'https://images.unsplash.com/photo-1663110380406-84665c264704?w=400&h=300&fit=crop',
        description: 'A capital modernista do Brasil'
      },
      {
        id: '10',
        slug: 'natal',
        name: 'Natal',
        country: 'Brasil',
        coordinates: [-5.7945, -35.2110],
        thumbnailUrl: 'https://images.unsplash.com/photo-1647696567309-e62c6910f985?w=400&h=300&fit=crop',
        description: 'Cidade do Sol'
      },
      {
        id: '11',
        slug: 'joao-pessoa',
        name: 'João Pessoa',
        country: 'Brasil',
        coordinates: [-7.1195, -34.8450],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768060689238-f580dbcae732?w=400&h=300&fit=crop',
        description: 'Onde o sol nasce primeiro nas Américas'
      },
      {
        id: '12',
        slug: 'recife',
        name: 'Recife',
        country: 'Brasil',
        coordinates: [-8.0476, -34.8770],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768060487336-4ae4a9e48165?w=400&h=300&fit=crop',
        description: 'A Veneza Brasileira'
      },
      {
        id: '13',
        slug: 'maceio',
        name: 'Maceió',
        country: 'Brasil',
        coordinates: [-9.6498, -35.7089],
        thumbnailUrl: 'https://images.unsplash.com/photo-1634783482216-cfe02fcc7533?w=400&h=300&fit=crop',
        description: 'Paraíso das águas'
      },
      {
        id: '14',
        slug: 'bonito',
        name: 'Bonito',
        country: 'Brasil',
        coordinates: [-21.1267, -56.4836],
        thumbnailUrl: 'https://plus.unsplash.com/premium_photo-1697729955700-6004e5402a74?w=400&h=300&fit=crop',
        description: 'Capital do ecoturismo no Brasil'
      },
      {
        id: '15',
        slug: 'foz-do-iguacu',
        name: 'Foz do Iguaçu',
        country: 'Brasil',
        coordinates: [-25.5163, -54.5854],
        thumbnailUrl: 'https://images.unsplash.com/photo-1543385426-191664295b58?w=400&h=300&fit=crop',
        description: 'Lar das majestosas Cataratas do Iguaçu'
      },
      {
        id: '16',
        slug: 'pirenopolis',
        name: 'Pirenópolis',
        country: 'Brasil',
        coordinates: [-15.8511, -48.9592],
        thumbnailUrl: 'https://images.unsplash.com/photo-1710988285167-a8b6abe12f15?w=400&h=300&fit=crop',
        description: 'Charme colonial e cachoeiras'
      },
      {
        id: '17',
        slug: 'chapada-dos-veadeiros',
        name: 'Chapada dos Veadeiros',
        country: 'Brasil',
        coordinates: [-14.1667, -47.8333],
        thumbnailUrl: 'https://images.unsplash.com/photo-1692191935998-a9ab6c9d99eb?w=400&h=300&fit=crop',
        description: 'Planalto místico e cristais ancestrais'
      },
      {
        id: '18',
        slug: 'gramado',
        name: 'Gramado',
        country: 'Brasil',
        coordinates: [-29.3792, -50.8764],
        thumbnailUrl: 'https://images.unsplash.com/photo-1669384039953-cb9d1e70b604?w=400&h=300&fit=crop',
        description: 'Charme europeu no sul do Brasil'
      },
      {
        id: '19',
        slug: 'sao-paulo',
        name: 'São Paulo',
        country: 'Brasil',
        coordinates: [-23.5505, -46.6333],
        thumbnailUrl: 'https://images.unsplash.com/photo-1604212399401-5fd807a65e18?w=400&h=300&fit=crop',
        description: 'A vibrante megalópole'
      },
      {
        id: '20',
        slug: 'salvador',
        name: 'Salvador',
        country: 'Brasil',
        coordinates: [-12.9714, -38.5014],
        thumbnailUrl: 'https://images.unsplash.com/photo-1646494835208-ba788b9a3ed5?w=400&h=300&fit=crop',
        description: 'Coração da cultura afro-brasileira'
      },
      {
        id: '21',
        slug: 'fortaleza',
        name: 'Fortaleza',
        country: 'Brasil',
        coordinates: [-3.7172, -38.5433],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768061572221-93a00aa4cab9?w=400&h=300&fit=crop',
        description: 'Sol, praias e forró'
      },
      {
        id: '22',
        slug: 'jericoacoara',
        name: 'Jericoacoara',
        country: 'Brasil',
        coordinates: [-2.7975, -40.5137],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768061572185-23753a6e6ecf?w=400&h=300&fit=crop',
        description: 'Paraíso escondido nas dunas'
      },
      {
        id: '23',
        slug: 'campina-grande',
        name: 'Campina Grande',
        country: 'Brasil',
        coordinates: [-7.2306, -35.8811],
        thumbnailUrl: 'https://images.unsplash.com/photo-1768061002302-2d1dfe2912d7?w=400&h=300&fit=crop',
        description: 'O maior São João do mundo'
      }
    ]
  }
}

export const useTrips = () => {
  const { locale } = useLocale()

  const trips = computed(() => tripsContentByLocale[locale.value].trips)
  const backLabel = computed(() => tripsContentByLocale[locale.value].backLabel)

  const getTripBySlug = (slug: string) => {
    return trips.value.find(trip => trip.slug === slug)
  }

  return {
    trips,
    backLabel,
    getTripBySlug
  }
}
