import Select from './select';

import { renderWithRouteAndRedux } from "../../test/test-utils";




describe("Tests for defaul data", () => {
  // Defaults
  const data = {
    options: [], 
    label: "", 
    onChangeSelect: jest.fn()

  };

  // Helper
  const renderComponent = (props = {}) => {
    const combinedProps = { ...data, ...props };
    return renderWithRouteAndRedux(<Select {...combinedProps} />);
  };
  it("Should render with defaults (without crashing)", () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();

  });
 
});

describe("Tests for defaul and 1 option data", () => {
  // Defaults
  const data = {
    options: [{code: 1000, name: "Black"}],
    label: "", 
    onChangeSelect: jest.fn()

  };

  // Helper
  const renderComponent = (props = {}) => {
    const combinedProps = { ...data, ...props };
    return renderWithRouteAndRedux(<Select {...combinedProps} />);
  };

  it("Should render with defaults (without crashing)", () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();

  });
 
});

describe("Tests for defaul and more than 1 option data", () => {
  // Defaults
  const data = {
    options: [
      {code: 2000, name: "16 GB"},
      {code: 2001, name: "32 GB"},
      {code: 2002, name: "64 GB"}
    ],
    label: "", 
    onChangeSelect: jest.fn()

  };

  // Helper
  const renderComponent = (props = {}) => {
    const combinedProps = { ...data, ...props };
    return renderWithRouteAndRedux(<Select {...combinedProps} />);
  };

  it("Should render with defaults (without crashing)", () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();

  });
 
});

