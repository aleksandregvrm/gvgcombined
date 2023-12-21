export const landingPageEvent = () => {
  fbq("trackCustom", "PageViewHome");
};
export const vendingPageEvent = () => {
  fbq("trackCustom", "PageViewVending");
};
export const coffeePageEvent = () => {
  fbq("trackCustom", "PageViewCoffee");
};
export const snackPageEvent = () => {
  fbq("trackCustom", "PageViewSnacks");
};
export const servicePageEvent = () => {
  fbq("trackCustom", "PageViewService");
};
export const detailsEvent = (category, name) => {
  fbq("trackCustom", "interested", {
    content_type: category,
    content_name: name,
  });
};
export const subscribeEvent = (email) => {
  fbq("trackCustom", "subscribed", {
    content_type: "subscribe-event",
    content_name: email,
  });
};
