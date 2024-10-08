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

const Cases = () => {
  return ( 
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">事例一覧</h1>
      <Card className="mb-8 bg-[#006CB8]">
         <CardContent className="p-6 text-white">
           <div className="mb-6 text-white">
             <h3 className="text-xl font-semibold mb-2 text-white">【製造業C社】</h3>
             <p className="text-white">新規事業立ち上げを急いでいたC社は、プロジェクトマネージャーを探していましたが、適切な人材が見つからずに苦戦。そこでヒトシゴトのアドバイザーを導入。1ヶ月でプロジェクトの市場分析と設計が完了し、前年比200%の売上増を達成しました。現在はそのアドバイザーを常勤役員として迎え入れ、事業拡大を続けています。</p>
           </div>
           <div className="text-white">
             <h3 className="text-xl font-semibold mb-2 text-white">【スタートアップD社】</h3>
             <p className="text-white">海外展開を目指していたスタートアップD社。専門のマーケティング担当が確保できない中、アドバイザーを導入。わずか3ヶ月で現地市場への進出戦略を策定し、初年度で売上が2倍に成長。D社は現在もアドバイザーを非常勤役員として継続的にサポートを受け、さらなる成長を遂げています。</p>
           </div>
         </CardContent>
       </Card>
    </div>
  );
};

export default Cases;
