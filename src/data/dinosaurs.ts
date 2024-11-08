export interface Dinosaur {
  id: string;
  card: {
    headerImage: string;
    backgroundImage: string;
    buttonText: string;
  };
  detailPage: {
    title: string;
    generalIframeContent: string;
    fossilIframeContent: string;
    generalInfo: string;
    dietInfo: string;
    discoveryInfo: string;
    sound: string;
  };
}

export const dinosaurs: Dinosaur[] = [
  {
    id: "plesiosauria",
    card: {
      headerImage: "https://images.unsplash.com/photo-1519880772-8b2feec8eaf7",
      backgroundImage: "https://images.unsplash.com/photo-1519880772-8b2feec8eaf7",
      buttonText: "Plesiosauria"
    },
    detailPage: {
      title: "Plesiosauria",
      generalIframeContent: "<div class='w-full h-full flex items-center justify-center'>General Plesiosauria Content</div>",
      fossilIframeContent: "<div class='w-full h-full flex items-center justify-center'>Fossil Content</div>",
      generalInfo: "The Plesiosauria were marine reptiles that lived during the Mesozoic era.",
      dietInfo: "Plesiosaurs were carnivorous, feeding mainly on fish and squid.",
      discoveryInfo: "The first complete plesiosaur skeleton was found by Mary Anning in 1823.",
      sound: "/sounds/plesiosaur.mp3"
    }
  },
  {
    id: "archosauria",
    card: {
      headerImage: "https://images.unsplash.com/photo-1534507035278-5d69c01fe80f",
      backgroundImage: "https://images.unsplash.com/photo-1534507035278-5d69c01fe80f",
      buttonText: "Archosauria"
    },
    detailPage: {
      title: "Archosauria",
      generalIframeContent: "<div class='w-full h-full flex items-center justify-center'>General Archosauria Content</div>",
      fossilIframeContent: "<div class='w-full h-full flex items-center justify-center'>Fossil Content</div>",
      generalInfo: "Archosaurs are a group that includes crocodiles, dinosaurs, and birds.",
      dietInfo: "Archosaurs had diverse diets, from pure carnivores to pure herbivores.",
      discoveryInfo: "Archosaur fossils have been found on every continent.",
      sound: "/sounds/archosaur.mp3"
    }
  },
  {
    id: "pterosauria",
    card: {
      headerImage: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd",
      backgroundImage: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd",
      buttonText: "Pterosauria"
    },
    detailPage: {
      title: "Pterosauria",
      generalIframeContent: "<div class='w-full h-full flex items-center justify-center'>General Pterosauria Content</div>",
      fossilIframeContent: "<div class='w-full h-full flex items-center justify-center'>Fossil Content</div>",
      generalInfo: "Pterosaurs were flying reptiles that existed during the age of dinosaurs.",
      dietInfo: "Most pterosaurs were carnivorous, feeding on fish and small animals.",
      discoveryInfo: "The first pterosaur fossil was discovered in the late 18th century.",
      sound: "/sounds/pterosaur.mp3"
    }
  }
];