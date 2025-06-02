/**
 * Tailwind CSS配置文件
 * 
 * 功能：定义Tailwind CSS的行为和自定义配置
 * - 配置安全列表以支持动态类名生成
 * - 设置内容扫描范围
 * - 定义主题扩展
 */

import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // 颜色相关的动态类名
    { pattern: /bg-(blue|green|purple|orange|red)-(100|500|600)/ },
    { pattern: /text-(blue|green|purple|orange|red)-(600)/ },
    { pattern: /border-(blue|green|purple|orange|red)-(500)/ },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 