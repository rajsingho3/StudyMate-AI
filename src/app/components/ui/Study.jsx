const StudyMateLogoIcon = ({ className = "" }) => {
  return (
    <div
      className={`p-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition-all duration-300 ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="-6.25 -6.25 74.95 74.95"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e9d5ff" />
          </linearGradient>
        </defs>

        <g transform="translate(-782.964 -1356.609)">
          <path
            d="M798.022,1369.359v23.226h.034c.353,4.555,7.685,8.2,16.7,8.2s16.347-3.641,16.7-8.2h.033v-23.226Z"
            fill="url(#iconGradient)"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M843.415,1373.207l-29.225,14.6-29.227-14.6,29.227-14.6Z"
            fill="transparent"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            y1="19.235"
            transform="translate(784.964 1374.361)"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default StudyMateLogoIcon;
