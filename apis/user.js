import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser () {
    return apiHelper.get('/get_current_user', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  get ({ userId }) {
    return apiHelper.get(`/user/${userId}`, {
      Authorization: `Bearer ${getToken()}`
    })
  },
  addFavorite ({ roomId }) {
    return apiHelper.post(`/favorite/${roomId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  deleteFavorite ({ roomId }) {
    return apiHelper.delete(`/favorite/${roomId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  addLike ({ roomId }) {
    return apiHelper.post(`/like/${roomId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  deleteLike ({ roomId }) {
    return apiHelper.delete(`/like/${roomId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getTopUsers () {
    return apiHelper.get(`/users/top`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  addFollowing ({ userId }) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFollowing ({ userId }) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
