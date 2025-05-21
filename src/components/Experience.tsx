import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  period, 
  location, 
  description,
  index 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-10 relative"
    >
      <div className="ml-8 experience-card bg-surface rounded-lg p-6 shadow-lg border-l-4 border-primary">
        <div className="absolute -left-2 top-6 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <Briefcase className="h-3 w-3 text-black" />
        </div>
        
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <div className="flex flex-wrap justify-between mb-2">
          <h4 className="text-lg font-medium">{company}</h4>
          <p className="text-gray-400 font-code text-sm">{period}</p>
        </div>
        <p className="text-gray-400 italic mb-4">{location}</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {description.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "SDE 3",
      company: "AiDash (US-based AI startup focused on geospatial AI)",
      period: "Jan 2024 – Present",
      location: "Bengaluru, India",
      description: [
        "Architected and led production rollout of a model-first, workflow-assisted human-in-the-loop (HiTL) platform for geospatial annotation, integrating an IAM-based authentication system to securely manage ~400+ annotators across QGIS plugins",
        "Introduced confidence scoring, sampling strategies, and model-assisted labeling pipelines — accelerating the GIS team's delivery cycle by ~40%",
        "Brought previously manual, opaque labeling workflows to a fully online, observable system that exposed per-model and per-annotator efficiency metrics",
        "Designed and implemented a config-driven analytics automation framework to handle network segmentation, outage labeling, and KPI computation — reducing manual analyst effort by ~80%",
        "Delivered resilient orchestration using Apache Airflow and Snowflake, supporting versioned workflows, auditability, stage-level recovery, and parallel feeder-level processing",
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Arzooo (Bengaluru-based eCommerce startup)",
      period: "Jun 2022 – Jan 2024",
      location: "Bengaluru, India",
      description: [
        "Spearheaded backend infrastructure for 'WED Sale' campaign, scaling backend systems to support INR 100 Cr+ in sales over 5 days",
        "Built couponing engine handling 50K+ orders, driving targeted discount workflows",
        "Launched 'Arzooo Gold' & 'Arzooo Quick' to boost metro delivery efficiency and premium buyer conversion",
        "Implemented homepage personalization and smart ranking logic, increasing PDP views by +22% and total orders by +18%",
        "Automated checkout experience and payment-layer optimizations, including convenience fee integration (~INR 16L collected)",
      ]
    },
    {
      title: "Member of Technical Staff",
      company: "ClearFeed (Slack-native support automation startup)",
      period: "Jun 2021 – Jun 2022",
      location: "Bengaluru, India",
      description: [
        "Devised a sophisticated rule-based Slack notification workflow to optimize and prioritize notifications, thereby enhancing team efficiency and reducing response effectiveness by 20%",
        "Built Slack→Jira/Zendesk sync workflows enabling seamless ticketing across enterprise support channels",
        "Developed analytics engine tracking response SLAs, TTF (time to first response), and backlog summaries",
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Pixxel (Earth imaging startup)",
      period: "Jul 2020 – May 2021",
      location: "Bengaluru, India",
      description: [
        "Built a web-based annotation tool for real-time satellite imagery streaming with support for ML model overlays",
        "Integrated segmentation workflows enabling interactive boundary drawing and data labeling",
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Telstra (Australian MNC – Telecom domain)",
      period: "Jul 2019 – Jul 2020",
      location: "Bengaluru, India",
      description: [
        "Developed engineering insights dashboard to track code health, test coverage, deployment frequency",
        "Created modular microservices and UI components to support internal DevOps reporting tools",
      ]
    },
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
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="mt-2 h-1 w-24 bg-primary mx-auto"></div>
      </div>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute top-8 bottom-0 left-3 timeline-line"></div>
        
        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            location={exp.location}
            description={exp.description}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;