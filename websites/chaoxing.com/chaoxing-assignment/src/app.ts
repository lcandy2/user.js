import App from "./App.svelte";

export const appendApp = () => {
  return new App({
    target: (() => {
      const app = document.createElement('div');
      document.body.append(app);
      return app;
    })(),
  });
}
