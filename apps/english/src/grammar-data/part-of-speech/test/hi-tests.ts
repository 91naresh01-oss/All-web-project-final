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
      "explanation": "‘brown’ यह 'fox' (संज्ञा) के अर्थ में वृद्धि करता है, इसलिए वह Adjective (विशेषण) है."
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
      "explanation": "'Honesty' (प्रामाणिकता) यह एक भानेचक संज्ञा (Abstract Noun) है."
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
      "explanation": "'quickly' (तेज़ी से) यह 'finished' (क्रिया (Verb)) यावी रूप से थयुं वह दर्शाता है, इसलिए वह Adverb (क्रियाविशेषण) है."
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
      "explanation": "'She' (उसकी) यह कोई स्त्रीके संज्ञा को बदले प्रयोग होताेल शब्द है, इसलिए वह Pronoun (सर्वनाम) है."
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
      "explanation": "'under' ( कीचे) यह 'cat' और 'table' के के बीच का स्थान संबंध दर्शाता है, इसलिए वह Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'fly' (उडवुं) यह पक्षीओ के द्वारा होती क्रिया दर्शाता है, इसलिए वह Verb (क्रिया (Verb)) है."
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
      "explanation": "'but' (भी) यह दो स्वतंत्र वाक्यों को जोडे है, इसलिए वह Conjunction (संयोजक) है."
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
      "explanation": "'Wow!' यह यहश्चर्य की भावना व्यक्त करतो उद्गार है, इसलिए वह Interjection (उद्गारवाचक अव्यय) है."
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
      "explanation": "'brave' (बहादुर) यह 'soldier' (संज्ञा) के गुण का वर्णन करता है, इसलिए वह Adjective (विशेषण) है."
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
      "explanation": "'myself' यह जोर देकर कह के लिए प्रयुक्त सर्वनाम (Emphatic Pronoun) है."
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
      "explanation": "'and' (और) यह 'Ram' और 'Shyam' यह दो शब्दो को जोडे है, इसलिए वह Conjunction (संयोजक) है."
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
      "explanation": "'is crying' (रडी रह्युं है) यह वाक्य में होती क्रिया दर्शाता है, इसलिए वह Verb (क्रिया (Verb)) है."
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
      "explanation": "'sweet' (मधुर) यह 'flowers' (संज्ञा) की सुगंध का वर्णन करता है, इसलिए वह Adjective (विशेषण) है."
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
      "explanation": "'into' ( मैं) यह 'he' और 'river' बीच गति और स्थान का संबंध दर्शाता है, इसलिए वह Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'they' (वे) यह एक की बजाय अधिक लोगों के संज्ञा को बदले प्रयोग होताेलुं सर्वनाम है."
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
      "explanation": "'beautifully' (सुंदर रूप से) यह 'sings' (क्रिया (Verb)) यावी रूप से होता है वह दर्शाता है, इसलिए वह Adverb (क्रियाविशेषण) है."
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
      "explanation": "'Alas!' यह दुःख की भावना व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'team' (टुकडी) यह एक समूहवाचक संज्ञा (Collective Noun) है."
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
      "explanation": "'sunny' (तडकावालो) यह 'day' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective (विशेषण) है."
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
      "explanation": "'read' (पढ़के) यह वाक्य में होती क्रिया है, इसलिए वह Verb (क्रिया (Verb)) है."
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
      "explanation": "'on' (उपर) यह 'book' और 'desk' के के बीच का स्थान संबंध दर्शाता है, इसलिए वह Preposition है."
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
      "explanation": "'happiness' (खुशी) यह एक भाव है, इसलिए वह भानेचक संज्ञा (Abstract Noun) है."
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
      "explanation": "'loudly' (मोटेसे) यह 'barked' (क्रिया (Verb)) यावी रूप से थयुं वह दर्शाता है, इसलिए वह Adverb (क्रियाविशेषण) है."
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
      "explanation": "'Oh!' यह भूली जवा का भाव व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'me' (मुझे) यह 'I' का कर्म (Object) विभक्ति का रूप है और वह एक Pronoun (सर्वनाम) है."
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
      "explanation": "'wrote' (लख्युं) यह 'write' का भूतकाल का रूप है और वह वाक्य में हुई क्रिया दर्शाता है."
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
      "explanation": "'or' (या) यह दो विकल्पो (tea, coffee) को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'heavy' (जोरे) यह 'box' (संज्ञा) के गुण का वर्णन करता है, इसलिए वह Adjective (विशेषण) है."
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
      "explanation": "'old' (वृद्ध) यह 'man' (संज्ञा) के अर्थ में वृद्धि करता है, इसलिए वह Adjective है."
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
      "explanation": "'Birds' (पक्षीओ) यह एक जातिवाचक संज्ञा (Common Noun) है."
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
      "explanation": "'always' (हमेशा) यह क्रिया कब होता है वह दर्शाता है, इसलिए वह Adverb of Frequency (क्रियाविशेषण) है."
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
      "explanation": "'yours' (आपका) यह मालिकी दर्शाने वाला सर्वनाम (Possessive Pronoun) है."
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
      "explanation": "'beautiful' (सुंदर) यह 'dress' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective (विशेषण) है."
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
      "explanation": "'shines' (चमया है) यह सूर्य के द्वारा होती क्रिया है, इसलिए वह Verb (क्रिया (Verb)) है."
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
      "explanation": "'Hurray!' यह आनंद की भावना व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'near' (पास) यह स्थान दर्शाने वाला Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'because' (क्योंकि) यह कारण दर्शावता दो वाक्यों को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'crowd' (झुंड) यह एक समूहवाचक संज्ञा (Collective Noun) है."
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
      "explanation": "'very' (बहुत) यह 'interesting' (विशेषण) के अर्थ में वृद्धि करता है, इसलिए वह Adverb (क्रियाविशेषण) है."
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
      "explanation": "'its' (उसका) यह प्राणी के लिए प्रयुक्त मालिकी दर्शाने वाला सर्वनाम (Possessive Pronoun) है."
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
      "explanation": "'are studying' (अभ्यास कर रहे हैं) यह अपूर्ण वर्तमान काल की क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'intelligent' (बुद्धिशाली) यह 'student' (संज्ञा) के गुण का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'late' (मोडो) यह क्रिया (Verb) 'arrived' कब थयुं वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'behind' (पीहै) यह 'book' और 'sofa' के के बीच का स्थान संबंध दर्शाता है, इसलिए वह Preposition है."
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
      "explanation": "'Who' (कौन) यह प्रश्न पूछने के लिए प्रयुक्त सर्वनाम (Interrogative Pronoun) है."
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
      "explanation": "'if' (जो) यह शरत दर्शावता दो वाक्यों को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'Mumbai' यह एक विशेष शहेर की संज्ञा है, इसलिए वह व्यक्तिवाचक संज्ञा (Proper Noun) है."
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
      "explanation": "'Bravo!' यह शाबाशी देने के लिए प्रयुक्त उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'good' (अच्छा) यह 'soup' (संज्ञा) के स्वाद का वर्णन करता है. वह linking verb 'tastes' के बाद आया हुआ विशेषण है."
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
      "explanation": "'has completed' (पूर्ण कर लिया है) यह पूर्ण वर्तमान काल की क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'across' ( की पार) यह दिशा और गति का संबंध दर्शाता है, इसलिए वह Preposition है."
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
      "explanation": "'fluently' (सरलतासे) यह क्रिया (Verb) 'speaks' यावी रूप से होता है वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'my' (मेरा) यह 'book' (संज्ञा) पर मालिकी दर्शाता है, इसलिए वह संबंधक विशेषण (Possessive Adjective) है."
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
      "explanation": "'is barking' (भसी रहा है) यह वाक्य में होती क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'Ganga' यह एक विशेष नदी की संज्ञा है, इसलिए वह व्यक्तिवाचक संज्ञा (Proper Noun) है."
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
      "explanation": "'so' (इसलिए) यह परिणाम दर्शावता दो वाक्यों को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'blue' (वादली) यह 'sky' (संज्ञा) के रंग का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'Ouch!' यह पीडा की भावना व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'We' (हम) यह एक की बजाय अधिक लोगों (जो में बोलकेर शामेल हो) के संज्ञा को बदले प्रयोग होताेल सर्वनाम है."
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
      "explanation": "'early' (जल्दी) यह क्रिया (Verb) 'arrived' के समय बारे में जानकारी देता है, इसलिए वह Adverb है."
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
      "explanation": "'are singing' (गाई रहे हैं) यह वाक्य में अपूर्ण क्रिया दर्शाता है, इसलिए वह Verb (क्रिया (Verb)) है."
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
      "explanation": "'on' (उपर) यह 'cat' और 'mat' के के बीच का स्थान संबंध दर्शाता है, इसलिए वह Preposition है."
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
      "explanation": "'very' (बहुत) यह 'smart' (विशेषण) के अर्थ में वृद्धि करता है, इसलिए वह Adverb (क्रियाविशेषण) है."
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
      "explanation": "'That' (पेलुं) यह दूर की वस्तु दर्शाने के लिए प्रयुक्त सर्वनाम (Demonstrative Pronoun) है."
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
      "explanation": "'red' (लाल) यह 'dress' (संज्ञा) के रंग का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'unless' (जहाँ तक नहीं) यह शरत दर्शावता दो वाक्यों को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'Oops!' यह भूल होने का भाव व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'dog' (कूतरो) यह एक प्राणी का जातिवाचक संज्ञा (Common Noun) है."
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
      "explanation": "'soundly' (निरांवह) यह 'sleeping' (क्रिया (Verb)) यावी रूप से हुई रह्युं है वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'will come' (यहवशे) यह भविष्य में पर होने वाली क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'over' (उपरसे) यह स्थान दर्शाने वाला Preposition है, जो 'plane' और 'clouds' के के बीच का संबंध बतावे है."
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
      "explanation": "'courage' (हिंमत) यह एक भाव है, इसलिए वह भानेचक संज्ञा (Abstract Noun) है."
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
      "explanation": "'incredibly' (अविश्वस कीय रूप से) यह 'boring' (विशेषण) के अर्थ में वृद्धि करता है, इसलिए वह Adverb है."
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
      "explanation": "'themselves' (उनकी खुद) यह जोर देकर कह के लिए प्रयुक्त सर्वनाम (Emphatic or Reflexive Pronoun) है."
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
      "explanation": "'Ah!' यह समजण पडवा का भाव व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'should study' (अभ्यास करना चाहिए) यह सलाह सूचवती क्रिया दर्शाता है. यहाँ 'should' यह Modal Verb है."
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
      "explanation": "'while' (जब) यह समय दर्शावता दो वाक्यों को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'spacious' (विशाल) यह 'room' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'softly' (धीमेसे) यह क्रिया (Verb) 'spoke' यावी रूप से थयुं वह दर्शाता है, इसलिए वह Adverb (क्रियाविशेषण) है."
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
      "explanation": "'jury' (पंच) यह सदस्योंके समूह के लिए प्रयुक्त समूहवाचक संज्ञा (Collective Noun) है."
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
      "explanation": "'rotates' (फरे है) यह पृथ्वी के द्वारा होती क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'his' (उसका) यह 'car' (संज्ञा) पर मालिकी दर्शाता है, इसलिए वह संबंधक विशेषण (Possessive Adjective) है. वह Pronoun नहीं."
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
      "explanation": "'cold' (ठंडी) यह 'night' (संज्ञा) का वर्णन करता है. ('windy' भी विशेषण है)."
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
      "explanation": "'towards' ( की तरफ) यह दिशा दर्शाने वाला Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'almost' (लगभग) यह 'finished' (विशेषण/क्रिया (Verb)) के अर्थ में वृद्धि करता है, इसलिए वह Adverb है."
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
      "explanation": "'although' (हालांकि) यह विरोधाभास दर्शावता दो वाक्यों को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'Wisdom' (ज्ञान) यह एक भानेचक संज्ञा (Abstract Noun) है."
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
      "explanation": "'Hello!' यह अभिवादन के लिए प्रयुक्त उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'us' (हमें) यह 'we' का कर्म (Object) विभक्ति का रूप है, इसलिए वह Pronoun (सर्वनाम) है."
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
      "explanation": "'have been waiting' (राह जोई रहा हूँ) यह अपूर्ण पूर्ण वर्तमान काल की क्रिया दर्शाता है."
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
      "explanation": "'yesterday' (कल) यह क्रिया 'came' कब हुई वह दर्शाता है, इसलिए वह Adverb of Time है."
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
      "explanation": "'Each' (प्रत्येक) यह विभाजन दर्शाने वाला सर्वनाम (Distributive Pronoun) है."
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
      "explanation": "'true' (सही) यह 'news' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'of' ( का,  की,  का, के) यह संबंध दर्शाने वाला Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'is ringing' (वागी रहा है) यह अपूर्ण क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "यहाँ 'since' (से) यह समय का संबंध दर्शाता है. जब 'since' दो वाक्यों को जोडे तब वह Conjunction होता है."
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
      "explanation": "'army' (सैन्य) यह सैनिकोके समूह के लिए प्रयुक्त समूहवाचक संज्ञा (Collective Noun) है."
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
      "explanation": "'Hush!' यह शांत रथेवा के लिए सूचन करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'brittle' (केजुक/बटकणुं) यह 'glass' (संज्ञा) के गुण का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'brightly' (वहजस्वी रूप से) यह 'shines' (क्रिया (Verb)) यावी रूप से होता है वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'beautifully' (सुंदर रूप से) यह 'sang' (क्रिया (Verb)) यावी रूप से थयुं वह दर्शाता है, इसलिए वह Adverb (क्रियाविशेषण) है."
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
      "explanation": "'itself' (वह खुद ज) यह 'house' (संज्ञा) पर जोर रख के लिए के लिए प्रयोग होता है. वह Emphatic Pronoun है."
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
      "explanation": "'strong' (मजबूत) यह 'man' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective (विशेषण) है."
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
      "explanation": "'at' (पर/पास) यह विशेष स्थान दर्शाने के लिए प्रयुक्त Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'They' (वे) यह एक की बजाय अधिक लोगों के संज्ञा को बदले प्रयोग होताेल सर्वनाम (Pronoun) है."
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
      "explanation": "'delivered' (पहोंचाड्या) यह वाक्य में हुई क्रिया दर्शाता है, इसलिए वह Verb (क्रिया (Verb)) है."
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
      "explanation": "'either...or' (या तो...या) यह दो विकल्पो को जोडतुं सहसंबंधक संयोजक (Correlative Conjunction) है."
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
      "explanation": "'Hey!' यह ध्यान खेंचवा के लिए प्रयुक्त उद्गार है, इसलिए वह Interjection (उद्गारवाचक अव्यय) है."
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
      "explanation": "'lion' (सिंह) यह एक प्राणी का जातिवाचक संज्ञा (Common Noun) है. ('king' और 'forest' भी संज्ञा है)."
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
      "explanation": "'dark' (अंधारी) यह 'night' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective (विशेषण) है."
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
      "explanation": "'through' ( में से) यह गति और मैंर्ग दर्शाता है, इसलिए वह Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'works' (काम करता है) यह वाक्य में होती क्रिया है, इसलिए वह Verb (क्रिया (Verb)) है."
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
      "explanation": "'slowly' (धीमे धीमे) यह 'walking' (क्रिया (Verb)) यावी रूप से हुई रह्युं है वह दर्शाता है, इसलिए वह Adverb (क्रियाविशेषण) है."
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
      "explanation": "'who' (जो) यह 'boy' (संज्ञा) को संबंधित वाक्य के साथ जोडे है. वह Relative Pronoun है."
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
      "explanation": "'our' (हमंरुं) यह 'house' (संज्ञा) पर मालिकी दर्शाता है, इसलिए वह संबंधक विशेषण (Possessive Adjective) है."
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
      "explanation": "'building' (इमैंरत) यह एक वस्तु का जातिवाचक संज्ञा (Common Noun) है."
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
      "explanation": "'Well done!' (शाबाश!) यह प्रशंसा व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'and' (और) यह 'clever' और 'beautiful' यह दो विशेषणो को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'pleasant' (यहहलादक) यह 'weather' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'had finished' (पूर्ण कर दीधुं था) यह पूर्ण भूतकाल की क्रिया दर्शाता है."
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
      "explanation": "'of' यह 'afraid' के साथ प्रयुक्त और संबंध दर्शाने वाला Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'childhood' (बचपन) यह जीवन की एक अवस्था है, इसलिए वह भानेचक संज्ञा (Abstract Noun) है."
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
      "explanation": "'diligently' (मेहनतसे) यह क्रिया (Verb) 'works' यावी रूप से होता है वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'Shh!' यह शांत रथेवा के लिए प्रयुक्त उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'Somebody' (किसी नेक) यह अनिश्चित सर्वनाम (Indefinite Pronoun) है क्योंकि वह कोई विशेष व्यक्ति का उल्लेख करतुं नहीं."
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
      "explanation": "'will arrive' (यहवशे) यह भविष्य में पर होने वाली क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'yet' (फिर भी भी) यह विरोधाभास दर्शावता दो वाक्यों को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'delicious' (स्वादिष्ट) यह 'cake' (संज्ञा) के गुण का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'tired' (होताालो) यह 'He' (सर्वनाम) की स्थिति का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'flock' (झुंड) यह घेटांके समूह के लिए प्रयुक्त समूहवाचक संज्ञा (Collective Noun) है."
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
      "explanation": "'daily' (दररोज) यह क्रिया 'read' कब होता है वह दर्शाता है, इसलिए वह Adverb of Frequency है. ( नोट: 'daily' विशेषण के रूप में भी प्रयोग होता है, दा.त. 'daily newspaper')."
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
      "explanation": "'whoever' (जो कोई भी) यह Relative Pronoun है जो एक पूरा clause को refer करता है."
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
      "explanation": "'kind' (दयालु) यह 'man' (संज्ञा) के स्वभाव का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'are blooming' (खीली रहे हैं) यह वाक्य में अपूर्ण क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'Phew!' यह राहत की भावना व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'after' (पीहै) यह गति और दिशा दर्शाने वाला Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'neither...nor' (यह भी नहीं...वह भी नहीं) यह दो नकारात्मक विकल्पो को जोडतुं Correlative Conjunction है."
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
      "explanation": "'books' (पुस्तको) यह वस्तुओ का जातिवाचक संज्ञा (Common Noun) है. ('table' भी संज्ञा है)."
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
      "explanation": "'extremely' (अत्यंत) यह 'smart' (विशेषण) के अर्थ में वृद्धि करता है, इसलिए वह Adverb है."
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
      "explanation": "'Ram and I' (राम और मैं) के लिए कर्ता (Subject) के रूप में 'We' (हम) सर्वनाम प्रयोग होता है."
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
      "explanation": "'sets' (यहथमे है) यह सूर्य के द्वारा होती क्रिया है, इसलिए वह Verb (क्रिया (Verb)) है."
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
      "explanation": "'loyal' (वफादार) यह 'friend' (संज्ञा) के गुण का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'before' (पहले) यह क्रिया (Verb) 'have seen' के समय बारे में जानकारी देता है, इसलिए वह Adverb of Time है."
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
      "explanation": "'near' (पास) यह स्थान का संबंध दर्शाता है, इसलिए वह Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'her' (उसकी को) यह 'she' का कर्म (Object) विभक्ति का रूप है, इसलिए वह Pronoun है."
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
      "explanation": "'or' (वरना) यह दो वाक्यों को जोडे है और विकल्प/परिणाम दर्शाता है. इसलिए वह Conjunction है."
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
      "explanation": "'girl' (लड़की) यह एक जातिवाचक संज्ञा (Common Noun) है. ('song' भी संज्ञा है)."
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
      "explanation": "'Good grief!' यह यहश्चर्य या निराशा व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'awful' (खराब) यह 'weather' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'can speak' (बोली शया है) यह क्षमता दर्शावती क्रिया है. यहाँ 'can' यह Modal Verb है."
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
      "explanation": "'among' (बीच) यह दो से अधिक व्यक्तिओ या वस्तुओ के के बीच का संबंध दर्शाता है, इसलिए वह Preposition है."
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
      "explanation": "'heavily' (जोरे) यह क्रिया (Verb) 'raining' यावी रूप से हुई रह्युं है वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'blue' (वादली) यह 'car' (संज्ञा) के रंग का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'are falling' (पडी रहे हैं) यह वाक्य में अपूर्ण क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'herd' (झुंड) यह ढोरके समूह के लिए प्रयुक्त समूहवाचक संज्ञा (Collective Noun) है."
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
      "explanation": "'unless' (जहाँ तक नहीं) यह शरत दर्शावता दो वाक्यों को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'sweet' (मधुर) यह 'voice' (संज्ञा) के गुण का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'Oh dear!' यह निराशा या चिंता व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'them' (उन्हें) यह 'they' का कर्म (Object) विभक्ति का रूप है, इसलिए वह Pronoun है."
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
      "explanation": "'fast' (तेज़ी से) यह क्रिया (Verb) 'ran' यावी रूप से थयुं वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'are twinkling' (टमटमी रहे हैं) यह वाक्य में अपूर्ण क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'with' (के साथ) यह संबंध दर्शाने वाला Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'surprisingly' (यहश्चर्यजनक रूप से) यह 'easy' (विशेषण) के अर्थ में वृद्धि करता है, इसलिए वह Adverb है."
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
      "explanation": "'which' (जो) यह 'book' (संज्ञा) को संबंधित वाक्य के साथ जोडे है. वह Relative Pronoun है."
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
      "explanation": "'long' (लंबी) यह 'journey' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective है. ('tiring' भी विशेषण है)."
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
      "explanation": "इस वाक्य में 'for' (से/के लिए) यह समय अवधि दर्शाता है, इसलिए वह Preposition है."
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
      "explanation": "'Yippee!' यह अत्यंत आनंद व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'water' (पाणी) यह एक द्रव्यवाचक संज्ञा (Material Noun) है."
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
      "explanation": "'neatly' (साफ रूप से) यह क्रिया (Verb) 'writes' यावी रूप से होता है वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'might visit' (शायद मुलाकात लेशे) यह संभावके दर्शावती क्रिया है. यहाँ 'might' यह Modal Verb है."
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
      "explanation": "'below' ( कीचे) यह स्तर या मैंप का संबंध दर्शाता है, इसलिए वह Preposition है."
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
      "explanation": "'Kindness' (दया) यह एक भानेचक संज्ञा (Abstract Noun) है."
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
      "explanation": "'really' (खरेखर) यह 'funny' (विशेषण) के अर्थ में वृद्धि करता है, इसलिए वह Adverb है."
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
      "explanation": "'None' (एक भी नहीं) यह अनिश्चित सर्वनाम (Indefinite Pronoun) है."
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
      "explanation": "'Ugh!' यह केपसंद व्यक्त करतो उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'must follow' (पालन करना ही चाहिए) यह फरज दर्शावती क्रिया है. यहाँ 'must' यह Modal Verb है."
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
      "explanation": "'while' (जब) यह दो क्रियाओ जो एक साथ हो रही है उसको जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'hot' (गरम) यह 'coffee' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'wisely' (डहाभीपूर्वक) यह क्रिया (Verb) 'acted' यावी रूप से थयुं वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'committee' (समिति) यह सदस्योंके समूह के लिए प्रयुक्त समूहवाचक संज्ञा (Collective Noun) है."
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
      "explanation": "'is sleeping' (सूई रह्युं है) यह वाक्य में अपूर्ण क्रिया दर्शाता है, इसलिए वह Verb है."
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
      "explanation": "'their' (उनका) यह 'house' (संज्ञा) पर मालिकी दर्शाता है, इसलिए वह संबंधक विशेषण (Possessive Adjective) है."
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
      "explanation": "'funny' (रमुजी) यह 'story' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'above' (उपर) यह स्थान दर्शाने वाला Preposition (संज्ञायोगी अव्यय) है."
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
      "explanation": "'safely' (सुरक्षित रूप से) यह क्रिया (Verb) 'arrived' यावी रूप से थयुं वह दर्शाता है, इसलिए वह Adverb है."
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
      "explanation": "'not only...but also' यह दो वस्तुओ को जोडतुं सहसंबंधक संयोजक (Correlative Conjunction) है."
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
      "explanation": "'Laughter' (हास्य) यह एक भानेचक संज्ञा (Abstract Noun) है."
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
      "explanation": "'Cheers!' यह शुभेच्छा पाठववा के लिए प्रयुक्त उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'you' (आप/तने) यह वाक्य में कर्म (Object) के रूप में प्रयोग होताेल सर्वनाम (Pronoun) है."
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
      "explanation": "'were playing' (खेल रहे थे) यह अपूर्ण भूतकाल की क्रिया दर्शाता है."
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
      "explanation": "'sometimes' (कबक) यह क्रिया 'go' याटली वार होता है वह दर्शाता है, इसलिए वह Adverb of Frequency है."
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
      "explanation": "'This' (यह) यह पास की वस्तु दर्शाने के लिए प्रयुक्त सर्वनाम (Demonstrative Pronoun) है."
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
      "explanation": "'difficult' (अघरुं) यह 'test' (संज्ञा) का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'between' (बीच) यह दो व्यक्तिओ या वस्तुओ के के बीच का संबंध दर्शाता है, इसलिए वह Preposition है."
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
      "explanation": "'shines' (चमया है) यह चंद्र के द्वारा होती क्रिया है, इसलिए वह Verb है."
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
      "explanation": "'and' (और) यह दो विशेषणो 'poor' और 'honest' को जोडे है, इसलिए वह Conjunction है."
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
      "explanation": "'police' यह एक समूहवाचक संज्ञा (Collective Noun) है जो पोलीस विभागके सदस्यों का उल्लेख करता है."
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
      "explanation": "'Congratulations!' यह अभिनंदन देने के लिए प्रयुक्त उद्गार है, इसलिए वह Interjection है."
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
      "explanation": "'happy' (खुश) यह 'children' (संज्ञा) की स्थिति का वर्णन करता है, इसलिए वह Adjective है."
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
      "explanation": "'bravely' (बहादुरीसे) यह क्रिया (Verb) 'fought' यावी रूप से थयुं वह दर्शाता है, इसलिए वह Adverb है."
    }
  ]
};
