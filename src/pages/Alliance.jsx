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

const Alliance = () => {
  const advisors = [
    { name: "谷前　太喜", role: "AI技術顧問", image: "/tanimae.png" },
    { name: "杉本　迅", role: "AI技術顧問", image: "/sugimoto.png" },
  ];

  const clients = [

  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">事例一覧</h1>
      <Card className="bg-white text-black">
        <CardContent className="py-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">アドバイザー</h2>
            <div className="grid grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <Card key={index} className="bg-white text-black">
                  <CardContent className="p-4 text-center">
                    <img src={advisor.image} alt={advisor.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                    <h3 className="font-semibold">{advisor.name}</h3>
                    <p className="text-gray-600">{advisor.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
      <Card className="my-8 bg-white text-black">
        <CardContent className="py-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">企業様</h2>
            <div className="grid grid-cols-3 gap-8">
              {clients.map((client, index) => (
                <Card key={index} className="bg-white text-black">
                  <CardContent className="p-4 text-center">
                    <img src={client.image} alt={client.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                    <h3 className="font-semibold">{client.name}</h3>
                    <p className="text-gray-600">{client.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alliance;
