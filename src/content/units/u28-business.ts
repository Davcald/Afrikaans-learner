import type { Unit } from "../types";

export const unit: Unit = {
  id: "u28",
  title: "Office & business",
  titleAf: "Kantoor en besigheid",
  week: 24,
  cefr: "B1",
  description: "Meetings, emails, orders and deadlines — and how to sound polite and professional.",
  vocab: [
    { id: "u28-v001", af: "kontrak", en: "contract", exampleAf: "Lees die kontrak voordat jy dit onderteken.", exampleEn: "Read the contract before you sign it.", pos: "n", pron: "kon-TRUK" },
    { id: "u28-v002", af: "sperdatum", en: "deadline", altEn: ["closing date", "due date"], exampleAf: "Die sperdatum vir die projek is Vrydag.", exampleEn: "The deadline for the project is Friday.", pos: "n", pron: "SPAIR-dah-tum" },
    { id: "u28-v003", af: "verslag", en: "report", exampleAf: "Ek moet nog die verslag skryf.", exampleEn: "I still have to write the report.", pos: "n", pron: "fer-SLUGH" },
    { id: "u28-v004", af: "aanbieding", en: "presentation", exampleAf: "Haar aanbieding was kort en duidelik.", exampleEn: "Her presentation was short and clear.", pos: "n", pron: "AHN-bee-ding" },
    { id: "u28-v005", af: "agenda", en: "agenda", exampleAf: "Wat is vandag op die agenda?", exampleEn: "What is on the agenda today?", pos: "n", pron: "uh-GHEN-dah" },
    { id: "u28-v006", af: "notule", en: "minutes (of a meeting)", altEn: ["minutes"], exampleAf: "Wie neem vandag die notule?", exampleEn: "Who is taking the minutes today?", pos: "n", pron: "noh-TEW-luh" },
    { id: "u28-v007", af: "dokument", en: "document", exampleAf: "Stuur asseblief die dokument vir my.", exampleEn: "Please send me the document.", pos: "n", pron: "doh-kew-MENT" },
    { id: "u28-v008", af: "lêer", en: "file", altEn: ["folder"], exampleAf: "Ek kan nie die lêer oopmaak nie.", exampleEn: "I can't open the file.", pos: "n", pron: "LAIR" },
    { id: "u28-v009", af: "drukker", en: "printer", exampleAf: "Die drukker is al weer stukkend.", exampleEn: "The printer is broken yet again.", pos: "n", pron: "DRUK-ker" },
    { id: "u28-v010", af: "uitdruk", en: "to print (out)", altEn: ["print", "to print", "print out"], exampleAf: "Kan jy die verslag vir my uitdruk?", exampleEn: "Can you print the report for me?", pos: "v", pron: "AYT-druk" },
    { id: "u28-v011", af: "afskrif", en: "copy", exampleAf: "Maak asseblief 'n afskrif van die kontrak.", exampleEn: "Please make a copy of the contract.", pos: "n", pron: "UF-skrif" },
    { id: "u28-v012", af: "handtekening", en: "signature", exampleAf: "Ons het nog u handtekening nodig.", exampleEn: "We still need your signature.", pos: "n", pron: "HUNT-tee-kuh-ning" },
    { id: "u28-v013", af: "faktuur", en: "invoice", exampleAf: "Ek stuur die faktuur vandag per e-pos.", exampleEn: "I am sending the invoice by email today.", pos: "n", pron: "fuk-TEWR" },
    { id: "u28-v014", af: "kwotasie", en: "quotation / quote", altEn: ["quotation", "quote"], exampleAf: "Kan u vir ons 'n kwotasie stuur?", exampleEn: "Could you send us a quotation?", pos: "n", pron: "kvoh-TAH-see" },
    { id: "u28-v015", af: "bestelling", en: "order", exampleAf: "U bestelling is gereed.", exampleEn: "Your order is ready.", pos: "n", pron: "buh-STEL-ling" },
    { id: "u28-v016", af: "aflewering", en: "delivery", exampleAf: "Aflewering is gratis in Kaapstad.", exampleEn: "Delivery is free in Cape Town.", pos: "n", pron: "UF-lee-vuh-ring" },
    { id: "u28-v017", af: "voorraad", en: "stock", altEn: ["supply", "inventory"], exampleAf: "Ons het ongelukkig nie meer voorraad nie.", exampleEn: "Unfortunately we have no more stock.", pos: "n", pron: "FOOR-raht" },
    { id: "u28-v018", af: "verskaffer", en: "supplier", exampleAf: "Ons soek 'n nuwe verskaffer.", exampleEn: "We are looking for a new supplier.", pos: "n", pron: "fer-SKUF-fer" },
    { id: "u28-v019", af: "kliënt", en: "client", exampleAf: "Die kliënt is nie tevrede nie.", exampleEn: "The client is not satisfied.", pos: "n", pron: "klee-ENT" },
    { id: "u28-v020", af: "afdeling", en: "department", altEn: ["division", "section"], exampleAf: "In watter afdeling werk jy?", exampleEn: "Which department do you work in?", pos: "n", pron: "UF-dee-ling" },
    { id: "u28-v021", af: "direkteur", en: "director", exampleAf: "Die direkteur wil jou dadelik sien.", exampleEn: "The director wants to see you immediately.", pos: "n", pron: "dee-rek-TEER" },
    { id: "u28-v022", af: "ontvangs", en: "reception", exampleAf: "Wag asseblief by ontvangs.", exampleEn: "Please wait at reception.", pos: "n", pron: "ont-FUNGS" },
    { id: "u28-v023", af: "personeel", en: "staff", altEn: ["personnel"], exampleAf: "Al die personeel is by die vergadering.", exampleEn: "All the staff are at the meeting.", pos: "n", pron: "per-soh-NEEL" },
    { id: "u28-v024", af: "onderhoud", en: "interview", exampleAf: "Ek het môre 'n onderhoud vir 'n nuwe werk.", exampleEn: "I have an interview for a new job tomorrow.", pos: "n", pron: "ON-der-hoht" },
    { id: "u28-v025", af: "verlof", en: "leave (time off)", altEn: ["leave", "time off"], exampleAf: "Ek is volgende week met verlof.", exampleEn: "I am on leave next week.", pos: "n", pron: "fer-LOF" },
    { id: "u28-v026", af: "oortyd", en: "overtime", exampleAf: "Ons werk hierdie week baie oortyd.", exampleEn: "We are working a lot of overtime this week.", pos: "n", pron: "OOR-tayt" },
    { id: "u28-v027", af: "bevordering", en: "promotion", exampleAf: "Sy het verlede maand 'n bevordering gekry.", exampleEn: "She got a promotion last month.", pos: "n", pron: "buh-FOR-duh-ring" },
    { id: "u28-v028", af: "bedank", en: "to thank", altEn: ["thank", "to resign", "resign"], exampleAf: "Ek wil u bedank vir u hulp.", exampleEn: "I want to thank you for your help.", pos: "v", pron: "buh-DUNK" },
    { id: "u28-v029", af: "aanstel", en: "to appoint", altEn: ["appoint", "hire", "to hire"], exampleAf: "Ons wil 'n nuwe bestuurder aanstel.", exampleEn: "We want to appoint a new manager.", pos: "v", pron: "AHN-stel" },
    { id: "u28-v030", af: "onderhandel", en: "to negotiate", altEn: ["negotiate"], exampleAf: "Ons onderhandel nog oor die prys.", exampleEn: "We are still negotiating about the price.", pos: "v", pron: "on-der-HUN-del" },
    { id: "u28-v031", af: "ooreenkoms", en: "agreement", altEn: ["deal"], exampleAf: "Ons het 'n ooreenkoms met die verskaffer.", exampleEn: "We have an agreement with the supplier.", pos: "n", pron: "oor-EEN-koms" },
    { id: "u28-v032", af: "vennoot", en: "partner (in business)", altEn: ["partner", "business partner"], exampleAf: "My vennoot werk met die geld.", exampleEn: "My partner handles the money.", pos: "n", pron: "FEN-noht" },
    { id: "u28-v033", af: "mededinger", en: "competitor", altEn: ["rival"], exampleAf: "Ons mededinger se pryse is laer.", exampleEn: "Our competitor's prices are lower.", pos: "n", pron: "MEE-duh-ding-er" },
    { id: "u28-v034", af: "bemarking", en: "marketing", exampleAf: "My suster werk in bemarking.", exampleEn: "My sister works in marketing.", pos: "n", pron: "buh-MAR-king" },
    { id: "u28-v035", af: "verkope", en: "sales", exampleAf: "Ons verkope het vanjaar gestyg.", exampleEn: "Our sales went up this year.", pos: "n", pron: "fer-KOH-puh" },
    { id: "u28-v036", af: "doelwit", en: "target / goal", altEn: ["target", "goal", "objective"], exampleAf: "Ons doelwit is honderd nuwe kliënte.", exampleEn: "Our target is a hundred new clients.", pos: "n", pron: "DOOL-vit" },
    { id: "u28-v037", af: "goedkeur", en: "to approve", altEn: ["approve"], exampleAf: "Die baas moet eers die plan goedkeur.", exampleEn: "The boss has to approve the plan first.", pos: "v", pron: "GHOOT-keer" },
    { id: "u28-v038", af: "bevestig", en: "to confirm", altEn: ["confirm"], exampleAf: "Kan u asseblief die afspraak bevestig?", exampleEn: "Could you please confirm the appointment?", pos: "v", pron: "buh-FES-tigh" },
    { id: "u28-v039", af: "uitstel", en: "to postpone", altEn: ["postpone", "put off", "delay"], exampleAf: "Ons moet die vergadering tot Maandag uitstel.", exampleEn: "We have to postpone the meeting until Monday.", pos: "v", pron: "AYT-stel" },
    { id: "u28-v040", af: "reël", en: "to arrange", altEn: ["arrange", "organise", "organize", "to organise"], exampleAf: "Ek sal 'n vergadering vir môre reël.", exampleEn: "I will arrange a meeting for tomorrow.", pos: "v", pron: "REE-ul" },
    { id: "u28-v041", af: "terugvoer", en: "feedback", exampleAf: "Baie dankie vir u terugvoer.", exampleEn: "Thank you very much for your feedback.", pos: "n", pron: "tuh-RUGH-foor" },
    { id: "u28-v042", af: "navraag", en: "enquiry", altEn: ["inquiry", "query"], exampleAf: "Dankie vir u navraag oor ons pryse.", exampleEn: "Thank you for your enquiry about our prices.", pos: "n", pron: "NAH-frahgh" },
    { id: "u28-v043", af: "klagte", en: "complaint", exampleAf: "Ons het 'n klagte van 'n klant ontvang.", exampleEn: "We received a complaint from a customer.", pos: "n", pron: "KLUGH-tuh" },
    { id: "u28-v044", af: "versoek", en: "request", exampleAf: "Ek het 'n klein versoek.", exampleEn: "I have a small request.", pos: "n", pron: "fer-SOOK" },
    { id: "u28-v045", af: "aanstuur", en: "to forward", altEn: ["forward", "send on"], exampleAf: "Ek sal die e-pos vir u aanstuur.", exampleEn: "I will forward the email to you.", pos: "v", pron: "AHN-stewr" },
    { id: "u28-v046", af: "aanheg", en: "to attach", altEn: ["attach"], exampleAf: "Jy moet die faktuur by die e-pos aanheg.", exampleEn: "You must attach the invoice to the email.", pos: "v", pron: "AHN-hegh" },
    { id: "u28-v047", af: "dringend", en: "urgent / urgently", altEn: ["urgent", "urgently"], exampleAf: "Hierdie saak is baie dringend.", exampleEn: "This matter is very urgent.", pos: "adj", pron: "DRING-ent" },
    { id: "u28-v048", af: "beskikbaar", en: "available", exampleAf: "Is u môre om tienuur beskikbaar?", exampleEn: "Are you available at ten o'clock tomorrow?", pos: "adj", pron: "buh-SKIK-bahr" },
    { id: "u28-v049", af: "verantwoordelik", en: "responsible", exampleAf: "Wie is verantwoordelik vir hierdie projek?", exampleEn: "Who is responsible for this project?", pos: "adj", pron: "fer-unt-VOOR-duh-lik" },
    { id: "u28-v050", af: "geagte", en: "Dear (formal letter opening)", altEn: ["dear", "esteemed"], exampleAf: "Die brief begin met \"Geagte mevrou Botha\".", exampleEn: "The letter begins with \"Dear Mrs Botha\".", pos: "adj", pron: "ghuh-UGH-tuh", clozeForm: "Geagte" },
  ],
  phrases: [
    { id: "u28-p01", af: "Geagte meneer Botha", en: "Dear Mr Botha (formal)" },
    { id: "u28-p02", af: "Vriendelike groete", en: "Kind regards" },
    { id: "u28-p03", af: "Baie dankie vir u e-pos.", en: "Thank you very much for your email." },
    { id: "u28-p04", af: "Aangeheg vind u die faktuur.", en: "Please find the invoice attached." },
    { id: "u28-p05", af: "Ek sien uit daarna om van u te hoor.", en: "I look forward to hearing from you." },
    { id: "u28-p06", af: "Laat weet my asseblief as u enige vrae het.", en: "Please let me know if you have any questions." },
    { id: "u28-p07", af: "Sou u my asseblief kon help?", en: "Would you be able to help me, please?" },
    { id: "u28-p08", af: "Kan ons 'n vergadering reël?", en: "Can we arrange a meeting?" },
    { id: "u28-p09", af: "Ek is ongelukkig môre nie beskikbaar nie.", en: "Unfortunately I am not available tomorrow." },
    { id: "u28-p10", af: "Jammer vir die laat antwoord.", en: "Sorry for the late reply." },
  ],
  grammar: {
    id: "u28-g01",
    title: "U or jy? Sounding polite at work",
    body: `Afrikaans has two words for "you". **Jy / jou** is for friends, family, children and most colleagues. **U** is the formal one: for customers, strangers in formal situations, and business letters.

The nice thing about **u** is that it never changes — it is "you", "you" (object) and "your" all at once, and the verb stays the same as always:

- *Het **u** **u** kaartjie?* — Do you have your ticket?
- *Ek sal **u** môre bel.* — I will call you tomorrow.

Not sure which to use? Start with *u* in writing and with clients. People will soon tell you: *Sê maar "jy" vir my.*

You will also hear South Africans use a **title instead of "you"** to show respect: *Wil **Meneer** koffie hê?* · *Kan **Tannie** my help?*

**Polite requests** — from plain to very polite:

- *Stuur **asseblief** die verslag.* — Please send the report.
- ***Kan** jy / **Sal** u asseblief die verslag stuur?* — Can you / Will you please send the report?
- ***Sou** u die verslag **kon** stuur?* — Would you be able to send the report?
- ***Sal u omgee om** 'n oomblik **te** wag?* — Would you mind waiting a moment?
- ***Mag** ek u iets vra?* — May I ask you something?
- *Ek **sou graag** met die direkteur **wou** praat.* — I would like to speak to the director.

**Emails:**

- Opening: ***Geagte** mnr. Botha / mev. Nel* (formal) · ***Beste** Anna* (Dear Anna) · *Hallo Anna* (informal)
- Closing: ***Vriendelike groete*** (Kind regards) · *Groete* (Regards)
- Handy lines: *Dankie vir u e-pos.* · *Aangeheg vind u …* · *Ek sien uit daarna om van u te hoor.*`,
    examples: [
      { af: "Kan u asseblief die afspraak bevestig?", en: "Could you please confirm the appointment?" },
      { af: "Sou u my môre kon bel?", en: "Would you be able to call me tomorrow?" },
      { af: "Mag ek u iets vra?", en: "May I ask you something?" },
      { af: "Ek sou graag 'n kwotasie wou hê.", en: "I would like to have a quotation." },
    ],
  },
  cloze: [
    { id: "u28-c01", textAf: "Geagte mevrou Nel, baie dankie vir {{u}} e-pos.", answer: "u", distractors: ["jy", "hulle"], en: "Dear Mrs Nel, thank you very much for your email." },
    { id: "u28-c02", textAf: "{{Sou}} u die kontrak vandag kon onderteken?", answer: "Sou", distractors: ["Is", "Het"], en: "Would you be able to sign the contract today?" },
    { id: "u28-c03", textAf: "{{Mag}} ek u iets vra, meneer?", answer: "Mag", distractors: ["Is", "Word"], en: "May I ask you something, sir?" },
    { id: "u28-c04", textAf: "Ek sou graag met die direkteur {{wou}} praat.", answer: "wou", distractors: ["wil", "gewil"], en: "I would like to speak to the director." },
    { id: "u28-c05", textAf: "Sal u omgee {{om}} 'n oomblik te wag?", answer: "om", distractors: ["dat", "vir"], en: "Would you mind waiting a moment?" },
    { id: "u28-c06", textAf: "Vriendelike {{groete}}, Anna", answer: "groete", distractors: ["groet", "dankie"], en: "Kind regards, Anna" },
    { id: "u28-c07", textAf: "Ons moet die vergadering tot Maandag {{uitstel}}.", answer: "uitstel", distractors: ["aanheg", "uitdruk"], en: "We have to postpone the meeting until Monday." },
    { id: "u28-c08", textAf: "Die {{sperdatum}} vir die verslag is Vrydag.", answer: "sperdatum", distractors: ["voorraad", "handtekening"], en: "The deadline for the report is Friday." },
  ],
  dialogue: {
    id: "u28-d01",
    title: "'n Dringende bestelling",
    titleEn: "An urgent order",
    lines: [
      { speaker: "Karin", af: "Goeiemôre, u praat met Karin. Hoe kan ek u help?", en: "Good morning, you are speaking to Karin. How can I help you?" },
      { speaker: "Mnr. Botha", af: "Goeiemôre. Ek het verlede week 'n bestelling geplaas, maar ek wag nog vir die aflewering.", en: "Good morning. I placed an order last week, but I am still waiting for the delivery.", glosses: { geplaas: "placed" } },
      { speaker: "Karin", af: "Ek is jammer om dit te hoor, meneer. Mag ek u naam kry?", en: "I am sorry to hear that, sir. May I have your name?" },
      { speaker: "Mnr. Botha", af: "Dit is Botha. Die saak is dringend — ons vergadering met die kliënt is môre.", en: "It is Botha. The matter is urgent — our meeting with the client is tomorrow." },
      { speaker: "Karin", af: "Ek sien u bestelling hier. Ons verskaffer het ongelukkig nie voorraad gehad nie.", en: "I see your order here. Unfortunately our supplier did not have stock.", glosses: { ongelukkig: "unfortunately" } },
      { speaker: "Mnr. Botha", af: "Niemand het my laat weet nie. Wie is verantwoordelik hiervoor?", en: "Nobody let me know. Who is responsible for this?", glosses: { hiervoor: "for this" } },
      { speaker: "Karin", af: "U is reg, ons moes u gebel het. Ek vra om verskoning.", en: "You are right, we should have called you. I apologise.", glosses: { moes: "should (have) / had to", gebel: "called" } },
      { speaker: "Mnr. Botha", af: "Sou u die bestelling vandag nog kon aflewer?", en: "Would you still be able to deliver the order today?", glosses: { kon: "could / be able to", aflewer: "to deliver" } },
      { speaker: "Karin", af: "Ek sal dadelik met my bestuurder praat. Sal u omgee om 'n oomblik te wag?", en: "I will speak to my manager right away. Would you mind waiting a moment?", glosses: { oomblik: "moment" } },
      { speaker: "Mnr. Botha", af: "Nee, glad nie. Dankie.", en: "No, not at all. Thank you." },
      { speaker: "Karin", af: "Meneer Botha? Die bestelling sal vanmiddag voor vieruur by u kantoor wees.", en: "Mr Botha? The order will be at your office before four o'clock this afternoon.", glosses: { vanmiddag: "this afternoon", voor: "before", vieruur: "four o'clock" } },
      { speaker: "Mnr. Botha", af: "Uitstekend. Kan u dit asseblief per e-pos bevestig?", en: "Excellent. Could you please confirm that by email?", glosses: { uitstekend: "excellent", per: "by / per" } },
      { speaker: "Karin", af: "Natuurlik. Ek heg ook die faktuur aan, met tien persent afslag.", en: "Of course. I will also attach the invoice, with a ten percent discount.", glosses: { heg: "attach — from aanheg", persent: "percent" } },
      { speaker: "Mnr. Botha", af: "Baie dankie vir u hulp, Karin. Geniet die dag verder.", en: "Thank you very much for your help, Karin. Enjoy the rest of the day.", glosses: { hulp: "help", verder: "further / the rest of" } },
    ],
    questions: [
      {
        q: "Why is Mr Botha calling?",
        options: ["He wants a job interview", "His order has not been delivered", "He wants to cancel a contract"],
        correct: 1,
      },
      {
        q: "Why was the order late?",
        options: ["The supplier had no stock", "The printer was broken", "The staff were on leave"],
        correct: 0,
      },
      {
        q: "What does Karin add to the invoice?",
        options: ["A delivery fee", "A new contract", "A ten percent discount"],
        correct: 2,
      },
    ],
  },
};
