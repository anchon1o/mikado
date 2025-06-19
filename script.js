fetch("LIBRETO_MIKADO_FORMATTED.txt")
  .then(response => response.text())
  .then(text => {
    const container = document.getElementById("text-container");
    const lines = text.split("\n");

    lines.forEach(line => {
      const div = document.createElement("div");

      if (line.startsWith("==")) {
        div.className = "titulo";
        div.textContent = line.replace(/==/g, "").trim();
      } else if (line.startsWith("//")) {
        div.className = "acotacion";
        div.textContent = line.replace("//", "").trim();
      } else if (line.startsWith("[")) {
        const match = line.match(/^\[([^\]]+)\](.*)/);
        if (match) {
          const [_, personaxe, texto] = match;
          div.innerHTML = `<span class="personaxe">[${personaxe}]</span> ${texto}`;
        } else {
          div.textContent = line;
        }
      } else {
        div.textContent = line;
      }

      container.appendChild(div);
    });
  });
