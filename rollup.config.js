import { babel } from "@rollup/plugin-babel";

const config = {
  input: "index.js",
  output: {
    dir: "dist",
    format: "umd",
    globals: {
      react: "React",
    },
    name: "TimePicker",
  },
  plugins: [babel({ babelHelpers: "bundled" })],
};

export default config;
