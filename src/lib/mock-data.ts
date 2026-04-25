export const CABANAS = [
  {
    id: '1', slug: 'baetoto', nombre: 'Cabaña Baetoto',
    tipo: 'romantica', capacidad_min: 1, capacidad_max: 2,
    precio_base: 280000,
    descripcion: 'Habitación romántica con cama doble ortopédica, ambiente íntimo y elegante con vistas a la naturaleza.',
    amenidades: ['Cama doble', 'Ventilador', 'Energía solar', 'Malla mosquitera', 'Baño seco ecológico'],
    imagenes: [
      '/images/imgi_2_BAETOTO_4.jpg',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: '2', slug: 'grupales', nombre: 'Cabañas Grupales',
    tipo: 'grupal', capacidad_min: 3, capacidad_max: 5,
    precio_base: 180000,
    descripcion: '5 cabañas confortables para familias y grupos. Vista a la naturaleza infinita de Tierralta.',
    amenidades: ['Camas múltiples', 'Ventilador', 'Energía solar', 'Hamaca', 'Baño seco ecológico'],
    imagenes: [
      '/images/cabanas.jpg',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80'
    ]
  }
];

export const EXPERIENCIAS = [
  {
    id: '1', categoria: 'natural', nombre: 'Avistamiento de aves',
    precio: 150000, duracion_h: 3,
    descripcion: 'Vive la magia del avistamiento de aves en su hábitat natural.',
    imagen: '/images/montanas.jpg'
  },
  {
    id: '2', categoria: 'natural', nombre: 'Piscina natural',
    precio: null, duracion_h: null,
    descripcion: 'Sumérgete en aguas cristalinas rodeadas de naturaleza virgen.',
    imagen: '/images/imgi_3_piscina_natural.jpg'
  },
  {
    id: '3', categoria: 'natural', nombre: 'Caminatas ecológicas',
    precio: null, duracion_h: 2,
    descripcion: 'Mariposas azules, senderos llenos de vida y paisajes de paz.',
    imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80'
  },
  {
    id: '4', categoria: 'cultural', nombre: 'Cultura Emberá',
    precio: 120000, duracion_h: 4,
    descripcion: 'Conoce la sabiduría ancestral de la comunidad indígena Emberá.',
    imagen: '/images/imgi_3_pinturas_etnicas_embera.jpg'
  }
];
