'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number; // 0-100
  label: string;
  showTooltip?: boolean;
  className?: string;
  animated?: boolean;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showTooltip = true,
  className,
  animated = true,
  delay = 0
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated, delay]);

  return (
    <div className={cn("w-full", className)}>
      {/* Label */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-text-primary">
          {label}
        </span>
        <span className="text-sm font-bold text-accent-blue">
          {Math.round(displayValue)}%
        </span>
      </div>
      
      {/* Progress Bar Container */}
      <div className="relative">
        <div className="h-2 w-full rounded-full bg-primary-700/30 overflow-hidden">
          {/* Progress Bar Fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-accent-blue to-accent-blue-light rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${displayValue}%` }}
            transition={{
              duration: animated ? 1.2 : 0,
              delay: delay / 1000,
              ease: "easeOut"
            }}
          >
            {/* Tooltip */}
            {showTooltip && displayValue > 0 && (
              <motion.div
                className="absolute -top-8 -right-3 bg-black text-white text-xs px-2 py-1 rounded shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (delay / 1000) + 0.8, duration: 0.3 }}
              >
                {Math.round(displayValue)}%
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;