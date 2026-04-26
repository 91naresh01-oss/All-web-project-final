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
      "explanation": "અહીં કર્તા 'The dog' એકવચન છે, તેથી તેની સાથે ક્રિયાપદનું 's' કે 'es' વાળું રૂપ (barks) વપરાય છે."
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
      "explanation": "કર્તા 'My friends' બહુવચન છે, તેથી તેની સાથે બહુવચનનું ક્રિયાપદ 'are' વપરાય છે."
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
      "explanation": "કર્તા 'She' ત્રીજો પુરુષ એકવચન છે, તેથી તેની સાથે 'has' વપરાય છે."
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
      "explanation": "કર્તા 'We' બહુવચન છે, તેથી તેની સાથે 'are' વપરાય છે."
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
      "explanation": "સનાતન સત્ય દર્શાવવા માટે સાદા વર્તમાનકાળનો ઉપયોગ થાય છે. કર્તા 'The sun' એકવચન હોવાથી 'rises' આવે છે."
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
      "explanation": "આ એક કહેવત છે અને તેમાં કર્તા 'An apple a day' એકવચન ગણાય છે, તેથી 'keeps' આવે છે."
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
      "explanation": "કર્તા 'They' બહુવચન છે અને 'now' શબ્દ ચાલુ વર્તમાનકાળ સૂચવે છે, તેથી 'are' વપરાય છે."
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
      "explanation": "સાદા વર્તમાનકાળમાં નકાર વાક્ય બનાવવા માટે ત્રીજા પુરુષ એકવચન (He) સાથે 'does' નો ઉપયોગ થાય છે."
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
      "explanation": "અહીં મુખ્ય કર્તા 'The quality' છે, જે એકવચન છે, નહીં કે 'apples'. તેથી 'was' વપરાય છે."
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
      "explanation": "કર્તા 'I' સાથે હંમેશા 'am' ક્રિયાપદનો ઉપયોગ થાય છે."
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
      "explanation": "કર્તા 'The children' બહુવચન છે, તેથી તેની સાથે ક્રિયાપદનું મૂળ રૂપ 'play' વપરાય છે."
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
      "explanation": "કર્તા 'My sister' ત્રીજો પુરુષ એકવચન છે, તેથી ક્રિયાપદને 's' લાગે છે."
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
      "explanation": "કર્તા 'You' સાથે હંમેશા 'are' ક્રિયાપદ વપરાય છે, ભલે તે એકવચન હોય કે બહુવચન."
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
      "explanation": "જ્યારે 'One of' વાળી રચના હોય, ત્યારે કર્તા 'One' ને ગણવામાં આવે છે જે એકવચન છે, તેથી 'has' વપરાય છે."
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
      "explanation": "'News' શબ્દ દેખાવમાં બહુવચન લાગે છે, પરંતુ તે એકવચન ગણાય છે, તેથી 'is' વપરાય છે."
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
      "explanation": "અહીં કર્તા 'A pair' છે, જે એકવચન છે. તેથી, તેની સાથે 'is' વપરાય છે."
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
      "explanation": "અહીં મુખ્ય કર્તા 'The man' છે, જે એકવચન છે. 'with all the birds' એ વધારાની માહિતી છે. તેથી 'lives' આવે છે."
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
      "explanation": "કર્તા 'It' ત્રીજો પુરુષ એકવચન છે, તેથી તેની સાથે 'is' વપરાય છે."
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
      "explanation": "જ્યારે બે શબ્દો મળીને એક જ વસ્તુ કે વિચાર રજૂ કરે (અહીં એક વાનગી), ત્યારે તે એકવચન ગણાય છે અને 'is' વપરાય છે."
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
      "explanation": "વાક્યનો મુખ્ય કર્તા 'The list' છે, જે એકવચન છે. 'of items' એ વધારાની માહિતી છે. તેથી 'is' આવે છે."
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
      "explanation": "કર્તા 'The teacher' એકવચન છે, તેથી સાદા વર્તમાનકાળમાં ક્રિયાપદને 's' લાગે છે."
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
      "explanation": "અહીં મુખ્ય કર્તા 'The people' છે, જે બહુવચન છે. તેથી 'are' વપરાય છે."
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
      "explanation": "'Mathematics' જેવા વિષયોના નામ દેખાવમાં બહુવચન લાગે છે, પરંતુ તે એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "'Glasses', 'scissors', 'trousers' જેવા શબ્દો કે જે બે ભાગોથી બનેલા હોય છે, તે બહુવચન ગણાય છે. તેથી 'are' વપરાય છે."
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
      "explanation": "જ્યારે 'team' (સમૂહ) એક જૂથ તરીકે કામ કરતું હોય, ત્યારે તે એકવચન ગણાય છે અને 'is' વપરાય છે."
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
      "explanation": "'There' વાળા વાક્યોમાં ક્રિયાપદ તેના પછી આવતા નામ ('many books') પર આધાર રાખે છે. 'many books' બહુવચન હોવાથી 'are' આવે છે."
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
      "explanation": "અહીં મુખ્ય કર્તા 'This box' છે, જે એકવચન છે. તેથી ક્રિયાપદને 's' લાગે છે."
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
      "explanation": "'You' સાથે હંમેશા 'are' નો ઉપયોગ થાય છે, ભલે તે પ્રશ્નાર્થ વાક્ય હોય."
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
      "explanation": "જ્યારે 'jury' (સમૂહ) ના સભ્યો વચ્ચે મતભેદ હોય અને તેઓ અલગ-અલગ વ્યક્તિઓ તરીકે વર્તતા હોય, ત્યારે તે બહુવચન ગણાય છે. તેથી 'were' વપરાય છે."
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
      "explanation": "જ્યારે પૈસાની રકમ, સમયગાળો કે અંતરને એક એકમ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "કર્તા 'My father' એકવચન છે, તેથી તેની સાથે 'is' વપરાય છે."
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
      "explanation": "કર્તા 'The cats' બહુવચન છે, તેથી તેની સાથે 'are' વપરાય છે."
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
      "explanation": "'every morning' રોજિંદી ક્રિયા સૂચવે છે. કર્તા 'She' ત્રીજો પુરુષ એકવચન હોવાથી ક્રિયાપદને 'es' લાગે છે."
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
      "explanation": "કર્તા 'These flowers' બહુવચન છે, તેથી 'are' નો ઉપયોગ થાય છે."
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
      "explanation": "અહીં મુખ્ય કર્તા 'The boy' છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "'There' વાળા વાક્યમાં ક્રિયાપદ પછી આવતા નામ 'a big tree' પર આધાર રાખે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "કર્તા 'you' સાથે પ્રશ્નાર્થ વાક્યમાં 'are' નો ઉપયોગ થાય છે."
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
      "explanation": "'Trousers' (પેન્ટ) જેવા શબ્દો, જે બે સરખા ભાગોથી બનેલા હોય છે, તે બહુવચન ગણાય છે, તેથી 'are' આવે છે."
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
      "explanation": "'Police' શબ્દ હંમેશા બહુવચન ગણાય છે, તેથી તેની સાથે 'are' વપરાય છે."
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
      "explanation": "આ એક કહેવત છે. 'Slow and steady' એક જ વિચાર રજૂ કરે છે, તેથી તે એકવચન ગણાય છે અને ક્રિયાપદને 's' લાગે છે."
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
      "explanation": "કર્તા 'The birds' બહુવચન છે, તેથી ક્રિયાપદ 'are' વપરાય છે."
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
      "explanation": "કર્તા 'My mother' ત્રીજો પુરુષ એકવચન છે, તેથી સાદા વર્તમાનકાળમાં ક્રિયાપદ 'cooks' આવે છે."
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
      "explanation": "અહીં મુખ્ય કર્તા 'The information' છે. 'Information' એ ગણી ન શકાય તેવું નામ (uncountable noun) અને એકવચન છે, તેથી 'was' આવે છે."
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
      "explanation": "અહીં કર્તા 'A lot of work' છે. 'Work' એ ગણી ન શકાય તેવું નામ (uncountable) છે, તેથી તે એકવચન ગણાય છે અને 'is' આવે છે."
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
      "explanation": "'Politics', 'economics' જેવા શબ્દો અંતે 's' હોવા છતાં એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "દેશોના નામ, ભલે તે બહુવચન જેવા દેખાતા હોય, એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "કર્તા 'my keys' બહુવચન છે, તેથી પ્રશ્નાર્થ વાક્યમાં 'are' નો ઉપયોગ થાય છે."
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
      "explanation": "જ્યારે વાક્યની શરૂઆત 'Each of' થી થાય, ત્યારે કર્તા એકવચન ગણાય છે. તેથી ક્રિયાપદને 's' લાગે છે."
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
      "explanation": "કર્તા 'The stars' બહુવચન છે, તેથી ક્રિયાપદનું મૂળ રૂપ 'shine' વપરાય છે."
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
      "explanation": "અહીં મુખ્ય કર્તા 'The water' છે, જે ગણી ન શકાય તેવું (uncountable) અને એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'One of' થી શરૂ થતા વાક્યમાં, કર્તા 'One' ને ગણવામાં આવે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "કર્તા 'All the players' બહુવચન છે, તેથી તેની સાથે 'are' ક્રિયાપદ વપરાય છે."
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
      "explanation": "જ્યારે કર્તા 'along with', 'as well as', 'with' જેવા શબ્દોથી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The dog') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે બે શબ્દો 'and' થી જોડાયેલા હોય પણ એક જ વિચાર કે વસ્તુનો ભાવ રજૂ કરે, ત્યારે તે એકવચન ગણાય છે. અહીં 'Bread and butter' એક જ ખોરાકનો ઉલ્લેખ કરે છે, તેથી 'is' વપરાય છે."
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
      "explanation": "'There' વાળા વાક્યોમાં, ક્રિયાપદ તેના પછી આવતા નામ ('a problem') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "'Scissors' (કાતર) શબ્દ હંમેશા બહુવચન ગણાય છે કારણ કે તે બે ભાગોથી બનેલું છે. તેથી 'are' વપરાય છે."
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
      "explanation": "જ્યારે 'family' (કુટુંબ) ને એક એકમ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન ગણાય છે અને તેની સાથે 'is' વપરાય છે."
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
      "explanation": "જ્યારે અંતર, સમય, કે રકમને એક સંપૂર્ણ એકમ તરીકે રજૂ કરવામાં આવે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે બે કર્તા 'and' થી જોડાયેલા હોય, ત્યારે તે બહુવચન બને છે. તેથી 'are' વપરાય છે."
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
      "explanation": "'Does' સાથેના પ્રશ્નાર્થ વાક્યમાં ક્રિયાપદનું મૂળ રૂપ વપરાય છે. 'anyone' એકવચન હોવા છતાં, 'Does' પહેલેથી જ ત્રીજા પુરુષ એકવચનનો ભાવ દર્શાવે છે, તેથી 'have' આવે છે."
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
      "explanation": "કર્તા 'The boy' ત્રીજો પુરુષ એકવચન છે અને 'every day' સાદો વર્તમાનકાળ સૂચવે છે, તેથી ક્રિયાપદને 'es' લાગે છે."
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
      "explanation": "કર્તા 'The cows' બહુવચન છે, તેથી તેની સાથે 'are' વપરાય છે."
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
      "explanation": "કર્તા 'My best friend' એકવચન છે, તેથી ક્રિયાપદ 'is' વપરાય છે."
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
      "explanation": "પુસ્તકોના નામ, ભલે તે બહુવચન જેવા લાગે, એકવચન ગણાય છે. તેથી 'was' આવે છે."
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
      "explanation": "'Furniture' એ ગણી ન શકાય તેવું નામ (uncountable noun) છે અને તે હંમેશા એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "આ વાક્યનો મુખ્ય કર્તા 'The color' છે, જે એકવચન છે, 'eyes' નહીં. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'and' થી જોડાયેલા બે અંકો ગાણિતિક ક્રિયા દર્શાવે, ત્યારે તે બહુવચન ગણાય છે અને ક્રિયાપદનું મૂળ રૂપ આવે છે. જોકે, 'makes' પણ સ્વીકાર્ય છે."
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
      "explanation": "'News' શબ્દ એકવચન છે, તેથી તેની સાથે 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'committee' (સમિતિ) એક જૂથ તરીકે સર્વસંમતિથી નિર્ણય લે, ત્યારે તે એકવચન ગણાય છે અને 'has' વપરાય છે."
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
      "explanation": "'Here' અને 'There' થી શરૂ થતા વાક્યોમાં ક્રિયાપદ તેના પછી આવતા નામ ('the books') મુજબ આવે છે. 'the books' બહુવચન હોવાથી 'are' આવે છે."
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
      "explanation": "અહીં કર્તા 'A flock' (ટોળું) છે, જે એકવચન સમૂહવાચક નામ છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'and' થી જોડાયેલા બે શબ્દો એક જ વ્યક્તિનો ઉલ્લેખ કરતા હોય (અહીં જે કવિ છે તે જ ગાયક છે, કારણ કે 'the' ફક્ત પ્રથમ શબ્દ પહેલાં છે), ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે કર્તા 'with' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The captain') મુજબ આવે છે, જે એકવચન છે. તેથી 'has' વપરાય છે."
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
      "explanation": "આ વાક્યનો મુખ્ય કર્તા 'A series' છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે અપૂર્ણાંક (fraction) પછી ગણી શકાય તેવું બહુવચન નામ ('students') આવે, ત્યારે ક્રિયાપદ બહુવચન હોય છે. તેથી 'are' આવે છે."
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
      "explanation": "'The Arabian Nights' એ એક પુસ્તકનું નામ છે. પુસ્તકોના નામ હંમેશા એકવચન ગણાય છે, તેથી 'is' આવે છે."
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
      "explanation": "કર્તા 'My uncle' ત્રીજો પુરુષ એકવચન છે, તેથી સાદા વર્તમાનકાળમાં ક્રિયાપદને 's' લાગે છે."
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
      "explanation": "'Furniture' એ ગણી ન શકાય તેવું નામ (uncountable noun) છે અને તે હંમેશા એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "વાક્યનો કર્તા 'This' છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'Many a' પછી હંમેશા એકવચન નામ ('student') અને એકવચન ક્રિયાપદ ('has') આવે છે. આ એક વિશિષ્ટ નિયમ છે."
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
      "explanation": "જ્યારે બે કર્તા 'and' થી જોડાયેલા હોય, ત્યારે તે બહુવચન બને છે. તેથી ક્રિયાપદનું મૂળ રૂપ 'go' વપરાય છે."
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
      "explanation": "જ્યારે કર્તા 'together with' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The Prime Minister') મુજબ આવે છે, જે એકવચન છે. તેથી 'greets' આવે છે."
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
      "explanation": "જ્યારે વાક્યની શરૂઆત 'The number of' થી થાય, ત્યારે ક્રિયાપદ હંમેશા એકવચન ('is') હોય છે."
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
      "explanation": "જ્યારે વાક્યની શરૂઆત 'A number of' થી થાય, ત્યારે તેનો અર્થ 'ઘણા' થાય છે અને ક્રિયાપદ બહુવચન ('are') હોય છે."
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
      "explanation": "'Everybody' જેવા અનિશ્ચિત સર્વનામ એકવચન ગણાય છે. તેથી તેની સાથે એકવચન ક્રિયાપદ 'is' આવે છે. 'is having' યોગ્ય છે."
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
      "explanation": "'Measles' (ઓરી) જેવા રોગોના નામ અંતે 's' હોવા છતાં એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે વિશેષણ (adjective) ની આગળ 'the' લાગે (the rich, the poor), ત્યારે તે આખા વર્ગનો ઉલ્લેખ કરે છે અને બહુવચન ગણાય છે. તેથી 'are' આવે છે."
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
      "explanation": "'Each of' થી શરૂ થતા વાક્યમાં કર્તા એકવચન ગણાય છે, તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'Neither...nor' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('I') મુજબ આવે છે. તેથી 'am' વપરાય છે."
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
      "explanation": "આ વાક્યનો મુખ્ય કર્તા 'The cost' છે, જે એકવચન છે. તેથી 'has' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'with' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The ship') મુજબ આવે છે, જે એકવચન છે. તેથી 'was' આવે છે."
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
      "explanation": "અહીં કર્તા 'A gang' (ટોળકી) છે, જે એકવચન સમૂહવાચક નામ છે. તેથી 'has' વપરાય છે."
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
      "explanation": "'Cattle' (ઢોર) શબ્દ દેખાવમાં એકવચન લાગે છે, પરંતુ તે હંમેશા બહુવચન ગણાય છે. તેથી 'are' વપરાય છે."
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
      "explanation": "'Neither of' પછી હંમેશા એકવચન ક્રિયાપદ આવે છે. તેથી 'has' વપરાય છે."
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
      "explanation": "અહીં 'chairman' અને 'managing director' એક જ વ્યક્તિ છે કારણ કે 'the' ફક્ત પ્રથમ પદ પહેલાં છે. તેથી કર્તા એકવચન છે અને 'is' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'as well as' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('Iron') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "આ એક પ્રખ્યાત કહેવત છે. જોકે 'Time and tide' બે અલગ વસ્તુઓ છે, ઘણીવાર આ કહેવતમાં 'wait' (બહુવચન) નો ઉપયોગ થાય છે, પરંતુ કેટલાક 'waits' (એકવચન) પણ સ્વીકારે છે. પરંપરાગત રીતે 'wait' વધુ પ્રચલિત છે."
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
      "explanation": "જ્યારે 'majority' પછી ગણી ન શકાય તેવું નામ ('work') આવે, ત્યારે ક્રિયાપદ એકવચન હોય છે. તેથી 'has' આવે છે."
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
      "explanation": "જ્યારે 'Either...or' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('the bag') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'A large number of' નો અર્થ 'ઘણા' થાય છે, તેથી તેની સાથે બહુવચન ક્રિયાપદ 'have' વપરાય છે."
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
      "explanation": "જ્યારે 'Neither...nor' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('the students') મુજબ આવે છે, જે બહુવચન છે. તેથી 'were' વપરાય છે."
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
      "explanation": "જ્યારે 'Each' શબ્દનો ઉપયોગ થાય, ભલે તે 'and' થી જોડાયેલો હોય, કર્તા હંમેશા એકવચન ગણાય છે. તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે 'team members' (સભ્યો) નો ઉલ્લેખ અલગ-અલગ વ્યક્તિઓ તરીકે થાય, ત્યારે તે બહુવચન ગણાય છે. તેથી 'are' વપરાય છે."
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
      "explanation": "'Crowd' (ટોળું) સામાન્ય રીતે એક એકમ તરીકે ગણાય છે, તેથી તેની સાથે એકવચન ક્રિયાપદ 'is' વપરાય છે."
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
      "explanation": "જ્યારે કર્તા 'as well as' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('Physics') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'Either...or' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('he') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "'News' શબ્દ એકવચન છે, તેથી તેની સાથે 'is' વપરાય છે."
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
      "explanation": "અહીં 'wages' નો અર્થ 'પરિણામ' થાય છે, જે એકવચન છે. તેથી 'is' વપરાય છે. જો તેનો અર્થ 'પગાર' હોત, તો તે બહુવચન ગણાત."
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
      "explanation": "જ્યારે 'Not only...but also' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('the teacher') મુજબ આવે છે, જે એકવચન છે. તેથી 'was' આવે છે."
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
      "explanation": "અહીં મુખ્ય વાક્ય 'One of the... students is my friend' છે. વચ્ચેનું વાક્ય 'who gets full marks' એ 'students' વિશે વધારાની માહિતી આપે છે. જોકે, મુખ્ય કર્તા 'One' હોવાથી મુખ્ય ક્રિયાપદ 'is' આવે છે, પરંતુ 'who' નો સંબંધ તેના નજીકના 'students' (બહુવચન) સાથે હોવાથી કેટલાક અહીં 'get' પણ વાપરી શકે. પણ 'One' પર ભાર હોવાથી 'gets' પણ સ્વીકાર્ય ગણાય છે. સંદર્ભ મુજબ, અહીં મુખ્ય કર્તા 'One' ને અનુસરવું વધુ યોગ્ય છે."
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
      "explanation": "જ્યારે 'government' (સરકાર) ને એક સંસ્થા તરીકે ગણવામાં આવે, ત્યારે તે એકવચન છે. તેથી 'has' આવે છે."
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
      "explanation": "જ્યારે બે અલગ-અલગ કર્તા 'and' થી જોડાય, ત્યારે તે બહુવચન બને છે. તેથી 'are' વપરાય છે."
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
      "explanation": "'Nobody', 'somebody', 'anybody' જેવા અનિશ્ચિત સર્વનામો એકવચન ગણાય છે. તેથી ક્રિયાપદને 's' લાગે છે."
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
      "explanation": "જ્યારે 'a pair of' નો ઉપયોગ થાય, ત્યારે કર્તા 'pair' એકવચન ગણાય છે. જો ફક્ત 'scissors' હોત તો તે બહુવચન ગણાત. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'Some of' પછી ગણી ન શકાય તેવું નામ ('water') આવે, ત્યારે ક્રિયાપદ એકવચન હોય છે. તેથી 'has' વપરાય છે."
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
      "explanation": "જ્યારે 'Some of' પછી ગણી શકાય તેવું બહુવચન નામ ('books') આવે, ત્યારે ક્રિયાપદ બહુવચન હોય છે. તેથી 'are' વપરાય છે."
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
      "explanation": "જ્યારે 'Either...or' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('my parents') મુજબ આવે છે, જે બહુવચન છે. તેથી 'are' આવે છે."
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
      "explanation": "જ્યારે 'majority' પછી ગણી શકાય તેવું બહુવચન નામ ('people') આવે, ત્યારે ક્રિયાપદ બહુવચન હોય છે. તેથી 'are' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'unlike', 'like', 'with' જેવા શબ્દોથી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The boy') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'More than one' પછી હંમેશા એકવચન નામ ('person') અને એકવચન ક્રિયાપદ ('was') આવે છે. આ એક વિશિષ્ટ નિયમ છે."
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
      "explanation": "જ્યારે 'and' થી જોડાયેલા બે શબ્દો એક જ સંયુક્ત વસ્તુ ('horse and carriage' એટલે કે ઘોડાગાડી) નો ઉલ્લેખ કરે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'Neither...nor' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('their guide') મુજબ આવે છે, જે એકવચન છે. તેથી 'was' વપરાય છે."
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
      "explanation": "'Every one of' થી શરૂ થતા વાક્યમાં કર્તા એકવચન ગણાય છે. તેથી 'has' વપરાય છે."
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
      "explanation": "અહીં કર્તા 'A group' છે, જે એકવચન સમૂહવાચક નામ છે. તેથી 'was' આવે છે."
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
      "explanation": "અહીં 'CEO' અને 'founder' એક જ વ્યક્તિ છે, તેથી કર્તા એકવચન છે અને તેની સાથે 'is' વપરાય છે."
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
      "explanation": "જ્યારે અપૂર્ણાંક ('Half of') પછી ગણી ન શકાય તેવું નામ ('cake') આવે, ત્યારે ક્રિયાપદ એકવચન હોય છે. તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે અપૂર્ણાંક ('Half of') પછી ગણી શકાય તેવું બહુવચન નામ ('apples') આવે, ત્યારે ક્રિયાપદ બહુવચન હોય છે. તેથી 'are' વપરાય છે."
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
      "explanation": "જ્યારે 'public' (જનતા) નો ઉલ્લેખ એક સમૂહ તરીકે થાય, ત્યારે તે એકવચન ગણાય છે અને તેની સાથે 'is' વપરાય છે."
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
      "explanation": "અહીં કર્તા 'What he said' (તેણે જે કહ્યું તે) એક આખું વાક્યાંશ (clause) છે, જે એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "'Police' શબ્દ હંમેશા બહુવચન ગણાય છે, તેથી તેની સાથે ક્રિયાપદનું મૂળ રૂપ 'need' વપરાય છે."
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
      "explanation": "જ્યારે 'or' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('her sisters') મુજબ આવે છે, જે બહુવચન છે. તેથી 'read' વપરાય છે."
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
      "explanation": "'A lot of' પછી બહુવચન નામ ('people') આવે, ત્યારે ક્રિયાપદ બહુવચન હોય છે. તેથી 'are' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'no less than', 'as well as' જેવા શબ્દોથી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The manager') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'All of' પછી ગણી ન શકાય તેવું નામ ('cake') આવે, ત્યારે ક્રિયાપદ એકવચન હોય છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'All of' પછી ગણી શકાય તેવું બહુવચન નામ ('cookies') આવે, ત્યારે ક્રિયાપદ બહુવચન હોય છે. તેથી 'were' આવે છે."
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
      "explanation": "આ વાક્યનો મુખ્ય કર્તા 'The boy' છે, જે એકવચન છે. 'whom I met yesterday' એ વધારાની માહિતી છે. તેથી 'is' આવે છે."
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
      "explanation": "'The Philippines' એ એક દેશનું નામ છે. દેશોના નામ, ભલે તે બહુવચન જેવા દેખાય, એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "અહીં 'patience' અને 'perseverance' બે અલગ-અલગ ગુણો છે જે 'and' થી જોડાયેલા છે. તેથી કર્તા બહુવચન છે અને 'are' વપરાય છે."
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
      "explanation": "'There' વાળા વાક્યમાં ક્રિયાપદ તેના પછી આવતા નામ ('many opportunities') મુજબ આવે છે. 'many opportunities' બહુવચન હોવાથી 'have' આવે છે."
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
      "explanation": "'Somebody' જેવા અનિશ્ચિત સર્વનામ એકવચન ગણાય છે, તેથી તેની સાથે 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'Not only...but also' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('his parents') મુજબ આવે છે, જે બહુવચન છે. તેથી 'are' વપરાય છે."
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
      "explanation": "જ્યારે કર્તા 'as well as' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The teacher') મુજબ આવે છે, જે એકવચન છે. તેથી 'was' આવે છે."
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
      "explanation": "અહીં કર્તા 'A bunch' (ઝૂમખું) છે, જે એકવચન સમૂહવાચક નામ છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'None of' પછી સામાન્ય રીતે એકવચન ક્રિયાપદ ('has') નો ઉપયોગ થાય છે, જોકે આધુનિક અંગ્રેજીમાં બહુવચન ('have') પણ સ્વીકાર્ય છે. પરંતુ, ઔપચારિક રીતે એકવચન વધુ યોગ્ય છે."
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
      "explanation": "'News' શબ્દ હંમેશા એકવચન ગણાય છે, તેથી તેની સાથે 'is' વપરાય છે."
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
      "explanation": "જ્યારે વિશેષણ ('poor') ની આગળ 'the' લાગે, ત્યારે તે આખા વર્ગ (ગરીબ લોકો) નો ઉલ્લેખ કરે છે અને બહુવચન ગણાય છે. તેથી 'are' આવે છે."
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
      "explanation": "જ્યારે પૈસાની રકમને એક એકમ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'council' (પરિષદ) એક જૂથ તરીકે સર્વસંમતિથી કાર્ય કરે, ત્યારે તે એકવચન ગણાય છે. તેથી 'has' આવે છે."
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
      "explanation": "કાલ્પનિક અથવા અવાસ્તવિક પરિસ્થિતિ દર્શાવતા 'If' વાળા વાક્યોમાં, 'I' સાથે 'was' ને બદલે 'were' નો ઉપયોગ થાય છે."
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
      "explanation": "જ્યારે ક્રિયાપદનું to-infinitive રૂપ ('To err') વાક્યનો કર્તા હોય, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે કર્તા 'with' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The king') મુજબ આવે છે, જે એકવચન છે. તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે વાક્યની શરૂઆત 'Every' થી થાય, ભલેને કર્તા 'and' થી જોડાયેલા હોય, ક્રિયાપદ હંમેશા એકવચન હોય છે. તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે 'Neither...nor' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('I') મુજબ આવે છે. તેથી 'am' વપરાય છે."
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
      "explanation": "આ વાક્યનો મુખ્ય કર્તા 'The quality' છે, જે એકવચન છે. 'of these mangoes' એ વધારાની માહિતી છે. તેથી 'is' આવે છે."
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
      "explanation": "અહીં મુખ્ય કર્તા 'The thief' છે, જે એકવચન છે. તેથી 'was' વપરાય છે."
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
      "explanation": "જ્યારે વાક્યનો કર્તા 'One' હોય, ત્યારે સંબંધક સર્વનામ તરીકે 'one's' નો ઉપયોગ થાય છે, 'his' કે 'her' નહીં."
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
      "explanation": "અહીં કર્તા 'A herd' (ઝુંડ) છે, જે એકવચન સમૂહવાચક નામ છે. તેથી 'was' વપરાય છે."
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
      "explanation": "જ્યારે 'jury' (સમૂહ) ના સભ્યોના મંતવ્યોમાં મતભેદ હોય, ત્યારે તે બહુવચન ગણાય છે. 'their opinions' પરથી પણ આ ખ્યાલ આવે છે. તેથી 'were' આવે છે."
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
      "explanation": "'Each of' થી શરૂ થતા વાક્યમાં કર્તા એકવચન ગણાય છે, તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે 'Neither...nor' થી બે ગણી ન શકાય તેવા (uncountable) કર્તા જોડાય, ત્યારે ક્રિયાપદ એકવચન હોય છે. તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે 'Most of' પછી ગણી શકાય તેવું બહુવચન નામ ('students') આવે, ત્યારે ક્રિયાપદ બહુવચન હોય છે. તેથી 'do' આવે છે."
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
      "explanation": "જ્યારે 'Most of' પછી ગણી ન શકાય તેવું નામ ('information') આવે, ત્યારે ક્રિયાપદ એકવચન હોય છે. તેથી 'is' આવે છે."
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
      "explanation": "વાક્યનો મુખ્ય કર્તા 'The collection' છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'Not one of' વાળી રચનામાં કર્તા એકવચન ગણાય છે, તેથી એકવચન ક્રિયાપદ 'has' નો ઉપયોગ થાય છે."
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
      "explanation": "'The rise and fall' અહીં એક જ પ્રક્રિયા (ભરતી અને ઓટ) નો ઉલ્લેખ કરે છે, તેથી તે એકવચન ગણાય છે અને 'is' આવે છે."
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
      "explanation": "જ્યારે 'Either...or' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('his assistants') મુજબ આવે છે, જે બહુવચન છે. તેથી 'have' આવે છે."
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
      "explanation": "જ્યારે 'acoustics' નો અર્થ 'ધ્વનિ ગુણવત્તા' થાય, ત્યારે તે બહુવચન ગણાય છે. તેથી 'are' વપરાય છે. જો તે વિષયનું નામ હોત તો એકવચન હોત."
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
      "explanation": "અહીં 'The President' અને 'the CEO' બે અલગ-અલગ વ્યક્તિઓ છે કારણ કે બંનેની આગળ 'the' આર્ટિકલ છે. તેથી કર્તા બહુવચન છે અને 'are' આવે છે."
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
      "explanation": "'There' વાળા વાક્યમાં ક્રિયાપદ તેના પછી આવતા નામ ('a strange silence') મુજબ આવે છે, જે એકવચન છે. તેથી 'was' આવે છે."
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
      "explanation": "'Many a' પછી હંમેશા એકવચન નામ ('man') અને એકવચન ક્રિયાપદ ('has') આવે છે. આ એક સ્થાપિત નિયમ છે."
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
      "explanation": "જ્યારે કર્તા 'not' દ્વારા બીજા નામથી અલગ પડે, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The dog') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "'Someone' એ અનિશ્ચિત સર્વનામ છે અને તે એકવચન ગણાય છે. તેથી તેની સાથે 'has' વપરાય છે."
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
      "explanation": "'Equipment' એ ગણી ન શકાય તેવું નામ (uncountable noun) છે અને તે હંમેશા એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'accompanied by' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The teacher') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે સમયગાળાને ('Two weeks') એક એકમ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'Neither of' પછી હંમેશા એકવચન ક્રિયાપદ આવે છે. તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે Gerund (ક્રિયાપદનું 'ing' વાળું રૂપ જે નામ તરીકે વપરાય, અહીં 'Walking') વાક્યનો કર્તા હોય, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "'The three musketeers' એ એક નવલકથાનું નામ છે. પુસ્તકોના નામ હંમેશા એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'A number of' નો અર્થ 'ઘણી' થાય છે, તેથી તેની સાથે બહુવચન ક્રિયાપદ 'are' વપરાય છે."
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
      "explanation": "જ્યારે વાક્યની શરૂઆત 'The number of' થી થાય, ત્યારે ક્રિયાપદ હંમેશા એકવચન ('was') હોય છે."
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
      "explanation": "જ્યારે 'Either...or' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('I') મુજબ આવે છે. તેથી 'am' વપરાય છે."
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
      "explanation": "જ્યારે 'assembly' (સભા) એક જૂથ તરીકે કાર્ય કરે છે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'Not only...but also' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('the teachers') મુજબ આવે છે, જે બહુવચન છે. તેથી 'are' આવે છે."
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
      "explanation": "'Baggage' કે 'luggage' એ ગણી ન શકાય તેવા નામ (uncountable nouns) છે અને તે હંમેશા એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "અહીં 'poet' અને 'philosopher' એક જ વ્યક્તિ છે કારણ કે 'the' ફક્ત પ્રથમ પદ પહેલાં છે. તેથી કર્તા એકવચન છે અને 'has' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'unlike' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('My father') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે ક્રિયાપદનું to-infinitive રૂપ ('To take') વાક્યનો કર્તા હોય, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે અપૂર્ણાંક ('Two-thirds of') પછી એકવચન નામ ('the city') આવે, ત્યારે ક્રિયાપદ એકવચન હોય છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'Every' શબ્દનો ઉપયોગ થાય, ભલે તે 'and' થી જોડાયેલો હોય, કર્તા હંમેશા એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "'The long and short of the matter' (બાબતનો સાર) એ એક જ વિચાર રજૂ કરે છે, તેથી તે એકવચન ગણાય છે અને 'is' વપરાય છે."
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
      "explanation": "અહીં 'The horse' અને 'the rider' બે અલગ-અલગ કર્તા છે કારણ કે બંનેની આગળ 'the' આર્ટિકલ છે. તેથી કર્તા બહુવચન છે અને 'have' આવે છે."
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
      "explanation": "જ્યારે 'crew' (જહાજના કર્મચારીઓ) ને એક જૂથ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન ગણાય છે. તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે 'Neither...nor' થી બે એકવચન કર્તા જોડાય, ત્યારે ક્રિયાપદ એકવચન હોય છે અને તેની નજીકના કર્તા ('blame') મુજબ આવે છે. તેથી 'seems' આવે છે."
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
      "explanation": "'Advice' એ ગણી ન શકાય તેવું નામ (uncountable) છે. 'None of' પછી uncountable noun આવે તો ક્રિયાપદ એકવચન હોય છે. તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે 'Statistics' (આંકડાશાસ્ત્ર) વિષયનું નામ હોય, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' આવે છે. જો તેનો અર્થ 'આંકડા' હોત તો તે બહુવચન હોત."
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
      "explanation": "કાલ્પનિક પરિસ્થિતિ દર્શાવતા 'If' વાળા વાક્યોમાં, કર્તા ગમે તે હોય, 'were' નો ઉપયોગ થાય છે."
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
      "explanation": "જ્યારે 'majority' પછી એક સમૂહ ('committee') નો ઉલ્લેખ હોય જે એકમ તરીકે કામ કરતું હોય, ત્યારે ક્રિયાપદ એકવચન હોય છે. તેથી 'is' આવે છે."
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
      "explanation": "'Proceeds' (આવક) શબ્દ હંમેશા બહુવચન ગણાય છે. તેથી 'are' વપરાય છે."
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
      "explanation": "'Gentry' (સજ્જન વર્ગ) જેવા સમૂહવાચક નામો બહુવચન ગણાય છે. તેથી 'were' આવે છે."
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
      "explanation": "'More than one' પછી હંમેશા એકવચન નામ ('city') અને એકવચન ક્રિયાપદ ('was') આવે છે. આ એક નિયમ છે."
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
      "explanation": "જ્યારે કર્તા 'and not' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The boy') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'One or two' નો ઉપયોગ થાય, ત્યારે કર્તા બહુવચન ગણાય છે અને તેની સાથે બહુવચન ક્રિયાપદ 'are' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'as well as' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The captain') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "'The sum and substance' (સારાંશ) એક જ વિચાર રજૂ કરે છે, તેથી તે એકવચન ગણાય છે અને 'was' વપરાય છે."
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
      "explanation": "'Money' એ ગણી ન શકાય તેવું નામ (uncountable) છે. 'None of' પછી uncountable noun આવે તો ક્રિયાપદ એકવચન હોય છે. તેથી 'has' આવે છે."
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
      "explanation": "આ વાક્યમાં કર્તા 'What we need most' નથી, પરંતુ 'good leaders' છે. વાક્યનું બંધારણ ઊલટું છે (Inverted). તેથી બહુવચન કર્તા 'good leaders' મુજબ 'are' આવે છે."
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
      "explanation": "જ્યારે 'means' નો અર્થ 'આવક' કે 'સંસાધનો' થાય, ત્યારે તે બહુવચન ગણાય છે. તેથી 'are' આવે છે."
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
      "explanation": "જ્યારે 'committee' (સમિતિ) એક જૂથ તરીકે કાર્ય કરે છે, ત્યારે તે એકવચન ગણાય છે. 'its report' પણ આ દર્શાવે છે. તેથી 'has' આવે છે."
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
      "explanation": "'Police' શબ્દ હંમેશા બહુવચન ગણાય છે. તેથી 'have' આવે છે."
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
      "explanation": "'Spectacles' (ચશ્મા) શબ્દ, જે બે સરખા ભાગોથી બનેલો હોય છે, તે બહુવચન ગણાય છે, તેથી 'are' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'along with' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The manager') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'There' વાળા વાક્યમાં ક્રિયાપદ તેના પછી આવતા નામ ('a wide gap') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે પૈસાની રકમને એક એકમ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'Neither of' પછી હંમેશા એકવચન ક્રિયાપદ આવે છે. તેથી 'was' આવે છે."
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
      "explanation": "આ વાક્યનો મુખ્ય કર્તા 'The details' છે, જે બહુવચન છે. તેથી 'are' આવે છે."
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
      "explanation": "અહીં કર્તા 'The fleet' (જહાજોનો કાફલો) છે, જે એકવચન સમૂહવાચક નામ છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'More than one' પછી હંમેશા એકવચન નામ ('employee') અને એકવચન ક્રિયાપદ ('has') આવે છે. આ એક નિયમ છે."
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
      "explanation": "'Cattle' (ઢોર) શબ્દ દેખાવમાં એકવચન લાગે છે, પરંતુ તે હંમેશા બહુવચન ગણાય છે. તેથી 'are' વપરાય છે."
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
      "explanation": "'Each of' થી શરૂ થતા વાક્યમાં કર્તા એકવચન ગણાય છે, તેથી 'was' આવે છે."
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
      "explanation": "'I wish' થી શરૂ થતા કાલ્પનિક વાક્યોમાં, 'I' સાથે 'was' ને બદલે 'were' નો ઉપયોગ થાય છે."
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
      "explanation": "જ્યારે 'Neither...nor' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('the teachers') મુજબ આવે છે, જે બહુવચન છે. તેથી 'are' વપરાય છે."
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
      "explanation": "આ એક કહેવત છે. અહીં કર્તા 'All that glitters' એક વિચાર તરીકે એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'politics' નો અર્થ 'રાજકારણ' (એક વિચાર) થાય, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'Criteria' શબ્દ 'criterion' નું બહુવચન છે. તેથી તેની સાથે બહુવચન ક્રિયાપદ 'are' આવે છે."
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
      "explanation": "'Phenomena' શબ્દ 'phenomenon' નું બહુવચન છે. તેથી તેની સાથે બહુવચન ક્રિયાપદ 'were' આવે છે."
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
      "explanation": "'Alumni' શબ્દ 'alumnus' નું બહુવચન છે, જેનો અર્થ 'ભૂતપૂર્વ વિદ્યાર્થીઓ' થાય છે. તેથી 'are' આવે છે."
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
      "explanation": "આ વાક્યનો મુખ્ય કર્તા 'The owner' છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "વાક્યનો મુખ્ય કર્તા 'Nobody' છે, જે એકવચન છે. તેથી 'was' આવે છે."
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
      "explanation": "'Bacteria' શબ્દ 'bacterium' નું બહુવચન છે. તેથી તેની સાથે બહુવચન ક્રિયાપદ 'are' આવે છે."
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
      "explanation": "'Every one of' થી શરૂ થતા વાક્યમાં કર્તા એકવચન ગણાય છે, તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'and' થી જોડાયેલા બે શબ્દો એક જ વાનગી કે વિચારનો ઉલ્લેખ કરે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "'Advice' એ ગણી ન શકાય તેવું નામ (uncountable) છે. 'A lot of' પછી uncountable noun આવે તો ક્રિયાપદ એકવચન હોય છે. તેથી 'was' આવે છે."
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
      "explanation": "'Media' શબ્દ 'medium' નું બહુવચન છે, પરંતુ આધુનિક અંગ્રેજીમાં તેને ઘણીવાર એકવચન સમૂહવાચક નામ તરીકે પણ વાપરવામાં આવે છે. તેથી 'has' સ્વીકાર્ય છે, જોકે 'have' પણ ખોટું નથી."
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
      "explanation": "'The United Arab Emirates' એ એક દેશનું નામ છે, તેથી તે એકવચન ગણાય છે અને તેની સાથે 'is' વપરાય છે."
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
      "explanation": "'Scissors' (કાતર) શબ્દ હંમેશા બહુવચન ગણાય છે, તેથી 'are' આવે છે."
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
      "explanation": "જ્યારે 'Either...or' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('the coach') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "ઔપચારિક અંગ્રેજીમાં 'None of' પછી એકવચન ક્રિયાપદ ('has') નો ઉપયોગ થાય છે, જોકે બોલચાલની ભાષામાં 'have' પણ સ્વીકાર્ય છે."
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
      "explanation": "જ્યારે 'staff' (કર્મચારીગણ) નો ઉલ્લેખ એક જૂથ તરીકે થાય, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' આવે છે. જો સભ્યોનો અલગ-અલગ ઉલ્લેખ હોય તો 'are' આવે."
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
      "explanation": "'Physics' જેવા વિષયોના નામ એકવચન ગણાય છે, તેથી 'is' વપરાય છે."
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
      "explanation": "ઔપચારિક રીતે, 'data' શબ્દ 'datum' નું બહુવચન છે. તેથી તેની સાથે 'are' આવે છે. જોકે, આધુનિક ઉપયોગમાં 'is' પણ સામાન્ય છે."
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
      "explanation": "જ્યારે કર્તા 'along with' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('John') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'team' નો ઉલ્લેખ એક જૂથ તરીકે થાય, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "'Either of' પછી હંમેશા એકવચન ક્રિયાપદ આવે છે. તેથી 'is' વપરાય છે."
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
      "explanation": "અહીં 'wages' નો અર્થ 'ફળ' અથવા 'પરિણામ' (rewards) થાય છે, જે બહુવચન છે. તેથી 'are' આવે છે."
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
      "explanation": "આ વાક્યનો મુખ્ય કર્તા 'The man' છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે વિશેષણ ('blind') ની આગળ 'the' લાગે, ત્યારે તે આખા વર્ગ (અંધ લોકો) નો ઉલ્લેખ કરે છે અને બહુવચન ગણાય છે. તેથી 'need' આવે છે."
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
      "explanation": "'News' શબ્દ હંમેશા એકવચન ગણાય છે, તેથી તેની સાથે 'was' વપરાય છે."
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
      "explanation": "'People' શબ્દ બહુવચન છે, તેથી તેની સાથે 'are' વપરાય છે."
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
      "explanation": "જ્યારે 'mathematics' નો અર્થ 'ગણતરી કરવાની ક્ષમતા' થાય, ત્યારે તે બહુવચન ગણાય છે. જો તે વિષયનું નામ હોત તો 'is' આવત."
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
      "explanation": "જ્યારે જથ્થો, વજન, કે અંતરને એક એકમ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે કર્તા 'with' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The mother') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે વાક્યનું બંધારણ 'More [plural noun] than one' હોય, ત્યારે ક્રિયાપદ બહુવચન હોય છે. તેથી 'are' આવે છે. આ 'More than one [singular noun]' થી વિપરીત છે."
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
      "explanation": "જ્યારે કર્તા 'as well as' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The student') મુજબ આવે છે, જે એકવચન છે. તેથી 'has' આવે છે."
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
      "explanation": "'None of' પછી બહુવચન નામ ('poems') આવે તો, આધુનિક અંગ્રેજીમાં બહુવચન ક્રિયાપદ ('are') વધુ પ્રચલિત અને સ્વીકાર્ય છે."
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
      "explanation": "'Tongs' (ચીપિયો) જેવા સાધનો, જે બે ભાગોથી બનેલા હોય છે, તે બહુવચન ગણાય છે. તેથી 'are' આવે છે."
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
      "explanation": "અહીં કર્તા 'The oasis' છે, જે 'oases' (બહુવચન) નું એકવચન રૂપ છે. તેથી 'is' વપરાય છે."
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
      "explanation": "'Hypotheses' શબ્દ 'hypothesis' નું બહુવચન છે. તેથી તેની સાથે બહુવચન ક્રિયાપદ 'need' આવે છે."
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
      "explanation": "Modal verbs (જેમ કે should, can, will) કર્તાના વચન સાથે બદલાતા નથી. તેથી 'should' જ આવે છે."
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
      "explanation": "'Luggage' એ ગણી ન શકાય તેવું નામ (uncountable noun) છે અને તે હંમેશા એકવચન ગણાય છે. તેથી 'has' આવે છે."
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
      "explanation": "જ્યારે Gerund phrase ('Walking five miles every day') વાક્યનો કર્તા હોય, ત્યારે તે એકવચન ગણાય છે. તેથી ક્રિયાપદને 's' લાગે છે."
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
      "explanation": "જ્યારે 'Either...or' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('their father') મુજબ આવે છે, જે એકવચન છે. તેથી 'has' આવે છે."
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
      "explanation": "'Memoranda' શબ્દ 'memorandum' નું બહુવચન છે. તેથી તેની સાથે બહુવચન ક્રિયાપદ 'were' આવે છે."
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
      "explanation": "અહીં મુખ્ય કર્તા 'The furniture' છે, જે ગણી ન શકાય તેવું (uncountable) અને એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે 'audience' (પ્રેક્ષકો) ના સભ્યોનો વ્યક્તિગત રીતે ઉલ્લેખ થતો હોય (અહીં દરેક વ્યક્તિ તાળી પાડી રહી છે), ત્યારે તે બહુવચન ગણાય છે. તેથી 'are' આવે છે."
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
      "explanation": "અહીં કર્તા 'What he does in his free time' એક આખું વાક્યાંશ (clause) છે, જે એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે વાક્યની શરૂઆત 'The number of' થી થાય, ત્યારે ક્રિયાપદ હંમેશા એકવચન ('is') હોય છે."
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
      "explanation": "જ્યારે વાક્યની શરૂઆત 'A number of' થી થાય, ત્યારે તેનો અર્થ 'ઘણી' થાય છે અને ક્રિયાપદ બહુવચન ('have') હોય છે."
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
      "explanation": "'Earnings' (કમાણી) શબ્દ સામાન્ય રીતે બહુવચન ગણાય છે. તેથી 'have' વપરાય છે."
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
      "explanation": "જ્યારે 'Not only...but also' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('my friends') મુજબ આવે છે, જે બહુવચન છે. તેથી 'are' આવે છે."
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
      "explanation": "આ વાક્યનો મુખ્ય કર્તા 'The series' છે, જે એકવચન છે. તેથી 'is' વપરાય છે."
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
      "explanation": "અહીં 'writer' અને 'poet' એક જ વ્યક્તિ છે કારણ કે 'the' ફક્ત પ્રથમ પદ પહેલાં છે. તેથી કર્તા એકવચન છે અને 'is' આવે છે."
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
      "explanation": "ઔપચારિક અંગ્રેજીમાં 'None of' પછી એકવચન ક્રિયાપદ ('is') નો ઉપયોગ થાય છે. જોકે આધુનિક અંગ્રેજીમાં 'are' પણ સ્વીકાર્ય છે, પણ 'is' વધુ યોગ્ય છે."
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
      "explanation": "'Athletics' જ્યારે એક ઇવેન્ટ કે રમતગમતનું નામ હોય, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' આવે છે."
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
      "explanation": "'Trousers' (પેન્ટ) શબ્દ હંમેશા બહુવચન ગણાય છે કારણ કે તે બે ભાગોથી બનેલું છે. તેથી 'are' વપરાય છે."
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
      "explanation": "'Contents' (અંદરની વસ્તુઓ) શબ્દ હંમેશા બહુવચન ગણાય છે. તેથી 'are' આવે છે."
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
      "explanation": "જ્યારે 'Each and every' નો ઉપયોગ થાય, ત્યારે કર્તા એકવચન ગણાય છે. તેથી 'has' આવે છે."
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
      "explanation": "'Curricula' શબ્દ 'curriculum' નું બહુવચન છે. તેથી તેની સાથે બહુવચન ક્રિયાપદ 'are' આવે છે."
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
      "explanation": "'Whereabouts' (ઠેકાણું) શબ્દ, ભલે તે એકવચન જેવો લાગે, સામાન્ય રીતે બહુવચન ક્રિયાપદ સાથે વપરાય છે. તેથી 'are' આવે છે."
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
      "explanation": "'Many a' પછી હંમેશા એકવચન નામ ('politician') અને એકવચન ક્રિયાપદ ('has') આવે છે. આ એક સ્થાપિત નિયમ છે."
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
      "explanation": "'Headquarters' શબ્દ એકવચન અને બહુવચન બંનેમાં સરખો રહે છે. અહીં એક જ મુખ્ય મથકનો ઉલ્લેખ છે, તેથી 'is' વપરાય છે."
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
      "explanation": "જ્યારે કર્તા 'but not' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The student') મુજબ આવે છે, જે એકવચન છે. તેથી 'was' આવે છે."
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
      "explanation": "જ્યારે 'army' (સૈન્ય) ને એક એકમ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન છે. તેથી 'has' આવે છે."
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
      "explanation": "જ્યારે 'Either...or' થી બે કર્તા જોડાય, ત્યારે ક્રિયાપદ તેની નજીકના કર્તા ('your coat') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'politics' નો અર્થ 'રાજકીય મંતવ્યો' થાય, ત્યારે તે બહુવચન ગણાય છે. તેથી 'are' આવે છે."
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
      "explanation": "'Species' શબ્દ એકવચન અને બહુવચન બંનેમાં સરખો રહે છે. અહીં 'The species' (આ પ્રજાતિ) એકવચન તરીકે વપરાયો છે, તેથી 'is' આવે છે."
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
      "explanation": "અહીં 'The rich' અને 'the poor' બે અલગ-અલગ વર્ગોનો ઉલ્લેખ કરે છે, તેથી કર્તા બહુવચન છે અને 'are' વપરાય છે."
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
      "explanation": "'A great deal of' પછી ગણી ન શકાય તેવું નામ ('effort') આવે છે, જે એકવચન ગણાય છે. તેથી 'has' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'accompanied by' થી જોડાયેલો હોય, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The police chief') મુજબ આવે છે, જે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "અહીં 'The professor' અને 'the politician' બે અલગ-અલગ વ્યક્તિઓ છે કારણ કે બંનેની આગળ 'the' આર્ટિકલ છે. તેથી કર્તા બહુવચન છે અને 'are' આવે છે."
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
      "explanation": "જ્યારે અપૂર્ણાંક ('Three-fourths of') પછી ગણી ન શકાય તેવું નામ ('land') આવે, ત્યારે ક્રિયાપદ એકવચન હોય છે. તેથી 'has' આવે છે."
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
      "explanation": "'Either of' પછી ભલે બહુવચન સર્વનામ ('you') હોય, ક્રિયાપદ હંમેશા એકવચન હોય છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે કર્તા 'not' દ્વારા બીજા નામથી અલગ પડે, ત્યારે ક્રિયાપદ પ્રથમ કર્તા ('The captain') મુજબ આવે છે, જે એકવચન છે. તેથી 'has' આવે છે."
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
      "explanation": "જ્યારે 'crew' (જહાજના કર્મચારીઓ) ને એક જૂથ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'government' ના સભ્યો વચ્ચે ચર્ચા થતી હોય અને તેઓ અલગ-અલગ વ્યક્તિઓ તરીકે વર્તતા હોય ('their new policy' પરથી ખ્યાલ આવે), ત્યારે તે બહુવચન ગણાય છે. તેથી 'are' આવે છે."
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
      "explanation": "જ્યારે 'the only one of' નો ઉપયોગ થાય, ત્યારે 'who' પછીનું ક્રિયાપદ એકવચન હોય છે કારણ કે તે 'the only one' નો ઉલ્લેખ કરે છે. તેથી 'is' આવે છે."
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
      "explanation": "જ્યારે 'one of the' પછી relative pronoun (that, who) આવે, ત્યારે ક્રિયાપદ તે pronoun ના antecedent ('books') મુજબ બહુવચન હોય છે. તેથી 'have' આવે છે."
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
      "explanation": "અહીં 'The dead' નો અર્થ 'મૃત લોકો' થાય છે, જે બહુવચન છે. તેથી ક્રિયાપદનું મૂળ રૂપ 'tell' વપરાય છે."
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
      "explanation": "અહીં કર્તા 'My pair' છે, જે એકવચન છે. જો ફક્ત 'My jeans' હોત તો બહુવચન ગણાત. તેથી 'has' આવે છે."
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
      "explanation": "'Remains' (અવશેષો) શબ્દ હંમેશા બહુવચન ગણાય છે. તેથી 'were' વપરાય છે."
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
      "explanation": "જ્યારે સમયગાળાને ('Two years') એક એકમ તરીકે ગણવામાં આવે, ત્યારે તે એકવચન ગણાય છે. તેથી 'is' વપરાય છે."
    }
  ]
};
