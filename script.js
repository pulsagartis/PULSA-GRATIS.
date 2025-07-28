document.getElementById("pulsaForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const provider = document.getElementById("provider").value;
  const nomor = document.getElementById("nomor").value;
  const nominal = document.getElementById("nominal").value;

  if (provider && nomor && nominal) {
    const hasil = document.getElementById("hasil");
    hasil.style.display = "block";
    hasil.innerHTML = `
      <h3>✅ Permintaan Terkirim</h3>
      <p><strong>Provider:</strong> ${provider}</p>
      <p><strong>Nomor HP:</strong> ${nomor}</p>
      <p><strong>Nominal:</strong> ${nominal}</p>
      <p>Silakan tunggu proses pengiriman pulsa...</p>
    `;
  }
});
