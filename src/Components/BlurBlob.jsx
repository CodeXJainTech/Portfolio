// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size, color = '#00FFFF' }) => {
  // Destructure position and size
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Blob with blur & soft opacity */}
      <div
        className="w-full h-full rounded-full opacity-20 blur-3xl animate-blob"
        style={{
          background: color,
          boxShadow: `0 0 60px ${color}, 0 0 100px ${color}`,
        }}
      ></div>
    </div>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }),
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }),
};

export default BlurBlob;
