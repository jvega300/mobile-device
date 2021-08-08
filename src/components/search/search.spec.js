import Search from './search';
import * as Redux from "react-redux";

import * as tp from "../../action-types";

import { fireEvent, renderWithRouteAndRedux } from "../../test/test-utils";


const mockedDispatcher = jest.fn();
Redux.useDispatch = () => mockedDispatcher;

// Defaults
const data = {
  totalNumber:0, 
  searchNumber: 0
};

// Helper
const renderComponent = (props = {}) => {
  const combinedProps = { ...data, ...props };
  return renderWithRouteAndRedux(<Search {...combinedProps} />);
};

describe("Tests for defaul data", () => {

  it("Render with defaults (without crashing)", () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it("Should dispatch action on onChangeHandler", () => {
    const { getByTestId } = renderComponent();

    // // Get the input
    const input = getByTestId("form-test-id");
    fireEvent.change(input, { target: { value: "LI" } });

    // Check if dispatch was successfull
    expect(mockedDispatcher).toHaveBeenCalledWith({
      type: tp.DO_SEARCH,
      payload: "LI"
    });

  });

});