import css from "styled-jsx/css";

import {
	FontSans,
	FontSerif,
	ColorBlack,
	ColorWhite,
	ColorMintGreen,
	ColorOrangeYellow,
	ColorGhostWhite,
	ColorLtGrey,
	ColorJet,
	ColorCoralRed,
	ColorDarkJungle
} from "./globals";

export default css.global`
	/*
		GLOBAL
	*/
	:root {
		/* Fonts */
		--font-family-serif: ${FontSerif};
		--font-family-sans: ${FontSans};

		/* Spacing */
		--standard-padding: 1rem;
		--grid-spacing: 0.5rem;

		/*
			THEME
		*/

		/* General */
		--accent-color: ${ColorMintGreen};
		--secondary-accent-color: ${ColorOrangeYellow};
		--background-color: ${ColorWhite};
		--background-mute-color: ${ColorGhostWhite};

		/* Text */
		--text-color: ${ColorBlack};
		--text-inverse-color: ${ColorWhite};
		--text-anchor-color: ${ColorMintGreen};

		/* Input */
		--input-border-color: ${ColorBlack};
		--input-error-color: ${ColorCoralRed};

		/* Control */
		--control-background-color: ${ColorBlack};
		--control-border-color: ${ColorBlack};
		--control-text-color: ${ColorWhite};

		/* Sidebar */
		--sidebar-main-color: ${ColorWhite};
		--sidebar-tab-color: ${ColorLtGrey};
	}

	[data-theme="dark"] {
		/* General */
		--background-color: ${ColorJet};
		--background-mute-color: ${ColorDarkJungle};

		/* Text */
		--text-color: ${ColorWhite};
		--text-inverse-color: ${ColorBlack};
		--text-anchor-color: ${ColorMintGreen};

		/* Input */
		--input-border-color: ${ColorWhite};
		--input-error-color: ${ColorCoralRed};

		/* Control */
		--control-background-color: ${ColorWhite};
		--control-border-color: ${ColorWhite};
		--control-text-color: ${ColorBlack};

		/* Sidebar */
		--sidebar-main-color: ${ColorJet};
		--sidebar-tab-color: ${ColorDarkJungle};
	}

	html {
		margin: 0;
		height: 100%;
		font-size: 16px;
		background-color: var(--background-color);
	}

	body {
		letter-spacing: 1px;
		color: var(--text-color);
		position: relative;
		font-family: ${FontSans};
		margin: 0;
	}

	body.noscroll {
		margin: 0;
		overflow: hidden;
	}

	div {
		position: relative;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: var(--text-color);
	}

	ul {
		position: relative;
		margin: 0;
		padding: 0;
	}
	li {
		list-style: none;
	}

	span {
		display: inline-block;
	}

	hr {
		border: 1px solid var(--text-color);
		background-color: var(--text-color);
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		font-weight: 400;
	}

	img {
		width: 100%;
	}

	button {
		padding: 0;
		margin: 0;
		background: none;
		border: none;
		height: 100%;
	}

	input:focus,
	textarea:focus,
	select:focus,
	button:focus,
	button:active {
		outline: none;
	}

	input {
		border-radius: none;
	}
`;
