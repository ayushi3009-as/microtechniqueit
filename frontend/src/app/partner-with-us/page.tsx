'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PartnerWithUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    address: '',
    state: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    try {
      const response = await fetch('http://localhost:8000/api/partners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contactNo: formData.contactNo,
          address: formData.address,
          state: formData.state,
          password: formData.password
        }),
      });

      if (response.ok) {
        alert("Thank you for registering as a partner!");
        setFormData({
          name: '', email: '', contactNo: '', address: '', state: '', password: '', confirmPassword: ''
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail || 'Registration failed'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 sm:px-12 flex items-center justify-center" style={{ background: 'var(--color-background)' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-xl p-8 sm:p-12"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold font-heading mb-4" style={{ color: 'var(--color-foreground)' }}>
            Partner With Us
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Join the Microtechnique IT network and let's grow together. Fill out the registration form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Contact No.</label>
              <input 
                type="tel" 
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="+1 234 567 890"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>State</label>
              <input 
                type="text" 
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="e.g. California"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Address</label>
            <textarea 
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Your full address..."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-sm" style={{ color: 'var(--color-foreground)' }}>
            <p className="font-semibold mb-1">How to set a strong password:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs sm:text-sm">
              <li>Use at least 8 characters.</li>
              <li>Include a mix of uppercase and lowercase letters.</li>
              <li>Include at least one number (0-9).</li>
              <li>Include at least one special character (e.g., !@#$%^&*).</li>
              <li>Avoid using easily guessable information like your name or birthdate.</li>
            </ul>
          </div>

          <button 
            type="submit" 
            className="w-full flex items-center justify-center py-3.5 px-6 rounded-lg font-semibold text-white transition-all shadow-md hover:shadow-lg"
            style={{ background: 'var(--primary)', border: '1px solid var(--color-border)' }}
          >
            Register as Partner
          </button>
        </form>
      </motion.div>
    </div>
  );
}
