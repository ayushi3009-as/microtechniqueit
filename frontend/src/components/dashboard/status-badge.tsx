'use client';

export default function StatusBadge({ status }: { status: string }) {
  const getStatusStyle = (s: string) => {
    switch (s) {
      case 'PENDING':
      case 'UNDER_REVIEW':
        return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
      case 'IN_PROGRESS':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'COMPLETED':
      case 'ACCEPTED':
      case 'PAID':
        return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
      case 'ON_HOLD':
        return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
      case 'CANCELLED':
      case 'REJECTED':
        return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
      case 'SUBMITTED':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20';
    }
  };

  const formattedStatus = status.replace('_', ' ');

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusStyle(status)}`}>
      {formattedStatus}
    </span>
  );
}
