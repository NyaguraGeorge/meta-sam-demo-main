import { configureStore } from "@reduxjs/toolkit";

const SENSOR_CLICKED = "SENSOR_CLICKED";
const DETAILED_DATA_CLOSED = "CLOSE_THE_DETAILED_SIDEBAR";
const CONNECT_SENSOR_DB = "CONNECT_SENSOR_DB";
const POST_SENSOR_SVG = "POST_SVG_TO_SIDE_DETAILS";
// const leftArrow = '../assets/left-arrow.svg';
const POST_SENSOR_NAME = "POST_SENSOR_NAME";
const POST_COMPONENT_ZONE = "POST_COMPONENT_ZONE";
const SWITCH_TO_DISPLAY_ALL = "SWITCH_TO_DISPLAY_ALL_TAB";
const SWITCH_TO_DISPLAY_DATA = "SWITCH_TO_DISPLAY_DATA_TAB";
const SWITCH_TO_DISPLAY_BOOST = "SWITCH_TO_DISPLAY_BOOST_TAB";
const SWITCH_TO_DISPLAY_ALARM = "SWITCH_TO_DISPLAY_ALARM_TAB";
const DRAW_CHART = "DRAW_CHART";
const DETAILED_DATA_EXTENDED = "DETAILED_DATA_EXTENDED";
const HIGHLIGHT_WATER_GROUP_COMPONENTS = "HIGHLIGHT_WATER_GROUP_COMPONENTS";
const HIGHLIGHT_ADMIN_GROUP_COMPONENTS = "HIGHLIGHT_ADMIN_GROUP_COMPONENTS";
const HIGHLIGHT_BOOSTER_GROUP_COMPONENTS = "HIGHLIGHT_BOOSTER_GROUP_COMPONENTS";
const HIGHLIGHT_FACTORY_GROUP_COMPONENTS = "HIGHLIGHT_FACTORY_GROUP_COMPONENTS";
const HIGHLIGHT_KITCHEN_GROUP_COMPONENTS = "HIGHLIGHT_KITCHEN_GROUP_COMPONENTS";
const HIGHLIGHT_HEATER_GROUP_COMPONENTS = "HIGHLIGHT_HEATER_GROUP_COMPONENTS";
const HIGHLIGHT_ALL_ASSOCIATED_SENSORS = "HIGHLIGHT_ALL_ASSOCIATED_SENSORS";
const EDIT_EXTENDED_ICON = "EDIT_EXTENDED_ICON";
const PUMP_CLICKED = "PUMP_CLICKED";
const SHOW_ACCOUNT_WINDOW = "SHOW_ACCOUNT_WINDOW";
const SHOW_DROPDOWN = "SHOW_DROPDOWN";
const HIDE_DROPDOWN = "HIDE_DROPDOWN";
const SHOW_REPORT = "SHOW_REPORT";
const SHOW_PASSWORD = "SHOW_PASSWORD";
const SHOW_ABOUT = "SHOW_ABOUT";
const SHOW_GRID = "SHOW_GRID";
const CLOSE_ABOUT = "CLOSE_ABOUT";
const EXTENDED_CLOSED = "EXTENDED_CLOSED";
const SET_DASHBOARD = "SET_DASHBOARD";
const SET_DASHBOARD_3_GRID_VIEW = "SET_DASHBOARD_3_GRID_VIEW";
const SET_DASHBOARD_3_ARCH_VIEW = "SET_DASHBOARD_3_ARCH_VIEW";
const CONTENT = "CONTENT_1";
const SLIDER_CARDS = "SLIDER_CARDS";

export function extendedClose(Value) {
  return {
    type: EXTENDED_CLOSED,
    payload: Value,
  };
}
export function clickedSensor(Value) {
  return {
    type: SENSOR_CLICKED,
    payload: Value,
  };
}
export function showAccount() {
  return {
    type: SHOW_ACCOUNT_WINDOW,
    // payload: Value,
  };
}
export function clickedPump(Value) {
  return {
    type: PUMP_CLICKED,
    payload: Value,
  };
}
export function closeTab() {
  return {
    type: DETAILED_DATA_CLOSED,
  };
}

export function extendTab() {
  return {
    type: DETAILED_DATA_EXTENDED,
  };
}

export function openAll() {
  return {
    type: SWITCH_TO_DISPLAY_ALL,
  };
}
export function openData() {
  return {
    type: SWITCH_TO_DISPLAY_DATA,
  };
}
export function openBoost() {
  return {
    type: SWITCH_TO_DISPLAY_BOOST,
  };
}
export function openAlarm() {
  return {
    type: SWITCH_TO_DISPLAY_ALARM,
  };
}
export function sensorData(Value) {
  return {
    type: CONNECT_SENSOR_DB,
    payload: Value,
  };
}

export function chartDrawing(Value) {
  return {
    type: DRAW_CHART,
    payload: Value,
  };
}
export function sensorSVG(Value) {
  return {
    type: POST_SENSOR_SVG,
    payload: Value,
  };
}

export function sensorName(Value) {
  return {
    type: POST_SENSOR_NAME,
    payload: Value,
  };
}

export function sensorZone(Value) {
  return {
    type: POST_COMPONENT_ZONE,
    payload: Value,
  };
}
export function switchAll(Value) {
  return {
    type: SWITCH_TO_DISPLAY_ALL,
    payload: Value,
  };
}

export function switchData(Value) {
  return {
    type: SWITCH_TO_DISPLAY_DATA,
    payload: Value,
  };
}
export function switchBoost(Value) {
  return {
    type: SWITCH_TO_DISPLAY_BOOST,
    payload: Value,
  };
}

export function switchAlarms(Value) {
  return {
    type: SWITCH_TO_DISPLAY_ALARM,
    payload: Value,
  };
}

export function showWaterGroup(Value) {
  return {
    type: HIGHLIGHT_WATER_GROUP_COMPONENTS,
    payload: Value,
  };
}
export function showAdminGroup(Value) {
  return {
    type: HIGHLIGHT_ADMIN_GROUP_COMPONENTS,
    payload: Value,
  };
}
export function showBoosterGroup(Value) {
  return {
    type: HIGHLIGHT_BOOSTER_GROUP_COMPONENTS,
    payload: Value,
  };
}
export function showFactoryGroup(Value) {
  return {
    type: HIGHLIGHT_FACTORY_GROUP_COMPONENTS,
    payload: Value,
  };
}
export function showKitchenGroup(Value) {
  return {
    type: HIGHLIGHT_KITCHEN_GROUP_COMPONENTS,
    payload: Value,
  };
}
export function showHeaterGroup(Value) {
  return {
    type: HIGHLIGHT_HEATER_GROUP_COMPONENTS,
    payload: Value,
  };
}
export function showGridHighlight(Value) {
  return {
    type: HIGHLIGHT_ALL_ASSOCIATED_SENSORS,
    payload: Value,
  };
}

export function editExtendedIcon(Value) {
  return {
    type: EDIT_EXTENDED_ICON,
    payload: Value,
  };
}
export function showDropdown(Value) {
  return {
    type: SHOW_DROPDOWN,
    payload: Value,
  };
}
export function hideDropdown(Value) {
  return {
    type: HIDE_DROPDOWN,
    // payload: Value,
  };
}
export function showReport(Value) {
  return {
    type: SHOW_REPORT,
    payload: Value,
  };
}
export function showPassword(Value) {
  return {
    type: SHOW_PASSWORD,
    payload: Value,
  };
}
export function showAbout(Value) {
  return {
    type: SHOW_ABOUT,
    payload: Value,
  };
}
export function showGrid(Value) {
  return {
    type: SHOW_GRID,
    payload: Value,
  };
}
export function closeAbout(Value) {
  return {
    type: CLOSE_ABOUT,
    payload: Value,
  };
}
export function setDashboard(Value) {
  return {
    type: SET_DASHBOARD,
    payload: Value,
  };
}
export function setD3Grid(Value) {
  return {
    type: SET_DASHBOARD_3_GRID_VIEW,
    payload: Value,
  };
}
export function setD3Arch(Value) {
  return {
    type: SET_DASHBOARD_3_ARCH_VIEW,
    payload: Value,
  };
}
export function setContent(Value) {
  return {
    type: CONTENT,
    payload: Value,
  };
}
export function setSlides(Value) {
  return {
    type: SLIDER_CARDS,
    payload: Value,
  };
}
const initialState = {
  wasClicked: false,
  sensor_id: [],
  connector: "",
  sensor_icon: "",
  component_name: "",
  component_zone: "",
  displayAll: true,
  displayData: false,
  displayBoost: false,
  displayAlarm: false,
  chartDataValue: [],
  activeAlarm: "active-tab",
  activeAll: "detail-tab",
  activeBoost: "detail-tab",
  activeData: "detail-tab",
  activeGrid: true,
  ////group exp
  waterGroupActive: false,
  adminGroupActive: false,
  boosterGroupActive: false,
  factoryGroupActive: false,
  kitchenGroupActive: false,
  heaterGroupActive: false,
  extendedName: "",
  extendedIcon: "",
  accountActive: false,
  dropdownActive: false,
  reportActive: false,
  passwordActive: false,
  aboutActive: false,
  pagesActive: false,
  dashboard_1: true,
  dashboard_2: false,
  // dashboard_3: false,
  current_dashboard: "DASHBOARD_1",
  // activeExtendedSide: 'extended-side',
  // activeSide: 'side',
  //////////////////////////////////////////////Dashboard 3 Variables///////
  architecture_view: false,
  grid_view: true,
  content1: true,
  content2: false,
  content3: false,
  content4: false,
  content5: false,
  content6: false,
  slide_graphs: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDER_CARDS:
      if (action.payload === true) {
        console.log(action.payload);
        return {
          ...state,
          slide_graphs: action.payload
        }
        
      }else if (action.payload===false){
        return {
          ...state,
          slide_graphs: action.payload
        }
        }
    case CONTENT:
      if (action.payload === "CONTENT_1") {
        console.log(action.payload);
        return {
          ...state,
          content1: true,
          content2: false,
          content3: false,
          content4: false,
          content5: false,
          content6: false,
        };
      } else if (action.payload === "CONTENT_2") {
        console.log(action.payload);
        return {
          ...state,
          content1: false,
          content2: true,
          content3: false,
          content4: false,
          content5: false,
          content6: false,
        };
      } else if (action.payload === "CONTENT_3") {
        console.log(action.payload);
        return {
          ...state,
          content1: false,
          content2: false,
          content3: true,
          content4: false,
          content5: false,
          content6: false,
        };
      } else if (action.payload === "CONTENT_4") {
        console.log(action.payload);
        return {
          ...state,
          content1: false,
          content2: false,
          content3: false,
          content4: true,
          content5: false,
          content6: false,
        };
      } else if (action.payload === "CONTENT_5") {
        console.log(action.payload);
        return {
          ...state,
          content1: false,
          content2: false,
          content3: false,
          content4: false,
          content5: true,
          content6: false,
        };
      } else if (action.payload === "CONTENT_6") {
        console.log(action.payload);
        return {
          ...state,
          content1: false,
          content2: false,
          content3: false,
          content4: false,
          content5: false,
          content6: true,
        };
      } else {
        console.log("ERROR!!! SHOWCASE ERROR!");
      }
    case SET_DASHBOARD_3_ARCH_VIEW:
      if (action.payload) {
        console.log("ARCH VIEW");
        return {
          ...state,
          architecture_view: action.payload,
          grid_view: false,
        };
      }
    case SET_DASHBOARD_3_GRID_VIEW:
      if (action.payload) {
        console.log("GRID VIEW");
        return {
          ...state,
          architecture_view: false,
          grid_view: action.payload,
        };
      }
    case SET_DASHBOARD:
      if (action.payload === "DASHBOARD_1") {
        console.log(action.payload);
        return {
          ...state,
          dashboard_1: true,
          dashboard_2: false,
          // dashboard_3: false,
          current_dashboard: action.payload,
        };
      }
      if (action.payload === "DASHBOARD_2") {
        console.log(action.payload);
        return {
          ...state,
          dashboard_1: false,
          dashboard_2: true,
          // dashboard_3: false,
          current_dashboard: action.payload,
        };
      }
      if (action.payload === "DASHBOARD_3") {
        return {
          ...state,
          dashboard_1: true,
          dashboard_2: false,
          // dashboard_3: true,
          current_dashboard: action.payload,
        };
      }
    case EXTENDED_CLOSED:
      return {
        ...state,
        wasClicked: false,
        activeGrid: true,
      };
    case CLOSE_ABOUT:
      return {
        ...state,
        pagesActive: action.payload,
        dropdownActive: false,
        reportActive: false,
        passwordActive: false,
        aboutActive: false,
      };
    case SHOW_GRID:
      return {
        ...state,
        pagesActive: action.payload,
        dropdownActive: false,
        reportActive: false,
        passwordActive: false,
        aboutActive: false,
      };
    case SHOW_REPORT:
      // console.log(action.payload)
      return {
        ...state,
        passwordActive: false,
        aboutActive: false,
        reportActive: action.payload,
      };
    case SHOW_PASSWORD:
      // if (action.payload === 'password'){
      console.log(action.payload);
      return {
        ...state,
        // pagesActive: action.payload,
        reportActive: false,
        aboutActive: false,
        passwordActive: action.payload,
      };

    // return {
    //     ...state,
    //     // pagesActive: action.payload,
    //     reportActive: false,
    //     passwordActive: action.payload,
    //     aboutActive: false,
    // }
    case SHOW_ABOUT:
      // console.log(action.payload)
      return {
        ...state,
        reportActive: false,
        passwordActive: false,
        aboutActive: action.payload,
      };
    case HIDE_DROPDOWN:
      // console.log(action.payload)
      return {
        ...state,
        dropdownActive: false,
      };
    case SHOW_DROPDOWN:
      // console.log(action.payload)
      return {
        ...state,
        // activeAlarm: 'active-tab',
        // activeAll: 'detail-tab',
        // activeBoost: 'detail-tab',
        // activeData: 'detail-tab',
        // activeGrid: true,
        ////group exp
        // waterGroupActive: false,
        // adminGroupActive: false,
        // boosterGroupActive: false,
        // factoryGroupActive: false,
        // kitchenGroupActive: false,
        // heaterGroupActive: false,
        // extendedName: '',
        // extendedIcon: '',
        // accountActive: false,
        dropdownActive: action.payload,
        // reportActive: false,
        // passwordActive: false,
        // aboutActive: false,
        // pagesActive: false,
      };
    case SENSOR_CLICKED:
      console.log(action.payload);
      return {
        ...state,
        wasClicked: true,
        sensor_id: action.payload,
        activeAlarm: "detail-tab",
        activeAll: "active-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
      };
    case SHOW_ACCOUNT_WINDOW:
      console.log("Acoount component is active");
      return {
        ...state,
        accountActive: true,
      };
    case PUMP_CLICKED:
      console.log("DB id is: " + action.payload);
      return {
        ...state,
        wasClicked: true,
        connector: action.payload,
      };
    case EDIT_EXTENDED_ICON:
      console.log("Icon sent to exetended view");
      return {
        ...state,
        extendedIcon: action.payload,
      };

    case HIGHLIGHT_ALL_ASSOCIATED_SENSORS:
      console.log(action.payload);
      if (action.payload === "GROUP_1") {
        return {
          ...state,
          waterGroupActive: true,
          extendedName: "Water Group",
          adminGroupActive: false,
          boosterGroupActive: false,
          factoryGroupActive: false,
          kitchenGroupActive: false,
          heaterGroupActive: false,
        };
      } else if (action.payload === "GROUP_2") {
        return {
          ...state,
          waterGroupActive: false,
          adminGroupActive: true,
          extendedName: "Admin Group",
          boosterGroupActive: false,
          factoryGroupActive: false,
          kitchenGroupActive: false,
          heaterGroupActive: false,
        };
      } else if (action.payload === "GROUP_3") {
        return {
          ...state,
          waterGroupActive: false,
          adminGroupActive: false,
          boosterGroupActive: true,
          extendedName: "Booster Group",
          factoryGroupActive: false,
          kitchenGroupActive: false,
          heaterGroupActive: false,
        };
      } else if (action.payload === "GROUP_4") {
        return {
          ...state,
          waterGroupActive: false,
          adminGroupActive: false,
          boosterGroupActive: false,
          factoryGroupActive: true,
          extendedName: "Factory Group",
          kitchenGroupActive: false,
          heaterGroupActive: false,
        };
      } else if (action.payload === "GROUP_5") {
        return {
          ...state,
          waterGroupActive: false,
          adminGroupActive: false,
          boosterGroupActive: false,
          factoryGroupActive: false,
          kitchenGroupActive: true,
          extendedName: "Kitchen Group",
          heaterGroupActive: false,
        };
      } else if (action.payload === "GROUP_6") {
        return {
          ...state,
          waterGroupActive: false,
          adminGroupActive: false,
          boosterGroupActive: false,
          factoryGroupActive: false,
          kitchenGroupActive: false,
          heaterGroupActive: true,
          extendedName: "Water Heater Group",
        };
      }
      return {
        ...state,
        waterGroupActive: false,
        adminGroupActive: false,
        boosterGroupActive: false,
        factoryGroupActive: false,
        kitchenGroupActive: false,
        heaterGroupActive: false,
        // wasClicked: true,
        // sensor_id: action.payload,
        // activeAlarm: 'detail-tab',
        // activeAll: 'active-tab',
        // activeBoost: 'detail-tab',
        // activeData: 'detail-tab',
      };

    case DRAW_CHART:
      // console.log(action.payload)
      return {
        ...state,
        wasClicked: true,
        chartDataValue: action.payload,
      };

    case CONNECT_SENSOR_DB:
      console.log("DB connected");
      return {
        ...state,
        wasClicked: true,
        displayBoost: false,
        displayAlarm: false,
        displayData: false,
        displayAll: true,
        connector: action.payload,
        activeAlarm: "detail-tab",
        activeAll: "active-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
      };
    case DETAILED_DATA_CLOSED:
      console.log("Detailed tab closed");
      return {
        ...state,
        wasClicked: false,
        activeGrid: true,
        waterGroupActive: false,
        adminGroupActive: false,
        boosterGroupActive: false,
        factoryGroupActive: false,
        kitchenGroupActive: false,
        heaterGroupActive: false,
      };
    case DETAILED_DATA_EXTENDED:
      console.log("Detailed tab extended");
      return {
        ...state,
        wasClicked: true,

        activeGrid: false,

        // activeExtendedSide: 'extended-side',
        // activeSide: 'extended-side',
      };
    case POST_SENSOR_SVG:
      console.log(action.payload);
      // console.log(state.sensor_icon)
      return {
        ...state,
        wasClicked: true,
        // connector: action.payload,
        sensor_icon: action.payload,
      };
    case POST_SENSOR_NAME:
      console.log(action.payload);
      return {
        ...state,
        wasClicked: true,
        // connector: action.payload,
        component_name: action.payload,
      };
    case POST_COMPONENT_ZONE:
      console.log(action.payload);
      return {
        ...state,
        wasClicked: true,
        // connector: action.payload,
        component_zone: action.payload,
      };
    case SWITCH_TO_DISPLAY_ALL:
      console.log("Switched to All Display");
      return {
        ...state,

        displayBoost: false,
        displayAlarm: false,
        displayData: false,
        displayAll: true,
        activeAlarm: "detail-tab",
        activeAll: "active-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
      };
    case SWITCH_TO_DISPLAY_BOOST:
      console.log("Switched to Boost Display");
      return {
        ...state,

        displayData: false,
        displayAll: false,
        displayAlarm: false,
        displayBoost: true,
        activeAlarm: "detail-tab",
        activeAll: "detail-tab",
        activeBoost: "active-tab",
        activeData: "detail-tab",
      };
    case SWITCH_TO_DISPLAY_DATA:
      console.log("Switched to Data Display");
      return {
        ...state,

        displayBoost: false,
        displayAll: false,
        displayAlarm: false,
        displayData: true,
        activeAlarm: "detail-tab",
        activeAll: "detail-tab",
        activeBoost: "detail-tab",
        activeData: "active-tab",
      };
    case SWITCH_TO_DISPLAY_ALARM:
      console.log("Switched to Alarm Display");
      return {
        ...state,

        displayAll: false,
        displayBoost: false,
        displayData: false,
        displayAlarm: true,
        activeAlarm: "active-tab",
        activeAll: "detail-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
      };
    case HIGHLIGHT_WATER_GROUP_COMPONENTS:
      return {
        ...state,

        displayAll: true,
        displayBoost: false,
        displayData: false,
        displayAlarm: false,
        extendedName: "Water Group",
        activeAlarm: "detail-tab",
        activeAll: "active-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
        waterGroupActive: true,
        adminGroupActive: false,
        boosterGroupActive: false,
        factoryGroupActive: false,
        kitchenGroupActive: false,
        heaterGroupActive: false,
      };
    case HIGHLIGHT_ADMIN_GROUP_COMPONENTS:
      return {
        ...state,

        displayAll: true,
        displayBoost: false,
        displayData: false,
        displayAlarm: false,
        extendedName: "Admin Group",
        activeAlarm: "detail-tab",
        activeAll: "active-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
        waterGroupActive: false,
        adminGroupActive: true,
        boosterGroupActive: false,
        factoryGroupActive: false,
        kitchenGroupActive: false,
        heaterGroupActive: false,
      };
    case HIGHLIGHT_BOOSTER_GROUP_COMPONENTS:
      console.log(action.payload);
      return {
        ...state,

        displayAll: true,
        displayBoost: false,
        displayData: false,
        displayAlarm: false,
        extendedName: "Booster Group",
        activeAlarm: "detail-tab",
        activeAll: "active-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
        waterGroupActive: false,
        adminGroupActive: false,
        boosterGroupActive: true,
        factoryGroupActive: false,
        kitchenGroupActive: false,
        heaterGroupActive: false,
      };
    case HIGHLIGHT_FACTORY_GROUP_COMPONENTS:
      return {
        ...state,
        displayAll: true,
        displayBoost: false,
        displayData: false,
        displayAlarm: false,
        extendedName: "Factory Group",
        activeAlarm: "detail-tab",
        activeAll: "active-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
        waterGroupActive: false,
        adminGroupActive: false,
        boosterGroupActive: false,
        factoryGroupActive: true,
        kitchenGroupActive: false,
        heaterGroupActive: false,
      };
    case HIGHLIGHT_KITCHEN_GROUP_COMPONENTS:
      return {
        ...state,
        displayAll: true,
        displayBoost: false,
        displayData: false,
        displayAlarm: false,
        extendedName: "Kitchen Group",
        activeAlarm: "detail-tab",
        activeAll: "active-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
        waterGroupActive: false,
        adminGroupActive: false,
        boosterGroupActive: false,
        factoryGroupActive: false,
        kitchenGroupActive: true,
        heaterGroupActive: false,
      };
    case HIGHLIGHT_HEATER_GROUP_COMPONENTS:
      return {
        ...state,
        displayAll: true,
        displayBoost: false,
        displayData: false,
        displayAlarm: false,
        extendedName: "Water Heater Group",
        activeAlarm: "detail-tab",
        activeAll: "active-tab",
        activeBoost: "detail-tab",
        activeData: "detail-tab",
        waterGroupActive: false,
        adminGroupActive: false,
        boosterGroupActive: false,
        factoryGroupActive: false,
        kitchenGroupActive: false,
        heaterGroupActive: true,
      };
    default:
      return state;
  }
};

export const store = configureStore({ reducer });

// console.log('Initial state', store.getState())
// const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))
// store.dispatch(closeTab())
// unsubscribe()
