import request from '@/utils/request'
export const getImg = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}

// 获取租房小组信息
export const getGroup = () => {
  return request({
    method: 'GET',
    url: '/home/groups'
  })
}

export const getHouses = (params) => {
  return request({
    method: 'GET',
    url: '/houses',
    params
  })
}
