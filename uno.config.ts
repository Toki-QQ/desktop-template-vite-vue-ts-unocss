import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  presetTagify,
} from "unocss";

// 参考文档：https://unocss.dev/guide/config-file
export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue}"],
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTagify(),
    presetIcons({
      collections: {
        "icon-park": () =>
          import("@iconify-json/icon-park/icons.json").then((i) => i.default),
      },
    }),
  ],
});
