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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <img src="/advisors.png" alt="Advisors" className="w-full h-full object-cover" />
      <main className="container mx-auto mt-8 px-4">
      
        <section className="mb-16">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">経営アドバイザーの力を引き出し、<br />事業拡大・改善をサポート</h2>
              <p className="text-lg mb-8">ヒトシゴトは、企業と人材をマッチングする革新的な人材紹介サービスです。</p>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/job-seeker-registration">
                  <Button className="bg-[#6FBA2C] text-white">アドバイザーに登録</Button>
                </Link>
                <Link to="/corporate-registration">
                  <Button className="bg-[#006CB8] text-white">アドバイザーを探す</Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="/advisor_sample_1.png" alt="Advisor 1" className="w-full h-full object-cover" />
              <img src="/advisor_sample_2.png" alt="Advisor 2" className="w-full h-full object-cover" />
              <img src="/advisor_sample_3.png" alt="Advisor 3" className="w-full h-full object-cover" />
              <img src="/advisor_sample_4.png" alt="Advisor 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">サービスの特徴</h2>
          <img src="/service.png" alt="Advisors" className="w-full h-full object-cover" />
          <div className="grid grid-cols-4 gap-8">
            {[
              { icon: "fa-users", title: "豊富な人材" },
              { icon: "fa-handshake", title: "マッチング" },
              { icon: "fa-briefcase", title: "経験豊富" },
              { icon: "fa-star", title: "高品質" },
              { icon: "fa-chart-bar", title: "データ分析" },
              { icon: "fa-lock", title: "セキュリティ" },
              { icon: "fa-file-signature", title: "契約サポート" },
              { icon: "fa-globe", title: "グローバル" },
              { icon: "fa-book", title: "教育支援" },
              { icon: "fa-lightbulb", title: "イノベーション" },
              { icon: "fa-chart-line", title: "成長支援" },
              { icon: "fa-robot", title: "AI活用" },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-2"><i className={`fas ${feature.icon}`}></i></div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <AdvisorAppeal />
        <ClientAppeal />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">アドバイザー紹介</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: "谷前　太喜", role: "AI技術顧問", image: "/tanimae.png" },
              { name: "杉本　迅", role: "AI技術顧問", image: "/sugimoto.png" },
            ].map((advisor, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <img src={advisor.image} alt={advisor.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="font-semibold">{advisor.name}</h3>
                  <p className="text-gray-600">{advisor.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/cases">
              <Button>アドバイザー一覧を見る</Button>
            </Link>
          </div>
        </section>

        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">事例紹介</h2>
          <div className="grid grid-cols-2 gap-8">
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">経営課題を解決したい</h3>
                <p>経営課題の解決に向けて、専門家のアドバイスを受けられます。</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">新規事業を立ち上げたい</h3>
                <p>新規事業の立ち上げに関する戦略立案や実行支援を行います。</p>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">実績紹介</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">国内最大の経営者データベース</h3>
              <p className="text-lg mb-4">30,000名超の経営者データを保有しています。</p>
            </div>
            <div>
              <img src="/database-image.jpg" alt="Database" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section> */}

        <section className="mb-16">
          <div className="grid grid-cols-2 gap-8">
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">アドバイザーに登録したい方</h3>
                <p className="mb-4">あなたの経験とスキルを活かして、企業の成長をサポートしませんか？</p>
                <Button className="bg-[#6FBA2C] text-white">アドバイザーに登録</Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">アドバイザーをお探しの方</h3>
                <p className="mb-4">経営課題の解決に向けて、最適なアドバイザーをご紹介します。</p>
                <Button className="bg-[#006CB8] text-white">アドバイザーを探す</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
          <SimpleContactForm />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ヒトシゴト</h3>
              <p>革新的な人材紹介サービスを提供</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">サービス</h4>
              <ul>
                <li><Link to="/services" className="hover:text-blue-300">アドバイザー紹介</Link></li>
                <li><Link to="/services" className="hover:text-blue-300">人材紹介</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">会社情報</h4>
              <ul>
                <li><Link to="/about" className="hover:text-blue-300">会社概要</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">法的情報</h4>
              <ul>
                <li><Link to="/privacy-policy" className="hover:text-blue-300">プライバシーポリシー</Link></li>
                <li><Link to="/terms" className="hover:text-blue-300">利用規約</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 ヒトシゴト All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
