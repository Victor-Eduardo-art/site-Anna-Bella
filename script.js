function iniciar () {
   let url = window.location.href
   copiarRedesSuciais(url.indexOf("contato.html"))
}

function copiarRedesSuciais (url) {
   if (url != -1) {
      const btnCopiarE = document.getElementById("Copiar-E")
      const btnCopiarT = document.getElementById("Copiar-T")

      btnCopiarE.addEventListener("click", () => {
         navigator.clipboard.writeText("annablle@gmail.com").then(() => {
            btnCopiarE.classList.add("sucesso")
         }).catch(() => {
            btnCopiarE.classList.add("erro")
         })
      })

      btnCopiarT.addEventListener("click", () => {
         navigator.clipboard.writeText("(68) 3195-9812").then(() => {
            btnCopiarT.classList.add("sucesso")
         }).catch(() => {
            btnCopiarT.classList.add("erro")
         })
      })
   }
}

window.addEventListener("load", iniciar)
