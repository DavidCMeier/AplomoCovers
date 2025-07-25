export interface Concert {
  date: string;
  map?: string;
  name?: string;
  venue: string;
  city: string;
  ticketsAvailable: boolean;
  ticketLink?: string;
}

export const concerts: Concert[] = [
  {
    "date": "2025-08-08",
    "venue": "Pub Principal",
    "map": "https://maps.app.goo.gl/8KpjbcTjo9ttzzyk6",
    "city": "Tíjola, Almería",
    "ticketsAvailable": false
  }, 
  {
    "date": "2025-08-13",
    "name": "Lijar Music Festival",
    "map": "https://maps.app.goo.gl/D4TDvvvNii4Z7h7x8",
    "venue": "La plaza de la Paz",
    "city": "Lijar, Almería",
    "ticketsAvailable": false
  },
  {
    "date": "2025-08-14",
    "map": "https://maps.app.goo.gl/7LkNMPYrBrZ2Qf1U6",
    "venue": "Cafe Pub Jardín",
    "city": "Serón, Almería",
    "ticketsAvailable": false
  },
  {
    "date": "2025-08-16",
    "map": "https://maps.app.goo.gl/571N9sJ4LJVnySx19",
    "name": "Noche en Blanco",
    "venue": "Plaza de la Constitución",
    "city": "Oria, Almería",
    "ticketsAvailable": false
  },
  {
    "date": "2025-09-20",
    "name": "Fiesta Privada",
    "map": "",
    "venue": "",
    "city": " ",
    "ticketsAvailable": false
  },
  {
    "date": "2025-09-27",
    "name": "Vera cafetería PRALEX heladeros artesanos",
    "venue": "Recinto Ferial",
    "map": "https://maps.app.goo.gl/d9NVjWxKYJ4hpMAP7",
    "city": "Vera, Almería",
    "ticketsAvailable": false
  },
  {
    "date": "2025-10-04",
    "map": "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    "venue": "Hola Ola",
    "city": "Mojacar, Almería",
    "ticketsAvailable": false
  },
  {
    "date": "2025-10-31",
    "map": "https://maps.app.goo.gl/7XNsaT4mGcFnUcq19",
    "venue": "Plaza de Almería",
    "city": "Macael, Almería",
    "ticketsAvailable": false
  },
  {
    "date": "2025-11-01",
    "map": "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    "venue": "Hola Ola",
    "city": "Mojacar, Almería",
    "ticketsAvailable": false
  },
  {
    "date": "2025-11-03",
    "name": "Feria de Albox", 
    "map": "https://maps.app.goo.gl/yZVPuPV36ZV1RNKJ6",
    "venue": "Recinto Ferial",
    "city": "Albox, Almería",
    "ticketsAvailable": false
  },
  {
    "date": "2025-12-05",
    "venue": "Alexandra Coffee",
    "map": "https://maps.app.goo.gl/fPAaUcuk8gakRQ4FA",
    "city": "Olula del Río, Almería",
    "ticketsAvailable": false
  },
  {
    "date": "2026-01-17",
    "map": "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    "venue": "Hola Ola",
    "city": "Mojacar, Almería",
    "ticketsAvailable": false
  }
];
