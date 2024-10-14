import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from '@emailjs/browser';

const Info = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white text-black">
      {/* Hero Section */}
      <div className="hero-section bg-cover bg-center py-16" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">月額10万円～で、年収2,000万円クラスの人材があなたの味方に！</h1>
          <p className="text-lg mb-8">トップクラスの人材を雇いたいけど、予算が厳しい...そんなお悩みを抱えるあなたに朗報です。</p>
          <button 
            className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-semibold"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            無料相談を申し込む
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-white">
          <CardContent className="p-6 text-black">
            <h3 className="text-xl font-semibold mb-4 text-black">なぜこの価格で実現可能なのか？</h3>
            <p className="text-black"><span className="font-bold" style={{ color: '#6FBA2C' }}>ヒトシゴトのアドバイザー制度</span>にあり！</p>
            <p className="text-black">必要な時だけ、必要な分だけのサポートを受けることが可能</p>
            <p className="font-bold mt-4 text-black">コストダウンの実現！</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="p-6 text-black">
            <h3 className="text-xl font-semibold mb-4 text-black">通常、役員や正社員を直接雇用する場合、相応の年収が発生します。</h3>
            <p className="mt-4 text-black">ですので、直接雇用する場合、高額な採用コストが発生します。</p>
            <p className="mt-4 font-bold text-black">以下、コストの面を見ていきましょう。</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 bg-white">
        <CardContent className="p-6 text-black">
          <h2 className="text-2xl font-semibold mb-4 text-black">年収1,000～2,000万円クラスの人材採用する場合の費用について</h2>
          <div className="mb-6 text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">1. 人材紹介サービス手数料</h3>
            <p className="text-black">紹介手数料の一般的な料金は理論年収の30～50%</p>
            <p className="text-black">年収1,000万円～2,000万円の場合、以下の費用が見込まれます。</p>
            <ul className="list-disc list-inside mt-2 text-black">
              <li className="text-black">30%の場合...300万円～600万円</li>
              <li className="text-black">50%の場合...500万円～1,000万円</li>
            </ul>
            <p className="text-sm mt-2 text-black">※現在は手数料が高騰傾向にあるため、さらに高額なコストがかかる場合あり。</p>
          </div>
          <div className="text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">2. その他コスト</h3>
            <p className="text-black">人材紹介手数料以外にも、以下の費用が追加で発生します。</p>
            <ul className="list-disc list-inside mt-2 text-black">
              <li className="text-black">採用担当者及び面接官の人件費</li>
              <li className="text-black">教育・トレーニングコスト</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-white">
        <CardContent className="p-6 text-black">
          <h2 className="text-2xl font-semibold mb-4 text-black">平均的な採用コストとの比較</h2>
          <p className="mb-4 text-black">正社員一人あたりの平均採用コスト：約103万円　　大企業の中途採用予算：約1640万円</p>
          <p className="text-sm mb-4 text-black">※2019年度の中途採用における平均コスト</p>
          <p className="text-black">一方で、<span className="font-bold" style={{ color: '#006CB8' }}>年収1,000万～2,000万円クラスの人材</span>を採用するには、これらの平均値を大幅に上回り、数百万～1,000万円以上のコストがかかることが一般的です。</p>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-black">なぜ<span className="font-bold" style={{ color: '#006CB8' }}>1,000万円～2,000万円クラスの人材</span>を導入したいのか？</h3>
          <ul className="list-disc list-inside text-black">
            <li className="text-black">企業がハイクラス人材を必要とする理由</li>
            <li className="text-black">1. 豊富な人脈</li>
            <li className="text-black">2. 深い知識</li>
            <li className="text-black">3. さまざまなノウハウ</li>
          </ul>
          <p className="mt-4 text-black">などを利用し、事業を強化・発展することにあります。実際には、その人材に常勤してもらう必要がない場合がほとんどで、必要な時に相談できるフレキシブルな体制のほうが合理的です。</p>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-white">
        <CardContent className="p-6 text-black">
          <h2 className="text-2xl font-semibold mb-4 text-black"><span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>がもたらす3つのメリット</h2>
          <div className="mb-6 text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">1. 【月額10万円～で得られる圧倒的なコストパフォーマンス】</h3>
            <p className="text-black"><span className="font-bold" style={{ color: '#6FBA2C' }}>年収1,000万円～2,000万円クラスの人材</span>を雇うには多額の人件費が必要です。ですが、弊社の<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー制度</span>なら、月額10万円～で同レベルの知識・スキルを享受できます。多くの企業様が通常の採用コストの50%以上の削減に成功しています。</p>
          </div>
          <div className="mb-6 text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">2. 【即戦力のプロフェッショナルがすぐに活躍】</h3>
            <p className="text-black">採用にかかる時間を待つ必要はありません。<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>は、あなたのビジネスのニーズに応じて即対応。オンラインミーティングやプロジェクト単位で柔軟にサポートでき、1ヶ月以内に具体的な成果を得られることがほとんどです。</p>
          </div>
          <div className="text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">3. 【人脈を活かしてビジネスチャンスを創出】</h3>
            <p className="text-black"><span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>は単なるアドバイスだけではなく、その豊富な人脈を活用してあなたのビジネスに新たなチャンスをもたらします。新規顧客の紹介やビジネスパートナーとのマッチングなど、ビジネスを飛躍的に成長させる機会を創出します。</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-white">
        <CardContent className="p-6 text-black">
          <h2 className="text-2xl font-semibold mb-4 text-black">事例紹介：導入企業の成功ストーリー</h2>
          <div className="mb-6 text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">【製造業C社】</h3>
            <p className="text-black">新規事業立ち上げを急いでいた<span className="font-bold" style={{ color: '#006CB8' }}>C社</span>は、プロジェクトマネージャーを探していましたが、適切な人材が見つからずに苦戦。そこで<span className="font-bold" style={{ color: '#6FBA2C' }}>ヒトシゴトのアドバイザー</span>を導入。1ヶ月でプロジェクトの市場分析と設計が完了し、前年比200%の売上増を達成しました。現在はその<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>を常勤役員として迎え入れ、事業拡大を続けています。</p>
          </div>
          <div className="text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">【スタートアップD社】</h3>
            <p className="text-black">海外展開を目指していた<span className="font-bold" style={{ color: '#006CB8' }}>スタートアップD社</span>。専門のマーケティング担当が確保できない中、<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>を導入。わずか3ヶ月で現地市場への進出戦略を策定し、初年度で売上が2倍に成長。<span className="font-bold" style={{ color: '#006CB8' }}>D社</span>は現在も<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>を非常勤役員として継続的にサポートを受け、さらなる成長を遂げています。</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-white">
        <CardContent className="p-6 text-black">
          <h2 className="text-2xl font-semibold mb-4 text-black">このような企業様におすすめです！</h2>
          <div className="mb-4 text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">1. 【高額な採用コストを削減したい企業様】</h3>
            <p className="text-black">採用費用や人件費の高騰に悩む<span className="font-bold" style={{ color: '#006CB8' }}>企業</span>には、<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー制度</span>が最適です。低コストで優秀な人材を必要な時だけ活用できるため、採用リスクを最小限に抑えつつ、確実な成果を狙えます。</p>
          </div>
          <div className="mb-4 text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">2. 【短期間で成果を出したい企業様】</h3>
            <p className="text-black">新規プロジェクトの立ち上げや、既存事業を加速させるタイミングで、即戦力が必要な場合に最適です。<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>は、あなたの**「今すぐ」**というニーズに応えます。</p>
          </div>
          <div className="mb-4 text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">3. 【外部の人脈を活用してビジネスを拡大したい企業様】</h3>
            <p className="text-black">内部リソースだけでは限界があり、新たなビジネスパートナーや顧客を開拓したい時に、<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>の持つ豊富な人脈が、ビジネスに新しい風を吹き込みます。</p>
          </div>
          <div className="text-black">
            <h3 className="text-xl font-semibold mb-2 text-black">4. 【<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>のブランド力を活用して、自社のブランディングを強化したい企業様】</h3>
            <p className="text-black"><span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>の実績や知名度は、自社の信頼性とブランド価値を大きく向上させます。トップクラスの<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>の名前が与える影響は大きく、そのブランド力を活用することで、ビジネスが次のステージへ進むチャンスが広がります。</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardContent className="p-6 text-center text-black">
          <h2 className="text-2xl font-semibold mb-4 text-black">まずは無料相談を！</h2>
          <p className="text-lg mb-4 text-black">弊社の<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>を導入して、あなたのビジネスを次のステージへ</p>
          <div className="bg-white text-black p-4 rounded-lg">
            <p className="mb-2 text-black">人材不足に悩む<span className="font-bold" style={{ color: '#006CB8' }}>企業</span>こそ、<span className="font-bold" style={{ color: '#6FBA2C' }}>ヒトシゴトのアドバイザー制度</span>が最適です。</p>
            <p className="mb-2 text-black">月額10万円～で、<span className="font-bold" style={{ color: '#6FBA2C' }}>年収2000万円クラスの人材</span>が、あなたの事業を飛躍させます。</p>
            <p className="text-black">まずは、あなたのビジネスに最適な<span className="font-bold" style={{ color: '#6FBA2C' }}>アドバイザー</span>を見つけるため、無料相談をお申し込みください。</p>
            <button 
              className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-semibold mt-4"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              無料相談を申し込む
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Info;
