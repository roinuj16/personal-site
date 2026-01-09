import type { SiteContent } from '~/types'
import type { Locale } from './useLocale'

const contentByLocale: Record<Locale, SiteContent> = {
  en: {
    hero: {
      firstName: 'EDSON',
      lastName: 'JUNIOR',
      description: "I'm a developer with a degree in Systems Analysis and Development. Passionate about technology, I'm always looking to improve my skills and expand my knowledge. I enjoy sharing experiences and learning from others, as I believe collaboration is one of the most enriching parts of a career. The challenges and satisfaction I find in my work fuel this passion every day. Besides technology, my hobbies include photography, traveling, and practicing CrossFit.",
      profileImageUrl: '/assets/images/eu.jpg',
      profileImageAlt: 'Edson Junior'
    },

    socialLinks: [
      {
        name: 'GitHub',
        icon: 'fab fa-github',
        url: 'https://github.com/roinuj16',
        ariaLabel: "Edson Junior's GitHub"
      },
      {
        name: 'LinkedIn',
        icon: 'fab fa-linkedin-in',
        url: 'https://www.linkedin.com/in/roinuj16/',
        ariaLabel: "Edson Junior's LinkedIn"
      },
      {
        name: 'Gmail',
        icon: 'fas fa-envelope',
        url: 'mailto:junior.si16@gmail.com',
        ariaLabel: "Edson Junior's Email"
      },
      {
        name: 'Instagram',
        icon: 'fab fa-instagram',
        url: 'https://www.instagram.com/jrempixel',
        ariaLabel: "Edson Junior's Instagram"
      },
      {
        name: 'Unsplash',
        icon: 'fab fa-unsplash',
        url: 'https://unsplash.com/@roinuj16',
        ariaLabel: "Edson Junior's Unsplash Portfolio"
      }
    ],

    skills: [
      {
        id: 'dev',
        title: 'Developer',
        description: 'Explore my journey as a developer and my passion for technology. Creating innovative solutions with clean and efficient code.',
        icon: 'fas fa-code',
        iconColor: 'dev',
        imageUrl: '/assets/images/eu.jpg',
        linkUrl: 'https://www.linkedin.com/in/roinuj16/',
        linkExternal: true
      },
      {
        id: 'photo',
        title: 'Photographer',
        description: 'Photography is my way of seeing the world through different eyes. Check out captures that tell stories and preserve unique moments.',
        icon: 'fas fa-camera',
        iconColor: 'photo',
        imageUrl: '/assets/images/eu.jpg',
        linkUrl: 'https://www.instagram.com/jrempixel',
        linkExternal: true,
        animationDelay: '0.2s'
      },
      {
        id: 'travel',
        title: 'Travel',
        description: 'Traveling is about expanding horizons and collecting unique experiences. Discover destinations that marked my journey and created unforgettable memories.',
        icon: 'fas fa-plane-departure',
        iconColor: 'travel',
        imageUrl: '/assets/images/eu.jpg',
        linkUrl: 'https://www.instagram.com/jrempixel',
        linkExternal: true,
        animationDelay: '0.4s'
      }
    ]
  },

  pt: {
    hero: {
      firstName: 'EDSON',
      lastName: 'JUNIOR',
      description: 'Sou desenvolvedor, formado em Análise e Desenvolvimento de Sistemas. Apaixonado por tecnologia, estou sempre em busca de aprimorar minhas habilidades e expandir meus conhecimentos. Gosto de compartilhar experiências e aprender com outras pessoas, pois acredito que a colaboração é uma das partes mais enriquecedoras da carreira. Os desafios e a satisfação que encontro no meu trabalho alimentam essa paixão todos os dias. Além da tecnologia, tenho como hobbies a fotografia, viajar e praticar CrossFit.',
      profileImageUrl: '/assets/images/eu.jpg',
      profileImageAlt: 'Edson Junior'
    },

    socialLinks: [
      {
        name: 'GitHub',
        icon: 'fab fa-github',
        url: 'https://github.com/roinuj16',
        ariaLabel: 'GitHub de Edson Junior'
      },
      {
        name: 'LinkedIn',
        icon: 'fab fa-linkedin-in',
        url: 'https://www.linkedin.com/in/roinuj16/',
        ariaLabel: 'LinkedIn de Edson Junior'
      },
      {
        name: 'Gmail',
        icon: 'fas fa-envelope',
        url: 'mailto:junior.si16@gmail.com',
        ariaLabel: 'Email de Edson Junior'
      },
      {
        name: 'Instagram',
        icon: 'fab fa-instagram',
        url: 'https://www.instagram.com/jrempixel',
        ariaLabel: 'Instagram de Edson Junior'
      },
      {
        name: 'Unsplash',
        icon: 'fab fa-unsplash',
        url: 'https://unsplash.com/@roinuj16',
        ariaLabel: 'Portfólio Unsplash de Edson Junior'
      }
    ],

    skills: [
      {
        id: 'dev',
        title: 'Desenvolvedor',
        description: 'Explore minha trajetória como desenvolvedor e minha paixão por tecnologia. Criando soluções inovadoras com código limpo e eficiente.',
        icon: 'fas fa-code',
        iconColor: 'dev',
        imageUrl: '/assets/images/eu.jpg',
        linkUrl: 'https://www.linkedin.com/in/roinuj16/',
        linkExternal: true
      },
      {
        id: 'photo',
        title: 'Fotógrafo',
        description: 'A fotografia é minha forma de enxergar o mundo com outros olhos. Confira registros que contam histórias e guardam momentos únicos.',
        icon: 'fas fa-camera',
        iconColor: 'photo',
        imageUrl: '/assets/images/eu.jpg',
        linkUrl: 'https://www.instagram.com/jrempixel',
        linkExternal: true,
        animationDelay: '0.2s'
      },
      {
        id: 'travel',
        title: 'Viagens',
        description: 'Viajar é expandir horizontes e colecionar experiências únicas. Descubra destinos que marcaram minha trajetória e criaram memórias inesquecíveis.',
        icon: 'fas fa-plane-departure',
        iconColor: 'travel',
        imageUrl: '/assets/images/eu.jpg',
        linkUrl: 'https://www.instagram.com/jrempixel',
        linkExternal: true,
        animationDelay: '0.4s'
      }
    ]
  }
}

export const useContent = () => {
  const { locale } = useLocale()

  const content = computed(() => contentByLocale[locale.value])

  return {
    content
  }
}
