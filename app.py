#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
千字文学习 App 服务端

启动：python3 app.py
访问：http://localhost:8001
"""

import http.server
import json
import os
import socketserver
import urllib.parse
from pathlib import Path

PORT = 8001
APP_DIR = Path(__file__).parent

class AppHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(APP_DIR), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def do_GET(self):
        # 修复中文编码
        try:
            raw_path = self.path.encode('latin-1').decode('utf-8')
        except (UnicodeEncodeError, UnicodeDecodeError):
            raw_path = self.path

        parsed = urllib.parse.urlparse(raw_path)
        path = parsed.path

        if path == "/" or path == "/index.html":
            self._send_file(APP_DIR / "index.html", "text/html; charset=utf-8")
            return

        if path.startswith("/static/"):
            static_file = APP_DIR / path.lstrip("/")
            if static_file.exists() and static_file.is_file():
                ext = static_file.suffix.lower()
                content_type = {
                    ".css": "text/css; charset=utf-8",
                    ".js": "application/javascript; charset=utf-8",
                    ".png": "image/png",
                    ".jpg": "image/jpeg",
                    ".svg": "image/svg+xml",
                    ".woff2": "font/woff2",
                }.get(ext, "application/octet-stream")
                self._send_file(static_file, content_type)
                return

        self._send_text("Not Found", 404)

    def _send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _send_text(self, text, status=200, content_type="text/plain; charset=utf-8"):
        body = text.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _send_file(self, file_path, content_type):
        data = file_path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")


def main():
    print("=" * 50)
    print("  📖 千字文学习 App")
    print("=" * 50)
    print(f"  访问地址: http://localhost:{PORT}")
    print("  按 Ctrl+C 停止服务")
    print("=" * 50)

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), AppHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n服务已停止")


if __name__ == "__main__":
    main()
