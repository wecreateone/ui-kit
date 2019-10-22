import { Breakpoint_1, Breakpoint_2, Breakpoint_3 } from "../global-styles";

/* Article body copy only */
export default ({ children }) => (
	<>
		<span className="typ-body-copy">{children}</span>
		<style jsx>
			{`
				.typ-body-copy {
					font-size: 15px;
					line-height: 20px;
					font-family: var(--font-family-serif);
				}

				@media (min-width: ${Breakpoint_1}) {
					.typ-body-copy {
						font-size: 16px;
						line-height: 22px;
					}
				}

				@media (min-width: ${Breakpoint_2}) {
					.typ-body-copy {
						font-size: 18px;
						line-height: 24px;
					}
				}
			`}
		</style>

		<style jsx global>
			{`
				.typ-body-copy a {
					color: var(--page-accent-color);
				}
			`}
		</style>
	</>
);
