import Card from './card';
import * as Redux from "react-redux";

import { fireEvent, renderWithRouteAndRedux } from "../../test/test-utils";

import * as tp from "../../action-types";

const mockedDispatcher = jest.fn();
Redux.useDispatch = () => mockedDispatcher;


describe("Tests for defaul data", () => {
  
  // Defaults
  const data = {
    brand: "Acer",
    id: "v_MpEYR7Cw1AdE7sH3azi",
    imgUrl: "https://front-test-api.herokuapp.com/images/v_MpEYR7Cw1AdE7sH3azi.jpg",
    model: "Liquid C1",
    price: "180"};


  // Helper
  const renderComponent = (props = {}) => {
    const combinedProps = { data, ...props };
    return renderWithRouteAndRedux(<Card {...combinedProps} />);
  };

  it("Render with defaults (without crashing)", () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it("Check if method is called after click", () => {
    const { getByTestId } = renderComponent();

    // // Get the input
    const card = getByTestId("card-test-id");

    // // Click
    fireEvent.click(card);

    // Check if dispatch was successfull
    expect(mockedDispatcher).toHaveBeenCalledWith({
      type: tp.SELECTED_PRODUCT,
      payload: "v_MpEYR7Cw1AdE7sH3azi"
    });

  });

});


describe("Tests withouth price data", () => {
  
  // Defaults
  const data = {
    brand: "Acer",
    id: "v_MpEYR7Cw1AdE7sH3azi",
    imgUrl: "https://front-test-api.herokuapp.com/images/v_MpEYR7Cw1AdE7sH3azi.jpg",
    model: "Liquid C1",
    price: ""};


  // Helper
  const renderComponent = (props = {}) => {
    const combinedProps = { data, ...props };
    return renderWithRouteAndRedux(<Card {...combinedProps} />);
  };

  it("Render with defaults (without crashing)", () => {
    const { getByText } = renderComponent();
    expect(getByText("Not available")).toBeInTheDocument();

  });

});