import DetailContainer from './detail.container';
import * as reactRedux from 'react-redux'


import { fireEvent, renderWithRouteAndRedux } from "../../test/test-utils";


const mockedDispatcher = jest.fn();
reactRedux.useDispatch = () => mockedDispatcher;


const renderComponent = (props = {}) => {
  return renderWithRouteAndRedux(<DetailContainer {...props} />);
};

describe("Tests for defaul data with 1 option for select", () => {

  const dataDemo = {
    announced: "2016  April",
    audioJack: "Yes",
    battery: "Non-removable Li-Ion battery",
    bluetooth: "Yes",
    brand: "Acer",
    chipset: "Mediatek MT8163A",
    colors: ["Black"],
    cpu: "Quad-core 1.3 GHz Cortex-A53",
    dimentions: "259 x 167 x 8.9 mm (10.20 x 6.57 x 0.35 in)",
    displayResolution: "10.1 inches (~68.4% screen-to-body ratio)",
    displaySize: "1920 x 1200 pixels (~224 ppi pixel density)",
    displayType: "IPS LCD capacitive touchscreen  16M colors",
    edge: "No",
    externalMemory: "microSD  up to 256 GB (dedicated slot)",
    gprs: "No",
    gps: "",
    gpu: "Mali-T720 MP2",
    id: "xyPoqGJxYR4Nn3yVGQcfI",
    imgUrl: "https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg",
    internalMemory: ["16 GB", "32 GB", "64 GB"],
    model: "Iconia Tab 10 A3-A40",
    networkSpeed: "",
    networkTechnology: "No cellular connectivity",
    nfc: "",
    options: {
      colors: [{code: 1000, name: "Black"}],
      storages:[{code: 2000, name: "16 GB"}]
    },
    price: "230",
    primaryCamera: "5 MP",
    radio: "No",
    ram: "2 GB RAM",
    secondaryCmera: "2 MP",
    sensors: "Accelerometer",
    sim: "No",
    speaker: "Yes with stereo speakers (4 speakers)",
    status: "Available. Released 2016  June",
    usb: "microUSB 2.0",
    weight: ""
  } 

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

  it("Render with defaults (without crashing)", () => {

    useSelectorMock.mockReturnValue({...dataDemo})

    const { container } = renderComponent();
    expect(container).toBeTruthy();

  });

  it("Sholud render Brand text)", () => {

    useSelectorMock.mockReturnValue({...dataDemo})

    const isLabel = "Acer";
    const { getByText } = renderComponent({ isLabel });
    expect(getByText(isLabel)).toBeInTheDocument();



  });

  it("Check if method is called after click", () => {
    useSelectorMock.mockReturnValue({...dataDemo})

    const { getByTestId } = renderComponent();

    const button = getByTestId(/button-test-id/);
    expect(button).toBeTruthy();

    fireEvent.click(button);

    // Check if dispatch was successfull
    expect(mockedDispatcher).toHaveBeenCalledWith({
      type: "ADD_TO_CART",
      payload:{
          id:"xyPoqGJxYR4Nn3yVGQcfI",
          colorCode:1000,
          storageCode:2000
      } 
    });
  });

});


describe("Should render message withouth price", () => {

  const dataDemo = {
    announced: "2016  April",
    audioJack: "Yes",
    battery: "Non-removable Li-Ion battery",
    bluetooth: "Yes",
    brand: "Acer",
    chipset: "Mediatek MT8163A",
    colors: ["Black"],
    cpu: "Quad-core 1.3 GHz Cortex-A53",
    dimentions: "259 x 167 x 8.9 mm (10.20 x 6.57 x 0.35 in)",
    displayResolution: "10.1 inches (~68.4% screen-to-body ratio)",
    displaySize: "1920 x 1200 pixels (~224 ppi pixel density)",
    displayType: "IPS LCD capacitive touchscreen  16M colors",
    edge: "No",
    externalMemory: "microSD  up to 256 GB (dedicated slot)",
    gprs: "No",
    gps: "",
    gpu: "Mali-T720 MP2",
    id: "xyPoqGJxYR4Nn3yVGQcfI",
    imgUrl: "https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg",
    internalMemory: ["16 GB", "32 GB", "64 GB"],
    model: "Iconia Tab 10 A3-A40",
    networkSpeed: "",
    networkTechnology: "No cellular connectivity",
    nfc: "",
    options: {
      colors: [{code: 1000, name: "Black"}],
      storages:[
        {code: 2000, name: "16 GB"},
        {code: 2001, name: "32 GB"},
        {code: 2002, name: "64 GB"}
      ]
    },
    price: "",
    primaryCamera: "5 MP",
    radio: "No",
    ram: "2 GB RAM",
    secondaryCmera: "2 MP",
    sensors: "Accelerometer",
    sim: "No",
    speaker: "Yes with stereo speakers (4 speakers)",
    status: "Available. Released 2016  June",
    usb: "microUSB 2.0",
    weight: ""
  } 

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

  it("Sholud render error message)", () => {

    useSelectorMock.mockReturnValue({...dataDemo})

    const isLabel = "Product Not Available, because there is no price.";
    const { getByText } = renderComponent({ isLabel });
    expect(getByText(isLabel)).toBeInTheDocument();

  });

});

