import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <svg
            height="25"
            viewBox="0 0 666.66669 666.66669"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="1.33333">
              <path
                d="m332.66668 418.66668h-84.66667v-85.33334-85.33333h84.66667 84.66667v-85.33334-85.333334h85.33333 85.33334v85.333334 85.33334h-85.33334-85.33333v85.33333 85.33334z"
                fill="#fef400"
              />
              <path
                d="m248.00001 589.33335h-170.666674v-170.66667-170.66667h85.333334 85.33334v-85.33334-85.333334h84.66667 84.66667v85.333334 85.33334h85.33333 85.33334v85.33333 85.33334h-84.66667-84.66667v85.33334 85.33333zm84.66667-170.66667h84.66667v-85.33334-85.33333h-84.66667-84.66667v85.33333 85.33334z"
                fill="#fe6565"
              />
            </g>
          </svg>

          <span>Developer</span>
        </div>
      ),
    },
    githubUrl: "https://github.com/FyraLabs/devdocs",
  };
}
