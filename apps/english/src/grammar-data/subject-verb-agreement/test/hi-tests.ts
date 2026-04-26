import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "The dog ___ loudly.",
      "options": [
        "bark",
        "barks",
        "barking",
        "have barked"
      ],
      "answer": "barks",
      "explanation": "यहाँ कर्ता (Subject) 'The dog' एकवचन है, इसलिए उसके साथ क्रिया (Verb) का 's' या 'es' वाला रूप (barks) प्रयोग होता है."
    },
    {
      "question": "My friends ___ coming to my house.",
      "options": [
        "is",
        "am",
        "are",
        "was"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'My friends' बहुवचन है, इसलिए उसके साथ बहुवचन का क्रिया (Verb) 'are' प्रयोग होता है."
    },
    {
      "question": "She ___ a beautiful voice.",
      "options": [
        "have",
        "has",
        "had been",
        "having"
      ],
      "answer": "has",
      "explanation": "कर्ता (Subject) 'She' अन्य पुरुष एकवचन है, इसलिए उसके साथ 'has' प्रयोग होता है."
    },
    {
      "question": "We ___ happy to see you.",
      "options": [
        "is",
        "are",
        "am",
        "was"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'We' बहुवचन है, इसलिए उसके साथ 'are' प्रयोग होता है."
    },
    {
      "question": "The sun ___ in the east.",
      "options": [
        "rise",
        "rises",
        "is rising",
        "rose"
      ],
      "answer": "rises",
      "explanation": "सनातन सत्य दर्शाने के लिए सामान्य वर्तमान काल का प्रयोग होता है. कर्ता (Subject) 'The sun' एकवचन होने के कारण 'rises' आता है."
    },
    {
      "question": "An apple a day ___ the doctor away.",
      "options": [
        "keep",
        "keeps",
        "is keeping",
        "have kept"
      ],
      "answer": "keeps",
      "explanation": "यह एक कहेवत है और उसमैं कर्ता (Subject) 'An apple a day' एकवचन माना जाता है, इसलिए 'keeps' आता है."
    },
    {
      "question": "They ___ playing football now.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'They' बहुवचन है और 'now' शब्द अपूर्ण वर्तमान काल सूचित करता है, इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "He ___ not like coffee.",
      "options": [
        "do",
        "does",
        "is",
        "are"
      ],
      "answer": "does",
      "explanation": "सामान्य वर्तमान काल में नकार वाक्य बनाने के लिए तीसरा पुरुष एकवचन (He) के साथ 'does' का प्रयोग होता है."
    },
    {
      "question": "The quality of the apples ___ not good.",
      "options": [
        "were",
        "was",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "यहाँ मुख्य कर्ता (Subject) 'The quality' है, जो एकवचन है, नहीं या 'apples'. इसलिए 'was' प्रयोग होता है."
    },
    {
      "question": "I ___ a student.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "answer": "am",
      "explanation": "कर्ता (Subject) 'I' के साथ हमेशा 'am' क्रिया (Verb)का प्रयोग होता है."
    }
  ],
  "test-2": [
    {
      "question": "The children ___ in the garden.",
      "options": [
        "plays",
        "play",
        "is playing",
        "was playing"
      ],
      "answer": "play",
      "explanation": "कर्ता (Subject) 'The children' बहुवचन है, इसलिए उसके साथ क्रिया (Verb) का मूल रूप 'play' प्रयोग होता है."
    },
    {
      "question": "My sister ___ very well.",
      "options": [
        "sing",
        "sings",
        "are singing",
        "have sung"
      ],
      "answer": "sings",
      "explanation": "कर्ता (Subject) 'My sister' अन्य पुरुष एकवचन है, इसलिए क्रिया (Verb) को 's' लगता है."
    },
    {
      "question": "You ___ a good singer.",
      "options": [
        "is",
        "am",
        "are",
        "was"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'You' के साथ हमेशा 'are' क्रिया (Verb) प्रयोग होता है, भले ही वह एकवचन हो या बहुवचन."
    },
    {
      "question": "One of my friends ___ gone to Canada.",
      "options": [
        "have",
        "has",
        "are",
        "is"
      ],
      "answer": "has",
      "explanation": "जब 'One of' वाली रचना हो, तब कर्ता (Subject) 'One' को गणवा में आता है जो एकवचन है, इसलिए 'has' प्रयोग होता है."
    },
    {
      "question": "The news ___ not true.",
      "options": [
        "are",
        "is",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'News' शब्द देखाव में बहुवचन लगता है, परंतु वह एकवचन माना जाता है, इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "A pair of shoes ___ under the bed.",
      "options": [
        "are",
        "is",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "यहाँ कर्ता (Subject) 'A pair' है, जो एकवचन है. इसलिए, उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "The man with all the birds ___ on my street.",
      "options": [
        "live",
        "lives",
        "are living",
        "have lived"
      ],
      "answer": "lives",
      "explanation": "यहाँ मुख्य कर्ता (Subject) 'The man' है, जो एकवचन है. 'with all the birds' यह वृद्धि की जानकारी है. इसलिए 'lives' आता है."
    },
    {
      "question": "It ___ raining outside.",
      "options": [
        "are",
        "is",
        "were",
        "am"
      ],
      "answer": "is",
      "explanation": "कर्ता (Subject) 'It' अन्य पुरुष एकवचन है, इसलिए उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "Fish and chips ___ my favorite dish.",
      "options": [
        "are",
        "is",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब दो शब्दो मली को एक ही वस्तु या विचार रजू करे (यहाँ एक वानगी), तब वह एकवचन माना जाता है और 'is' प्रयोग होता है."
    },
    {
      "question": "The list of items ___ on the desk.",
      "options": [
        "are",
        "is",
        "were",
        "have been"
      ],
      "answer": "is",
      "explanation": "वाक्य का मुख्य कर्ता (Subject) 'The list' है, जो एकवचन है. 'of items' यह वृद्धि की जानकारी है. इसलिए 'is' आता है."
    }
  ],
  "test-3": [
    {
      "question": "The teacher ___ the students to be quiet.",
      "options": [
        "tell",
        "tells",
        "are telling",
        "have told"
      ],
      "answer": "tells",
      "explanation": "कर्ता (Subject) 'The teacher' एकवचन है, इसलिए सामान्य वर्तमान काल में क्रिया (Verb) को 's' लगता है."
    },
    {
      "question": "The people who live next door ___ very friendly.",
      "options": [
        "is",
        "am",
        "are",
        "was"
      ],
      "answer": "are",
      "explanation": "यहाँ मुख्य कर्ता (Subject) 'The people' है, जो बहुवचन है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "Mathematics ___ my favorite subject.",
      "options": [
        "are",
        "is",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Mathematics' जैसे विषयोके संज्ञा देखाव में बहुवचन लगता है, परंतु वह एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "My glasses ___ on the table.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Glasses', 'scissors', 'trousers' जैसे शब्दो या जो दो भागोसे बनताला होता है, वह बहुवचन माना जाता है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "The team ___ practicing for the match.",
      "options": [
        "are",
        "is",
        "have",
        "were"
      ],
      "answer": "is",
      "explanation": "जब 'team' (समूह) एक समूह के रूप में काम करतुं हो, तब वह एकवचन माना जाता है और 'is' प्रयोग होता है."
    },
    {
      "question": "There ___ many books on the shelf.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'There' वाला वाक्यों में क्रिया (Verb) उसका के बाद यहवता संज्ञा ('many books') पर आधार राखे है. 'many books' बहुवचन होने के कारण 'are' आता है."
    },
    {
      "question": "This box of chocolates ___ to my sister.",
      "options": [
        "belong",
        "belongs",
        "are belonging",
        "have belonged"
      ],
      "answer": "belongs",
      "explanation": "यहाँ मुख्य कर्ता (Subject) 'This box' है, जो एकवचन है. इसलिए क्रिया (Verb) को 's' लगता है."
    },
    {
      "question": "Why ___ you always late?",
      "options": [
        "is",
        "are",
        "do",
        "does"
      ],
      "answer": "are",
      "explanation": "'You' के साथ हमेशा 'are' का प्रयोग होता है, भले ही वह प्रश्नवाचक वाक्य हो."
    },
    {
      "question": "The jury ___ unable to agree on a verdict.",
      "options": [
        "was",
        "were",
        "is",
        "has"
      ],
      "answer": "were",
      "explanation": "जब 'jury' (समूह) के सदस्यों बीच मतभेद हो और वे अलग-अलग व्यक्तिओ के रूप में वर्तता हो, तब वह बहुवचन माना जाता है. इसलिए 'were' प्रयोग होता है."
    },
    {
      "question": "Fifty dollars ___ a high price to pay.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब पैसा की रकम, समय अवधि या अंतर को एक इकाई के रूप में गिके जाता है, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    }
  ],
  "test-4": [
    {
      "question": "My father ___ a doctor.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "answer": "is",
      "explanation": "कर्ता (Subject) 'My father' एकवचन है, इसलिए उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "The cats ___ sleeping on the sofa.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'The cats' बहुवचन है, इसलिए उसके साथ 'are' प्रयोग होता है."
    },
    {
      "question": "She ___ to the market every morning.",
      "options": [
        "go",
        "goes",
        "is going",
        "went"
      ],
      "answer": "goes",
      "explanation": "'every morning' रोज़ की क्रिया सूचित करता है. कर्ता (Subject) 'She' अन्य पुरुष एकवचन होने के कारण क्रिया (Verb) को 'es' लगता है."
    },
    {
      "question": "These flowers ___ beautiful.",
      "options": [
        "is",
        "are",
        "was",
        "am"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'These flowers' बहुवचन है, इसलिए 'are' का प्रयोग होता है."
    },
    {
      "question": "The boy who won the two medals ___ my friend.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "यहाँ मुख्य कर्ता (Subject) 'The boy' है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "There ___ a big tree in our garden.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'There' वाला वाक्य में क्रिया (Verb) के बाद यहवता संज्ञा 'a big tree' पर आधार राखे है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "What ___ you doing?",
      "options": [
        "is",
        "are",
        "am",
        "do"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'you' के साथ प्रश्नवाचक वाक्य में 'are' का प्रयोग होता है."
    },
    {
      "question": "His trousers ___ torn.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Trousers' (पेन्ट) जैसे शब्दो, जो दो समैंन भागोसे बनताला होता है, वह बहुवचन माना जाता है, इसलिए 'are' आता है."
    },
    {
      "question": "The police ___ looking for the thief.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Police' शब्द हमेशा बहुवचन माना जाता है, इसलिए उसके साथ 'are' प्रयोग होता है."
    },
    {
      "question": "Slow and steady ___ the race.",
      "options": [
        "win",
        "wins",
        "are winning",
        "have won"
      ],
      "answer": "wins",
      "explanation": "यह एक कहेवत है. 'Slow and steady' एक ही विचार रजू करता है, इसलिए वह एकवचन माना जाता है और क्रिया (Verb) को 's' लगता है."
    }
  ],
  "test-5": [
    {
      "question": "The birds ___ flying in the sky.",
      "options": [
        "is",
        "are",
        "was",
        "am"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'The birds' बहुवचन है, इसलिए क्रिया (Verb) 'are' प्रयोग होता है."
    },
    {
      "question": "My mother ___ delicious food.",
      "options": [
        "cook",
        "cooks",
        "cooking",
        "is cook"
      ],
      "answer": "cooks",
      "explanation": "कर्ता (Subject) 'My mother' अन्य पुरुष एकवचन है, इसलिए सामान्य वर्तमान काल में क्रिया (Verb) 'cooks' आता है."
    },
    {
      "question": "The information you gave me ___ very useful.",
      "options": [
        "was",
        "were",
        "are",
        "have been"
      ],
      "answer": "was",
      "explanation": "यहाँ मुख्य कर्ता (Subject) 'The information' है. 'Information' यह न गणनीय संज्ञा (uncountable noun) और एकवचन है, इसलिए 'was' आता है."
    },
    {
      "question": "A lot of work ___ still to be done.",
      "options": [
        "is",
        "are",
        "have",
        "were"
      ],
      "answer": "is",
      "explanation": "यहाँ कर्ता (Subject) 'A lot of work' है. 'Work' यह न गणनीय संज्ञा (uncountable) है, इसलिए वह एकवचन माना जाता है और 'is' आता है."
    },
    {
      "question": "Politics ___ a dirty game.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Politics', 'economics' जैसे शब्दो अंदर 's' होना फिर भी एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The United States ___ a big country.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "देशोके संज्ञा, भले ही वह बहुवचन जैसे देखाता हो, एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "Where ___ my keys?",
      "options": [
        "is",
        "are",
        "do",
        "does"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'my keys' बहुवचन है, इसलिए प्रश्नवाचक वाक्य में 'are' का प्रयोग होता है."
    },
    {
      "question": "Each of the boys ___ a prize.",
      "options": [
        "get",
        "gets",
        "are getting",
        "have got"
      ],
      "answer": "gets",
      "explanation": "जब वाक्य की शुरुआत 'Each of' से होता, तब कर्ता (Subject) एकवचन माना जाता है. इसलिए क्रिया (Verb) को 's' लगता है."
    },
    {
      "question": "The stars ___ brightly at night.",
      "options": [
        "shine",
        "shines",
        "is shining",
        "has shined"
      ],
      "answer": "shine",
      "explanation": "कर्ता (Subject) 'The stars' बहुवचन है, इसलिए क्रिया (Verb) का मूल रूप 'shine' प्रयोग होता है."
    },
    {
      "question": "The water in these rivers ___ cold.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "यहाँ मुख्य कर्ता (Subject) 'The water' है, जो न गणनीय (uncountable) और एकवचन है. इसलिए 'is' प्रयोग होता है."
    }
  ],
  "test-6": [
    {
      "question": "One of the students ___ absent today.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'One of' से शुरू होने वाले वाक्य में, कर्ता (Subject) 'One' को गणवा में आता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "All the players in the team ___ playing well.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'All the players' बहुवचन है, इसलिए उसके साथ 'are' क्रिया (Verb) प्रयोग होता है."
    },
    {
      "question": "The dog, along with its puppies, ___ sleeping.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'along with', 'as well as', 'with' जैसे शब्दोसे जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The dog') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "Bread and butter ___ his only food.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब दो शब्दो 'and' से जोडाए हुए हो भी एक ही विचार या वस्तु का भाव रजू करे, तब वह एकवचन माना जाता है. यहाँ 'Bread and butter' एक ही भोजन का उल्लेख करता है, इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "There ___ a problem with the car.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'There' वाला वाक्यों मैं, क्रिया (Verb) उसका के बाद यहवता संज्ञा ('a problem') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "The scissors ___ on the table.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Scissors' (कातर) शब्द हमेशा बहुवचन माना जाता है क्योंकि वह दो भागोसे बना हुआ है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "My family ___ very large.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'family' (कुटुंब) को एक इकाई के रूप में गिके जाता है, तब वह एकवचन माना जाता है और उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "Ten kilometers ___ a long distance to walk.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब अंतर, समय, या रकम को एक संपूर्ण इकाई के रूप में रजू किया जाता है, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "He and his brother ___ coming today.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब दो कर्ता (Subject) 'and' से जोडाए हुए हो, तब वह बहुवचन बनता है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "Does anyone ___ a pen?",
      "options": [
        "have",
        "has",
        "had",
        "is having"
      ],
      "answer": "have",
      "explanation": "'Does' के साथके प्रश्नवाचक वाक्य में क्रिया (Verb) का मूल रूप प्रयोग होता है. 'anyone' एकवचन होना फिर भी, 'Does' पहेलेसे ही तीसरा पुरुष एकवचन का भाव दर्शाता है, इसलिए 'have' आता है."
    }
  ],
  "test-7": [
    {
      "question": "The boy ___ to school every day.",
      "options": [
        "go",
        "goes",
        "is going",
        "have gone"
      ],
      "answer": "goes",
      "explanation": "कर्ता (Subject) 'The boy' अन्य पुरुष एकवचन है और 'every day' सामान्य वर्तमान काल सूचित करता है, इसलिए क्रिया (Verb) को 'es' लगता है."
    },
    {
      "question": "The cows ___ grazing in the field.",
      "options": [
        "is",
        "are",
        "was",
        "am"
      ],
      "answer": "are",
      "explanation": "कर्ता (Subject) 'The cows' बहुवचन है, इसलिए उसके साथ 'are' प्रयोग होता है."
    },
    {
      "question": "My best friend ___ leaving for London tomorrow.",
      "options": [
        "is",
        "are",
        "am",
        "have"
      ],
      "answer": "is",
      "explanation": "कर्ता (Subject) 'My best friend' एकवचन है, इसलिए क्रिया (Verb) 'is' प्रयोग होता है."
    },
    {
      "question": "Gulliver's Travels ___ written by Jonathan Swift.",
      "options": [
        "was",
        "were",
        "is",
        "are"
      ],
      "answer": "was",
      "explanation": "पुस्तकों के नाम, भले ही वह बहुवचन जैसे लागे, एकवचन माना जाता है. इसलिए 'was' आता है."
    },
    {
      "question": "The furniture in this room ___ very old.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Furniture' यह न गणनीय संज्ञा (uncountable noun) है और वह हमेशा एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "The color of his eyes ___ blue.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "इस वाक्य का मुख्य कर्ता (Subject) 'The color' है, जो एकवचन है, 'eyes' नहीं. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Two and two ___ four.",
      "options": [
        "make",
        "makes",
        "is making",
        "have made"
      ],
      "answer": "make",
      "explanation": "जब 'and' से जोडाए हुए दो अंको गाणितिक क्रिया दर्शावे, तब वह बहुवचन माना जाता है और क्रिया (Verb) का मूल रूप आता है. हालांकि, 'makes' भी स्वीकार्य है."
    },
    {
      "question": "What ___ the latest news?",
      "options": [
        "is",
        "are",
        "do",
        "does"
      ],
      "answer": "is",
      "explanation": "'News' शब्द एकवचन है, इसलिए उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "The committee ___ decided on the matter.",
      "options": [
        "have",
        "has",
        "are",
        "is"
      ],
      "answer": "has",
      "explanation": "जब 'committee' (समिति) एक समूह के रूप में सर्वसंमतिसे निर्णय ले, तब वह एकवचन माना जाता है और 'has' प्रयोग होता है."
    },
    {
      "question": "Here ___ the books you asked for.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Here' और 'There' से शुरू होने वाले वाक्यों में क्रिया (Verb) उसका के बाद यहवता संज्ञा ('the books') अनुसार आता है. 'the books' बहुवचन होने के कारण 'are' आता है."
    }
  ],
  "test-8": [
    {
      "question": "A flock of sheep ___ grazing in the field.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "यहाँ कर्ता (Subject) 'A flock' (झुंड) है, जो एकवचन समूहवाचक संज्ञा है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The poet and singer ___ dead.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब 'and' से जोडाए हुए दो शब्दो एक ही व्यक्ति का उल्लेख करवह हो (यहाँ जो कवि है वह ही गायक है, क्योंकि 'the' केवल प्रथम शब्द पहले है), तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The captain, with his team members, ___ arrived.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब कर्ता (Subject) 'with' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The captain') अनुसार आता है, जो एकवचन है. इसलिए 'has' प्रयोग होता है."
    },
    {
      "question": "A series of lectures ___ scheduled for this week.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "इस वाक्य का मुख्य कर्ता (Subject) 'A series' है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "Two-thirds of the students ___ present.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब अपूर्णांक (fraction) के बाद गणनीय बहुवचन संज्ञा ('students') आता है, तब क्रिया (Verb) बहुवचन होता है. इसलिए 'are' आता है."
    },
    {
      "question": "The Arabian Nights ___ still a popular book.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'The Arabian Nights' यह एक पुस्तक की संज्ञा है. पुस्तकों के नाम हमेशा एकवचन माना जाता है, इसलिए 'is' आता है."
    },
    {
      "question": "My uncle ___ in Mumbai.",
      "options": [
        "live",
        "lives",
        "is living",
        "have lived"
      ],
      "answer": "lives",
      "explanation": "कर्ता (Subject) 'My uncle' अन्य पुरुष एकवचन है, इसलिए सामान्य वर्तमान काल में क्रिया (Verb) को 's' लगता है."
    },
    {
      "question": "All the furniture I bought ___ new.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Furniture' यह न गणनीय संज्ञा (uncountable noun) है और वह हमेशा एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "This ___ one of the most interesting stories I have ever read.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "वाक्य का कर्ता (Subject) 'This' है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Many a student ___ tried to pass this exam.",
      "options": [
        "have",
        "has",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'Many a' के बाद हमेशा एकवचन संज्ञा ('student') और एकवचन क्रिया (Verb) ('has') आता है. यह एक विशिष्ट नियम है."
    }
  ],
  "test-9": [
    {
      "question": "The boy and the girl ___ to the same school.",
      "options": [
        "go",
        "goes",
        "is going",
        "has gone"
      ],
      "answer": "go",
      "explanation": "जब दो कर्ता (Subject) 'and' से जोडाए हुए हो, तब वह बहुवचन बनता है. इसलिए क्रिया (Verb) का मूल रूप 'go' प्रयोग होता है."
    },
    {
      "question": "The Prime Minister, together with his wife, ___ the press cordially.",
      "options": [
        "greet",
        "greets",
        "are greeting",
        "have greeted"
      ],
      "answer": "greets",
      "explanation": "जब कर्ता (Subject) 'together with' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The Prime Minister') अनुसार आता है, जो एकवचन है. इसलिए 'greets' आता है."
    },
    {
      "question": "The number of students in the class ___ forty.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब वाक्य की शुरुआत 'The number of' से होता, तब क्रिया (Verb) हमेशा एकवचन ('is') होता है."
    },
    {
      "question": "A number of students ___ waiting outside.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब वाक्य की शुरुआत 'A number of' से होता, तब उसका अर्थ 'बहुत' होता है और क्रिया (Verb) बहुवचन ('are') होता है."
    },
    {
      "question": "Everybody ___ a good time at the party.",
      "options": [
        "are having",
        "is having",
        "have",
        "has"
      ],
      "answer": "is having",
      "explanation": "'Everybody' जैसे अनिश्चित सर्वनाम एकवचन माना जाता है. इसलिए उसके साथ एकवचन क्रिया (Verb) 'is' आता है. 'is having' उचित है."
    },
    {
      "question": "Measles ___ a contagious disease.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Measles' (ओरी) जैसे रोगोके संज्ञा अंदर 's' होना फिर भी एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The rich ___ not always happy.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब विशेषण (adjective) की आगे 'the' लागे (the rich, the poor), तब वह पूरा वर्ग का उल्लेख करता है और बहुवचन माना जाता है. इसलिए 'are' आता है."
    },
    {
      "question": "Each of these books ___ interesting.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Each of' से शुरू होने वाले वाक्य में कर्ता (Subject) एकवचन माना जाता है, इसलिए 'is' आता है."
    },
    {
      "question": "Neither you nor I ___ mistaken.",
      "options": [
        "is",
        "are",
        "am",
        "were"
      ],
      "answer": "am",
      "explanation": "जब 'Neither...nor' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('I') अनुसार आता है. इसलिए 'am' प्रयोग होता है."
    },
    {
      "question": "The cost of all these articles ___ risen.",
      "options": [
        "has",
        "have",
        "are",
        "is"
      ],
      "answer": "has",
      "explanation": "इस वाक्य का मुख्य कर्ता (Subject) 'The cost' है, जो एकवचन है. इसलिए 'has' आता है."
    }
  ],
  "test-10": [
    {
      "question": "The ship, with its crew, ___ lost at sea.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "जब कर्ता (Subject) 'with' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The ship') अनुसार आता है, जो एकवचन है. इसलिए 'was' आता है."
    },
    {
      "question": "A gang of robbers ___ entered the village.",
      "options": [
        "has",
        "have",
        "are",
        "is"
      ],
      "answer": "has",
      "explanation": "यहाँ कर्ता (Subject) 'A gang' (टोलकी) है, जो एकवचन समूहवाचक संज्ञा है. इसलिए 'has' प्रयोग होता है."
    },
    {
      "question": "The cattle ___ grazing in the field.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Cattle' (ढोर) शब्द देखाव में एकवचन लगता है, परंतु वह हमेशा बहुवचन माना जाता है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "Neither of the two boys ___ done his homework.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'Neither of' के बाद हमेशा एकवचन क्रिया (Verb) आता है. इसलिए 'has' प्रयोग होता है."
    },
    {
      "question": "The chairman and managing director of our company ___ a very wise man.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "यहाँ 'chairman' और 'managing director' एक ही व्यक्ति है क्योंकि 'the' केवल प्रथम पद पहले है. इसलिए कर्ता (Subject) एकवचन है और 'is' आता है."
    },
    {
      "question": "Iron, as well as coal, ___ found in India.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'as well as' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('Iron') अनुसार आता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Time and tide ___ for no man.",
      "options": [
        "wait",
        "waits",
        "is waiting",
        "have waited"
      ],
      "answer": "wait",
      "explanation": "यह एक प्रख्यात कहेवत है. हालांकि 'Time and tide' दो अलग वस्तुओ है, घणीवार यह कहेवत में 'wait' (बहुवचन) का प्रयोग होता है, परंतु कुछ 'waits' (एकवचन) भी स्वीकारे है. परंपरागत रूप से 'wait' अधिक प्रचलित है."
    },
    {
      "question": "The majority of the work ___ been done.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब 'majority' के बाद न गणनीय संज्ञा ('work') आता है, तब क्रिया (Verb) एकवचन होता है. इसलिए 'has' आता है."
    },
    {
      "question": "Either the shoes or the bag ___ on the table.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'Either...or' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('the bag') अनुसार आता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "A large number of soldiers ___ died for the country.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "have",
      "explanation": "'A large number of'  का अर्थ 'बहुत' होता है, इसलिए उसके साथ बहुवचन क्रिया (Verb) 'have' प्रयोग होता है."
    }
  ],
  "test-11": [
    {
      "question": "Neither the teacher nor the students ___ present.",
      "options": [
        "was",
        "were",
        "is",
        "has"
      ],
      "answer": "were",
      "explanation": "जब 'Neither...nor' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('the students') अनुसार आता है, जो बहुवचन है. इसलिए 'were' प्रयोग होता है."
    },
    {
      "question": "Each boy and each girl ___ given a prize.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "जब 'Each' शब्द का प्रयोग होता, भले ही वह 'and' से जोडाया हुआो हो, कर्ता (Subject) हमेशा एकवचन माना जाता है. इसलिए 'was' आता है."
    },
    {
      "question": "The team members ___ arguing among themselves.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब 'team members' (सदस्यों)  का उल्लेख अलग-अलग व्यक्तिओ के रूप में होता, तब वह बहुवचन माना जाता है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "The crowd ___ getting restless.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Crowd' (झुंड) सामान्य रूप से एक इकाई के रूप में माना जाता है, इसलिए उसके साथ एकवचन क्रिया (Verb) 'is' प्रयोग होता है."
    },
    {
      "question": "Physics, as well as mathematics, ___ difficult for some students.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'as well as' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('Physics') अनुसार आता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Either you or he ___ to blame.",
      "options": [
        "is",
        "are",
        "am",
        "were"
      ],
      "answer": "is",
      "explanation": "जब 'Either...or' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('he') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "No news ___ good news.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "'News' शब्द एकवचन है, इसलिए उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "The wages of sin ___ death.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "यहाँ 'wages'  का अर्थ 'परिणाम' होता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है. जो उसका अर्थ 'पगार' होत, तो वह बहुवचन गणात."
    },
    {
      "question": "Not only the students but also the teacher ___ laughing.",
      "options": [
        "was",
        "were",
        "is",
        "are"
      ],
      "answer": "was",
      "explanation": "जब 'Not only...but also' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('the teacher') अनुसार आता है, जो एकवचन है. इसलिए 'was' आता है."
    },
    {
      "question": "One of the most intelligent students who ___ full marks is my friend.",
      "options": [
        "get",
        "gets",
        "are getting",
        "has got"
      ],
      "answer": "gets",
      "explanation": "यहाँ मुख्य वाक्य 'One of the... students is my friend' है. के के बीच का वाक्य 'who gets full marks' यह 'students' बारे में वृद्धि की जानकारी देता है. हालांकि, मुख्य कर्ता (Subject) 'One' होने के कारण मुख्य क्रिया (Verb) 'is' आता है, परंतु 'who'  का संबंध उसका पासके 'students' (बहुवचन) के साथ होने के कारण कुछ यहाँ 'get' भी वापरी शया. भी 'One' पर जोर होने के कारण 'gets' भी स्वीकार्य माना जाता है. संदर्भ अनुसार, यहाँ मुख्य कर्ता (Subject) 'One' को अनुसरवुं अधिक उचित है."
    }
  ],
  "test-12": [
    {
      "question": "The government ___ passed a new law.",
      "options": [
        "has",
        "have",
        "are",
        "is"
      ],
      "answer": "has",
      "explanation": "जब 'government' (सरकार) को एक संस्था के रूप में गिके जाता है, तब वह एकवचन है. इसलिए 'has' आता है."
    },
    {
      "question": "My father and my mother ___ proud of me.",
      "options": [
        "is",
        "are",
        "am",
        "was"
      ],
      "answer": "are",
      "explanation": "जब दो अलग-अलग कर्ता (Subject) 'and' से जोडाय, तब वह बहुवचन बनता है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "Nobody ___ the trouble I've seen.",
      "options": [
        "know",
        "knows",
        "are knowing",
        "have known"
      ],
      "answer": "knows",
      "explanation": "'Nobody', 'somebody', 'anybody' जैसे अनिश्चित सर्वनामो एकवचन माना जाता है. इसलिए क्रिया (Verb) को 's' लगता है."
    },
    {
      "question": "The pair of scissors ___ on the table.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'a pair of'  का प्रयोग होता, तब कर्ता (Subject) 'pair' एकवचन माना जाता है. जो केवल 'scissors' होत तो वह बहुवचन गणात. इसलिए 'is' आता है."
    },
    {
      "question": "Some of the water ___ been contaminated.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब 'Some of' के बाद न गणनीय संज्ञा ('water') आता है, तब क्रिया (Verb) एकवचन होता है. इसलिए 'has' प्रयोग होता है."
    },
    {
      "question": "Some of the books ___ missing from the library.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब 'Some of' के बाद गणनीय बहुवचन संज्ञा ('books') आता है, तब क्रिया (Verb) बहुवचन होता है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "Either my sister or my parents ___ going to the party.",
      "options": [
        "is",
        "are",
        "am",
        "was"
      ],
      "answer": "are",
      "explanation": "जब 'Either...or' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('my parents') अनुसार आता है, जो बहुवचन है. इसलिए 'are' आता है."
    },
    {
      "question": "The majority of people ___ against the new rule.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब 'majority' के बाद गणनीय बहुवचन संज्ञा ('people') आता है, तब क्रिया (Verb) बहुवचन होता है. इसलिए 'are' आता है."
    },
    {
      "question": "The boy, unlike his friends, ___ very hardworking.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'unlike', 'like', 'with' जैसे शब्दोसे जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The boy') अनुसार आता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "More than one person ___ injured in the accident.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'More than one' के बाद हमेशा एकवचन संज्ञा ('person') और एकवचन क्रिया (Verb) ('was') आता है. यह एक विशिष्ट नियम है."
    }
  ],
  "test-13": [
    {
      "question": "The horse and carriage ___ at the door.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'and' से जोडाए हुए दो शब्दो एक ही संयुक्त वस्तु ('horse and carriage' यानी घोडागाडी)  का उल्लेख करे, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Neither the students nor their guide ___ happy with the arrangements.",
      "options": [
        "was",
        "were",
        "is",
        "are"
      ],
      "answer": "was",
      "explanation": "जब 'Neither...nor' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('their guide') अनुसार आता है, जो एकवचन है. इसलिए 'was' प्रयोग होता है."
    },
    {
      "question": "Every one of the shirts ___ a green collar.",
      "options": [
        "has",
        "have",
        "are",
        "is"
      ],
      "answer": "has",
      "explanation": "'Every one of' से शुरू होने वाले वाक्य में कर्ता (Subject) एकवचन माना जाता है. इसलिए 'has' प्रयोग होता है."
    },
    {
      "question": "A group of boys ___ playing in the park.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "यहाँ कर्ता (Subject) 'A group' है, जो एकवचन समूहवाचक संज्ञा है. इसलिए 'was' आता है."
    },
    {
      "question": "The CEO, who is also the founder, ___ giving a speech.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "यहाँ 'CEO' और 'founder' एक ही व्यक्ति है, इसलिए कर्ता (Subject) एकवचन है और उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "Half of the cake ___ eaten.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "जब अपूर्णांक ('Half of') के बाद न गणनीय संज्ञा ('cake') आता है, तब क्रिया (Verb) एकवचन होता है. इसलिए 'was' आता है."
    },
    {
      "question": "Half of the apples ___ rotten.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब अपूर्णांक ('Half of') के बाद गणनीय बहुवचन संज्ञा ('apples') आता है, तब क्रिया (Verb) बहुवचन होता है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "The public ___ requested to stay calm.",
      "options": [
        "is",
        "are",
        "has",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'public' (जनता)  का उल्लेख एक समूह के रूप में होता, तब वह एकवचन माना जाता है और उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "What he said ___ true.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "यहाँ कर्ता (Subject) 'What he said' (उसे जो कहा वह) एक यहखुं वाकहाँश (clause) है, जो एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "The police ___ to be very careful.",
      "options": [
        "need",
        "needs",
        "is needing",
        "has needed"
      ],
      "answer": "need",
      "explanation": "'Police' शब्द हमेशा बहुवचन माना जाता है, इसलिए उसके साथ क्रिया (Verb) का मूल रूप 'need' प्रयोग होता है."
    }
  ],
  "test-14": [
    {
      "question": "The girl or her sisters ___ the book every day.",
      "options": [
        "read",
        "reads",
        "are reading",
        "have read"
      ],
      "answer": "read",
      "explanation": "जब 'or' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('her sisters') अनुसार आता है, जो बहुवचन है. इसलिए 'read' प्रयोग होता है."
    },
    {
      "question": "A lot of people ___ waiting for the bus.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'A lot of' के बाद बहुवचन संज्ञा ('people') आता है, तब क्रिया (Verb) बहुवचन होता है. इसलिए 'are' आता है."
    },
    {
      "question": "The manager, no less than his assistants, ___ responsible.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'no less than', 'as well as' जैसे शब्दोसे जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The manager') अनुसार आता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "All of the cake ___ gone.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'All of' के बाद न गणनीय संज्ञा ('cake') आता है, तब क्रिया (Verb) एकवचन होता है. इसलिए 'is' आता है."
    },
    {
      "question": "All of the cookies ___ eaten.",
      "options": [
        "was",
        "were",
        "is",
        "has"
      ],
      "answer": "were",
      "explanation": "जब 'All of' के बाद गणनीय बहुवचन संज्ञा ('cookies') आता है, तब क्रिया (Verb) बहुवचन होता है. इसलिए 'were' आता है."
    },
    {
      "question": "The boy, whom I met yesterday, ___ my cousin.",
      "options": [
        "is",
        "are",
        "am",
        "were"
      ],
      "answer": "is",
      "explanation": "इस वाक्य का मुख्य कर्ता (Subject) 'The boy' है, जो एकवचन है. 'whom I met yesterday' यह वृद्धि की जानकारी है. इसलिए 'is' आता है."
    },
    {
      "question": "The Philippines ___ a country of many islands.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "'The Philippines' यह एक देश की संज्ञा है. देशोके संज्ञा, भले ही वह बहुवचन जैसे देखाय, एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Your patience and perseverance ___ admirable.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "यहाँ 'patience' और 'perseverance' दो अलग-अलग गुणो है जो 'and' से जोडाए हुए है. इसलिए कर्ता (Subject) बहुवचन है और 'are' प्रयोग होता है."
    },
    {
      "question": "There ___ been many opportunities.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "have",
      "explanation": "'There' वाला वाक्य में क्रिया (Verb) उसका के बाद यहवता संज्ञा ('many opportunities') अनुसार आता है. 'many opportunities' बहुवचन होने के कारण 'have' आता है."
    },
    {
      "question": "Somebody ___ at the door.",
      "options": [
        "is knocking",
        "are knocking",
        "knock",
        "have knocked"
      ],
      "answer": "is knocking",
      "explanation": "'Somebody' जैसे अनिश्चित सर्वनाम एकवचन माना जाता है, इसलिए उसके साथ 'is' प्रयोग होता है."
    }
  ],
  "test-15": [
    {
      "question": "Not only the boy but also his parents ___ convinced.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "are",
      "explanation": "जब 'Not only...but also' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('his parents') अनुसार आता है, जो बहुवचन है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "The teacher, as well as the students, ___ excited.",
      "options": [
        "was",
        "were",
        "is",
        "are"
      ],
      "answer": "was",
      "explanation": "जब कर्ता (Subject) 'as well as' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The teacher') अनुसार आता है, जो एकवचन है. इसलिए 'was' आता है."
    },
    {
      "question": "A bunch of keys ___ lying on the table.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "यहाँ कर्ता (Subject) 'A bunch' (झूमखुं) है, जो एकवचन समूहवाचक संज्ञा है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "None of the students ___ done the homework.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'None of' के बाद सामान्य रूप से एकवचन क्रिया (Verb) ('has') का प्रयोग होता है, हालांकि आधुनिक अंग्रेजी में बहुवचन ('have') भी स्वीकार्य है. परंतु, औपचारिक रूप से एकवचन अधिक उचित है."
    },
    {
      "question": "The news from the war front ___ not encouraging.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "'News' शब्द हमेशा एकवचन माना जाता है, इसलिए उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "The poor ___ suffering a lot.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब विशेषण ('poor') की आगे 'the' लागे, तब वह पूरा वर्ग (गरीब लोगों)  का उल्लेख करता है और बहुवचन माना जाता है. इसलिए 'are' आता है."
    },
    {
      "question": "Two hundred rupees ___ not a big sum for him.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब पैसा की रकम को एक इकाई के रूप में गिके जाता है, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The council ___ chosen its president.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब 'council' (परिषद) एक समूह के रूप में सर्वसंमतिसे कार्य करे, तब वह एकवचन माना जाता है. इसलिए 'has' आता है."
    },
    {
      "question": "If I ___ you, I would not do that.",
      "options": [
        "am",
        "was",
        "were",
        "be"
      ],
      "answer": "were",
      "explanation": "काल्पनिक (या) अवास्तविक परिस्थिति दर्शावता 'If' वाला वाक्यों मैं, 'I' के साथ 'was' को बदले 'were' का प्रयोग होता है."
    },
    {
      "question": "To err ___ human.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "answer": "is",
      "explanation": "जब क्रिया (Verb) का to-infinitive रूप ('To err') वाक्य का कर्ता (Subject) हो, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    }
  ],
  "test-16": [
    {
      "question": "The king, with all his ministers, ___ present in the court.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "जब कर्ता (Subject) 'with' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The king') अनुसार आता है, जो एकवचन है. इसलिए 'was' आता है."
    },
    {
      "question": "Every man, woman, and child ___ given a food packet.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "जब वाक्य की शुरुआत 'Every' से होता, भले ही कर्ता (Subject) 'and' से जोडाए हुए हो, क्रिया (Verb) हमेशा एकवचन होता है. इसलिए 'was' आता है."
    },
    {
      "question": "Neither my brother nor I ___ going to the party.",
      "options": [
        "is",
        "are",
        "am",
        "was"
      ],
      "answer": "am",
      "explanation": "जब 'Neither...nor' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('I') अनुसार आता है. इसलिए 'am' प्रयोग होता है."
    },
    {
      "question": "The quality of these mangoes ___ not good.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "इस वाक्य का मुख्य कर्ता (Subject) 'The quality' है, जो एकवचन है. 'of these mangoes' यह वृद्धि की जानकारी है. इसलिए 'is' आता है."
    },
    {
      "question": "The thief whom the police caught ___ sent to jail.",
      "options": [
        "was",
        "were",
        "is",
        "are"
      ],
      "answer": "was",
      "explanation": "यहाँ मुख्य कर्ता (Subject) 'The thief' है, जो एकवचन है. इसलिए 'was' प्रयोग होता है."
    },
    {
      "question": "One must do ___ duty.",
      "options": [
        "his",
        "her",
        "one's",
        "their"
      ],
      "answer": "one's",
      "explanation": "जब वाक्य का कर्ता (Subject) 'One' हो, तब संबंधक सर्वनाम के रूप में 'one's' का प्रयोग होता है, 'his' या 'her' नहीं."
    },
    {
      "question": "A herd of elephants ___ seen in the jungle.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "यहाँ कर्ता (Subject) 'A herd' (झुंड) है, जो एकवचन समूहवाचक संज्ञा है. इसलिए 'was' प्रयोग होता है."
    },
    {
      "question": "The jury ___ divided in their opinions.",
      "options": [
        "was",
        "were",
        "is",
        "has"
      ],
      "answer": "were",
      "explanation": "जब 'jury' (समूह) के सदस्योंके मंतव्यो में मतभेद हो, तब वह बहुवचन माना जाता है. 'their opinions' परसे भी यह ख्याल आता है. इसलिए 'were' आता है."
    },
    {
      "question": "Each of the suspected men ___ arrested.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'Each of' से शुरू होने वाले वाक्य में कर्ता (Subject) एकवचन माना जाता है, इसलिए 'was' आता है."
    },
    {
      "question": "Neither food nor water ___ available there.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "जब 'Neither...nor' से दो गणी न सकता ऐसे (uncountable) कर्ता (Subject) जोडाय, तब क्रिया (Verb) एकवचन होता है. इसलिए 'was' आता है."
    }
  ],
  "test-17": [
    {
      "question": "Most of the students ___ their homework.",
      "options": [
        "do",
        "does",
        "is doing",
        "has done"
      ],
      "answer": "do",
      "explanation": "जब 'Most of' के बाद गणनीय बहुवचन संज्ञा ('students') आता है, तब क्रिया (Verb) बहुवचन होता है. इसलिए 'do' आता है."
    },
    {
      "question": "Most of the information ___ incorrect.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'Most of' के बाद न गणनीय संज्ञा ('information') आता है, तब क्रिया (Verb) एकवचन होता है. इसलिए 'is' आता है."
    },
    {
      "question": "The collection of paintings ___ very impressive.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "वाक्य का मुख्य कर्ता (Subject) 'The collection' है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Not one of his lectures ___ ever been printed.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'Not one of' वाली रचसंज्ञाां कर्ता (Subject) एकवचन माना जाता है, इसलिए एकवचन क्रिया (Verb) 'has' का प्रयोग होता है."
    },
    {
      "question": "The rise and fall of the tide ___ due to the moon.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "'The rise and fall' यहाँ एक ही प्रक्रिया (भरती और ओट)  का उल्लेख करता है, इसलिए वह एकवचन माना जाता है और 'is' आता है."
    },
    {
      "question": "Either the manager or his assistants ___ the files.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "have",
      "explanation": "जब 'Either...or' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('his assistants') अनुसार आता है, जो बहुवचन है. इसलिए 'have' आता है."
    },
    {
      "question": "The acoustics of this hall ___ not good.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब 'acoustics'  का अर्थ 'ध्वनि गुणवत्ता' होता, तब वह बहुवचन माना जाता है. इसलिए 'are' प्रयोग होता है. जो वह विषय की संज्ञा होत तो एकवचन होत."
    },
    {
      "question": "The President and the CEO ___ arriving together.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "यहाँ 'The President' और 'the CEO' दो अलग-अलग व्यक्तिओ है क्योंकि दोनों के आगे 'the' आर्टिकल है. इसलिए कर्ता (Subject) बहुवचन है और 'are' आता है."
    },
    {
      "question": "There ___ a strange silence in the room.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'There' वाला वाक्य में क्रिया (Verb) उसका के बाद यहवता संज्ञा ('a strange silence') अनुसार आता है, जो एकवचन है. इसलिए 'was' आता है."
    },
    {
      "question": "Many a man ___ fallen prey to this temptation.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'Many a' के बाद हमेशा एकवचन संज्ञा ('man') और एकवचन क्रिया (Verb) ('has') आता है. यह एक स्थापित नियम है."
    }
  ],
  "test-18": [
    {
      "question": "The dog, not the cats, ___ responsible for the mess.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'not' के द्वारा दूसरों संज्ञासे अलग पडे, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The dog') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "Someone ___ left their wallet on the table.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'Someone' यह अनिश्चित सर्वनाम है और वह एकवचन माना जाता है. इसलिए उसके साथ 'has' प्रयोग होता है."
    },
    {
      "question": "All the equipment ___ in good condition.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Equipment' यह न गणनीय संज्ञा (uncountable noun) है और वह हमेशा एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "The teacher, accompanied by her students, ___ going on a trip.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'accompanied by' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The teacher') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "Two weeks ___ a long time to wait.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब समय अवधि को ('Two weeks') एक इकाई के रूप में गिके जाता है, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Neither of the paintings ___ sold.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'Neither of' के बाद हमेशा एकवचन क्रिया (Verb) आता है. इसलिए 'was' आता है."
    },
    {
      "question": "Walking in the park ___ a good exercise.",
      "options": [
        "is",
        "are",
        "be",
        "were"
      ],
      "answer": "is",
      "explanation": "जब Gerund (क्रिया (Verb) का 'ing' वाला रूप जो संज्ञा के रूप में प्रयोग होता, यहाँ 'Walking') वाक्य का कर्ता (Subject) हो, तब वह एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "The three musketeers ___ a famous novel.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "'The three musketeers' यह एक नवलकथा की संज्ञा है. पुस्तकों के नाम हमेशा एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "A number of cars ___ parked outside.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'A number of'  का अर्थ 'घणी' होता है, इसलिए उसके साथ बहुवचन क्रिया (Verb) 'are' प्रयोग होता है."
    },
    {
      "question": "The number of mistakes ___ very small.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "जब वाक्य की शुरुआत 'The number of' से होता, तब क्रिया (Verb) हमेशा एकवचन ('was') होता है."
    }
  ],
  "test-19": [
    {
      "question": "Either he or I ___ mistaken.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "answer": "am",
      "explanation": "जब 'Either...or' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('I') अनुसार आता है. इसलिए 'am' प्रयोग होता है."
    },
    {
      "question": "The assembly ___ discussing the new bill.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'assembly' (सभा) एक समूह के रूप में कार्य करता है, तब वह एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "Not only the principal but also the teachers ___ in favor of the change.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब 'Not only...but also' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('the teachers') अनुसार आता है, जो बहुवचन है. इसलिए 'are' आता है."
    },
    {
      "question": "The baggage ___ very heavy.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Baggage' या 'luggage' यह गणी न सकता ऐसे संज्ञा (uncountable nouns) है और वह हमेशा एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "The poet and philosopher, ___ come.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "यहाँ 'poet' और 'philosopher' एक ही व्यक्ति है क्योंकि 'the' केवल प्रथम पद पहले है. इसलिए कर्ता (Subject) एकवचन है और 'has' आता है."
    },
    {
      "question": "My father, unlike my uncles, ___ very strict.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'unlike' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('My father') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "To take such risks ___ foolish.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब क्रिया (Verb) का to-infinitive रूप ('To take') वाक्य का कर्ता (Subject) हो, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Two-thirds of the city ___ in ruins.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब अपूर्णांक ('Two-thirds of') के बाद एकवचन संज्ञा ('the city') आता है, तब क्रिया (Verb) एकवचन होता है. इसलिए 'is' आता है."
    },
    {
      "question": "Every leaf and every flower ___ proclaiming the glory of God.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब 'Every' शब्द का प्रयोग होता, भले ही वह 'and' से जोडाया हुआो हो, कर्ता (Subject) हमेशा एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "The long and short of the matter ___ that the man is a thief.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "'The long and short of the matter' (बाबत का सार) यह एक ही विचार रजू करता है, इसलिए वह एकवचन माना जाता है और 'is' प्रयोग होता है."
    }
  ],
  "test-20": [
    {
      "question": "The horse and the rider ___ fallen.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "have",
      "explanation": "यहाँ 'The horse' और 'the rider' दो अलग-अलग कर्ता (Subject) है क्योंकि दोनों के आगे 'the' आर्टिकल है. इसलिए कर्ता (Subject) बहुवचन है और 'have' आता है."
    },
    {
      "question": "The crew of the ship ___ a mix of many nationalities.",
      "options": [
        "was",
        "were",
        "are",
        "is"
      ],
      "answer": "was",
      "explanation": "जब 'crew' (जहाजके कर्मचारियों) को एक समूह के रूप में गिके जाता है, तब वह एकवचन माना जाता है. इसलिए 'was' आता है."
    },
    {
      "question": "Neither praise nor blame ___ to affect him.",
      "options": [
        "seem",
        "seems",
        "is seeming",
        "have seemed"
      ],
      "answer": "seems",
      "explanation": "जब 'Neither...nor' से दो एकवचन कर्ता (Subject) जोडाय, तब क्रिया (Verb) एकवचन होता है और उसके पासके कर्ता (Subject) ('blame') अनुसार आता है. इसलिए 'seems' आता है."
    },
    {
      "question": "None of the advice ___ helpful.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'Advice' यह न गणनीय संज्ञा (uncountable) है. 'None of' के बाद uncountable noun आता है तो क्रिया (Verb) एकवचन होता है. इसलिए 'was' आता है."
    },
    {
      "question": "Statistics, as a subject, ___ quite difficult.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब 'Statistics' (यहंकडाशास्त्र) विषय की संज्ञा हो, तब वह एकवचन माना जाता है. इसलिए 'is' आता है. जो उसका अर्थ 'यहंकडा' होत तो वह बहुवचन होत."
    },
    {
      "question": "If I ___ the Prime Minister, I would change many things.",
      "options": [
        "am",
        "was",
        "were",
        "be"
      ],
      "answer": "were",
      "explanation": "काल्पनिक परिस्थिति दर्शावता 'If' वाला वाक्यों मैं, कर्ता (Subject) चाहे जो हो, 'were' का प्रयोग होता है."
    },
    {
      "question": "The majority of the committee ___ in favor.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब 'majority' के बाद एक समूह ('committee')  का उल्लेख हो जो इकाई के रूप में काम करतुं हो, तब क्रिया (Verb) एकवचन होता है. इसलिए 'is' आता है."
    },
    {
      "question": "Where ___ the proceeds of the concert to be sent?",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Proceeds' (यहवक) शब्द हमेशा बहुवचन माना जाता है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "The gentry of the town ___ invited to the function.",
      "options": [
        "was",
        "were",
        "is",
        "has"
      ],
      "answer": "were",
      "explanation": "'Gentry' (सही्जन वर्ग) जैसे समूहवाचक संज्ञाो बहुवचन माना जाता है. इसलिए 'were' आता है."
    },
    {
      "question": "More than one city ___ in ruins after the war.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'More than one' के बाद हमेशा एकवचन संज्ञा ('city') और एकवचन क्रिया (Verb) ('was') आता है. यह एक नियम है."
    }
  ],
  "test-21": [
    {
      "question": "The boy, and not his parents, ___ to blame for the accident.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'and not' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The boy') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "One or two boys ___ absent today.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब 'One or two'  का प्रयोग होता, तब कर्ता (Subject) बहुवचन माना जाता है और उसके साथ बहुवचन क्रिया (Verb) 'are' आता है."
    },
    {
      "question": "The captain of the team, as well as the players, ___ anxious.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'as well as' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The captain') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "The sum and substance of his speech ___ that we should work harder.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'The sum and substance' (अच्छेंश) एक ही विचार रजू करता है, इसलिए वह एकवचन माना जाता है और 'was' प्रयोग होता है."
    },
    {
      "question": "None of the counterfeit money ___ been found.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'Money' यह न गणनीय संज्ञा (uncountable) है. 'None of' के बाद uncountable noun आता है तो क्रिया (Verb) एकवचन होता है. इसलिए 'has' आता है."
    },
    {
      "question": "What we need most ___ good leaders.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "are",
      "explanation": "इस वाक्य में कर्ता (Subject) 'What we need most' नहीं, परंतु 'good leaders' है. वाक्य का बंधारण ऊलटुं है (Inverted). इसलिए बहुवचन कर्ता (Subject) 'good leaders' अनुसार 'are' आता है."
    },
    {
      "question": "His means ___ very limited.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब 'means'  का अर्थ 'यहवक' या 'संसाध का' होता, तब वह बहुवचन माना जाता है. इसलिए 'are' आता है."
    },
    {
      "question": "The committee ___ issued its report.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब 'committee' (समिति) एक समूह के रूप में कार्य करता है, तब वह एकवचन माना जाता है. 'its report' भी यह दर्शाता है. इसलिए 'has' आता है."
    },
    {
      "question": "The police ___ dispersed the crowd.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "have",
      "explanation": "'Police' शब्द हमेशा बहुवचन माना जाता है. इसलिए 'have' आता है."
    },
    {
      "question": "My spectacles ___ missing.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Spectacles' (चश्मैं) शब्द, जो दो समैंन भागोसे बनतालो होता है, वह बहुवचन माना जाता है, इसलिए 'are' आता है."
    }
  ],
  "test-22": [
    {
      "question": "The manager, along with the employees, ___ working late.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'along with' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The manager') अनुसार आता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "There ___ a wide gap between the rich and the poor.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'There' वाला वाक्य में क्रिया (Verb) उसका के बाद यहवता संज्ञा ('a wide gap') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "A thousand rupees ___ a good amount.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब पैसा की रकम को एक इकाई के रूप में गिके जाता है, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Neither of the films ___ good.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'Neither of' के बाद हमेशा एकवचन क्रिया (Verb) आता है. इसलिए 'was' आता है."
    },
    {
      "question": "The details of the incident ___ not known.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "इस वाक्य का मुख्य कर्ता (Subject) 'The details' है, जो बहुवचन है. इसलिए 'are' आता है."
    },
    {
      "question": "The fleet of ships ___ moving slowly.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "यहाँ कर्ता (Subject) 'The fleet' (जहाजो का काफलो) है, जो एकवचन समूहवाचक संज्ञा है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "More than one employee ___ been promoted.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'More than one' के बाद हमेशा एकवचन संज्ञा ('employee') और एकवचन क्रिया (Verb) ('has') आता है. यह एक नियम है."
    },
    {
      "question": "The cattle ___ driven to the fields every morning.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Cattle' (ढोर) शब्द देखाव में एकवचन लगता है, परंतु वह हमेशा बहुवचन माना जाता है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "Each of the participants ___ given a certificate.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'Each of' से शुरू होने वाले वाक्य में कर्ता (Subject) एकवचन माना जाता है, इसलिए 'was' आता है."
    },
    {
      "question": "I wish I ___ a bird.",
      "options": [
        "am",
        "was",
        "were",
        "be"
      ],
      "answer": "were",
      "explanation": "'I wish' से शुरू होने वाले काल्पनिक वाक्यों मैं, 'I' के साथ 'was' को बदले 'were' का प्रयोग होता है."
    }
  ],
  "test-23": [
    {
      "question": "Neither the principal nor the teachers ___ convinced.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "are",
      "explanation": "जब 'Neither...nor' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('the teachers') अनुसार आता है, जो बहुवचन है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "All that glitters ___ not gold.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "यह एक कहेवत है. यहाँ कर्ता (Subject) 'All that glitters' एक विचार के रूप में एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "The politics of this country ___ complicated.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब 'politics'  का अर्थ 'राजकारण' (एक विचार) होता, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "What ___ the criteria for selection?",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Criteria' शब्द 'criterion' का बहुवचन है. इसलिए उसके साथ बहुवचन क्रिया (Verb) 'are' आता है."
    },
    {
      "question": "The phenomena ___ observed by many scientists.",
      "options": [
        "was",
        "were",
        "is",
        "has"
      ],
      "answer": "were",
      "explanation": "'Phenomena' शब्द 'phenomenon' का बहुवचन है. इसलिए उसके साथ बहुवचन क्रिया (Verb) 'were' आता है."
    },
    {
      "question": "The alumni of this college ___ meeting today.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Alumni' शब्द 'alumnus' का बहुवचन है, जो का अर्थ 'भूतपूर्व विद्यार्सेओ' होता है. इसलिए 'are' आता है."
    },
    {
      "question": "The owner of these factories ___ very rich.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "इस वाक्य का मुख्य कर्ता (Subject) 'The owner' है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "Nobody, not even the experts, ___ able to solve the problem.",
      "options": [
        "was",
        "were",
        "is",
        "are"
      ],
      "answer": "was",
      "explanation": "वाक्य का मुख्य कर्ता (Subject) 'Nobody' है, जो एकवचन है. इसलिए 'was' आता है."
    },
    {
      "question": "The bacteria in this water ___ harmful.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Bacteria' शब्द 'bacterium' का बहुवचन है. इसलिए उसके साथ बहुवचन क्रिया (Verb) 'are' आता है."
    },
    {
      "question": "Every one of you ___ responsible for this.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Every one of' से शुरू होने वाले वाक्य में कर्ता (Subject) एकवचन माना जाता है, इसलिए 'is' आता है."
    }
  ],
  "test-24": [
    {
      "question": "Rice and curry ___ a popular meal in many parts of India.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'and' से जोडाए हुए दो शब्दो एक ही वानगी या विचार का उल्लेख करे, तब वह एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "A lot of the advice ___ ignored.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'Advice' यह न गणनीय संज्ञा (uncountable) है. 'A lot of' के बाद uncountable noun आता है तो क्रिया (Verb) एकवचन होता है. इसलिए 'was' आता है."
    },
    {
      "question": "The media ___ become very powerful.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'Media' शब्द 'medium' का बहुवचन है, परंतु आधुनिक अंग्रेजी में उसको घणीवार एकवचन समूहवाचक संज्ञा के रूप में भी वापरवा में आता है. इसलिए 'has' स्वीकार्य है, हालांकि 'have' भी गलत नहीं."
    },
    {
      "question": "The United Arab Emirates ___ a federation of seven emirates.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "'The United Arab Emirates' यह एक देश की संज्ञा है, इसलिए वह एकवचन माना जाता है और उसके साथ 'is' प्रयोग होता है."
    },
    {
      "question": "The scissors I bought ___ not sharp.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "are",
      "explanation": "'Scissors' (कातर) शब्द हमेशा बहुवचन माना जाता है, इसलिए 'are' आता है."
    },
    {
      "question": "Either the players or the coach ___ to be blamed.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब 'Either...or' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('the coach') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "None of the candidates ___ responded yet.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "औपचारिक अंग्रेजी में 'None of' के बाद एकवचन क्रिया (Verb) ('has') का प्रयोग होता है, हालांकि बोलचाल की भाषा में 'have' भी स्वीकार्य है."
    },
    {
      "question": "The staff ___ in a meeting.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'staff' (कर्म (Object)चारीगण)  का उल्लेख एक समूह के रूप में होता, तब वह एकवचन माना जाता है. इसलिए 'is' आता है. जो सदस्यों का अलग-अलग उल्लेख हो तो 'are' आता है."
    },
    {
      "question": "Physics ___ not an easy subject for everyone.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "'Physics' जैसे विषयोके संज्ञा एकवचन माना जाता है, इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The data ___ being analyzed by the researchers.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "औपचारिक रूप से, 'data' शब्द 'datum' का बहुवचन है. इसलिए उसके साथ 'are' आता है. हालांकि, आधुनिक प्रयोग में 'is' भी सामान्य है."
    }
  ],
  "test-25": [
    {
      "question": "John, along with his friend, ___ going to the cinema.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'along with' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('John') अनुसार आता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The athletics team ___ training hard.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब 'team'  का उल्लेख एक समूह के रूप में होता, तब वह एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "Either of the two answers ___ correct.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Either of' के बाद हमेशा एकवचन क्रिया (Verb) आता है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The wages of hard work ___ sweet.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "यहाँ 'wages'  का अर्थ 'फल' (या) 'परिणाम' (rewards) होता है, जो बहुवचन है. इसलिए 'are' आता है."
    },
    {
      "question": "The man whom I was talking to ___ my father.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "इस वाक्य का मुख्य कर्ता (Subject) 'The man' है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "The blind ___ help from us.",
      "options": [
        "need",
        "needs",
        "is needing",
        "has needed"
      ],
      "answer": "need",
      "explanation": "जब विशेषण ('blind') की आगे 'the' लागे, तब वह पूरा वर्ग (अंध लोगों)  का उल्लेख करता है और बहुवचन माना जाता है. इसलिए 'need' आता है."
    },
    {
      "question": "The news ___ as shocking as we expected.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "'News' शब्द हमेशा एकवचन माना जाता है, इसलिए उसके साथ 'was' प्रयोग होता है."
    },
    {
      "question": "The people ___ waiting for the leader's speech.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'People' शब्द बहुवचन है, इसलिए उसके साथ 'are' प्रयोग होता है."
    },
    {
      "question": "My mathematics ___ very weak.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "are",
      "explanation": "जब 'mathematics'  का अर्थ 'गणना करवा की क्षमता' होता, तब वह बहुवचन माना जाता है. जो वह विषय की संज्ञा होत तो 'is' यहवत."
    },
    {
      "question": "Two tons of coal ___ enough for the factory.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब जत्था, वजन, या अंतर को एक इकाई के रूप में गिके जाता है, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    }
  ],
  "test-26": [
    {
      "question": "The mother, with her children, ___ waiting for the bus.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'with' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The mother') अनुसार आता है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "More students than one ___ absent today.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "are",
      "explanation": "जब वाक्य का बंधारण 'More [plural noun] than one' हो, तब क्रिया (Verb) बहुवचन होता है. इसलिए 'are' आता है. यह 'More than one [singular noun]' से विपरीत है."
    },
    {
      "question": "The student, as well as his teacher, ___ gone on a tour.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब कर्ता (Subject) 'as well as' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The student') अनुसार आता है, जो एकवचन है. इसलिए 'has' आता है."
    },
    {
      "question": "None of his poems ___ well known.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'None of' के बाद बहुवचन संज्ञा ('poems') आता है तो, आधुनिक अंग्रेजी में बहुवचन क्रिया (Verb) ('are') अधिक प्रचलित और स्वीकार्य है."
    },
    {
      "question": "Where ___ the tongs I bought yesterday?",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Tongs' (चीपियो) जैसे साध का, जो दो भागोसे बनताला होता है, वह बहुवचन माना जाता है. इसलिए 'are' आता है."
    },
    {
      "question": "The oasis in the desert ___ a beautiful sight.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "यहाँ कर्ता (Subject) 'The oasis' है, जो 'oases' (बहुवचन) का एकवचन रूप है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The hypotheses ___ to be tested.",
      "options": [
        "needs",
        "need",
        "is needing",
        "has needed"
      ],
      "answer": "need",
      "explanation": "'Hypotheses' शब्द 'hypothesis' का बहुवचन है. इसलिए उसके साथ बहुवचन क्रिया (Verb) 'need' आता है."
    },
    {
      "question": "Neither you nor your sisters ___ talk to them.",
      "options": [
        "should",
        "shoulds",
        "is to",
        "are to"
      ],
      "answer": "should",
      "explanation": "Modal verbs (जैसे या should, can, will) कर्ता (Subject)के वचन के साथ बदलाता नहीं. इसलिए 'should' ही आता है."
    },
    {
      "question": "All the luggage ___ been checked in.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'Luggage' यह न गणनीय संज्ञा (uncountable noun) है और वह हमेशा एकवचन माना जाता है. इसलिए 'has' आता है."
    },
    {
      "question": "Walking five miles every day ___ me fit.",
      "options": [
        "keep",
        "keeps",
        "are keeping",
        "have kept"
      ],
      "answer": "keeps",
      "explanation": "जब Gerund phrase ('Walking five miles every day') वाक्य का कर्ता (Subject) हो, तब वह एकवचन माना जाता है. इसलिए क्रिया (Verb) को 's' लगता है."
    }
  ],
  "test-27": [
    {
      "question": "Either the boys or their father ___ to mow the lawn.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब 'Either...or' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('their father') अनुसार आता है, जो एकवचन है. इसलिए 'has' आता है."
    },
    {
      "question": "The memoranda ___ distributed yesterday.",
      "options": [
        "was",
        "were",
        "is",
        "are"
      ],
      "answer": "were",
      "explanation": "'Memoranda' शब्द 'memorandum' का बहुवचन है. इसलिए उसके साथ बहुवचन क्रिया (Verb) 'were' आता है."
    },
    {
      "question": "The furniture which you bought last year ___ of good quality.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "यहाँ मुख्य कर्ता (Subject) 'The furniture' है, जो न गणनीय (uncountable) और एकवचन है. इसलिए 'is' प्रयोग होता है."
    },
    {
      "question": "The audience ___ clapping enthusiastically.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "are",
      "explanation": "जब 'audience' (दर्शकों) के सदस्यों का व्यक्तिगत रूप से उल्लेख होता है (यहाँ प्रत्येक व्यक्ति तालियां बजा रज है), तब वह बहुवचन माना जाता है. इसलिए 'are' आता है."
    },
    {
      "question": "What he does in his free time ___ not my concern.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "यहाँ कर्ता (Subject) 'What he does in his free time' एक यहखुं वाकहाँश (clause) है, जो एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "The number of endangered species ___ increasing.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब वाक्य की शुरुआत 'The number of' से होता, तब क्रिया (Verb) हमेशा एकवचन ('is') होता है."
    },
    {
      "question": "A number of problems ___ arisen.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "have",
      "explanation": "जब वाक्य की शुरुआत 'A number of' से होता, तब उसका अर्थ 'घणी' होता है और क्रिया (Verb) बहुवचन ('have') होता है."
    },
    {
      "question": "The earnings of the company ___ exceeded expectations.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "have",
      "explanation": "'Earnings' (कमैंणी) शब्द सामान्य रूप से बहुवचन माना जाता है. इसलिए 'have' प्रयोग होता है."
    },
    {
      "question": "Not only I but also my friends ___ tired.",
      "options": [
        "is",
        "are",
        "am",
        "was"
      ],
      "answer": "are",
      "explanation": "जब 'Not only...but also' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('my friends') अनुसार आता है, जो बहुवचन है. इसलिए 'are' आता है."
    },
    {
      "question": "The series of unfortunate events ___ a popular book series.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "इस वाक्य का मुख्य कर्ता (Subject) 'The series' है, जो एकवचन है. इसलिए 'is' प्रयोग होता है."
    }
  ],
  "test-28": [
    {
      "question": "The writer and poet ___ going to be honored.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "यहाँ 'writer' और 'poet' एक ही व्यक्ति है क्योंकि 'the' केवल प्रथम पद पहले है. इसलिए कर्ता (Subject) एकवचन है और 'is' आता है."
    },
    {
      "question": "None of the applicants ___ suitable for the job.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "औपचारिक अंग्रेजी में 'None of' के बाद एकवचन क्रिया (Verb) ('is') का प्रयोग होता है. हालांकि आधुनिक अंग्रेजी में 'are' भी स्वीकार्य है, भी 'is' अधिक उचित है."
    },
    {
      "question": "The athletics meet ___ scheduled for next month.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Athletics' जब एक इवेन्ट या रमतगमत की संज्ञा हो, तब वह एकवचन माना जाता है. इसलिए 'is' आता है."
    },
    {
      "question": "Your trousers ___ at the laundry.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Trousers' (पेन्ट) शब्द हमेशा बहुवचन माना जाता है क्योंकि वह दो भागोसे बना हुआ है. इसलिए 'are' प्रयोग होता है."
    },
    {
      "question": "The contents of the box ___ unknown.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Contents' (अंदर की वस्तुओ) शब्द हमेशा बहुवचन माना जाता है. इसलिए 'are' आता है."
    },
    {
      "question": "Each and every member ___ to vote.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब 'Each and every'  का प्रयोग होता, तब कर्ता (Subject) एकवचन माना जाता है. इसलिए 'has' आता है."
    },
    {
      "question": "The curricula of the universities ___ being updated.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Curricula' शब्द 'curriculum' का बहुवचन है. इसलिए उसके साथ बहुवचन क्रिया (Verb) 'are' आता है."
    },
    {
      "question": "His whereabouts ___ unknown.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "'Whereabouts' (ठेकाणुं) शब्द, भले ही वह एकवचन जैसा लागे, सामान्य रूप से बहुवचन क्रिया (Verb) के साथ प्रयोग होता है. इसलिए 'are' आता है."
    },
    {
      "question": "Many a politician ___ made that promise.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'Many a' के बाद हमेशा एकवचन संज्ञा ('politician') और एकवचन क्रिया (Verb) ('has') आता है. यह एक स्थापित नियम है."
    },
    {
      "question": "The headquarters of the company ___ in New York.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "'Headquarters' शब्द एकवचन और बहुवचन दोनों में सरखो रहता है. यहाँ एक ही मुख्य मथक का उल्लेख है, इसलिए 'is' प्रयोग होता है."
    }
  ],
  "test-29": [
    {
      "question": "The student, but not his friends, ___ responsible.",
      "options": [
        "was",
        "were",
        "are",
        "have"
      ],
      "answer": "was",
      "explanation": "जब कर्ता (Subject) 'but not' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The student') अनुसार आता है, जो एकवचन है. इसलिए 'was' आता है."
    },
    {
      "question": "The army ___ been deployed at the border.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब 'army' (सैन्य) को एक इकाई के रूप में गिके जाता है, तब वह एकवचन है. इसलिए 'has' आता है."
    },
    {
      "question": "Either my shoes or your coat ___ always on the floor.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "जब 'Either...or' से दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) उसके पासके कर्ता (Subject) ('your coat') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "His politics ___ rather conservative.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "are",
      "explanation": "जब 'politics'  का अर्थ 'राजकीय मंतव्यो' होता, तब वह बहुवचन माना जाता है. इसलिए 'are' आता है."
    },
    {
      "question": "The species of fish ___ very rare.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "'Species' शब्द एकवचन और बहुवचन दोनों में सरखो रहता है. यहाँ 'The species' (यह प्रजाति) एकवचन के रूप में प्रयोग होताो है, इसलिए 'is' आता है."
    },
    {
      "question": "The rich and the poor ___ equal before the law.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "यहाँ 'The rich' और 'the poor' दो अलग-अलग वर्गो का उल्लेख करता है, इसलिए कर्ता (Subject) बहुवचन है और 'are' प्रयोग होता है."
    },
    {
      "question": "A great deal of effort ___ gone into this project.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "'A great deal of' के बाद न गणनीय संज्ञा ('effort') आता है, जो एकवचन माना जाता है. इसलिए 'has' आता है."
    },
    {
      "question": "The police chief, accompanied by his officers, ___ arriving now.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब कर्ता (Subject) 'accompanied by' से जोडाया हुआो हो, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The police chief') अनुसार आता है, जो एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "The professor and the politician ___ attending the conference.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "यहाँ 'The professor' और 'the politician' दो अलग-अलग व्यक्तिओ है क्योंकि दोनों के आगे 'the' आर्टिकल है. इसलिए कर्ता (Subject) बहुवचन है और 'are' आता है."
    },
    {
      "question": "Three-fourths of the land ___ been plowed.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब अपूर्णांक ('Three-fourths of') के बाद न गणनीय संज्ञा ('land') आता है, तब क्रिया (Verb) एकवचन होता है. इसलिए 'has' आता है."
    }
  ],
  "test-30": [
    {
      "question": "Either of you ___ capable of doing this job.",
      "options": [
        "is",
        "are",
        "were",
        "be"
      ],
      "answer": "is",
      "explanation": "'Either of' के बाद भले ही बहुवचन सर्वनाम ('you') हो, क्रिया (Verb) हमेशा एकवचन होता है. इसलिए 'is' आता है."
    },
    {
      "question": "The captain, not his players, ___ won the man of the match.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "जब कर्ता (Subject) 'not' के द्वारा दूसरों संज्ञासे अलग पडे, तब क्रिया (Verb) प्रथम कर्ता (Subject) ('The captain') अनुसार आता है, जो एकवचन है. इसलिए 'has' आता है."
    },
    {
      "question": "The crew ___ preparing to dock the ship.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब 'crew' (जहाजके कर्मचारियों) को एक समूह के रूप में गिके जाता है, तब वह एकवचन है. इसलिए 'is' आता है."
    },
    {
      "question": "The government ___ debating their new policy.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": "are",
      "explanation": "जब 'government' के सदस्यों बीच चर्चा होती हो और वे अलग-अलग व्यक्तिओ के रूप में वर्तता हो ('their new policy' परसे ख्याल आता है), तब वह बहुवचन माना जाता है. इसलिए 'are' आता है."
    },
    {
      "question": "The chairman is the only one of those men who ___ always on time.",
      "options": [
        "is",
        "are",
        "was",
        "were"
      ],
      "answer": "is",
      "explanation": "जब 'the only one of'  का प्रयोग होता, तब 'who' के बाद का क्रिया (Verb) एकवचन होता है क्योंकि वह 'the only one'  का उल्लेख करता है. इसलिए 'is' आता है."
    },
    {
      "question": "This is one of the best books that ___ ever been written.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "have",
      "explanation": "जब 'one of the' के बाद relative pronoun (that, who) आता है, तब क्रिया (Verb) वह pronoun के antecedent ('books') अनुसार बहुवचन होता है. इसलिए 'have' आता है."
    },
    {
      "question": "The dead ___ no tales.",
      "options": [
        "tells",
        "tell",
        "is telling",
        "has told"
      ],
      "answer": "tell",
      "explanation": "यहाँ 'The dead'  का अर्थ 'मृत लोगों' होता है, जो बहुवचन है. इसलिए क्रिया (Verb) का मूल रूप 'tell' प्रयोग होता है."
    },
    {
      "question": "My pair of jeans ___ a hole in it.",
      "options": [
        "has",
        "have",
        "is",
        "are"
      ],
      "answer": "has",
      "explanation": "यहाँ कर्ता (Subject) 'My pair' है, जो एकवचन है. जो केवल 'My jeans' होत तो बहुवचन गणात. इसलिए 'has' आता है."
    },
    {
      "question": "The remains of the city ___ found by archaeologists.",
      "options": [
        "was",
        "were",
        "is",
        "has"
      ],
      "answer": "were",
      "explanation": "'Remains' (अवशेषो) शब्द हमेशा बहुवचन माना जाता है. इसलिए 'were' प्रयोग होता है."
    },
    {
      "question": "Two years ___ the minimum time required to complete this course.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": "is",
      "explanation": "जब समय अवधि को ('Two years') एक इकाई के रूप में गिके जाता है, तब वह एकवचन माना जाता है. इसलिए 'is' प्रयोग होता है."
    }
  ]
};
