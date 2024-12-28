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