import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    webinar: '',
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      await fetch(
        'https://script.google.com/macros/s/AKfycbxS06Iom6OyCMSI4KJSLDwM46Zp5ZGAPeXyda8m1WQnn1idTXaevtIECR0NRLmFZe30/exec',
        {
          method: 'POST',
          body: formPayload,
          mode: 'no-cors',
        }
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', webinar: '' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full max-w-md"
    >
      <div className="gradient-border p-6 sm:p-8 glow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Get in Touch
          </h3>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            >
              <CheckCircle className="w-16 h-16 text-primary mb-4" />
            </motion.div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-2">
              Thank You!
            </h4>
            <p className="text-muted-foreground text-sm">
              We'll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Input
                placeholder=" Your Name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Input
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Select
                value={formData.webinar}
                onValueChange={(value) => setFormData({ ...formData, webinar: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Which webinar to join?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                  <SelectItem value="Video Editing">Video Editing</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                type="submit"
                variant="premium"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
