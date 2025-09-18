'use client';

import React, { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Briefcase, Code, Users, Lightbulb, Palette, BarChart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface TestimonialData {
  name: string;
  role: string;
  company: string;
  category: string;
  category_label: string;
  quote: string;
  achievement?: string;
  timeframe: string;
}

interface TestimonialProps {
  testimonial: TestimonialData;
  isActive: boolean;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = memo(({ testimonial, isActive, index }) => {
  const getIcon = (category: string) => {
    const icons = {
      entrepreneur: <Briefcase className="w-6 h-6" />,
      developer: <Code className="w-6 h-6" />,
      intrapreneur: <Users className="w-6 h-6" />,
      creative: <Palette className="w-6 h-6" />,
      tech_enthusiast: <Lightbulb className="w-6 h-6" />,
      product_manager: <BarChart className="w-6 h-6" />
    };
    return icons[category as keyof typeof icons] || <Users className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      entrepreneur: 'accent-red',
      developer: 'success-green', 
      intrapreneur: 'primary-blue',
      creative: 'accent-purple',
      tech_enthusiast: 'accent-yellow',
      product_manager: 'hover-interactive'
    };
    return colors[category as keyof typeof colors] || 'primary-blue';
  };

  const color = getCategoryColor(testimonial.category);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.7, 
        scale: isActive ? 1 : 0.95,
        y: isActive ? 0 : 20
      }}
      transition={{ duration: 0.5 }}
      className={`
        relative bg-gradient-to-br from-background-accent-grey/90 to-background-light-grey/90 
        backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300
        ${isActive 
          ? `border-${color} shadow-xl shadow-${color}/20` 
          : 'border-text-secondary/30'
        }
      `}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8">
        <div className={`bg-${color} rounded-full p-3`}>
          <Quote className="w-6 h-6 text-background-dark" />
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center mb-6 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 text-${color} fill-current`}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-lg text-text-light mb-6 leading-relaxed italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Success Metrics */}
      {testimonial.achievement && (
        <div className={`bg-${color}/10 border border-${color}/30 rounded-xl p-4 mb-6`}>
          <div className="flex items-center mb-2">
            <div className={`w-3 h-3 bg-${color} rounded-full mr-3`}></div>
            <span className="text-sm font-semibold text-text-light">Résultat concret :</span>
          </div>
          <p className="text-text-primary text-sm">{testimonial.achievement}</p>
        </div>
      )}

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className={`w-16 h-16 bg-${color}/20 rounded-full flex items-center justify-center text-${color}`}>
          {getIcon(testimonial.category)}
        </div>

        {/* Author Details */}
        <div className="flex-1">
          <h4 className="font-bold text-text-light text-lg">{testimonial.name}</h4>
          <p className={`text-${color} font-medium text-sm`}>{testimonial.role}</p>
          <p className="text-text-secondary text-sm">{testimonial.company}</p>
          
          {/* Timeline */}
          <div className="flex items-center mt-2 text-xs text-text-secondary">
            <div className="w-2 h-2 bg-success-green rounded-full mr-2"></div>
            <span>Formation terminée • {testimonial.timeframe}</span>
          </div>
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <div className={`bg-${color}/20 text-${color} px-3 py-1 rounded-full text-xs font-medium`}>
          {testimonial.category_label}
        </div>
      </div>
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

const TestimonialsSection: React.FC = memo(() => {
  const t = useTranslations('testimonials');
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = t.raw('items');
  const testimonialsList = Object.values(testimonials) as TestimonialData[];

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  }, [testimonialsList.length]);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  }, [testimonialsList.length]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-advance testimonials
  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-success-green/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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

        {/* Testimonials Display */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl"
              >
                <TestimonialCard
                  testimonial={testimonialsList[activeIndex]}
                  isActive={true}
                  index={activeIndex}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-background-accent-grey/50 rounded-full border border-text-secondary/30 hover:border-primary-blue/50 transition-colors group"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6 text-text-light group-hover:text-primary-blue transition-colors" />
            </button>

            {/* Dots Navigation */}
            <div className="flex space-x-2">
              {testimonialsList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === activeIndex 
                      ? 'bg-primary-blue scale-125' 
                      : 'bg-text-secondary/30 hover:bg-text-secondary/60'
                    }
                  `}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-background-accent-grey/50 rounded-full border border-text-secondary/30 hover:border-primary-blue/50 transition-colors group"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6 text-text-light group-hover:text-primary-blue transition-colors" />
            </button>
          </div>
        </div>

        {/* Overall Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-success-green/10 to-primary-blue/10 border border-success-green/30 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-success-green mb-2">
              {t('metrics.title')}
            </h3>
            <p className="text-text-secondary">
              {t('metrics.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">98.5%</div>
              <div className="text-text-secondary text-sm">Satisfaction étudiants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-green mb-2">150+</div>
              <div className="text-text-secondary text-sm">Apprenants transformés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow mb-2">87%</div>
              <div className="text-text-secondary text-sm">Première app en 48h</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-red mb-2">92%</div>
              <div className="text-text-secondary text-sm">Recommandent à collègues</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;