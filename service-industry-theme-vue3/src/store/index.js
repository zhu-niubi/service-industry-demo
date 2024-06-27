import { createStore } from 'vuex';

const store = createStore({
    state: {
        fromRoute: null,
        toRoute: null,
    },
    mutations: {
        setRoutes(state, { from, to }) {
            state.fromRoute = from;
            state.toRoute = to;
        },
    },
    actions: {},
    modules: {},
});

export default store;
