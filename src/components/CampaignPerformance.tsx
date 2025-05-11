import React from "react";
import campaignData from "../assets/Untitled-report-Apr-1-2024-to-May-11-2025 (1).csv";

// If you want to parse CSV at build time, use a CSV loader or paste the data as a JS array below
const data = [
  {
    campaign: "Momenta traffic campaign 28/11",
    adSet: "Mometa campaign",
    reach: 6277,
    impressions: 6760,
    results: 25,
    amountSpent: 66.25,
    costPerResult: 2.65,
    resultType: "Instagram profile visits",
    start: "2024-11-28",
    end: "2024-12-02",
  },
  {
    campaign: "Momenta engagement 29/11",
    adSet: "Momenta engagement 29/11",
    reach: 6205,
    impressions: 10649,
    results: 16,
    amountSpent: 327.45,
    costPerResult: 20.47,
    resultType: "Messaging conversations started",
    start: "2024-11-29",
    end: "2024-12-03",
  },
  {
    campaign: "wholesell chetna 20/7",
    adSet: "chetna 20/7",
    reach: 3247,
    impressions: 5017,
    results: 70,
    amountSpent: 254.24,
    costPerResult: 3.63,
    resultType: "Messaging conversations started",
    start: "2024-07-20",
    end: "2024-07-23",
  },
  {
    campaign: "CHETNA FOOD  WHOLESELL",
    adSet: "New Traffic ad set",
    reach: 2811,
    impressions: 3368,
    results: 40,
    amountSpent: 143.88,
    costPerResult: 3.6,
    resultType: "Messaging conversations started",
    start: "2024-07-09",
    end: "2024-07-11",
  },
  {
    campaign: "resin by suvaliyas traffic",
    adSet: "New Engagement ad set",
    reach: 1664,
    impressions: 1963,
    results: 6,
    amountSpent: 195.09,
    costPerResult: 32.52,
    resultType: "Messaging conversations started",
    start: "2024-07-09",
    end: "Ongoing",
  },
  {
    campaign: "digital drive 6999 31/08",
    adSet: "New Engagement ad set",
    reach: 166,
    impressions: 261,
    results: 0,
    amountSpent: 47.31,
    costPerResult: 0,
    resultType: "",
    start: "2024-08-31",
    end: "2024-09-02",
  },
];

const totalReach = data.reduce((sum, c) => sum + (c.reach || 0), 0);
const totalImpressions = data.reduce((sum, c) => sum + (c.impressions || 0), 0);
const totalResults = data.reduce((sum, c) => sum + (c.results || 0), 0);
const totalSpent = data.reduce((sum, c) => sum + (c.amountSpent || 0), 0);

const CampaignPerformance: React.FC = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
      id="performance"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Campaign Performance
        </h2>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              {totalReach.toLocaleString()}
            </div>
            <div className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
              Total Reach
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              {totalImpressions.toLocaleString()}
            </div>
            <div className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
              Total Impressions
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              {totalResults.toLocaleString()}
            </div>
            <div className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
              Total Results
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              ₹{totalSpent.toLocaleString()}
            </div>
            <div className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
              Total Spent
            </div>
          </div>
        </div>
        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-xl shadow">
          <table className="min-w-full bg-white text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left">
                  Campaign
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left">Ad Set</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-right">Reach</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-right">
                  Impressions
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-right">
                  Results
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-right">
                  Amount Spent (₹)
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-right">
                  Cost/Result
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left">
                  Result Type
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left">Start</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left">End</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b last:border-none hover:bg-blue-50"
                >
                  <td className="py-1 sm:py-2 px-2 sm:px-4 font-medium">
                    {row.campaign}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">{row.adSet}</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 text-right">
                    {row.reach}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 text-right">
                    {row.impressions}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 text-right">
                    {row.results}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 text-right">
                    ₹{row.amountSpent}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 text-right">
                    {row.costPerResult ? `₹${row.costPerResult}` : "-"}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">
                    {row.resultType || "-"}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">{row.start}</td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4">{row.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CampaignPerformance;
