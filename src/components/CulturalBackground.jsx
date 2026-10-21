import React from 'react';

export default function CulturalBackground() {
  return (
    <div className="cultural-background fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <g id="sekar-star">
            <g fill="#B6533D" stroke="#7C352D" strokeWidth=".7">
              <ellipse cx="0" cy="-11" rx="2.8" ry="9" />
              <ellipse cx="0" cy="-11" rx="2.8" ry="9" transform="rotate(45)" />
              <ellipse cx="0" cy="-11" rx="2.8" ry="9" transform="rotate(90)" />
              <ellipse cx="0" cy="-11" rx="2.8" ry="9" transform="rotate(135)" />
              <ellipse cx="0" cy="-11" rx="2.8" ry="9" transform="rotate(180)" />
              <ellipse cx="0" cy="-11" rx="2.8" ry="9" transform="rotate(225)" />
              <ellipse cx="0" cy="-11" rx="2.8" ry="9" transform="rotate(270)" />
              <ellipse cx="0" cy="-11" rx="2.8" ry="9" transform="rotate(315)" />
            </g>
            <circle r="6.5" fill="none" stroke="#D89262" strokeWidth="1.4" strokeDasharray="1.5 1.5" />
            <circle r="3.3" fill="#824033" />
            <circle r="1.4" fill="#E1A268" />
          </g>

          <g id="isen-sprig" fill="none" stroke="#A84637" strokeWidth="1.1" strokeLinecap="round">
            <path d="M-7 6 Q0 0 7 -6" />
            <path d="M-2 1 Q-7 -2 -7 -7 Q-2 -6 1 -2" fill="#B6533D" fillOpacity=".65" />
            <path d="M2 -1 Q7 2 7 7 Q2 6 -1 2" fill="#B6533D" fillOpacity=".65" />
          </g>

          <pattern id="sekar-ceplok-pattern" width="112" height="112" patternUnits="userSpaceOnUse">
            <use href="#sekar-star" transform="translate(28 28)" />
            <use href="#sekar-star" transform="translate(84 84) scale(.86) rotate(22.5)" />
            <use href="#isen-sprig" transform="translate(84 28) rotate(18)" />
            <use href="#isen-sprig" transform="translate(28 84) rotate(198)" />
            <circle cx="56" cy="56" r="1.5" fill="#B6533D" />
          </pattern>
          <radialGradient id="paper-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#D97350" stopOpacity=".14" />
            <stop offset="1" stopColor="#D97350" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="900" y="40" width="520" height="520" rx="260" fill="url(#paper-glow)" />
        <rect x="0" y="0" width="1440" height="1000" fill="url(#sekar-ceplok-pattern)" className="batik-field" />

        <g className="sakura-branch" fill="none" strokeLinecap="round">
          <path d="M1425 55 C1260 120 1190 205 1090 330 C1020 416 944 450 852 478" stroke="#65463C" strokeWidth="5" />
          <path d="M1248 160 C1195 120 1158 86 1130 34" stroke="#65463C" strokeWidth="3" />
          <path d="M1155 242 C1108 208 1068 175 1044 126" stroke="#65463C" strokeWidth="3" />
          <path d="M1073 348 C1024 324 987 288 960 244" stroke="#65463C" strokeWidth="3" />
          <path d="M1015 407 C956 402 914 382 870 348" stroke="#65463C" strokeWidth="2.5" />
        </g>

        <g className="sakura-blooms" fill="#D96C79" stroke="#B64E5B" strokeWidth="1.4">
          {[
            [1248,159], [1162,239], [1102,299], [1068,350], [1017,405], [959,401],
            [1132,68], [1050,143], [968,246], [879,350], [1315,112], [1198,199]
          ].map(([x, y], index) => (
            <g key={index} transform={`translate(${x} ${y}) rotate(${index * 19})`}>
              <ellipse cx="0" cy="-10" rx="6" ry="11" />
              <ellipse cx="9.5" cy="-3" rx="6" ry="11" transform="rotate(72 9.5 -3)" />
              <ellipse cx="6" cy="8" rx="6" ry="11" transform="rotate(144 6 8)" />
              <ellipse cx="-6" cy="8" rx="6" ry="11" transform="rotate(216 -6 8)" />
              <ellipse cx="-9.5" cy="-3" rx="6" ry="11" transform="rotate(288 -9.5 -3)" />
              <circle r="3" fill="#E9B66E" stroke="none" />
            </g>
          ))}
        </g>

        <g className="floating-petals" fill="#D96C79" opacity=".6">
          <ellipse cx="1060" cy="520" rx="4" ry="9" transform="rotate(28 1060 520)" />
          <ellipse cx="1180" cy="610" rx="4" ry="9" transform="rotate(-20 1180 610)" />
          <ellipse cx="920" cy="600" rx="4" ry="9" transform="rotate(54 920 600)" />
          <ellipse cx="1320" cy="500" rx="4" ry="9" transform="rotate(16 1320 500)" />
        </g>
      </svg>
    </div>
  );
}
