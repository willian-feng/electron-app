import { LEFT_MENU } from '../config';

export default {
  namespace: 'global',
  state: {
    selectedKeys: [LEFT_MENU[0].key],                // 菜单已选项
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
