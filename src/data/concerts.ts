export interface Concert {
  date: string;
  venue: string;
  city: string;
  ticketsAvailable: boolean;
  ticketLink?: string;
}

export const concerts: Concert[] = [
  {
    date: "2024-12-06",
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
    venue: "Bar Pasarela",
    city: "Águilas, Murcia",
    ticketsAvailable: false
  },
  {
    date: "2025-04-25",
    venue: "Concierto Solidario",
    city: "Macael, Almería",
    ticketsAvailable: false
  }
];
