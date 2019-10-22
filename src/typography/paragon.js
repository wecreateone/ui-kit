import { Breakpoint_1, Breakpoint_2, Breakpoint_3 } from "../global-styles";

/* Primary headline on indexes */
export default ({ children }) => (
	<>
		<span className="typ-paragon">{children}</span>
		<style jsx>
			{`
				.typ-paragon {
					font-size: 20px;
					line-height: 24px;

					font-weight: 500;
				}

				@media (min-width: ${Breakpoint_1}) {
					.typ-paragon {
						font-size: 22px;
						line-height: 26px;
					}
				}

				@media (min-width: ${Breakpoint_2}) {
					.typ-paragon {
						font-size: 22px;
						line-height: 26px;
					}
				}

				@media (min-width: ${Breakpoint_3}) {
					.typ-paragon {
						font-size: 28px;
						line-height: 32px;
					}
				}
			`}
		</style>
	</>
);
