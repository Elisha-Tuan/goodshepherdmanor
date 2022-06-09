import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  rooms: {
    create ({ formData }) {
      return apiHelper.post('/admin/rooms', formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    get () {
      return apiHelper.get('/admin/rooms', {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    delete ({ roomId }) {
      return apiHelper.delete(`/admin/rooms/${roomId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },
    getDetail ({ roomId }) {
      return apiHelper.get(`/admin/rooms/${roomId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update ({ roomId, formData }) {
      return apiHelper.put(`/admin/rooms/${roomId}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  categories: {
    get () {
      return apiHelper.get(`/admin/categories `, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create ({ name }) {
      return apiHelper.post(`/admin/categories`, name, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update ({ categoriesId, name }) {
      return apiHelper.put(`/admin/categories/${categoriesId}`, name, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    delete ({ categoriesId }) {
      return apiHelper.delete(`/admin/categories/${categoriesId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  }
}
