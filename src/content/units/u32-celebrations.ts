import type { Unit } from "../types";

export const unit: Unit = {
  id: "u32",
  title: "Holidays & celebrations",
  titleAf: "Vakansiedae en vierings",
  week: 28,
  cefr: "B2",
  description: "Birthdays, weddings, Christmas and public holidays — plus wishing and what you would do if…",
  vocab: [
    { id: "u32-v001", af: "Kersfees", en: "Christmas", exampleAf: "Ons is met Kersfees by Ouma se huis.", exampleEn: "At Christmas we are at Grandma's house.", pos: "n", pron: "KAIRS-fee-us" },
    { id: "u32-v002", af: "Kersvader", en: "Father Christmas / Santa Claus", altEn: ["Father Christmas", "Santa Claus", "Santa"], exampleAf: "Die kinders wag vir Kersvader.", exampleEn: "The children are waiting for Father Christmas.", pos: "n", pron: "KAIRS-fah-der" },
    { id: "u32-v003", af: "Kersboom", en: "Christmas tree", exampleAf: "Die geskenke lê onder die Kersboom.", exampleEn: "The presents are lying under the Christmas tree.", pos: "n", pron: "KAIRS-boh-um" },
    { id: "u32-v004", af: "Paasfees", en: "Easter", altAf: ["Pase"], exampleAf: "Vanjaar is Paasfees in April.", exampleEn: "This year Easter is in April.", pos: "n", pron: "PAHS-fee-us" },
    { id: "u32-v005", af: "paaseier", en: "Easter egg", exampleAf: "Die kinders soek paaseiers in die tuin.", exampleEn: "The children are hunting for Easter eggs in the garden.", pos: "n", pron: "PAHS-ay-er", clozeForm: "paaseiers" },
    { id: "u32-v006", af: "Nuwejaar", en: "New Year", exampleAf: "Ons vier Nuwejaar by die see.", exampleEn: "We celebrate New Year at the seaside.", pos: "n", pron: "NEW-vuh-yahr" },
    { id: "u32-v007", af: "Oujaarsaand", en: "New Year's Eve", exampleAf: "Op Oujaarsaand bly ons laat wakker.", exampleEn: "On New Year's Eve we stay up late.", pos: "n", pron: "OH-yahrs-ahnt" },
    { id: "u32-v008", af: "vakansiedag", en: "public holiday / day off", altEn: ["public holiday", "holiday", "day off"], exampleAf: "Môre is 'n openbare vakansiedag.", exampleEn: "Tomorrow is a public holiday.", pos: "n", pron: "fuh-KUN-see-dugh" },
    { id: "u32-v009", af: "Erfenisdag", en: "Heritage Day (24 September)", altEn: ["Heritage Day"], exampleAf: "Op Erfenisdag braai die hele land.", exampleEn: "On Heritage Day the whole country has a braai.", pos: "n", pron: "AIR-fuh-nis-dugh" },
    { id: "u32-v010", af: "Moedersdag", en: "Mother's Day", exampleAf: "Volgende Sondag is dit Moedersdag.", exampleEn: "Next Sunday is Mother's Day.", pos: "n", pron: "MOO-ders-dugh" },
    { id: "u32-v011", af: "langnaweek", en: "long weekend", exampleAf: "Ons gaan die langnaweek see toe.", exampleEn: "We are going to the sea for the long weekend.", pos: "n", pron: "LUNG-nah-vee-uk" },
    { id: "u32-v012", af: "datum", en: "date (day of the month)", altEn: ["date"], exampleAf: "Wat is die datum vandag?", exampleEn: "What is the date today?", pos: "n", pron: "DAH-tum" },
    { id: "u32-v013", af: "fees", en: "festival / feast", altEn: ["festival", "feast", "celebration"], exampleAf: "Ons dorp hou elke jaar 'n fees.", exampleEn: "Our town holds a festival every year.", pos: "n", pron: "fee-us" },
    { id: "u32-v014", af: "viering", en: "celebration", exampleAf: "Die viering het tot laat geduur.", exampleEn: "The celebration went on until late.", pos: "n", pron: "FEE-ring" },
    { id: "u32-v015", af: "tradisie", en: "tradition", exampleAf: "Dit is 'n ou tradisie in ons familie.", exampleEn: "It is an old tradition in our family.", pos: "n", pron: "truh-DEE-see" },
    { id: "u32-v016", af: "herdenking", en: "anniversary / commemoration", altEn: ["anniversary", "commemoration"], exampleAf: "Ons vier vandag ons tiende herdenking.", exampleEn: "Today we are celebrating our tenth anniversary.", pos: "n", pron: "her-DENG-king" },
    { id: "u32-v017", af: "verjaar", en: "to have a birthday", altEn: ["have a birthday", "celebrate a birthday"], exampleAf: "Ek verjaar volgende week.", exampleEn: "It's my birthday next week.", pos: "v", pron: "fer-YAHR" },
    { id: "u32-v018", af: "nooi", en: "to invite", altEn: ["invite"], altAf: ["uitnooi"], exampleAf: "Ons nooi al die bure na die braai.", exampleEn: "We are inviting all the neighbours to the braai.", pos: "v", pron: "noy" },
    { id: "u32-v019", af: "uitnodiging", en: "invitation", exampleAf: "Dankie vir die uitnodiging!", exampleEn: "Thank you for the invitation!", pos: "n", pron: "AYT-noh-digh-ing" },
    { id: "u32-v020", af: "gas", en: "guest", exampleAf: "Ons verwag vanaand twintig gaste.", exampleEn: "We are expecting twenty guests tonight.", pos: "n", pron: "ghus", clozeForm: "gaste" },
    { id: "u32-v021", af: "gasheer", en: "host", exampleAf: "Ons gasheer het heerlike kos gemaak.", exampleEn: "Our host made delicious food.", pos: "n", pron: "GHUS-hee-ur" },
    { id: "u32-v022", af: "bymekaarkom", en: "to get together / to gather", altEn: ["get together", "gather", "meet up"], exampleAf: "Die hele familie wil Desember bymekaarkom.", exampleEn: "The whole family wants to get together in December.", pos: "v", pron: "bay-muh-KAHR-kom" },
    { id: "u32-v023", af: "versier", en: "to decorate", altEn: ["decorate"], exampleAf: "Die kinders versier die Kersboom.", exampleEn: "The children are decorating the Christmas tree.", pos: "v", pron: "fer-SEER" },
    { id: "u32-v024", af: "versiering", en: "decoration", exampleAf: "Die versierings lyk pragtig.", exampleEn: "The decorations look beautiful.", pos: "n", pron: "fer-SEE-ring", clozeForm: "versierings" },
    { id: "u32-v025", af: "ballon", en: "balloon", exampleAf: "Die kamer is vol rooi ballonne.", exampleEn: "The room is full of red balloons.", pos: "n", pron: "bul-LON", clozeForm: "ballonne" },
    { id: "u32-v026", af: "kers", en: "candle", exampleAf: "Daar is tien kerse op die koek.", exampleEn: "There are ten candles on the cake.", pos: "n", pron: "kairs", clozeForm: "kerse" },
    { id: "u32-v027", af: "blaas", en: "to blow", altEn: ["blow"], exampleAf: "Maak 'n wens en blaas die kerse dood.", exampleEn: "Make a wish and blow out the candles.", pos: "v", pron: "blahs" },
    { id: "u32-v028", af: "toedraai", en: "to wrap", altEn: ["wrap", "wrap up"], exampleAf: "Ek moet nog die geskenke toedraai.", exampleEn: "I still have to wrap the presents.", pos: "v", pron: "TOO-dry" },
    { id: "u32-v029", af: "bederf", en: "to spoil / to treat", altEn: ["spoil", "treat"], exampleAf: "Ons bederf Ma op Moedersdag.", exampleEn: "We spoil Mum on Mother's Day.", pos: "v", pron: "buh-DERF" },
    { id: "u32-v030", af: "geluk", en: "luck / happiness (Baie geluk! = Congratulations!)", altEn: ["luck", "happiness", "congratulations"], exampleAf: "Baie geluk met jou verjaarsdag!", exampleEn: "Happy birthday! (Congratulations on your birthday!)", pos: "n", pron: "ghuh-LUK" },
    { id: "u32-v031", af: "gelukwens", en: "to congratulate", altEn: ["congratulate"], exampleAf: "Ons wil julle graag gelukwens.", exampleEn: "We would like to congratulate you.", pos: "v", pron: "ghuh-LUK-vens" },
    { id: "u32-v032", af: "heildronk", en: "toast (drink in someone's honour)", altEn: ["toast"], exampleAf: "Kom ons drink 'n heildronk op die paartjie!", exampleEn: "Let's drink a toast to the couple!", pos: "n", pron: "HAYL-dronk" },
    { id: "u32-v033", af: "sjampanje", en: "champagne", exampleAf: "Ons drink sjampanje op Oujaarsaand.", exampleEn: "We drink champagne on New Year's Eve.", pos: "n", pron: "shum-PUN-yuh" },
    { id: "u32-v034", af: "toespraak", en: "speech", exampleAf: "Die bruid se pa hou 'n toespraak.", exampleEn: "The bride's father is making a speech.", pos: "n", pron: "TOO-sprahk" },
    { id: "u32-v035", af: "seremonie", en: "ceremony", exampleAf: "Die seremonie begin om drie-uur.", exampleEn: "The ceremony starts at three o'clock.", pos: "n", pron: "seh-ruh-MOH-nee" },
    { id: "u32-v036", af: "onthaal", en: "reception", exampleAf: "Die onthaal is op 'n wynplaas.", exampleEn: "The reception is on a wine farm.", pos: "n", pron: "ont-HAHL" },
    { id: "u32-v037", af: "strooimeisie", en: "bridesmaid", exampleAf: "My suster is een van die strooimeisies.", exampleEn: "My sister is one of the bridesmaids.", pos: "n", pron: "STROY-may-see", clozeForm: "strooimeisies" },
    { id: "u32-v038", af: "doop", en: "christening / baptism (also: to baptise)", altEn: ["christening", "baptism", "baptise", "baptize"], exampleAf: "Die baba se doop is Sondag.", exampleEn: "The baby's christening is on Sunday.", pos: "n", pron: "doh-up" },
    { id: "u32-v039", af: "begrafnis", en: "funeral", exampleAf: "Die begrafnis is Vrydag by die kerk.", exampleEn: "The funeral is on Friday at the church.", pos: "n", pron: "buh-GHRUF-nis" },
    { id: "u32-v040", af: "bid", en: "to pray", altEn: ["pray"], exampleAf: "Ons bid voordat ons eet.", exampleEn: "We pray before we eat.", pos: "v", pron: "bit" },
    { id: "u32-v041", af: "vuurwerk", en: "fireworks", altEn: ["firework"], exampleAf: "Die hond is bang vir vuurwerke.", exampleEn: "The dog is afraid of fireworks.", pos: "n", pron: "FEWR-verk", clozeForm: "vuurwerke" },
    { id: "u32-v042", af: "optog", en: "parade / procession", altEn: ["parade", "procession", "march"], exampleAf: "Daar is 'n groot optog in die straat.", exampleEn: "There is a big parade in the street.", pos: "n", pron: "OP-tawgh" },
    { id: "u32-v043", af: "sou", en: "would", exampleAf: "Ek sou graag wou kom.", exampleEn: "I would love to come.", pos: "v", pron: "soh" },
    { id: "u32-v044", af: "middernag", en: "midnight", exampleAf: "Om middernag sing almal saam.", exampleEn: "At midnight everyone sings together.", pos: "n", pron: "MID-der-nugh" },
    { id: "u32-v045", af: "feestelik", en: "festive", exampleAf: "Die tafel lyk baie feestelik.", exampleEn: "The table looks very festive.", pos: "adj", pron: "FEES-tuh-lik" },
    { id: "u32-v046", af: "spesiaal", en: "special", exampleAf: "Vandag is 'n spesiale dag.", exampleEn: "Today is a special day.", pos: "adj", pron: "spee-see-AHL", clozeForm: "spesiale" },
    { id: "u32-v047", af: "lint", en: "ribbon", exampleAf: "Sy bind 'n rooi lint om die geskenk.", exampleEn: "She ties a red ribbon around the present.", pos: "n", pron: "lint" },
    { id: "u32-v048", af: "tradisioneel", en: "traditional", exampleAf: "Ons eet tradisionele kos op Erfenisdag.", exampleEn: "We eat traditional food on Heritage Day.", pos: "adj", pron: "truh-dee-see-oh-NEEL", clozeForm: "tradisionele" },
    { id: "u32-v049", af: "onvergeetlik", en: "unforgettable", exampleAf: "Dit was 'n onvergeetlike aand.", exampleEn: "It was an unforgettable evening.", pos: "adj", pron: "on-fer-GHEE-ut-lik", clozeForm: "onvergeetlike" },
    { id: "u32-v050", af: "geseënd", en: "blessed", exampleAf: "Ons wens julle 'n geseënde Kersfees toe.", exampleEn: "We wish you a blessed Christmas.", pos: "adj", pron: "ghuh-SEE-unt", clozeForm: "geseënde" },
  ],
  phrases: [
    { id: "u32-p01", af: "Veels geluk met jou verjaarsdag!", en: "Happy birthday!", altAf: ["Baie geluk met jou verjaarsdag!"] },
    { id: "u32-p02", af: "Geseënde Kersfees!", en: "Merry Christmas! (Blessed Christmas!)" },
    { id: "u32-p03", af: "Voorspoedige Nuwejaar!", en: "Happy New Year!" },
    { id: "u32-p04", af: "Baie geluk met julle troue!", en: "Congratulations on your wedding!" },
    { id: "u32-p05", af: "Mag al jou wense waar word.", en: "May all your wishes come true." },
    { id: "u32-p06", af: "Op julle gesondheid!", en: "To your health!" },
    { id: "u32-p07", af: "Dankie vir die uitnodiging.", en: "Thank you for the invitation." },
    { id: "u32-p08", af: "Ek wens jou alles van die beste toe.", en: "I wish you all the best." },
    { id: "u32-p09", af: "Wat doen julle vir Kersfees?", en: "What are you doing for Christmas?" },
    { id: "u32-p10", af: "Lekker verjaar!", en: "Have a lovely birthday!" },
  ],
  grammar: {
    id: "u32-g01",
    title: "If I had…, I would… — sou and ek wens",
    body: `Celebrations are full of dreaming: *if we had a bigger house… I wish Grandpa were here…* Afrikaans does this with ***as*** (if), ***sou*** (would) and ***ek wens*** (I wish).

**1. Real "if" — it may well happen.** Present tense on both sides. The *as*-clause sends its verb to the end, and the main clause then starts with its verb:

- ***As** dit môre **reën**, **eet** ons binne.* — If it rains tomorrow, we'll eat inside.

**2. Unreal "if" — just imagining.** Put the *as*-clause in the **past**, and use ***sou*** + plain verb in the main clause:

- ***As** ek ryk **was**, **sou** ek 'n huis by die see **koop**.* — If I were rich, I would buy a house by the sea.
- ***As** ek geld **gehad het**, **sou** ek saam met julle **gaan**.* — If I had money, I would go with you.
- ***As** ek jy **was**, **sou** ek haar **nooi**.* — If I were you, I would invite her.

**3. Too late now — the past that never happened.** Keep the past in the *as*-clause and make the *sou* half past as well: ***sou*** … ***ge-*** verb + ***het***:

- ***As** ek dit **geweet het**, **sou** ek 'n geskenk **gebring het**.* — If I had known, I would have brought a present.

**4. Wishes with *ek wens*.** What follows is also not real, so it takes the past form too — *was, kon, wou, het … gehad*:

- ***Ek wens** ek **was** nou by die see.* — I wish I were at the sea now.
- ***Ek wens** ek **kon** sing.* — I wish I could sing.
- ***Ek wens** ons **het** meer tyd **gehad**.* — I wish we had more time.

*Sou* is also your polite friend: *Ek **sou** graag 'n heildronk wou instel* — I would like to propose a toast.`,
    examples: [
      { af: "As ek tyd gehad het, sou ek 'n koek bak.", en: "If I had time, I would bake a cake." },
      { af: "As jy my genooi het, sou ek gekom het.", en: "If you had invited me, I would have come." },
      { af: "Ek wens Oupa was vandag hier.", en: "I wish Grandpa were here today." },
      { af: "Wat sou jy doen as jy 'n miljoen rand wen?", en: "What would you do if you won a million rand?" },
    ],
  },
  cloze: [
    { id: "u32-c01", textAf: "As ek ryk was, {{sou}} ek 'n huis by die see koop.", answer: "sou", distractors: ["sal", "het"], en: "If I were rich, I would buy a house by the sea." },
    { id: "u32-c02", textAf: "As ek tyd gehad {{het}}, sou ek die huis versier.", answer: "het", distractors: ["is", "was"], en: "If I had time, I would decorate the house." },
    { id: "u32-c03", textAf: "Ek wens ek {{was}} nou by julle.", answer: "was", distractors: ["is", "wees"], en: "I wish I were with you now." },
    { id: "u32-c04", textAf: "As jy my genooi het, sou ek {{gekom}} het.", answer: "gekom", distractors: ["kom", "gekoop"], en: "If you had invited me, I would have come." },
    { id: "u32-c05", textAf: "Ek wens ek {{kon}} beter sing.", answer: "kon", distractors: ["kan", "gekan"], en: "I wish I could sing better." },
    { id: "u32-c06", textAf: "{{As}} dit môre reën, eet ons binne.", answer: "As", distractors: ["Dat", "Of"], en: "If it rains tomorrow, we will eat inside." },
    { id: "u32-c07", textAf: "Die kinders {{versier}} die Kersboom.", answer: "versier", distractors: ["verjaar", "bid"], en: "The children are decorating the Christmas tree." },
    { id: "u32-c08", textAf: "Baie {{geluk}} met jou verjaarsdag!", answer: "geluk", distractors: ["fees", "gas"], en: "Happy birthday!" },
  ],
  dialogue: {
    id: "u32-d01",
    title: "Ouma word tagtig",
    titleEn: "Grandma turns eighty",
    lines: [
      { speaker: "Mia", af: "Ouma verjaar volgende maand. Sy word tagtig!", en: "Grandma has her birthday next month. She is turning eighty!" },
      { speaker: "Thabo", af: "Sjoe! Ons moet 'n groot partytjie hou. Wie gaan ons nooi?", en: "Wow! We must throw a big party. Who are we going to invite?", glosses: { hou: "hold / throw (a party); make (a speech)" } },
      { speaker: "Mia", af: "Die hele familie. As ons 'n groter huis gehad het, sou ek die bure ook nooi.", en: "The whole family. If we had a bigger house, I would invite the neighbours too.", glosses: { hele: "whole", groter: "bigger" } },
      { speaker: "Thabo", af: "Ons kan in die tuin feesvier. Ek sal die tafels versier.", en: "We can celebrate in the garden. I will decorate the tables.", glosses: { tafels: "tables" } },
      { speaker: "Mia", af: "Goeie plan. Ek wens net Oom Jan kon kom, maar hy woon nou oorsee.", en: "Good plan. I just wish Uncle Jan could come, but he lives overseas now.", glosses: { goeie: "good (before a noun)" } },
      { speaker: "Thabo", af: "Miskien kan hy 'n video stuur. En wat van die koek?", en: "Maybe he can send a video. And what about the cake?", glosses: { koek: "cake" } },
      { speaker: "Mia", af: "Ek bak dit self — met tagtig kerse!", en: "I'm baking it myself — with eighty candles!", glosses: { bak: "bake" } },
      { speaker: "Thabo", af: "Tagtig? As Ouma almal moes doodblaas, sou sy uitasem wees!", en: "Eighty? If Grandma had to blow them all out, she would be out of breath!", glosses: { doodblaas: "blow out" } },
      { speaker: "Mia", af: "Jy is reg. Agt kerse is genoeg. Sal jy 'n toespraak hou?", en: "You're right. Eight candles are enough. Will you make a speech?", glosses: { genoeg: "enough" } },
      { speaker: "Thabo", af: "Ek? Ek sou eerder die sjampanje oopmaak.", en: "Me? I would rather open the champagne.", glosses: { eerder: "rather" } },
      { speaker: "Mia", af: "Toe nou! Jy is haar gunsteling kleinkind.", en: "Come on! You are her favourite grandchild.", glosses: { kleinkind: "grandchild" } },
      { speaker: "Thabo", af: "Goed dan. Maar dit moet 'n verrassing bly — moenie vir Ouma sê nie!", en: "All right then. But it must stay a surprise — don't tell Grandma!" },
    ],
    questions: [
      {
        q: "How old is Grandma turning?",
        options: ["Seventy", "Eighty", "Ninety"],
        correct: 1,
      },
      {
        q: "Why can't Uncle Jan come to the party?",
        options: ["He lives overseas now", "He is ill", "He was not invited"],
        correct: 0,
      },
      {
        q: "What would Thabo rather do than make a speech?",
        options: ["Bake the cake", "Decorate the tables", "Open the champagne"],
        correct: 2,
      },
    ],
  },
};
