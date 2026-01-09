export interface SocialLink {
  name: string
  icon: string
  url: string
  ariaLabel: string
}

export interface SkillCard {
  id: string
  title: string
  description: string
  icon: string
  iconColor: 'dev' | 'photo' | 'travel'
  imageUrl: string
  linkUrl?: string
  linkExternal?: boolean
  animationDelay?: string
}

export interface HeroContent {
  firstName: string
  lastName: string
  description: string
  profileImageUrl: string
  profileImageAlt: string
}

export interface SiteContent {
  hero: HeroContent
  socialLinks: SocialLink[]
  skills: SkillCard[]
}
