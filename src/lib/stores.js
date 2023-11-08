import { writable } from "svelte/store";

export const showSidebar = writable(false);

export const y = writable(0);
export const x = writable(0);
export const maxX = writable(0);
export const scrollPoint = writable(0);

export const imgIdx = writable(1);
export const toc = [
  {
    essayno: "mm01",
    essayfn: "mm01-american-railroad-maps-1828-1876",
    essaytitle: "American Railroad Maps, 1828-1876",
    essaysubtitle: "",
    author: "Gerald A. Danzer with James R. Akerman",
    essayslug: "american-railroad-maps-1828-1876",
  },
  {
    essayno: "mm03",
    essayfn: "mm03-american-railroad-maps-1873-2012",
    essaytitle: "American Railroad Maps, 1873-2012",
    essaysubtitle: "",
    author: "Gerald A. Danzer",
    essayslug: "american-railroad-maps-1873-2012",
  },
  {
    essayno: "mm05",
    essayfn: "mm05-state-and-federal",
    essaytitle: "State and Federal Mapping of Infrastructure and Movement",
    essaysubtitle: "null",
    author: "Susan Schulten",
    essayslug: "state-and-federal",
  },
  {
    essayno: "mm06",
    essayfn: "mm06-planning-transportation",
    essaytitle: "Planning Transportation",
    essaysubtitle: "",
    author: "Joseph P. Schwieterman",
    essayslug: "planning-transportation",
  },
  {
    essayno: "mm07",
    essayfn: "mm07-maps-of-trails-and-roads",
    essaytitle: "Maps of Trails and Roads of the Great West",
    author: "Dennis Reinhartz",
    essayslug: "maps-of-trails-and-roads",
  },
  {
    essayno: "mm08",
    essayfn: "mm08-european-maps-for-exploration",
    essaytitle: "European Maps for Exploration and Discovery",
    essaysubtitle: "",
    author: "David Buisseret",
    essayslug: "european-maps-for-exploration",
  },
  {
    essayno: "mm09",
    essayfn: "mm09-moving-pictures",
    essaytitle: "Moving Pictures",
    essaysubtitle: "Maps and Imagination in Eighteenth-Century Anglo-America",
    author: "Robert Paulett",
    essayslug: "moving-pictures",
  },
  {
    essayno: "mm12",
    essayfn: "mm12-waterways-cartography-part-1",
    essaytitle: "Waterways Cartography, Part I",
    essaysubtitle: "The Mapping of North America's Internal Navigation Systems",
    author: "Gerald A. Danzer",
    essayslug: "waterways-cartography-part-1",
  },
  {
    essayno: "mm13",
    essayfn: "mm13-waterways-cartography-part-2",
    essaytitle: "Waterways Cartography, Part II",
    essaysubtitle: "Landmarks and Exemplars in North America",
    author: "Gerald A. Danzer",
    essayslug: "waterways-cartography-part-2",
  },
  {
    essayno: "mm14",
    essayfn: "mm14-mapping-migration",
    essaytitle: "Mapping Migration and Settlement",
    essaysubtitle: "",
    author: "Ronald Grim",
    essayslug: "mapping-migration",
  },
  {
    essayno: "mm15",
    essayfn: "mm15-maps-movement-lit",
    essaytitle: "Maps, Movement, and American Literature",
    essaysubtitle: "",
    author: "Martin Brückner",
    essayslug: "maps-movement-lit",
  },
  {
    essayno: "mm18",
    essayfn: "mm18-navigating-the-coasts-and-seas",
    essaytitle: "Navigating the Coasts and Seas",
    essaysubtitle: "",
    author: "John Cloud",
    essayslug: "navigating-the-coasts-and-seas",
  },
  {
    essayno: "mm19",
    essayfn: "mm19-around-over-through",
    essaytitle: "Around, Over, and Through the Americas",
    essaysubtitle: "",
    author: "Jordana Dym",
    essayslug: "around-over-through",
  },
  {
    essayno: "mm20",
    essayfn: "mm20-lines-that-fracture",
    essaytitle: "Lines that Fracture and Fade",
    essaysubtitle: "Two Centuries of Travel through Georgia, 1775-1976",
    author: "Robert Paulett",
    essayslug: "lines-that-fracture",
  },
  {
    essayno: "mm25",
    essayfn: "mm25-mapping-communication",
    essaytitle: "Mapping Communication",
    essaysubtitle: "",
    author: "Robert MacDougall",
    essayslug: "mapping-communication",
  },
];
