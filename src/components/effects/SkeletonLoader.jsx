import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      {/* Header skeleton */}
      <div className="skeleton-header">
        <div className="skeleton-avatar skeleton" style={{width: 48, height: 48}}></div>
        <div>
          <div className="skeleton-text skeleton" style={{width: 120, height: 16}}></div>
          <div className="skeleton-text skeleton" style={{width: 80, height: 12}}></div>
        </div>
      </div>

      {/* Match cards skeleton */}
      <div className="skeleton-grid">
        {[1,2,3,4].map((i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-image skeleton" style={{height: 140}}></div>
            <div className="skeleton-text skeleton" style={{width: '60%', height: 14}}></div>
            <div className="skeleton-button skeleton" style={{width: 100, height: 38}}></div>
          </div>
        ))}
      </div>

      {/* Bottom section skeletons */}
      <div style={{display: 'flex', gap: 16, marginTop: 24}}>
        <div className="skeleton-text skeleton" style={{flex: 1, height: 14}}></div>
        <div className="skeleton-text skeleton" style={{flex: 2, height: 14}}></div>
        <div className="skeleton-text skeleton" style={{flex: 3, height: 14}}></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;