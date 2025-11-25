import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Mail, Send } from 'lucide-react';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError(null); // Clear errors on input change
    setSuccess(null); // Clear success on input change
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setError('All fields are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // In a real application, you would send formData to an API
      console.log('Form submitted:', formData);
      setSuccess('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-gray-50 dark:to-gray-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="p-6 md:p-10 shadow-lg rounded-xl dark:bg-gray-800/50 bg-white/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <CardHeader className="text-center mb-8">
            <CardTitle className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center justify-center gap-3">
              <Mail className="h-10 w-10 text-primarylw" />
              Get in Touch
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind, a question, or just want to say hello? Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-lg mb-2 block font-medium text-gray-700 dark:text-gray-200">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primarylw focus:border-primarylw transition-all duration-200 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg mb-2 block font-medium text-gray-700 dark:text-gray-200">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primarylw focus:border-primarylw transition-all duration-200 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="text-lg mb-2 block font-medium text-gray-700 dark:text-gray-200">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry, Collaboration, etc."
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primarylw focus:border-primarylw transition-all duration-200 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg mb-2 block font-medium text-gray-700 dark:text-gray-200">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me more about your project or question..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primarylw focus:border-primarylw transition-all duration-200 dark:bg-gray-700 dark:text-white"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
              {success && (
                <p className="text-green-500 text-sm mt-2 text-center">{success}</p>
              )}

              <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 text-lg font-semibold rounded-full bg-primarylw text-white hover:bg-primarylw/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
