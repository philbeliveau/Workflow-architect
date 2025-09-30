'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Users, Briefcase, Code, Lightbulb, Palette, BarChart } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface SegmentData {
  title: string;
  headline: string;
  pain_points: string[];
  transformation: string[];
  success_metrics: string;
}

interface SegmentCardProps {
  segment: SegmentData;
  isSelected: boolean;
  onSelect: () => void;
  icon: React.ReactNode;
  color: string;
  index: number;
  tLabels: (key: string) => string;
}

const SegmentCard: React.FC<SegmentCardProps> = memo(({ segment, isSelected, onSelect, icon, color, index, tLabels }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`
        relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300
        ${isSelected
          ? `bg-gradient-to-br from-${color}/20 to-${color}/10 border-${color} shadow-xl shadow-${color}/20`
          : 'bg-background-accent-grey/70 border-text-secondary/50 hover:border-blue-500/20'
        }
      `}
      onClick={onSelect}
    >
      {/* Icon and Title */}
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-${color}/20 flex items-center justify-center ${isSelected ? `text-${color}` : 'text-text-secondary'}`}>
          {icon}
        </div>
        <div>
          <h3 className={`text-xl font-bold ${isSelected ? `text-${color}` : 'text-text-light'}`}>
            {segment.title}
          </h3>
          <p className={`text-sm ${isSelected ? `text-${color}` : 'text-text-secondary'}`}>
            {segment.headline}
          </p>
        </div>
      </div>
      
      {/* Pain Points Preview */}
      <div className="space-y-2 mb-4">
        <p className="text-sm text-text-secondary font-medium">{tLabels('current_challenges')}</p>
        <ul className="space-y-1">
          {(segment.pain_points || []).slice(0, 2).map((point: string, idx: number) => (
            <li key={idx} className="text-sm text-text-primary">
              {point}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Transformation Preview */}
      <div className="space-y-2">
        <p className="text-sm text-text-secondary font-medium">{tLabels('transformation')}</p>
        <ul className="space-y-1">
          {(segment.transformation || []).slice(0, 2).map((transform: string, idx: number) => (
            <li key={idx} className="text-sm text-text-primary">
              {transform}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Selection indicator */}
      <motion.div
        className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          isSelected ? `border-${color} bg-${color}` : 'border-text-secondary/30'
        }`}
        animate={{ scale: isSelected ? 1.1 : 1 }}
      >
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-3 h-3 bg-white rounded-full"
          />
        )}
      </motion.div>
      
    </motion.div>
  );
});

SegmentCard.displayName = 'SegmentCard';

const TargetAudienceInteractive: React.FC = memo(() => {
  const t = useTranslations('target_audience');
  const tLabels = useTranslations('target_audience.labels');
  const [selectedSegment, setSelectedSegment] = useState<string>('entrepreneurs');
  
  const segments = t.raw('segments');
  
  const segmentIcons = {
    entrepreneurs: <Briefcase className="w-6 h-6" />,
    intrapreneurs: <Users className="w-6 h-6" />,
    tech_enthusiasts: <Code className="w-6 h-6" />,
    experienced_developers: <Lightbulb className="w-6 h-6" />,
    creative_generalists: <Palette className="w-6 h-6" />,
    product_managers: <BarChart className="w-6 h-6" />
  };
  
  const segmentColors = {
    entrepreneurs: 'accent-red',
    intrapreneurs: 'primary-blue',
    tech_enthusiasts: 'blue-500',
    experienced_developers: 'accent-yellow',
    creative_generalists: 'accent-purple',
    product_managers: 'hover-interactive'
  };

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'var(--section-light)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-success-green/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-text-primary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Segment Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(segments).map(([key, segment], index) => (
            <SegmentCard
              key={key}
              segment={segment as SegmentData}
              isSelected={selectedSegment === key}
              onSelect={() => setSelectedSegment(key)}
              icon={segmentIcons[key as keyof typeof segmentIcons]}
              color={segmentColors[key as keyof typeof segmentColors]}
              index={index}
              tLabels={tLabels}
            />
          ))}
        </div>

      </div>
    </section>
  );
});

TargetAudienceInteractive.displayName = 'TargetAudienceInteractive';

export default TargetAudienceInteractive;