import classNames from "classnames";

import { Breakpoint_1, Breakpoint_2, Breakpoint_3 } from "../global-styles";

export default Typography = ({ children, type }) => (
	<>
		<span className={classNames("typ-base", { "typ-atlas": type === "atlas" })}>
			{children}
		</span>

		<style jsx>
			{`
				.typ-base {
					font-weight: 500;
				}

				/* Huge title */
				.typ-atlas {
					font-size: 32px;
					line-height: 38px;
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

				/* Hero or blog post title */
				.typ-canon {
					font-size: 32px;
					line-height: 38px;
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

				/* Article title or section header */
				.typ-trafalgar {
					font-size: 24px;
					line-height: 28px;
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

				/* Primary headline on indexes */
				.typ-paragon {
					font-size: 20px;
					line-height: 24px;
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

				/* Primary headline on indexes */
				.typ-great-primer {
					font-size: 18px;
					line-height: 22px;
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

				/* Sub Header */
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

Typography.propTypes = {
	type: PropTypes.string
};
