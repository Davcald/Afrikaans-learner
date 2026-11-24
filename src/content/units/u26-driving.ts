import type { Unit } from "../types";

export const unit: Unit = {
  id: "u26",
  title: "Cars & driving",
  titleAf: "Motors en bestuur",
  week: 22,
  cefr: "B1",
  description: "On the road, at the petrol station and at the mechanic — plus the prepositions that stick to verbs.",
  vocab: [
    { id: "u26-v001", af: "motor", en: "car", altEn: ["motor car", "motorcar"], exampleAf: "My motor is tien jaar oud.", exampleEn: "My car is ten years old.", pos: "n", pron: "MOH-ter" },
    { id: "u26-v002", af: "bestuur", en: "to drive", altEn: ["drive"], exampleAf: "Ek leer nou om te bestuur.", exampleEn: "I am learning to drive now.", pos: "v", pron: "buh-STEWR" },
    { id: "u26-v003", af: "band", en: "tyre", altEn: ["tire"], exampleAf: "Die kar het 'n nuwe band nodig.", exampleEn: "The car needs a new tyre.", pos: "n", pron: "bunt" },
    { id: "u26-v004", af: "wiel", en: "wheel", exampleAf: "Die fiets se wiel is stukkend.", exampleEn: "The bicycle's wheel is broken.", pos: "n", pron: "veel" },
    { id: "u26-v005", af: "rem", en: "brake", altEn: ["brakes", "to brake"], exampleAf: "Die motor se remme is nuut.", exampleEn: "The car's brakes are new.", pos: "n", pron: "rem", clozeForm: "remme" },
    { id: "u26-v006", af: "stuurwiel", en: "steering wheel", exampleAf: "Hou twee hande op die stuurwiel.", exampleEn: "Keep two hands on the steering wheel.", pos: "n", pron: "STEWR-veel" },
    { id: "u26-v007", af: "enjin", en: "engine", exampleAf: "Die enjin maak 'n snaakse geluid.", exampleEn: "The engine is making a funny noise.", pos: "n", pron: "EN-jin" },
    { id: "u26-v008", af: "voorruit", en: "windscreen", altEn: ["windshield"], exampleAf: "'n Klip het die voorruit gebreek.", exampleEn: "A stone broke the windscreen.", pos: "n", pron: "FOOR-rayt" },
    { id: "u26-v009", af: "kattebak", en: "boot (of a car)", altEn: ["boot", "trunk"], exampleAf: "Sit die tasse in die kattebak.", exampleEn: "Put the bags in the boot.", pos: "n", pron: "KUT-tuh-buk" },
    { id: "u26-v010", af: "enjinkap", en: "bonnet (of a car)", altEn: ["bonnet", "hood"], exampleAf: "Maak asseblief die enjinkap oop.", exampleEn: "Please open the bonnet.", pos: "n", pron: "EN-jin-kup" },
    { id: "u26-v011", af: "veiligheidsgordel", en: "seat belt", altEn: ["seatbelt", "safety belt"], exampleAf: "Maak jou veiligheidsgordel vas.", exampleEn: "Fasten your seat belt.", pos: "n", pron: "FAY-ligh-hayts-ghor-del" },
    { id: "u26-v012", af: "toeter", en: "hooter / horn", altEn: ["hooter", "horn"], exampleAf: "Moenie so op die toeter druk nie!", exampleEn: "Don't press on the hooter like that!", pos: "n", pron: "TOO-ter" },
    { id: "u26-v013", af: "koplig", en: "headlight", altEn: ["headlamp"], exampleAf: "Skakel jou kopligte aan; dit word donker.", exampleEn: "Switch your headlights on; it's getting dark.", pos: "n", pron: "KOP-ligh", clozeForm: "kopligte" },
    { id: "u26-v014", af: "ruitveër", en: "windscreen wiper", altEn: ["wiper", "windshield wiper"], exampleAf: "Dit reën; skakel die ruitveërs aan.", exampleEn: "It's raining; switch the wipers on.", pos: "n", pron: "RAYT-fee-er", clozeForm: "ruitveërs" },
    { id: "u26-v015", af: "rat", en: "gear", exampleAf: "Hierdie motor het ses ratte.", exampleEn: "This car has six gears.", pos: "n", pron: "rut", clozeForm: "ratte" },
    { id: "u26-v016", af: "brandstof", en: "fuel", exampleAf: "Brandstof word elke maand duurder.", exampleEn: "Fuel gets more expensive every month.", pos: "n", pron: "BRUNT-stof" },
    { id: "u26-v017", af: "diesel", en: "diesel", exampleAf: "My bakkie ry met diesel.", exampleEn: "My bakkie runs on diesel.", pos: "n", pron: "DEE-sel" },
    { id: "u26-v018", af: "koppelaar", en: "clutch", exampleAf: "Trap die koppelaar voordat jy die rat verander.", exampleEn: "Press the clutch before you change gear.", pos: "n", pron: "KOP-puh-lahr" },
    { id: "u26-v019", af: "vulstasie", en: "petrol station", altEn: ["filling station", "gas station", "garage"], altAf: ["petrolstasie"], exampleAf: "Die naaste vulstasie is tien kilometer ver.", exampleEn: "The nearest petrol station is ten kilometres away.", pos: "n", pron: "FUL-stah-see" },
    { id: "u26-v020", af: "tenk", en: "tank", exampleAf: "Die tenk is amper leeg.", exampleEn: "The tank is almost empty.", pos: "n", pron: "tenk" },
    { id: "u26-v021", af: "verkeer", en: "traffic", exampleAf: "Die verkeer is soggens baie swaar.", exampleEn: "The traffic is very heavy in the mornings.", pos: "n", pron: "fer-KEER" },
    { id: "u26-v022", af: "snelweg", en: "highway / freeway", altEn: ["highway", "freeway", "motorway"], exampleAf: "Ons ry met die snelweg Pretoria toe.", exampleEn: "We take the highway to Pretoria.", pos: "n", pron: "SNEL-vegh" },
    { id: "u26-v023", af: "spoed", en: "speed", exampleAf: "Hy ry altyd teen 'n hoë spoed.", exampleEn: "He always drives at a high speed.", pos: "n", pron: "spoot" },
    { id: "u26-v024", af: "spoedgrens", en: "speed limit", exampleAf: "Die spoedgrens in die dorp is sestig.", exampleEn: "The speed limit in town is sixty.", pos: "n", pron: "SPOOT-ghrens" },
    { id: "u26-v025", af: "kruising", en: "intersection", altEn: ["crossing", "junction", "crossroads"], exampleAf: "Draai links by die volgende kruising.", exampleEn: "Turn left at the next intersection.", pos: "n", pron: "KRAY-sing" },
    { id: "u26-v026", af: "padteken", en: "road sign", exampleAf: "Daardie padteken sê jy moet stop.", exampleEn: "That road sign says you must stop.", pos: "n", pron: "PUT-tee-ken" },
    { id: "u26-v027", af: "parkeer", en: "to park", altEn: ["park"], exampleAf: "Jy mag nie hier parkeer nie.", exampleEn: "You may not park here.", pos: "v", pron: "par-KEER" },
    { id: "u26-v028", af: "parkeerplek", en: "parking space", altEn: ["parking", "parking spot", "parking place"], exampleAf: "Ek kan nêrens parkeerplek kry nie.", exampleEn: "I can't find parking anywhere.", pos: "n", pron: "par-KEER-plek" },
    { id: "u26-v029", af: "rybewys", en: "driver's licence", altEn: ["driving licence", "driver's license", "drivers licence"], exampleAf: "Ek het my rybewys op agtien gekry.", exampleEn: "I got my driver's licence at eighteen.", pos: "n", pron: "RAY-buh-vays" },
    { id: "u26-v030", af: "lisensie", en: "licence", altEn: ["license"], exampleAf: "Die motor se lisensie moet jaarliks hernu word.", exampleEn: "The car's licence must be renewed annually.", pos: "n", pron: "lee-SEN-see" },
    { id: "u26-v031", af: "boete", en: "fine", altEn: ["penalty", "ticket"], exampleAf: "Sy het gister 'n groot boete gekry.", exampleEn: "She got a big fine yesterday.", pos: "n", pron: "BOO-tuh" },
    { id: "u26-v032", af: "tolhek", en: "toll gate", altEn: ["tollgate"], exampleAf: "Ons moet by die tolhek betaal.", exampleEn: "We have to pay at the toll gate.", pos: "n", pron: "TOL-hek" },
    { id: "u26-v033", af: "padwerke", en: "roadworks", altEn: ["road works", "roadwork"], exampleAf: "Daar is padwerke op die snelweg.", exampleEn: "There are roadworks on the highway.", pos: "n", pron: "PUT-ver-kuh" },
    { id: "u26-v034", af: "domkrag", en: "jack", altEn: ["car jack"], exampleAf: "Die domkrag is in die kattebak.", exampleEn: "The jack is in the boot.", pos: "n", pron: "DOM-krugh" },
    { id: "u26-v035", af: "noodwiel", en: "spare wheel", altEn: ["spare tyre", "spare"], altAf: ["spaarwiel"], exampleAf: "Het jou motor 'n noodwiel?", exampleEn: "Does your car have a spare wheel?", pos: "n", pron: "NOOT-veel" },
    { id: "u26-v036", af: "insleep", en: "to tow (in)", altEn: ["tow", "to tow", "tow in"], exampleAf: "Hulle moes my motor insleep.", exampleEn: "They had to tow my car in.", pos: "v", pron: "IN-slee-up" },
    { id: "u26-v037", af: "onklaar", en: "out of order / broken down", altEn: ["out of order", "broken down", "broken"], exampleAf: "Ons motor het langs die pad onklaar geraak.", exampleEn: "Our car broke down next to the road.", pos: "adj", pron: "ON-klahr" },
    { id: "u26-v038", af: "diens", en: "service", exampleAf: "Die motor moet vir 'n diens ingaan.", exampleEn: "The car has to go in for a service.", pos: "n", pron: "deens" },
    { id: "u26-v039", af: "werktuigkundige", en: "mechanic", exampleAf: "Die werktuigkundige sê die enjin is reg.", exampleEn: "The mechanic says the engine is fine.", pos: "n", pron: "VERK-tayg-kun-di-ghuh" },
    { id: "u26-v040", af: "werkswinkel", en: "workshop / garage", altEn: ["workshop", "garage"], exampleAf: "My motor is vandag by die werkswinkel.", exampleEn: "My car is at the workshop today.", pos: "n", pron: "VERKS-vin-kel" },
    { id: "u26-v041", af: "volmaak", en: "to fill up", altEn: ["fill up", "fill"], exampleAf: "Ek moet eers die tenk volmaak.", exampleEn: "I have to fill up the tank first.", pos: "v", pron: "FOL-mahk" },
    { id: "u26-v042", af: "verbysteek", en: "to overtake", altEn: ["overtake", "pass", "to pass"], exampleAf: "Jy mag nie hier verbysteek nie.", exampleEn: "You may not overtake here.", pos: "v", pron: "fer-BAY-stee-uk" },
    { id: "u26-v043", af: "botsing", en: "collision / crash", altEn: ["collision", "crash"], exampleAf: "Daar was 'n botsing op die snelweg.", exampleEn: "There was a collision on the highway.", pos: "n", pron: "BOT-sing" },
    { id: "u26-v044", af: "bots", en: "to collide / to crash", altEn: ["collide", "crash", "bump"], exampleAf: "Die twee karre bots by die robot.", exampleEn: "The two cars collide at the traffic light.", pos: "v", pron: "bots" },
    { id: "u26-v045", af: "skade", en: "damage", exampleAf: "Die motor het baie skade.", exampleEn: "The car has a lot of damage.", pos: "n", pron: "SKAH-duh" },
    { id: "u26-v046", af: "slaggat", en: "pothole", exampleAf: "Pasop vir die slaggat in die pad!", exampleEn: "Watch out for the pothole in the road!", pos: "n", pron: "SLUGH-ghut" },
    { id: "u26-v047", af: "spitsverkeer", en: "rush-hour traffic", altEn: ["rush hour traffic", "peak traffic", "rush hour"], exampleAf: "Ek sit elke oggend in die spitsverkeer.", exampleEn: "I sit in rush-hour traffic every morning.", pos: "n", pron: "SPITS-fer-keer" },
    { id: "u26-v048", af: "voetganger", en: "pedestrian", exampleAf: "Stop altyd vir 'n voetganger.", exampleEn: "Always stop for a pedestrian.", pos: "n", pron: "FOOT-ghung-er" },
    { id: "u26-v049", af: "gevaarlik", en: "dangerous", exampleAf: "Dit is gevaarlik om so vinnig te ry.", exampleEn: "It is dangerous to drive so fast.", pos: "adj", pron: "ghuh-FAHR-lik" },
    { id: "u26-v050", af: "versigtig", en: "careful / carefully", altEn: ["careful", "carefully", "cautious"], exampleAf: "Ry versigtig; die pad is nat.", exampleEn: "Drive carefully; the road is wet.", pos: "adj", pron: "fer-SIGH-tigh" },
  ],
  phrases: [
    { id: "u26-p01", af: "Maak asseblief vol.", en: "Fill it up, please." },
    { id: "u26-p02", af: "Kan jy asseblief die olie en water nagaan?", en: "Could you please check the oil and water?" },
    { id: "u26-p03", af: "My motor wil nie vat nie.", en: "My car won't start." },
    { id: "u26-p04", af: "Ek het 'n pap wiel.", en: "I have a flat tyre." },
    { id: "u26-p05", af: "Waar kan ek hier parkeer?", en: "Where can I park here?" },
    { id: "u26-p06", af: "Hoe ver is die naaste vulstasie?", en: "How far is the nearest petrol station?" },
    { id: "u26-p07", af: "Ry versigtig!", en: "Drive safely!" },
    { id: "u26-p08", af: "Kan ek saam met jou ry?", en: "Can I get a lift with you?" },
    { id: "u26-p09", af: "Ek het in die verkeer vasgesit.", en: "I was stuck in traffic." },
    { id: "u26-p10", af: "Hoe vinnig mag ek hier ry?", en: "How fast may I drive here?" },
  ],
  grammar: {
    id: "u26-g01",
    title: "Wag vir, kyk na, trots op — fixed prepositions",
    body: `Many verbs and adjectives travel with their own little preposition — and it is often **not** the one English uses. Learn them as a pair, like one word.

Verbs:

- ***wag vir*** — wait for: *Ek **wag vir** die bus.*
- ***kyk na*** — look at: ***Kyk na** die padteken!*
- ***luister na*** — listen to: *Ons **luister na** die radio.*
- ***dink aan*** — think of: *Ek **dink aan** jou.*
- ***soek na*** — look for: *Hy **soek na** sy sleutels.*
- ***hou van*** — like: *Sy **hou van** vinnige motors.*
- ***sorg vir*** — take care of: *Hy **sorg** goed **vir** sy motor.*
- ***lag vir*** — laugh at: *Almal **lag vir** sy grappe.*

Adjectives:

- ***bang vir*** — afraid of: *Ek is **bang vir** die snelweg.*
- ***trots op*** — proud of: *Sy is **trots op** haar rybewys.*
- ***kwaad vir*** — angry with: *Is jy **kwaad vir** my?*
- ***lief vir*** — fond of: *Hy is **lief vir** ou motors.*
- ***moeg vir*** — tired of: *Ek is **moeg vir** die verkeer.*
- ***tevrede met*** — satisfied with: *Ek is **tevrede met** die diens.*

Asking "what … at / for / of?" about a **thing**: glue **waar-** onto the preposition. And for "it", glue on **daar-**:

- ***Waarna** kyk jy?* — What are you looking at? → *Ek kyk **daarna**.*
- ***Waaraan** dink jy?* — What are you thinking of? → *Ek dink **daaraan**.*
- Two prepositions change shape: **vir → voor** and **met → mee**: ***Waarvoor** wag jy?* (What are you waiting for?), ***Waarmee** kan ek help?* (What can I help with?)

For **people**, keep the preposition and a normal pronoun: ***Vir wie** wag jy?* — *Ek wag **vir hom**.*`,
    examples: [
      { af: "Ek wag al 'n uur vir die werktuigkundige.", en: "I have been waiting an hour for the mechanic." },
      { af: "Hy is baie trots op sy nuwe motor.", en: "He is very proud of his new car." },
      { af: "Waarna luister jy?", en: "What are you listening to?" },
      { af: "My ma is bang vir die spitsverkeer.", en: "My mom is afraid of the rush-hour traffic." },
    ],
  },
  cloze: [
    { id: "u26-c01", textAf: "Ons wag al 'n uur {{vir}} die werktuigkundige.", answer: "vir", distractors: ["aan", "na"], en: "We have been waiting an hour for the mechanic." },
    { id: "u26-c02", textAf: "Kyk {{na}} die padteken — jy moet stop!", answer: "na", distractors: ["aan", "op"], en: "Look at the road sign — you must stop!" },
    { id: "u26-c03", textAf: "Ek dink dikwels {{aan}} ons reis deur die Karoo.", answer: "aan", distractors: ["na", "vir"], en: "I often think of our trip through the Karoo." },
    { id: "u26-c04", textAf: "My ma is bang {{vir}} die snelweg.", answer: "vir", distractors: ["van", "op"], en: "My mom is afraid of the highway." },
    { id: "u26-c05", textAf: "Hy is baie trots {{op}} sy nuwe motor.", answer: "op", distractors: ["vir", "van"], en: "He is very proud of his new car." },
    { id: "u26-c06", textAf: "{{Waarna}} luister jy in die motor?", answer: "Waarna", distractors: ["Waaraan", "Waarvoor"], en: "What do you listen to in the car?" },
    { id: "u26-c07", textAf: "In die verkeer luister ek {{na}} die radio.", answer: "na", distractors: ["aan", "vir"], en: "In traffic I listen to the radio." },
    { id: "u26-c08", textAf: "Ons motor het langs die pad {{onklaar}} geraak.", answer: "onklaar", distractors: ["gevaarlik", "versigtig"], en: "Our car broke down next to the road." },
  ],
  dialogue: {
    id: "u26-d01",
    title: "Onklaar langs die pad",
    titleEn: "Broken down next to the road",
    lines: [
      { speaker: "Elsa", af: "Kobus, luister na daardie geluid! Wat is dit?", en: "Kobus, listen to that noise! What is it?" },
      { speaker: "Kobus", af: "Ek weet nie. Dit klink asof dit van die wiel af kom.", en: "I don't know. It sounds as if it's coming from the wheel.", glosses: { klink: "sounds", asof: "as if" } },
      { speaker: "Elsa", af: "Ry stadiger! Ons is op die snelweg en dit is gevaarlik.", en: "Drive slower! We're on the highway and it is dangerous.", glosses: { stadiger: "slower" } },
      { speaker: "Kobus", af: "Ek stop sommer hier langs die pad. Ai, kyk — die band is pap.", en: "I'll just stop here next to the road. Oh dear, look — the tyre is flat.", glosses: { pap: "flat" } },
      { speaker: "Elsa", af: "Dit was seker daardie slaggat naby die tolhek.", en: "It was probably that pothole near the toll gate." },
      { speaker: "Kobus", af: "Geen probleem nie. Die noodwiel en die domkrag is in die kattebak.", en: "No problem. The spare wheel and the jack are in the boot." },
      { speaker: "Elsa", af: "Kan jy self 'n wiel omruil?", en: "Can you change a wheel yourself?", glosses: { omruil: "to change / swap" } },
      { speaker: "Kobus", af: "Natuurlik! Ek is baie trots op my werk met motors.", en: "Of course! I am very proud of my work with cars.", glosses: { motors: "cars" } },
      { speaker: "Elsa", af: "Waarvoor wag jy dan?", en: "What are you waiting for, then?", glosses: { waarvoor: "for what" } },
      { speaker: "Kobus", af: "Ek soek na die domkrag… dit is nie hier nie. Ek het dit seker by die huis vergeet.", en: "I'm looking for the jack… it isn't here. I must have left it at home." },
      { speaker: "Elsa", af: "Ag nee, Kobus! Nou moet ons vir die insleepdiens wag.", en: "Oh no, Kobus! Now we have to wait for the towing service.", glosses: { ag: "oh", insleepdiens: "towing service" } },
      { speaker: "Kobus", af: "Jammer. Ek bel hulle dadelik. Moenie vir my kwaad wees nie.", en: "Sorry. I'll call them right away. Don't be angry with me." },
      { speaker: "Elsa", af: "Ek is nie kwaad nie. Ek dink net aan die koffie by die volgende vulstasie.", en: "I'm not angry. I'm just thinking of the coffee at the next petrol station." },
      { speaker: "Kobus", af: "Ek belowe ek koop vir jou koffie sodra ons daar is.", en: "I promise I'll buy you coffee as soon as we're there.", glosses: { sodra: "as soon as" } },
    ],
    questions: [
      {
        q: "What is wrong with the car?",
        options: ["It has a flat tyre", "It has no petrol", "The engine is too hot"],
        correct: 0,
      },
      {
        q: "Why can't Kobus change the wheel?",
        options: ["It is raining", "He left the jack at home", "There is no spare wheel"],
        correct: 1,
      },
      {
        q: "What is Elsa thinking of?",
        options: ["The fine they will get", "Her work", "Coffee at the next petrol station"],
        correct: 2,
      },
    ],
  },
};
