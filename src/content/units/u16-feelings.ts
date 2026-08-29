import type { Unit } from "../types";

export const unit: Unit = {
  id: "u16",
  title: "Feelings & opinions",
  titleAf: "Gevoelens en menings",
  week: 14,
  cefr: "B1",
  description: "Say what you feel, think, and believe — like a real conversation.",
  vocab: [
    { id: "u16-v001", af: "bly", en: "glad / pleased", altEn: ["glad", "pleased", "happy"], exampleAf: "Ek is bly om jou te sien!", exampleEn: "I am glad to see you!", pos: "adj", pron: "blay" },
    { id: "u16-v002", af: "kwaad", en: "angry", exampleAf: "Moenie kwaad wees nie, dit was 'n grap.", exampleEn: "Don't be angry, it was a joke.", pos: "adj", pron: "kvaht" },
    { id: "u16-v003", af: "bang", en: "afraid / scared", altEn: ["afraid", "scared"], exampleAf: "Die kind is bang vir die donker.", exampleEn: "The child is afraid of the dark.", pos: "adj", pron: "bung" },
    { id: "u16-v004", af: "trots", en: "proud", exampleAf: "Ek is baie trots op jou!", exampleEn: "I am very proud of you!", pos: "adj", pron: "trawts" },
    { id: "u16-v005", af: "verbaas", en: "surprised", exampleAf: "Ek was verbaas om hom daar te sien.", exampleEn: "I was surprised to see him there.", pos: "adj", pron: "fer-BAHS" },
    { id: "u16-v006", af: "teleurgesteld", en: "disappointed", exampleAf: "Sy was teleurgesteld oor die telling.", exampleEn: "She was disappointed about the score.", pos: "adj", pron: "tuh-LUR-ghuh-stelt" },
    { id: "u16-v007", af: "senuweeagtig", en: "nervous", exampleAf: "Ek is senuweeagtig voor die eksamen.", exampleEn: "I am nervous before the exam.", pos: "adj", pron: "SEE-nu-vee-AGH-tigh" },
    { id: "u16-v008", af: "kalm", en: "calm", exampleAf: "Bly kalm en haal diep asem.", exampleEn: "Stay calm and breathe deeply.", pos: "adj", pron: "kulm" },
    { id: "u16-v009", af: "eensaam", en: "lonely", exampleAf: "Sonder my familie voel ek eensaam.", exampleEn: "Without my family I feel lonely.", pos: "adj", pron: "EE-un-sahm" },
    { id: "u16-v010", af: "verveeld", en: "bored", exampleAf: "Die kinders is gou verveeld.", exampleEn: "The children get bored quickly.", pos: "adj", pron: "fer-FEELT" },
    { id: "u16-v011", af: "tevrede", en: "satisfied / content", altEn: ["satisfied", "content"], exampleAf: "Ek is tevrede met my werk.", exampleEn: "I am satisfied with my work.", pos: "adj", pron: "tuh-FREE-duh" },
    { id: "u16-v012", af: "dankbaar", en: "grateful / thankful", altEn: ["grateful", "thankful"], exampleAf: "Ek is dankbaar vir my vriende.", exampleEn: "I am grateful for my friends.", pos: "adj", pron: "DUNK-bahr" },
    { id: "u16-v013", af: "jaloers", en: "jealous", exampleAf: "Hy is jaloers op sy broer se kar.", exampleEn: "He is jealous of his brother's car.", pos: "adj", pron: "yah-LOORS" },
    { id: "u16-v014", af: "skaam", en: "shy / ashamed", altEn: ["shy", "ashamed", "embarrassed"], exampleAf: "Die seuntjie is skaam vir vreemde mense.", exampleEn: "The little boy is shy with strangers.", pos: "adj", pron: "skahm" },
    { id: "u16-v015", af: "gevoel", en: "feeling", exampleAf: "Ek het 'n goeie gevoel oor vandag.", exampleEn: "I have a good feeling about today.", pos: "n", pron: "ghuh-FOOL" },
    { id: "u16-v016", af: "mening", en: "opinion", exampleAf: "Wat is jou mening oor die plan?", exampleEn: "What is your opinion about the plan?", pos: "n", pron: "MEE-ning" },
    { id: "u16-v017", af: "idee", en: "idea", exampleAf: "Dit is 'n briljante idee!", exampleEn: "That is a brilliant idea!", pos: "n", pron: "ee-DEE-uh" },
    { id: "u16-v018", af: "rede", en: "reason", exampleAf: "Daar is 'n goeie rede vir alles.", exampleEn: "There is a good reason for everything.", pos: "n", pron: "REE-duh" },
    { id: "u16-v019", af: "waarheid", en: "truth", exampleAf: "Vertel my die waarheid.", exampleEn: "Tell me the truth.", pos: "n", pron: "VAHR-hayt" },
    { id: "u16-v020", af: "leuen", en: "lie (untruth)", altEn: ["lie"], exampleAf: "Dit is 'n leuen — ek was daar!", exampleEn: "That is a lie — I was there!", pos: "n", pron: "LUR-un (œ sound)" },
    { id: "u16-v021", af: "verskil", en: "difference / to differ", altEn: ["difference", "differ", "disagree"], exampleAf: "Daar is 'n groot verskil tussen die twee.", exampleEn: "There is a big difference between the two.", pos: "n", pron: "fer-SKIL" },
    { id: "u16-v022", af: "punt", en: "point", exampleAf: "Jy het 'n goeie punt.", exampleEn: "You have a good point.", pos: "n", pron: "punt" },
    { id: "u16-v023", af: "dink", en: "to think", altEn: ["think"], exampleAf: "Ek dink dit is 'n goeie plan.", exampleEn: "I think it is a good plan.", pos: "v", pron: "dink" },
    { id: "u16-v024", af: "glo", en: "to believe", altEn: ["believe"], exampleAf: "Ek glo dat alles sal regkom.", exampleEn: "I believe everything will work out.", pos: "v", pron: "ghloh" },
    { id: "u16-v025", af: "meen", en: "to mean / be of the opinion", altEn: ["mean", "reckon"], exampleAf: "Ek meen dit ernstig.", exampleEn: "I mean it seriously.", pos: "v", pron: "mee-un" },
    { id: "u16-v026", af: "saamstem", en: "to agree", altEn: ["agree"], exampleAf: "Ek stem heeltemal saam.", exampleEn: "I completely agree.", pos: "v", pron: "SAHM-stem", clozeForm: "stem heeltemal saam" },
    { id: "u16-v027", af: "oortuig", en: "to convince", altEn: ["convince"], exampleAf: "Jy het my oortuig!", exampleEn: "You have convinced me!", pos: "v", pron: "oor-TAYGH" },
    { id: "u16-v028", af: "twyfel", en: "to doubt / doubt", altEn: ["doubt"], exampleAf: "Ek twyfel of dit sal werk.", exampleEn: "I doubt whether it will work.", pos: "v", pron: "TVAY-fel" },
    { id: "u16-v029", af: "erken", en: "to admit", altEn: ["admit"], exampleAf: "Ek moet erken, jy was reg.", exampleEn: "I must admit, you were right.", pos: "v", pron: "er-KEN" },
    { id: "u16-v030", af: "kla", en: "to complain", altEn: ["complain"], exampleAf: "Hy kla altyd oor die weer.", exampleEn: "He always complains about the weather.", pos: "v", pron: "klah" },
    { id: "u16-v031", af: "ernstig", en: "serious", exampleAf: "Is jy ernstig?", exampleEn: "Are you serious?", pos: "adj", pron: "ERN-stigh" },
    { id: "u16-v032", af: "eerlik", en: "honest", exampleAf: "Wees eerlik met my.", exampleEn: "Be honest with me.", pos: "adj", pron: "EER-lik" },
    { id: "u16-v033", af: "verkeerd", en: "wrong", exampleAf: "Ek was verkeerd, jammer.", exampleEn: "I was wrong, sorry.", pos: "adj", pron: "fer-KEERT" },
    { id: "u16-v034", af: "saak", en: "matter / case", altEn: ["matter", "case", "business"], exampleAf: "Dit maak nie saak nie.", exampleEn: "It doesn't matter.", pos: "n", pron: "sahk" },
    { id: "u16-v035", af: "gedagte", en: "thought", exampleAf: "Dit is 'n mooi gedagte.", exampleEn: "That is a nice thought.", pos: "n", pron: "ghuh-DUGH-tuh" },
    { id: "u16-v036", af: "omgee", en: "to care", altEn: ["care"], exampleAf: "Ek gee om vir jou.", exampleEn: "I care about you.", pos: "v", pron: "OM-ghee", clozeForm: "gee om" },
    { id: "u16-v037", af: "haat", en: "to hate", altEn: ["hate"], exampleAf: "Ek haat dit om laat te wees.", exampleEn: "I hate being late.", pos: "v", pron: "haht" },
    { id: "u16-v038", af: "moedeloos", en: "despondent / discouraged", altEn: ["despondent", "discouraged"], exampleAf: "Moenie moedeloos word nie — hou aan!", exampleEn: "Don't get discouraged — keep going!", pos: "adj", pron: "MOO-duh-loo-us" },
    { id: "u16-v039", af: "verlig", en: "relieved", exampleAf: "Ek is verlig dat alles goed gegaan het.", exampleEn: "I am relieved that everything went well.", pos: "adj", pron: "fer-LIGH" },
    { id: "u16-v040", af: "geduldig", en: "patient", exampleAf: "Wees geduldig met jouself.", exampleEn: "Be patient with yourself.", pos: "adj", pron: "ghuh-DUL-digh" },
    { id: "u16-v041", af: "respek", en: "respect", exampleAf: "Ek het groot respek vir haar.", exampleEn: "I have great respect for her.", pos: "n", pron: "reh-SPEK" },
    { id: "u16-v042", af: "vertrou", en: "to trust", altEn: ["trust"], exampleAf: "Jy kan my vertrou.", exampleEn: "You can trust me.", pos: "v", pron: "fer-TROH" },
    { id: "u16-v043", af: "belangstel", en: "to be interested", altEn: ["be interested"], exampleAf: "Ek stel belang in geskiedenis.", exampleEn: "I am interested in history.", pos: "v", pron: "buh-LUNG-stel", clozeForm: "stel belang" },
    { id: "u16-v044", af: "interessant", en: "interesting", exampleAf: "Wat 'n interessante storie!", exampleEn: "What an interesting story!", pos: "adj", pron: "in-tuh-reh-SUNT", clozeForm: "interessante" },
    { id: "u16-v045", af: "snaaks", en: "funny / strange", altEn: ["funny", "strange"], exampleAf: "Sy grappe is regtig snaaks.", exampleEn: "His jokes are really funny.", pos: "adj", pron: "snahks" },
  ],
  phrases: [
    { id: "u16-p01", af: "Wat dink jy?", en: "What do you think?" },
    { id: "u16-p02", af: "Ek stem saam met jou.", en: "I agree with you." },
    { id: "u16-p03", af: "Ek stem nie saam nie.", en: "I don't agree." },
    { id: "u16-p04", af: "Na my mening…", en: "In my opinion…" },
    { id: "u16-p05", af: "Ek is trots op jou.", en: "I am proud of you." },
    { id: "u16-p06", af: "Dit maak nie saak nie.", en: "It doesn't matter." },
    { id: "u16-p07", af: "Ek voel sterk daaroor.", en: "I feel strongly about it." },
    { id: "u16-p08", af: "Jy het 'n goeie punt.", en: "You have a good point." },
    { id: "u16-p09", af: "Ek is jammer om dit te hoor.", en: "I am sorry to hear that." },
    { id: "u16-p10", af: "Dit was die moeite werd!", en: "It was worth it!" },
  ],
  grammar: {
    id: "u16-g01",
    title: "Ek dink dat… — verbs run to the end",
    body: `To share thoughts and beliefs, hang a ***dat*** (that) clause on verbs like *dink, glo, weet, hoop, sê*:

- *Ek dink **dat** die kos lekker **is**.* — I think that the food is tasty.
- *Sy sê **dat** sy môre **kom**.* — She says that she's coming tomorrow.

See what happened? After *dat*, the verb **runs all the way to the end** of the clause. That's the rule for every *dat*-clause.

Just like English, you may drop *dat* — then the order goes back to normal:

- *Ek dink die kos **is** lekker.* — both versions are perfect.

Feelings take the same pattern:

- *Ek is **bly dat** jy hier **is**.* — I'm glad (that) you're here.
- *Ons is **trots dat** ons span **gewen het**.* — We're proud our team won.

And note the little prepositions feelings like to carry: *trots **op*** (proud of), *bang **vir*** (afraid of), *tevrede **met*** (satisfied with), *dankbaar **vir*** (grateful for).`,
    examples: [
      { af: "Ek glo dat jy dit kan doen.", en: "I believe that you can do it." },
      { af: "Ek is bly dat jy gekom het.", en: "I am glad that you came." },
      { af: "Hy weet dat die antwoord verkeerd is.", en: "He knows that the answer is wrong." },
    ],
  },
  cloze: [
    { id: "u16-c01", textAf: "Ek dink dat die kos lekker {{is}}.", answer: "is", distractors: ["wees", "het"], en: "I think that the food is tasty." },
    { id: "u16-c02", textAf: "Sy sê dat sy môre {{kom}}.", answer: "kom", distractors: ["is", "het"], en: "She says that she is coming tomorrow." },
    { id: "u16-c03", textAf: "Ek glo dat alles sal {{regkom}}.", answer: "regkom", distractors: ["regmaak", "aankom"], en: "I believe that everything will work out." },
    { id: "u16-c04", textAf: "Ek is {{trots}} op jou!", answer: "trots", distractors: ["bang", "kwaad"], en: "I am proud of you!" },
    { id: "u16-c05", textAf: "Moenie {{bang}} wees nie, die hond is vriendelik.", answer: "bang", distractors: ["bly", "moeg"], en: "Don't be afraid, the dog is friendly." },
    { id: "u16-c06", textAf: "Ek stem {{saam}} met jou.", answer: "saam", distractors: ["toe", "in"], en: "I agree with you." },
    { id: "u16-c07", textAf: "Vertel my die {{waarheid}}.", answer: "waarheid", distractors: ["leuen", "storie"], en: "Tell me the truth." },
    { id: "u16-c08", textAf: "Dit is 'n goeie {{idee}}!", answer: "idee", distractors: ["mening", "rede"], en: "That is a good idea!" },
  ],
  dialogue: {
    id: "u16-d01",
    title: "Die groot besluit",
    titleEn: "The big decision",
    lines: [
      { speaker: "Thandi", af: "Pieter, ek moet jou iets vertel. Ek voel senuweeagtig.", en: "Pieter, I have to tell you something. I feel nervous." },
      { speaker: "Pieter", af: "Wat is dit? Jy kan my alles vertel.", en: "What is it? You can tell me anything." },
      { speaker: "Thandi", af: "Ek het 'n nuwe werk gekry… in Kaapstad.", en: "I got a new job… in Cape Town.", glosses: { gekry: "got / received" } },
      { speaker: "Pieter", af: "Regtig? Ek is so bly vir jou! Maar ek is ook hartseer.", en: "Really? I am so glad for you! But I am also sad." },
      { speaker: "Thandi", af: "Ek weet. Ek is opgewonde én bang.", en: "I know. I am excited and scared at the same time.", glosses: { én: "and (emphatic)" } },
      { speaker: "Pieter", af: "Ek dink dat dit 'n wonderlike geleentheid is.", en: "I think that it is a wonderful opportunity." },
      { speaker: "Thandi", af: "Dink jy regtig so? Ek twyfel nog.", en: "Do you really think so? I still have doubts." },
      { speaker: "Pieter", af: "Ja! Ek glo dat jy die regte keuse maak.", en: "Yes! I believe that you are making the right choice.", glosses: { regte: "right (before a noun)" } },
      { speaker: "Thandi", af: "Dankie, Pieter. Ek is dankbaar dat jy my vriend is.", en: "Thank you, Pieter. I am grateful that you are my friend." },
      { speaker: "Pieter", af: "En ek is trots op jou. Kaapstad is gelukkig om jou te kry!", en: "And I am proud of you. Cape Town is lucky to get you!" },
    ],
    questions: [
      {
        q: "Where is Thandi's new job?",
        options: ["Pretoria", "Cape Town", "Durban"],
        correct: 1,
      },
      {
        q: "How does Pieter feel about the news?",
        options: ["Only angry", "Glad but also sad", "Bored"],
        correct: 1,
      },
    ],
  },
};
