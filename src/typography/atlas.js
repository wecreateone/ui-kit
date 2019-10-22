import { Breakpoint_1, Breakpoint_2, Breakpoint_3 } from "../global-styles";

/* Huge title */
export default ({ children }) => (
	<>
		<span className="typ-atlas">{children}</span>
		<style jsx>
			{`
				.typ-atlas {
					font-size: 32px;
					line-height: 38px;
					font-weight: 700;
				}

				@media (min-width: ${Breakpoint_1}) {
					.typ-atlas {
						font-size: 48px;
						line-height: 53px;
					}
				}

				@media (min-width: ${Breakpoint_2}) {
					.typ-atlas {
						font-size: 72px;
						line-height: 76px;
					}
				}

				@media (min-width: ${Breakpoint_3}) {
					.typ-atlas {
						font-size: 72px;
						line-height: 78px;
					}
				}
			`}
		</style>
	</>
);
