import { USER_ROLE_CALENDAR } from "../../assets/other-assets/constants/calendar-resources";

export const isDisabledDays = (date, role) => {
  if (role === USER_ROLE_CALENDAR.owner) {
    const today = new Date();
    return date < today;
  } else {
    false;
  }
};
