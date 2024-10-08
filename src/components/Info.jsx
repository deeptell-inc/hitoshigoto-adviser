import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from '@emailjs/browser';

const Info = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <Card className="mb-8 bg-[#006CB8]">
        <CardContent className="p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white">月額10万円～で、年収2,000万円クラスの人材があなたの味方に！</h2>
          <p className="text-lg mb-4 text-white">「トップクラスの人材を雇いたいけど、予算が厳しい...」そんなお悩みを抱えるあなたに朗報です。</p>
          <p className="text-lg text-white">月額10万円～で年収1,000万円～2,000万円相当のスキルと経験を持つプロフェッショナルがあなたのビジネスを全力でサポートします。</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-[#006CB8]">
          <CardContent className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 text-white">なぜこの価格で実現可能なのか？</h3>
            <p className="text-white">ヒトシゴトのアドバイザー制度にあり！</p>
            <p className="text-white">必要な時だけ、必要な分だけのサポートを受けることが可能</p>
            <p className="font-bold mt-4 text-white">コストダウンの実現！</p>
          </CardContent>
        </Card>
        <Card className="bg-[#006CB8]">
          <CardContent className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-4 text-white">通常、役員や正社員を直接雇用する場合、相応の年収が発生します。</h3>
            <p className="mt-4 text-white">ですので、直接雇用する場合、高額な採用コストが発生します。</p>
            <p className="mt-4 font-bold text-white">以下、コストの面を見ていきましょう。</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 bg-[#006CB8]">
        <CardContent className="p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white">年収1,000～2,000万円クラスの人材採用する場合の費用について</h2>
          <div className="mb-6 text-white">
            <h3 className="text-xl font-semibold mb-2 text-white">1. 人材紹介サービス手数料</h3>
            <p className="text-white">紹介手数料の一般的な料金は理論年収の30～50%</p>
            <p className="text-white">年収1,000万円～2,000万円の場合、以下の費用が見込まれます。</p>
            <ul className="list-disc list-inside mt-2 text-white">
              <li className="text-white">30%の場合...300万円～600万円</li>
              <li className="text-white">50%の場合...500万円～1,000万円</li>
            </ul>
            <p className="text-sm mt-2 text-white">※現在は手数料が高騰傾向にあるため、さらに高額なコストがかかる場合あり。</p>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-2 text-white">2. その他コスト</h3>
            <p className="text-white">人材紹介手数料以外にも、以下の費用が追加で発生します。</p>
            <ul className="list-disc list-inside mt-2 text-white">
              <li className="text-white">採用担当者及び面接官の人件費</li>
              <li className="text-white">教育・トレーニングコスト</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-[#006CB8]">
        <CardContent className="p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white">平均的な採用コストとの比較</h2>
          <p className="mb-4 text-white">正社員一人あたりの平均採用コスト：約103万円　　大企業の中途採用予算：約1640万円</p>
          <p className="text-sm mb-4 text-white">※2019年度の中途採用における平均コスト</p>
          <p className="text-white">一方で、年収1,000万～2,000万円クラスの人材を採用するには、これらの平均値を大幅に上回り、数百万～1,000万円以上のコストがかかることが一般的です。</p>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-white">なぜ1,000万円～2,000万円クラスの人材を導入したいのか？</h3>
          <ul className="list-disc list-inside text-white">
            <li className="text-white">企業がハイクラス人材を必要とする理由</li>
            <li className="text-white">1. 豊富な人脈</li>
            <li className="text-white">2. 深い知識</li>
            <li className="text-white">3. さまざまなノウハウ</li>
          </ul>
          <p className="mt-4 text-white">などを利用し、事業を強化・発展することにあります。実際には、その人材に常勤してもらう必要がない場合がほとんどで、必要な時に相談できるフレキシブルな体制のほうが合理的です。</p>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-[#6FBA2C]">
        <CardContent className="p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white">アドバイザーがもたらす3つのメリット</h2>
          <div className="mb-6 text-white">
            <h3 className="text-xl font-semibold mb-2 text-white">1. 【月額10万円～で得られる圧倒的なコストパフォーマンス】</h3>
            <p className="text-white">年収1,000万円～2,000万円クラスの人材を雇うには多額の人件費が必要です。ですが、弊社のアドバイザー制度なら、月額10万円～で同レベルの知識・スキルを享受できます。多くの企業様が通常の採用コストの50%以上の削減に成功しています。</p>
          </div>
          <div className="mb-6 text-white">
            <h3 className="text-xl font-semibold mb-2 text-white">2. 【即戦力のプロフェッショナルがすぐに活躍】</h3>
            <p className="text-white">採用にかかる時間を待つ必要はありません。アドバイザーは、あなたのビジネスのニーズに応じて即対応。オンラインミーティングやプロジェクト単位で柔軟にサポートでき、1ヶ月以内に具体的な成果を得られることがほとんどです。</p>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-2 text-white">3. 【人脈を活かしてビジネスチャンスを創出】</h3>
            <p className="text-white">アドバイザーは単なるアドバイスだけではなく、その豊富な人脈を活用してあなたのビジネスに新たなチャンスをもたらします。新規顧客の紹介やビジネスパートナーとのマッチングなど、ビジネスを飛躍的に成長させる機会を創出します。</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-[#006CB8]">
        <CardContent className="p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white">事例紹介：導入企業の成功ストーリー</h2>
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

      <Card className="mb-8 bg-[#6FBA2C]">
        <CardContent className="p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white">このような企業様におすすめです！</h2>
          <div className="mb-4 text-white">
            <h3 className="text-xl font-semibold mb-2 text-white">1. 【高額な採用コストを削減したい企業様】</h3>
            <p className="text-white">採用費用や人件費の高騰に悩む企業には、アドバイザー制度が最適です。低コストで優秀な人材を必要な時だけ活用できるため、採用リスクを最小限に抑えつつ、確実な成果を狙えます。</p>
          </div>
          <div className="mb-4 text-white">
            <h3 className="text-xl font-semibold mb-2 text-white">2. 【短期間で成果を出したい企業様】</h3>
            <p className="text-white">新規プロジェクトの立ち上げや、既存事業を加速させるタイミングで、即戦力が必要な場合に最適です。アドバイザーは、あなたの**「今すぐ」**というニーズに応えます。</p>
          </div>
          <div className="mb-4 text-white">
            <h3 className="text-xl font-semibold mb-2 text-white">3. 【外部の人脈を活用してビジネスを拡大したい企業様】</h3>
            <p className="text-white">内部リソースだけでは限界があり、新たなビジネスパートナーや顧客を開拓したい時に、アドバイザーの持つ豊富な人脈が、ビジネスに新しい風を吹き込みます。</p>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-2 text-white">4. 【アドバイザーのブランド力を活用して、自社のブランディングを強化したい企業様】</h3>
            <p className="text-white">アドバイザーの実績や知名度は、自社の信頼性とブランド価値を大きく向上させます。トップクラスのアドバイザーの名前が与える影響は大きく、そのブランド力を活用することで、ビジネスが次のステージへ進むチャンスが広がります。</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#006CB8]">
        <CardContent className="p-6 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white">まずは無料相談を！</h2>
          <p className="text-lg mb-4 text-white">弊社のアドバイザーを導入して、あなたのビジネスを次のステージへ</p>
          <div className="bg-[#006CB8] text-white p-4 rounded-lg">
            <p className="mb-2 text-white">人材不足に悩む企業こそ、ヒトシゴトのアドバイザー制度が最適です。</p>
            <p className="mb-2 text-white">月額10万円～で、年収2000万円クラスの人材が、あなたの事業を飛躍させます。</p>
            <p className="text-white">まずは、あなたのビジネスに最適なアドバイザーを見つけるため、無料相談をお申し込みください。</p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-white">
        <img src="/placeholder.svg" alt="ヒトシゴト" className="inline-block h-12" />
        <p className="mt-4 text-white">株式会社めいかるえいど　ヒトシゴト事業部</p>
        <p className="text-white">〒651-0084　神戸市中央区磯辺通4-2-26　新芙蓉ビル8F</p>
      </div>
    </div>
  );
};

export default Info;