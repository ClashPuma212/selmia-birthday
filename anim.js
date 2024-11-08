document.addEventListener("DOMContentLoaded", function() {
  var audio = document.querySelector("audio");
  var lyrics = document.querySelector("#lyrics");
  console.log(audio); // Verifica se o elemento de áudio foi selecionado corretamente
  console.log(lyrics); // Verifica se o elemento de lyrics foi selecionado corretamente

  audio.addEventListener("timeupdate", updateLyrics);
});

var lyricsData = [
];

function updateLyrics() {
var time = audio.currentTime;
var currentLine = lyricsData.find(
  (line) => time >= line.time && time < line.time + 6
);

if (currentLine) {
  var fadeInDuration = 0.5; // Ajuste o tempo de fade-in conforme desejado
  var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

  lyrics.style.opacity = opacity;
  lyrics.innerHTML = currentLine.text;
} else {
  lyrics.style.opacity = 0;
  lyrics.innerHTML = "";
}
}

function ocultarTitulo() {
var titulo = document.querySelector(".titulo");
titulo.style.animation =
  "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
setTimeout(function () {
  titulo.style.display = "none";
}, 3000); // Espera 3 segundos antes de ocultar completamente
}

setTimeout(ocultarTitulo, 180000);
