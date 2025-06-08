import mayilLogo from '../assets/flavournestlogo.png';
import brahminsLogo from '../assets/Brahmins-final-logo.png';
import grandLogo from '../assets/grandfooddslogo.png';
import kissanLogo from '../assets/flavournestlogo.png';
import maggiLogo from '../assets/Brahmins-final-logo.png';
import tataLogo from '../assets/Brahmins-final-logo.png';
import avtLogo from '../assets/Brahmins-final-logo.png';
import redLabelLogo from '../assets/Brahmins-final-logo.png';
import bruLogo from '../assets/Brahmins-final-logo.png';

const productData = [
  {
    category: 'FLOUR ITEMS (Dry Goods)',
    brands: [
      {
        name: 'Mayil',
        logo: mayilLogo,
        items: [
          'Rice Powder Roasted (Brown / White)',
          'Idiappam Podi WT SPL',
          'Easy Palappam Podi',
          'Idly Mix, Dosa Mix',
          'Ragi Flour',
          'Chempa Puttu Podi',
          'White Puttu Podi WT',
          'Raagi Whole (1 KG / 500 GM)',
        ],
      },
      {
        name: 'Brahmins',
        logo: brahminsLogo,
        items: [
          'Oats Puttu Podi',
          'Raagi Puttu Podi',
          'Multi Grain Puttu Podi',
          'Corn Puttu Podi',
        ],
      },
    ],
  },
  {
    category: 'PICKLES (Ready to Eat)',
    brands: [
      {
        name: 'Grand Foods',
        logo: grandLogo,
        items: [
          'Cut Mango',
          'Garlic Pickle',
          'Dates Pickle',
          'Lime Pickle (Red / White)',
        ],
      },
    ],
  },
  {
    category: 'MASALA ITEMS (Dry Goods)',
    brands: [
      {
        name: 'Grand Foods',
        logo: grandLogo,
        items: ['Fish Masala (200 GM)'],
      },
    ],
  },
  {
    category: 'RICE ITEMS (Dry Goods)',
    brands: [
      {
        name: 'No brand listed',
        logo: null,
        items: ['Matta Rice (5 KG / 10 KG)'],
      },
    ],
  },
  {
    category: 'READY TO EAT SNACKS',
    brands: [
      {
        name: 'Grand Foods',
        logo: grandLogo,
        items: [
          'Banana Chips (Bottle / Pouch)',
          'Kerala Mixture Spicy (Bottle / Pouch)',
          'Round Murukku (Bottle)',
          'Jackfruit Chips (Bottle / Pouch)',
          'Tapioca Chips Spicy (Pouch)',
          'Kuzhalappam (Pouch)',
          'Pakkavada Spicy (Pouch)',
        ],
      },
    ],
  },
  {
    category: 'GROCERY ITEMS (Dry Goods)',
    brands: [
      {
        name: 'Grand Foods',
        logo: grandLogo,
        items: [
          'Dry Tapioca',
          'Kerala Pappadam',
          'Roasted Vermicelli (Semiya)',
          'Rice Ada',
          'Sea Salt (1 KG / 500 GM)',
          'Asafoetida Powder (50 GM / 100 GM)',
          'Asafoetida Block (Kayam Katti)',
          'Red Rice Flakes (Avil Red)',
          'Disposable Papper Vazhaila',
        ],
      },
      {
        name: 'Kissan',
        logo: kissanLogo,
        items: ['Mixed Fruit Jam'],
      },
    ],
  },
  {
    category: 'PULI & CHILLI ITEMS (Dry Goods)',
    brands: [
      {
        name: 'Grand Foods',
        logo: grandLogo,
        items: [
          'Tamarind Seedless (200 GM / 400 GM)',
          'Kudampuli (Cambogia)',
          'Kondattom Mulaku (Curd Chilly)',
          'Palm Kalkandom',
          'Sugar Kalkandom',
        ],
      },
    ],
  },
  {
    category: 'JAGGERY ITEMS (Dry Goods)',
    brands: [
      {
        name: 'Grand Foods',
        logo: grandLogo,
        items: [
          'Jaggery Cube (Brown)',
          'Jaggery Ball (Brown)',
          'Jaggery Powder (Brown)',
        ],
      },
    ],
  },
  {
    category: 'LENTILS & PULSES (Dry Goods)',
    brands: [
      {
        name: 'Grand Foods',
        logo: grandLogo,
        items: [
          'Brown Chickpeas',
          'Mung Beans (Cherupayar)',
          'Mung Daal',
          'Red Masoor Daal',
          'Urid Daal Ghota (Whole)',
          'Urid Daal Split',
          'Toor Daal',
          'Chick Peas White',
          'Bangal Gram (Pottukadala)',
          'Red Cowpeas',
          'Green Peas',
          'Horse Gram',
          'Soya Chunks',
          'Mustard Seeds',
        ],
      },
    ],
  },
  {
    category: 'TEA & COFFEE ITEMS (Dry Goods)',
    brands: [
      {
        name: 'Grand Foods',
        logo: grandLogo,
        items: ['Chukku Kaapi Powder'],
      },
      {
        name: 'Tata',
        logo: tataLogo,
        items: ['Tea Powder'],
      },
      {
        name: 'AVT Premium',
        logo: avtLogo,
        items: ['Tea Powder'],
      },
      {
        name: 'Red Label',
        logo: redLabelLogo,
        items: ['Tea Powder', 'Natural Care'],
      },
      {
        name: 'Bru',
        logo: bruLogo,
        items: ['Instant Coffee (50 GM / 100 GM)'],
      },
    ],
  },
  {
    category: 'INSTANT NOODLES (Dry Goods)',
    brands: [
      {
        name: 'Maggi',
        logo: maggiLogo,
        items: ['Noodles Masala (560 GM)'],
      },
    ],
  },
  {
    category: 'FROZEN FOOD ITEMS',
    brands: [
      {
        name: 'Grand Foods - Veg. Curries & Gravy',
        logo: grandLogo,
        items: [
          'Idichakka Thoran',
          'Koorka Mezhukkupuratti',
          'Jackfruit Seed Mango Curry',
          'Pappaya Thoran',
          'Angamaly Manga Curry',
          'Vazhachundu Vanpayar Thoran',
          'Vazhachundu Thoran',
          'Coconut Varuthara Gravy',
          'Paalkkappa',
        ],
      },
      {
        name: 'Grand Foods - Fresh Frozen Vegetables',
        logo: grandLogo,
        items: [
          'Aviyal Mix',
          'Sambar Mix',
          'Jackfruit Green',
          'Jackfruit Seed',
          'Cut Mango Green',
          'Red Onion Cleaned',
          'Long Beans',
          'Yam (Suran)',
          'Okra Cut (Vendakka)',
          'Tapioca Drumcut (908 GM / 2 KG)',
          'Tapioca Sliced (908 GM / 2 KG)',
          'Sliced Coconut',
          'Grated Coconut (400 GM / 4x100 GM)',
        ],
      },
      {
        name: 'Grand Foods - Prepared Frozen Snacks',
        logo: grandLogo,
        items: [
          'Banana Roast',
          'Banana Fry',
          'Elayada Jackfruit',
          'Veg Puffs',
          'Veg Samosa',
          'Ada Pradhaman',
          'Uzhunnuvada',
          'Parippuvada',
          'Neyyappam',
          'Kozhukatta',
          'Halwa Red',
        ],
      },
      {
        name: 'Grand Foods - Prepared Frozen Breads',
        logo: grandLogo,
        items: [
          'Malabar Porotta (330 GM / 750 GM / 908 GM)',
          'Kothurotti (Plain)',
          'Chilly Kothu Porotta',
          'Catering Porotta (Restaurant)',
          'Idiappam (White / Brown)',
          'Palappam',
        ],
      },
    ],
  },
];
export default productData;