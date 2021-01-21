import { createStore } from 'vuex'

import user     from './user';
import items    from './items';

export const store = createStore({
  modules: {
    user,
    actueel : items,
    blogs : items,
  },
});
