import axios from 'axios'
import router from '@/router'

// axios.defaults.baseURL = 'http://121.199.2.83'
axios.defaults.timeout = 3000
axios.defaults.withCredentials = true

// 请求到结果的拦截处理

axios.interceptors.response.use(config => {
// 返回请求正确的结果

  return config
}, error => {
// 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息

  if (error && error.response) {
    switch (error.response.status) {
      case 404:
        router.replace({
          path: '*'

        }).then(r => {
          console.log(r)
        })
        break
    }
  }

  return Promise.reject(error.message)
})

export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
