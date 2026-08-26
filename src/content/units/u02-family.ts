import type { Unit } from "../types";

export const unit: Unit = {
  id: "u02",
  title: "People & family",
  titleAf: "Mense en familie",
  week: 2,
  cefr: "A1",
  description: "Talk about your family, who you live with, and what's yours.",
  vocab: [
    { id: "u02-v001", af: "ma", en: "mother / mom", altEn: ["mother", "mom", "mum"], exampleAf: "My ma woon in Pretoria.", exampleEn: "My mother lives in Pretoria.", pos: "n", pron: "mah" },
    { id: "u02-v002", af: "pa", en: "father / dad", altEn: ["father", "dad"], exampleAf: "My pa werk baie hard.", exampleEn: "My father works very hard.", pos: "n", pron: "pah" },
    { id: "u02-v003", af: "ouma", en: "grandmother", altEn: ["grandma", "granny"], exampleAf: "Ouma maak die beste koekies.", exampleEn: "Grandma makes the best cookies.", pos: "n", pron: "OH-mah", clozeForm: "Ouma" },
    { id: "u02-v004", af: "oupa", en: "grandfather", altEn: ["grandpa"], exampleAf: "My oupa is tagtig jaar oud.", exampleEn: "My grandfather is eighty years old.", pos: "n", pron: "OH-pah" },
    { id: "u02-v005", af: "broer", en: "brother", exampleAf: "My broer is ouer as ek.", exampleEn: "My brother is older than me.", pos: "n", pron: "broor" },
    { id: "u02-v006", af: "suster", en: "sister", altAf: ["sus"], exampleAf: "My suster bly in Johannesburg.", exampleEn: "My sister lives in Johannesburg.", pos: "n", pron: "SUS-ter" },
    { id: "u02-v007", af: "seun", en: "son / boy", altEn: ["son", "boy"], exampleAf: "Hulle seun is baie slim.", exampleEn: "Their son is very clever.", pos: "n", pron: "see-un" },
    { id: "u02-v008", af: "dogter", en: "daughter / girl", altEn: ["daughter", "girl"], exampleAf: "My dogter speel buite.", exampleEn: "My daughter is playing outside.", pos: "n", pron: "DOGH-ter" },
    { id: "u02-v009", af: "kind", en: "child", exampleAf: "Die kind slaap nou.", exampleEn: "The child is sleeping now.", pos: "n", pron: "kint" },
    { id: "u02-v010", af: "kinders", en: "children", exampleAf: "Die kinders speel in die tuin.", exampleEn: "The children are playing in the garden.", pos: "n", pron: "KIN-ners" },
    { id: "u02-v011", af: "baba", en: "baby", exampleAf: "Die baba huil snags.", exampleEn: "The baby cries at night.", pos: "n", pron: "BAH-bah" },
    { id: "u02-v012", af: "man", en: "man / husband", altEn: ["man", "husband"], exampleAf: "Haar man werk in die stad.", exampleEn: "Her husband works in the city.", pos: "n", pron: "mun" },
    { id: "u02-v013", af: "vrou", en: "woman / wife", altEn: ["woman", "wife"], exampleAf: "Sy vrou is 'n dokter.", exampleEn: "His wife is a doctor.", pos: "n", pron: "froh" },
    { id: "u02-v014", af: "familie", en: "family (extended)", altEn: ["family"], exampleAf: "My hele familie woon in Suid-Afrika.", exampleEn: "My whole family lives in South Africa.", pos: "n", pron: "fah-MEE-lee" },
    { id: "u02-v015", af: "gesin", en: "family (household)", altEn: ["family"], exampleAf: "Ons gesin eet saans saam.", exampleEn: "Our family eats together in the evenings.", pos: "n", pron: "ghuh-SIN" },
    { id: "u02-v016", af: "oom", en: "uncle", exampleAf: "Oom Piet kom Sondag kuier.", exampleEn: "Uncle Piet is coming to visit on Sunday.", pos: "n", pron: "oh-um", clozeForm: "Oom" },
    { id: "u02-v017", af: "tannie", en: "aunt / auntie", altEn: ["aunt", "auntie"], exampleAf: "Tannie Sarie woon langsaan.", exampleEn: "Auntie Sarie lives next door.", pos: "n", pron: "TUH-nee", clozeForm: "Tannie" },
    { id: "u02-v018", af: "neef", en: "cousin (male) / nephew", altEn: ["cousin", "nephew"], exampleAf: "My neef studeer in Stellenbosch.", exampleEn: "My cousin studies in Stellenbosch.", pos: "n", pron: "nee-uf" },
    { id: "u02-v019", af: "niggie", en: "cousin (female) / niece", altEn: ["cousin", "niece"], exampleAf: "My niggie is net so oud soos ek.", exampleEn: "My cousin is just as old as I am.", pos: "n", pron: "NI-ghee" },
    { id: "u02-v020", af: "ouers", en: "parents", exampleAf: "My ouers is getroud vir dertig jaar.", exampleEn: "My parents have been married for thirty years.", pos: "n", pron: "OH-ers" },
    { id: "u02-v021", af: "mense", en: "people", exampleAf: "Die mense hier is vriendelik.", exampleEn: "The people here are friendly.", pos: "n", pron: "MEN-suh" },
    { id: "u02-v022", af: "vriendin", en: "friend (female)", altEn: ["girlfriend", "friend"], exampleAf: "My vriendin help my met Afrikaans.", exampleEn: "My friend helps me with Afrikaans.", pos: "n", pron: "freen-DIN" },
    { id: "u02-v023", af: "bure", en: "neighbours", altEn: ["neighbors"], exampleAf: "Ons bure het twee honde.", exampleEn: "Our neighbours have two dogs.", pos: "n", pron: "BEW-ruh" },
    { id: "u02-v024", af: "hond", en: "dog", exampleAf: "Die hond speel met die kinders.", exampleEn: "The dog is playing with the children.", pos: "n", pron: "hont" },
    { id: "u02-v025", af: "kat", en: "cat", exampleAf: "Die kat slaap op my bed.", exampleEn: "The cat is sleeping on my bed.", pos: "n", pron: "kut" },
    { id: "u02-v026", af: "het", en: "to have", altEn: ["have", "has"], exampleAf: "Ek het twee broers.", exampleEn: "I have two brothers.", pos: "v", pron: "het" },
    { id: "u02-v027", af: "woon", en: "to live (reside)", altEn: ["live", "reside"], exampleAf: "Waar woon jy?", exampleEn: "Where do you live?", pos: "v", pron: "vohn" },
    { id: "u02-v028", af: "bly", en: "to stay / live", altEn: ["stay", "live", "remain"], exampleAf: "Ons bly naby die see.", exampleEn: "We live near the sea.", pos: "v", pron: "blay" },
    { id: "u02-v029", af: "werk", en: "to work", altEn: ["work"], exampleAf: "Sy werk by 'n skool.", exampleEn: "She works at a school.", pos: "v", pron: "verk" },
    { id: "u02-v030", af: "leer", en: "to learn / teach", altEn: ["learn", "teach"], exampleAf: "Ek leer elke dag Afrikaans.", exampleEn: "I learn Afrikaans every day.", pos: "v", pron: "lee-ur" },
    { id: "u02-v031", af: "speel", en: "to play", altEn: ["play"], exampleAf: "Die kinders speel sokker.", exampleEn: "The children are playing soccer.", pos: "v", pron: "spee-ul" },
    { id: "u02-v032", af: "lyk", en: "to look / seem", altEn: ["look", "seem", "appear"], exampleAf: "Jy lyk soos jou pa.", exampleEn: "You look like your father.", pos: "v", pron: "layk" },
    { id: "u02-v033", af: "oud", en: "old", exampleAf: "Hoe oud is jy?", exampleEn: "How old are you?", pos: "adj", pron: "oht" },
    { id: "u02-v034", af: "jonk", en: "young", exampleAf: "My suster is nog jonk.", exampleEn: "My sister is still young.", pos: "adj", pron: "yonk" },
    { id: "u02-v035", af: "groot", en: "big / large", altEn: ["big", "large", "great"], exampleAf: "Hulle het 'n groot gesin.", exampleEn: "They have a big family.", pos: "adj", pron: "ghroht" },
    { id: "u02-v036", af: "klein", en: "small / little", altEn: ["small", "little"], exampleAf: "Die baba is nog klein.", exampleEn: "The baby is still small.", pos: "adj", pron: "klayn" },
    { id: "u02-v037", af: "lank", en: "tall / long", altEn: ["tall", "long"], exampleAf: "My broer is baie lank.", exampleEn: "My brother is very tall.", pos: "adj", pron: "lunk" },
    { id: "u02-v038", af: "kort", en: "short", exampleAf: "Sy hare is kort.", exampleEn: "His hair is short.", pos: "adj", pron: "kort" },
    { id: "u02-v039", af: "gelukkig", en: "happy / lucky", altEn: ["happy", "lucky"], exampleAf: "Ons is 'n gelukkige gesin.", exampleEn: "We are a happy family.", pos: "adj", pron: "ghuh-LUH-kigh", clozeForm: "gelukkige" },
    { id: "u02-v040", af: "hartseer", en: "sad", exampleAf: "Moenie hartseer wees nie.", exampleEn: "Don't be sad.", pos: "adj", pron: "HART-see-ur" },
    { id: "u02-v041", af: "slim", en: "clever / smart", altEn: ["clever", "smart"], exampleAf: "My dogter is baie slim.", exampleEn: "My daughter is very clever.", pos: "adj", pron: "slim" },
    { id: "u02-v042", af: "getroud", en: "married", exampleAf: "Hulle is tien jaar getroud.", exampleEn: "They have been married for ten years.", pos: "adj", pron: "ghuh-TROHT" },
    { id: "u02-v043", af: "lief", en: "dear / loving", altEn: ["dear", "sweet", "loving"], exampleAf: "Sy is baie lief vir haar ouma.", exampleEn: "She loves her grandmother very much.", pos: "adj", pron: "leef" },
    { id: "u02-v044", af: "huis", en: "house / home", altEn: ["house", "home"], exampleAf: "Ons huis het 'n groot tuin.", exampleEn: "Our house has a big garden.", pos: "n", pron: "hays" },
    { id: "u02-v045", af: "jaar", en: "year", exampleAf: "My seun is vyf jaar oud.", exampleEn: "My son is five years old.", pos: "n", pron: "yahr" },
    { id: "u02-v046", af: "ook", en: "also / too", altEn: ["also", "too"], exampleAf: "Ek is ook honger.", exampleEn: "I am also hungry.", pos: "adv", pron: "oh-uk" },
    { id: "u02-v047", af: "julle", en: "you (plural)", altEn: ["you all", "your (plural)"], exampleAf: "Waar woon julle?", exampleEn: "Where do you all live?", pos: "pron", pron: "YUH-luh" },
    { id: "u02-v048", af: "haar", en: "her", altEn: ["her / hair"], exampleAf: "Haar naam is Lerato.", exampleEn: "Her name is Lerato.", pos: "pron", pron: "hahr", clozeForm: "Haar" },
    { id: "u02-v049", af: "hom", en: "him", exampleAf: "Ek ken hom goed.", exampleEn: "I know him well.", pos: "pron", pron: "hom" },
    { id: "u02-v050", af: "se", en: "'s (possessive)", altEn: ["of (possessive)"], exampleAf: "Dit is Anna se boek.", exampleEn: "That is Anna's book.", pos: "prep", pron: "suh" },
  ],
  phrases: [
    { id: "u02-p01", af: "Ek het twee broers en een suster.", en: "I have two brothers and one sister." },
    { id: "u02-p02", af: "Hoe oud is jy?", en: "How old are you?" },
    { id: "u02-p03", af: "Ek is dertig jaar oud.", en: "I am thirty years old." },
    { id: "u02-p04", af: "Is jy getroud?", en: "Are you married?" },
    { id: "u02-p05", af: "Ek is lief vir jou.", en: "I love you." },
    { id: "u02-p06", af: "Waar woon jou familie?", en: "Where does your family live?" },
    { id: "u02-p07", af: "Ons woon saam met my ouers.", en: "We live with my parents." },
    { id: "u02-p08", af: "Het jy kinders?", en: "Do you have children?" },
    { id: "u02-p09", af: "Dit is my vrou se suster.", en: "That is my wife's sister." },
    { id: "u02-p10", af: "Julle het 'n pragtige gesin.", en: "You have a beautiful family." },
  ],
  grammar: {
    id: "u02-g01",
    title: "Whose is it? Possession & plurals",
    body: `Possessive words look a lot like English, and none of them ever change form:

- *my* (my), *jou* (your), *sy* (his), *haar* (her)
- *ons* (our), *julle* (your, plural), *hulle* (their)

Careful: ***sy*** means both **she** and **his** — context tells you which. *Sy is moeg* (she is tired) vs *sy boek* (his book).

For names and nouns, Afrikaans uses ***se*** where English uses **'s**:

- *Anna **se** boek* — Anna's book
- *my pa **se** kar* — my dad's car

**Plurals** usually add **-e** or **-s**:

- **-e** is the default: *huis → huise*, *boek → boeke*, *vriend → vriende*
- **-s** after -er, -el, and family words: *suster → susters*, *ouer → ouers*, *ma → ma's*
- A few are irregular: *kind → kinders* (child → children)`,
    examples: [
      { af: "Dit is my ma se huis.", en: "This is my mother's house." },
      { af: "Ons bure se kinders speel buite.", en: "Our neighbours' children are playing outside." },
      { af: "Sy suster het twee katte.", en: "His sister has two cats." },
    ],
  },
  cloze: [
    { id: "u02-c01", textAf: "Dit is Anna {{se}} boek.", answer: "se", distractors: ["sy", "haar"], en: "That is Anna's book." },
    { id: "u02-c02", textAf: "Ek {{het}} twee broers.", answer: "het", distractors: ["is", "ken"], en: "I have two brothers." },
    { id: "u02-c03", textAf: "Die {{kinders}} speel in die tuin.", answer: "kinders", distractors: ["kinds", "kindere"], en: "The children are playing in the garden." },
    { id: "u02-c04", textAf: "Hoe {{oud}} is jou seun?", answer: "oud", distractors: ["jonk", "lank"], en: "How old is your son?" },
    { id: "u02-c05", textAf: "{{Haar}} man werk in die stad.", answer: "Haar", distractors: ["Hom", "Hulle"], en: "Her husband works in the city." },
    { id: "u02-c06", textAf: "Waar {{woon}} julle?", answer: "woon", distractors: ["werk", "lyk"], en: "Where do you all live?" },
    { id: "u02-c07", textAf: "My suster is {{lief}} vir haar kat.", answer: "lief", distractors: ["lekker", "mooi"], en: "My sister loves her cat." },
    { id: "u02-c08", textAf: "Ons het twee {{honde}}.", answer: "honde", distractors: ["honds", "hond"], en: "We have two dogs." },
  ],
  dialogue: {
    id: "u02-d01",
    title: "Die familiefoto",
    titleEn: "The family photo",
    lines: [
      { speaker: "Pieter", af: "Wie is die mense op die foto?", en: "Who are the people in the photo?", glosses: { foto: "photo" } },
      { speaker: "Thandi", af: "Dit is my gesin. Hier is my ma en my pa.", en: "This is my family. Here are my mom and my dad." },
      { speaker: "Pieter", af: "En wie is die lang man?", en: "And who is the tall man?", glosses: { lang: "tall (before a noun)" } },
      { speaker: "Thandi", af: "Dit is my broer Sipho. Hy woon in Durban.", en: "That is my brother Sipho. He lives in Durban." },
      { speaker: "Pieter", af: "Het jy ook susters?", en: "Do you also have sisters?", glosses: { susters: "sisters" } },
      { speaker: "Thandi", af: "Ja, een suster. Sy is getroud en het twee kinders.", en: "Yes, one sister. She is married and has two children." },
      { speaker: "Pieter", af: "Jou familie lyk baie gelukkig.", en: "Your family looks very happy." },
      { speaker: "Thandi", af: "Dankie! Ons is 'n groot, gelukkige familie.", en: "Thanks! We are a big, happy family.", glosses: { gelukkige: "happy" } },
    ],
    questions: [
      {
        q: "Where does Thandi's brother live?",
        options: ["Pretoria", "Durban", "Cape Town"],
        correct: 1,
      },
      {
        q: "How many children does Thandi's sister have?",
        options: ["None", "One", "Two"],
        correct: 2,
      },
    ],
  },
};
