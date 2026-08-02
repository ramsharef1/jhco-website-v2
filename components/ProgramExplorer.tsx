'use client';

import { useState } from 'react';

const programs = [
  {
    id: 1,
    name: 'Emergency Food Aid',
    region: 'Middle East',
    status: 'Active',
    beneficiaries: 15000,
    funded: 75,
    icon: '🍽️',
    description: 'Providing emergency food packages to displaced families',
  },
  {
    id: 2,
    name: 'Education Initiative',
    region: 'Africa',
    status: 'Active',
    beneficiaries: 8500,
    funded: 60,
    icon: '📚',
    description: 'Scholarships and school supplies for underprivileged children',
  },
  {
    id: 3,
    name: 'Healthcare Mobile Clinics',
    region: 'Middle East',
    status: 'Active',
    beneficiaries: 12000,
    funded: 85,
    icon: '⚕️',
    description: 'Mobile clinics providing medical care to remote areas',
  },
  {
    id: 4,
    name: 'Water & Sanitation',
    region: 'Africa',
    status: 'Active',
    beneficiaries: 25000,
    funded: 45,
    icon: '💧',
    description: 'Building clean water infrastructure in rural communities',
  },
  {
    id: 5,
    name: 'Refugee Skills Training',
    region: 'Europe',
    status: 'Planning',
    beneficiaries: 3000,
    funded: 30,
    icon: '🎓',
    description: 'Job skills and language training for displaced persons',
  },
  {
    id: 6,
    name: 'Livelihood Programs',
    region: 'Asia',
    status: 'Active',
    beneficiaries: 9000,
    funded: 70,
    icon: '💼',
    description: 'Agricultural and business training for economic independence',
  },
];

const regions = ['All Regions', 'Middle East', 'Africa', 'Europe', 'Asia'];
const statuses = ['All Status', 'Active', 'Planning', 'Completed'];

export default function ProgramExplorer() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const filtered = programs.filter(
    (p) =>
      (selectedRegion === 'All Regions' || p.region === selectedRegion) &&
      (selectedStatus === 'All Status' || p.status === selectedStatus)
  );

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-marcellus text-navy-deep mb-4">Active Programs</h2>
          <p className="text-xl text-gray-600">Explore our initiatives across 30+ countries</p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 bg-cream-luxury p-8 rounded-lg">
          <div>
            <label className="block text-sm font-semibold text-navy-deep mb-3 uppercase">Region</label>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    selectedRegion === region
                      ? 'bg-gold-primary text-navy-deep'
                      : 'bg-white text-navy-deep border-2 border-gold-primary/30 hover:border-gold-primary'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy-deep mb-3 uppercase">Status</label>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    selectedStatus === status
                      ? 'bg-navy-deep text-white'
                      : 'bg-white text-navy-deep border-2 border-navy-deep/30 hover:border-navy-deep'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program) => (
            <div key={program.id} className="bg-gradient-to-br from-cream-luxury to-ivory border border-border-light rounded-lg p-8 hover:shadow-premium transition">
              <div className="text-5xl mb-4">{program.icon}</div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-marcellus text-navy-deep">{program.name}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  program.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : program.status === 'Planning'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {program.status}
                </span>
              </div>

              <p className="text-sm text-gold-primary font-semibold uppercase mb-3">{program.region}</p>
              <p className="text-gray-600 mb-6 text-sm">{program.description}</p>

              {/* Beneficiaries */}
              <div className="mb-4 pb-4 border-b border-border-light">
                <p className="text-sm text-gray-600 mb-1">Beneficiaries Reached</p>
                <p className="text-2xl font-marcellus text-navy-deep">{program.beneficiaries.toLocaleString()}</p>
              </div>

              {/* Funding Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Funding Progress</p>
                  <p className="text-sm font-bold text-gold-primary">{program.funded}%</p>
                </div>
                <div className="w-full bg-gray-light/20 rounded-full h-2">
                  <div className="bg-gold-primary h-2 rounded-full" style={{ width: `${program.funded}%` }}></div>
                </div>
              </div>

              <button className="mt-6 w-full bg-navy-deep hover:bg-navy-royal text-white font-bold py-2 rounded-lg transition text-sm">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No programs found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
