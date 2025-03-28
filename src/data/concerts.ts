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
    date: "2025-03-29",
    map: "https://www.google.es/maps/place/Recinto+ferial,+04800+Albox,+Almería/@37.3908096,-2.1471888,19z/data=!4m6!3m5!1s0xd6549dc49b05e63:0x807bfcb84b03de4b!8m2!3d37.3907388!4d-2.1472253!16s%2Fg%2F11nmtpt_xr!4m14!1m7!3m6!1s0xd6549dc49b05e63:0x807bfcb84b03de4b!2sRecinto+ferial,+04800+Albox,+Almer%C3%ADa!8m2!3d37.3907388!4d-2.1472253!16s%2Fg%2F11nmtpt_xr!3m5!1s0xd6549dc49b05e63:0x807bfcb84b03de4b!8m2!3d37.3907388!4d-2.1472253!16s%2Fg%2F11",
    name: "Trajin Fest",
    venue: "Recinto Ferial",
    city: "Albox, Almería",
    ticketsAvailable: true,
    ticketLink: "https://www.instagram.com/p/DHTLDMYIyaG/?igsh=NGdwc3RpNnAwamU1"
  },
 {
    date: "2025-03-22",
    map: "https://maps.app.goo.gl/Cym3fPz5t9yNnYqi8",
    venue: "Pub Vayven",
    city: "Fines, Almería",
    ticketsAvailable: false,
  },
{
    date: "2025-04-26",
    venue: "Fiesta Privada",
    map: "",
    city: "Huercal Overa, Almería",
    ticketsAvailable: false,
  }, {
    date: "2025-12-20",
    venue: "Heaven",
    map: "https://maps.app.goo.gl/n6aYT56C79dC4TuR9",
    city: "Albox, Almería",
    ticketsAvailable: false,
  },
{
    date: "2025-07-12",
    map: "https://maps.app.goo.gl/qhw7Xppwttpbr7ES6",
    venue: "La Estacion de Serón",
    city: "Serón, Almería",
    ticketsAvailable: false,
  },
{
    date: "2025-06-28",
    map: "https://maps.app.goo.gl/ktm74kkK88z4Vxcn6",
    venue: "La oveja",
    city: "Albox, Almería",
    ticketsAvailable: false,
  },
  {
    date: "2025-02-28",
    map: "https://maps.app.goo.gl/Cym3fPz5t9yNnYqi8",
    venue: "Pub Vayven",
    city: "Fines, Almería",
    ticketsAvailable: false,
  },
{
    date: "2025-03-08",
    map: "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    venue: "Hola Ola",
    city: "Mojacar, Almería",
    ticketsAvailable: false,
  },
{
    date: "2025-05-17",
    map: "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    venue: "Hola Ola",
    city: "Mojacar, Almería",
    ticketsAvailable: false,
  },
{
    date: "2025-10-04",
    map: "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    venue: "Hola Ola",
    city: "Mojacar, Almería",
    ticketsAvailable: false,
  },
{
    date: "2025-11-01",
    map: "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    venue: "Hola Ola",
    city: "Mojacar, Almería",
    ticketsAvailable: false,
  },
{
    date: "2026-01-17",
    map: "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    venue: "Hola Ola",
    city: "Mojacar, Almería",
    ticketsAvailable: false,
  },
{
    name: "Fiesta Privada",
    date: "2025-05-31",
    map: "",
    venue: "",
    city: " ",
    ticketsAvailable: false,
  },
{
    date: "2025-03-01",
    map: "https://maps.app.goo.gl/KQyXez3UhVv5BXSK8",
    venue: "Alexandra Coffee",
    city: "Olula del Río, Almería",
    ticketsAvailable: false,
  },
{
    date: "2025-06-20",
    venue: "Café Pasarela",
    map: "https://maps.app.goo.gl/rdsP34NHBVaTWbJHA",
    city: "Águilas, Murcia",
    ticketsAvailable: false
  },
{
    name: "Fiesta Privada",
    date: "2025-05-04",
    map: "",
    venue: "",
    city: "Olula del Río, Almería",
    ticketsAvailable: false,
  },
{
    date: "2025-02-15",
    map: "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    venue: "Hola Ola",
    city: "Mojacar, Almería",
    ticketsAvailable: false,
  },
  {
    date: "2025-02-08",
    map: "https://maps.app.goo.gl/ktm74kkK88z4Vxcn6",
    venue: "La oveja",
    city: "Albox, Almería",
    ticketsAvailable: false,
  },{
    date: "2025-01-04",
    map: "https://maps.app.goo.gl/KQyXez3UhVv5BXSK8",
    venue: "Alexandra Coffee",
    city: "Olula del Río, Almería",
    ticketsAvailable: false,
  },{
    name: "Almería tiene norte",
    date: "2024-12-01",
    map: "https://maps.app.goo.gl/t6bNEwK8zFYMdc4s9",
    venue: "Plaza del ayuntamiento de Fines",
    city: "Fines, Almería",
    ticketsAvailable: false,
  },
{
    date: "2024-12-14",
    map: "https://maps.app.goo.gl/EtKfp5oECJDcH1EM8",
    venue: "Hola Ola",
    city: "Mojacar, Almería",
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
    date: "2024-12-21",
    map: "https://maps.app.goo.gl/s54qcKBMBQ358JGC9",
    venue: "Pub La Jaima",
    city: "Olula del Río, Almería",
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
    name: "40 aniversario Banda de Macael",
    venue: "El Vaticano, Carpa municipal",
    map: "https://maps.app.goo.gl/McHb7LTWBshmFJFU8",
    city: "Macael, Almería",
    ticketsAvailable: false
  },
  {
    date: "2025-04-17",
    venue: "Heaven",
    map: "https://maps.app.goo.gl/n6aYT56C79dC4TuR9",
    city: "Albox, Almería",
    ticketsAvailable: false
  }
];
