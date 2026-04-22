'use client';

import { Dictionary } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact({ dict, lang }: { dict: Dictionary, lang: string }) {
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
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0B1221] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[100px] hidden lg:block"></div>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <h4 className="text-sm font-semibold tracking-wider text-primary uppercase">
              {dict.contact.section_label}
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
              {dict.contact.section_title}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-md">
              {dict.contact.description}
            </p>
          </div>

          <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-xl ring-1 ring-border/50" data-aos="fade-left" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-8 text-foreground">{dict.contact.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">{dict.contact.form_name}</Label>
                <Input 
                  id="name" 
                  placeholder={dict.contact.form_name_placeholder}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-14 bg-muted/50 border-transparent focus-visible:bg-background focus-visible:ring-primary rounded-xl text-base px-5"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">{dict.contact.form_phone}</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder={dict.contact.form_phone_placeholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="h-14 bg-muted/50 border-transparent focus-visible:bg-background focus-visible:ring-primary rounded-xl text-base px-5"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="comment" className="text-sm font-medium text-muted-foreground">{dict.contact.form_comment}</Label>
                <Textarea 
                  id="comment" 
                  placeholder={dict.contact.form_comment_placeholder}
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  className="min-h-30 bg-muted/50 border-transparent focus-visible:bg-background focus-visible:ring-primary rounded-xl text-base px-5 py-4 resize-none"
                />
              </div>
              
              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                  {dict.contact.form_success}
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                  {dict.contact.form_error}
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full h-14 text-lg rounded-xl flex items-center justify-center gap-2 group transition-all"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? dict.contact.form_sending : dict.contact.form_submit}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
