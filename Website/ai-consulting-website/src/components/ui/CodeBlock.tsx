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
  // Simple syntax highlighting for different languages
  const highlightCode = (code: string) => {
    if (language === 'json') {
      return code
        .replace(/"([^"]*)":/g, '<span class="text-blue-400">"$1"</span>:')
        .replace(/:\s*"([^"]*)"/g, ': <span class="text-green-400">"$1"</span>')
        .replace(/:\s*(true|false|null)/g, ': <span class="text-purple-400">$1</span>')
        .replace(/:\s*(\d+)/g, ': <span class="text-yellow-400">$1</span>')
        .replace(/([{}\[\],])/g, '<span class="text-slate-400">$1</span>');
    }
    
    // TypeScript/React highlighting
    return code
      .replace(/(&lt;)([A-Z][a-zA-Z]*)/g, '<span class="text-slate-500">$1</span><span class="text-pink-400">$2</span>')
      .replace(/(&lt;\/?)([A-Z][a-zA-Z]*)/g, '<span class="text-slate-500">$1</span><span class="text-pink-400">$2</span>')
      .replace(/(className|value|href|type)=/g, '<span class="text-violet-400">$1</span><span class="text-slate-500">=</span>')
      .replace(/"([^"]*)"/g, '<span class="text-blue-400">"$1"</span>')
      .replace(/\{([^}]*)\}/g, '<span class="text-blue-400">{$1}</span>')
      .replace(/(const|let|var|function|return|export|import|from)/g, '<span class="text-purple-400">$1</span>')
      .replace(/(\d+)/g, '<span class="text-yellow-400">$1</span>');
  };

  return (
    <motion.div
      className={cn("relative rounded-lg bg-slate-900 border border-slate-700 overflow-hidden", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      {showHeader && (
        <div className="relative flex items-center justify-center bg-slate-800 px-4 py-3 border-b border-slate-700">
          {/* Window Controls */}
          <div className="absolute left-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50"></div>
          </div>
          
          {/* Title */}
          <span className="text-xs text-slate-400 font-mono">{title}</span>
        </div>
      )}

      {/* Code Content */}
      <div className="p-6 overflow-x-auto">
        <div 
          className="text-sm font-mono leading-relaxed text-violet-400 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 pointer-events-none"></div>
    </motion.div>
  );
};

export default CodeBlock;