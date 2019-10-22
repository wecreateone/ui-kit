import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render } from "enzyme";

import { Typography } from "../dist";

describe("Typography", () => {
	test("snapshot renders", () => {
		const component = renderer.create(<Typography />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
