import { action, observable } from 'mobx'

const initialState = {user: {name: 'sage'}}

const state = observable({ ...initialState })

const mutations = {
  setUser: action((newUser) => { 
    state.user = newUser
  }),
  clearState: action(_ => Object.assign(state, initialState))
}

export const getters = {
  getUser: _ => state.user
}

export const actions = {
  updateUser: newUser => mutations.setUser(newUser),
  clearState: _ => mutations.clearState()
}
