export const namespace = 'data-dva'

export interface IDvaState {
  count: number
}

export enum actionType {
  Increase = 'Increase',
  Decrease = 'Decrease'
}

const state: IDvaState = {
  count: 1
}
export default {
  namespace,
  state,
  effects: {
    *opeateDecrease({ payload }, { select, put }) {
      try {
        const { operateType } = payload
        let { count } = yield select(state => state[namespace])
        if (operateType === actionType.Decrease) {
          count -= 1
        } else if (operateType === actionType.Increase) {
          count += 1
        }

        yield put({
          type: 'setState',
          payload: {
            count
          }
        })
      } catch (error) {}
    }
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
