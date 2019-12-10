export const namespace = 'data-dva'

export interface IDvaState {
  count: number
}

const state: IDvaState = {
  count: 1
}
export default {
  namespace,
  state,
  effects: {},
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
