/**
 * Animation Utilities - Anime.js v3 Integration
 * Centralized animation management for Neural Assembly Engine
 */

import anime from 'animejs/lib/anime.es.js';
import { AnimeAnimParams } from '../../types';

export class AnimeV3Manager {
  private timelines: Map<string, anime.AnimeTimelineInstance> = new Map();
  private animations: Map<string, anime.AnimeInstance> = new Map();
  private isDestroyed = false;

  /**
   * Create a new timeline with the given configuration
   */
  createTimeline(id: string, config: Partial<anime.AnimeParams> = {}): anime.AnimeTimelineInstance {
    if (this.isDestroyed) {
      throw new Error('AnimeV3Manager has been destroyed');
    }

    // Remove existing timeline if it exists
    this.removeTimeline(id);

    const timeline = anime.timeline({
      autoplay: false,
      loop: false,
      direction: 'normal',
      easing: 'easeOutExpo',
      ...config
    });

    this.timelines.set(id, timeline);
    return timeline;
  }

  /**
   * Add animation to an existing timeline
   */
  addToTimeline(
    timelineId: string,
    targets: string | Element | Element[],
    properties: anime.AnimeParams,
    offset?: string | number
  ): anime.AnimeTimelineInstance | null {
    const timeline = this.timelines.get(timelineId);
    if (!timeline) {
      console.warn(`Timeline ${timelineId} not found`);
      return null;
    }

    return timeline.add({
      targets,
      ...properties
    }, offset);
  }

  /**
   * Create a standalone animation
   */
  createAnimation(
    id: string,
    targets: string | Element | Element[],
    properties: anime.AnimeParams
  ): anime.AnimeInstance {
    if (this.isDestroyed) {
      throw new Error('AnimeV3Manager has been destroyed');
    }

    // Remove existing animation if it exists
    this.removeAnimation(id);

    const animation = anime({
      targets,
      autoplay: false,
      ...properties
    });

    this.animations.set(id, animation);
    return animation;
  }

  /**
   * Play timeline or animation by ID
   */
  play(id: string): boolean {
    const timeline = this.timelines.get(id);
    const animation = this.animations.get(id);

    if (timeline) {
      timeline.play();
      return true;
    }
    if (animation) {
      animation.play();
      return true;
    }

    console.warn(`Animation/Timeline ${id} not found`);
    return false;
  }

  /**
   * Pause timeline or animation by ID
   */
  pause(id: string): boolean {
    const timeline = this.timelines.get(id);
    const animation = this.animations.get(id);

    if (timeline) {
      timeline.pause();
      return true;
    }
    if (animation) {
      animation.pause();
      return true;
    }

    return false;
  }

  /**
   * Seek to specific time in timeline or animation
   */
  seek(id: string, time: number): boolean {
    const timeline = this.timelines.get(id);
    const animation = this.animations.get(id);

    if (timeline) {
      timeline.seek(time);
      return true;
    }
    if (animation) {
      animation.seek(time);
      return true;
    }

    return false;
  }

  /**
   * Restart timeline or animation
   */
  restart(id: string): boolean {
    const timeline = this.timelines.get(id);
    const animation = this.animations.get(id);

    if (timeline) {
      timeline.restart();
      return true;
    }
    if (animation) {
      animation.restart();
      return true;
    }

    return false;
  }

  /**
   * Get progress (0-1) of timeline or animation
   */
  getProgress(id: string): number {
    const timeline = this.timelines.get(id);
    const animation = this.animations.get(id);

    if (timeline) {
      return timeline.progress / 100;
    }
    if (animation) {
      return animation.progress / 100;
    }

    return 0;
  }

  /**
   * Remove specific timeline
   */
  removeTimeline(id: string): boolean {
    const timeline = this.timelines.get(id);
    if (timeline) {
      timeline.pause();
      this.timelines.delete(id);
      return true;
    }
    return false;
  }

  /**
   * Remove specific animation
   */
  removeAnimation(id: string): boolean {
    const animation = this.animations.get(id);
    if (animation) {
      animation.pause();
      this.animations.delete(id);
      return true;
    }
    return false;
  }

  /**
   * Clean up all animations and timelines
   */
  cleanup(): void {
    // Pause all timelines and animations
    this.timelines.forEach(timeline => timeline.pause());
    this.animations.forEach(animation => animation.pause());

    // Clear collections
    this.timelines.clear();
    this.animations.clear();
    this.isDestroyed = true;
  }

  /**
   * Get list of active animation/timeline IDs
   */
  getActiveIds(): { timelines: string[]; animations: string[] } {
    return {
      timelines: Array.from(this.timelines.keys()),
      animations: Array.from(this.animations.keys())
    };
  }

  /**
   * Utility functions for common patterns
   */

  // Stagger utility
  stagger(value: number | string, options: any = {}): any {
    return anime.stagger(value, options);
  }

  // Random value utility
  random(min: number, max: number): number {
    return anime.random(min, max);
  }

  // Set properties without animation
  set(targets: string | Element | Element[], properties: object): void {
    anime.set(targets, properties);
  }

  // Remove all animations from specific targets
  remove(targets: string | Element | Element[]): void {
    anime.remove(targets);
  }

  /**
   * Create a phase-based animation sequence
   */
  createPhaseSequence(
    id: string,
    phases: Array<{
      name: string;
      duration: number;
      delay?: number;
      targets: string | Element | Element[];
      properties: anime.AnimeParams;
    }>
  ): anime.AnimeTimelineInstance {
    const timeline = this.createTimeline(id, {
      autoplay: false,
      complete: () => {
        console.log(`Phase sequence ${id} completed`);
      }
    });

    let currentOffset = 0;
    phases.forEach((phase, index) => {
      this.addToTimeline(
        id,
        phase.targets,
        {
          ...phase.properties,
          duration: phase.duration,
          begin: () => {
            console.log(`Phase ${phase.name} started`);
          }
        },
        currentOffset
      );

      currentOffset += phase.duration + (phase.delay || 0);
    });

    return timeline;
  }

  /**
   * Create looping background animation
   */
  createLoopingAnimation(
    id: string,
    targets: string | Element | Element[],
    properties: anime.AnimeParams,
    duration: number = 2000
  ): anime.AnimeInstance {
    return this.createAnimation(id, targets, {
      ...properties,
      duration,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
  }

  /**
   * Batch update multiple animations
   */
  batchUpdate(updates: Array<{ id: string; seek?: number; play?: boolean; pause?: boolean }>): void {
    updates.forEach(update => {
      if (update.seek !== undefined) {
        this.seek(update.id, update.seek);
      }
      if (update.play) {
        this.play(update.id);
      }
      if (update.pause) {
        this.pause(update.id);
      }
    });
  }
}