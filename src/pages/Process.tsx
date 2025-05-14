import React from 'react';
import { ClipboardList, Users, Briefcase, BarChart2 } from 'lucide-react';

const processSteps = [
  {
    icon: ClipboardList,
    title: 'Initial Assessment',
    number: 1,
    description: 'We evaluate your specific needs and requirements to understand the scope of labor support needed.'
  },
  {
    icon: Users,
    title: 'Worker Selection',
    number: 2,
    description: 'Our team carefully selects qualified workers who match your industry requirements and expertise needs.'
  },
  {
    icon: Briefcase,
    title: 'Deployment',
    number: 3,
    description: 'Selected workers are efficiently deployed to your location, fully prepared and briefed on their responsibilities.'
  },
  {
    icon: BarChart2,
    title: 'Performance Monitoring',
    number: 4,
    description: 'Continuous monitoring and assessment ensure high-quality service delivery and client satisfaction.'
  },
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  efficiency: [85, 88, 90, 92, 93, 95],
  retention: [90, 91, 92, 93, 94, 95],
};

const Process = () => {
  return (
    <div className="min-h-screen bg-[#2C2A28] flex flex-col items-center py-16 px-2">
      <h1 className="text-4xl font-bold text-white text-center mb-2">Our Process</h1>
      <p className="text-gray-200 text-center mb-12 max-w-2xl">
        A streamlined approach to providing professional labor solutions for your business needs.
      </p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        {processSteps.map((step) => (
          <div key={step.number} className="rounded-2xl bg-[#23211f] p-8 flex flex-col items-center shadow-lg text-center">
            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#181715]">
              {React.createElement(step.icon, { className: 'h-7 w-7 text-white' })}
            </div>
            <div className="text-2xl text-white font-bold mb-2">{step.number}</div>
            <div className="text-lg text-white font-semibold mb-2">{step.title}</div>
            <div className="text-gray-200 text-sm">{step.description}</div>
          </div>
        ))}
      </div>
      <div className="w-full bg-[#23211f] py-16 px-4 rounded-2xl max-w-6xl mx-auto mt-8">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Performance Metrics</h2>
        <p className="text-gray-200 text-center mb-10 max-w-2xl mx-auto">
          Our commitment to excellence is reflected in our consistently high performance metrics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Efficiency & Satisfaction Rates Chart */}
          <div className="bg-[#181715] rounded-xl p-6">
            <div className="text-white font-semibold mb-4">Efficiency & Satisfaction Rates</div>
            <Chart labels={chartData.labels} data={chartData.efficiency} />
          </div>
          {/* Worker Retention Rate Chart */}
          <div className="bg-[#181715] rounded-xl p-6">
            <div className="text-white font-semibold mb-4">Worker Retention Rate</div>
            <Chart labels={chartData.labels} data={chartData.retention} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple placeholder chart using SVG
const Chart = ({ labels, data }: { labels: string[]; data: number[] }) => {
  const max = 100;
  const min = 0;
  const width = 320;
  const height = 160;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * (width - 40) + 30;
    const y = height - 30 - ((d - min) / (max - min)) * (height - 60);
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width={width} height={height} className="w-full">
      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map((v) => {
        const y = height - 30 - ((v - min) / (max - min)) * (height - 60);
        return <line key={v} x1={30} y1={y} x2={width - 10} y2={y} stroke="#333" strokeDasharray="2,2" />;
      })}
      {/* Axis */}
      <line x1={30} y1={height - 30} x2={width - 10} y2={height - 30} stroke="#666" />
      <line x1={30} y1={height - 30} x2={30} y2={30} stroke="#666" />
      {/* Data line */}
      <polyline fill="none" stroke="#60a5fa" strokeWidth={2} points={points} />
      {/* Data points */}
      {data.map((d, i) => {
        const x = (i / (data.length - 1)) * (width - 40) + 30;
        const y = height - 30 - ((d - min) / (max - min)) * (height - 60);
        return <circle key={i} cx={x} cy={y} r={3} fill="#60a5fa" />;
      })}
      {/* Labels */}
      {labels.map((label, i) => {
        const x = (i / (labels.length - 1)) * (width - 40) + 30;
        return <text key={label} x={x} y={height - 10} textAnchor="middle" fontSize={12} fill="#888">{label}</text>;
      })}
      {/* Y-axis labels */}
      {[0, 25, 50, 75, 100].map((v) => {
        const y = height - 30 - ((v - min) / (max - min)) * (height - 60);
        return <text key={v} x={10} y={y + 4} fontSize={12} fill="#888">{v}</text>;
      })}
    </svg>
  );
};

export default Process; 