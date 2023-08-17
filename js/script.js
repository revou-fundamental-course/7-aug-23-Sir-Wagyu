function hitung() {
  const inputContainer = document.getElementById("inputbox");
  const outputContainer = document.getElementById("outputbox");
  const base = parseFloat(document.getElementById("alas").value);
  const height = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(base) || isNaN(height)) {
    document.getElementById("salah").innerText =
      "Kolomnya jangan sampai ada yang kosong ya!";
  } else {
    const perimeter = base + height + Math.sqrt(height ** 2 + base ** 2);
    const area = 0.5 * base * height;

    inputContainer.style.display = "none";
    outputContainer.style.display = "block";
    document.getElementById(
      "output-keliling"
    ).innerText = `Keliling \nK = ${base} + ${height} + √(${base}² + ${height}²) \n K = ${perimeter.toFixed(
      2
    )}`;
    document.getElementById(
      "output-luas"
    ).innerText = `Luas \nL = 0.5 x ${base} x ${height} \n L = ${area.toFixed(
      2
    )}`;
  }
}

function reset() {
  const inputContainer = document.getElementById("inputbox");
  const outputContainer = document.getElementById("outputbox");

  document.getElementById("tinggi").value = "";
  document.getElementById("alas").value = "";
  document.getElementById("salah").innerText = "";
  inputContainer.style.display = "block";
  outputContainer.style.display = "none";
}
