export interface Dinosaur {
  id: string;
  title: string;
  generalIframeContent: string;
  fossilIframeContent: string;
  generalInfo: string;
  dietInfo: string;
  discoveryInfo: string;
  sound: string;
}

export interface Category {
  id: string;
  card: {
    headerImage: string;
    backgroundImage: string;
    buttonText: string;
    bgColorButton: string;
  };
  dinosaurs: Dinosaur[];
}

export const categories: Category[] = [
  {
    id: "marine",
    card: {
      headerImage: "https://i.ibb.co/DbxMv30/Pleso-Circle.png",
      backgroundImage: "https://i.ibb.co/cc7rnQW/IMG-AGUA.png",
      buttonText: "Marinos",
      bgColorButton: "#7B9392"
    },
    dinosaurs: [
      {
        id: "plesiosauria",
        title: "Plesiosauria",
        generalIframeContent: "<spline-viewer url=\"https://prod.spline.design/9XcaOcrfdqGlVkTx/scene.splinecode\"></spline-viewer>",
        fossilIframeContent: "<div class='w-full h-full flex items-center justify-center'>Fossil Content</div>",
        generalInfo: "The Plesiosauria were marine reptiles that lived during the Mesozoic era.",
        dietInfo: "Plesiosaurs were carnivorous, feeding mainly on fish and squid.",
        discoveryInfo: "The first complete plesiosaur skeleton was found by Mary Anning in 1823.",
        sound: "/sounds/plesiosaur.mp3"
      },
      {
        id: "mosasaurus",
        title: "Mosasaurus",
        generalIframeContent: "<spline-viewer url=\"https://prod.spline.design/aXAIVPLo5H1AK4Hy/scene.splinecode\"></spline-viewer>",
        fossilIframeContent: "<div class='w-full h-full flex items-center justify-center'>Fossil Content</div>",
        generalInfo: "Mosasaurus was a genus of large aquatic carnivorous lizards.",
        dietInfo: "Mosasaurus was a powerful predator that fed on fish, sharks, and other marine reptiles.",
        discoveryInfo: "First discovered in a chalk quarry near Maastricht, Netherlands.",
        sound: "/sounds/mosasaurus.mp3"
      }
    ]
  },
  {
    id: "flying",
    card: {
      headerImage: "https://i.ibb.co/DzqDpft/Ptera-Circle.png",
      backgroundImage: "https://i.ibb.co/T0NkqV9/IMG-CIELO.png",
      buttonText: "Voladores",
      bgColorButton: "#B78C38"
    },
    dinosaurs: [
      {
        id: "pteranodon",
        title: "Pteranodon",
        generalIframeContent: "<spline-viewer url=\"https://prod.spline.design/ZYL0hUbGuopg1ozW/scene.splinecode\"></spline-viewer>",
        fossilIframeContent: "<div class='w-full h-full flex items-center justify-center'>Fossil Content</div>",
        generalInfo: "Pteranodon was one of the largest flying reptiles.",
        dietInfo: "They were primarily fish-eaters, catching their prey at the ocean surface.",
        discoveryInfo: "First discovered in western Kansas, USA in 1876.",
        sound: "/sounds/pteranodon.mp3"
      }
      , {
        id: "pterodactyl",
        title: "Pterodactyl",
        generalIframeContent: "<spline-viewer url=\"https://prod.spline.design/EbFp2pqB7-3OEwFe/scene.splinecode\"></spline-viewer>",
        fossilIframeContent: "<div class='w-full h-full flex items-center justify-center'>Fossil Content</div>",
        generalInfo: "Pterodactyl was one of the largest flying reptiles.",
        dietInfo: "They were primarily fish-eaters, catching their prey at the ocean surface.",
        discoveryInfo: "First discovered in western Kansas, USA in 1876.",
        sound: "/sounds/pteranodon.mp3"
      }
    ]
  },
  {
    id: "terrestrial",
    card: {
      headerImage: "https://i.ibb.co/64X3yxf/Rex-Circle.png",
      backgroundImage: "https://i.ibb.co/4mMRRkm/IMG-TIERRA.png",
      buttonText: "Terrestres",
      bgColorButton: "#79562E"
    },
    dinosaurs: [
      {
        id: "tyrannosaurus",
        title: "Tyrannosaurus Rex",
        generalIframeContent: "<spline-viewer url=\"https://prod.spline.design/hAx-PsEkZpzrKSVB/scene.splinecode\"></spline-viewer>",
        fossilIframeContent: "<div class='w-full h-full flex items-center justify-center'>Fossil Content</div>",
        generalInfo: "T-Rex was one of the largest land carnivores of all time.",
        dietInfo: "Pure carnivore, feeding on other dinosaurs.",
        discoveryInfo: "First discovered in Montana, USA in 1902.",
        sound: "/sounds/trex.mp3"
      },
      {
        id: "triceratops",
        title: "Triceratops",
        generalIframeContent: "<spline-viewer url=\"https://prod.spline.design/aEH7HcbMLkr-gW2v/scene.splinecode\"></spline-viewer>",
        fossilIframeContent: "<div class='w-full h-full flex items-center justify-center'>Fossil Content</div>",
        generalInfo: "Triceratops was one of the largest land vegetarian of all time.",
        dietInfo: "Pure plants, feeding on other dinosaurs.",
        discoveryInfo: "First discovered in Montana, USA in 1902.",
        sound: "/sounds/trex.mp3"
      }
    ]
  }
];