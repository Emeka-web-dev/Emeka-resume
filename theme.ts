import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#ffffff",
  "--my-black": "#1A1A1A",
  "--my-brand": "#1810f2",
  "--my-red": "#db4437",
  "--my-green": "#0f9d58",
  "--my-yellow": "#f4b400"
};

export const myTheme = buildLegacyTheme({
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray-base": "#666",
  "--gray": "#666",
  "--component-bg": props["--my-white"],
  "--component-text-color": props["--my-black"],

  "--brand-primary": props["--my-brand"],
  //Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--my-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-danger-color": props["--my-red"],
  "--default-button-warning-color": props["--my-yellow"],

  //State
  "--state-info-color": props["--my-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  //Navbar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-brand"]
});
