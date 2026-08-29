import type { Unit } from "../types";

export const unit: Unit = {
  id: "u12",
  title: "Health & body",
  titleAf: "Gesondheid en liggaam",
  week: 12,
  cefr: "A2",
  description: "Name the body, describe symptoms, and survive the doctor's visit.",
  vocab: [
    { id: "u12-v001", af: "kop", en: "head", exampleAf: "My kop is seer.", exampleEn: "My head hurts.", pos: "n", pron: "kawp" },
    { id: "u12-v002", af: "oog", en: "eye", exampleAf: "Daar is iets in my oog.", exampleEn: "There is something in my eye.", pos: "n", pron: "oo-ugh" },
    { id: "u12-v003", af: "oor", en: "ear", exampleAf: "Die baba se oor is seer.", exampleEn: "The baby's ear is sore.", pos: "n", pron: "oo-ur" },
    { id: "u12-v004", af: "neus", en: "nose", exampleAf: "My neus loop van die verkoue.", exampleEn: "My nose is running from the cold.", pos: "n", pron: "nurs (œ sound)" },
    { id: "u12-v005", af: "mond", en: "mouth", exampleAf: "Maak jou mond oop vir die dokter.", exampleEn: "Open your mouth for the doctor.", pos: "n", pron: "mawnt" },
    { id: "u12-v006", af: "keel", en: "throat", exampleAf: "My keel is baie seer.", exampleEn: "My throat is very sore.", pos: "n", pron: "kee-ul" },
    { id: "u12-v007", af: "nek", en: "neck", exampleAf: "My nek is styf van die werk.", exampleEn: "My neck is stiff from work.", pos: "n", pron: "nek" },
    { id: "u12-v008", af: "skouer", en: "shoulder", exampleAf: "Hy dra die tas op sy skouer.", exampleEn: "He carries the bag on his shoulder.", pos: "n", pron: "SKOH-er" },
    { id: "u12-v009", af: "arm", en: "arm", exampleAf: "Sy het haar arm gebreek.", exampleEn: "She broke her arm.", pos: "n", pron: "urm" },
    { id: "u12-v010", af: "hand", en: "hand", exampleAf: "Was jou hande voor ete.", exampleEn: "Wash your hands before eating.", pos: "n", pron: "hunt", clozeForm: "hande" },
    { id: "u12-v011", af: "vinger", en: "finger", exampleAf: "Ek het my vinger met die mes gesny.", exampleEn: "I cut my finger with the knife.", pos: "n", pron: "FING-er" },
    { id: "u12-v012", af: "been", en: "leg / bone", altEn: ["leg", "bone"], exampleAf: "My been is moeg van die stap.", exampleEn: "My leg is tired from walking.", pos: "n", pron: "bee-un" },
    { id: "u12-v013", af: "knie", en: "knee", exampleAf: "Sy knie is seer van die sokker.", exampleEn: "His knee is sore from soccer.", pos: "n", pron: "k-NEE" },
    { id: "u12-v014", af: "voet", en: "foot", exampleAf: "Ek loop kaalvoet op die strand.", exampleEn: "I walk barefoot on the beach.", pos: "n", pron: "foot", clozeForm: "kaalvoet" },
    { id: "u12-v015", af: "toon", en: "toe", exampleAf: "Eina! Ek het my toon gestamp.", exampleEn: "Ouch! I stubbed my toe.", pos: "n", pron: "toh-un" },
    { id: "u12-v016", af: "maag", en: "stomach", exampleAf: "My maag is lus vir kos.", exampleEn: "My stomach is craving food.", pos: "n", pron: "mahgh" },
    { id: "u12-v017", af: "rug", en: "back", exampleAf: "Sit reguit, dis goed vir jou rug.", exampleEn: "Sit up straight, it's good for your back.", pos: "n", pron: "rugh" },
    { id: "u12-v018", af: "bors", en: "chest", exampleAf: "Die dokter luister na my bors.", exampleEn: "The doctor listens to my chest.", pos: "n", pron: "bawrs" },
    { id: "u12-v019", af: "hart", en: "heart", exampleAf: "Oefening is goed vir die hart.", exampleEn: "Exercise is good for the heart.", pos: "n", pron: "hart" },
    { id: "u12-v020", af: "bloed", en: "blood", exampleAf: "Die verpleegster trek bloed.", exampleEn: "The nurse draws blood.", pos: "n", pron: "bloot" },
    { id: "u12-v021", af: "vel", en: "skin", exampleAf: "Die son brand my vel.", exampleEn: "The sun is burning my skin.", pos: "n", pron: "fel" },
    { id: "u12-v022", af: "liggaam", en: "body", exampleAf: "'n Gesonde liggaam het rus nodig.", exampleEn: "A healthy body needs rest.", pos: "n", pron: "LIGH-ghahm" },
    { id: "u12-v023", af: "siek", en: "sick / ill", altEn: ["sick", "ill"], exampleAf: "Ek voel vandag baie siek.", exampleEn: "I feel very sick today.", pos: "adj", pron: "seek" },
    { id: "u12-v024", af: "gesond", en: "healthy", exampleAf: "Vrugte en groente hou jou gesond.", exampleEn: "Fruit and vegetables keep you healthy.", pos: "adj", pron: "ghuh-SAWNT" },
    { id: "u12-v025", af: "pyn", en: "pain", exampleAf: "Die pyn in my rug is erg.", exampleEn: "The pain in my back is bad.", pos: "n", pron: "payn" },
    { id: "u12-v026", af: "koors", en: "fever", exampleAf: "Die kind het 'n hoë koors.", exampleEn: "The child has a high fever.", pos: "n", pron: "koo-urs" },
    { id: "u12-v027", af: "hoofpyn", en: "headache", exampleAf: "Ek het 'n vreeslike hoofpyn.", exampleEn: "I have a terrible headache.", pos: "n", pron: "HOO-uf-payn" },
    { id: "u12-v028", af: "maagpyn", en: "stomach ache", exampleAf: "Te veel koek gee jou maagpyn.", exampleEn: "Too much cake gives you a stomach ache.", pos: "n", pron: "MAHGH-payn" },
    { id: "u12-v029", af: "verkoue", en: "a cold", altEn: ["cold (illness)"], exampleAf: "Ek het 'n verkoue gevang.", exampleEn: "I caught a cold.", pos: "n", pron: "fer-KOH-uh" },
    { id: "u12-v030", af: "griep", en: "flu", exampleAf: "Die hele kantoor het griep.", exampleEn: "The whole office has flu.", pos: "n", pron: "ghreep" },
    { id: "u12-v031", af: "hoes", en: "to cough / a cough", altEn: ["cough"], exampleAf: "Ek hoes al die hele week.", exampleEn: "I have been coughing all week.", pos: "v", pron: "hoos" },
    { id: "u12-v032", af: "medisyne", en: "medicine", exampleAf: "Drink jou medisyne na ete.", exampleEn: "Take your medicine after eating.", pos: "n", pron: "meh-di-SAY-nuh" },
    { id: "u12-v033", af: "pil", en: "pill", exampleAf: "Die dokter gee my pille vir die pyn.", exampleEn: "The doctor gives me pills for the pain.", pos: "n", pron: "pil", clozeForm: "pille" },
    { id: "u12-v034", af: "kliniek", en: "clinic", exampleAf: "Die kliniek is oop tot vyfuur.", exampleEn: "The clinic is open until five o'clock.", pos: "n", pron: "kli-NEEK" },
    { id: "u12-v035", af: "spreekkamer", en: "doctor's office / consulting room", altEn: ["consulting room", "doctor's office"], exampleAf: "Wag asseblief in die spreekkamer.", exampleEn: "Please wait in the consulting room.", pos: "n", pron: "SPREE-uk-kah-mer" },
    { id: "u12-v036", af: "afspraak", en: "appointment", exampleAf: "Ek het 'n afspraak by die dokter.", exampleEn: "I have an appointment with the doctor.", pos: "n", pron: "UF-sprahk" },
    { id: "u12-v037", af: "voel", en: "to feel", altEn: ["feel"], exampleAf: "Hoe voel jy vandag?", exampleEn: "How do you feel today?", pos: "v", pron: "fool" },
    { id: "u12-v038", af: "seerkry", en: "to get hurt", altEn: ["get hurt"], exampleAf: "Moenie seerkry op die trap nie!", exampleEn: "Don't get hurt on the stairs!", pos: "v", pron: "SEER-kray" },
    { id: "u12-v039", af: "nies", en: "to sneeze", altEn: ["sneeze"], exampleAf: "Die stof laat my nies.", exampleEn: "The dust makes me sneeze.", pos: "v", pron: "nees" },
    { id: "u12-v040", af: "genees", en: "to heal / cure", altEn: ["heal", "cure"], exampleAf: "Die wond genees vinnig.", exampleEn: "The wound is healing quickly.", pos: "v", pron: "ghuh-NEES" },
    { id: "u12-v041", af: "asemhaal", en: "to breathe", altEn: ["breathe"], exampleAf: "Haal diep asem en bly kalm.", exampleEn: "Breathe deeply and stay calm.", pos: "v", pron: "AH-sem-hahl", clozeForm: "asem" },
    { id: "u12-v042", af: "swak", en: "weak", exampleAf: "Ek voel swak van die griep.", exampleEn: "I feel weak from the flu.", pos: "adj", pron: "svuk" },
    { id: "u12-v043", af: "beter", en: "better", exampleAf: "Ek voel vandag baie beter.", exampleEn: "I feel much better today.", pos: "adj", pron: "BEE-ter" },
    { id: "u12-v044", af: "erger", en: "worse", exampleAf: "Die hoofpyn word erger.", exampleEn: "The headache is getting worse.", pos: "adj", pron: "ER-gher" },
    { id: "u12-v045", af: "seer", en: "sore / painful", altEn: ["sore", "painful", "hurt"], exampleAf: "My voete is seer van die stap.", exampleEn: "My feet are sore from walking.", pos: "adj", pron: "see-ur" },
    { id: "u12-v046", af: "gesondheid", en: "health (also: cheers!)", altEn: ["health", "cheers"], exampleAf: "Gesondheid is belangriker as geld.", exampleEn: "Health is more important than money.", pos: "n", pron: "ghuh-SAWNT-hayt" },
    { id: "u12-v047", af: "oefening", en: "exercise", exampleAf: "Oefening hou die liggaam sterk.", exampleEn: "Exercise keeps the body strong.", pos: "n", pron: "OO-fuh-ning" },
    { id: "u12-v048", af: "gee", en: "to give", altEn: ["give"], exampleAf: "Die dokter gee my medisyne.", exampleEn: "The doctor gives me medicine.", pos: "v", pron: "ghee-uh" },
  ],
  phrases: [
    { id: "u12-p01", af: "Ek voel nie lekker nie.", en: "I don't feel well." },
    { id: "u12-p02", af: "Wat makeer?", en: "What's wrong?" },
    { id: "u12-p03", af: "My kop is seer.", en: "My head hurts." },
    { id: "u12-p04", af: "Ek het 'n verkoue.", en: "I have a cold." },
    { id: "u12-p05", af: "Ek moet 'n afspraak maak.", en: "I need to make an appointment." },
    { id: "u12-p06", af: "Word gou gesond!", en: "Get well soon!" },
    { id: "u12-p07", af: "Jy moet baie water drink.", en: "You must drink lots of water." },
    { id: "u12-p08", af: "Moenie bekommerd wees nie.", en: "Don't worry." },
    { id: "u12-p09", af: "Ek voel al baie beter.", en: "I already feel much better." },
    { id: "u12-p10", af: "Gesondheid!", en: "Bless you! / Cheers!" },
  ],
  grammar: {
    id: "u12-g01",
    title: "Eina! Saying how you feel",
    body: `Two easy patterns cover almost every ache:

- **My … is seer.** — *My keel is seer.* (My throat is sore.)
- **Ek het …** — *Ek het hoofpyn / koors / 'n verkoue.* (I have a headache / fever / a cold.)

For general states, use ***voel*** (feel):

- *Ek **voel** siek / swak / beter.* — I feel sick / weak / better.
- *Hoe **voel** jy vandag?* — How do you feel today?

Giving advice is *moet* (must) — and its negative twin ***moenie*** (don't):

- *Jy **moet** rus en baie water drink.* — You must rest and drink lots of water.
- ***Moenie** werk toe gaan **nie**!* — Don't go to work! (*moenie* opens, *nie* still closes.)

And the most South African word of pain: ***Eina!*** — Ouch!`,
    examples: [
      { af: "My maag is seer en ek het koors.", en: "My stomach hurts and I have a fever." },
      { af: "Jy moet by die huis bly en rus.", en: "You must stay home and rest." },
      { af: "Moenie vergeet om jou pille te drink nie.", en: "Don't forget to take your pills." },
    ],
  },
  cloze: [
    { id: "u12-c01", textAf: "Ek voel nie lekker {{nie}}.", answer: "nie", distractors: ["al", "so"], en: "I don't feel well." },
    { id: "u12-c02", textAf: "My kop is {{seer}}.", answer: "seer", distractors: ["siek", "sleg"], en: "My head is sore." },
    { id: "u12-c03", textAf: "Ek het 'n vreeslike {{hoofpyn}}.", answer: "hoofpyn", distractors: ["koors", "verkoue"], en: "I have a terrible headache." },
    { id: "u12-c04", textAf: "Jy {{moet}} baie water drink.", answer: "moet", distractors: ["mag", "wil"], en: "You must drink lots of water." },
    { id: "u12-c05", textAf: "{{Moenie}} vandag werk toe gaan nie.", answer: "Moenie", distractors: ["Moet", "Nie"], en: "Don't go to work today." },
    { id: "u12-c06", textAf: "Die dokter {{gee}} my medisyne.", answer: "gee", distractors: ["kry", "koop"], en: "The doctor gives me medicine." },
    { id: "u12-c07", textAf: "Ek is gou weer {{gesond}}.", answer: "gesond", distractors: ["siek", "swak"], en: "I'll be healthy again soon." },
    { id: "u12-c08", textAf: "Sy moet 'n {{afspraak}} by die kliniek maak.", answer: "afspraak", distractors: ["pil", "oefening"], en: "She must make an appointment at the clinic." },
  ],
  dialogue: {
    id: "u12-d01",
    title: "By die dokter",
    titleEn: "At the doctor",
    lines: [
      { speaker: "Marie", af: "Goeiemôre, Dokter. Ek voel nie lekker nie.", en: "Good morning, Doctor. I don't feel well." },
      { speaker: "Botha", af: "Wat makeer? Vertel my.", en: "What's wrong? Tell me.", glosses: { makeer: "is wrong (wat makeer = what's the matter)", vertel: "tell" } },
      { speaker: "Marie", af: "My keel is seer en ek hoes baie.", en: "My throat is sore and I'm coughing a lot." },
      { speaker: "Botha", af: "Het jy koors?", en: "Do you have a fever?" },
      { speaker: "Marie", af: "Ja, en my liggaam voel swak.", en: "Yes, and my body feels weak." },
      { speaker: "Botha", af: "Dit lyk soos griep. Jy moet by die huis bly en rus.", en: "It looks like flu. You must stay home and rest." },
      { speaker: "Marie", af: "Moet ek medisyne drink?", en: "Must I take medicine?" },
      { speaker: "Botha", af: "Ja, hierdie pille, drie keer 'n dag. En baie water!", en: "Yes, these pills, three times a day. And lots of water!", glosses: { pille: "pills" } },
      { speaker: "Marie", af: "Dankie, Dokter. Wanneer sal ek beter voel?", en: "Thank you, Doctor. When will I feel better?" },
      { speaker: "Botha", af: "Oor 'n paar dae. Moenie werk toe gaan nie!", en: "In a few days. Don't go to work!", glosses: { dae: "days" } },
    ],
    questions: [
      {
        q: "What are Marie's symptoms?",
        options: ["A sore back", "A sore throat and a cough", "A broken arm"],
        correct: 1,
      },
      {
        q: "What must Marie do?",
        options: ["Go to work", "Stay home and rest", "Do more exercise"],
        correct: 1,
      },
    ],
  },
};
