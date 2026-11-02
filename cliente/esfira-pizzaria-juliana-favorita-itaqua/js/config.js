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
    domain: "https://impulsoweb10.com.br/esfira-pizzaria-juliana-favorita-itaqua"
  },

  seo: {
    h1: "Pizzaria em Itaquaquecetuba - Pizzaria Juliana e Favorita",
    metaDescription: "Pizza quentinha em Itaquaquecetuba - SP! Escolha o sabor, peça pelo WhatsApp (11) 95833-8379 e receba em casa. Clique e faça seu pedido agora!",
    canonical: "https://impulsoweb10.com.br/esfira-pizzaria-juliana-favorita-itaqua/index.html"
  },

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
      { id: "frango-catupiry", nome: "Frango com Requeijão", descricao: "Frango desfado bem temperado coberto com requeijão cremoso e assado no ponto." },
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
      resposta: "Os horários e dias de atendimento podem variar. Para confirmar se a pizzaria está aberta e receber o seu pedido, chame no WhatsApp (11) 95833-8379."
    },
    {
      pergunta: "Onde fica a Pizzaria Juliana e Favorita e ela faz entrega?",
      resposta: "A pizzaria atende Itaquaquecetuba - SP por delivery. Para saber se a entrega chega ao seu bairro e combinar o prazo, envie sua localização pelo WhatsApp (11) 95833-8379."
    },
    {
      pergunta: "Como faço o pedido e quais produtos posso escolher?",
      resposta: "O pedido é feito pelo WhatsApp (11) 95833-8379. Você pode escolher pizzas salgadas e doces, pedir meio a meio, adicionar borda recheada e incluir refrigerantes na mesma compra."
    }
  ]
};
