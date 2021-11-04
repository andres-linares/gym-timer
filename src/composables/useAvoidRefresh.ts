export default function () {
  window.onbeforeunload = function () {
    return "¿Estás seguro de abandonar la página?";
  };
}
