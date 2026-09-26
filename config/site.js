// ============================================================================
//  CONFIGURACIÓN CENTRAL DE BOUTIQUE FLORAL
//  Edita AQUÍ todos los datos del negocio. No hace falta tocar los componentes.
// ============================================================================

// Base de entrega de imágenes en Cloudinary (conversión y optimización automática).
const CLD = "https://res.cloudinary.com/icyr5s1m/image/upload";
const img = (transform, id) => `${CLD}/${transform}/${id}`;

export const site = {
  name: "Boutique Floral",
  tagline: "Arreglos florales que emocionan",
  city: "Medellín y Oriente Antioqueño",

  // 👉 REEMPLAZA con los datos reales (formato internacional, solo dígitos).
  // Ej: +57 300 123 4567  ->  "573001234567"
  whatsapp: "573023572190", // WhatsApp real
  phoneDisplay: "+57 302 357 2190", // teléfono mostrado
  phoneTel: "+573023572190", // enlace tel:
  email: "hola@boutiquefloral.com", // TODO: correo real (cámbialo cuando lo tengas)

  // Redes (opcional, deja "" para ocultar)
  instagram: "https://instagram.com/boutiquefloral",

  // Horario mostrado en el footer
  hours: "Lun a Sáb: 8:00 a.m. – 7:00 p.m. · Dom: 9:00 a.m. – 1:00 p.m.",

  // Recursos de marca (Cloudinary)
  logo: img("f_auto,q_auto,w_160,h_160,c_fill", "boutique/logo"),
  heroImage: img("f_auto,q_auto,c_fill,w_900,h_1100", "boutique/ramos/ramo_07"),
};

// ----------------------------------------------------------------------------
//  NAVEGACIÓN
// ----------------------------------------------------------------------------
export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Clientes felices", href: "#clientes" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

// ----------------------------------------------------------------------------
//  CATÁLOGO DE RAMOS  (fotos reales desde Cloudinary)
//  category: "Aniversario" | "Cumpleaños" | "Exclusivos"
// ----------------------------------------------------------------------------
export const categories = ["Todos", "Aniversario", "Cumpleaños", "Exclusivos"];

const card = (id) => img("f_auto,q_auto,c_fill,w_800,h_600", id);

export const bouquets = [
  {
    id: "rosas-premium",
    name: "Rosas Rojas Premium",
    category: "Aniversario",
    description:
      "Rosas rojas de tallo largo envueltas artesanalmente en dorado, con un detalle de regalo incluido.",
    image: card("boutique/ramos/ramo_07"),
  },
  {
    id: "amor-con-chocolates",
    name: "Amor con Chocolates",
    category: "Aniversario",
    description:
      "Caja de rosas rojas acompañada de finos chocolates Ferrero Rocher. El regalo perfecto.",
    image: card("boutique/ramos/ramo_44"),
  },
  {
    id: "pasion-eterna",
    name: "Pasión Eterna",
    category: "Aniversario",
    description:
      "Imponente ramo de rosas rojas con baby's breath y pampa, ideal para declarar tu amor.",
    image: card("boutique/ramos/ramo_35"),
  },
  {
    id: "sol-de-girasoles",
    name: "Sol de Girasoles",
    category: "Cumpleaños",
    description:
      "Girasoles y rosas en un arreglo escalonado lleno de energía y alegría para celebrar.",
    image: card("boutique/ramos/ramo_10"),
  },
  {
    id: "rayo-de-sol",
    name: "Rayo de Sol",
    category: "Cumpleaños",
    description:
      "Ramo de girasoles frescos, elegantemente envuelto, para iluminar cualquier día especial.",
    image: card("boutique/ramos/ramo_30"),
  },
  {
    id: "cielo-pastel",
    name: "Cielo Pastel",
    category: "Cumpleaños",
    description:
      "Delicado ramo en tonos pastel azul y blanco, dulce y primaveral. Suave y encantador.",
    image: card("boutique/ramos/ramo_34"),
  },
  {
    id: "elegancia-carmesi",
    name: "Elegancia Carmesí",
    category: "Exclusivos",
    description:
      "Rosas rojas premium realzadas con pampa seca. Sofisticación pura para momentos únicos.",
    image: card("boutique/ramos/ramo_09"),
  },
  {
    id: "arcoiris-de-rosas",
    name: "Arcoíris de Rosas",
    category: "Exclusivos",
    description:
      "Rosas multicolor de alta calidad con detalles de pampa. Un regalo diferente e inolvidable.",
    image: card("boutique/ramos/ramo_24"),
  },
  {
    id: "rosa-eterna",
    name: "Rosa Eterna",
    category: "Exclusivos",
    description:
      "Rosa preservada en cúpula de cristal. Un detalle elegante que dura para siempre.",
    image: card("boutique/ramos/ramo_14"),
  },
];

// ----------------------------------------------------------------------------
//  CLIENTES FELICES (fotos reales de clientes recibiendo sus flores)
//  Los textos son de ejemplo: reemplázalos por testimonios reales cuando quieras.
// ----------------------------------------------------------------------------
const face = (id) => img("f_auto,q_auto,c_fill,w_600,h_600", id);

export const testimonials = [
  {
    name: "Valentina R.",
    location: "El Poblado",
    text: "Las flores llegaron el mismo día, frescas y hermosas. ¡Me encantó la sorpresa!",
    image: face("boutique/clientes/cliente_2"),
  },
  {
    name: "Daniela M.",
    location: "Envigado",
    text: "El ramo superó mis expectativas. Atención impecable por WhatsApp de principio a fin.",
    image: face("boutique/clientes/cliente_3"),
  },
  {
    name: "Carolina T.",
    location: "Sabaneta",
    text: "El ramo más lindo que he recibido. Entrega puntual y el detalle de la tarjeta, hermoso.",
    image: face("boutique/clientes/cliente_4"),
  },
  {
    name: "Manuela G.",
    location: "Laureles",
    text: "Sorprendí a mi pareja y quedó feliz. La calidad de las rosas es increíble.",
    image: face("boutique/clientes/cliente_6"),
  },
  {
    name: "Andrea P.",
    location: "Rionegro",
    text: "Cumplieron hasta en el Oriente antioqueño, con la hora exacta. ¡100% recomendados!",
    image: face("boutique/clientes/cliente_5"),
  },
  {
    name: "Laura V.",
    location: "Medellín",
    text: "Pedí un arreglo de última hora y me salvaron. Servicio rápido y muy amable.",
    image: face("boutique/clientes/cliente_1"),
  },
];

// ----------------------------------------------------------------------------
//  PREGUNTAS FRECUENTES
// ----------------------------------------------------------------------------
export const faqs = [
  {
    q: "¿Hacen entregas el mismo día en Medellín?",
    a: "Sí. Si haces tu pedido antes de las 2:00 p.m. entregamos el mismo día en Medellín, El Poblado, Envigado, Sabaneta e Itagüí. Escríbenos por WhatsApp para confirmar disponibilidad de la franja horaria.",
  },
  {
    q: "¿Cubren el Oriente Antioqueño?",
    a: "Sí, entregamos en Rionegro, La Ceja, Llanogrande, El Retiro y Guarne. Estas zonas pueden requerir un valor adicional de domicilio y un poco más de tiempo; te lo confirmamos al momento del pedido.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos Nequi, Bancolombia (transferencia o QR) y efectivo contra entrega en zonas seleccionadas. No manejamos pasarela de pago en línea: coordinamos todo de forma personalizada por WhatsApp.",
  },
  {
    q: "¿Puedo personalizar el arreglo?",
    a: "¡Claro! Podemos ajustar colores, tipo de flores, tamaño y agregar detalles como chocolates, globos o una tarjeta personalizada. Cuéntanos tu idea por WhatsApp y la hacemos realidad.",
  },
  {
    q: "¿Puedo enviar flores de forma anónima o con mensaje sorpresa?",
    a: "Sí. Incluimos una tarjeta con tu mensaje y podemos mantener el anonimato del remitente si lo prefieres. Solo indícanos los detalles al hacer el pedido.",
  },
  {
    q: "¿Con cuánta anticipación debo pedir?",
    a: "Para entregas el mismo día, antes de las 2:00 p.m. Para fechas especiales (San Valentín, Día de la Madre, Amor y Amistad) recomendamos reservar con 2-3 días de anticipación.",
  },
];
