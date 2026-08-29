import type { Unit } from "../types";

export const unit: Unit = {
  id: "u11",
  title: "Travel & transport",
  titleAf: "Reis en vervoer",
  week: 11,
  cefr: "A2",
  description: "Book, pack, fly, and find your way around South Africa.",
  vocab: [
    { id: "u11-v001", af: "reis", en: "to travel / a journey", altEn: ["travel", "journey", "trip"], exampleAf: "Ons reis in Desember deur die Karoo.", exampleEn: "In December we travel through the Karoo.", pos: "v", pron: "rays" },
    { id: "u11-v002", af: "vakansie", en: "holiday / vacation", altEn: ["holiday", "vacation"], exampleAf: "Ons vakansie begin Vrydag!", exampleEn: "Our holiday starts on Friday!", pos: "n", pron: "fah-KUN-see" },
    { id: "u11-v003", af: "kaartjie", en: "ticket", exampleAf: "Ek koop twee kaartjies vir die trein.", exampleEn: "I am buying two tickets for the train.", pos: "n", pron: "KAHR-kee", clozeForm: "kaartjies" },
    { id: "u11-v004", af: "paspoort", en: "passport", exampleAf: "Moenie jou paspoort vergeet nie!", exampleEn: "Don't forget your passport!", pos: "n", pron: "PUS-poo-urt" },
    { id: "u11-v005", af: "tas", en: "suitcase / bag", altEn: ["suitcase", "bag"], exampleAf: "My tas is te swaar.", exampleEn: "My suitcase is too heavy.", pos: "n", pron: "tus" },
    { id: "u11-v006", af: "rugsak", en: "backpack", exampleAf: "Die student dra 'n rugsak.", exampleEn: "The student carries a backpack.", pos: "n", pron: "RUGH-suk" },
    { id: "u11-v007", af: "hotel", en: "hotel", exampleAf: "Die hotel is reg langs die see.", exampleEn: "The hotel is right next to the sea.", pos: "n", pron: "hoh-TEL" },
    { id: "u11-v008", af: "gastehuis", en: "guesthouse", exampleAf: "Ons slaap in 'n gastehuis op die plaas.", exampleEn: "We are sleeping in a guesthouse on the farm.", pos: "n", pron: "GHUS-tuh-hays" },
    { id: "u11-v009", af: "toeris", en: "tourist", exampleAf: "Kaapstad is vol toeriste in Desember.", exampleEn: "Cape Town is full of tourists in December.", pos: "n", pron: "too-RIS", clozeForm: "toeriste" },
    { id: "u11-v010", af: "padkaart", en: "road map", exampleAf: "Die padkaart lê in die kar.", exampleEn: "The road map is lying in the car.", pos: "n", pron: "PUT-kahrt" },
    { id: "u11-v011", af: "grens", en: "border", exampleAf: "Ons ry oor die grens na Namibië.", exampleEn: "We are driving across the border to Namibia.", pos: "n", pron: "ghrens" },
    { id: "u11-v012", af: "vliegtuig", en: "aeroplane", altEn: ["airplane", "plane"], exampleAf: "Die vliegtuig vertrek om sewe-uur.", exampleEn: "The plane departs at seven o'clock.", pos: "n", pron: "FLEEGH-tayg" },
    { id: "u11-v013", af: "trein", en: "train", exampleAf: "Die trein na Pretoria is vol.", exampleEn: "The train to Pretoria is full.", pos: "n", pron: "trayn" },
    { id: "u11-v014", af: "boot", en: "boat", exampleAf: "Ons vang vis van die boot af.", exampleEn: "We catch fish from the boat.", pos: "n", pron: "boo-ut" },
    { id: "u11-v015", af: "fiets", en: "bicycle", exampleAf: "Ek ry elke oggend fiets.", exampleEn: "I ride my bicycle every morning.", pos: "n", pron: "feets" },
    { id: "u11-v016", af: "motorfiets", en: "motorcycle", exampleAf: "Sy motorfiets is baie vinnig.", exampleEn: "His motorcycle is very fast.", pos: "n", pron: "MOH-tor-feets" },
    { id: "u11-v017", af: "petrol", en: "petrol / fuel", altEn: ["petrol", "fuel", "gas"], exampleAf: "Ons moet petrol ingooi.", exampleEn: "We need to fill up with petrol.", pos: "n", pron: "PET-rol" },
    { id: "u11-v018", af: "bestuurder", en: "driver", exampleAf: "Die bestuurder ken die pad goed.", exampleEn: "The driver knows the road well.", pos: "n", pron: "buh-STEWR-der" },
    { id: "u11-v019", af: "passasier", en: "passenger", exampleAf: "Die bus het twintig passasiers.", exampleEn: "The bus has twenty passengers.", pos: "n", pron: "pus-sah-SEER", clozeForm: "passasiers" },
    { id: "u11-v020", af: "vlug", en: "flight", exampleAf: "Die vlug na Durban is vol.", exampleEn: "The flight to Durban is full.", pos: "n", pron: "flugh" },
    { id: "u11-v021", af: "vlieg", en: "to fly", altEn: ["fly"], exampleAf: "Ons vlieg Vrydag Kaapstad toe.", exampleEn: "We fly to Cape Town on Friday.", pos: "v", pron: "fleegh" },
    { id: "u11-v022", af: "vertrek", en: "to depart / leave", altEn: ["depart", "leave"], exampleAf: "Die trein vertrek oor tien minute.", exampleEn: "The train departs in ten minutes.", pos: "v", pron: "fer-TREK" },
    { id: "u11-v023", af: "aankom", en: "to arrive", altEn: ["arrive"], exampleAf: "Ons moet vroeg by die lughawe aankom.", exampleEn: "We must arrive at the airport early.", pos: "v", pron: "AHN-kom" },
    { id: "u11-v024", af: "pak", en: "to pack", altEn: ["pack"], exampleAf: "Ek moet nog my tas pak.", exampleEn: "I still have to pack my suitcase.", pos: "v", pron: "puk" },
    { id: "u11-v025", af: "bespreek", en: "to book / reserve", altEn: ["book", "reserve"], exampleAf: "Ons bespreek 'n tafel vir aandete.", exampleEn: "We are booking a table for dinner.", pos: "v", pron: "buh-SPREE-uk" },
    { id: "u11-v026", af: "huur", en: "to rent / hire", altEn: ["rent", "hire"], exampleAf: "Ons huur 'n kar by die lughawe.", exampleEn: "We are renting a car at the airport.", pos: "v", pron: "hewr" },
    { id: "u11-v027", af: "besoek", en: "to visit (a place)", altEn: ["visit"], exampleAf: "Ek wil die museum besoek.", exampleEn: "I want to visit the museum.", pos: "v", pron: "buh-SOOK" },
    { id: "u11-v028", af: "kuier", en: "to visit socially (SA favourite)", altEn: ["visit", "hang out"], exampleAf: "Kom kuier by ons oor die naweek!", exampleEn: "Come visit us over the weekend!", pos: "v", pron: "KAY-er" },
    { id: "u11-v029", af: "afstand", en: "distance", exampleAf: "Die afstand na Durban is ver.", exampleEn: "The distance to Durban is far.", pos: "n", pron: "UF-stunt" },
    { id: "u11-v030", af: "kilometer", en: "kilometre", altEn: ["kilometer"], exampleAf: "Dit is honderd kilometer na die dorp.", exampleEn: "It is a hundred kilometres to the town.", pos: "n", pron: "KEE-loh-mee-ter" },
    { id: "u11-v031", af: "rigting", en: "direction", exampleAf: "Ons ry in die verkeerde rigting!", exampleEn: "We are driving in the wrong direction!", pos: "n", pron: "RIGH-ting" },
    { id: "u11-v032", af: "buiteland", en: "abroad / foreign country", altEn: ["abroad", "overseas"], exampleAf: "My broer werk in die buiteland.", exampleEn: "My brother works abroad.", pos: "n", pron: "BAY-tuh-lunt" },
    { id: "u11-v033", af: "see", en: "sea", exampleAf: "Die kinders swem in die see.", exampleEn: "The children are swimming in the sea.", pos: "n", pron: "see-uh" },
    { id: "u11-v034", af: "verblyf", en: "accommodation", exampleAf: "Die verblyf is goedkoop in die winter.", exampleEn: "Accommodation is cheap in winter.", pos: "n", pron: "fer-BLAYF" },
    { id: "u11-v035", af: "oorsee", en: "overseas", exampleAf: "Hulle gaan volgende jaar oorsee.", exampleEn: "They are going overseas next year.", pos: "adv", pron: "OOR-see-uh" },
    { id: "u11-v036", af: "plaaslik", en: "local", exampleAf: "Ons eet by 'n plaaslike restaurant.", exampleEn: "We eat at a local restaurant.", pos: "adj", pron: "PLAHS-lik", clozeForm: "plaaslike" },
    { id: "u11-v037", af: "sitplek", en: "seat", exampleAf: "Ek wil 'n sitplek by die venster hê.", exampleEn: "I want a window seat.", pos: "n", pron: "SIT-plek" },
    { id: "u11-v038", af: "bagasie", en: "luggage", exampleAf: "Jou bagasie mag nie te swaar wees nie.", exampleEn: "Your luggage may not be too heavy.", pos: "n", pron: "bah-GHAH-see" },
    { id: "u11-v039", af: "vertraag", en: "delayed", exampleAf: "Die vlug is met 'n uur vertraag.", exampleEn: "The flight is delayed by an hour.", pos: "adj", pron: "fer-TRAHGH" },
    { id: "u11-v040", af: "betyds", en: "on time", exampleAf: "Die trein is vandag betyds.", exampleEn: "The train is on time today.", pos: "adv", pron: "buh-TAYTS" },
    { id: "u11-v041", af: "roete", en: "route", exampleAf: "Die roete deur die berge is mooi.", exampleEn: "The route through the mountains is beautiful.", pos: "n", pron: "ROO-tuh" },
    { id: "u11-v042", af: "internasionaal", en: "international", exampleAf: "Die internasionale lughawe is groot.", exampleEn: "The international airport is big.", pos: "adj", pron: "in-ter-nah-syoh-NAHL", clozeForm: "internasionale" },
    { id: "u11-v043", af: "wêreld", en: "world", exampleAf: "Ek wil die wêreld sien!", exampleEn: "I want to see the world!", pos: "n", pron: "VEH-relt" },
    { id: "u11-v044", af: "foto", en: "photo", exampleAf: "Ek neem 'n foto van die sonsondergang.", exampleEn: "I am taking a photo of the sunset.", pos: "n", pron: "FOH-toh" },
    { id: "u11-v045", af: "gids", en: "guide", exampleAf: "Die gids vertel ons van die geskiedenis.", exampleEn: "The guide tells us about the history.", pos: "n", pron: "ghits" },
    { id: "u11-v046", af: "reisplan", en: "itinerary / travel plan", altEn: ["itinerary", "travel plan"], exampleAf: "Ons reisplan is vol avontuur.", exampleEn: "Our itinerary is full of adventure.", pos: "n", pron: "RAYS-plun" },
  ],
  phrases: [
    { id: "u11-p01", af: "Ek is op vakansie.", en: "I am on holiday." },
    { id: "u11-p02", af: "Ons gaan see toe.", en: "We are going to the sea." },
    { id: "u11-p03", af: "Hoe ver is dit na Kaapstad?", en: "How far is it to Cape Town?" },
    { id: "u11-p04", af: "Een kaartjie na Durban, asseblief.", en: "One ticket to Durban, please." },
    { id: "u11-p05", af: "Hoe laat vertrek die bus?", en: "What time does the bus leave?" },
    { id: "u11-p06", af: "Ek wil 'n kar huur.", en: "I want to rent a car." },
    { id: "u11-p07", af: "Het julle 'n kamer beskikbaar?", en: "Do you have a room available?" },
    { id: "u11-p08", af: "Kan jy 'n foto van ons neem?", en: "Can you take a photo of us?" },
    { id: "u11-p09", af: "Veilig ry!", en: "Drive safely!" },
    { id: "u11-p10", af: "Lekker verlof!", en: "Enjoy your leave!" },
  ],
  grammar: {
    id: "u11-g01",
    title: "Going places: toe and na",
    body: `Afrikaans has a signature way of saying "to a place": put ***toe*** AFTER the place — no word for "to" in front:

- *Ek gaan **Kaapstad toe**.* — I'm going to Cape Town.
- *Ons ry **see toe**.* — We're driving to the sea.
- *huis toe* (home) · *werk toe* (to work) · *skool toe* (to school) · *bed toe* (to bed)

You can also use *na … toe* together — both are correct:

- *Ons ry **na** die strand **toe**.*

Arrivals and departures are separable verbs, so the pieces split:

- *aankom* → *Die trein **kom** om nege-uur **aan**.* — The train arrives at nine.
- *vertrek* stays whole: *Ons **vertrek** môre vroeg.* — We leave early tomorrow.

And "in X minutes/hours" uses ***oor***:

- *Die bus kom **oor tien minute**.* — The bus comes in ten minutes.
- *Ons land **oor twee ure** in Durban.* — We land in Durban in two hours.`,
    examples: [
      { af: "Ek gaan môre Kaapstad toe.", en: "I am going to Cape Town tomorrow." },
      { af: "Die vliegtuig kom om elfuur aan.", en: "The plane arrives at eleven o'clock." },
      { af: "Kom ons ry strand toe!", en: "Let's drive to the beach!" },
    ],
  },
  cloze: [
    { id: "u11-c01", textAf: "Ek gaan môre Kaapstad {{toe}}.", answer: "toe", distractors: ["na", "in"], en: "I am going to Cape Town tomorrow." },
    { id: "u11-c02", textAf: "Ons ry {{na}} die see toe.", answer: "na", distractors: ["van", "tot"], en: "We are driving to the sea." },
    { id: "u11-c03", textAf: "Die trein kom om nege-uur {{aan}}.", answer: "aan", distractors: ["af", "op"], en: "The train arrives at nine o'clock." },
    { id: "u11-c04", textAf: "Ons {{vertrek}} môre vroeg.", answer: "vertrek", distractors: ["aankom", "wag"], en: "We depart early tomorrow." },
    { id: "u11-c05", textAf: "Ek moet nog my tas {{pak}}.", answer: "pak", distractors: ["huur", "koop"], en: "I still have to pack my suitcase." },
    { id: "u11-c06", textAf: "Ons {{bespreek}} 'n kamer in die hotel.", answer: "bespreek", distractors: ["besoek", "betaal"], en: "We are booking a room in the hotel." },
    { id: "u11-c07", textAf: "Die vlug is {{vertraag}}.", answer: "vertraag", distractors: ["betyds", "gereed"], en: "The flight is delayed." },
    { id: "u11-c08", textAf: "Kom {{kuier}} by ons oor die naweek!", answer: "kuier", distractors: ["woon", "bly"], en: "Come visit us over the weekend!" },
  ],
  dialogue: {
    id: "u11-d01",
    title: "Vakansieplanne",
    titleEn: "Holiday plans",
    lines: [
      { speaker: "Nandi", af: "Ek is so opgewonde! Ons vakansie begin Vrydag.", en: "I am so excited! Our holiday starts on Friday.", glosses: { opgewonde: "excited" } },
      { speaker: "Johan", af: "Ja! Het jy al die kaartjies bespreek?", en: "Yes! Have you booked the tickets yet?" },
      { speaker: "Nandi", af: "Ja, ons vlieg Vrydagoggend Kaapstad toe.", en: "Yes, we fly to Cape Town on Friday morning.", glosses: { vrydagoggend: "Friday morning" } },
      { speaker: "Johan", af: "Hoe laat vertrek die vliegtuig?", en: "What time does the plane depart?" },
      { speaker: "Nandi", af: "Om sewe-uur. Ons moet vroeg by die lughawe aankom.", en: "At seven o'clock. We must arrive at the airport early." },
      { speaker: "Johan", af: "Ek moet nog my tas pak! Wat van die verblyf?", en: "I still have to pack my bag! What about the accommodation?" },
      { speaker: "Nandi", af: "Ek het 'n gastehuis naby die see bespreek.", en: "I booked a guesthouse near the sea." },
      { speaker: "Johan", af: "Perfek! Ek wil elke dag see toe gaan.", en: "Perfect! I want to go to the sea every day." },
      { speaker: "Nandi", af: "En ons kan by my tannie in Stellenbosch gaan kuier.", en: "And we can go visit my aunt in Stellenbosch." },
      { speaker: "Johan", af: "Lekker! Ek gaan baie foto's neem.", en: "Great! I am going to take lots of photos.", glosses: { "foto's": "photos" } },
    ],
    questions: [
      {
        q: "How are they travelling to Cape Town?",
        options: ["By train", "By plane", "By car"],
        correct: 1,
      },
      {
        q: "Where will they stay?",
        options: ["A hotel in the city", "A guesthouse near the sea", "With Nandi's aunt"],
        correct: 1,
      },
    ],
  },
};
