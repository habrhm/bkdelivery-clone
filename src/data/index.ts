import { Menu, Product } from "@/types";

export const menus: Menu[] = [
  {
    id: 1,
    name: "King of The Week",
    slug: "king-of-the-week-3",
    img: "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/6/12/a4put9mhhwnbf4mbkdfrjt_product_list.jpg",
  },
  {
    id: 2,
    name: "King's Chicken [ Rasa baru ]",
    slug: "kings-chicken-rasa-baru",
    img: "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/6/3/bzilpvmecz3gmmngfan9vg_product_list.jpg",
  },
  {
    id: 3,
    name: "Tropical Whopper [ Limited Time ]",
    slug: "tropical-whopper-limited-time",
    img: "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/16/wmcrcojuckpvpdhncwumu9_product_list.jpg",
  },
  {
    id: 4,
    name: "BEVERAGES",
    slug: "beverages",
    img: "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/5s3jdve3uve4itsndqnqkm_product_list.jpg",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "2 pcs Chicken Strips",
    description: "2 pcs Chicken Strips",
    thumbImg: {
      url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/6/12/3rz4d5cfpnxrfaxgpwqzxe_product_list.jpg",
      alt: "2 pcs Chicken Strip",
    },
    imgs: [
      {
        url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/5/19/s5mj26kgrtupwsoxfhndgz_product_details.jpg",
        alt: "2 PC CKN STRIPS",
      },
    ],

    price: 17273,
    slug: "2-pc-ckn-strips",
    menuId: 1,
  },
  {
    id: 2,
    name: "2pc Chicken Strips Jalapeno",
    description: "2pc Chicken Strips + Jalapeno Cheese Sauce",
    thumbImg: {
      url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/6/12/gycrgalei4qkhm5a7snuba_product_list.jpg",
      alt: "2pc Chicken Strips Jalapeno",
    },
    imgs: [
      {
        url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/6/1/wvnjyhdwkfkngxhgbahyj8_product_details.jpg",
        alt: "DLV 2 C.StrpJlp",
      },
    ],
    price: 18182,
    slug: "dlv-2-cstrpjlp",
    menuId: 1,
  },
  {
    id: 3,
    name: "Paket Crispy 1",
    description:
      "1 pc Ayam Crispy + Nasi + Frestea Jasmine Tea Medium [ Rasa Baru, Enaknya sampe gigitan terakhir ! ] 𝘗𝘰𝘵𝘰𝘯𝘨𝘢𝘯 𝘢𝘺𝘢𝘮 𝘺𝘢𝘯𝘨 𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢 𝘵𝘦𝘳𝘨𝘢𝘯𝘵𝘶𝘯𝘨 𝘬𝘦𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢𝘢𝘯 𝘥𝘪 𝘵𝘰𝘬𝘰 𝘱𝘢𝘥𝘢 𝘴𝘢𝘢𝘵 𝘱𝘦𝘮𝘦𝘴𝘢𝘯𝘢𝘯/𝘱𝘦𝘯𝘨𝘪𝘳𝘪𝘮𝘢𝘯",
    thumbImg: {
      url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/5/8/dlydc99j3tuuvaslic6fmc_product_list.jpg",
      alt: "Paket Crispy 1",
    },
    imgs: [
      {
        url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/5/8/tjbzjecp9pwaazcw8yqedf_product_details.jpg",
        alt: "Paket Crispy 1",
      },
    ],
    price: 25000,
    slug: "paket-crispy-1",
    menuId: 2,
  },
  {
    id: 4,
    name: "Paket Crispy 2",
    description:
      "2 pcs Ayam Crispy + Nasi + Frestea Jasmine Tea Medium [ Rasa Baru, Enaknya sampe gigitan terakhir ! ]",
    thumbImg: {
      url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/5/8/nnbbuudkh4ahdbv2jusmd5_product_list.jpg",
      alt: "Paket Crispy 2",
    },
    imgs: [
      {
        url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/5/8/6r2eckp3fpczwynapiuhvk_product_details.jpg",
        alt: "Paket Crispy 2",
      },
    ],
    price: 45000,
    slug: "paket-crispy-2",
    upsizePrice: 6818,
    menuId: 2,
  },
  {
    id: 5,
    name: "Paket Tropical Whopper® Medium",
    title: "Tropical Whopper®",
    description:
      "100% daging sapi Australian juicy yang dipanggang sempurna, dengan 4pc beef bacon gurih, fresh letuce dan nanas segar, juga 2pc melty American cheese, dibalut dengan mayonaise dan sweet and spicy saus, beserta bun lembut bertabur wijen.",
    thumbImg: {
      url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/g3mqcprctts92bkfmvj8jj_product_list.jpg",
      alt: "Paket Tropical Whopper® Medium",
    },
    imgs: [
      {
        url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/15/a8fn3qltwbncvmwaoj7xr5_product_details.jpg",
        alt: "Tropical Whopper",
      },
      {
        url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/j7xcq45ziyieuuazxhiejy_product_details.jpg",
        alt: "Tropical Whopper VM Medium",
      },
    ],
    price: 45000,
    slug: "tropical-whp-m",
    upsizePrice: 6818,
    optionalMealPrice: 15000,
    menuId: 3,
  },
  {
    id: 6,
    name: "Super Float Coke",
    description: "Super Float Coke",
    thumbImg: {
      url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/erce8ichu49pxe5hats4lt_product_list.jpg",
      alt: "Super Float Coke",
    },
    imgs: [
      {
        url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/eqoizpw9lp2rly3sucsssv_product_details.jpg",
        alt: "Super Float Coke",
      },
    ],
    price: 17273,
    slug: "coke-float",
    menuId: 4,
  },
  {
    id: 7,
    name: "Super Float Milo",
    thumbImg: {
      url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/qtk7qdhmujomnd9eva5jgy_product_list.jpg",
      alt: "Super Float Milo",
    },
    imgs: [
      {
        url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/k4ryyubk7k247i9l6enpaq_product_details.jpg",
        alt: "Super Float Milo",
      },
    ],
    price: 17273,
    slug: "float-milo",
    menuId: 4,
  },
  {
    id: 8,
    name: "American Cheese",
    thumbImg: {
      url: "https://media-order.bkdelivery.co.id/thumb/product_photo/2019/5/2/a2yjyldjxdsphqddybamfn_add_ons.jpg",
      alt: "American Cheese",
    },
    imgs: [],
    price: 4545,
    slug: "american-cheese",
  },
];
