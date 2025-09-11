'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Search, Target, TrendingUp, FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

const WhatToExpect: React.FC = () => {
  const tSteps = useTranslations('booking.what_to_expect');
  const tReceive = useTranslations('booking.what_you_receive');
  const tPrepare = useTranslations('booking.how_to_prepare');
  const agenda = [
    {
      duration: tSteps('steps.0.duration'),
      title: tSteps('steps.0.title'),
      description: tSteps('steps.0.description'),
      icon: <Search className="w-5 h-5" />
    },
    {
      duration: tSteps('steps.1.duration'),
      title: tSteps('steps.1.title'),
      description: tSteps('steps.1.description'),
      icon: <Target className="w-5 h-5" />
    },
    {
      duration: tSteps('steps.2.duration'),
      title: tSteps('steps.2.title'),
      description: tSteps('steps.2.description'),
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      duration: tSteps('steps.3.duration'),
      title: tSteps('steps.3.title'),
      description: tSteps('steps.3.description'),
      icon: <FileText className="w-5 h-5" />
    }
  ];

  const benefits = [
    tReceive('items.0'),
    tReceive('items.1'),
    tReceive('items.2'),
    tReceive('items.3'),
    tReceive('items.4'),
    tReceive('items.5')
  ];

  const preparation = [
    tPrepare('steps.0'),
    tPrepare('steps.1'),
    tPrepare('steps.2'),
    tPrepare('steps.3')
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* What to Expect */}
      <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8">
        <h3 className="text-h3 font-bold text-text-primary mb-6 flex items-center gap-3">
          <Clock className="w-6 h-6 text-accent-blue" />
          {tSteps('title')}
        </h3>

        <div className="space-y-6">
          {agenda.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg flex items-center justify-center">
                  <div className="text-accent-blue">
                    {item.icon}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-text-primary">{item.title}</h4>
                  <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">
                    {item.duration}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Receive */}
      <div className="bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-2xl p-8">
        <h3 className="text-h3 font-bold text-text-primary mb-6 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-success-green" />
          {tReceive('title')}
        </h3>

        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
              <span className="text-text-secondary text-sm leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* How to Prepare */}
      <div className="bg-primary-800/30 border border-accent-purple/20 rounded-2xl p-8">
        <h3 className="text-h3 font-bold text-text-primary mb-6 flex items-center gap-3">
          <Target className="w-6 h-6 text-accent-purple" />
          {tPrepare('title')}
        </h3>

        <div className="space-y-3">
          {preparation.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent-purple text-xs font-medium">{index + 1}</span>
              </div>
              <span className="text-text-secondary text-sm leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-accent-purple/5 border border-accent-purple/20 rounded-lg">
          <p className="text-text-secondary text-sm">
            <strong className="text-accent-purple">Note :</strong> {tPrepare('note')}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatToExpect;