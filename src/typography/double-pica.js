import { Breakpoint_1, Breakpoint_2 } from "../global-styles";

/* Sub Header */
export default ({ children }) => (
	<>
		<span className="typ-double-pica">{children}</span>
		<style jsx>
			{`
				.typ-double-pica {
					font-size: 23px;
					line-height: 28px;

					font-weight: 500;
				}
				@media (min-width: ${Breakpoint_1}) {
					.typ-double-pica {
						font-size: 23px;
						line-height: 28px;
					}
				}

				@media (min-width: ${Breakpoint_2}) {
					.typ-double-pica {
						font-size: 26px;
						line-height: 30px;
					}
				}
			`}
		</style>
	</>
);
