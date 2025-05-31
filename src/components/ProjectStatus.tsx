import React from 'react';
import { Sparkles, Rocket, Target } from 'lucide-react';

const ProjectStatus: React.FC = () => {
  const completedMissions = 3;
  const totalMissions = 7;
  const recruitedAllies = 2;

  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5 mb-6">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles size={24} className="text-purple-400" />
          <h2 className="text-xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
            Welcome back, Commander Vega
          </h2>
        </div>

        <div className="space-y-2 font-mono">
          <div className="flex items-center gap-2 text-cyan-400">
            <Target size={16} />
            <span>Status: Phase 2 — Airdrop Initiated</span>
          </div>
          
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Rocket size={16} className="text-purple-400" />
              <span>Missions: {completedMissions}/{totalMissions}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Allies: {recruitedAllies}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-40 pointer-events-none opacity-10">
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default ProjectStatus;