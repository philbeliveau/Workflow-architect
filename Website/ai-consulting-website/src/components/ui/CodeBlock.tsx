'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  title?: string;
  code: string;
  language?: string;
  className?: string;
  showHeader?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  title = "workflow.tsx",
  code,
  language = "tsx",
  className,
  showHeader = true
}) => {
  // Enhanced syntax highlighting with platform colors and highlight backgrounds
  const highlightCode = (code: string) => {
    if (language === 'json') {
      return code
        .replace(/"([^"]*)"/g, '<span class="text-primary-blue">"$1"</span>:')
        .replace(/:\s*"([^"]*)"/g, ': <span class="text-success-green">"$1"</span>')
        .replace(/:\s*(true|false|null)/g, ': <span class="text-accent-purple">$1</span>')
        .replace(/:\s*(\d+)/g, ': <span class="text-accent-yellow">$1</span>')
        .replace(/([{}\[\],])/g, '<span class="text-text-secondary">$1</span>');
    }
    
    // TypeScript/React highlighting with platform colors and highlight backgrounds
    return code
      .replace(/(&lt;)([A-Z][a-zA-Z]*)/g, '<span class="text-text-secondary">$1</span><span class="text-accent-red">$2</span>')
      .replace(/(&lt;\/?)([A-Z][a-zA-Z]*)/g, '<span class="text-text-secondary">$1</span><span class="text-accent-red">$2</span>')
      .replace(/(className|value|href|type)=/g, '<span class="text-accent-purple">$1</span><span class="text-text-secondary">=</span>')
      .replace(/"([^"]*)"/g, '<span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span class="relative text-primary-blue">"$1"</span></span>')
      .replace(/\{([^}]*)\}/g, '<span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-primary-blue/10"><span class="relative text-primary-blue">{$1}</span></span>')
      .replace(/(const|let|var|function|return|export|import|from)/g, '<span class="text-accent-purple">$1</span>')
      .replace(/(\d+)/g, '<span class="text-accent-yellow">$1</span>');
  };

  return (
    <motion.div
      className={cn("relative rounded-lg bg-background-dark-alt p-2", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      {showHeader && (
        <div className="relative flex text-center">
          {/* Window Controls */}
          <div className="flex pl-3.5 pt-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-accent-red/20">
              <circle r="12" cy="12" cx="12"></circle>
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-accent-yellow/20">
              <circle r="12" cy="12" cx="12"></circle>
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-success-green/20">
              <circle r="12" cy="12" cx="12"></circle>
            </svg>
          </div>
          
          {/* Title */}
          <span className="absolute inset-x-0 top-2 text-xs text-text-secondary">{title}</span>
        </div>
      )}

      {/* Code Content */}
      <div className="mt-5 space-y-1.5 px-5 pb-10">
        <div 
          className="font-mono text-xs font-normal tracking-wide text-accent-purple whitespace-pre-wrap leading-4"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-accent-purple/5 pointer-events-none rounded-lg"></div>
    </motion.div>
  );
};

export default CodeBlock;