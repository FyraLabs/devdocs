"use client";

export function SearchTerra({ macroname }: { macroname: string }) {
  const url = `https://github.com/search?q=repo%3Aterrapkg%2Fpackages+%28%25${macroname}+OR+%25%7B${macroname}%7D%29&type=code`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="terra-search-btn"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_1_2)">
          <circle cx="280" cy="233" r="150" fill="#3388FF" />
        </g>
        <g filter="url(#filter1_ii_1_2)">
          <path
            d="M70 344.252C89.5 346.419 133.4 338.052 153 287.252C172.6 236.452 221.5 230.419 243.5 233.752"
            stroke="#DDEEFF"
            strokeOpacity="0.8"
            strokeWidth="50"
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#filter2_ii_1_2)">
          <path
            d="M130 417.252C149.5 419.419 193.4 411.052 213 360.252C232.6 309.452 281.5 303.419 303.5 306.752"
            stroke="#DDEEFF"
            strokeOpacity="0.8"
            strokeWidth="50"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_ii_1_2"
            x="105"
            y="58"
            width="350"
            height="350"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-25" dy="-25" />
            <feGaussianBlur stdDeviation="20" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_2"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="25" dy="25" />
            <feGaussianBlur stdDeviation="20" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_1_2"
              result="effect2_innerShadow_1_2"
            />
          </filter>
          <filter
            id="filter1_ii_1_2"
            x="29.9978"
            y="193.055"
            width="253.506"
            height="191.485"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-15" dy="-15" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_2"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="15" dy="15" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_1_2"
              result="effect2_innerShadow_1_2"
            />
          </filter>
          <filter
            id="filter2_ii_1_2"
            x="89.9978"
            y="266.055"
            width="253.506"
            height="191.485"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-15" dy="-15" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_2"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="15" dy="15" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_1_2"
              result="effect2_innerShadow_1_2"
            />
          </filter>
        </defs>
      </svg>
      Find examples of <code>%{macroname}</code> in Terra
    </a>
  );
}
