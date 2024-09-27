import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EMAILJS_VALUES = {
  serviceID: 'service_melpwjj',
  templateID: 'template_2bnv799',
  publicKey: 'iL6b1-lPIHzRCo4I1'
}

const CorporateRegistration = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAILJS_VALUES.serviceID, EMAILJS_VALUES.templateID, form.current, EMAILJS_VALUES.publicKey)
      .then((result) => {
        console.log('Message sent successfully!', result.text);
        // Handle success, e.g., show a success message
      }, (error) => {
        console.error('Error sending message:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">企業様登録</CardTitle>
        </CardHeader>
        <CardContent>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">企業名</label>
              <Input type="text" id="companyName" name="companyName" required />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">担当者</label>
              <Input type="text" id="contactPerson" name="contactPerson" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号</label>
              <Input type="tel" id="phone" name="phone" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">ホームページアドレス</label>
              <Input type="url" id="website" name="website" required />
            </div>
            <div>
              <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
              <Textarea id="inquiry" name="inquiry" rows={4} required />
            </div>
            <Button type="submit">登録する</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CorporateRegistration;