import { USER_ROLE_CALENDAR } from "../../assets/other-assets/constants/calendar-resources";

export const isHighlightDays = (date, userEvents, role) => {
  if (role === USER_ROLE_CALENDAR.caretaker) {
    return userEvents.some(
      (event) => date >= event.startDate && date <= event.endDate
    );
  }
  return false;
};
