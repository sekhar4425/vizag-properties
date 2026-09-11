import { Shield, Building2, FileCheck, Globe } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'RERA-Compliant Projects' },
  { icon: Building2, label: 'Developer Tie-Ups' },
  { icon: FileCheck, label: 'End-to-End Documentation' },
  { icon: Globe, label: 'NRI-Friendly Process' },
];

export default function TrustStrip() {
  return (
    <div className="w-full bg-card border-y border-border py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center text-center">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <Icon className="w-[20px] h-[20px] text-gold" />
                <span className="uppercase text-xs tracking-wider text-muted font-medium">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
