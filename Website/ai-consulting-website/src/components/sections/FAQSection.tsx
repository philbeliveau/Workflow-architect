'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronDown, Search, MessageCircle, HelpCircle, Settings, CheckCircle, DollarSign } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = memo(({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border border-text-secondary/30 rounded-xl overflow-hidden backdrop-blur-sm"
    >
      <motion.button
        onClick={onToggle}
        className="w-full p-6 text-left bg-background-accent-grey/50 hover:bg-background-accent-grey/70 transition-colors duration-300 flex items-center justify-between"
        whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.1)" }}
      >
        <h3 className="text-text-light font-semibold text-lg pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary-blue" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background-dark/50"
          >
            <div className="p-6 pt-0">
              <div className="bg-gradient-to-br from-primary-blue/5 to-accent-yellow/5 rounded-lg p-4 border-l-4 border-primary-blue">
                <p className="text-text-primary leading-relaxed whitespace-pre-line">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

FAQItem.displayName = 'FAQItem';

const FAQSection: React.FC = memo(() => {
  const t = useTranslations('faq');
  const [activeCategory, setActiveCategory] = useState<string>('formation');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = t.raw('categories');
  const questions = t.raw('questions');
  
  const categoryIcons = {
    formation: <HelpCircle className="w-5 h-5" />,
    support: <MessageCircle className="w-5 h-5" />,
    practical: <DollarSign className="w-5 h-5" />,
    after: <CheckCircle className="w-5 h-5" />,
    technical: <Settings className="w-5 h-5" />
  };
  
  const categoryQuestions = {
    formation: ['experience_required', 'time_to_results', 'industry_fit', 'vs_traditional'],
    support: ['support_when_stuck', 'guarantee'],
    practical: ['payment_options', 'funding_eligible'],
    after: ['after_training', 'stay_updated'],
    technical: ['hardware_requirements', 'mac_pc_compatible']
  };

  const toggleQuestion = (questionKey: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionKey)) {
      newOpenQuestions.delete(questionKey);
    } else {
      newOpenQuestions.add(questionKey);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredQuestions = categoryQuestions[activeCategory as keyof typeof categoryQuestions]?.filter(
    questionKey => {
      const question = questions[questionKey];
      if (!searchTerm) return true;
      return question.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
             question.a.toLowerCase().includes(searchTerm.toLowerCase());
    }
  ) || [];

  return (
    <section className="relative py-24 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-red/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-success-green/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
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

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background-accent-grey/50 border border-text-secondary/30 rounded-xl text-text-light placeholder-text-secondary focus:border-primary-blue focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                  ${activeCategory === key
                    ? 'bg-primary-blue text-white shadow-lg'
                    : 'bg-background-accent-grey/50 text-text-secondary hover:bg-background-accent-grey/70 hover:text-text-light'
                  }
                `}
              >
                {categoryIcons[key as keyof typeof categoryIcons]}
                <span className="text-sm md:text-base">{String(label)}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((questionKey, index) => {
                  const question = questions[questionKey];
                  return (
                    <FAQItem
                      key={questionKey}
                      question={question.q}
                      answer={question.a}
                      isOpen={openQuestions.has(questionKey)}
                      onToggle={() => toggleQuestion(questionKey)}
                      index={index}
                    />
                  );
                })
              ) : (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-text-secondary mx-auto mb-4" />
                  <p className="text-text-secondary">Aucune question trouvée pour "{searchTerm}"</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;