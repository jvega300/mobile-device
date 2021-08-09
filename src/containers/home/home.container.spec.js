import HomeContainer from './home.container';

import { renderWithRouteAndRedux } from "../../test/test-utils";

// Helper
const renderComponent = (state = {}) => renderWithRouteAndRedux(<HomeContainer />, state);


it("Render with defaults (without crashing)", () => {
  const { container } = renderComponent();
  expect(container).toBeTruthy();
});