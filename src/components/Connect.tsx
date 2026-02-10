import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

interface ConnectProps {
  scrollTo?: string;
}
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';

// Initialize EmailJS - Replace with your credentials from emailjs.com
const EMAILJS_PUBLIC_KEY = '3DfY7yFhgs13OI9bA';
const EMAILJS_SERVICE_ID = 'service_6bjtfzv';
const EMAILJS_TEMPLATE_ID = 'template_ghdq5hz';

const Connect: React.FC<ConnectProps> = ({ scrollTo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  // Initialize EmailJS on component mount
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate that EmailJS is configured
    if (
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' ||
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID_HERE' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE'
    ) {
      setMessage('⚠️ Email service not configured. Please set up EmailJS credentials.');
      setMessageType('error');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Send email using EmailJS
      const currentTime = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: currentTime,
        }
      );

      setMessage('✅ Message sent successfully! I\'ll get back to you soon.');
      setMessageType('success');

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
    } catch (error: any) {
      console.error('Error sending email:', error);
      console.error('Full Error Object:', error);
      console.error('Error status:', error?.status);
      console.error('Error text:', error?.text);
      console.error('Error message:', error?.message);
      console.error('Sent data:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: 'current time'
      });
      setMessage('❌ Failed to send message. Please try again or contact me directly.');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jeremy@teksoft.co.ke',
      link: 'mailto:jeremy@teksoft.co.ke'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 115000514',
      link: 'tel:+254700000000'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourprofile',
      handle: '@jeremybravoge'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Jeremybravoge',
      handle: '@jeremybravoge'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/jeremybravoge',
      handle: '@jeremybravoge'
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks'
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile solutions'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure & deployment'
    },
    {
      title: 'Tech Consulting',
      description: 'Strategic technology guidance & planning'
    }
  ];

  return (
    <div id="connect" className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-3">Let's Work Together</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Get in touch and let's discuss your next project.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Info & Socials */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Info */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-2">teksoft.co.ke</h2>
              <p className="text-gray-400 mb-6">
                Professional software development and tech solutions based in Kenya.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                        <div className="text-sm text-white font-medium">{item.value}</div>
                      </div>
                    </div>
                  );

                  return item.link ? (
                    <a key={index} href={item.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-6">What I Offer</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="border-l-2 border-blue-600 pl-4">
                    <h4 className="text-sm font-semibold text-white mb-1">{service.title}</h4>
                    <p className="text-xs text-gray-400">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        <div>
                          <div className="text-sm font-medium text-white">{social.name}</div>
                          <div className="text-xs text-gray-400">{social.handle}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Jeremy Bravoge"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="codemaster@gmail.com"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group ${
                    isLoading
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                  <Send className={`w-4 h-4 ${!isLoading ? 'group-hover:translate-x-1' : ''} transition-transform`} />
                </button>

                {/* Status Message */}
                {message && (
                  <div
                    className={`p-4 rounded-lg text-center font-medium transition-all ${
                      messageType === 'success'
                        ? 'bg-green-900/30 text-green-400 border border-green-700'
                        : 'bg-red-900/30 text-red-400 border border-red-700'
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
                  Typically responds within 24 hours • Available for freelance projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;