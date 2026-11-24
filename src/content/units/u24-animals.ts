import type { Unit } from "../types";

export const unit: Unit = {
  id: "u24",
  title: "Animals & the farm",
  titleAf: "Diere en die plaas",
  week: 20,
  cefr: "B1",
  description: "Pets, farm animals and wildlife — and how to say what is happening right now.",
  vocab: [
    { id: "u24-v001", af: "troeteldier", en: "pet", exampleAf: "Het julle 'n troeteldier by die huis?", exampleEn: "Do you have a pet at home?", pos: "n", pron: "TROO-tel-deer" },
    { id: "u24-v002", af: "koei", en: "cow", exampleAf: "Die koei gee elke dag melk.", exampleEn: "The cow gives milk every day.", pos: "n", pron: "KOO-ee" },
    { id: "u24-v003", af: "bees", en: "head of cattle (plural: cattle)", altEn: ["cattle", "ox", "cow", "head of cattle"], exampleAf: "Die boer het honderd beeste.", exampleEn: "The farmer has a hundred cattle.", pos: "n", pron: "bee-us", clozeForm: "beeste" },
    { id: "u24-v004", af: "kalf", en: "calf", exampleAf: "Die kalf drink by sy ma.", exampleEn: "The calf is drinking from its mother.", pos: "n", pron: "kulf" },
    { id: "u24-v005", af: "skaap", en: "sheep", exampleAf: "Daar is baie skape in die Karoo.", exampleEn: "There are many sheep in the Karoo.", pos: "n", pron: "skahp", clozeForm: "skape" },
    { id: "u24-v006", af: "lam", en: "lamb", exampleAf: "Die klein lam soek sy ma.", exampleEn: "The little lamb is looking for its mother.", pos: "n", pron: "lum" },
    { id: "u24-v007", af: "bok", en: "goat / buck", altEn: ["goat", "buck", "antelope"], exampleAf: "Die bok eet al my blomme op!", exampleEn: "The goat is eating up all my flowers!", pos: "n", pron: "bok" },
    { id: "u24-v008", af: "vark", en: "pig", exampleAf: "Ons boer met varke en hoenders.", exampleEn: "We farm with pigs and chickens.", pos: "n", pron: "fark", clozeForm: "varke" },
    { id: "u24-v009", af: "perd", en: "horse", exampleAf: "Sy ry elke naweek perd.", exampleEn: "She rides a horse every weekend.", pos: "n", pron: "pairt" },
    { id: "u24-v010", af: "donkie", en: "donkey", exampleAf: "Die donkie trek 'n swaar kar.", exampleEn: "The donkey is pulling a heavy cart.", pos: "n", pron: "DONG-kee" },
    { id: "u24-v011", af: "eend", en: "duck", exampleAf: "Die eende swem op die dam.", exampleEn: "The ducks are swimming on the dam.", pos: "n", pron: "ee-unt", clozeForm: "eende" },
    { id: "u24-v012", af: "haan", en: "rooster / cock", altEn: ["rooster", "cock", "cockerel"], exampleAf: "Die haan maak ons vroeg wakker.", exampleEn: "The rooster wakes us up early.", pos: "n", pron: "hahn" },
    { id: "u24-v013", af: "hen", en: "hen", exampleAf: "Die hen lê elke dag 'n eier.", exampleEn: "The hen lays an egg every day.", pos: "n", pron: "hen" },
    { id: "u24-v014", af: "kuiken", en: "chick", exampleAf: "Die hen het ses klein kuikens.", exampleEn: "The hen has six little chicks.", pos: "n", pron: "KAY-ken", clozeForm: "kuikens" },
    { id: "u24-v015", af: "konyn", en: "rabbit", altEn: ["bunny"], exampleAf: "My dogter wil 'n konyn hê.", exampleEn: "My daughter wants a rabbit.", pos: "n", pron: "koh-NAYN" },
    { id: "u24-v016", af: "muis", en: "mouse", exampleAf: "Die kat het 'n muis gevang.", exampleEn: "The cat caught a mouse.", pos: "n", pron: "mays" },
    { id: "u24-v017", af: "spinnekop", en: "spider", exampleAf: "Daar is 'n spinnekop in die bad!", exampleEn: "There is a spider in the bath!", pos: "n", pron: "SPIN-nuh-kop" },
    { id: "u24-v018", af: "muskiet", en: "mosquito", exampleAf: "Die muskiete byt my elke nag.", exampleEn: "The mosquitoes bite me every night.", pos: "n", pron: "mus-KEET", clozeForm: "muskiete" },
    { id: "u24-v019", af: "skoenlapper", en: "butterfly", exampleAf: "'n Skoenlapper sit op die blom.", exampleEn: "A butterfly is sitting on the flower.", pos: "n", pron: "SKOON-lup-per", clozeForm: "Skoenlapper" },
    { id: "u24-v020", af: "volstruis", en: "ostrich", exampleAf: "'n Volstruis kan nie vlieg nie.", exampleEn: "An ostrich cannot fly.", pos: "n", pron: "FOL-strays", clozeForm: "Volstruis" },
    { id: "u24-v021", af: "aap", en: "monkey", altEn: ["ape"], exampleAf: "Die aap sit bo in die boom.", exampleEn: "The monkey is sitting up in the tree.", pos: "n", pron: "ahp" },
    { id: "u24-v022", af: "krokodil", en: "crocodile", exampleAf: "Moenie swem nie; daar is krokodille!", exampleEn: "Don't swim; there are crocodiles!", pos: "n", pron: "kroh-koh-DIL", clozeForm: "krokodille" },
    { id: "u24-v023", af: "seekoei", en: "hippopotamus", altEn: ["hippo"], exampleAf: "Die seekoei bly die hele dag in die water.", exampleEn: "The hippo stays in the water all day.", pos: "n", pron: "SEE-uh-koo-ee" },
    { id: "u24-v024", af: "springbok", en: "springbok", exampleAf: "Die springbok is Suid-Afrika se nasionale dier.", exampleEn: "The springbok is South Africa's national animal.", pos: "n", pron: "SPRING-bok" },
    { id: "u24-v025", af: "jakkals", en: "jackal", exampleAf: "Die jakkals vang snags die boer se hoenders.", exampleEn: "The jackal catches the farmer's chickens at night.", pos: "n", pron: "YUK-kuls" },
    { id: "u24-v026", af: "haai", en: "shark", exampleAf: "Ons het 'n haai naby die strand gesien.", exampleEn: "We saw a shark near the beach.", pos: "n", pron: "hy" },
    { id: "u24-v027", af: "padda", en: "frog", altEn: ["toad"], exampleAf: "Die padda spring in die water.", exampleEn: "The frog jumps into the water.", pos: "n", pron: "PUD-duh" },
    { id: "u24-v028", af: "stert", en: "tail", exampleAf: "Die hond swaai sy stert.", exampleEn: "The dog is wagging its tail.", pos: "n", pron: "stairt" },
    { id: "u24-v029", af: "vlerk", en: "wing", exampleAf: "Die voël se vlerk is seer.", exampleEn: "The bird's wing is hurt.", pos: "n", pron: "flairk" },
    { id: "u24-v030", af: "veer", en: "feather", exampleAf: "Ek het 'n mooi veer in die tuin gekry.", exampleEn: "I found a pretty feather in the garden.", pos: "n", pron: "fee-ur" },
    { id: "u24-v031", af: "horing", en: "horn", exampleAf: "'n Renoster het 'n groot horing op sy neus.", exampleEn: "A rhino has a big horn on its nose.", pos: "n", pron: "HOH-ring" },
    { id: "u24-v032", af: "poot", en: "paw / leg (of an animal)", altEn: ["paw", "leg", "foot"], exampleAf: "Die hond se poot is seer.", exampleEn: "The dog's paw is sore.", pos: "n", pron: "poh-ut" },
    { id: "u24-v033", af: "blaf", en: "to bark", altEn: ["bark"], exampleAf: "Die bure se hond blaf die hele nag.", exampleEn: "The neighbours' dog barks all night.", pos: "v", pron: "bluf" },
    { id: "u24-v034", af: "byt", en: "to bite", altEn: ["bite"], exampleAf: "Moenie bang wees nie; hy byt nie.", exampleEn: "Don't be afraid; he doesn't bite.", pos: "v", pron: "bayt" },
    { id: "u24-v035", af: "voer", en: "to feed / animal feed", altEn: ["feed", "fodder"], exampleAf: "Ek voer die hoenders elke oggend.", exampleEn: "I feed the chickens every morning.", pos: "v", pron: "foor" },
    { id: "u24-v036", af: "wei", en: "to graze", altEn: ["graze"], exampleAf: "Die skape wei in die veld.", exampleEn: "The sheep are grazing in the veld.", pos: "v", pron: "vay" },
    { id: "u24-v037", af: "kraai", en: "to crow / a crow", altEn: ["crow"], exampleAf: "Die haan kraai vroeg in die oggend.", exampleEn: "The rooster crows early in the morning.", pos: "v", pron: "kry" },
    { id: "u24-v038", af: "mak", en: "tame", exampleAf: "Die perd is mak; jy kan hom ry.", exampleEn: "The horse is tame; you can ride him.", pos: "adj", pron: "muk" },
    { id: "u24-v039", af: "gevaarlik", en: "dangerous", exampleAf: "Daardie slang is baie gevaarlik.", exampleEn: "That snake is very dangerous.", pos: "adj", pron: "ghuh-FAHR-lik" },
    { id: "u24-v040", af: "kudde", en: "herd / flock", altEn: ["herd", "flock"], exampleAf: "Ons het 'n kudde olifante gesien.", exampleEn: "We saw a herd of elephants.", pos: "n", pron: "KUD-duh" },
    { id: "u24-v041", af: "stal", en: "stable", altEn: ["stall", "barn"], exampleAf: "Die perde slaap in die stal.", exampleEn: "The horses sleep in the stable.", pos: "n", pron: "stul" },
    { id: "u24-v042", af: "hok", en: "cage / coop / kennel", altEn: ["cage", "coop", "kennel", "pen", "hutch"], exampleAf: "Die hoenders slaap snags in die hok.", exampleEn: "The chickens sleep in the coop at night.", pos: "n", pron: "hok" },
    { id: "u24-v043", af: "kraal", en: "kraal / livestock pen", altEn: ["kraal", "pen", "corral"], exampleAf: "Die beeste is al in die kraal.", exampleEn: "The cattle are already in the kraal.", pos: "n", pron: "krahl" },
    { id: "u24-v044", af: "heining", en: "fence", exampleAf: "Die bok het oor die heining gespring.", exampleEn: "The goat jumped over the fence.", pos: "n", pron: "HAY-ning" },
    { id: "u24-v045", af: "hek", en: "gate", exampleAf: "Maak asseblief die hek agter jou toe.", exampleEn: "Please close the gate behind you.", pos: "n", pron: "hek" },
    { id: "u24-v046", af: "trekker", en: "tractor", exampleAf: "Die boer ry met sy trekker.", exampleEn: "The farmer is driving his tractor.", pos: "n", pron: "TREK-ker" },
    { id: "u24-v047", af: "oes", en: "harvest / crop", altEn: ["harvest", "crop", "to harvest"], exampleAf: "Die oes is vanjaar baie goed.", exampleEn: "The harvest is very good this year.", pos: "n", pron: "oos" },
    { id: "u24-v048", af: "dam", en: "dam", altEn: ["reservoir", "pond"], exampleAf: "Die diere drink water by die dam.", exampleEn: "The animals drink water at the dam.", pos: "n", pron: "dum" },
    { id: "u24-v049", af: "veearts", en: "vet", altEn: ["veterinarian", "veterinary surgeon"], exampleAf: "Ons moet die kat veearts toe neem.", exampleEn: "We must take the cat to the vet.", pos: "n", pron: "FEE-uh-arts" },
    { id: "u24-v050", af: "nes", en: "nest", exampleAf: "Die voël bou 'n nes in die boom.", exampleEn: "The bird is building a nest in the tree.", pos: "n", pron: "nes" },
  ],
  phrases: [
    { id: "u24-p01", af: "Het jy troeteldiere?", en: "Do you have pets?" },
    { id: "u24-p02", af: "Ek is mal oor diere.", en: "I am crazy about animals." },
    { id: "u24-p03", af: "Pasop vir die hond!", en: "Beware of the dog!" },
    { id: "u24-p04", af: "Ons hond byt nie.", en: "Our dog doesn't bite." },
    { id: "u24-p05", af: "Ek het op 'n plaas grootgeword.", en: "I grew up on a farm." },
    { id: "u24-p06", af: "Ek is besig om die diere te voer.", en: "I am busy feeding the animals." },
    { id: "u24-p07", af: "Moenie die diere voer nie.", en: "Do not feed the animals." },
    { id: "u24-p08", af: "Die koeie moet gemelk word.", en: "The cows need to be milked." },
    { id: "u24-p09", af: "Maak asseblief die hek toe.", en: "Please close the gate." },
    { id: "u24-p10", af: "Ek is so honger soos 'n wolf.", en: "I am as hungry as a wolf." },
  ],
  grammar: {
    id: "u24-g01",
    title: "Right now: besig om te, aan die, and sit en…",
    body: `Afrikaans has no "-ing" form. *Ek eet* means both "I eat" and "I am eating", and most of the time that is all you need. But when you want to stress that something is in progress **right now**, you have three natural tools.

**1. besig om te + verb** — "busy doing"

- *Ek **is besig om te** eet.* — I am (busy) eating.
- *Die boer **is besig om** die koeie **te** melk.* — The farmer is milking the cows.

Any object goes between *om* and *te*. For the past, just change *is* to *was*: *Ek **was besig om te** kook toe jy bel.*

**2. aan die + verb + wees** — short and very idiomatic

- *Die hond **is aan die blaf**.* — The dog is barking (away).
- *Ons span **is aan die wen**!* — Our team is winning!
- *Die kinders **is** al **aan die slaap**.* — The children are already asleep.

**3. sit / staan / lê / loop + en + verb** — say what position the doer is in

Afrikaans loves telling you *how* someone is placed while they do something:

- *Hy **sit en lees**.* — He is (sitting) reading.
- *Die koeie **staan en wei**.* — The cows are (standing) grazing.
- *Die kat **lê en slaap**.* — The cat is (lying) sleeping.
- *Sy **loop en sing**.* — She is singing as she walks.

In the past tense only the first verb gets *ge-*: *Ek het vir jou **gesit en wag**.* — I sat waiting for you.

Don't overuse them: for habits and plain facts, the simple verb is still best — *Ek eet elke dag ontbyt.*`,
    examples: [
      { af: "Ek is besig om die hond te was.", en: "I am busy washing the dog." },
      { af: "Die bure se hond is weer aan die blaf.", en: "The neighbours' dog is barking again." },
      { af: "Die skape staan en wei in die veld.", en: "The sheep are grazing in the veld." },
      { af: "Moenie net staan en kyk nie — help my!", en: "Don't just stand there watching — help me!" },
    ],
  },
  cloze: [
    { id: "u24-c01", textAf: "Die boer is {{besig}} om die koeie te melk.", answer: "besig", distractors: ["aan", "graag"], en: "The farmer is busy milking the cows." },
    { id: "u24-c02", textAf: "Ek is besig {{om}} die perde te voer.", answer: "om", distractors: ["en", "aan"], en: "I am busy feeding the horses." },
    { id: "u24-c03", textAf: "Die hond is al die hele nag aan {{die}} blaf.", answer: "die", distractors: ["om", "te"], en: "The dog has been barking all night." },
    { id: "u24-c04", textAf: "Die skape staan {{en}} wei in die veld.", answer: "en", distractors: ["om", "te"], en: "The sheep are standing grazing in the veld." },
    { id: "u24-c05", textAf: "Die kat {{lê}} en slaap in die son.", answer: "lê", distractors: ["is", "aan"], en: "The cat is lying asleep in the sun." },
    { id: "u24-c06", textAf: "Ons was besig om {{te}} eet toe die hond begin blaf.", answer: "te", distractors: ["en", "die"], en: "We were busy eating when the dog started barking." },
    { id: "u24-c07", textAf: "Moenie naby kom nie; daardie hond {{byt}}!", answer: "byt", distractors: ["wei", "kraai"], en: "Don't come close; that dog bites!" },
    { id: "u24-c08", textAf: "Maak die {{hek}} toe, anders loop die skape uit.", answer: "hek", distractors: ["stert", "nes"], en: "Close the gate, otherwise the sheep will walk out." },
  ],
  dialogue: {
    id: "u24-d01",
    title: "Vroegoggend op die plaas",
    titleEn: "Early morning on the farm",
    lines: [
      { speaker: "Nandi", af: "Goeiemôre, oom Willem! Wat is oom besig om te doen?", en: "Good morning, Uncle Willem! What are you busy doing?" },
      { speaker: "Oom Willem", af: "Ek is besig om die koeie te melk. Wil jy help?", en: "I am busy milking the cows. Do you want to help?", glosses: { koeie: "cows", melk: "to milk / milk" } },
      { speaker: "Nandi", af: "Ek is 'n bietjie bang. Is hulle gevaarlik?", en: "I am a little scared. Are they dangerous?" },
      { speaker: "Oom Willem", af: "Glad nie, hulle is mak. Kyk, die kalf staan en drink by sy ma.", en: "Not at all, they are tame. Look, the calf is standing drinking from its mother." },
      { speaker: "Nandi", af: "Ag, oulik! En hoekom is die hond so aan die blaf?", en: "Oh, cute! And why is the dog barking like that?", glosses: { ag: "oh" } },
      { speaker: "Oom Willem", af: "Hy het seker 'n jakkals naby die hoenderhok geruik.", en: "He probably smelled a jackal near the chicken coop.", glosses: { hoenderhok: "chicken coop", geruik: "smelled" } },
      { speaker: "Nandi", af: "Vang die jakkals die hoenders?", en: "Does the jackal catch the chickens?", glosses: { hoenders: "chickens" } },
      { speaker: "Oom Willem", af: "Ja, as ons vergeet om die hok toe te maak.", en: "Yes, if we forget to close the coop." },
      { speaker: "Nandi", af: "En waar is die skape?", en: "And where are the sheep?" },
      { speaker: "Oom Willem", af: "Hulle loop en wei daar in die veld, agter die heining.", en: "They are grazing over there in the veld, behind the fence." },
      { speaker: "Nandi", af: "En die ou haan? Hy het my vanoggend vroeg wakker gemaak!", en: "And the old rooster? He woke me up early this morning!", glosses: { ou: "old (before a noun)", vanoggend: "this morning", gemaak: "made" } },
      { speaker: "Oom Willem", af: "Hy kraai elke oggend om vyfuur. Op 'n plaas slaap niemand laat nie!", en: "He crows at five o'clock every morning. On a farm nobody sleeps late!", glosses: { vyfuur: "five o'clock" } },
      { speaker: "Nandi", af: "Dan gaan ek vanaand vroeg bed toe. Kan ek nou die perde voer?", en: "Then I am going to bed early tonight. Can I feed the horses now?", glosses: { perde: "horses" } },
    ],
    questions: [
      {
        q: "What is Oom Willem busy doing when Nandi arrives?",
        options: ["Feeding the horses", "Milking the cows", "Fixing the fence"],
        correct: 1,
      },
      {
        q: "Why is the dog probably barking?",
        options: ["It smelled a jackal near the chicken coop", "It is hungry", "It saw the sheep"],
        correct: 0,
      },
      {
        q: "What time does the rooster crow?",
        options: ["Six o'clock", "Seven o'clock", "Five o'clock"],
        correct: 2,
      },
    ],
  },
};
