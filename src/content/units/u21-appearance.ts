import type { Unit } from "../types";

export const unit: Unit = {
  id: "u21",
  title: "Describing people",
  titleAf: "Mense beskryf",
  week: 17,
  cefr: "B1",
  description: "Looks, build, age and personality — and when the adjective takes -e.",
  vocab: [
    { id: "u21-v001", af: "beskryf", en: "to describe", altEn: ["describe"], exampleAf: "Kan jy die man vir my beskryf?", exampleEn: "Can you describe the man for me?", pos: "v", pron: "buh-SKRAYF" },
    { id: "u21-v002", af: "voorkoms", en: "appearance / looks", altEn: ["appearance", "looks"], exampleAf: "Sy voorkoms is vir hom baie belangrik.", exampleEn: "His appearance is very important to him.", pos: "n", pron: "FOOR-koms" },
    { id: "u21-v003", af: "skraal", en: "slim / slender", altEn: ["slim", "slender", "thin"], exampleAf: "My broer is lank en skraal.", exampleEn: "My brother is tall and slim.", pos: "adj", pron: "skrahl" },
    { id: "u21-v004", af: "maer", en: "thin / skinny", altEn: ["thin", "skinny", "lean"], exampleAf: "Die arme hond is baie maer.", exampleEn: "The poor dog is very thin.", pos: "adj", pron: "MAH-er" },
    { id: "u21-v005", af: "vet", en: "fat", exampleAf: "Ons kat word nou te vet.", exampleEn: "Our cat is getting too fat now.", pos: "adj", pron: "fet" },
    { id: "u21-v006", af: "gespierd", en: "muscular", exampleAf: "Die rugbyspeler is groot en gespierd.", exampleEn: "The rugby player is big and muscular.", pos: "adj", pron: "ghuh-SPEERT" },
    { id: "u21-v007", af: "bleek", en: "pale", exampleAf: "Jy lyk bleek; is jy siek?", exampleEn: "You look pale; are you sick?", pos: "adj", pron: "blee-uk" },
    { id: "u21-v008", af: "blond", en: "blond", altEn: ["blonde", "fair"], exampleAf: "Sy het lang blonde hare.", exampleEn: "She has long blonde hair.", pos: "adj", pron: "blont", clozeForm: "blonde" },
    { id: "u21-v009", af: "krullerig", en: "curly", exampleAf: "Die baba het krullerige hare.", exampleEn: "The baby has curly hair.", pos: "adj", pron: "KRUL-luh-righ", clozeForm: "krullerige" },
    { id: "u21-v010", af: "steil", en: "straight (hair) / steep", altEn: ["straight", "steep"], exampleAf: "My suster se hare is lank en steil.", exampleEn: "My sister's hair is long and straight.", pos: "adj", pron: "stayl" },
    { id: "u21-v011", af: "kaal", en: "bald / bare", altEn: ["bald", "bare", "naked"], exampleAf: "My pa se kop is al kaal.", exampleEn: "My dad's head is already bald.", pos: "adj", pron: "kahl" },
    { id: "u21-v012", af: "baard", en: "beard", exampleAf: "Oupa het 'n lang wit baard.", exampleEn: "Grandpa has a long white beard.", pos: "n", pron: "bahrt" },
    { id: "u21-v013", af: "snor", en: "moustache", altEn: ["mustache"], exampleAf: "My oom het 'n groot snor.", exampleEn: "My uncle has a big moustache.", pos: "n", pron: "snawr" },
    { id: "u21-v014", af: "bril", en: "glasses / spectacles", altEn: ["glasses", "spectacles"], exampleAf: "Ek dra 'n bril om te lees.", exampleEn: "I wear glasses to read.", pos: "n", pron: "bril" },
    { id: "u21-v015", af: "glimlag", en: "smile / to smile", altEn: ["smile"], exampleAf: "Sy het 'n vriendelike glimlag.", exampleEn: "She has a friendly smile.", pos: "n", pron: "GHLIM-lugh" },
    { id: "u21-v016", af: "lengte", en: "height / length", altEn: ["height", "length"], exampleAf: "Ek en my broer is dieselfde lengte.", exampleEn: "My brother and I are the same height.", pos: "n", pron: "LENG-tuh" },
    { id: "u21-v017", af: "gewig", en: "weight", exampleAf: "Ek wil 'n bietjie gewig verloor.", exampleEn: "I want to lose a little weight.", pos: "n", pron: "ghuh-VIGH" },
    { id: "u21-v018", af: "ouderdom", en: "age", exampleAf: "Niemand ken haar regte ouderdom nie.", exampleEn: "Nobody knows her real age.", pos: "n", pron: "OH-der-dom" },
    { id: "u21-v019", af: "middeljarig", en: "middle-aged", exampleAf: "Die dokter is 'n middeljarige vrou.", exampleEn: "The doctor is a middle-aged woman.", pos: "adj", pron: "MID-del-yah-righ", clozeForm: "middeljarige" },
    { id: "u21-v020", af: "bejaard", en: "elderly", altEn: ["aged", "old"], exampleAf: "Ons help die bejaarde mense in ons straat.", exampleEn: "We help the elderly people in our street.", pos: "adj", pron: "buh-YAHRT", clozeForm: "bejaarde" },
    { id: "u21-v021", af: "tiener", en: "teenager", altEn: ["teen"], exampleAf: "My dogter is nou 'n tiener.", exampleEn: "My daughter is a teenager now.", pos: "n", pron: "TEE-ner" },
    { id: "u21-v022", af: "volwassene", en: "adult", altEn: ["grown-up"], exampleAf: "Kaartjies vir volwassenes kos meer.", exampleEn: "Tickets for adults cost more.", pos: "n", pron: "fol-VUS-suh-nuh", clozeForm: "volwassenes" },
    { id: "u21-v023", af: "aantreklik", en: "attractive", altEn: ["good-looking", "handsome"], exampleAf: "Almal dink hy is baie aantreklik.", exampleEn: "Everyone thinks he is very attractive.", pos: "adj", pron: "ahn-TREK-lik" },
    { id: "u21-v024", af: "lelik", en: "ugly", exampleAf: "Daardie ou gebou is regtig lelik.", exampleEn: "That old building is really ugly.", pos: "adj", pron: "LEE-lik" },
    { id: "u21-v025", af: "netjies", en: "neat / tidy", altEn: ["neat", "tidy"], exampleAf: "Sy lyk altyd baie netjies.", exampleEn: "She always looks very neat.", pos: "adj", pron: "NAY-kees" },
    { id: "u21-v026", af: "persoonlikheid", en: "personality", exampleAf: "Sy het 'n wonderlike persoonlikheid.", exampleEn: "She has a wonderful personality.", pos: "n", pron: "per-SOHN-lik-hayt" },
    { id: "u21-v027", af: "karakter", en: "character", exampleAf: "Hy is 'n man van goeie karakter.", exampleEn: "He is a man of good character.", pos: "n", pron: "kuh-RUK-ter" },
    { id: "u21-v028", af: "gaaf", en: "nice / kind", altEn: ["nice", "kind", "pleasant"], exampleAf: "Ons nuwe bure is baie gaaf.", exampleEn: "Our new neighbours are very nice.", pos: "adj", pron: "ghahf" },
    { id: "u21-v029", af: "dapper", en: "brave", altEn: ["courageous"], exampleAf: "Die dapper seun het die kind gered.", exampleEn: "The brave boy saved the child.", pos: "adj", pron: "DUP-per" },
    { id: "u21-v030", af: "beskeie", en: "modest / humble", altEn: ["modest", "humble"], exampleAf: "Sy is slim, maar baie beskeie.", exampleEn: "She is clever, but very modest.", pos: "adj", pron: "buh-SKAY-uh" },
    { id: "u21-v031", af: "hardkoppig", en: "stubborn", altEn: ["headstrong"], exampleAf: "My pa is vreeslik hardkoppig.", exampleEn: "My dad is terribly stubborn.", pos: "adj", pron: "hart-KOP-pigh" },
    { id: "u21-v032", af: "vrygewig", en: "generous", exampleAf: "Ouma is vrygewig met haar tyd.", exampleEn: "Grandma is generous with her time.", pos: "adj", pron: "fray-GHEE-vigh" },
    { id: "u21-v033", af: "suinig", en: "stingy", altEn: ["mean", "miserly", "tight-fisted"], exampleAf: "Hy is ryk, maar baie suinig.", exampleEn: "He is rich, but very stingy.", pos: "adj", pron: "SAY-nigh" },
    { id: "u21-v034", af: "selfsugtig", en: "selfish", exampleAf: "Moenie so selfsugtig wees nie!", exampleEn: "Don't be so selfish!", pos: "adj", pron: "self-SUGH-tigh" },
    { id: "u21-v035", af: "vrolik", en: "cheerful", altEn: ["merry", "jolly"], exampleAf: "Sy is soggens altyd vrolik.", exampleEn: "She is always cheerful in the mornings.", pos: "adj", pron: "FROH-lik" },
    { id: "u21-v036", af: "stil", en: "quiet", altEn: ["silent", "still"], exampleAf: "Hy is 'n stil, skaam kind.", exampleEn: "He is a quiet, shy child.", pos: "adj", pron: "stil" },
    { id: "u21-v037", af: "spraaksaam", en: "talkative", altEn: ["chatty"], exampleAf: "My tannie is baie spraaksaam.", exampleEn: "My aunt is very talkative.", pos: "adj", pron: "SPRAHK-sahm" },
    { id: "u21-v038", af: "lewendig", en: "lively", altEn: ["alive"], exampleAf: "Die kinders is vandag baie lewendig.", exampleEn: "The children are very lively today.", pos: "adj", pron: "luh-VEN-digh" },
    { id: "u21-v039", af: "betroubaar", en: "reliable", altEn: ["trustworthy", "dependable"], exampleAf: "Sy is eerlik en betroubaar.", exampleEn: "She is honest and reliable.", pos: "adj", pron: "buh-TROH-bahr" },
    { id: "u21-v040", af: "selfversekerd", en: "confident", altEn: ["self-assured", "self-confident"], exampleAf: "Hy praat selfversekerd voor die klas.", exampleEn: "He speaks confidently in front of the class.", pos: "adj", pron: "self-fer-SEE-kert" },
    { id: "u21-v041", af: "dom", en: "stupid / silly", altEn: ["stupid", "silly", "dumb"], exampleAf: "Dit was 'n dom idee.", exampleEn: "That was a stupid idea.", pos: "adj", pron: "dom" },
    { id: "u21-v042", af: "stout", en: "naughty", exampleAf: "Die kinders was vandag baie stout.", exampleEn: "The children were very naughty today.", pos: "adj", pron: "stoht" },
    { id: "u21-v043", af: "bekend", en: "familiar / well-known", altEn: ["familiar", "well-known", "known"], exampleAf: "Sy gesig lyk vir my bekend.", exampleEn: "His face looks familiar to me.", pos: "adj", pron: "buh-KENT" },
    { id: "u21-v044", af: "vreemd", en: "strange", altEn: ["odd", "foreign", "unfamiliar"], exampleAf: "Hy dra altyd vreemde klere.", exampleEn: "He always wears strange clothes.", pos: "adj", pron: "free-umt", clozeForm: "vreemde" },
    { id: "u21-v045", af: "gewoon", en: "ordinary", altEn: ["normal", "common", "usual"], exampleAf: "Ek is net 'n gewone mens.", exampleEn: "I am just an ordinary person.", pos: "adj", pron: "ghuh-VOHN", clozeForm: "gewone" },
    { id: "u21-v046", af: "lyf", en: "body", exampleAf: "My hele lyf is seer na die wedstryd.", exampleEn: "My whole body is sore after the match.", pos: "n", pron: "layf" },
    { id: "u21-v047", af: "wang", en: "cheek", exampleAf: "Die baba het rooi wange.", exampleEn: "The baby has red cheeks.", pos: "n", pron: "vung", clozeForm: "wange" },
    { id: "u21-v048", af: "plooi", en: "wrinkle", altEn: ["crease", "fold"], exampleAf: "Ouma het plooie om haar oë.", exampleEn: "Grandma has wrinkles around her eyes.", pos: "n", pron: "ploy", clozeForm: "plooie" },
    { id: "u21-v049", af: "herken", en: "to recognise", altEn: ["recognise", "recognize"], exampleAf: "Ek het jou nie dadelik herken nie.", exampleEn: "I didn't recognise you straight away.", pos: "v", pron: "her-KEN" },
    { id: "u21-v050", af: "sproet", en: "freckle", exampleAf: "Sy het sproete op haar neus.", exampleEn: "She has freckles on her nose.", pos: "n", pron: "sproot", clozeForm: "sproete" },
  ],
  phrases: [
    { id: "u21-p01", af: "Hoe lyk hy?", en: "What does he look like?" },
    { id: "u21-p02", af: "Sy lyk net soos haar ma.", en: "She looks just like her mother." },
    { id: "u21-p03", af: "Hy is omtrent veertig jaar oud.", en: "He is about forty years old." },
    { id: "u21-p04", af: "Sy het blou oë en bruin hare.", en: "She has blue eyes and brown hair." },
    { id: "u21-p05", af: "Hy is kort en sterk gebou.", en: "He is short and strongly built." },
    { id: "u21-p06", af: "Watter soort mens is sy?", en: "What kind of person is she?" },
    { id: "u21-p07", af: "Sy het 'n hart van goud.", en: "She has a heart of gold." },
    { id: "u21-p08", af: "Hy lyk jonk vir sy ouderdom.", en: "He looks young for his age." },
    { id: "u21-p09", af: "Jy het niks verander nie!", en: "You haven't changed a bit!" },
    { id: "u21-p10", af: "Ek het jou amper nie herken nie.", en: "I almost didn't recognise you." },
  ],
  grammar: {
    id: "u21-g01",
    title: "The adjective -e, properly",
    body: `You already know the basic idea: an adjective **before** a noun sometimes takes **-e** (*'n vriendelike man*), and an adjective **after** the noun never does (*die man is vriendelik*). Here is how to know when — and what happens to the spelling.

**1. Long adjectives take -e.** Two or more syllables? Add -e before a noun:

- *aantreklik → 'n **aantreklike** man*
- *selfsugtig → **selfsugtige** mense*
- *betroubaar → 'n **betroubare** vriend* (the long *aa* loses a letter, as always in an open syllable)

Except those ending in **-er** or **-el**, which stay as they are: *'n **dapper** seun, **lekker** kos, 'n **donker** kamer, 'n **maer** hond*.

**2. Most short adjectives stay bare.** *'n **mooi** vrou, 'n **groot** man, 'n **stil** kind, **vet** katte, 'n **dom** idee.*

**3. But short adjectives ending in -d, -f or -g do take -e — and change shape:**

- **-d:** *goed → **goeie***, *koud → **koue***, *oud → **ou***, *breed → **breë***, but simply *blond → **blonde***, *vreemd → **vreemde***, *hard → **harde***
- **-f becomes -w-:** *gaaf → **gawe***, *doof → **dowe***, *styf → **stywe***, *lief → **liewe***
- **-g disappears after a long vowel:** *droog → **droë***, *hoog → **hoë***, *laag → **lae***, *moeg → **moeë***, *vroeg → **vroeë***
- **-g gets -te after a short vowel:** *sag → **sagte***, *sleg → **slegte***, *reg → **regte***, *lig → **ligte***

**4. Three you simply learn:** *nuut → **nuwe***, *lank → **lang***, *jonk → **jong***.

**5. An extra -e for feeling.** A short adjective can take -e when it is emotional or figurative rather than literal: *'n **arm** man* has no money, but *die **arme** man!* is "the poor thing!". *Groot* normally stays *groot* — but you will hear ***Grote** genade!* (Good gracious!).`,
    examples: [
      { af: "Die brood is droog. Ek eet nie droë brood nie.", en: "The bread is dry. I don't eat dry bread." },
      { af: "Hy is 'n gawe man met 'n goeie hart.", en: "He is a nice man with a good heart." },
      { af: "Sy het lang hare en 'n nuwe bril.", en: "She has long hair and new glasses." },
      { af: "Die arme kind het 'n slegte dag gehad.", en: "The poor child had a bad day." },
    ],
  },
  cloze: [
    { id: "u21-c01", textAf: "Ons nuwe buurman is 'n baie {{gawe}} man.", answer: "gawe", distractors: ["gaaf", "gaafe"], en: "Our new neighbour is a very nice man." },
    { id: "u21-c02", textAf: "Sy het gister 'n {{nuwe}} bril gekoop.", answer: "nuwe", distractors: ["nuut", "nuute"], en: "She bought new glasses yesterday." },
    { id: "u21-c03", textAf: "Dankie vir die {{goeie}} raad.", answer: "goeie", distractors: ["goed", "goede"], en: "Thanks for the good advice." },
    { id: "u21-c04", textAf: "Trek 'n {{droë}} hemp aan; hierdie een is nat.", answer: "droë", distractors: ["droog", "droge"], en: "Put on a dry shirt; this one is wet." },
    { id: "u21-c05", textAf: "Dit is 'n {{mooi}} foto van jou.", answer: "mooi", distractors: ["mooie", "mooiste"], en: "That is a nice photo of you." },
    { id: "u21-c06", textAf: "My oupa is 'n {{ou}} man met 'n lang baard.", answer: "ou", distractors: ["oud", "oue"], en: "My grandpa is an old man with a long beard." },
    { id: "u21-c07", textAf: "Ek het jou nie dadelik {{herken}} nie.", answer: "herken", distractors: ["beskryf", "glimlag"], en: "I didn't recognise you straight away." },
    { id: "u21-c08", textAf: "Hy deel niks nie; hy is baie {{suinig}}.", answer: "suinig", distractors: ["vrygewig", "bejaard"], en: "He shares nothing; he is very stingy." },
  ],
  dialogue: {
    id: "u21-d01",
    title: "Hoe lyk jou broer?",
    titleEn: "What does your brother look like?",
    lines: [
      { speaker: "Lina", af: "Ek moet jou broer by die lughawe gaan haal. Hoe lyk hy?", en: "I have to go and fetch your brother at the airport. What does he look like?", glosses: { haal: "fetch" } },
      { speaker: "Ruan", af: "Hy is lank en skraal, met kort blonde hare.", en: "He is tall and slim, with short blond hair." },
      { speaker: "Lina", af: "Dra hy 'n bril?", en: "Does he wear glasses?" },
      { speaker: "Ruan", af: "Ja, 'n groot swart bril. En hy het deesdae 'n baard.", en: "Yes, big black glasses. And he has a beard these days.", glosses: { swart: "black", deesdae: "these days" } },
      { speaker: "Lina", af: "'n Lang baard?", en: "A long beard?", glosses: { lang: "long (before a noun)" } },
      { speaker: "Ruan", af: "Nee, 'n kort, netjiese baard. Hy het ook sproete op sy neus.", en: "No, a short, neat beard. He also has freckles on his nose.", glosses: { netjiese: "neat (before a noun)" } },
      { speaker: "Lina", af: "Hoe oud is hy? Is hy nog 'n tiener?", en: "How old is he? Is he still a teenager?" },
      { speaker: "Ruan", af: "Nee wat, hy is al dertig! Maar hy lyk jonk vir sy ouderdom.", en: "Not at all, he is already thirty! But he looks young for his age." },
      { speaker: "Lina", af: "En sy persoonlikheid? Is hy stil soos jy?", en: "And his personality? Is he quiet like you?" },
      { speaker: "Ruan", af: "Glad nie! Hy is vrolik en baie spraaksaam. Jy sal hom dadelik herken.", en: "Not at all! He is cheerful and very talkative. You will recognise him immediately." },
      { speaker: "Lina", af: "Hoe so?", en: "How so?" },
      { speaker: "Ruan", af: "Hy is die man met die groot glimlag wat met vreemde mense gesels.", en: "He is the man with the big smile who chats to strangers." },
      { speaker: "Lina", af: "Goed. 'n Lang, vrolike man met 'n baard. Ek sal hom kry!", en: "Good. A tall, cheerful man with a beard. I will find him!", glosses: { vrolike: "cheerful (before a noun)" } },
    ],
    questions: [
      {
        q: "What is Ruan's brother's hair like?",
        options: ["Long and curly", "Short and blond", "He is bald"],
        correct: 1,
      },
      {
        q: "How old is the brother?",
        options: ["He is a teenager", "Thirty", "Middle-aged"],
        correct: 1,
      },
      {
        q: "How will Lina recognise him?",
        options: ["He is quiet and shy", "He wears a red hat", "He has a big smile and chats to strangers"],
        correct: 2,
      },
    ],
  },
};
