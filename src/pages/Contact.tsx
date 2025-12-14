import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Clock } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import ScrambledText from "../components/ScrambledText";
import { TypingAnimation } from "../components/TypingAnimation";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-full p-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-elegant-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-elegant-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            <ScrambledText>Get In Touch</ScrambledText>
          </h1>
          <p className="text-lg">
            <ScrambledText>Let's create something together</ScrambledText>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-vscode-sidebar p-8 rounded-lg border border-elegant-purple/30">
            <h2 className="text-2xl font-semibold mb-6">
              <span className="bg-pink-600">Send Me a Message</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-vscode-text mb-2">
                  <span className="bg-blue-600">Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-vscode-bg border border-elegant-purple/30 rounded-lg focus:border-elegant-purple focus:outline-none focus:shadow-lg focus:shadow-elegant-purple/20 text-vscode-text transition-all"
                  placeholder="George Yao"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-vscode-text mb-2">
                  <span className="bg-blue-600">Your Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-vscode-bg border border-elegant-purple/30 rounded-lg focus:border-elegant-purple focus:outline-none focus:shadow-lg focus:shadow-elegant-purple/20 text-vscode-text transition-all"
                  placeholder="ziyech@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-vscode-text mb-2">
                  <span className="bg-blue-600">Your Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-vscode-bg border border-elegant-purple/30 rounded-lg focus:border-elegant-purple focus:outline-none focus:shadow-lg focus:shadow-elegant-purple/20 text-vscode-text transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-elegant-purple via-elegant-pink to-elegant-blue text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-elegant-purple/30 transition-all transform hover:scale-105">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Social Links */}
            <div className="bg-vscode-sidebar p-8 rounded-lg border border-elegant-blue/30">
              <h2 className="text-2xl font-semibold mb-6">
                <span className="bg-blue-600">Connect With Me</span>
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:disurya.one@gmail.com"
                  className="flex items-center gap-4 p-4 bg-vscode-bg rounded-lg border border-elegant-pink/30 hover:border-elegant-pink hover:shadow-lg hover:shadow-elegant-pink/20 transition-all group">
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="text-vscode-text font-semibold">Email</div>
                    <div className="text-sm">disurya.one@gmail.com</div>
                  </div>
                </a>
                <a
                  href="https://github.com/yudisrywn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-vscode-bg rounded-lg border border-elegant-purple/30 hover:border-elegant-purple hover:shadow-lg hover:shadow-elegant-purple/20 transition-all group">
                  <Github className="w-6 h-6" />
                  <div>
                    <div className="text-vscode-text font-semibold">GitHub</div>
                    <div className="text-sm">github.com/yudisrywn</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/yudi-suryawan-8a21a0287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-vscode-bg rounded-lg border border-elegant-blue/30 hover:border-elegant-blue hover:shadow-lg hover:shadow-elegant-blue/20 transition-all group">
                  <Linkedin className="w-6 h-6" />
                  <div>
                    <div className="text-vscode-text font-semibold">
                      LinkedIn
                    </div>
                    <div className="text-sm">linkedin.com/in/yudi-suryawan</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-vscode-sidebar p-8 rounded-lg border border-elegant-purple/30">
              <h3 className="text-xl font-semibold mb-4">
                <span className="bg-blue-600">Availability Status</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-elegant-purple rounded-full animate-pulse" />
                  <span className="text-vscode-text">Open to freelance</span>
                </div>
                <div className="flex items-center gap-3 text-vscode-text">
                  <Clock className="w-5 h-5 " />
                  <span>Response time: 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-vscode-text">
                  <MapPin className="w-5 h-5" />
                  <span>Kota Semarang</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
