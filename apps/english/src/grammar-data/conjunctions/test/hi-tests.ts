import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "He is poor ___ he is honest.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "but",
      "explanation": "यहाँ दो विरोधाभासी विचारो (गरीब और प्रामाणिक) को जोड़ने के लिए 'but' (भी, परंतु) का प्रयोग होता है."
    },
    {
      "question": "She can read ___ write.",
      "options": [
        "but",
        "or",
        "and",
        "so"
      ],
      "answer": "and",
      "explanation": "यहाँ दो समैंन क्रियाओ (पढ़के और लिखके) को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "Work hard, ___ you will fail.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "or",
      "explanation": "यहाँ एक शरत और उसका संभावित नकारात्मक परिणाम को बताने के लिए 'or' (या, वरना) का प्रयोग होता है. 'मेहनत करो, वरना आप फेल थशो.'"
    },
    {
      "question": "It was raining, ___ I stayed at home.",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (बारिश) और उसका परिणाम (घरे रहना) को जोड़ने के लिए 'so' (इसलिए) का प्रयोग होता है."
    },
    {
      "question": "Rahul ___ Rohan are brothers.",
      "options": [
        "or",
        "and",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ दो संज्ञाो को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "Do you want tea ___ coffee?",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "or",
      "explanation": "यहाँ दो विकल्पो (चा या कोफी) बीच पसंद करने के लिए 'or' (या) का प्रयोग होता है."
    },
    {
      "question": "The box was heavy, ___ he could not lift it.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (वजनदार बोक्स) और उसका परिणाम (उठा न सकना) को दर्शाने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "He is intelligent, ___ he is lazy.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "but",
      "explanation": "यहाँ एक सकारात्मक गुण (होशियार) और एक नकारात्मक गुण (आलसी) बीच विरोधाभास दर्शाने के लिए 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "She must study ___ she will not pass the exam.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "or",
      "explanation": "'वरना' के अर्थ में, एक क्रिया न करने से होता परिणाम बताने के लिए 'or' प्रयोग होता है. 'उसे पढ़ाई करना ही चाहिए, वरना उस परीक्षा पास नहीं करे.'"
    },
    {
      "question": "We bought apples ___ oranges.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ खरीदी हुई दो अलग-अलग वस्तुओ (सेब और संतरा) की सूची बनाने के लिए 'and' (और) का प्रयोग होता है."
    }
  ],
  "test-2": [
    {
      "question": "He ran fast, ___ he missed the bus.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "but",
      "explanation": "यहाँ एक क्रिया (तेज़ी से दौड़के) और उसका अप्रत्याशित विरोधाभासी परिणाम (बस छूट जाना) को जोड़ने के लिए 'but' (भी, फिर भी) प्रयोग होता है."
    },
    {
      "question": "The sun rises in the east ___ sets in the west.",
      "options": [
        "or",
        "and",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ दो प्राकृतिक और संबंधित तथ्यों को जोड़ने के लिए 'and' (और) प्रयोग होता है."
    },
    {
      "question": "Hurry up, ___ you will be late.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "or",
      "explanation": "'वरना' के अर्थ में चेतावनी देने के लिए 'or' प्रयोग होता है. 'जल्दी करो, वरना आप देर हो जाएगी.'"
    },
    {
      "question": "He was tired, ___ he went to bed early.",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (थाक) और उसका परिणामस्वरूप लिए गए कदम (जल्दी सो जाना) को जोड़ने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "My sister is tall ___ my brother is short.",
      "options": [
        "or",
        "and",
        "so",
        "but"
      ],
      "answer": "but",
      "explanation": "यहाँ दो लोगों की ऊंचाई के के बीच का अंतर और विरोधाभास दर्शाने के लिए 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "Is your dress blue ___ green?",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "or",
      "explanation": "यहाँ दो रंगो के बीच चयन (या) प्रश्न पूछने के लिए 'or' (या, या) प्रयोग होता है."
    },
    {
      "question": "She is both a singer ___ a dancer.",
      "options": [
        "or",
        "so",
        "and",
        "but"
      ],
      "answer": "and",
      "explanation": "'both...and' की जोड़ी में, दो विशेषताओं को जोड़ने के लिए 'and' प्रयोग होता है."
    },
    {
      "question": "The movie was boring, ___ I left early.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (फिल्म उबाऊ से) और उसका परिणामे हुई क्रिया (जल्दी  निकल जाना) को बताने के लिए 'so' (इसलिए) का प्रयोग होता है."
    },
    {
      "question": "He tried his best, ___ he could not succeed.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "but",
      "explanation": "प्रयत्न करवा फिर भी सफलता न मिलना, यह विरोधाभास बताने के लिए 'but' (भी, परंतु) प्रयोग होता है."
    },
    {
      "question": "I like to play cricket ___ football.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ दो खेल या जो पसंद है, वे को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    }
  ],
  "test-3": [
    {
      "question": "We can go to the park ___ the museum.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "or",
      "explanation": "यहाँ दो स्थलो में से कोई एक पर जवा का विकल्प दिया जा रहा है, इसलिए 'or' (या) का प्रयोग होगा."
    },
    {
      "question": "The dog barked ___ wagged its tail.",
      "options": [
        "but",
        "or",
        "and",
        "so"
      ],
      "answer": "and",
      "explanation": "यहाँ कुत्ते के द्वारा एक साथ की गई दो क्रियाओ (भौंकना और पूँछ हिलाना) को जोड़ने के लिए 'and' (और) प्रयोग होता है."
    },
    {
      "question": "She was sick, ___ she didn't go to school.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (बीमार होना) और उसका परिणाम (स्कूल न जवुं) दर्शाने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "The car is old, ___ it still runs well.",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "but",
      "explanation": "यहाँ एक नकारात्मक बाबत (कार पुरानी है) और एक सकारात्मक बाबत (वह अभी भी अच्छी तरह से चलती है) बीच विरोधाभास है, इसलिए 'but' (भी) प्रयोग होगा."
    },
    {
      "question": "You should finish your homework, ___ you can't watch TV.",
      "options": [
        "or",
        "and",
        "so",
        "but"
      ],
      "answer": "or",
      "explanation": "यहाँ 'वरना' के अर्थ में शर्त रखने के लिए गए है. 'होमवर्क पूरुं करो, वरना आप टीवी देख सकोगे नहीं.' इसके लिए 'or' प्रयोग होता है."
    },
    {
      "question": "He opened the door ___ looked outside.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ एक के बाद एक हुई दो क्रियाओ (दरवाज़ा खोला और बाहर देखा) को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "I wanted to buy the dress, ___ it was too expensive.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "but",
      "explanation": "यहाँ इच्छा (ड्रेस खरीदना) और वे न कर शकवा का कारण (बहुत महँगा होना) बीच विरोध है, इसलिए 'but' (परंतु) प्रयोग होगा."
    },
    {
      "question": "The weather was sunny, ___ we went for a picnic.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (अच्छी मौसम) और उसका परिणामे हुई गतिविधि (पिकनिक पर जाना) को जोड़ने के लिए 'so' (इसलिए) का प्रयोग होता है."
    },
    {
      "question": "Would you like a pen ___ a pencil?",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "or",
      "explanation": "यहाँ दो वस्तुओ में से एक की चयन पूछा जा रहा है, इसलिए 'or' (या, या) का प्रयोग होगा."
    },
    {
      "question": "The team played well ___ won the match.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ दो संबंधित और सकारात्मक घटनाओ (अच्छी तरह से रमवुं और मेच जीतवी) को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    }
  ],
  "test-4": [
    {
      "question": "He is not only famous ___ also humble.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "but",
      "explanation": "'not only...but also' (केवल यह ही नहीं, भी वह भी) एक जोडी है. 'not only' के बाद 'but also' प्रयोग होता है, जो में 'also' कुछवार अव्यक्त रज शया है."
    },
    {
      "question": "The teacher is kind ___ strict.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "but",
      "explanation": "यहाँ शिक्षक के दो विरोधी गुणो (दयालु और सख्त) दर्शाने के लिए 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "She studied all night, ___ she topped the class.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "कारण (पूरी रात अभ्यास किया) और उसका सीधा परिणाम (क्लास में टॉप आना) दर्शाने के लिए 'so' (इसलिए) का प्रयोग होता है."
    },
    {
      "question": "You can take the bus ___ the train to reach there.",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "or",
      "explanation": "यहाँ पहुँचने के लिए के दो विकल्पो (बस (या) ट्रेन) देने गए हैं, इसलिए 'or' (या) प्रयोग होगा."
    },
    {
      "question": "The food was delicious ___ spicy.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ भोजन की दो विशेषताओं (स्वादिष्ट और मसालेदार) को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "He fell down ___ hurt his knee.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ एक घटना (गिर जाना) और उसका तरतके परिणाम (घुटने में लगना) को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "I was hungry, ___ I ate a sandwich.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (भूख) और उसका परिणामे हुई क्रिया (सैंडविच खाना) को जोड़ने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "She is a good speaker, ___ she is not a good listener.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "but",
      "explanation": "यहाँ एक अच्छी आदत (अच्छी वक्ता) और एक खामी (अच्छी सुनने वाला नहीं) के के बीच का विरोधाभास दर्शाने 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "We must leave now, ___ we will miss our flight.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "or",
      "explanation": "यहाँ 'वरना' के अर्थ में चेतावनी देने के लिए 'or' प्रयोग होता है. 'हम अब  निकलना ही चाहिए, वरना हमी फ्लाइट चूकी जाएंगे.'"
    },
    {
      "question": "He wore a coat ___ a hat.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ पहने हुए दो वस्तुओ (कोट और टोपी) को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    }
  ],
  "test-5": [
    {
      "question": "I can sing, ___ I cannot dance.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "but",
      "explanation": "यहाँ एक क्षमता (गा सकता हूँ) और एक अक्षमता (काट सकता नहीं) बीच विरोधाभास है, इसलिए 'but' (भी) प्रयोग होगा."
    },
    {
      "question": "The kitchen is clean ___ tidy.",
      "options": [
        "or",
        "and",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ रसोई की दो सकारात्मक विशेषताओं (साफ और व्यवस्थित) को जोड़ने के लिए 'and' (और) प्रयोग होता है."
    },
    {
      "question": "It's a beautiful day, ___ let's go outside.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (सुंदर दिन) और उसका द्वारा सुझाई गई गतिविधि (चालो बाहर जाएं) को जोड़ने के लिए 'so' (तो/इसलिए) का प्रयोग होता है."
    },
    {
      "question": "You can have an apple ___ a banana.",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "or",
      "explanation": "यहाँ दो फलो में से कोई एक खाने का विकल्प दिया जा रहा है, इसलिए 'or' (या) प्रयोग होगा."
    },
    {
      "question": "I knocked on the door, ___ nobody answered.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "but",
      "explanation": "यहाँ एक क्रिया (दरवाज़ा खखडाव्यो) और उसका अपेक्षित परिणाम से विपरीत परिणाम (किसी ने जवाब  नहीं दिया) बीच विरोध है, इसलिए 'but' (भी) प्रयोग होगा."
    },
    {
      "question": "He has a pen ___ a notebook.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ दो वस्तुओ या जो उसके पास है, उसको जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "The alarm rang, ___ I woke up.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (अलार्म वाग्यो) और उसका सीधा असर (मैं उठ गया) को जोड़ने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "Is the story true ___ false?",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "or",
      "explanation": "यहाँ दो विरोधी संभावनाओं (सही या गलत) बीच प्रश्न पूछने के लिए 'or' (या) प्रयोग होता है."
    },
    {
      "question": "You must apologize, ___ he will not forgive you.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "or",
      "explanation": "यहाँ 'वरना' के अर्थ में परिणाम दर्शाने के लिए 'or' प्रयोग होता है. 'आपको माफ़ी  मांगनी ही चाहिए, वरना वह तम को माफ़ नहीं करे.'"
    },
    {
      "question": "The soup is hot ___ delicious.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ सूप की दो विशेषताओं (गरम और स्वादिष्ट) को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    }
  ],
  "test-6": [
    {
      "question": "The path was long ___ the journey was tiring.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ दो संबंधित बाबतो (लांबो रस्तो और थकवी देकेरी यात्रा) को जोड़ने के लिए 'and' (और) प्रयोग होता है."
    },
    {
      "question": "He is rich, ___ he is not happy.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "but",
      "explanation": "यहाँ संपत्ति होना फिर भी खुश न होना का विरोधाभास दर्शाने के लिए 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "She missed the train, ___ she took a taxi.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (ट्रेन छूट जाना) और उसका परिणामे लिया हुआ पगलुं (टेक्सी लेवी) दर्शाने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "Should I call him ___ send a message?",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "or",
      "explanation": "यहाँ दो क्रियाओ में से कई करना वह के बारे में विकल्प पूछने के लिए आया है, इसलिए 'or' (या) प्रयोग होगा."
    },
    {
      "question": "He can play the guitar ___ the piano.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ वह व्यक्ति जो दो वाद्ययंत्र बजा सकता है, वे को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "The question is difficult, ___ I will try to solve it.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "but",
      "explanation": "यहाँ मुश्किल (प्रश्न कठिन है) होना फिर भी प्रयत्न करवा की बात है, जो विरोधाभास दर्शाता है. इसलिए 'but' (भी, फिर भी) प्रयोग होगा."
    },
    {
      "question": "He didn't study, ___ he failed.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (पढ़ा नहीं) और उसका स्पष्ट परिणाम (फेल गया) जोड़ने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "Be quiet ___ go out of the room.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "or",
      "explanation": "यहाँ दो आदेशात्मक विकल्पो देने गए हैं ('शांत रहो (या) रूम से बाहर जाओ'), इसलिए 'or' (या) प्रयोग होगा."
    },
    {
      "question": "The room is small, ___ it is cozy.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "but",
      "explanation": "यहाँ एक सीमा (छोटा रूम) और एक सकारात्मक गुण (आरामदायक) बीच विरोधाभास दर्शाने 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "I have to finish my project ___ submit it tomorrow.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ दो क्रमिक और जरूरी क्रियाओ (प्रोजेक्ट पूरा करना और सबमिट करना) को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    }
  ],
  "test-7": [
    {
      "question": "He came late ___ he missed the beginning of the movie.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (देरी से आना) और उसका परिणाम (फिल्म की शुरुआत छूट जाना) दर्शाने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "The garden has roses ___ lilies.",
      "options": [
        "but",
        "or",
        "and",
        "so"
      ],
      "answer": "and",
      "explanation": "यहाँ बगीचे में जो हैं दो प्रकारके फूलो की सूची बनाने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "I invited her, ___ she did not come.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "but",
      "explanation": "यहाँ एक क्रिया (आमंत्रण दिया) और उसकासे विपरीत प्रतिक्रिया (वह नहीं आई) बीच विरोधाभास है, इसलिए 'but' (भी) प्रयोग होगा."
    },
    {
      "question": "You can pay by cash ___ by card.",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "or",
      "explanation": "यहाँ भुगतान के लिए के दो विकल्पो देने गए हैं, इसलिए 'or' (या) का प्रयोग होगा."
    },
    {
      "question": "The coffee is hot, ___ be careful.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ परिस्थिति (कोफी गरम है) और उसका आधार पर अपाती सलाह (इसलिए सावधान रहो) को जोड़ने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "He is tired ___ he is continuing to work.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "but",
      "explanation": "होतााला होना फिर भी काम जारी रखना यह विरोधाभासी परिस्थिति है, जिसे दर्शाने के लिए 'but' (भी, फिर भी) प्रयोग होता है."
    },
    {
      "question": "We visited the zoo ___ the park.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ मुलाकात लिए हुए दो स्थलो को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "Study well, ___ you might not get good grades.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "or",
      "explanation": "'वरना' के अर्थ में, अच्छी तरह से पढ़ाई न करने की संभावित परिणाम बताने के लिए 'or' प्रयोग होता है. 'अच्छे से पढ़ो, वरना तम को अच्छे ग्रेड नहीं मिलेंगे.'"
    },
    {
      "question": "The shirt is nice, ___ it doesn't fit me.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "but",
      "explanation": "यहाँ शर्ट अच्छा होना फिर भी वह फिट नहीं होने का विरोधाभास दर्शाने के लिए 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "I forgot my wallet, ___ I couldn't buy anything.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (बटुआ भूल जाना) और उसका परिणाम (कंई खरीदी न सकना) को जोड़ने के लिए 'so' (इसलिए) का प्रयोग होता है."
    }
  ],
  "test-8": [
    {
      "question": "She is young ___ very responsible.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "but",
      "explanation": "सामान्य रूप से युवा व्यक्तिओ कम ज़िम्मेदार हो ऐसी धारणा के विपरीत, यहाँ 'young' और 'responsible' को जोड़ने 'but' (भी, फिर भी) प्रयोग होता है."
    },
    {
      "question": "I will cook dinner ___ you can set the table.",
      "options": [
        "or",
        "and",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ दो लोगों के द्वारा करने वाली दो अलग-अलग भी संबंधित क्रियाओ को जोड़ने के लिए 'and' (और) प्रयोग होता है."
    },
    {
      "question": "The shop was closed, ___ we went somewhere else.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (दुकान बंध से) और उसका परिणामे लिए हुए निर्णय (कहीं और गए) को जोड़ने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "Will you have milk ___ juice with your breakfast?",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "or",
      "explanation": "यहाँ नाश्ते के साथ पीने के लिए के दो विकल्पो में से एक पसंद करवा के लिए 'or' (या, या) का प्रयोग होता है."
    },
    {
      "question": "The book is long ___ interesting.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ पुस्तक की दो विशेषताओं (लंबी और रोचक) को जोड़ने के लिए 'and' (और) का प्रयोग होता है. जो लंबी होना फिर भी रोचक कहना हो तो 'but' भी आ सकता है, भी यहाँ 'and' अधिक स्वाभाविक है."
    },
    {
      "question": "He is a doctor ___ his wife is a lawyer.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ दो व्यक्तिओ और उनके व्यवसायो बारे में की जानकारी को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "It was very cold, ___ he wore a thick jacket.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (बहुत ठंडी) और उसका परिणामे की हुई क्रिया (मोटी जैकेट पहनी) को जोड़ने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "You must tell the truth, ___ you will be in trouble.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "or",
      "explanation": "यहाँ 'वरना' के अर्थ में चेतावनी देने के लिए 'or' प्रयोग होता है. 'आपको सही बोलके ही चाहिए, वरना आप मुश्किल में मुकाशो.'"
    },
    {
      "question": "The shoes are stylish, ___ they are uncomfortable.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "but",
      "explanation": "यहाँ एक सकारात्मक गुण (स्टाइलिश) और एक नकारात्मक गुण (असुविधाजनक) के के बीच का विरोधाभास दर्शाने 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "The birds were chirping ___ the sun was shining.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ एक ही समय की दो सुंदर घटनाओ का वर्णन करवा के लिए 'and' (और) का प्रयोग होता है."
    }
  ],
  "test-9": [
    {
      "question": "He has a big house, ___ he lives alone.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "but",
      "explanation": "बड़ा घर होना फिर भी एकला रहना यह एक विरोधाभासी परिस्थिति है, जिसे दर्शाने के लिए 'but' (भी, परंतु) प्रयोग होता है."
    },
    {
      "question": "She can speak English ___ French fluently.",
      "options": [
        "or",
        "and",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ व्यक्ति के द्वारा बोलाती दो भाषाओ को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "The battery is dead, ___ the remote is not working.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (बेटरी पूरी हुई है) और उसका परिणाम (रिमोट काम करतुं नहीं) को जोड़ने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "You should rest ___ you will feel more tired.",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "or",
      "explanation": "'वरना' के अर्थ में, आराम न करने की परिणाम बताने के लिए 'or' प्रयोग होता है. 'आपको आराम करना चाहिए, वरना तम को अधिक थाक लागशे.'"
    },
    {
      "question": "He is a talented musician ___ a skilled painter.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ व्यक्ति की दो अलग-अलग कलाओ को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "The water was cold, ___ he enjoyed the swim.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "but",
      "explanation": "पाणी ठंडु होना फिर भी तरवा की मजा मैंणवी यह विरोधाभास है, इसलिए 'but' (भी, फिर भी) प्रयोग होगा."
    },
    {
      "question": "I finished my work, ___ I went home.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "काम पूरुं होनेके कारणे घरे जाने की क्रिया हुई, इसकारण-परिणाम संबंध दर्शाने 'so' (इसलिए) प्रयोग होता है. 'and' भी प्रयोग कर सकते, भी 'so' अधिक तार्किक है."
    },
    {
      "question": "Are you coming with us ___ staying here?",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "or",
      "explanation": "यहाँ दो विकल्पो (के साथ आना या यहाँ रहना) बीच प्रश्न पूछने के लिए 'or' (या) प्रयोग होता है."
    },
    {
      "question": "The city is crowded, ___ it is full of life.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "but",
      "explanation": "भीड होवी यह सामान्य रूप से नकारात्मक माने, भी 'जीवनहीं भरपूर' होना यह सकारात्मक है. यह विरोधाभास दर्शाने 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "He cooked the meal ___ cleaned the kitchen.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ व्यक्ति के द्वारा कराया हुआी दो क्रमिक क्रियाओ को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    }
  ],
  "test-10": [
    {
      "question": "The library is quiet ___ peaceful.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ पुस्तकालय की दो समैंन और सकारात्मक विशेषताओं (शांत और शांतिपूर्ण) को जोड़ने के लिए 'and' (और) प्रयोग होता है."
    },
    {
      "question": "I want to go for a walk, ___ it's too hot outside.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "but",
      "explanation": "यहाँ फरवा जाने की इच्छा और बाहर की गरमी बीच विरोधाभास है, जो 'but' (भी) के द्वारा दर्शावाय है."
    },
    {
      "question": "He was not feeling well, ___ he took a day off.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (तबियत अच्छी न होवी) और उसका परिणामे लिया हुआ पगलुं (रजा लेवी) को जोड़ने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "We can eat now ___ later.",
      "options": [
        "or",
        "but",
        "so",
        "and"
      ],
      "answer": "or",
      "explanation": "यहाँ खावा के लिए के दो समयके विकल्पो (अभी या के बाद) देने गए हैं, इसलिए 'or' (या) प्रयोग होगा."
    },
    {
      "question": "The presentation was informative ___ well-organized.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "and",
      "explanation": "यहाँ प्रस्तुति की दो सकारात्मक लाक्षणिकताओ को जोड़ने के लिए 'and' (और) का प्रयोग होता है."
    },
    {
      "question": "He searched everywhere, ___ he could not find his keys.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "but",
      "explanation": "बधे शोधवा फिर भी चाबी न मिलना यह अपेक्षासे विपरीत परिणाम है, जो 'but' (भी) के द्वारा दर्शावाय है."
    },
    {
      "question": "The movie ended, ___ everyone clapped.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ एक घटना (फिल्म पूरी हुई) के बाद तरत ही हुई बीजी घटना (सभीयह तालियां बजा) का वर्णन करवा 'and' (और) प्रयोग होता है. 'so' भी आ सकता है जो ताली पाडवा का कारण फिल्म का पूरुं होके हो."
    },
    {
      "question": "You must listen carefully, ___ you will miss the instructions.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "or",
      "explanation": "यहाँ 'वरना' के अर्थ में चेतावनी देने गए है. 'ध्यानहीं सांभलो, वरना आप सूचकेओ चूकी जशो.' इसके लिए 'or' प्रयोग होता है."
    },
    {
      "question": "The journey was long, ___ it was scenic.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": "but",
      "explanation": "यात्रा लंबी होवी (नकारात्मक) और रलियामणी होवी (सकारात्मक) यह विरोधाभास दर्शाने 'but' (भी) प्रयोग होता है."
    },
    {
      "question": "She bought a new dress ___ a pair of shoes.",
      "options": [
        "but",
        "so",
        "and",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ खरीदी हुई दो वस्तुओ की सूची बनाने के लिए 'and' (और) का प्रयोग होता है."
    }
  ],
  "test-11": [
    {
      "question": "I didn't go to the party ___ I was feeling unwell.",
      "options": [
        "because",
        "although",
        "so",
        "if"
      ],
      "answer": "because",
      "explanation": "यहाँ पार्टी में न जवा का कारण दी गई है, इसलिए 'because' (क्योंकि) का प्रयोग होगा."
    },
    {
      "question": "___ it was raining, he went for a run.",
      "options": [
        "Because",
        "Although",
        "So",
        "If"
      ],
      "answer": "Although",
      "explanation": "बारिश होना फिर भी दोडवा जवुं यह विरोधाभासी परिस्थिति है. यह दर्शाने के लिए 'Although' (हालांकि, वे फिर भी) का प्रयोग होता है."
    },
    {
      "question": "You will pass the exam ___ you study hard.",
      "options": [
        "because",
        "although",
        "unless",
        "if"
      ],
      "answer": "if",
      "explanation": "यहाँ परीक्षा पास होने के लिए की शरत (मेहनत करना) रख के लिए गए है, इसलिए 'if' (जो) का प्रयोग होगा."
    },
    {
      "question": "She waited for him ___ he arrived.",
      "options": [
        "until",
        "unless",
        "because",
        "although"
      ],
      "answer": "until",
      "explanation": "यहाँ राह देखने की क्रिया कहाँ सुधी चली वह समयसीमा दर्शाने के लिए 'until' (जहाँ तक) का प्रयोग होता है."
    },
    {
      "question": "He is not only a good student ___ a great athlete.",
      "options": [
        "and",
        "but also",
        "or",
        "so"
      ],
      "answer": "but also",
      "explanation": "'not only...but also' (केवल यह ही नहीं, भी वह भी) एक जोडी है, जो दो विशेषताओं को जोडे है."
    },
    {
      "question": "___ you apologize, she will not talk to you.",
      "options": [
        "Until",
        "Unless",
        "Because",
        "Although"
      ],
      "answer": "Unless",
      "explanation": "'Unless'  का अर्थ 'if...not' (जो नहीं तो) होता है. 'जो आप माफ़ी नहीं  मैंगो, तो वह आपकी के साथ बात नहीं करे.' यह नकारात्मक शरत दर्शाता है."
    },
    {
      "question": "I will call you ___ I reach home.",
      "options": [
        "as soon as",
        "although",
        "unless",
        "but"
      ],
      "answer": "as soon as",
      "explanation": "यहाँ एक क्रिया (घरे पहोंचवुं) के बाद तरत ही बीजी क्रिया (फोन करना) थशे वह दर्शाने 'as soon as' (जैसा/जैसी ज) प्रयोग होता है."
    },
    {
      "question": "___ he is very rich, he is not arrogant.",
      "options": [
        "Because",
        "Though",
        "As",
        "Since"
      ],
      "answer": "Though",
      "explanation": "यहाँ 'Although' की जैसे ज, 'Though' (हालांकि, वे फिर भी) विरोधाभास दर्शाता है. अमीर होना फिर भी अभिमैं की न होना."
    },
    {
      "question": "You can have ___ tea or coffee.",
      "options": [
        "both",
        "either",
        "neither",
        "not only"
      ],
      "answer": "either",
      "explanation": "'either...or' (यह (या) वह) यह दो विकल्पो में से एक की चयन दर्शाने के लिए वपराती जोडी है."
    },
    {
      "question": "He was punished ___ he broke the rules.",
      "options": [
        "although",
        "if",
        "because",
        "unless"
      ],
      "answer": "because",
      "explanation": "यहाँ सहीा होने का कारण (नियम तोडवो) दर्शाने के लिए 'because' (क्योंकि) प्रयोग होता है."
    }
  ],
  "test-12": [
    {
      "question": "___ he was very tired, he completed the work.",
      "options": [
        "Because",
        "Although",
        "If",
        "Unless"
      ],
      "answer": "Although",
      "explanation": "होतााला होना फिर भी काम पूरुं करना यह विरोधाभास है, जो दर्शाने के लिए 'Although' (हालांकि, वे फिर भी) प्रयोग होता है."
    },
    {
      "question": "I can't help you ___ you tell me the problem.",
      "options": [
        "if",
        "because",
        "unless",
        "until"
      ],
      "answer": "unless",
      "explanation": "'Unless'  का अर्थ 'if...not' होता है. 'जो आप समस्या नहीं कहो, तो मैं तम को मदद कर सकता नहीं.' यह नकारात्मक शरत है."
    },
    {
      "question": "She speaks English ___ she speaks French.",
      "options": [
        "as well as",
        "or",
        "but",
        "so"
      ],
      "answer": "as well as",
      "explanation": "'as well as'  का अर्थ 'and' (और) जैसा ही होता है, जो दो बाबतो को जोडे है. 'उसकी अंग्रेजी की के साथ के साथ फ्रेन्च भी बोले है.'"
    },
    {
      "question": "___ it is sunny, we will go to the beach.",
      "options": [
        "Unless",
        "Although",
        "If",
        "Because"
      ],
      "answer": "If",
      "explanation": "यहाँ बीच पर जाने की शरत (जो तडको हो तो) रख के लिए गए है, इसलिए 'If' (जो) का प्रयोग होगा."
    },
    {
      "question": "He is ___ intelligent nor hardworking.",
      "options": [
        "either",
        "both",
        "neither",
        "so"
      ],
      "answer": "neither",
      "explanation": "'neither...nor' (यह भी नहीं और वह भी नहीं) यह दो नकारात्मक बाबतो को जोड़ने के लिए वपराती जोडी है."
    },
    {
      "question": "She started crying ___ she heard the sad news.",
      "options": [
        "while",
        "as soon as",
        "unless",
        "although"
      ],
      "answer": "as soon as",
      "explanation": "यहाँ एक घटना (दुःखद समैंचार सांभलवा) के बाद तरत ही हुई प्रतिक्रिया (रडवा का शुरू करना) दर्शाने 'as soon as' (जैसे ज) प्रयोग होता है."
    },
    {
      "question": "We were watching TV ___ the lights went out.",
      "options": [
        "when",
        "because",
        "if",
        "so"
      ],
      "answer": "when",
      "explanation": "यहाँ एक क्रिया (टीवी जैसी) अपूर्ण से वह समये बीजी घटना (लाइट जवी) हुई. यह दर्शाने 'when' (जब) का प्रयोग होता है."
    },
    {
      "question": "___ he has a lot of money, he doesn't help anyone.",
      "options": [
        "Because",
        "Though",
        "If",
        "As"
      ],
      "answer": "Though",
      "explanation": "'Though' (हालांकि, वे फिर भी) विरोधाभास दर्शाता है. बहुत पैसा होना फिर भी कोई को मदद न करना."
    },
    {
      "question": "He is ___ a writer and a director.",
      "options": [
        "either",
        "neither",
        "both",
        "only"
      ],
      "answer": "both",
      "explanation": "'both...and' (दोनों...और) यह दो भूमिकाओ को जोड़ने के लिए वपराती जोडी है."
    },
    {
      "question": "You can't go out to play ___ you finish your homework.",
      "options": [
        "because",
        "until",
        "although",
        "if"
      ],
      "answer": "until",
      "explanation": "यहाँ रमवा जवा पर प्रतिबंध कहाँ सुधी है वह समयसीमा (होमवर्क पूरुं होता वहाँ सुधी) दर्शाने 'until' (जहाँ तक...नहीं) प्रयोग होता है."
    }
  ],
  "test-13": [
    {
      "question": "I will wait here ___ you come back.",
      "options": [
        "unless",
        "until",
        "if",
        "because"
      ],
      "answer": "until",
      "explanation": "'until' (जहाँ तक) यह समय दर्शाता है या राह देखने की क्रिया कब पूरी थशे."
    },
    {
      "question": "He was late ___ he missed the bus.",
      "options": [
        "although",
        "because",
        "if",
        "unless"
      ],
      "answer": "because",
      "explanation": "यहाँ देर होने का कारण (बस चूकी जवुं) दर्शाने के लिए 'because' (क्योंकि) प्रयोग होता है."
    },
    {
      "question": "___ he is old, he is very active.",
      "options": [
        "Because",
        "If",
        "Though",
        "Unless"
      ],
      "answer": "Though",
      "explanation": "'Though' (हालांकि) विरोधाभास दर्शाता है. वृद्ध होना फिर भी बहुत ही सक्रिय होना."
    },
    {
      "question": "Take this medicine, ___ you will feel better.",
      "options": [
        "and",
        "or",
        "but",
        "so"
      ],
      "answer": "and",
      "explanation": "यहाँ एक क्रिया (दवा लेवी) और उसका अपेक्षित सकारात्मक परिणाम (तम को अच्छा लागशे) जोड़ने के लिए 'and' प्रयोग होता है."
    },
    {
      "question": "He can ___ read nor write.",
      "options": [
        "either",
        "neither",
        "both",
        "also"
      ],
      "answer": "neither",
      "explanation": "'neither...nor' की जोडी दो नकारात्मक क्रियाओ (वांची सकता नहीं और लिखी सकता नहीं) को जोडे है."
    },
    {
      "question": "She is not only beautiful ___ kind.",
      "options": [
        "and",
        "or",
        "but also",
        "so"
      ],
      "answer": "but also",
      "explanation": "'not only...but also' की जोडी का प्रयोग दो गुणो को जोड़ने के लिए होता है."
    },
    {
      "question": "___ I was tired, I went to the party.",
      "options": [
        "Although",
        "Because",
        "If",
        "Unless"
      ],
      "answer": "Although",
      "explanation": "होतााला होना फिर भी पार्टी में जवुं यह विरोधाभास है, जो 'Although' (हालांकि) के द्वारा दर्शावाय है."
    },
    {
      "question": "You will get a discount ___ you pay by cash.",
      "options": [
        "unless",
        "if",
        "although",
        "because"
      ],
      "answer": "if",
      "explanation": "यहाँ डिस्काउन्ट मेलववा की शरत (जो रोकडसे चूकवणी करो तो) रख के लिए गए है, इसलिए 'if' (जो) प्रयोग होगा."
    },
    {
      "question": "He was sleeping ___ I was studying.",
      "options": [
        "while",
        "as soon as",
        "because",
        "if"
      ],
      "answer": "while",
      "explanation": "'while' (जब)  का प्रयोग एक ही समये चालती दो क्रियाओ दर्शाने के लिए होता है."
    },
    {
      "question": "We cancelled the trip ___ the weather was bad.",
      "options": [
        "so",
        "unless",
        "because",
        "although"
      ],
      "answer": "because",
      "explanation": "यहाँ ट्रिप रद्द करने की कारण (खराब मौसम) दर्शाने के लिए 'because' (क्योंकि) प्रयोग होता है."
    }
  ],
  "test-14": [
    {
      "question": "I respect him ___ he is my teacher.",
      "options": [
        "as",
        "so",
        "but",
        "or"
      ],
      "answer": "as",
      "explanation": "'as'  का प्रयोग 'because' (क्योंकि) के अर्थ में कारण दर्शाने के लिए हो सकता है. 'मैं उनका आदर करता हूँ क्योंकि वह मैंरा शिक्षक है.'"
    },
    {
      "question": "___ he is poor, he is generous.",
      "options": [
        "As",
        "Though",
        "If",
        "Unless"
      ],
      "answer": "Though",
      "explanation": "गरीब होना फिर भी उदार होना यह विरोधाभास है, जो दर्शाने के लिए 'Though' (हालांकि) प्रयोग होता है."
    },
    {
      "question": "___ you work hard, you will not succeed.",
      "options": [
        "If",
        "Unless",
        "Although",
        "Because"
      ],
      "answer": "Unless",
      "explanation": "'Unless'  का अर्थ 'if not' (जो नहीं तो) होता है. 'जो आप मेहनत नहीं करो, तो आप सफल नहीं थाव.'"
    },
    {
      "question": "He speaks ___ he knows everything.",
      "options": [
        "as if",
        "so that",
        "in order to",
        "because"
      ],
      "answer": "as if",
      "explanation": "'as if'  का अर्थ 'जानते या' होता है, जो एक अवास्तविक (या) काल्पनिक तुलना दर्शाता है."
    },
    {
      "question": "She is ___ intelligent that she can solve any problem.",
      "options": [
        "such",
        "very",
        "so",
        "as"
      ],
      "answer": "so",
      "explanation": "'so...that' की जोडी परिणाम दर्शाने के लिए प्रयोग होता है. 'वह एटली होशियार है या वह कोईभी समस्या हल कर शया है.'"
    },
    {
      "question": "Walk carefully ___ you should fall.",
      "options": [
        "lest",
        "if",
        "or",
        "so"
      ],
      "answer": "lest",
      "explanation": "'lest'  का अर्थ 'एवुं न होता या' होता है और उसके साथ हमेशा 'should' का प्रयोग होता है. वह नकारात्मक परिणामसे बचवा की चेतावनी देता है."
    },
    {
      "question": "We eat ___ we may live.",
      "options": [
        "as",
        "so that",
        "because",
        "if"
      ],
      "answer": "so that",
      "explanation": "'so that' (जोसे करना) क्रिया का हेतु दर्शाता है. 'हम खाईहैं जोसे करना हम जीवी शकीए.'"
    },
    {
      "question": "He waited for me ___ I returned.",
      "options": [
        "unless",
        "until",
        "if",
        "while"
      ],
      "answer": "until",
      "explanation": "'until' (जहाँ तक) समयगाला का अंत दर्शाता है. 'मैं पाहो फर्यो वहाँ सुधी उसे मेरी राह जोई.'"
    },
    {
      "question": "___ you are tired, you should take some rest.",
      "options": [
        "If",
        "Unless",
        "Although",
        "While"
      ],
      "answer": "If",
      "explanation": "यहाँ शरत और सलाह है. 'जो आप होतााला हो, तो आपको थोडो आराम करना चाहिए.' इसके लिए 'If' प्रयोग होता है."
    },
    {
      "question": "___ there is life, there is hope.",
      "options": [
        "As long as",
        "Although",
        "Unless",
        "Because"
      ],
      "answer": "As long as",
      "explanation": "'As long as' (जहाँ तक) एक शरत (या) समय अवधि दर्शाता है. 'जहाँ तक जीवन है, वहाँ सुधी आशा है.'"
    }
  ],
  "test-15": [
    {
      "question": "___ he had completed his work, he went out to play.",
      "options": [
        "Since",
        "After",
        "Although",
        "Unless"
      ],
      "answer": "After",
      "explanation": "यहाँ एक क्रिया (काम पूरुं करना) के बाद बीजी क्रिया (रमवा जवुं) हुई है, वह क्रम दर्शाने के लिए 'After' (के बाद) प्रयोग होता है."
    },
    {
      "question": "The patient had died ___ the doctor arrived.",
      "options": [
        "after",
        "when",
        "before",
        "while"
      ],
      "answer": "before",
      "explanation": "यहाँ डोक्टरके यहगमन पहले दर्दी का मृत्यु हुई गयुं था. यह क्रम दर्शाने के लिए 'before' (पहले) प्रयोग होता है."
    },
    {
      "question": "She must weep, ___ she will die.",
      "options": [
        "and",
        "or",
        "so",
        "but"
      ],
      "answer": "or",
      "explanation": "यहाँ 'वरना' के अर्थ में एक क्रिया न करने से होता गंभीर परिणाम दर्शाने 'or' प्रयोग होता है. 'उसे रडवुं ही चाहिए, वरना वह मरी जशे.'"
    },
    {
      "question": "He has ___ friends nor relatives.",
      "options": [
        "either",
        "neither",
        "both",
        "no"
      ],
      "answer": "neither",
      "explanation": "'neither...nor' (यह भी नहीं और वह भी नहीं)  का प्रयोग दो नकारात्मक बाबतो को जोड़ने के लिए होता है. 'उसको मित्रो भी नहीं और संबंधीओ भी नहीं.'"
    },
    {
      "question": "I am not sure ___ he will come.",
      "options": [
        "that",
        "if",
        "whether",
        "as"
      ],
      "answer": "whether",
      "explanation": "जब शंका या अनिश्चितता हो और दो संभावनाओं (यहवशे या नहीं) हो, तब 'whether' (या) का प्रयोग होता है. 'if' भी प्रयोग कर सकते, भी 'whether' अधिक formal है."
    },
    {
      "question": "___ you eat a balanced diet, you will stay healthy.",
      "options": [
        "Unless",
        "If",
        "Although",
        "Because"
      ],
      "answer": "If",
      "explanation": "यहाँ स्वस्थ रथेवा की शरत (संतुलित यहहार लेवो) दर्शाने के लिए 'If' (जो) का प्रयोग होता है."
    },
    {
      "question": "He ran away ___ he was afraid.",
      "options": [
        "although",
        "because",
        "so",
        "if"
      ],
      "answer": "because",
      "explanation": "यहाँ भागी जवा का कारण (डर लागवो) दर्शाने के लिए 'because' (क्योंकि) प्रयोग होता है."
    },
    {
      "question": "I was listening to music ___ my mother called me.",
      "options": [
        "while",
        "when",
        "as soon as",
        "since"
      ],
      "answer": "when",
      "explanation": "एक लंबी क्रिया (संगीत सुनना) दौरान एक संक्षिप्त घटना (माँयह बुलाना) हुई, वह दर्शाने 'when' (जब) प्रयोग होता है."
    },
    {
      "question": "The questions were ___ easy that everyone could answer them.",
      "options": [
        "so",
        "such",
        "very",
        "too"
      ],
      "answer": "so",
      "explanation": "'so...that' की रचना परिणाम दर्शाता है. 'प्रश् का एटला सरल थे या प्रत्येक जण जवाब दी शक्या.'"
    },
    {
      "question": "We must hurry, ___ we'll miss the show.",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": "or",
      "explanation": "'वरना' के अर्थ में चेतावनी देने के लिए 'or' प्रयोग होता है. 'हम जल्दी करना ही चाहिए, वरना हम शो चूकी जाएंगे.'"
    }
  ],
  "test-16": [
    {
      "question": "___ you don't hurry, you will miss the train.",
      "options": [
        "Unless",
        "Although",
        "If",
        "While"
      ],
      "answer": "If",
      "explanation": "यह वाक्य एक सीधी शरत दर्शाता है. 'If' (जो)  का प्रयोग शर्त रखने के लिए के लिए होता है. 'जो आप जल्दी नहीं करो, तो आप ट्रेन चूकी जशो.'"
    },
    {
      "question": "I trust him ___ he is honest.",
      "options": [
        "so",
        "but",
        "because",
        "although"
      ],
      "answer": "because",
      "explanation": "यहाँ विश्वास करने की कारण (वह प्रामाणिक है) दी गई है, इसलिए 'because' (क्योंकि) का प्रयोग होगा."
    },
    {
      "question": "He is poor, ___ he is happy.",
      "options": [
        "and",
        "so",
        "yet",
        "for"
      ],
      "answer": "yet",
      "explanation": "'yet'  का प्रयोग 'but' की जैसे ही विरोधाभास दर्शाने के लिए होता है. 'वह गरीब है, फिर भी वह खुश है.'"
    },
    {
      "question": "Wait here ___ I get back.",
      "options": [
        "unless",
        "until",
        "if",
        "while"
      ],
      "answer": "until",
      "explanation": "यहाँ राह देखने की क्रिया की समयसीमा दर्शाने के लिए 'until' (जहाँ तक) का प्रयोग होता है."
    },
    {
      "question": "He is ___ foolish that he believes everything.",
      "options": [
        "such",
        "so",
        "very",
        "as"
      ],
      "answer": "so",
      "explanation": "'so...that' की रचना तीव्रता और परिणाम दर्शाता है. 'वह एटलो मूर्ख है या वह बधुं में की ले है.'"
    },
    {
      "question": "___ he worked hard, he did not get the promotion.",
      "options": [
        "Because",
        "Though",
        "As",
        "If"
      ],
      "answer": "Though",
      "explanation": "मेहनत करवा फिर भी प्रमोशन न मलवुं यह विरोधाभास है, जो 'Though' (हालांकि) के द्वारा दर्शावाय है."
    },
    {
      "question": "It is ___ a beautiful painting that I can't take my eyes off it.",
      "options": [
        "so",
        "such",
        "very",
        "as"
      ],
      "answer": "such",
      "explanation": "जब 'a/an' + adjective + noun हो, तब तीव्रता दर्शाने 'such...that' प्रयोग होता है. 'so beautiful a painting' भी सही है, भी 'such a beautiful painting' अधिक सामान्य है."
    },
    {
      "question": "You will not get the prize ___ you deserve it.",
      "options": [
        "if",
        "unless",
        "although",
        "until"
      ],
      "answer": "unless",
      "explanation": "'Unless'  का अर्थ 'if not' होता है. 'तम को इसंज्ञा नहीं मले जो आप उसका लायक नहीं होव.' यह एक नकारात्मक शरत है."
    },
    {
      "question": "Make hay ___ the sun shines.",
      "options": [
        "when",
        "while",
        "as",
        "since"
      ],
      "answer": "while",
      "explanation": "यह एक कहेवत है जो का अर्थ है 'तक का लाभ लो'. 'while' (जब)  का प्रयोग दो क्रियाओ एक साथ होती हो तब होता है."
    },
    {
      "question": "She is not only intelligent ___ hardworking.",
      "options": [
        "but also",
        "and",
        "or",
        "as well as"
      ],
      "answer": "but also",
      "explanation": "'not only...but also' यह एक जोडी है जो दो गुणो को जोडे है. 'उसकी केवल बुद्धिशाली ही नहीं भी मेहनतु भी है.'"
    }
  ],
  "test-17": [
    {
      "question": "He has been ill ___ he came from Chennai.",
      "options": [
        "as",
        "when",
        "since",
        "while"
      ],
      "answer": "since",
      "explanation": "'since' (ज्यारसे)  का प्रयोग समयके एक विशेष बिंदुसे शुरू हुई क्रिया दर्शाने के लिए होता है, खास करना Present Perfect Tense के साथ."
    },
    {
      "question": "___ you are here, you can help me.",
      "options": [
        "Although",
        "Since",
        "Unless",
        "If"
      ],
      "answer": "Since",
      "explanation": "'Since'  का प्रयोग यहाँ 'because' (या) 'as' (क्योंकि) के अर्थ में थयो है. 'क्योंकि आप यहाँ हो, आप म को मदद कर शको हो.'"
    },
    {
      "question": "This is the place ___ I was born.",
      "options": [
        "when",
        "where",
        "which",
        "that"
      ],
      "answer": "where",
      "explanation": "यहाँ स्थल का उल्लेख है, इसलिए स्थलसूचक संयोजक 'where' (ज्यां) का प्रयोग होगा."
    },
    {
      "question": "I don't know ___ to go.",
      "options": [
        "where",
        "when",
        "what",
        "how"
      ],
      "answer": "where",
      "explanation": "अनिश्चितता दर्शाने और स्थल बारे में पूछने के लिए 'where' (कहाँ) प्रयोग होता है. 'म को खबर नहीं या कहाँ जवुं.'"
    },
    {
      "question": "Do it ___ I tell you.",
      "options": [
        "as",
        "so",
        "if",
        "but"
      ],
      "answer": "as",
      "explanation": "'as'  का प्रयोग यहाँ 'जो रूप से' (या) 'जैसे' के अर्थ में थयो है. 'मैं तम को कमैं वे करो.'"
    },
    {
      "question": "Five years have passed ___ he left the city.",
      "options": [
        "since",
        "when",
        "while",
        "after"
      ],
      "answer": "since",
      "explanation": "भूतकालके कोई विशेष समयसे अत्यार सुधी की समय अवधि दर्शाने के लिए 'since' (ज्यारसे) प्रयोग होता है."
    },
    {
      "question": "He will win the race ___ he is the fastest runner.",
      "options": [
        "because",
        "although",
        "unless",
        "so"
      ],
      "answer": "because",
      "explanation": "यहाँ रेस जीतवा की संभावके का कारण (सौसे वहज़ दोडवीर होना) देने के लिए 'because' (क्योंकि) प्रयोग होता है."
    },
    {
      "question": "The boy was playing ___ the girl was reading.",
      "options": [
        "when",
        "as",
        "while",
        "if"
      ],
      "answer": "while",
      "explanation": "'while' (जब)  का प्रयोग एक ही समये चालती दो लंबी क्रियाओ दर्शाने के लिए होता है."
    },
    {
      "question": "He is honest, ___ everyone trusts him.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "so",
      "explanation": "यहाँ कारण (प्रामाणिक होना) और उसका परिणाम (सभी विश्वास करता है) दर्शाने के लिए 'so' (इसलिए) प्रयोग होता है."
    },
    {
      "question": "I will give you my book ___ you return it tomorrow.",
      "options": [
        "if",
        "unless",
        "although",
        "so that"
      ],
      "answer": "if",
      "explanation": "यहाँ पुस्तक देने की शरत (जो काले पाछी यहपो तो) रख के लिए गए है, इसलिए 'if' (जो) का प्रयोग होगा."
    }
  ],
  "test-18": [
    {
      "question": "___ she is beautiful, she is not proud.",
      "options": [
        "Because",
        "Although",
        "If",
        "As"
      ],
      "answer": "Although",
      "explanation": "सुंदर होना फिर भी गर्व न होना यह विरोधाभास है, जो दर्शाने के लिए 'Although' (हालांकि) प्रयोग होता है."
    },
    {
      "question": "You can have ___ the blue shirt or the red one.",
      "options": [
        "neither",
        "both",
        "either",
        "not only"
      ],
      "answer": "either",
      "explanation": "'either...or' की जोडी दो विकल्पो में से एक की चयन दर्शाता है."
    },
    {
      "question": "We went to the library ___ we could study in peace.",
      "options": [
        "because",
        "if",
        "so that",
        "although"
      ],
      "answer": "so that",
      "explanation": "'so that' (जोसे करना) क्रिया का हेतु दर्शाता है. 'हम पुस्तकालय में गए जोसे करना हम शांतिसे अभ्यास कर शकीए.'"
    },
    {
      "question": "I was tired, ___ I still finished the report.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "but",
      "explanation": "होतााला होना फिर भी रिपोर्ट पूरा करना यह विरोधाभास है, जो दर्शाने 'but' (भी, फिर भी) प्रयोग होता है."
    },
    {
      "question": "___ he saw the snake, he shouted for help.",
      "options": [
        "While",
        "Unless",
        "As soon as",
        "Until"
      ],
      "answer": "As soon as",
      "explanation": "एक घटना (साप जैसा) के बाद तरत ही हुई प्रतिक्रिया (मदद के लिए बूम पाडवी) दर्शाने 'as soon as' (जैसे ज) प्रयोग होता है."
    },
    {
      "question": "This is the same book ___ I gave you.",
      "options": [
        "that",
        "which",
        "as",
        "what"
      ],
      "answer": "as",
      "explanation": "जब 'the same'  का प्रयोग होता, तब उसके साथ संबंधक सर्वनाम के रूप में 'as' (या) 'that' प्रयोग होता है. 'as' यहाँ 'जो' के अर्थ में है."
    },
    {
      "question": "He can play ___ the violin and the cello.",
      "options": [
        "either",
        "neither",
        "both",
        "as well as"
      ],
      "answer": "both",
      "explanation": "'both...and' (दोनों...और) की जोडी दो वस्तुओ या व्यक्तिओ को जोड़ने के लिए प्रयोग होता है."
    },
    {
      "question": "You can't succeed ___ you work hard.",
      "options": [
        "if",
        "although",
        "unless",
        "because"
      ],
      "answer": "unless",
      "explanation": "'Unless'  का अर्थ 'if not' होता है. 'आप सफल नहीं हुई शको जो आप सखत मेहनत नहीं करो.'"
    },
    {
      "question": "He talked ___ nothing had happened.",
      "options": [
        "as if",
        "so that",
        "because",
        "although"
      ],
      "answer": "as if",
      "explanation": "'as if' (जानते या)  का प्रयोग काल्पनिक (या) अवास्तविक परिस्थिति दर्शाने के लिए होता है."
    },
    {
      "question": "The meeting was cancelled ___ the manager was ill.",
      "options": [
        "so",
        "because",
        "if",
        "though"
      ],
      "answer": "because",
      "explanation": "यहाँ मीटिंग यान्सल होने का कारण (मेनेजर बीमार थे) दर्शाने के लिए 'because' (क्योंकि) प्रयोग होता है."
    }
  ],
  "test-19": [
    {
      "question": "I don't care ___ you go or stay.",
      "options": [
        "if",
        "whether",
        "that",
        "unless"
      ],
      "answer": "whether",
      "explanation": "जब 'or' के साथ दो विकल्पो देने में आता है, तब अनिश्चितता दर्शाने के लिए 'whether' (या)  का प्रयोग 'if' की बजाय अधिक पसंद करने में आता है."
    },
    {
      "question": "He is ___ a fool that he cannot understand this simple thing.",
      "options": [
        "so",
        "such",
        "very",
        "too"
      ],
      "answer": "such",
      "explanation": "जब 'a/an' + noun हो, तब तीव्रता दर्शाने 'such...that' प्रयोग होता है. 'He is so foolish' भी सही है, भी 'He is such a fool' अधिक सामान्य है."
    },
    {
      "question": "I will not go ___ he invites me personally.",
      "options": [
        "if",
        "unless",
        "until",
        "although"
      ],
      "answer": "unless",
      "explanation": "'Unless' (जो नहीं तो)  का प्रयोग नकारात्मक शरत दर्शाने के लिए होता है. 'मैं नहीं जाउं जो वह म को व्यक्तिगत रूप से आमंत्रण नहीं देता.'"
    },
    {
      "question": "She works hard ___ she can support her family.",
      "options": [
        "because",
        "if",
        "so that",
        "although"
      ],
      "answer": "so that",
      "explanation": "'so that' (जोसे करना) क्रिया का हेतु दर्शाता है. 'उसकी सखत मेहनत करता है जोसे करना वह उसका परिवार को टेको दी शया.'"
    },
    {
      "question": "___ he is my brother, I cannot support his wrongdoings.",
      "options": [
        "Because",
        "Though",
        "As",
        "Since"
      ],
      "answer": "Though",
      "explanation": "'Though' (हालांकि) विरोधाभास दर्शाता है. वह मैंरो भाई होना फिर भी, मैं उसका गलत कार्यो को समर्थन दी सकता नहीं."
    },
    {
      "question": "He finished first ___ he started late.",
      "options": [
        "as",
        "though",
        "so",
        "if"
      ],
      "answer": "though",
      "explanation": "मोडा शुरू करवा फिर भी प्रथम आना यह एक विरोधाभासी परिणाम है, जो दर्शाने के लिए 'though' (हालांकि, वे फिर भी) प्रयोग होता है."
    },
    {
      "question": "This is the reason ___ he failed.",
      "options": [
        "what",
        "which",
        "why",
        "that"
      ],
      "answer": "why",
      "explanation": "कारण दर्शाने के लिए संबंधक क्रियाविशेषण 'why' (शा के लिए) का प्रयोग होता है. 'यह उसकारण है जोके लीधे वह फेल गया.'"
    },
    {
      "question": "___ you sow, so shall you reap.",
      "options": [
        "As",
        "What",
        "When",
        "If"
      ],
      "answer": "As",
      "explanation": "यह एक कहेवत है जो का अर्थ है 'जैसा वावशो, होना लणशो'. यहाँ 'As' (जैसा) का प्रयोग होता है."
    },
    {
      "question": "He has ___ to do but wait.",
      "options": [
        "something",
        "anything",
        "nothing",
        "everything"
      ],
      "answer": "nothing",
      "explanation": "'nothing but' एक मुहावरा है जो का अर्थ 'सिवाय कुछ और नहीं' होता है. 'उसके पास राह जैसे सिवाय कुछ और करने की नहीं.'"
    },
    {
      "question": "___ rich and poor, all must die.",
      "options": [
        "Either",
        "Neither",
        "Both",
        "Whether"
      ],
      "answer": "Both",
      "explanation": "'Both...and'  का प्रयोग दो समूहोने जोड़ने के लिए होता है. 'अमीर और गरीब दोनोंयह मरवुं ही पडे है.'"
    }
  ],
  "test-20": [
    {
      "question": "He must be punished, ___ he is guilty.",
      "options": [
        "for",
        "so",
        "and",
        "but"
      ],
      "answer": "for",
      "explanation": "यहाँ 'for'  का प्रयोग 'because' के अर्थ में अनुमानित कारण दर्शाने के लिए होता है. 'उसको सहीा थवी ही चाहिए, क्योंकि वह दोषित है.'"
    },
    {
      "question": "___ he tried again and again, he could not climb the wall.",
      "options": [
        "As",
        "Though",
        "Because",
        "If"
      ],
      "answer": "Though",
      "explanation": "वारंवार प्रयत्न करवा फिर भी दीवाल न चडी सकना यह विरोधाभास है, जो दर्शाने के लिए 'Though' (हालांकि) प्रयोग होता है."
    },
    {
      "question": "I would rather die ___ beg.",
      "options": [
        "than",
        "then",
        "but",
        "or"
      ],
      "answer": "than",
      "explanation": "'would rather' के बाद तुलना करवा के लिए 'than' का प्रयोग होता है. 'मैं भीख  मैंगवा की बजाय मरी जवा का पसंद करश.'"
    },
    {
      "question": "He speaks so fast ___ I cannot understand him.",
      "options": [
        "as",
        "so",
        "that",
        "than"
      ],
      "answer": "that",
      "explanation": "'so...that' की रचना परिणाम दर्शाने के लिए प्रयोग होता है. 'वह एटलुं वहज़ बोले है या मैं उसको समजी सकता नहीं.'"
    },
    {
      "question": "Wait for me ___ I finish this task.",
      "options": [
        "unless",
        "until",
        "if",
        "while"
      ],
      "answer": "until",
      "explanation": "'until' (जहाँ तक)  का प्रयोग कोई क्रिया कहाँ सुधी चालशे उसकी समयसीमा दर्शाने के लिए होता है."
    },
    {
      "question": "The bag is heavy, ___ I can carry it.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "but",
      "explanation": "बेग जोरे होना फिर भी उसको उठा शकवा की क्षमता दर्शाववी यह विरोधाभास है, इसलिए 'but' (भी) प्रयोग होगा."
    },
    {
      "question": "You will be late ___ you start now.",
      "options": [
        "if",
        "unless",
        "although",
        "because"
      ],
      "answer": "unless",
      "explanation": "'Unless'  का अर्थ 'if not' (जो नहीं तो) होता है. 'आप देर हो जाएगी जो आप अब शुरू नहीं करो.'"
    },
    {
      "question": "She is neither intelligent ___ beautiful.",
      "options": [
        "or",
        "and",
        "nor",
        "but"
      ],
      "answer": "nor",
      "explanation": "'neither...nor' यह दो नकारात्मक विशेषताओं को जोड़ने के लिए वपराती जोडी है."
    },
    {
      "question": "I heard a loud noise ___ I ran outside.",
      "options": [
        "so",
        "and",
        "but",
        "or"
      ],
      "answer": "and",
      "explanation": "यहाँ एक घटना (घोंघाट सांभल्यो) के बाद तरत ही हुई क्रिया (बाहर दोड्यो) को जोड़ने 'and' प्रयोग होता है. 'so' भी प्रयोग कर सकते, भी 'and' अधिक सीधो संबंध दर्शाता है."
    },
    {
      "question": "He is not only my teacher ___ my guide.",
      "options": [
        "and",
        "or",
        "but also",
        "so"
      ],
      "answer": "but also",
      "explanation": "'not only...but also' की जोडी का प्रयोग दो भूमिकाओ या गुणो को जोड़ने के लिए होता है."
    }
  ],
  "test-21": [
    {
      "question": "No sooner did the teacher enter the class ___ the students stood up.",
      "options": [
        "than",
        "then",
        "when",
        "that"
      ],
      "answer": "than",
      "explanation": "'No sooner' की के साथ हमेशा 'than' का प्रयोग होता है. यह रचना दर्शाता है या एक क्रिया के बाद तरत ही बीजी क्रिया हुई."
    },
    {
      "question": "He is not so strong ___ his brother.",
      "options": [
        "as",
        "like",
        "than",
        "that"
      ],
      "answer": "as",
      "explanation": "नकारात्मक तुलना में 'not so...as' (या) 'not as...as' का प्रयोग होता है. 'वह उसका भाई जितना मजबूत नहीं.'"
    },
    {
      "question": "Hardly had I reached the station ___ the train left.",
      "options": [
        "than",
        "when",
        "then",
        "that"
      ],
      "answer": "when",
      "explanation": "'Hardly' और 'Scarcely' की के साथ हमेशा 'when' का प्रयोग होता है. यह रचना भी 'No sooner...than' जैसा ही अर्थ दर्शाता है."
    },
    {
      "question": "He is such a good man ___ everyone respects him.",
      "options": [
        "as",
        "so",
        "that",
        "and"
      ],
      "answer": "that",
      "explanation": "'such...that' की रचना तीव्रता और परिणाम दर्शाता है. 'वह ऐसा अच्छा आदमी है या प्रत्येक जण उसका आदर करता है.'"
    },
    {
      "question": "I would rather resign ___ take part in this dishonesty.",
      "options": [
        "then",
        "than",
        "or",
        "but"
      ],
      "answer": "than",
      "explanation": "'would rather'  का प्रयोग चयन दर्शाने के लिए होता है और उसके साथ तुलना के लिए 'than' प्रयोग होता है."
    },
    {
      "question": "He behaves ___ he were the king.",
      "options": [
        "as",
        "like",
        "as though",
        "so that"
      ],
      "answer": "as though",
      "explanation": "'as though' (या) 'as if'  का प्रयोग काल्पनिक (या) अवास्तविक परिस्थिति दर्शाने के लिए होता है. उसके साथ हमेशा भूतकाल का क्रिया (Verb) (यहाँ 'were') आता है."
    },
    {
      "question": "___ I am busy, I will still find time for you.",
      "options": [
        "Since",
        "Because",
        "Even though",
        "If"
      ],
      "answer": "Even though",
      "explanation": "'Even though' (भले ही) यह 'Although' की बजाय भी अधिक बल देता हुआ विरोधाभास दर्शाता है. 'भले ही मैं व्यस्त हूँ, मैं वे फिर भी आपके लिए समय निकालूँगा.'"
    },
    {
      "question": "She is as intelligent, ___ not more intelligent, than her sister.",
      "options": [
        "if",
        "as",
        "or",
        "but"
      ],
      "answer": "if",
      "explanation": "यह एक खास रचना है 'as..., if not more..., than'. 'उसकी उसकी बहेन जोटली ज, जो अधिक नहीं तो, होशियार है.'"
    },
    {
      "question": "The reason why I am late is ___ my car broke down.",
      "options": [
        "because",
        "that",
        "so",
        "due to"
      ],
      "answer": "that",
      "explanation": "जब वाक्य की शुरुआत 'The reason why...' से होता, तब कारण दर्शाने के लिए 'because'  का प्रयोग टालवो चाहिए और 'that'  का प्रयोग करना चाहिए."
    },
    {
      "question": "He is not only known for his wisdom ___ for his kindness.",
      "options": [
        "and",
        "also",
        "but also",
        "as well as"
      ],
      "answer": "but also",
      "explanation": "'not only...but also' की जोडी दो गुणो या विशेषताओं को समैंन महत्व दी को जोडे है."
    }
  ],
  "test-22": [
    {
      "question": "Scarcely had she finished her meal ___ the phone rang.",
      "options": [
        "than",
        "when",
        "then",
        "that"
      ],
      "answer": "when",
      "explanation": "'Scarcely' और 'Hardly' की के साथ हमेशा 'when' का प्रयोग होता है. यह रचना दर्शाता है या एक क्रिया पूरी हुई न हुई वहाँ बीजी क्रिया हुई."
    },
    {
      "question": "He has no other aim ___ to succeed in life.",
      "options": [
        "but",
        "than",
        "except",
        "or"
      ],
      "answer": "than",
      "explanation": "जब 'other' या 'otherwise'  का प्रयोग तुलना के लिए होता, तब उसके साथ 'than' प्रयोग होता है. 'उसके पास जीवन में सफल होने सिवाय दूसरा कोई उद्देश्य नहीं.'"
    },
    {
      "question": "I doubt ___ he will keep his promise.",
      "options": [
        "if",
        "that",
        "whether",
        "unless"
      ],
      "answer": "if",
      "explanation": "जब 'doubt' या 'doubtful' हकारात्मक वाक्य में आता है, तब 'if' (या) 'whether' का प्रयोग होता है. 'that'  का प्रयोग नहीं होता."
    },
    {
      "question": "I have no doubt ___ he is honest.",
      "options": [
        "if",
        "that",
        "whether",
        "but"
      ],
      "answer": "that",
      "explanation": "जब 'doubt' या 'doubtful' नकारात्मक या प्रश्नवाचक वाक्य में आता है, तब 'that' का प्रयोग होता है. 'म को कोई शंका नहीं या वह प्रामाणिक है.'"
    },
    {
      "question": "She is both intelligent ___ beautiful.",
      "options": [
        "and",
        "or",
        "as well as",
        "also"
      ],
      "answer": "and",
      "explanation": "'both' की के साथ हमेशा 'and' की जोडी बनता है. 'उसकी बुद्धिशाली और सुंदर दोनों है.'"
    },
    {
      "question": "You can leave ___ you have finished the test.",
      "options": [
        "provided that",
        "as long as",
        "unless",
        "so that"
      ],
      "answer": "provided that",
      "explanation": "'provided that'  का अर्थ 'if' (जो) जैसा ही होता है और वह शर्त रखने के लिए के लिए प्रयोग होता है. 'आप जई शको हो, शरत है या आप टेस्ट पूरी कर दीधी हो.'"
    },
    {
      "question": "___ he was not invited, he went to the party.",
      "options": [
        "As",
        "Since",
        "Though",
        "Because"
      ],
      "answer": "Though",
      "explanation": "आमंत्रण न होना फिर भी पार्टी में जवुं यह विरोधाभास है, जो दर्शाने के लिए 'Though' (हालांकि) प्रयोग होता है."
    },
    {
      "question": "This is not ___ a great book as I expected.",
      "options": [
        "so",
        "as",
        "such",
        "very"
      ],
      "answer": "such",
      "explanation": "नकारात्मक वाक्य में 'not such...as' का प्रयोग होता है. 'यह एटलुं महान पुस्तक नहीं जोटली में अपेक्षा राखी से.'"
    },
    {
      "question": "Walk slowly ___ you might slip.",
      "options": [
        "or",
        "lest",
        "otherwise",
        "and"
      ],
      "answer": "or",
      "explanation": "'or', 'otherwise' और 'lest' तीनों चेतावनी के लिए प्रयोग होता है. 'lest' के साथ 'should' आता है. यहाँ 'or' (वरना) सौसे उचित विकल्प है."
    },
    {
      "question": "He would sooner starve ___ steal.",
      "options": [
        "but",
        "or",
        "than",
        "then"
      ],
      "answer": "than",
      "explanation": "'would sooner' यह 'would rather' जैसा ही है और उसके साथ भी चयन की तुलना के लिए 'than' प्रयोग होता है. 'वह चोरी करवा की बजाय भूखे मरवा का पसंद करशे.'"
    }
  ],
  "test-23": [
    {
      "question": "___ you and I are at fault.",
      "options": [
        "Either",
        "Neither",
        "Both",
        "Not only"
      ],
      "answer": "Both",
      "explanation": "'Both...and'  का प्रयोग दो कर्ता (Subject) को जोड़ने के लिए होता है और उसके साथ हमेशा बहुवचन का क्रिया (Verb) आता है."
    },
    {
      "question": "He has no other claim ___ his good looks.",
      "options": [
        "but",
        "except",
        "than",
        "so"
      ],
      "answer": "than",
      "explanation": "जब 'other'  का प्रयोग होता, तब तुलना के लिए 'than' प्रयोग होता है. 'उसके पास उसका अच्छे देखाव सिवाय दूसरा कोई दावो नहीं.'"
    },
    {
      "question": "The choice is between glory ___ shame.",
      "options": [
        "or",
        "and",
        "but",
        "nor"
      ],
      "answer": "and",
      "explanation": "'between' के बाद दो वस्तुओ को जोड़ने के लिए 'and' का प्रयोग होता है, 'or'  का नहीं."
    },
    {
      "question": "I'll do it ___ you pay me or not.",
      "options": [
        "if",
        "that",
        "whether",
        "unless"
      ],
      "answer": "whether",
      "explanation": "जब '...or not' आता है, तब अनिश्चितता और विकल्प दर्शाने के लिए 'whether' का प्रयोग होता है. 'आप म को पैसा यहपो या नहीं, मैं वह करश.'"
    },
    {
      "question": "He works hard ___ he may become rich.",
      "options": [
        "because",
        "so that",
        "in order to",
        "if"
      ],
      "answer": "so that",
      "explanation": "'so that' (जोसे करना) क्रिया का हेतु दर्शाता है. यहाँ मेहनत करने की हेतु अमीर बनवा का है."
    },
    {
      "question": "Run fast ___ you should miss the train.",
      "options": [
        "or",
        "lest",
        "otherwise",
        "if"
      ],
      "answer": "lest",
      "explanation": "'lest'  का अर्थ 'एवुं न होता या' है और उसके साथ 'should' का प्रयोग होता है, जो नकारात्मक परिणामसे बचवा की चेतावनी देता है."
    },
    {
      "question": "___ he is, he is always cheerful.",
      "options": [
        "However poor",
        "Poor as",
        "Although poor",
        "Whatever poor"
      ],
      "answer": "Poor as",
      "explanation": "'Adjective + as + subject + verb' यह 'Although' जैसा ही अर्थ देता है. 'Poor as he is'  का अर्थ 'Although he is poor' (वह गरीब होना फिर भी) होता है."
    },
    {
      "question": "No sooner did I arrive at the airport ___ the plane took off.",
      "options": [
        "when",
        "then",
        "than",
        "and"
      ],
      "answer": "than",
      "explanation": "'No sooner' वाली वाक्य रचसंज्ञाां, दूसरा वाक्य जोड़ने के साथ हमेशा 'than' का प्रयोग होता है."
    },
    {
      "question": "He is ___ weak to walk.",
      "options": [
        "so",
        "very",
        "such",
        "too"
      ],
      "answer": "too",
      "explanation": "'too...to' की रचना नकारात्मक अर्थ में अत्यंत तीव्रता दर्शाता है. 'वह एटलो बधो नबलो है या चली सकता नहीं.'"
    },
    {
      "question": "Unless you work harder, you ___ fail.",
      "options": [
        "will",
        "will not",
        "can",
        "should"
      ],
      "answer": "will",
      "explanation": "'Unless'  का अर्थ 'if...not' होता है. वाक्य का अर्थ है: 'If you do not work harder, you will fail.' इसलिए 'will fail' यहवशे."
    }
  ],
  "test-24": [
    {
      "question": "He is not only foolish ___ obstinate.",
      "options": [
        "and",
        "but also",
        "or",
        "as well as"
      ],
      "answer": "but also",
      "explanation": "'not only...but also' की जोडी का प्रयोग दो नकारात्मक गुणो को जोड़ने के लिए भी होता है. 'वह केवल मूर्ख ही नहीं, भी जिद्दी भी है.'"
    },
    {
      "question": "___ he says is not true.",
      "options": [
        "What",
        "That",
        "Which",
        "Whatever"
      ],
      "answer": "What",
      "explanation": "यहाँ 'What'  का अर्थ 'The thing that' (जो बात) है. 'वह जो कहे है वह सही नहीं.' 'What' यहाँ Noun Clause बनाता है."
    },
    {
      "question": "I did not go to the meeting, ___ did my friend.",
      "options": [
        "neither",
        "nor",
        "either",
        "so"
      ],
      "answer": "nor",
      "explanation": "जब प्रथम वाक्य नकारात्मक हो और दूसरा वाक्य भी वह ही प्रकार का नकार दर्शाने वाला हो, तब 'nor' + auxiliary verb + subject की रचना प्रयोग होता है. 'मैं मीटिंग में न गया, और मैंरो मित्र भी नहीं.'"
    },
    {
      "question": "The storm was ___ fierce that trees were uprooted.",
      "options": [
        "such",
        "so",
        "very",
        "as"
      ],
      "answer": "so",
      "explanation": "'so...that' की रचना तीव्रता और परिणाम दर्शाता है. 'तोफान एटलुं भयंकर था या वृक्षो उखडी गए.'"
    },
    {
      "question": "He asked me ___ I could lend him some money.",
      "options": [
        "that",
        "whether",
        "what",
        "as"
      ],
      "answer": "whether",
      "explanation": "परोक्ष प्रश्नवाचक वाक्य में (Indirect Question), ज्यां जवाब 'हा' या 'के' में हो, वहाँ 'if' (या) 'whether' का प्रयोग होता है. 'उसे म को पूछ्युं या क्या मैं उसको थोडा पैसा उधार दी सकता.'"
    },
    {
      "question": "He deserves to succeed, ___ he works so hard.",
      "options": [
        "for",
        "because",
        "as",
        "since"
      ],
      "answer": "for",
      "explanation": "'for'  का प्रयोग अनुमानित कारण दर्शाने के लिए होता है, जो मुख्य वाक्य के बाद आता है. 'वह सफल होने को लायक है, क्योंकि (मैं मानता हूँ या) वह बहुत मेहनत करता है.'"
    },
    {
      "question": "Such was his behaviour ___ everyone disliked him.",
      "options": [
        "as",
        "so",
        "that",
        "because"
      ],
      "answer": "that",
      "explanation": "जब 'Such' वाक्य की शुरुआत में आता है, तब परिणाम दर्शाने के लिए 'that' का प्रयोग होता है. 'उसका वर्तन एवुं था या प्रत्येक जण उसको केपसंद करवह थे.'"
    },
    {
      "question": "Ten years have passed ___ his father died.",
      "options": [
        "when",
        "while",
        "since",
        "after"
      ],
      "answer": "since",
      "explanation": "'since'  का प्रयोग भूतकालके कोई विशेष समयसे वर्तमान सुधी की समय अवधि दर्शाने के लिए होता है."
    },
    {
      "question": "He must not be late, ___ he will be punished.",
      "options": [
        "and",
        "so",
        "otherwise",
        "but"
      ],
      "answer": "otherwise",
      "explanation": "'otherwise'  का अर्थ 'वरना' होता है और वह चेतावनी और उसका नकारात्मक परिणाम दर्शाता है, जो 'or' जैसा ही है."
    },
    {
      "question": "___ a borrower nor a lender be.",
      "options": [
        "Either",
        "Neither",
        "Both",
        "Not"
      ],
      "answer": "Neither",
      "explanation": "यह एक प्रख्यात कहेवत है. 'Neither...nor' की जोडी का प्रयोग दो नकारात्मक विकल्पो दर्शाने के लिए होता है. 'उधार लेकेर भी न ब का और उधार यहपकेर भी न ब का.'"
    }
  ],
  "test-25": [
    {
      "question": "The thief ran away ___ he should be caught.",
      "options": [
        "or",
        "if",
        "lest",
        "so that"
      ],
      "answer": "lest",
      "explanation": "'lest'  का अर्थ 'एवुं न होता या' है और उसके साथ 'should' का प्रयोग होता है. वह नकारात्मक परिणामसे बचवा का हेतु दर्शाता है."
    },
    {
      "question": "He lost his job ___ his carelessness.",
      "options": [
        "because",
        "due to",
        "owing to",
        "because of"
      ],
      "answer": "because of",
      "explanation": "'because of' एक prepositional phrase है जो की के बाद noun (carelessness) आता है. 'because' एक conjunction है जो की के बाद clause (subject + verb) आता है."
    },
    {
      "question": "___ he is rich, he is humble.",
      "options": [
        "Rich as",
        "As rich",
        "Though rich",
        "Because rich"
      ],
      "answer": "Rich as",
      "explanation": "Inversion की यह रचसंज्ञाां 'Adjective + as + subject + verb'  का प्रयोग 'Although' जैसा ही अर्थ दर्शाने होता है. 'Rich as he is' = 'Although he is rich'."
    },
    {
      "question": "I would rather have a coffee ___ a tea.",
      "options": [
        "then",
        "than",
        "but",
        "or"
      ],
      "answer": "than",
      "explanation": "'would rather' के बाद चयन की तुलना करने के साथ हमेशा 'than' का प्रयोग होता है."
    },
    {
      "question": "He had scarcely entered the room ___ the lights went off.",
      "options": [
        "than",
        "that",
        "when",
        "then"
      ],
      "answer": "when",
      "explanation": "'Scarcely' और 'Hardly' के साथ हमेशा 'when' का प्रयोग होता है. 'वह रूम में घुसा न घुसा वहाँ लाईटो जती रज.'"
    },
    {
      "question": "He must either work hard ___ give up his studies.",
      "options": [
        "and",
        "but",
        "nor",
        "or"
      ],
      "answer": "or",
      "explanation": "'either' के साथ हमेशा 'or' की जोडी बनता है, जो दो विकल्पो में से एक की चयन दर्शाता है."
    },
    {
      "question": "___ you return the book, I shall punish you.",
      "options": [
        "If",
        "Unless",
        "Until",
        "Whether"
      ],
      "answer": "Unless",
      "explanation": "'Unless'  का अर्थ 'if not' (जो नहीं तो) होता है. 'जो आप पुस्तक वापस नहीं यहपो, तो मैं तम को सहीा करश.'"
    },
    {
      "question": "___ you are wrong, I am right.",
      "options": [
        "Whether",
        "Even if",
        "As",
        "Since"
      ],
      "answer": "Even if",
      "explanation": "'Even if' (भले ही) एक काल्पनिक भी मजबूत शरत दर्शाता है. 'भले ही आप गलत हो, मैं सही हूँ.' (इसका अर्थ यह नहीं या आप गलत हो, भी जो हो तो भी मैं सही हूँ)."
    },
    {
      "question": "The place was so noisy ___ I couldn't hear anything.",
      "options": [
        "as",
        "so",
        "that",
        "than"
      ],
      "answer": "that",
      "explanation": "'so...that' की रचना कारण और परिणाम दर्शाता है. 'जगह एटली घोंघाटवाली से या मैं कंई सांभली शक्यो नहीं.'"
    },
    {
      "question": "Not only did he help me ___ he also gave me money.",
      "options": [
        "and",
        "or",
        "but",
        "so"
      ],
      "answer": "but",
      "explanation": "जब 'Not only' वाक्य की शुरुआत में आता है और inversion (did he help) होता, तब दूसरा वाक्य जोड़ने के लिए 'but' का प्रयोग होता है. 'also' वैकल्पिक है. 'उसे म को केवल मदद ही न कर, भी पैसा भी यहप्या.'"
    }
  ],
  "test-26": [
    {
      "question": "___ he was guilty, he would have confessed.",
      "options": [
        "If",
        "Unless",
        "Whether",
        "Although"
      ],
      "answer": "If",
      "explanation": "यह वाक्य Type 3 conditional sentence है, जो भूतकाल की अवास्तविक शरत दर्शाता है. 'If' (जो)  का प्रयोग यहाँ उचित है. 'जो वह दोषित होत, तो उसे कबूलात कर लीधी होत.'"
    },
    {
      "question": "He is my friend; ___, I will help him.",
      "options": [
        "so",
        "but",
        "therefore",
        "yet"
      ],
      "answer": "therefore",
      "explanation": "'therefore' (इसलिए, इसलिए) यह 'so' की बजाय अधिक formal है और कारण-परिणाम का संबंध दर्शाता है."
    },
    {
      "question": "She has been working ___ morning.",
      "options": [
        "for",
        "since",
        "from",
        "while"
      ],
      "answer": "since",
      "explanation": "Present Perfect Continuous Tense  मैं, क्रिया कब शुरू हुई वह समयबिंदु दर्शाने के लिए 'since' (ज्यारसे) प्रयोग होता है. 'for' समय अवधि दर्शाता है."
    },
    {
      "question": "He must be either mad ___ a fool.",
      "options": [
        "and",
        "nor",
        "or",
        "but"
      ],
      "answer": "or",
      "explanation": "'either' के साथ हमेशा 'or' की जोडी बनता है, जो दो संभावित विकल्पो दर्शाता है."
    },
    {
      "question": "I would die before I ___.",
      "options": [
        "yield",
        "would yield",
        "yielding",
        "yielded"
      ],
      "answer": "yield",
      "explanation": "Conjunctions of time जैसे या 'before', 'after', 'as soon as' के बाद भविष्य काल दर्शाने के लिए सामान्य वर्तमान काल का प्रयोग होता है. 'मैं झूकीश वह पहले मरी जईश.'"
    },
    {
      "question": "He is honest, ___ people take advantage of him.",
      "options": [
        "and",
        "so",
        "but",
        "for"
      ],
      "answer": "and",
      "explanation": "यहाँ, 'and'  का प्रयोग परिणाम दर्शाने के लिए थयो है. 'वह प्रामाणिक है और (इसलिए) लोगों उसका फायदो उठावे है.' 'so' भी उचित है, भी 'and' यहाँ एक दुर्भाग्यपूर्ण परिणाम के रूप में आता है."
    },
    {
      "question": "___ he is, I will not spare him.",
      "options": [
        "Whoever",
        "Whatever",
        "However",
        "Whichever"
      ],
      "answer": "Whoever",
      "explanation": "'Whoever'  का अर्थ 'कोई भी व्यक्ति जो' होता है. 'वह कोई भी हो, मैं उसको होडीश नहीं.'"
    },
    {
      "question": "No sooner had the sun risen ___ the fog disappeared.",
      "options": [
        "when",
        "than",
        "then",
        "that"
      ],
      "answer": "than",
      "explanation": "'No sooner' वाली वाक्य रचसंज्ञाां, के बादके वाक्य को जोड़ने के साथ हमेशा 'than' का प्रयोग होता है."
    },
    {
      "question": "___ I were a bird, I would fly.",
      "options": [
        "If",
        "As if",
        "Though",
        "When"
      ],
      "answer": "If",
      "explanation": "यह एक काल्पनिक, अवास्तविक शरत है (Type 2 conditional). आई शरत दर्शाने 'If' का प्रयोग होता है और कर्ता (Subject) कोई भी हो, 'were' प्रयोग होता है."
    },
    {
      "question": "The problem is not ___ to go, but how to go.",
      "options": [
        "what",
        "that",
        "where",
        "which"
      ],
      "answer": "where",
      "explanation": "यहाँ समस्या स्थल (कहाँ जवुं) और रीत (यावी रूप से जवुं) बीच की है. इसलिए 'where' उचित है."
    }
  ],
  "test-27": [
    {
      "question": "I have brought my camera ___ I can take some pictures.",
      "options": [
        "because",
        "so that",
        "in order to",
        "if"
      ],
      "answer": "so that",
      "explanation": "'so that' (जोसे करना)  का प्रयोग हेतु दर्शाने के लिए होता है. यहाँ यामेरो लाने का हेतु चित्रो लेवा का है."
    },
    {
      "question": "The concert was cancelled ___ the heavy rain.",
      "options": [
        "because",
        "due to",
        "as",
        "since"
      ],
      "answer": "due to",
      "explanation": "'due to' और 'because of' यह prepositions है जो की के बाद noun/noun phrase आता है. यहाँ 'the heavy rain' एक noun phrase है. 'because' के बाद clause आता है."
    },
    {
      "question": "___ he entered the room, everyone fell silent.",
      "options": [
        "While",
        "Although",
        "As soon as",
        "Until"
      ],
      "answer": "As soon as",
      "explanation": "एक क्रिया के बाद तरत ही बीजी क्रिया हुई, वह दर्शाने 'As soon as' (जैसे ज) प्रयोग होता है."
    },
    {
      "question": "She is as beautiful ___ her mother.",
      "options": [
        "as",
        "like",
        "so",
        "than"
      ],
      "answer": "as",
      "explanation": "हकारात्मक वाक्य में समानता की तुलना करने के लिए 'as...as' की रचना प्रयोग होता है. 'उसकी उसकी माँ जोटली ही सुंदर है.'"
    },
    {
      "question": "___ you are a graduate, you are eligible for this post.",
      "options": [
        "Seeing that",
        "Though",
        "Unless",
        "As if"
      ],
      "answer": "Seeing that",
      "explanation": "'Seeing that'  का अर्थ 'because' (क्योंकि) होता है और वह एक जाणीती हकीकत पर आधारित कारण दर्शाता है. 'आप स्केतक हो वह जोतां, आप यह पद के लिए लायक हो.'"
    },
    {
      "question": "He has been absent twice ___ the school reopened.",
      "options": [
        "since",
        "for",
        "from",
        "after"
      ],
      "answer": "since",
      "explanation": "Present perfect tense के साथ, क्रिया क्यारसे शुरू हुई है वह समयबिंदु दर्शाने 'since' का प्रयोग होता है."
    },
    {
      "question": "He is not only a cheat ___ a liar.",
      "options": [
        "but",
        "but also",
        "and",
        "as well as"
      ],
      "answer": "but also",
      "explanation": "'not only...but also' की जोडी दो नकारात्मक गुणो को भी जोडी शया है."
    },
    {
      "question": "I would rather sit idle ___ do such a menial job.",
      "options": [
        "then",
        "or",
        "but",
        "than"
      ],
      "answer": "than",
      "explanation": "'would rather' के साथ चयन की तुलना करने के लिए 'than' का प्रयोग होता है."
    },
    {
      "question": "___ he gains or loses, it's all the same to him.",
      "options": [
        "If",
        "Whether",
        "That",
        "As"
      ],
      "answer": "Whether",
      "explanation": "जब दो विरोधाभासी विकल्पो दिए जाएं, तब 'Whether...or' की रचना प्रयोग होता है. 'वह जीते या हारे, उसे कोई फर्क नहीं पड़ता नहीं.'"
    },
    {
      "question": "___ there is a will, there is a way.",
      "options": [
        "When",
        "If",
        "Where",
        "As"
      ],
      "answer": "Where",
      "explanation": "यह एक प्रख्यात कहेवत है. 'Where there is a will, there is a way' (ज्यां चाह है, वहाँ राह है). यहाँ 'Where' (ज्यां) स्थलसूचक है."
    }
  ],
  "test-28": [
    {
      "question": "He is neither a saint ___ a sinner.",
      "options": [
        "or",
        "and",
        "nor",
        "but"
      ],
      "answer": "nor",
      "explanation": "'neither' के साथ हमेशा 'nor' की जोडी बनता है, जो दो नकारात्मक विकल्पो दर्शाता है. 'वह संत भी नहीं या पापी भी नहीं.'"
    },
    {
      "question": "Supposing ___ you miss the train, what will you do?",
      "options": [
        "if",
        "that",
        "whether",
        "then"
      ],
      "answer": "if",
      "explanation": "'Supposing' और 'if' दोनों शरत दर्शाता है, परंतु वह सामान्य रूप से एक साथ प्रयुक्त नहीं. हालांकि, 'supposing if' यह बोलचाल की भाषा में प्रयोग होता है. अधिक सही प्रश्न 'Supposing you miss the train...' होत. दियह गयह विकल्पो में से, वाक्य का अर्थ पूर्ण करवा के लिए 'if' सौसे तार्किक है, भी वह दोहराव है. हालांकि, यहाँ 'supposing' को ध्यान में लेता, सौसे पास का अर्थ 'if' से सरे है."
    },
    {
      "question": "He speaks English fluently, ___ he has never been to England.",
      "options": [
        "and",
        "but",
        "so",
        "even though"
      ],
      "answer": "even though",
      "explanation": "'even though' (भले ही) एक मजबूत विरोधाभास दर्शाता है. 'वह सडसडाट अंग्रेजी बोले है, भले ही वह कबय इंग्लेन्ड गया नहीं.'"
    },
    {
      "question": "The box is ___ heavy for me to lift.",
      "options": [
        "so",
        "very",
        "too",
        "such"
      ],
      "answer": "too",
      "explanation": "'too...for' की रचना नकारात्मक अर्थ में तीव्रता दर्शाता है. 'यह बोक्स मैंरा के लिए उपाडवा के लिए बहुत हीोरे है' (यानी मैं उठा सकता नहीं)."
    },
    {
      "question": "I am taking an umbrella ___ it might rain.",
      "options": [
        "in case",
        "if",
        "unless",
        "so that"
      ],
      "answer": "in case",
      "explanation": "'in case' (हेतु, शायद)  का प्रयोग सावधानी के कदम के रूप में कोई संभावित घटना के लिए की तैयारी दर्शाने होता है. 'मैं छत्री लई रहा हूँ, शायद बारिश आता है तो.'"
    },
    {
      "question": "I have never spoken to him, ___ have I written to him.",
      "options": [
        "neither",
        "nor",
        "either",
        "or"
      ],
      "answer": "nor",
      "explanation": "जब प्रथम वाक्य नकारात्मक हो ('never'), तब दूसरा नकारात्मक वाक्य जोड़ने के लिए 'nor'  का प्रयोग inversion (have I) के साथ होता है."
    },
    {
      "question": "___ clever he may be, he cannot deceive me.",
      "options": [
        "Whatever",
        "However",
        "Whoever",
        "Whichever"
      ],
      "answer": "However",
      "explanation": "'However' + adjective/adverb  का अर्थ 'चाहे जोटलुं' होता है. 'वह चाहे जितना होशियार हो, वह म को हैतरी सकता नहीं.'"
    },
    {
      "question": "He talks ___ a philosopher.",
      "options": [
        "as",
        "like",
        "as if",
        "so"
      ],
      "answer": "like",
      "explanation": "जब तुलना noun या pronoun के साथ हो, तब 'like' का प्रयोग होता है. 'as if' के बाद clause (subject + verb) आता है. यहाँ 'a philosopher' एक noun phrase है."
    },
    {
      "question": "You had better leave now ___ you will be punished.",
      "options": [
        "or",
        "and",
        "but",
        "lest"
      ],
      "answer": "or",
      "explanation": "'had better' यह एक मजबूत सलाह है, और 'or' (वरना) उसका पालन न करने की नकारात्मक परिणाम दर्शाता है."
    },
    {
      "question": "___ he fails, he will try again.",
      "options": [
        "Even if",
        "Unless",
        "Although",
        "Because"
      ],
      "answer": "Even if",
      "explanation": "'Even if' (भले ही) एक काल्पनिक शरत दर्शाता है, जो मुख्य वाक्यके परिणाम पर असर करती नहीं. 'भले ही वह फेल जाय, वह फरी प्रयत्न करशे.'"
    }
  ],
  "test-29": [
    {
      "question": "He is as tall, ___ not taller, than his father.",
      "options": [
        "if",
        "or",
        "as",
        "and"
      ],
      "answer": "if",
      "explanation": "यह एक व्यक्तिवाचक रचना है: 'as + adj, if not more + adj, than...'. इसका अर्थ है 'वह उसका पिता जितना ही ऊँचा है, जो अधिक नहीं तो.'"
    },
    {
      "question": "___ I know, he is a very honest person.",
      "options": [
        "As far as",
        "As long as",
        "As well as",
        "As soon as"
      ],
      "answer": "As far as",
      "explanation": "'As far as I know' (जहाँ तक मैं जानता हूँ) यह एक मुहावरा है जो का प्रयोग सीमित जानकारी व्यक्त करने के लिए होता है."
    },
    {
      "question": "He thinks of nothing else ___ playing cards.",
      "options": [
        "but",
        "than",
        "except",
        "or"
      ],
      "answer": "but",
      "explanation": "'nothing else but' एक मुहावरा है जो का अर्थ '...सिवाय कुछ और नहीं' होता है. 'than'  का प्रयोग 'else' के साथ होता है, भी 'nothing else but' अधिक प्रचलित है."
    },
    {
      "question": "He was annoyed, ___ he kept quiet.",
      "options": [
        "still",
        "yet",
        "but",
        "all are correct"
      ],
      "answer": "all are correct",
      "explanation": "'still', 'yet', और 'but' तीनों का प्रयोग विरोधाभास दर्शाने के लिए हो सकता है. 'वह केराज था, फिर भी/भी वह शांत रह्यो.'"
    },
    {
      "question": "The situation is serious, ___ not hopeless.",
      "options": [
        "and",
        "so",
        "but",
        "or"
      ],
      "answer": "but",
      "explanation": "यहाँ परिस्थिति की गंभीरता और वह निराशाजनक न होना बीच विरोधाभास दर्शाने 'but' प्रयोग होता है."
    },
    {
      "question": "___ you and your brother must go.",
      "options": [
        "Either",
        "Neither",
        "Both",
        "Whether"
      ],
      "answer": "Both",
      "explanation": "'Both...and'  का प्रयोग दो व्यक्तिओ को जोड़ने के लिए होता है और उसके साथ बहुवचन का क्रिया (Verb) आता है. 'तारे और तारा भाई दोनोंयह जवुं ही चाहिए.'"
    },
    {
      "question": "___ a man sows, so he shall reap.",
      "options": [
        "As",
        "What",
        "When",
        "That"
      ],
      "answer": "As",
      "explanation": "यह एक कहेवत है. 'As a man sows, so he shall reap'  का अर्थ है 'आदमी जैसा वावे है, होना ही लणे है.'"
    },
    {
      "question": "Hardly had the lecture begun ___ the students started making noise.",
      "options": [
        "than",
        "then",
        "when",
        "that"
      ],
      "answer": "when",
      "explanation": "'Hardly' वाली वाक्य रचसंज्ञाां, दूसरा वाक्य जोड़ने के साथ हमेशा 'when' का प्रयोग होता है."
    },
    {
      "question": "I shall not forgive him ___ he apologizes.",
      "options": [
        "if",
        "whether",
        "until",
        "so long as"
      ],
      "answer": "until",
      "explanation": "'until' (जहाँ तक...नहीं)  का प्रयोग समय की शर्त रखने के लिए के लिए होता है. 'जहाँ तक वह माफ़ी नहीं  मैंगे, वहाँ सुधी मैं उसको माफ़ नहीं करता.'"
    },
    {
      "question": "He is weak in English; ___, he tries to learn it.",
      "options": [
        "however",
        "so",
        "but",
        "therefore"
      ],
      "answer": "however",
      "explanation": "'however' (वे फिर भी)  का प्रयोग दो वाक्यों बीच विरोधाभास दर्शाने के लिए होता है. 'वह अंग्रेजी में नबलो है; वे फिर भी, वह शीखवा का प्रयत्न करता है.'"
    }
  ],
  "test-30": [
    {
      "question": "___ I should fail, I would not give up hope.",
      "options": [
        "Even if",
        "Unless",
        "Although",
        "Since"
      ],
      "answer": "Even if",
      "explanation": "'Even if' (भले ही) एक काल्पनिक शरत दर्शाता है. 'भले ही मैं फेल जाउं, मैं आशा नहीं होडुं.' यह दर्शाता है या परिणाम चाहे जो हो, निर्णय अडग रथेशे."
    },
    {
      "question": "I would rather play ___ work.",
      "options": [
        "but",
        "than",
        "then",
        "or"
      ],
      "answer": "than",
      "explanation": "'would rather'  का प्रयोग चयन दर्शाने के लिए होता है और उसके साथ तुलना के लिए 'than' प्रयोग होता है. 'मैं काम करवा की बजाय रमवा का पसंद करश.'"
    },
    {
      "question": "The question is not ___ he will come, but when he will come.",
      "options": [
        "if",
        "that",
        "whether",
        "what"
      ],
      "answer": "whether",
      "explanation": "जब '... or not' (जो यहाँ 'but' के द्वारा सूचित है) जैसा विकल्प हो, तब 'whether' का प्रयोग होता है. 'प्रश्न यह नहीं या वह यहवशे या नहीं, भी कब यहवशे.'"
    },
    {
      "question": "Not only the boy ___ his parents are responsible for this.",
      "options": [
        "and",
        "or",
        "but also",
        "as well as"
      ],
      "answer": "but also",
      "explanation": "'not only...but also' से जब दो कर्ता (Subject) जोडाय, तब क्रिया (Verb) दूसरों कर्ता (Subject) (his parents) अनुसार बहुवचन में (are) आता है."
    },
    {
      "question": "He is so ill ___ he cannot attend the class.",
      "options": [
        "as",
        "that",
        "so",
        "what"
      ],
      "answer": "that",
      "explanation": "'so...that' की रचना कारण और परिणाम दर्शाता है. 'वह एटलो बीमार है या वह वर्ग में हाजरी दी सकता नहीं.'"
    },
    {
      "question": "He worked day and night ___ he might pass.",
      "options": [
        "because",
        "so that",
        "in order that",
        "if"
      ],
      "answer": "so that",
      "explanation": "'so that'  का प्रयोग हेतु दर्शाने के लिए होता है. 'उसे दिन-रात मेहनत कर जोसे करना वह पास हो सकता.'"
    },
    {
      "question": "___ he is poor, he does not beg.",
      "options": [
        "As",
        "Since",
        "Though",
        "Because"
      ],
      "answer": "Though",
      "explanation": "गरीब होना फिर भी भीख न  मांगनी यह विरोधाभास है, जो 'Though' (हालांकि) के द्वारा दर्शावाय है."
    },
    {
      "question": "The higher you go, ___ it is.",
      "options": [
        "the colder",
        "the cold",
        "colder",
        "coldest"
      ],
      "answer": "the colder",
      "explanation": "यह एक 'parallel increase/decrease' की रचना है: 'the + comparative..., the + comparative...'. 'आप जोटला ऊंचे जाओ, वहटलुं ठंडुं होता है.'"
    },
    {
      "question": "I am not sure ___ he is telling the truth.",
      "options": [
        "if",
        "that",
        "as",
        "whether"
      ],
      "answer": "whether",
      "explanation": "जब 'not sure' जैसी अनिश्चितता हो, तब 'if' (या) 'whether' का प्रयोग होता है. 'whether' यहाँ अधिक उचित है क्योंकि वह 'या नहीं'  का भाव दर्शाता है."
    },
    {
      "question": "He has no chance of winning, ___ he tries hard.",
      "options": [
        "even if",
        "unless",
        "although",
        "so that"
      ],
      "answer": "even if",
      "explanation": "'even if' (भले ही) एक काल्पनिक शरत दर्शाता है. 'उसकी जीतवा की कोई शक्यता नहीं, भले ही वह सखत प्रयत्न करे.'"
    }
  ]
};
