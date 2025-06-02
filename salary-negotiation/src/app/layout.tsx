/**
 * 应用布局组件
 * 
 * 功能：定义应用的整体布局结构
 * - 设置HTML元数据
 * - 引入全局样式
 * - 定义基本布局结构
 */

import "./globals.css";

export const metadata = {
  title: "GAINS 薪酬谈判策略工具",
  description: "系统化提升你的谈判能力，创造非凡职业机会",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
