import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall } from 'lucide-react';
import SimpleContactForm from '../components/SimpleContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHandshake, faBriefcase, faStar, faChartBar, faLock, faFileSignature, faGlobe, faBook, faLightbulb, faChartLine, faRobot  } from '@fortawesome/free-solid-svg-icons';
import AdvisorAppeal from './AdvisorAppeal';
import ClientAppeal from './ClientAppeal';
import Diagram from '../components/Diagram';
import Info from '../components/Info';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <img src="/advisors.png" alt="Advisors" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-70 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-extrabold mb-4 text-center">経営アドバイザーの力を引き出し、<br />事業拡大・改善をサポート</h1>
          <p className="text-xl mb-8 text-center">ヒトシゴトは、企業と人材をマッチングする革新的な人材紹介サービスです。</p>
          <div className="flex space-x-4">
            <Link to="/job-seeker-registration">
              <Button className="bg-[#6FBA2C] text-white text-lg px-8 py-4 rounded-full shadow-lg hover:bg-[#5aa024] transition duration-300">アドバイザーに登録</Button>
            </Link>
            <Link to="/corporate-registration">
              <Button className="bg-[#006CB8] text-white text-lg px-8 py-4 rounded-full shadow-lg hover:bg-[#005a94] transition duration-300">アドバイザーを探す</Button>
            </Link>
          </div>
        </div>
      </div>
      <main className="container mx-auto mt-12 px-4">
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">サービスの特徴</h2>
          <Diagram />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: faUsers, title: "豊富な人材" },
              { icon: faHandshake, title: "マッチング" },
              { icon: faBriefcase, title: "経験豊富" },
              { icon: faStar, title: "高品質" },
              { icon: faChartBar, title: "データ分析" },
              { icon: faLock, title: "セキュリティ" },
              { icon: faFileSignature, title: "契約サポート" },
              { icon: faGlobe, title: "グローバル" },
              { icon: faBook, title: "教育支援" },
              { icon: faLightbulb, title: "イノベーション" },
              { icon: faChartLine, title: "成長支援" },
              { icon: faRobot, title: "AI活用" },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-700">{feature.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">アドバイザーに登録したい方</h3>
                <p className="mb-6 text-gray-600">あなたの経験とスキルを活かして、企業の成長をサポートしませんか？</p>
                <Link to="/job-seeker-registration">
                  <Button className="bg-[#6FBA2C] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#5aa024] transition duration-300">アドバイザーに登録</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">アドバイザーをお探しの方</h3>
                <p className="mb-6 text-gray-600">経営課題の解決に向けて、最適なアドバイザーをご紹介します。</p>
                <Link to="/corporate-registration">
                  <Button className="bg-[#006CB8] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#005a94] transition duration-300">アドバイザーを探す</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <AdvisorAppeal />

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">アドバイザー紹介</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "谷前　太喜", role: "AI技術顧問", image: "/tanimae.png" },
              { name: "杉本　迅", role: "AI技術顧問", image: "/sugimoto.png" },
            ].map((advisor, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <img src={advisor.image} alt={advisor.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-md" />
                  <h3 className="font-semibold text-xl text-gray-800">{advisor.name}</h3>
                  <p className="text-gray-600">{advisor.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/alliances">
              <Button className="bg-[#006CB8] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#005a94] transition duration-300">アドバイザー一覧を見る</Button>
            </Link>
          </div>
        </section>

        <ClientAppeal />
        <Info />

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">お問い合わせ</h2>
          <SimpleContactForm />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">ヒトシゴト</h3>
              <p className="text-gray-400">革新的な人材紹介サービスを提供</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul>
                <li><Link to="/services" className="hover:text-blue-300">アドバイザー紹介</Link></li>
                <li><Link to="/services" className="hover:text-blue-300">人材紹介</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul>
                <li><Link to="/about" className="hover:text-blue-300">会社概要</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">法的情報</h4>
              <ul>
                <li><Link to="/privacy-policy" className="hover:text-blue-300">プライバシーポリシー</Link></li>
                <li><Link to="/terms" className="hover:text-blue-300">利用規約</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500">&copy; 2024 ヒトシゴト All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
