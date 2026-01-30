import React from 'react';

export default function TeacherDashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto p-6">
				{children}
			</div>
		</div>
	);
}
