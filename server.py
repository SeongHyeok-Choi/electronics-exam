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
    print(" 🚀 전자기사 800제 어디서나 (외부 접속 지원) 서버")
    print("=" * 70)
    print(f" 💻 PC 접속 주소 : http://localhost:{PORT}")
    print("=" * 70)
    print(" 💡 [외부 접속 방법 가이드]")
    print(" 1) 이 디렉토리 전체를 GitHub 레포지토리에 올리고 'GitHub Pages'를 켜면")
    print("    무료 전용 웹 링크가 생겨 버스/회사/집 어디서든 접속 가능합니다!")
    print(" 2) 또는 무료 호스팅 Vercel/Netlify에 올리면 1분 만에 24시간 접속 가능!")
    print("=" * 70 + "\n")

    try:
        with CustomTCPServer(("0.0.0.0", PORT), Handler) as httpd:
            httpd.serve_forever()
    except Exception as e:
        print(f"127.0.0.1 바인딩 시도... {e}")
        with CustomTCPServer(("127.0.0.1", PORT), Handler) as httpd:
            httpd.serve_forever()
