// import * as service from '../service';

export default {
  namespace: 'global',
  state: {
    data: '',
  },
  effects: {},
  reducers: {
    querySuccess(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
