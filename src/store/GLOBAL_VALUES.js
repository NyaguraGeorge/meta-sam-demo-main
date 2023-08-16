import { Auth } from "aws-amplify";

export const GLOBAL_VARIABLES = {
  ADMIN_FLOWMETER_C: "admin_flowmeter_c",
  ADMIN_FLOWMETER_H: "admin_flowmeter_h",
  FACTORY_FLOMETER_C: "factory_flowmeter_c",
  FACTORY_FLOMETER_H: "factory_flowmeter_h",
  KITCHEN_FLOWMETER_C: "kitchen_flowmeter_c",
  KITCHEN_FLOWMETER_H: "kitchen_flowmeter_h",
  PRE_BOOST: "booster_pressure_pre",
  POST_BOOST: "booster_pressure_post",
  WATER_HEATER_FLOWMETER: "heater_flowmeter",
  WATER_TANK_FLOWMETER: "tank_flowmeter",
  WATER_TANK_LEVEL: "tank_water_level",
  WATER_TANK_LABEL: "Water Tank",
  FEED_ZONE_LABEL: "Feed Zone",
  WATER_MAIN_LABEL: "Water Main",
  WATER_MAIN_DESCRIPTION: "Feed Flow",
  PRE_BOOST_LABEL: "Pre-Boost",
  PRESSURE_DESCRIPTION: "Pressure",
  WATER_PRESSURE_LABEL: "Water Pressure",
  BOOST_ZONE_LABEL: "Boost Zone",
  POST_BOOST_LABEL: "Post-Boost",
  WATER_HEATER_LABEL: "Water Heater",
  HEATING_ZONE_LABEL: "Heating Zone",
  FEED_FLOW_LABEL: "Feed Flow",
  CALORIFIER_DISTRIBUTION_LABEL: "Calorifier Distribution",
  CALORIFIER_ZONE_LABEL_1: "Zone 1",
  CALORIFIER_ZONE_LABEL_2: "Zone 2",
  WATER_INLET_LABEL: "Water Inlet",
  HOT_FLOW_LABEL: "Hot Flow",
  COLD_FLOW_LABEL: "Cold Flow",
  LAST_INDEX: 15,
};

export async function updateUser(values) {
  const user = await Auth.currentAuthenticatedUser();
  await Auth.updateUserAttributes(user, {
    //   name: "John Stanley",
    name: values.username,
    email: values.email,
    //   message: values.position,
    phone_number: values.phone,
    //   accountType: values.accountType,
  });
  console.log(user);
}

// export async function reportProblem(values) {
//   const user = await Auth.currentAuthenticatedUser();
//   await Auth.updateUserAttributes(user, {
//     //   name: "John Stanley",
//     name: values.username,
//     email: values.email,
//     //   message: values.position,
//     phone_number: values.phone,
//     //   accountType: values.accountType,
//   });
//   console.log(user);
// }

export async function updateEmail(values) {
  const user = await Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, "oldPassword", "newPassword");
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

export async function confirmEmail(values) {
  const user = await Auth.currentAuthenticatedUser();
  const result = await Auth.verifyCurrentUserAttributeSubmit(values.email, '12345');
  console.log(result); // SUCCESS
}
