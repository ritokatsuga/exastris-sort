dataSetVersion = "2024-02-28"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by places",
    key: "place",
    tooltip: "Check this to restrict to characters from certain places.",
    checked: false,
    sub: [
      { name: "Doran", key: "doran" },
      { name: "NOUS WAVE", key: "nous" },
      { name: "Shadarra", key: "shadarra" },
      { name: "Allindo", key: "allindo" },
    ]
  },
  {
    name: "Exclude males",
    key: "male",
    tooltip: "Check this to exclude males.",
    checked: false
  },
  {
    name: "Exclude females",
    key: "female",
    tooltip: "Check this to exclude females.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Vi^3",
    img: "vi.png",
    opts: {
      place: ['doran'],
      female: true
    }
  },
  {
    name: "Yan",
    img: "Yan.png",
    opts: {
      place: ['nous'],
      male: true
    }
  },
  {
    name: "Manganese",
    img: "mn.png",
    opts: {
      place: ['allindo']
    }
  },
  {
    name: "Astero",
    img: "mybini.png",
    opts: {
      place: ['shadarra'],
      female: true
    }
  },
  {
    name: "Deterrent",
    img: "dete.png",
    opts: {
      place: ['shadarra'],
      male: true
    }
  },
  {
    name: "ZERO^2",
    img: "rei.png",
    opts: {
      place: ['allindo'],
      female: true
    }
  },
  {
    name: "Lam",
    img: "lam.png",
    opts: {
      place: ['doran'],
      male: true
    }
  },
]
