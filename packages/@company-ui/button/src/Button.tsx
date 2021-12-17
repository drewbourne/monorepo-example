import { styled } from "@company-ui/theme";
// import * as React from "react";
// import type * as Stitches from "@stitches/core";

export const Button = styled("button", {
	all: "unset",
	color: "$blue200",
	border: "1px solid",
	borderColor: "$white",
	borderRadius: "$small",
	backgroundColor: "$white",
	lineHeight: "1rem",

	variants: {
		rank: {
			primary: {
				color: "$white",
				borderColor: "$blue200",
				backgroundColor: "$blue200",
			},
			secondary: {
				color: "$blue200",
				borderColor: "$blue200",
				backgroundColor: "$white",
			},
			tertiary: {
				color: "$blue200",
				borderColor: "$white",
				backgroundColor: "$white",
			},
		},
		size: {
			large: {
				paddingInline: "$large",
				paddingBlock: "$medium",
				borderRadius: "$large",
			},
			medium: {
				paddingInline: "$medium",
				paddingBlock: "$small",
				borderRadius: "$medium",
			},
			small: {
				paddingInline: "$small",
				paddingBlock: "$tiny",
				borderRadius: "$small",
			},
		},
	},

	defaultVariants: {
		rank: "secondary",
		size: "medium",
	},
});

// type ButtonVariants = Stitches.VariantProps<typeof buttonStyles>;

// export interface ButtonProps extends ButtonVariants {
// 	id?: string;
// 	children?: React.ReactNode;
// }

// export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
// 	({ children, rank, size, id }, forwardedRef) => {
// 		return (
// 			<button
// 				ref={forwardedRef}
// 				id={id}
// 				className={buttonStyles({ rank, size })}
// 			>
// 				{children}
// 			</button>
// 		);
// 	}
// );
