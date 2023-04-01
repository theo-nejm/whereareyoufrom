const CEPInput = document.getElementById("sayCep");

async function getCep() {
  const CEP = document.getElementById("field").value.replace("-", "");
  const isValid = CEP.lenght > 8;
  if (!CEP) {
    alert("Preencha o campo de CEP")
  } else {
    const res = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    const data = await res.json();
    adressCompleted.innerText = `${data.localidade} - ${data.uf} - ${data.bairro}`;
    document.getElementById("field").value = "";
  }
}
