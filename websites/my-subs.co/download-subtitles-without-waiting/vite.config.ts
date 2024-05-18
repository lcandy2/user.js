import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: "Download Subtitles without Waiting",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJNSURBVFiF5dZbaM9hGAfwz+a/nE2ojXJhF+ZQkgunqMkVKeeWEq5olFpyIS5cKJLDjRxujHazcqHUEtLUFHOBkoSEmCUhYc79Xbzv5k/bf7//YbnYt379np738Hzf5/C+DwMdJfFfhiWoRmkR93+Ji3iXjcBYXMJk3MW3IhkvxdRoYzlu9TbxNG5jXJEMZ6IMDXgki2c7UNsPxrswHmlM6WmwFJV43Y8EOuK/sjcC/xW5EEjhDI6gvJgk0qhJMK86zk2jHSuKYSMXDwzKkCfgPJqETM8bheZALar+F4GPqMPDQgikcpjbmSE3R+MvCjGeK4Fn2IT3uFCo4UwkrYKeMAG79X2QrFWQ9udVzBVzsA+NCUj0iBSeYBpaEq5ZhNlRni68nouFsryeZd06gTD8QhtaS7AL9diAq/iRZZMdOICb+Bp1D3EK+zE44SGGYG7cTwpHI6t0gq8uoZG+sBXtmbEvxwzZT3FFCME1zBSq4i1O4g3W4z7uoAIbcTDOm4cvgrceCEmZNOzd6MrmMfiEy9FgcxxvxZ4oL8XnKLcJYWvFUyHpa5DO9yYciWGCJ2qwNsGax7gh9AXdFZMvgefYjC3CidYkWLNaiPt3TCyUQIXQZFbhMA5FfSdGRHmUvytqL0YL3dfKLmVel4eQiI1CNz0V96K+CSeibiHOZaxZhVmYJDTBBRFoEnq9ZYInjkV9Az5EgjtxNuqPYz5+RiIt8rz+XwlxLAa2+eceSILtQszbhJrOF0OFa7k+n0dogeDi4QUQ+CyEIdvbMUDwG8Y/gAllrDkCAAAAAElFTkSuQmCC",
        copyright: "lcandy2 All Rights Reserved",
        namespace:
          "https://github.com/lcandy2/user.js/tree/main/websites/my-subs.co/download-subtitles-without-waiting",
        source:
          "https://github.com/lcandy2/user.js/tree/main/websites/my-subs.co/download-subtitles-without-waiting",
        match: ["*://my-subs.co/downloads/*"],
        "run-at": "document-end",
      },
    }),
  ],
});
