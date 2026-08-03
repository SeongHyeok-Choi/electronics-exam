import http.server
import socketserver
import os
import sys
import subprocess
import time

PORT = 8080

class CustomTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    print("\n" + "=" * 70)
    print(" [전자기사 PWA 웹 애플리케이션 개발 서버]")
    print("=" * 70)
    print(f" PC 접속 주소 : http://localhost:{PORT}")
    print("=" * 70 + "\n")

    try:
        with CustomTCPServer(("0.0.0.0", PORT), Handler) as httpd:
            httpd.serve_forever()
    except Exception as e:
        print(f"127.0.0.1 바인딩 시도... {e}")
        with CustomTCPServer(("127.0.0.1", PORT), Handler) as httpd:
            httpd.serve_forever()
