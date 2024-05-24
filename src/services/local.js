export const getTheme = () => {
  return localStorage.getItem("theme");
};
export const removeTheme = () => {
  localStorage.removeItem("theme");
};
export const currentTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) return theme;
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return dark ? "dark" : "light";
};
export const setLocalTheme = (name) => {
  let theme = name;
  if (name === "system")
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  if (name == "system") localStorage.removeItem("theme");
  else localStorage.setItem("theme", name);
  if (theme == "dark") document.getElementById("body").classList.add("dark");
  else document.getElementById("body").classList.remove("dark");
};
