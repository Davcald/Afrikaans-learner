import type { Unit } from "../types";

export const unit: Unit = {
  id: "u38",
  title: "Science & measurement",
  titleAf: "Wetenskap en mate",
  week: 34,
  cefr: "B2",
  description: "Measuring, counting and comparing — numbers, shapes, materials and experiments.",
  vocab: [
    { id: "u38-v001", af: "mikroskoop", en: "microscope", exampleAf: "Kyk deur die mikroskoop na die blaar.", exampleEn: "Look at the leaf through the microscope.", pos: "n", pron: "mik-roo-SKOO-up" },
    { id: "u38-v002", af: "wetenskaplike", en: "scientist", exampleAf: "My tannie is 'n wetenskaplike.", exampleEn: "My aunt is a scientist.", pos: "n", pron: "vee-ten-SKUP-lik-uh" },
    { id: "u38-v003", af: "eksperiment", en: "experiment", exampleAf: "Die klas doen vandag 'n eksperiment.", exampleEn: "The class is doing an experiment today.", pos: "n", pron: "eks-peh-ri-MENT" },
    { id: "u38-v004", af: "laboratorium", en: "laboratory", altEn: ["lab"], exampleAf: "Sy werk in 'n laboratorium by die universiteit.", exampleEn: "She works in a laboratory at the university.", pos: "n", pron: "lub-oh-ruh-TOO-ree-um" },
    { id: "u38-v005", af: "swaartekrag", en: "gravity", exampleAf: "Swaartekrag trek alles grond toe.", exampleEn: "Gravity pulls everything to the ground.", pos: "n", pron: "SWAHR-tuh-krugh" },
    { id: "u38-v006", af: "sentimeter", en: "centimetre", altEn: ["centimeter", "cm"], exampleAf: "Die tafel is tagtig sentimeter breed.", exampleEn: "The table is eighty centimetres wide.", pos: "n", pron: "SEN-ti-mee-uh-ter" },
    { id: "u38-v007", af: "breedte", en: "width", altEn: ["breadth"], exampleAf: "Die breedte van die deur is een meter.", exampleEn: "The width of the door is one metre.", pos: "n", pron: "BREE-uh-tuh" },
    { id: "u38-v008", af: "hoogte", en: "height", altEn: ["altitude"], exampleAf: "Die hoogte van die berg is duisend meter.", exampleEn: "The height of the mountain is a thousand metres.", pos: "n", pron: "HOH-ugh-tuh" },
    { id: "u38-v009", af: "formule", en: "formula", exampleAf: "Die onderwyser skryf die formule op die bord.", exampleEn: "The teacher writes the formula on the board.", pos: "n", pron: "for-MEW-luh" },
    { id: "u38-v010", af: "meter", en: "metre", altEn: ["meter"], exampleAf: "Die muur is drie meter hoog.", exampleEn: "The wall is three metres high.", pos: "n", pron: "MEE-uh-ter" },
    { id: "u38-v011", af: "kilogram", en: "kilogram", altEn: ["kilo", "kg"], exampleAf: "Die sak weeg tien kilogram.", exampleEn: "The bag weighs ten kilograms.", pos: "n", pron: "KEE-loo-ghrum" },
    { id: "u38-v012", af: "liter", en: "litre", altEn: ["liter"], exampleAf: "Ek drink twee liter water per dag.", exampleEn: "I drink two litres of water per day.", pos: "n", pron: "LEE-ter" },
    { id: "u38-v013", af: "sirkel", en: "circle", exampleAf: "Die kinders sit in 'n sirkel.", exampleEn: "The children are sitting in a circle.", pos: "n", pron: "SIR-kul" },
    { id: "u38-v014", af: "vierkant", en: "square", exampleAf: "'n Vierkant het vier kante.", exampleEn: "A square has four sides.", pos: "n", pron: "FEER-kunt" },
    { id: "u38-v015", af: "driehoek", en: "triangle", exampleAf: "Sny die brood in 'n driehoek.", exampleEn: "Cut the bread into a triangle.", pos: "n", pron: "DREE-hook" },
    { id: "u38-v016", af: "lyn", en: "line", exampleAf: "Teken 'n reguit lyn op die papier.", exampleEn: "Draw a straight line on the paper.", pos: "n", pron: "layn" },
    { id: "u38-v017", af: "reghoek", en: "rectangle", exampleAf: "Die kamer is 'n lang reghoek.", exampleEn: "The room is a long rectangle.", pos: "n", pron: "REGH-hook" },
    { id: "u38-v018", af: "metaal", en: "metal", exampleAf: "Die deur is van metaal gemaak.", exampleEn: "The door is made of metal.", pos: "n", pron: "muh-TAHL" },
    { id: "u38-v019", af: "yster", en: "iron", exampleAf: "Die ou ketel is van yster gemaak.", exampleEn: "The old kettle is made of iron.", pos: "n", pron: "AY-ster" },
    { id: "u38-v020", af: "staal", en: "steel", exampleAf: "Die brug is van staal gebou.", exampleEn: "The bridge is built of steel.", pos: "n", pron: "stahl" },
    { id: "u38-v021", af: "eenheid", en: "unit", altEn: ["unity"], exampleAf: "Die meter is 'n eenheid van lengte.", exampleEn: "The metre is a unit of length.", pos: "n", pron: "EE-un-hayt" },
    { id: "u38-v022", af: "vloeistof", en: "liquid", altEn: ["fluid"], exampleAf: "Water is 'n vloeistof.", exampleEn: "Water is a liquid.", pos: "n", pron: "FLOO-ee-stof" },
    { id: "u38-v023", af: "som", en: "sum", altEn: ["maths problem"], exampleAf: "Hierdie som is baie moeilik.", exampleEn: "This sum is very difficult.", pos: "n", pron: "som" },
    { id: "u38-v024", af: "syfer", en: "figure / digit", altEn: ["figure", "digit", "numeral"], exampleAf: "Die laaste syfer is verkeerd.", exampleEn: "The last digit is wrong.", pos: "n", pron: "SAY-fer" },
    { id: "u38-v025", af: "getal", en: "number", exampleAf: "Kies 'n getal tussen een en tien.", exampleEn: "Choose a number between one and ten.", pos: "n", pron: "ghuh-TUL" },
    { id: "u38-v026", af: "persent", en: "percent", altEn: ["per cent"], exampleAf: "Tien persent van die klas is siek.", exampleEn: "Ten percent of the class is ill.", pos: "n", pron: "per-SENT" },
    { id: "u38-v027", af: "totaal", en: "total", exampleAf: "Die totaal is honderd-en-vyftig rand.", exampleEn: "The total is a hundred and fifty rand.", pos: "n", pron: "too-TAHL" },
    { id: "u38-v028", af: "komma", en: "comma / decimal point", altEn: ["comma", "decimal point", "point"], exampleAf: "Twee komma vyf is twee en 'n half.", exampleEn: "Two point five is two and a half.", pos: "n", pron: "KOM-muh" },
    { id: "u38-v029", af: "resultaat", en: "result", exampleAf: "Die resultaat van die toets is goed.", exampleEn: "The result of the test is good.", pos: "n", pron: "reh-sul-TAHT" },
    { id: "u38-v030", af: "oppervlakte", en: "surface / area", altEn: ["surface", "area"], exampleAf: "Die oppervlakte van die tafel is glad.", exampleEn: "The surface of the table is smooth.", pos: "n", pron: "OP-per-fluk-tuh" },
    { id: "u38-v031", af: "teorie", en: "theory", exampleAf: "Dit is net 'n teorie.", exampleEn: "It is only a theory.", pos: "n", pron: "tee-oo-REE" },
    { id: "u38-v032", af: "uitvinding", en: "invention", exampleAf: "Die selfoon is 'n wonderlike uitvinding.", exampleEn: "The cellphone is a wonderful invention.", pos: "n", pron: "AYT-fin-ding" },
    { id: "u38-v033", af: "miljoen", en: "million", exampleAf: "Die stad het vier miljoen mense.", exampleEn: "The city has four million people.", pos: "num", pron: "mil-YOON" },
    { id: "u38-v034", af: "hoeveelheid", en: "quantity / amount", altEn: ["quantity", "amount"], exampleAf: "Meet die hoeveelheid water in die glas.", exampleEn: "Measure the amount of water in the glass.", pos: "n", pron: "HOO-feel-hayt" },
    { id: "u38-v035", af: "uitvind", en: "to find out / to invent", altEn: ["find out", "invent", "to find out", "to invent", "discover"], exampleAf: "Ek wil uitvind hoe dit werk.", exampleEn: "I want to find out how it works.", pos: "v", pron: "AYT-fint" },
    { id: "u38-v036", af: "weeg", en: "to weigh", altEn: ["weigh"], exampleAf: "Hoeveel weeg jou tas?", exampleEn: "How much does your suitcase weigh?", pos: "v", pron: "VEE-ugh" },
    { id: "u38-v037", af: "vermenigvuldig", en: "to multiply", altEn: ["multiply"], exampleAf: "Vermenigvuldig die lengte met die breedte.", exampleEn: "Multiply the length by the width.", pos: "v", pron: "fer-MEE-nigh-ful-digh" },
    { id: "u38-v038", af: "afrond", en: "to round off", altEn: ["round off", "to round", "round"], exampleAf: "Jy kan die getal na tien afrond.", exampleEn: "You can round the number off to ten.", pos: "v", pron: "UF-ront" },
    { id: "u38-v039", af: "aftrek", en: "to subtract", altEn: ["subtract", "deduct", "to deduct"], exampleAf: "Jy moet vyf van twintig aftrek.", exampleEn: "You must subtract five from twenty.", pos: "v", pron: "UF-trek" },
    { id: "u38-v040", af: "bereken", en: "to calculate", altEn: ["calculate", "work out"], exampleAf: "Ons moet die koste van die reis bereken.", exampleEn: "We must calculate the cost of the trip.", pos: "v", pron: "buh-REE-ken" },
    { id: "u38-v041", af: "vergelyk", en: "to compare", altEn: ["compare"], exampleAf: "Vergelyk die pryse voordat jy koop.", exampleEn: "Compare the prices before you buy.", pos: "v", pron: "fer-ghuh-LAYK" },
    { id: "u38-v042", af: "smelt", en: "to melt", altEn: ["melt"], exampleAf: "Die botter smelt in die son.", exampleEn: "The butter melts in the sun.", pos: "v", pron: "smelt" },
    { id: "u38-v043", af: "gelyk", en: "equal", altEn: ["equal to", "level", "even"], exampleAf: "Twee plus twee is gelyk aan vier.", exampleEn: "Two plus two is equal to four.", pos: "adj", pron: "ghuh-LAYK" },
    { id: "u38-v044", af: "ongeveer", en: "approximately / about", altEn: ["approximately", "about", "roughly"], exampleAf: "Die dorp is ongeveer tien kilometer ver.", exampleEn: "The town is approximately ten kilometres away.", pos: "adv", pron: "ON-ghuh-fee-er" },
    { id: "u38-v045", af: "gemiddeld", en: "on average / average", altEn: ["on average", "average"], exampleAf: "Ek slaap gemiddeld sewe uur per nag.", exampleEn: "I sleep seven hours a night on average.", pos: "adv", pron: "ghuh-MID-delt" },
    { id: "u38-v046", af: "diep", en: "deep", exampleAf: "Die water is hier baie diep.", exampleEn: "The water is very deep here.", pos: "adj", pron: "deep" },
    { id: "u38-v047", af: "rond", en: "round", exampleAf: "Die maan is vanaand mooi rond.", exampleEn: "The moon is nice and round tonight.", pos: "adj", pron: "ront" },
    { id: "u38-v048", af: "plat", en: "flat", exampleAf: "Die Karoo is plat en droog.", exampleEn: "The Karoo is flat and dry.", pos: "adj", pron: "plut" },
    { id: "u38-v049", af: "akkuraat", en: "accurate", altEn: ["precise"], exampleAf: "Jou horlosie is nie baie akkuraat nie.", exampleEn: "Your watch is not very accurate.", pos: "adj", pron: "uk-kew-RAHT" },
    { id: "u38-v050", af: "dubbel", en: "double", altEn: ["twice"], exampleAf: "Die prys is nou dubbel wat dit was.", exampleEn: "The price is now double what it was.", pos: "adj", pron: "DUB-bul" },
  ],
  phrases: [
    { id: "u38-p01", af: "Hoe lank is dit?", en: "How long is it?" },
    { id: "u38-p02", af: "Hoeveel weeg dit?", en: "How much does it weigh?" },
    { id: "u38-p03", af: "Dit is twee meter lank en een meter breed.", en: "It is two metres long and one metre wide." },
    { id: "u38-p04", af: "Waarvan is dit gemaak?", en: "What is it made of?" },
    { id: "u38-p05", af: "Dit kos vyftig rand per kilogram.", en: "It costs fifty rand per kilogram." },
    { id: "u38-p06", af: "Dit is twee keer so groot soos myne.", en: "It is twice as big as mine." },
    { id: "u38-p07", af: "Hoe meer, hoe beter!", en: "The more, the better!" },
    { id: "u38-p08", af: "Die helfte is genoeg, dankie.", en: "Half is enough, thank you." },
    { id: "u38-p09", af: "Wat is die verskil tussen die twee?", en: "What is the difference between the two?" },
    { id: "u38-p10", af: "Die syfers klop nie.", en: "The figures don't add up." },
  ],
  grammar: {
    id: "u38-g01",
    title: "Third, a third, 3,5 — numbers that measure and compare",
    body: `You can count. Now let's put numbers to work.

**Ordinals: -de and -ste**

*Eerste, tweede, derde* you know. From there, add **-de** up to nineteen, and **-ste** from twenty:

- *vier**de**, vyf**de**, ses**de**, sewen**de**, negen**de**, tien**de**, vyftien**de***
- *twintig**ste**, een-en-dertig**ste**, honderd**ste***
- the odd ones: ***eerste***, ***derde*** and ***agtste*** (eighth)

In figures: *1ste, 2de, 3de, 8ste, 20ste*.

**Fractions and decimals**

- *'n **half**, 'n **derde**, 'n **kwart**, twee **derdes**, drie**kwart***
- *een en 'n half* = ***anderhalf***: *anderhalf uur* — an hour and a half
- Afrikaans uses a decimal **comma**: *2,5* is *twee **komma** vyf*.

**Measurements stay singular**

After a number, units do not take a plural: *vyf **kilometer**, twee **liter**, tien **rand**, drie **uur**, ses **jaar***. "Per" is simply ***per***, and in everyday speech often just ***'n***: *120 kilometer **per** uur*, *R50 **'n** kilogram*, *twee keer **'n** week*.

**Comparing**

- ***so … soos*** (as … as): *Hout is nie **so** swaar **soos** metaal nie.*
- ***net so … soos*** (just as … as): *Sy is **net so** lank **soos** haar ma.*
- ***meer as / minder as***: *Dit kos **meer as** honderd rand.*
- ***twee keer so … soos***: *Die stad is **twee keer so** groot **soos** ons dorp.*
- ***hoe … hoe*** (the more … the more): ***Hoe** meer jy oefen, **hoe** beter word jy.* The first half sends its verb to the end; the second half puts the verb straight after the comparative.`,
    examples: [
      { af: "Dit is my derde koppie koffie vandag.", en: "This is my third cup of coffee today." },
      { af: "Die tafel is twee komma vyf meter lank.", en: "The table is two point five metres long." },
      { af: "Die kar ry honderd-en-twintig kilometer per uur.", en: "The car is driving a hundred and twenty kilometres per hour." },
      { af: "Hoe ouer ek word, hoe minder slaap ek.", en: "The older I get, the less I sleep." },
    ],
  },
  cloze: [
    { id: "u38-c01", textAf: "Vandag is my {{agtste}} dag by die nuwe werk.", answer: "agtste", distractors: ["agtde", "agt"], en: "Today is my eighth day at the new job." },
    { id: "u38-c02", textAf: "Die kar ry tagtig kilometer {{per}} uur.", answer: "per", distractors: ["vir", "op"], en: "The car is driving eighty kilometres per hour." },
    { id: "u38-c03", textAf: "Hout is nie so swaar {{soos}} metaal nie.", answer: "soos", distractors: ["as", "dan"], en: "Wood is not as heavy as metal." },
    { id: "u38-c04", textAf: "Die brug is meer {{as}} 'n kilometer lank.", answer: "as", distractors: ["soos", "van"], en: "The bridge is more than a kilometre long." },
    { id: "u38-c05", textAf: "Hoe meer jy lees, {{hoe}} meer leer jy.", answer: "hoe", distractors: ["so", "dan"], en: "The more you read, the more you learn." },
    { id: "u38-c06", textAf: "Die pad is vyf {{kilometer}} lank.", answer: "kilometer", distractors: ["kilometers", "kilometre"], en: "The road is five kilometres long." },
    { id: "u38-c07", textAf: "Twee {{derdes}} van die klas is vroue.", answer: "derdes", distractors: ["derde", "drie"], en: "Two thirds of the class are women." },
    { id: "u38-c08", textAf: "Ons moet die lengte van die kamer {{meet}}.", answer: "meet", distractors: ["weeg", "smelt"], en: "We must measure the length of the room." },
  ],
  dialogue: {
    id: "u38-d01",
    title: "Die derde tafel",
    titleEn: "The third table",
    lines: [
      { speaker: "Kobus", af: "Ek wil 'n tafel vir die stoep bou. Help my gou meet.", en: "I want to build a table for the stoep. Quickly help me measure." },
      { speaker: "Elsa", af: "Goed. Wat is die lengte van die hout?", en: "Fine. What is the length of the wood?" },
      { speaker: "Kobus", af: "Twee komma vier meter. Ek het net die helfte nodig.", en: "Two point four metres. I only need half.", glosses: { nodig: "(het nodig) need" } },
      { speaker: "Elsa", af: "Dus een komma twee meter. En die breedte?", en: "So one point two metres. And the width?" },
      { speaker: "Kobus", af: "Ongeveer tagtig sentimeter.", en: "Approximately eighty centimetres." },
      { speaker: "Elsa", af: "\"Ongeveer\" is nie goed genoeg nie! Jy moet akkuraat meet.", en: "\"Approximately\" isn't good enough! You must measure accurately.", glosses: { genoeg: "enough" } },
      { speaker: "Kobus", af: "Reg, dit is presies agt-en-sewentig sentimeter.", en: "Right, it is exactly seventy-eight centimetres." },
      { speaker: "Elsa", af: "Hoeveel weeg die hout? Die tafel moenie te swaar wees nie.", en: "How much does the wood weigh? The table mustn't be too heavy." },
      { speaker: "Kobus", af: "Dit is nie so swaar soos metaal nie. Ek skat ongeveer twintig kilogram.", en: "It is not as heavy as metal. I estimate about twenty kilograms.", glosses: { skat: "estimate / reckon" } },
      { speaker: "Elsa", af: "Is dit die eerste tafel wat jy bou?", en: "Is this the first table you are building?" },
      { speaker: "Kobus", af: "Nee, die derde. Hoe meer ek bou, hoe beter word ek.", en: "No, the third. The more I build, the better I get." },
      { speaker: "Elsa", af: "Ons sal sien. Die tweede een was glad nie plat nie!", en: "We'll see. The second one wasn't flat at all!" },
    ],
    questions: [
      {
        q: "How much of the wood does Kobus need?",
        options: ["All of it", "Half of it", "A third of it"],
        correct: 1,
      },
      {
        q: "What does Elsa insist on?",
        options: ["That he measures accurately", "That he uses metal", "That he buys a table instead"],
        correct: 0,
      },
      {
        q: "What was wrong with Kobus's second table?",
        options: ["It was too heavy", "It was too small", "It was not flat"],
        correct: 2,
      },
    ],
  },
};
