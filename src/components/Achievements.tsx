import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Star, Trophy } from 'lucide-react';

interface AchievementItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ icon, title, description, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex bg-surface rounded-lg p-6 shadow-lg hover:shadow-glow transition-shadow border-l-2 border-primary"
    >
      <div className="mr-4 bg-surface-highlight p-3 rounded-full self-start">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      title: "End-to-end Platform Architecture",
      description: "Led architecture and rollout of an annotation and analytics platform integrating IAM, offline support, sampling, and model feedback — enabling 400+ annotators and accelerating GIS delivery by ~40%"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "High-Scale eCommerce Infrastructure",
      description: "Enabled INR 100 Cr+ eCommerce event success at Arzooo by scaling backend systems, building a targeted coupon engine, and launching personalization features that increased conversions by 18–22%"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Performance Recognition",
      description: "Recognized with monthly and annual performance awards at Arzooo; published articles on distributed systems and microservices on Medium; consistently demonstrated system ownership from 0→1"
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Academic Excellence",
      description: "Achieved AIR 2968 (General) in JEE Mains (2015); awarded top district and state honors (RBSE Class 10) for academic excellence"
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
          Key <span className="text-primary">Achievements</span>
        </h2>
        <div className="mt-2 h-1 w-24 bg-primary mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <AchievementItem
            key={index}
            icon={achievement.icon}
            title={achievement.title}
            description={achievement.description}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;