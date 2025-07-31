import React from 'react';
import { ClipboardList, Users, Briefcase, BarChart2, Search, Handshake, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Create Relationship',
    number: 1,
    description: 'We create a relationship with our clients and understand in depth their organization culture, functional dynamics, and nature of their industry.'
  },
  {
    icon: Handshake,
    title: 'Collaborate',
    number: 2,
    description: 'We collaborate with our clients to help identify production issues, understand their function and process, and strategize solutions.'
  },
  {
    icon: CheckCircle,
    title: 'Follow Through',
    number: 3,
    description: 'We follow through with a comprehensive plan including recruitment, coordination, and placement of the right personnel.'
  },
  {
    icon: BarChart2,
    title: 'Performance Monitoring',
    number: 4,
    description: 'Continuous monitoring and assessment ensure high-quality service delivery and client satisfaction.'
  },
];

const businessPlanSteps = [
  {
    phase: 'I. PROCESS',
    title: 'Create Relationship & Understanding',
    items: [
      'Organization culture',
      'Functional dynamics', 
      'Nature of their industry'
    ]
  },
  {
    phase: 'II. COLLABORATE',
    title: 'Identify & Strategize',
    items: [
      'Identify production issues',
      'Understand function and process',
      'Strategize solutions'
    ]
  },
  {
    phase: 'III. FOLLOW THROUGH',
    title: 'Execute the Plan',
    items: [
      'Recruitment',
      'Coordinate',
      'Placement'
    ]
  }
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  efficiency: [72, 78, 82, 86, 89, 92, 94, 96, 97, 98, 99, 99.5],
  retention: [68, 74, 79, 84, 88, 91, 93, 95, 96, 97, 98, 98.5],
  clientSatisfaction: [75, 80, 84, 87, 90, 93, 95, 96, 97, 98, 99, 99.2],
  costSavings: [15, 22, 28, 35, 42, 48, 54, 60, 65, 70, 75, 78]
};

const Process = () => {
  return (
    <div className="min-h-screen bg-[#2C2A28] flex flex-col items-center py-6 sm:py-8 md:py-16 px-3 sm:px-4 md:px-6">
      {/* Header Section */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2 px-2">Our Process</h1>
      <p className="text-gray-200 text-center text-sm sm:text-base md:text-base mb-6 sm:mb-8 md:mb-12 max-w-2xl px-2">
        A streamlined approach to providing professional labor solutions for your business needs.
      </p>
      
      {/* Process Steps Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-20">
        {processSteps.map((step) => (
          <div key={step.number} className="rounded-xl sm:rounded-2xl bg-[#23211f] p-4 sm:p-6 md:p-8 flex flex-col items-center shadow-lg text-center">
            <div className="mb-2 sm:mb-3 md:mb-4 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#181715]">
              {React.createElement(step.icon, { className: 'h-4 w-4 sm:h-5 sm:w-5 md:h-7 md:w-7 text-white' })}
            </div>
            <div className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-1 md:mb-2">{step.number}</div>
            <div className="text-sm sm:text-base md:text-lg text-white font-semibold mb-1 md:mb-2">{step.title}</div>
            <div className="text-gray-200 text-xs sm:text-xs md:text-sm leading-relaxed">{step.description}</div>
          </div>
        ))}
      </div>

      {/* Decorative Divider */}
      <div className="w-full max-w-4xl flex items-center justify-center mb-10 sm:mb-12 md:mb-20 px-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        <div className="mx-2 sm:mx-4 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full shadow-lg"></div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>

      {/* Business Plan Section */}
      <div className="w-full max-w-6xl mb-10 sm:mb-12 md:mb-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8 px-2">Our Business Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {businessPlanSteps.map((step, index) => (
            <div key={index} className="bg-[#23211f] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{step.phase}</h3>
              <h4 className="text-sm sm:text-md font-medium text-gray-200 mb-3 sm:mb-4">{step.title}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-200 text-xs sm:text-sm flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Recruitment Process Note */}
        <div className="bg-[#23211f] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg mt-4 sm:mt-6">
          <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Our Recruitment Process</h4>
          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
            Our resource from the recruitment process begins carefully by selecting and interviewing prospective candidates from our network of experienced employees who have worked in the same or similar industries on our database.
          </p>
        </div>
      </div>

      {/* Section Divider with Icon */}
      <div className="w-full max-w-4xl flex items-center justify-center mb-10 sm:mb-12 md:mb-20 px-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="mx-3 sm:mx-6 p-2 sm:p-3 bg-[#23211f] rounded-full border border-blue-400">
          <BarChart2 className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>

      {/* Performance Metrics Section */}
      <div className="w-full bg-[#23211f] py-6 sm:py-8 md:py-16 px-3 sm:px-4 rounded-xl sm:rounded-2xl max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2 px-2">Performance Metrics</h2>
        <p className="text-gray-200 text-center text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
          Our commitment to excellence is reflected in our consistently high performance metrics showing remarkable year-over-year improvements.
        </p>
        
        {/* Key Performance Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
          <div className="bg-[#181715] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-green-400 mb-1">99.5%</div>
            <div className="text-gray-200 text-xs sm:text-xs md:text-sm leading-tight">Efficiency Rate</div>
            <div className="text-green-400 text-xs">↗ +27.5% YoY</div>
          </div>
          <div className="bg-[#181715] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400 mb-1">98.5%</div>
            <div className="text-gray-200 text-xs sm:text-xs md:text-sm leading-tight">Retention Rate</div>
            <div className="text-blue-400 text-xs">↗ +30.5% YoY</div>
          </div>
          <div className="bg-[#181715] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1">99.2%</div>
            <div className="text-gray-200 text-xs sm:text-xs md:text-sm leading-tight">Client Satisfaction</div>
            <div className="text-purple-400 text-xs">↗ +24.2% YoY</div>
          </div>
          <div className="bg-[#181715] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">78%</div>
            <div className="text-gray-200 text-xs sm:text-xs md:text-sm leading-tight">Cost Savings</div>
            <div className="text-yellow-400 text-xs">↗ +63% YoY</div>
          </div>
        </div>

        {/* Charts Divider */}
        <div className="w-full flex items-center justify-center mb-6 sm:mb-8 px-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-gray-600"></div>
          <div className="mx-2 sm:mx-4 text-gray-400 text-xs sm:text-sm font-medium whitespace-nowrap">Performance Charts</div>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600 via-gray-600 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
          {/* Efficiency & Satisfaction Rates Chart */}
          <div className="bg-[#181715] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
            <div className="text-white font-semibold text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">Efficiency & Client Satisfaction Rates</div>
            <Chart labels={chartData.labels} data={chartData.efficiency} />
          </div>
          {/* Worker Retention Rate Chart */}
          <div className="bg-[#181715] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
            <div className="text-white font-semibold text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">Worker Retention & Cost Savings</div>
            <Chart labels={chartData.labels} data={chartData.retention} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced mobile-responsive chart component
const Chart = ({ labels, data }: { labels: string[]; data: number[] }) => {
  const max = 100;
  const min = 0;
  const width = 280; // Reduced for better mobile fit
  const height = 140; // Reduced for better mobile fit
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * (width - 40) + 30;
    const y = height - 25 - ((d - min) / (max - min)) * (height - 50);
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <div className="w-full overflow-x-auto">
      <svg width={width} height={height} className="w-full min-w-[280px]" viewBox={`0 0 ${width} ${height}`}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = height - 25 - ((v - min) / (max - min)) * (height - 50);
          return <line key={v} x1={30} y1={y} x2={width - 10} y2={y} stroke="#333" strokeDasharray="2,2" />;
        })}
        {/* Axis */}
        <line x1={30} y1={height - 25} x2={width - 10} y2={height - 25} stroke="#666" />
        <line x1={30} y1={height - 25} x2={30} y2={25} stroke="#666" />
        {/* Data line */}
        <polyline fill="none" stroke="#60a5fa" strokeWidth={2} points={points} />
        {/* Data points */}
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * (width - 40) + 30;
          const y = height - 25 - ((d - min) / (max - min)) * (height - 50);
          return <circle key={i} cx={x} cy={y} r={2.5} fill="#60a5fa" />;
        })}
        {/* Y-axis labels */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = height - 25 - ((v - min) / (max - min)) * (height - 50);
          return <text key={v} x={25} y={y + 3} fill="#999" fontSize={8} textAnchor="end">{v}%</text>;
        })}
        {/* X-axis labels - Show fewer labels on mobile */}
        {labels.filter((_, i) => i % 2 === 0 || i === labels.length - 1).map((label, i) => {
          const originalIndex = i * 2 >= labels.length - 1 ? labels.length - 1 : i * 2;
          const x = (originalIndex / (labels.length - 1)) * (width - 40) + 30;
          return <text key={originalIndex} x={x} y={height - 10} fill="#999" fontSize={8} textAnchor="middle">{label}</text>;
        })}
      </svg>
    </div>
  );
};

export default Process;