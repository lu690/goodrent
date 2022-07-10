import request from '@/utils/request'

/**
 *用户登录接口
 * @param {*} param0
 * @returns
 */
export const getAdmin = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

/**
 * /user 获取信息用户资料
 * @returns
 */
export const getUser = () => {
  return request({
    url: '/user'
  })
}
