import { createStitches } from "@stitches/react";

export const theme = createStitches({
	prefix: "company",
	theme: {
		colors: {
			black: "black",
			white: "white",
			blue100: "hsla(213, 96%, 2%)",
			blue200: "hsla(213, 96%, 7%)",
			blue300: "hsla(208, 96%, 17%)",
			blue400: "hsla(202, 88%, 29%)",
			blue500: "hsla(196, 88%, 29%)",
		},
		space: {
			large: "2rem",
			medium: "1rem",
			small: "0.5rem",
			tiny: "0.25rem",
		},
		radii: {
			large: "1rem",
			medium: "0.5rem",
			small: "0.25rem",
			tiny: "0.125rem",
		},
	},
});

export const { css, styled } = theme;
