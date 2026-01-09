import type { SiteContent } from '~/types'

export const useContent = () => {
  const content: SiteContent = {
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

  return {
    content
  }
}
