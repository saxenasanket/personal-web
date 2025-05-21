import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, index }) => {
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
      className="mb-8"
    >
      <h3 className="text-lg font-bold text-primary mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span 
            key={i} 
            className="bg-surface-highlight text-white px-3 py-1 rounded-md font-code text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Java"]
    },
    {
      title: "Backend & Microservices",
      skills: ["Node.js", "Express.js", "Nest.js", "FastAPI", "RESTful APIs", "GraphQL", "Kafka", "Redis Streams", "Event-driven Architecture"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Redux", "PWA", "Material UI", "Ant Design", "Performance Optimization", "Accessibility", "Responsive Design"]
    },
    {
      title: "System Design & Distributed Architecture",
      skills: ["HLD & LLD", "Domain-driven Design", "CAP Theorem", "Replication", "Partitioning", "Consistency Models", "Concurrency Control", "Distributed Transactions", "Consensus Protocols", "ZooKeeper", "etcd"]
    },
    {
      title: "Databases & Internals",
      skills: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB", "Elasticsearch", "B-Trees", "LSM Trees", "Indexing", "MVCC", "WALs", "Query Planning"]
    },
    {
      title: "AI/ML Systems Engineering",
      skills: ["Human-in-the-loop Workflows", "Model-assisted Pipelines", "Feedback Loops", "Confidence Scoring", "Model Evaluation", "Sampling Strategies"]
    },
    {
      title: "Data & Workflow Orchestration",
      skills: ["Apache Airflow", "AWS Step Functions", "Snowflake", "Cube.js", "ETL Design", "OLAP Modeling", "Superset Dashboards"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, ECS, EKS, Lambda, S3, RDS)", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      title: "Observability & Monitoring",
      skills: ["Prometheus", "Grafana", "Superset", "ELK Stack", "Groundcover", "StatsD", "Sentry"]
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
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="mt-2 h-1 w-24 bg-primary mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;