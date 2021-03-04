import { action, observable } from 'mobx'
import { actions as userActions } from './userStore'

const initialState = {value: ''}

const state = observable({ ...initialState })

const mutations = {
  setValue: action((newValue) => { 
    state.value = newValue
  }),
  clearState: action(_ => Object.assign(state, initialState))
}

export const getters = {
  getValue: _ => state.value
}

export const actions = {
  updateValue: newValue => mutations.setValue(newValue),
  clearState: _ => mutations.clearState(),
  updateUser: _ => userActions.updateUser({name: 'test'})
}