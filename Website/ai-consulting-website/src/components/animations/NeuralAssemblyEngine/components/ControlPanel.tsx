/**
 * Development Control Panel
 * Debug interface for Neural Assembly Engine (development only)
 */

'use client';

import React from 'react';
import { ControlPanelProps } from '../types';

export const ControlPanel: React.FC<ControlPanelProps> = ({
  config,
  metrics,
  currentPhase,
  isPlaying,
  onConfigChange,
  onSeek,
  onPlay,
  onPause,
  onReset
}) => {
  // Only render in development mode
  if (process.env.NODE_ENV !== 'development') return null;

  const phaseNames = ['Chaos', 'Recognition', 'Learning', 'Connection', 'Mastery'];

  const getPerformanceColor = (fps: number): string => {
    if (fps >= 50) return 'text-green-400';
    if (fps >= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMemoryColor = (memory: number): string => {
    if (memory <= 50) return 'text-green-400';
    if (memory <= 100) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-sm font-mono z-50 max-w-xs">
      {/* Header */}
      <div className="border-b border-gray-600 pb-2 mb-3">
        <h3 className="text-lg font-semibold text-blue-400">Neural Assembly Debug</h3>
        <div className="text-xs text-gray-400">Development Mode</div>
      </div>

      {/* Current Status */}
      <div className="mb-4 space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-300">Phase:</span>
          <span className="text-blue-400">
            {currentPhase + 1}/5 - {phaseNames[currentPhase] || 'Ready'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Status:</span>
          <span className={isPlaying ? 'text-green-400' : 'text-yellow-400'}>
            {isPlaying ? 'Playing' : 'Paused'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Quality:</span>
          <span className="text-purple-400 capitalize">{config.quality}</span>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mb-4 space-y-1">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Performance</div>
        <div className="flex justify-between">
          <span className="text-gray-300">FPS:</span>
          <span className={getPerformanceColor(metrics.fps)}>
            {metrics.fps}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Memory:</span>
          <span className={getMemoryColor(metrics.memoryUsage)}>
            {metrics.memoryUsage.toFixed(1)}MB
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Nodes:</span>
          <span className="text-blue-400">{metrics.totalNodes}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Particles:</span>
          <span className="text-purple-400">{metrics.totalParticles}</span>
        </div>
      </div>

      {/* Animation Controls */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Controls</div>
        <div className="grid grid-cols-2 gap-1">
          <button
            onClick={onPlay}
            disabled={isPlaying}
            className="px-2 py-1 bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:opacity-50 rounded text-xs transition-colors"
          >
            Play
          </button>
          <button
            onClick={onPause}
            disabled={!isPlaying}
            className="px-2 py-1 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-800 disabled:opacity-50 rounded text-xs transition-colors"
          >
            Pause
          </button>
          <button
            onClick={onReset}
            className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs transition-colors"
          >
            Reset
          </button>
          <button
            onClick={() => onSeek(0)}
            className="px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded text-xs transition-colors"
          >
            Start
          </button>
        </div>
      </div>

      {/* Phase Navigation */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Phases</div>
        <div className="grid grid-cols-5 gap-1">
          {phaseNames.map((name, index) => (
            <button
              key={index}
              onClick={() => onSeek(index * 2000)} // Approximate phase timing
              className={`px-1 py-1 rounded text-xs transition-colors ${
                currentPhase === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
              }`}
              title={name}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Configuration */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Settings</div>

        {/* Quality Setting */}
        <div className="mb-2">
          <label className="block text-xs text-gray-300 mb-1">Quality:</label>
          <select
            value={config.quality}
            onChange={(e) => onConfigChange({ quality: e.target.value as any })}
            className="w-full bg-gray-800 text-white text-xs rounded px-2 py-1 border border-gray-600 focus:border-blue-400 focus:outline-none"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Speed Control */}
        <div className="mb-2">
          <label className="block text-xs text-gray-300 mb-1">
            Speed: {config.speed}x
          </label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={config.speed}
            onChange={(e) => onConfigChange({ speed: parseFloat(e.target.value) })}
            className="w-full"
          />
        </div>

        {/* Reduced Motion */}
        <div className="mb-2">
          <label className="flex items-center text-xs text-gray-300">
            <input
              type="checkbox"
              checked={config.reducedMotion}
              onChange={(e) => onConfigChange({ reducedMotion: e.target.checked })}
              className="mr-2"
            />
            Reduced Motion
          </label>
        </div>

        {/* Loop Animation */}
        <div className="mb-2">
          <label className="flex items-center text-xs text-gray-300">
            <input
              type="checkbox"
              checked={config.loop}
              onChange={(e) => onConfigChange({ loop: e.target.checked })}
              className="mr-2"
            />
            Loop Animation
          </label>
        </div>
      </div>

      {/* Performance Warnings */}
      {(metrics.fps < 25 || metrics.memoryUsage > 100) && (
        <div className="mb-4 p-2 bg-red-900 bg-opacity-50 border border-red-600 rounded">
          <div className="text-xs font-semibold text-red-400 mb-1">Performance Warning</div>
          <div className="text-xs text-red-300">
            {metrics.fps < 25 && <div>• Low FPS detected</div>}
            {metrics.memoryUsage > 100 && <div>• High memory usage</div>}
            <div className="mt-1 text-xs text-gray-400">
              Consider reducing quality or particle count
            </div>
          </div>
        </div>
      )}

      {/* Debug Info Footer */}
      <div className="border-t border-gray-600 pt-2 mt-3">
        <div className="text-xs text-gray-500">
          Render: {metrics.renderTime.toFixed(1)}ms
        </div>
        <div className="text-xs text-gray-500">
          Updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};