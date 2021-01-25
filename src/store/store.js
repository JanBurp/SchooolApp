import { createStore } from 'vuex'

import school   from './school';
import user     from './user';
import items    from './items';

export const store = createStore({
  modules: {
    school,
    user,
    actueel : items,
    blogs : items,
    fotos : items,
  },
});
