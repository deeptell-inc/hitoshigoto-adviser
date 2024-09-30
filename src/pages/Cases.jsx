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
  const cases = [
    { title: "事例1", content: "事例1の詳細内容..." },
    { title: "事例2", content: "事例2の詳細内容..." },
    { title: "事例3", content: "事例3の詳細内容..." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">事例一覧</h1>
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
      </section>
    </div>
  );
};

export default Cases;