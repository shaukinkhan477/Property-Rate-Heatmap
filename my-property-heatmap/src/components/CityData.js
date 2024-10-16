import property_1 from '../assets/property1.jpg';
import property_2 from '../assets/property2.jpg';
import property_3 from '../assets/property3.jpg';
import property_4 from '../assets/property4.jpg';
import property_5 from '../assets/property5.jpg';
import property_6 from '../assets/property6.jpg';
import property_7 from '../assets/property7.jpg';
import property_8 from '../assets/property8.jpg';
import property_9 from '../assets/property9.jpg';
import property_10 from '../assets/property10.jpg';
import property_11 from '../assets/property11.jpg';
import property_12 from '../assets/property12.jpg';
import property_13 from '../assets/property13.jpg';
import property_14 from '../assets/property14.jpg';
import property_15 from '../assets/property15.jpg';
import property_16 from '../assets/property16.jpg';
import property_17 from '../assets/property17.jpg';
import property_18 from '../assets/property18.jpg';
import property_19 from '../assets/property19.jpg';
import property_20 from '../assets/property20.jpg';
import property_21 from '../assets/property21.jpg';
import property_22 from '../assets/property22.jpg';

export const CityData = {
Bangalore: [
    {
      name: 'Whitefield',
      coords: [[12.9719, 77.7500], [12.9848, 77.7702], [12.9802, 77.7953], [12.9600, 77.7800]],
      prices: { year1: 5500, year2: 5800, year3: 6200, current: 6500, offer: 6400 },
      population: 200000,
      flooded: false,
      rainy: false,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: true,
      properties: [  // Add properties under each location
        {
          address: '123 Main St, Whitefield',
          price: 2500000,
          bedrooms: 3,
          bathrooms: 2,
          area: 1450, // in square feet
          type: 'Apartment',
          status: 'For Sale',
          image: property_1
        },
        {
          address: '456 Park Ave, Whitefield',
          price: 3400000,
          bedrooms: 4,
          bathrooms: 3,
          area: 1800, // in square feet
          type: 'Villa',
          status: 'For Rent',
          image: property_2
        },
        {
          address: '456 Park Ave, Whitefield',
          price: 3400000,
          bedrooms: 4,
          bathrooms: 3,
          area: 1800, // in square feet
          type: 'Villa',
          status: 'For Sale',
          image: property_3
        },
        // Add more properties...
      ]
    },
    {
      name: 'Koramangala',
      coords: [[12.9350, 77.6101], [12.9389, 77.6220], [12.9270, 77.6347], [12.9205, 77.6164]],
      prices: { year1: 7500, year2: 8000, year3: 9000, current: 9500, offer: 9300 },
      population: 180000,
      flooded: true,
      rainy: true,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: true,
      properties: [
          {
            address: '789 Elm St, Koramangala',
            price: 2800000,
            bedrooms: 3,
            bathrooms: 2,
            area: 1550, // in square feet
            type: 'Apartment',
            status: 'For Rent',
            image: property_4
          },
          {
            address: '654 Oak St, Koramangala',
            price: 3200000,
            bedrooms: 4,
            bathrooms: 3,
            area: 1800, // in square feet
            type: 'House',
            status: 'For Sale',
            image: property_5
          },
          {
            address: '987 Pine St, Koramangala',
            price: 1500000,
            bedrooms: 2,
            bathrooms: 1,
            area: 1100, // in square feet
            type: 'Apartment',
            status: 'For Rent',
            image: property_6
          }
        ]
    },
    {
      name: 'Indiranagar',
      coords: [[12.9786, 77.6402], [12.9843, 77.6446], [12.9834, 77.6594], [12.9745, 77.6540]],
      prices: { year1: 9000, year2: 10000, year3: 12000, current: 13000, offer: 12500 },
      population: 220000,
      flooded: false,
      rainy: true,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: false,
              properties: [
          {
            address: '1234 Maple St, Indiranagar',
            price: 3500000,
            bedrooms: 4,
            bathrooms: 3,
            area: 2000, // in square feet
            type: 'Villa',
            status: 'For Sale',
            image: property_7
          },
          {
            address: '789 Birch St, Indiranagar',
            price: 2700000,
            bedrooms: 3,
            bathrooms: 2,
            area: 1600, // in square feet
            type: 'House',
            status: 'For Sale',
            image: property_8
          }
        ]

    },
    {
      name: 'HSR Layout',
      coords: [[12.9121, 77.6416], [12.9240, 77.6467], [12.9244, 77.6581], [12.9127, 77.6534]],
      prices: { year1: 6500, year2: 7000, year3: 7500, current: 8000, offer: 7800 },
      population: 190000,
      flooded: false,
      rainy: true,
      nearHospitals: true,
      nearSchools: false,
      mostVisited: true,
              properties: [
          {
            address: '432 Cedar St, HSR Layout',
            price: 2500000,
            bedrooms: 3,
            bathrooms: 2,
            area: 1700, // in square feet
            type: 'Apartment',
            status: 'For Rent',
            image: property_9
          },
          {
            address: '1010 Redwood St, HSR Layout',
            price: 3000000,
            bedrooms: 4,
            bathrooms: 3,
            area: 1900, // in square feet
            type: 'House',
            status: 'For Sale',
            image: property_10
          }
        ]

    },
    {
      name: 'Hebbal',
      coords: [[13.0350, 77.5980], [13.0425, 77.6136], [13.0259, 77.6194], [13.0172, 77.6022]],
      prices: { year1: 6000, year2: 6500, year3: 7000, current: 7500, offer: 7300 },
      population: 150000,
      flooded: true,
      rainy: false,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: false,
      properties: [
          {
            address: '852 Palm St, Hebbal',
            price: 2400000,
            bedrooms: 3,
            bathrooms: 2,
            area: 1450, // in square feet
            type: 'Apartment',
            status: 'For Rent',
            image: property_11
          },
          {
            address: '678 Spruce St, Hebbal',
            price: 2800000,
            bedrooms: 3,
            bathrooms: 2,
            area: 1650, // in square feet
            type: 'House',
            status: 'For Sale',
            image: property_12
          }
        ]
    },
  ],
  Hyderabad: [
    {
      name: 'Gachibowli',
      coords: [[17.4240, 78.3391], [17.4438, 78.3548], [17.4337, 78.3687], [17.4197, 78.3594]],
      prices: { year1: 6500, year2: 7000, year3: 8000, current: 8500, offer: 8300 },
      population: 300000,
      flooded: false,
      rainy: false,
      nearHospitals: true,
      nearSchools: false,
      mostVisited: true,
      properties: [
          {
            address: "123 Gachibowli Street",
            price: 120000,
            bedrooms: 3,
            bathrooms: 2,
            area: 1500,
            type: "Apartment",
            status: "For Sale",
            image: property_13
          },
          {
            address: "456 Gachibowli Avenue",
            price: 140000,
            bedrooms: 4,
            bathrooms: 3,
            area: 1800,
            type: "House",
            status: "For Sale",
            image: property_14
          }
        ]
    },
    {
      name: 'Banjara Hills',
      coords: [[17.4056, 78.4421], [17.4132, 78.4572], [17.3991, 78.4642], [17.3911, 78.4498]],
      prices: { year1: 10000, year2: 12000, year3: 15000, current: 18000, offer: 17000 },
      population: 180000,
      flooded: true,
      rainy: true,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Jubilee Hills',
      coords: [[17.4239, 78.4002], [17.4375, 78.4127], [17.4254, 78.4276], [17.4130, 78.4153]],
      prices: { year1: 10000, year2: 12000, year3: 16000, current: 20000, offer: 19000 },
      population: 250000,
      flooded: false,
      rainy: false,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Madhapur',
      coords: [[17.4467, 78.3905], [17.4587, 78.4041], [17.4411, 78.4159], [17.4294, 78.4044]],
      prices: { year1: 6500, year2: 7000, year3: 10000, current: 12000, offer: 11500 },
      population: 200000,
      flooded: false,
      rainy: true,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: false,
    },
    {
      name: 'Kondapur',
      coords: [[17.4751, 78.3473], [17.4885, 78.3650], [17.4734, 78.3777], [17.4601, 78.3613]],
      prices: { year1: 5000, year2: 6000, year3: 7500, current: 8000, offer: 7800 },
      population: 150000,
      flooded: true,
      rainy: true,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: true,
    },
  ],
  Gurgaon: [
    {
      name: 'DLF Phase 1',
      coords: [[28.4743, 77.0861], [28.4871, 77.1007], [28.4757, 77.1095], [28.4615, 77.0976]],
      prices: { year1: 7500, year2: 8000, year3: 9000, current: 14000, offer: 13500 },
      population: 250000,
      flooded: false,
      rainy: true,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Golf Course Road',
      coords: [[28.4639, 77.0956], [28.4787, 77.1151], [28.4658, 77.1303], [28.4487, 77.1082]],
      prices: { year1: 10000, year2: 12000, year3: 15000, current: 22000, offer: 21000 },
      population: 300000,
      flooded: false,
      rainy: true,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Sushant Lok',
      coords: [[28.4601, 77.0781], [28.4754, 77.0923], [28.4637, 77.1058], [28.4480, 77.0911]],
      prices: { year1: 6000, year2: 7000, year3: 9000, current: 12000, offer: 11500 },
      population: 180000,
      flooded: true,
      rainy: false,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: false,
    },
    {
      name: 'Sector 49',
      coords: [[28.4156, 77.0567], [28.4328, 77.0712], [28.4234, 77.0847], [28.4073, 77.0702]],
      prices: { year1: 4000, year2: 5000, year3: 7000, current: 9000, offer: 8800 },
      population: 150000,
      flooded: false,
      rainy: true,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: false,
    },
  ],
  Noida: [
    {
      name: 'Sector 62',
      coords: [[28.6297, 77.3592], [28.6458, 77.3757], [28.6301, 77.3905], [28.6145, 77.3744]],
      prices: { year1: 4000, year2: 5000, year3: 6000, current: 9000, offer: 8800 },
      population: 180000,
      flooded: false,
      rainy: false,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Sector 18',
      coords: [[28.5695, 77.3241], [28.5852, 77.3405], [28.5707, 77.3541], [28.5557, 77.3385]],
      prices: { year1: 7000, year2: 8000, year3: 10000, current: 13000, offer: 12500 },
      population: 300000,
      flooded: true,
      rainy: true,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Sector 50',
      coords: [[28.5794, 77.3451], [28.5941, 77.3616], [28.5799, 77.3765], [28.5654, 77.3604]],
      prices: { year1: 5000, year2: 6000, year3: 8000, current: 10500, offer: 10000 },
      population: 200000,
      flooded: false,
      rainy: true,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: true,
    },
  ],
  Delhi: [
    {
      name: 'South Delhi',
      coords: [[28.5256, 77.2089], [28.5487, 77.2297], [28.5320, 77.2454], [28.5080, 77.2246]],
      prices: { year1: 10000, year2: 12000, year3: 20000, current: 25000, offer: 24000 },
      population: 500000,
      flooded: true,
      rainy: true,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Connaught Place',
      coords: [[28.6331, 77.2204], [28.6469, 77.2331], [28.6316, 77.2498], [28.6174, 77.2369]],
      prices: { year1: 15000, year2: 18000, year3: 25000, current: 30000, offer: 29000 },
      population: 400000,
      flooded: false,
      rainy: true,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Saket',
      coords: [[28.5221, 77.1985], [28.5354, 77.2137], [28.5202, 77.2268], [28.5068, 77.2117]],
      prices: { year1: 10000, year2: 12000, year3: 15000, current: 20000, offer: 19000 },
      population: 300000,
      flooded: false,
      rainy: true,
      nearHospitals: true,
      nearSchools: false,
      mostVisited: true,
    },
    {
    name: 'Dwarka',
    coords: [[28.5803, 77.0369], [28.5964, 77.0515], [28.5824, 77.0654], [28.5672, 77.0511]],
    prices: { year1: 6000, year2: 7000, year3: 10000, current: 14000, offer: 13500 },
    population: 350000,
    flooded: false,
    rainy: true,
    nearHospitals: false,
    nearSchools: true,
    mostVisited: false,
  },
  {
    name: 'Rohini',
    coords: [[28.7146, 77.0915], [28.7319, 77.1057], [28.7185, 77.1206], [28.7014, 77.1064]],
    prices: { year1: 5000, year2: 6000, year3: 8000, current: 11000, offer: 10500 },
    population: 400000,
    flooded: true,
    rainy: false,
    nearHospitals: true,
    nearSchools: true,
    mostVisited: true,
  },
  {
    name: 'Vasant Kunj',
    coords: [[28.5362, 77.1525], [28.5497, 77.1660], [28.5338, 77.1808], [28.5193, 77.1663]],
    prices: { year1: 12000, year2: 15000, year3: 20000, current: 25000, offer: 24000 },
    population: 200000,
    flooded: true,
    rainy: true,
    nearHospitals: true,
    nearSchools: false,
    mostVisited: true,
  },
  {
    name: 'Kalkaji',
    coords: [[28.5355, 77.2623], [28.5502, 77.2770], [28.5324, 77.2924], [28.5173, 77.2784]],
    prices: { year1: 8000, year2: 9000, year3: 12000, current: 15000, offer: 14500 },
    population: 180000,
    flooded: false,
    rainy: false,
    nearHospitals: true,
    nearSchools: true,
    mostVisited: false,
  },
  {
    name: 'Karol Bagh',
    coords: [[28.6507, 77.1923], [28.6663, 77.2080], [28.6509, 77.2213], [28.6358, 77.2074]],
    prices: { year1: 10000, year2: 12000, year3: 15000, current: 18000, offer: 17500 },
    population: 250000,
    flooded: true,
    rainy: true,
    nearHospitals: false,
    nearSchools: false,
    mostVisited: true,
  },
  {
    name: 'Janakpuri',
    coords: [[28.6106, 77.0832], [28.6264, 77.0981], [28.6121, 77.1121], [28.5964, 77.0983]],
    prices: { year1: 5000, year2: 7000, year3: 9000, current: 12000, offer: 11500 },
    population: 150000,
    flooded: true,
    rainy: false,
    nearHospitals: true,
    nearSchools: true,
    mostVisited: false,
  },
  {
    name: 'Pitampura',
    coords: [[28.6970, 77.1307], [28.7134, 77.1460], [28.6986, 77.1607], [28.6824, 77.1448]],
    prices: { year1: 8000, year2: 10000, year3: 12000, current: 15000, offer: 14500 },
    population: 300000,
    flooded: true,
    rainy: true,
    nearHospitals: true,
    nearSchools: true,
    mostVisited: true,
  },
  ],

  Lucknow: [
    {
      name: 'Gomti Nagar',
      coords: [[26.8508, 81.0163], [26.8657, 81.0304], [26.8494, 81.0450], [26.8344, 81.0310]],
      prices: { year1: 5000, year2: 5500, year3: 7000, current: 10000, offer: 9500 },
      population: 250000,
      flooded: true,
      rainy: false,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Hazratganj',
      coords: [[26.8509, 80.9416], [26.8661, 80.9550], [26.8514, 80.9682], [26.8365, 80.9545]],
      prices: { year1: 7000, year2: 8000, year3: 10000, current: 14000, offer: 13500 },
      population: 300000,
      flooded: true,
      rainy: true,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Aliganj',
      coords: [[26.8924, 80.9370], [26.9078, 80.9517], [26.8931, 80.9654], [26.8782, 80.9505]],
      prices: { year1: 4000, year2: 5000, year3: 6500, current: 8500, offer: 8200 },
      population: 200000,
      flooded: false,
      rainy: true,
      nearHospitals: true,
      nearSchools: false,
      mostVisited: false,
    },
    {
      name: 'Indira Nagar',
      coords: [[26.8706, 81.0193], [26.8852, 81.0339], [26.8712, 81.0474], [26.8561, 81.0332]],
      prices: { year1: 4000, year2: 5000, year3: 6500, current: 9000, offer: 8700 },
      population: 150000,
      flooded: false,
      rainy: true,
      nearHospitals: true,
      nearSchools: true,
      mostVisited: false,
    },
    {
      name: 'Mahanagar',
      coords: [[26.8724, 80.9518], [26.8873, 80.9675], [26.8729, 80.9807], [26.8578, 80.9657]],
      prices: { year1: 5000, year2: 6000, year3: 8000, current: 11000, offer: 10500 },
      population: 180000,
      flooded: true,
      rainy: false,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: true,
    },
  ],
Mumbai: [
  {
    name: 'South Mumbai',
    coords: [[18.9218, 72.8323], [18.9356, 72.8498], [18.9160, 72.8624], [18.9024, 72.8450]],
    prices: { year1: 50000, year2: 55000, year3: 60000, current: 70000, offer: 68000 },
    population: 800000,
    flooded: true,
    rainy: true,
    nearHospitals: true,
    nearSchools: true,
    mostVisited: true,
  },
  {
    name: 'Andheri West',
    coords: [[19.1170, 72.8306], [19.1340, 72.8464], [19.1174, 72.8601], [19.1008, 72.8435]],
    prices: { year1: 18000, year2: 20000, year3: 30000, current: 35000, offer: 34000 },
    population: 600000,
    flooded: false,
    rainy: true,
    nearHospitals: true,
    nearSchools: false,
    mostVisited: true,
  },
  {
    name: 'Powai',
    coords: [[19.1186, 72.9081], [19.1364, 72.9246], [19.1213, 72.9393], [19.1034, 72.9228]],
    prices: { year1: 15000, year2: 18000, year3: 25000, current: 30000, offer: 29000 },
    population: 450000,
    flooded: true,
    rainy: false,
    nearHospitals: true,
    nearSchools: true,
    mostVisited: false,
  },
  {
    name: 'Navi Mumbai',
    coords: [[19.0464, 73.0022], [19.0650, 73.0181], [19.0515, 73.0342], [19.0328, 73.0182]],
    prices: { year1: 8000, year2: 10000, year3: 15000, current: 18000, offer: 17000 },
    population: 500000,
    flooded: false,
    rainy: true,
    nearHospitals: false,
    nearSchools: true,
    mostVisited: true,
  },
  {
    name: 'Borivali East',
    coords: [[19.2284, 72.8572], [19.2458, 72.8731], [19.2325, 72.8891], [19.2149, 72.8732]],
    prices: { year1: 10000, year2: 15000, year3: 20000, current: 25000, offer: 24000 },
    population: 350000,
    flooded: true,
    rainy: false,
    nearHospitals: true,
    nearSchools: true,
    mostVisited: false,
  },
  {
    name: 'Bandra West',
    coords: [[19.0561, 72.8227], [19.0620, 72.8260], [19.0650, 72.8300], [19.0675, 72.8350], [19.0605, 72.8410], [19.0535, 72.8365], [19.0480, 72.8300], [19.0510, 72.8220], [19.0561, 72.8227]],
    prices: { year1: 15000, year2: 20000, year3: 22000, current: 25000, offer: 24000 },
    population: 500000,
    flooded: true,
    rainy: true,
    nearHospitals: false,
    nearSchools: true,
    mostVisited: true,
  },
  {
    name: 'Juhu',
    coords: [[19.1042, 72.8268], [19.1198, 72.8406], [19.1065, 72.8547], [19.0912, 72.8411]],
    prices: { year1: 22000, year2: 25000, year3: 28000, current: 35000, offer: 34000 },
    population: 300000,
    flooded: true,
    rainy: false,
    nearHospitals: true,
    nearSchools: true,
    mostVisited: false,
  },
  {
    name: 'Worli',
    coords: [[18.9955, 72.8166], [19.0108, 72.8331], [18.9950, 72.8493], [18.9797, 72.8335]],
    prices: { year1: 30000, year2: 35000, year3: 40000, current: 45000, offer: 44000 },
    population: 250000,
    flooded: true,
    rainy: true,
    nearHospitals: true,
    nearSchools: true,
    mostVisited: true,
  },
  {
    name: 'Malad West',
    coords: [[19.1873, 72.8335], [19.2019, 72.8497], [19.1878, 72.8658], [19.1725, 72.8492]],
    prices: { year1: 9000, year2: 11000, year3: 13000, current: 16000, offer: 15000 },
    population: 400000,
    flooded: false,
    rainy: true,
    nearHospitals: false,
    nearSchools: true,
    mostVisited: false,
  },
  {
    name: 'Colaba',
    coords: [[18.9066, 72.8145], [18.9208, 72.8303], [18.9061, 72.8465], [18.8909, 72.8309]],
    prices: { year1: 30000, year2: 35000, year3: 40000, current: 45000, offer: 44000 },
    population: 250000,
    flooded: true,
    rainy: false,
    nearHospitals: true,
    nearSchools: false,
    mostVisited: true,
  },
],

  Odisha: [
    {
      name: 'Jaydev Vihar',
      coords: [[20.2970, 85.8191], [20.3120, 85.8331], [20.2978, 85.8474], [20.2827, 85.8332]],
      prices: { year1: 4000, year2: 4500, year3: 6000, current: 7000, offer: 6800 },
      population: 120000,
      flooded: true,
      rainy: true,
      nearHospitals: true,
      nearSchools: false,
      mostVisited: true,
    },
    {
      name: 'Patia',
      coords: [[20.3515, 85.8159], [20.3656, 85.8312], [20.3525, 85.8455], [20.3383, 85.8303]],
      prices: { year1: 3000, year2: 3500, year3: 5000, current: 6500, offer: 6200 },
      population: 200000,
      flooded: false,
      rainy: true,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: true,
    },
    {
      name: 'Saheed Nagar',
      coords: [[20.2967, 85.8433], [20.3114, 85.8587], [20.2971, 85.8735], [20.2824, 85.8590]],
      prices: { year1: 4000, year2: 4500, year3: 6000, current: 8000, offer: 7500 },
      population: 250000,
      flooded: false,
      rainy: false,
      nearHospitals: true,
      nearSchools: false,
      mostVisited: true,
    },
    {
      name: 'Khandagiri',
      coords: [[20.2484, 85.7799], [20.2632, 85.7956], [20.2498, 85.8103], [20.2353, 85.7949]],
      prices: { year1: 2500, year2: 3000, year3: 4500, current: 5500, offer: 5300 },
      population: 180000,
      flooded: true,
      rainy: false,
      nearHospitals: false,
      nearSchools: true,
      mostVisited: false,
    },
    {
      name: 'Nayapalli',
      coords: [[20.2931, 85.8054], [20.3077, 85.8203], [20.2938, 85.8350], [20.2791, 85.8202]],
      prices: { year1: 2500, year2: 3000, year3: 4500, current: 6000, offer: 5700 },
      population: 150000,
      flooded: true,
      rainy: true,
      nearHospitals: true,
      nearSchools: false,
      mostVisited: true,
    },
  ],
};

// City center coordinates for markers
export const cityCoordinates = {
  Bangalore: [12.9716, 77.5946],
  Hyderabad: [17.3850, 78.4867],
  Gurgaon: [28.4595, 77.0266],
  Noida: [28.5355, 77.3910],
  Mumbai: [19.0760, 72.8777],
  Odisha: [20.2961, 85.8245],
  Delhi: [28.6139, 77.2088],
  Lucknow: [26.8467, 80.9462],
  // Add more cities' coordinates here
};
