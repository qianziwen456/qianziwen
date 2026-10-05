#!/bin/bash
# ============================================
# 千字文学习 App - 云端一键部署脚本
# 使用方法：在云服务器上执行 bash deploy.sh
# ============================================

set -e

APP_NAME="千字文学习"
INSTALL_DIR="/opt/qianziwen"
PORT=8001

echo "============================================"
echo "  📖 千字文学习 App 云端部署脚本"
echo "============================================"
echo ""

# 1. 检查是否是 root 用户
if [ "$EUID" -ne 0 ]; then
    echo "❌ 请使用 root 用户运行此脚本（或加 sudo）"
    exit 1
fi

# 2. 检查 Python3
echo "🔍 检查 Python3 环境..."
if command -v python3 &> /dev/null; then
    echo "   ✅ Python3 已安装: $(python3 --version)"
else
    echo "   ⚙️  正在安装 Python3..."
    if command -v apt-get &> /dev/null; then
        apt-get update && apt-get install -y python3
    elif command -v yum &> /dev/null; then
        yum install -y python3
    else
        echo "   ❌ 无法自动安装 Python3，请手动安装"
        exit 1
    fi
    echo "   ✅ Python3 安装完成"
fi

# 3. 创建安装目录
echo ""
echo "📁 创建安装目录: $INSTALL_DIR"
mkdir -p "$INSTALL_DIR"

# 4. 复制应用文件
echo "📋 复制应用文件..."
# 获取脚本所在目录（应用根目录）
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(dirname "$SCRIPT_DIR")"

cp -r "$APP_DIR"/* "$INSTALL_DIR/"
# 排除 deploy 目录本身
rm -rf "$INSTALL_DIR/deploy"
echo "   ✅ 文件复制完成"

# 5. 安装 systemd 服务
echo ""
echo "⚙️  配置开机自启服务..."
cp "$SCRIPT_DIR/qianziwen.service" /etc/systemd/system/qianziwen.service
systemctl daemon-reload
systemctl enable qianziwen
systemctl restart qianziwen
echo "   ✅ 服务已配置并启动"

# 6. 开放防火墙端口
echo ""
echo "🔥 配置防火墙（开放端口 $PORT）..."
if command -v firewall-cmd &> /dev/null; then
    firewall-cmd --permanent --add-port=$PORT/tcp 2>/dev/null || true
    firewall-cmd --reload 2>/dev/null || true
    echo "   ✅ firewalld 已开放端口 $PORT"
elif command -v ufw &> /dev/null; then
    ufw allow $PORT/tcp 2>/dev/null || true
    echo "   ✅ ufw 已开放端口 $PORT"
else
    echo "   ⚠️  未检测到防火墙，请手动在云服务商控制台开放端口 $PORT"
fi

# 7. 获取服务器 IP
SERVER_IP=$(curl -s ifconfig.me 2>/dev/null || hostname -I | awk '{print $1}')

echo ""
echo "============================================"
echo "  ✅ 部署完成！"
echo "============================================"
echo ""
echo "  🌐 访问地址: http://$SERVER_IP:$PORT"
echo ""
echo "  📋 常用命令："
echo "     查看状态: systemctl status qianziwen"
echo "     查看日志: journalctl -u qianziwen -f"
echo "     重启服务: systemctl restart qianziwen"
echo "     停止服务: systemctl stop qianziwen"
echo ""
echo "  ⚠️  如果无法访问，请检查："
echo "     1. 云服务商控制台的安全组是否开放了 $PORT 端口"
echo "     2. 服务器防火墙是否放行 $PORT 端口"
echo "============================================"
