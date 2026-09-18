export interface Memory {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface Letter {
  id: number;
  title: string;
  category: string;
  content: string[];
  date?: string;
}

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  spotifyUrl: string;
  comment: string;
}

export interface LockedCard {
  id: number;
  title: string;
  hint: string;
  unlockMessage: string;
  unlocked: boolean;
  icon: string;
  color: string;
}

export interface AppConfig {
  girlfriendName: string;
  yourName: string;
  relationshipStartDate: string;
  relationshipAnniversaryDate?: string;
  spotifyPlaylistUrl: string;
  profilePhoto: string;
  greetingMessage: string;
  introMessage: string;
  homePhoto?: string;
  letters: Letter[];
  reasons: string[];
  memories: Memory[];
  timeline: TimelineEvent[];
  lockedCards: LockedCard[];
  dailyLoveMessages: string[];
  saudadeMessages: string[];
  secretMessage: string;
  secretPhoto?: string;
  favoriteColor: string;
}

export const config: AppConfig = {
  girlfriendName: "[NOME DELA]",
  yourName: "[SEU NOME]",
  relationshipStartDate: "[DATA DO NAMORO]",
  spotifyPlaylistUrl: "[LINK SPOTIFY]",
  profilePhoto: "/placeholder-avatar.png",
  greetingMessage: "Oi, meu amor ❤️",
  introMessage: "Cada dia ao seu lado é um presente que eu nunca quero devolver.",
  letters: [
    {
      id: 1,
      title: "Quando você estiver triste",
      category: "tristeza",
      content: [
        "Meu amor,",
        "Se você está lendo isso, é porque está se sentindo triste. Eu sei que não é fácil, mas lembre-se de que eu estou aqui para você. Não importa o que aconteça, você sempre será a pessoa mais importante para mim. Respire fundo, coloque sua música favorita e lembre-se: eu te amo mais a cada dia.",
        "Com todo o meu carinho,",
        "[SEU NOME]"
      ]
    },
    {
      id: 2,
      title: "Quando sentir saudade",
      category: "saudade",
      content: [
        "Minha querida [NOME DELA],",
        "A saudade é uma forma de amor que não se despede. Quando você sentir falta de mim, olhe para o céu à noite e saiba que eu estou olhando para as mesmas estrelas. Cada pensamento meu sobre você é um abraço que eu envio através do ar.",
        "Beijos e carinhos,",
        "[SEU NOME]"
      ]
    },
    {
      id: 3,
      title: "Antes de um encontro",
      category: "encontro",
      content: [
        "[NOME DELA],",
        "Hoje é um dia especial porque vamos nos encontrar! Estou tão empolgado para te ver. Vou pensar em cada detalhe do nosso encontro o dia todo. Abrace esta emoção com a mesma intensidade com que eu a sinto.",
        "Com amor,",
        "[SEU NOME]"
      ]
    }
  ],
  reasons: [
    "Você sorri e o mundo fica mais brilhante.",
    "Seu abraço é o meu lugar favorito no mundo.",
    "Você me faz rir mesmo quando não quero.",
    "Seus olhos contam histórias que eu quero ouvir para sempre.",
    "Você tem um jeito único de me entender sem eu precisar dizer nada.",
    "Sua risada é a melhor música do meu dia.",
    "Você me inspira a ser uma pessoa melhor.",
    "Seu cabelo cheira a sonhos que nunca quero acordar.",
    "Você me apoia mesmo quando não entende tudo.",
    "Seu coração é puro e isso me encanta.",
    "Você faz o tempo parar quando está perto de mim.",
    "Sua força me dá coragem para enfrentar qualquer coisa.",
    "Você tem paciência infinita com todas as minhas eccenticidades.",
    "Seus beijos curam todas as minhas tristezas.",
    "Você me faz sentir que sou o homem mais sortudo do mundo.",
    "Seu abraço apertado aquece até os meus ossos.",
    "Você fala com os olhos e eles dizem 'eu te amo'.",
    "Sua voz é a última coisa que ouço antes de dormir e a primeira ao acordar.",
    "Você me encanta com a simplicidade da sua beleza.",
    "Seu sorriso ilumina até os meus dias mais escuros.",
    "Você me faz acreditar no amor verdadeiro.",
    "Sua mão na minha é o mapa do meu lar.",
    "Você tem um jeito especial de me olhar que me deixa sem palavras.",
    "Seus abraços são a cura para todas as minhas feridas.",
    "Você me ensina o que é amar sem posse.",
    "Sua essência é pura alegria.",
    "Você faz até o silêncio soar musical.",
    "Seu coração bate em sincronia com o meu.",
    "Você é a poesia que eu nunca sabia como escrever.",
    "Sua presença é o melhor presente que a vida me deu.",
    "Você me faz acreditar em destino.",
    "Seus olhos cintilam como estrelas quando está feliz.",
    "Você é minha casa, mesmo quando estou longe.",
    "Sua força me inspira todos os dias.",
    "Você me ama mesmo quando não sou fácil.",
    "Seu sorriso pode derreter até o inverno mais rigoroso.",
    "Você tem paciência para ouvir todas as minhas histórias infinitas.",
    "Seus carinhos falam mais alto que mil palavras.",
    "Você me faz sentir completo.",
    "Sua natureza maternal me encanta.",
    "Você é minha aventura preferida.",
    "Seus planos para o futuro incluem sempre a minha felicidade.",
    "Você me apoia mesmo quando acha que não consegue.",
    "Sua força emocional me deixa sem palavras.",
    "Você me faz rir de mim mesmo.",
    "Seus olhos são meu mapa estrelado.",
    "Você me ama com tanta simplicidade e intensidade.",
    "Sua presença é o Refúgio do meu dia a dia.",
    "Você tem um jeito de me olhar que me faz sentir especial.",
    "Seus beijos são doces como o mel.",
    "Você é minha inspiração artística.",
    "Sua voz acalma minha ansiedade.",
    "Você me faz acreditar em amor no primeiro olhar.",
    "Seus abraços são meu porto seguro.",
    "Você tem um coração tão generoso.",
    "Sua risa contagia até os mais tristes.",
    "Você me desafia a ser melhor.",
    "Seus olhos brilham como diamantes.",
    "Você é minha paz em meio ao caos.",
    "Sua força me dá esperança.",
    "Você me ama nas horas difíceis.",
    "Seus beijos são como poesia.",
    "Você tem um sorriso que ilumina a escuridão.",
    "Sua essência é pura magia.",
    "Você me faz sentir que posso conquistar o mundo.",
    "Seus abraços são a cura da minha alma.",
    "Você é minha aventura e meu lar ao mesmo tempo.",
    "Sua paciência é infinita.",
    "Você me faz acreditar em contos de fadas reais.",
    "Seus olhos são onde eu me perco."
  ],
  memories: [
    {
      id: 1,
      title: "Nosso primeiro encontro",
      date: "[DATA DO NAMORO]",
      location: "Café encantador",
      description: "Foi o dia em que dois corações se encontraram pela primeira vez. Seus olhos brilhavam como estrelas e eu sabia que algo especial estava nascendo.",
      image: "/placeholder-photo1.png"
    },
    {
      id: 2,
      title: "Primeira viagem juntos",
      date: "[DATA DA VIAGEM]",
      location: "Praia dos sonhos",
      description: "Carrossando as ondas, rindo sem parar, com o mar como testemunha do nosso amor. Foi o dia em que descobrimos que juntos podemos conquistar qualquer coisa.",
      image: "/placeholder-photo2.png"
    },
    {
      id: 3,
      title: "Noite de cinema em casa",
      date: "[DATA]",
      location: "Nossa casa",
      description: "Noite simples, mas perfeita. Aqueceu o coração com cobertores, pipoca e sua risada ao meu lado. Definitivamente um dos melhores momentos da minha vida.",
      image: "/placeholder-photo3.png"
    },
    {
      id: 4,
      title: "Viagem de final de semana",
      date: "[DATA]",
      location: "Montanhas",
      description: "Caminhamos por trilhas, compartilhamos sonhos sob as estrelas e descobrimos que o amor não precisa de grandes gestos, apenas do nosso lado a lado.",
      image: "/placeholder-photo4.png"
    }
  ],
  timeline: [
    {
      id: 1,
      date: "[DATA DO NAMORO]",
      title: "Primeiro encontro",
      description: "Dois corações se encontraram e o mundo parou por um instante. Foi o começo de tudo.",
      icon: "heart"
    },
    {
      id: 2,
      date: "[DATA]",
      title: "Primeiro beijo",
      description: "Sob a luz suave de uma lanterna, nossos beiços se encontraram e tudo fez sentido.",
      icon: "kiss"
    },
    {
      id: 3,
      date: "[DATA]",
      title: 'Primeira vez que disse "eu te amo"',
      description: "Disse as três palavras que mudaram nossas vidas para sempre. Foi como se o universo conspirasse a nosso favor.",
      icon: "message"
    },
    {
      id: 4,
      date: "[DATA]",
      title: "Primeira viagem juntos",
      description: "Descobrimos que o amor cresce mais forte nos novos horizontes. Compartilhamos o mundo, um pedaço de cada vez.",
      icon: "map"
    },
    {
      id: 5,
      date: "[DATA]",
      title: "Decidimos morar juntos",
      description: "Transformamos sonhos em realidade. Construímos um lar cheio de memórias, risos e amor.",
      icon: "home"
    }
  ],
  lockedCards: [
    {
      id: 1,
      title: "Primeiro presente",
      hint: "Pense em um dia especial que comemoramos juntos...",
      unlockMessage: "Desbloqueado! Em nosso primeiro aniversário de relacionamento.",
      unlocked: false,
      icon: "gift",
      color: "rose"
    },
    {
      id: 2,
      title: "Segredo de verão",
      hint: "Lembra daquele dia quente que passamos no parque?",
      unlockMessage: "Desbloqueiro! Quando fizermos nosso próximo passeio ao ar livre.",
      unlocked: false,
      icon: "sun",
      color: "yellow"
    },
    {
      id: 3,
      title: "Carta de aniversário",
      hint: "Algo relacionado a um dia especial do seu calendário...",
      unlockMessage: "Desbloqueado em seu próximo aniversário!",
      unlocked: false,
      icon: "cake",
      color: "pink"
    },
    {
      id: 4,
      title: "Nossa playlist completa",
      hint: "Aquela música que você cantava no carro...",
      unlockMessage: "Quando você acertar o nome de todas as nossas músicas juntas!",
      unlocked: false,
      icon: "music",
      color: "purple"
    }
  ],
  dailyLoveMessages: [
    "Você é o meu café da manhã favorito. ☕❤️ Bom dia, linda!",
    "Hoje eu me lembro de como você sorri ao acordar. Isso ilumina meu dia.",
    "Mesmo com saudades, seu amor me aquece o coração.",
    "Você tem algo mágico que faz até o silêncio soar como música.",
    "Se eu pudesse, abraçaria você agora. Até logo, meu amor.",
    "Cada pensamento em você é um carinho que eu envio pelo ar.",
    "Você é a melodia que a mente canta quando não há música.",
    "Hoje eu acordei pensando em você. Como sempre.",
    "Seus olhos são meu céu estrelado favorito.",
    "Você é a paz que eu procurava toda a minha vida.",
    "Apenas pensar em você faz meu dia 1000x melhor.",
    "Você é o amor que a sorte me deu. Obrigado por existir.",
    "Se eu tivesse que escolher um super-herói, seria você. Você salva meus dias.",
    "Sua essência é pura alegria. O mundo é mais bonito com você nele.",
    "Até a respiração para quando penso em você. Mas não quero parar nunca."
  ],
  saudadeMessages: [
    "Saudade detectada! 💕 Mas não se preocupe, seu abraço virtual já está a caminho.",
    "Saudade é só amor esperando o momento certo para se expressar. Eu já estou aqui.",
    "Saudade de você é como café da manhã sem café: possível, mas não é a mesma coisa.",
    "Detectei saudade nível: intensa. Recomendo: seu sorriso + meu abraço = cura garantida.",
    "Saudade? Eu também. Mas enquanto isso, deixe-me mandar um beijo por WhatsApp.",
    "Saudade detectada com sucesso. Iniciando protocolo: lembrar de você + sorrir.",
    "Sua saudade me encontra aqui, sempre que precisar. ❤️",
    "Saudade é a prova de que você é importante demais para eu não pensar em você.",
    "Saudade nivel: máxima. Solução: imaginar seu abraço por 3 minutos.",
    "Detectamos saudade em 100% dos seus pensamentos sobre mim. Isso é amor!"
  ],
  secretMessage: "Meu amor, você descobriu o segredo! 💝 Esse é o nosso canto escondido, onde guardo todos os meus sentimentos que não cabem em mil cartas. Você é a pessoa mais incrível que eu conheço, e cada dia ao seu lado é um presente que eu nunca quero devolver. Eu te amo hoje, amanhã e sempre. Sempre à sua lado, [SEU NOME].",
  favoriteColor: "#ffb3ba"
};
