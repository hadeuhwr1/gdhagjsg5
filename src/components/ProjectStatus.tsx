import React, { useState, useEffect } from 'react';
import { Sparkles, Rocket, Target } from 'lucide-react';

const ProjectStatus: React.FC = () => {
  const completedMissions = 3;
  const totalMissions = 7;
  const recruitedAllies = 2;
  const [starDate, setStarDate] = useState('');

  useEffect(() => {
    const calculateStarDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const dayOfYear = Math.floor((now - new Date(year, 0, 0)) / (1000 * 60 * 60 * 24));
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${year - 1000}.${dayOfYear}.${hours}${minutes}`;
    };

    const updateStarDate = () => {
      setStarDate(calculateStarDate());
    };

    updateStarDate();
    const interval = setInterval(updateStarDate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-3 sm:p-5 mb-6">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
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

        <div className="font-mono text-xs space-y-2 sm:min-w-[200px] sm:border-l sm:border-purple-500/20 sm:pl-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">StarDate:</span>
              <span className="text-purple-400">{starDate}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Signal Status:</span>
              <span className="text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Stable
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Network Load:</span>
              <span className="text-cyan-400">87%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Anomalies:</span>
              <span className="text-purple-400">2 resolved</span>
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