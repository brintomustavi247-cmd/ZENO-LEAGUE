// src/components/animations/SkeletonLoader.jsx

import React from 'react';
import './skeleton-loader.css';

/**
 * Skeleton Loader Components
 * Show these while data loads (better than spinners for perceived performance)
 */

// Generic skeleton box
const SkeletonBox = ({ width = '100%', height = '20px', rounded = false }) => (
  <div 
    className="skeleton-box"
    style={{ 
      width, 
      height,
      borderRadius: rounded ? '50%' : '8px'
    }}
    role="status"
    aria-label="Loading content"
  />
);

// Match card skeleton (for match listings)
const MatchCardSkeleton = () => (
  <div className="skeleton-card" role="status">
    <SkeletonBox height="120px" />
    <div style={{ padding: '12px' }}>
      <SkeletonBox width="60%" height="18px" />
      <SkeletonBox width="40%" height="14px" style={{ marginTop: '8px' }} />
    </div>
  </div>
);

// Table row skeleton (for admin panels)
const TableRowSkeleton = ({ columns = 4 }) => (
  <tr className="skeleton-row">
    {Array.from({ length: columns }).map((_, i) => (
      <td key={i}>
        <SkeletonBox height="14px" width={`${70 + Math.random() * 30}%`} />
      </td>
    ))}
  </tr>
);

// Profile avatar skeleton
const AvatarSkeleton = ({ size = 48 }) => (
  <SkeletonBox width={size} height={size} rounded />
);

export { SkeletonBox, MatchCardSkeleton, TableRowSkeleton, AvatarSkeleton };
export default SkeletonBox;
