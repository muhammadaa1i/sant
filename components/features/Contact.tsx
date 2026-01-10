'use client';

import { Dictionary } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export default function Contact({ dict }: { dict: Dictionary }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', comment: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto" data-aos="fade-up">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">{dict.contact.title}</CardTitle>
              <CardDescription>
                {dict.contact.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{dict.contact.form_name}</Label>
                  <Input 
                    id="name" 
                    placeholder={dict.contact.form_name_placeholder}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{dict.contact.form_phone}</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder={dict.contact.form_phone_placeholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">{dict.contact.form_comment}</Label>
                  <Textarea 
                    id="comment" 
                    placeholder={dict.contact.form_comment_placeholder}
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    rows={4}
                  />
                </div>
                {status === 'success' && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-md">
                    {dict.contact.form_success}
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-md">
                    {dict.contact.form_error}
                  </div>
                )}
                <Button 
                  type="submit" 
                  className="w-full text-lg h-12"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? dict.contact.form_sending : dict.contact.form_submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
