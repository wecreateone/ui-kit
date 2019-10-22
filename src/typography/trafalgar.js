import { Breakpoint_1, Breakpoint_2, Breakpoint_3 } from "../global-styles";

/* Article title or section header */
export default ({ children }) => (
	<>
		<span className="typ-trafalgar">{children}</span>
		<style jsx>
			{`
				.typ-trafalgar {
					font-size: 24px;
					line-height: 28px;
					width: 100%;
					font-weight: 500;
				}

				@media (min-width: ${Breakpoint_1}) {
					.typ-trafalgar {
						font-size: 32px;
						line-height: 36px;
					}
				}

				@media (min-width: ${Breakpoint_2}) {
					.typ-trafalgar {
						font-size: 32px;
						line-height: 36px;
					}
				}

				@media (min-width: ${Breakpoint_3}) {
					.typ-trafalgar {
						font-size: 36px;
						line-height: 40px;
					}
				}
			`}
		</style>
	</>
);
