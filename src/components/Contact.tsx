import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Calendar, FileText } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  index: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, link, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.a 
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center p-4 bg-surface rounded-lg hover:bg-surface-highlight transition-colors"
    >
      <div className="mr-4 bg-primary bg-opacity-10 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <p className="text-white font-medium">{value}</p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "saxenasanket135@gmail.com",
      link: "mailto:saxenasanket135@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91-9599435358",
      link: "tel:+919599435358"
    },
    {
      icon: <Github className="h-6 w-6 text-primary" />,
      title: "GitHub",
      value: "saxenasanket",
      link: "https://github.com/saxenasanket"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary" />,
      title: "LinkedIn",
      value: "Sanket Saxena",
      link: "https://www.linkedin.com/in/sanket-saxena-b74a7b103/"
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Blog",
      value: "Medium",
      link: "https://medium.com/@saxenasanket"
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Schedule a Meeting",
      value: "Calendly",
      link: "https://calendly.com/saxenasanket135/ooo?month=2025-05"
    }
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="mt-2 h-1 w-24 bg-primary mx-auto"></div>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contactInfo.map((item, index) => (
          <ContactItem
            key={index}
            icon={item.icon}
            title={item.title}
            value={item.value}
            link={item.link}
            index={index}
          />
        ))}
      </div>
      
      <div className="text-center mt-16">
        <motion.a 
          href="mailto:saxenasanket135@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-block px-8 py-4 bg-primary text-black font-bold rounded-lg transform hover:translate-y-[-2px] transition-all hover:shadow-glow pulse-button"
        >
          Contact Me
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;