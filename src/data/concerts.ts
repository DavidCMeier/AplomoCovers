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
    venue: "Cofradía de Macael",
    city: "Macael, Almería",
    ticketsAvailable: false,
  },
  {
    date: "2025-01-25",
    venue: "Moradores",
    city: "Tijola, Almería",
    ticketsAvailable: false,
  },
  {
    date: "2025-01-31",
    venue: "Cafe bar Pasarela",
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
