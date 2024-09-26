import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">会社概要</h1>
      <Card>
        <CardContent>
          <table className="table-fixed w-full">
            <tbody>
              <tr>
                <td className="border px-4 py-2 w-1/3 font-bold">会社名</td>
                <td className="border px-4 py-2">株式会社めでぃかるえいど</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">設立</td>
                <td className="border px-4 py-2">2011年6月</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">代表取締役</td>
                <td className="border px-4 py-2">田中 豊</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">所在地</td>
                <td className="border px-4 py-2">〒651-0084 兵庫県神戸市中央区磯辺通4-2-26 新芙蓉ビル8F</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">資本金</td>
                <td className="border px-4 py-2">20,000,000円</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">従業員数</td>
                <td className="border px-4 py-2">50名</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">主要取引先</td>
                <td className="border px-4 py-2">北海道1院、東北1院、関東8院、東海1院、関西4院、中四国2院、九州1院</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">許可番号</td>
                <td className="border px-4 py-2">労働者派遣事業 許可番号 派 28-302112  有料職業紹介事業 許可番号 28-ユ-301258</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-8">
            医療機関向け経営支援サービス「Dr.Quest」を提供しております。医療機関の経営課題を解決いたします。
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
