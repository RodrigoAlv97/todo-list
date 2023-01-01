export const toggleElement = (element) => {

  if (element.style.display === "none") {
    element.style.display = "flex";
  } else {
    element.style.display = "none";
  }

}