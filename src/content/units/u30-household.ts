import type { Unit } from "../types";

export const unit: Unit = {
  id: "u30",
  title: "Repairs, tools & chores",
  titleAf: "Herstelwerk en huiswerk",
  week: 26,
  cefr: "B1",
  description: "Tools, chores and things that break — and how to say you had them fixed.",
  vocab: [
    { id: "u30-v001", af: "gereedskap", en: "tools", altEn: ["tool", "equipment"], exampleAf: "Pa se gereedskap is in die motorhuis.", exampleEn: "Dad's tools are in the garage.", pos: "n", pron: "ghuh-REET-skup" },
    { id: "u30-v002", af: "hamer", en: "hammer", exampleAf: "Ek soek die hamer en 'n spyker.", exampleEn: "I'm looking for the hammer and a nail.", pos: "n", pron: "HAH-mer" },
    { id: "u30-v003", af: "spyker", en: "nail", exampleAf: "Daar steek 'n spyker uit die muur.", exampleEn: "There is a nail sticking out of the wall.", pos: "n", pron: "SPAY-ker" },
    { id: "u30-v004", af: "skroef", en: "screw", exampleAf: "Hierdie skroef is te kort.", exampleEn: "This screw is too short.", pos: "n", pron: "skroof" },
    { id: "u30-v005", af: "skroewedraaier", en: "screwdriver", exampleAf: "Ek het 'n klein skroewedraaier nodig.", exampleEn: "I need a small screwdriver.", pos: "n", pron: "SKROO-vuh-dry-er" },
    { id: "u30-v006", af: "boor", en: "to drill / a drill", altEn: ["drill"], exampleAf: "Ek boor 'n gat in die muur.", exampleEn: "I am drilling a hole in the wall.", pos: "v", pron: "boo-ur" },
    { id: "u30-v007", af: "saag", en: "a saw / to saw", altEn: ["saw"], exampleAf: "Die saag is nie meer skerp nie.", exampleEn: "The saw is no longer sharp.", pos: "n", pron: "sahgh" },
    { id: "u30-v008", af: "drein", en: "drain", exampleAf: "Die drein in die stort is verstop.", exampleEn: "The drain in the shower is blocked.", pos: "n", pron: "drayn" },
    { id: "u30-v009", af: "verf", en: "paint / to paint", altEn: ["paint"], exampleAf: "Ons verf die kombuis wit.", exampleEn: "We are painting the kitchen white.", pos: "v", pron: "ferf" },
    { id: "u30-v010", af: "kwas", en: "paintbrush / brush", altEn: ["paintbrush", "brush"], exampleAf: "Was die kwas nadat jy geverf het.", exampleEn: "Wash the brush after you have painted.", pos: "n", pron: "kvus" },
    { id: "u30-v011", af: "gom", en: "glue", exampleAf: "Die gom moet eers droog word.", exampleEn: "The glue has to dry first.", pos: "n", pron: "ghom" },
    { id: "u30-v012", af: "tou", en: "rope / string", altEn: ["rope", "string"], exampleAf: "Hy maak die boot met 'n tou vas.", exampleEn: "He ties up the boat with a rope.", pos: "n", pron: "toh" },
    { id: "u30-v013", af: "draad", en: "wire / thread", altEn: ["wire", "thread", "fence"], exampleAf: "Moenie aan daardie draad vat nie!", exampleEn: "Don't touch that wire!", pos: "n", pron: "draht" },
    { id: "u30-v014", af: "pyp", en: "pipe", exampleAf: "Die pyp onder die bad is stukkend.", exampleEn: "The pipe under the bath is broken.", pos: "n", pron: "payp" },
    { id: "u30-v015", af: "kraan", en: "tap", altEn: ["faucet"], exampleAf: "Maak asseblief die kraan toe.", exampleEn: "Please turn off the tap.", pos: "n", pron: "krahn" },
    { id: "u30-v016", af: "lek", en: "to leak / a leak", altEn: ["leak"], exampleAf: "Die dak lek as dit reën.", exampleEn: "The roof leaks when it rains.", pos: "v", pron: "lek" },
    { id: "u30-v017", af: "drup", en: "to drip", altEn: ["drip"], exampleAf: "Die kraan drup die hele nag.", exampleEn: "The tap drips all night.", pos: "v", pron: "drup (u as in 'put', lips rounded)" },
    { id: "u30-v018", af: "verstop", en: "blocked / clogged", altEn: ["blocked", "clogged"], exampleAf: "Die pyp in die kombuis is verstop.", exampleEn: "The pipe in the kitchen is blocked.", pos: "adj", pron: "fer-STOP" },
    { id: "u30-v019", af: "loodgieter", en: "plumber", exampleAf: "Ons moet 'n loodgieter bel.", exampleEn: "We must call a plumber.", pos: "n", pron: "LOH-ut-ghee-ter" },
    { id: "u30-v020", af: "elektrisiën", en: "electrician", exampleAf: "Die elektrisiën kom môre.", exampleEn: "The electrician is coming tomorrow.", pos: "n", pron: "eh-lek-tri-see-EN" },
    { id: "u30-v021", af: "gloeilamp", en: "light bulb", altEn: ["bulb"], exampleAf: "Ek moet 'n nuwe gloeilamp koop.", exampleEn: "I have to buy a new light bulb.", pos: "n", pron: "GHLOOY-lump" },
    { id: "u30-v022", af: "prop", en: "plug", exampleAf: "Trek die prop uit voordat jy gaan.", exampleEn: "Pull the plug out before you go.", pos: "n", pron: "prop" },
    { id: "u30-v023", af: "skakelaar", en: "switch", exampleAf: "Die skakelaar is langs die deur.", exampleEn: "The switch is next to the door.", pos: "n", pron: "SKAH-kuh-lahr" },
    { id: "u30-v024", af: "slot", en: "lock", exampleAf: "Die slot van die voordeur is stukkend.", exampleEn: "The lock of the front door is broken.", pos: "n", pron: "slot" },
    { id: "u30-v025", af: "gat", en: "hole", exampleAf: "Daar is 'n gat in die dak.", exampleEn: "There is a hole in the roof.", pos: "n", pron: "ghut" },
    { id: "u30-v026", af: "herstel", en: "to repair / to recover", altEn: ["repair", "recover", "fix", "mend"], exampleAf: "Hy herstel ou horlosies.", exampleEn: "He repairs old watches.", pos: "v", pron: "her-STEL" },
    { id: "u30-v027", af: "vervang", en: "to replace", altEn: ["replace"], exampleAf: "Ons moet die ou yskas vervang.", exampleEn: "We have to replace the old fridge.", pos: "v", pron: "fer-FUNG" },
    { id: "u30-v028", af: "installeer", en: "to install", altEn: ["install"], exampleAf: "Hulle installeer môre die nuwe stoof.", exampleEn: "They are installing the new stove tomorrow.", pos: "v", pron: "in-stul-LEER" },
    { id: "u30-v029", af: "meet", en: "to measure", altEn: ["measure"], exampleAf: "Ons moet eers die venster meet.", exampleEn: "We must measure the window first.", pos: "v", pron: "mee-ut" },
    { id: "u30-v030", af: "vasmaak", en: "to fasten / to tie up", altEn: ["fasten", "tie up", "tie", "attach"], exampleAf: "Jy moet die hond vasmaak.", exampleEn: "You must tie up the dog.", pos: "v", pron: "FUS-mahk" },
    { id: "u30-v031", af: "ophang", en: "to hang up", altEn: ["hang up", "hang"], exampleAf: "Kan jy die wasgoed ophang?", exampleEn: "Can you hang up the washing?", pos: "v", pron: "OP-hung" },
    { id: "u30-v032", af: "sukkel", en: "to struggle", altEn: ["struggle", "battle"], exampleAf: "Ek sukkel om die deur oop te kry.", exampleEn: "I am struggling to get the door open.", pos: "v", pron: "SUK-kul" },
    { id: "u30-v033", af: "besem", en: "broom", exampleAf: "Die besem staan agter die deur.", exampleEn: "The broom is behind the door.", pos: "n", pron: "BEE-sem" },
    { id: "u30-v034", af: "vee", en: "to sweep / to wipe", altEn: ["sweep", "wipe"], exampleAf: "Ek vee elke oggend die stoep.", exampleEn: "I sweep the stoep every morning.", pos: "v", pron: "fee-uh" },
    { id: "u30-v035", af: "emmer", en: "bucket", exampleAf: "Bring vir my 'n emmer water.", exampleEn: "Bring me a bucket of water.", pos: "n", pron: "EM-mer" },
    { id: "u30-v036", af: "lap", en: "cloth / rag", altEn: ["cloth", "rag"], exampleAf: "Vee die tafel met 'n nat lap af.", exampleEn: "Wipe the table with a wet cloth.", pos: "n", pron: "lup" },
    { id: "u30-v037", af: "seep", en: "soap", exampleAf: "Was jou hande met seep.", exampleEn: "Wash your hands with soap.", pos: "n", pron: "see-up" },
    { id: "u30-v038", af: "stof", en: "dust (also: fabric)", altEn: ["dust", "fabric", "material"], exampleAf: "Daar lê stof op die televisie.", exampleEn: "There is dust on the television.", pos: "n", pron: "stof" },
    { id: "u30-v039", af: "afstof", en: "to dust", altEn: ["dust"], exampleAf: "Ek moet nog die sitkamer afstof.", exampleEn: "I still have to dust the lounge.", pos: "v", pron: "UF-stof" },
    { id: "u30-v040", af: "stofsuier", en: "vacuum cleaner", altEn: ["vacuum", "hoover"], exampleAf: "Ons stofsuier is baie oud.", exampleEn: "Our vacuum cleaner is very old.", pos: "n", pron: "STOF-say-er" },
    { id: "u30-v041", af: "vullis", en: "rubbish / garbage", altEn: ["rubbish", "garbage", "trash"], exampleAf: "Sit asseblief die vullis uit.", exampleEn: "Please put the rubbish out.", pos: "n", pron: "FUL-lis" },
    { id: "u30-v042", af: "uitgooi", en: "to throw out", altEn: ["throw out", "throw away"], exampleAf: "Ek wil al die ou tydskrifte uitgooi.", exampleEn: "I want to throw out all the old magazines.", pos: "v", pron: "AYT-ghoy" },
    { id: "u30-v043", af: "opruim", en: "to tidy up / to clear up", altEn: ["tidy up", "clear up", "tidy"], exampleAf: "Julle moet julle kamer opruim!", exampleEn: "You must tidy up your room!", pos: "v", pron: "OP-raym" },
    { id: "u30-v044", af: "spons", en: "sponge", exampleAf: "Was die kar met 'n sagte spons.", exampleEn: "Wash the car with a soft sponge.", pos: "n", pron: "spons" },
    { id: "u30-v045", af: "afdroog", en: "to dry (off) / to dry the dishes", altEn: ["dry", "dry off", "dry up", "dry the dishes"], exampleAf: "Ek was en jy kan afdroog.", exampleEn: "I'll wash and you can dry.", pos: "v", pron: "UF-droh-ugh" },
    { id: "u30-v046", af: "roes", en: "rust / to rust", altEn: ["rust"], exampleAf: "Daar is roes op die ou fiets.", exampleEn: "There is rust on the old bicycle.", pos: "n", pron: "roos" },
    { id: "u30-v047", af: "stomp", en: "blunt", exampleAf: "Hierdie mes is heeltemal stomp.", exampleEn: "This knife is completely blunt.", pos: "adj", pron: "stomp" },
    { id: "u30-v048", af: "handvatsel", en: "handle", exampleAf: "Die deur se handvatsel is los.", exampleEn: "The door's handle is loose.", pos: "n", pron: "HUNT-fut-sel" },
    { id: "u30-v049", af: "deurmekaar", en: "messy / mixed up", altEn: ["messy", "mixed up", "untidy", "confused"], exampleAf: "Die motorhuis is baie deurmekaar.", exampleEn: "The garage is very messy.", pos: "adj", pron: "dee-ur-muh-KAHR" },
    { id: "u30-v050", af: "handig", en: "handy", altEn: ["handy", "practical"], exampleAf: "My man is glad nie handig nie.", exampleEn: "My husband is not handy at all.", pos: "adj", pron: "HUN-digh" },
  ],
  phrases: [
    { id: "u30-p01", af: "Kan jy dit regmaak?", en: "Can you fix it?" },
    { id: "u30-p02", af: "Dit werk nie meer nie.", en: "It doesn't work anymore." },
    { id: "u30-p03", af: "Die krag is af.", en: "The power is off." },
    { id: "u30-p04", af: "Wie se beurt is dit om skottelgoed te was?", en: "Whose turn is it to wash the dishes?" },
    { id: "u30-p05", af: "Ek moet dit laat regmaak.", en: "I have to get it fixed." },
    { id: "u30-p06", af: "Hoeveel gaan dit kos om dit te herstel?", en: "How much will it cost to repair it?" },
    { id: "u30-p07", af: "Hou asseblief die leer vas.", en: "Please hold the ladder." },
    { id: "u30-p08", af: "Die huis is aan die kant.", en: "The house is tidy." },
    { id: "u30-p09", af: "Dit lek al weer!", en: "It's leaking again!" },
    { id: "u30-p10", af: "Ek het dit self gedoen.", en: "I did it myself." },
  ],
  grammar: {
    id: "u30-g01",
    title: "laat — getting things done (and the past with no ge-)",
    body: `You know *laat* as "late". As a verb it is one of the handiest words in the house.

**1. *laat* + verb = to let**

- ***Laat** my **help**.* — Let me help.
- *Sy **laat** die kinders buite **speel**.* — She lets the children play outside.

**2. *laat* + verb = to have something done** (by someone else)

- *Ek **laat** my hare **sny**.* — I'm having my hair cut.
- *Ons **laat** die huis **verf**.* — We're having the house painted.

Compare: *Ek **maak** die kar **reg*** (I fix it myself) vs *Ek **laat** die kar **regmaak*** (someone fixes it for me).

**3. The past: two plain verbs, no *ge-***

Here is the surprise. In the past tense *laat* does **not** become *gelaat*. You say *het* … and then both verbs side by side at the end, just as they are:

- *Ek **het** die kar **laat regmaak**.* — I had the car fixed.
- *Ons **het** die dak **laat herstel**.* — We had the roof repaired.
- *Sy **het** die bord **laat val**.* — She dropped the plate (let it fall).

**4. The same pattern after *sien, hoor, help, leer, gaan, kom, bly***

- *Ek **het** hom **sien kom**.* — I saw him coming.
- *Ons **het** die kraan **hoor drup**.* — We heard the tap dripping.
- *Hy **het** my **help verf**.* — He helped me paint.
- *Hulle **het gaan swem**.* — They went swimming.

Rule of thumb: when one of these verbs teams up with a second verb, skip the *ge-* and line them up at the end.`,
    examples: [
      { af: "Ek het my selfoon laat regmaak.", en: "I had my cellphone fixed." },
      { af: "Laat die verf eers droog word.", en: "Let the paint dry first." },
      { af: "Ons het die bure hoor baklei.", en: "We heard the neighbours fighting." },
      { af: "Hy het sy sleutels in die water laat val.", en: "He dropped his keys in the water." },
    ],
  },
  cloze: [
    { id: "u30-c01", textAf: "Ek {{laat}} môre my hare sny.", answer: "laat", distractors: ["maak", "het"], en: "I'm having my hair cut tomorrow." },
    { id: "u30-c02", textAf: "Ons het die dak laat {{regmaak}}.", answer: "regmaak", distractors: ["reggemaak", "geregmaak"], en: "We had the roof fixed." },
    { id: "u30-c03", textAf: "Ek het die loodgieter {{sien}} kom.", answer: "sien", distractors: ["gesien", "kyk"], en: "I saw the plumber coming." },
    { id: "u30-c04", textAf: "Sy het die bord laat {{val}}.", answer: "val", distractors: ["geval", "gevalle"], en: "She dropped the plate." },
    { id: "u30-c05", textAf: "{{Laat}} my jou help met die wasgoed.", answer: "Laat", distractors: ["Maak", "Doen"], en: "Let me help you with the laundry." },
    { id: "u30-c06", textAf: "Ons het die hele nag die kraan {{hoor}} drup.", answer: "hoor", distractors: ["gehoor", "luister"], en: "We heard the tap dripping all night." },
    { id: "u30-c07", textAf: "Die pyp is stukkend; ons moet 'n {{loodgieter}} bel.", answer: "loodgieter", distractors: ["elektrisiën", "skakelaar"], en: "The pipe is broken; we must call a plumber." },
    { id: "u30-c08", textAf: "Ek vee die vloer met 'n {{besem}}.", answer: "besem", distractors: ["hamer", "kwas"], en: "I sweep the floor with a broom." },
  ],
  dialogue: {
    id: "u30-d01",
    title: "Die kraan drup",
    titleEn: "The tap is dripping",
    lines: [
      { speaker: "Sipho", af: "Marlene, die kraan in die badkamer drup al weer!", en: "Marlene, the tap in the bathroom is dripping again!", glosses: { marlene: "Marlene (name)" } },
      { speaker: "Marlene", af: "Ek weet. Ek het dit die hele nag hoor drup.", en: "I know. I heard it dripping all night.", glosses: { hele: "whole" } },
      { speaker: "Sipho", af: "Waar is my gereedskap? Ek gaan dit self regmaak.", en: "Where are my tools? I'm going to fix it myself." },
      { speaker: "Marlene", af: "Jy? Onthou jy die pyp wat jy verlede jaar wou herstel?", en: "You? Do you remember the pipe that you wanted to repair last year?" },
      { speaker: "Sipho", af: "Dit was nie my skuld nie. Daardie pyp was baie oud.", en: "That wasn't my fault. That pipe was very old." },
      { speaker: "Marlene", af: "Die hele kombuis was nat! Ons moes die vloer laat vervang.", en: "The whole kitchen was wet! We had to have the floor replaced." },
      { speaker: "Sipho", af: "Goed, goed. Maar 'n loodgieter is duur.", en: "Okay, okay. But a plumber is expensive." },
      { speaker: "Marlene", af: "Ek het klaar een gebel. Hy kom môreoggend.", en: "I have already called one. He is coming tomorrow morning.", glosses: { gebel: "called / phoned" } },
      { speaker: "Sipho", af: "En wat doen ek dan vandag?", en: "And what do I do today, then?" },
      { speaker: "Marlene", af: "Jy kan die gloeilamp in die sitkamer vervang en die vullis uitsit.", en: "You can replace the light bulb in the lounge and put the rubbish out.", glosses: { uitsit: "put out" } },
      { speaker: "Sipho", af: "Dit kan ek darem doen. Waar is die leer?", en: "That, at least, I can do. Where is the ladder?" },
      { speaker: "Marlene", af: "In die motorhuis, agter die verf. En moet asseblief niks laat val nie!", en: "In the garage, behind the paint. And please don't drop anything!" },
    ],
    questions: [
      {
        q: "What is wrong in the bathroom?",
        options: ["The light bulb has blown", "The tap is dripping", "The lock is broken"],
        correct: 1,
      },
      {
        q: "What happened after Sipho tried to repair the pipe last year?",
        options: ["They had to have the floor replaced", "The pipe worked perfectly", "The plumber came for free"],
        correct: 0,
      },
      {
        q: "What does Marlene ask Sipho to do today?",
        options: ["Paint the garage", "Phone the plumber", "Replace a light bulb and put the rubbish out"],
        correct: 2,
      },
    ],
  },
};
