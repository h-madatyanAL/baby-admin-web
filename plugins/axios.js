export default function ({ $axios }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  })

  api.setBaseURL(process.env.apiUrl)

  inject('api', api)
}
