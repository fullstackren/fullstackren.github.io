export interface CourseData {
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