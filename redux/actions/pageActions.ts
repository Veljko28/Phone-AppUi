export const TOGGLE_TABS = "TOGGLE_TABS";

export const toggleTabs = (shown: boolean) => ({
  type: TOGGLE_TABS,
  payload: shown
})