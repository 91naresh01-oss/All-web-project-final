import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "In the sentence 'The quick <b>brown</b> fox jumps over the lazy dog', what part of speech is 'brown'?",
      "options": [
        "Noun",
        "Verb",
        "Adjective",
        "Adverb"
      ],
      "answer": "Adjective",
      "explanation": "‘brown’ એ 'fox' (નામ) ના અર્થમાં વધારો કરે છે, તેથી તે Adjective (વિશેષણ) છે."
    },
    {
      "question": "Identify the noun in the sentence: '<b>Honesty</b> is the best policy.'",
      "options": [
        "is",
        "the",
        "best",
        "Honesty"
      ],
      "answer": "Honesty",
      "explanation": "'Honesty' (પ્રામાણિકતા) એ એક ભાવવાચક નામ (Abstract Noun) છે."
    },
    {
      "question": "What is the part of speech for '<b>quickly</b>' in 'He finished the race quickly'?",
      "options": [
        "Adjective",
        "Verb",
        "Adverb",
        "Preposition"
      ],
      "answer": "Adverb",
      "explanation": "'quickly' (ઝડપથી) એ 'finished' (ક્રિયાપદ) કેવી રીતે થયું તે દર્શાવે છે, તેથી તે Adverb (ક્રિયાવિશેષણ) છે."
    },
    {
      "question": "Which word is the pronoun in the sentence: '<b>She</b> went to the market.'?",
      "options": [
        "went",
        "to",
        "She",
        "market"
      ],
      "answer": "She",
      "explanation": "'She' (તેણી) એ કોઈ સ્ત્રીના નામને બદલે વપરાયેલ શબ્દ છે, તેથી તે Pronoun (સર્વનામ) છે."
    },
    {
      "question": "In 'The cat is sleeping <b>under</b> the table', 'under' is a...",
      "options": [
        "Conjunction",
        "Preposition",
        "Adverb",
        "Interjection"
      ],
      "answer": "Preposition",
      "explanation": "'under' (નીચે) એ 'cat' અને 'table' વચ્ચેનો સ્થાન સંબંધ દર્શાવે છે, તેથી તે Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "Find the verb in the sentence: 'Birds <b>fly</b> in the sky.'",
      "options": [
        "Birds",
        "in",
        "sky",
        "fly"
      ],
      "answer": "fly",
      "explanation": "'fly' (ઉડવું) એ પક્ષીઓ દ્વારા થતી ક્રિયા દર્શાવે છે, તેથી તે Verb (ક્રિયાપદ) છે."
    },
    {
      "question": "What part of speech is '<b>but</b>' in 'I wanted to go, but I was tired'?",
      "options": [
        "Adverb",
        "Preposition",
        "Conjunction",
        "Pronoun"
      ],
      "answer": "Conjunction",
      "explanation": "'but' (પણ) એ બે સ્વતંત્ર વાક્યોને જોડે છે, તેથી તે Conjunction (સંયોજક) છે."
    },
    {
      "question": "'<b>Wow!</b> That's a beautiful painting.' What is 'Wow!'?",
      "options": [
        "Noun",
        "Verb",
        "Interjection",
        "Adjective"
      ],
      "answer": "Interjection",
      "explanation": "'Wow!' એ આશ્ચર્યની લાગણી વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection (ઉદ્ગારવાચક અવ્યય) છે."
    },
    {
      "question": "Identify the adjective in: 'He is a <b>brave</b> soldier.'",
      "options": [
        "He",
        "is",
        "a",
        "brave"
      ],
      "answer": "brave",
      "explanation": "'brave' (બહાદુર) એ 'soldier' (નામ) ના ગુણનું વર્ણન કરે છે, તેથી તે Adjective (વિશેષણ) છે."
    },
    {
      "question": "In the sentence 'I <b>myself</b> saw him do it', what is 'myself'?",
      "options": [
        "Noun",
        "Pronoun",
        "Adjective",
        "Adverb"
      ],
      "answer": "Pronoun",
      "explanation": "'myself' એ ભારપૂર્વક કહેવા માટે વપરાતું સર્વનામ (Emphatic Pronoun) છે."
    }
  ],
  "test-2": [
    {
      "question": "What part of speech is '<b>and</b>' in the sentence 'Ram and Shyam are brothers'?",
      "options": [
        "Preposition",
        "Conjunction",
        "Adverb",
        "Verb"
      ],
      "answer": "Conjunction",
      "explanation": "'and' (અને) એ 'Ram' અને 'Shyam' એ બે શબ્દોને જોડે છે, તેથી તે Conjunction (સંયોજક) છે."
    },
    {
      "question": "Identify the verb in the sentence: 'The baby <b>is crying</b> loudly.'",
      "options": [
        "baby",
        "is crying",
        "loudly",
        "The"
      ],
      "answer": "is crying",
      "explanation": "'is crying' (રડી રહ્યું છે) એ વાક્યમાં થતી ક્રિયા દર્શાવે છે, તેથી તે Verb (ક્રિયાપદ) છે."
    },
    {
      "question": "In 'The flowers smell <b>sweet</b>', what part of speech is 'sweet'?",
      "options": [
        "Adverb",
        "Adjective",
        "Noun",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'sweet' (મધુર) એ 'flowers' (નામ) ની સુગંધનું વર્ણન કરે છે, તેથી તે Adjective (વિશેષણ) છે."
    },
    {
      "question": "Which word is a preposition in 'He jumped <b>into</b> the river'?",
      "options": [
        "He",
        "jumped",
        "into",
        "river"
      ],
      "answer": "into",
      "explanation": "'into' (માં) એ 'he' અને 'river' વચ્ચે ગતિ અને સ્થાનનો સંબંધ દર્શાવે છે, તેથી તે Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "What part of speech is '<b>they</b>' in 'They are playing cricket'?",
      "options": [
        "Noun",
        "Pronoun",
        "Adjective",
        "Verb"
      ],
      "answer": "Pronoun",
      "explanation": "'they' (તેઓ) એ એક કરતાં વધુ લોકોના નામને બદલે વપરાયેલું સર્વનામ છે."
    },
    {
      "question": "Identify the adverb: 'She sings <b>beautifully</b>.'",
      "options": [
        "She",
        "sings",
        "beautifully",
        "None of the above"
      ],
      "answer": "beautifully",
      "explanation": "'beautifully' (સુંદર રીતે) એ 'sings' (ક્રિયાપદ) કેવી રીતે થાય છે તે દર્શાવે છે, તેથી તે Adverb (ક્રિયાવિશેષણ) છે."
    },
    {
      "question": "'<b>Alas!</b> He is no more.' 'Alas!' is an example of a(n)...",
      "options": [
        "Conjunction",
        "Adverb",
        "Interjection",
        "Pronoun"
      ],
      "answer": "Interjection",
      "explanation": "'Alas!' એ દુઃખની લાગણી વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Find the noun in the sentence: 'The <b>team</b> won the match.'",
      "options": [
        "The",
        "won",
        "the",
        "team"
      ],
      "answer": "team",
      "explanation": "'team' (ટુકડી) એ એક સમૂહવાચક નામ (Collective Noun) છે."
    },
    {
      "question": "In 'It is a <b>sunny</b> day', 'sunny' is a(n)...",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'sunny' (તડકાવાળો) એ 'day' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective (વિશેષણ) છે."
    },
    {
      "question": "What is the part of speech of '<b>read</b>' in 'I read a book every day'?",
      "options": [
        "Noun",
        "Pronoun",
        "Verb",
        "Adjective"
      ],
      "answer": "Verb",
      "explanation": "'read' (વાંચવું) એ વાક્યમાં થતી ક્રિયા છે, તેથી તે Verb (ક્રિયાપદ) છે."
    }
  ],
  "test-3": [
    {
      "question": "Identify the preposition: 'The book is <b>on</b> the desk.'",
      "options": [
        "book",
        "is",
        "on",
        "desk"
      ],
      "answer": "on",
      "explanation": "'on' (ઉપર) એ 'book' અને 'desk' વચ્ચેનો સ્થાન સંબંધ દર્શાવે છે, તેથી તે Preposition છે."
    },
    {
      "question": "What part of speech is '<b>happiness</b>'?",
      "options": [
        "Adjective",
        "Verb",
        "Noun",
        "Adverb"
      ],
      "answer": "Noun",
      "explanation": "'happiness' (ખુશી) એ એક ભાવ છે, તેથી તે ભાવવાચક નામ (Abstract Noun) છે."
    },
    {
      "question": "In 'The dog barked <b>loudly</b>', what is 'loudly'?",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'loudly' (મોટેથી) એ 'barked' (ક્રિયાપદ) કેવી રીતે થયું તે દર્શાવે છે, તેથી તે Adverb (ક્રિયાવિશેષણ) છે."
    },
    {
      "question": "'<b>Oh!</b> I forgot my keys.' 'Oh!' is a(n)...",
      "options": [
        "Interjection",
        "Conjunction",
        "Pronoun",
        "Verb"
      ],
      "answer": "Interjection",
      "explanation": "'Oh!' એ ભૂલી જવાનો ભાવ વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Which word is a pronoun in 'Give the book to <b>me</b>'?",
      "options": [
        "Give",
        "book",
        "to",
        "me"
      ],
      "answer": "me",
      "explanation": "'me' (મને) એ 'I' નું કર્મ વિભક્તિનું રૂપ છે અને તે એક Pronoun (સર્વનામ) છે."
    },
    {
      "question": "Find the verb: 'She <b>wrote</b> a letter to her friend.'",
      "options": [
        "She",
        "wrote",
        "letter",
        "friend"
      ],
      "answer": "wrote",
      "explanation": "'wrote' (લખ્યું) એ 'write' નું ભૂતકાળનું રૂપ છે અને તે વાક્યમાં થયેલી ક્રિયા દર્શાવે છે."
    },
    {
      "question": "What part of speech is '<b>or</b>' in 'Do you want tea or coffee'?",
      "options": [
        "Preposition",
        "Conjunction",
        "Adverb",
        "Pronoun"
      ],
      "answer": "Conjunction",
      "explanation": "'or' (અથવા) એ બે વિકલ્પો (tea, coffee) ને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the adjective in: 'This is a <b>heavy</b> box.'",
      "options": [
        "This",
        "is",
        "heavy",
        "box"
      ],
      "answer": "heavy",
      "explanation": "'heavy' (ભારે) એ 'box' (નામ) ના ગુણનું વર્ણન કરે છે, તેથી તે Adjective (વિશેષણ) છે."
    },
    {
      "question": "In 'The <b>old</b> man walks slowly', 'old' is a(n)...",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'old' (વૃદ્ધ) એ 'man' (નામ) ના અર્થમાં વધારો કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "What is the noun in the sentence: '<b>Birds</b> live in nests.'?",
      "options": [
        "live",
        "in",
        "nests",
        "Birds"
      ],
      "answer": "Birds",
      "explanation": "'Birds' (પક્ષીઓ) એ એક જાતિવાચક નામ (Common Noun) છે."
    }
  ],
  "test-4": [
    {
      "question": "What part of speech is '<b>always</b>' in 'He always speaks the truth'?",
      "options": [
        "Adjective",
        "Adverb",
        "Preposition",
        "Conjunction"
      ],
      "answer": "Adverb",
      "explanation": "'always' (હંમેશા) એ ક્રિયા ક્યારે થાય છે તે દર્શાવે છે, તેથી તે Adverb of Frequency (ક્રિયાવિશેષણ) છે."
    },
    {
      "question": "Identify the pronoun: 'The book is <b>yours</b>.'",
      "options": [
        "The",
        "book",
        "is",
        "yours"
      ],
      "answer": "yours",
      "explanation": "'yours' (તમારું) એ માલિકી દર્શાવતું સર્વનામ (Possessive Pronoun) છે."
    },
    {
      "question": "In 'She wore a <b>beautiful</b> dress', what is 'beautiful'?",
      "options": [
        "Noun",
        "Verb",
        "Adjective",
        "Adverb"
      ],
      "answer": "Adjective",
      "explanation": "'beautiful' (સુંદર) એ 'dress' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective (વિશેષણ) છે."
    },
    {
      "question": "Which word is a verb in 'The sun <b>shines</b> brightly'?",
      "options": [
        "sun",
        "shines",
        "brightly",
        "The"
      ],
      "answer": "shines",
      "explanation": "'shines' (ચમકે છે) એ સૂર્ય દ્વારા થતી ક્રિયા છે, તેથી તે Verb (ક્રિયાપદ) છે."
    },
    {
      "question": "'<b>Hurray!</b> We won the game.' What is 'Hurray!'?",
      "options": [
        "Noun",
        "Interjection",
        "Conjunction",
        "Adverb"
      ],
      "answer": "Interjection",
      "explanation": "'Hurray!' એ આનંદની લાગણી વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Find the preposition: 'He is sitting <b>near</b> the window.'",
      "options": [
        "sitting",
        "near",
        "the",
        "window"
      ],
      "answer": "near",
      "explanation": "'near' (નજીક) એ સ્થાન દર્શાવતું Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "What part of speech is '<b>because</b>' in 'He was late because it was raining'?",
      "options": [
        "Pronoun",
        "Adverb",
        "Preposition",
        "Conjunction"
      ],
      "answer": "Conjunction",
      "explanation": "'because' (કારણ કે) એ કારણ દર્શાવતા બે વાક્યોને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the noun in the sentence: 'The <b>crowd</b> was very big.'",
      "options": [
        "crowd",
        "was",
        "very",
        "big"
      ],
      "answer": "crowd",
      "explanation": "'crowd' (ટોળું) એ એક સમૂહવાચક નામ (Collective Noun) છે."
    },
    {
      "question": "In 'The story is <b>very</b> interesting', 'very' is a(n)...",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'very' (ખૂબ) એ 'interesting' (વિશેષણ) ના અર્થમાં વધારો કરે છે, તેથી તે Adverb (ક્રિયાવિશેષણ) છે."
    },
    {
      "question": "What is the pronoun for 'the cat' in 'The cat is drinking its milk'?",
      "options": [
        "The",
        "cat",
        "is",
        "its"
      ],
      "answer": "its",
      "explanation": "'its' (તેનું) એ પ્રાણી માટે વપરાતું માલિકી દર્શાવતું સર્વનામ (Possessive Pronoun) છે."
    }
  ],
  "test-5": [
    {
      "question": "Which word is the verb in: 'They <b>are studying</b> for the exam.'?",
      "options": [
        "They",
        "are studying",
        "for",
        "exam"
      ],
      "answer": "are studying",
      "explanation": "'are studying' (અભ્યાસ કરી રહ્યા છે) એ ચાલુ વર્તમાનકાળની ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    },
    {
      "question": "What part of speech is '<b>intelligent</b>' in 'She is an intelligent student'?",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Pronoun"
      ],
      "answer": "Adjective",
      "explanation": "'intelligent' (બુદ્ધિશાળી) એ 'student' (નામ) ના ગુણનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "Identify the adverb: 'The train arrived <b>late</b>.'",
      "options": [
        "train",
        "arrived",
        "late",
        "The"
      ],
      "answer": "late",
      "explanation": "'late' (મોડો) એ ક્રિયાપદ 'arrived' ક્યારે થયું તે દર્શાવે છે, તેથી તે Adverb છે."
    },
    {
      "question": "In 'The book is <b>behind</b> the sofa', what is 'behind'?",
      "options": [
        "Adverb",
        "Preposition",
        "Conjunction",
        "Verb"
      ],
      "answer": "Preposition",
      "explanation": "'behind' (પાછળ) એ 'book' અને 'sofa' વચ્ચેનો સ્થાન સંબંધ દર્શાવે છે, તેથી તે Preposition છે."
    },
    {
      "question": "Find the pronoun: '<b>Who</b> is at the door?'",
      "options": [
        "Who",
        "is",
        "at",
        "door"
      ],
      "answer": "Who",
      "explanation": "'Who' (કોણ) એ પ્રશ્ન પૂછવા માટે વપરાતું સર્વનામ (Interrogative Pronoun) છે."
    },
    {
      "question": "What part of speech is '<b>if</b>' in 'I will go if you come'?",
      "options": [
        "Conjunction",
        "Preposition",
        "Adverb",
        "Pronoun"
      ],
      "answer": "Conjunction",
      "explanation": "'if' (જો) એ શરત દર્શાવતા બે વાક્યોને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the noun in: '<b>Mumbai</b> is a big city.'",
      "options": [
        "is",
        "a",
        "big",
        "Mumbai"
      ],
      "answer": "Mumbai",
      "explanation": "'Mumbai' એ એક ચોક્કસ શહેરનું નામ છે, તેથી તે વ્યક્તિવાચક નામ (Proper Noun) છે."
    },
    {
      "question": "'<b>Bravo!</b> You played well.' What is 'Bravo!'?",
      "options": [
        "Adverb",
        "Interjection",
        "Verb",
        "Adjective"
      ],
      "answer": "Interjection",
      "explanation": "'Bravo!' એ શાબાશી આપવા માટે વપરાતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "In 'The soup tastes <b>good</b>', 'good' is a(n)...",
      "options": [
        "Adverb",
        "Adjective",
        "Verb",
        "Noun"
      ],
      "answer": "Adjective",
      "explanation": "'good' (સારો) એ 'soup' (નામ) ના સ્વાદનું વર્ણન કરે છે. તે linking verb 'tastes' પછી આવેલું વિશેષણ છે."
    },
    {
      "question": "Find the verb: 'He <b>has completed</b> his homework.'",
      "options": [
        "He",
        "has completed",
        "his",
        "homework"
      ],
      "answer": "has completed",
      "explanation": "'has completed' (પૂર્ણ કરી લીધું છે) એ પૂર્ણ વર્તમાનકાળની ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    }
  ],
  "test-6": [
    {
      "question": "What is the part of speech for '<b>across</b>' in 'He swam across the river'?",
      "options": [
        "Adverb",
        "Conjunction",
        "Preposition",
        "Adjective"
      ],
      "answer": "Preposition",
      "explanation": "'across' (ની પાર) એ દિશા અને ગતિનો સંબંધ દર્શાવે છે, તેથી તે Preposition છે."
    },
    {
      "question": "Identify the adverb in: 'He speaks English <b>fluently</b>.'",
      "options": [
        "He",
        "speaks",
        "English",
        "fluently"
      ],
      "answer": "fluently",
      "explanation": "'fluently' (સરળતાથી) એ ક્રિયાપદ 'speaks' કેવી રીતે થાય છે તે દર્શાવે છે, તેથી તે Adverb છે."
    },
    {
      "question": "In the sentence 'That is <b>my</b> book', what is 'my'?",
      "options": [
        "Pronoun",
        "Adjective",
        "Noun",
        "Adverb"
      ],
      "answer": "Adjective",
      "explanation": "'my' (મારું) એ 'book' (નામ) પર માલિકી દર્શાવે છે, તેથી તે સંબંધક વિશેષણ (Possessive Adjective) છે."
    },
    {
      "question": "Which word is a verb? 'The dog <b>is barking</b>.'",
      "options": [
        "The",
        "dog",
        "is barking",
        "None of the above"
      ],
      "answer": "is barking",
      "explanation": "'is barking' (ભસી રહ્યો છે) એ વાક્યમાં થતી ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    },
    {
      "question": "Find the noun in 'The <b>Ganga</b> is a holy river.'",
      "options": [
        "The",
        "Ganga",
        "is",
        "holy"
      ],
      "answer": "Ganga",
      "explanation": "'Ganga' એ એક ચોક્કસ નદીનું નામ છે, તેથી તે વ્યક્તિવાચક નામ (Proper Noun) છે."
    },
    {
      "question": "What part of speech is '<b>so</b>' in 'He worked hard, so he passed'?",
      "options": [
        "Adverb",
        "Preposition",
        "Conjunction",
        "Pronoun"
      ],
      "answer": "Conjunction",
      "explanation": "'so' (તેથી) એ પરિણામ દર્શાવતા બે વાક્યોને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the adjective: 'The sky is <b>blue</b>.'",
      "options": [
        "The",
        "sky",
        "is",
        "blue"
      ],
      "answer": "blue",
      "explanation": "'blue' (વાદળી) એ 'sky' (નામ) ના રંગનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "'<b>Ouch!</b> That hurts.' What is 'Ouch!'?",
      "options": [
        "Verb",
        "Adjective",
        "Interjection",
        "Noun"
      ],
      "answer": "Interjection",
      "explanation": "'Ouch!' એ પીડાની લાગણી વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "In '<b>We</b> are going to the zoo', 'We' is a...",
      "options": [
        "Noun",
        "Pronoun",
        "Adjective",
        "Verb"
      ],
      "answer": "Pronoun",
      "explanation": "'We' (અમે) એ એક કરતાં વધુ લોકો (જેમાં બોલનાર શામેલ હોય) ના નામને બદલે વપરાયેલ સર્વનામ છે."
    },
    {
      "question": "Find the adverb: 'She arrived <b>early</b>.'",
      "options": [
        "She",
        "arrived",
        "early",
        "None of the above"
      ],
      "answer": "early",
      "explanation": "'early' (વહેલા) એ ક્રિયાપદ 'arrived' ના સમય વિશે માહિતી આપે છે, તેથી તે Adverb છે."
    }
  ],
  "test-7": [
    {
      "question": "Identify the verb in the sentence: 'The birds <b>are singing</b>.'",
      "options": [
        "birds",
        "are singing",
        "The",
        "None of the above"
      ],
      "answer": "are singing",
      "explanation": "'are singing' (ગાઈ રહ્યા છે) એ વાક્યમાં ચાલુ ક્રિયા દર્શાવે છે, તેથી તે Verb (ક્રિયાપદ) છે."
    },
    {
      "question": "What part of speech is '<b>on</b>' in 'The cat sat on the mat'?",
      "options": [
        "Adverb",
        "Conjunction",
        "Preposition",
        "Pronoun"
      ],
      "answer": "Preposition",
      "explanation": "'on' (ઉપર) એ 'cat' અને 'mat' વચ્ચેનો સ્થાન સંબંધ દર્શાવે છે, તેથી તે Preposition છે."
    },
    {
      "question": "In 'He is a <b>very</b> smart boy', what is 'very'?",
      "options": [
        "Adjective",
        "Adverb",
        "Noun",
        "Verb"
      ],
      "answer": "Adverb",
      "explanation": "'very' (ખૂબ) એ 'smart' (વિશેષણ) ના અર્થમાં વધારો કરે છે, તેથી તે Adverb (ક્રિયાવિશેષણ) છે."
    },
    {
      "question": "Which word is a pronoun? '<b>That</b> is my house.'",
      "options": [
        "That",
        "is",
        "my",
        "house"
      ],
      "answer": "That",
      "explanation": "'That' (પેલું) એ દૂરની વસ્તુ દર્શાવવા માટે વપરાતું સર્વનામ (Demonstrative Pronoun) છે."
    },
    {
      "question": "Identify the adjective: 'The little girl has a <b>red</b> dress.'",
      "options": [
        "little",
        "girl",
        "red",
        "dress"
      ],
      "answer": "red",
      "explanation": "'red' (લાલ) એ 'dress' (નામ) ના રંગનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "What part of speech is '<b>unless</b>' in 'I will not go unless you come'?",
      "options": [
        "Preposition",
        "Conjunction",
        "Adverb",
        "Verb"
      ],
      "answer": "Conjunction",
      "explanation": "'unless' (જ્યાં સુધી નહીં) એ શરત દર્શાવતા બે વાક્યોને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "'<b>Oops!</b> I dropped it.' What is 'Oops!'?",
      "options": [
        "Noun",
        "Verb",
        "Interjection",
        "Adjective"
      ],
      "answer": "Interjection",
      "explanation": "'Oops!' એ ભૂલ થવાનો ભાવ વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Find the noun in: 'The <b>dog</b> is a faithful animal.'",
      "options": [
        "The",
        "dog",
        "is",
        "faithful"
      ],
      "answer": "dog",
      "explanation": "'dog' (કૂતરો) એ એક પ્રાણીનું જાતિવાચક નામ (Common Noun) છે."
    },
    {
      "question": "In 'The baby is sleeping <b>soundly</b>', 'soundly' is a(n)...",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'soundly' (નિરાંતે) એ 'sleeping' (ક્રિયાપદ) કેવી રીતે થઈ રહ્યું છે તે દર્શાવે છે, તેથી તે Adverb છે."
    },
    {
      "question": "Find the verb: 'She <b>will come</b> tomorrow.'",
      "options": [
        "She",
        "will come",
        "tomorrow",
        "None of the above"
      ],
      "answer": "will come",
      "explanation": "'will come' (આવશે) એ ભવિષ્યમાં થનારી ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    }
  ],
  "test-8": [
    {
      "question": "What part of speech is '<b>over</b>' in 'The plane flew over the clouds'?",
      "options": [
        "Adverb",
        "Conjunction",
        "Preposition",
        "Adjective"
      ],
      "answer": "Preposition",
      "explanation": "'over' (ઉપરથી) એ સ્થાન દર્શાવતું Preposition છે, જે 'plane' અને 'clouds' વચ્ચેનો સંબંધ બતાવે છે."
    },
    {
      "question": "Identify the noun in: 'He showed great <b>courage</b>.'",
      "options": [
        "He",
        "showed",
        "great",
        "courage"
      ],
      "answer": "courage",
      "explanation": "'courage' (હિંમત) એ એક ભાવ છે, તેથી તે ભાવવાચક નામ (Abstract Noun) છે."
    },
    {
      "question": "In 'The movie was <b>incredibly</b> boring', what is 'incredibly'?",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'incredibly' (અવિશ્વસનીય રીતે) એ 'boring' (વિશેષણ) ના અર્થમાં વધારો કરે છે, તેથી તે Adverb છે."
    },
    {
      "question": "Which word is a pronoun? 'The students did the work <b>themselves</b>.'",
      "options": [
        "students",
        "work",
        "themselves",
        "did"
      ],
      "answer": "themselves",
      "explanation": "'themselves' (તેમની જાતે) એ ભારપૂર્વક કહેવા માટે વપરાતું સર્વનામ (Emphatic or Reflexive Pronoun) છે."
    },
    {
      "question": "'<b>Ah!</b> Now I understand.' 'Ah!' is an example of a(n)...",
      "options": [
        "Interjection",
        "Conjunction",
        "Pronoun",
        "Adjective"
      ],
      "answer": "Interjection",
      "explanation": "'Ah!' એ સમજણ પડવાનો ભાવ વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Find the verb: 'You <b>should study</b> hard.'",
      "options": [
        "You",
        "should study",
        "hard",
        "None of the above"
      ],
      "answer": "should study",
      "explanation": "'should study' (અભ્યાસ કરવો જોઈએ) એ સલાહ સૂચવતી ક્રિયા દર્શાવે છે. અહીં 'should' એ Modal Verb છે."
    },
    {
      "question": "What part of speech is '<b>while</b>' in 'Make hay while the sun shines'?",
      "options": [
        "Pronoun",
        "Preposition",
        "Conjunction",
        "Adverb"
      ],
      "answer": "Conjunction",
      "explanation": "'while' (જ્યારે) એ સમય દર્શાવતા બે વાક્યોને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the adjective: 'The room is very <b>spacious</b>.'",
      "options": [
        "room",
        "is",
        "very",
        "spacious"
      ],
      "answer": "spacious",
      "explanation": "'spacious' (વિશાળ) એ 'room' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "In 'She spoke <b>softly</b>', 'softly' is a(n)...",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'softly' (ધીમેથી) એ ક્રિયાપદ 'spoke' કેવી રીતે થયું તે દર્શાવે છે, તેથી તે Adverb (ક્રિયાવિશેષણ) છે."
    },
    {
      "question": "What is the noun in: 'The <b>jury</b> gave its verdict.'?",
      "options": [
        "jury",
        "gave",
        "its",
        "verdict"
      ],
      "answer": "jury",
      "explanation": "'jury' (પંચ) એ સભ્યોના સમૂહ માટે વપરાતું સમૂહવાચક નામ (Collective Noun) છે."
    }
  ],
  "test-9": [
    {
      "question": "Which word is a verb? 'The earth <b>rotates</b> around the sun.'",
      "options": [
        "earth",
        "rotates",
        "around",
        "sun"
      ],
      "answer": "rotates",
      "explanation": "'rotates' (ફરે છે) એ પૃથ્વી દ્વારા થતી ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    },
    {
      "question": "What part of speech is '<b>his</b>' in 'This is his car'?",
      "options": [
        "Pronoun",
        "Adjective",
        "Noun",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'his' (તેનું) એ 'car' (નામ) પર માલિકી દર્શાવે છે, તેથી તે સંબંધક વિશેષણ (Possessive Adjective) છે. તે Pronoun નથી."
    },
    {
      "question": "Identify the adjective: 'It was a <b>cold</b>, windy night.'",
      "options": [
        "was",
        "cold",
        "windy",
        "night"
      ],
      "answer": "cold",
      "explanation": "'cold' (ઠંડી) એ 'night' (નામ) નું વર્ણન કરે છે. ('windy' પણ વિશેષણ છે)."
    },
    {
      "question": "In 'He walked <b>towards</b> the school', 'towards' is a...",
      "options": [
        "Preposition",
        "Conjunction",
        "Adverb",
        "Adjective"
      ],
      "answer": "Preposition",
      "explanation": "'towards' (ની તરફ) એ દિશા દર્શાવતું Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "Find the adverb: 'The work is <b>almost</b> finished.'",
      "options": [
        "work",
        "is",
        "almost",
        "finished"
      ],
      "answer": "almost",
      "explanation": "'almost' (લગભગ) એ 'finished' (વિશેષણ/ક્રિયાપદ) ના અર્થમાં વધારો કરે છે, તેથી તે Adverb છે."
    },
    {
      "question": "What part of speech is '<b>although</b>' in 'Although it was raining, he went out'?",
      "options": [
        "Adverb",
        "Conjunction",
        "Pronoun",
        "Preposition"
      ],
      "answer": "Conjunction",
      "explanation": "'although' (જોકે) એ વિરોધાભાસ દર્શાવતા બે વાક્યોને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the noun in: '<b>Wisdom</b> is better than strength.'",
      "options": [
        "Wisdom",
        "is",
        "better",
        "than"
      ],
      "answer": "Wisdom",
      "explanation": "'Wisdom' (જ્ઞાન) એ એક ભાવવાચક નામ (Abstract Noun) છે."
    },
    {
      "question": "'<b>Hello!</b> How are you?' What is 'Hello!'?",
      "options": [
        "Noun",
        "Verb",
        "Interjection",
        "Pronoun"
      ],
      "answer": "Interjection",
      "explanation": "'Hello!' એ અભિવાદન માટે વપરાતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "In 'The teacher gave <b>us</b> a test', 'us' is a...",
      "options": [
        "Noun",
        "Adjective",
        "Pronoun",
        "Verb"
      ],
      "answer": "Pronoun",
      "explanation": "'us' (અમને) એ 'we' નું કર્મ વિભક્તિનું રૂપ છે, તેથી તે Pronoun (સર્વનામ) છે."
    },
    {
      "question": "Find the verb: 'I <b>have been waiting</b> for two hours.'",
      "options": [
        "I",
        "have been waiting",
        "for",
        "hours"
      ],
      "answer": "have been waiting",
      "explanation": "'have been waiting' (રાહ જોઈ રહ્યો છું) એ ચાલુ પૂર્ણ વર્તમાનકાળની ક્રિયા દર્શાવે છે."
    }
  ],
  "test-10": [
    {
      "question": "What part of speech is '<b>yesterday</b>' in 'He came yesterday'?",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Preposition"
      ],
      "answer": "Adverb",
      "explanation": "'yesterday' (ગઈકાલે) એ ક્રિયા 'came' ક્યારે થઈ તે દર્શાવે છે, તેથી તે Adverb of Time છે."
    },
    {
      "question": "Identify the pronoun: '<b>Each</b> of the boys gets a prize.'",
      "options": [
        "Each",
        "boys",
        "gets",
        "prize"
      ],
      "answer": "Each",
      "explanation": "'Each' (દરેક) એ વિભાજન દર્શાવતું સર્વનામ (Distributive Pronoun) છે."
    },
    {
      "question": "In 'The news is <b>true</b>', what is 'true'?",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'true' (સાચું) એ 'news' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "Which word is a preposition in 'I am fond <b>of</b> music'?",
      "options": [
        "am",
        "fond",
        "of",
        "music"
      ],
      "answer": "of",
      "explanation": "'of' (નો, ની, નું, ના) એ સંબંધ દર્શાવતું Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "Find the verb: 'The bell <b>is ringing</b>.'",
      "options": [
        "The",
        "bell",
        "is ringing",
        "None of the above"
      ],
      "answer": "is ringing",
      "explanation": "'is ringing' (વાગી રહ્યો છે) એ ચાલુ ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    },
    {
      "question": "What part of speech is '<b>since</b>' in 'He has been ill since Monday'?",
      "options": [
        "Conjunction",
        "Preposition",
        "Adverb",
        "Pronoun"
      ],
      "answer": "Preposition",
      "explanation": "અહીં 'since' (થી) એ સમયનો સંબંધ દર્શાવે છે. જ્યારે 'since' બે વાક્યોને જોડે ત્યારે તે Conjunction હોય છે."
    },
    {
      "question": "Identify the noun: 'The <b>army</b> marched forward.'",
      "options": [
        "army",
        "marched",
        "forward",
        "The"
      ],
      "answer": "army",
      "explanation": "'army' (સૈન્ય) એ સૈનિકોના સમૂહ માટે વપરાતું સમૂહવાચક નામ (Collective Noun) છે."
    },
    {
      "question": "'<b>Hush!</b> The baby is sleeping.' What is 'Hush!'?",
      "options": [
        "Verb",
        "Interjection",
        "Adjective",
        "Conjunction"
      ],
      "answer": "Interjection",
      "explanation": "'Hush!' એ શાંત રહેવા માટે સૂચન કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "In 'The glass is <b>brittle</b>', 'brittle' is a(n)...",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'brittle' (નાજુક/બટકણું) એ 'glass' (નામ) ના ગુણનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "What is the adverb in 'The sun shines <b>brightly</b>'?",
      "options": [
        "sun",
        "shines",
        "brightly",
        "The"
      ],
      "answer": "brightly",
      "explanation": "'brightly' (તેજસ્વી રીતે) એ 'shines' (ક્રિયાપદ) કેવી રીતે થાય છે તે દર્શાવે છે, તેથી તે Adverb છે."
    }
  ],
  "test-11": [
    {
      "question": "In the sentence 'The girl sang <b>beautifully</b>', what part of speech is 'beautifully'?",
      "options": [
        "Noun",
        "Verb",
        "Adjective",
        "Adverb"
      ],
      "answer": "Adverb",
      "explanation": "'beautifully' (સુંદર રીતે) એ 'sang' (ક્રિયાપદ) કેવી રીતે થયું તે દર્શાવે છે, તેથી તે Adverb (ક્રિયાવિશેષણ) છે."
    },
    {
      "question": "Identify the pronoun in the sentence: 'The house <b>itself</b> is small, but the garden is big.'",
      "options": [
        "house",
        "itself",
        "small",
        "garden"
      ],
      "answer": "itself",
      "explanation": "'itself' (પોતે જ) એ 'house' (નામ) પર ભાર મૂકવા માટે વપરાયું છે. તે Emphatic Pronoun છે."
    },
    {
      "question": "What is the part of speech for '<b>strong</b>' in 'He is a strong man'?",
      "options": [
        "Adjective",
        "Verb",
        "Adverb",
        "Preposition"
      ],
      "answer": "Adjective",
      "explanation": "'strong' (મજબૂત) એ 'man' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective (વિશેષણ) છે."
    },
    {
      "question": "Which word is the preposition in the sentence: 'She is waiting <b>at</b> the bus stop.'?",
      "options": [
        "waiting",
        "at",
        "the",
        "stop"
      ],
      "answer": "at",
      "explanation": "'at' (પર/પાસે) એ ચોક્કસ સ્થાન દર્શાવવા માટે વપરાતું Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "In '<b>They</b> are my friends', 'They' is a...",
      "options": [
        "Conjunction",
        "Preposition",
        "Pronoun",
        "Noun"
      ],
      "answer": "Pronoun",
      "explanation": "'They' (તેઓ) એ એક કરતાં વધુ લોકોના નામને બદલે વપરાયેલ સર્વનામ (Pronoun) છે."
    },
    {
      "question": "Find the verb in the sentence: 'The postman <b>delivered</b> the letters.'",
      "options": [
        "postman",
        "delivered",
        "letters",
        "The"
      ],
      "answer": "delivered",
      "explanation": "'delivered' (પહોંચાડ્યા) એ વાક્યમાં થયેલી ક્રિયા દર્શાવે છે, તેથી તે Verb (ક્રિયાપદ) છે."
    },
    {
      "question": "What part of speech is '<b>either...or</b>' in 'You can either stay or leave'?",
      "options": [
        "Adverb",
        "Preposition",
        "Conjunction",
        "Pronoun"
      ],
      "answer": "Conjunction",
      "explanation": "'either...or' (યા તો...અથવા) એ બે વિકલ્પોને જોડતું સહસંબંધક સંયોજક (Correlative Conjunction) છે."
    },
    {
      "question": "'<b>Hey!</b> Listen to me.' What is 'Hey!'?",
      "options": [
        "Noun",
        "Verb",
        "Interjection",
        "Adjective"
      ],
      "answer": "Interjection",
      "explanation": "'Hey!' એ ધ્યાન ખેંચવા માટે વપરાતો ઉદ્ગાર છે, તેથી તે Interjection (ઉદ્ગારવાચક અવ્યય) છે."
    },
    {
      "question": "Identify the noun in: 'The <b>lion</b> is the king of the forest.'",
      "options": [
        "lion",
        "is",
        "king",
        "forest"
      ],
      "answer": "lion",
      "explanation": "'lion' (સિંહ) એ એક પ્રાણીનું જાતિવાચક નામ (Common Noun) છે. ('king' અને 'forest' પણ નામ છે)."
    },
    {
      "question": "In the sentence 'The night is <b>dark</b>', what is 'dark'?",
      "options": [
        "Noun",
        "Pronoun",
        "Adjective",
        "Adverb"
      ],
      "answer": "Adjective",
      "explanation": "'dark' (અંધારી) એ 'night' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective (વિશેષણ) છે."
    }
  ],
  "test-12": [
    {
      "question": "What part of speech is '<b>through</b>' in the sentence 'The train passed through the tunnel'?",
      "options": [
        "Preposition",
        "Conjunction",
        "Adverb",
        "Verb"
      ],
      "answer": "Preposition",
      "explanation": "'through' (માંથી) એ ગતિ અને માર્ગ દર્શાવે છે, તેથી તે Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "Identify the verb in the sentence: 'My father <b>works</b> in a bank.'",
      "options": [
        "father",
        "works",
        "in",
        "bank"
      ],
      "answer": "works",
      "explanation": "'works' (કામ કરે છે) એ વાક્યમાં થતી ક્રિયા છે, તેથી તે Verb (ક્રિયાપદ) છે."
    },
    {
      "question": "In 'The old woman is walking <b>slowly</b>', what part of speech is 'slowly'?",
      "options": [
        "Adverb",
        "Adjective",
        "Noun",
        "Verb"
      ],
      "answer": "Adverb",
      "explanation": "'slowly' (ધીમે ધીમે) એ 'walking' (ક્રિયાપદ) કેવી રીતે થઈ રહ્યું છે તે દર્શાવે છે, તેથી તે Adverb (ક્રિયાવિશેષણ) છે."
    },
    {
      "question": "Which word is a pronoun? 'The boy <b>who</b> won the race is my friend.'",
      "options": [
        "boy",
        "who",
        "race",
        "friend"
      ],
      "answer": "who",
      "explanation": "'who' (જે) એ 'boy' (નામ) ને સંબંધિત વાક્ય સાથે જોડે છે. તે Relative Pronoun છે."
    },
    {
      "question": "What part of speech is '<b>our</b>' in 'This is our house'?",
      "options": [
        "Noun",
        "Pronoun",
        "Adjective",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'our' (અમારું) એ 'house' (નામ) પર માલિકી દર્શાવે છે, તેથી તે સંબંધક વિશેષણ (Possessive Adjective) છે."
    },
    {
      "question": "Identify the noun: 'The <b>building</b> is very tall.'",
      "options": [
        "The",
        "building",
        "is",
        "tall"
      ],
      "answer": "building",
      "explanation": "'building' (ઇમારત) એ એક વસ્તુનું જાતિવાચક નામ (Common Noun) છે."
    },
    {
      "question": "'<b>Well done!</b>' is an example of a(n)...",
      "options": [
        "Conjunction",
        "Adverb",
        "Interjection",
        "Pronoun"
      ],
      "answer": "Interjection",
      "explanation": "'Well done!' (શાબાશ!) એ પ્રશંસા વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Find the conjunction in the sentence: 'She is clever <b>and</b> beautiful.'",
      "options": [
        "She",
        "is",
        "clever",
        "and"
      ],
      "answer": "and",
      "explanation": "'and' (અને) એ 'clever' અને 'beautiful' એ બે વિશેષણોને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "In 'The weather is <b>pleasant</b>', 'pleasant' is a(n)...",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'pleasant' (આહલાદક) એ 'weather' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "What is the verb in 'We <b>had finished</b> our work before they came'?",
      "options": [
        "had finished",
        "work",
        "before",
        "came"
      ],
      "answer": "had finished",
      "explanation": "'had finished' (પૂર્ણ કરી દીધું હતું) એ પૂર્ણ ભૂતકાળની ક્રિયા દર્શાવે છે."
    }
  ],
  "test-13": [
    {
      "question": "Identify the preposition: 'He is afraid <b>of</b> the dark.'",
      "options": [
        "He",
        "afraid",
        "of",
        "dark"
      ],
      "answer": "of",
      "explanation": "'of' એ 'afraid' સાથે વપરાતું અને સંબંધ દર્શાવતું Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "What part of speech is '<b>childhood</b>'?",
      "options": [
        "Adjective",
        "Verb",
        "Noun",
        "Adverb"
      ],
      "answer": "Noun",
      "explanation": "'childhood' (બાળપણ) એ જીવનની એક અવસ્થા છે, તેથી તે ભાવવાચક નામ (Abstract Noun) છે."
    },
    {
      "question": "In 'She works <b>diligently</b>', what is 'diligently'?",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'diligently' (મહેનતથી) એ ક્રિયાપદ 'works' કેવી રીતે થાય છે તે દર્શાવે છે, તેથી તે Adverb છે."
    },
    {
      "question": "'<b>Shh!</b> The baby is sleeping.' 'Shh!' is a(n)...",
      "options": [
        "Interjection",
        "Conjunction",
        "Pronoun",
        "Verb"
      ],
      "answer": "Interjection",
      "explanation": "'Shh!' એ શાંત રહેવા માટે વપરાતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Which word is a pronoun? '<b>Somebody</b> has stolen my pen.'",
      "options": [
        "Somebody",
        "stolen",
        "my",
        "pen"
      ],
      "answer": "Somebody",
      "explanation": "'Somebody' (કોઈએક) એ અનિશ્ચિત સર્વનામ (Indefinite Pronoun) છે કારણ કે તે કોઈ ચોક્કસ વ્યક્તિનો ઉલ્લેખ કરતું નથી."
    },
    {
      "question": "Find the verb: 'The train <b>will arrive</b> at 9 PM.'",
      "options": [
        "train",
        "will arrive",
        "at",
        "PM"
      ],
      "answer": "will arrive",
      "explanation": "'will arrive' (આવશે) એ ભવિષ્યમાં થનારી ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    },
    {
      "question": "What part of speech is '<b>yet</b>' in 'He is rich, yet he is not happy'?",
      "options": [
        "Preposition",
        "Conjunction",
        "Adverb",
        "Pronoun"
      ],
      "answer": "Conjunction",
      "explanation": "'yet' (છતાં પણ) એ વિરોધાભાસ દર્શાવતા બે વાક્યોને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the adjective in: 'This is a <b>delicious</b> cake.'",
      "options": [
        "This",
        "is",
        "delicious",
        "cake"
      ],
      "answer": "delicious",
      "explanation": "'delicious' (સ્વાદિષ્ટ) એ 'cake' (નામ) ના ગુણનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "In 'He seems <b>tired</b>', 'tired' is a(n)...",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'tired' (થાકેલો) એ 'He' (સર્વનામ) ની સ્થિતિનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "What is the noun in 'The <b>flock</b> of sheep is grazing'?",
      "options": [
        "flock",
        "sheep",
        "is",
        "grazing"
      ],
      "answer": "flock",
      "explanation": "'flock' (ટોળું) એ ઘેટાંના સમૂહ માટે વપરાતું સમૂહવાચક નામ (Collective Noun) છે."
    }
  ],
  "test-14": [
    {
      "question": "What part of speech is '<b>daily</b>' in 'I read the newspaper daily'?",
      "options": [
        "Adjective",
        "Adverb",
        "Preposition",
        "Conjunction"
      ],
      "answer": "Adverb",
      "explanation": "'daily' (દરરોજ) એ ક્રિયા 'read' ક્યારે થાય છે તે દર્શાવે છે, તેથી તે Adverb of Frequency છે. (નોંધ: 'daily' વિશેષણ તરીકે પણ વપરાય છે, દા.ત. 'daily newspaper')."
    },
    {
      "question": "Identify the pronoun: 'The prize will be given to <b>whoever</b> finishes first.'",
      "options": [
        "prize",
        "given",
        "whoever",
        "first"
      ],
      "answer": "whoever",
      "explanation": "'whoever' (જે કોઈ પણ) એ Relative Pronoun છે જે એક આખા clause ને refer કરે છે."
    },
    {
      "question": "In 'The man seems very <b>kind</b>', what is 'kind'?",
      "options": [
        "Noun",
        "Verb",
        "Adjective",
        "Adverb"
      ],
      "answer": "Adjective",
      "explanation": "'kind' (દયાળુ) એ 'man' (નામ) ના સ્વભાવનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "Which word is a verb? 'The flowers <b>are blooming</b>.'",
      "options": [
        "flowers",
        "are blooming",
        "The",
        "None"
      ],
      "answer": "are blooming",
      "explanation": "'are blooming' (ખીલી રહ્યા છે) એ વાક્યમાં ચાલુ ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    },
    {
      "question": "'<b>Phew!</b> That was a close call.' What is 'Phew!'?",
      "options": [
        "Noun",
        "Interjection",
        "Conjunction",
        "Adverb"
      ],
      "answer": "Interjection",
      "explanation": "'Phew!' એ રાહતની લાગણી વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Find the preposition: 'The dog ran <b>after</b> the cat.'",
      "options": [
        "ran",
        "after",
        "the",
        "cat"
      ],
      "answer": "after",
      "explanation": "'after' (પાછળ) એ ગતિ અને દિશા દર્શાવતું Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "What part of speech is '<b>neither...nor</b>' in 'He is neither intelligent nor hardworking'?",
      "options": [
        "Pronoun",
        "Adverb",
        "Preposition",
        "Conjunction"
      ],
      "answer": "Conjunction",
      "explanation": "'neither...nor' (આ પણ નહીં...તે પણ નહીં) એ બે નકારાત્મક વિકલ્પોને જોડતું Correlative Conjunction છે."
    },
    {
      "question": "Identify the noun in the sentence: 'The <b>books</b> are on the table.'",
      "options": [
        "books",
        "are",
        "on",
        "table"
      ],
      "answer": "books",
      "explanation": "'books' (પુસ્તકો) એ વસ્તુઓનું જાતિવાચક નામ (Common Noun) છે. ('table' પણ નામ છે)."
    },
    {
      "question": "In 'She is <b>extremely</b> smart', 'extremely' is a(n)...",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'extremely' (અત્યંત) એ 'smart' (વિશેષણ) ના અર્થમાં વધારો કરે છે, તેથી તે Adverb છે."
    },
    {
      "question": "What is the pronoun for 'Ram and I'?",
      "options": [
        "They",
        "We",
        "You",
        "Us"
      ],
      "answer": "We",
      "explanation": "'Ram and I' (રામ અને હું) માટે કર્તા તરીકે 'We' (અમે) સર્વનામ વપરાય છે."
    }
  ],
  "test-15": [
    {
      "question": "Which word is the verb in: 'The sun <b>sets</b> in the west.'?",
      "options": [
        "sun",
        "sets",
        "in",
        "west"
      ],
      "answer": "sets",
      "explanation": "'sets' (આથમે છે) એ સૂર્ય દ્વારા થતી ક્રિયા છે, તેથી તે Verb (ક્રિયાપદ) છે."
    },
    {
      "question": "What part of speech is '<b>loyal</b>' in 'He is a loyal friend'?",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Pronoun"
      ],
      "answer": "Adjective",
      "explanation": "'loyal' (વફાદાર) એ 'friend' (નામ) ના ગુણનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "Identify the adverb: 'I have seen this movie <b>before</b>.'",
      "options": [
        "seen",
        "this",
        "movie",
        "before"
      ],
      "answer": "before",
      "explanation": "'before' (પહેલા) એ ક્રિયાપદ 'have seen' ના સમય વિશે માહિતી આપે છે, તેથી તે Adverb of Time છે."
    },
    {
      "question": "In 'The shop is <b>near</b> my house', what is 'near'?",
      "options": [
        "Adverb",
        "Preposition",
        "Conjunction",
        "Verb"
      ],
      "answer": "Preposition",
      "explanation": "'near' (નજીક) એ સ્થાનનો સંબંધ દર્શાવે છે, તેથી તે Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "Find the pronoun: 'Give the book to <b>her</b>.'",
      "options": [
        "Give",
        "book",
        "to",
        "her"
      ],
      "answer": "her",
      "explanation": "'her' (તેણીને) એ 'she' નું કર્મ વિભક્તિનું રૂપ છે, તેથી તે Pronoun છે."
    },
    {
      "question": "What part of speech is '<b>or</b>' in 'Work hard, or you will fail'?",
      "options": [
        "Conjunction",
        "Preposition",
        "Adverb",
        "Pronoun"
      ],
      "answer": "Conjunction",
      "explanation": "'or' (નહીંતર) એ બે વાક્યોને જોડે છે અને વિકલ્પ/પરિણામ દર્શાવે છે. તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the noun in: 'The <b>girl</b> sang a song.'",
      "options": [
        "girl",
        "sang",
        "a",
        "song"
      ],
      "answer": "girl",
      "explanation": "'girl' (છોકરી) એ એક જાતિવાચક નામ (Common Noun) છે. ('song' પણ નામ છે)."
    },
    {
      "question": "'<b>Good grief!</b> You broke it.' What is 'Good grief!'?",
      "options": [
        "Adverb",
        "Interjection",
        "Verb",
        "Adjective"
      ],
      "answer": "Interjection",
      "explanation": "'Good grief!' એ આશ્ચર્ય કે નિરાશા વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "In 'The weather is <b>awful</b>', 'awful' is a(n)...",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'awful' (ખરાબ) એ 'weather' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "Find the verb: 'He <b>can speak</b> five languages.'",
      "options": [
        "He",
        "can speak",
        "five",
        "languages"
      ],
      "answer": "can speak",
      "explanation": "'can speak' (બોલી શકે છે) એ ક્ષમતા દર્શાવતી ક્રિયા છે. અહીં 'can' એ Modal Verb છે."
    }
  ],
  "test-16": [
    {
      "question": "What is the part of speech for '<b>among</b>' in 'The sweets were distributed among the children'?",
      "options": [
        "Adverb",
        "Conjunction",
        "Preposition",
        "Adjective"
      ],
      "answer": "Preposition",
      "explanation": "'among' (વચ્ચે) એ બેથી વધુ વ્યક્તિઓ કે વસ્તુઓ વચ્ચેનો સંબંધ દર્શાવે છે, તેથી તે Preposition છે."
    },
    {
      "question": "Identify the adverb in: 'It is <b>raining heavily</b>.'",
      "options": [
        "is",
        "raining",
        "heavily",
        "raining heavily"
      ],
      "answer": "heavily",
      "explanation": "'heavily' (ભારે) એ ક્રિયાપદ 'raining' કેવી રીતે થઈ રહ્યું છે તે દર્શાવે છે, તેથી તે Adverb છે."
    },
    {
      "question": "In the sentence 'I have a <b>blue</b> car', what is 'blue'?",
      "options": [
        "Pronoun",
        "Adjective",
        "Noun",
        "Adverb"
      ],
      "answer": "Adjective",
      "explanation": "'blue' (વાદળી) એ 'car' (નામ) ના રંગનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "Which word is a verb? 'The leaves <b>are falling</b> from the tree.'",
      "options": [
        "leaves",
        "are falling",
        "from",
        "tree"
      ],
      "answer": "are falling",
      "explanation": "'are falling' (પડી રહ્યા છે) એ વાક્યમાં ચાલુ ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    },
    {
      "question": "Find the noun in 'The <b>herd</b> of cattle is grazing.'",
      "options": [
        "herd",
        "cattle",
        "is",
        "grazing"
      ],
      "answer": "herd",
      "explanation": "'herd' (ટોળું) એ ઢોરના સમૂહ માટે વપરાતું સમૂહવાચક નામ (Collective Noun) છે."
    },
    {
      "question": "What part of speech is '<b>unless</b>' in 'You will not pass unless you work hard'?",
      "options": [
        "Adverb",
        "Preposition",
        "Conjunction",
        "Pronoun"
      ],
      "answer": "Conjunction",
      "explanation": "'unless' (જ્યાં સુધી નહીં) એ શરત દર્શાવતા બે વાક્યોને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the adjective: 'She has a <b>sweet</b> voice.'",
      "options": [
        "She",
        "has",
        "sweet",
        "voice"
      ],
      "answer": "sweet",
      "explanation": "'sweet' (મધુર) એ 'voice' (નામ) ના ગુણનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "'<b>Oh dear!</b> I missed the bus.' What is 'Oh dear!'?",
      "options": [
        "Verb",
        "Adjective",
        "Interjection",
        "Noun"
      ],
      "answer": "Interjection",
      "explanation": "'Oh dear!' એ નિરાશા કે ચિંતા વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "In 'The house belongs to <b>them</b>', 'them' is a...",
      "options": [
        "Noun",
        "Pronoun",
        "Adjective",
        "Verb"
      ],
      "answer": "Pronoun",
      "explanation": "'them' (તેઓને) એ 'they' નું કર્મ વિભક્તિનું રૂપ છે, તેથી તે Pronoun છે."
    },
    {
      "question": "Find the adverb: 'He ran <b>fast</b> to catch the bus.'",
      "options": [
        "ran",
        "fast",
        "catch",
        "bus"
      ],
      "answer": "fast",
      "explanation": "'fast' (ઝડપથી) એ ક્રિયાપદ 'ran' કેવી રીતે થયું તે દર્શાવે છે, તેથી તે Adverb છે."
    }
  ],
  "test-17": [
    {
      "question": "Identify the verb in the sentence: 'The stars <b>are twinkling</b> in the sky.'",
      "options": [
        "stars",
        "are twinkling",
        "in",
        "sky"
      ],
      "answer": "are twinkling",
      "explanation": "'are twinkling' (ટમટમી રહ્યા છે) એ વાક્યમાં ચાલુ ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    },
    {
      "question": "What part of speech is '<b>with</b>' in 'She went to the party with her friends'?",
      "options": [
        "Adverb",
        "Conjunction",
        "Preposition",
        "Pronoun"
      ],
      "answer": "Preposition",
      "explanation": "'with' (સાથે) એ સંબંધ દર્શાવતું Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "In 'The test was <b>surprisingly</b> easy', what is 'surprisingly'?",
      "options": [
        "Adjective",
        "Adverb",
        "Noun",
        "Verb"
      ],
      "answer": "Adverb",
      "explanation": "'surprisingly' (આશ્ચર્યજનક રીતે) એ 'easy' (વિશેષણ) ના અર્થમાં વધારો કરે છે, તેથી તે Adverb છે."
    },
    {
      "question": "Which word is a pronoun? 'This is the book <b>which</b> I bought yesterday.'",
      "options": [
        "This",
        "book",
        "which",
        "bought"
      ],
      "answer": "which",
      "explanation": "'which' (જે) એ 'book' (નામ) ને સંબંધિત વાક્ય સાથે જોડે છે. તે Relative Pronoun છે."
    },
    {
      "question": "Identify the adjective: 'The journey was <b>long</b> and tiring.'",
      "options": [
        "journey",
        "was",
        "long",
        "tiring"
      ],
      "answer": "long",
      "explanation": "'long' (લાંબી) એ 'journey' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective છે. ('tiring' પણ વિશેષણ છે)."
    },
    {
      "question": "What part of speech is '<b>for</b>' in 'I have waited for a long time'?",
      "options": [
        "Preposition",
        "Conjunction",
        "Adverb",
        "Verb"
      ],
      "answer": "Preposition",
      "explanation": "આ વાક્યમાં 'for' (થી/માટે) એ સમયગાળો દર્શાવે છે, તેથી તે Preposition છે."
    },
    {
      "question": "'<b>Yippee!</b> It's a holiday!' What is 'Yippee!'?",
      "options": [
        "Noun",
        "Verb",
        "Interjection",
        "Adjective"
      ],
      "answer": "Interjection",
      "explanation": "'Yippee!' એ અત્યંત આનંદ વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Find the noun in: 'There is a lot of <b>water</b> in the bottle.'",
      "options": [
        "lot",
        "water",
        "in",
        "bottle"
      ],
      "answer": "water",
      "explanation": "'water' (પાણી) એ એક દ્રવ્યવાચક નામ (Material Noun) છે."
    },
    {
      "question": "In 'He writes <b>neatly</b>', 'neatly' is a(n)...",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'neatly' (સ્વચ્છ રીતે) એ ક્રિયાપદ 'writes' કેવી રીતે થાય છે તે દર્શાવે છે, તેથી તે Adverb છે."
    },
    {
      "question": "Find the verb: 'They <b>might visit</b> us next week.'",
      "options": [
        "They",
        "might visit",
        "us",
        "next"
      ],
      "answer": "might visit",
      "explanation": "'might visit' (કદાચ મુલાકાત લેશે) એ સંભાવના દર્શાવતી ક્રિયા છે. અહીં 'might' એ Modal Verb છે."
    }
  ],
  "test-18": [
    {
      "question": "What part of speech is '<b>below</b>' in 'The temperature is below zero'?",
      "options": [
        "Adverb",
        "Conjunction",
        "Preposition",
        "Adjective"
      ],
      "answer": "Preposition",
      "explanation": "'below' (નીચે) એ સ્તર કે માપનો સંબંધ દર્શાવે છે, તેથી તે Preposition છે."
    },
    {
      "question": "Identify the noun in: '<b>Kindness</b> is a virtue.'",
      "options": [
        "Kindness",
        "is",
        "a",
        "virtue"
      ],
      "answer": "Kindness",
      "explanation": "'Kindness' (દયા) એ એક ભાવવાચક નામ (Abstract Noun) છે."
    },
    {
      "question": "In 'The story was <b>really</b> funny', what is 'really'?",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'really' (ખરેખર) એ 'funny' (વિશેષણ) ના અર્થમાં વધારો કરે છે, તેથી તે Adverb છે."
    },
    {
      "question": "Which word is a pronoun? '<b>None</b> of them came to the party.'",
      "options": [
        "None",
        "them",
        "came",
        "party"
      ],
      "answer": "None",
      "explanation": "'None' (એક પણ નહીં) એ અનિશ્ચિત સર્વનામ (Indefinite Pronoun) છે."
    },
    {
      "question": "'<b>Ugh!</b> This tastes awful.' 'Ugh!' is an example of a(n)...",
      "options": [
        "Interjection",
        "Conjunction",
        "Pronoun",
        "Adjective"
      ],
      "answer": "Interjection",
      "explanation": "'Ugh!' એ અણગમો વ્યક્ત કરતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "Find the verb: 'You <b>must follow</b> the rules.'",
      "options": [
        "You",
        "must follow",
        "the",
        "rules"
      ],
      "answer": "must follow",
      "explanation": "'must follow' (પાલન કરવું જ જોઈએ) એ ફરજ દર્શાવતી ક્રિયા છે. અહીં 'must' એ Modal Verb છે."
    },
    {
      "question": "What part of speech is '<b>while</b>' in 'I read a book while waiting for the bus'?",
      "options": [
        "Pronoun",
        "Preposition",
        "Conjunction",
        "Adverb"
      ],
      "answer": "Conjunction",
      "explanation": "'while' (જ્યારે) એ બે ક્રિયાઓ જે એકસાથે થઈ રહી છે તેને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the adjective: 'The coffee is too <b>hot</b> to drink.'",
      "options": [
        "coffee",
        "is",
        "too",
        "hot"
      ],
      "answer": "hot",
      "explanation": "'hot' (ગરમ) એ 'coffee' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "In 'She acted <b>wisely</b>', 'wisely' is a(n)...",
      "options": [
        "Adjective",
        "Adverb",
        "Verb",
        "Noun"
      ],
      "answer": "Adverb",
      "explanation": "'wisely' (ડહાપણપૂર્વક) એ ક્રિયાપદ 'acted' કેવી રીતે થયું તે દર્શાવે છે, તેથી તે Adverb છે."
    },
    {
      "question": "What is the noun in: 'The <b>committee</b> has made its decision.'?",
      "options": [
        "committee",
        "has made",
        "its",
        "decision"
      ],
      "answer": "committee",
      "explanation": "'committee' (સમિતિ) એ સભ્યોના સમૂહ માટે વપરાતું સમૂહવાચક નામ (Collective Noun) છે."
    }
  ],
  "test-19": [
    {
      "question": "Which word is a verb? 'The baby <b>is sleeping</b> peacefully.'",
      "options": [
        "baby",
        "is sleeping",
        "peacefully",
        "The"
      ],
      "answer": "is sleeping",
      "explanation": "'is sleeping' (સૂઈ રહ્યું છે) એ વાક્યમાં ચાલુ ક્રિયા દર્શાવે છે, તેથી તે Verb છે."
    },
    {
      "question": "What part of speech is '<b>their</b>' in 'This is their house'?",
      "options": [
        "Pronoun",
        "Adjective",
        "Noun",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'their' (તેમનું) એ 'house' (નામ) પર માલિકી દર્શાવે છે, તેથી તે સંબંધક વિશેષણ (Possessive Adjective) છે."
    },
    {
      "question": "Identify the adjective: 'He told a <b>funny</b> story.'",
      "options": [
        "He",
        "told",
        "funny",
        "story"
      ],
      "answer": "funny",
      "explanation": "'funny' (રમુજી) એ 'story' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "In 'The bird flew <b>above</b> the clouds', 'above' is a...",
      "options": [
        "Preposition",
        "Conjunction",
        "Adverb",
        "Adjective"
      ],
      "answer": "Preposition",
      "explanation": "'above' (ઉપર) એ સ્થાન દર્શાવતું Preposition (નામયોગી અવ્યય) છે."
    },
    {
      "question": "Find the adverb: 'The package arrived <b>safely</b>.'",
      "options": [
        "package",
        "arrived",
        "safely",
        "The"
      ],
      "answer": "safely",
      "explanation": "'safely' (સુરક્ષિત રીતે) એ ક્રિયાપદ 'arrived' કેવી રીતે થયું તે દર્શાવે છે, તેથી તે Adverb છે."
    },
    {
      "question": "What part of speech is '<b>but</b>' in 'He is not only a singer but also an actor'?",
      "options": [
        "Adverb",
        "Conjunction",
        "Pronoun",
        "Preposition"
      ],
      "answer": "Conjunction",
      "explanation": "'not only...but also' એ બે વસ્તુઓને જોડતું સહસંબંધક સંયોજક (Correlative Conjunction) છે."
    },
    {
      "question": "Identify the noun in: '<b>Laughter</b> is the best medicine.'",
      "options": [
        "Laughter",
        "is",
        "best",
        "medicine"
      ],
      "answer": "Laughter",
      "explanation": "'Laughter' (હાસ્ય) એ એક ભાવવાચક નામ (Abstract Noun) છે."
    },
    {
      "question": "'<b>Cheers!</b> To your success.' What is 'Cheers!'?",
      "options": [
        "Noun",
        "Verb",
        "Interjection",
        "Pronoun"
      ],
      "answer": "Interjection",
      "explanation": "'Cheers!' એ શુભેચ્છા પાઠવવા માટે વપરાતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "In 'The book is for <b>you</b>', 'you' is a...",
      "options": [
        "Noun",
        "Adjective",
        "Pronoun",
        "Verb"
      ],
      "answer": "Pronoun",
      "explanation": "'you' (તમે/તને) એ વાક્યમાં કર્મ તરીકે વપરાયેલ સર્વનામ (Pronoun) છે."
    },
    {
      "question": "Find the verb: 'They <b>were playing</b> in the park.'",
      "options": [
        "They",
        "were playing",
        "in",
        "park"
      ],
      "answer": "were playing",
      "explanation": "'were playing' (રમી રહ્યા હતા) એ ચાલુ ભૂતકાળની ક્રિયા દર્શાવે છે."
    }
  ],
  "test-20": [
    {
      "question": "What part of speech is '<b>sometimes</b>' in 'I sometimes go for a walk'?",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Preposition"
      ],
      "answer": "Adverb",
      "explanation": "'sometimes' (ક્યારેક) એ ક્રિયા 'go' કેટલી વાર થાય છે તે દર્શાવે છે, તેથી તે Adverb of Frequency છે."
    },
    {
      "question": "Identify the pronoun: '<b>This</b> is the pen I lost.'",
      "options": [
        "This",
        "pen",
        "I",
        "lost"
      ],
      "answer": "This",
      "explanation": "'This' (આ) એ નજીકની વસ્તુ દર્શાવવા માટે વપરાતું સર્વનામ (Demonstrative Pronoun) છે."
    },
    {
      "question": "In 'The test was very <b>difficult</b>', what is 'difficult'?",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'difficult' (અઘરું) એ 'test' (નામ) નું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "Which word is a preposition in 'He divided the apple <b>between</b> the two brothers'?",
      "options": [
        "divided",
        "apple",
        "between",
        "brothers"
      ],
      "answer": "between",
      "explanation": "'between' (વચ્ચે) એ બે વ્યક્તિઓ કે વસ્તુઓ વચ્ચેનો સંબંધ દર્શાવે છે, તેથી તે Preposition છે."
    },
    {
      "question": "Find the verb: 'The moon <b>shines</b> at night.'",
      "options": [
        "moon",
        "shines",
        "at",
        "night"
      ],
      "answer": "shines",
      "explanation": "'shines' (ચમકે છે) એ ચંદ્ર દ્વારા થતી ક્રિયા છે, તેથી તે Verb છે."
    },
    {
      "question": "What part of speech is '<b>and</b>' in 'He is poor and honest'?",
      "options": [
        "Conjunction",
        "Preposition",
        "Adverb",
        "Pronoun"
      ],
      "answer": "Conjunction",
      "explanation": "'and' (અને) એ બે વિશેષણો 'poor' અને 'honest' ને જોડે છે, તેથી તે Conjunction છે."
    },
    {
      "question": "Identify the noun: 'The <b>police</b> caught the thief.'",
      "options": [
        "police",
        "caught",
        "the",
        "thief"
      ],
      "answer": "police",
      "explanation": "'police' એ એક સમૂહવાચક નામ (Collective Noun) છે જે પોલીસ વિભાગના સભ્યોનો ઉલ્લેખ કરે છે."
    },
    {
      "question": "'<b>Congratulations!</b> You got the job.' What is 'Congratulations!'?",
      "options": [
        "Verb",
        "Interjection",
        "Adjective",
        "Conjunction"
      ],
      "answer": "Interjection",
      "explanation": "'Congratulations!' એ અભિનંદન આપવા માટે વપરાતો ઉદ્ગાર છે, તેથી તે Interjection છે."
    },
    {
      "question": "In 'The children look <b>happy</b>', 'happy' is a(n)...",
      "options": [
        "Noun",
        "Adjective",
        "Adverb",
        "Verb"
      ],
      "answer": "Adjective",
      "explanation": "'happy' (ખુશ) એ 'children' (નામ) ની સ્થિતિનું વર્ણન કરે છે, તેથી તે Adjective છે."
    },
    {
      "question": "What is the adverb in 'The soldier fought <b>bravely</b>'?",
      "options": [
        "soldier",
        "fought",
        "bravely",
        "The"
      ],
      "answer": "bravely",
      "explanation": "'bravely' (બહાદુરીથી) એ ક્રિયાપદ 'fought' કેવી રીતે થયું તે દર્શાવે છે, તેથી તે Adverb છે."
    }
  ]
};
