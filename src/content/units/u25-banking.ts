import type { Unit } from "../types";

export const unit: Unit = {
  id: "u25",
  title: "Money, banking & bills",
  titleAf: "Geld en bankwese",
  week: 21,
  cefr: "B1",
  description: "Accounts, bills, saving and debt — and saying what you could, had to and should have done.",
  vocab: [
    { id: "u25-v001", af: "spaarrekening", en: "savings account", exampleAf: "Ek sit elke maand geld in my spaarrekening.", exampleEn: "I put money in my savings account every month.", pos: "n", pron: "SPAHR-ree-kuh-ning" },
    { id: "u25-v002", af: "saldo", en: "balance (of an account)", altEn: ["balance"], exampleAf: "Wat is die saldo van my rekening?", exampleEn: "What is the balance of my account?", pos: "n", pron: "SUL-doh" },
    { id: "u25-v003", af: "lening", en: "loan", exampleAf: "Ons het 'n lening by die bank gekry.", exampleEn: "We got a loan from the bank.", pos: "n", pron: "LEE-ning" },
    { id: "u25-v004", af: "skuld", en: "debt", exampleAf: "Hy het te veel skuld.", exampleEn: "He has too much debt.", pos: "n", pron: "skult" },
    { id: "u25-v005", af: "rente", en: "interest (on money)", altEn: ["interest"], exampleAf: "Die bank betaal baie min rente.", exampleEn: "The bank pays very little interest.", pos: "n", pron: "REN-tuh" },
    { id: "u25-v006", af: "belasting", en: "tax", altEn: ["taxes"], exampleAf: "Almal moet belasting betaal.", exampleEn: "Everyone must pay tax.", pos: "n", pron: "buh-LUS-ting" },
    { id: "u25-v007", af: "versekering", en: "insurance", exampleAf: "Het jou kar versekering?", exampleEn: "Does your car have insurance?", pos: "n", pron: "fer-SEE-kuh-ring" },
    { id: "u25-v008", af: "verband", en: "bond / mortgage", altEn: ["bond", "mortgage", "home loan"], exampleAf: "Ons betaal nog die verband op die huis.", exampleEn: "We are still paying the bond on the house.", pos: "n", pron: "fer-BUNT" },
    { id: "u25-v009", af: "begroting", en: "budget", exampleAf: "Ons werk elke maand met 'n begroting.", exampleEn: "We work with a budget every month.", pos: "n", pron: "buh-GHROH-ting" },
    { id: "u25-v010", af: "inkomste", en: "income", exampleAf: "My inkomste is nie baie groot nie.", exampleEn: "My income is not very big.", pos: "n", pron: "IN-kom-stuh" },
    { id: "u25-v011", af: "uitgawe", en: "expense", altEn: ["expenditure"], exampleAf: "Kos is ons grootste uitgawe.", exampleEn: "Food is our biggest expense.", pos: "n", pron: "AYT-ghah-vuh" },
    { id: "u25-v012", af: "betaling", en: "payment", exampleAf: "Ek het die betaling gister gemaak.", exampleEn: "I made the payment yesterday.", pos: "n", pron: "buh-TAH-ling" },
    { id: "u25-v013", af: "deposito", en: "deposit", exampleAf: "Jy moet eers 'n deposito betaal.", exampleEn: "You have to pay a deposit first.", pos: "n", pron: "deh-POH-see-toh" },
    { id: "u25-v014", af: "paaiement", en: "instalment", altEn: ["installment", "repayment"], exampleAf: "Die paaiement op die kar is baie duur.", exampleEn: "The instalment on the car is very expensive.", pos: "n", pron: "pie-uh-MENT" },
    { id: "u25-v015", af: "kwitansie", en: "receipt", exampleAf: "Kan ek asseblief 'n kwitansie kry?", exampleEn: "May I have a receipt, please?", pos: "n", pron: "kvee-TUN-see" },
    { id: "u25-v016", af: "bankstaat", en: "bank statement", altEn: ["statement"], exampleAf: "Ek kyk elke maand na my bankstaat.", exampleEn: "I look at my bank statement every month.", pos: "n", pron: "BUNK-staht" },
    { id: "u25-v017", af: "kredietkaart", en: "credit card", exampleAf: "Kan ek met my kredietkaart betaal?", exampleEn: "Can I pay with my credit card?", pos: "n", pron: "kruh-DEET-kahrt" },
    { id: "u25-v018", af: "debietorder", en: "debit order", exampleAf: "Die huur gaan met 'n debietorder af.", exampleEn: "The rent goes off by debit order.", pos: "n", pron: "DEE-beet-or-der" },
    { id: "u25-v019", af: "OTM", en: "ATM", altEn: ["cash machine"], altAf: ["kitsbank"], exampleAf: "Daar is 'n OTM langs die winkel.", exampleEn: "There is an ATM next to the shop.", pos: "n", pron: "oh-tee-EM" },
    { id: "u25-v020", af: "bedrag", en: "amount", altEn: ["sum"], exampleAf: "Die bedrag op die rekening is verkeerd.", exampleEn: "The amount on the bill is wrong.", pos: "n", pron: "buh-DRUGH" },
    { id: "u25-v021", af: "koste", en: "cost / costs", altEn: ["cost", "costs", "charges"], exampleAf: "Die bank se koste is te hoog.", exampleEn: "The bank's charges are too high.", pos: "n", pron: "KOS-tuh" },
    { id: "u25-v022", af: "wins", en: "profit", exampleAf: "Die winkel maak 'n goeie wins.", exampleEn: "The shop makes a good profit.", pos: "n", pron: "vins" },
    { id: "u25-v023", af: "verlies", en: "loss", exampleAf: "Die maatskappy het vanjaar 'n groot verlies gely.", exampleEn: "The company suffered a big loss this year.", pos: "n", pron: "fer-LEES" },
    { id: "u25-v024", af: "munt", en: "coin", exampleAf: "Ek het net een munt in my sak.", exampleEn: "I have only one coin in my pocket.", pos: "n", pron: "munt (u as in 'put', but shorter)" },
    { id: "u25-v025", af: "beursie", en: "wallet / purse", altEn: ["wallet", "purse"], exampleAf: "Ek het my beursie by die huis vergeet.", exampleEn: "I forgot my wallet at home.", pos: "n", pron: "BEER-see" },
    { id: "u25-v026", af: "tak", en: "branch", exampleAf: "Die bank het 'n tak in ons dorp.", exampleEn: "The bank has a branch in our town.", pos: "n", pron: "tuk" },
    { id: "u25-v027", af: "oorbetaal", en: "to transfer (money)", altEn: ["transfer"], altAf: ["oorplaas"], exampleAf: "Ek sal die geld vanaand oorbetaal.", exampleEn: "I will transfer the money tonight.", pos: "v", pron: "OOR-buh-tahl" },
    { id: "u25-v028", af: "onttrek", en: "to withdraw", altEn: ["withdraw"], exampleAf: "Ek wil vyfhonderd rand onttrek.", exampleEn: "I want to withdraw five hundred rand.", pos: "v", pron: "ont-TREK" },
    { id: "u25-v029", af: "deponeer", en: "to deposit", altEn: ["deposit"], exampleAf: "Sy deponeer die geld in haar rekening.", exampleEn: "She deposits the money into her account.", pos: "v", pron: "deh-poh-NEER" },
    { id: "u25-v030", af: "leen", en: "to borrow / to lend", altEn: ["borrow", "lend"], exampleAf: "Kan ek twintig rand by jou leen?", exampleEn: "Can I borrow twenty rand from you?", pos: "v", pron: "LEE-un" },
    { id: "u25-v031", af: "terugbetaal", en: "to pay back", altEn: ["pay back", "repay", "to repay"], exampleAf: "Ek sal jou Vrydag terugbetaal.", exampleEn: "I will pay you back on Friday.", pos: "v", pron: "tuh-RUGH-buh-tahl" },
    { id: "u25-v032", af: "belê", en: "to invest", altEn: ["invest"], exampleAf: "Sy belê elke maand 'n bietjie geld.", exampleEn: "She invests a little money every month.", pos: "v", pron: "buh-LEH" },
    { id: "u25-v033", af: "bekostig", en: "to afford", altEn: ["afford"], exampleAf: "Ons kan nie 'n nuwe kar bekostig nie.", exampleEn: "We cannot afford a new car.", pos: "v", pron: "buh-KOS-tigh" },
    { id: "u25-v034", af: "mors", en: "to waste", altEn: ["waste", "to spill", "spill"], exampleAf: "Moenie jou geld mors nie!", exampleEn: "Don't waste your money!", pos: "v", pron: "mawrs" },
    { id: "u25-v035", af: "tel", en: "to count", altEn: ["count"], exampleAf: "Die kassier tel die geld twee keer.", exampleEn: "The cashier counts the money twice.", pos: "v", pron: "tel" },
    { id: "u25-v036", af: "onderteken", en: "to sign", altEn: ["sign"], exampleAf: "Jy moet asseblief hier onderteken.", exampleEn: "You must sign here, please.", pos: "v", pron: "on-der-TEE-ken" },
    { id: "u25-v037", af: "kanselleer", en: "to cancel", altEn: ["cancel"], exampleAf: "Ek wil my versekering kanselleer.", exampleEn: "I want to cancel my insurance.", pos: "v", pron: "kun-suh-LEER" },
    { id: "u25-v038", af: "hernu", en: "to renew", altEn: ["renew"], exampleAf: "Ek moet my bankkaart hernu.", exampleEn: "I have to renew my bank card.", pos: "v", pron: "her-NEW" },
    { id: "u25-v039", af: "styg", en: "to rise / to go up", altEn: ["rise", "go up", "increase", "to increase"], exampleAf: "Die prys van petrol styg weer.", exampleEn: "The price of petrol is going up again.", pos: "v", pron: "staygh" },
    { id: "u25-v040", af: "daal", en: "to fall / to go down", altEn: ["fall", "go down", "drop", "decrease", "to drop"], exampleAf: "Die rente gaan volgende maand daal.", exampleEn: "The interest is going to go down next month.", pos: "v", pron: "dahl" },
    { id: "u25-v041", af: "maandeliks", en: "monthly", altEn: ["every month"], exampleAf: "Ons betaal die huur maandeliks.", exampleEn: "We pay the rent monthly.", pos: "adv", pron: "MAHN-duh-liks" },
    { id: "u25-v042", af: "jaarliks", en: "annually / yearly", altEn: ["annually", "yearly", "annual", "every year"], exampleAf: "Die versekering styg jaarliks.", exampleEn: "The insurance goes up annually.", pos: "adv", pron: "YAHR-liks" },
    { id: "u25-v043", af: "agterstallig", en: "in arrears / overdue", altEn: ["in arrears", "overdue", "behind"], exampleAf: "Jou rekening is twee maande agterstallig.", exampleEn: "Your account is two months in arrears.", pos: "adj", pron: "ugh-ter-STUL-ligh" },
    { id: "u25-v044", af: "gierig", en: "stingy", altEn: ["miserly", "mean", "tight-fisted"], exampleAf: "My oom is ryk maar baie gierig.", exampleEn: "My uncle is rich but very stingy.", pos: "adj", pron: "GHEE-righ" },
    { id: "u25-v045", af: "bankrot", en: "bankrupt", exampleAf: "Die maatskappy is nou bankrot.", exampleEn: "The company is now bankrupt.", pos: "adj", pron: "bunk-ROT" },
    { id: "u25-v046", af: "huurgeld", en: "rent (the money)", altEn: ["rent", "rental"], exampleAf: "Die huurgeld word elke jaar duurder.", exampleEn: "The rent gets more expensive every year.", pos: "n", pron: "HEWR-ghelt" },
    { id: "u25-v047", af: "verhuurder", en: "landlord", altEn: ["landlady", "lessor"], exampleAf: "Ons verhuurder is 'n vriendelike man.", exampleEn: "Our landlord is a friendly man.", pos: "n", pron: "fer-HEWR-der" },
    { id: "u25-v048", af: "huurder", en: "tenant", exampleAf: "Die nuwe huurder trek Saterdag in.", exampleEn: "The new tenant moves in on Saturday.", pos: "n", pron: "HEWR-der" },
    { id: "u25-v049", af: "pensioen", en: "pension", exampleAf: "My pa kry elke maand sy pensioen.", exampleEn: "My dad gets his pension every month.", pos: "n", pron: "pen-see-OON" },
    { id: "u25-v050", af: "werd", en: "worth", exampleAf: "Hierdie huis is baie geld werd.", exampleEn: "This house is worth a lot of money.", pos: "adj", pron: "vairt" },
  ],
  phrases: [
    { id: "u25-p01", af: "Ek wil graag 'n rekening oopmaak.", en: "I would like to open an account." },
    { id: "u25-p02", af: "Kan ek met 'n kaart betaal?", en: "Can I pay by card?" },
    { id: "u25-p03", af: "Hoeveel skuld ek jou?", en: "How much do I owe you?" },
    { id: "u25-p04", af: "Ek het nie kontant by my nie.", en: "I don't have cash on me." },
    { id: "u25-p05", af: "Die geld is nog nie in my rekening nie.", en: "The money is not in my account yet." },
    { id: "u25-p06", af: "Wanneer moet die huur betaal word?", en: "When does the rent have to be paid?" },
    { id: "u25-p07", af: "Ek kan dit ongelukkig nie bekostig nie.", en: "Unfortunately I can't afford it." },
    { id: "u25-p08", af: "Ons moet die gordel intrek.", en: "We have to tighten our belts." },
    { id: "u25-p09", af: "Geld groei nie op my rug nie.", en: "Money doesn't grow on trees. (lit. on my back)" },
    { id: "u25-p10", af: "Ek het die geld gister oorbetaal.", en: "I transferred the money yesterday." },
  ],
  grammar: {
    id: "u25-g01",
    title: "Could, had to, wanted to — modals in the past",
    body: `Ordinary verbs make their past with **het ge-**. The modal verbs don't — each one simply has its own past form, and the main verb still waits at the end, unchanged:

- *kan → **kon*** — *Ek **kon** nie die rekening **betaal** nie.* — I couldn't pay the bill.
- *moet → **moes*** — *Ons **moes** 'n lening **kry**.* — We had to get a loan.
- *wil → **wou*** — *Sy **wou** 'n huis **koop**.* — She wanted to buy a house.
- *sal → **sou*** — *Hy het gesê hy **sou** my **terugbetaal**.* — He said he would pay me back.
- *mag → **mog*** — this one is bookish and rare. In everyday speech people rather say *Ons **is nie toegelaat** om … nie* (we weren't allowed to …).

Now the clever part. Add a **past participle + het** after the modal and you are talking about something that did **not** actually happen:

- *Ek **sou** die kar **gekoop het**.* — I would have bought the car.
- *Jy **moes** meer **gespaar het**.* — You should have saved more.
- *Ons **kon** die geld **belê het**.* — We could have invested the money.

Compare the pair: *Ek **moes betaal*** = I had to pay (and I did). *Ek **moes betaal het*** = I should have paid (but I didn't).

For "would have … if", use *sou … het* with **as**: *Ek **sou** dit **gekoop het** as ek genoeg geld **gehad het**.* — I would have bought it if I had had enough money.`,
    examples: [
      { af: "Ek kon gister nie geld onttrek nie.", en: "I couldn't withdraw money yesterday." },
      { af: "Ons moes die huurgeld vroeg betaal.", en: "We had to pay the rent early." },
      { af: "Jy moes my gebel het!", en: "You should have called me!" },
      { af: "Ek sou jou gehelp het as ek geld gehad het.", en: "I would have helped you if I had had money." },
    ],
  },
  cloze: [
    { id: "u25-c01", textAf: "Ek {{kon}} gister nie die rekening betaal nie.", answer: "kon", distractors: ["kan", "gekan"], en: "I couldn't pay the bill yesterday." },
    { id: "u25-c02", textAf: "Ons {{moes}} verlede jaar 'n lening kry.", answer: "moes", distractors: ["moet", "gemoet"], en: "We had to get a loan last year." },
    { id: "u25-c03", textAf: "Sy {{wou}} altyd 'n eie huis koop.", answer: "wou", distractors: ["wil", "gewil"], en: "She always wanted to buy a house of her own." },
    { id: "u25-c04", textAf: "Jy moes meer geld {{gespaar}} het.", answer: "gespaar", distractors: ["spaar", "spaarde"], en: "You should have saved more money." },
    { id: "u25-c05", textAf: "Ek sou die kar gekoop {{het}} as ek ryk was.", answer: "het", distractors: ["is", "word"], en: "I would have bought the car if I were rich." },
    { id: "u25-c06", textAf: "As ek baie geld gehad het, {{sou}} ek dit belê het.", answer: "sou", distractors: ["sal", "is"], en: "If I had had a lot of money, I would have invested it." },
    { id: "u25-c07", textAf: "Ek wil vyfhonderd rand by die OTM {{onttrek}}.", answer: "onttrek", distractors: ["mors", "styg"], en: "I want to withdraw five hundred rand at the ATM." },
    { id: "u25-c08", textAf: "Ons kan nie 'n nuwe kar {{bekostig}} nie.", answer: "bekostig", distractors: ["tel", "daal"], en: "We cannot afford a new car." },
  ],
  dialogue: {
    id: "u25-d01",
    title: "Waar is my geld heen?",
    titleEn: "Where has my money gone?",
    lines: [
      { speaker: "Lerato", af: "Hoekom lyk jy so bekommerd, Pieter?", en: "Why do you look so worried, Pieter?" },
      { speaker: "Pieter", af: "Ek het vanoggend my bankstaat gekry. My saldo is amper nul!", en: "I got my bank statement this morning. My balance is almost zero!", glosses: { vanoggend: "this morning", gekry: "got" } },
      { speaker: "Lerato", af: "Sjoe! Wat het gebeur?", en: "Wow! What happened?" },
      { speaker: "Pieter", af: "Die huurgeld het gestyg, en ek moes die kar se versekering hernu.", en: "The rent went up, and I had to renew the car's insurance.", glosses: { gestyg: "went up (from styg)" } },
      { speaker: "Lerato", af: "Kon jy nie met die verhuurder praat nie?", en: "Couldn't you talk to the landlord?" },
      { speaker: "Pieter", af: "Ek wou, maar hy sê alles word duurder. Ek moes maar betaal.", en: "I wanted to, but he says everything is getting more expensive. I just had to pay.", glosses: { duurder: "more expensive" } },
      { speaker: "Lerato", af: "Het jy 'n begroting?", en: "Do you have a budget?" },
      { speaker: "Pieter", af: "Nee. Ek moes lankal een gemaak het.", en: "No. I should have made one long ago.", glosses: { gemaak: "made" } },
      { speaker: "Lerato", af: "Kom ons kyk saam na jou uitgawes. Waar mors jy geld?", en: "Let's look at your expenses together. Where do you waste money?", glosses: { uitgawes: "expenses" } },
      { speaker: "Pieter", af: "Wel, ek koop elke dag koffie en middagete by die werk.", en: "Well, I buy coffee and lunch at work every day.", glosses: { wel: "well" } },
      { speaker: "Lerato", af: "Daar is dit! Jy sou baie geld gespaar het as jy kos van die huis af gebring het.", en: "There it is! You would have saved a lot of money if you had brought food from home.", glosses: { gespaar: "saved", gebring: "brought" } },
      { speaker: "Pieter", af: "Jy is reg. Ek wil ook die skuld op my kredietkaart vinniger terugbetaal.", en: "You are right. I also want to pay back the debt on my credit card faster.", glosses: { vinniger: "faster" } },
      { speaker: "Lerato", af: "Goeie plan. En sit elke maand 'n klein bedrag in 'n spaarrekening.", en: "Good plan. And put a small amount into a savings account every month.", glosses: { goeie: "good (before a noun)" } },
      { speaker: "Pieter", af: "Dankie, Lerato! Kom ons drink koffie — by my huis, dis goedkoper!", en: "Thanks, Lerato! Let's have coffee — at my house, it's cheaper!", glosses: { dis: "it's (dit is)", goedkoper: "cheaper" } },
    ],
    questions: [
      {
        q: "Why is Pieter worried?",
        options: ["He lost his wallet", "His bank balance is almost zero", "He lost his job"],
        correct: 1,
      },
      {
        q: "What does Pieter say he should have done long ago?",
        options: ["Made a budget", "Bought a house", "Cancelled his insurance"],
        correct: 0,
      },
      {
        q: "Where does Lerato say he wastes money?",
        options: ["On petrol", "On clothes", "On coffee and lunch at work"],
        correct: 2,
      },
    ],
  },
};
