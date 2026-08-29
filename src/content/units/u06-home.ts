import type { Unit } from "../types";

export const unit: Unit = {
  id: "u06",
  title: "Home & living",
  titleAf: "Huis en tuiste",
  week: 6,
  cefr: "A1",
  description: "Describe your home, say where things are, and welcome guests.",
  vocab: [
    { id: "u06-v001", af: "kombuis", en: "kitchen", exampleAf: "My ma kook in die kombuis.", exampleEn: "My mom cooks in the kitchen.", pos: "n", pron: "kom-BAYS" },
    { id: "u06-v002", af: "badkamer", en: "bathroom", exampleAf: "Die badkamer is bo.", exampleEn: "The bathroom is upstairs.", pos: "n", pron: "BUT-kah-mer" },
    { id: "u06-v003", af: "slaapkamer", en: "bedroom", exampleAf: "My slaapkamer is klein maar gemaklik.", exampleEn: "My bedroom is small but comfortable.", pos: "n", pron: "SLAHP-kah-mer" },
    { id: "u06-v004", af: "sitkamer", en: "living room", exampleAf: "Ons kyk televisie in die sitkamer.", exampleEn: "We watch television in the living room.", pos: "n", pron: "SIT-kah-mer" },
    { id: "u06-v005", af: "eetkamer", en: "dining room", exampleAf: "Die gesin eet saam in die eetkamer.", exampleEn: "The family eats together in the dining room.", pos: "n", pron: "EE-ut-kah-mer" },
    { id: "u06-v006", af: "kamer", en: "room", exampleAf: "Die huis het vier kamers.", exampleEn: "The house has four rooms.", pos: "n", pron: "KAH-mer", clozeForm: "kamers" },
    { id: "u06-v007", af: "tuin", en: "garden", exampleAf: "Die kinders speel in die tuin.", exampleEn: "The children play in the garden.", pos: "n", pron: "tayn" },
    { id: "u06-v008", af: "motorhuis", en: "garage", exampleAf: "Die kar staan in die motorhuis.", exampleEn: "The car is in the garage.", pos: "n", pron: "MOH-tor-hays" },
    { id: "u06-v009", af: "stoep", en: "porch / stoep", altEn: ["porch", "veranda", "stoop"], exampleAf: "Ons drink koffie op die stoep.", exampleEn: "We drink coffee on the stoep.", pos: "n", pron: "stoop" },
    { id: "u06-v010", af: "dak", en: "roof", exampleAf: "Die kat sit op die dak.", exampleEn: "The cat is sitting on the roof.", pos: "n", pron: "duk" },
    { id: "u06-v011", af: "muur", en: "wall", exampleAf: "Die prent hang teen die muur.", exampleEn: "The picture hangs on the wall.", pos: "n", pron: "mewr" },
    { id: "u06-v012", af: "vloer", en: "floor", exampleAf: "Die hond slaap op die vloer.", exampleEn: "The dog sleeps on the floor.", pos: "n", pron: "floor" },
    { id: "u06-v013", af: "deur", en: "door", exampleAf: "Maak die deur toe, asseblief.", exampleEn: "Close the door, please.", pos: "n", pron: "dee-ur" },
    { id: "u06-v014", af: "venster", en: "window", exampleAf: "Maak die venster oop, dit is warm.", exampleEn: "Open the window, it is hot.", pos: "n", pron: "FEN-ster" },
    { id: "u06-v015", af: "sleutel", en: "key", exampleAf: "Waar is my sleutels?", exampleEn: "Where are my keys?", pos: "n", pron: "SLUR-tel (œ sound)", clozeForm: "sleutels" },
    { id: "u06-v016", af: "lig", en: "light", exampleAf: "Sit die lig aan, dit is donker.", exampleEn: "Turn on the light, it is dark.", pos: "n", pron: "ligh" },
    { id: "u06-v017", af: "stoel", en: "chair", exampleAf: "Daar is ses stoele om die tafel.", exampleEn: "There are six chairs around the table.", pos: "n", pron: "stool", clozeForm: "stoele" },
    { id: "u06-v018", af: "rusbank", en: "couch / sofa", altEn: ["couch", "sofa"], exampleAf: "Die rusbank is baie gemaklik.", exampleEn: "The couch is very comfortable.", pos: "n", pron: "RUS-bunk" },
    { id: "u06-v019", af: "kas", en: "cupboard / wardrobe", altEn: ["cupboard", "wardrobe", "closet"], exampleAf: "My klere hang in die kas.", exampleEn: "My clothes hang in the wardrobe.", pos: "n", pron: "kus" },
    { id: "u06-v020", af: "spieël", en: "mirror", exampleAf: "Ek kyk in die spieël.", exampleEn: "I look in the mirror.", pos: "n", pron: "SPEE-ul" },
    { id: "u06-v021", af: "lamp", en: "lamp", exampleAf: "Die lamp staan langs my bed.", exampleEn: "The lamp stands next to my bed.", pos: "n", pron: "lump" },
    { id: "u06-v022", af: "televisie", en: "television", altEn: ["TV"], altAf: ["TV"], exampleAf: "Die televisie is in die sitkamer.", exampleEn: "The television is in the living room.", pos: "n", pron: "teh-luh-FEE-see" },
    { id: "u06-v023", af: "yskas", en: "fridge", altEn: ["refrigerator"], exampleAf: "Daar is melk in die yskas.", exampleEn: "There is milk in the fridge.", pos: "n", pron: "AYS-kus" },
    { id: "u06-v024", af: "stoof", en: "stove", exampleAf: "Die sop is op die stoof.", exampleEn: "The soup is on the stove.", pos: "n", pron: "stoh-uf" },
    { id: "u06-v025", af: "oond", en: "oven", exampleAf: "Die brood is in die oond.", exampleEn: "The bread is in the oven.", pos: "n", pron: "oh-unt" },
    { id: "u06-v026", af: "ketel", en: "kettle", exampleAf: "Sit die ketel aan vir tee.", exampleEn: "Put the kettle on for tea.", pos: "n", pron: "KEE-tel" },
    { id: "u06-v027", af: "wasmasjien", en: "washing machine", exampleAf: "Die wasmasjien is in die kombuis.", exampleEn: "The washing machine is in the kitchen.", pos: "n", pron: "VUS-mah-sheen" },
    { id: "u06-v028", af: "skottelgoed", en: "dishes", exampleAf: "Ek was die skottelgoed na aandete.", exampleEn: "I wash the dishes after dinner.", pos: "n", pron: "SKOT-tel-ghoot" },
    { id: "u06-v029", af: "sit", en: "to sit", altEn: ["sit"], exampleAf: "Kom sit by ons!", exampleEn: "Come sit with us!", pos: "v", pron: "sit" },
    { id: "u06-v030", af: "staan", en: "to stand", altEn: ["stand"], exampleAf: "Die lamp staan in die hoek.", exampleEn: "The lamp stands in the corner.", pos: "v", pron: "stahn" },
    { id: "u06-v031", af: "lê", en: "to lie (down)", altEn: ["lie", "lie down"], exampleAf: "Die boek lê op die tafel.", exampleEn: "The book is lying on the table.", pos: "v", pron: "leh" },
    { id: "u06-v032", af: "hang", en: "to hang", altEn: ["hang"], exampleAf: "Die spieël hang in die badkamer.", exampleEn: "The mirror hangs in the bathroom.", pos: "v", pron: "hung" },
    { id: "u06-v033", af: "oopmaak", en: "to open", altEn: ["open"], exampleAf: "Kan jy die venster oopmaak?", exampleEn: "Can you open the window?", pos: "v", pron: "OH-up-mahk" },
    { id: "u06-v034", af: "toemaak", en: "to close", altEn: ["close", "shut"], exampleAf: "Moenie vergeet om die hek toe te maak nie.", exampleEn: "Don't forget to close the gate.", pos: "v", pron: "TOO-mahk", clozeForm: "toe te maak" },
    { id: "u06-v035", af: "skoonmaak", en: "to clean", altEn: ["clean"], exampleAf: "Ek moet my kamer skoonmaak.", exampleEn: "I must clean my room.", pos: "v", pron: "SKOH-un-mahk" },
    { id: "u06-v036", af: "regmaak", en: "to fix / repair", altEn: ["fix", "repair"], exampleAf: "Pa kan enigiets regmaak.", exampleEn: "Dad can fix anything.", pos: "v", pron: "REGH-mahk" },
    { id: "u06-v037", af: "bou", en: "to build", altEn: ["build"], exampleAf: "Hulle bou 'n nuwe huis.", exampleEn: "They are building a new house.", pos: "v", pron: "boh" },
    { id: "u06-v038", af: "verhuis", en: "to move (house)", altEn: ["move", "relocate"], exampleAf: "Ons verhuis volgende maand.", exampleEn: "We are moving next month.", pos: "v", pron: "fer-HAYS" },
    { id: "u06-v039", af: "skoon", en: "clean", exampleAf: "My kamer is nou skoon.", exampleEn: "My room is clean now.", pos: "adj", pron: "skoh-un" },
    { id: "u06-v040", af: "vuil", en: "dirty", exampleAf: "Die vloer is vuil.", exampleEn: "The floor is dirty.", pos: "adj", pron: "fayl" },
    { id: "u06-v041", af: "gemaklik", en: "comfortable", exampleAf: "Hierdie stoel is baie gemaklik.", exampleEn: "This chair is very comfortable.", pos: "adj", pron: "ghuh-MUK-lik" },
    { id: "u06-v042", af: "leeg", en: "empty", exampleAf: "Die yskas is leeg!", exampleEn: "The fridge is empty!", pos: "adj", pron: "lee-ugh" },
    { id: "u06-v043", af: "vol", en: "full", exampleAf: "Die kas is vol klere.", exampleEn: "The wardrobe is full of clothes.", pos: "adj", pron: "fawl" },
    { id: "u06-v044", af: "donker", en: "dark", exampleAf: "Die kamer is donker snags.", exampleEn: "The room is dark at night.", pos: "adj", pron: "DON-ker" },
    { id: "u06-v045", af: "stukkend", en: "broken", exampleAf: "Die ketel is stukkend.", exampleEn: "The kettle is broken.", pos: "adj", pron: "STUH-kent" },
    { id: "u06-v046", af: "veilig", en: "safe", exampleAf: "Ons buurt is veilig.", exampleEn: "Our neighbourhood is safe.", pos: "adj", pron: "FAY-ligh" },
    { id: "u06-v047", af: "langs", en: "next to", altEn: ["beside", "next to"], exampleAf: "Die badkamer is langs die slaapkamer.", exampleEn: "The bathroom is next to the bedroom.", pos: "prep", pron: "lungs" },
    { id: "u06-v048", af: "agter", en: "behind", exampleAf: "Die tuin is agter die huis.", exampleEn: "The garden is behind the house.", pos: "prep", pron: "UGH-ter" },
    { id: "u06-v049", af: "binne", en: "inside", exampleAf: "Kom binne, dit is koud buite!", exampleEn: "Come inside, it is cold outside!", pos: "adv", pron: "BIN-nuh" },
    { id: "u06-v050", af: "buite", en: "outside", exampleAf: "Die honde slaap buite.", exampleEn: "The dogs sleep outside.", pos: "adv", pron: "BAY-tuh" },
    { id: "u06-v051", af: "bo", en: "above / upstairs", altEn: ["above", "upstairs", "on top"], exampleAf: "My kamer is bo.", exampleEn: "My room is upstairs.", pos: "adv", pron: "boo-uh" },
    { id: "u06-v052", af: "woonstel", en: "flat / apartment", altEn: ["flat", "apartment"], exampleAf: "Sy woon in 'n woonstel in die stad.", exampleEn: "She lives in a flat in the city.", pos: "n", pron: "VOH-un-stel" },
    { id: "u06-v053", af: "plaas", en: "farm", exampleAf: "My oupa woon op 'n plaas.", exampleEn: "My grandpa lives on a farm.", pos: "n", pron: "plahs" },
    { id: "u06-v054", af: "swembad", en: "swimming pool", exampleAf: "Daar is 'n swembad in die tuin.", exampleEn: "There is a swimming pool in the garden.", pos: "n", pron: "SWEM-but" },
    { id: "u06-v055", af: "vriendelik", en: "friendly", exampleAf: "Ons bure is baie vriendelik.", exampleEn: "Our neighbours are very friendly.", pos: "adj", pron: "FREEN-duh-lik" },
  ],
  phrases: [
    { id: "u06-p01", af: "Welkom by my huis!", en: "Welcome to my home!" },
    { id: "u06-p02", af: "Kom binne!", en: "Come inside!" },
    { id: "u06-p03", af: "Maak jouself tuis.", en: "Make yourself at home." },
    { id: "u06-p04", af: "Waar is die badkamer?", en: "Where is the bathroom?" },
    { id: "u06-p05", af: "Daar is koffie in die kombuis.", en: "There is coffee in the kitchen." },
    { id: "u06-p06", af: "Sit die lig aan, asseblief.", en: "Turn on the light, please." },
    { id: "u06-p07", af: "Ek woon in 'n woonstel.", en: "I live in a flat." },
    { id: "u06-p08", af: "Die yskas is leeg.", en: "The fridge is empty." },
    { id: "u06-p09", af: "Kom ons sit op die stoep.", en: "Let's sit on the stoep." },
    { id: "u06-p10", af: "Jou huis is pragtig!", en: "Your house is beautiful!" },
  ],
  grammar: {
    id: "u06-g01",
    title: "Daar is… and where things are",
    body: `To say something exists, Afrikaans uses ***daar is*** — exactly like "there is / there are" (no singular/plural fuss):

- ***Daar is** melk in die yskas.* — There is milk in the fridge.
- ***Daar is** ses stoele om die tafel.* — There are six chairs around the table.

Add place words to pin things down:

- *in* (in) · *op* (on) · *onder* (under) · *langs* (next to)
- *agter* (behind) · *voor* (in front of) · *tussen* (between)
- *binne* (inside) · *buite* (outside) · *bo* (above)

Now the charming part: Afrikaans prefers a **posture verb** over plain "is". Things *sit*, *stand*, *lie* or *hang* depending on their shape:

- *Die boek **lê** op die tafel.* — The book *lies* on the table.
- *Die lamp **staan** in die hoek.* — The lamp *stands* in the corner.
- *Die prent **hang** teen die muur.* — The picture *hangs* on the wall.
- *Die kat **sit** op die dak.* — The cat *sits* on the roof.

Use them and you'll instantly sound more Afrikaans.`,
    examples: [
      { af: "Daar is 'n swembad agter die huis.", en: "There is a swimming pool behind the house." },
      { af: "Jou sleutels lê op die tafel.", en: "Your keys are lying on the table." },
      { af: "Die wasmasjien staan langs die stoof.", en: "The washing machine stands next to the stove." },
    ],
  },
  cloze: [
    { id: "u06-c01", textAf: "Daar {{is}} 'n swembad in die tuin.", answer: "is", distractors: ["het", "staan"], en: "There is a swimming pool in the garden." },
    { id: "u06-c02", textAf: "Die kat lê {{onder}} die tafel.", answer: "onder", distractors: ["bo", "agter"], en: "The cat is lying under the table." },
    { id: "u06-c03", textAf: "Die yskas staan {{in}} die kombuis.", answer: "in", distractors: ["op", "onder"], en: "The fridge stands in the kitchen." },
    { id: "u06-c04", textAf: "Die prent hang {{teen}} die muur.", answer: "teen", distractors: ["op", "in"], en: "The picture hangs on the wall." },
    { id: "u06-c05", textAf: "Die boek {{lê}} op die tafel.", answer: "lê", distractors: ["staan", "hang"], en: "The book is lying on the table." },
    { id: "u06-c06", textAf: "Maak die deur {{toe}}, asseblief.", answer: "toe", distractors: ["oop", "aan"], en: "Close the door, please." },
    { id: "u06-c07", textAf: "My kamer is {{skoon}}.", answer: "skoon", distractors: ["vuil", "vol"], en: "My room is clean." },
    { id: "u06-c08", textAf: "Ons {{verhuis}} volgende maand.", answer: "verhuis", distractors: ["woon", "bou"], en: "We are moving next month." },
  ],
  dialogue: {
    id: "u06-d01",
    title: "Die nuwe woonstel",
    titleEn: "The new flat",
    lines: [
      { speaker: "Elsa", af: "Welkom by my nuwe woonstel! Kom binne.", en: "Welcome to my new flat! Come inside.", glosses: { nuwe: "new" } },
      { speaker: "Willem", af: "Dankie! Sjoe, die sitkamer is groot en lig.", en: "Thanks! Wow, the living room is big and bright.", glosses: { lig: "light / bright" } },
      { speaker: "Elsa", af: "Ja, en daar is 'n klein balkon agter die kombuis.", en: "Yes, and there is a small balcony behind the kitchen.", glosses: { balkon: "balcony" } },
      { speaker: "Willem", af: "Waar is die badkamer?", en: "Where is the bathroom?" },
      { speaker: "Elsa", af: "Langs die slaapkamer. Die deur is oop.", en: "Next to the bedroom. The door is open.", glosses: { oop: "open" } },
      { speaker: "Willem", af: "Die rusbank lyk baie gemaklik.", en: "The couch looks very comfortable." },
      { speaker: "Elsa", af: "Dit is! Ek sit saans daar en kyk televisie.", en: "It is! I sit there in the evenings and watch television." },
      { speaker: "Willem", af: "Is daar 'n tuin?", en: "Is there a garden?" },
      { speaker: "Elsa", af: "Nee, maar daar is 'n swembad buite. Die bure is ook baie vriendelik.", en: "No, but there is a pool outside. The neighbours are also very friendly." },
      { speaker: "Willem", af: "Wonderlik! Jy moet gou 'n huisparty hou!", en: "Wonderful! You must throw a house party soon!", glosses: { wonderlik: "wonderful", huisparty: "house party", hou: "hold / throw" } },
    ],
    questions: [
      {
        q: "Where is the bathroom?",
        options: ["Behind the kitchen", "Next to the bedroom", "Upstairs"],
        correct: 1,
      },
      {
        q: "What is outside?",
        options: ["A garden", "A swimming pool", "A garage"],
        correct: 1,
      },
    ],
  },
};
