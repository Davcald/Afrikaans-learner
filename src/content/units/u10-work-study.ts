import type { Unit } from "../types";

export const unit: Unit = {
  id: "u10",
  title: "Work & study",
  titleAf: "Werk en studie",
  week: 10,
  cefr: "A2",
  description: "Talk about your job, your studies, and learning itself.",
  vocab: [
    { id: "u10-v001", af: "beroep", en: "profession / occupation", altEn: ["profession", "occupation"], exampleAf: "Wat is jou beroep?", exampleEn: "What is your profession?", pos: "n", pron: "buh-ROOP" },
    { id: "u10-v002", af: "onderwyser", en: "teacher", exampleAf: "Die onderwyser verduidelik die les.", exampleEn: "The teacher explains the lesson.", pos: "n", pron: "ON-der-VAY-ser" },
    { id: "u10-v003", af: "dokter", en: "doctor", exampleAf: "My suster is 'n dokter in Durban.", exampleEn: "My sister is a doctor in Durban.", pos: "n", pron: "DOK-ter" },
    { id: "u10-v004", af: "verpleegster", en: "nurse", exampleAf: "Die verpleegster help die dokter.", exampleEn: "The nurse helps the doctor.", pos: "n", pron: "fer-PLEEGH-ster" },
    { id: "u10-v005", af: "ingenieur", en: "engineer", exampleAf: "Die ingenieur bou 'n nuwe brug.", exampleEn: "The engineer is building a new bridge.", pos: "n", pron: "in-zhuh-NYUR" },
    { id: "u10-v006", af: "boer", en: "farmer", exampleAf: "Die boer werk van vroeg tot laat.", exampleEn: "The farmer works from early till late.", pos: "n", pron: "boor" },
    { id: "u10-v007", af: "sjef", en: "chef", exampleAf: "Die sjef kook heerlike kos.", exampleEn: "The chef cooks delicious food.", pos: "n", pron: "shef" },
    { id: "u10-v008", af: "prokureur", en: "lawyer / attorney", altEn: ["lawyer", "attorney"], exampleAf: "Die prokureur ken die wet goed.", exampleEn: "The lawyer knows the law well.", pos: "n", pron: "proh-ku-RUR" },
    { id: "u10-v009", af: "besigheid", en: "business", exampleAf: "Sy begin haar eie besigheid.", exampleEn: "She is starting her own business.", pos: "n", pron: "BEE-sigh-hayt" },
    { id: "u10-v010", af: "werknemer", en: "employee", exampleAf: "Die maatskappy het honderd werknemers.", exampleEn: "The company has a hundred employees.", pos: "n", pron: "VERK-nee-mer", clozeForm: "werknemers" },
    { id: "u10-v011", af: "werkgewer", en: "employer", exampleAf: "My werkgewer is baie regverdig.", exampleEn: "My employer is very fair.", pos: "n", pron: "VERK-ghee-ver" },
    { id: "u10-v012", af: "baas", en: "boss", exampleAf: "Die baas is vandag in 'n goeie bui.", exampleEn: "The boss is in a good mood today.", pos: "n", pron: "bahs" },
    { id: "u10-v013", af: "kollega", en: "colleague", exampleAf: "Ek eet middagete saam met my kollegas.", exampleEn: "I eat lunch with my colleagues.", pos: "n", pron: "kaw-LEE-ghah", clozeForm: "kollegas" },
    { id: "u10-v014", af: "kantoor", en: "office", exampleAf: "Ek werk Maandae by die kantoor.", exampleEn: "On Mondays I work at the office.", pos: "n", pron: "kun-TOOR" },
    { id: "u10-v015", af: "maatskappy", en: "company", exampleAf: "Die maatskappy is in Johannesburg.", exampleEn: "The company is in Johannesburg.", pos: "n", pron: "maht-skuh-PAY" },
    { id: "u10-v016", af: "vergadering", en: "meeting", exampleAf: "Die vergadering begin om nege-uur.", exampleEn: "The meeting starts at nine o'clock.", pos: "n", pron: "fer-GHAH-duh-ring" },
    { id: "u10-v017", af: "salaris", en: "salary", exampleAf: "Sy verdien 'n goeie salaris.", exampleEn: "She earns a good salary.", pos: "n", pron: "sah-LAH-ris" },
    { id: "u10-v018", af: "werkloos", en: "unemployed", exampleAf: "Hy is al ses maande werkloos.", exampleEn: "He has been unemployed for six months.", pos: "adj", pron: "VERK-loo-us" },
    { id: "u10-v019", af: "universiteit", en: "university", exampleAf: "Sy studeer aan die universiteit.", exampleEn: "She studies at the university.", pos: "n", pron: "u-ni-fer-si-TAYT" },
    { id: "u10-v020", af: "student", en: "student", exampleAf: "Die student swot vir die eksamen.", exampleEn: "The student is cramming for the exam.", pos: "n", pron: "stu-DENT" },
    { id: "u10-v021", af: "klas", en: "class", exampleAf: "Die klas begin om agtuur.", exampleEn: "The class starts at eight o'clock.", pos: "n", pron: "klus" },
    { id: "u10-v022", af: "les", en: "lesson", exampleAf: "Vandag se les is oor die weer.", exampleEn: "Today's lesson is about the weather.", pos: "n", pron: "les" },
    { id: "u10-v023", af: "eksamen", en: "exam", exampleAf: "Die eksamen is volgende week.", exampleEn: "The exam is next week.", pos: "n", pron: "ek-SAH-men" },
    { id: "u10-v024", af: "toets", en: "test", exampleAf: "Ons skryf môre 'n toets.", exampleEn: "We are writing a test tomorrow.", pos: "n", pron: "toots" },
    { id: "u10-v025", af: "vraag", en: "question", exampleAf: "Mag ek 'n vraag vra?", exampleEn: "May I ask a question?", pos: "n", pron: "frahgh" },
    { id: "u10-v026", af: "antwoord", en: "answer", exampleAf: "Die antwoord is maklik.", exampleEn: "The answer is easy.", pos: "n", pron: "UNT-voort" },
    { id: "u10-v027", af: "taal", en: "language", exampleAf: "Afrikaans is 'n mooi taal.", exampleEn: "Afrikaans is a beautiful language.", pos: "n", pron: "tahl" },
    { id: "u10-v028", af: "woord", en: "word", exampleAf: "Ek leer tien nuwe woorde per dag.", exampleEn: "I learn ten new words per day.", pos: "n", pron: "voort", clozeForm: "woorde" },
    { id: "u10-v029", af: "sin", en: "sentence", exampleAf: "Skryf 'n sin met hierdie woord.", exampleEn: "Write a sentence with this word.", pos: "n", pron: "sin" },
    { id: "u10-v030", af: "boek", en: "book", exampleAf: "Hierdie boek is baie interessant.", exampleEn: "This book is very interesting.", pos: "n", pron: "book" },
    { id: "u10-v031", af: "pen", en: "pen", exampleAf: "Kan ek jou pen leen?", exampleEn: "Can I borrow your pen?", pos: "n", pron: "pen" },
    { id: "u10-v032", af: "papier", en: "paper", exampleAf: "Ek het 'n stuk papier nodig.", exampleEn: "I need a piece of paper.", pos: "n", pron: "pah-PEER" },
    { id: "u10-v033", af: "studeer", en: "to study", altEn: ["study"], exampleAf: "My neef studeer in Stellenbosch.", exampleEn: "My cousin studies in Stellenbosch.", pos: "v", pron: "stu-DEER" },
    { id: "u10-v034", af: "swot", en: "to cram / study hard (SA)", altEn: ["cram", "study hard", "swot"], exampleAf: "Ek moet vanaand swot vir die toets.", exampleEn: "I must cram for the test tonight.", pos: "v", pron: "swawt" },
    { id: "u10-v035", af: "onthou", en: "to remember", altEn: ["remember"], exampleAf: "Ek kan nie die woord onthou nie.", exampleEn: "I can't remember the word.", pos: "v", pron: "ont-HOH" },
    { id: "u10-v036", af: "vergeet", en: "to forget", altEn: ["forget"], exampleAf: "Moenie jou boeke vergeet nie!", exampleEn: "Don't forget your books!", pos: "v", pron: "fer-GHEE-ut" },
    { id: "u10-v037", af: "verduidelik", en: "to explain", altEn: ["explain"], exampleAf: "Kan jy dit weer verduidelik?", exampleEn: "Can you explain it again?", pos: "v", pron: "fer-DAY-duh-lik" },
    { id: "u10-v038", af: "beteken", en: "to mean", altEn: ["mean"], exampleAf: "Wat beteken hierdie woord?", exampleEn: "What does this word mean?", pos: "v", pron: "buh-TEE-ken" },
    { id: "u10-v039", af: "verdien", en: "to earn / deserve", altEn: ["earn", "deserve"], exampleAf: "Hoeveel verdien 'n onderwyser?", exampleEn: "How much does a teacher earn?", pos: "v", pron: "fer-DEEN" },
    { id: "u10-v040", af: "oplos", en: "to solve", altEn: ["solve"], exampleAf: "Ons kan hierdie probleem oplos.", exampleEn: "We can solve this problem.", pos: "v", pron: "OP-laws" },
    { id: "u10-v041", af: "aansoek", en: "application", exampleAf: "Ek doen aansoek vir die werk.", exampleEn: "I am applying for the job.", pos: "n", pron: "AHN-sook" },
    { id: "u10-v042", af: "moeilik", en: "difficult", exampleAf: "Die eksamen was baie moeilik.", exampleEn: "The exam was very difficult.", pos: "adj", pron: "MOO-i-lik" },
    { id: "u10-v043", af: "maklik", en: "easy", exampleAf: "Afrikaans is makliker as wat jy dink!", exampleEn: "Afrikaans is easier than you think!", pos: "adj", pron: "MUK-lik", clozeForm: "makliker" },
    { id: "u10-v044", af: "belangrik", en: "important", exampleAf: "Oefening is belangrik vir 'n taal.", exampleEn: "Practice is important for a language.", pos: "adj", pron: "buh-LUNG-rik" },
    { id: "u10-v045", af: "hard", en: "hard", exampleAf: "Sy werk baie hard.", exampleEn: "She works very hard.", pos: "adv", pron: "hart" },
    { id: "u10-v046", af: "probleem", en: "problem", exampleAf: "Daar is 'n probleem met my rekenaar.", exampleEn: "There is a problem with my computer.", pos: "n", pron: "proh-BLEEM" },
  ],
  phrases: [
    { id: "u10-p01", af: "Wat doen jy vir 'n lewe?", en: "What do you do for a living?" },
    { id: "u10-p02", af: "Ek werk by 'n groot maatskappy.", en: "I work at a big company." },
    { id: "u10-p03", af: "Ek is nog 'n student.", en: "I am still a student." },
    { id: "u10-p04", af: "Wat beteken dit?", en: "What does it mean?" },
    { id: "u10-p05", af: "Kan jy stadiger praat, asseblief?", en: "Can you speak more slowly, please?" },
    { id: "u10-p06", af: "Hoe sê 'n mens dit in Afrikaans?", en: "How does one say that in Afrikaans?" },
    { id: "u10-p07", af: "Ek verstaan die vraag nie.", en: "I don't understand the question." },
    { id: "u10-p08", af: "Ek het 'n vergadering om tien-uur.", en: "I have a meeting at ten o'clock." },
    { id: "u10-p09", af: "Sterkte met die eksamen!", en: "Good luck with the exam!" },
    { id: "u10-p10", af: "Oefening maak perfek.", en: "Practice makes perfect." },
  ],
  grammar: {
    id: "u10-g01",
    title: "om te — the 'to…' glue",
    body: `To say "to do something" — after adjectives, after *hou van*, for purposes — Afrikaans wraps the action in ***om … te***: *om* opens the bracket, *te* sits right before the verb at the end.

- *Dit is moeilik **om** Afrikaans **te** praat.* — It's hard *to speak* Afrikaans. (It isn't — you're doing it!)
- *Ek hou daarvan **om** saans **te** lees.* — I like *to read* in the evenings.
- *Ek probeer **om** elke dag **te** oefen.* — I try *to practise* every day.

Notice ***daarvan*** after *hou*: "hou van + a thing" (*Ek hou van koffie*) becomes "hou **daarvan** om te + verb" when what you like is an action.

For a goal or purpose, *om te* means "in order to":

- *Ek studeer **om** 'n dokter **te word**.* — I'm studying (in order) to become a doctor.
- *Ons werk hard **om** geld **te verdien**.* — We work hard to earn money.

With separable verbs, *te* slips inside: *om vroeg **op te staan*** — to get up early.`,
    examples: [
      { af: "Dit is lekker om Afrikaans te leer.", en: "It is fun to learn Afrikaans." },
      { af: "Ek probeer om elke dag te oefen.", en: "I try to practise every day." },
      { af: "Sy werk hard om haar besigheid te bou.", en: "She works hard to build her business." },
    ],
  },
  cloze: [
    { id: "u10-c01", textAf: "Dit is moeilik {{om}} Afrikaans te praat.", answer: "om", distractors: ["vir", "te"], en: "It is difficult to speak Afrikaans." },
    { id: "u10-c02", textAf: "Dit is lekker om Afrikaans {{te}} leer.", answer: "te", distractors: ["om", "en"], en: "It is fun to learn Afrikaans." },
    { id: "u10-c03", textAf: "Ek hou daarvan om saans te {{lees}}.", answer: "lees", distractors: ["boek", "les"], en: "I like to read in the evenings." },
    { id: "u10-c04", textAf: "Ek studeer om 'n dokter te {{word}}.", answer: "word", distractors: ["wees", "werk"], en: "I am studying to become a doctor." },
    { id: "u10-c05", textAf: "Wat {{beteken}} hierdie woord?", answer: "beteken", distractors: ["verduidelik", "onthou"], en: "What does this word mean?" },
    { id: "u10-c06", textAf: "Ek kan nie die antwoord {{onthou}} nie.", answer: "onthou", distractors: ["vergeet", "oplos"], en: "I can't remember the answer." },
    { id: "u10-c07", textAf: "Sy {{verdien}} 'n goeie salaris.", answer: "verdien", distractors: ["verduidelik", "betaal"], en: "She earns a good salary." },
    { id: "u10-c08", textAf: "Die toets was baie {{maklik}}.", answer: "maklik", distractors: ["moeilik", "belangrik"], en: "The test was very easy." },
  ],
  dialogue: {
    id: "u10-d01",
    title: "Die onderhoud",
    titleEn: "The interview",
    lines: [
      { speaker: "Danie", af: "Goeiemôre, Zanele. Vertel my van jouself.", en: "Good morning, Zanele. Tell me about yourself.", glosses: { vertel: "tell", jouself: "yourself" } },
      { speaker: "Zanele", af: "Ek is 'n student aan die universiteit. Ek studeer tale.", en: "I am a student at the university. I study languages.", glosses: { tale: "languages" } },
      { speaker: "Danie", af: "Interessant! Hoekom wil jy by ons maatskappy werk?", en: "Interesting! Why do you want to work at our company?", glosses: { interessant: "interesting" } },
      { speaker: "Zanele", af: "Ek wil graag leer om met mense te werk.", en: "I would love to learn to work with people.", glosses: { graag: "gladly / would love to" } },
      { speaker: "Danie", af: "Die werk is soms moeilik. Kan jy hard werk?", en: "The work is sometimes difficult. Can you work hard?" },
      { speaker: "Zanele", af: "Ja, beslis. Ek vergeet nooit 'n taak nie.", en: "Yes, definitely. I never forget a task.", glosses: { beslis: "definitely" } },
      { speaker: "Danie", af: "Wonderlik. Die salaris is goed, en jou kollegas is vriendelik.", en: "Wonderful. The salary is good, and your colleagues are friendly.", glosses: { wonderlik: "wonderful", kollegas: "colleagues" } },
      { speaker: "Zanele", af: "Dit klink perfek! Wanneer kan ek begin?", en: "That sounds perfect! When can I start?", glosses: { klink: "sounds" } },
    ],
    questions: [
      {
        q: "What does Zanele study?",
        options: ["Medicine", "Languages", "Engineering"],
        correct: 1,
      },
      {
        q: "What does Danie say about the work?",
        options: ["It is always easy", "It is sometimes difficult", "It is boring"],
        correct: 1,
      },
    ],
  },
};
