const inputs = document.querySelectorAll('.controls input');
function solve() {
  const suff = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suff);
}
inputs.forEach(input=>input.addEventListener('change',solve));
inputs.forEach(input=>input.addEventListener('mousemove',solve))
