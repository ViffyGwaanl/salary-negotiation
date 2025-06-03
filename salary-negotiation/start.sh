#!/bin/zsh

# GAINS 薪酬谈判策略工具一键启动脚本

# 切换到项目目录
cd "$(dirname "$0")"

echo "正在启动 GAINS 薪酬谈判策略工具..."

# 检查node_modules是否存在
if [ ! -d "node_modules" ]; then
  echo "首次运行，正在安装依赖..."
  npm install
  if [ $? -ne 0 ]; then
    echo "依赖安装失败，请检查错误并手动运行 npm install"
    exit 1
  fi
  echo "依赖安装成功！"
fi

# 启动开发服务器
echo "正在启动开发服务器..."
npm run dev &

# 等待服务器启动
sleep 3

# 尝试打开浏览器（macOS）
echo "正在打开浏览器..."
open http://localhost:3000

echo "GAINS 薪酬谈判策略工具已启动！"
echo "请访问: http://localhost:3000" 