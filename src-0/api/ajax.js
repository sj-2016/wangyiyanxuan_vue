//使用axios和poromise封装的发ajax请求的函数模块
// 函数返回值是promise
import axios from 'axios'

export default function ajax(url,data={},type='GET') {
  return new Promise(function (resolve,reject) {
    let promise;
    // 执行异步请求
    if (type==='GET'){//GET请求
      let paramStr = '';
      Object.keys(data).forEach(key => {
        paramStr += key + '='+data[key] + '&'
      });
      if (paramStr){
        paramStr = paramStr.substring(0,paramStr.length-1)
      }
      promise = axios.get(url+'?'+paramStr)
    }else {
      promise = axios.post(url,data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
