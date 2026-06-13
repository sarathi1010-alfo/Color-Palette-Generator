import React, { useState } from 'react';
import { generateBrandSystem, BrandSystem } from '@/lib/brand-personality';
import { Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function PersonalityGenerator({ onGenerate }: { onGenerate: (system: BrandSystem) => void }) {
  const [industry, setIndustry] = useState('startup');
  const [emotion, setEmotion] = useState('trust');
  const [audience, setAudience] = useState('modern');

  const handleGenerate = () => {
    const system = generateBrandSystem(industry, emotion, audience);
    onGenerate(system);
  };

  return (
    <div className="bg-surface border border-border p-6 rounded-2xl space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Wand2 className="text-primary" size={20} />
        <h3 className="text-lg font-bold">Brand Personality</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-text-secondary uppercase">Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full bg-background border border-border rounded-lg p-2 text-sm focus:outline-none focus:border-primary"
          >
            <option value="startup">Startup SaaS</option>
            <option value="healthcare">Healthcare</option>
            <option value="fashion">Fashion & Beauty</option>
            <option value="gaming">Gaming</option>
            <option value="finance">Finance & Fintech</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-text-secondary uppercase">Emotion</label>
          <select
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            className="w-full bg-background border border-border rounded-lg p-2 text-sm focus:outline-none focus:border-primary"
          >
            <option value="trust">Trust & Security</option>
            <option value="energy">Energy & Action</option>
            <option value="calm">Calm & Wellness</option>
            <option value="luxury">Luxury & Premium</option>
            <option value="creative">Creative & Playful</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-text-secondary uppercase">Audience Vibe</label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="w-full bg-background border border-border rounded-lg p-2 text-sm focus:outline-none focus:border-primary"
          >
            <option value="modern">Modern & Clean</option>
            <option value="fun">Fun & Approachable</option>
            <option value="professional">Professional & Corporate</option>
          </select>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleGenerate}
        className="w-full bg-text-primary text-background font-bold py-3 rounded-xl mt-4 flex items-center justify-center gap-2 transition-colors"
      >
        <Wand2 size={16} />
        Generate Identity
      </motion.button>
    </div>
  );
}
