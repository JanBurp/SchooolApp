import { createStore } from 'vuex'

import user     from './user';
import actueel  from './actueel';
import blogs    from './blogs';

export const store = createStore({
  modules: {
    user,
    actueel,
    blogs,
  },
});
