import { Breakpoint_1, Breakpoint_2, Breakpoint_3 } from "../global-styles";

/* Hero or blog post title */
export default ({ children }) => (
	<>
		<span className="typ-canon">{children}</span>
		<style jsx>
			{`
				.typ-canon {
					font-size: 32px;
					line-height: 38px;

					/* font-weight: 700; */
				}

				@media (min-width: ${Breakpoint_1}) {
					.typ-canon {
						font-size: 42px;
						line-height: 46px;
					}
				}

				@media (min-width: ${Breakpoint_2}) {
					.typ-canon {
						font-size: 58px;
						line-height: 63px;
					}
				}

				@media (min-width: ${Breakpoint_3}) {
					.typ-canon {
						font-size: 52px;
						line-height: 56px;
					}
				}
			`}
		</style>
	</>
);
