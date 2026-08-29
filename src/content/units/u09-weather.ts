import type { Unit } from "../types";

export const unit: Unit = {
  id: "u09",
  title: "Weather & seasons",
  titleAf: "Weer en seisoene",
  week: 9,
  cefr: "A2",
  description: "Talk about the weather, the seasons, and what tomorrow holds.",
  vocab: [
    { id: "u09-v001", af: "weer", en: "weather", exampleAf: "Die weer is vandag mooi.", exampleEn: "The weather is nice today.", pos: "n", pron: "vee-ur" },
    { id: "u09-v002", af: "son", en: "sun", exampleAf: "Die son skyn helder.", exampleEn: "The sun is shining brightly.", pos: "n", pron: "sawn" },
    { id: "u09-v003", af: "reën", en: "rain / to rain", altEn: ["rain"], exampleAf: "Dit reën die hele dag.", exampleEn: "It has been raining all day.", pos: "n", pron: "RIH-un" },
    { id: "u09-v004", af: "wind", en: "wind", exampleAf: "Die wind waai sterk in Kaapstad.", exampleEn: "The wind blows strongly in Cape Town.", pos: "n", pron: "vint" },
    { id: "u09-v005", af: "wolk", en: "cloud", exampleAf: "Daar is nie 'n wolk in die lug nie.", exampleEn: "There isn't a cloud in the sky.", pos: "n", pron: "vawlk" },
    { id: "u09-v006", af: "sneeu", en: "snow", exampleAf: "Daar is sneeu op die berge.", exampleEn: "There is snow on the mountains.", pos: "n", pron: "snee-oo" },
    { id: "u09-v007", af: "mis", en: "fog / mist", altEn: ["fog", "mist"], exampleAf: "Ry stadig in die mis.", exampleEn: "Drive slowly in the fog.", pos: "n", pron: "mis" },
    { id: "u09-v008", af: "storm", en: "storm", exampleAf: "Die storm kom vanaand.", exampleEn: "The storm is coming tonight.", pos: "n", pron: "stawrm" },
    { id: "u09-v009", af: "donderweer", en: "thunder(storm)", altEn: ["thunder", "thunderstorm"], exampleAf: "Die hond is bang vir donderweer.", exampleEn: "The dog is afraid of thunder.", pos: "n", pron: "DON-der-vee-ur" },
    { id: "u09-v010", af: "weerlig", en: "lightning", exampleAf: "Ek sien weerlig oor die berge.", exampleEn: "I see lightning over the mountains.", pos: "n", pron: "VEER-ligh" },
    { id: "u09-v011", af: "temperatuur", en: "temperature", exampleAf: "Die temperatuur is dertig grade.", exampleEn: "The temperature is thirty degrees.", pos: "n", pron: "tem-puh-rah-TEWR" },
    { id: "u09-v012", af: "graad", en: "degree", exampleAf: "Dit is dertig grade vandag!", exampleEn: "It is thirty degrees today!", pos: "n", pron: "ghraht", clozeForm: "grade" },
    { id: "u09-v013", af: "somer", en: "summer", exampleAf: "Desember is somer in Suid-Afrika.", exampleEn: "December is summer in South Africa.", pos: "n", pron: "SOH-mer" },
    { id: "u09-v014", af: "winter", en: "winter", exampleAf: "Dit reën baie in die Kaapse winter.", exampleEn: "It rains a lot in the Cape winter.", pos: "n", pron: "VIN-ter" },
    { id: "u09-v015", af: "lente", en: "spring", exampleAf: "Die blomme kom uit in die lente.", exampleEn: "The flowers come out in spring.", pos: "n", pron: "LEN-tuh" },
    { id: "u09-v016", af: "herfs", en: "autumn / fall", altEn: ["autumn", "fall"], exampleAf: "In die herfs word die dae korter.", exampleEn: "In autumn the days get shorter.", pos: "n", pron: "herfs" },
    { id: "u09-v017", af: "seisoen", en: "season", exampleAf: "Somer is my gunsteling seisoen.", exampleEn: "Summer is my favourite season.", pos: "n", pron: "say-SOON" },
    { id: "u09-v018", af: "sonnig", en: "sunny", exampleAf: "Môre gaan dit sonnig wees.", exampleEn: "Tomorrow it is going to be sunny.", pos: "adj", pron: "SAW-nigh" },
    { id: "u09-v019", af: "bewolk", en: "cloudy / overcast", altEn: ["cloudy", "overcast"], exampleAf: "Dit is bewolk en koel vandag.", exampleEn: "It is cloudy and cool today.", pos: "adj", pron: "buh-VAWLK" },
    { id: "u09-v020", af: "nat", en: "wet", exampleAf: "My skoene is nat van die reën.", exampleEn: "My shoes are wet from the rain.", pos: "adj", pron: "nut" },
    { id: "u09-v021", af: "droog", en: "dry", exampleAf: "Die Karoo is baie droog.", exampleEn: "The Karoo is very dry.", pos: "adj", pron: "droh-ugh" },
    { id: "u09-v022", af: "koel", en: "cool", exampleAf: "Die aande is koel in die herfs.", exampleEn: "The evenings are cool in autumn.", pos: "adj", pron: "kool" },
    { id: "u09-v023", af: "ysig", en: "icy / freezing", altEn: ["icy", "freezing"], exampleAf: "Die water is ysig koud.", exampleEn: "The water is icy cold.", pos: "adj", pron: "AY-sigh" },
    { id: "u09-v024", af: "helder", en: "clear / bright", altEn: ["clear", "bright"], exampleAf: "Die lug is vanaand helder.", exampleEn: "The sky is clear tonight.", pos: "adj", pron: "HEL-der" },
    { id: "u09-v025", af: "skyn", en: "to shine", altEn: ["shine"], exampleAf: "Die son skyn elke dag.", exampleEn: "The sun shines every day.", pos: "v", pron: "skayn" },
    { id: "u09-v026", af: "waai", en: "to blow (wind)", altEn: ["blow"], exampleAf: "Die wind waai my hoed weg!", exampleEn: "The wind is blowing my hat away!", pos: "v", pron: "vigh" },
    { id: "u09-v027", af: "vries", en: "to freeze", altEn: ["freeze"], exampleAf: "In die winter vries dit snags.", exampleEn: "In winter it freezes at night.", pos: "v", pron: "frees" },
    { id: "u09-v028", af: "reënboog", en: "rainbow", exampleAf: "Kyk, 'n reënboog oor die vallei!", exampleEn: "Look, a rainbow over the valley!", pos: "n", pron: "RIH-un-boo-ugh" },
    { id: "u09-v029", af: "lug", en: "sky / air", altEn: ["sky", "air"], exampleAf: "Die lug is blou en helder.", exampleEn: "The sky is blue and clear.", pos: "n", pron: "lugh" },
    { id: "u09-v030", af: "hael", en: "hail", exampleAf: "Die hael het my kar beskadig.", exampleEn: "The hail damaged my car.", pos: "n", pron: "HAH-ul" },
    { id: "u09-v031", af: "droogte", en: "drought", exampleAf: "Die boere sukkel met die droogte.", exampleEn: "The farmers are struggling with the drought.", pos: "n", pron: "DROH-ugh-tuh" },
    { id: "u09-v032", af: "sambreel", en: "umbrella", exampleAf: "Vat jou sambreel saam!", exampleEn: "Take your umbrella along!", pos: "n", pron: "sum-BREEL" },
    { id: "u09-v033", af: "reënjas", en: "raincoat", exampleAf: "Ek dra 'n reënjas in die reën.", exampleEn: "I wear a raincoat in the rain.", pos: "n", pron: "RIH-un-yus" },
    { id: "u09-v034", af: "voorspelling", en: "forecast / prediction", altEn: ["forecast", "prediction"], exampleAf: "Die voorspelling sê dit gaan reën.", exampleEn: "The forecast says it is going to rain.", pos: "n", pron: "FOOR-spel-ling" },
    { id: "u09-v035", af: "Januarie", en: "January", exampleAf: "Januarie is die warmste maand.", exampleEn: "January is the hottest month.", pos: "n", pron: "yah-nu-AH-ree" },
    { id: "u09-v036", af: "Februarie", en: "February", exampleAf: "My verjaarsdag is in Februarie.", exampleEn: "My birthday is in February.", pos: "n", pron: "fee-bru-AH-ree" },
    { id: "u09-v037", af: "Maart", en: "March", exampleAf: "Die herfs begin in Maart.", exampleEn: "Autumn starts in March.", pos: "n", pron: "mahrt" },
    { id: "u09-v038", af: "April", en: "April", exampleAf: "Ons kuier in April by die familie.", exampleEn: "In April we visit the family.", pos: "n", pron: "ah-PRIL" },
    { id: "u09-v039", af: "Mei", en: "May", exampleAf: "Die dae word koeler in Mei.", exampleEn: "The days get cooler in May.", pos: "n", pron: "may" },
    { id: "u09-v040", af: "Junie", en: "June", exampleAf: "Junie is die begin van die winter.", exampleEn: "June is the start of winter.", pos: "n", pron: "YEW-nee" },
    { id: "u09-v041", af: "Julie", en: "July", exampleAf: "Dit sneeu soms in Julie.", exampleEn: "It sometimes snows in July.", pos: "n", pron: "YEW-lee" },
    { id: "u09-v042", af: "Augustus", en: "August", exampleAf: "Die wind waai baie in Augustus.", exampleEn: "The wind blows a lot in August.", pos: "n", pron: "oh-GHUS-tus" },
    { id: "u09-v043", af: "September", en: "September", exampleAf: "Die lente begin in September.", exampleEn: "Spring starts in September.", pos: "n", pron: "sep-TEM-ber" },
    { id: "u09-v044", af: "Oktober", en: "October", exampleAf: "Oktober is die mooiste maand.", exampleEn: "October is the prettiest month.", pos: "n", pron: "ok-TOH-ber" },
    { id: "u09-v045", af: "November", en: "November", exampleAf: "In November word dit alweer warm.", exampleEn: "In November it gets warm again.", pos: "n", pron: "noh-FEM-ber" },
    { id: "u09-v046", af: "Desember", en: "December", exampleAf: "Desember is vakansietyd!", exampleEn: "December is holiday time!", pos: "n", pron: "dee-SEM-ber" },
  ],
  phrases: [
    { id: "u09-p01", af: "Hoe is die weer vandag?", en: "How is the weather today?" },
    { id: "u09-p02", af: "Dit is 'n pragtige dag!", en: "It is a beautiful day!" },
    { id: "u09-p03", af: "Dit gaan môre reën.", en: "It is going to rain tomorrow." },
    { id: "u09-p04", af: "Die son skyn lekker warm.", en: "The sun is shining nice and warm." },
    { id: "u09-p05", af: "Trek warm aan, dit is koud buite.", en: "Dress warmly, it is cold outside." },
    { id: "u09-p06", af: "Die wind waai vandag sterk.", en: "The wind is blowing strongly today." },
    { id: "u09-p07", af: "Wat sê die weervoorspelling?", en: "What does the weather forecast say?" },
    { id: "u09-p08", af: "Ons kry dalk reën vanaand.", en: "We might get rain tonight." },
    { id: "u09-p09", af: "Die winter is amper verby.", en: "The winter is almost over." },
    { id: "u09-p10", af: "Lekker braaiweer, né?", en: "Great braai weather, right?" },
  ],
  grammar: {
    id: "u09-g01",
    title: "Dit reën! — weather talk & the gaan-future",
    body: `Weather sentences start with a little ***dit*** (it), just like English:

- ***Dit** reën.* — It's raining.
- ***Dit** hael.* — It's hailing.
- ***Dit is** sonnig / bewolk / ysig.* — It's sunny / cloudy / freezing.

Nature things do their own verbs: *Die son **skyn**.* (the sun shines), *Die wind **waai**.* (the wind blows).

For the future — predictions, plans, anything about to happen — use ***gaan*** plus the verb **at the end** (the bracket again!):

- *Dit **gaan** môre **reën**.* — It's going to rain tomorrow.
- *Dit **gaan** vanaand koud **wees**.* — It's going to be cold tonight. (*wees* = "be")
- *Ons **gaan** Saterdag **braai**.* — We're going to braai on Saturday.

Bonus South African fact: the seasons are flipped — Desember is high summer, Junie is mid-winter. Christmas happens at the swimming pool.`,
    examples: [
      { af: "Dit gaan die hele naweek reën.", en: "It is going to rain all weekend." },
      { af: "Die weer gaan môre mooi wees.", en: "The weather is going to be nice tomorrow." },
      { af: "In Julie vries dit snags op die plaas.", en: "In July it freezes at night on the farm." },
    ],
  },
  cloze: [
    { id: "u09-c01", textAf: "Dit {{reën}} vandag.", answer: "reën", distractors: ["waai", "skyn"], en: "It is raining today." },
    { id: "u09-c02", textAf: "Dit {{gaan}} môre reën.", answer: "gaan", distractors: ["is", "het"], en: "It is going to rain tomorrow." },
    { id: "u09-c03", textAf: "Die son {{skyn}} helder.", answer: "skyn", distractors: ["waai", "reën"], en: "The sun is shining brightly." },
    { id: "u09-c04", textAf: "Die wind {{waai}} sterk.", answer: "waai", distractors: ["skyn", "vries"], en: "The wind is blowing strongly." },
    { id: "u09-c05", textAf: "Dit is {{bewolk}} en koel.", answer: "bewolk", distractors: ["sonnig", "droog"], en: "It is cloudy and cool." },
    { id: "u09-c06", textAf: "In die winter {{vries}} dit snags.", answer: "vries", distractors: ["waai", "reën"], en: "In winter it freezes at night." },
    { id: "u09-c07", textAf: "Ek dra 'n {{reënjas}} in die reën.", answer: "reënjas", distractors: ["sambreel", "hemp"], en: "I wear a raincoat in the rain." },
    { id: "u09-c08", textAf: "{{Desember}} is somer in Suid-Afrika.", answer: "Desember", distractors: ["Junie", "Mei"], en: "December is summer in South Africa." },
  ],
  dialogue: {
    id: "u09-d01",
    title: "Reën op pad",
    titleEn: "Rain on the way",
    lines: [
      { speaker: "Karin", af: "Sjoe, dit is warm vandag! Die son skyn mooi.", en: "Wow, it's hot today! The sun is shining beautifully." },
      { speaker: "Riaan", af: "Ja, maar kyk na daardie wolke. Ek dink dit gaan reën.", en: "Yes, but look at those clouds. I think it's going to rain.", glosses: { wolke: "clouds", dink: "think" } },
      { speaker: "Karin", af: "Nee wat! Die weer is perfek vir ons braai.", en: "Nah! The weather is perfect for our braai." },
      { speaker: "Riaan", af: "Die voorspelling sê dit gaan vanaand storm.", en: "The forecast says it's going to storm tonight." },
      { speaker: "Karin", af: "Regtig? Dan moet ons vroeg begin braai!", en: "Really? Then we must start braaiing early!" },
      { speaker: "Riaan", af: "Goeie plan. Ek bring my sambreel — net vir ingeval.", en: "Good plan. I'm bringing my umbrella — just in case.", glosses: { goeie: "good (before a noun)", bring: "bring", plan: "plan", ingeval: "in case" } },
      { speaker: "Karin", af: "In die somer reën dit mos altyd smiddae.", en: "In summer it always rains in the afternoons, you know." },
      { speaker: "Riaan", af: "Ja, maar môre gaan dit weer sonnig en helder wees.", en: "Yes, but tomorrow it's going to be sunny and clear again." },
    ],
    questions: [
      {
        q: "What does the forecast say about tonight?",
        options: ["It will snow", "It will storm", "It will be sunny"],
        correct: 1,
      },
      {
        q: "What is Riaan bringing to the braai?",
        options: ["A raincoat", "An umbrella", "A hat"],
        correct: 1,
      },
    ],
  },
};
