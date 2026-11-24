import type { Unit } from "../types";

export const unit: Unit = {
  id: "u31",
  title: "Sport & fitness",
  titleAf: "Sport en fiksheid",
  week: 27,
  cefr: "B2",
  description: "Training, match talk and the field — and how often, how well and where you do it.",
  vocab: [
    { id: "u31-v001", af: "afrigter", en: "coach", altEn: ["trainer"], exampleAf: "Die afrigter is tevrede met die span.", exampleEn: "The coach is satisfied with the team.", pos: "n", pron: "UF-righ-ter" },
    { id: "u31-v002", af: "kaptein", en: "captain", exampleAf: "Die kaptein praat met sy spelers.", exampleEn: "The captain is talking to his players.", pos: "n", pron: "kup-TAYN" },
    { id: "u31-v003", af: "skeidsregter", en: "referee / umpire", altEn: ["referee", "umpire", "ref"], exampleAf: "Die skeidsregter stop die wedstryd.", exampleEn: "The referee stops the match.", pos: "n", pron: "SKAYTS-regh-ter" },
    { id: "u31-v004", af: "fluitjie", en: "whistle", exampleAf: "Die skeidsregter blaas die fluitjie.", exampleEn: "The referee blows the whistle.", pos: "n", pron: "FLAY-kee" },
    { id: "u31-v005", af: "teenstander", en: "opponent", exampleAf: "Ons teenstanders is groot en sterk.", exampleEn: "Our opponents are big and strong.", pos: "n", pron: "TEE-un-stun-der", clozeForm: "teenstanders" },
    { id: "u31-v006", af: "ondersteuner", en: "supporter", altEn: ["fan"], exampleAf: "Die ondersteuners sing vir hulle span.", exampleEn: "The supporters are singing for their team.", pos: "n", pron: "on-der-STUR-ner", clozeForm: "ondersteuners" },
    { id: "u31-v007", af: "stadion", en: "stadium", exampleAf: "Die stadion is vol toeskouers.", exampleEn: "The stadium is full of spectators.", pos: "n", pron: "STAH-dee-on" },
    { id: "u31-v008", af: "klub", en: "club", exampleAf: "Hy speel vir die plaaslike klub.", exampleEn: "He plays for the local club.", pos: "n", pron: "klup" },
    { id: "u31-v009", af: "lid", en: "member", exampleAf: "Ek is 'n lid van die gim.", exampleEn: "I am a member of the gym.", pos: "n", pron: "lit" },
    { id: "u31-v010", af: "helfte", en: "half", exampleAf: "Die tweede helfte begin nou.", exampleEn: "The second half is starting now.", pos: "n", pron: "HELF-tuh" },
    { id: "u31-v011", af: "rustyd", en: "half-time", altEn: ["half time", "halftime"], exampleAf: "Met rustyd was die telling gelykop.", exampleEn: "At half-time the score was level.", pos: "n", pron: "RUS-tayt" },
    { id: "u31-v012", af: "skop", en: "to kick / a kick", altEn: ["kick"], exampleAf: "Hy kan die bal baie ver skop.", exampleEn: "He can kick the ball very far.", pos: "v", pron: "skawp" },
    { id: "u31-v013", af: "aangee", en: "to pass", altEn: ["pass", "hand on"], exampleAf: "Jy moet die bal vinniger aangee.", exampleEn: "You must pass the ball faster.", pos: "v", pron: "AHN-ghee-uh" },
    { id: "u31-v014", af: "duik", en: "to dive / to tackle", altEn: ["dive", "tackle"], exampleAf: "Hy duik die ander speler plat.", exampleEn: "He tackles the other player to the ground.", pos: "v", pron: "dayk" },
    { id: "u31-v015", af: "skrum", en: "scrum", exampleAf: "Ons span is sterk in die skrum.", exampleEn: "Our team is strong in the scrum.", pos: "n", pron: "skrum (u as in 'put', lips rounded)" },
    { id: "u31-v016", af: "kolf", en: "to bat / a bat", altEn: ["bat"], exampleAf: "Suid-Afrika kolf eerste.", exampleEn: "South Africa is batting first.", pos: "v", pron: "kolf" },
    { id: "u31-v017", af: "boul", en: "to bowl", altEn: ["bowl"], exampleAf: "Hy boul baie vinnig.", exampleEn: "He bowls very fast.", pos: "v", pron: "bohl" },
    { id: "u31-v018", af: "paaltjie", en: "wicket", altEn: ["stump"], exampleAf: "Hy het vandag drie paaltjies geneem.", exampleEn: "He took three wickets today.", pos: "n", pron: "PAHL-kee", clozeForm: "paaltjies" },
    { id: "u31-v019", af: "lopie", en: "run (in cricket)", altEn: ["run"], exampleAf: "Ons het nog tien lopies nodig.", exampleEn: "We need ten more runs.", pos: "n", pron: "LOH-pee", clozeForm: "lopies" },
    { id: "u31-v020", af: "klop", en: "to beat (also: to knock)", altEn: ["beat", "knock", "defeat"], exampleAf: "Ons gaan hulle Saterdag klop!", exampleEn: "We are going to beat them on Saturday!", pos: "v", pron: "klop" },
    { id: "u31-v021", af: "oorwinning", en: "victory / win", altEn: ["victory", "win"], exampleAf: "Dit was 'n groot oorwinning vir ons.", exampleEn: "It was a big win for us.", pos: "n", pron: "oo-ur-VIN-ning" },
    { id: "u31-v022", af: "kampioen", en: "champion", exampleAf: "Sy is die nuwe kampioen.", exampleEn: "She is the new champion.", pos: "n", pron: "kum-pee-OON" },
    { id: "u31-v023", af: "beker", en: "cup / trophy (also: mug)", altEn: ["cup", "trophy", "mug"], exampleAf: "Wie gaan vanjaar die beker wen?", exampleEn: "Who is going to win the cup this year?", pos: "n", pron: "BEE-ker" },
    { id: "u31-v024", af: "medalje", en: "medal", exampleAf: "Hy het 'n goue medalje gewen.", exampleEn: "He won a gold medal.", pos: "n", pron: "muh-DUL-yuh" },
    { id: "u31-v025", af: "rekord", en: "record", exampleAf: "Sy het 'n nuwe rekord opgestel.", exampleEn: "She set a new record.", pos: "n", pron: "ruh-KORT" },
    { id: "u31-v026", af: "wedloop", en: "race", exampleAf: "Sy het die wedloop maklik gewen.", exampleEn: "She won the race easily.", pos: "n", pron: "VET-loh-up" },
    { id: "u31-v027", af: "atleet", en: "athlete", exampleAf: "'n Goeie atleet oefen elke dag.", exampleEn: "A good athlete trains every day.", pos: "n", pron: "ut-LEE-ut" },
    { id: "u31-v028", af: "atletiek", en: "athletics", exampleAf: "My dogter doen atletiek by die skool.", exampleEn: "My daughter does athletics at school.", pos: "n", pron: "ut-luh-TEEK" },
    { id: "u31-v029", af: "kompeteer", en: "to compete", altEn: ["compete"], altAf: ["meeding"], exampleAf: "Sy wil eendag internasionaal kompeteer.", exampleEn: "She wants to compete internationally one day.", pos: "v", pron: "kom-puh-TEER" },
    { id: "u31-v030", af: "toerusting", en: "equipment", altEn: ["gear"], exampleAf: "Die gim het nuwe toerusting.", exampleEn: "The gym has new equipment.", pos: "n", pron: "TOO-rus-ting" },
    { id: "u31-v031", af: "asem", en: "breath", exampleAf: "Haal diep asem en ontspan.", exampleEn: "Take a deep breath and relax.", pos: "n", pron: "AH-sem" },
    { id: "u31-v032", af: "optel", en: "to lift / to pick up", altEn: ["lift", "pick up"], exampleAf: "Hy kan baie swaar gewigte optel.", exampleEn: "He can lift very heavy weights.", pos: "v", pron: "OP-tel" },
    { id: "u31-v033", af: "spier", en: "muscle", exampleAf: "Al my spiere is seer.", exampleEn: "All my muscles are sore.", pos: "n", pron: "speer", clozeForm: "spiere" },
    { id: "u31-v034", af: "sweet", en: "to sweat / sweat", altEn: ["sweat"], exampleAf: "Ek sweet baie in die gim.", exampleEn: "I sweat a lot in the gym.", pos: "v", pron: "svee-ut" },
    { id: "u31-v035", af: "strek", en: "to stretch", altEn: ["stretch"], exampleAf: "Jy moet strek voordat jy hardloop.", exampleEn: "You must stretch before you run.", pos: "v", pron: "strek" },
    { id: "u31-v036", af: "opwarm", en: "to warm up", altEn: ["warm up"], exampleAf: "Die spelers moet eers opwarm.", exampleEn: "The players must warm up first.", pos: "v", pron: "OP-vurm" },
    { id: "u31-v037", af: "buig", en: "to bend", altEn: ["bend", "bow"], exampleAf: "Jy moet jou knieë buig.", exampleEn: "You must bend your knees.", pos: "v", pron: "baygh" },
    { id: "u31-v038", af: "uithouvermoë", en: "stamina / endurance", altEn: ["stamina", "endurance"], exampleAf: "Swem is goed vir jou uithouvermoë.", exampleEn: "Swimming is good for your stamina.", pos: "n", pron: "AYT-hoh-fer-moo-uh" },
    { id: "u31-v039", af: "besering", en: "injury", exampleAf: "Hy het 'n ernstige besering.", exampleEn: "He has a serious injury.", pos: "n", pron: "buh-SEE-ring" },
    { id: "u31-v040", af: "kramp", en: "cramp", exampleAf: "Ek het 'n kramp in my been.", exampleEn: "I have a cramp in my leg.", pos: "n", pron: "krump" },
    { id: "u31-v041", af: "lenig", en: "supple / flexible", altEn: ["supple", "flexible", "lithe"], exampleAf: "Strek elke dag om lenig te bly.", exampleEn: "Stretch every day to stay supple.", pos: "adj", pron: "LEE-nigh" },
    { id: "u31-v042", af: "uitgeput", en: "exhausted", exampleAf: "Ná die wedloop was ek uitgeput.", exampleEn: "After the race I was exhausted.", pos: "adj", pron: "AYT-ghuh-put" },
    { id: "u31-v043", af: "uitasem", en: "out of breath", altEn: ["breathless"], exampleAf: "Ek is gou uitasem as ek hardloop.", exampleEn: "I get out of breath quickly when I run.", pos: "adj", pron: "AYT-ah-sem" },
    { id: "u31-v044", af: "gereeld", en: "regularly / regular", altEn: ["regularly", "regular"], exampleAf: "Ek oefen gereeld in die oggend.", exampleEn: "I exercise regularly in the morning.", pos: "adv", pron: "ghuh-REE-ult" },
    { id: "u31-v045", af: "dikwels", en: "often", exampleAf: "Ons speel dikwels saam tennis.", exampleEn: "We often play tennis together.", pos: "adv", pron: "DIK-vels" },
    { id: "u31-v046", af: "soms", en: "sometimes", altAf: ["somtyds"], exampleAf: "Ek draf soms ná werk.", exampleEn: "I sometimes jog after work.", pos: "adv", pron: "soms" },
    { id: "u31-v047", af: "nooit", en: "never", exampleAf: "Hy mis nooit 'n wedstryd nie.", exampleEn: "He never misses a match.", pos: "adv", pron: "noyt" },
    { id: "u31-v048", af: "daagliks", en: "daily", altEn: ["every day"], exampleAf: "Die span oefen daagliks.", exampleEn: "The team trains daily.", pos: "adv", pron: "DAHGH-liks" },
    { id: "u31-v049", af: "behoorlik", en: "properly", altEn: ["proper", "decently"], exampleAf: "Jy moet behoorlik eet voor 'n wedstryd.", exampleEn: "You must eat properly before a match.", pos: "adv", pron: "buh-HOOR-lik" },
    { id: "u31-v050", af: "flink", en: "briskly / energetic", altEn: ["briskly", "brisk", "energetic"], exampleAf: "Ouma stap nog elke dag flink.", exampleEn: "Grandma still walks briskly every day.", pos: "adv", pron: "flink" },
  ],
  phrases: [
    { id: "u31-p01", af: "Hoe gereeld oefen jy?", en: "How often do you exercise?", altAf: ["Hoe dikwels oefen jy?"] },
    { id: "u31-p02", af: "Ek gaan drie keer per week gim toe.", en: "I go to the gym three times a week." },
    { id: "u31-p03", af: "Wat was die eindtelling?", en: "What was the final score?" },
    { id: "u31-p04", af: "Wie speel teen wie?", en: "Who is playing whom?" },
    { id: "u31-p05", af: "Mooi skoot!", en: "Well done! / Nice shot!" },
    { id: "u31-p06", af: "Ek is heeltemal uitasem.", en: "I am completely out of breath." },
    { id: "u31-p07", af: "Ons het hulle met tien punte geklop.", en: "We beat them by ten points." },
    { id: "u31-p08", af: "Ek het 'n spier getrek.", en: "I pulled a muscle." },
    { id: "u31-p09", af: "Moenie opgee nie!", en: "Don't give up!" },
    { id: "u31-p10", af: "Sterkte vir die wedstryd!", en: "Good luck for the match!" },
  ],
  grammar: {
    id: "u31-g01",
    title: "How often, how, where — adverbs and the Time–Manner–Place rule",
    body: `**1. Adverbs cost nothing.** In Afrikaans an adjective works as an adverb just as it is — there is no "-ly" to add:

- *Sy is **vinnig**.* → *Sy hardloop **vinnig**.* — She is fast. → She runs fast.
- *Hy is 'n **goeie** speler.* → *Hy speel **goed**.* — He plays well. (No *-e* on an adverb, ever.)

**2. How often?** From always to never:

- ***altyd** → **gewoonlik** → **gereeld** → **dikwels** → **soms** → **selde** → **nooit***
- *nooit* is a negative, so it still needs its closing *nie*: *Ek draf **nooit** in die reën **nie**.*

These words go straight **after the verb** — not before it as in English:

- *Ek **draf dikwels**.* — I often jog. (Never *Ek dikwels draf*.)

**3. Time – Manner – Place.** When several details share the middle of a sentence, Afrikaans lines them up as **when → how → where**. English usually does the opposite:

- *Ek oefen **elke oggend** (when) **hard** (how) **in die gim** (where).* — I train hard in the gym every morning.

An object slips in between time and manner, and the remaining verbs wait at the end:

- *Hy het **gister** die bal **hard** **oor die pale** geskop.* — He kicked the ball hard over the posts yesterday.

South African schoolchildren learn this order as **STOMPI**: **S**ubject, verb, **T**ime, **O**bject, **M**anner, **P**lace, **I**nfinitive.

**4. Starting with the time** is very natural — but then the verb must stay in second place, so the subject moves behind it:

- ***Soms draf ek** ná werk.* — Sometimes I jog after work.
- ***Saterdae speel ons** krieket by die klub.* — On Saturdays we play cricket at the club.`,
    examples: [
      { af: "Ons oefen elke Dinsdag hard op die veld.", en: "We train hard on the field every Tuesday." },
      { af: "Sy swem soggens rustig in die see.", en: "She swims calmly in the sea in the mornings." },
      { af: "Ek het gister vinnig by die gim geoefen.", en: "I had a quick workout at the gym yesterday." },
      { af: "Gewoonlik stap ons Sondae in die berge.", en: "Usually we hike in the mountains on Sundays." },
    ],
  },
  cloze: [
    { id: "u31-c01", textAf: "Ek draf {{dikwels}} in die park.", answer: "dikwels", distractors: ["selde", "nooit"], en: "I often jog in the park." },
    { id: "u31-c02", textAf: "Hy mis {{nooit}} 'n oefening nie.", answer: "nooit", distractors: ["altyd", "soms"], en: "He never misses a practice." },
    { id: "u31-c03", textAf: "Die span speel vandag baie {{goed}}.", answer: "goed", distractors: ["goeie", "beste"], en: "The team is playing very well today." },
    { id: "u31-c04", textAf: "Gewoonlik {{oefen}} ek voor werk.", answer: "oefen", distractors: ["geoefen", "oefening"], en: "Usually I exercise before work." },
    { id: "u31-c05", textAf: "Ons oefen elke Dinsdag {{hard}} in die gim.", answer: "hard", distractors: ["harde", "hardste"], en: "We train hard in the gym every Tuesday." },
    { id: "u31-c06", textAf: "Ek gaan {{soms}} saam met my broer gim toe.", answer: "soms", distractors: ["altyd", "nooit"], en: "I sometimes go to the gym with my brother." },
    { id: "u31-c07", textAf: "Die skeidsregter blaas die {{fluitjie}}.", answer: "fluitjie", distractors: ["beker", "medalje"], en: "The referee blows the whistle." },
    { id: "u31-c08", textAf: "Jy moet eers {{opwarm}} voordat jy hardloop.", answer: "opwarm", distractors: ["optel", "klop"], en: "You must warm up first before you run." },
  ],
  dialogue: {
    id: "u31-d01",
    title: "Vroeg in die gim",
    titleEn: "Early at the gym",
    lines: [
      { speaker: "Kobus", af: "Môre, Naledi! Ek sien jou selde so vroeg in die gim.", en: "Morning, Naledi! I rarely see you at the gym this early.", glosses: { naledi: "Naledi (name)" } },
      { speaker: "Naledi", af: "Ek oefen nou elke oggend hard, want ons netbalseisoen begin binnekort.", en: "I'm training hard every morning now, because our netball season starts soon.", glosses: { netbalseisoen: "netball season" } },
      { speaker: "Kobus", af: "Sjoe! Ek kom soms ná werk, maar ek is nooit so fiks soos jy nie.", en: "Wow! I sometimes come after work, but I'm never as fit as you.", glosses: { "ná": "after" } },
      { speaker: "Naledi", af: "Jy moet gereeld kom. Een keer per week is nie genoeg nie.", en: "You must come regularly. Once a week is not enough.", glosses: { per: "per / a", genoeg: "enough" } },
      { speaker: "Kobus", af: "Ek weet. Gister het ek tien minute gehardloop en toe was ek uitasem.", en: "I know. Yesterday I ran for ten minutes and then I was out of breath.", glosses: { minute: "minutes", gehardloop: "ran" } },
      { speaker: "Naledi", af: "Het jy behoorlik opgewarm? Jy moet altyd eers strek.", en: "Did you warm up properly? You must always stretch first.", glosses: { opgewarm: "warmed up" } },
      { speaker: "Kobus", af: "Nee, en vandag is my bene so styf dat ek skaars kan loop.", en: "No, and today my legs are so stiff that I can hardly walk.", glosses: { bene: "legs", skaars: "hardly / barely" } },
      { speaker: "Naledi", af: "Sien jy! Kom, ons begin stadig op die fiets.", en: "You see! Come, we'll start slowly on the bike." },
      { speaker: "Kobus", af: "Goed, afrigter! En wat doen julle Saterdag?", en: "Okay, coach! And what are you all doing on Saturday?" },
      { speaker: "Naledi", af: "Ons speel teen die kampioene. Hulle het ons verlede jaar maklik geklop.", en: "We're playing against the champions. They beat us easily last year.", glosses: { kampioene: "champions", geklop: "beaten / beat" } },
      { speaker: "Kobus", af: "Dan kom juig ek vir julle. Hierdie keer gaan julle hulle klop!", en: "Then I'll come and cheer for you. This time you are going to beat them!" },
      { speaker: "Naledi", af: "Dankie! Maar eers moet jy 'n bietjie sweet. Kom ons begin!", en: "Thanks! But first you have to sweat a bit. Let's start!" },
    ],
    questions: [
      {
        q: "Why is Naledi training every morning?",
        options: ["She wants to lose weight", "Her netball season starts soon", "Her coach told her to"],
        correct: 1,
      },
      {
        q: "Why are Kobus's legs stiff today?",
        options: ["He ran without warming up properly", "He lifted heavy weights", "He played rugby"],
        correct: 0,
      },
      {
        q: "What will Kobus do on Saturday?",
        options: ["Play against the champions", "Stay at home", "Cheer for Naledi's team"],
        correct: 2,
      },
    ],
  },
};
