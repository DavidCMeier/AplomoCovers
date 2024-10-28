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
    name: "Concierto Cofradía de Macael",
    date: "2024-12-06",
    map: "https://maps.app.goo.gl/McHb7LTWBshmFJFU8",
    venue: "El Vaticano, Carpa municipal",
    city: "Macael, Almería",
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
