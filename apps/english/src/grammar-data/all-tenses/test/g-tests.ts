import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "The earth ___ around the sun.",
      "options": [
        "move",
        "moves",
        "moved",
        "is moving"
      ],
      "answer": "moves",
      "explanation": "આ વાક્ય સનાતન સત્ય દર્શાવે છે, તેથી સાદા વર્તમાનકાળનો ઉપયોગ થાય છે. કર્તા 'The earth' ત્રીજો પુરુષ એકવચન હોવાથી ક્રિયાપદને 's' લાગે છે."
    },
    {
      "question": "He ___ to the market yesterday.",
      "options": [
        "go",
        "goes",
        "went",
        "is going"
      ],
      "answer": "went",
      "explanation": "વાક્યમાં 'yesterday' શબ્દ ભૂતકાળ દર્શાવે છે, તેથી સાદા ભૂતકાળનો ઉપયોગ થાય છે. 'go' નું ભૂતકાળનું રૂપ 'went' છે."
    },
    {
      "question": "They ___ a new car next month.",
      "options": [
        "buy",
        "buys",
        "bought",
        "will buy"
      ],
      "answer": "will buy",
      "explanation": "વાક્યમાં 'next month' શબ્દ ભવિષ્યનો સમય દર્શાવે છે, તેથી સાદા ભવિષ્યકાળ 'will buy' નો ઉપયોગ થાય છે."
    },
    {
      "question": "She ___ her homework right now.",
      "options": [
        "do",
        "does",
        "is doing",
        "did"
      ],
      "answer": "is doing",
      "explanation": "વાક્યમાં 'right now' શબ્દ સૂચવે છે કે ક્રિયા અત્યારે ચાલુ છે, તેથી ચાલુ વર્તમાનકાળ 'is doing' નો ઉપયોગ થાય છે."
    },
    {
      "question": "While I was studying, the phone ___.",
      "options": [
        "ring",
        "rings",
        "rang",
        "was ringing"
      ],
      "answer": "rang",
      "explanation": "જ્યારે એક ક્રિયા (studying) ભૂતકાળમાં ચાલુ હતી અને બીજી ક્રિયા (phone ring) વચ્ચે થઈ, ત્યારે બીજી ક્રિયા માટે સાદો ભૂતકાળ 'rang' વપરાય છે."
    },
    {
      "question": "By this time tomorrow, I ___ my exam.",
      "options": [
        "will finish",
        "will be finishing",
        "will have finished",
        "finish"
      ],
      "answer": "will have finished",
      "explanation": "વાક્યમાં 'By this time tomorrow' ભવિષ્યમાં કોઈ ચોક્કસ સમયે ક્રિયા પૂરી થઈ ગઈ હશે તેવું દર્શાવે છે, તેથી પૂર્ણ ભવિષ્યકાળ 'will have finished' વપરાય છે."
    },
    {
      "question": "I ___ this movie before.",
      "options": [
        "see",
        "saw",
        "have seen",
        "am seeing"
      ],
      "answer": "have seen",
      "explanation": "જ્યારે કોઈ ક્રિયા ભૂતકાળમાં થઈ હોય પણ તેની અસર વર્તમાનમાં હોય અથવા ક્યારે થઈ તે ચોક્કસ ન હોય, ત્યારે પૂર્ણ વર્તમાનકાળ 'have seen' વપરાય છે."
    },
    {
      "question": "The train ___ before we reached the station.",
      "options": [
        "leave",
        "left",
        "had left",
        "was leaving"
      ],
      "answer": "had left",
      "explanation": "ભૂતકાળમાં બનેલી બે ક્રિયાઓમાંથી જે ક્રિયા પહેલા બની હોય તેના માટે પૂર્ણ ભૂતકાળ 'had left' વપરાય છે."
    },
    {
      "question": "We ___ in this house since 2010.",
      "options": [
        "live",
        "are living",
        "have been living",
        "lived"
      ],
      "answer": "have been living",
      "explanation": "કોઈ ક્રિયા ભૂતકાળમાં શરૂ થઈને હજુ પણ વર્તમાનમાં ચાલુ છે તે દર્શાવવા માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been living' વપરાય છે, ખાસ કરીને 'since' અને 'for' સાથે."
    },
    {
      "question": "Don't make a noise, the baby ___.",
      "options": [
        "sleeps",
        "is sleeping",
        "slept",
        "has slept"
      ],
      "answer": "is sleeping",
      "explanation": "આ વાક્ય સૂચવે છે કે ક્રિયા બોલતી વખતે ચાલુ છે. તેથી, ચાલુ વર્તમાનકાળ 'is sleeping' નો ઉપયોગ થાય છે."
    }
  ],
  "test-2": [
    {
      "question": "Look! The bus ___.",
      "options": [
        "comes",
        "is coming",
        "came",
        "has come"
      ],
      "answer": "is coming",
      "explanation": "વાક્યની શરૂઆતમાં 'Look!' જેવો ઉદ્ગાર શબ્દ સૂચવે છે કે ક્રિયા અત્યારે નજર સમક્ષ બની રહી છે. તેથી, ચાલુ વર્તમાનકાળ 'is coming' નો ઉપયોગ થાય છે."
    },
    {
      "question": "My father ___ a newspaper every morning.",
      "options": [
        "reads",
        "is reading",
        "read",
        "has read"
      ],
      "answer": "reads",
      "explanation": "વાક્યમાં 'every morning' શબ્દ રોજિંદી ક્રિયા કે આદત દર્શાવે છે, તેથી સાદા વર્તમાનકાળનો ઉપયોગ થાય છે. કર્તા 'My father' ત્રીજો પુરુષ એકવચન હોવાથી 'reads' આવે."
    },
    {
      "question": "We ___ our grandparents last weekend.",
      "options": [
        "visit",
        "visited",
        "are visiting",
        "have visited"
      ],
      "answer": "visited",
      "explanation": "'last weekend' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે, તેથી સાદા ભૂતકાળનું રૂપ 'visited' વપરાય છે."
    },
    {
      "question": "I promise I ___ you tomorrow.",
      "options": [
        "call",
        "called",
        "am calling",
        "will call"
      ],
      "answer": "will call",
      "explanation": "'I promise' અને 'tomorrow' જેવા શબ્દો ભવિષ્યમાં થનારી ક્રિયાનું વચન દર્શાવે છે, તેથી સાદા ભવિષ્યકાળ 'will call' નો ઉપયોગ થાય છે."
    },
    {
      "question": "She ___ for two hours when I met her.",
      "options": [
        "was studying",
        "had been studying",
        "studied",
        "is studying"
      ],
      "answer": "had been studying",
      "explanation": "ભૂતકાળમાં કોઈ ચોક્કસ સમય પહેલાંથી કોઈ ક્રિયા ચાલુ હતી તે દર્શાવવા માટે ચાલુ પૂર્ણ ભૂતકાળ 'had been studying' વપરાય છે, ખાસ કરીને 'for' અને 'since' સાથે."
    },
    {
      "question": "The children ___ in the garden at this moment.",
      "options": [
        "play",
        "are playing",
        "played",
        "have played"
      ],
      "answer": "are playing",
      "explanation": "'at this moment' શબ્દ સૂચવે છે કે ક્રિયા અત્યારે જ ચાલુ છે. તેથી, ચાલુ વર્તમાનકાળ 'are playing' નો ઉપયોગ થાય છે."
    },
    {
      "question": "I ___ all my money, so I can't buy a ticket.",
      "options": [
        "spent",
        "have spent",
        "was spending",
        "spend"
      ],
      "answer": "have spent",
      "explanation": "પૈસા ખર્ચવાની ક્રિયા ભૂતકાળમાં થઈ છે, પણ તેની અસર ('I can't buy a ticket') વર્તમાનમાં છે. તેથી, પૂર્ણ વર્તમાનકાળ 'have spent' વપરાય છે."
    },
    {
      "question": "They ___ dinner when the guests arrived.",
      "options": [
        "were having",
        "had",
        "have",
        "had had"
      ],
      "answer": "were having",
      "explanation": "જ્યારે મહેમાનો આવ્યા (સાદો ભૂતકાળ), તે સમયે જમવાની ક્રિયા (dinner) ચાલુ હતી. ભૂતકાળમાં ચાલુ ક્રિયા માટે ચાલુ ભૂતકાળ 'were having' વપરાય છે."
    },
    {
      "question": "She hopes she ___ a promotion soon.",
      "options": [
        "gets",
        "got",
        "will get",
        "is getting"
      ],
      "answer": "will get",
      "explanation": "'hopes' અને 'soon' શબ્દો ભવિષ્યની અપેક્ષા દર્શાવે છે. ભવિષ્યમાં થનારી સંભવિત ક્રિયા માટે સાદો ભવિષ્યકાળ 'will get' યોગ્ય છે."
    },
    {
      "question": "By 2030, scientists ___ a cure for this disease.",
      "options": [
        "will find",
        "will be finding",
        "will have found",
        "find"
      ],
      "answer": "will have found",
      "explanation": "'By 2030' ભવિષ્યમાં કોઈ ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have found' નો ઉપયોગ થાય છે."
    }
  ],
  "test-3": [
    {
      "question": "Listen! Someone ___ at the door.",
      "options": [
        "knocks",
        "is knocking",
        "knocked",
        "has knocked"
      ],
      "answer": "is knocking",
      "explanation": "'Listen!' જેવા ઉદ્ગાર શબ્દો સૂચવે છે કે ક્રિયા બોલતી વખતે જ બની રહી છે. તેથી, ચાલુ વર્તમાનકાળ 'is knocking' નો ઉપયોગ થાય છે."
    },
    {
      "question": "Water ___ at 100 degrees Celsius.",
      "options": [
        "boil",
        "boils",
        "is boiling",
        "boiled"
      ],
      "answer": "boils",
      "explanation": "આ એક વૈજ્ઞાનિક હકીકત (સનાતન સત્ય) છે. આવી ક્રિયાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. 'Water' ત્રીજો પુરુષ એકવચન ગણાય, તેથી 'boils' આવે."
    },
    {
      "question": "I ___ this book. It's very interesting.",
      "options": [
        "just finished",
        "have just finished",
        "am just finishing",
        "had just finished"
      ],
      "answer": "have just finished",
      "explanation": "'just' શબ્દ સૂચવે છે કે ક્રિયા હમણાં જ પૂરી થઈ છે અને તેની અસર વર્તમાનમાં છે. આ માટે પૂર્ણ વર્તમાનકાળ 'have just finished' વપરાય છે."
    },
    {
      "question": "She ___ English for five years before she moved to London.",
      "options": [
        "was learning",
        "had been learning",
        "learned",
        "has learned"
      ],
      "answer": "had been learning",
      "explanation": "લંડન જવાની (ભૂતકાળની) ક્રિયા પહેલાં, પાંચ વર્ષથી અંગ્રેજી શીખવાની ક્રિયા ચાલુ હતી. ભૂતકાળમાં અમુક સમયથી ચાલુ ક્રિયા માટે ચાલુ પૂર્ણ ભૂતકાળ 'had been learning' વપરાય છે."
    },
    {
      "question": "At this time next week, we ___ on a beach.",
      "options": [
        "will sit",
        "will be sitting",
        "will have sat",
        "sit"
      ],
      "answer": "will be sitting",
      "explanation": "'At this time next week' ભવિષ્યના કોઈ ચોક્કસ સમયે કોઈ ક્રિયા ચાલુ હશે તેવું દર્શાવે છે. આ માટે ચાલુ ભવિષ્યકાળ 'will be sitting' વપરાય છે."
    },
    {
      "question": "He ___ his leg while he was playing football.",
      "options": [
        "break",
        "broke",
        "was breaking",
        "has broken"
      ],
      "answer": "broke",
      "explanation": "જ્યારે તે ફૂટબોલ રમી રહ્યો હતો (ચાલુ ભૂતકાળ), ત્યારે તેનો પગ ભાંગ્યો (સાદો ભૂતકાળ). ચાલુ ક્રિયાની વચ્ચે બનેલી ટૂંકી ક્રિયા માટે સાદો ભૂતકાળ વપરાય છે."
    },
    {
      "question": "The sun ___ in the east.",
      "options": [
        "rise",
        "rises",
        "rose",
        "is rising"
      ],
      "answer": "rises",
      "explanation": "સૂર્યનું પૂર્વમાં ઊગવું એ સનાતન સત્ય છે. આવી કુદરતી ઘટનાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The sun' ત્રીજો પુરુષ એકવચન હોવાથી 'rises' આવે."
    },
    {
      "question": "After she ___ the work, she went home.",
      "options": [
        "finished",
        "had finished",
        "was finishing",
        "has finished"
      ],
      "answer": "had finished",
      "explanation": "ભૂતકાળમાં બે ક્રિયાઓ બની: કામ પૂરું કરવું અને ઘરે જવું. જે ક્રિયા પહેલા બની (કામ પૂરું કરવું), તેના માટે પૂર્ણ ભૂતકાળ 'had finished' વપરાય છે."
    },
    {
      "question": "If it rains, the match ___.",
      "options": [
        "will be cancelled",
        "is cancelled",
        "was cancelled",
        "would be cancelled"
      ],
      "answer": "will be cancelled",
      "explanation": "આ શરતી વાક્ય (Type 1) છે. 'If' વાળા વાક્યમાં સાદો વર્તમાનકાળ ('rains') હોય, તો મુખ્ય વાક્યમાં સાદો ભવિષ્યકાળ ('will be cancelled') વપરાય છે."
    },
    {
      "question": "They ___ for the bus for an hour now.",
      "options": [
        "are waiting",
        "have been waiting",
        "wait",
        "were waiting"
      ],
      "answer": "have been waiting",
      "explanation": "વાક્યમાં 'for an hour now' સૂચવે છે કે રાહ જોવાની ક્રિયા ભૂતકાળમાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been waiting' વપરાય છે."
    }
  ],
  "test-4": [
    {
      "question": "I ___ a strange noise a minute ago.",
      "options": [
        "hear",
        "heard",
        "am hearing",
        "have heard"
      ],
      "answer": "heard",
      "explanation": "વાક્યમાં 'a minute ago' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે, તેથી સાદા ભૂતકાળનું રૂપ 'heard' વપરાય છે."
    },
    {
      "question": "This time tomorrow, I ___ to my hometown.",
      "options": [
        "will travel",
        "will be travelling",
        "travel",
        "will have travelled"
      ],
      "answer": "will be travelling",
      "explanation": "'This time tomorrow' ભવિષ્યમાં કોઈ ચોક્કસ સમયે કોઈ ક્રિયા ચાલુ હશે તેવું દર્શાવે છે. આ માટે ચાલુ ભવિષ્યકાળ 'will be travelling' નો ઉપયોગ થાય છે."
    },
    {
      "question": "She ___ as a teacher since she graduated.",
      "options": [
        "works",
        "is working",
        "has been working",
        "worked"
      ],
      "answer": "has been working",
      "explanation": "'since she graduated' સૂચવે છે કે ક્રિયા ભૂતકાળમાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been working' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The patient ___ before the doctor arrived.",
      "options": [
        "died",
        "had died",
        "was dying",
        "dies"
      ],
      "answer": "had died",
      "explanation": "ભૂતકાળમાં બે ક્રિયાઓ બની (દર્દીનું મૃત્યુ અને ડૉક્ટરનું આગમન). જે ક્રિયા પહેલા બની (દર્દીનું મૃત્યુ), તેના માટે પૂર્ણ ભૂતકાળ 'had died' વપરાય છે."
    },
    {
      "question": "How often ___ you go to the gym?",
      "options": [
        "do",
        "does",
        "are",
        "did"
      ],
      "answer": "do",
      "explanation": "આ પ્રશ્ન આદત કે નિયમિત ક્રિયા વિશે પૂછે છે, તેથી સાદા વર્તમાનકાળનો ઉપયોગ થાય છે. કર્તા 'you' સાથે સહાયકારક ક્રિયાપદ 'do' વપરાય છે."
    },
    {
      "question": "My sister ___ a beautiful song at the party last night.",
      "options": [
        "sings",
        "sang",
        "was singing",
        "has sung"
      ],
      "answer": "sang",
      "explanation": "વાક્યમાં 'last night' શબ્દ ભૂતકાળનો સમય દર્શાવે છે. તેથી, સાદા ભૂતકાળનું રૂપ 'sang' વપરાય છે."
    },
    {
      "question": "We ___ the project by the end of this week.",
      "options": [
        "will complete",
        "complete",
        "will have completed",
        "are completing"
      ],
      "answer": "will have completed",
      "explanation": "'by the end of this week' ભવિષ્યમાં કોઈ ચોક્કસ સમય સુધીમાં ક્રિયા પૂરી થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have completed' વપરાય છે."
    },
    {
      "question": "He ___ tired because he has been working all day.",
      "options": [
        "is",
        "was",
        "has been",
        "is being"
      ],
      "answer": "is",
      "explanation": "તે આખો દિવસ કામ કરી રહ્યો છે (ચાલુ પૂર્ણ વર્તમાનકાળ), જેની અસર વર્તમાનમાં છે કે તે થાકી ગયો છે. વર્તમાન સ્થિતિ દર્શાવવા માટે 'is' વપરાય છે."
    },
    {
      "question": "What ___ you ___ at 9 PM last night?",
      "options": [
        "did, do",
        "were, doing",
        "had, done",
        "do, do"
      ],
      "answer": "were, doing",
      "explanation": "પ્રશ્ન ભૂતકાળના કોઈ ચોક્કસ સમયે ('at 9 PM last night') કઈ ક્રિયા ચાલુ હતી તે વિશે છે. આ માટે ચાલુ ભૂતકાળ 'were doing' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The children are tired now. They ___ in the park for hours.",
      "options": [
        "played",
        "were playing",
        "have been playing",
        "play"
      ],
      "answer": "have been playing",
      "explanation": "બાળકો અત્યારે થાકેલા છે (વર્તમાન અસર). તેનું કારણ એ છે કે તેઓ કલાકોથી પાર્કમાં રમી રહ્યા હતા. ભૂતકાળથી શરૂ થયેલી અને વર્તમાન સુધી ચાલેલી ક્રિયા દર્શાવવા 'have been playing' વપરાય છે."
    }
  ],
  "test-5": [
    {
      "question": "I ___ for my keys. Have you seen them?",
      "options": [
        "look",
        "looked",
        "am looking",
        "have looked"
      ],
      "answer": "am looking",
      "explanation": "ક્રિયા અત્યારે ચાલુ છે તેવું દર્શાવવા માટે ચાલુ વર્તમાનકાળ વપરાય છે. 'Have you seen them?' પ્રશ્ન પણ વર્તમાનની સ્થિતિ સૂચવે છે, તેથી 'am looking' યોગ્ય છે."
    },
    {
      "question": "She usually ___ coffee in the morning, but today she ___ tea.",
      "options": [
        "drinks, is drinking",
        "is drinking, drinks",
        "drinks, drinks",
        "drank, is drinking"
      ],
      "answer": "drinks, is drinking",
      "explanation": "પહેલો ભાગ ('usually') આદત દર્શાવે છે, તેથી સાદો વર્તમાનકાળ 'drinks' આવે. બીજો ભાગ ('today') આજે જે ક્રિયા બની રહી છે તે દર્શાવે છે, તેથી ચાલુ વર્તમાનકાળ 'is drinking' આવે."
    },
    {
      "question": "When I arrived, the film ___.",
      "options": [
        "already started",
        "had already started",
        "was already starting",
        "has already started"
      ],
      "answer": "had already started",
      "explanation": "ભૂતકાળમાં જ્યારે હું પહોંચ્યો (arrived), તે પહેલાં જ ફિલ્મ શરૂ થઈ ગઈ હતી. બે ભૂતકાળની ક્રિયામાંથી જે પહેલા બને, તેના માટે પૂર્ણ ભૂતકાળ 'had already started' વપરાય છે."
    },
    {
      "question": "Next year, my brother ___ from university.",
      "options": [
        "graduates",
        "will graduate",
        "is graduating",
        "will have graduated"
      ],
      "answer": "will graduate",
      "explanation": "'Next year' ભવિષ્યનો સમય સૂચવે છે. ભવિષ્યમાં થનારી ક્રિયા માટે સાદો ભવિષ્યકાળ 'will graduate' યોગ્ય છે."
    },
    {
      "question": "He ___ for this company for ten years by the end of this month.",
      "options": [
        "will work",
        "will be working",
        "will have been working",
        "has worked"
      ],
      "answer": "will have been working",
      "explanation": "'by the end of this month' ભવિષ્યના ચોક્કસ સમય સુધીમાં, કોઈ ક્રિયા અમુક સમયથી ચાલુ હશે તેવું દર્શાવે છે. આ માટે ચાલુ પૂર્ણ ભવિષ્યકાળ 'will have been working' વપરાય છે."
    },
    {
      "question": "What ___ you do if you win the lottery?",
      "options": [
        "will",
        "would",
        "do",
        "did"
      ],
      "answer": "will",
      "explanation": "આ શરતી વાક્ય (Type 1) છે, જે ભવિષ્યની સંભવિત પરિસ્થિતિ દર્શાવે છે. 'If' વાળા વાક્યમાં સાદો વર્તમાનકાળ ('win') હોય, તો મુખ્ય વાક્યમાં 'will' વપરાય છે."
    },
    {
      "question": "The police ___ the thief yet.",
      "options": [
        "did not catch",
        "have not caught",
        "had not caught",
        "are not catching"
      ],
      "answer": "have not caught",
      "explanation": "'yet' શબ્દનો ઉપયોગ સામાન્ય રીતે પૂર્ણ વર્તમાનકાળના નકારાત્મક વાક્યોમાં થાય છે, જે દર્શાવે છે કે ક્રિયા હજુ સુધી થઈ નથી. તેથી, 'have not caught' સાચો જવાબ છે."
    },
    {
      "question": "I was watching TV when she ___ in.",
      "options": [
        "comes",
        "came",
        "was coming",
        "had come"
      ],
      "answer": "came",
      "explanation": "જ્યારે ટીવી જોવાની ક્રિયા (ચાલુ ભૂતકાળ) ચાલુ હતી, ત્યારે તેણીની અંદર આવવાની ક્રિયા (ટૂંકી ક્રિયા) થઈ. આ માટે સાદો ભૂતકાળ 'came' વપરાય છે."
    },
    {
      "question": "It ___ for three days now.",
      "options": [
        "is raining",
        "has been raining",
        "was raining",
        "rains"
      ],
      "answer": "has been raining",
      "explanation": "'for three days now' સૂચવે છે કે વરસાદ પડવાની ક્રિયા ત્રણ દિવસ પહેલા શરૂ થઈ હતી અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been raining' વપરાય છે."
    },
    {
      "question": "We ___ to the new restaurant tomorrow evening.",
      "options": [
        "go",
        "are going",
        "went",
        "have gone"
      ],
      "answer": "are going",
      "explanation": "નજીકના ભવિષ્યમાં થનારી પૂર્વ-આયોજિત ક્રિયા દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'are going' નો ઉપયોગ કરી શકાય છે, ખાસ કરીને 'tomorrow evening' જેવા સમયસૂચક શબ્દ સાથે."
    }
  ],
  "test-6": [
    {
      "question": "He ___ to work by bus every day.",
      "options": [
        "go",
        "goes",
        "is going",
        "went"
      ],
      "answer": "goes",
      "explanation": "'every day' શબ્દ સૂચવે છે કે આ એક નિયમિત, રોજિંદી ક્રિયા છે. તેથી, સાદા વર્તમાનકાળનો ઉપયોગ થાય છે. કર્તા 'He' ત્રીજો પુરુષ એકવચન હોવાથી ક્રિયાપદને 'es' લાગે છે."
    },
    {
      "question": "I ___ my homework; now I can watch TV.",
      "options": [
        "finished",
        "have finished",
        "am finishing",
        "had finished"
      ],
      "answer": "have finished",
      "explanation": "હોમવર્ક પૂરું કરવાની ક્રિયા ભૂતકાળમાં થઈ છે, પરંતુ તેની અસર વર્તમાનમાં છે ('now I can watch TV'). તેથી, પૂર્ણ વર્તમાનકાળ 'have finished' વપરાય છે."
    },
    {
      "question": "They were playing cards when they ___ a loud noise.",
      "options": [
        "hear",
        "heard",
        "were hearing",
        "had heard"
      ],
      "answer": "heard",
      "explanation": "જ્યારે પત્તા રમવાની ક્રિયા (ચાલુ ભૂતકાળ) ચાલુ હતી, ત્યારે અવાજ સાંભળવાની ક્રિયા (ટૂંકી ક્રિયા) થઈ. આ માટે સાદો ભૂતકાળ 'heard' વપરાય છે."
    },
    {
      "question": "By next year, she ___ fluent in French.",
      "options": [
        "will become",
        "becomes",
        "will have become",
        "is becoming"
      ],
      "answer": "will have become",
      "explanation": "'By next year' ભવિષ્યમાં કોઈ ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have become' વપરાય છે."
    },
    {
      "question": "We ___ for you for two hours. Where have you been?",
      "options": [
        "waited",
        "were waiting",
        "have been waiting",
        "wait"
      ],
      "answer": "have been waiting",
      "explanation": "'for two hours' અને 'Where have you been?' સૂચવે છે કે રાહ જોવાની ક્રિયા ભૂતકાળમાં શરૂ થઈ અને બોલતી વખતે પણ તેની અસર ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been waiting' વપરાય છે."
    },
    {
      "question": "Shakespeare ___ many famous plays.",
      "options": [
        "writes",
        "wrote",
        "has written",
        "had written"
      ],
      "answer": "wrote",
      "explanation": "શેક્સપિયરનું નાટકો લખવું એ ભૂતકાળમાં બનેલી ઘટના છે અને તે વ્યક્તિ હવે હયાત નથી. આવી ઐતિહાસિક ઘટનાઓ માટે સાદો ભૂતકાળ 'wrote' વપરાય છે."
    },
    {
      "question": "The phone has been ringing for a minute. I ___ it.",
      "options": [
        "answer",
        "am answering",
        "will answer",
        "answered"
      ],
      "answer": "will answer",
      "explanation": "બોલતી વખતે કોઈ ક્રિયા કરવાનો નિર્ણય લેવામાં આવે, ત્યારે સાદા ભવિષ્યકાળ 'will answer' નો ઉપયોગ થાય છે."
    },
    {
      "question": "She was tired because she ___ all night.",
      "options": [
        "studied",
        "was studying",
        "had been studying",
        "studies"
      ],
      "answer": "had been studying",
      "explanation": "તેણી થાકી ગઈ હતી (ભૂતકાળ). તેનું કારણ એ હતું કે તે આખી રાત અભ્યાસ કરી રહી હતી. ભૂતકાળના કોઈ સમય પહેલાંથી ચાલતી ક્રિયા દર્શાવવા ચાલુ પૂર્ણ ભૂતકાળ 'had been studying' વપરાય છે."
    },
    {
      "question": "The shops in this city ___ at 9 PM.",
      "options": [
        "close",
        "closes",
        "are closing",
        "closed"
      ],
      "answer": "close",
      "explanation": "આ એક નિયમિત ઘટના અથવા સમયપત્રક છે. આવી ક્રિયાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The shops' બહુવચન હોવાથી ક્રિયાપદનું મૂળ રૂપ 'close' આવે."
    },
    {
      "question": "This is the first time I ___ sushi.",
      "options": [
        "eat",
        "ate",
        "am eating",
        "have eaten"
      ],
      "answer": "have eaten",
      "explanation": "'This is the first time' જેવા અભિવ્યક્તિઓ સાથે અનુભવ દર્શાવવા માટે પૂર્ણ વર્તમાનકાળ 'have eaten' નો ઉપયોગ થાય છે."
    }
  ],
  "test-7": [
    {
      "question": "The birds ___ south for the winter.",
      "options": [
        "fly",
        "flies",
        "are flying",
        "flew"
      ],
      "answer": "fly",
      "explanation": "આ એક કુદરતી અને નિયમિતપણે થતી ઘટના છે. આવી ક્રિયાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The birds' બહુવચન હોવાથી ક્રિયાપદનું મૂળ રૂપ 'fly' આવે છે."
    },
    {
      "question": "She ___ TV at 8 o'clock last night.",
      "options": [
        "watched",
        "was watching",
        "had watched",
        "has watched"
      ],
      "answer": "was watching",
      "explanation": "વાક્યમાં ભૂતકાળનો ચોક્કસ સમય ('at 8 o'clock last night') આપેલો છે અને તે સમયે ક્રિયા ચાલુ હતી તેવું દર્શાવાયું છે. તેથી, ચાલુ ભૂતકાળ 'was watching' વપરાય છે."
    },
    {
      "question": "I think it ___ tomorrow.",
      "options": [
        "rains",
        "will rain",
        "is raining",
        "rained"
      ],
      "answer": "will rain",
      "explanation": "'I think' અને 'tomorrow' ભવિષ્યની સંભાવના કે આગાહી દર્શાવે છે. આ માટે સાદો ભવિષ્યકાળ 'will rain' નો ઉપયોગ થાય છે."
    },
    {
      "question": "They ___ here for three years now.",
      "options": [
        "are living",
        "have been living",
        "live",
        "lived"
      ],
      "answer": "have been living",
      "explanation": "'for three years now' સૂચવે છે કે રહેવાની ક્રિયા ભૂતકાળમાં શરૂ થઈ હતી અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been living' વપરાય છે."
    },
    {
      "question": "When we got to the cinema, the film ___.",
      "options": [
        "started",
        "was starting",
        "had started",
        "has started"
      ],
      "answer": "had started",
      "explanation": "ભૂતકાળમાં બે ક્રિયાઓ બની: સિનેમા પહોંચવું અને ફિલ્મ શરૂ થવી. જે ક્રિયા પહેલા બની (ફિલ્મ શરૂ થવી), તેના માટે પૂર્ણ ભૂતકાળ 'had started' વપરાય છે."
    },
    {
      "question": "He ___ for London tomorrow morning.",
      "options": [
        "leaves",
        "is leaving",
        "left",
        "will have left"
      ],
      "answer": "is leaving",
      "explanation": "નજીકના ભવિષ્યની પૂર્વ-આયોજિત ક્રિયા (fixed plan) દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'is leaving' નો ઉપયોગ કરી શકાય છે."
    },
    {
      "question": "My hands are dirty because I ___ the garden.",
      "options": [
        "was cleaning",
        "cleaned",
        "have been cleaning",
        "clean"
      ],
      "answer": "have been cleaning",
      "explanation": "હાથ ગંદા હોવાની વર્તમાન સ્થિતિનું કારણ એ છે કે બગીચો સાફ કરવાની ક્રિયા હમણાં સુધી ચાલી રહી હતી. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been cleaning' વપરાય છે."
    },
    {
      "question": "___ you ever ___ to Paris?",
      "options": [
        "Did, go",
        "Have, been",
        "Were, going",
        "Do, go"
      ],
      "answer": "Have, been",
      "explanation": "વાક્યમાં 'ever' શબ્દ જીવનના અનુભવ વિશે પૂછે છે. આવા પ્રશ્નો માટે પૂર્ણ વર્તમાનકાળ 'Have been' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The meeting ___ at 10 AM tomorrow.",
      "options": [
        "will start",
        "starts",
        "is starting",
        "started"
      ],
      "answer": "starts",
      "explanation": "ભવિષ્યની કોઈ નિયત (fixed schedule) કે સમયપત્રક મુજબની ઘટના દર્શાવવા માટે સાદા વર્તમાનકાળ 'starts' નો ઉપયોગ કરી શકાય છે, જેમ કે મીટિંગ, ટ્રેન, વગેરે."
    },
    {
      "question": "She didn't hear the doorbell because she ___ music.",
      "options": [
        "listened",
        "was listening",
        "had listened",
        "listens"
      ],
      "answer": "was listening",
      "explanation": "ડોરબેલ ન સાંભળવાનું કારણ એ હતું કે તે સમયે સંગીત સાંભળવાની ક્રિયા ચાલુ હતી. ભૂતકાળમાં ચાલુ ક્રિયા દર્શાવવા માટે ચાલુ ભૂતકાળ 'was listening' વપરાય છે."
    }
  ],
  "test-8": [
    {
      "question": "How long ___ you ___ for me?",
      "options": [
        "did, wait",
        "are, waiting",
        "have, been waiting",
        "do, wait"
      ],
      "answer": "have, been waiting",
      "explanation": "આ પ્રશ્ન પૂછે છે કે કોઈ ક્રિયા કેટલા સમયથી ચાલી રહી છે જે અત્યારે પૂરી થઈ છે અથવા હજુ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been waiting' વપરાય છે."
    },
    {
      "question": "He fell off the ladder while he ___ the roof.",
      "options": [
        "repaired",
        "was repairing",
        "had repaired",
        "repairs"
      ],
      "answer": "was repairing",
      "explanation": "જ્યારે છત રિપેર કરવાની ક્રિયા (ચાલુ ભૂતકાળ) ચાલુ હતી, ત્યારે તે સીડી પરથી પડ્યો (ટૂંકી ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી લાંબી ક્રિયા માટે 'was repairing' આવે."
    },
    {
      "question": "I ___ this report by 5 PM. You can take it then.",
      "options": [
        "will write",
        "will be writing",
        "will have written",
        "write"
      ],
      "answer": "will have written",
      "explanation": "'by 5 PM' ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have written' નો ઉપયોગ થાય છે."
    },
    {
      "question": "She ___ a new dress last week.",
      "options": [
        "buys",
        "bought",
        "has bought",
        "is buying"
      ],
      "answer": "bought",
      "explanation": "વાક્યમાં 'last week' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે, તેથી સાદા ભૂતકાળનું રૂપ 'bought' વપરાય છે."
    },
    {
      "question": "The manager is busy. He ___ to a client.",
      "options": [
        "talks",
        "is talking",
        "talked",
        "has talked"
      ],
      "answer": "is talking",
      "explanation": "મેનેજર અત્યારે વ્યસ્ત છે, કારણ કે તે ક્લાયન્ટ સાથે વાત કરી રહ્યો છે. બોલતી વખતે ચાલુ ક્રિયા દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'is talking' વપરાય છે."
    },
    {
      "question": "If I ___ his number, I would call him.",
      "options": [
        "know",
        "knew",
        "had known",
        "will know"
      ],
      "answer": "knew",
      "explanation": "આ શરતી વાક્ય (Type 2) છે, જે વર્તમાનની અવાસ્તવિક કે કાલ્પનિક સ્થિતિ દર્શાવે છે. 'If' વાળા વાક્યમાં સાદો ભૂતકાળ ('knew') અને મુખ્ય વાક્યમાં 'would' + મૂળ રૂપ આવે."
    },
    {
      "question": "My dog ___ at strangers.",
      "options": [
        "bark",
        "barks",
        "is barking",
        "barked"
      ],
      "answer": "barks",
      "explanation": "આ કૂતરાની આદત છે. આદત દર્શાવવા માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'My dog' ત્રીજો પુરુષ એકવચન હોવાથી 'barks' આવે."
    },
    {
      "question": "The students ___ their essays when the teacher entered.",
      "options": [
        "wrote",
        "were writing",
        "had written",
        "write"
      ],
      "answer": "were writing",
      "explanation": "જ્યારે શિક્ષક દાખલ થયા (સાદો ભૂતકાળ), તે સમયે વિદ્યાર્થીઓ નિબંધ લખી રહ્યા હતા (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ ક્રિયા દર્શાવવા ચાલુ ભૂતકાળ 'were writing' વપરાય છે."
    },
    {
      "question": "The plane ___ at 6:30 AM tomorrow.",
      "options": [
        "will arrive",
        "arrives",
        "is arriving",
        "arrived"
      ],
      "answer": "arrives",
      "explanation": "ભવિષ્યની કોઈ નિયત (fixed schedule) ઘટના, જેમ કે પ્લેનનું આગમન, દર્શાવવા માટે સાદા વર્તમાનકાળ 'arrives' નો ઉપયોગ કરી શકાય છે."
    },
    {
      "question": "He ___ reading this book for a week, but he hasn't finished it yet.",
      "options": [
        "is",
        "was",
        "has been",
        "had been"
      ],
      "answer": "has been",
      "explanation": "પુસ્તક વાંચવાની ક્રિયા એક અઠવાડિયા પહેલાં શરૂ થઈ અને હજુ પણ ચાલુ છે ('hasn't finished it yet'). આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been reading' વપરાય છે."
    }
  ],
  "test-9": [
    {
      "question": "It ___ heavily when I left home.",
      "options": [
        "rained",
        "was raining",
        "had rained",
        "rains"
      ],
      "answer": "was raining",
      "explanation": "જ્યારે હું ઘરેથી નીકળ્યો (સાદો ભૂતકાળ), તે સમયે વરસાદ પડવાની ક્રિયા ચાલુ હતી. ભૂતકાળમાં ચાલુ રહેલી ક્રિયા દર્શાવવા માટે ચાલુ ભૂતકાળ 'was raining' વપરાય છે."
    },
    {
      "question": "I ___ you my book as soon as I finish it.",
      "options": [
        "will give",
        "give",
        "am giving",
        "gave"
      ],
      "answer": "will give",
      "explanation": "'as soon as' વાળું વાક્ય ભવિષ્યની શરત દર્શાવે છે. જ્યારે શરતી વાક્યમાં સાદો વર્તમાનકાળ ('finish') હોય, ત્યારે મુખ્ય વાક્યમાં સાદો ભવિષ્યકાળ 'will give' આવે છે."
    },
    {
      "question": "She ___ many countries in her life.",
      "options": [
        "visited",
        "visits",
        "is visiting",
        "has visited"
      ],
      "answer": "has visited",
      "explanation": "આ વાક્ય જીવનના અનુભવ વિશે વાત કરે છે, કોઈ ચોક્કસ ભૂતકાળના સમય વિશે નહીં. આવા અનુભવો દર્શાવવા માટે પૂર્ણ વર્તમાનકાળ 'has visited' વપરાય છે."
    },
    {
      "question": "The match had to be stopped because it ___ to rain.",
      "options": [
        "started",
        "was starting",
        "had started",
        "starts"
      ],
      "answer": "started",
      "explanation": "મેચ રોકવી પડી (ભૂતકાળ). તેનું કારણ એ હતું કે વરસાદ શરૂ થયો. એક ક્રિયા પછી બીજી ક્રિયા થઈ, અહીં કારણ-પરિણામ સંબંધ છે, તેથી સાદો ભૂતકાળ 'started' વપરાય છે."
    },
    {
      "question": "My grandfather ___ for a walk every evening.",
      "options": [
        "go",
        "goes",
        "is going",
        "went"
      ],
      "answer": "goes",
      "explanation": "'every evening' શબ્દ નિયમિત આદત દર્શાવે છે. તેથી, સાદા વર્તમાનકાળનો ઉપયોગ થાય છે. કર્તા 'My grandfather' ત્રીજો પુરુષ એકવચન હોવાથી 'goes' આવે."
    },
    {
      "question": "By the time the police arrived, the thieves ___.",
      "options": [
        "escaped",
        "were escaping",
        "had escaped",
        "escape"
      ],
      "answer": "had escaped",
      "explanation": "પોલીસ પહોંચી (ભૂતકાળ) તે પહેલાં જ ચોર ભાગી ગયા હતા. ભૂતકાળમાં બે ક્રિયાઓમાંથી જે ક્રિયા પહેલા બની હોય, તેના માટે પૂર્ણ ભૂતકાળ 'had escaped' વપરાય છે."
    },
    {
      "question": "This building ___ for six months now.",
      "options": [
        "is being built",
        "has been being built",
        "was being built",
        "is built"
      ],
      "answer": "has been being built",
      "explanation": "આ વાક્ય Passive Voice માં છે. 'for six months now' સૂચવે છે કે બાંધકામની ક્રિયા ભૂતકાળમાં શરૂ થઈ અને હજુ ચાલુ છે. આથી, ચાલુ પૂર્ણ વર્તમાનકાળનું Passive રૂપ 'has been being built' વપરાય છે."
    },
    {
      "question": "I ___ my friend at the airport tomorrow.",
      "options": [
        "meet",
        "am meeting",
        "met",
        "have met"
      ],
      "answer": "am meeting",
      "explanation": "નજીકના ભવિષ્યની પૂર્વ-આયોજિત ક્રિયા (personal arrangement) દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'am meeting' નો ઉપયોગ કરી શકાય છે."
    },
    {
      "question": "She ___ a lot since she started her new job.",
      "options": [
        "travels",
        "travelled",
        "is travelling",
        "has travelled"
      ],
      "answer": "has travelled",
      "explanation": "'since' વાળું વાક્ય સૂચવે છે કે ક્રિયા ભૂતકાળના કોઈ બિંદુથી અત્યાર સુધીના સમયગાળામાં થઈ છે. આ માટે પૂર્ણ વર્તમાનકાળ 'has travelled' વપરાય છે."
    },
    {
      "question": "What will you do after you ___ your studies?",
      "options": [
        "finish",
        "will finish",
        "finished",
        "are finishing"
      ],
      "answer": "finish",
      "explanation": "'after' જેવા સમયસૂચક સંયોજક પછી ભવિષ્યકાળના વાક્યમાં સાદા વર્તમાનકાળનો ઉપયોગ થાય છે, જ્યારે મુખ્ય વાક્ય ભવિષ્યકાળમાં હોય. તેથી 'finish' આવે."
    }
  ],
  "test-10": [
    {
      "question": "The chef ___ a delicious meal for us last night.",
      "options": [
        "cooks",
        "cooked",
        "was cooking",
        "has cooked"
      ],
      "answer": "cooked",
      "explanation": "વાક્યમાં 'last night' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે. તેથી, સાદા ભૂતકાળનું રૂપ 'cooked' વપરાય છે."
    },
    {
      "question": "The population of the world ___ very fast.",
      "options": [
        "increases",
        "is increasing",
        "increased",
        "has increased"
      ],
      "answer": "is increasing",
      "explanation": "આ વાક્ય વર્તમાન સમયમાં થઈ રહેલા ફેરફાર કે વિકાસ (trend) દર્શાવે છે. આવી પરિસ્થિતિ માટે ચાલુ વર્તમાનકાળ 'is increasing' નો ઉપયોગ થાય છે."
    },
    {
      "question": "I ___ my wallet. I can't find it anywhere.",
      "options": [
        "lost",
        "have lost",
        "had lost",
        "am losing"
      ],
      "answer": "have lost",
      "explanation": "વોલેટ ખોવાની ક્રિયા ભૂતકાળમાં થઈ છે, પરંતુ તેની અસર ('I can't find it') વર્તમાનમાં છે. આ માટે પૂર્ણ વર્તમાનકાળ 'have lost' વપરાય છે."
    },
    {
      "question": "By this time next year, we ___ our new house.",
      "options": [
        "will build",
        "will be building",
        "will have built",
        "build"
      ],
      "answer": "will have built",
      "explanation": "'By this time next year' ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have built' નો ઉપયોગ થાય છે."
    },
    {
      "question": "While the children were sleeping, their mother ___ a story.",
      "options": [
        "read",
        "was reading",
        "had read",
        "reads"
      ],
      "answer": "was reading",
      "explanation": "આ વાક્યમાં ભૂતકાળમાં બે ક્રિયાઓ એકસાથે ચાલુ હતી. બાળકો સૂઈ રહ્યા હતા (ચાલુ ભૂતકાળ) અને માતા વાર્તા વાંચી રહી હતી (ચાલુ ભૂતકાળ). તેથી 'was reading' આવે."
    },
    {
      "question": "It's the best film I ___.",
      "options": [
        "ever saw",
        "have ever seen",
        "am ever seeing",
        "had ever seen"
      ],
      "answer": "have ever seen",
      "explanation": "Superlative degree (the best, the most, etc.) પછી અનુભવ દર્શાવવા માટે પૂર્ણ વર્તમાનકાળ 'have ever seen' નો ઉપયોગ થાય છે."
    },
    {
      "question": "She ___ English fluently now.",
      "options": [
        "speaks",
        "is speaking",
        "spoke",
        "has spoken"
      ],
      "answer": "speaks",
      "explanation": "'now' શબ્દ હોવા છતાં, વાક્ય કોઈની ક્ષમતા કે આવડત દર્શાવે છે, જે એક સ્થાયી હકીકત છે. આ માટે સાદો વર્તમાનકાળ 'speaks' વપરાય છે."
    },
    {
      "question": "They ___ about politics all evening.",
      "options": [
        "talked",
        "were talking",
        "have talked",
        "had talked"
      ],
      "answer": "were talking",
      "explanation": "'all evening' સૂચવે છે કે ભૂતકાળમાં આખી સાંજ દરમિયાન વાત કરવાની ક્રિયા ચાલુ હતી. લાંબા સમય સુધી ચાલેલી ભૂતકાળની ક્રિયા માટે ચાલુ ભૂતકાળ 'were talking' વપરાય છે."
    },
    {
      "question": "The train ___ in five minutes.",
      "options": [
        "leaves",
        "is leaving",
        "will leave",
        "left"
      ],
      "answer": "is leaving",
      "explanation": "નજીકના ભવિષ્યમાં ('in five minutes') થનારી ક્રિયા દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'is leaving' નો ઉપયોગ થઈ શકે છે. 'leaves' (નિયત સમયપત્રક) પણ સાચું હોઈ શકે, પણ 'is leaving' વધુ સામાન્ય છે."
    },
    {
      "question": "He ___ for the exam since Monday.",
      "options": [
        "prepares",
        "is preparing",
        "has been preparing",
        "was preparing"
      ],
      "answer": "has been preparing",
      "explanation": "'since Monday' સૂચવે છે કે પરીક્ષાની તૈયારી કરવાની ક્રિયા ભૂતકાળમાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been preparing' વપરાય છે."
    }
  ],
  "test-11": [
    {
      "question": "The boy fell down while he ___ the tree.",
      "options": [
        "climbed",
        "was climbing",
        "had climbed",
        "climbs"
      ],
      "answer": "was climbing",
      "explanation": "જ્યારે ઝાડ પર ચડવાની ક્રિયા (ચાલુ ભૂતકાળ) ચાલુ હતી, ત્યારે તે નીચે પડ્યો (ટૂંકી ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી લાંબી ક્રિયા માટે 'was climbing' આવે."
    },
    {
      "question": "I ___ my work by the time you come back.",
      "options": [
        "will finish",
        "will be finishing",
        "will have finished",
        "finish"
      ],
      "answer": "will have finished",
      "explanation": "'by the time' વાળું વાક્ય ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have finished' નો ઉપયોગ થાય છે."
    },
    {
      "question": "How many cups of coffee ___ you ___ today?",
      "options": [
        "did, drink",
        "have, drunk",
        "do, drink",
        "were, drinking"
      ],
      "answer": "have, drunk",
      "explanation": "વાક્યમાં 'today' શબ્દ છે, જે દિવસ હજુ પૂરો થયો નથી તેવું સૂચવે છે. અત્યાર સુધીમાં થયેલી ક્રિયા વિશે પૂછવા માટે પૂર્ણ વર્તમાનકાળ 'have drunk' વપરાય છે."
    },
    {
      "question": "He told me that he ___ a new car.",
      "options": [
        "has bought",
        "bought",
        "had bought",
        "buys"
      ],
      "answer": "had bought",
      "explanation": "આ Reported Speech (Indirect Speech) નું વાક્ય છે. Reporting verb 'told' ભૂતકાળમાં છે, તેથી Direct Speech નું 'have bought' (પૂર્ણ વર્તમાનકાળ) 'had bought' (પૂર્ણ ભૂતકાળ) માં ફેરવાય છે."
    },
    {
      "question": "It usually ___ a lot in this part of the country.",
      "options": [
        "rains",
        "is raining",
        "rained",
        "has rained"
      ],
      "answer": "rains",
      "explanation": "'usually' શબ્દ નિયમિતપણે બનતી ઘટના દર્શાવે છે. આ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'It' ત્રીજો પુરુષ એકવચન હોવાથી 'rains' આવે."
    },
    {
      "question": "At 10 pm tonight, I ___ my favorite show.",
      "options": [
        "will watch",
        "watch",
        "am watching",
        "will be watching"
      ],
      "answer": "will be watching",
      "explanation": "ભવિષ્યના ચોક્કસ સમયે ('At 10 pm tonight') કોઈ ક્રિયા ચાલુ હશે તે દર્શાવવા માટે ચાલુ ભવિષ્યકાળ 'will be watching' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The company ___ a lot of money last year.",
      "options": [
        "made",
        "makes",
        "has made",
        "was making"
      ],
      "answer": "made",
      "explanation": "વાક્યમાં 'last year' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે. તેથી, સાદા ભૂતકાળનું રૂપ 'made' વપરાય છે."
    },
    {
      "question": "She looked tired. She ___ for the exam all week.",
      "options": [
        "studied",
        "was studying",
        "had been studying",
        "has been studying"
      ],
      "answer": "had been studying",
      "explanation": "તેણી થાકેલી દેખાતી હતી (ભૂતકાળ). તેનું કારણ એ હતું કે તે આખું અઠવાડિયું પરીક્ષાની તૈયારી કરી રહી હતી. ભૂતકાળના કોઈ સમય પહેલાંથી ચાલતી ક્રિયા દર્શાવવા ચાલુ પૂર્ણ ભૂતકાળ 'had been studying' વપરાય છે."
    },
    {
      "question": "Where ___ you put my keys? I can't find them.",
      "options": [
        "do",
        "did",
        "have",
        "are"
      ],
      "answer": "did",
      "explanation": "આ પ્રશ્ન ભૂતકાળમાં થયેલી ક્રિયા (ચાવી મૂકવાની) વિશે છે જેની અસર વર્તમાનમાં છે. તેમ છતાં, પ્રશ્ન ક્રિયા ક્યારે થઈ તે વિશે પૂછે છે, તેથી સાદા ભૂતકાળ 'did' નો ઉપયોગ વધુ સ્વાભાવિક છે. 'Have you put' પણ શક્ય છે, પણ 'did' વધુ સામાન્ય છે."
    },
    {
      "question": "The postman ___ yet.",
      "options": [
        "didn't come",
        "hasn't come",
        "isn't coming",
        "hadn't come"
      ],
      "answer": "hasn't come",
      "explanation": "'yet' શબ્દનો ઉપયોગ સામાન્ય રીતે પૂર્ણ વર્તમાનકાળના નકારાત્મક વાક્યોમાં થાય છે, જે દર્શાવે છે કે ક્રિયા હજુ સુધી થઈ નથી. તેથી, 'hasn't come' સાચો જવાબ છે."
    }
  ],
  "test-12": [
    {
      "question": "This time last year, I ___ in a small village.",
      "options": [
        "lived",
        "was living",
        "had lived",
        "have lived"
      ],
      "answer": "was living",
      "explanation": "'This time last year' ભૂતકાળના કોઈ ચોક્કસ સમયે કોઈ ક્રિયા ચાલુ હતી તેવું દર્શાવે છે. આ માટે ચાલુ ભૂતકાળ 'was living' વપરાય છે."
    },
    {
      "question": "If you heat ice, it ___.",
      "options": [
        "melts",
        "will melt",
        "is melting",
        "melted"
      ],
      "answer": "melts",
      "explanation": "આ શરતી વાક્ય (Zero Conditional) છે, જે વૈજ્ઞાનિક હકીકત કે સાર્વત્રિક સત્ય દર્શાવે છે. 'If' વાળા વાક્યમાં અને મુખ્ય વાક્યમાં બંનેમાં સાદો વર્તમાનકાળ 'melts' વપરાય છે."
    },
    {
      "question": "She ___ the entire book by tomorrow evening.",
      "options": [
        "will read",
        "will be reading",
        "will have read",
        "reads"
      ],
      "answer": "will have read",
      "explanation": "'by tomorrow evening' ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have read' વપરાય છે."
    },
    {
      "question": "The concert ___ already ___ when we arrived.",
      "options": [
        "has, started",
        "was, starting",
        "had, started",
        "is, starting"
      ],
      "answer": "had, started",
      "explanation": "ભૂતકાળમાં જ્યારે અમે પહોંચ્યા, તે પહેલાં જ કોન્સર્ટ શરૂ થઈ ચૂક્યો હતો. બે ભૂતકાળની ક્રિયામાંથી જે પહેલા બને, તેના માટે પૂર્ણ ભૂતકાળ 'had started' વપરાય છે."
    },
    {
      "question": "I'm sorry, I ___ you. Could you repeat that?",
      "options": [
        "don't hear",
        "didn't hear",
        "haven't heard",
        "am not hearing"
      ],
      "answer": "didn't hear",
      "explanation": "સાંભળવાની ક્રિયા હમણાં જ ભૂતકાળમાં નથી થઈ, તેથી માફી માંગવામાં આવી રહી છે. ટૂંકા ભૂતકાળની ક્રિયા માટે સાદો ભૂતકાળ 'didn't hear' વપરાય છે."
    },
    {
      "question": "He ___ for this moment all his life.",
      "options": [
        "waits",
        "is waiting",
        "has been waiting",
        "waited"
      ],
      "answer": "has been waiting",
      "explanation": "'all his life' સૂચવે છે કે રાહ જોવાની ક્રિયા ભૂતકાળથી શરૂ થઈને વર્તમાન ક્ષણ સુધી ચાલુ રહી છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been waiting' વપરાય છે."
    },
    {
      "question": "The team ___ very well at the moment.",
      "options": [
        "plays",
        "is playing",
        "played",
        "has played"
      ],
      "answer": "is playing",
      "explanation": "'at the moment' શબ્દ સૂચવે છે કે ક્રિયા અત્યારે જ, બોલતી વખતે ચાલુ છે. તેથી, ચાલુ વર્તમાનકાળ 'is playing' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The film wasn't very good. I ___ it.",
      "options": [
        "don't enjoy",
        "didn't enjoy",
        "haven't enjoyed",
        "wasn't enjoying"
      ],
      "answer": "didn't enjoy",
      "explanation": "ફિલ્મ જોવાની ક્રિયા ભૂતકાળમાં પૂરી થઈ ગઈ છે ('wasn't very good'). ભૂતકાળમાં પૂરી થયેલી ક્રિયા વિશે અભિપ્રાય આપવા માટે સાદો ભૂતકાળ 'didn't enjoy' વપરાય છે."
    },
    {
      "question": "Don't call me between 7 and 8. I ___ dinner then.",
      "options": [
        "will have",
        "will be having",
        "am having",
        "have"
      ],
      "answer": "will be having",
      "explanation": "વાક્ય ભવિષ્યના ચોક્કસ સમયગાળા (between 7 and 8) દરમિયાન કોઈ ક્રિયા ચાલુ હશે તેવું દર્શાવે છે. આ માટે ચાલુ ભવિષ્યકાળ 'will be having' નો ઉપયોગ થાય છે."
    },
    {
      "question": "She ___ glasses since she was a child.",
      "options": [
        "wears",
        "is wearing",
        "has worn",
        "wore"
      ],
      "answer": "has worn",
      "explanation": "'since she was a child' સૂચવે છે કે ક્રિયા ભૂતકાળમાં શરૂ થઈ અને તેની અસર કે સ્થિતિ વર્તમાન સુધી ચાલુ છે. આ માટે પૂર્ણ વર્તમાનકાળ 'has worn' વપરાય છે. 'has been wearing' પણ સાચું છે."
    }
  ],
  "test-13": [
    {
      "question": "The train ___ at 8:45.",
      "options": [
        "arrives",
        "is arriving",
        "will arrive",
        "arrived"
      ],
      "answer": "arrives",
      "explanation": "આ એક નિયત સમયપત્રક (timetable) છે. ભવિષ્યની આવી નિયત ઘટનાઓ માટે સાદો વર્તમાનકાળ 'arrives' વપરાય છે."
    },
    {
      "question": "We ___ a party next Saturday. Would you like to come?",
      "options": [
        "have",
        "are having",
        "will have",
        "had"
      ],
      "answer": "are having",
      "explanation": "નજીકના ભવિષ્યની પૂર્વ-આયોજિત સામાજિક ઘટના (social arrangement) દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'are having' નો ઉપયોગ થાય છે."
    },
    {
      "question": "I ___ the book you gave me, but I haven't finished it yet.",
      "options": [
        "read",
        "am reading",
        "have been reading",
        "was reading"
      ],
      "answer": "have been reading",
      "explanation": "પુસ્તક વાંચવાની ક્રિયા ભૂતકાળમાં શરૂ થઈ અને હજુ પણ ચાલુ છે ('haven't finished it yet'). આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been reading' વપરાય છે."
    },
    {
      "question": "He ___ for five minutes when the bus finally arrived.",
      "options": [
        "was waiting",
        "had been waiting",
        "waited",
        "has been waiting"
      ],
      "answer": "had been waiting",
      "explanation": "ભૂતકાળમાં બસ આવી તે પહેલાં, પાંચ મિનિટથી રાહ જોવાની ક્રિયા ચાલુ હતી. ભૂતકાળના કોઈ સમય પહેલાંથી ચાલતી ક્રિયા દર્શાવવા ચાલુ પૂર્ણ ભૂતકાળ 'had been waiting' વપરાય છે."
    },
    {
      "question": "What's that smell? Something ___.",
      "options": [
        "burns",
        "is burning",
        "burnt",
        "has burnt"
      ],
      "answer": "is burning",
      "explanation": "ગંધ અત્યારે આવી રહી છે, જે સૂચવે છે કે કોઈ વસ્તુ બળવાની ક્રિયા બોલતી વખતે ચાલુ છે. તેથી, ચાલુ વર્તમાનકાળ 'is burning' વપરાય છે."
    },
    {
      "question": "She was disappointed because her friends ___ for her.",
      "options": [
        "didn't wait",
        "weren't waiting",
        "hadn't waited",
        "haven't waited"
      ],
      "answer": "hadn't waited",
      "explanation": "તેણી નિરાશ થઈ (ભૂતકાળ). તેનું કારણ એ હતું કે તેના મિત્રોએ તેના માટે રાહ જોઈ ન હતી. જે ક્રિયા પહેલા બની (રાહ ન જોવી), તેના માટે પૂર્ણ ભૂતકાળ 'hadn't waited' વપરાય છે."
    },
    {
      "question": "The course ___ next Monday.",
      "options": [
        "begins",
        "is beginning",
        "will begin",
        "began"
      ],
      "answer": "begins",
      "explanation": "આ એક નિયત કાર્યક્રમ (official program) છે. ભવિષ્યની આવી નિયત ઘટનાઓ માટે સાદો વર્તમાનકાળ 'begins' વપરાય છે."
    },
    {
      "question": "He ___ his keys. He has to go back and look for them.",
      "options": [
        "forgot",
        "forgets",
        "has forgotten",
        "had forgotten"
      ],
      "answer": "has forgotten",
      "explanation": "ચાવી ભૂલી જવાની ક્રિયાની અસર વર્તમાનમાં છે (તેને પાછા જવું પડશે). આ માટે પૂર્ણ વર્તમાનકાળ 'has forgotten' વપરાય છે."
    },
    {
      "question": "I ___ a bath when the lights went out.",
      "options": [
        "had",
        "was having",
        "had had",
        "have"
      ],
      "answer": "was having",
      "explanation": "જ્યારે લાઈટ ગઈ (સાદો ભૂતકાળ), ત્યારે નહાવાની ક્રિયા ચાલુ હતી. ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was having' વપરાય છે."
    },
    {
      "question": "Don't worry, I ___ you with your project.",
      "options": [
        "help",
        "am helping",
        "will help",
        "helped"
      ],
      "answer": "will help",
      "explanation": "આ વાક્ય મદદ કરવાની સ્વયંસ્ફુરિત ઓફર (spontaneous offer) દર્શાવે છે. બોલતી વખતે લેવાયેલા નિર્ણય કે ઓફર માટે સાદો ભવિષ્યકાળ 'will help' વપરાય છે."
    }
  ],
  "test-14": [
    {
      "question": "The moon ___ around the Earth.",
      "options": [
        "revolve",
        "revolves",
        "is revolving",
        "revolved"
      ],
      "answer": "revolves",
      "explanation": "ચંદ્રનું પૃથ્વીની આસપાસ ફરવું એ સનાતન સત્ય છે. આવી વૈજ્ઞાનિક હકીકતો માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The moon' ત્રીજો પુરુષ એકવચન હોવાથી 'revolves' આવે."
    },
    {
      "question": "I ___ my old friend in the market yesterday.",
      "options": [
        "meet",
        "met",
        "am meeting",
        "have met"
      ],
      "answer": "met",
      "explanation": "વાક્યમાં 'yesterday' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે. તેથી, સાદા ભૂતકાળનું રૂપ 'met' વપરાય છે."
    },
    {
      "question": "Perhaps we ___ to the beach this weekend.",
      "options": [
        "go",
        "are going",
        "will go",
        "went"
      ],
      "answer": "will go",
      "explanation": "'Perhaps' શબ્દ ભવિષ્યની અનિશ્ચિત સંભાવના દર્શાવે છે. આવી પરિસ્થિતિ માટે સાદો ભવિષ્યકાળ 'will go' વપરાય છે."
    },
    {
      "question": "They ___ football since 4 o'clock.",
      "options": [
        "are playing",
        "have been playing",
        "play",
        "played"
      ],
      "answer": "have been playing",
      "explanation": "'since 4 o'clock' સૂચવે છે કે રમવાની ક્રિયા ભૂતકાળમાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been playing' વપરાય છે."
    },
    {
      "question": "The girl said that she ___ her homework.",
      "options": [
        "has finished",
        "had finished",
        "finished",
        "is finishing"
      ],
      "answer": "had finished",
      "explanation": "આ Reported Speech નું વાક્ય છે. Reporting verb 'said' ભૂતકાળમાં છે, તેથી Direct Speech નો પૂર્ણ વર્તમાનકાળ ('has finished') પૂર્ણ ભૂતકાળ ('had finished') માં ફેરવાઈ જાય છે."
    },
    {
      "question": "Look at those black clouds! It ___.",
      "options": [
        "will rain",
        "is going to rain",
        "rains",
        "rained"
      ],
      "answer": "is going to rain",
      "explanation": "કાળા વાદળો વર્તમાન પુરાવો છે જેના આધારે ભવિષ્યની આગાહી કરવામાં આવી રહી છે. આવા સંજોગોમાં 'be going to' નો ઉપયોગ થાય છે. તેથી 'is going to rain' સાચો જવાબ છે."
    },
    {
      "question": "He ___ for the bus when it started to rain.",
      "options": [
        "waited",
        "was waiting",
        "had waited",
        "has waited"
      ],
      "answer": "was waiting",
      "explanation": "જ્યારે વરસાદ શરૂ થયો (સાદો ભૂતકાળ), ત્યારે તે બસની રાહ જોઈ રહ્યો હતો (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was waiting' વપરાય છે."
    },
    {
      "question": "By the end of the course, you ___ a lot.",
      "options": [
        "will learn",
        "will be learning",
        "will have learned",
        "learn"
      ],
      "answer": "will have learned",
      "explanation": "'By the end of the course' ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have learned' વપરાય છે."
    },
    {
      "question": "This is the second time she ___ that mistake.",
      "options": [
        "made",
        "makes",
        "is making",
        "has made"
      ],
      "answer": "has made",
      "explanation": "'This is the second time' જેવા અભિવ્યક્તિઓ સાથે પુનરાવર્તિત અનુભવ દર્શાવવા માટે પૂર્ણ વર્તમાનકાળ 'has made' નો ઉપયોગ થાય છે."
    },
    {
      "question": "What do you usually ___ on weekends?",
      "options": [
        "do",
        "doing",
        "did",
        "done"
      ],
      "answer": "do",
      "explanation": "આ પ્રશ્ન નિયમિત ક્રિયા ('usually on weekends') વિશે છે. સાદા વર્તમાનકાળના પ્રશ્નમાં સહાયકારક ક્રિયાપદ 'do' પછી ક્રિયાપદનું મૂળ રૂપ 'do' આવે છે."
    }
  ],
  "test-15": [
    {
      "question": "When ___ the last time you saw her?",
      "options": [
        "is",
        "was",
        "has been",
        "had been"
      ],
      "answer": "was",
      "explanation": "આ પ્રશ્ન ભૂતકાળના ચોક્કસ સમય ('the last time') વિશે છે. તેથી સાદા ભૂતકાળ 'was' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The baby ___ for hours. He must be hungry.",
      "options": [
        "cries",
        "is crying",
        "has been crying",
        "cried"
      ],
      "answer": "has been crying",
      "explanation": "બાળક ભૂખ્યું હોવાની વર્તમાન ધારણાનું કારણ એ છે કે તે કલાકોથી રડી રહ્યું છે. ભૂતકાળથી શરૂ થયેલી અને વર્તમાન સુધી ચાલેલી ક્રિયા માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been crying' વપરાય છે."
    },
    {
      "question": "The conference ___ on Friday.",
      "options": [
        "will end",
        "ends",
        "is ending",
        "ended"
      ],
      "answer": "ends",
      "explanation": "આ એક નિયત કાર્યક્રમ (official schedule) છે. ભવિષ્યની આવી નિયત ઘટનાઓ માટે સાદો વર્તમાનકાળ 'ends' વાપરી શકાય છે."
    },
    {
      "question": "Before he became a writer, he ___ as a teacher.",
      "options": [
        "worked",
        "was working",
        "had worked",
        "has worked"
      ],
      "answer": "had worked",
      "explanation": "લેખક બન્યા પહેલાં (ભૂતકાળની ક્રિયા), તે શિક્ષક તરીકે કામ કરી ચૂક્યા હતા. ભૂતકાળની મુખ્ય ક્રિયા પહેલાં થયેલી ક્રિયા માટે પૂર્ણ ભૂતકાળ 'had worked' વપરાય છે."
    },
    {
      "question": "I can't talk now. I ___ for an important call.",
      "options": [
        "wait",
        "am waiting",
        "waited",
        "have waited"
      ],
      "answer": "am waiting",
      "explanation": "'I can't talk now' સૂચવે છે કે બોલતી વખતે કોઈ ક્રિયા ચાલુ છે. તેથી, ચાલુ વર્તમાનકાળ 'am waiting' વપરાય છે."
    },
    {
      "question": "If you mix blue and yellow, you ___ green.",
      "options": [
        "get",
        "will get",
        "are getting",
        "got"
      ],
      "answer": "get",
      "explanation": "આ શરતી વાક્ય (Zero Conditional) છે, જે એક હકીકત દર્શાવે છે. 'If' વાળા વાક્યમાં અને મુખ્ય વાક્યમાં બંનેમાં સાદો વર્તમાનકાળ 'get' વપરાય છે."
    },
    {
      "question": "He ___ about his trip when the power went out.",
      "options": [
        "talked",
        "was talking",
        "had talked",
        "has talked"
      ],
      "answer": "was talking",
      "explanation": "જ્યારે લાઈટ ગઈ (સાદો ભૂતકાળ), તે સમયે તે તેની ટ્રિપ વિશે વાત કરી રહ્યો હતો (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was talking' વપરાય છે."
    },
    {
      "question": "By 2025, she ___ her PhD.",
      "options": [
        "will complete",
        "will be completing",
        "will have completed",
        "completes"
      ],
      "answer": "will have completed",
      "explanation": "'By 2025' ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have completed' વપરાય છે."
    },
    {
      "question": "This ___ the third time you have asked me the same question.",
      "options": [
        "is",
        "was",
        "has been",
        "will be"
      ],
      "answer": "is",
      "explanation": "'This is the third time' એ એક સામાન્ય અભિવ્યક્તિ છે જે પૂર્ણ વર્તમાનકાળ ('have asked') સાથે વપરાય છે. મુખ્ય વાક્ય વર્તમાનમાં છે, તેથી 'is' આવે."
    },
    {
      "question": "I'm not hungry. I ___ a big lunch.",
      "options": [
        "just ate",
        "have just eaten",
        "am just eating",
        "had just eaten"
      ],
      "answer": "have just eaten",
      "explanation": "હું ભૂખ્યો નથી (વર્તમાન સ્થિતિ), કારણ કે મેં હમણાં જ મોટું લંચ લીધું છે. ભૂતકાળની ક્રિયાની વર્તમાન અસર દર્શાવવા માટે પૂર્ણ વર્તમાનકાળ 'have just eaten' વપરાય છે."
    }
  ],
  "test-16": [
    {
      "question": "The wind ___ strongly last night.",
      "options": [
        "blows",
        "blew",
        "was blowing",
        "has blown"
      ],
      "answer": "blew",
      "explanation": "વાક્યમાં 'last night' શબ્દ ભૂતકાળનો સમય દર્શાવે છે, તેથી સાદા ભૂતકાળનું રૂપ 'blew' વપરાય છે."
    },
    {
      "question": "Be quiet! The baby ___.",
      "options": [
        "sleeps",
        "is sleeping",
        "slept",
        "has slept"
      ],
      "answer": "is sleeping",
      "explanation": "'Be quiet!' જેવી આજ્ઞા સૂચવે છે કે કોઈ ક્રિયા અત્યારે જ ચાલુ છે અને તેમાં ખલેલ ન પહોંચાડવી જોઈએ. તેથી, ચાલુ વર્તમાનકાળ 'is sleeping' વપરાય છે."
    },
    {
      "question": "I am sure they ___ the match.",
      "options": [
        "win",
        "are winning",
        "will win",
        "won"
      ],
      "answer": "will win",
      "explanation": "'I am sure' ભવિષ્ય વિશેની મજબૂત ધારણા કે આગાહી વ્યક્ત કરે છે. આ માટે સાદો ભવિષ્યકાળ 'will win' નો ઉપયોગ થાય છે."
    },
    {
      "question": "She ___ TV when I called her.",
      "options": [
        "watched",
        "was watching",
        "had watched",
        "watches"
      ],
      "answer": "was watching",
      "explanation": "જ્યારે મેં તેને ફોન કર્યો (સાદો ભૂતકાળ), તે સમયે તે ટીવી જોઈ રહી હતી (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was watching' વપરાય છે."
    },
    {
      "question": "He ___ here since morning.",
      "options": [
        "is waiting",
        "has been waiting",
        "waits",
        "was waiting"
      ],
      "answer": "has been waiting",
      "explanation": "'since morning' સૂચવે છે કે રાહ જોવાની ક્રિયા સવારથી શરૂ થઈ છે અને હજુ પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been waiting' વપરાય છે."
    },
    {
      "question": "After they ___ their meal, they went for a walk.",
      "options": [
        "ate",
        "were eating",
        "had eaten",
        "have eaten"
      ],
      "answer": "had eaten",
      "explanation": "ભૂતકાળમાં બે ક્રિયાઓ બની: ભોજન લેવું અને ચાલવા જવું. જે ક્રિયા પહેલા બની (ભોજન લેવું), તેના માટે પૂર્ણ ભૂતકાળ 'had eaten' વપરાય છે."
    },
    {
      "question": "The train for Mumbai ___ from platform 3.",
      "options": [
        "departs",
        "is departing",
        "will depart",
        "departed"
      ],
      "answer": "departs",
      "explanation": "આ ટ્રેનનું નિયમિત સમયપત્રક છે. આવી નિયત ઘટનાઓ માટે સાદો વર્તમાનકાળ 'departs' વપરાય છે."
    },
    {
      "question": "We ___ this film twice already.",
      "options": [
        "saw",
        "have seen",
        "are seeing",
        "see"
      ],
      "answer": "have seen",
      "explanation": "'already' અને 'twice' જેવા શબ્દો સૂચવે છે કે ક્રિયા ભૂતકાળમાં થઈ ચૂકી છે. પુનરાવર્તિત ભૂતકાળના અનુભવ માટે પૂર્ણ વર્તમાનકાળ 'have seen' વપરાય છે."
    },
    {
      "question": "This time next month, we ___ our holidays.",
      "options": [
        "will enjoy",
        "will be enjoying",
        "will have enjoyed",
        "enjoy"
      ],
      "answer": "will be enjoying",
      "explanation": "'This time next month' ભવિષ્યના કોઈ ચોક્કસ સમયે કોઈ ક્રિયા ચાલુ હશે તેવું દર્શાવે છે. આ માટે ચાલુ ભવિષ્યકાળ 'will be enjoying' નો ઉપયોગ થાય છે."
    },
    {
      "question": "I ___ to him yesterday.",
      "options": [
        "spoke",
        "have spoken",
        "was speaking",
        "speak"
      ],
      "answer": "spoke",
      "explanation": "વાક્યમાં 'yesterday' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે, તેથી સાદા ભૂતકાળનું રૂપ 'spoke' વપરાય છે."
    }
  ],
  "test-17": [
    {
      "question": "What ___ you doing when the accident happened?",
      "options": [
        "are",
        "were",
        "did",
        "do"
      ],
      "answer": "were",
      "explanation": "આ પ્રશ્ન ભૂતકાળમાં જ્યારે અકસ્માત થયો (સાદો ભૂતકાળ) ત્યારે કઈ ક્રિયા ચાલુ હતી તે વિશે છે. ચાલુ ભૂતકાળના પ્રશ્નમાં 'you' સાથે સહાયક ક્રિયાપદ 'were' વપરાય છે."
    },
    {
      "question": "My flight ___ at 9:00 AM tomorrow.",
      "options": [
        "is leaving",
        "leaves",
        "will leave",
        "left"
      ],
      "answer": "leaves",
      "explanation": "આ એક નિયત સમયપત્રક (official schedule) છે. ભવિષ્યની આવી નિયત ઘટનાઓ માટે સાદો વર્તમાનકાળ 'leaves' વપરાય છે. 'is leaving' પણ શક્ય છે, પણ 'leaves' વધુ ઔપચારિક છે."
    },
    {
      "question": "I ___ all the Harry Potter books.",
      "options": [
        "read",
        "have read",
        "am reading",
        "was reading"
      ],
      "answer": "have read",
      "explanation": "આ વાક્ય ભૂતકાળના અનુભવ વિશે છે, કોઈ ચોક્કસ સમય વિશે નહીં. પુસ્તકો વાંચવાની ક્રિયા પૂરી થઈ ગઈ છે, તેથી પૂર્ણ વર્તમાનકાળ 'have read' વપરાય છે."
    },
    {
      "question": "He was angry because he ___ for a long time.",
      "options": [
        "waited",
        "was waiting",
        "has been waiting",
        "had been waiting"
      ],
      "answer": "had been waiting",
      "explanation": "તે ગુસ્સે હતો (ભૂતકાળ). તેનું કારણ એ હતું કે તે લાંબા સમયથી રાહ જોઈ રહ્યો હતો. ભૂતકાળના કોઈ સમય પહેલાંથી ચાલતી ક્રિયા દર્શાવવા ચાલુ પૂર્ણ ભૂતકાળ 'had been waiting' વપરાય છે."
    },
    {
      "question": "Don't forget to take your umbrella. It ___.",
      "options": [
        "is raining",
        "rains",
        "will rain",
        "is going to rain"
      ],
      "answer": "is raining",
      "explanation": "છત્રી લેવાનું કહેવાનું કારણ એ છે કે અત્યારે વરસાદ પડી રહ્યો છે. બોલતી વખતે ચાલુ ક્રિયા માટે ચાલુ વર્તમાનકાળ 'is raining' વપરાય છે."
    },
    {
      "question": "We ___ this car for ten years by next month.",
      "options": [
        "will have",
        "will be having",
        "will have had",
        "have"
      ],
      "answer": "will have had",
      "explanation": "'by next month' ભવિષ્યના ચોક્કસ સમય સુધીમાં માલિકીના દસ વર્ષ પૂરા થઈ ગયા હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have had' વપરાય છે."
    },
    {
      "question": "The artist ___ a masterpiece in 1888.",
      "options": [
        "painted",
        "was painting",
        "has painted",
        "had painted"
      ],
      "answer": "painted",
      "explanation": "વાક્યમાં ભૂતકાળનો ચોક્કસ સમય ('in 1888') આપેલો છે. તેથી, સાદા ભૂતકાળનું રૂપ 'painted' વપરાય છે."
    },
    {
      "question": "The children ___ their homework. Now they are playing.",
      "options": [
        "did",
        "have done",
        "were doing",
        "do"
      ],
      "answer": "have done",
      "explanation": "હોમવર્ક કરવાની ક્રિયા પૂરી થઈ ગઈ છે અને તેની અસર વર્તમાનમાં છે ('Now they are playing'). તેથી, પૂર્ણ વર્તમાનકાળ 'have done' વપરાય છે."
    },
    {
      "question": "If I had more time, I ___ more.",
      "options": [
        "will travel",
        "would travel",
        "travel",
        "traveled"
      ],
      "answer": "would travel",
      "explanation": "આ શરતી વાક્ય (Type 2) છે, જે વર્તમાનની કાલ્પનિક પરિસ્થિતિ દર્શાવે છે. 'If' વાળા વાક્યમાં સાદો ભૂતકાળ ('had') હોય, તો મુખ્ય વાક્યમાં 'would' + મૂળ રૂપ આવે."
    },
    {
      "question": "She always ___ her keys.",
      "options": [
        "loses",
        "is losing",
        "lost",
        "has lost"
      ],
      "answer": "loses",
      "explanation": "'always' શબ્દ વારંવાર બનતી આદત દર્શાવે છે. આવી આદતો માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'She' ત્રીજો પુરુષ એકવચન હોવાથી 'loses' આવે."
    }
  ],
  "test-18": [
    {
      "question": "I ___ a book when you called me.",
      "options": [
        "read",
        "was reading",
        "have read",
        "am reading"
      ],
      "answer": "was reading",
      "explanation": "જ્યારે તમે ફોન કર્યો (સાદો ભૂતકાળ), તે સમયે પુસ્તક વાંચવાની ક્રિયા ચાલુ હતી. ભૂતકાળમાં ચાલુ રહેલી ક્રિયા દર્શાવવા માટે ચાલુ ભૂતકાળ 'was reading' વપરાય છે."
    },
    {
      "question": "The sun gives us light and heat. This sentence is in ___ tense.",
      "options": [
        "Simple Present",
        "Simple Past",
        "Present Continuous",
        "Present Perfect"
      ],
      "answer": "Simple Present",
      "explanation": "આ વાક્ય સનાતન સત્ય દર્શાવે છે. સનાતન સત્ય, વૈજ્ઞાનિક નિયમો અને આદતો માટે સાદો વર્તમાનકાળ (Simple Present Tense) વપરાય છે."
    },
    {
      "question": "I promise I ___ tell anyone your secret.",
      "options": [
        "don't",
        "am not",
        "won't",
        "haven't"
      ],
      "answer": "won't",
      "explanation": "'I promise' ભવિષ્ય માટેનું વચન દર્શાવે છે. ભવિષ્યકાળના નકારાત્મક વાક્ય માટે 'will not' નું ટૂંકું રૂપ 'won't' વપરાય છે."
    },
    {
      "question": "She ___ her job last month.",
      "options": [
        "quits",
        "has quit",
        "quit",
        "is quitting"
      ],
      "answer": "quit",
      "explanation": "વાક્યમાં 'last month' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે. તેથી, સાદા ભૂતકાળનું રૂપ 'quit' વપરાય છે."
    },
    {
      "question": "We ___ for the bus for 30 minutes before it arrived.",
      "options": [
        "waited",
        "were waiting",
        "had been waiting",
        "have been waiting"
      ],
      "answer": "had been waiting",
      "explanation": "ભૂતકાળમાં બસ આવી તે પહેલાં, ૩૦ મિનિટથી રાહ જોવાની ક્રિયા ચાલુ હતી. ભૂતકાળના કોઈ સમય પહેલાંથી ચાલતી ક્રિયા દર્શાવવા ચાલુ પૂર્ણ ભૂતકાળ 'had been waiting' વપરાય છે."
    },
    {
      "question": "Oh no! I ___ the door unlocked.",
      "options": [
        "left",
        "have left",
        "had left",
        "am leaving"
      ],
      "answer": "have left",
      "explanation": "દરવાજો ખુલ્લો છોડી દેવાની ક્રિયા ભૂતકાળમાં થઈ છે, પણ તેની ચિંતા કે અસર વર્તમાનમાં છે. આ માટે પૂર્ણ વર્તમાનકાળ 'have left' વપરાય છે."
    },
    {
      "question": "Hurry up! The train ___ in 5 minutes.",
      "options": [
        "leaves",
        "is leaving",
        "will leave",
        "left"
      ],
      "answer": "leaves",
      "explanation": "આ ટ્રેનનું નિયત સમયપત્રક છે. ભવિષ્યની આવી નિયત ઘટનાઓ માટે સાદો વર્તમાનકાળ 'leaves' વપરાય છે. 'is leaving' પણ શક્ય છે, પણ 'leaves' વધુ ઔપચારિક છે."
    },
    {
      "question": "My parents ___ in this city since 1990.",
      "options": [
        "live",
        "are living",
        "have lived",
        "lived"
      ],
      "answer": "have lived",
      "explanation": "'since 1990' સૂચવે છે કે રહેવાની ક્રિયા ભૂતકાળમાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે પૂર્ણ વર્તમાનકાળ 'have lived' વપરાય છે. 'have been living' પણ એટલું જ સાચું છે."
    },
    {
      "question": "By the time he is 30, he ___ a famous doctor.",
      "options": [
        "will become",
        "will be becoming",
        "will have become",
        "becomes"
      ],
      "answer": "will have become",
      "explanation": "'By the time he is 30' ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have become' વપરાય છે."
    },
    {
      "question": "The students ___ quietly when the principal entered the classroom.",
      "options": [
        "sat",
        "were sitting",
        "had sat",
        "sit"
      ],
      "answer": "were sitting",
      "explanation": "જ્યારે પ્રિન્સિપાલ વર્ગમાં દાખલ થયા (સાદો ભૂતકાળ), ત્યારે વિદ્યાર્થીઓ શાંતિથી બેઠા હતા (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'were sitting' વપરાય છે."
    }
  ],
  "test-19": [
    {
      "question": "He often ___ about his adventures.",
      "options": [
        "talk",
        "talks",
        "is talking",
        "talked"
      ],
      "answer": "talks",
      "explanation": "'often' શબ્દ વારંવાર બનતી ક્રિયા કે આદત દર્શાવે છે. આ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'He' ત્રીજો પુરુષ એકવચન હોવાથી ક્રિયાપદને 's' લાગે છે."
    },
    {
      "question": "I can't believe it! I ___ my exam!",
      "options": [
        "passed",
        "pass",
        "have passed",
        "am passing"
      ],
      "answer": "have passed",
      "explanation": "પરીક્ષા પાસ કરવાની ક્રિયા હમણાં જ પૂરી થઈ છે અને તેની ખુશી કે આશ્ચર્ય વર્તમાનમાં વ્યક્ત થઈ રહ્યું છે. આવી તાજેતરમાં પૂરી થયેલી ક્રિયા માટે પૂર્ણ વર્તમાનકાળ 'have passed' વપરાય છે."
    },
    {
      "question": "She ___ a letter when her friend arrived.",
      "options": [
        "wrote",
        "was writing",
        "had written",
        "writes"
      ],
      "answer": "was writing",
      "explanation": "જ્યારે તેની મિત્ર આવી (સાદો ભૂતકાળ), તે સમયે તે પત્ર લખી રહી હતી (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was writing' વપરાય છે."
    },
    {
      "question": "The film ___ by the time we get to the cinema.",
      "options": [
        "will start",
        "will be starting",
        "will have started",
        "starts"
      ],
      "answer": "will have started",
      "explanation": "'by the time' વાળું વાક્ય ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. અમે સિનેમા પહોંચીશું તે પહેલાં જ ફિલ્મ શરૂ થઈ ગઈ હશે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have started' વપરાય છે."
    },
    {
      "question": "They ___ here since yesterday.",
      "options": [
        "are",
        "were",
        "have been",
        "had been"
      ],
      "answer": "have been",
      "explanation": "'since yesterday' સૂચવે છે કે અહીં હોવાની સ્થિતિ ગઇકાલથી શરૂ થઈને અત્યારે પણ ચાલુ છે. આ માટે પૂર્ણ વર્તમાનકાળ 'have been' વપરાય છે."
    },
    {
      "question": "Columbus ___ America in 1492.",
      "options": [
        "discovers",
        "discovered",
        "has discovered",
        "had discovered"
      ],
      "answer": "discovered",
      "explanation": "આ એક ઐતિહાસિક ઘટના છે જે ભૂતકાળના ચોક્કસ સમયે ('in 1492') બની હતી. આ માટે સાદો ભૂતકાળ 'discovered' વપરાય છે."
    },
    {
      "question": "Look! That car ___ very fast.",
      "options": [
        "drives",
        "is driving",
        "drove",
        "has driven"
      ],
      "answer": "is driving",
      "explanation": "'Look!' જેવો ઉદ્ગાર શબ્દ સૂચવે છે કે ક્રિયા અત્યારે નજર સમક્ષ બની રહી છે. તેથી, ચાલુ વર્તમાનકાળ 'is driving' નો ઉપયોગ થાય છે."
    },
    {
      "question": "He was out of breath because he ___.",
      "options": [
        "ran",
        "was running",
        "had been running",
        "has been running"
      ],
      "answer": "had been running",
      "explanation": "તેનો શ્વાસ ચડી ગયો હતો (ભૂતકાળ). તેનું કારણ એ હતું કે તે દોડી રહ્યો હતો. ભૂતકાળના કોઈ સમય પહેલાંથી ચાલતી ક્રિયા દર્શાવવા ચાલુ પૂર્ણ ભૂતકાળ 'had been running' વપરાય છે."
    },
    {
      "question": "The lessons ___ at 8 AM every day.",
      "options": [
        "start",
        "starts",
        "are starting",
        "started"
      ],
      "answer": "start",
      "explanation": "'every day' શબ્દ નિયમિત સમયપત્રક દર્શાવે છે. આવી ક્રિયાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The lessons' બહુવચન હોવાથી ક્રિયાપદનું મૂળ રૂપ 'start' આવે."
    },
    {
      "question": "I ___ you as soon as the meeting is over.",
      "options": [
        "call",
        "am calling",
        "will call",
        "called"
      ],
      "answer": "will call",
      "explanation": "'as soon as' વાળું વાક્ય ભવિષ્યની શરત દર્શાવે છે. જ્યારે શરતી વાક્યમાં સાદો વર્તમાનકાળ ('is over') હોય, ત્યારે મુખ્ય વાક્યમાં સાદો ભવિષ્યકાળ 'will call' આવે છે."
    }
  ],
  "test-20": [
    {
      "question": "The birds always ___ in the morning.",
      "options": [
        "sing",
        "sings",
        "are singing",
        "sang"
      ],
      "answer": "sing",
      "explanation": "'always' શબ્દ નિયમિતપણે થતી ક્રિયા કે આદત દર્શાવે છે. તેથી, સાદા વર્તમાનકાળનો ઉપયોગ થાય છે. કર્તા 'The birds' બહુવચન હોવાથી ક્રિયાપદનું મૂળ રૂપ 'sing' આવે છે."
    },
    {
      "question": "He ___ for this company for 5 years before he left.",
      "options": [
        "worked",
        "was working",
        "had worked",
        "has worked"
      ],
      "answer": "had worked",
      "explanation": "નોકરી છોડવાની ભૂતકાળની ક્રિયા ('left') પહેલાં, તેણે પાંચ વર્ષ કામ કર્યું હતું. ભૂતકાળની મુખ્ય ક્રિયા પહેલાં થયેલી ક્રિયા માટે પૂર્ણ ભૂતકાળ 'had worked' વપરાય છે."
    },
    {
      "question": "I think I ___ my phone at home.",
      "options": [
        "left",
        "have left",
        "had left",
        "am leaving"
      ],
      "answer": "have left",
      "explanation": "ફોન ઘરે છોડી દેવાની ક્રિયા ભૂતકાળમાં થઈ છે, પણ તેની અસર ('I think') વર્તમાનમાં અનુભવાઈ રહી છે. આ માટે પૂર્ણ વર્તમાનકાળ 'have left' વપરાય છે."
    },
    {
      "question": "This time next week, I ___ on my project.",
      "options": [
        "will work",
        "will be working",
        "will have worked",
        "work"
      ],
      "answer": "will be working",
      "explanation": "'This time next week' ભવિષ્યના કોઈ ચોક્કસ સમયે કોઈ ક્રિયા ચાલુ હશે તેવું દર્શાવે છે. આ માટે ચાલુ ભવિષ્યકાળ 'will be working' નો ઉપયોગ થાય છે."
    },
    {
      "question": "She ___ a shower when the doorbell rang.",
      "options": [
        "took",
        "was taking",
        "had taken",
        "takes"
      ],
      "answer": "was taking",
      "explanation": "જ્યારે ડોરબેલ વાગી (સાદો ભૂતકાળ), તે સમયે તે સ્નાન કરી રહી હતી (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was taking' વપરાય છે."
    },
    {
      "question": "They ___ their new house last month.",
      "options": [
        "move into",
        "moved into",
        "have moved into",
        "are moving into"
      ],
      "answer": "moved into",
      "explanation": "વાક્યમાં 'last month' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે, તેથી સાદા ભૂતકાળનું રૂપ 'moved into' વપરાય છે."
    },
    {
      "question": "How long ___ you ___ this car?",
      "options": [
        "do, have",
        "did, have",
        "have, had",
        "are, having"
      ],
      "answer": "have, had",
      "explanation": "આ પ્રશ્ન માલિકીનો સમયગાળો પૂછે છે, જે ભૂતકાળથી વર્તમાન સુધીનો છે. માલિકી દર્શાવતા ક્રિયાપદ 'have' નું ચાલુ કાળમાં રૂપ થતું નથી, તેથી પૂર્ણ વર્તમાનકાળ 'have had' વપરાય છે."
    },
    {
      "question": "The library ___ at 8 PM.",
      "options": [
        "close",
        "closes",
        "is closing",
        "closed"
      ],
      "answer": "closes",
      "explanation": "આ એક નિયમિત સમયપત્રક છે. આવી નિયત ઘટનાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The library' ત્રીજો પુરુષ એકવચન હોવાથી 'closes' આવે."
    },
    {
      "question": "If you don't hurry, you ___ the bus.",
      "options": [
        "miss",
        "will miss",
        "are missing",
        "missed"
      ],
      "answer": "will miss",
      "explanation": "આ શરતી વાક્ય (Type 1) છે. 'If' વાળા વાક્યમાં સાદો વર્તમાનકાળ (અહીં 'don't hurry' નકાર છે) હોય, તો મુખ્ય વાક્યમાં સાદો ભવિષ્યકાળ 'will miss' વપરાય છે."
    },
    {
      "question": "By the time I arrived, everyone ___.",
      "options": [
        "left",
        "was leaving",
        "has left",
        "had left"
      ],
      "answer": "had left",
      "explanation": "ભૂતકાળમાં જ્યારે હું પહોંચ્યો, તે પહેલાં જ બધા જતા રહ્યા હતા. બે ભૂતકાળની ક્રિયામાંથી જે ક્રિયા પહેલા બની હોય, તેના માટે પૂર્ણ ભૂતકાળ 'had left' વપરાય છે."
    }
  ],
  "test-21": [
    {
      "question": "She ___ since noon. We should wake her up.",
      "options": [
        "sleeps",
        "is sleeping",
        "has been sleeping",
        "was sleeping"
      ],
      "answer": "has been sleeping",
      "explanation": "'since noon' સૂચવે છે કે સૂવાની ક્રિયા બપોરથી શરૂ થઈ છે અને હજુ પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been sleeping' વપરાય છે."
    },
    {
      "question": "The teacher ___ the lesson before the bell rang.",
      "options": [
        "explained",
        "was explaining",
        "had explained",
        "has explained"
      ],
      "answer": "had explained",
      "explanation": "બેલ વાગ્યો (ભૂતકાળ) તે પહેલાં જ શિક્ષકે પાઠ સમજાવી દીધો હતો. ભૂતકાળમાં બે ક્રિયાઓમાંથી જે ક્રિયા પહેલા બની હોય, તેના માટે પૂર્ણ ભૂતકાળ 'had explained' વપરાય છે."
    },
    {
      "question": "I ___ to visit my aunt next weekend.",
      "options": [
        "go",
        "am going",
        "went",
        "have gone"
      ],
      "answer": "am going",
      "explanation": "નજીકના ભવિષ્યની પૂર્વ-આયોજિત ક્રિયા ('next weekend') દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'am going' નો ઉપયોગ થઈ શકે છે. 'I am going to visit' પણ સાચું છે."
    },
    {
      "question": "The children ___ their beds every morning.",
      "options": [
        "make",
        "makes",
        "are making",
        "made"
      ],
      "answer": "make",
      "explanation": "'every morning' શબ્દ નિયમિત ક્રિયા દર્શાવે છે. તેથી, સાદા વર્તમાનકાળનો ઉપયોગ થાય છે. કર્તા 'The children' બહુવચન હોવાથી ક્રિયાપદનું મૂળ રૂપ 'make' આવે."
    },
    {
      "question": "I ___ a delicious cake yesterday.",
      "options": [
        "bake",
        "baked",
        "am baking",
        "have baked"
      ],
      "answer": "baked",
      "explanation": "વાક્યમાં 'yesterday' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે, તેથી સાદા ભૂતકાળનું રૂપ 'baked' વપરાય છે."
    },
    {
      "question": "By next month, they ___ married for 10 years.",
      "options": [
        "will be",
        "will have been",
        "are",
        "were"
      ],
      "answer": "will have been",
      "explanation": "'By next month' ભવિષ્યના ચોક્કસ સમય સુધીમાં, કોઈ સ્થિતિ (married) નો સમયગાળો પૂર્ણ થશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have been' વપરાય છે."
    },
    {
      "question": "The police are questioning the man who ___ the accident.",
      "options": [
        "saw",
        "was seeing",
        "has seen",
        "sees"
      ],
      "answer": "saw",
      "explanation": "અકસ્માત જોવાની ક્રિયા ભૂતકાળમાં પૂરી થઈ ગઈ છે. તે વ્યક્તિની પોલીસ પૂછપરછ કરી રહી છે. અહીં ભૂતકાળની ચોક્કસ ઘટનાનો ઉલ્લેખ છે, તેથી સાદો ભૂતકાળ 'saw' વપરાય છે."
    },
    {
      "question": "While I was walking in the park, I ___ an old friend.",
      "options": [
        "meet",
        "met",
        "was meeting",
        "had met"
      ],
      "answer": "met",
      "explanation": "જ્યારે પાર્કમાં ચાલવાની ક્રિયા (ચાલુ ભૂતકાળ) ચાલુ હતી, ત્યારે મિત્રને મળવાની ક્રિયા (ટૂંકી ક્રિયા) થઈ. આ માટે સાદો ભૂતકાળ 'met' વપરાય છે."
    },
    {
      "question": "She's crying because she ___ her favourite toy.",
      "options": [
        "lost",
        "has lost",
        "is losing",
        "had lost"
      ],
      "answer": "has lost",
      "explanation": "તેણી રડી રહી છે (વર્તમાન સ્થિતિ). તેનું કારણ એ છે કે તેણે તેનું રમકડું ખોઈ નાખ્યું છે. ભૂતકાળની ક્રિયાની વર્તમાન અસર દર્શાવવા પૂર્ણ વર્તમાનકાળ 'has lost' વપરાય છે."
    },
    {
      "question": "The movie ___ at 7 PM tonight.",
      "options": [
        "starts",
        "is starting",
        "will start",
        "started"
      ],
      "answer": "starts",
      "explanation": "આ એક નિયત સમયપત્રક (schedule) છે. ભવિષ્યની આવી નિયત ઘટનાઓ માટે સાદો વર્તમાનકાળ 'starts' વાપરી શકાય છે."
    }
  ],
  "test-22": [
    {
      "question": "I ___ a new phone last week.",
      "options": [
        "buy",
        "bought",
        "have bought",
        "am buying"
      ],
      "answer": "bought",
      "explanation": "વાક્યમાં 'last week' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે. તેથી, સાદા ભૂતકાળનું રૂપ 'bought' વપરાય છે."
    },
    {
      "question": "The children ___ loudly in the next room. I can't concentrate.",
      "options": [
        "play",
        "are playing",
        "played",
        "have played"
      ],
      "answer": "are playing",
      "explanation": "'I can't concentrate' સૂચવે છે કે રમવાની ક્રિયા અત્યારે જ, બોલતી વખતે ચાલુ છે. તેથી, ચાલુ વર્તમાનકાળ 'are playing' વપરાય છે."
    },
    {
      "question": "The train ___ already left by the time we reached the station.",
      "options": [
        "has",
        "was",
        "had",
        "is"
      ],
      "answer": "had",
      "explanation": "અમે સ્ટેશન પહોંચ્યા (ભૂતકાળ) તે પહેલાં જ ટ્રેન જતી રહી હતી. ભૂતકાળમાં બનેલી બે ક્રિયાઓમાંથી જે ક્રિયા પહેલા બની હોય તેના માટે પૂર્ણ ભૂતકાળ 'had left' વપરાય છે."
    },
    {
      "question": "We ___ this problem for hours, but we still haven't found a solution.",
      "options": [
        "discuss",
        "are discussing",
        "have been discussing",
        "discussed"
      ],
      "answer": "have been discussing",
      "explanation": "'for hours' અને 'still haven't found' સૂચવે છે કે ચર્ચા કરવાની ક્રિયા ભૂતકાળમાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been discussing' વપરાય છે."
    },
    {
      "question": "The sun ___ in the west.",
      "options": [
        "set",
        "sets",
        "is setting",
        "has set"
      ],
      "answer": "sets",
      "explanation": "સૂર્યનું પશ્ચિમમાં આથમવું એ સનાતન સત્ય છે. આવી કુદરતી ઘટનાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The sun' ત્રીજો પુરુષ એકવચન હોવાથી 'sets' આવે."
    },
    {
      "question": "This time tomorrow, we ___ our results.",
      "options": [
        "will get",
        "will be getting",
        "will have gotten",
        "get"
      ],
      "answer": "will be getting",
      "explanation": "'This time tomorrow' ભવિષ્યના કોઈ ચોક્કસ સમયે કોઈ ક્રિયા ચાલુ હશે તેવું દર્શાવે છે. આ માટે ચાલુ ભવિષ્યકાળ 'will be getting' વપરાય છે."
    },
    {
      "question": "I ___ to the gym three times this week.",
      "options": [
        "went",
        "have been",
        "am going",
        "go"
      ],
      "answer": "have been",
      "explanation": "'this week' (અને અઠવાડિયું હજુ પૂરું નથી થયું) સૂચવે છે કે ક્રિયા વર્તમાન સમયગાળામાં થઈ છે. આ માટે પૂર્ણ વર્તમાનકાળ 'have been' વપરાય છે. 'have gone' પણ સાચું છે."
    },
    {
      "question": "He ___ the window while he was cleaning it.",
      "options": [
        "broke",
        "was breaking",
        "had broken",
        "breaks"
      ],
      "answer": "broke",
      "explanation": "જ્યારે તે બારી સાફ કરી રહ્યો હતો (ચાલુ ભૂતકાળ), ત્યારે તેણે બારી તોડી (ટૂંકી ક્રિયા). ચાલુ ક્રિયાની વચ્ચે બનેલી ટૂંકી ક્રિયા માટે સાદો ભૂતકાળ વપરાય છે."
    },
    {
      "question": "The guests will arrive soon. I ___ dinner.",
      "options": [
        "will prepare",
        "am preparing",
        "prepare",
        "am going to prepare"
      ],
      "answer": "am going to prepare",
      "explanation": "મહેમાનો આવવાના છે (પુરાવો/સંકેત), તેથી હું જમવાનું બનાવવાનો છું (ઇરાદો). ભવિષ્યનો ઇરાદો દર્શાવવા માટે 'am going to prepare' વપરાય છે."
    },
    {
      "question": "She said she ___ tired.",
      "options": [
        "is",
        "was",
        "has been",
        "had been"
      ],
      "answer": "was",
      "explanation": "આ Reported Speech નું વાક્ય છે. Reporting verb 'said' ભૂતકાળમાં છે, તેથી Direct Speech નું 'is' ભૂતકાળ 'was' માં ફેરવાઈ જાય છે."
    }
  ],
  "test-23": [
    {
      "question": "How often ___ you visit your parents?",
      "options": [
        "do",
        "are",
        "have",
        "did"
      ],
      "answer": "do",
      "explanation": "આ પ્રશ્ન નિયમિત ક્રિયા ('How often') વિશે છે. સાદા વર્તમાનકાળના પ્રશ્નમાં 'you' સાથે સહાયકારક ક્રિયાપદ 'do' વપરાય છે."
    },
    {
      "question": "They ___ for Paris last night.",
      "options": [
        "leave",
        "left",
        "are leaving",
        "have left"
      ],
      "answer": "left",
      "explanation": "વાક્યમાં 'last night' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે. તેથી, સાદા ભૂતકાળનું રૂપ 'left' વપરાય છે."
    },
    {
      "question": "I'm afraid I ___ be able to come to the party.",
      "options": [
        "will not",
        "am not",
        "do not",
        "have not"
      ],
      "answer": "will not",
      "explanation": "આ વાક્ય ભવિષ્યમાં પાર્ટીમાં ન આવી શકવાની સંભાવના દર્શાવે છે. ભવિષ્યકાળના નકારાત્મક વાક્ય માટે 'will not' (won't) વપરાય છે."
    },
    {
      "question": "He ___ for hours, that's why he looks so tired.",
      "options": [
        "drove",
        "was driving",
        "has been driving",
        "drives"
      ],
      "answer": "has been driving",
      "explanation": "તે થાકેલો દેખાય છે (વર્તમાન અસર). તેનું કારણ એ છે કે તે કલાકોથી ડ્રાઇવિંગ કરી રહ્યો છે. ભૂતકાળથી શરૂ થયેલી અને વર્તમાન સુધી ચાલેલી ક્રિયા માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been driving' વપરાય છે."
    },
    {
      "question": "The house was dirty because they ___ it for weeks.",
      "options": [
        "didn't clean",
        "weren't cleaning",
        "hadn't cleaned",
        "haven't cleaned"
      ],
      "answer": "hadn't cleaned",
      "explanation": "ઘર ગંદુ હતું (ભૂતકાળ). તેનું કારણ એ હતું કે તેમણે અઠવાડિયાઓથી તેને સાફ કર્યું ન હતું. ભૂતકાળની સ્થિતિ પહેલાંની ક્રિયા (કે અક્રિયા) માટે પૂર્ણ ભૂતકાળ 'hadn't cleaned' વપરાય છે."
    },
    {
      "question": "Hurry up! The film ___ in ten minutes.",
      "options": [
        "starts",
        "is starting",
        "will start",
        "started"
      ],
      "answer": "starts",
      "explanation": "આ એક નિયત સમયપત્રક (schedule) છે. ભવિષ્યની આવી નિયત ઘટનાઓ માટે સાદો વર્તમાનકાળ 'starts' વાપરી શકાય છે."
    },
    {
      "question": "Where were you? I ___ for you everywhere.",
      "options": [
        "looked",
        "was looking",
        "have been looking",
        "am looking"
      ],
      "answer": "have been looking",
      "explanation": "આ પ્રશ્ન સૂચવે છે કે શોધવાની ક્રિયા હમણાં સુધી ચાલી રહી હતી અને તેની અસર વર્તમાનમાં છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been looking' વપરાય છે."
    },
    {
      "question": "The students ___ when the teacher called their names.",
      "options": [
        "were talking",
        "talked",
        "had talked",
        "talk"
      ],
      "answer": "were talking",
      "explanation": "જ્યારે શિક્ષકે નામ બોલાવ્યા (સાદો ભૂતકાળ), તે સમયે વિદ્યાર્થીઓ વાતો કરી રહ્યા હતા (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'were talking' વપરાય છે."
    },
    {
      "question": "This is the most delicious cake I ___.",
      "options": [
        "ever tasted",
        "have ever tasted",
        "am ever tasting",
        "had ever tasted"
      ],
      "answer": "have ever tasted",
      "explanation": "Superlative degree (the most delicious) પછી જીવનના અનુભવને દર્શાવવા માટે પૂર્ણ વર્તમાનકાળ 'have ever tasted' નો ઉપયોગ થાય છે."
    },
    {
      "question": "By the time she arrives, the party ___.",
      "options": [
        "will end",
        "will be ending",
        "will have ended",
        "ends"
      ],
      "answer": "will have ended",
      "explanation": "'By the time' વાળું વાક્ય ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. તે પહોંચશે તે પહેલાં જ પાર્ટી પૂરી થઈ ગઈ હશે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have ended' વપરાય છે."
    }
  ],
  "test-24": [
    {
      "question": "He ___ his job and is now looking for a new one.",
      "options": [
        "lost",
        "has lost",
        "had lost",
        "loses"
      ],
      "answer": "has lost",
      "explanation": "નોકરી ગુમાવવાની ક્રિયા ભૂતકાળમાં થઈ છે, પરંતુ તેની અસર ('is now looking for a new one') વર્તમાનમાં છે. આ માટે પૂર્ણ વર્તમાનકાળ 'has lost' વપરાય છે."
    },
    {
      "question": "The Earth ___ on its axis.",
      "options": [
        "rotates",
        "is rotating",
        "rotated",
        "has rotated"
      ],
      "answer": "rotates",
      "explanation": "પૃથ્વીનું પોતાની ધરી પર ફરવું એ એક વૈજ્ઞાનિક હકીકત અને સનાતન સત્ય છે. આવી ક્રિયાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The Earth' ત્રીજો પુરુષ એકવચન હોવાથી 'rotates' આવે."
    },
    {
      "question": "I ___ a shower when the fire alarm went off.",
      "options": [
        "took",
        "was taking",
        "had taken",
        "take"
      ],
      "answer": "was taking",
      "explanation": "જ્યારે ફાયર એલાર્મ વાગ્યો (સાદો ભૂતકાળ), તે સમયે હું સ્નાન કરી રહ્યો હતો (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was taking' વપરાય છે."
    },
    {
      "question": "By 2050, technology ___ even more.",
      "options": [
        "will advance",
        "will be advancing",
        "will have advanced",
        "advances"
      ],
      "answer": "will have advanced",
      "explanation": "'By 2050' ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have advanced' વપરાય છે."
    },
    {
      "question": "She told us she ___ to the museum the day before.",
      "options": [
        "went",
        "has gone",
        "had gone",
        "was going"
      ],
      "answer": "had gone",
      "explanation": "આ Reported Speech નું વાક્ય છે. Reporting verb 'told' ભૂતકાળમાં છે, અને 'the day before' (yesterday) પણ ભૂતકાળ સૂચવે છે. Direct speech માં 'went' (સાદો ભૂતકાળ) 'had gone' (પૂર્ણ ભૂતકાળ) માં ફેરવાય છે."
    },
    {
      "question": "My brother ___ for London tomorrow.",
      "options": [
        "leaves",
        "is leaving",
        "left",
        "will have left"
      ],
      "answer": "is leaving",
      "explanation": "નજીકના ભવિષ્યની પૂર્વ-આયોજિત ક્રિયા (personal plan) દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'is leaving' નો ઉપયોગ કરી શકાય છે."
    },
    {
      "question": "It ___ all day. I wish it would stop.",
      "options": [
        "rains",
        "is raining",
        "has been raining",
        "rained"
      ],
      "answer": "has been raining",
      "explanation": "'all day' સૂચવે છે કે વરસાદ પડવાની ક્રિયા ભૂતકાળમાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been raining' વપરાય છે."
    },
    {
      "question": "What time ___ the bank open?",
      "options": [
        "do",
        "does",
        "is",
        "did"
      ],
      "answer": "does",
      "explanation": "આ પ્રશ્ન બેંકના નિયમિત ખુલવાના સમય વિશે છે. સાદા વર્તમાનકાળના પ્રશ્નમાં કર્તા 'the bank' (ત્રીજો પુરુષ એકવચન) સાથે સહાયક ક્રિયાપદ 'does' વપરાય છે."
    },
    {
      "question": "We ___ at the hotel when you called.",
      "options": [
        "arrived",
        "were arriving",
        "had arrived",
        "have arrived"
      ],
      "answer": "were arriving",
      "explanation": "તમે ફોન કર્યો (સાદો ભૂતકાળ) તે જ સમયે અમારી હોટેલ પહોંચવાની ક્રિયા ચાલુ હતી. ભૂતકાળમાં ચાલુ ક્રિયા માટે ચાલુ ભૂતકાળ 'were arriving' વપરાય છે."
    },
    {
      "question": "I ___ this movie. Let's watch something else.",
      "options": [
        "saw",
        "have seen",
        "see",
        "am seeing"
      ],
      "answer": "have seen",
      "explanation": "ફિલ્મ જોવાની ક્રિયા ભૂતકાળમાં થઈ ચૂકી છે અને તેની અસર વર્તમાનમાં છે ('Let's watch something else'). ભૂતકાળના અનુભવ માટે પૂર્ણ વર્તમાનકાળ 'have seen' વપરાય છે."
    }
  ],
  "test-25": [
    {
      "question": "The artist ___ some amazing paintings recently.",
      "options": [
        "painted",
        "has painted",
        "is painting",
        "paints"
      ],
      "answer": "has painted",
      "explanation": "'recently' શબ્દ સૂચવે છે કે ક્રિયા તાજેતરના ભૂતકાળમાં થઈ છે અને તેની અસર વર્તમાનમાં છે. આ માટે પૂર્ણ વર્તમાનકાળ 'has painted' વપરાય છે."
    },
    {
      "question": "The plane ___ to Paris at 7 AM every Monday.",
      "options": [
        "flies",
        "is flying",
        "flew",
        "will fly"
      ],
      "answer": "flies",
      "explanation": "'every Monday' શબ્દ નિયમિત સમયપત્રક દર્શાવે છે. આવી ક્રિયાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The plane' ત્રીજો પુરુષ એકવચન હોવાથી 'flies' આવે."
    },
    {
      "question": "She was cooking dinner while her husband ___ the news.",
      "options": [
        "watched",
        "was watching",
        "had watched",
        "watches"
      ],
      "answer": "was watching",
      "explanation": "આ વાક્યમાં ભૂતકાળમાં બે ક્રિયાઓ (રસોઈ કરવી અને સમાચાર જોવા) એકસાથે ચાલુ હતી. તેથી, બંને માટે ચાલુ ભૂતકાળ 'was watching' વપરાય છે."
    },
    {
      "question": "I promise I ___ late again.",
      "options": [
        "am not",
        "will not be",
        "do not be",
        "was not"
      ],
      "answer": "will not be",
      "explanation": "'I promise' ભવિષ્ય માટેનું વચન દર્શાવે છે. ભવિષ્યકાળના નકારાત્મક વાક્ય માટે 'will not be' (won't be) વપરાય છે."
    },
    {
      "question": "They ___ their house before the storm hit.",
      "options": [
        "left",
        "were leaving",
        "had left",
        "have left"
      ],
      "answer": "had left",
      "explanation": "વાવાઝોડું આવ્યું (ભૂતકાળ) તે પહેલાં જ તેઓ ઘર છોડી ચૂક્યા હતા. ભૂતકાળમાં બે ક્રિયાઓમાંથી જે ક્રિયા પહેલા બની હોય, તેના માટે પૂર્ણ ભૂતકાળ 'had left' વપરાય છે."
    },
    {
      "question": "We ___ this TV for five years now.",
      "options": [
        "have",
        "are having",
        "have had",
        "had"
      ],
      "answer": "have had",
      "explanation": "'for five years now' સૂચવે છે કે માલિકીનો સમયગાળો પાંચ વર્ષનો છે, જે ભૂતકાળથી વર્તમાન સુધીનો છે. માલિકી દર્શાવવા પૂર્ણ વર્તમાનકાળ 'have had' વપરાય છે."
    },
    {
      "question": "The students ___ an exam this time tomorrow.",
      "options": [
        "will take",
        "will be taking",
        "will have taken",
        "take"
      ],
      "answer": "will be taking",
      "explanation": "'This time tomorrow' ભવિષ્યના કોઈ ચોક્કસ સમયે કોઈ ક્રિયા ચાલુ હશે તેવું દર્શાવે છે. આ માટે ચાલુ ભવિષ્યકાળ 'will be taking' નો ઉપયોગ થાય છે."
    },
    {
      "question": "What ___ you talking about when I came in?",
      "options": [
        "are",
        "were",
        "do",
        "did"
      ],
      "answer": "were",
      "explanation": "જ્યારે હું અંદર આવ્યો (સાદો ભૂતકાળ) ત્યારે તમે શું વાત કરી રહ્યા હતા (ચાલુ ક્રિયા)? આ પ્રશ્ન ભૂતકાળમાં ચાલુ ક્રિયા વિશે છે, તેથી 'were' વપરાય છે."
    },
    {
      "question": "He ___ to school every day when he was young.",
      "options": [
        "walks",
        "walked",
        "was walking",
        "had walked"
      ],
      "answer": "walked",
      "explanation": "'when he was young' ભૂતકાળની આદત દર્શાવે છે. ભૂતકાળની આદતો માટે સાદો ભૂતકાળ 'walked' વપરાય છે. 'used to walk' પણ વાપરી શકાય."
    },
    {
      "question": "Look at the sky! It ___ to be a beautiful day.",
      "options": [
        "will",
        "is going",
        "is going to",
        "goes"
      ],
      "answer": "is going to",
      "explanation": "આકાશને જોઈને (વર્તમાન પુરાવો) ભવિષ્યની આગાહી કરવામાં આવી રહી છે. આવા સંજોગોમાં 'be going to' નો ઉપયોગ થાય છે. તેથી 'is going to be' સાચો જવાબ છે."
    }
  ],
  "test-26": [
    {
      "question": "She ___ a letter to her friend every month.",
      "options": [
        "write",
        "writes",
        "is writing",
        "wrote"
      ],
      "answer": "writes",
      "explanation": "'every month' શબ્દ નિયમિતપણે થતી ક્રિયા દર્શાવે છે. તેથી, સાદા વર્તમાનકાળનો ઉપયોગ થાય છે. કર્તા 'She' ત્રીજો પુરુષ એકવચન હોવાથી 'writes' આવે."
    },
    {
      "question": "I ___ my keys. Can you help me look for them?",
      "options": [
        "lost",
        "have lost",
        "had lost",
        "am losing"
      ],
      "answer": "have lost",
      "explanation": "ચાવી ખોવાઈ ગઈ છે (ભૂતકાળની ક્રિયા) અને તેની અસર વર્તમાનમાં છે (હું તેને શોધી રહ્યો છું). આ માટે પૂર્ણ વર્તમાનકાળ 'have lost' વપરાય છે."
    },
    {
      "question": "He ___ dinner when I called him.",
      "options": [
        "cooked",
        "was cooking",
        "had cooked",
        "cooks"
      ],
      "answer": "was cooking",
      "explanation": "જ્યારે મેં તેને ફોન કર્યો (સાદો ભૂતકાળ), તે સમયે તે જમવાનું બનાવી રહ્યો હતો (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was cooking' વપરાય છે."
    },
    {
      "question": "By next year, I ___ my degree.",
      "options": [
        "will get",
        "will be getting",
        "will have got",
        "get"
      ],
      "answer": "will have got",
      "explanation": "'By next year' ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have got' (અથવા will have gotten) વપરાય છે."
    },
    {
      "question": "They ___ in that house for a long time before they moved.",
      "options": [
        "lived",
        "were living",
        "had lived",
        "have lived"
      ],
      "answer": "had lived",
      "explanation": "તેઓ બીજે રહેવા ગયા (ભૂતકાળ) તે પહેલાં, તેઓ તે ઘરમાં લાંબા સમય સુધી રહ્યા હતા. ભૂતકાળની મુખ્ય ક્રિયા પહેલાં થયેલી ક્રિયા માટે પૂર્ણ ભૂતકાળ 'had lived' વપરાય છે."
    },
    {
      "question": "The train ___ late today.",
      "options": [
        "runs",
        "is running",
        "ran",
        "has run"
      ],
      "answer": "is running",
      "explanation": "'today' શબ્દ સૂચવે છે કે આ એક કામચલાઉ પરિસ્થિતિ છે, નિયમિત નથી. વર્તમાનની કામચલાઉ પરિસ્થિતિ દર્શાવવા ચાલુ વર્તમાનકાળ 'is running' વપરાય છે."
    },
    {
      "question": "The children ___ their breakfast at 7 AM yesterday.",
      "options": [
        "ate",
        "were eating",
        "had eaten",
        "eat"
      ],
      "answer": "were eating",
      "explanation": "વાક્યમાં ભૂતકાળનો ચોક્કસ સમય ('at 7 AM yesterday') આપેલો છે. તે સમયે નાસ્તો કરવાની ક્રિયા ચાલુ હતી, તેથી ચાલુ ભૂતકાળ 'were eating' વપરાય છે."
    },
    {
      "question": "I ___ never ___ such a beautiful sunset before.",
      "options": [
        "have, seen",
        "did, see",
        "was, seeing",
        "do, see"
      ],
      "answer": "have, seen",
      "explanation": "'never before' જેવા શબ્દો જીવનના અનુભવ વિશે વાત કરે છે. આવા અનુભવો દર્શાવવા માટે પૂર્ણ વર્તમાનકાળ 'have seen' વપરાય છે."
    },
    {
      "question": "This time next week, we ___ our exam results.",
      "options": [
        "will have",
        "will be having",
        "will have had",
        "have"
      ],
      "answer": "will be having",
      "explanation": "'This time next week' ભવિષ્યના કોઈ ચોક્કસ સમયે કોઈ ક્રિયા ચાલુ હશે તેવું દર્શાવે છે. પરિણામ મેળવવાની ક્રિયા તે સમયે ચાલુ હશે, તેથી 'will be having' વપરાય છે. 'will be getting' પણ સાચું છે."
    },
    {
      "question": "He ___ in the garden when it started to pour.",
      "options": [
        "worked",
        "was working",
        "had worked",
        "works"
      ],
      "answer": "was working",
      "explanation": "જ્યારે ભારે વરસાદ શરૂ થયો (સાદો ભૂતકાળ), તે સમયે તે બગીચામાં કામ કરી રહ્યો હતો (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was working' વપરાય છે."
    }
  ],
  "test-27": [
    {
      "question": "I ___ the news every evening.",
      "options": [
        "watch",
        "am watching",
        "watched",
        "have watched"
      ],
      "answer": "watch",
      "explanation": "'every evening' શબ્દ નિયમિતપણે થતી ક્રિયા કે આદત દર્શાવે છે. આ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'I' સાથે ક્રિયાપદનું મૂળ રૂપ 'watch' આવે છે."
    },
    {
      "question": "The company ___ its new product next month.",
      "options": [
        "launches",
        "is launching",
        "launched",
        "will have launched"
      ],
      "answer": "is launching",
      "explanation": "નજીકના ભવિષ્યની પૂર્વ-આયોજિત વ્યાપારી ઘટના (business plan) દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'is launching' નો ઉપયોગ કરી શકાય છે. 'will launch' પણ સાચું છે."
    },
    {
      "question": "She ___ for this exam for months.",
      "options": [
        "studies",
        "is studying",
        "has been studying",
        "studied"
      ],
      "answer": "has been studying",
      "explanation": "'for months' સૂચવે છે કે અભ્યાસ કરવાની ક્રિયા મહિનાઓ પહેલાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been studying' વપરાય છે."
    },
    {
      "question": "The play ___ by the time we got there.",
      "options": [
        "ended",
        "was ending",
        "had ended",
        "has ended"
      ],
      "answer": "had ended",
      "explanation": "અમે ત્યાં પહોંચ્યા (ભૂતકાળ) તે પહેલાં જ નાટક પૂરું થઈ ગયું હતું. ભૂતકાળમાં બે ક્રિયાઓમાંથી જે ક્રિયા પહેલા બની હોય, તેના માટે પૂર્ણ ભૂતકાળ 'had ended' વપરાય છે."
    },
    {
      "question": "He ___ asleep while he was watching the movie.",
      "options": [
        "falls",
        "fell",
        "was falling",
        "has fallen"
      ],
      "answer": "fell",
      "explanation": "જ્યારે તે ફિલ્મ જોઈ રહ્યો હતો (ચાલુ ભૂતકાળ), ત્યારે તે ઊંઘી ગયો (ટૂંકી ક્રિયા). ચાલુ ક્રિયાની વચ્ચે બનેલી ટૂંકી ક્રિયા માટે સાદો ભૂતકાળ 'fell' વપરાય છે."
    },
    {
      "question": "My father ___ for his office just now.",
      "options": [
        "left",
        "has left",
        "is leaving",
        "leaves"
      ],
      "answer": "has left",
      "explanation": "'just now' શબ્દ સૂચવે છે કે ક્રિયા હમણાં જ પૂરી થઈ છે. તાજેતરમાં પૂરી થયેલી ક્રિયા માટે પૂર્ણ વર્તમાનકાળ 'has left' વપરાય છે. 'left' પણ અમુક સંદર્ભમાં સ્વીકાર્ય છે."
    },
    {
      "question": "By the end of this year, I ___ five countries.",
      "options": [
        "will visit",
        "will be visiting",
        "will have visited",
        "visit"
      ],
      "answer": "will have visited",
      "explanation": "'By the end of this year' ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. આ માટે પૂર્ણ ભવિષ્યકાળ 'will have visited' વપરાય છે."
    },
    {
      "question": "The dog ___ all night. I couldn't sleep.",
      "options": [
        "barked",
        "was barking",
        "had barked",
        "barks"
      ],
      "answer": "was barking",
      "explanation": "'all night' સૂચવે છે કે ભૂતકાળમાં આખી રાત દરમિયાન ભસવાની ક્રિયા ચાલુ હતી. હું સૂઈ ન શક્યો (પરિણામ). લાંબા સમય સુધી ચાલેલી ભૂતકાળની ક્રિયા માટે ચાલુ ભૂતકાળ 'was barking' વપરાય છે."
    },
    {
      "question": "Does your brother ___ how to swim?",
      "options": [
        "know",
        "knows",
        "knowing",
        "knew"
      ],
      "answer": "know",
      "explanation": "સાદા વર્તમાનકાળના પ્રશ્નમાં સહાયક ક્રિયાપદ 'Does' પછી હંમેશા ક્રિયાપદનું મૂળ રૂપ 'know' આવે છે."
    },
    {
      "question": "I ___ to inform you that your application has been rejected.",
      "options": [
        "regret",
        "am regretting",
        "regretted",
        "have regretted"
      ],
      "answer": "regret",
      "explanation": "આ એક ઔપચારિક (formal) અભિવ્યક્તિ છે. 'regret' જેવા ક્રિયાપદો જે લાગણી કે માનસિક સ્થિતિ દર્શાવે છે, તે સામાન્ય રીતે સાદા વર્તમાનકાળમાં વપરાય છે."
    }
  ],
  "test-28": [
    {
      "question": "They ___ a new branch in this city next year.",
      "options": [
        "open",
        "are opening",
        "opened",
        "will have opened"
      ],
      "answer": "are opening",
      "explanation": "નજીકના ભવિષ્યની પૂર્વ-આયોજિત વ્યાપારી ઘટના (business plan) દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'are opening' નો ઉપયોગ કરી શકાય છે. 'will open' અથવા 'are going to open' પણ સાચું છે."
    },
    {
      "question": "The patient ___ better since the new treatment started.",
      "options": [
        "feels",
        "is feeling",
        "has been feeling",
        "felt"
      ],
      "answer": "has been feeling",
      "explanation": "'since' સૂચવે છે કે સારું અનુભવવાની ક્રિયા નવી સારવાર શરૂ થઈ ત્યારથી ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been feeling' વપરાય છે."
    },
    {
      "question": "He ___ his homework when his mother came home.",
      "options": [
        "did",
        "was doing",
        "had done",
        "has done"
      ],
      "answer": "had done",
      "explanation": "જ્યારે તેની માતા ઘરે આવી (ભૂતકાળ), તે પહેલાં જ તેણે તેનું હોમવર્ક કરી લીધું હતું. ભૂતકાળમાં બે ક્રિયાઓમાંથી જે ક્રિયા પહેલા પૂરી થઈ ગઈ હોય, તેના માટે પૂર્ણ ભૂતકાળ 'had done' વપરાય છે."
    },
    {
      "question": "I ___ a terrible movie last night.",
      "options": [
        "saw",
        "have seen",
        "was seeing",
        "see"
      ],
      "answer": "saw",
      "explanation": "વાક્યમાં 'last night' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે, તેથી સાદા ભૂતકાળનું રૂપ 'saw' વપરાય છે."
    },
    {
      "question": "Listen! I think someone ___ our names.",
      "options": [
        "calls",
        "is calling",
        "called",
        "has called"
      ],
      "answer": "is calling",
      "explanation": "'Listen!' જેવો ઉદ્ગાર શબ્દ સૂચવે છે કે ક્રિયા બોલતી વખતે જ બની રહી છે. તેથી, ચાલુ વર્તમાનકાળ 'is calling' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The package I was expecting ___ yet.",
      "options": [
        "didn't arrive",
        "hasn't arrived",
        "isn't arriving",
        "hadn't arrived"
      ],
      "answer": "hasn't arrived",
      "explanation": "'yet' શબ્દનો ઉપયોગ પૂર્ણ વર્તમાનકાળના નકારાત્મક વાક્યોમાં થાય છે, જે દર્શાવે છે કે ક્રિયા હજુ સુધી થઈ નથી. તેથી, 'hasn't arrived' સાચો જવાબ છે."
    },
    {
      "question": "By the time we finish our dinner, the movie ___.",
      "options": [
        "will start",
        "will be starting",
        "will have started",
        "starts"
      ],
      "answer": "will have started",
      "explanation": "'By the time' વાળું વાક્ય ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. અમે જમી રહીશું ત્યાં સુધીમાં ફિલ્મ શરૂ થઈ ગઈ હશે. આ માટે પૂર્ણ ભવિષ્યકાળ વપરાય છે."
    },
    {
      "question": "She ___ tennis every Sunday.",
      "options": [
        "play",
        "plays",
        "is playing",
        "played"
      ],
      "answer": "plays",
      "explanation": "'every Sunday' શબ્દ નિયમિતપણે થતી ક્રિયા કે આદત દર્શાવે છે. આ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'She' ત્રીજો પુરુષ એકવચન હોવાથી 'plays' આવે."
    },
    {
      "question": "The road was blocked because a tree ___ down.",
      "options": [
        "fell",
        "was falling",
        "had fallen",
        "has fallen"
      ],
      "answer": "had fallen",
      "explanation": "રસ્તો બ્લોક હતો (ભૂતકાળ). તેનું કારણ એ હતું કે એક ઝાડ પડી ગયું હતું. ભૂતકાળની સ્થિતિ પહેલાં બનેલી ક્રિયા માટે પૂર્ણ ભૂતકાળ 'had fallen' વપરાય છે."
    },
    {
      "question": "If I ___ you, I would apologize.",
      "options": [
        "am",
        "was",
        "were",
        "had been"
      ],
      "answer": "were",
      "explanation": "આ શરતી વાક્ય (Type 2) છે, જે કાલ્પનિક સલાહ આપે છે. 'If I were you...' એ એક સ્ટાન્ડર્ડ રચના છે જે વર્તમાનની અવાસ્તવિક સ્થિતિ દર્શાવે છે. તેથી 'were' વપરાય છે."
    }
  ],
  "test-29": [
    {
      "question": "He ___ for this interview for a week.",
      "options": [
        "prepares",
        "is preparing",
        "has been preparing",
        "was preparing"
      ],
      "answer": "has been preparing",
      "explanation": "'for a week' સૂચવે છે કે તૈયારી કરવાની ક્રિયા એક અઠવાડિયા પહેલાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been preparing' વપરાય છે."
    },
    {
      "question": "The fire ___ through the building very quickly last night.",
      "options": [
        "spreads",
        "spread",
        "was spreading",
        "has spread"
      ],
      "answer": "spread",
      "explanation": "વાક્યમાં 'last night' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે. 'spread' ક્રિયાપદના ત્રણેય રૂપ સરખા હોય છે, તેથી સાદા ભૂતકાળનું રૂપ 'spread' છે."
    },
    {
      "question": "The president of the company ___ a speech tomorrow.",
      "options": [
        "gives",
        "is giving",
        "gave",
        "will have given"
      ],
      "answer": "is giving",
      "explanation": "નજીકના ભવિષ્યની પૂર્વ-આયોજિત ઔપચારિક ઘટના (formal plan) દર્શાવવા માટે ચાલુ વર્તમાનકાળ 'is giving' નો ઉપયોગ કરી શકાય છે."
    },
    {
      "question": "She ___ a great deal of experience before she applied for this job.",
      "options": [
        "gained",
        "was gaining",
        "had gained",
        "has gained"
      ],
      "answer": "had gained",
      "explanation": "નોકરી માટે અરજી કરી (ભૂતકાળ) તે પહેલાં, તેણે ઘણો અનુભવ મેળવી લીધો હતો. ભૂતકાળની મુખ્ય ક્રિયા પહેલાં થયેલી ક્રિયા માટે પૂર્ણ ભૂતકાળ 'had gained' વપરાય છે."
    },
    {
      "question": "Where ___ you usually go on holiday?",
      "options": [
        "do",
        "are",
        "have",
        "did"
      ],
      "answer": "do",
      "explanation": "આ પ્રશ્ન નિયમિત ક્રિયા ('usually') વિશે છે. સાદા વર્તમાનકાળના પ્રશ્નમાં 'you' સાથે સહાયક ક્રિયાપદ 'do' વપરાય છે."
    },
    {
      "question": "I ___ my phone! I must have left it on the bus.",
      "options": [
        "lost",
        "have lost",
        "had lost",
        "am losing"
      ],
      "answer": "have lost",
      "explanation": "ફોન ખોવાઈ ગયો છે (ભૂતકાળની ક્રિયા) અને તેની અસર વર્તમાનમાં છે (તે મારી પાસે નથી). આ માટે પૂર્ણ વર્તમાનકાળ 'have lost' વપરાય છે."
    },
    {
      "question": "By the time he graduates, he ___ in this city for five years.",
      "options": [
        "will live",
        "will be living",
        "will have been living",
        "lives"
      ],
      "answer": "will have been living",
      "explanation": "'By the time he graduates' ભવિષ્યના ચોક્કસ સમય સુધીમાં, કોઈ ક્રિયા અમુક સમયથી ચાલુ હશે તેવું દર્શાવે છે. આ માટે ચાલુ પૂર્ણ ભવિષ્યકાળ 'will have been living' વપરાય છે."
    },
    {
      "question": "The children ___ a game when I saw them.",
      "options": [
        "played",
        "were playing",
        "had played",
        "play"
      ],
      "answer": "were playing",
      "explanation": "જ્યારે મેં તેમને જોયા (સાદો ભૂતકાળ), તે સમયે તેઓ રમત રમી રહ્યા હતા (ચાલુ ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'were playing' વપરાય છે."
    },
    {
      "question": "The museum ___ at 10 AM every day except Monday.",
      "options": [
        "open",
        "opens",
        "is opening",
        "opened"
      ],
      "answer": "opens",
      "explanation": "'every day' શબ્દ નિયમિત સમયપત્રક દર્શાવે છે. આવી ક્રિયાઓ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The museum' ત્રીજો પુરુષ એકવચન હોવાથી 'opens' આવે."
    },
    {
      "question": "She ___ to her friend on the phone for an hour now.",
      "options": [
        "talks",
        "is talking",
        "has been talking",
        "was talking"
      ],
      "answer": "has been talking",
      "explanation": "'for an hour now' સૂચવે છે કે વાત કરવાની ક્રિયા એક કલાક પહેલાં શરૂ થઈ અને અત્યારે પણ ચાલુ છે. આ માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'has been talking' વપરાય છે."
    }
  ],
  "test-30": [
    {
      "question": "We ___ to the cinema last night.",
      "options": [
        "go",
        "went",
        "are going",
        "have gone"
      ],
      "answer": "went",
      "explanation": "વાક્યમાં 'last night' શબ્દ સ્પષ્ટપણે ભૂતકાળનો સમય દર્શાવે છે. તેથી, સાદા ભૂતકાળનું રૂપ 'went' વપરાય છે."
    },
    {
      "question": "The chef always ___ the best dishes.",
      "options": [
        "make",
        "makes",
        "is making",
        "made"
      ],
      "answer": "makes",
      "explanation": "'always' શબ્દ નિયમિતપણે થતી ક્રિયા કે આદત દર્શાવે છે. આ માટે સાદો વર્તમાનકાળ વપરાય છે. કર્તા 'The chef' ત્રીજો પુરુષ એકવચન હોવાથી 'makes' આવે."
    },
    {
      "question": "I ___ my report. You can read it now.",
      "options": [
        "finished",
        "have finished",
        "am finishing",
        "had finished"
      ],
      "answer": "have finished",
      "explanation": "રિપોર્ટ પૂરો કરવાની ક્રિયા હમણાં જ પૂરી થઈ છે અને તેની અસર વર્તમાનમાં છે ('You can read it now'). આ માટે પૂર્ણ વર્તમાનકાળ 'have finished' વપરાય છે."
    },
    {
      "question": "They ___ for two hours when their flight was finally announced.",
      "options": [
        "waited",
        "were waiting",
        "had been waiting",
        "have been waiting"
      ],
      "answer": "had been waiting",
      "explanation": "ફ્લાઇટની જાહેરાત થઈ (ભૂતકાળ) તે પહેલાં, તેઓ બે કલાકથી રાહ જોઈ રહ્યા હતા. ભૂતકાળના કોઈ સમય પહેલાંથી ચાલતી ક્રિયા દર્શાવવા ચાલુ પૂર્ણ ભૂતકાળ 'had been waiting' વપરાય છે."
    },
    {
      "question": "The team ___ a new strategy for the next game.",
      "options": [
        "develops",
        "is developing",
        "developed",
        "will have developed"
      ],
      "answer": "is developing",
      "explanation": "આ વાક્ય વર્તમાનમાં ચાલી રહેલી પ્રક્રિયા દર્શાવે છે, જે ભવિષ્યની રમત ('next game') માટે છે. વર્તમાનમાં ચાલુ ક્રિયા માટે ચાલુ વર્તમાનકાળ 'is developing' વપરાય છે."
    },
    {
      "question": "He ___ home by the time his parents return.",
      "options": [
        "will reach",
        "will be reaching",
        "will have reached",
        "reaches"
      ],
      "answer": "will have reached",
      "explanation": "'By the time' વાળું વાક્ય ભવિષ્યના ચોક્કસ સમય સુધીમાં ક્રિયા પૂર્ણ થઈ ગઈ હશે તેવું સૂચવે છે. તેના માતા-પિતા પાછા ફરશે ત્યાં સુધીમાં તે ઘરે પહોંચી ગયો હશે. આ માટે પૂર્ણ ભવિષ્યકાળ વપરાય છે."
    },
    {
      "question": "She hurt her hand while she ___ vegetables.",
      "options": [
        "cut",
        "was cutting",
        "had cut",
        "cuts"
      ],
      "answer": "was cutting",
      "explanation": "જ્યારે તે શાકભાજી કાપી રહી હતી (ચાલુ ભૂતકાળ), ત્યારે તેના હાથમાં ઈજા થઈ (ટૂંકી ક્રિયા). ભૂતકાળમાં ચાલુ રહેલી ક્રિયા માટે ચાલુ ભૂતકાળ 'was cutting' વપરાય છે."
    },
    {
      "question": "This is the most interesting book I ___.",
      "options": [
        "ever read",
        "have ever read",
        "am ever reading",
        "had ever read"
      ],
      "answer": "have ever read",
      "explanation": "Superlative degree (the most interesting) પછી જીવનના અનુભવને દર્શાવવા માટે પૂર્ણ વર્તમાનકાળ 'have ever read' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The party doesn't start until 9 PM. The verb tense is ___.",
      "options": [
        "Simple Present",
        "Present Continuous",
        "Simple Future",
        "Simple Past"
      ],
      "answer": "Simple Present",
      "explanation": "આ વાક્ય ભવિષ્યની નિયત ઘટના (schedule) દર્શાવે છે. 'until' સાથેના ભવિષ્યના સમયપત્રક માટે સાદો વર્તમાનકાળ (Simple Present Tense) વપરાય છે."
    },
    {
      "question": "We ___ television for three hours, and now our eyes are tired.",
      "options": [
        "watched",
        "were watching",
        "have been watching",
        "watch"
      ],
      "answer": "have been watching",
      "explanation": "આંખો થાકી ગઈ છે (વર્તમાન અસર). તેનું કારણ એ છે કે અમે ત્રણ કલાકથી ટીવી જોઈ રહ્યા હતા. ભૂતકાળથી શરૂ થયેલી અને વર્તમાન સુધી ચાલેલી ક્રિયા માટે ચાલુ પૂર્ણ વર્તમાનકાળ 'have been watching' વપરાય છે."
    }
  ]
};
