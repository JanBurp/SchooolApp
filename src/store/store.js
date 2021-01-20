import { createStore } from 'vuex'

import user     from './user';
import actueel  from './actueel';

export const store = createStore({
  modules: {
    user,
    actueel,
  },
});
