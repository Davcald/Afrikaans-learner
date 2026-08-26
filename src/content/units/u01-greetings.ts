import type { Unit } from "../types";

export const unit: Unit = {
  id: "u01",
  title: "Greetings & essentials",
  titleAf: "Groete en noodsaaklikhede",
  week: 1,
  cefr: "A1",
  description: "Say hello, introduce yourself, and survive your first chat.",
  vocab: [
    { id: "u01-v001", af: "hallo", en: "hello", exampleAf: "Hallo, hoe gaan dit?", exampleEn: "Hello, how are you?", pos: "interj", pron: "hah-LOH" },
    { id: "u01-v002", af: "goeiemôre", en: "good morning", exampleAf: "Goeiemôre, Meneer Botha!", exampleEn: "Good morning, Mr Botha!", pos: "interj", pron: "GHOO-yuh-MAW-ruh (g like Scottish 'loch')" },
    { id: "u01-v003", af: "goeiemiddag", en: "good afternoon", exampleAf: "Goeiemiddag, hoe kan ek help?", exampleEn: "Good afternoon, how can I help?", pos: "interj", pron: "GHOO-yuh-MI-dahgh" },
    { id: "u01-v004", af: "goeienaand", en: "good evening", exampleAf: "Goeienaand, welkom by ons huis.", exampleEn: "Good evening, welcome to our house.", pos: "interj", pron: "GHOO-yuh-NAHNT" },
    { id: "u01-v005", af: "totsiens", en: "goodbye", exampleAf: "Totsiens, sien jou môre!", exampleEn: "Goodbye, see you tomorrow!", pos: "interj", pron: "tot-SEENS" },
    { id: "u01-v006", af: "dankie", en: "thank you", altEn: ["thanks"], exampleAf: "Dankie vir die koffie.", exampleEn: "Thank you for the coffee.", pos: "interj", pron: "DUN-kee" },
    { id: "u01-v007", af: "asseblief", en: "please", exampleAf: "Een koffie, asseblief.", exampleEn: "One coffee, please.", pos: "adv", pron: "AH-suh-BLEEF" },
    { id: "u01-v008", af: "baie", en: "very / a lot", altEn: ["very", "much", "many", "a lot"], exampleAf: "Baie dankie vir die hulp!", exampleEn: "Thank you very much for the help!", pos: "adv", pron: "BYE-ah" },
    { id: "u01-v009", af: "ja", en: "yes", exampleAf: "Ja, ek verstaan.", exampleEn: "Yes, I understand.", pos: "interj", pron: "yah" },
    { id: "u01-v010", af: "nee", en: "no", exampleAf: "Nee, dankie.", exampleEn: "No, thank you.", pos: "interj", pron: "nee-uh" },
    { id: "u01-v011", af: "ek", en: "I", exampleAf: "Ek is moeg.", exampleEn: "I am tired.", pos: "pron", pron: "ek" },
    { id: "u01-v012", af: "jy", en: "you (informal)", altEn: ["you"], exampleAf: "Jy is my vriend.", exampleEn: "You are my friend.", pos: "pron", pron: "yay" },
    { id: "u01-v013", af: "jou", en: "your", altEn: ["you (object)"], exampleAf: "Wat is jou naam?", exampleEn: "What is your name?", pos: "pron", pron: "yoh" },
    { id: "u01-v014", af: "hy", en: "he", exampleAf: "Hy praat Afrikaans.", exampleEn: "He speaks Afrikaans.", pos: "pron", pron: "hay" },
    { id: "u01-v015", af: "sy", en: "she", altEn: ["she / his"], exampleAf: "Sy kom van Kaapstad af.", exampleEn: "She comes from Cape Town.", pos: "pron", pron: "say" },
    { id: "u01-v016", af: "ons", en: "we", altEn: ["us", "our"], exampleAf: "Ons leer Afrikaans.", exampleEn: "We are learning Afrikaans.", pos: "pron", pron: "ons" },
    { id: "u01-v017", af: "hulle", en: "they", altEn: ["them", "their"], exampleAf: "Hulle is baie vriendelik.", exampleEn: "They are very friendly.", pos: "pron", pron: "HUH-luh" },
    { id: "u01-v018", af: "dit", en: "it", altEn: ["this", "that"], exampleAf: "Dit is my boek.", exampleEn: "It is my book.", pos: "pron", pron: "dit" },
    { id: "u01-v019", af: "is", en: "is / am / are", altEn: ["is", "am", "are"], exampleAf: "Ek is honger.", exampleEn: "I am hungry.", pos: "v", pron: "is" },
    { id: "u01-v020", af: "nie", en: "not", exampleAf: "Ek is nie moeg nie.", exampleEn: "I am not tired.", pos: "adv", pron: "nee" },
    { id: "u01-v021", af: "en", en: "and", exampleAf: "Jan en Marie is hier.", exampleEn: "Jan and Marie are here.", pos: "conj", pron: "en" },
    { id: "u01-v022", af: "maar", en: "but", exampleAf: "Ek is moeg, maar gelukkig.", exampleEn: "I am tired, but happy.", pos: "conj", pron: "mahr" },
    { id: "u01-v023", af: "of", en: "or", exampleAf: "Koffie of tee?", exampleEn: "Coffee or tea?", pos: "conj", pron: "of" },
    { id: "u01-v024", af: "wat", en: "what", altEn: ["that", "which"], exampleAf: "Wat is dit?", exampleEn: "What is it?", pos: "pron", pron: "vut" },
    { id: "u01-v025", af: "wie", en: "who", exampleAf: "Wie is jy?", exampleEn: "Who are you?", pos: "pron", pron: "vee" },
    { id: "u01-v026", af: "waar", en: "where", exampleAf: "Waar is die badkamer?", exampleEn: "Where is the bathroom?", pos: "adv", pron: "vahr" },
    { id: "u01-v027", af: "hoe", en: "how", exampleAf: "Hoe gaan dit met jou?", exampleEn: "How are you doing?", pos: "adv", pron: "hoo" },
    { id: "u01-v028", af: "wanneer", en: "when", exampleAf: "Wanneer kom jy?", exampleEn: "When are you coming?", pos: "adv", pron: "VUH-neer" },
    { id: "u01-v029", af: "hoekom", en: "why", altAf: ["waarom"], exampleAf: "Hoekom is jy hartseer?", exampleEn: "Why are you sad?", pos: "adv", pron: "HOO-kom" },
    { id: "u01-v030", af: "my", en: "my", altEn: ["me"], exampleAf: "My naam is Anna.", exampleEn: "My name is Anna.", pos: "pron", pron: "may" },
    { id: "u01-v031", af: "naam", en: "name", exampleAf: "Wat is jou naam?", exampleEn: "What is your name?", pos: "n", pron: "nahm" },
    { id: "u01-v032", af: "mooi", en: "beautiful / nice", altEn: ["beautiful", "pretty", "nice"], exampleAf: "Dit is 'n mooi dag.", exampleEn: "It is a beautiful day.", pos: "adj", pron: "moy" },
    { id: "u01-v033", af: "goed", en: "good / well", altEn: ["good", "well"], exampleAf: "Dit gaan goed met my.", exampleEn: "I am doing well.", pos: "adj", pron: "ghoot" },
    { id: "u01-v034", af: "sleg", en: "bad", exampleAf: "Die weer is sleg vandag.", exampleEn: "The weather is bad today.", pos: "adj", pron: "slegh" },
    { id: "u01-v035", af: "lekker", en: "nice / tasty", altEn: ["nice", "tasty", "great"], exampleAf: "Die kos is baie lekker.", exampleEn: "The food is very tasty.", pos: "adj", pron: "LEK-ker" },
    { id: "u01-v036", af: "gaan", en: "to go", altEn: ["go", "going"], exampleAf: "Ek gaan huis toe.", exampleEn: "I am going home.", pos: "v", pron: "ghahn" },
    { id: "u01-v037", af: "praat", en: "to speak", altEn: ["speak", "talk"], exampleAf: "Praat jy Afrikaans?", exampleEn: "Do you speak Afrikaans?", pos: "v", pron: "praht" },
    { id: "u01-v038", af: "verstaan", en: "to understand", altEn: ["understand"], exampleAf: "Ek verstaan nie.", exampleEn: "I don't understand.", pos: "v", pron: "fer-STAHN" },
    { id: "u01-v039", af: "weet", en: "to know (a fact)", altEn: ["know"], exampleAf: "Ek weet nie.", exampleEn: "I don't know.", pos: "v", pron: "veet" },
    { id: "u01-v040", af: "ken", en: "to know (a person or place)", altEn: ["know"], exampleAf: "Ek ken haar goed.", exampleEn: "I know her well.", pos: "v", pron: "ken" },
    { id: "u01-v041", af: "help", en: "to help", altEn: ["help"], exampleAf: "Kan jy my help, asseblief?", exampleEn: "Can you help me, please?", pos: "v", pron: "help" },
    { id: "u01-v042", af: "jammer", en: "sorry", exampleAf: "Jammer, ek is laat!", exampleEn: "Sorry, I am late!", pos: "interj", pron: "YUH-mer" },
    { id: "u01-v043", af: "welkom", en: "welcome", exampleAf: "Welkom in Suid-Afrika!", exampleEn: "Welcome to South Africa!", pos: "interj", pron: "VEL-kom" },
    { id: "u01-v044", af: "meneer", en: "sir / Mr", altEn: ["sir", "mister"], exampleAf: "Goeiemôre, Meneer.", exampleEn: "Good morning, Sir.", pos: "n", pron: "muh-NEER", clozeForm: "Meneer" },
    { id: "u01-v045", af: "mevrou", en: "madam / Mrs", altEn: ["madam", "missus"], exampleAf: "Mevrou, u koffie is reg.", exampleEn: "Madam, your coffee is ready.", pos: "n", pron: "muh-FROH", clozeForm: "Mevrou" },
    { id: "u01-v046", af: "vriend", en: "friend", exampleAf: "Hy is my beste vriend.", exampleEn: "He is my best friend.", pos: "n", pron: "freent" },
    { id: "u01-v047", af: "mens", en: "person / human", altEn: ["person", "human"], exampleAf: "Sy is 'n goeie mens.", exampleEn: "She is a good person.", pos: "n", pron: "mens" },
    { id: "u01-v048", af: "die", en: "the", exampleAf: "Die son skyn.", exampleEn: "The sun is shining.", pos: "pron", pron: "dee" },
    { id: "u01-v049", af: "'n", en: "a / an", altEn: ["a", "an"], exampleAf: "Ek is 'n student.", exampleEn: "I am a student.", pos: "pron", pron: "uh (like the 'a' in 'about')" },
    { id: "u01-v050", af: "kan", en: "can", exampleAf: "Ek kan jou help.", exampleEn: "I can help you.", pos: "v", pron: "kun" },
  ],
  phrases: [
    { id: "u01-p01", af: "Hoe gaan dit?", en: "How are you?" },
    { id: "u01-p02", af: "Dit gaan goed, dankie.", en: "I'm well, thank you." },
    { id: "u01-p03", af: "Wat is jou naam?", en: "What is your name?" },
    { id: "u01-p04", af: "My naam is Anna.", en: "My name is Anna." },
    { id: "u01-p05", af: "Aangename kennis.", en: "Pleased to meet you." },
    { id: "u01-p06", af: "Waar kom jy vandaan?", en: "Where do you come from?" },
    { id: "u01-p07", af: "Ek kom van Amerika af.", en: "I come from America." },
    { id: "u01-p08", af: "Praat jy Engels?", en: "Do you speak English?" },
    { id: "u01-p09", af: "Ek leer Afrikaans.", en: "I am learning Afrikaans." },
    { id: "u01-p10", af: "Sien jou later!", en: "See you later!" },
  ],
  grammar: {
    id: "u01-g01",
    title: "Word order & the famous double negative",
    body: `Afrikaans basic sentences work just like English: **subject – verb – rest**.

- *Ek is moeg.* — I am tired.
- *Sy praat Afrikaans.* — She speaks Afrikaans.

Even better: verbs **never change** for person. *Ek is, jy is, ons is* — one form for everyone. No conjugation tables, ever.

The one famous quirk is the **double negative**. To say "not", put *nie* after the verb (or the object) **and** close the sentence with a second *nie*:

- *Ek is moeg.* → *Ek is **nie** moeg **nie**.*
- *Sy praat Afrikaans.* → *Sy praat **nie** Afrikaans **nie**.*

If the first *nie* would already be the last word, the two collapse into one:

- *Ek verstaan **nie**.* — I don't understand.

Think of the second *nie* as closing a bracket that the first one opened.`,
    examples: [
      { af: "Ek is nie honger nie.", en: "I am not hungry." },
      { af: "Hy praat nie Engels nie.", en: "He doesn't speak English." },
      { af: "Ons weet nie.", en: "We don't know." },
    ],
  },
  cloze: [
    { id: "u01-c01", textAf: "Ek is {{nie}} moeg nie.", answer: "nie", distractors: ["nee", "geen"], en: "I am not tired." },
    { id: "u01-c02", textAf: "Sy praat nie Engels {{nie}}.", answer: "nie", distractors: ["nee", "is"], en: "She doesn't speak English." },
    { id: "u01-c03", textAf: "{{Hoe}} gaan dit met jou?", answer: "Hoe", distractors: ["Wat", "Wie"], en: "How are you doing?" },
    { id: "u01-c04", textAf: "Baie {{dankie}} vir die hulp.", answer: "dankie", distractors: ["asseblief", "jammer"], en: "Thank you very much for the help." },
    { id: "u01-c05", textAf: "Wat is jou {{naam}}?", answer: "naam", distractors: ["vriend", "huis"], en: "What is your name?" },
    { id: "u01-c06", textAf: "Ek {{verstaan}} nie.", answer: "verstaan", distractors: ["praat", "weet"], en: "I don't understand." },
    { id: "u01-c07", textAf: "{{Praat}} jy Afrikaans?", answer: "Praat", distractors: ["Gaan", "Ken"], en: "Do you speak Afrikaans?" },
    { id: "u01-c08", textAf: "Ek {{kan}} jou help.", answer: "kan", distractors: ["ken", "is"], en: "I can help you." },
  ],
  dialogue: {
    id: "u01-d01",
    title: "By die koffiewinkel",
    titleEn: "At the coffee shop",
    lines: [
      { speaker: "Thandi", af: "Goeiemôre! Hoe gaan dit?", en: "Good morning! How are you?" },
      { speaker: "Pieter", af: "Dit gaan goed, dankie. En met jou?", en: "I'm well, thanks. And with you?" },
      { speaker: "Thandi", af: "Baie goed! Wat is jou naam?", en: "Very well! What is your name?" },
      { speaker: "Pieter", af: "My naam is Pieter. Aangename kennis.", en: "My name is Pieter. Pleased to meet you.", glosses: { aangename: "pleasant", kennis: "acquaintance" } },
      { speaker: "Thandi", af: "Ek is Thandi. Praat jy Afrikaans?", en: "I am Thandi. Do you speak Afrikaans?" },
      { speaker: "Pieter", af: "Ek leer Afrikaans. Ek verstaan 'n bietjie.", en: "I am learning Afrikaans. I understand a little.", glosses: { leer: "learn" } },
      { speaker: "Thandi", af: "Jy praat baie mooi!", en: "You speak very nicely!" },
      { speaker: "Pieter", af: "Baie dankie! Sien jou later!", en: "Thank you very much! See you later!", glosses: { sien: "see", later: "later" } },
    ],
    questions: [
      {
        q: "What is Pieter doing?",
        options: ["Teaching Afrikaans", "Learning Afrikaans", "Selling coffee"],
        correct: 1,
      },
      {
        q: "How much Afrikaans does Pieter understand?",
        options: ["Nothing", "A little", "Everything"],
        correct: 1,
      },
    ],
  },
};
