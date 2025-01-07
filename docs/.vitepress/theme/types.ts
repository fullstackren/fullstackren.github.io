export interface NavLink {
  noIcon?: boolean
  icon?: string | { svg: string }
  badge?:
    | string
    | {
        text?: string
        type?: 'info' | 'tip' | 'warning' | 'danger'
      }
  title: string
  desc?: string
  link: string
}

export interface NavData {
  title: string
  tag?: string
  noIcon?: boolean
  items: NavLink[]
}

export interface TranslationLink {
  noImage?: boolean
  image?: string | { svg: string },
  title: string,
  badge?:
    | string
    | {
      text?: string,
      type?: 'info' | 'tip' | 'warning' | 'danger'
    }
  desc?: string,
  link: string
}

export interface TranslationData {
  title: string
  tag?: string
  noIcon?: boolean
  items: TranslationLink[]
}