import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "'Book' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Bookes",
        "Books",
        "Book's",
        "Booken"
      ],
      "answer": "Books",
      "explanation": "મોટા ભાગના સંજ્ઞાઓને ફક્ત અંતમાં 's' ઉમેરીને બહુવચનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Cat' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Cats",
        "Cates",
        "Catz",
        "Catien"
      ],
      "answer": "Cats",
      "explanation": "સામાન્ય નિયમ મુજબ, સંજ્ઞાના અંતમાં 's' ઉમેરવાથી તેનું બહુવચન બને છે."
    },
    {
      "question": "'Dog' નું બહુવચન શું છે?",
      "options": [
        "Dogen",
        "Doges",
        "Dogs",
        "Dog's"
      ],
      "answer": "Dogs",
      "explanation": "આ એક નિયમિત સંજ્ઞા છે, તેથી બહુવચન બનાવવા માટે અંતમાં 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Table' નું સાચું બહુવચન છે?",
      "options": [
        "Tables",
        "Tablen",
        "Tablees",
        "Tabless"
      ],
      "answer": "Tables",
      "explanation": "નિયમિત સંજ્ઞાઓના બહુવચન માટે, સામાન્ય રીતે અંતમાં 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Pen' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Penz",
        "Pens",
        "Penes",
        "Pennes"
      ],
      "answer": "Pens",
      "explanation": "આ એક સામાન્ય સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને બને છે."
    },
    {
      "question": "'Car' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Cars",
        "Cares",
        "Car's",
        "Carz"
      ],
      "answer": "Cars",
      "explanation": "સામાન્ય નિયમ મુજબ, સંજ્ઞાના અંતમાં 's' ઉમેરીને બહુવચન બનાવવામાં આવે છે."
    },
    {
      "question": "'House' નું બહુવચન શું છે?",
      "options": [
        "Housees",
        "Housen",
        "Houses",
        "House's"
      ],
      "answer": "Houses",
      "explanation": "આ એક નિયમિત સંજ્ઞા છે અને તેનું બહુવચન અંતમાં 's' લગાવીને બને છે."
    },
    {
      "question": "'Apple' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Apples",
        "Applees",
        "Applen",
        "Appless"
      ],
      "answer": "Apples",
      "explanation": "નિયમિત સંજ્ઞા હોવાથી, 'Apple' નું બહુવચન 'Apples' થાય છે."
    },
    {
      "question": "'Chair' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Chairs",
        "Chaires",
        "Chairz",
        "Chairen"
      ],
      "answer": "Chairs",
      "explanation": "સામાન્ય સંજ્ઞાઓની જેમ, આ શબ્દના અંતમાં 's' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "'Student' નું બહુવચન શું છે?",
      "options": [
        "Students",
        "Studentes",
        "Studentz",
        "Student's"
      ],
      "answer": "Students",
      "explanation": "આ એક નિયમિત સંજ્ઞા છે, તેથી બહુવચન બનાવવા માટે 's' ઉમેરવામાં આવે છે."
    }
  ],
  "test-2": [
    {
      "question": "'Bus' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Buses",
        "Buss",
        "Bus's",
        "Busen"
      ],
      "answer": "Buses",
      "explanation": "જે સંજ્ઞાઓ 's', 'ss', 'sh', 'ch', 'x', અથવા 'z' માં સમાપ્ત થાય છે, તેમનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "'Box' નું બહુવચન શું છે?",
      "options": [
        "Boxs",
        "Boxes",
        "Boxen",
        "Box's"
      ],
      "answer": "Boxes",
      "explanation": "જે સંજ્ઞા 'x' માં સમાપ્ત થાય છે, તેનું બહુવચન બનાવવા માટે 'es' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Watch' (ઘડિયાળ) નું બહુવચન શું છે?",
      "options": [
        "Watchs",
        "Watch's",
        "Watches",
        "Watchies"
      ],
      "answer": "Watches",
      "explanation": "જે સંજ્ઞા 'ch' માં સમાપ્ત થાય છે, તેનું બહુવચન 'es' ઉમેરીને થાય છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Brush' નું સાચું બહુવચન છે?",
      "options": [
        "Brushs",
        "Brushes",
        "Brushies",
        "Brushen"
      ],
      "answer": "Brushes",
      "explanation": "જે સંજ્ઞા 'sh' માં સમાપ્ત થાય છે, તેનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "'Glass' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Glass",
        "Glasss",
        "Glasses",
        "Glassies"
      ],
      "answer": "Glasses",
      "explanation": "'ss' માં સમાપ્ત થતી સંજ્ઞાઓનું બહુવચન 'es' ઉમેરીને બનાવવામાં આવે છે."
    },
    {
      "question": "'Fox' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Foxes",
        "Foxs",
        "Foxen",
        "Fox's"
      ],
      "answer": "Foxes",
      "explanation": "'x' માં સમાપ્ત થતી સંજ્ઞાઓનું બહુવચન 'es' ઉમેરીને થાય છે."
    },
    {
      "question": "'Church' નું બહુવચન શું છે?",
      "options": [
        "Churchs",
        "Churches",
        "Churchies",
        "Churchen"
      ],
      "answer": "Churches",
      "explanation": "જ્યારે સંજ્ઞા 'ch' માં સમાપ્ત થાય છે, ત્યારે બહુવચન માટે 'es' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Dish' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Dishs",
        "Dishes",
        "Dishies",
        "Dish's"
      ],
      "answer": "Dishes",
      "explanation": "'sh' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "'Kiss' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Kisss",
        "Kisses",
        "Kiss's",
        "Kissies"
      ],
      "answer": "Kisses",
      "explanation": "જે સંજ્ઞાઓ 'ss' માં સમાપ્ત થાય છે, તેનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "'Match' નું બહુવચન શું છે?",
      "options": [
        "Matchs",
        "Matchies",
        "Match's",
        "Matches"
      ],
      "answer": "Matches",
      "explanation": "જ્યારે કોઈ સંજ્ઞા 'ch' માં સમાપ્ત થાય છે, ત્યારે 'es' ઉમેરીને બહુવચન બનાવવામાં આવે છે."
    }
  ],
  "test-3": [
    {
      "question": "'Boy' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Boys",
        "Boies",
        "Boyes",
        "Boyz"
      ],
      "answer": "Boys",
      "explanation": "જો સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં સ્વર (a, e, i, o, u) હોય, તો ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "'Key' નું બહુવચન શું છે?",
      "options": [
        "Keyes",
        "Keies",
        "Keys",
        "Keyz"
      ],
      "answer": "Keys",
      "explanation": "જ્યારે સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં સ્વર (e) હોય, ત્યારે ફક્ત 's' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "'Toy' નું બહુવચન શું છે?",
      "options": [
        "Toys",
        "Toies",
        "Toyes",
        "Toyz"
      ],
      "answer": "Toys",
      "explanation": "'y' પહેલાં સ્વર (o) હોવાથી, બહુવચન બનાવવા માટે ફક્ત 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Day' નું સાચું બહુવચન છે?",
      "options": [
        "Daies",
        "Dayes",
        "Days",
        "Dayz"
      ],
      "answer": "Days",
      "explanation": "સંજ્ઞા 'y' માં સમાપ્ત થાય છે અને તેની પહેલાં સ્વર 'a' છે, તેથી ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "'Donkey' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Donkies",
        "Donkeys",
        "Donkees",
        "Donkeyes"
      ],
      "answer": "Donkeys",
      "explanation": "'y' પહેલાં સ્વર 'e' હોવાથી, બહુવચન માટે ફક્ત 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Ray' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Rays",
        "Raies",
        "Rayes",
        "Rayz"
      ],
      "answer": "Rays",
      "explanation": "જ્યારે સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં સ્વર 'a' હોય, ત્યારે બહુવચન માટે 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Valley' નું બહુવચન શું છે?",
      "options": [
        "Valleyies",
        "Valleys",
        "Vallies",
        "Valleyes"
      ],
      "answer": "Valleys",
      "explanation": "'y' પહેલાં સ્વર 'e' હોવાથી, ફક્ત 's' ઉમેરીને બહુવચન બનાવવામાં આવે છે."
    },
    {
      "question": "'Guy' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Guies",
        "Guyes",
        "Guys",
        "Guyz"
      ],
      "answer": "Guys",
      "explanation": "સંજ્ઞા 'y' માં સમાપ્ત થાય છે અને તેની પહેલાં સ્વર 'u' છે, તેથી બહુવચન 's' ઉમેરીને બને છે."
    },
    {
      "question": "'Play' (નાટક) શબ્દનું બહુવચન શું છે?",
      "options": [
        "Plays",
        "Plaies",
        "Playes",
        "Playz"
      ],
      "answer": "Plays",
      "explanation": "'y' પહેલાં સ્વર 'a' હોવાથી, બહુવચન માટે ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "'Way' નું બહુવચન શું છે?",
      "options": [
        "Waies",
        "Ways",
        "Wayes",
        "Wayz"
      ],
      "answer": "Ways",
      "explanation": "જો સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં સ્વર હોય, તો ફક્ત 's' ઉમેરીને બહુવચન બને છે."
    }
  ],
  "test-4": [
    {
      "question": "'Baby' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Babys",
        "Babies",
        "Babyies",
        "Babyes"
      ],
      "answer": "Babies",
      "explanation": "જો સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં વ્યંજન હોય, તો 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "'City' નું બહુવચન શું છે?",
      "options": [
        "Citys",
        "Cityes",
        "Cities",
        "Citis"
      ],
      "answer": "Cities",
      "explanation": "સંજ્ઞા 'y' માં સમાપ્ત થાય છે અને તેની પહેલાં વ્યંજન 't' છે, તેથી 'y' ને દૂર કરી 'ies' ઉમેરાય છે."
    },
    {
      "question": "'Lady' નું બહુવચન શું છે?",
      "options": [
        "Ladys",
        "Ladies",
        "Ladyes",
        "Lady's"
      ],
      "answer": "Ladies",
      "explanation": "જ્યારે સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં વ્યંજન હોય, ત્યારે 'y' નું 'ies' થાય છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Story' નું સાચું બહુવચન છે?",
      "options": [
        "Storys",
        "Stories",
        "Storyes",
        "Storiez"
      ],
      "answer": "Stories",
      "explanation": "'y' પહેલાં વ્યંજન 'r' હોવાથી, બહુવચન માટે 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Army' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Armys",
        "Armyes",
        "Armies",
        "Armis"
      ],
      "answer": "Armies",
      "explanation": "સંજ્ઞા 'y' માં સમાપ્ત થાય છે અને તેની પહેલાં વ્યંજન 'm' છે, તેથી 'y' ને 'ies' માં ફેરવાય છે."
    },
    {
      "question": "'Party' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Parties",
        "Partys",
        "Partyes",
        "Partiez"
      ],
      "answer": "Parties",
      "explanation": "'y' પહેલાં વ્યંજન 't' હોવાથી, 'y' ને દૂર કરી 'ies' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Fly' (માખી) નું બહુવચન શું છે?",
      "options": [
        "Flys",
        "Flies",
        "Flyes",
        "Flies'"
      ],
      "answer": "Flies",
      "explanation": "જો સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં વ્યંજન હોય, તો 'y' ને 'ies' માં બદલવામાં આવે છે."
    },
    {
      "question": "'Country' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Countrys",
        "Countryes",
        "Countries",
        "Countris"
      ],
      "answer": "Countries",
      "explanation": "જ્યારે સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં વ્યંજન 'r' હોય, ત્યારે 'y' નું 'ies' થાય છે."
    },
    {
      "question": "'Family' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Familys",
        "Families",
        "Familyes",
        "Familiez"
      ],
      "answer": "Families",
      "explanation": "'y' પહેલાં વ્યંજન 'l' હોવાથી, 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Puppy' નું બહુવચન શું છે?",
      "options": [
        "Puppys",
        "Puppies",
        "Puppyes",
        "Puppis"
      ],
      "answer": "Puppies",
      "explanation": "'y' પહેલાં વ્યંજન 'p' હોવાથી, બહુવચન માટે 'y' ને 'ies' માં બદલવામાં આવે છે."
    }
  ],
  "test-5": [
    {
      "question": "'Leaf' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Leafs",
        "Leaves",
        "Leafes",
        "Leavs"
      ],
      "answer": "Leaves",
      "explanation": "મોટાભાગની સંજ્ઞાઓ જે 'f' અથવા 'fe' માં સમાપ્ત થાય છે, તેમનું બહુવચન 'f' કે 'fe' ને 'ves' માં ફેરવીને બને છે."
    },
    {
      "question": "'Wife' નું બહુવચન શું છે?",
      "options": [
        "Wifes",
        "Wives",
        "Wive",
        "Wifees"
      ],
      "answer": "Wives",
      "explanation": "જ્યારે સંજ્ઞા 'fe' માં સમાપ્ત થાય છે, ત્યારે બહુવચન માટે 'fe' ને 'ves' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Thief' નું બહુવચન શું છે?",
      "options": [
        "Thiefs",
        "Thieves",
        "Thiefes",
        "Thievs"
      ],
      "answer": "Thieves",
      "explanation": "સંજ્ઞા 'f' માં સમાપ્ત થાય છે, તેથી 'f' ને 'ves' માં ફેરવીને બહુવચન બને છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Knife' નું સાચું બહુવચન છે?",
      "options": [
        "Knifes",
        "Knives",
        "Knifees",
        "Knivs"
      ],
      "answer": "Knives",
      "explanation": "'fe' માં સમાપ્ત થતી સંજ્ઞાઓનું બહુવચન 'fe' ને 'ves' માં ફેરવીને થાય છે."
    },
    {
      "question": "'Wolf' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Wolfs",
        "Wolves",
        "Wolfes",
        "Wolvs"
      ],
      "answer": "Wolves",
      "explanation": "જે સંજ્ઞાઓ 'f' માં સમાપ્ત થાય છે, તેમાં 'f' ને 'ves' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Life' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Lifes",
        "Lives",
        "Lifees",
        "Livs"
      ],
      "answer": "Lives",
      "explanation": "સંજ્ઞા 'fe' માં સમાપ્ત થાય છે, તેથી બહુવચન બનાવવા માટે 'fe' ને 'ves' માં બદલવામાં આવે છે."
    },
    {
      "question": "'Half' નું બહુવચન શું છે?",
      "options": [
        "Halfs",
        "Halves",
        "Halfes",
        "Halvs"
      ],
      "answer": "Halves",
      "explanation": "'f' માં સમાપ્ત થતી આ સંજ્ઞાનું બહુવચન 'f' ને 'ves' માં ફેરવીને બને છે."
    },
    {
      "question": "'Loaf' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Loafs",
        "Loaves",
        "Loafes",
        "Loavs"
      ],
      "answer": "Loaves",
      "explanation": "'f' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન બનાવવા માટે 'f' ને 'ves' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Shelf' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Shelfs",
        "Shelves",
        "Shelfes",
        "Shelvs"
      ],
      "answer": "Shelves",
      "explanation": "મોટાભાગની સંજ્ઞાઓ જે 'f' માં સમાપ્ત થાય છે, તેમાં 'f' ને 'ves' માં ફેરવીને બહુવચન બને છે."
    },
    {
      "question": "'Calf' નું બહુવચન શું છે?",
      "options": [
        "Calfs",
        "Calves",
        "Calfes",
        "Calvs"
      ],
      "answer": "Calves",
      "explanation": "'f' માં સમાપ્ત થતી આ સંજ્ઞાનું બહુવચન 'f' ને 'ves' માં ફેરવીને બનાવવામાં આવે છે."
    }
  ],
  "test-6": [
    {
      "question": "'Roof' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Roofs",
        "Rooves",
        "Roofes",
        "Roovs"
      ],
      "answer": "Roofs",
      "explanation": "કેટલીક સંજ્ઞાઓ જે 'f' માં સમાપ્ત થાય છે, તે નિયમનો અપવાદ છે અને ફક્ત 's' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "'Chief' નું બહુવચન શું છે?",
      "options": [
        "Chieves",
        "Chiefs",
        "Chieveses",
        "Chiefes"
      ],
      "answer": "Chiefs",
      "explanation": "'Chief' એ 'f' ને 'ves' માં ફેરવવાના નિયમનો અપવાદ છે. તેનું બહુવચન ફક્ત 's' ઉમેરીને બને છે."
    },
    {
      "question": "'Proof' નું બહુવચન શું છે?",
      "options": [
        "Prooves",
        "Proofs",
        "Proofes",
        "Proovs"
      ],
      "answer": "Proofs",
      "explanation": "આ શબ્દ 'f' માં સમાપ્ત થવા છતાં, તે નિયમનો અપવાદ છે અને તેનું બહુવચન 's' ઉમેરીને થાય છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Safe' (તિજોરી) નું સાચું બહુવચન છે?",
      "options": [
        "Saves",
        "Safes",
        "Savees",
        "Savs"
      ],
      "answer": "Safes",
      "explanation": "'Safe' એ અપવાદરૂપ સંજ્ઞા છે જેનું બહુવચન ફક્ત 's' ઉમેરીને બને છે, 'ves' નહીં."
    },
    {
      "question": "'Belief' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Believes",
        "Beliefs",
        "Beliefes",
        "Believs"
      ],
      "answer": "Beliefs",
      "explanation": "આ સંજ્ઞા 'f' માં સમાપ્ત થતા નિયમનો અપવાદ છે. ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "'Gulf' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Gulves",
        "Gulfs",
        "Gulfes",
        "Gulvs"
      ],
      "answer": "Gulfs",
      "explanation": "'Gulf' પણ 'f' માં સમાપ્ત થતા શબ્દોના અપવાદોમાંનો એક છે, જેમાં ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "'Cliff' નું બહુવચન શું છે?",
      "options": [
        "Cliffs",
        "Clives",
        "Cliffes",
        "Clivs"
      ],
      "answer": "Cliffs",
      "explanation": "જ્યારે સંજ્ઞા 'ff' માં સમાપ્ત થાય છે, ત્યારે સામાન્ય રીતે ફક્ત 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Handkerchief' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Handkerchieves",
        "Handkerchiefs",
        "Handkerchievs",
        "Handkerchifes"
      ],
      "answer": "Handkerchiefs",
      "explanation": "'Handkerchief' નો બહુવચન 'Handkerchiefs' અથવા 'Handkerchieves' બંને હોઈ શકે છે, પરંતુ 'Handkerchiefs' વધુ પ્રચલિત છે."
    },
    {
      "question": "'Dwarf' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Dwarves",
        "Dwarfs",
        "બંને સાચા છે",
        "એક પણ નહીં"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Dwarf' શબ્દના બે બહુવચન રૂપો છે: 'Dwarfs' અને 'Dwarves'. બંને સ્વીકાર્ય છે."
    },
    {
      "question": "'Hoof' નું બહુવચન શું છે?",
      "options": [
        "Hoofs",
        "Hooves",
        "બંને સાચા છે",
        "એક પણ નહીં"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Hoof' માટે 'Hoofs' અને 'Hooves' બંને બહુવચન રૂપો સાચા અને પ્રચલિત છે."
    }
  ],
  "test-7": [
    {
      "question": "'Potato' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Potatos",
        "Potatoes",
        "Potato's",
        "Potatoz"
      ],
      "answer": "Potatoes",
      "explanation": "જો સંજ્ઞા 'o' માં સમાપ્ત થાય અને તેની પહેલાં વ્યંજન હોય, તો બહુવચન માટે 'es' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Tomato' નું બહુવચન શું છે?",
      "options": [
        "Tomatos",
        "Tomato's",
        "Tomatoes",
        "Tomatoz"
      ],
      "answer": "Tomatoes",
      "explanation": "સંજ્ઞા 'o' માં સમાપ્ત થાય છે અને તેની પહેલાં વ્યંજન 't' છે, તેથી 'es' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "'Hero' નું બહુવચન શું છે?",
      "options": [
        "Heros",
        "Heroes",
        "Hero's",
        "Heroz"
      ],
      "answer": "Heroes",
      "explanation": "'o' પહેલાં વ્યંજન 'r' હોવાથી, બહુવચન બનાવવા માટે 'es' ઉમેરવામાં આવે છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Mango' નું સાચું બહુવચન છે?",
      "options": [
        "Mangos",
        "Mangoes",
        "Mango's",
        "Mangoz"
      ],
      "answer": "Mangoes",
      "explanation": "'Mango' શબ્દ 'o' માં સમાપ્ત થાય છે અને તેની પહેલાં વ્યંજન 'g' છે, તેથી 'es' ઉમેરાય છે. જોકે 'Mangos' પણ ક્યારેક વપરાય છે, 'Mangoes' વધુ સાચું છે."
    },
    {
      "question": "'Echo' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Echoes",
        "Echos",
        "Echo's",
        "Echoz"
      ],
      "answer": "Echoes",
      "explanation": "જે સંજ્ઞા 'o' માં સમાપ્ત થાય અને તેની પહેલાં વ્યંજન હોય, તેનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "'Volcano' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Volcanos",
        "Volcanoes",
        "બંને સાચા છે",
        "એક પણ નહીં"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Volcano' શબ્દ માટે 'Volcanoes' અને 'Volcanos' બંને બહુવચન રૂપો સાચા અને પ્રચલિત છે."
    },
    {
      "question": "'Mosquito' નું બહુવચન શું છે?",
      "options": [
        "Mosquitos",
        "Mosquitoes",
        "Mosquito's",
        "Mosquitoz"
      ],
      "answer": "Mosquitoes",
      "explanation": "સામાન્ય નિયમ મુજબ, 'o' માં સમાપ્ત થતી અને વ્યંજન પહેલાં આવતી સંજ્ઞાનું બહુવચન 'es' ઉમેરીને થાય છે."
    },
    {
      "question": "'Veto' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Vetos",
        "Vetoes",
        "Veto's",
        "Vetoz"
      ],
      "answer": "Vetoes",
      "explanation": "સંજ્ઞા 'o' માં સમાપ્ત થાય છે અને તેની પહેલાં વ્યંજન 't' છે, તેથી બહુવચન માટે 'es' ઉમેરાય છે."
    },
    {
      "question": "'Buffalo' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Buffalos",
        "Buffaloes",
        "બંને સાચા છે",
        "એક પણ નહીં"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Buffalo' શબ્દના બહુવચન તરીકે 'Buffaloes' અને 'Buffalos' બંનેનો ઉપયોગ થાય છે."
    },
    {
      "question": "'Cargo' નું બહુવચન શું છે?",
      "options": [
        "Cargos",
        "Cargoes",
        "બંને સાચા છે",
        "એક પણ નહીં"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Cargo' માટે 'Cargoes' અને 'Cargos' બંને બહુવચન રૂપો સ્વીકાર્ય છે."
    }
  ],
  "test-8": [
    {
      "question": "'Radio' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Radios",
        "Radioes",
        "Radio's",
        "Radioz"
      ],
      "answer": "Radios",
      "explanation": "જો સંજ્ઞા 'o' માં સમાપ્ત થાય અને તેની પહેલાં સ્વર હોય, તો ફક્ત 's' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "'Photo' નું બહુવચન શું છે?",
      "options": [
        "Photos",
        "Photoes",
        "Photo's",
        "Photoz"
      ],
      "answer": "Photos",
      "explanation": "'Photo' એ 'o' માં સમાપ્ત થતા નિયમનો અપવાદ છે. તે ગ્રીક શબ્દ 'photograph' નું ટૂંકું રૂપ છે, તેથી ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "'Piano' નું બહુવચન શું છે?",
      "options": [
        "Pianos",
        "Pianoes",
        "Piano's",
        "Pianoz"
      ],
      "answer": "Pianos",
      "explanation": "'Piano' ઇટાલિયન મૂળનો શબ્દ છે અને તે 'o' માં સમાપ્ત થતા નિયમનો અપવાદ છે. ફક્ત 's' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Video' નું સાચું બહુવચન છે?",
      "options": [
        "Videos",
        "Videoes",
        "Video's",
        "Videoz"
      ],
      "answer": "Videos",
      "explanation": "જ્યારે સંજ્ઞા 'o' માં સમાપ્ત થાય અને તેની પહેલાં સ્વર 'e' હોય, ત્યારે ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "'Zoo' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Zoos",
        "Zooes",
        "Zoo's",
        "Zooz"
      ],
      "answer": "Zoos",
      "explanation": "સંજ્ઞા 'o' માં સમાપ્ત થાય છે અને તેની પહેલાં પણ સ્વર 'o' છે, તેથી બહુવચન માટે ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "'Studio' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Studios",
        "Studioes",
        "Studio's",
        "Studioz"
      ],
      "answer": "Studios",
      "explanation": "'o' પહેલાં સ્વર 'i' હોવાથી, બહુવચન બનાવવા માટે ફક્ત 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Kangaroo' નું બહુવચન શું છે?",
      "options": [
        "Kangaroos",
        "Kangarooes",
        "Kangaroo's",
        "Kangaroz"
      ],
      "answer": "Kangaroos",
      "explanation": "આ સંજ્ઞા 'oo' માં સમાપ્ત થાય છે, તેથી બહુવચન માટે ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "'Bamboo' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Bamboos",
        "Bambooes",
        "Bamboo's",
        "Bambooz"
      ],
      "answer": "Bamboos",
      "explanation": "'oo' માં સમાપ્ત થતી સંજ્ઞાઓનું બહુવચન સામાન્ય રીતે 's' ઉમેરીને બને છે."
    },
    {
      "question": "'Tattoo' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Tattoos",
        "Tattooes",
        "Tattoo's",
        "Tattooz"
      ],
      "answer": "Tattoos",
      "explanation": "આ સંજ્ઞાના અંતમાં 'oo' છે, તેથી બહુવચન માટે 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Logo' નું બહુવચન શું છે?",
      "options": [
        "Logos",
        "Logoes",
        "Logo's",
        "Logoz"
      ],
      "answer": "Logos",
      "explanation": "'Logo' એ 'logotype' નું ટૂંકું રૂપ છે અને તે 'o' માં સમાપ્ત થતા નિયમનો અપવાદ છે. ફક્ત 's' ઉમેરાય છે."
    }
  ],
  "test-9": [
    {
      "question": "'Man' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Mans",
        "Men",
        "Man's",
        "Menz"
      ],
      "answer": "Men",
      "explanation": "આ એક અનિયમિત સંજ્ઞા છે, જેમાં બહુવચન માટે અંદરના સ્વરને બદલવામાં આવે છે (a -> e)."
    },
    {
      "question": "'Woman' નું બહુવચન શું છે?",
      "options": [
        "Womans",
        "Womens",
        "Women",
        "Woman's"
      ],
      "answer": "Women",
      "explanation": "'Woman' એક અનિયમિત સંજ્ઞા છે. તેનું બહુવચન 'Women' છે, જેમાં 'a' ને 'e' માં બદલવામાં આવે છે અને ઉચ્ચાર પણ બદલાય છે."
    },
    {
      "question": "'Foot' નું બહુવચન શું છે?",
      "options": [
        "Foots",
        "Feets",
        "Feet",
        "Foot's"
      ],
      "answer": "Feet",
      "explanation": "આ એક અનિયમિત સંજ્ઞા છે, જેમાં બહુવચન બનાવવા માટે વચ્ચેના સ્વરો 'oo' ને 'ee' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Tooth' નું સાચું બહુવચન છે?",
      "options": [
        "Tooths",
        "Teeths",
        "Teeth",
        "Tooth's"
      ],
      "answer": "Teeth",
      "explanation": "અનિયમિત સંજ્ઞા હોવાથી, 'Tooth' નું બહુવચન 'Teeth' થાય છે ('oo' -> 'ee')."
    },
    {
      "question": "'Goose' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Gooses",
        "Geese",
        "Goose's",
        "Geeses"
      ],
      "answer": "Geese",
      "explanation": "'Goose' એક અનિયમિત સંજ્ઞા છે, અને તેનું બહુવચન 'Geese' છે."
    },
    {
      "question": "'Mouse' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Mouses",
        "Mice",
        "Mouse's",
        "Mices"
      ],
      "answer": "Mice",
      "explanation": "આ એક અનિયમિત સંજ્ઞા છે જેનું બહુવચન સંપૂર્ણપણે અલગ શબ્દ 'Mice' છે."
    },
    {
      "question": "'Child' નું બહુવચન શું છે?",
      "options": [
        "Childs",
        "Children",
        "Childes",
        "Child's"
      ],
      "answer": "Children",
      "explanation": "'Child' એક અનિયમિત સંજ્ઞા છે. તેનું બહુવચન બનાવવા માટે 'ren' પ્રત્યય ઉમેરવામાં આવે છે."
    },
    {
      "question": "'Ox' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Oxes",
        "Ox's",
        "Oxen",
        "Oxs"
      ],
      "answer": "Oxen",
      "explanation": "'Ox' એક જૂની અંગ્રેજી અનિયમિત સંજ્ઞા છે, જેનું બહુવચન 'en' પ્રત્યય ઉમેરીને 'Oxen' બને છે."
    },
    {
      "question": "'Louse' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Louses",
        "Lice",
        "Louse's",
        "Lices"
      ],
      "answer": "Lice",
      "explanation": "'Mouse' ની જેમ, 'Louse' પણ એક અનિયમિત સંજ્ઞા છે જેનું બહુવચન 'Lice' થાય છે."
    },
    {
      "question": "'Person' નું બહુવચન શું છે?",
      "options": [
        "Persons",
        "People",
        "બંને સાચા છે",
        "Persones"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Person' નું બહુવચન 'People' (લોકોનો સમૂહ) સૌથી સામાન્ય છે. 'Persons' નો ઉપયોગ કાનૂની અથવા ઔપચારિક સંદર્ભમાં વ્યક્તિઓની ગણતરી માટે થાય છે."
    }
  ],
  "test-10": [
    {
      "question": "'Sheep' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Sheeps",
        "Sheep",
        "Sheepes",
        "Sheep's"
      ],
      "answer": "Sheep",
      "explanation": "કેટલીક સંજ્ઞાઓ, જેમ કે 'Sheep', 'Fish', અને 'Deer', નું એકવચન અને બહુવચન રૂપ સમાન હોય છે."
    },
    {
      "question": "'Fish' નું બહુવચન શું છે?",
      "options": [
        "Fish",
        "Fishes",
        "બંને સાચા છે",
        "Fish's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Fish' નું બહુવચન સામાન્ય રીતે 'Fish' જ હોય છે. 'Fishes' નો ઉપયોગ ત્યારે થાય છે જ્યારે માછલીઓની જુદી જુદી પ્રજાતિઓનો ઉલ્લેખ કરવામાં આવે છે."
    },
    {
      "question": "'Deer' નું બહુવચન શું છે?",
      "options": [
        "Deers",
        "Deeres",
        "Deer's",
        "Deer"
      ],
      "answer": "Deer",
      "explanation": "'Deer' એ સંજ્ઞાઓમાંની એક છે જેનું એકવચન અને બહુવચન રૂપ બદલાતું નથી."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Aircraft' નું સાચું બહુવચન છે?",
      "options": [
        "Aircraft",
        "Aircrafts",
        "Aircraftes",
        "Aircraft's"
      ],
      "answer": "Aircraft",
      "explanation": "'Aircraft' શબ્દનું એકવચન અને બહુવચન રૂપ સમાન રહે છે."
    },
    {
      "question": "'Series' નું એકવચન રૂપ શું છે?",
      "options": [
        "Serie",
        "Series",
        "Seri",
        "Sery"
      ],
      "answer": "Series",
      "explanation": "'Series' શબ્દ એકવચન અને બહુવચન બંનેમાં સમાન રીતે વપરાય છે. ( દા.ત., a series, many series )."
    },
    {
      "question": "'Species' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Species",
        "Specie",
        "Specieses",
        "Specy"
      ],
      "answer": "Species",
      "explanation": "'Species' (પ્રજાતિ) શબ્દ એકવચન અને બહુવચન બંને માટે સમાન છે."
    },
    {
      "question": "'Furniture' નું બહુવચન શું છે?",
      "options": [
        "Furnitures",
        "Furniturees",
        "Furniture",
        "Furniture's"
      ],
      "answer": "Furniture",
      "explanation": "'Furniture' એ એક અગણ્ય (uncountable) સંજ્ઞા છે, તેથી તેનું બહુવચન રૂપ નથી હોતું. તે હંમેશા એકવચનમાં જ રહે છે."
    },
    {
      "question": "'Information' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Informations",
        "Information",
        "Informationes",
        "Information's"
      ],
      "answer": "Information",
      "explanation": "'Information' એક અગણ્ય સંજ્ઞા છે, તેથી તેનું બહુવચન થતું નથી."
    },
    {
      "question": "'Luggage' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Luggages",
        "Luggage",
        "Luggage's",
        "Luggagees"
      ],
      "answer": "Luggage",
      "explanation": "'Luggage' પણ એક અગણ્ય સંજ્ઞા છે, જેનું બહુવચન રૂપ નથી હોતું."
    },
    {
      "question": "'Advice' નું બહુવચન શું છે?",
      "options": [
        "Advices",
        "Advice",
        "Advice's",
        "Advicees"
      ],
      "answer": "Advice",
      "explanation": "'Advice' (સલાહ) એક અગણ્ય સંજ્ઞા છે. જો તમારે ગણતરી કરવી હોય તો 'a piece of advice' અથવા 'pieces of advice' નો ઉપયોગ થાય છે."
    }
  ],
  "test-11": [
    {
      "question": "'Crisis' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Crisises",
        "Crisi",
        "Crises",
        "Crisis"
      ],
      "answer": "Crises",
      "explanation": "ગ્રીક મૂળની સંજ્ઞાઓ જે 'is' માં સમાપ્ત થાય છે, તેમનું બહુવચન 'is' ને 'es' માં ફેરવીને બને છે. (ઉચ્ચાર: ક્રાઇ-સીઝ)"
    },
    {
      "question": "'Analysis' નું બહુવચન શું છે?",
      "options": [
        "Analyses",
        "Analysises",
        "Analysi",
        "Analysis"
      ],
      "answer": "Analyses",
      "explanation": "ગ્રીક મૂળના શબ્દો જે 'is' માં સમાપ્ત થાય છે, તેમનું બહુવચન 'is' ને 'es' માં બદલીને કરવામાં આવે છે."
    },
    {
      "question": "'Phenomenon' નું બહુવચન શું છે?",
      "options": [
        "Phenomenons",
        "Phenomenae",
        "Phenomena",
        "Phenomenon's"
      ],
      "answer": "Phenomena",
      "explanation": "ગ્રીક મૂળની સંજ્ઞાઓ જે 'on' માં સમાપ્ત થાય છે, તેમનું બહુવચન 'on' ને 'a' માં ફેરવીને બને છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Criterion' નું સાચું બહુવચન છે?",
      "options": [
        "Criterions",
        "Criteria",
        "Criteriones",
        "Criterias"
      ],
      "answer": "Criteria",
      "explanation": "'Criterion' (માપદંડ) એ 'on' માં સમાપ્ત થતી ગ્રીક સંજ્ઞા છે, જેનું બહુવચન 'a' માં ફેરવીને 'Criteria' બને છે."
    },
    {
      "question": "'Datum' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Datums",
        "Datas",
        "Data",
        "Datumes"
      ],
      "answer": "Data",
      "explanation": "લેટિન મૂળની સંજ્ઞાઓ જે 'um' માં સમાપ્ત થાય છે, તેમનું બહુવચન 'um' ને 'a' માં ફેરવીને બને છે. જોકે, આધુનિક અંગ્રેજીમાં 'Data' એકવચન તરીકે પણ વપરાય છે."
    },
    {
      "question": "'Medium' (માધ્યમ) શબ્દનું બહુવચન શું છે?",
      "options": [
        "Mediums",
        "Media",
        "બંને સાચા છે",
        "Mediumes"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Medium' નું શાસ્ત્રીય બહુવચન 'Media' છે (ખાસ કરીને માસ મીડિયાના સંદર્ભમાં). 'Mediums' નો ઉપયોગ અન્ય સંદર્ભમાં થાય છે (દા.ત., spiritual mediums)."
    },
    {
      "question": "'Syllabus' નું બહુવચન શું છે?",
      "options": [
        "Syllabi",
        "Syllabuses",
        "બંને સાચા છે",
        "Syllabus's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Syllabus' માટે લેટિન બહુવચન 'Syllabi' અને અંગ્રેજી બહુવચન 'Syllabuses' બંને સાચા અને સ્વીકાર્ય છે."
    },
    {
      "question": "'Cactus' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Cacti",
        "Cactuses",
        "બંને સાચા છે",
        "Cactus's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "લેટિન મૂળની 'us' માં સમાપ્ત થતી આ સંજ્ઞા માટે, 'Cacti' (શાસ્ત્રીય) અને 'Cactuses' (અંગ્રેજીકૃત) બંને રૂપો સાચા છે."
    },
    {
      "question": "'Index' (સૂચિ) શબ્દનું બહુવચન શું છે?",
      "options": [
        "Indexes",
        "Indices",
        "બંને સાચા છે",
        "Index's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Indexes' નો ઉપયોગ સામાન્ય રીતે પુસ્તકની પાછળની સૂચિઓ માટે થાય છે. 'Indices' નો ઉપયોગ ગણિત અને વિજ્ઞાનના સંદર્ભમાં થાય છે."
    },
    {
      "question": "'Appendix' નું બહુવચન શું છે?",
      "options": [
        "Appendices",
        "Appendixes",
        "બંને સાચા છે",
        "Appendix's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Appendix' માટે 'Appendices' (વધુ ઔપચારિક અને સામાન્ય) અને 'Appendixes' બંને બહુવચન રૂપો સાચા છે."
    }
  ],
  "test-12": [
    {
      "question": "'Mother-in-law' નું બહુવચન શું છે?",
      "options": [
        "Mothers-in-law",
        "Mother-in-laws",
        "Mothers-in-laws",
        "Mother-in-law's"
      ],
      "answer": "Mothers-in-law",
      "explanation": "સંયુક્ત સંજ્ઞાઓ (compound nouns) માં, મુખ્ય શબ્દને બહુવચનમાં ફેરવવામાં આવે છે. અહીં મુખ્ય શબ્દ 'Mother' છે."
    },
    {
      "question": "'Passer-by' નું બહુવચન શું છે?",
      "options": [
        "Passer-bys",
        "Passers-by",
        "Passers-bys",
        "Passer-by's"
      ],
      "answer": "Passers-by",
      "explanation": "સંયુક્ત સંજ્ઞામાં મુખ્ય શબ્દ 'Passer' છે, તેથી તેને બહુવચન બનાવવામાં આવે છે."
    },
    {
      "question": "'Commander-in-chief' નું બહુવચન શું છે?",
      "options": [
        "Commander-in-chiefs",
        "Commanders-in-chiefs",
        "Commanders-in-chief",
        "Commander-in's-chief"
      ],
      "answer": "Commanders-in-chief",
      "explanation": "આ સંયુક્ત સંજ્ઞામાં મુખ્ય શબ્દ 'Commander' છે, તેથી બહુવચન બનાવવા માટે તેને 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "નીચેનામાંથી કયો શબ્દ 'Attorney General' નું સાચું બહુવચન છે?",
      "options": [
        "Attorney Generals",
        "Attorneys General",
        "Attorneys Generals",
        "Attorney General's"
      ],
      "answer": "Attorneys General",
      "explanation": "અહીં મુખ્ય સંજ્ઞા 'Attorney' છે, તેથી બહુવચન બનાવવા માટે 'Attorney' ને 'Attorneys' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Maidservant' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Maidservants",
        "Maidsservant",
        "Maidservant's",
        "Maidservantes"
      ],
      "answer": "Maidservants",
      "explanation": "કેટલીક સંયુક્ત સંજ્ઞાઓમાં, અંતિમ શબ્દને બહુવચનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Brother-in-law' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Brother-in-laws",
        "Brothers-in-laws",
        "Brothers-in-law",
        "Brother-in-law's"
      ],
      "answer": "Brothers-in-law",
      "explanation": "સંયુક્ત સંજ્ઞામાં, મુખ્ય શબ્દ (Brother) ને બહુવચનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Stepson' નું બહુવચન શું છે?",
      "options": [
        "Stepsons",
        "Stepson's",
        "Stepssons",
        "Step-son"
      ],
      "answer": "Stepsons",
      "explanation": "આવી સંયુક્ત સંજ્ઞાઓમાં, છેલ્લો ભાગ બહુવચનમાં ફેરવાય છે."
    },
    {
      "question": "'Looker-on' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Looker-ons",
        "Lookers-on",
        "Lookers-ons",
        "Looker-on's"
      ],
      "answer": "Lookers-on",
      "explanation": "અહીં મુખ્ય શબ્દ 'Looker' છે, તેથી તેને બહુવચનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "'Court-martial' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Courts-martial",
        "Court-martials",
        "Courts-martials",
        "Court-martial's"
      ],
      "answer": "Courts-martial",
      "explanation": "આવી સંયુક્ત સંજ્ઞામાં મુખ્ય શબ્દ (Court) ને બહુવચન બનાવવામાં આવે છે."
    },
    {
      "question": "'Governor General' નું બહુવચન શું છે?",
      "options": [
        "Governor Generals",
        "Governors General",
        "Governors Generals",
        "Governor General's"
      ],
      "answer": "Governors General",
      "explanation": "સંયુક્ત પદવીમાં મુખ્ય શબ્દ (Governor) ને બહુવચનમાં ફેરવવામાં આવે છે."
    }
  ],
  "test-13": [
    {
      "question": "A flock of ___ is flying south. (sheep)",
      "options": [
        "sheep",
        "sheeps",
        "a sheep",
        "the sheeps"
      ],
      "answer": "sheep",
      "explanation": "'Sheep' શબ્દનું એકવચન અને બહુવચન રૂપ સમાન છે."
    },
    {
      "question": "I saw two ___ in the forest. (deer)",
      "options": [
        "deer",
        "deers",
        "a deer",
        "the deers"
      ],
      "answer": "deer",
      "explanation": "'Deer' શબ્દનું બહુવચન રૂપ પણ 'deer' જ રહે છે."
    },
    {
      "question": "My ___ are aching after the long walk. (foot)",
      "options": [
        "foots",
        "feet",
        "foot",
        "feets"
      ],
      "answer": "feet",
      "explanation": "'Foot' નું અનિયમિત બહુવચન 'feet' છે."
    },
    {
      "question": "There are many ___ in the pond. (fish)",
      "options": [
        "fish",
        "fishes",
        "fish's",
        "a fish"
      ],
      "answer": "fish",
      "explanation": "સામાન્ય રીતે, 'fish' નું બહુવચન 'fish' જ હોય છે. 'Fishes' નો ઉપયોગ જુદી જુદી પ્રજાતિઓ માટે થાય છે."
    },
    {
      "question": "The ___ are playing in the kitchen. (child)",
      "options": [
        "childs",
        "child's",
        "children",
        "childes"
      ],
      "answer": "children",
      "explanation": "'Child' નું અનિયમિત બહુવચન 'children' છે."
    },
    {
      "question": "I need to buy some new ___. (potato)",
      "options": [
        "potato",
        "potatos",
        "potatoes",
        "potato's"
      ],
      "answer": "potatoes",
      "explanation": "'o' માં સમાપ્ત થતી અને તેની પહેલાં વ્યંજન આવતી સંજ્ઞાનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "The ___ are falling from the trees. (leaf)",
      "options": [
        "leafs",
        "leaves",
        "leafes",
        "leaf's"
      ],
      "answer": "leaves",
      "explanation": "'f' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન 'f' ને 'ves' માં ફેરવીને બને છે."
    },
    {
      "question": "We have three ___ in our family. (woman)",
      "options": [
        "woman",
        "womans",
        "women",
        "womens"
      ],
      "answer": "women",
      "explanation": "'Woman' નું અનિયમિત બહુવચન 'women' છે."
    },
    {
      "question": "How many ___ did you see? (mouse)",
      "options": [
        "mouse",
        "mouses",
        "mice",
        "mices"
      ],
      "answer": "mice",
      "explanation": "'Mouse' નું અનિયમિત બહુવચન 'mice' છે."
    },
    {
      "question": "She has two beautiful ___. (baby)",
      "options": [
        "babys",
        "baby's",
        "babies",
        "babyes"
      ],
      "answer": "babies",
      "explanation": "જ્યારે સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં વ્યંજન હોય, ત્યારે 'y' ને 'ies' માં ફેરવાય છે."
    }
  ],
  "test-14": [
    {
      "question": "There are several ___ on the road to success. (crisis)",
      "options": [
        "crisis",
        "crisises",
        "crises",
        "crisis's"
      ],
      "answer": "crises",
      "explanation": "ગ્રીક મૂળની 'is' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન 'es' માં ફેરવીને બને છે."
    },
    {
      "question": "The scientist presented his ___ at the conference. (analysis)",
      "options": [
        "analysis",
        "analysises",
        "analyses",
        "analysis's"
      ],
      "answer": "analyses",
      "explanation": "'Analysis' નું બહુવચન 'analyses' થાય છે."
    },
    {
      "question": "He has three ___. (son-in-law)",
      "options": [
        "son-in-laws",
        "sons-in-law",
        "sons-in-laws",
        "son-in-law's"
      ],
      "answer": "sons-in-law",
      "explanation": "સંયુક્ત સંજ્ઞામાં મુખ્ય શબ્દ, 'son', ને બહુવચનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "The garden is full of red ___. (poppy)",
      "options": [
        "poppys",
        "poppies",
        "poppy's",
        "poppyes"
      ],
      "answer": "poppies",
      "explanation": "જ્યારે સંજ્ઞા 'y' માં સમાપ્ત થાય અને તેની પહેલાં વ્યંજન હોય, ત્યારે 'y' નું 'ies' થાય છે."
    },
    {
      "question": "We need to sharpen all the ___. (knife)",
      "options": [
        "knifes",
        "knives",
        "knife's",
        "knivs"
      ],
      "answer": "knives",
      "explanation": "'fe' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન 'ves' માં ફેરવીને બને છે."
    },
    {
      "question": "The story was about brave ___. (hero)",
      "options": [
        "heros",
        "heroes",
        "hero's",
        "heroz"
      ],
      "answer": "heroes",
      "explanation": "'o' માં સમાપ્ત થતી અને તેની પહેલાં વ્યંજન આવતી સંજ્ઞાનું બહુવચન 'es' ઉમેરીને થાય છે."
    },
    {
      "question": "There are many different ___ in the world. (person)",
      "options": [
        "persons",
        "people",
        "person's",
        "peoples"
      ],
      "answer": "people",
      "explanation": "સામાન્ય રીતે 'person' નું બહુવચન 'people' થાય છે. 'Persons' ઔપચારિક સંદર્ભમાં વપરાય છે."
    },
    {
      "question": "The ___ are grazing in the field. (ox)",
      "options": [
        "ox",
        "oxes",
        "oxen",
        "ox's"
      ],
      "answer": "oxen",
      "explanation": "'Ox' નું અનિયમિત બહુવચન 'oxen' છે."
    },
    {
      "question": "Can you put these books on the ___? (shelf)",
      "options": [
        "shelfs",
        "shelves",
        "shelf's",
        "shelv"
      ],
      "answer": "shelves",
      "explanation": "'f' માં સમાપ્ત થતી સંજ્ઞા 'shelf' નું બહુવચન 'shelves' થાય છે."
    },
    {
      "question": "He told us many funny ___. (story)",
      "options": [
        "storys",
        "story's",
        "stories",
        "storyes"
      ],
      "answer": "stories",
      "explanation": "'y' પહેલાં વ્યંજન 'r' હોવાથી, બહુવચન માટે 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    }
  ],
  "test-15": [
    {
      "question": "They have two ___ and one girl. (boy)",
      "options": [
        "boy",
        "boys",
        "boyes",
        "boy's"
      ],
      "answer": "boys",
      "explanation": "'y' પહેલાં સ્વર 'o' હોવાથી, ફક્ત 's' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "The cat has nine ___. (life)",
      "options": [
        "life",
        "lifes",
        "lives",
        "life's"
      ],
      "answer": "lives",
      "explanation": "'fe' માં સમાપ્ત થતી સંજ્ઞા 'life' નું બહુવચન 'lives' થાય છે."
    },
    {
      "question": "I love listening to old ___ on the radio. (echo)",
      "options": [
        "echo",
        "echos",
        "echoes",
        "echo's"
      ],
      "answer": "echoes",
      "explanation": "'o' માં સમાપ્ત થતી અને તેની પહેલાં વ્યંજન 'h' આવતી સંજ્ઞાનું બહુવચન 'es' ઉમેરીને થાય છે."
    },
    {
      "question": "We visited many beautiful ___ last summer. (city)",
      "options": [
        "city",
        "citys",
        "cities",
        "city's"
      ],
      "answer": "cities",
      "explanation": "'y' પહેલાં વ્યંજન 't' હોવાથી, 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "The farmer has many ___. (goose)",
      "options": [
        "goose",
        "gooses",
        "geese",
        "goose's"
      ],
      "answer": "geese",
      "explanation": "'Goose' નું અનિયમિત બહુવચન 'geese' છે."
    },
    {
      "question": "All the ___ were closed for the holiday. (church)",
      "options": [
        "church",
        "churchs",
        "churches",
        "church's"
      ],
      "answer": "churches",
      "explanation": "'ch' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "Please put the ___ in the sink. (dish)",
      "options": [
        "dish",
        "dishs",
        "dishes",
        "dish's"
      ],
      "answer": "dishes",
      "explanation": "'sh' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "I can see many ___ in the sky. (star)",
      "options": [
        "star",
        "stars",
        "stares",
        "star's"
      ],
      "answer": "stars",
      "explanation": "આ એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન ફક્ત 's' ઉમેરીને બને છે."
    },
    {
      "question": "He has a collection of old ___. (key)",
      "options": [
        "key",
        "keys",
        "keies",
        "key's"
      ],
      "answer": "keys",
      "explanation": "'y' પહેલાં સ્વર 'e' હોવાથી, ફક્ત 's' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "Two ___ were arrested yesterday. (thief)",
      "options": [
        "thief",
        "thiefs",
        "thieves",
        "thief's"
      ],
      "answer": "thieves",
      "explanation": "'f' માં સમાપ્ત થતી સંજ્ઞા 'thief' નું બહુવચન 'thieves' થાય છે."
    }
  ],
  "test-16": [
    {
      "question": "The company has several ___. (branch)",
      "options": [
        "branch",
        "branchs",
        "branches",
        "branch's"
      ],
      "answer": "branches",
      "explanation": "'ch' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન બનાવવા માટે 'es' ઉમેરવામાં આવે છે."
    },
    {
      "question": "The baker made a dozen ___. (loaf)",
      "options": [
        "loaf",
        "loafs",
        "loaves",
        "loaf's"
      ],
      "answer": "loaves",
      "explanation": "'f' માં સમાપ્ત થતી સંજ્ઞા 'loaf' નું બહુવચન 'loaves' થાય છે."
    },
    {
      "question": "We need more ___ for the party. (glass)",
      "options": [
        "glass",
        "glasss",
        "glasses",
        "glass's"
      ],
      "answer": "glasses",
      "explanation": "'ss' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન બનાવવા માટે 'es' ઉમેરવામાં આવે છે."
    },
    {
      "question": "She has many ___ in her life. (worry)",
      "options": [
        "worry",
        "worrys",
        "worries",
        "worry's"
      ],
      "answer": "worries",
      "explanation": "'y' પહેલાં વ્યંજન 'r' હોવાથી, 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "I saw two ___ on my way home. (fox)",
      "options": [
        "fox",
        "foxs",
        "foxes",
        "fox's"
      ],
      "answer": "foxes",
      "explanation": "'x' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન બનાવવા માટે 'es' ઉમેરવામાં આવે છે."
    },
    {
      "question": "The ___ are waiting for the show to start. (audience)",
      "options": [
        "audience",
        "audiences",
        "audience's",
        "audienci"
      ],
      "answer": "audience",
      "explanation": "'Audience' એક સામૂહિક સંજ્ઞા છે જે સામાન્ય રીતે એકવચનમાં જ વપરાય છે, ભલે તે ઘણા લોકોનો ઉલ્લેખ કરતી હોય."
    },
    {
      "question": "The concert was attended by many ___. (passer-by)",
      "options": [
        "passer-by",
        "passer-bys",
        "passers-by",
        "passers-bys"
      ],
      "answer": "passers-by",
      "explanation": "સંયુક્ત સંજ્ઞામાં મુખ્ય શબ્દ, 'passer', ને બહુવચનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "There are a lot of ___ on TV these days. (quiz)",
      "options": [
        "quiz",
        "quizs",
        "quizes",
        "quizzes"
      ],
      "answer": "quizzes",
      "explanation": "જ્યારે સંજ્ઞા 'z' માં સમાપ્ત થાય, ત્યારે બહુવચન માટે અંતિમ વ્યંજનને બમણો કરી 'es' ઉમેરવામાં આવે છે."
    },
    {
      "question": "She loves listening to fairy ___. (tale)",
      "options": [
        "tale",
        "tales",
        "talez",
        "tale's"
      ],
      "answer": "tales",
      "explanation": "આ એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન ફક્ત 's' ઉમેરીને બને છે."
    },
    {
      "question": "The general commands several ___. (army)",
      "options": [
        "army",
        "armys",
        "armies",
        "army's"
      ],
      "answer": "armies",
      "explanation": "'y' પહેલાં વ્યંજન 'm' હોવાથી, 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    }
  ],
  "test-17": [
    {
      "question": "The biologist is studying different ___ of insects. (species)",
      "options": [
        "specie",
        "species",
        "specieses",
        "species's"
      ],
      "answer": "species",
      "explanation": "'Species' શબ્દનું એકવચન અને બહુવચન રૂપ સમાન રહે છે."
    },
    {
      "question": "I need some ___ to complete my report. (information)",
      "options": [
        "information",
        "informations",
        "information's",
        "informati"
      ],
      "answer": "information",
      "explanation": "'Information' એક અગણ્ય સંજ્ઞા છે, તેથી તેનું બહુવચન રૂપ નથી હોતું."
    },
    {
      "question": "There are many historical ___ in this book. (datum)",
      "options": [
        "datum",
        "datums",
        "data",
        "datas"
      ],
      "answer": "data",
      "explanation": "'Datum' નું લેટિન બહુવચન 'data' છે."
    },
    {
      "question": "He is a man of many ___. (talent)",
      "options": [
        "talent",
        "talents",
        "talentes",
        "talent's"
      ],
      "answer": "talents",
      "explanation": "અહીં 'talents' નો અર્થ 'વિવિધ પ્રકારની પ્રતિભાઓ' થાય છે. આ એક નિયમિત સંજ્ઞા છે."
    },
    {
      "question": "We have new ___ in our living room. (furniture)",
      "options": [
        "furniture",
        "furnitures",
        "furniture's",
        "furnituri"
      ],
      "answer": "furniture",
      "explanation": "'Furniture' એક અગણ્ય સંજ્ઞા છે અને તેનું બહુવચન રૂપ નથી."
    },
    {
      "question": "The media ___ covering the event live. (is/are)",
      "options": [
        "is",
        "are",
        "બંને સાચા છે",
        "was"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Media' (medium નું બહુવચન) પછી 'is' (એક એકમ તરીકે) અને 'are' (વિવિધ માધ્યમો તરીકે) બંનેનો ઉપયોગ સ્વીકાર્ય છે, સંદર્ભ પર આધાર રાખે છે."
    },
    {
      "question": "A lot of ___ were caught in the net. (salmon)",
      "options": [
        "salmon",
        "salmons",
        "salmon's",
        "salmones"
      ],
      "answer": "salmon",
      "explanation": "ઘણી માછલીઓના નામની જેમ, 'salmon' નું એકવચન અને બહુવચન રૂપ સમાન હોય છે."
    },
    {
      "question": "The university has many different ___ of study. (syllabus)",
      "options": [
        "syllabus",
        "syllabuses",
        "syllabi",
        "B અને C બંને"
      ],
      "answer": "B અને C બંને",
      "explanation": "'Syllabus' માટે 'syllabuses' અને 'syllabi' બંને બહુવચન રૂપો સાચા છે."
    },
    {
      "question": "I need to wash my ___. (hair)",
      "options": [
        "hair",
        "hairs",
        "hair's",
        "haires"
      ],
      "answer": "hair",
      "explanation": "'Hair' સામાન્ય રીતે માથાના બધા વાળ માટે એક અગણ્ય સંજ્ઞા તરીકે વપરાય છે. 'Hairs' નો ઉપયોગ વાળના અમુક ચોક્કસ તંતુઓ માટે થાય છે."
    },
    {
      "question": "He gave me some good ___. (advice)",
      "options": [
        "advice",
        "advices",
        "advice's",
        "advises"
      ],
      "answer": "advice",
      "explanation": "'Advice' એક અગણ્ય સંજ્ઞા છે, તેથી તેનું બહુવચન નથી. બહુવચન માટે 'pieces of advice' વપરાય છે."
    }
  ],
  "test-18": [
    {
      "question": "'Bureau' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Bureaus",
        "Bureaux",
        "બંને સાચા છે",
        "Bureau's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "ફ્રેન્ચ મૂળના આ શબ્દ માટે 'Bureaus' (અંગ્રેજીકૃત) અને 'Bureaux' (મૂળ ફ્રેન્ચ) બંને બહુવચન રૂપો સાચા છે."
    },
    {
      "question": "'Focus' નું બહુવચન શું છે?",
      "options": [
        "Focusses",
        "Foci",
        "Focuses",
        "B અને C બંને"
      ],
      "answer": "B અને C બંને",
      "explanation": "'Focus' માટે 'Foci' (લેટિન) અને 'Focuses' (અંગ્રેજી) બંને બહુવચન રૂપો સ્વીકાર્ય છે."
    },
    {
      "question": "'Alumnus' (ભૂતપૂર્વ વિદ્યાર્થી - પુરુષ) નું બહુવચન શું છે?",
      "options": [
        "Alumnuses",
        "Alumni",
        "Alumnus's",
        "Alumnae"
      ],
      "answer": "Alumni",
      "explanation": "લેટિન મૂળની 'us' માં સમાપ્ત થતી આ સંજ્ઞાનું બહુવચન 'i' માં ફેરવીને 'Alumni' બને છે."
    },
    {
      "question": "'Alumna' (ભૂતપૂર્વ વિદ્યાર્થીની - સ્ત્રી) નું બહુવચન શું છે?",
      "options": [
        "Alumna",
        "Alumnas",
        "Alumnae",
        "Alumni"
      ],
      "answer": "Alumnae",
      "explanation": "લેટિન મૂળની 'a' માં સમાપ્ત થતી આ સંજ્ઞાનું બહુવચન 'ae' માં ફેરવીને 'Alumnae' બને છે."
    },
    {
      "question": "'Diagnosis' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Diagnosis",
        "Diagnoses",
        "Diagnosis's",
        "Diagnosi"
      ],
      "answer": "Diagnoses",
      "explanation": "ગ્રીક મૂળની 'is' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન 'es' માં ફેરવીને બને છે. (ઉચ્ચાર: ડાયગ્નો-સીઝ)"
    },
    {
      "question": "'Curriculum' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Curriculums",
        "Curricula",
        "બંને સાચા છે",
        "Curriculum's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Curriculum' માટે 'Curricula' (લેટિન) અને 'Curriculums' (અંગ્રેજી) બંને બહુવચન રૂપો સાચા છે."
    },
    {
      "question": "'Formula' નું બહુવચન શું છે?",
      "options": [
        "Formulas",
        "Formulae",
        "બંને સાચા છે",
        "Formula's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Formula' માટે 'Formulas' અને 'Formulae' બંને બહુવચન રૂપોનો ઉપયોગ થાય છે, જોકે 'Formulas' વધુ પ્રચલિત છે."
    },
    {
      "question": "'Nucleus' નું સાચું બહુવચન રૂપ પસંદ કરો.",
      "options": [
        "Nucleuses",
        "Nuclei",
        "Nucleus's",
        "Nuclea"
      ],
      "answer": "Nuclei",
      "explanation": "લેટિન મૂળની આ સંજ્ઞાનું બહુવચન 'us' ને 'i' માં ફેરવીને 'Nuclei' બને છે."
    },
    {
      "question": "'Terminus' શબ્દનું બહુવચન શું છે?",
      "options": [
        "Terminuses",
        "Termini",
        "બંને સાચા છે",
        "Terminus's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Terminus' માટે 'Termini' (લેટિન) અને 'Terminuses' (અંગ્રેજી) બંને રૂપો સાચા અને પ્રચલિત છે."
    },
    {
      "question": "'Matrix' નું બહુવચન શું છે?",
      "options": [
        "Matrixes",
        "Matrices",
        "Matrix's",
        "Matrici"
      ],
      "answer": "Matrices",
      "explanation": "લેટિન મૂળની 'ix' કે 'ex' માં સમાપ્ત થતી સંજ્ઞાઓનું બહુવચન 'ices' માં ફેરવીને બને છે."
    }
  ],
  "test-19": [
    {
      "question": "The ___ are sleeping. (baby)",
      "options": [
        "baby",
        "babys",
        "babies",
        "baby's"
      ],
      "answer": "babies",
      "explanation": "સંજ્ઞા 'baby' 'y' માં સમાપ્ત થાય છે અને તેની પહેલાં વ્યંજન 'b' છે, તેથી બહુવચન માટે 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "There are many ___ in the library. (book)",
      "options": [
        "book",
        "books",
        "bookes",
        "book's"
      ],
      "answer": "books",
      "explanation": "નિયમિત સંજ્ઞા 'book' નું બહુવચન 's' ઉમેરીને બને છે."
    },
    {
      "question": "She bought three ___. (dress)",
      "options": [
        "dress",
        "dresss",
        "dresses",
        "dress's"
      ],
      "answer": "dresses",
      "explanation": "'ss' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "The ___ are grazing in the meadow. (sheep)",
      "options": [
        "sheep",
        "sheeps",
        "sheep's",
        "a sheep"
      ],
      "answer": "sheep",
      "explanation": "'Sheep' શબ્દનું એકવચન અને બહુવચન રૂપ સમાન રહે છે."
    },
    {
      "question": "All the ___ passed the exam. (student)",
      "options": [
        "student",
        "students",
        "student's",
        "studentes"
      ],
      "answer": "students",
      "explanation": "નિયમિત સંજ્ઞા 'student' નું બહુવચન 's' ઉમેરીને થાય છે."
    },
    {
      "question": "The farmer keeps many ___ on his farm. (goose)",
      "options": [
        "goose",
        "gooses",
        "geese",
        "goose's"
      ],
      "answer": "geese",
      "explanation": "'Goose' નું અનિયમિત બહુવચન 'geese' છે."
    },
    {
      "question": "He has a pair of new ___. (shoe)",
      "options": [
        "shoe",
        "shoes",
        "shoees",
        "shoe's"
      ],
      "answer": "shoes",
      "explanation": "નિયમિત સંજ્ઞા 'shoe' નું બહુવચન 's' ઉમેરીને બને છે."
    },
    {
      "question": "The ___ are very tall. (man)",
      "options": [
        "man",
        "mans",
        "men",
        "man's"
      ],
      "answer": "men",
      "explanation": "'Man' નું અનિયમિત બહુવચન 'men' છે, જેમાં સ્વર બદલાય છે."
    },
    {
      "question": "We saw several ___ at the zoo. (monkey)",
      "options": [
        "monkey",
        "monkeys",
        "monkies",
        "monkey's"
      ],
      "answer": "monkeys",
      "explanation": "'y' માં સમાપ્ત થતી સંજ્ઞા 'monkey' ની પહેલાં સ્વર 'e' છે, તેથી ફક્ત 's' ઉમેરાય છે."
    },
    {
      "question": "Could you pass me the ___, please? (scissors)",
      "options": [
        "scissor",
        "scissors",
        "a scissor",
        "pair of scissor"
      ],
      "answer": "scissors",
      "explanation": "'Scissors' એ 'plural-only' સંજ્ઞા છે. તે હંમેશા બહુવચનમાં જ વપરાય છે કારણ કે તે બે ભાગોની બનેલી છે. એક કાતર માટે 'a pair of scissors' કહેવાય છે."
    }
  ],
  "test-20": [
    {
      "question": "He wears ___. (glasses)",
      "options": [
        "glass",
        "glasses",
        "a glass",
        "the glass"
      ],
      "answer": "glasses",
      "explanation": "'Glasses' (ચશ્મા) એ એક 'plural-only' સંજ્ઞા છે, જે હંમેશા બહુવચનમાં જ વપરાય છે."
    },
    {
      "question": "My ___ are old and torn. (jeans)",
      "options": [
        "jean",
        "jeans",
        "a jean",
        "the jean"
      ],
      "answer": "jeans",
      "explanation": "'Jeans' હંમેશા બહુવચનમાં જ વપરાય છે કારણ કે તે બે પગ માટે બનેલું હોય છે. એક જીન્સ માટે 'a pair of jeans' કહેવાય છે."
    },
    {
      "question": "The ___ are on the first floor. (goods)",
      "options": [
        "good",
        "goods",
        "a good",
        "the good"
      ],
      "answer": "goods",
      "explanation": "'Goods' (માલસામાન) શબ્દ હંમેશા બહુવચનમાં જ વપરાય છે."
    },
    {
      "question": "The company's ___ are in London. (headquarters)",
      "options": [
        "headquarter",
        "headquarters",
        "a headquarter",
        "the headquarter"
      ],
      "answer": "headquarters",
      "explanation": "'Headquarters' શબ્દ એકવચન અને બહુવચન બંનેમાં સમાન રહે છે, પરંતુ તે હંમેશા 's' સાથે જ લખાય છે."
    },
    {
      "question": "All ___ were present at the meeting. (staff)",
      "options": [
        "staff",
        "staffs",
        "a staff",
        "the staffs"
      ],
      "answer": "staff",
      "explanation": "'Staff' એક સામૂહિક સંજ્ઞા છે જે સામાન્ય રીતે એકવચનમાં જ રહે છે, ભલે તે ઘણા લોકોનો ઉલ્લેખ કરતી હોય."
    },
    {
      "question": "He made several ___ for his new house. (purchase)",
      "options": [
        "purchase",
        "purchases",
        "purchase's",
        "purchas"
      ],
      "answer": "purchases",
      "explanation": "'Purchase' (ખરીદી) એક ગણ્ય સંજ્ઞા છે, અને તેનું બહુવચન 'purchases' થાય છે."
    },
    {
      "question": "The police ___ investigating the case. (is/are)",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Police' એક સામૂહિક સંજ્ઞા છે જે હંમેશા બહુવચન તરીકે ગણાય છે, તેથી તેની સાથે 'are' વપરાય છે."
    },
    {
      "question": "Mathematics ___ my favorite subject. (is/are)",
      "options": [
        "is",
        "are",
        "have",
        "were"
      ],
      "answer": "is",
      "explanation": "જે વિષયોના નામ 'ics' માં સમાપ્ત થાય છે (દા.ત. Mathematics, Physics, Politics), તે સામાન્ય રીતે એકવચન ગણાય છે."
    },
    {
      "question": "The news ___ good. (is/are)",
      "options": [
        "is",
        "are",
        "have",
        "were"
      ],
      "answer": "is",
      "explanation": "'News' શબ્દ દેખાવમાં બહુવચન જેવો લાગે છે, પરંતુ તે એક અગણ્ય સંજ્ઞા છે અને હંમેશા એકવચન ક્રિયાપદ લે છે."
    },
    {
      "question": "Where are my ___? (trousers)",
      "options": [
        "trouser",
        "trousers",
        "a trouser",
        "the trouser"
      ],
      "answer": "trousers",
      "explanation": "'Trousers' (પેન્ટ) એ 'plural-only' સંજ્ઞા છે કારણ કે તે બે પગ માટે હોય છે. તે હંમેશા બહુવચનમાં જ વપરાય છે."
    }
  ],
  "test-21": [
    {
      "question": "'What are the ___ for joining the club?' (criterion)",
      "options": [
        "criterion",
        "criterions",
        "criteria",
        "criterias"
      ],
      "answer": "criteria",
      "explanation": "'Criterion' ગ્રીક મૂળનો શબ્દ છે, જેનું બહુવચન 'criteria' થાય છે."
    },
    {
      "question": "He has two ___, one in law and one in business. (brother-in-law)",
      "options": [
        "brother-in-laws",
        "brothers-in-law",
        "brothers-in-laws",
        "brother's-in-law"
      ],
      "answer": "brothers-in-law",
      "explanation": "સંયુક્ત સંજ્ઞામાં, મુખ્ય શબ્દ 'brother' ને બહુવચન બનાવવામાં આવે છે."
    },
    {
      "question": "The investigation revealed several strange ___. (phenomenon)",
      "options": [
        "phenomenon",
        "phenomenons",
        "phenomena",
        "phenomenas"
      ],
      "answer": "phenomena",
      "explanation": "ગ્રીક મૂળના 'on' માં સમાપ્ત થતા શબ્દ 'phenomenon' નું બહુવચન 'phenomena' છે."
    },
    {
      "question": "The ___ are migrating south for the winter. (goose)",
      "options": [
        "goose",
        "gooses",
        "geese",
        "geeses"
      ],
      "answer": "geese",
      "explanation": "'Goose' નું અનિયમિત બહુવચન 'geese' છે."
    },
    {
      "question": "We need to update the ___ in the book. (index)",
      "options": [
        "index",
        "indexes",
        "indices",
        "B અને C બંને"
      ],
      "answer": "B અને C બંને",
      "explanation": "સામાન્ય રીતે પુસ્તકો માટે 'indexes' વપરાય છે, જ્યારે 'indices' ગણિત અને વિજ્ઞાનમાં વધુ વપરાય છે. બંને સાચા છે."
    },
    {
      "question": "The house was infested with ___. (mouse)",
      "options": [
        "mouse",
        "mouses",
        "mice",
        "mices"
      ],
      "answer": "mice",
      "explanation": "'Mouse' નું અનિયમિત બહુવચન 'mice' છે."
    },
    {
      "question": "She has very clean ___. (tooth)",
      "options": [
        "tooth",
        "tooths",
        "teeth",
        "teeths"
      ],
      "answer": "teeth",
      "explanation": "'Tooth' નું અનિયમિત બહુવચન 'teeth' છે, જેમાં સ્વર બદલાય છે."
    },
    {
      "question": "There are many ___ in the ocean. (fish, of different kinds)",
      "options": [
        "fish",
        "fishes",
        "fish's",
        "fishies"
      ],
      "answer": "fishes",
      "explanation": "જ્યારે માછલીઓની જુદી જુદી પ્રજાતિઓનો ઉલ્લેખ કરવામાં આવે છે, ત્યારે 'fishes' શબ્દનો ઉપયોગ થાય છે."
    },
    {
      "question": "He shared many ___ from his childhood. (memory)",
      "options": [
        "memory",
        "memorys",
        "memories",
        "memory's"
      ],
      "answer": "memories",
      "explanation": "'y' માં સમાપ્ત થતી અને તેની પહેલાં વ્યંજન આવતી સંજ્ઞા 'memory' નું બહુવચન 'ies' માં ફેરવીને બને છે."
    },
    {
      "question": "This company has ___ all over the world. (bureau)",
      "options": [
        "bureau",
        "bureaus",
        "bureaux",
        "B અને C બંને"
      ],
      "answer": "B અને C બંને",
      "explanation": "ફ્રેન્ચ મૂળના આ શબ્દ માટે 'bureaus' અને 'bureaux' બંને બહુવચન રૂપો સાચા છે."
    }
  ],
  "test-22": [
    {
      "question": "The ___ are fighting over the cheese. (mouse)",
      "options": [
        "mouse",
        "mouses",
        "mice",
        "mices"
      ],
      "answer": "mice",
      "explanation": "આ એક અનિયમિત સંજ્ઞા છે. 'Mouse' નું બહુવચન 'mice' છે."
    },
    {
      "question": "I need to brush my ___. (tooth)",
      "options": [
        "tooth",
        "teeth",
        "tooths",
        "teeths"
      ],
      "answer": "teeth",
      "explanation": "'Tooth' નું અનિયમિત બહુવચન 'teeth' છે."
    },
    {
      "question": "The woods are full of ___. (wolf)",
      "options": [
        "wolf",
        "wolfs",
        "wolves",
        "wolfes"
      ],
      "answer": "wolves",
      "explanation": "મોટાભાગની સંજ્ઞાઓ જે 'f' માં સમાપ્ત થાય છે, તેમનું બહુવચન 'f' ને 'ves' માં ફેરવીને બને છે."
    },
    {
      "question": "He told the ___ a story. (child)",
      "options": [
        "child",
        "childs",
        "children",
        "child's"
      ],
      "answer": "children",
      "explanation": "'Child' નું અનિયમિત બહુવચન 'children' છે."
    },
    {
      "question": "There are many ___ in Africa. (person)",
      "options": [
        "person",
        "persons",
        "people",
        "peoples"
      ],
      "answer": "people",
      "explanation": "'Person' નું સૌથી સામાન્ય બહુવચન 'people' છે."
    },
    {
      "question": "She bought a dozen ___. (egg)",
      "options": [
        "egg",
        "eggs",
        "egges",
        "egg's"
      ],
      "answer": "eggs",
      "explanation": "આ એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન અંતમાં 's' ઉમેરીને બને છે."
    },
    {
      "question": "He has two ___. (watch)",
      "options": [
        "watch",
        "watchs",
        "watches",
        "watch's"
      ],
      "answer": "watches",
      "explanation": "જે સંજ્ઞા 'ch' માં સમાપ્ત થાય છે, તેનું બહુવચન 'es' ઉમેરીને બને છે."
    },
    {
      "question": "The ___ are flying in a V-formation. (goose)",
      "options": [
        "goose",
        "gooses",
        "geese",
        "geeses"
      ],
      "answer": "geese",
      "explanation": "'Goose' નું અનિયમિત બહુવચન 'geese' છે."
    },
    {
      "question": "All the ___ were open. (window)",
      "options": [
        "window",
        "windows",
        "windowes",
        "window's"
      ],
      "answer": "windows",
      "explanation": "આ એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન અંતમાં 's' ઉમેરીને બને છે."
    },
    {
      "question": "Please wash the ___. (potato)",
      "options": [
        "potato",
        "potatos",
        "potatoes",
        "potato's"
      ],
      "answer": "potatoes",
      "explanation": "જ્યારે સંજ્ઞા 'o' માં સમાપ્ત થાય અને તેની પહેલાં વ્યંજન હોય, ત્યારે 'es' ઉમેરવામાં આવે છે."
    }
  ],
  "test-23": [
    {
      "question": "The professor's lecture was based on several ___. (hypothesis)",
      "options": [
        "hypothesis",
        "hypothesises",
        "hypotheses",
        "hypothesis's"
      ],
      "answer": "hypotheses",
      "explanation": "ગ્રીક મૂળની સંજ્ઞા 'hypothesis' જે 'is' માં સમાપ્ત થાય છે, તેનું બહુવચન 'hypotheses' થાય છે."
    },
    {
      "question": "The band has several hit ___. (tunes)",
      "options": [
        "tune",
        "tunes",
        "tune's",
        "tunies"
      ],
      "answer": "tunes",
      "explanation": "'Tune' એ નિયમિત સંજ્ઞા છે, જેનું બહુવચન અંતમાં 's' ઉમેરીને બને છે."
    },
    {
      "question": "He is one of the many ___ who applied for the job. (passer-by)",
      "options": [
        "passer-by",
        "passer-bys",
        "passers-by",
        "passers-bys"
      ],
      "answer": "passers-by",
      "explanation": "સંયુક્ત સંજ્ઞા 'passer-by' માં મુખ્ય શબ્દ 'passer' ને બહુવચન બનાવવામાં આવે છે."
    },
    {
      "question": "I have two ___ working in my garden. (man-servant)",
      "options": [
        "man-servants",
        "men-servant",
        "men-servants",
        "mans-servants"
      ],
      "answer": "men-servants",
      "explanation": "જ્યારે સંયુક્ત સંજ્ઞા 'man' અથવા 'woman' થી બનેલી હોય, ત્યારે બંને ભાગોને બહુવચનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "The desert has many ___. (oasis)",
      "options": [
        "oasis",
        "oasises",
        "oases",
        "oasis's"
      ],
      "answer": "oases",
      "explanation": "ગ્રીક મૂળની 'is' માં સમાપ્ત થતી સંજ્ઞા 'oasis' નું બહુવચન 'oases' છે."
    },
    {
      "question": "I need to file these ___. (document)",
      "options": [
        "document",
        "documents",
        "documentes",
        "document's"
      ],
      "answer": "documents",
      "explanation": "'Document' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને થાય છે."
    },
    {
      "question": "There are many active ___ in the world. (volcano)",
      "options": [
        "volcano",
        "volcanos",
        "volcanoes",
        "B અને C બંને"
      ],
      "answer": "B અને C બંને",
      "explanation": "'Volcano' માટે 'volcanoes' અને 'volcanos' બંને બહુવચન રૂપો સાચા છે."
    },
    {
      "question": "The bookshelf has five ___. (shelf)",
      "options": [
        "shelf",
        "shelfs",
        "shelves",
        "shelf's"
      ],
      "answer": "shelves",
      "explanation": "'f' માં સમાપ્ત થતી સંજ્ઞા 'shelf' નું બહુવચન 'shelves' છે."
    },
    {
      "question": "She works with many different ___ in her job. (personnel)",
      "options": [
        "personnel",
        "personnels",
        "personnel's",
        "a personnel"
      ],
      "answer": "personnel",
      "explanation": "'Personnel' (કર્મચારીગણ) એક સામૂહિક સંજ્ઞા છે અને તે હંમેશા બહુવચનનો અર્થ દર્શાવે છે, પરંતુ તે પોતે એકવચનમાં રહે છે."
    },
    {
      "question": "The conference was attended by many Nobel ___. (laureate)",
      "options": [
        "laureate",
        "laureates",
        "laureate's",
        "laureats"
      ],
      "answer": "laureates",
      "explanation": "'Laureate' એક નિયમિત સંજ્ઞા છે. તેનું બહુવચન 's' ઉમેરીને 'laureates' થાય છે."
    }
  ],
  "test-24": [
    {
      "question": "The ___ of the equation are x=2 and y=3. (value)",
      "options": [
        "value",
        "values",
        "value's",
        "valua"
      ],
      "answer": "values",
      "explanation": "'Value' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને બને છે."
    },
    {
      "question": "He collects old ___. (radio)",
      "options": [
        "radio",
        "radios",
        "radioes",
        "radio's"
      ],
      "answer": "radios",
      "explanation": "જ્યારે સંજ્ઞા 'o' માં સમાપ્ત થાય અને તેની પહેલાં સ્વર હોય, ત્યારે ફક્ત 's' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "The bakery sells different types of ___. (bread)",
      "options": [
        "bread",
        "breads",
        "bread's",
        "breades"
      ],
      "answer": "breads",
      "explanation": "સામાન્ય રીતે 'bread' અગણ્ય છે, પરંતુ જ્યારે જુદા જુદા પ્રકારની બ્રેડની વાત થાય ત્યારે 'breads' નો ઉપયોગ થાય છે."
    },
    {
      "question": "All ___ must be submitted by Friday. (appendix)",
      "options": [
        "appendix",
        "appendixes",
        "appendices",
        "B અને C બંને"
      ],
      "answer": "B અને C બંને",
      "explanation": "'Appendix' માટે 'appendices' અને 'appendixes' બંને બહુવચન રૂપો સાચા છે."
    },
    {
      "question": "The garden is full of ___. (butterfly)",
      "options": [
        "butterfly",
        "butterflys",
        "butterflies",
        "butterfly's"
      ],
      "answer": "butterflies",
      "explanation": "'y' માં સમાપ્ત થતી અને તેની પહેલાં વ્યંજન આવતી સંજ્ઞા 'butterfly' નું બહુવચન 'ies' માં ફેરવીને બને છે."
    },
    {
      "question": "These are the ___ of my research. (finding)",
      "options": [
        "finding",
        "findings",
        "finding's",
        "finds"
      ],
      "answer": "findings",
      "explanation": "'Finding' (શોધ) નું બહુવચન 'findings' (તારણો) થાય છે, જે સંશોધનના પરિણામોનો ઉલ્લેખ કરે છે."
    },
    {
      "question": "He has pain in his ___. (foot)",
      "options": [
        "foot",
        "feet",
        "foots",
        "feets"
      ],
      "answer": "feet",
      "explanation": "જોકે અહીં 'his feet' (તેના પગ) હોઈ શકે, પણ જો એક પગમાં દુખાવો હોય તો 'foot' પણ સાચું હોઈ શકે. પણ બહુવચન માટે 'feet' જ આવે."
    },
    {
      "question": "The teacher gave us a lot of ___. (homework)",
      "options": [
        "homework",
        "homeworks",
        "homework's",
        "a homework"
      ],
      "answer": "homework",
      "explanation": "'Homework' એક અગણ્ય સંજ્ઞા છે, તેથી તેનું બહુવચન રૂપ નથી હોતું."
    },
    {
      "question": "There are no ___ in this area. (bus)",
      "options": [
        "bus",
        "buss",
        "buses",
        "busses"
      ],
      "answer": "buses",
      "explanation": "'s' માં સમાપ્ત થતી સંજ્ઞા 'bus' નું બહુવચન 'buses' અથવા 'busses' હોઈ શકે છે, પરંતુ 'buses' વધુ પ્રચલિત છે."
    },
    {
      "question": "All my ___ is packed. (luggage)",
      "options": [
        "luggage",
        "luggages",
        "luggage's",
        "a luggage"
      ],
      "answer": "luggage",
      "explanation": "'Luggage' એક અગણ્ય સંજ્ઞા છે, અને તેનું બહુવચન રૂપ નથી હોતું."
    }
  ],
  "test-25": [
    {
      "question": "The ___ are the basis of our legal system. (law)",
      "options": [
        "law",
        "laws",
        "lawes",
        "law's"
      ],
      "answer": "laws",
      "explanation": "'Law' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને બને છે."
    },
    {
      "question": "He has a lot of ___ to do. (work)",
      "options": [
        "work",
        "works",
        "work's",
        "workes"
      ],
      "answer": "work",
      "explanation": "'Work' (કામ) સામાન્ય રીતે અગણ્ય સંજ્ઞા છે. 'Works' નો અર્થ 'કૃતિઓ' (દા.ત., works of art) થાય છે."
    },
    {
      "question": "There are many ___ of music. (genre)",
      "options": [
        "genre",
        "genres",
        "genre's",
        "genries"
      ],
      "answer": "genres",
      "explanation": "'Genre' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને 'genres' બને છે."
    },
    {
      "question": "The city has many historical ___. (monument)",
      "options": [
        "monument",
        "monuments",
        "monument's",
        "monumentes"
      ],
      "answer": "monuments",
      "explanation": "'Monument' એક નિયમિત સંજ્ઞા છે અને તેનું બહુવચન 'monuments' છે."
    },
    {
      "question": "She has several ___ about the project. (query)",
      "options": [
        "query",
        "querys",
        "queries",
        "query's"
      ],
      "answer": "queries",
      "explanation": "'y' માં સમાપ્ત થતી અને તેની પહેલાં વ્યંજન આવતી સંજ્ઞા 'query' નું બહુવચન 'ies' માં ફેરવીને બને છે."
    },
    {
      "question": "The farmer sold all his ___. (cattle)",
      "options": [
        "cattle",
        "cattles",
        "cattle's",
        "a cattle"
      ],
      "answer": "cattle",
      "explanation": "'Cattle' (ઢોર) એક સામૂહિક સંજ્ઞા છે જે હંમેશા બહુવચન તરીકે વર્તે છે, પણ તેના અંતમાં 's' લાગતું નથી."
    },
    {
      "question": "The two ___ signed the treaty. (country)",
      "options": [
        "country",
        "countrys",
        "countries",
        "country's"
      ],
      "answer": "countries",
      "explanation": "'y' પહેલાં વ્યંજન 'r' હોવાથી, 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "I ate two ___ of pizza. (slice)",
      "options": [
        "slice",
        "slices",
        "slice's",
        "slicen"
      ],
      "answer": "slices",
      "explanation": "'Slice' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને બને છે."
    },
    {
      "question": "We need new ___ for the printer. (cartridge)",
      "options": [
        "cartridge",
        "cartridges",
        "cartridge's",
        "cartridgies"
      ],
      "answer": "cartridges",
      "explanation": "'Cartridge' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને 'cartridges' થાય છે."
    },
    {
      "question": "There are different ___ in the database. (matrix)",
      "options": [
        "matrix",
        "matrixes",
        "matrices",
        "matrix's"
      ],
      "answer": "matrices",
      "explanation": "લેટિન મૂળની 'ix' માં સમાપ્ત થતી સંજ્ઞા 'matrix' નું બહુવચન 'matrices' થાય છે."
    }
  ],
  "test-26": [
    {
      "question": "'Spoonful' નું બહુવચન શું છે?",
      "options": [
        "Spoonsful",
        "Spoonfuls",
        "Spoonsfull",
        "Spoonful's"
      ],
      "answer": "Spoonfuls",
      "explanation": "'-ful' માં સમાપ્ત થતી સંયુક્ત સંજ્ઞાઓનું બહુવચન અંતમાં 's' ઉમેરીને બને છે."
    },
    {
      "question": "'Handful' નું બહુવચન શું છે?",
      "options": [
        "Handsful",
        "Handfuls",
        "Handfulls",
        "Handful's"
      ],
      "answer": "Handfuls",
      "explanation": "'-ful' માં સમાપ્ત થતી સંજ્ઞાનું બહુવચન અંતમાં 's' ઉમેરીને 'Handfuls' બને છે."
    },
    {
      "question": "'Mouse' નું બહુવચન શું છે?",
      "options": [
        "Mouses",
        "Mice",
        "Mices",
        "Mouse's"
      ],
      "answer": "Mice",
      "explanation": "'Mouse' નું અનિયમિત બહુવચન 'Mice' છે."
    },
    {
      "question": "'Person' નું સૌથી સામાન્ય બહુવચન શું છે?",
      "options": [
        "Persons",
        "People",
        "Peoples",
        "Person's"
      ],
      "answer": "People",
      "explanation": "સામાન્ય રીતે, લોકોના સમૂહ માટે 'people' શબ્દનો ઉપયોગ થાય છે. 'Persons' ઔપચારિક છે."
    },
    {
      "question": "'Fungus' નું બહુવચન રૂપ શું છે?",
      "options": [
        "Funguses",
        "Fungi",
        "બંને સાચા છે",
        "Fungus's"
      ],
      "answer": "બંને સાચા છે",
      "explanation": "'Fungus' માટે 'Fungi' (લેટિન) અને 'Funguses' (અંગ્રેજી) બંને બહુવચન રૂપો સાચા છે."
    },
    {
      "question": "'Means' (સાધન) શબ્દનું એકવચન શું છે?",
      "options": [
        "Mean",
        "Means",
        "Meen",
        "Meanes"
      ],
      "answer": "Means",
      "explanation": "'Means' શબ્દ એકવચન અને બહુવચન બંનેમાં સમાન રીતે વપરાય છે (a means of transport, many means of transport)."
    },
    {
      "question": "The ___ are against you. (odds)",
      "options": [
        "odd",
        "odds",
        "odd's",
        "oddes"
      ],
      "answer": "odds",
      "explanation": "'Odds' (સંભાવના) શબ્દ હંમેશા બહુવચનમાં વપરાય છે અને બહુવચન ક્રિયાપદ લે છે."
    },
    {
      "question": "He studies the ___ of birds. (life)",
      "options": [
        "life",
        "lifes",
        "lives",
        "life's"
      ],
      "answer": "lives",
      "explanation": "'Life' નું બહુવચન 'lives' છે. અહીં પક્ષીઓના જીવનનો ઉલ્લેખ છે."
    },
    {
      "question": "There are several ___ to consider. (point)",
      "options": [
        "point",
        "points",
        "pointes",
        "point's"
      ],
      "answer": "points",
      "explanation": "આ એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન અંતમાં 's' ઉમેરીને બને છે."
    },
    {
      "question": "She bought two ___ of milk. (carton)",
      "options": [
        "carton",
        "cartons",
        "cartones",
        "carton's"
      ],
      "answer": "cartons",
      "explanation": "'Carton' એક નિયમિત સંજ્ઞા છે અને તેનું બહુવચન 'cartons' છે."
    }
  ],
  "test-27": [
    {
      "question": "Billiards ___ my favorite game. (is/are)",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "જે રમતોના નામ 's' માં સમાપ્ત થાય છે (Billiards, Darts, Dominoes), તે સામાન્ય રીતે એકવચન ગણાય છે."
    },
    {
      "question": "Measles ___ a contagious disease. (is/are)",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "કેટલાક રોગોના નામ જે 's' માં સમાપ્ત થાય છે (Measles, Mumps), તે એકવચન ગણાય છે."
    },
    {
      "question": "The government's ___ is to reduce taxes. (policy)",
      "options": [
        "policy",
        "policys",
        "policies",
        "policy's"
      ],
      "answer": "policies",
      "explanation": "જો એક કરતાં વધુ નીતિ હોય તો 'policies' આવે. વાક્યમાં 'is' છે, જે એકવચન દર્શાવે છે, પણ જો સરકારની ઘણી નીતિઓ હોય તો બહુવચન પણ આવી શકે. અહીં 'policies' વિકલ્પ તરીકે યોગ્ય છે."
    },
    {
      "question": "The company published its annual ___. (report)",
      "options": [
        "report",
        "reports",
        "reportes",
        "report's"
      ],
      "answer": "reports",
      "explanation": "જો કંપની ઘણા અહેવાલો પ્રકાશિત કરતી હોય, તો 'reports' સાચો જવાબ છે. જો એક જ હોય તો 'report' આવે."
    },
    {
      "question": "She has many ___ in her garden. (lily)",
      "options": [
        "lily",
        "lilys",
        "lilies",
        "lily's"
      ],
      "answer": "lilies",
      "explanation": "'y' માં સમાપ્ત થતી અને તેની પહેલાં વ્યંજન આવતી સંજ્ઞા 'lily' નું બહુવચન 'ies' માં ફેરવીને બને છે."
    },
    {
      "question": "The children are chasing the ___. (butterfly)",
      "options": [
        "butterfly",
        "butterflys",
        "butterflies",
        "butterfly's"
      ],
      "answer": "butterflies",
      "explanation": "'y' પહેલાં વ્યંજન 'l' હોવાથી, 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "He has a lot of expensive ___. (equipment)",
      "options": [
        "equipment",
        "equipments",
        "equipment's",
        "an equipment"
      ],
      "answer": "equipment",
      "explanation": "'Equipment' એક અગણ્ય સંજ્ઞા છે અને તેનું બહુવચન રૂપ નથી હોતું."
    },
    {
      "question": "My ___ are in the drawer. (sock)",
      "options": [
        "sock",
        "socks",
        "sockes",
        "sock's"
      ],
      "answer": "socks",
      "explanation": "જોડીમાં આવતી વસ્તુઓ માટે બહુવચન વપરાય છે. 'Socks' (મોજાં)."
    },
    {
      "question": "There are many ___ in this field. (opportunity)",
      "options": [
        "opportunity",
        "opportunitys",
        "opportunities",
        "opportunity's"
      ],
      "answer": "opportunities",
      "explanation": "'y' પહેલાં વ્યંજન 't' હોવાથી, 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "The ___ are eating grass. (buffalo)",
      "options": [
        "buffalo",
        "buffalos",
        "buffaloes",
        "B અને C બંને"
      ],
      "answer": "B અને C બંને",
      "explanation": "'Buffalo' માટે 'buffaloes' અને 'buffalos' બંને બહુવચન રૂપો સાચા છે."
    }
  ],
  "test-28": [
    {
      "question": "The teacher gave the students several ___. (quiz)",
      "options": [
        "quiz",
        "quizes",
        "quizzes",
        "quiz's"
      ],
      "answer": "quizzes",
      "explanation": "જ્યારે સંજ્ઞા 'z' માં સમાપ્ત થાય, ત્યારે બહુવચન માટે અંતિમ વ્યંજનને બમણો કરી 'es' ઉમેરવામાં આવે છે."
    },
    {
      "question": "He wrote a book about the ___ of famous people. (life)",
      "options": [
        "life",
        "lifes",
        "lives",
        "life's"
      ],
      "answer": "lives",
      "explanation": "'Life' નું બહુવચન 'lives' છે, જેનો અર્થ 'જીવન' થાય છે."
    },
    {
      "question": "The police have gathered many ___ of evidence. (piece)",
      "options": [
        "piece",
        "pieces",
        "piece's",
        "piecen"
      ],
      "answer": "pieces",
      "explanation": "'Piece' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને 'pieces' બને છે."
    },
    {
      "question": "The two ___ shook hands. (chief)",
      "options": [
        "chief",
        "chiefs",
        "chieves",
        "chief's"
      ],
      "answer": "chiefs",
      "explanation": "'Chief' એ 'f' માં સમાપ્ત થતા નિયમનો અપવાદ છે. તેનું બહુવચન ફક્ત 's' ઉમેરીને બને છે."
    },
    {
      "question": "The wedding was attended by all their ___. (family)",
      "options": [
        "family",
        "familys",
        "families",
        "family's"
      ],
      "answer": "families",
      "explanation": "જ્યારે જુદા જુદા પરિવારોનો ઉલ્લેખ હોય ત્યારે 'families' વપરાય છે. જો એક જ પરિવારના સભ્યોની વાત હોય, તો 'family' (સામૂહિક સંજ્ઞા તરીકે) વપરાય."
    },
    {
      "question": "We need to set up the ___ for the party. (stereo)",
      "options": [
        "stereo",
        "stereos",
        "stereoes",
        "stereo's"
      ],
      "answer": "stereos",
      "explanation": "જ્યારે સંજ્ઞા 'o' માં સમાપ્ત થાય અને તેની પહેલાં સ્વર હોય, ત્યારે ફક્ત 's' ઉમેરીને બહુવચન બને છે."
    },
    {
      "question": "She bought some fresh ___ at the market. (fruit)",
      "options": [
        "fruit",
        "fruits",
        "fruit's",
        "fruites"
      ],
      "answer": "fruits",
      "explanation": "સામાન્ય રીતે 'fruit' અગણ્ય છે, પરંતુ જ્યારે જુદા જુદા પ્રકારના ફળોની વાત હોય ત્યારે 'fruits' નો ઉપયોગ થાય છે."
    },
    {
      "question": "He has strong ___. (belief)",
      "options": [
        "belief",
        "beliefs",
        "believes",
        "belief's"
      ],
      "answer": "beliefs",
      "explanation": "'Belief' એ 'f' માં સમાપ્ત થતા નિયમનો અપવાદ છે. તેનું બહુવચન 'beliefs' છે."
    },
    {
      "question": "The waves crashed against the ___. (cliff)",
      "options": [
        "cliff",
        "cliffs",
        "clives",
        "cliff's"
      ],
      "answer": "cliffs",
      "explanation": "જ્યારે સંજ્ઞા 'ff' માં સમાપ્ત થાય છે, ત્યારે ફક્ત 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "A group of ___ were laughing loudly. (woman)",
      "options": [
        "woman",
        "womans",
        "women",
        "woman's"
      ],
      "answer": "women",
      "explanation": "'Woman' નું અનિયમિત બહુવચન 'women' છે."
    }
  ],
  "test-29": [
    {
      "question": "There are many ___ on the Christmas tree. (light)",
      "options": [
        "light",
        "lights",
        "lightes",
        "light's"
      ],
      "answer": "lights",
      "explanation": "'Light' (પ્રકાશ) અગણ્ય છે, પરંતુ 'lights' (બલ્બ, દીવા) ગણ્ય છે. અહીં બહુવચન 'lights' સાચું છે."
    },
    {
      "question": "She has visited many ___ in Europe. (country)",
      "options": [
        "country",
        "countrys",
        "countries",
        "country's"
      ],
      "answer": "countries",
      "explanation": "'y' પહેલાં વ્યંજન 'r' હોવાથી, 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "The building has ten ___. (story - માળ)",
      "options": [
        "story",
        "storys",
        "stories",
        "storeys"
      ],
      "answer": "storeys",
      "explanation": "જ્યારે 'story' નો અર્થ 'માળ' થાય, ત્યારે તેનું બહુવચન 'storeys' (બ્રિટિશ અંગ્રેજી) અથવા 'stories' (અમેરિકન અંગ્રેજી) થાય છે. બંને સાચા છે."
    },
    {
      "question": "He has a lot of practical ___. (knowledge)",
      "options": [
        "knowledge",
        "knowledges",
        "knowledge's",
        "a knowledge"
      ],
      "answer": "knowledge",
      "explanation": "'Knowledge' (જ્ઞાન) એક અગણ્ય સંજ્ઞા છે, તેથી તેનું બહુવચન રૂપ નથી હોતું."
    },
    {
      "question": "All the ___ are playing in the park. (child)",
      "options": [
        "child",
        "childs",
        "children",
        "childrens"
      ],
      "answer": "children",
      "explanation": "'Child' નું અનિયમિત બહુવચન 'children' છે. 'Childrens' ખોટું છે."
    },
    {
      "question": "He is afraid of ___. (mouse)",
      "options": [
        "mouse",
        "mouses",
        "mice",
        "mices"
      ],
      "answer": "mice",
      "explanation": "'Mouse' નું અનિયમિત બહુવચન 'mice' છે."
    },
    {
      "question": "I need two ___ of paper. (sheet)",
      "options": [
        "sheet",
        "sheets",
        "sheet's",
        "sheetes"
      ],
      "answer": "sheets",
      "explanation": "'Sheet' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને 'sheets' બને છે."
    },
    {
      "question": "The ___ are buzzing around the flowers. (bee)",
      "options": [
        "bee",
        "bees",
        "beese",
        "bee's"
      ],
      "answer": "bees",
      "explanation": "'Bee' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને બને છે."
    },
    {
      "question": "The company has two ___. (CEO)",
      "options": [
        "CEO",
        "CEOs",
        "CEO's",
        "CEOS"
      ],
      "answer": "CEOs",
      "explanation": "સંક્ષિપ્ત શબ્દો (Acronyms) નું બહુવચન બનાવવા માટે સામાન્ય રીતે નાના અક્ષરમાં 's' ઉમેરવામાં આવે છે."
    },
    {
      "question": "She received many ___ for her birthday. (present)",
      "options": [
        "present",
        "presents",
        "present's",
        "presentes"
      ],
      "answer": "presents",
      "explanation": "'Present' (ભેટ) એક નિયમિત સંજ્ઞા છે, અને તેનું બહુવચન 'presents' છે."
    }
  ],
  "test-30": [
    {
      "question": "The baker baked a few ___ of bread. (loaf)",
      "options": [
        "loaf",
        "loafs",
        "loaves",
        "loaf's"
      ],
      "answer": "loaves",
      "explanation": "'f' માં સમાપ્ત થતી સંજ્ઞા 'loaf' નું બહુવચન 'loaves' છે."
    },
    {
      "question": "We need to set the table with ___. (fork and knife)",
      "options": [
        "forks and knifes",
        "forks and knives",
        "forkes and knives",
        "fork and knifes"
      ],
      "answer": "forks and knives",
      "explanation": "'Fork' નું બહુવચન 'forks' અને 'knife' નું બહુવચન 'knives' છે."
    },
    {
      "question": "There are many ___ in this area. (opportunity)",
      "options": [
        "opportunity",
        "opportunitys",
        "opportunities",
        "opportunity's"
      ],
      "answer": "opportunities",
      "explanation": "'y' પહેલાં વ્યંજન 't' હોવાથી, 'y' ને 'ies' માં ફેરવવામાં આવે છે."
    },
    {
      "question": "My ___ are hurting. (feet)",
      "options": [
        "foot",
        "feet",
        "foots",
        "feets"
      ],
      "answer": "feet",
      "explanation": "આ વાક્યમાં 'are' બહુવચન ક્રિયાપદ છે, તેથી બહુવચન સંજ્ઞા 'feet' સાચો જવાબ છે."
    },
    {
      "question": "He has a collection of rare ___. (coin)",
      "options": [
        "coin",
        "coins",
        "coines",
        "coin's"
      ],
      "answer": "coins",
      "explanation": "'Coin' એક નિયમિત સંજ્ઞા છે, જેનું બહુવચન 's' ઉમેરીને 'coins' થાય છે."
    },
    {
      "question": "The test will cover several ___. (topic)",
      "options": [
        "topic",
        "topics",
        "topices",
        "topic's"
      ],
      "answer": "topics",
      "explanation": "'Topic' એક નિયમિત સંજ્ઞા છે. તેનું બહુવચન 'topics' છે."
    },
    {
      "question": "The company has many ___. (employee)",
      "options": [
        "employee",
        "employees",
        "employee's",
        "employes"
      ],
      "answer": "employees",
      "explanation": "'Employee' એક નિયમિત સંજ્ઞા છે અને તેનું બહુવચન 's' ઉમેરીને 'employees' બને છે."
    },
    {
      "question": "She told her children many bedtime ___. (story)",
      "options": [
        "story",
        "storys",
        "stories",
        "story's"
      ],
      "answer": "stories",
      "explanation": "'y' માં સમાપ્ત થતી અને તેની પહેલાં વ્યંજન આવતી સંજ્ઞા 'story' નું બહુવચન 'ies' માં ફેરવીને બને છે."
    },
    {
      "question": "There are two ___ in the word 'book'. (o)",
      "options": [
        "o",
        "os",
        "o's",
        "oes"
      ],
      "answer": "o's",
      "explanation": "જ્યારે અક્ષરો, સંખ્યાઓ અથવા સંજ્ઞા તરીકે વપરાતા શબ્દોનું બહુવચન બનાવવું હોય, ત્યારે apostrophe અને 's' ('s) નો ઉપયોગ થાય છે."
    },
    {
      "question": "Mind your p's and ___. (q)",
      "options": [
        "q",
        "qs",
        "q's",
        "qes"
      ],
      "answer": "q's",
      "explanation": "અક્ષરોનું બહુવચન બનાવવા માટે, સામાન્ય રીતે apostrophe અને 's' નો ઉપયોગ થાય છે જેથી ગેરસમજ ન થાય."
    }
  ]
};
