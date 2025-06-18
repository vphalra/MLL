// Removed React import

const industries = [
  'Manufacturing',
  'Agriculture',
  'Textile',
  'Chemical',
  'Construction',
];

const employmentTypes = [
  'Full Time',
  'Part Time',
  'Temporary',
  'Contract',
];

const RequestServices = () => {
  return (
    <div className="min-h-screen bg-[#2C2A28] flex flex-col items-center py-16 px-2">
      <h1 className="text-4xl font-bold text-white text-center mb-2">Request Services</h1>
      <p className="text-gray-200 text-center mb-12 max-w-2xl">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>
      <div className="w-full max-w-3xl rounded-2xl bg-[#23211f] p-8 shadow-lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-200 text-sm mb-1">Full Name *</label>
              <input type="text" className="w-full rounded-lg bg-[#181715] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-gray-200 text-sm mb-1">Business Name *</label>
              <input type="text" className="w-full rounded-lg bg-[#181715] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Company Inc." required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-200 text-sm mb-1">Email *</label>
              <input type="email" className="w-full rounded-lg bg-[#181715] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" placeholder="john@company.com" required />
            </div>
            <div>
              <label className="block text-gray-200 text-sm mb-1">Phone *</label>
              <input type="tel" className="w-full rounded-lg bg-[#181715] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" placeholder="(555) 123-4567" required />
            </div>
          </div>
          <div>
            <label className="block text-gray-200 text-sm mb-1">Industry *</label>
            <select className="w-full rounded-lg bg-[#181715] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" required>
              <option value="">Select an industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-200 text-sm mb-1">Employment Type *</label>
            <select className="w-full rounded-lg bg-[#181715] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" required>
              <option value="">Select employment type</option>
              {employmentTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-200 text-sm mb-1">Service Details *</label>
            <textarea className="w-full rounded-lg bg-[#181715] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" rows={4} placeholder="Describe your service needs..." required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-200 text-sm mb-1">Number of Employees (Optional)</label>
              <input type="number" min="1" className="w-full rounded-lg bg-[#181715] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" placeholder="10" />
            </div>
            <div>
              <label className="block text-gray-200 text-sm mb-1">Start Date (Optional)</label>
              <input type="date" className="w-full rounded-lg bg-[#181715] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" />
            </div>
          </div>
          <button type="submit" className="w-full bg-white text-black font-semibold py-3 rounded-lg transition-colors duration-300 hover:bg-gray-200">
            Submit Service Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestServices;