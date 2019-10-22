import { Breakpoint_1, Breakpoint_2, Breakpoint_3 } from "../global-styles";

/* Headline title or subtitle */
export default ({ children }) => (
	<>
		<span className="typ-great-primer">{children}</span>
		<style jsx>
			{`
				.typ-great-primer {
					font-size: 18px;
					line-height: 22px;

					font-weight: 500;
				}

				@media (min-width: ${Breakpoint_1}) {
					.typ-great-primer {
						font-size: 18px;
						line-height: 22px;
					}
				}

				@media (min-width: ${Breakpoint_2}) {
					.typ-great-primer {
						font-size: 21px;
						line-height: 24px;
					}
				}
			`}
		</style>
	</>
);
