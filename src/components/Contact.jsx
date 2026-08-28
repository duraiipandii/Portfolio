import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Linkedin } from './Icons';
import { personalDetails } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-3d">Great Together</span>
          </h2>
          <p className="text-slate-400 text-base">
            Have a project in mind, a backend opportunity, or a technical inquiry? Drop me a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards in 3D (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy */}
            <Card3D maxRotation={8} scale={1.02}>
              <div className="p-6 rounded-2xl glass-3d-card flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 translate-z-20">
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <a 
                      href={`mailto:${personalDetails.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {personalDetails.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalDetails.email, 'email')}
                  className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-all translate-z-30 shadow-md"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </Card3D>

            {/* Phone Card with Copy */}
            <Card3D maxRotation={8} scale={1.02}>
              <div className="p-6 rounded-2xl glass-3d-card flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 translate-z-20">
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone Number</div>
                    <a 
                      href={`tel:${personalDetails.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors font-mono"
                    >
                      {personalDetails.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalDetails.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-all translate-z-30 shadow-md"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </Card3D>

            {/* Location Card */}
            <Card3D maxRotation={8} scale={1.02}>
              <div className="p-6 rounded-2xl glass-3d-card flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-md translate-z-20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="translate-z-20">
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {personalDetails.location}
                  </div>
                </div>
              </div>
            </Card3D>

            {/* LinkedIn Connect Card */}
            <Card3D maxRotation={8} scale={1.02}>
              <div className="p-6 rounded-2xl glass-3d-card flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 translate-z-20">
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-md">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      linkedin.com/in/duraipandi
                    </div>
                  </div>
                </div>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 transition-all translate-z-30 shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card3D>

          </div>

          {/* Right Column: 3D Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <Card3D maxRotation={10} scale={1.02}>
              <div className="p-8 sm:p-10 rounded-2xl glass-3d-card relative overflow-hidden">
                
                <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2 translate-z-20">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  Send a Direct Message
                </h3>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-3 animate-in fade-in duration-300 translate-z-20">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Thank you for reaching out!</h4>
                    <p className="text-sm text-slate-400">Your message has been logged. Durai Pandi will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 translate-z-30">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                      <input
                        type="text"
                        required
                        placeholder=".NET Backend Engineering Opportunity"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Hi Durai, I'd like to discuss a C#/.NET project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl btn-3d-cyan text-slate-950 font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}

              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
}
