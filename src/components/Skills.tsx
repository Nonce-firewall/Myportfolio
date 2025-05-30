import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'design' | 'tools';
}

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h4>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${getCategoryColor(skill.category)}`}
          style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'frontend':
      return 'bg-primary';
    case 'design':
      return 'bg-secondary';
    case 'tools':
      return 'bg-accent';
    default:
      return 'bg-primary';
  }
};

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML & CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 88, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  ];

  const designSkills: Skill[] = [
    { name: 'UI/UX Design', level: 80, category: 'design' },
    { name: 'Figma', level: 85, category: 'design' },
    { name: 'Responsive Design', level: 90, category: 'design' },
    { name: 'Animation', level: 75, category: 'design' },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git & GitHub', level: 88, category: 'tools' },
    { name: 'Webpack/Vite', level: 82, category: 'tools' },
    { name: 'Jest/Testing', level: 78, category: 'tools' },
    { name: 'Performance Optimization', level: 85, category: 'tools' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Here's an overview of my technical skills and expertise in various areas
            of front-end development, design, and tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="w-4 h-4 rounded-full bg-primary mr-2"></span>
              Frontend Development
            </h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="w-4 h-4 rounded-full bg-secondary mr-2"></span>
              Design
            </h3>
            {designSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="w-4 h-4 rounded-full bg-accent mr-2"></span>
              Tools & Others
            </h3>
            {toolsSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;