"use client";
import { useState } from "react";

export default function Home() {
  const [selectedRole, setSelectedRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { value: "luzugh", label: "Luzugh Branch", defaultPassword: "1234" },
    { value: "nizwa", label: "Nizwa Branch", defaultPassword: "2345" },
    { value: "birkat", label: "Birkat Mouz Branch", defaultPassword: "3456" },
    { value: "admin", label: "Master Administrator", defaultPassword: "0987" },
    { value: "foreman", label: "Foreman", defaultPassword: "0000" },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const selectedRoleData = roles.find(role => role.value === selectedRole);
      
      if (selectedRoleData && password === selectedRoleData.defaultPassword) {
        switch (selectedRole) {
          case 'luzugh':
            alert('✅ Luzugh Branch Login Successful!');
            break;
          case 'nizwa':
            alert('✅ Nizwa Branch Login Successful!');
            break;
          case 'birkat':
            alert('✅ Birkat Mouz Branch Login Successful!');
            break;
          case 'admin':
            alert('✅ Admin Login Successful!');
            break;
          case 'foreman':
            alert('✅ Foreman Login Successful!');
            break;
        }
      } else {
        alert('❌ Invalid password for selected role');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">🥬</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Cave Vegetables and Fruit</h1>
                <p className="text-sm text-gray-600">Business Management System</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Multi-Branch Operations</p>
              <p className="text-xs text-gray-400">Luzugh • Nizwa • Birkat Mouz</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Business
              <span className="text-green-600 block">Management System</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Streamline your multi-branch operations with real-time sales tracking, 
              supplier management, and comprehensive wastage analytics.
            </p>
          </div>
        </div>
      </div>

      {/* Login Section - NO USERNAME FIELD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white shadow-2xl rounded-lg border-0 backdrop-blur-sm p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Access Your Dashboard</h2>
              <p className="text-gray-600 mt-2">
                Select your role and enter password to continue
              </p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium text-gray-700">
                  Select Your Role
                </label>
                <select 
                  value={selectedRole} 
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Choose your access level</option>
                  {roles.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
              </div>

              {selectedRole && (
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
              )}

              {selectedRole && (
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
              )}
            </form>

            {/* Password Reference */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Default Passwords:</h4>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Luzugh Branch:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">1234</span>
                </div>
                <div className="flex justify-between">
                  <span>Nizwa Branch:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">2345</span>
                </div>
                <div className="flex justify-between">
                  <span>Birkat Mouz:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">3456</span>
                </div>
                <div className="flex justify-between">
                  <span>Administrator:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">0987</span>
                </div>
                <div className="flex justify-between">
                  <span>Foreman:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">0000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">System Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed specifically for Cave Vegetables and Fruit operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Branch Management</h3>
              <p className="text-gray-600">
                Manage Luzugh, Nizwa, and Birkat Mouz branches with individual dashboards and centralized oversight.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales & Wastage Tracking</h3>
              <p className="text-gray-600">
                Daily sales entry with cash, credit, visa payments tracking and comprehensive wastage reporting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Supplier Management</h3>
              <p className="text-gray-600">
                Track supplier credits, bank transfers, and maintain comprehensive supplier relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
