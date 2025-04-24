const chatBox = document.getElementById('chat-box');
const input = document.getElementById('user-input');

const intents = [
  {
    keywords: ["oi", "ola", "fala", "eae", "opa"],
    response: "Olá, fã da FURIA! 🐾 Como posso te ajudar?"
  },
  {
    keywords: ["time da furia", "jogadores", "elenco", "quem joga na furia hoje?", "line"],
    response: "A FURIA conta com grandes jogadores em todos games, no CS2 representados por KSCERATO, yuurih e Fallen. Já no league of legends contamos com TATU, GUIGO, Tutsz, JoJo e AyuZi"
  },
  {
    keywords: ["time lol", "qual a line do lol?", "quem joga lol na furia hoje?", "line lol"],
    response: "A FURIA conta com grandes jogadores em todos games, no LOL rcontamos com TATU, GUIGO, Tutsz, JoJo e AyuZi"
  },
  {
    keywords: ["cs2", "qual a line do cs2?", "time cs", "quem joga cs na furia hoje?", "line cs", "line cs2"],
    response: "A FURIA conta com grandes jogadores em todos games, no CS2 contamos com KSCERATO, yuurih , Chelo e Fallen."
  },
  {
    keywords: ["notícia", "novidades", "news", "atualização"],
    response: "Você pode checar as novidades aqui: https://furia.gg/, mas venha também acompanhar a Pantera nas redes sociais @FURIAGG!"
  },
  {
    keywords: ["rugido","roar","pantera","furia"],
    response: "ROOOOOOOAARRRRRRRR!!"
  },
  {
    keywords: ["valeu","obrigado","vlw"],
    response: "Tamo junto Furioso!"
  },
  {
    keywords: ["agenda", "próximo jogo", "quando a Furia joga", "data", "proxima partida"],
    response: "Próximo jogo: FURIA vs PrezaFacil - dia XX do mês XX às 00h (horário de Brasília)"
  },
  {
    keywords: ["loja", "camisa", "produtos", "comprar","camiseta"],
    response: "Confira os produtos oficiais em: https://www.furia.gg/produtos"
  }
];

function detectIntent(message) {
  for (const intent of intents) {
    for (const keyword of intent.keywords) {
      if (message.includes(keyword)) {
        return intent.response;
      }
    }
  }
  return "Se acalme jovem. Tente termos mais simples, ainda estou me adaptando a falar a lingua humana!";
}

function addMessage(text, sender = "bot") {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && input.value.trim()) {
    const userMsg = input.value.trim().toLowerCase();
    addMessage(input.value, "user");
    input.value = "";

    setTimeout(() => {
      const response = detectIntent(userMsg);
      addMessage(response);
    }, 600);
  }
});
