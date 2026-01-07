import { Dictionary } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">{dict.contact.title}</CardTitle>
              <CardDescription>
                {dict.contact.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{dict.contact.form_name}</Label>
                  <Input id="name" placeholder={dict.contact.form_name_placeholder} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{dict.contact.form_phone}</Label>
                  <Input id="phone" type="tel" placeholder={dict.contact.form_phone_placeholder} />
                </div>
                <Button type="submit" className="w-full text-lg h-12">
                  {dict.contact.form_submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
