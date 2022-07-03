type DestinationData = {
  [key: number]: Planet;
};
type Planet = {
  name: string;
  distanceFromEarth: string;
  cost: number;
  currency: string;
};
export const Destinations: DestinationData = {
  1: {
    name: "moon",
    distanceFromEarth: "384,400 km",
    cost: 5000,
    currency: "USD",
  },
  2: {
    name: "mars",
    distanceFromEarth: "193.05 million km",
    cost: 15000,
    currency: "USD",
  },
  3: {
    name: "venus",
    distanceFromEarth: "212.18 million km",
    cost: 7000,
    currency: "USD",
  },
  4: {
    name: "mercury",
    distanceFromEarth: "175.42 million km",
    cost: 8000,
    currency: "USD",
  },
  5: {
    name: "saturn",
    distanceFromEarth: "1.3611 billion km",
    cost: 70000,
    currency: "USD",
  },
  6: {
    name: "jupiter",
    distanceFromEarth: "716.49 million km",
    cost: 11000,
    currency: "USD",
  },
};
export default Destinations;
export type { DestinationData };
