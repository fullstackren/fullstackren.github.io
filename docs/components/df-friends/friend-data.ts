import FRIEND_DATA from './friend-data.json'

export const FRIEND_DATA_INFO = {
  title: '友情链接',
  items: FRIEND_DATA.sort(() => Math.random() - 0.5),
}