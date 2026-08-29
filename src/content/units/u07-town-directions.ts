import type { Unit } from "../types";

export const unit: Unit = {
  id: "u07",
  title: "Town & directions",
  titleAf: "Dorp en rigtings",
  week: 7,
  cefr: "A1",
  description: "Ask for directions, follow them, and find your way around town.",
  vocab: [
    { id: "u07-v001", af: "dorp", en: "town", exampleAf: "Ons dorp het net een bank.", exampleEn: "Our town has only one bank.", pos: "n" },
    { id: "u07-v002", af: "stad", en: "city", exampleAf: "Kaapstad is 'n groot stad.", exampleEn: "Cape Town is a big city.", pos: "n", pron: "stut" },
    { id: "u07-v003", af: "straat", en: "street", exampleAf: "Ek woon in hierdie straat.", exampleEn: "I live on this street.", pos: "n", pron: "straht" },
    { id: "u07-v004", af: "pad", en: "road", altEn: ["way"], exampleAf: "Die pad na Durban is lank.", exampleEn: "The road to Durban is long.", pos: "n", pron: "put (rhymes with 'cut')" },
    { id: "u07-v005", af: "winkel", en: "shop", altEn: ["store"], exampleAf: "Die winkel is naby my huis.", exampleEn: "The shop is near my house.", pos: "n", pron: "VIN-kul" },
    { id: "u07-v006", af: "bank", en: "bank", altEn: ["bench"], exampleAf: "Die bank is oorkant die poskantoor.", exampleEn: "The bank is across from the post office.", pos: "n", pron: "bunk" },
    { id: "u07-v007", af: "poskantoor", en: "post office", exampleAf: "Waar is die poskantoor, asseblief?", exampleEn: "Where is the post office, please?", pos: "n", pron: "POS-kun-toor" },
    { id: "u07-v008", af: "hospitaal", en: "hospital", exampleAf: "Die hospitaal is in die middestad.", exampleEn: "The hospital is in the city centre.", pos: "n", pron: "hos-pi-TAHL" },
    { id: "u07-v009", af: "apteek", en: "pharmacy", altEn: ["chemist"], exampleAf: "Die apteek is naby die hospitaal.", exampleEn: "The pharmacy is near the hospital.", pos: "n", pron: "up-TEEK" },
    { id: "u07-v010", af: "kerk", en: "church", exampleAf: "Die kerk is om die hoek.", exampleEn: "The church is around the corner.", pos: "n" },
    { id: "u07-v011", af: "skool", en: "school", exampleAf: "Die kinders loop skool toe.", exampleEn: "The children walk to school.", pos: "n", pron: "skoh-ul" },
    { id: "u07-v012", af: "mark", en: "market", exampleAf: "Die mark is naby die stasie.", exampleEn: "The market is near the station.", pos: "n" },
    { id: "u07-v013", af: "park", en: "park", exampleAf: "Die kinders speel in die park.", exampleEn: "The children are playing in the park.", pos: "n" },
    { id: "u07-v014", af: "strand", en: "beach", exampleAf: "Ons loop strand toe.", exampleEn: "We are walking to the beach.", pos: "n", pron: "strunt" },
    { id: "u07-v015", af: "lughawe", en: "airport", exampleAf: "Die lughawe is ver van die stad af.", exampleEn: "The airport is far from the city.", pos: "n", pron: "LUGH-hah-vuh (g like Scottish 'loch')" },
    { id: "u07-v016", af: "stasie", en: "station", exampleAf: "Die bus stop by die stasie.", exampleEn: "The bus stops at the station.", pos: "n", pron: "STAH-see" },
    { id: "u07-v017", af: "plek", en: "place", exampleAf: "Hierdie plek is baie mooi.", exampleEn: "This place is very beautiful.", pos: "n" },
    { id: "u07-v018", af: "middestad", en: "city centre", altEn: ["downtown", "city center"], exampleAf: "Die bank is in die middestad.", exampleEn: "The bank is in the city centre.", pos: "n", pron: "MID-duh-stut" },
    { id: "u07-v019", af: "gebou", en: "building", exampleAf: "Daardie groot gebou is die hospitaal.", exampleEn: "That big building is the hospital.", pos: "n", pron: "ghuh-BOH" },
    { id: "u07-v020", af: "brug", en: "bridge", exampleAf: "Loop oor die brug na die park.", exampleEn: "Walk over the bridge to the park.", pos: "n", pron: "brugh (g like Scottish 'loch')" },
    { id: "u07-v021", af: "blok", en: "block", exampleAf: "Die apteek is twee blokke ver.", exampleEn: "The pharmacy is two blocks away.", pos: "n", clozeForm: "blokke" },
    { id: "u07-v022", af: "hoek", en: "corner", exampleAf: "Die winkel is op die hoek.", exampleEn: "The shop is on the corner.", pos: "n", pron: "hook" },
    { id: "u07-v023", af: "kant", en: "side", exampleAf: "Die skool is aan daardie kant.", exampleEn: "The school is on that side.", pos: "n" },
    { id: "u07-v024", af: "verkeerslig", en: "traffic light", altEn: ["robot"], altAf: ["robot"], exampleAf: "Draai regs by die verkeerslig.", exampleEn: "Turn right at the traffic light.", pos: "n", pron: "fer-KEERS-ligh" },
    { id: "u07-v025", af: "kaart", en: "map", altEn: ["card"], exampleAf: "Het jy 'n kaart van die dorp?", exampleEn: "Do you have a map of the town?", pos: "n", pron: "kahrt" },
    { id: "u07-v026", af: "adres", en: "address", exampleAf: "Wat is jou adres?", exampleEn: "What is your address?", pos: "n", pron: "ah-DRES" },
    { id: "u07-v027", af: "links", en: "left", exampleAf: "Draai links by die kerk.", exampleEn: "Turn left at the church.", pos: "adv" },
    { id: "u07-v028", af: "regs", en: "right", exampleAf: "Die bank is regs van die kerk.", exampleEn: "The bank is to the right of the church.", pos: "adv", pron: "reghs" },
    { id: "u07-v029", af: "reguit", en: "straight", altEn: ["straight ahead"], exampleAf: "Loop reguit tot by die park.", exampleEn: "Walk straight on until the park.", pos: "adv", pron: "REGH-ayt (g like Scottish 'loch')" },
    { id: "u07-v030", af: "naby", en: "near", altEn: ["close to", "close by", "nearby"], exampleAf: "Die winkel is naby my huis.", exampleEn: "The shop is near my house.", pos: "prep", pron: "NAH-bay" },
    { id: "u07-v031", af: "ver", en: "far", exampleAf: "Is die stasie ver van hier af?", exampleEn: "Is the station far from here?", pos: "adj", pron: "fer" },
    { id: "u07-v032", af: "oorkant", en: "across from", altEn: ["opposite", "on the other side of"], altAf: ["anderkant"], exampleAf: "Die apteek is oorkant die kerk.", exampleEn: "The pharmacy is across from the church.", pos: "prep", pron: "OOR-kunt" },
    { id: "u07-v033", af: "naaste", en: "nearest", altEn: ["closest"], exampleAf: "Waar is die naaste apteek?", exampleEn: "Where is the nearest pharmacy?", pos: "adj", pron: "NAHS-tuh" },
    { id: "u07-v034", af: "eerste", en: "first", exampleAf: "Neem die eerste straat links.", exampleEn: "Take the first street on the left.", pos: "num", pron: "EER-stuh" },
    { id: "u07-v035", af: "tweede", en: "second", exampleAf: "Draai regs by die tweede verkeerslig.", exampleEn: "Turn right at the second traffic light.", pos: "num", pron: "TVEE-duh" },
    { id: "u07-v036", af: "derde", en: "third", exampleAf: "Ons huis is die derde een links.", exampleEn: "Our house is the third one on the left.", pos: "num", pron: "DER-duh" },
    { id: "u07-v037", af: "loop", en: "to walk", altEn: ["walk", "go"], exampleAf: "Ek loop elke dag park toe.", exampleEn: "I walk to the park every day.", pos: "v", pron: "loh-up" },
    { id: "u07-v038", af: "draai", en: "to turn", altEn: ["turn"], exampleAf: "Draai links by die hoek.", exampleEn: "Turn left at the corner.", pos: "v", pron: "drahy (rhymes with 'dry')" },
    { id: "u07-v039", af: "stop", en: "to stop", altEn: ["stop"], exampleAf: "Die bus stop hier by die kerk.", exampleEn: "The bus stops here at the church.", pos: "v" },
    { id: "u07-v040", af: "soek", en: "to look for", altEn: ["look for", "search", "seek"], exampleAf: "Ek soek die poskantoor.", exampleEn: "I am looking for the post office.", pos: "v", pron: "sook" },
    { id: "u07-v041", af: "vind", en: "to find", altEn: ["find"], exampleAf: "Ek kan nie die adres vind nie.", exampleEn: "I can't find the address.", pos: "v", pron: "fint" },
    { id: "u07-v042", af: "wys", en: "to show", altEn: ["show", "point out"], exampleAf: "Kan jy my die pad wys?", exampleEn: "Can you show me the way?", pos: "v", pron: "vays" },
    { id: "u07-v043", af: "vra", en: "to ask", altEn: ["ask"], exampleAf: "Vra die vrou daar, sy weet.", exampleEn: "Ask the woman there, she knows.", pos: "v", pron: "frah" },
    { id: "u07-v044", af: "neem", en: "to take", altEn: ["take"], altAf: ["vat"], exampleAf: "Neem die tweede straat regs.", exampleEn: "Take the second street on the right.", pos: "v", pron: "nee-um" },
    { id: "u07-v045", af: "kar", en: "car", altAf: ["motor"], exampleAf: "My kar is oud, maar goed.", exampleEn: "My car is old but good.", pos: "n", pron: "kur" },
    { id: "u07-v046", af: "bus", en: "bus", exampleAf: "Die bus kom om tienuur.", exampleEn: "The bus comes at ten o'clock.", pos: "n" },
    { id: "u07-v047", af: "taxi", en: "taxi", exampleAf: "Ek gaan met 'n taxi lughawe toe.", exampleEn: "I am going to the airport by taxi.", pos: "n" },
    { id: "u07-v048", af: "polisie", en: "police", exampleAf: "Die polisie help die mense.", exampleEn: "The police help the people.", pos: "n", pron: "poh-LEE-see" },
    { id: "u07-v049", af: "verdwaal", en: "lost", exampleAf: "Ek is verdwaal in die stad.", exampleEn: "I am lost in the city.", pos: "adj", pron: "fer-DVAHL" },
    { id: "u07-v050", af: "biblioteek", en: "library", exampleAf: "Ek leer in die biblioteek.", exampleEn: "I study in the library.", pos: "n", pron: "bib-lee-oo-TEEK" },
    { id: "u07-v051", af: "verskoon my", en: "excuse me", altEn: ["pardon me"], exampleAf: "Verskoon my, waar is die stasie?", exampleEn: "Excuse me, where is the station?", pos: "phrase", pron: "fer-SKOH-un may" },
  ],
  phrases: [
    { id: "u07-p01", af: "Verskoon my, waar is die stasie?", en: "Excuse me, where is the station?" },
    { id: "u07-p02", af: "Draai links by die hoek.", en: "Turn left at the corner." },
    { id: "u07-p03", af: "Loop reguit tot by die kerk.", en: "Walk straight on until the church." },
    { id: "u07-p04", af: "Is dit ver van hier af?", en: "Is it far from here?" },
    { id: "u07-p05", af: "Ek is verdwaal.", en: "I am lost." },
    { id: "u07-p06", af: "Kan jy my die pad wys?", en: "Can you show me the way?" },
    { id: "u07-p07", af: "Die bank is oorkant die poskantoor.", en: "The bank is across from the post office." },
    { id: "u07-p08", af: "Neem die eerste straat links.", en: "Take the first street on the left." },
    { id: "u07-p09", af: "Dit is om die hoek.", en: "It is around the corner." },
    { id: "u07-p10", af: "Baie dankie vir jou hulp!", en: "Thank you very much for your help!" },
  ],
  grammar: {
    id: "u07-g01",
    title: "Bossy verbs: commands & asking the way",
    body: `Afrikaans commands are wonderfully simple: start with the **bare verb** and drop the subject — just like English.

- *Draai links by die hoek.* — Turn left at the corner.
- *Loop reguit tot by die kerk.* — Walk straight on to the church.
- *Stop hier, asseblief.* — Stop here, please.

Add *asseblief* to keep it friendly.

For **don't**, Afrikaans glues *moet* + *nie* together into ***moenie*** — and yes, the famous second *nie* still closes the sentence:

- *Moenie hier stop nie.* — Don't stop here.
- *Moenie in die straat speel nie.* — Don't play in the street.

To stop a stranger politely, open with ***Verskoon my*** (excuse me), then ask away:

- *Verskoon my, waar is die naaste apteek?* — Excuse me, where is the nearest pharmacy?
- *Verskoon my, hoe kom ek by die stasie?* — Excuse me, how do I get to the station?

And when they help you: *Baie dankie vir jou hulp!* — Thank you very much for your help!`,
    examples: [
      { af: "Draai regs by die verkeerslig.", en: "Turn right at the traffic light." },
      { af: "Moenie hier stop nie.", en: "Don't stop here." },
      { af: "Verskoon my, waar is die naaste bank?", en: "Excuse me, where is the nearest bank?" },
    ],
  },
  cloze: [
    { id: "u07-c01", textAf: "{{Draai}} links by die verkeerslig.", answer: "Draai", distractors: ["Loop", "Stop"], en: "Turn left at the traffic light." },
    { id: "u07-c02", textAf: "{{Moenie}} hier stop nie.", answer: "Moenie", distractors: ["Moet", "Nie"], en: "Don't stop here." },
    { id: "u07-c03", textAf: "Moenie in die straat speel {{nie}}.", answer: "nie", distractors: ["nee", "niks"], en: "Don't play in the street." },
    { id: "u07-c04", textAf: "{{Verskoon}} my, waar is die stasie?", answer: "Verskoon", distractors: ["Verstaan", "Vergeet"], en: "Excuse me, where is the station?" },
    { id: "u07-c05", textAf: "Verskoon my, {{waar}} is die naaste bank?", answer: "waar", distractors: ["wat", "wanneer"], en: "Excuse me, where is the nearest bank?" },
    { id: "u07-c06", textAf: "{{Vra}} die polisie, hulle sal weet.", answer: "Vra", distractors: ["Wys", "Soek"], en: "Ask the police, they will know." },
    { id: "u07-c07", textAf: "Die apteek is {{oorkant}} die kerk.", answer: "oorkant", distractors: ["ver", "reguit"], en: "The pharmacy is across from the church." },
    { id: "u07-c08", textAf: "Ek is {{verdwaal}} in die stad.", answer: "verdwaal", distractors: ["laat", "vroeg"], en: "I am lost in the city." },
  ],
  dialogue: {
    id: "u07-d01",
    title: "Waar is die poskantoor?",
    titleEn: "Where is the post office?",
    lines: [
      { speaker: "Zanele", af: "Verskoon my, Meneer. Ek soek die poskantoor.", en: "Excuse me, Sir. I am looking for the post office.", glosses: { verskoon: "excuse (me)" } },
      { speaker: "Willem", af: "Goeiemôre! Die poskantoor is nie ver nie. Loop reguit tot by die kerk.", en: "Good morning! The post office is not far. Walk straight on until the church." },
      { speaker: "Zanele", af: "Tot by die kerk — en dan?", en: "Until the church — and then?" },
      { speaker: "Willem", af: "Draai links by die kerk. Die poskantoor is reg oorkant die bank.", en: "Turn left at the church. The post office is right across from the bank." },
      { speaker: "Zanele", af: "Is dit naby genoeg om te loop?", en: "Is it close enough to walk?", glosses: { genoeg: "enough" } },
      { speaker: "Willem", af: "Ja, dit is net twee blokke ver. Maar moenie by die mark draai nie — dit is die verkeerde straat.", en: "Yes, it is only two blocks away. But don't turn at the market — that is the wrong street.", glosses: { blokke: "blocks", verkeerde: "wrong" } },
      { speaker: "Zanele", af: "Dankie! En waar kan ek 'n taxi kry?", en: "Thanks! And where can I get a taxi?" },
      { speaker: "Willem", af: "Daar is altyd taxi's by die stasie, oorkant die park.", en: "There are always taxis at the station, across from the park.", glosses: { "taxi's": "taxis" } },
      { speaker: "Zanele", af: "Baie dankie vir jou hulp!", en: "Thank you very much for your help!", glosses: { hulp: "help" } },
      { speaker: "Willem", af: "Plesier! En moenie verdwaal nie, hoor!", en: "My pleasure! And don't get lost, okay!", glosses: { plesier: "(it's a) pleasure" } },
    ],
    questions: [
      {
        q: "Where is the post office?",
        options: ["Across from the bank", "Next to the market", "At the station"],
        correct: 0,
      },
      {
        q: "Where can Zanele get a taxi?",
        options: ["At the church", "At the station", "At the post office"],
        correct: 1,
      },
    ],
  },
};
