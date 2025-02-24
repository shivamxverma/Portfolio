import React from 'react';
import Link from 'next/link';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for styling

const CompetitiveProgramming = () => {
  // Profile data (replace with your actual profile URLs)
  const profiles = [
    { platform: 'CodeChef', url: 'https://www.codechef.com/users/mahavir99' },
    { platform: 'Codeforces', url: 'https://codeforces.com/profile/MahavirCoder' },
    { platform: 'LeetCode', url: 'https://leetcode.com/u/MahavirCoder/' },
    { platform: 'AtCoder', url: 'https://atcoder.jp/users/MahavirCoder' },
    { platform: 'CSES', url: 'https://cses.fi/user/169696' },
  ];

  return (
    <div className="competitive-programming flex flex-wrap gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* CodeChef Section */}
      <div className="platform flex-1 min-w-[250px] border border-gray-200 p-4 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">CodeChef</h2>
        <table className="w-full text-center">
          <thead>
            <tr className="text-gray-600">
              <th>Rating</th>
              <th>Stars</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-700">
              <td>1609</td>
              <td>⭐️⭐️⭐️</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-sm text-gray-600">Max Rating: 1650 (Jan 2024)</p>
        <p className="text-sm text-gray-600">Contests: 25</p>
      </div>

      {/* Codeforces Section */}
      <div className="platform flex-1 min-w-[250px] border border-gray-200 p-4 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Codeforces</h2>
        <table className="w-full text-center">
          <thead>
            <tr className="text-gray-600">
              <th>Rating</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-700">
              <td>1000</td>
              <td>Newbie</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-sm text-gray-600">Max Rating: 1074 (Dec 2023)</p>
        <p className="text-sm text-gray-600">Contests: 20</p>
      </div>

      {/* Problem Solving Statistics Section */}
      <div className="stats flex-1 min-w-[250px] border border-gray-200 p-4 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Problem Solving Stats</h2>
        <table className="w-full text-center">
          <thead>
            <tr className="text-gray-600 text-sm">
              <th>Total</th>
              <th>Data Structures</th>
              <th>Algorithms</th>
              <th>DP</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-700">
              <td>700+</td>
              <td>200+</td>
              <td>150+</td>
              <td>50+</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Profiles Section */}
      <div className="profiles flex-1 min-w-[250px] border border-gray-200 p-4 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Profiles</h2>
        <ul className="space-y-2">
          {profiles.map((profile, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="text-gray-700">{profile.platform}</span>
              <Link
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
              >
                <FaExternalLinkAlt size={14} />
                <span className="text-sm">View</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompetitiveProgramming;