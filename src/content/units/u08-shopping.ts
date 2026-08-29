import type { Unit } from "../types";

export const unit: Unit = {
  id: "u08",
  title: "Shopping & money",
  titleAf: "Inkopies en geld",
  week: 8,
  cefr: "A1",
  description: "Buy clothes and gifts, talk prices, and pay like a local.",
  vocab: [
    { id: "u08-v001", af: "geld", en: "money", exampleAf: "Ek het nie baie geld nie.", exampleEn: "I don't have much money.", pos: "n", pron: "ghelt" },
    { id: "u08-v002", af: "rand", en: "rand", exampleAf: "Die hemp kos twee honderd rand.", exampleEn: "The shirt costs two hundred rand.", pos: "n", pron: "runt" },
    { id: "u08-v003", af: "sent", en: "cent", exampleAf: "Een rand het honderd sent.", exampleEn: "One rand has a hundred cents.", pos: "n" },
    { id: "u08-v004", af: "prys", en: "price", exampleAf: "Dit is 'n goeie prys.", exampleEn: "That is a good price.", pos: "n", pron: "prays" },
    { id: "u08-v005", af: "goedkoop", en: "cheap", altEn: ["inexpensive"], exampleAf: "Die skoene is baie goedkoop.", exampleEn: "The shoes are very cheap.", pos: "adj", pron: "GHOOT-koh-up" },
    { id: "u08-v006", af: "duur", en: "expensive", exampleAf: "Daardie winkel is te duur.", exampleEn: "That shop is too expensive.", pos: "adj", pron: "dewr" },
    { id: "u08-v007", af: "gratis", en: "free (no cost)", altEn: ["free", "free of charge"], exampleAf: "Die kaart van die dorp is gratis.", exampleEn: "The map of the town is free.", pos: "adj", pron: "GHRAH-tis" },
    { id: "u08-v008", af: "kleingeld", en: "change (money)", altEn: ["small change", "change"], exampleAf: "Hier is jou kleingeld, Mevrou.", exampleEn: "Here is your change, madam.", pos: "n", pron: "KLAYN-ghelt" },
    { id: "u08-v009", af: "kontant", en: "cash", exampleAf: "Ek betaal met kontant.", exampleEn: "I pay with cash.", pos: "n", pron: "kon-TUNT" },
    { id: "u08-v010", af: "hoeveel", en: "how much", altEn: ["how much", "how many"], exampleAf: "Hoeveel kos hierdie skoene?", exampleEn: "How much do these shoes cost?", pos: "adv", pron: "hoo-FEE-ul" },
    { id: "u08-v011", af: "supermark", en: "supermarket", exampleAf: "Ek koop alles by die supermark.", exampleEn: "I buy everything at the supermarket.", pos: "n", pron: "SOO-per-mark" },
    { id: "u08-v012", af: "slaghuis", en: "butchery", altEn: ["butcher's", "butcher shop"], exampleAf: "Die slaghuis is oorkant die bakkery.", exampleEn: "The butchery is across from the bakery.", pos: "n", pron: "SLUGH-hays (g like Scottish 'loch')" },
    { id: "u08-v013", af: "bakkery", en: "bakery", exampleAf: "Die bakkery maak om sewe-uur oop.", exampleEn: "The bakery opens at seven o'clock.", pos: "n", pron: "buk-kuh-RAY" },
    { id: "u08-v014", af: "winkelsentrum", en: "shopping centre", altEn: ["mall", "shopping center"], exampleAf: "Die winkelsentrum is Sondag oop.", exampleEn: "The shopping centre is open on Sunday.", pos: "n", pron: "VIN-kul-SEN-trum" },
    { id: "u08-v015", af: "kassier", en: "cashier", exampleAf: "Die kassier is baie vriendelik.", exampleEn: "The cashier is very friendly.", pos: "n", pron: "kus-SEER" },
    { id: "u08-v016", af: "klant", en: "customer", exampleAf: "Die klant betaal by die kassier.", exampleEn: "The customer pays at the cashier.", pos: "n", pron: "klunt" },
    { id: "u08-v017", af: "klere", en: "clothes", altEn: ["clothing"], exampleAf: "Sy dra altyd mooi klere.", exampleEn: "She always wears beautiful clothes.", pos: "n", pron: "KLEE-ruh" },
    { id: "u08-v018", af: "hemp", en: "shirt", exampleAf: "Hierdie hemp is te groot vir my.", exampleEn: "This shirt is too big for me.", pos: "n" },
    { id: "u08-v019", af: "broek", en: "trousers", altEn: ["pants"], exampleAf: "Hierdie broek is te lank vir my.", exampleEn: "These trousers are too long for me.", pos: "n", pron: "brook" },
    { id: "u08-v020", af: "rok", en: "dress", exampleAf: "Sy koop 'n nuwe rok.", exampleEn: "She is buying a new dress.", pos: "n" },
    { id: "u08-v021", af: "skoene", en: "shoes", altAf: ["skoen"], exampleAf: "Ek soek 'n paar nuwe skoene.", exampleEn: "I am looking for a pair of new shoes.", pos: "n", pron: "SKOO-nuh" },
    { id: "u08-v022", af: "hoed", en: "hat", exampleAf: "Die man dra 'n mooi hoed.", exampleEn: "The man is wearing a nice hat.", pos: "n", pron: "hoot" },
    { id: "u08-v023", af: "sak", en: "bag", altEn: ["pocket"], exampleAf: "Die sak is baie swaar.", exampleEn: "The bag is very heavy.", pos: "n" },
    { id: "u08-v024", af: "baadjie", en: "jacket", exampleAf: "My baadjie is oud, maar sterk.", exampleEn: "My jacket is old but strong.", pos: "n", pron: "BAH-djee" },
    { id: "u08-v025", af: "trui", en: "jersey", altEn: ["sweater", "jumper", "jersey"], exampleAf: "My ouma maak vir my 'n trui.", exampleEn: "My grandma is making me a jersey.", pos: "n", pron: "tray (with rounded lips)" },
    { id: "u08-v026", af: "geskenk", en: "gift", altEn: ["present"], exampleAf: "Hierdie geskenk is vir my ma.", exampleEn: "This gift is for my mom.", pos: "n", pron: "ghuh-SKENK" },
    { id: "u08-v027", af: "paar", en: "pair", altEn: ["a few", "couple"], exampleAf: "Ek koop 'n paar skoene.", exampleEn: "I am buying a pair of shoes.", pos: "n", pron: "pahr" },
    { id: "u08-v028", af: "paskamer", en: "fitting room", exampleAf: "Waar is die paskamer, asseblief?", exampleEn: "Where is the fitting room, please?", pos: "n", pron: "PUS-kah-mer" },
    { id: "u08-v029", af: "trollie", en: "trolley", altEn: ["shopping cart", "cart"], exampleAf: "Die supermark het groot trollies.", exampleEn: "The supermarket has big trolleys.", pos: "n", pron: "TROL-lee", clozeForm: "trollies" },
    { id: "u08-v030", af: "uitverkoping", en: "sale", altEn: ["clearance sale"], exampleAf: "Die winkel het vandag 'n groot uitverkoping.", exampleEn: "The shop has a big sale today.", pos: "n", pron: "AYT-fer-koh-ping" },
    { id: "u08-v031", af: "afslag", en: "discount", exampleAf: "Kry ek afslag as ek twee koop?", exampleEn: "Do I get a discount if I buy two?", pos: "n", pron: "UF-slugh (g like Scottish 'loch')" },
    { id: "u08-v032", af: "koop", en: "to buy", altEn: ["buy"], exampleAf: "Ek koop 'n geskenk vir my vriend.", exampleEn: "I am buying a gift for my friend.", pos: "v", pron: "koh-up" },
    { id: "u08-v033", af: "verkoop", en: "to sell", altEn: ["sell"], exampleAf: "Die winkel verkoop mooi klere.", exampleEn: "The shop sells beautiful clothes.", pos: "v", pron: "fer-KOH-up" },
    { id: "u08-v034", af: "betaal", en: "to pay", altEn: ["pay"], exampleAf: "Ek betaal by die kassier.", exampleEn: "I pay at the cashier.", pos: "v", pron: "buh-TAHL" },
    { id: "u08-v035", af: "kos", en: "to cost", altEn: ["cost"], exampleAf: "Hoeveel kos die rok?", exampleEn: "How much does the dress cost?", pos: "v" },
    { id: "u08-v036", af: "pas", en: "to fit / try on", altEn: ["fit", "try on"], exampleAf: "Die hemp pas my goed.", exampleEn: "The shirt fits me well.", pos: "v", pron: "pus" },
    { id: "u08-v037", af: "dra", en: "to wear / carry", altEn: ["wear", "carry"], exampleAf: "Hy dra 'n hoed en 'n baadjie.", exampleEn: "He is wearing a hat and a jacket.", pos: "v", pron: "drah" },
    { id: "u08-v038", af: "kies", en: "to choose", altEn: ["choose", "pick"], exampleAf: "Kies 'n geskenk vir jou suster.", exampleEn: "Choose a gift for your sister.", pos: "v", pron: "kees" },
    { id: "u08-v039", af: "wissel", en: "to change (money)", altEn: ["exchange", "change"], exampleAf: "Kan jy honderd rand vir my wissel?", exampleEn: "Can you change a hundred rand for me?", pos: "v", pron: "VIS-sul" },
    { id: "u08-v040", af: "spaar", en: "to save (money)", altEn: ["save"], exampleAf: "Ek spaar my geld vir 'n kar.", exampleEn: "I am saving my money for a car.", pos: "v", pron: "spahr" },
    { id: "u08-v041", af: "spandeer", en: "to spend", altEn: ["spend"], exampleAf: "Moenie al jou geld spandeer nie.", exampleEn: "Don't spend all your money.", pos: "v", pron: "spun-DEER" },
    { id: "u08-v042", af: "sluit", en: "to close", altEn: ["close", "lock"], exampleAf: "Die winkel sluit om vyfuur.", exampleEn: "The shop closes at five o'clock.", pos: "v", pron: "slayt" },
    { id: "u08-v043", af: "oop", en: "open", exampleAf: "Die mark is Saterdag oop.", exampleEn: "The market is open on Saturday.", pos: "adj", pron: "oh-up" },
    { id: "u08-v044", af: "grootte", en: "size", exampleAf: "Watter grootte dra jy?", exampleEn: "What size do you wear?", pos: "n", pron: "GHROH-tuh" },
    { id: "u08-v045", af: "te", en: "too (excessively)", altEn: ["too"], exampleAf: "Hierdie skoene is te klein.", exampleEn: "These shoes are too small.", pos: "adv", pron: "tuh" },
    { id: "u08-v046", af: "pragtig", en: "gorgeous", altEn: ["beautiful", "lovely", "stunning"], exampleAf: "Sy dra 'n pragtige rok.", exampleEn: "She is wearing a gorgeous dress.", pos: "adj", pron: "PRUGH-tigh (g like Scottish 'loch')", clozeForm: "pragtige" },
    { id: "u08-v047", af: "sterk", en: "strong", exampleAf: "Die sak is goedkoop, maar sterk.", exampleEn: "The bag is cheap but strong.", pos: "adj" },
    { id: "u08-v048", af: "swaar", en: "heavy", exampleAf: "Die trollie is baie swaar.", exampleEn: "The trolley is very heavy.", pos: "adj", pron: "svahr" },
    { id: "u08-v049", af: "nuut", en: "new", exampleAf: "Ek koop 'n nuwe hemp.", exampleEn: "I am buying a new shirt.", pos: "adj", pron: "newt", clozeForm: "nuwe" },
    { id: "u08-v050", af: "perfek", en: "perfect", exampleAf: "Die rok pas perfek!", exampleEn: "The dress fits perfectly!", pos: "adj", pron: "per-FEK" },
  ],
  phrases: [
    { id: "u08-p01", af: "Hoeveel kos dit?", en: "How much does it cost?" },
    { id: "u08-p02", af: "Dit is te duur.", en: "That is too expensive." },
    { id: "u08-p03", af: "Het jy iets goedkoper?", en: "Do you have something cheaper?" },
    { id: "u08-p04", af: "Kan ek dit pas?", en: "May I try it on?" },
    { id: "u08-p05", af: "Dit pas perfek.", en: "It fits perfectly." },
    { id: "u08-p06", af: "Ek vat dit.", en: "I'll take it." },
    { id: "u08-p07", af: "Betaal jy kontant of met 'n kaart?", en: "Are you paying cash or card?" },
    { id: "u08-p08", af: "Hier is jou kleingeld.", en: "Here is your change." },
    { id: "u08-p09", af: "Wanneer maak die winkel oop?", en: "When does the shop open?" },
    { id: "u08-p10", af: "Ek soek 'n geskenk vir my vrou.", en: "I am looking for a gift for my wife." },
  ],
  grammar: {
    id: "u08-g01",
    title: "Hierdie, daardie & the little -e",
    body: `Pointing at things is easy: ***hierdie*** (this / these) and ***daardie*** (that / those) never change, singular or plural.

- *Hierdie rok is pragtig.* — This dress is gorgeous.
- *Daardie skoene is te duur.* — Those shoes are too expensive.

Now the fun part. After *is*, an adjective stays plain: *Die winkel is **groot**.* But **in front of a noun**, many adjectives take **-e**.

Keep it simple with two groups:

- **Short, common adjectives stay bare** before the noun: *'n **groot** winkel*, *die **klein** sak*, *'n **mooi** hemp*, *die **rooi** rok* (*rooi* = red).
- **Longer adjectives, like those ending in -ig, add -e**: *pragtig → 'n **pragtige** rok*, *gelukkig → 'n **gelukkige** klant*.

A few favourites change their whole shape — memorise these three:

- *goed → **goeie***: *'n goeie prys* — a good price
- *nuut → **nuwe***: *'n nuwe broek* — new trousers
- *oud → **ou***: *'n ou hoed* — an old hat`,
    examples: [
      { af: "Hierdie hemp is te groot.", en: "This shirt is too big." },
      { af: "Ek koop daardie pragtige rok.", en: "I am buying that gorgeous dress." },
      { af: "Dit is 'n goeie prys vir 'n nuwe baadjie.", en: "That is a good price for a new jacket." },
    ],
  },
  cloze: [
    { id: "u08-c01", textAf: "{{Hierdie}} rok is te duur.", answer: "Hierdie", distractors: ["Daardie", "Dit"], en: "This dress is too expensive." },
    { id: "u08-c02", textAf: "Ek koop 'n {{nuwe}} hemp.", answer: "nuwe", distractors: ["nuut", "nuwes"], en: "I am buying a new shirt." },
    { id: "u08-c03", textAf: "Dit is 'n {{goeie}} prys.", answer: "goeie", distractors: ["goed", "goede"], en: "That is a good price." },
    { id: "u08-c04", textAf: "Sy dra 'n {{pragtige}} rok.", answer: "pragtige", distractors: ["pragtig", "pragtiges"], en: "She is wearing a gorgeous dress." },
    { id: "u08-c05", textAf: "Ek dra my {{ou}} skoene vandag.", answer: "ou", distractors: ["oud", "oue"], en: "I am wearing my old shoes today." },
    { id: "u08-c06", textAf: "Die winkel is {{groot}}.", answer: "groot", distractors: ["grote", "grootte"], en: "The shop is big." },
    { id: "u08-c07", textAf: "{{Hoeveel}} kos hierdie hoed?", answer: "Hoeveel", distractors: ["Hoekom", "Wanneer"], en: "How much does this hat cost?" },
    { id: "u08-c08", textAf: "Ek {{betaal}} met kontant.", answer: "betaal", distractors: ["koop", "spaar"], en: "I pay with cash." },
  ],
  dialogue: {
    id: "u08-d01",
    title: "Die perfekte geskenk",
    titleEn: "The perfect gift",
    lines: [
      { speaker: "Elsa", af: "Goeiemiddag, Meneer! Kan ek help?", en: "Good afternoon, Sir! Can I help?" },
      { speaker: "Kobus", af: "Ja, asseblief. Ek wil 'n geskenk vir my vrou koop.", en: "Yes, please. I want to buy a gift for my wife." },
      { speaker: "Elsa", af: "Wat van hierdie pragtige rok? Dit is nuut, en die kleur is mooi.", en: "What about this gorgeous dress? It is new, and the colour is lovely.", glosses: { pragtige: "gorgeous", kleur: "colour" } },
      { speaker: "Kobus", af: "Dit is mooi, maar dit lyk te klein. My vrou dra grootte agt-en-dertig.", en: "It is lovely, but it looks too small. My wife wears size thirty-eight.", glosses: { "agt-en-dertig": "thirty-eight" } },
      { speaker: "Elsa", af: "Hier is dieselfde rok in 'n groter grootte. En dit is nou op uitverkoping!", en: "Here is the same dress in a bigger size. And it is on sale now!", glosses: { dieselfde: "the same", groter: "bigger" } },
      { speaker: "Kobus", af: "Wonderlik! Hoeveel kos dit?", en: "Wonderful! How much does it cost?", glosses: { wonderlik: "wonderful" } },
      { speaker: "Elsa", af: "Twee honderd rand, met tien persent afslag. Dit is 'n baie goeie prys.", en: "Two hundred rand, with a ten percent discount. That is a very good price.", glosses: { persent: "percent", goeie: "good (before a noun)" } },
      { speaker: "Kobus", af: "Perfek! Ek vat dit. Kan jy dit asseblief toedraai?", en: "Perfect! I'll take it. Can you please wrap it?", glosses: { vat: "take", toedraai: "wrap (up)" } },
      { speaker: "Elsa", af: "Natuurlik! Betaal jy kontant of met 'n kaart?", en: "Of course! Are you paying cash or by card?", glosses: { natuurlik: "of course", kaart: "card" } },
      { speaker: "Kobus", af: "Met 'n kaart. Baie dankie vir jou hulp!", en: "By card. Thank you very much for your help!", glosses: { kaart: "card", hulp: "help" } },
    ],
    questions: [
      {
        q: "Who is Kobus buying the dress for?",
        options: ["His mother", "His wife", "His sister"],
        correct: 1,
      },
      {
        q: "How does Kobus pay?",
        options: ["With cash", "With a card", "He decides not to buy it"],
        correct: 1,
      },
    ],
  },
};
