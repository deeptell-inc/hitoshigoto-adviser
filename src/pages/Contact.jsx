import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from '@emailjs/browser';

const EMAILJS_VALUES = {
  serviceID: 'service_melpwjj',
  templateID: 'template_2bnv799',
  publicKey: 'iL6b1-lPIHzRCo4I1'
}

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAILJS_VALUES.serviceID, EMAILJS_VALUES.templateID, form.current, EMAILJS_VALUES.publicKey)
      .then((result) => {
        console.log('Message sent successfully!', result.text);
        // Handle success, e.g., show a success message to the user
        e.target.reset(); 
      }, (error) => {
        console.error('Failed to send message:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">お問い合わせ</CardTitle>
        </CardHeader>
        <CardContent>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
              <Input type="text" id="name" name="from_name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <Input type="email" id="email" name="reply_to" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit">送信</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;