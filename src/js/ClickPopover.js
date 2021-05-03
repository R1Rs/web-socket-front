export default function click() {
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    document.querySelector(".popover").classList.toggle("popover__active");
  });
}
