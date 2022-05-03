import { createPinia } from "pinia";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";
const store = createPinia();
const installPersistedStatePlugin = createPersistedStatePlugin();
store.use((context) => installPersistedStatePlugin(context));
export { store };

// export * from "./modules/settingsStore";
// export * from "./modules/userStore";
// etc etc...

export default store;
