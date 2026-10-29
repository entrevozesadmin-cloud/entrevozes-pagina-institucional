/* CONFIGURAÇÃO ÚNICA: informe o WhatsApp com código do país e DDD, somente números.
   Exemplo de formato: 5511999999999 (substitua pelo número real da responsável). */
const WHATSAPP_NUMBER = "";

/* CONFIGURAÇÃO ÚNICA: cole aqui o endereço oficial do perfil EntreVozes no Spotify. */
const SPOTIFY_PROFILE_URL = "";

const defaultMessage = "Olá! Conheci a EntreVozes e gostaria de saber mais sobre a possibilidade de participar do projeto.";
const links = document.querySelectorAll("[data-whatsapp]");
const status = document.querySelector(".whatsapp-status");
const spotifyLink = document.querySelector("[data-spotify]");
const spotifyStatus = document.querySelector(".spotify-status");

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

if (SPOTIFY_PROFILE_URL.trim()) {
  try {
    const spotifyUrl = new URL(SPOTIFY_PROFILE_URL);
    if (spotifyUrl.protocol === "https:" && spotifyUrl.hostname === "open.spotify.com") {
      spotifyLink.href = spotifyUrl.href;
      spotifyLink.target = "_blank";
      spotifyLink.rel = "noopener noreferrer";
    } else {
      spotifyStatus.textContent = "Configure um endereço https://open.spotify.com válido em script.js.";
    }
  } catch {
    spotifyStatus.textContent = "Configure um endereço https://open.spotify.com válido em script.js.";
  }
} else {
  spotifyLink.addEventListener("click", (event) => {
    event.preventDefault();
    spotifyStatus.textContent = "O link do Spotify ainda não está configurado. Insira o endereço oficial em script.js para ativar este botão.";
    spotifyStatus.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
