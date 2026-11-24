import type { Unit } from "../types";

export const unit: Unit = {
  id: "u22",
  title: "Clothes & style",
  titleAf: "Klere en styl",
  week: 18,
  cefr: "B1",
  description: "Garments, fabrics, colours and getting dressed — with reflexive verbs.",
  vocab: [
    { id: "u22-v001", af: "uittrek", en: "to take off (clothes)", altEn: ["take off", "undress"], exampleAf: "Jy moet jou nat skoene uittrek.", exampleEn: "You must take off your wet shoes.", pos: "v", pron: "AYT-trek" },
    { id: "u22-v002", af: "aanpas", en: "to try on", altEn: ["try on", "fit on"], exampleAf: "Kan ek hierdie skoene aanpas?", exampleEn: "Can I try on these shoes?", pos: "v", pron: "AHN-pus" },
    { id: "u22-v003", af: "kous", en: "sock", altEn: ["stocking"], exampleAf: "Ek soek my ander kous.", exampleEn: "I am looking for my other sock.", pos: "n", pron: "kohs" },
    { id: "u22-v004", af: "das", en: "tie", altEn: ["necktie"], exampleAf: "Hy dra elke dag 'n das werk toe.", exampleEn: "He wears a tie to work every day.", pos: "n", pron: "dus" },
    { id: "u22-v005", af: "serp", en: "scarf", exampleAf: "Dra 'n serp; dit is koud buite.", exampleEn: "Wear a scarf; it is cold outside.", pos: "n", pron: "serp" },
    { id: "u22-v006", af: "handskoen", en: "glove", exampleAf: "Ek het een handskoen verloor.", exampleEn: "I have lost one glove.", pos: "n", pron: "HUNT-skoon" },
    { id: "u22-v007", af: "mus", en: "beanie / woolly hat", altEn: ["beanie", "woolly hat", "cap"], exampleAf: "Die baba dra 'n warm mus.", exampleEn: "The baby is wearing a warm beanie.", pos: "n", pron: "mus (u as in 'put', lips rounded)" },
    { id: "u22-v008", af: "pet", en: "cap", altEn: ["peaked cap"], exampleAf: "Die seun dra 'n rooi pet.", exampleEn: "The boy is wearing a red cap.", pos: "n", pron: "pet" },
    { id: "u22-v009", af: "stewel", en: "boot", exampleAf: "Die boer dra swaar stewels.", exampleEn: "The farmer wears heavy boots.", pos: "n", pron: "STEE-vel", clozeForm: "stewels" },
    { id: "u22-v010", af: "sandaal", en: "sandal", exampleAf: "Ek dra somers net sandale.", exampleEn: "In summer I only wear sandals.", pos: "n", pron: "sun-DAHL", clozeForm: "sandale" },
    { id: "u22-v011", af: "plakkie", en: "flip-flop", altEn: ["slip-slop", "thong"], exampleAf: "Ons dra plakkies strand toe.", exampleEn: "We wear flip-flops to the beach.", pos: "n", pron: "PLUK-kee", clozeForm: "plakkies" },
    { id: "u22-v012", af: "romp", en: "skirt", exampleAf: "Sy dra 'n kort swart romp.", exampleEn: "She is wearing a short black skirt.", pos: "n", pron: "romp" },
    { id: "u22-v013", af: "bloes", en: "blouse", exampleAf: "Die wit bloes pas by die romp.", exampleEn: "The white blouse goes with the skirt.", pos: "n", pron: "bloos" },
    { id: "u22-v014", af: "T-hemp", en: "T-shirt", altEn: ["tee"], exampleAf: "Hy dra 'n ou T-hemp by die huis.", exampleEn: "He wears an old T-shirt at home.", pos: "n", pron: "TEE-hemp" },
    { id: "u22-v015", af: "kortbroek", en: "shorts", exampleAf: "Trek 'n kortbroek aan; dit is warm.", exampleEn: "Put on shorts; it is hot.", pos: "n", pron: "KORT-brook" },
    { id: "u22-v016", af: "onderklere", en: "underwear", altEn: ["underclothes"], exampleAf: "Onthou om skoon onderklere te pak.", exampleEn: "Remember to pack clean underwear.", pos: "n", pron: "ON-der-klee-ruh" },
    { id: "u22-v017", af: "swembroek", en: "swimming costume / trunks", altEn: ["swimming costume", "swimsuit", "swimming trunks", "trunks"], exampleAf: "Moenie jou swembroek vergeet nie!", exampleEn: "Don't forget your swimming costume!", pos: "n", pron: "SVEM-brook" },
    { id: "u22-v018", af: "gordel", en: "belt", exampleAf: "Sonder 'n gordel val my broek af.", exampleEn: "Without a belt my trousers fall down.", pos: "n", pron: "GHOR-del" },
    { id: "u22-v019", af: "knoop", en: "button / knot", altEn: ["button", "knot"], exampleAf: "Daar is 'n knoop van my hemp af.", exampleEn: "There is a button off my shirt.", pos: "n", pron: "knohp (say the k)" },
    { id: "u22-v020", af: "rits", en: "zip", altEn: ["zipper"], exampleAf: "My baadjie se rits is stukkend.", exampleEn: "My jacket's zip is broken.", pos: "n", pron: "rits" },
    { id: "u22-v021", af: "mou", en: "sleeve", exampleAf: "Die moue is te lank vir my.", exampleEn: "The sleeves are too long for me.", pos: "n", pron: "moh", clozeForm: "moue" },
    { id: "u22-v022", af: "materiaal", en: "fabric / material", altEn: ["fabric", "material", "cloth"], exampleAf: "Hierdie materiaal voel baie sag.", exampleEn: "This fabric feels very soft.", pos: "n", pron: "mah-tee-ree-AHL" },
    { id: "u22-v023", af: "katoen", en: "cotton", exampleAf: "Katoen is lekker koel in die somer.", exampleEn: "Cotton is nice and cool in summer.", pos: "n", pron: "kuh-TOON", clozeForm: "Katoen" },
    { id: "u22-v024", af: "wol", en: "wool", exampleAf: "Hierdie trui is van wol gemaak.", exampleEn: "This jersey is made of wool.", pos: "n", pron: "vol" },
    { id: "u22-v025", af: "mode", en: "fashion", exampleAf: "Kort rokke is weer in die mode.", exampleEn: "Short dresses are in fashion again.", pos: "n", pron: "MOH-duh" },
    { id: "u22-v026", af: "styl", en: "style", exampleAf: "Ek hou baie van jou styl.", exampleEn: "I really like your style.", pos: "n", pron: "stayl" },
    { id: "u22-v027", af: "patroon", en: "pattern", exampleAf: "Die rok het 'n mooi patroon.", exampleEn: "The dress has a pretty pattern.", pos: "n", pron: "puh-TROHN" },
    { id: "u22-v028", af: "gestreep", en: "striped", exampleAf: "Hy dra 'n gestreepte hemp.", exampleEn: "He is wearing a striped shirt.", pos: "adj", pron: "ghuh-STREE-up", clozeForm: "gestreepte" },
    { id: "u22-v029", af: "los", en: "loose", exampleAf: "Ek dra graag los klere.", exampleEn: "I like wearing loose clothes.", pos: "adj", pron: "loss" },
    { id: "u22-v030", af: "styf", en: "tight / stiff", altEn: ["tight", "stiff"], exampleAf: "Hierdie broek sit te styf.", exampleEn: "These trousers are too tight.", pos: "adj", pron: "stayf" },
    { id: "u22-v031", af: "deftig", en: "smart / elegant", altEn: ["smart", "elegant", "formal"], exampleAf: "Jy lyk baie deftig vanaand!", exampleEn: "You look very smart tonight!", pos: "adj", pron: "DEF-tigh" },
    { id: "u22-v032", af: "kaalvoet", en: "barefoot", exampleAf: "Die kinders loop kaalvoet in die tuin.", exampleEn: "The children walk barefoot in the garden.", pos: "adv", pron: "KAHL-foot" },
    { id: "u22-v033", af: "stryk", en: "to iron", altEn: ["iron"], exampleAf: "Ek moet nog my hemp stryk.", exampleEn: "I still have to iron my shirt.", pos: "v", pron: "strayk" },
    { id: "u22-v034", af: "wasgoed", en: "laundry / washing", altEn: ["laundry", "washing"], exampleAf: "Hang asseblief die wasgoed op.", exampleEn: "Please hang up the washing.", pos: "n", pron: "VUS-ghoot" },
    { id: "u22-v035", af: "skeer", en: "to shave", altEn: ["shave"], exampleAf: "My pa skeer hom elke oggend.", exampleEn: "My dad shaves every morning.", pos: "v", pron: "skee-ur" },
    { id: "u22-v036", af: "kam", en: "to comb / a comb", altEn: ["comb"], exampleAf: "Kam jou hare voordat ons gaan.", exampleEn: "Comb your hair before we go.", pos: "v", pron: "kum", clozeForm: "Kam" },
    { id: "u22-v037", af: "grimering", en: "make-up", altEn: ["makeup"], exampleAf: "Sy dra nie baie grimering nie.", exampleEn: "She doesn't wear much make-up.", pos: "n", pron: "ghri-MEE-ring" },
    { id: "u22-v038", af: "juwele", en: "jewellery / jewels", altEn: ["jewellery", "jewelry", "jewels"], exampleAf: "Ouma se juwele is baie oud.", exampleEn: "Grandma's jewellery is very old.", pos: "n", pron: "yew-VEE-luh" },
    { id: "u22-v039", af: "verklee", en: "to change (clothes)", altEn: ["change", "get changed", "change clothes"], exampleAf: "Ek gaan my gou verklee.", exampleEn: "I am quickly going to get changed.", pos: "v", pron: "fer-KLEE-uh" },
    { id: "u22-v040", af: "verbeel", en: "to imagine", altEn: ["imagine", "fancy"], exampleAf: "Hy verbeel hom hy is beroemd.", exampleEn: "He imagines he is famous.", pos: "v", pron: "fer-BEE-ul" },
    { id: "u22-v041", af: "gedra", en: "to behave", altEn: ["behave"], exampleAf: "Die kinders het hulle goed gedra.", exampleEn: "The children behaved well.", pos: "v", pron: "ghuh-DRAH" },
    { id: "u22-v042", af: "haas", en: "to hurry", altEn: ["hurry", "hurry up"], exampleAf: "Haas jou, die bus kom!", exampleEn: "Hurry up, the bus is coming!", pos: "v", pron: "hahs", clozeForm: "Haas" },
    { id: "u22-v043", af: "rooi", en: "red", exampleAf: "Sy dra vanaand 'n rooi rok.", exampleEn: "She is wearing a red dress tonight.", pos: "adj", pron: "roy" },
    { id: "u22-v044", af: "blou", en: "blue", exampleAf: "Die lug is vandag helder blou.", exampleEn: "The sky is bright blue today.", pos: "adj", pron: "bloh" },
    { id: "u22-v045", af: "swart", en: "black", exampleAf: "Ek drink my koffie swart.", exampleEn: "I drink my coffee black.", pos: "adj", pron: "svurt" },
    { id: "u22-v046", af: "wit", en: "white", exampleAf: "Sy tande is mooi wit.", exampleEn: "His teeth are nice and white.", pos: "adj", pron: "vit" },
    { id: "u22-v047", af: "geel", en: "yellow", exampleAf: "Ek soek 'n mooi geel piesang.", exampleEn: "I am looking for a nice yellow banana.", pos: "adj", pron: "ghee-ul" },
    { id: "u22-v048", af: "bruin", en: "brown", exampleAf: "Hy het bruin oë en bruin hare.", exampleEn: "He has brown eyes and brown hair.", pos: "adj", pron: "brayn" },
    { id: "u22-v049", af: "grys", en: "grey", altEn: ["gray"], exampleAf: "Oupa se hare is nou grys.", exampleEn: "Grandpa's hair is grey now.", pos: "adj", pron: "ghrays" },
    { id: "u22-v050", af: "groen", en: "green", exampleAf: "Die gras is groen na die reën.", exampleEn: "The grass is green after the rain.", pos: "adj", pron: "ghroon" },
  ],
  phrases: [
    { id: "u22-p01", af: "Wat gaan jy vanaand aantrek?", en: "What are you going to wear tonight?" },
    { id: "u22-p02", af: "Dit pas jou perfek.", en: "It fits you perfectly." },
    { id: "u22-p03", af: "Hierdie een is te klein vir my.", en: "This one is too small for me." },
    { id: "u22-p04", af: "Het julle dit in swart?", en: "Do you have it in black?" },
    { id: "u22-p05", af: "Daardie kleur pas goed by jou.", en: "That colour suits you well." },
    { id: "u22-p06", af: "Ek het niks om aan te trek nie!", en: "I have nothing to wear!" },
    { id: "u22-p07", af: "Trek iets warms aan.", en: "Put on something warm." },
    { id: "u22-p08", af: "Jy lyk baie deftig!", en: "You look very smart!" },
    { id: "u22-p09", af: "Haas jou, ons is laat!", en: "Hurry up, we are late!" },
    { id: "u22-p10", af: "Verbeel jou!", en: "Just imagine! / Fancy that!", altAf: ["Verbeel jou net!"] },
  ],
  grammar: {
    id: "u22-g01",
    title: "Doing it to yourself — reflexive verbs",
    body: `English says *I shave*, *hurry up*, *behave!* Afrikaans often adds a little pronoun that points back at the person doing it: *Ek skeer **my**. Haas **jou**! Gedra **julle**!*

The good news: there are no special "-self" words to learn. You simply reuse the object pronouns you already know:

- *ek … **my*** · *jy … **jou*** · *hy … **hom*** · *sy … **haar***
- *ons … **ons*** · *julle … **julle*** · *hulle … **hulle***

The pronoun sits right after the verb (or after the subject, if the subject has moved behind the verb):

- *Ek **trek my** aan.* — I get dressed.
- *Soggens **skeer hy hom**.* — In the mornings he shaves.
- *Ons moet **ons** haas.* — We must hurry.

Some verbs are **always** reflexive in Afrikaans, even though English has nothing there. Learn them with *jou* attached:

- ***jou haas*** — to hurry
- ***jou gedra*** — to behave
- ***jou verbeel*** — to imagine
- ***jou verklee*** — to get changed
- ***jou vergis*** — to be mistaken
- ***jou bekommer*** — to worry

Others are reflexive only when you do it to yourself. Compare: *Ek trek **my** aan* (I get dressed) with *Ek trek **my baadjie** aan* (I put my jacket on) — once there is another object, the reflexive pronoun disappears.

The past tense changes nothing: *Ek het **my** vinnig aangetrek. Hy het **hom** goed gedra.*

Add ***-self*** only when you really want to stress it: *Sy het **haarself** in die spieël gesien* — she saw *herself* in the mirror.`,
    examples: [
      { af: "Ek trek my aan en kam my hare.", en: "I get dressed and comb my hair." },
      { af: "Haas julle, die taxi wag!", en: "Hurry up (you all), the taxi is waiting!" },
      { af: "Sy verbeel haar sy kan sing.", en: "She imagines she can sing." },
      { af: "Die kinders het hulle baie goed gedra.", en: "The children behaved very well." },
    ],
  },
  cloze: [
    { id: "u22-c01", textAf: "Ek trek {{my}} vinnig aan.", answer: "my", distractors: ["jou", "hom"], en: "I get dressed quickly." },
    { id: "u22-c02", textAf: "My broer skeer {{hom}} elke oggend.", answer: "hom", distractors: ["hy", "sy"], en: "My brother shaves every morning." },
    { id: "u22-c03", textAf: "Kinders, gedra {{julle}} asseblief!", answer: "julle", distractors: ["hulle", "jy"], en: "Children, please behave yourselves!" },
    { id: "u22-c04", textAf: "Sy verbeel {{haar}} sy is beroemd.", answer: "haar", distractors: ["sy", "hom"], en: "She imagines she is famous." },
    { id: "u22-c05", textAf: "Ons moet {{ons}} haas; die bus kom!", answer: "ons", distractors: ["hulle", "my"], en: "We must hurry; the bus is coming!" },
    { id: "u22-c06", textAf: "Ek gaan my gou {{verklee}} voor die partytjie.", answer: "verklee", distractors: ["verbeel", "gedra"], en: "I am quickly going to get changed before the party." },
    { id: "u22-c07", textAf: "Hierdie broek sit te {{styf}}; ek soek 'n groter een.", answer: "styf", distractors: ["los", "deftig"], en: "These trousers are too tight; I am looking for a bigger pair." },
    { id: "u22-c08", textAf: "Kan ek hierdie rok {{aanpas}}? Waar is die paskamer?", answer: "aanpas", distractors: ["stryk", "kam"], en: "Can I try on this dress? Where is the fitting room?" },
  ],
  dialogue: {
    id: "u22-d01",
    title: "Voor die troue",
    titleEn: "Before the wedding",
    lines: [
      { speaker: "Ma", af: "Haas jou, Danie! Die troue begin oor 'n uur.", en: "Hurry up, Danie! The wedding starts in an hour.", glosses: { troue: "wedding" } },
      { speaker: "Danie", af: "Ek trek my nou aan, Ma. Waar is my wit hemp?", en: "I am getting dressed now, Mom. Where is my white shirt?", glosses: { trek: "pull (trek … aan = put on)" } },
      { speaker: "Ma", af: "Dit hang in die kas. Ek het dit gister gestryk.", en: "It is hanging in the cupboard. I ironed it yesterday.", glosses: { gestryk: "ironed" } },
      { speaker: "Danie", af: "Dankie. En my swart skoene?", en: "Thanks. And my black shoes?" },
      { speaker: "Ma", af: "Onder jou bed. En onthou om kouse aan te trek!", en: "Under your bed. And remember to put on socks!", glosses: { kouse: "socks" } },
      { speaker: "Danie", af: "Moet ek regtig 'n das dra? Dit sit te styf.", en: "Do I really have to wear a tie? It is too tight." },
      { speaker: "Ma", af: "Ja, jy moet. Dit is 'n deftige troue.", en: "Yes, you must. It is a smart wedding.", glosses: { deftige: "smart (before a noun)" } },
      { speaker: "Pa", af: "Kyk hoe deftig lyk ons seun! Het jy jou geskeer?", en: "Look how smart our son looks! Have you shaved?", glosses: { geskeer: "shaved" } },
      { speaker: "Danie", af: "Ja, Pa. En ek het my hare gekam.", en: "Yes, Dad. And I have combed my hair.", glosses: { gekam: "combed" } },
      { speaker: "Pa", af: "Mooi so! Nou moet ek my net gou verklee.", en: "Well done! Now I just need to get changed quickly." },
      { speaker: "Ma", af: "Jy? Ons ry oor tien minute!", en: "You? We are leaving in ten minutes!", glosses: { minute: "minutes" } },
      { speaker: "Pa", af: "Moenie bekommerd wees nie. Ek soek net my bruin gordel.", en: "Don't worry. I am just looking for my brown belt." },
      { speaker: "Danie", af: "Pa verbeel hom hy het baie tyd!", en: "Dad imagines he has lots of time!" },
    ],
    questions: [
      {
        q: "Where is Danie's white shirt?",
        options: ["Under his bed", "Hanging in the cupboard", "In the laundry"],
        correct: 1,
      },
      {
        q: "Why does Danie not want to wear a tie?",
        options: ["It is too tight", "It is the wrong colour", "He cannot find it"],
        correct: 0,
      },
      {
        q: "What is Pa still looking for?",
        options: ["His black shoes", "His socks", "His brown belt"],
        correct: 2,
      },
    ],
  },
};
