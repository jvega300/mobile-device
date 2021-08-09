import App from './App';

import { renderWithRouteAndRedux } from "./test/test-utils";


// Helper
const renderComponent = (state = {}) => renderWithRouteAndRedux(<App />, state);

it("Render with defaults (without crashing)", () => {
  const { container } = renderComponent();
  expect(container).toBeTruthy();
});
