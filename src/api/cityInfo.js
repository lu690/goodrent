import request from '@/utils/request'
// import { getItems } from '@/utils/storge'
// const houseId = getItems('setCurrentCityId')

/**
 *获取城市列表数据
 * @returns
 */
export const getCityInfo = (params) => {
  return request({
    method: 'GET',
    url: '/area/city',
    params
  })
}

/**
 *获取子级城市列表
 * @returns
 */
export const getSubCity = (params) => {
  return request({
    method: 'GET',
    url: '/houses/condition',
    params
  })
}

/**
 *热门城市
 * @returns
 */
export const getHotCity = () => {
  return request({
    method: 'GET',
    url: '/area/hot'
  })
}

// /area/map
/**
 *获取房屋查询条件
 * @param {*} params
 * @returns
 */
export const getCityHouses = (params) => {
  return request({
    method: 'GET',
    url: '/houses',
    params
  })
}

/**
 * 获取房屋详情
 * @param {*} id
 * @returns
 */
export const getHouseDetail = (id) => {
  return request({
    method: 'GET',
    url: `/houses/${id}`
  })
}
