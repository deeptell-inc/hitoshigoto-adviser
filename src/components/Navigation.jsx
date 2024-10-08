import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初期状態を設定

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white border-b border-solid border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <img src="/logo.png" alt="ヒトシゴト" className="h-16" />
          </Link>
          <div className="flex items-center">
            {/* PC用のメニュー */}
            <ul className="hidden md:flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  事例
                </Link>
              </li>
              <li>
                <Link
                  to="/job-seeker-registration"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  style={{ color: '#6FBA2C' }}
                >
                  アドバイザー登録
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate-registration"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  style={{ color: '#006CB8' }}
                >
                  企業様登録
                </Link>
              </li>
              <li>
                <Link
                  to="/alliance"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  アライアンス
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>

            {/* ハンバーガーメニュー */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    // メニューが開いている場合は×印を表示
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    // メニューが閉じている場合はハンバーガーアイコンを表示
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="py-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link
                to="/cases"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                事例
              </Link>
            </li>
            <li>
              <Link
                to="/job-seeker-registration"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                style={{ color: '#6FBA2C' }}
              >
                アドバイザー登録
              </Link>
            </li>
            <li>
              <Link
                to="/corporate-registration"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                style={{ color: '#006CB8' }}
              >
                企業様登録
              </Link>
            </li>
            <li>
              <Link
                to="/alliance"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                アライアンス
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                会社概要
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
