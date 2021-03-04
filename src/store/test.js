import { action, observable } from 'mobx'

const state = observable({test: '', info: {}})

const mutations = {
  setTest: action((test) => { 
    state.test = test
  }),
  setInfo: action((info) => {
    state.info = info
  })
}

const fetches = {
  getInfo: () => {
    // const response = api.getInfo('asdfdasklfjasdf')
    // setInfo(response)
  }
}

const toExport = { 
  state,
  ...mutations,
  ...fetches
}

export default toExport