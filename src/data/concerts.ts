export interface Concert {
  date: string;
  venue: string;
  city: string;
  ticketsAvailable: boolean;
  ticketLink?: string;
}

export const concerts: Concert[] = [
  {
    date: "2024-11-15",
    venue: "Sala Caracol",
    city: "Madrid",
    ticketsAvailable: false,
  },
  {
    date: "2024-06-01",
    venue: "Sala Moon",
    city: "Valencia",
    ticketsAvailable: false,
  },
  {
    date: "2024-06-22",
    venue: "La Riviera",
    city: "Madrid",
    ticketsAvailable: false
  }
];