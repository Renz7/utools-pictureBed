import ossData from '@/data/oss_data.json'
const oss = {
  state: {
    aliOss: {
      region: '',
      accessKeyId: '',
      accessKeySecret: '',
      bucket: '',
      uploadDirectory: '',
      domain: '',
      style: ''
    },
    tencentOss: {
      secretId: '',
      secretKey: '',
      bucket: '',
      region: '',
      path: '',
      domain: '',
      style: ''
    },
    smMs: {
      token: ''
    },
    GitHub: {
      token: '',
      path: '',
      project: '',
      cdn: '',
      branch: '',
      at: false
    },
    onedrive: {
      refreshToken: '',
      path: 'pic'
    },
    chevereto: {
      token: '',
      url: ''
    },
    Hello: {
      username: '',
      password: ''
    },
    upyun: {
      // 服务名称
      bucketName: '',
      // 操作员
      username: '',
      password: '',
      path: '',
      host: ''
    },
    Gitee: {
      accessToken: '',
      owner: '',
      repo: '',
      path: ''
    },
    Qiniu: {
      accessKey: '',
      secretKey: '',
      bucket: '',
      path: '',
      host: '',
      zone: 'Zone_z0',
      cdn: false
    }
  },
  mutations: {
    setAliOss (state, {
      region,
      accessKeyId,
      accessKeySecret,
      bucket
    }) {
      state.aliOss = {
        region, accessKeyId, accessKeySecret, bucket
      }
    },
    clearOssData (state, keys = []) {
      keys.forEach(key => {
        state[key] = ossData[key]
      })
    }
  },
  actions: {
  },
  getters: { }
}

export default oss
