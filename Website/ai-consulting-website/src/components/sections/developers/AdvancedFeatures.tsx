'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Slack, Github, Database, Cpu, Network } from 'lucide-react';

const AdvancedFeatures: React.FC = () => {
  const mcpConnections = [
    { name: "Client Instance", icon: <Cpu className="w-6 h-6" />, color: "text-primary-blue" },
    { name: "Slack", icon: <Slack className="w-6 h-6" />, color: "text-success-green" },
    { name: "GitHub", icon: <Github className="w-6 h-6" />, color: "text-accent-red" },
    { name: "Database", icon: <Database className="w-6 h-6" />, color: "text-warning-orange" },
  ];

  return (
    <section className="py-24 bg-background-dark-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h1 font-bold mb-6 text-text-primary">
              Veille Technologique Continue
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              On vous garde au courant des nouveaux stack de développement logiciel, des MCP, des meilleures pratiques.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Nouveaux Stacks de Développement
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Restez à jour avec les dernières technologies et frameworks émergents
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-accent-red" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Protocoles MCP Avancés
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Découvrez les dernières innovations en Model Context Protocol
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-success-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Meilleures Pratiques
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Intégrez les standards industry et les patterns éprouvés
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Dynamic MCP Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Central MCP Hub */}
            <div className="relative flex items-center justify-center">
              {/* Connection Lines using div */}
              {mcpConnections.map((connection, index) => {
                const angle = (index * 90) + 45;
                const lineLength = 76; // Distance from MCP edge to node edge
                
                return (
                  <motion.div
                    key={`line-${index}`}
                    className="absolute bg-primary-blue h-1 z-5"
                    style={{
                      width: `${lineLength}px`,
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 50%',
                      transform: `translate(64px, -2px) rotate(${angle}deg)`
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ 
                      scaleX: 1,
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      scaleX: { duration: 0.8, delay: index * 0.2 },
                      opacity: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                    }}
                  />
                );
              })}

              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-primary-blue to-accent-red rounded-full flex items-center justify-center shadow-2xl relative z-20"
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="text-white font-bold text-xl relative z-30 select-none">MCP</div>
              </motion.div>

              {/* Connection Nodes */}
              {mcpConnections.map((connection, index) => {
                const angle = (index * 90) + 45;
                const radius = 140;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;

                return (
                  <React.Fragment key={connection.name}>
                    {/* Connection Node */}
                    <motion.div
                      className="absolute w-16 h-16 bg-background-dark border-2 border-primary-blue rounded-full flex items-center justify-center shadow-lg z-10"
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className={connection.color}>
                        {connection.icon}
                      </div>
                    </motion.div>

                    {/* Connection Label */}
                    <motion.div
                      className="absolute text-xs font-medium text-text-secondary z-10"
                      style={{
                        transform: `translate(${x * 1.2}px, ${y * 1.2 + 25}px)`
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      {connection.name}
                    </motion.div>
                  </React.Fragment>
                );
              })}

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;