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
    name: "Almería tiene norte",
    date: "2024-12-01",
    map: "https://maps.app.goo.gl/t6bNEwK8zFYMdc4s9",
    venue: "Plaza del ayuntamiento de Fines",
    city: "Fines, Almería",
    ticketsAvailable: false,
  },
  {
    date: "2024-12-20",
    map: "https://maps.app.goo.gl/ktm74kkK88z4Vxcn6",
    venue: "La oveja",
    city: "Albox, Almería",
    ticketsAvailable: false,
  },
  {
    date: "2025-01-25",
    venue: "Concentración motera - Moradores",
    city: "Bacares, Almería",
    ticketsAvailable: false,
  },
  {
    date: "2025-01-31",
    venue: "Café Pasarela",
    map: "https://maps.app.goo.gl/rdsP34NHBVaTWbJHA",
    city: "Águilas, Murcia",
    ticketsAvailable: false
  },
  {
    date: "2025-04-12",
    name: "Concierto Solidario",
    venue: "El Vaticano, Carpa municipal",
    map: "https://maps.app.goo.gl/McHb7LTWBshmFJFU8",
    city: "Macael, Almería",
    ticketsAvailable: false
  }
];
