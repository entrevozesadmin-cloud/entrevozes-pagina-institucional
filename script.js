/* CONFIGURAÇÃO ÚNICA: informe o WhatsApp com código do país e DDD, somente números.
   Exemplo de formato: 5511999999999 (substitua pelo número real da responsável). */
const WHATSAPP_NUMBER = "17981818888";

/* CONFIGURAÇÃO ÚNICA: cole aqui o endereço público confirmado da EntreVozes no Spotify. */
const SPOTIFY_URL = "";

const defaultMessage = "Olá! Conheci a EntreVozes e gostaria de saber mais sobre a possibilidade de participar do projeto.";
const links = document.querySelectorAll("[data-whatsapp]");
const status = document.querySelector(".whatsapp-status");
const spotifyLink = document.querySelector("[data-spotify]");

for (const link of links) {
  const message = link.classList.contains("button-gold")
    ? defaultMessage
    : "Olá! Conheci a EntreVozes e gostaria de saber mais sobre o projeto.";

  if (WHATSAPP_NUMBER.trim()) {
    const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
    link.href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      status.textContent = "O WhatsApp ainda não está configurado. Insira o número em script.js para ativar este contato.";
      status.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
}

if (SPOTIFY_URL.trim()) {
  try {
    const spotifyUrl = new URL(SPOTIFY_URL);
    if (spotifyUrl.protocol === "https:" && spotifyUrl.hostname === "open.spotify.com") {
      spotifyLink.href = spotifyUrl.href;
      spotifyLink.target = "_blank";
      spotifyLink.rel = "noopener noreferrer";
      spotifyLink.removeAttribute("aria-disabled");
      spotifyLink.removeAttribute("tabindex");
    } else {
      ;
    }
  } catch {
    /* Link inválido, botão permanece inativo. */;
  }
}
