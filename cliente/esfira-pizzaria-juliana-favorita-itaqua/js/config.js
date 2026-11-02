/**
 * Configuração Comercial e Dados da Pizzaria Juliana e Favorita
 * Desenvolvido por: ImpulsoWeb10
 */

const SITE_CONFIG = {
  empresa: {
    nome: "Pizzaria Juliana e Favorita",
    segmento: "Pizzaria com Delivery",
    cidadeEstado: "Itaquaquecetuba / SP",
    enderecoCompleto: "Estr. Promissão, 8 - Jardim Carolina, Itaquaquecetuba - SP, 08588-310",
    placeId: "ChIJjUxPNAB9zpQRaGwdfRPmwhc",
    whatsapp: "5511958338379",
    whatsappFormatado: "(11) 95833-8379",
    instagram: "pizzariajulianaefavorita",
    instagramUrl: "https://www.instagram.com/pizzariajulianaefavorita/",
    cardapioDigital: "https://pedido.zesto.menu/pt-BR/store/pizzaria-juliana-e-favorita/lgddmmpgpqgjqbljf",
    sistemaAvaliacao: "https://avaliar.impulsoweb10.com.br/cliente/esfira-pizzaria-juliana-favorita-itaqua/",
    domain: "https://impulsoweb10.com.br/pizzaria-juliana-e-favorita"
  },

  seo: {
    h1: "Pizzaria em Itaquaquecetuba - Pizzaria Juliana e Favorita",
    metaDescription: "Pizza quentinha em Itaquaquecetuba - SP! Escolha o sabor no cardápio digital, peça pelo WhatsApp (11) 95833-8379 e receba em casa.",
    canonical: "https://impulsoweb10.com.br/pizzaria-juliana-e-favorita/index.html"
  },

  horarios: [
    { dia: "Segunda-feira", horario: "Fechado (Dia de Finados)" },
    { dia: "Terça-feira", horario: "18:00 – 23:50" },
    { dia: "Quarta-feira", horario: "18:00 – 23:50" },
    { dia: "Quinta-feira", horario: "18:00 – 23:50" },
    { dia: "Sexta-feira", horario: "18:00 – 23:50" },
    { dia: "Sábado", horario: "18:00 – 23:50" },
    { dia: "Domingo", horario: "18:00 – 23:50" }
  ],

  mensagensWhatsapp: {
    geral: "Olá! Vim pelo site da Pizzaria Juliana e Favorita e gostaria de conhecer o cardápio e fazer um pedido.",
    meioAMeio: "Olá! Vim pelo site da Pizzaria Juliana e Favorita e gostaria de montar uma pizza Meio a Meio.",
    borda: "Olá! Gostaria de fazer um pedido com Borda Recheada na Pizzaria Juliana e Favorita.",
    faqHorario: "Olá! Gostaria de confirmar o horário de funcionamento de hoje na Pizzaria Juliana e Favorita.",
    faqEntrega: "Olá! Gostaria de verificar a taxa e o tempo de entrega para o meu endereço em Itaquaquecetuba."
  },

  beneficios: [
    "Massa artesanal assada na hora, com queijo bem derretido e recheio caprichado",
    "Atendimento direto pelo WhatsApp (11) 95833-8379 e entrega em Itaquaquecetuba - SP",
    "Variedade de sabores salgados e doces, com opção de pizza meio a meio e borda recheada",
    "Pedido simples e rápido, ideal para jantar em família ou receber os amigos em casa"
  ],

  bordasRecheadas: [
    { nome: "Catupiry Normal", descricao: "Borda cremosa tradicional para acentuar o sabor da sua pizza." },
    { nome: "Catupiry Original", descricao: "O clássico Catupiry autêntico, irresistível e cremoso." },
    { nome: "Cheddar", descricao: "Cheddar especial derretido e saboroso para os amantes de queijo." }
  ],

  cardapio: {
    salgadas: [
      { id: "mussarela", nome: "Mussarela", descricao: "Queijo mussarela derretido, molho de tomate especial e rodelas de tomate fresco com orégano." },
      { id: "calabresa", nome: "Calabresa", descricao: "Fatias selecionadas de calabresa, cebola fresca, azeitonas e molho de tomate temperado." },
      { id: "frango-catupiry", nome: "Frango com Requeijão", descricao: "Frango desfiado bem temperado coberto com requeijão cremoso e assado no ponto." },
      { id: "portuguesa", nome: "Portuguesa", descricao: "Mussarela, presunto, ovos, cebola, ervilha, azeitonas e toque de orégano." }
    ],
    doces: [
      { id: "chocolate-frutas", nome: "Chocolate com Frutas", descricao: "Deliciosa cobertura de chocolate cremoso acompanhada de frutas frescas para a sobremesa perfeita." },
      { id: "chocolate-tradicional", nome: "Chocolate Especial", descricao: "Camada generosa de chocolate ao leite derretido sobre nossa massa assada artesanal." }
    ],
    bebidas: [
      { id: "refri-2l", nome: "Refrigerante 2 Litros", descricao: "Refrigerantes gelados variados para acompanhar sua pizza em família." },
      { id: "refri-lata", nome: "Refrigerante Lata", descricao: "Opção individual trincando de gelada para a sua refeição." }
    ]
  },

  faq: [
    {
      pergunta: "Qual o horário de funcionamento da Pizzaria Juliana e Favorita em Itaquaquecetuba?",
      resposta: "Funcionamos de terça a domingo das 18:00 às 23:50. Na segunda-feira estamos fechados (Dia de Finados). Para confirmar o atendimento de hoje, chame no WhatsApp (11) 95833-8379."
    },
    {
      pergunta: "Onde fica a Pizzaria Juliana e Favorita e ela faz entrega?",
      resposta: "A pizzaria atende Itaquaquecetuba - SP por delivery. Para saber se a entrega chega ao seu bairro e combinar o prazo, envie sua localização pelo WhatsApp (11) 95833-8379."
    },
    {
      pergunta: "Como faço o pedido e quais produtos posso escolher?",
      resposta: "Você pode fazer o pedido diretamente pelo nosso cardápio digital no Zesto ou pelo WhatsApp (11) 95833-8379."
    },
    {
      pergunta: "Como faço para avaliar o atendimento e o pedido?",
      resposta: "Sua opinião é muito importante! Você pode deixar seu feedback através do nosso sistema de atendimento e avaliação oficial: https://avaliar.impulsoweb10.com.br/cliente/esfira-pizzaria-juliana-favorita-itaqua/"
    }
  ]
};
