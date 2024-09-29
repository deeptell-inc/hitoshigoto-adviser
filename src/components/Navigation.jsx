import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-solid border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <img src="/logo.png" alt="ヒトシゴト" className="h-16" />
          </Link>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">ホーム</Link></li>
            <li><Link to="/cases" className="text-gray-600 hover:text-blue-600 transition-colors">事例</Link></li>
            <li><Link to="/job-seeker-registration" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ color: '#6FBA2C' }}>アドバイザー登録</Link></li>
            <li><Link to="/corporate-registration" className="text-gray-600 hover:text-blue-600 transition-colors" style={{ color: '#006CB8' }}>企業様登録</Link></li>
            <li><Link to="/alliance" className="text-gray-600 hover:text-blue-600 transition-colors">アライアンス</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">会社概要</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
