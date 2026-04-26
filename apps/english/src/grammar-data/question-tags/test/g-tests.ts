import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "She is a teacher, __________?",
      "options": [
        "is she",
        "isn't she",
        "was she",
        "wasn't she"
      ],
      "answer": "isn't she",
      "explanation": "વાક્ય હકાર છે, તેથી Question Tag નકાર આવશે. 'is' નું નકાર રૂપ 'isn't' થાય છે."
    },
    {
      "question": "They are not coming, __________?",
      "options": [
        "are they",
        "aren't they",
        "do they",
        "don't they"
      ],
      "answer": "are they",
      "explanation": "વાક્ય નકાર છે, તેથી Question Tag હકાર આવશે. 'are not' નું હકાર રૂપ 'are' થાય છે."
    },
    {
      "question": "He plays cricket, __________?",
      "options": [
        "do he",
        "does he",
        "doesn't he",
        "don't he"
      ],
      "answer": "doesn't he",
      "explanation": "વાક્ય સાદા વર્તમાનકાળમાં છે અને ક્રિયાપદ 'plays' છે, તેથી સહાયકારક ક્રિયાપદ 'does' વપરાશે. વાક્ય હકાર હોવાથી Tag નકાર 'doesn't he' આવશે."
    },
    {
      "question": "You don't like coffee, __________?",
      "options": [
        "do you",
        "don't you",
        "are you",
        "aren't you"
      ],
      "answer": "do you",
      "explanation": "વાક્ય નકાર છે અને સહાયકારક ક્રિયાપદ 'do' છે, તેથી Question Tag હકાર 'do you' આવશે."
    },
    {
      "question": "It was raining, __________?",
      "options": [
        "was it",
        "wasn't it",
        "is it",
        "isn't it"
      ],
      "answer": "wasn't it",
      "explanation": "વાક્ય હકાર છે અને ભૂતકાળમાં છે, તેથી Question Tag નકાર 'wasn't it' આવશે."
    },
    {
      "question": "We were not late, __________?",
      "options": [
        "were we",
        "weren't we",
        "are we",
        "aren't we"
      ],
      "answer": "were we",
      "explanation": "વાક્ય નકાર છે, તેથી Question Tag હકાર 'were we' આવશે."
    },
    {
      "question": "She has finished her work, __________?",
      "options": [
        "has she",
        "hasn't she",
        "does she",
        "doesn't she"
      ],
      "answer": "hasn't she",
      "explanation": "વાક્ય હકાર છે અને સહાયકારક ક્રિયાપદ 'has' છે, તેથી Question Tag નકાર 'hasn't she' આવશે."
    },
    {
      "question": "They haven't seen the movie, __________?",
      "options": [
        "have they",
        "haven't they",
        "do they",
        "did they"
      ],
      "answer": "have they",
      "explanation": "વાક્ય નકાર છે ('haven't'), તેથી Question Tag હકાર 'have they' આવશે."
    },
    {
      "question": "He went to the market, __________?",
      "options": [
        "did he",
        "didn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "didn't he",
      "explanation": "વાક્ય સાદા ભૂતકાળમાં છે ('went'), તેથી સહાયકારક ક્રિયાપદ 'did' વપરાશે. વાક્ય હકાર હોવાથી Tag નકાર 'didn't he' આવશે."
    },
    {
      "question": "You didn't call me, __________?",
      "options": [
        "did you",
        "didn't you",
        "do you",
        "don't you"
      ],
      "answer": "did you",
      "explanation": "વાક્ય નકાર છે ('didn't'), તેથી Question Tag હકાર 'did you' આવશે."
    }
  ],
  "test-2": [
    {
      "question": "It's a beautiful day, __________?",
      "options": [
        "is it",
        "isn't it",
        "was it",
        "wasn't it"
      ],
      "answer": "isn't it",
      "explanation": "વાક્ય હકાર છે ('It is'), તેથી Question Tag નકાર 'isn't it' આવશે."
    },
    {
      "question": "They aren't ready yet, __________?",
      "options": [
        "are they",
        "aren't they",
        "were they",
        "weren't they"
      ],
      "answer": "are they",
      "explanation": "વાક્ય નકાર છે ('are not'), તેથી Question Tag હકાર 'are they' આવશે."
    },
    {
      "question": "She speaks French, __________?",
      "options": [
        "does she",
        "doesn't she",
        "is she",
        "isn't she"
      ],
      "answer": "doesn't she",
      "explanation": "સાદા વર્તમાનકાળનું હકાર વાક્ય છે, તેથી સહાયકારક ક્રિયાપદ 'does' સાથે નકાર Tag 'doesn't she' બનશે."
    },
    {
      "question": "He doesn't know the answer, __________?",
      "options": [
        "does he",
        "doesn't he",
        "is he",
        "isn't he"
      ],
      "answer": "does he",
      "explanation": "વાક્ય નકાર છે ('doesn't'), તેથી Question Tag હકાર 'does he' આવશે."
    },
    {
      "question": "The train was on time, __________?",
      "options": [
        "was it",
        "wasn't it",
        "is it",
        "isn't it"
      ],
      "answer": "wasn't it",
      "explanation": "વાક્ય હકાર છે ('was'), તેથી Question Tag નકાર 'wasn't it' આવશે."
    },
    {
      "question": "You weren't listening, __________?",
      "options": [
        "were you",
        "weren't you",
        "are you",
        "did you"
      ],
      "answer": "were you",
      "explanation": "વાક્ય નકાર છે ('were not'), તેથી Question Tag હકાર 'were you' આવશે."
    },
    {
      "question": "We have met before, __________?",
      "options": [
        "have we",
        "haven't we",
        "did we",
        "didn't we"
      ],
      "answer": "haven't we",
      "explanation": "વાક્ય હકાર છે અને સહાયકારક ક્રિયાપદ 'have' છે, તેથી Tag નકાર 'haven't we' બનશે."
    },
    {
      "question": "He has never been to London, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "did he"
      ],
      "answer": "has he",
      "explanation": "'never' શબ્દ વાક્યને નકાર બનાવે છે, તેથી Question Tag હકાર 'has he' આવશે."
    },
    {
      "question": "They enjoyed the party, __________?",
      "options": [
        "did they",
        "didn't they",
        "do they",
        "don't they"
      ],
      "answer": "didn't they",
      "explanation": "વાક્ય સાદા ભૂતકાળમાં છે ('enjoyed'), તેથી સહાયકારક ક્રિયાપદ 'did' સાથે નકાર Tag 'didn't they' બનશે."
    },
    {
      "question": "She didn't recognize me, __________?",
      "options": [
        "did she",
        "didn't she",
        "does she",
        "has she"
      ],
      "answer": "did she",
      "explanation": "વાક્ય નકાર છે ('didn't'), તેથી Question Tag હકાર 'did she' આવશે."
    }
  ],
  "test-3": [
    {
      "question": "You are a student, __________?",
      "options": [
        "are you",
        "aren't you",
        "do you",
        "don't you"
      ],
      "answer": "aren't you",
      "explanation": "વાક્ય હકાર છે, તેથી Question Tag નકાર આવશે. 'are' નું નકાર રૂપ 'aren't' થાય છે."
    },
    {
      "question": "It isn't very warm today, __________?",
      "options": [
        "is it",
        "isn't it",
        "does it",
        "doesn't it"
      ],
      "answer": "is it",
      "explanation": "વાક્ય નકાર છે ('isn't'), તેથી Question Tag હકાર 'is it' આવશે."
    },
    {
      "question": "They live in this city, __________?",
      "options": [
        "do they",
        "don't they",
        "are they",
        "aren't they"
      ],
      "answer": "don't they",
      "explanation": "વાક્ય સાદા વર્તમાનકાળમાં છે અને ક્રિયાપદ 'live' છે, તેથી સહાયકારક ક્રિયાપદ 'do' વપરાશે. વાક્ય હકાર હોવાથી Tag નકાર 'don't they' આવશે."
    },
    {
      "question": "She doesn't eat meat, __________?",
      "options": [
        "does she",
        "doesn't she",
        "is she",
        "has she"
      ],
      "answer": "does she",
      "explanation": "વાક્ય નકાર છે ('doesn't'), તેથી Question Tag હકાર 'does she' આવશે."
    },
    {
      "question": "He was happy, __________?",
      "options": [
        "was he",
        "wasn't he",
        "is he",
        "did he"
      ],
      "answer": "wasn't he",
      "explanation": "વાક્ય હકાર છે ('was'), તેથી Question Tag નકાર 'wasn't he' આવશે."
    },
    {
      "question": "The children weren't noisy, __________?",
      "options": [
        "were they",
        "weren't they",
        "are they",
        "did they"
      ],
      "answer": "were they",
      "explanation": "વાક્ય નકાર છે ('weren't'), તેથી Question Tag હકાર 'were they' આવશે. 'The children' માટે 'they' સર્વનામ વપરાય છે."
    },
    {
      "question": "You have done this before, __________?",
      "options": [
        "have you",
        "haven't you",
        "do you",
        "did you"
      ],
      "answer": "haven't you",
      "explanation": "વાક્ય હકાર છે ('have'), તેથી Question Tag નકાર 'haven't you' આવશે."
    },
    {
      "question": "He hasn't arrived yet, __________?",
      "options": [
        "has he",
        "hasn't he",
        "is he",
        "did he"
      ],
      "answer": "has he",
      "explanation": "વાક્ય નકાર છે ('hasn't'), તેથી Question Tag હકાર 'has he' આવશે."
    },
    {
      "question": "She bought a new car, __________?",
      "options": [
        "did she",
        "didn't she",
        "does she",
        "has she"
      ],
      "answer": "didn't she",
      "explanation": "વાક્ય સાદા ભૂતકાળમાં છે ('bought'), તેથી સહાયકારક ક્રિયાપદ 'did' સાથે નકાર Tag 'didn't she' બનશે."
    },
    {
      "question": "They didn't finish the game, __________?",
      "options": [
        "did they",
        "didn't they",
        "do they",
        "have they"
      ],
      "answer": "did they",
      "explanation": "વાક્ય નકાર છે ('didn't'), તેથી Question Tag હકાર 'did they' આવશે."
    }
  ],
  "test-4": [
    {
      "question": "We are friends, __________?",
      "options": [
        "are we",
        "aren't we",
        "do we",
        "don't we"
      ],
      "answer": "aren't we",
      "explanation": "હકાર વાક્ય માટે નકાર Tag વપરાય છે. 'are' નું નકાર 'aren't' થાય છે."
    },
    {
      "question": "This isn't your book, __________?",
      "options": [
        "is this",
        "isn't this",
        "is it",
        "isn't it"
      ],
      "answer": "is it",
      "explanation": "નકાર વાક્ય માટે હકાર Tag વપરાય છે. 'This' માટે 'it' સર્વનામ વપરાય છે."
    },
    {
      "question": "He reads a lot of books, __________?",
      "options": [
        "does he",
        "doesn't he",
        "is he",
        "reads he"
      ],
      "answer": "doesn't he",
      "explanation": "સાદા વર્તમાનકાળના હકાર વાક્યમાં 'he' સાથે 'does' આવે, તેથી Tag 'doesn't he' બનશે."
    },
    {
      "question": "You don't play the guitar, __________?",
      "options": [
        "do you",
        "don't you",
        "are you",
        "can you"
      ],
      "answer": "do you",
      "explanation": "નકાર વાક્ય ('don't') માટે હકાર Tag 'do you' વપરાય છે."
    },
    {
      "question": "The movie was interesting, __________?",
      "options": [
        "was it",
        "wasn't it",
        "is it",
        "did it"
      ],
      "answer": "wasn't it",
      "explanation": "હકાર વાક્ય ('was') માટે નકાર Tag 'wasn't it' વપરાય છે. 'The movie' માટે 'it' સર્વનામ વપરાય છે."
    },
    {
      "question": "They weren't at home, __________?",
      "options": [
        "were they",
        "weren't they",
        "did they",
        "had they"
      ],
      "answer": "were they",
      "explanation": "નકાર વાક્ય ('weren't') માટે હકાર Tag 'were they' વપરાય છે."
    },
    {
      "question": "She had already eaten, __________?",
      "options": [
        "had she",
        "hadn't she",
        "did she",
        "has she"
      ],
      "answer": "hadn't she",
      "explanation": "પૂર્ણ ભૂતકાળના હકાર વાક્ય ('had eaten') માટે નકાર Tag 'hadn't she' વપરાય છે."
    },
    {
      "question": "We hadn't thought about that, __________?",
      "options": [
        "had we",
        "hadn't we",
        "did we",
        "have we"
      ],
      "answer": "had we",
      "explanation": "નકાર વાક્ય ('hadn't') માટે હકાર Tag 'had we' વપરાય છે."
    },
    {
      "question": "The cat drank the milk, __________?",
      "options": [
        "did it",
        "didn't it",
        "does it",
        "drank it"
      ],
      "answer": "didn't it",
      "explanation": "સાદા ભૂતકાળના હકાર વાક્ય ('drank') માટે 'did' વપરાય, તેથી Tag 'didn't it' બનશે."
    },
    {
      "question": "He didn't say anything, __________?",
      "options": [
        "did he",
        "didn't he",
        "said he",
        "does he"
      ],
      "answer": "did he",
      "explanation": "નકાર વાક્ય ('didn't') માટે હકાર Tag 'did he' વપરાય છે."
    }
  ],
  "test-5": [
    {
      "question": "He's from India, __________?",
      "options": [
        "is he",
        "isn't he",
        "does he",
        "has he"
      ],
      "answer": "isn't he",
      "explanation": "અહીં 'He's' નો અર્થ 'He is' છે. વાક્ય હકાર હોવાથી Tag નકાર 'isn't he' આવશે."
    },
    {
      "question": "They're not happy, __________?",
      "options": [
        "are they",
        "aren't they",
        "do they",
        "are not they"
      ],
      "answer": "are they",
      "explanation": "અહીં 'They're not' નો અર્થ 'They are not' છે. વાક્ય નકાર હોવાથી Tag હકાર 'are they' આવશે."
    },
    {
      "question": "She runs every morning, __________?",
      "options": [
        "does she",
        "doesn't she",
        "is she",
        "isn't she"
      ],
      "answer": "doesn't she",
      "explanation": "સાદા વર્તમાનકાળના હકાર વાક્ય ('runs') માટે 'does' નો ઉપયોગ થાય, તેથી Tag 'doesn't she' આવશે."
    },
    {
      "question": "We don't need any help, __________?",
      "options": [
        "do we",
        "don't we",
        "are we",
        "need we"
      ],
      "answer": "do we",
      "explanation": "નકાર વાક્ય ('don't') માટે હકાર Tag 'do we' વપરાશે."
    },
    {
      "question": "That was a good idea, __________?",
      "options": [
        "was it",
        "wasn't it",
        "is it",
        "did it"
      ],
      "answer": "wasn't it",
      "explanation": "હકાર વાક્ય ('was') માટે નકાર Tag 'wasn't it' આવશે. 'That' માટે 'it' સર્વનામ વપરાય છે."
    },
    {
      "question": "The keys weren't on the table, __________?",
      "options": [
        "were they",
        "weren't they",
        "are they",
        "did they"
      ],
      "answer": "were they",
      "explanation": "નકાર વાક્ય ('weren't') માટે હકાર Tag 'were they' વપરાશે. 'The keys' (બહુવચન) માટે 'they' વપરાય છે."
    },
    {
      "question": "You have got a new phone, __________?",
      "options": [
        "have you",
        "haven't you",
        "do you",
        "don't you"
      ],
      "answer": "haven't you",
      "explanation": "'have got' વાળા વાક્યમાં 'have' સહાયકારક ક્રિયાપદ છે. હકાર વાક્ય માટે નકાર Tag 'haven't you' આવશે."
    },
    {
      "question": "She has not called us, __________?",
      "options": [
        "has she",
        "hasn't she",
        "does she",
        "did she"
      ],
      "answer": "has she",
      "explanation": "નકાર વાક્ય ('has not') માટે હકાર Tag 'has she' વપરાશે."
    },
    {
      "question": "He told you the secret, __________?",
      "options": [
        "did he",
        "didn't he",
        "does he",
        "told he"
      ],
      "answer": "didn't he",
      "explanation": "સાદા ભૂતકાળનું હકાર વાક્ય ('told') હોવાથી, 'did' સાથે નકાર Tag 'didn't he' બનશે."
    },
    {
      "question": "You didn't see that, __________?",
      "options": [
        "did you",
        "didn't you",
        "see you",
        "have you"
      ],
      "answer": "did you",
      "explanation": "નકાર વાક્ય ('didn't') માટે હકાર Tag 'did you' વપરાશે."
    }
  ],
  "test-6": [
    {
      "question": "He can swim, __________?",
      "options": [
        "can he",
        "can't he",
        "does he",
        "is he"
      ],
      "answer": "can't he",
      "explanation": "Modal verb 'can' વાળા હકાર વાક્ય માટે નકાર Tag 'can't he' વપરાય છે."
    },
    {
      "question": "They can't speak Spanish, __________?",
      "options": [
        "can they",
        "can't they",
        "do they",
        "are they"
      ],
      "answer": "can they",
      "explanation": "Modal verb 'can't' વાળા નકાર વાક્ય માટે હકાર Tag 'can they' વપરાય છે."
    },
    {
      "question": "You will help me, __________?",
      "options": [
        "will you",
        "won't you",
        "do you",
        "are you"
      ],
      "answer": "won't you",
      "explanation": "'will' નું નકાર રૂપ 'will not' અથવા ટૂંકમાં 'won't' થાય છે. હકાર વાક્ય માટે નકાર Tag વપરાય છે."
    },
    {
      "question": "She won't be late, __________?",
      "options": [
        "will she",
        "won't she",
        "is she",
        "does she"
      ],
      "answer": "will she",
      "explanation": "'won't' (will not) વાળા નકાર વાક્ય માટે હકાર Tag 'will she' વપરાય છે."
    },
    {
      "question": "We should go now, __________?",
      "options": [
        "should we",
        "shouldn't we",
        "do we",
        "are we"
      ],
      "answer": "shouldn't we",
      "explanation": "Modal verb 'should' વાળા હકાર વાક્ય માટે નકાર Tag 'shouldn't we' વપરાય છે."
    },
    {
      "question": "He shouldn't say that, __________?",
      "options": [
        "should he",
        "shouldn't he",
        "does he",
        "did he"
      ],
      "answer": "should he",
      "explanation": "Modal verb 'shouldn't' વાળા નકાર વાક્ય માટે હકાર Tag 'should he' વપરાય છે."
    },
    {
      "question": "It could be expensive, __________?",
      "options": [
        "could it",
        "couldn't it",
        "is it",
        "can it"
      ],
      "answer": "couldn't it",
      "explanation": "Modal verb 'could' વાળા હકાર વાક્ય માટે નકાર Tag 'couldn't it' વપરાય છે."
    },
    {
      "question": "You couldn't do it, __________?",
      "options": [
        "could you",
        "couldn't you",
        "did you",
        "can you"
      ],
      "answer": "could you",
      "explanation": "Modal verb 'couldn't' વાળા નકાર વાક્ય માટે હકાર Tag 'could you' વપરાય છે."
    },
    {
      "question": "They must study hard, __________?",
      "options": [
        "must they",
        "mustn't they",
        "do they",
        "should they"
      ],
      "answer": "mustn't they",
      "explanation": "Modal verb 'must' વાળા હકાર વાક્ય માટે નકાર Tag 'mustn't they' વપરાય છે."
    },
    {
      "question": "We must not make noise, __________?",
      "options": [
        "must we",
        "mustn't we",
        "do we",
        "should we"
      ],
      "answer": "must we",
      "explanation": "Modal verb 'must not' વાળા નકાર વાક્ય માટે હકાર Tag 'must we' વપરાય છે."
    }
  ],
  "test-7": [
    {
      "question": "You're tired, __________?",
      "options": [
        "are you",
        "aren't you",
        "do you",
        "don't you"
      ],
      "answer": "aren't you",
      "explanation": "અહીં 'You're' એ 'You are' નું ટૂંકું રૂપ છે. વાક્ય હકાર હોવાથી Tag નકાર 'aren't you' આવશે."
    },
    {
      "question": "It wasn't my fault, __________?",
      "options": [
        "was it",
        "wasn't it",
        "is it",
        "isn't it"
      ],
      "answer": "was it",
      "explanation": "વાક્ય નકાર ('wasn't') હોવાથી Tag હકાર 'was it' આવશે."
    },
    {
      "question": "They eat out a lot, __________?",
      "options": [
        "do they",
        "don't they",
        "are they",
        "eat they"
      ],
      "answer": "don't they",
      "explanation": "સાદા વર્તમાનકાળના હકાર વાક્ય ('eat') માટે 'do' વપરાય, તેથી Tag 'don't they' આવશે."
    },
    {
      "question": "I am right, __________?",
      "options": [
        "am I",
        "am I not",
        "aren't I",
        "don't I"
      ],
      "answer": "aren't I",
      "explanation": "'I am' વાળા હકાર વાક્ય માટે Question Tag 'aren't I' વપરાય છે. 'amn't I' અસામાન્ય છે."
    },
    {
      "question": "I'm not wrong, __________?",
      "options": [
        "am I",
        "am I not",
        "are I",
        "aren't I"
      ],
      "answer": "am I",
      "explanation": "'I am not' વાળા નકાર વાક્ય માટે Question Tag 'am I' વપરાય છે."
    },
    {
      "question": "She has a big house, __________?",
      "options": [
        "has she",
        "hasn't she",
        "does she",
        "doesn't she"
      ],
      "answer": "doesn't she",
      "explanation": "જ્યારે 'have/has' મુખ્ય ક્રિયાપદ (માલિકી દર્શાવવા) તરીકે વપરાય, ત્યારે Tag 'do/does' સાથે બને છે. અહીં વાક્ય હકાર હોવાથી 'doesn't she' આવશે."
    },
    {
      "question": "They had a good time, __________?",
      "options": [
        "had they",
        "hadn't they",
        "did they",
        "didn't they"
      ],
      "answer": "didn't they",
      "explanation": "જ્યારે 'had' મુખ્ય ક્રિયાપદ (અનુભવ દર્શાવવા) તરીકે વપરાય, ત્યારે Tag 'did' સાથે બને છે. અહીં વાક્ય હકાર હોવાથી 'didn't they' આવશે."
    },
    {
      "question": "Let's go for a walk, __________?",
      "options": [
        "shall we",
        "should we",
        "will we",
        "do we"
      ],
      "answer": "shall we",
      "explanation": "'Let's' (Let us) થી શરૂ થતા દરખાસ્ત સૂચવતા વાક્યો માટે Question Tag હંમેશા 'shall we' આવે છે."
    },
    {
      "question": "Wait a minute, __________?",
      "options": [
        "will you",
        "won't you",
        "can you",
        "do you"
      ],
      "answer": "will you",
      "explanation": "આજ્ઞાર્થ વાક્ય (Imperative sentence) માટે 'will you' અથવા 'won't you' Question Tag તરીકે વપરાય છે. 'will you' વધુ સામાન્ય છે."
    },
    {
      "question": "Don't forget, __________?",
      "options": [
        "do you",
        "don't you",
        "will you",
        "won't you"
      ],
      "answer": "will you",
      "explanation": "નકાર આજ્ઞાર્થ વાક્ય માટે Question Tag હંમેશા હકાર 'will you' આવે છે."
    }
  ],
  "test-8": [
    {
      "question": "He will be here soon, __________?",
      "options": [
        "will he",
        "won't he",
        "is he",
        "isn't he"
      ],
      "answer": "won't he",
      "explanation": "હકાર વાક્યમાં 'will' માટે નકાર Tag 'won't he' આવે છે."
    },
    {
      "question": "She won't mind, __________?",
      "options": [
        "will she",
        "won't she",
        "does she",
        "is she"
      ],
      "answer": "will she",
      "explanation": "નકાર વાક્યમાં 'won't' (will not) માટે હકાર Tag 'will she' આવે છે."
    },
    {
      "question": "You would like a cup of tea, __________?",
      "options": [
        "would you",
        "wouldn't you",
        "will you",
        "do you"
      ],
      "answer": "wouldn't you",
      "explanation": "Modal 'would' વાળા હકાર વાક્ય માટે નકાર Tag 'wouldn't you' આવે છે."
    },
    {
      "question": "They wouldn't agree, __________?",
      "options": [
        "would they",
        "wouldn't they",
        "will they",
        "did they"
      ],
      "answer": "would they",
      "explanation": "Modal 'wouldn't' વાળા નકાર વાક્ય માટે હકાર Tag 'would they' આવે છે."
    },
    {
      "question": "This is your pen, __________?",
      "options": [
        "is it",
        "isn't it",
        "is this",
        "isn't this"
      ],
      "answer": "isn't it",
      "explanation": "વાક્ય હકાર છે. 'This' માટે સર્વનામ 'it' વપરાય છે. તેથી Tag 'isn't it' આવશે."
    },
    {
      "question": "Those are not your shoes, __________?",
      "options": [
        "are they",
        "aren't they",
        "are those",
        "aren't those"
      ],
      "answer": "are they",
      "explanation": "વાક્ય નકાર છે. 'Those' માટે સર્વનામ 'they' વપરાય છે. તેથી Tag 'are they' આવશે."
    },
    {
      "question": "There is a problem, __________?",
      "options": [
        "is there",
        "isn't there",
        "is it",
        "isn't it"
      ],
      "answer": "isn't there",
      "explanation": "'There is' થી શરૂ થતા હકાર વાક્ય માટે Tag 'isn't there' આવે છે. અહીં 'there' જ કર્તા તરીકે રહે છે."
    },
    {
      "question": "There aren't any apples, __________?",
      "options": [
        "are there",
        "aren't there",
        "are they",
        "aren't they"
      ],
      "answer": "are there",
      "explanation": "'There aren't' થી શરૂ થતા નકાર વાક્ય માટે Tag 'are there' આવે છે."
    },
    {
      "question": "He has to go, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "doesn't he",
      "explanation": "'has to' એ ફરજ દર્શાવે છે અને તે સાદા વર્તમાનકાળની જેમ વર્તે છે. તેથી સહાયકારક ક્રિયાપદ 'does' સાથે નકાર Tag 'doesn't he' બનશે."
    },
    {
      "question": "They had to leave early, __________?",
      "options": [
        "had they",
        "hadn't they",
        "did they",
        "didn't they"
      ],
      "answer": "didn't they",
      "explanation": "'had to' એ ભૂતકાળની ફરજ દર્શાવે છે અને તે સાદા ભૂતકાળની જેમ વર્તે છે. તેથી સહાયકારક ક્રિયાપદ 'did' સાથે નકાર Tag 'didn't they' બનશે."
    }
  ],
  "test-9": [
    {
      "question": "Someone is at the door, __________?",
      "options": [
        "is someone",
        "isn't someone",
        "are they",
        "aren't they"
      ],
      "answer": "aren't they",
      "explanation": "Someone, somebody, everyone, everybody, no one જેવા શબ્દો માટે Question Tag માં 'they' સર્વનામ વપરાય છે. 'is' સાથે 'they' માટે 'are' આવે છે, તેથી 'aren't they' સાચો જવાબ છે."
    },
    {
      "question": "Nobody called, __________?",
      "options": [
        "did they",
        "didn't they",
        "did he",
        "didn't he"
      ],
      "answer": "did they",
      "explanation": "'Nobody' શબ્દ વાક્યને નકાર બનાવે છે અને તેના માટે 'they' સર્વનામ વપરાય છે. વાક્ય સાદા ભૂતકાળમાં હોવાથી હકાર Tag 'did they' આવશે."
    },
    {
      "question": "Something is wrong, __________?",
      "options": [
        "is it",
        "isn't it",
        "is something",
        "isn't something"
      ],
      "answer": "isn't it",
      "explanation": "Something, nothing, anything, everything જેવા શબ્દો માટે Question Tag માં 'it' સર્વનામ વપરાય છે. હકાર વાક્ય માટે નકાર Tag 'isn't it' આવશે."
    },
    {
      "question": "Nothing was lost, __________?",
      "options": [
        "was it",
        "wasn't it",
        "is it",
        "did it"
      ],
      "answer": "was it",
      "explanation": "'Nothing' શબ્દ વાક્યને નકાર બનાવે છે અને તેના માટે 'it' સર્વનામ વપરાય છે. તેથી હકાર Tag 'was it' આવશે."
    },
    {
      "question": "He hardly ever comes late, __________?",
      "options": [
        "does he",
        "doesn't he",
        "is he",
        "isn't he"
      ],
      "answer": "does he",
      "explanation": "'Hardly', 'rarely', 'seldom', 'scarcely' જેવા શબ્દો વાક્યને નકાર અર્થ આપે છે, તેથી Question Tag હકાર 'does he' આવશે."
    },
    {
      "question": "She seldom smiles, __________?",
      "options": [
        "does she",
        "doesn't she",
        "is she",
        "isn't she"
      ],
      "answer": "does she",
      "explanation": "'Seldom' (ભાગ્યે જ) વાક્યને નકાર બનાવે છે, તેથી Question Tag હકાર 'does she' આવશે."
    },
    {
      "question": "You have little time, __________?",
      "options": [
        "have you",
        "haven't you",
        "do you",
        "don't you"
      ],
      "answer": "have you",
      "explanation": "'Little' અને 'few' (a વગર) નકાર અર્થ દર્શાવે છે. તેથી Question Tag હકાર 'have you' આવશે."
    },
    {
      "question": "He has a few friends, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "hasn't he",
      "explanation": "'A little' અને 'a few' હકાર અર્થ દર્શાવે છે (થોડુંક). અહીં 'has' મુખ્ય ક્રિયાપદ તરીકે ગણી શકાય, પણ બ્રિટિશ અંગ્રેજીમાં 'hasn't he' પણ સ્વીકાર્ય છે. જોકે, 'doesn't he' પણ સાચો ગણાય. અહીં 'has' ને സഹായക ગણી 'hasn't he' વધુ યોગ્ય છે."
    },
    {
      "question": "Open the door, __________?",
      "options": [
        "will you",
        "do you",
        "are you",
        "shall you"
      ],
      "answer": "will you",
      "explanation": "આજ્ઞાર્થ વાક્ય (Imperative) માટે Question Tag તરીકે 'will you' અથવા 'won't you' વપરાય છે."
    },
    {
      "question": "Let us go home now, __________?",
      "options": [
        "will you",
        "shall we",
        "do we",
        "should we"
      ],
      "answer": "will you",
      "explanation": "જ્યારે 'Let us' નો અર્થ 'allow us' (અમને પરવાનગી આપો) થાય, ત્યારે Tag 'will you' આવે છે. 'Let's' (ચાલો) માટે 'shall we' આવે છે."
    }
  ],
  "test-10": [
    {
      "question": "She'd rather stay home, __________?",
      "options": [
        "would she",
        "wouldn't she",
        "had she",
        "hadn't she"
      ],
      "answer": "wouldn't she",
      "explanation": "અહીં 'd rather' એ 'would rather' નું ટૂંકું રૂપ છે. તેથી, Question Tag 'wouldn't she' આવશે."
    },
    {
      "question": "He'd better finish it, __________?",
      "options": [
        "had he",
        "hadn't he",
        "would he",
        "did he"
      ],
      "answer": "hadn't he",
      "explanation": "અહીં 'd better' એ 'had better' નું ટૂંકું રૂપ છે. તેથી, Question Tag 'hadn't he' આવશે."
    },
    {
      "question": "This is my car, __________?",
      "options": [
        "is it",
        "isn't it",
        "is this",
        "isn't this"
      ],
      "answer": "isn't it",
      "explanation": "'This' અને 'That' માટે Question Tag માં 'it' સર્વનામ વપરાય છે. વાક્ય હકાર હોવાથી Tag નકાર આવશે."
    },
    {
      "question": "These are your books, __________?",
      "options": [
        "are they",
        "aren't they",
        "are these",
        "isn't it"
      ],
      "answer": "aren't they",
      "explanation": "'These' અને 'Those' માટે Question Tag માં 'they' સર્વનામ વપરાય છે. વાક્ય હકાર હોવાથી Tag નકાર આવશે."
    },
    {
      "question": "Everybody was present, __________?",
      "options": [
        "wasn't they",
        "weren't they",
        "wasn't he",
        "were they"
      ],
      "answer": "weren't they",
      "explanation": "'Everybody' માટે સર્વનામ 'they' વપરાય છે. 'they' સાથે 'were' આવે. વાક્ય હકાર ('was') હોવા છતાં, 'they' ને કારણે 'weren't' વપરાશે."
    },
    {
      "question": "No one complained, __________?",
      "options": [
        "did they",
        "didn't they",
        "did he",
        "do they"
      ],
      "answer": "did they",
      "explanation": "'No one' વાક્યને નકાર બનાવે છે અને તેના માટે 'they' સર્વનામ વપરાય છે. સાદા ભૂતકાળનું વાક્ય હોવાથી 'did they' આવશે."
    },
    {
      "question": "Let's have a party, __________?",
      "options": [
        "shall we",
        "will you",
        "do we",
        "don't we"
      ],
      "answer": "shall we",
      "explanation": "'Let's' થી શરૂ થતી દરખાસ્ત માટે Question Tag હંમેશા 'shall we' હોય છે."
    },
    {
      "question": "Pass me the salt, __________?",
      "options": [
        "will you",
        "can you",
        "do you",
        "shall I"
      ],
      "answer": "will you",
      "explanation": "આજ્ઞાર્થ વાક્ય (Imperative) માટે 'will you' અથવા 'can you' નો ઉપયોગ Question Tag તરીકે થાય છે."
    },
    {
      "question": "He has his lunch at 1 PM, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "doesn't he",
      "explanation": "જ્યારે 'has' મુખ્ય ક્રિયાપદ તરીકે (ખાવું/પીવું) વપરાય, ત્યારે Tag 'do/does' સાથે બને છે. અહીં હકાર વાક્ય હોવાથી 'doesn't he' આવશે."
    },
    {
      "question": "I am not bothering you, __________?",
      "options": [
        "am I",
        "aren't I",
        "do I",
        "are I"
      ],
      "answer": "am I",
      "explanation": "'I am not' વાળા નકાર વાક્ય માટે Question Tag 'am I' આવે છે."
    }
  ],
  "test-11": [
    {
      "question": "I am a bit late, __________?",
      "options": [
        "am I",
        "am I not",
        "aren't I",
        "ain't I"
      ],
      "answer": "aren't I",
      "explanation": "આ એક વિશિષ્ટ નિયમ છે. 'I am' વાળા હકાર વાક્ય માટે Question Tag તરીકે 'aren't I' નો ઉપયોગ થાય છે. 'amn't I' અંગ્રેજીમાં વપરાતું નથી."
    },
    {
      "question": "Let's go to the beach, __________?",
      "options": [
        "shall we",
        "should we",
        "will we",
        "do we"
      ],
      "answer": "shall we",
      "explanation": "'Let's' (Let us) થી શરૂ થતી દરખાસ્તો માટે Question Tag હંમેશા 'shall we' આવે છે."
    },
    {
      "question": "Don't make that noise, __________?",
      "options": [
        "do you",
        "don't you",
        "will you",
        "won't you"
      ],
      "answer": "will you",
      "explanation": "નકારાત્મક આજ્ઞાર્થ વાક્ય (Negative Imperative) માટે Question Tag હંમેશા હકાર 'will you' આવે છે."
    },
    {
      "question": "There is a park near your house, __________?",
      "options": [
        "is it",
        "isn't it",
        "is there",
        "isn't there"
      ],
      "answer": "isn't there",
      "explanation": "'There is/are' થી શરૂ થતા વાક્યોમાં Question Tag માં પણ 'there' નો ઉપયોગ થાય છે. હકાર વાક્ય માટે નકાર Tag 'isn't there' आएगा."
    },
    {
      "question": "There were no problems, __________?",
      "options": [
        "were there",
        "weren't there",
        "were they",
        "weren't they"
      ],
      "answer": "were there",
      "explanation": "'no' શબ્દને કારણે વાક્ય નકાર છે. 'There were' વાળા વાક્યમાં Tag હકાર 'were there' આવશે."
    },
    {
      "question": "Somebody has taken my pen, __________?",
      "options": [
        "hasn't he",
        "hasn't she",
        "haven't they",
        "hasn't someone"
      ],
      "answer": "haven't they",
      "explanation": "Somebody, someone, everybody માટે સર્વનામ 'they' વપરાય છે. 'they' સાથે 'have' આવે છે. વાક્ય હકાર હોવાથી નકાર Tag 'haven't they' आएगा."
    },
    {
      "question": "Nothing is impossible, __________?",
      "options": [
        "is it",
        "isn't it",
        "is nothing",
        "isn't nothing"
      ],
      "answer": "is it",
      "explanation": "'Nothing' શબ્દ વાક્યને નકાર બનાવે છે અને તેના માટે 'it' સર્વનામ વપરાય છે. તેથી, હકાર Tag 'is it' આવશે."
    },
    {
      "question": "He has a car, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "doesn't he",
      "explanation": "જ્યારે 'has' માલિકી દર્શાવતું મુખ્ય ક્રિયાપદ હોય, ત્યારે સાદા વર્તમાનકાળના નિયમ મુજબ 'does' નો ઉપયોગ થાય છે. તેથી, 'doesn't he' સાચો જવાબ છે. (બ્રિટિશ અંગ્રેજીમાં 'hasn't he' પણ વપરાય છે, પણ 'doesn't he' વધુ સામાન્ય છે)."
    },
    {
      "question": "She used to live here, __________?",
      "options": [
        "used she",
        "didn't she",
        "did she",
        "would she"
      ],
      "answer": "didn't she",
      "explanation": "'used to' વાળી રચના ભૂતકાળની આદત દર્શાવે છે, અને તેના માટે Question Tag 'didn't' સાથે બને છે."
    },
    {
      "question": "You ought to help him, __________?",
      "options": [
        "ought you",
        "oughtn't you",
        "should you",
        "shouldn't you"
      ],
      "answer": "shouldn't you",
      "explanation": "'ought to' માટે Question Tag માં 'shouldn't' અથવા 'oughtn't' નો ઉપયોગ થાય છે. 'shouldn't' વધુ પ્રચલિત છે."
    }
  ],
  "test-12": [
    {
      "question": "He'd better hurry, __________?",
      "options": [
        "had he",
        "hadn't he",
        "would he",
        "wouldn't he"
      ],
      "answer": "hadn't he",
      "explanation": "અહીં 'd better' એ 'had better' નું ટૂંકું રૂપ છે. વાક્ય હકાર હોવાથી Tag નકાર 'hadn't he' આવશે."
    },
    {
      "question": "You'd rather not go, __________?",
      "options": [
        "had you",
        "hadn't you",
        "would you",
        "wouldn't you"
      ],
      "answer": "would you",
      "explanation": "અહીં 'd rather not' એ 'would rather not' નું રૂપ છે. વાક્ય નકાર હોવાથી Tag હકાર 'would you' આવશે."
    },
    {
      "question": "He is hardly the right person for the job, __________?",
      "options": [
        "is he",
        "isn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "is he",
      "explanation": "'hardly' શબ્દ વાક્યને નકાર બનાવે છે, તેથી Question Tag હકાર 'is he' આવશે."
    },
    {
      "question": "She rarely makes a mistake, __________?",
      "options": [
        "does she",
        "doesn't she",
        "is she",
        "isn't she"
      ],
      "answer": "does she",
      "explanation": "'rarely' (ભાગ્યે જ) વાક્યને નકાર બનાવે છે. સાદા વર્તમાનકાળનું વાક્ય હોવાથી Tag હકાર 'does she' આવશે."
    },
    {
      "question": "Few people knew the answer, __________?",
      "options": [
        "did they",
        "didn't they",
        "do they",
        "don't they"
      ],
      "answer": "did they",
      "explanation": "'Few' (a વગર) નકારાત્મક અર્થ ('નહિવત્') દર્શાવે છે. વાક્ય ભૂતકાળમાં હોવાથી, હકાર Tag 'did they' આવશે."
    },
    {
      "question": "A few people came to the party, __________?",
      "options": [
        "did they",
        "didn't they",
        "do they",
        "don't they"
      ],
      "answer": "didn't they",
      "explanation": "'A few' હકારાત્મક અર્થ ('થોડાક') દર્શાવે છે. વાક્ય ભૂતકાળમાં હોવાથી, નકાર Tag 'didn't they' આવશે."
    },
    {
      "question": "Little progress has been made, __________?",
      "options": [
        "has it",
        "hasn't it",
        "is it",
        "did it"
      ],
      "answer": "has it",
      "explanation": "'Little' (a વગર) નકારાત્મક અર્થ ('નહિવત્') દર્શાવે છે. વાક્યમાં 'has' સહાયકારક ક્રિયાપદ છે, તેથી હકાર Tag 'has it' आएगा."
    },
    {
      "question": "I have a little money, __________?",
      "options": [
        "have I",
        "haven't I",
        "do I",
        "don't I"
      ],
      "answer": "haven't I",
      "explanation": "'A little' હકારાત્મક અર્થ ('થોડુંક') દર્શાવે છે. અહીં 'have' ને સહાયકારક ક્રિયાપદ તરીકે ગણીને નકાર Tag 'haven't I' બનાવી શકાય. (અથવા 'don't I' પણ સ્વીકાર્ય છે)."
    },
    {
      "question": "One must do one's duty, __________?",
      "options": [
        "must one",
        "mustn't one",
        "mustn't he",
        "mustn't they"
      ],
      "answer": "mustn't one",
      "explanation": "જ્યારે વાક્યનો કર્તા 'one' હોય, ત્યારે Question Tag માં પણ 'one' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The jury has given its verdict, __________?",
      "options": [
        "hasn't it",
        "haven't they",
        "has it",
        "have they"
      ],
      "answer": "hasn't it",
      "explanation": "જ્યારે 'jury' જેવા સમૂહવાચક નામ એક જૂથ તરીકે કામ કરે, ત્યારે તે એકવચન ગણાય છે અને 'it' સર્વનામ વપરાય છે. તેથી 'hasn't it' આવશે."
    }
  ],
  "test-13": [
    {
      "question": "You can play the piano, __________?",
      "options": [
        "can you",
        "can't you",
        "do you",
        "don't you"
      ],
      "answer": "can't you",
      "explanation": "હકાર વાક્યમાં modal verb 'can' છે, તેથી Tag નકાર 'can't you' આવશે."
    },
    {
      "question": "They won't report us, __________?",
      "options": [
        "will they",
        "won't they",
        "do they",
        "should they"
      ],
      "answer": "will they",
      "explanation": "નકાર વાક્યમાં 'won't' (will not) છે, તેથી Tag હકાર 'will they' આવશે."
    },
    {
      "question": "I'm clever, __________?",
      "options": [
        "am I",
        "am not I",
        "ain't I",
        "aren't I"
      ],
      "answer": "aren't I",
      "explanation": "'I am' વાળા હકાર વાક્યનો Question Tag 'aren't I' થાય છે, જે એક અપવાદરૂપ નિયમ છે."
    },
    {
      "question": "Do it now, __________?",
      "options": [
        "do you",
        "don't you",
        "will you",
        "shall we"
      ],
      "answer": "will you",
      "explanation": "આજ્ઞાર્થ વાક્ય (Imperative sentence) માટે 'will you' અથવા 'won't you' Tag તરીકે વપરાય છે."
    },
    {
      "question": "There's a lot of work to do, __________?",
      "options": [
        "is there",
        "isn't there",
        "is it",
        "isn't it"
      ],
      "answer": "isn't there",
      "explanation": "'There is' થી શરૂ થતા હકાર વાક્ય માટે Tag 'isn't there' વપરાય છે."
    },
    {
      "question": "Nobody was watching, __________?",
      "options": [
        "was they",
        "wasn't they",
        "were they",
        "weren't they"
      ],
      "answer": "were they",
      "explanation": "'Nobody' વાક્યને નકાર બનાવે છે અને તેના માટે 'they' સર્વનામ વપરાય છે. 'they' સાથે 'were' આવે છે, તેથી હકાર Tag 'were they' આવશે."
    },
    {
      "question": "Everything is fine, __________?",
      "options": [
        "is it",
        "isn't it",
        "are they",
        "aren't they"
      ],
      "answer": "isn't it",
      "explanation": "'Everything' માટે 'it' સર્વનામ વપરાય છે. હકાર વાક્ય હોવાથી નકાર Tag 'isn't it' આવશે."
    },
    {
      "question": "He seldom visits his uncle, __________?",
      "options": [
        "does he",
        "doesn't he",
        "is he",
        "did he"
      ],
      "answer": "does he",
      "explanation": "'seldom' (ભાગ્યે જ) શબ્દ વાક્યને નકાર બનાવે છે, તેથી Question Tag હકાર 'does he' આવશે."
    },
    {
      "question": "You need not worry, __________?",
      "options": [
        "need you",
        "needn't you",
        "do you",
        "don't you"
      ],
      "answer": "need you",
      "explanation": "જ્યારે 'need' modal verb તરીકે (not સાથે) વપરાય, ત્યારે Tag માં પણ 'need' નો ઉપયોગ થાય છે. વાક્ય નકાર હોવાથી Tag હકાર 'need you' આવશે."
    },
    {
      "question": "She dare not go there, __________?",
      "options": [
        "dare she",
        "daren't she",
        "does she",
        "doesn't she"
      ],
      "answer": "dare she",
      "explanation": "જ્યારે 'dare' modal verb તરીકે (not સાથે) વપરાય, ત્યારે Tag માં પણ 'dare' નો ઉપયોગ થાય છે. વાક્ય નકાર હોવાથી Tag હકાર 'dare she' આવશે."
    }
  ],
  "test-14": [
    {
      "question": "I am not your student, __________?",
      "options": [
        "am I",
        "am I not",
        "aren't I",
        "are I"
      ],
      "answer": "am I",
      "explanation": "'I am not' વાળા નકાર વાક્ય માટે Question Tag 'am I' વપરાય છે."
    },
    {
      "question": "Let him do his work, __________?",
      "options": [
        "will you",
        "shall we",
        "does he",
        "doesn't he"
      ],
      "answer": "will you",
      "explanation": "જ્યારે 'Let' પછી 'me, him, her, them' આવે અને તે પરવાનગી માંગવાનો ભાવ દર્શાવે, ત્યારે Question Tag 'will you' વપરાય છે."
    },
    {
      "question": "Please, help me, __________?",
      "options": [
        "will you",
        "can't you",
        "do you",
        "won't you"
      ],
      "answer": "will you",
      "explanation": "આજ્ઞાર્થ વાક્ય (Imperative sentence) જે વિનંતી દર્શાવે છે, તેના માટે 'will you' અથવા 'won't you' વપરાય છે."
    },
    {
      "question": "There are many books on the shelf, __________?",
      "options": [
        "are there",
        "aren't there",
        "are they",
        "aren't they"
      ],
      "answer": "aren't there",
      "explanation": "'There are' થી શરૂ થતા હકાર વાક્ય માટે નકાર Tag 'aren't there' વપરાય છે."
    },
    {
      "question": "Everyone has come, __________?",
      "options": [
        "hasn't he",
        "hasn't she",
        "haven't they",
        "hasn't everyone"
      ],
      "answer": "haven't they",
      "explanation": "'Everyone' માટે સર્વનામ 'they' વપરાય છે અને 'they' સાથે 'have' આવે છે. વાક્ય હકાર હોવાથી નકાર Tag 'haven't they' આવશે."
    },
    {
      "question": "Nothing was said, __________?",
      "options": [
        "was it",
        "wasn't it",
        "did it",
        "didn't it"
      ],
      "answer": "was it",
      "explanation": "'Nothing' શબ્દ વાક્યને નકાર બનાવે છે અને તેના માટે 'it' સર્વનામ વપરાય છે. તેથી, હકાર Tag 'was it' આવશે."
    },
    {
      "question": "He rarely comes here, __________?",
      "options": [
        "does he",
        "doesn't he",
        "is he",
        "did he"
      ],
      "answer": "does he",
      "explanation": "'rarely' (ભાગ્યે જ) વાક્યને નકારાત્મક અર્થ આપે છે, તેથી Question Tag હકાર 'does he' આવશે."
    },
    {
      "question": "They have a lot of money, __________?",
      "options": [
        "have they",
        "haven't they",
        "do they",
        "don't they"
      ],
      "answer": "don't they",
      "explanation": "જ્યારે 'have' મુખ્ય ક્રિયાપદ (માલિકી દર્શાવવા) તરીકે વપરાય, ત્યારે Tag 'do/does' સાથે બને છે. અહીં 'they' સાથે 'do' વપરાય, તેથી નકાર Tag 'don't they' આવશે."
    },
    {
      "question": "You need to work hard, __________?",
      "options": [
        "need you",
        "needn't you",
        "do you",
        "don't you"
      ],
      "answer": "don't you",
      "explanation": "જ્યારે 'need to' મુખ્ય ક્રિયાપદ તરીકે વપરાય, ત્યારે Tag 'do/does' સાથે બને છે. તેથી, 'don't you' સાચો જવાબ છે."
    },
    {
      "question": "The team played well, __________?",
      "options": [
        "did it",
        "didn't it",
        "did they",
        "didn't they"
      ],
      "answer": "didn't they",
      "explanation": "જ્યારે 'team' જેવા સમૂહવાચક નામ તેના સભ્યોનો ઉલ્લેખ કરે (એકસાથે રમ્યા), ત્યારે 'they' સર્વનામ વપરાય છે. તેથી 'didn't they' આવશે."
    }
  ],
  "test-15": [
    {
      "question": "He might come tomorrow, __________?",
      "options": [
        "might he",
        "mightn't he",
        "may he",
        "mayn't he"
      ],
      "answer": "mightn't he",
      "explanation": "Modal verb 'might' વાળા હકાર વાક્ય માટે નકાર Tag 'mightn't he' વપરાય છે."
    },
    {
      "question": "She may not agree with you, __________?",
      "options": [
        "may she",
        "mayn't she",
        "can she",
        "will she"
      ],
      "answer": "may she",
      "explanation": "Modal verb 'may not' વાળા નકાર વાક્ય માટે હકાર Tag 'may she' વપરાય છે."
    },
    {
      "question": "I am your friend, __________?",
      "options": [
        "am I",
        "ain't I",
        "aren't I",
        "am not I"
      ],
      "answer": "aren't I",
      "explanation": "આ એક અપવાદ છે. 'I am' વાળા હકાર વાક્યનો Question Tag 'aren't I' થાય છે."
    },
    {
      "question": "Let's finish this quickly, __________?",
      "options": [
        "will you",
        "shall we",
        "do we",
        "can we"
      ],
      "answer": "shall we",
      "explanation": "'Let's' (Let us) થી શરૂ થતી દરખાસ્ત માટે Question Tag હંમેશા 'shall we' આવે છે."
    },
    {
      "question": "There were a lot of people, __________?",
      "options": [
        "were there",
        "weren't there",
        "were they",
        "weren't they"
      ],
      "answer": "weren't there",
      "explanation": "'There were' થી શરૂ થતા હકાર વાક્ય માટે નકાર Tag 'weren't there' વપરાય છે."
    },
    {
      "question": "Anybody can solve this, __________?",
      "options": [
        "can't they",
        "can't he",
        "can't anybody",
        "can they"
      ],
      "answer": "can't they",
      "explanation": "'Anybody', 'somebody', 'everyone' જેવા શબ્દો માટે 'they' સર્વનામ વપરાય છે. તેથી નકાર Tag 'can't they' આવશે."
    },
    {
      "question": "Nothing has changed, __________?",
      "options": [
        "has it",
        "hasn't it",
        "is it",
        "did it"
      ],
      "answer": "has it",
      "explanation": "'Nothing' વાક્યને નકાર બનાવે છે અને તેના માટે 'it' સર્વનામ વપરાય છે. તેથી હકાર Tag 'has it' આવશે."
    },
    {
      "question": "She has breakfast at 8 AM, __________?",
      "options": [
        "has she",
        "hasn't she",
        "does she",
        "doesn't she"
      ],
      "answer": "doesn't she",
      "explanation": "અહીં 'has' મુખ્ય ક્રિયાપદ (ખાવું) તરીકે વપરાયું છે, જે સાદા વર્તમાનકાળમાં છે. તેથી, Tag 'doesn't she' બનશે."
    },
    {
      "question": "He used to be a good student, __________?",
      "options": [
        "usedn't he",
        "did he",
        "didn't he",
        "wasn't he"
      ],
      "answer": "didn't he",
      "explanation": "'used to' વાળી રચના માટે Question Tag 'didn't' સાથે બને છે."
    },
    {
      "question": "The police have arrested the thief, __________?",
      "options": [
        "hasn't it",
        "has it",
        "haven't they",
        "have they"
      ],
      "answer": "haven't they",
      "explanation": "'Police' શબ્દ હંમેશા બહુવચન ગણાય છે. તેથી, સર્વનામ 'they' અને સહાયકારક ક્રિયાપદ 'have' વપરાશે. Tag 'haven't they' બનશે."
    }
  ],
  "test-16": [
    {
      "question": "You ought to respect your elders, __________?",
      "options": [
        "ought you",
        "oughtn't you",
        "should you",
        "shouldn't you"
      ],
      "answer": "shouldn't you",
      "explanation": "'ought to' માટે Question Tag માં 'should' અથવા 'ought' નો ઉપયોગ થાય છે. 'shouldn't you' વધુ પ્રચલિત છે."
    },
    {
      "question": "They dare to challenge the rules, __________?",
      "options": [
        "dare they",
        "daren't they",
        "do they",
        "don't they"
      ],
      "answer": "don't they",
      "explanation": "જ્યારે 'dare' મુખ્ય ક્રિયાપદ તરીકે વપરાય, ત્યારે Tag 'do/does' સાથે બને છે. તેથી, 'don't they' આવશે."
    },
    {
      "question": "She needs a new pen, __________?",
      "options": [
        "needs she",
        "needn't she",
        "does she",
        "doesn't she"
      ],
      "answer": "doesn't she",
      "explanation": "જ્યારે 'need' મુખ્ય ક્રિયાપદ તરીકે વપરાય, ત્યારે Tag 'do/does' સાથે બને છે. તેથી, 'doesn't she' આવશે."
    },
    {
      "question": "Close the window, __________?",
      "options": [
        "will you",
        "do you",
        "are you",
        "shall we"
      ],
      "answer": "will you",
      "explanation": "આજ્ઞાર્થ વાક્ય માટે Question Tag તરીકે 'will you' અથવા 'won't you' નો ઉપયોગ થાય છે."
    },
    {
      "question": "I am not as tall as you, __________?",
      "options": [
        "am I",
        "aren't I",
        "do I",
        "are I"
      ],
      "answer": "am I",
      "explanation": "'I am not' વાળા નકાર વાક્ય માટે Question Tag 'am I' આવે છે."
    },
    {
      "question": "Everybody looked happy, __________?",
      "options": [
        "did they",
        "didn't they",
        "did he",
        "looked they"
      ],
      "answer": "didn't they",
      "explanation": "'Everybody' માટે સર્વનામ 'they' વપરાય છે. વાક્ય સાદા ભૂતકાળમાં હોવાથી નકાર Tag 'didn't they' બનશે."
    },
    {
      "question": "Nothing can happen, __________?",
      "options": [
        "can it",
        "can't it",
        "can anything",
        "is it"
      ],
      "answer": "can it",
      "explanation": "'Nothing' વાક્યને નકાર બનાવે છે અને તેના માટે 'it' સર્વનામ વપરાય છે. તેથી હકાર Tag 'can it' आएगा."
    },
    {
      "question": "He has a little knowledge about it, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "hasn't he",
      "explanation": "'A little' હકારાત્મક અર્થ ('થોડુંક') દર્શાવે છે. અહીં 'has' ને સહાયકારક ક્રિયાપદ તરીકે ગણીને 'hasn't he' બનાવી શકાય છે."
    },
    {
      "question": "The fleet of ships is ready for the voyage, __________?",
      "options": [
        "is it",
        "isn't it",
        "are they",
        "aren't they"
      ],
      "answer": "isn't it",
      "explanation": "'The fleet' (વહાણોનો કાફલો) એક ਸਮૂહવાચક નામ છે જે એક જૂથ તરીકે વર્તે છે, તેથી તે એકવચન ગણાય છે. Tag 'isn't it' આવશે."
    },
    {
      "question": "You'd completed the task, __________?",
      "options": [
        "had you",
        "hadn't you",
        "would you",
        "wouldn't you"
      ],
      "answer": "hadn't you",
      "explanation": "અહીં 'You'd completed' માં 'd એ 'had' નું ટૂંકું રૂપ છે કારણ કે તે પૂર્ણ ક્રિયાપદ (completed) સાથે છે. તેથી Tag 'hadn't you' આવશે."
    }
  ],
  "test-17": [
    {
      "question": "She would never tell a lie, __________?",
      "options": [
        "would she",
        "wouldn't she",
        "will she",
        "did she"
      ],
      "answer": "would she",
      "explanation": "'never' શબ્દ વાક્યને નકાર બનાવે છે, તેથી Question Tag હકાર 'would she' આવશે."
    },
    {
      "question": "He could read when he was four, __________?",
      "options": [
        "could he",
        "couldn't he",
        "can he",
        "did he"
      ],
      "answer": "couldn't he",
      "explanation": "Modal verb 'could' વાળા હકાર વાક્ય માટે નકાર Tag 'couldn't he' આવશે."
    },
    {
      "question": "They must follow the rules, __________?",
      "options": [
        "must they",
        "mustn't they",
        "do they",
        "should they"
      ],
      "answer": "mustn't they",
      "explanation": "Modal verb 'must' વાળા હકાર વાક્ય માટે નકાર Tag 'mustn't they' આવશે."
    },
    {
      "question": "I am senior to you, __________?",
      "options": [
        "am I",
        "ain't I",
        "aren't I",
        "am not I"
      ],
      "answer": "aren't I",
      "explanation": "'I am' થી શરૂ થતા હકાર વાક્ય માટે અપવાદરૂપે 'aren't I' નો ઉપયોગ થાય છે."
    },
    {
      "question": "Let me help you, __________?",
      "options": [
        "will you",
        "shall I",
        "do I",
        "don't I"
      ],
      "answer": "will you",
      "explanation": "જ્યારે 'Let' પછી 'me, him, her' આવે અને તે પરવાનગી માંગવાનો ભાવ દર્શાવે, ત્યારે Tag 'will you' વપરાય છે. (કેટલીકવાર 'may I' પણ વપરાય છે)."
    },
    {
      "question": "There is no water in the glass, __________?",
      "options": [
        "is there",
        "isn't there",
        "is it",
        "isn't it"
      ],
      "answer": "is there",
      "explanation": "'no' શબ્દ વાક્યને નકાર બનાવે છે. 'There is' વાળા વાક્યમાં Tag હકાર 'is there' આવશે."
    },
    {
      "question": "One cannot be too careful, __________?",
      "options": [
        "can one",
        "can't one",
        "can he",
        "can't he"
      ],
      "answer": "can one",
      "explanation": "જ્યારે વાક્યનો કર્તા 'one' હોય, ત્યારે Tag માં પણ 'one' નો ઉપયોગ થાય છે. વાક્ય નકાર હોવાથી Tag હકાર 'can one' आएगा."
    },
    {
      "question": "The audience was spellbound, __________?",
      "options": [
        "was it",
        "wasn't it",
        "were they",
        "weren't they"
      ],
      "answer": "weren't they",
      "explanation": "'Audience' જેવા સમૂહવાચક નામ જ્યારે તેના સભ્યોનો ઉલ્લેખ કરે, ત્યારે તે બહુવચન ગણાય છે. તેથી 'weren't they' આવશે."
    },
    {
      "question": "She used to sing well, __________?",
      "options": [
        "did she",
        "didn't she",
        "used she",
        "usedn't she"
      ],
      "answer": "didn't she",
      "explanation": "'used to' વાળી રચના ભૂતકાળની આદત બતાવે છે, અને તેનો Question Tag 'didn't' સાથે બને છે."
    },
    {
      "question": "They have few reasons to complain, __________?",
      "options": [
        "have they",
        "haven't they",
        "do they",
        "don't they"
      ],
      "answer": "have they",
      "explanation": "'Few' (a વગર) નકારાત્મક અર્થ ('નહિવત્') દર્શાવે છે. તેથી, Question Tag હકાર 'have they' આવશે."
    }
  ],
  "test-18": [
    {
      "question": "He has his car serviced regularly, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "doesn't he",
      "explanation": "અહીં 'has' મુખ્ય ક્રિયાપદ તરીકે નથી, પણ 'has something done' (કંઈક કરાવવું) રચનાનો ભાગ છે. આ સાદા વર્તમાનકાળમાં છે, તેથી Tag 'doesn't he' બનશે."
    },
    {
      "question": "The sun is a star, __________?",
      "options": [
        "is it",
        "isn't it",
        "is the sun",
        "doesn't it"
      ],
      "answer": "isn't it",
      "explanation": "હકાર વાક્ય છે અને ક્રિયાપદ 'is' છે. 'The sun' માટે 'it' સર્વનામ વપરાય છે, તેથી Tag 'isn't it' આવશે."
    },
    {
      "question": "I need your help, __________?",
      "options": [
        "need I",
        "needn't I",
        "do I",
        "don't I"
      ],
      "answer": "don't I",
      "explanation": "અહીં 'need' મુખ્ય ક્રિયાપદ તરીકે વપરાયું છે. વાક્ય સાદા વર્તમાનકાળમાં હોવાથી Tag 'don't I' બનશે."
    },
    {
      "question": "You need not come early, __________?",
      "options": [
        "need you",
        "needn't you",
        "do you",
        "don't you"
      ],
      "answer": "need you",
      "explanation": "અહીં 'need' modal verb તરીકે વપરાયું છે (not સાથે). તેથી Tag માં પણ 'need' નો ઉપયોગ થશે. વાક્ય નકાર હોવાથી Tag હકાર 'need you' આવશે."
    },
    {
      "question": "Let's ask him, __________?",
      "options": [
        "shall we",
        "will you",
        "do we",
        "should we"
      ],
      "answer": "shall we",
      "explanation": "'Let's' થી શરૂ થતી દરખાસ્તો માટે Question Tag હંમેશા 'shall we' આવે છે."
    },
    {
      "question": "Somebody entered the room, __________?",
      "options": [
        "did he",
        "didn't he",
        "did they",
        "didn't they"
      ],
      "answer": "didn't they",
      "explanation": "'Somebody' માટે સર્વનામ 'they' વપરાય છે. વાક્ય સાદા ભૂતકાળમાં હોવાથી, નકાર Tag 'didn't they' આવશે."
    },
    {
      "question": "Nothing seems right, __________?",
      "options": [
        "does it",
        "doesn't it",
        "is it",
        "isn't it"
      ],
      "answer": "does it",
      "explanation": "'Nothing' વાક્યને નકાર બનાવે છે અને તેના માટે 'it' સર્વનામ વપરાય છે. વાક્ય સાદા વર્તમાનકાળમાં ('seems') હોવાથી, હકાર Tag 'does it' आएगा."
    },
    {
      "question": "She'd rather play than work, __________?",
      "options": [
        "hadn't she",
        "wouldn't she",
        "did she",
        "didn't she"
      ],
      "answer": "wouldn't she",
      "explanation": "અહીં 'd rather' એ 'would rather' નું ટૂંકું રૂપ છે. તેથી, Question Tag 'wouldn't she' આવશે."
    },
    {
      "question": "This won't take long, __________?",
      "options": [
        "will it",
        "won't it",
        "will this",
        "does it"
      ],
      "answer": "will it",
      "explanation": "વાક્ય નકાર ('won't') છે. 'This' માટે સર્વનામ 'it' વપરાય છે. તેથી હકાર Tag 'will it' आएगा."
    },
    {
      "question": "Mind the traffic, __________?",
      "options": [
        "will you",
        "do you",
        "can you",
        "should you"
      ],
      "answer": "will you",
      "explanation": "આ એક આજ્ઞાર્થ વાક્ય (ચેતવણી) છે, જેના માટે Question Tag 'will you' વપરાય છે."
    }
  ],
  "test-19": [
    {
      "question": "The moon shines at night, __________?",
      "options": [
        "does it",
        "doesn't it",
        "is it",
        "shines it"
      ],
      "answer": "doesn't it",
      "explanation": "વાક્ય સાદા વર્તમાનકાળમાં છે ('shines'). 'The moon' માટે 'it' સર્વનામ વપરાય છે. હકાર વાક્ય માટે નકાર Tag 'doesn't it' આવશે."
    },
    {
      "question": "He is seldom absent, __________?",
      "options": [
        "is he",
        "isn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "is he",
      "explanation": "'seldom' (ભાગ્યે જ) શબ્દ વાક્યને નકાર બનાવે છે, તેથી Question Tag હકાર 'is he' આવશે."
    },
    {
      "question": "My father is a doctor, __________?",
      "options": [
        "is he",
        "isn't he",
        "is my father",
        "does he"
      ],
      "answer": "isn't he",
      "explanation": "હકાર વાક્ય છે. 'My father' માટે 'he' સર્વનામ વપરાય છે. તેથી Tag 'isn't he' आएगा."
    },
    {
      "question": "The team members haven't agreed on a strategy, __________?",
      "options": [
        "has it",
        "have they",
        "hasn't it",
        "haven't they"
      ],
      "answer": "have they",
      "explanation": "અહીં 'team members' (સભ્યો) બહુવચનમાં છે, તેથી 'they' સર્વનામ વપરાશે. વાક્ય નકાર હોવાથી હકાર Tag 'have they' आएगा."
    },
    {
      "question": "One should not be rude, __________?",
      "options": [
        "should one",
        "shouldn't one",
        "should he",
        "shouldn't he"
      ],
      "answer": "should one",
      "explanation": "જ્યારે વાક્યનો કર્તા 'one' હોય, ત્યારે Tag માં પણ 'one' નો ઉપયોગ થાય છે. વાક્ય નકાર હોવાથી Tag હકાર આવશે."
    },
    {
      "question": "All of us can do it, __________?",
      "options": [
        "can we",
        "can't we",
        "can us",
        "can't us"
      ],
      "answer": "can't we",
      "explanation": "'All of us' માટે સર્વનામ 'we' વપરાય છે. હકાર વાક્ય ('can') માટે નકાર Tag 'can't we' আসবে."
    },
    {
      "question": "None of them knew the truth, __________?",
      "options": [
        "did they",
        "didn't they",
        "do they",
        "knew they"
      ],
      "answer": "did they",
      "explanation": "'None' શબ્દ વાક્યને નકાર બનાવે છે. 'them' માટે 'they' સર્વનામ વપરાય છે. સાદા ભૂતકાળનું વાક્ય હોવાથી હકાર Tag 'did they' আসবে."
    },
    {
      "question": "She's been studying for hours, __________?",
      "options": [
        "is she",
        "isn't she",
        "has she",
        "hasn't she"
      ],
      "answer": "hasn't she",
      "explanation": "અહીં 'She's been' એ 'She has been' નું ટૂંકું રૂપ છે (ચાલુ પૂર્ણ વર્તમાનકાળ). તેથી, નકાર Tag 'hasn't she' આવશે."
    },
    {
      "question": "Don't be silly, __________?",
      "options": [
        "do you",
        "don't you",
        "will you",
        "are you"
      ],
      "answer": "will you",
      "explanation": "નકારાત્મક આજ્ઞાર્થ વાક્ય માટે Question Tag હંમેશા 'will you' આવે છે."
    },
    {
      "question": "What a beautiful painting, __________?",
      "options": [
        "is it",
        "isn't it",
        "is that",
        "isn't that"
      ],
      "answer": "isn't it",
      "explanation": "ઉદ્ગાર વાક્ય (Exclamatory sentence) માટે, વાક્યના ભાવ અને કર્તા મુજબ Tag બને છે. અહીં 'The painting is beautiful' નો ભાવ છે, તેથી 'isn't it' આવશે."
    }
  ],
  "test-20": [
    {
      "question": "He's just left, __________?",
      "options": [
        "is he",
        "isn't he",
        "has he",
        "hasn't he"
      ],
      "answer": "hasn't he",
      "explanation": "અહીં 'He's' એ 'He has' નું ટૂંકું રૂપ છે (પૂર્ણ વર્તમાનકાળ). વાક્ય હકાર હોવાથી નકાર Tag 'hasn't he' આવશે."
    },
    {
      "question": "I think he is right, __________?",
      "options": [
        "don't I",
        "do I",
        "is he",
        "isn't he"
      ],
      "answer": "isn't he",
      "explanation": "જ્યારે વાક્ય 'I think', 'I believe', 'He says' થી શરૂ થાય, ત્યારે Tag મુખ્ય વાક્ય (he is right) પરથી બને છે, 'I think' પરથી નહીં. તેથી, 'isn't he' આવશે."
    },
    {
      "question": "She doesn't think you are correct, __________?",
      "options": [
        "does she",
        "doesn't she",
        "are you",
        "aren't you"
      ],
      "answer": "are you",
      "explanation": "જ્યારે મુખ્ય વાક્ય ('She doesn't think') નકાર હોય, ત્યારે Tag હકાર બને છે, અને તે ગૌણ વાક્ય ('you are correct') પરથી બને છે. તેથી 'are you' આવશે."
    },
    {
      "question": "The climate of this city doesn't suit him, __________?",
      "options": [
        "does it",
        "doesn't it",
        "do it",
        "don't it"
      ],
      "answer": "does it",
      "explanation": "વાક્ય નકાર ('doesn't') છે. કર્તા 'The climate' માટે 'it' સર્વનામ વપરાય છે. તેથી હકાર Tag 'does it' આવશે."
    },
    {
      "question": "Let's clean the room, __________?",
      "options": [
        "shall we",
        "will you",
        "do we",
        "should we"
      ],
      "answer": "shall we",
      "explanation": "'Let's' થી શરૂ થતી દરખાસ્ત માટે Question Tag હંમેશા 'shall we' હોય છે."
    },
    {
      "question": "Have some more tea, __________?",
      "options": [
        "have you",
        "haven't you",
        "will you",
        "do you"
      ],
      "answer": "will you",
      "explanation": "જ્યારે આજ્ઞાર્થ વાક્યમાં કંઈક ઓફર કરવામાં આવે, ત્યારે 'will you' અથવા 'won't you' વપરાય છે. 'will you' વધુ સામાન્ય છે."
    },
    {
      "question": "Somebody has to do it, __________?",
      "options": [
        "hasn't they",
        "don't they",
        "haven't they",
        "do they"
      ],
      "answer": "don't they",
      "explanation": "'Somebody' માટે 'they' સર્વનામ વપરાય. 'has to' સાદા વર્તમાનકાળની જેમ વર્તે છે. 'they' સાથે 'do' આવે. વાક્ય હકાર હોવાથી નકાર Tag 'don't they' आएगा."
    },
    {
      "question": "Nothing was done, __________?",
      "options": [
        "was it",
        "wasn't it",
        "did it",
        "didn't it"
      ],
      "answer": "was it",
      "explanation": "'Nothing' વાક્યને નકાર બનાવે છે અને તેના માટે 'it' સર્વનામ વપરાય છે. તેથી હકાર Tag 'was it' আসবে."
    },
    {
      "question": "He barely knows you, __________?",
      "options": [
        "does he",
        "doesn't he",
        "is he",
        "knows he"
      ],
      "answer": "does he",
      "explanation": "'barely' (ભાગ્યે જ) શબ્દ વાક્યને નકાર બનાવે છે, તેથી Question Tag હકાર 'does he' આવશે."
    },
    {
      "question": "The jury were divided in their opinions, __________?",
      "options": [
        "wasn't it",
        "weren't they",
        "was it",
        "were they"
      ],
      "answer": "weren't they",
      "explanation": "જ્યારે 'jury' જેવા સમૂહવાચક નામ તેના સભ્યોમાં વિભાજન દર્શાવે, ત્યારે તે બહુવચન ગણાય છે અને 'they' સર્વનામ વપરાય છે. તેથી નકાર Tag 'weren't they' आएगा."
    }
  ],
  "test-21": [
    {
      "question": "I think he's a spy, __________?",
      "options": [
        "don't I",
        "isn't he",
        "is he",
        "do I"
      ],
      "answer": "isn't he",
      "explanation": "જ્યારે વાક્ય 'I think/believe/suppose' થી શરૂ થાય, ત્યારે Question Tag મુખ્ય વાક્ય (he's a spy) પરથી બને છે. અહીં 'he is a spy' હકાર હોવાથી Tag 'isn't he' आएगा."
    },
    {
      "question": "She doesn't suppose he will come, __________?",
      "options": [
        "does she",
        "doesn't she",
        "will he",
        "won't he"
      ],
      "answer": "will he",
      "explanation": "જ્યારે મુખ્ય વાક્ય ('She doesn't suppose') નકાર હોય, ત્યારે Tag હકાર બને છે અને તે ગૌણ વાક્ય ('he will come') પરથી બને છે. તેથી, 'will he' आएगा."
    },
    {
      "question": "It appears that they are busy, __________?",
      "options": [
        "doesn't it",
        "does it",
        "aren't they",
        "are they"
      ],
      "answer": "aren't they",
      "explanation": "'It seems/appears that' વાળા વાક્યોમાં Tag ગૌણ વાક્ય ('they are busy') પરથી બને છે. તેથી, 'aren't they' आएगा."
    },
    {
      "question": "What a terrible idea, __________?",
      "options": [
        "is it",
        "isn't it",
        "was it",
        "wasn't it"
      ],
      "answer": "isn't it",
      "explanation": "ઉદ્ગાર વાક્યનો Tag તેના મૂળ ભાવ પરથી બને છે. અહીં 'The idea is terrible' નો ભાવ છે, તેથી Tag 'isn't it' आएगा."
    },
    {
      "question": "How cleverly she speaks, __________?",
      "options": [
        "does she",
        "doesn't she",
        "is she",
        "isn't she"
      ],
      "answer": "doesn't she",
      "explanation": "આ ઉદ્ગાર વાક્યનો મૂળ ભાવ 'She speaks cleverly' છે, જે સાદા વર્તમાનકાળમાં છે. તેથી, Tag 'doesn't she' आएगा."
    },
    {
      "question": "All of them are here, __________?",
      "options": [
        "are they",
        "aren't they",
        "are all",
        "aren't all"
      ],
      "answer": "aren't they",
      "explanation": "'All of them' માટે 'they' સર્વનામ વપરાય છે. વાક્ય હકાર હોવાથી Tag 'aren't they' आएगा."
    },
    {
      "question": "None of your friends liked the movie, __________?",
      "options": [
        "did they",
        "didn't they",
        "do they",
        "don't they"
      ],
      "answer": "did they",
      "explanation": "'None' વાક્યને નકાર બનાવે છે. 'your friends' માટે 'they' સર્વનામ વપરાય છે. વાક્ય સાદા ભૂતકાળમાં હોવાથી હકાર Tag 'did they' आएगा."
    },
    {
      "question": "The rich are not always happy, __________?",
      "options": [
        "are they",
        "aren't they",
        "is he",
        "isn't he"
      ],
      "answer": "are they",
      "explanation": "'The rich' નો અર્થ 'બધા શ્રીમંત લોકો' (બહુવચન) થાય છે. વાક્ય નકાર હોવાથી હકાર Tag 'are they' आएगा."
    },
    {
      "question": "The poor deserve our help, __________?",
      "options": [
        "do they",
        "don't they",
        "does he",
        "doesn't he"
      ],
      "answer": "don't they",
      "explanation": "'The poor' નો અર્થ 'બધા ગરીબ લોકો' (બહુવચન) થાય છે. વાક્ય સાદા વર્તમાનકાળમાં હોવાથી નકાર Tag 'don't they' आएगा."
    },
    {
      "question": "This is the fifth time he has been late, __________?",
      "options": [
        "is it",
        "isn't it",
        "has he",
        "hasn't he"
      ],
      "answer": "isn't it",
      "explanation": "આ પ્રકારના વાક્યમાં Tag મુખ્ય વાક્ય 'This is the fifth time' પરથી બને છે, ગૌણ વાક્ય પરથી નહીં. તેથી, 'isn't it' आएगा."
    }
  ],
  "test-22": [
    {
      "question": "The guest of honor arrived late, __________?",
      "options": [
        "did he",
        "didn't he",
        "did she",
        "didn't she"
      ],
      "answer": "didn't he",
      "explanation": "કર્તા 'The guest of honor' માટે 'he' અથવા 'she' વાપરી શકાય. વાક્ય સાદા ભૂતકાળમાં છે. તેથી, 'didn't he/she' આવશે. વિકલ્પોમાં 'didn't he' છે."
    },
    {
      "question": "The mother in her was moved, __________?",
      "options": [
        "was she",
        "wasn't she",
        "was it",
        "wasn't it"
      ],
      "answer": "wasn't it",
      "explanation": "અહીં 'The mother' એ એક વ્યક્તિ નહીં, પણ 'માતૃત્વની ભાવના' (Abstract Noun) દર્શાવે છે. તેથી, 'it' સર્વનામ વપરાશે. Tag 'wasn't it' आएगा."
    },
    {
      "question": "The beast in him comes out when he is angry, __________?",
      "options": [
        "does it",
        "doesn't it",
        "does he",
        "doesn't he"
      ],
      "answer": "doesn't it",
      "explanation": "અહીં 'The beast' એ 'પશુવૃત્તિ' (Abstract Noun) દર્શાવે છે. તેથી, 'it' સર્વનામ વપરાશે. Tag 'doesn't it' आएगा."
    },
    {
      "question": "He as well as his friends is guilty, __________?",
      "options": [
        "is he",
        "isn't he",
        "are they",
        "aren't they"
      ],
      "answer": "isn't he",
      "explanation": "'as well as', 'with', 'along with' જેવા શબ્દોથી જોડાયેલા વાક્યોમાં ક્રિયાપદ અને Tag પહેલા કર્તા (He) મુજબ આવે છે. તેથી, 'isn't he' आएगा."
    },
    {
      "question": "My friends, not I, have done this, __________?",
      "options": [
        "have I",
        "haven't I",
        "have they",
        "haven't they"
      ],
      "answer": "haven't they",
      "explanation": "'not' પછી આવતા કર્તાને બદલે, પહેલા આવતા કર્તા ('My friends') મુજબ Tag બને છે. તેથી, 'haven't they' আসবে."
    },
    {
      "question": "I am not what you think, __________?",
      "options": [
        "am I",
        "aren't I",
        "are you",
        "do you"
      ],
      "answer": "am I",
      "explanation": "મુખ્ય વાક્ય 'I am not' છે, તેથી તેનો હકાર Tag 'am I' બનશે."
    },
    {
      "question": "He has a lot of work to do, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "doesn't he",
      "explanation": "અહીં 'has' મુખ્ય ક્રિયાપદ છે. સાદા વર્તમાનકાળ મુજબ, 'he' સાથે 'does' આવે. તેથી, નકાર Tag 'doesn't he' আসবে."
    },
    {
      "question": "The wind is blowing hard, __________?",
      "options": [
        "is it",
        "isn't it",
        "is the wind",
        "blows it"
      ],
      "answer": "isn't it",
      "explanation": "'The wind' માટે 'it' સર્વનામ વપરાય છે. વાક્ય હકાર હોવાથી નકાર Tag 'isn't it' আসবে."
    },
    {
      "question": "Each of the boys was given a prize, __________?",
      "options": [
        "wasn't he",
        "weren't they",
        "was he",
        "were they"
      ],
      "answer": "weren't they",
      "explanation": "વાક્યમાં ક્રિયાપદ 'was' (એકવચન) 'Each' મુજબ છે, પણ Tag માં 'boys' માટે 'they' સર્વનામ વપરાશે. 'they' સાથે 'were' આવે, તેથી 'weren't they' आएगा."
    },
    {
      "question": "All that glitters is not gold, __________?",
      "options": [
        "is it",
        "isn't it",
        "is all",
        "isn't all"
      ],
      "answer": "is it",
      "explanation": "આ એક કહેવत છે. 'not' શબ્દને કારણે વાક્ય નકાર ગણાય છે. 'All that glitters' માટે 'it' સર્વનામ વપરાય છે. તેથી, હકાર Tag 'is it' આવશે."
    }
  ],
  "test-23": [
    {
      "question": "Somebody has to take the responsibility, __________?",
      "options": [
        "hasn't they",
        "haven't they",
        "don't they",
        "doesn't he"
      ],
      "answer": "don't they",
      "explanation": "'Somebody' માટે 'they' સર્વનામ વપરાય છે. 'has to' સાદા વર્તમાનકાળની જેમ વર્તે છે. 'they' સાથે 'do' આવે. હકાર વાક્ય હોવાથી નકાર Tag 'don't they' આવશે."
    },
    {
      "question": "What he says is right, __________?",
      "options": [
        "is it",
        "isn't it",
        "is he",
        "isn't he"
      ],
      "answer": "isn't it",
      "explanation": "અહીં કર્તા 'What he says' (તે જે કહે છે તે) છે, જે એક વિચાર છે. તેના માટે 'it' સર્વનામ વપરાય છે. તેથી, 'isn't it' आएगा."
    },
    {
      "question": "To err is human, __________?",
      "options": [
        "is it",
        "isn't it",
        "to err",
        "not to err"
      ],
      "answer": "isn't it",
      "explanation": "અહીં કર્તા 'To err' (ભૂલ કરવી) છે, જે એક ક્રિયા છે. તેના માટે 'it' સર્વનામ વપરાય છે. તેથી, 'isn't it' आएगा."
    },
    {
      "question": "The team of experts is arriving soon, __________?",
      "options": [
        "is it",
        "isn't it",
        "are they",
        "aren't they"
      ],
      "answer": "isn't it",
      "explanation": "અહીં 'The team' એક જૂથ તરીકે વર્તે છે, તેથી તે એકવચન છે. તેના માટે 'it' સર્વનામ વપરાય છે. તેથી, 'isn't it' आएगा."
    },
    {
      "question": "Neither of them was invited, __________?",
      "options": [
        "was he",
        "was they",
        "were they",
        "weren't they"
      ],
      "answer": "were they",
      "explanation": "'Neither' વાક્યને નકાર બનાવે છે. 'them' માટે 'they' સર્વનામ વપરાય છે. વાક્યમાં 'was' હોવા છતાં, Tag માં 'they' સાથે 'were' આવશે. તેથી, હકાર Tag 'were they' আসবে."
    },
    {
      "question": "The United States is a powerful country, __________?",
      "options": [
        "is it",
        "isn't it",
        "are they",
        "aren't they"
      ],
      "answer": "isn't it",
      "explanation": "'The United States' દેશનું નામ છે, જે એકવચન ગણાય છે. તેથી, 'it' સર્વનામ અને 'isn't it' Tag आएगा."
    },
    {
      "question": "The Arabian Nights is a famous book, __________?",
      "options": [
        "is it",
        "isn't it",
        "are they",
        "aren't they"
      ],
      "answer": "isn't it",
      "explanation": "'The Arabian Nights' પુસ્તકનું નામ છે, જે એકવચન ગણાય છે. તેથી, 'it' સર્વનામ અને 'isn't it' Tag आएगा."
    },
    {
      "question": "You think you are very smart, __________?",
      "options": [
        "do you",
        "don't you",
        "are you",
        "aren't you"
      ],
      "answer": "aren't you",
      "explanation": "જ્યારે વાક્યમાં બે કર્તા હોય, ત્યારે Tag બીજા કર્તાના વાક્ય પરથી બને છે. અહીં 'you are very smart' પરથી 'aren't you' બનશે."
    },
    {
      "question": "He never said he would come, __________?",
      "options": [
        "did he",
        "didn't he",
        "would he",
        "wouldn't he"
      ],
      "answer": "did he",
      "explanation": "'never' મુખ્ય વાક્ય ('He never said') ને નકાર બનાવે છે. Tag મુખ્ય વાક્ય પરથી બનશે, ગૌણ વાક્ય પરથી નહીં. તેથી 'did he' આવશે."
    },
    {
      "question": "A barking dog seldom bites, __________?",
      "options": [
        "does it",
        "doesn't it",
        "is it",
        "isn't it"
      ],
      "answer": "does it",
      "explanation": "'seldom' વાક્યને નકાર બનાવે છે. કર્તા 'A barking dog' માટે 'it' સર્વનામ વપરાય છે. તેથી હકાર Tag 'does it' आएगा."
    }
  ],
  "test-24": [
    {
      "question": "He has few chances of winning, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "has he",
      "explanation": "'few' (a વગર) નકારાત્મક અર્થ ('નહિવત્') દર્શાવે છે. તેથી Question Tag હકાર આવશે. અહીં 'has' સહાયકારક ક્રિયાપદ છે, તેથી 'has he' आएगा."
    },
    {
      "question": "I suppose we should leave, __________?",
      "options": [
        "don't I",
        "do I",
        "should we",
        "shouldn't we"
      ],
      "answer": "shouldn't we",
      "explanation": "'I suppose' વાળા વાક્યોમાં Tag ગૌણ વાક્ય ('we should leave') પરથી બને છે. તેથી, 'shouldn't we' आएगा."
    },
    {
      "question": "He believes they are wrong, __________?",
      "options": [
        "doesn't he",
        "does he",
        "aren't they",
        "are they"
      ],
      "answer": "aren't they",
      "explanation": "'He believes' વાળા વાક્યોમાં Tag ગૌણ વાક્ય ('they are wrong') પરથી બને છે. તેથી, 'aren't they' आएगा."
    },
    {
      "question": "How beautiful the garden is, __________?",
      "options": [
        "is it",
        "isn't it",
        "is the garden",
        "isn't the garden"
      ],
      "answer": "isn't it",
      "explanation": "ઉદ્ગાર વાક્યનો મૂળ ભાવ 'The garden is beautiful' છે. તેથી, નકાર Tag 'isn't it' आएगा."
    },
    {
      "question": "Either of the students is capable, __________?",
      "options": [
        "is he",
        "isn't he",
        "are they",
        "aren't they"
      ],
      "answer": "aren't they",
      "explanation": "વાક્યમાં ક્રિયાપદ 'is' (એકવચન) 'Either' મુજબ છે, પણ Tag માં 'students' માટે 'they' સર્વнаમ વપરાશે. 'they' સાથે 'are' આવે, તેથી 'aren't they' आएगा."
    },
    {
      "question": "The jury has taken a unanimous decision, __________?",
      "options": [
        "has it",
        "hasn't it",
        "have they",
        "haven't they"
      ],
      "answer": "hasn't it",
      "explanation": "જ્યારે 'jury' એક જૂથ તરીકે સર્વસંમતિથી નિર્ણય લે, ત્યારે તે એકવચન ગણાય છે. તેથી Tag 'hasn't it' આવશે."
    },
    {
      "question": "The mob has killed the policeman, __________?",
      "options": [
        "hasn't it",
        "haven't they",
        "has it",
        "have they"
      ],
      "answer": "hasn't it",
      "explanation": "'Mob' (ટોળું) અહીં એક જૂથ તરીકે કામ કરે છે, તેથી તે એકવચન ગણાય છે. તેથી Tag 'hasn't it' આવશે. (જોકે, કેટલાક કિસ્સામાં 'haven't they' પણ વપરાય છે)."
    },
    {
      "question": "He along with his family is coming, __________?",
      "options": [
        "is he",
        "isn't he",
        "are they",
        "aren't they"
      ],
      "answer": "isn't he",
      "explanation": "'along with' થી જોડાયેલા વાક્યમાં ક્રિયાપદ અને Tag પહેલા કર્તા ('He') મુજબ આવે છે. તેથી, 'isn't he' आएगा."
    },
    {
      "question": "She is not the one who did it, __________?",
      "options": [
        "is she",
        "isn't she",
        "did she",
        "didn't she"
      ],
      "answer": "is she",
      "explanation": "મુખ્ય વાક્ય 'She is not the one' છે, જે નકાર છે. તેથી, હકાર Tag 'is she' आएगा."
    },
    {
      "question": "There is little hope of his recovery, __________?",
      "options": [
        "is there",
        "isn't there",
        "is it",
        "isn't it"
      ],
      "answer": "is there",
      "explanation": "'little' (a વગર) નકારાત્મક અર્થ ('નહિવત્') દર્શાવે છે. તેથી, 'There is' વાળા વાક્ય માટે હકાર Tag 'is there' आएगा."
    }
  ],
  "test-25": [
    {
      "question": "Your father is a principal, __________?",
      "options": [
        "is he",
        "isn't he",
        "is your father",
        "does he"
      ],
      "answer": "isn't he",
      "explanation": "હકાર વાક્ય છે. કર્તા 'Your father' માટે 'he' સર્વનામ વપરાય છે. તેથી Tag 'isn't he' आएगा."
    },
    {
      "question": "Let's take a break, __________?",
      "options": [
        "shall we",
        "will you",
        "do we",
        "let we"
      ],
      "answer": "shall we",
      "explanation": "'Let's' થી શરૂ થતી દરખાસ્ત માટે Question Tag હંમેશા 'shall we' હોય છે."
    },
    {
      "question": "The girl in blue is my sister, __________?",
      "options": [
        "is she",
        "isn't she",
        "is it",
        "isn't it"
      ],
      "answer": "isn't she",
      "explanation": "કર્તા 'The girl' છે, જેના માટે 'she' સર્વનામ વપરાય છે. હકાર વાક્ય હોવાથી Tag 'isn't she' आएगा."
    },
    {
      "question": "Neither of you helped me, __________?",
      "options": [
        "did you",
        "didn't you",
        "did he",
        "did they"
      ],
      "answer": "did you",
      "explanation": "'Neither' વાક્યને નકાર બનાવે છે. 'you' માટે 'you' જ સર્વનામ રહેશે. સાદા ભૂતકાળનું વાક્ય હોવાથી હકાર Tag 'did you' आएगा."
    },
    {
      "question": "His brother hardly does any work, __________?",
      "options": [
        "does he",
        "doesn't he",
        "is he",
        "isn't he"
      ],
      "answer": "does he",
      "explanation": "'hardly' શબ્દ વાક્યને નકાર બનાવે છે. અહીં કર્તા 'His brother' છે. તેથી હકાર Tag 'does he' आएगा."
    },
    {
      "question": "Everything that was said proved to be false, __________?",
      "options": [
        "wasn't it",
        "was it",
        "didn't it",
        "did it"
      ],
      "answer": "didn't it",
      "explanation": "આ જટિલ વાક્ય છે. મુખ્ય ક્રિયાપદ 'proved' છે, જે સાદા ભૂતકાળમાં છે. કર્તા 'Everything that was said' માટે 'it' વપરાશે. તેથી નકાર Tag 'didn't it' आएगा."
    },
    {
      "question": "The man with the wooden leg is a soldier, __________?",
      "options": [
        "is he",
        "isn't he",
        "is it",
        "isn't it"
      ],
      "answer": "isn't he",
      "explanation": "મુખ્ય કર્તા 'The man' છે, જેના માટે 'he' સર્વનામ વપરાય છે. તેથી, 'isn't he' आएगा."
    },
    {
      "question": "Mathematics is an interesting subject, __________?",
      "options": [
        "is it",
        "isn't it",
        "is that",
        "isn't that"
      ],
      "answer": "isn't it",
      "explanation": "'Mathematics' વિષયનું નામ છે, જે એકવચન ગણાય છે. તેથી Tag 'isn't it' আসবে."
    },
    {
      "question": "The news is not true, __________?",
      "options": [
        "is it",
        "isn't it",
        "are they",
        "aren't they"
      ],
      "answer": "is it",
      "explanation": "'News' શબ્દ એકવચન ગણાય છે. વાક્ય નકાર હોવાથી હકાર Tag 'is it' আসবে."
    },
    {
      "question": "I don't believe he has failed, __________?",
      "options": [
        "do I",
        "has he",
        "hasn't he",
        "don't I"
      ],
      "answer": "has he",
      "explanation": "જ્યારે મુખ્ય વાક્ય ('I don't believe') નકાર હોય, ત્યારે Tag હકાર બને છે અને તે ગૌણ વાક્ય ('he has failed') પરથી બને છે. તેથી, 'has he' आएगा."
    }
  ],
  "test-26": [
    {
      "question": "Somebody wanted a ticket, __________?",
      "options": [
        "did they",
        "didn't they",
        "did he",
        "didn't he"
      ],
      "answer": "didn't they",
      "explanation": "'Somebody' માટે 'they' સર્વનામ વપરાય છે. વાક્ય સાદા ભૂતકાળમાં છે, તેથી નકાર Tag 'didn't they' आएगा."
    },
    {
      "question": "What a lovely voice she has, __________?",
      "options": [
        "has she",
        "hasn't she",
        "does she",
        "doesn't she"
      ],
      "answer": "doesn't she",
      "explanation": "ઉદ્ગાર વાક્યનો મૂળ ભાવ 'She has a lovely voice' છે. અહીં 'has' મુખ્ય ક્રિયાપદ છે. તેથી, નકાર Tag 'doesn't she' আসবে."
    },
    {
      "question": "That he is a genius is known to all, __________?",
      "options": [
        "is it",
        "isn't it",
        "is he",
        "isn't he"
      ],
      "answer": "isn't it",
      "explanation": "અહીં કર્તા 'That he is a genius' (કે તે એક જીનિયસ છે) છે, જે એક હકીકત/વિચાર છે. તેના માટે 'it' સર્વનામ વપરાય છે. તેથી 'isn't it' आएगा."
    },
    {
      "question": "One of them must be wrong, __________?",
      "options": [
        "mustn't one",
        "mustn't they",
        "must they",
        "mustn't he"
      ],
      "answer": "mustn't they",
      "explanation": "અહીં 'One of them' માંથી 'them' મુખ્ય છે, જેના માટે 'they' સર્વનામ વપરાય છે. તેથી, 'mustn't they' आएगा."
    },
    {
      "question": "The crowd has gathered, __________?",
      "options": [
        "hasn't it",
        "haven't they",
        "has it",
        "have they"
      ],
      "answer": "hasn't it",
      "explanation": "'Crowd' (ટોળું) અહીં એક જૂથ તરીકે ગણાય છે, તેથી તે એકવચન છે. Tag 'hasn't it' आएगा."
    },
    {
      "question": "He, not his parents, is responsible, __________?",
      "options": [
        "is he",
        "isn't he",
        "are they",
        "aren't they"
      ],
      "answer": "isn't he",
      "explanation": "'not' પછી આવતા કર્તાને બદલે, પહેલા આવતા કર્તા ('He') મુજબ Tag બને છે. તેથી, 'isn't he' आएगा."
    },
    {
      "question": "The boy who won the prize was very happy, __________?",
      "options": [
        "was he",
        "wasn't he",
        "did he",
        "didn't he"
      ],
      "answer": "wasn't he",
      "explanation": "મુખ્ય વાક્ય 'The boy was very happy' છે. કર્તા 'The boy' માટે 'he' સર્વનામ વપરાય છે. તેથી, 'wasn't he' आएगा."
    },
    {
      "question": "It's no good, __________?",
      "options": [
        "is it",
        "isn't it",
        "is that",
        "isn't that"
      ],
      "answer": "is it",
      "explanation": "'no' શબ્દ વાક્યને નકાર બનાવે છે. તેથી, હકાર Tag 'is it' आएगा."
    },
    {
      "question": "She would scarcely talk to anyone, __________?",
      "options": [
        "would she",
        "wouldn't she",
        "did she",
        "didn't she"
      ],
      "answer": "would she",
      "explanation": "'scarcely' (ભાગ્યે જ) શબ્દ વાક્યને નકાર બનાવે છે, તેથી Question Tag હકાર 'would she' आएगा."
    },
    {
      "question": "The Ganges is a holy river, __________?",
      "options": [
        "is it",
        "isn't it",
        "is she",
        "isn't she"
      ],
      "answer": "isn't it",
      "explanation": "નદીઓના નામ માટે 'it' સર્વнаમ વપરાય છે (ભારતમાં નદીઓને 'she' તરીકે પણ સંબોધાય છે, પણ વ્યાકરણની દૃષ્ટિએ 'it' વધુ યોગ્ય છે). તેથી 'isn't it' आएगा."
    }
  ],
  "test-27": [
    {
      "question": "Either you or he is mistaken, __________?",
      "options": [
        "are you",
        "is he",
        "aren't you",
        "isn't he"
      ],
      "answer": "isn't he",
      "explanation": "'Either...or' વાળા વાક્યમાં ક્રિયાપદ અને Tag નજીકના કર્તા ('he') મુજબ આવે છે. તેથી, 'isn't he' आएगा."
    },
    {
      "question": "Neither you nor I am responsible, __________?",
      "options": [
        "am I",
        "aren't I",
        "are you",
        "am I not"
      ],
      "answer": "am I",
      "explanation": "'Neither...nor' વાક્યને નકાર બનાવે છે. ક્રિયાપદ અને Tag નજીકના કર્તા ('I') મુજબ આવે છે. તેથી હકાર Tag 'am I' आएगा."
    },
    {
      "question": "He has a little hope, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "hasn't he",
      "explanation": "'a little' હકારાત્મક અર્થ ('થોડીક') દર્શાવે છે. અહીં 'has' ને സഹായക ગણીને 'hasn't he' Tag બનાવી શકાય."
    },
    {
      "question": "I am what I am, __________?",
      "options": [
        "am I",
        "aren't I",
        "am not I",
        "don't I"
      ],
      "answer": "aren't I",
      "explanation": "મુખ્ય વાક્ય 'I am' છે. તેનો હકાર Tag 'aren't I' બને છે."
    },
    {
      "question": "How cold the night is, __________?",
      "options": [
        "is it",
        "isn't it",
        "is the night",
        "isn't the night"
      ],
      "answer": "isn't it",
      "explanation": "ઉદ્ગાર વાક્યનો મૂળ ભાવ 'The night is cold' છે. તેથી, નકાર Tag 'isn't it' आएगा."
    },
    {
      "question": "Most of us agree on this, __________?",
      "options": [
        "do we",
        "don't we",
        "do us",
        "don't us"
      ],
      "answer": "don't we",
      "explanation": "'Most of us' માટે સર્વનામ 'we' વપરાય છે. વાક્ય સાદા વર્તમાનકાળમાં હોવાથી નકાર Tag 'don't we' आएगा."
    },
    {
      "question": "One of the girls can sing, __________?",
      "options": [
        "can't she",
        "can't they",
        "can she",
        "can they"
      ],
      "answer": "can't they",
      "explanation": "વાક્યમાં ક્રિયાપદ 'can' 'One' મુજબ છે, પણ Tag માં 'girls' માટે 'they' સર્વનામ વપરાશે. તેથી, નકાર Tag 'can't they' आएगा."
    },
    {
      "question": "The police were patrolling the area, __________?",
      "options": [
        "were they",
        "weren't they",
        "was it",
        "wasn't it"
      ],
      "answer": "weren't they",
      "explanation": "'Police' શબ્દ હંમેશા બહુવચન ગણાય છે. તેથી સર્વનામ 'they' વપરાશે. હકાર વાક્ય માટે નકાર Tag 'weren't they' आएगा."
    },
    {
      "question": "The captain as well as the players is tired, __________?",
      "options": [
        "is he",
        "isn't he",
        "are they",
        "aren't they"
      ],
      "answer": "isn't he",
      "explanation": "'as well as' થી જોડાયેલા વાક્યોમાં ક્રિયાપદ અને Tag પહેલા કર્તા ('The captain') મુજબ આવે છે. તેથી, 'isn't he' आएगा."
    },
    {
      "question": "It's time we left, __________?",
      "options": [
        "is it",
        "isn't it",
        "did we",
        "didn't we"
      ],
      "answer": "isn't it",
      "explanation": "'It's time' વાળી રચનામાં Tag મુખ્ય વાક્ય ('It's time') પરથી બને છે, ગૌણ વાક્ય ('we left') પરથી નહીં. તેથી, 'isn't it' आएगा."
    }
  ],
  "test-28": [
    {
      "question": "To forgive is divine, __________?",
      "options": [
        "is it",
        "isn't it",
        "to forgive",
        "is to forgive"
      ],
      "answer": "isn't it",
      "explanation": "અહીં કર્તા 'To forgive' (માફ કરવું) છે, જે એક ક્રિયા/વિચાર છે. તેના માટે 'it' સર્વનામ વપરાય છે. તેથી, 'isn't it' आएगा."
    },
    {
      "question": "The writer of these poems is unknown, __________?",
      "options": [
        "is he",
        "isn't he",
        "is it",
        "isn't it"
      ],
      "answer": "isn't he",
      "explanation": "મુખ્ય કર્તા 'The writer' છે, જેના માટે 'he' અથવા 'she' વપરાય. વિકલ્પોમાં 'he' છે. તેથી, 'isn't he' आएगा."
    },
    {
      "question": "The jury has not reached a consensus, __________?",
      "options": [
        "has it",
        "have they",
        "hasn't it",
        "haven't they"
      ],
      "answer": "have they",
      "explanation": "જ્યારે 'jury' માં મતભેદ હોય અથવા સર્વસંમતિ ન હોય, ત્યારે તેના સભ્યો અલગ-અલગ ગણાય છે અને 'they' સર્વનામ વપરાય છે. તેથી, 'have they' आएगा."
    },
    {
      "question": "It seems that you are right, __________?",
      "options": [
        "doesn't it",
        "does it",
        "aren't you",
        "are you"
      ],
      "answer": "aren't you",
      "explanation": "'It seems that' વાળા વાક્યોમાં Tag ગૌણ વાક્ય ('you are right') પરથી બને છે. તેથી, 'aren't you' आएगा."
    },
    {
      "question": "I don't suppose anyone will volunteer, __________?",
      "options": [
        "do I",
        "don't I",
        "will they",
        "won't they"
      ],
      "answer": "will they",
      "explanation": "જ્યારે મુખ્ય વાક્ય ('I don't suppose') નકાર હોય, ત્યારે Tag હકાર બને છે અને તે ગૌણ વાક્ય ('anyone will volunteer') પરથી બને છે. 'anyone' માટે 'they' વપરાય છે. તેથી, 'will they' आएगा."
    },
    {
      "question": "Not all of them can be trusted, __________?",
      "options": [
        "can they",
        "can't they",
        "can all",
        "can't all"
      ],
      "answer": "can they",
      "explanation": "'Not all' વાક્યને આંશિક નકાર બનાવે છે, પણ Tag સમગ્ર જૂથ માટે હકાર બને છે. તેથી, 'can they' आएगा."
    },
    {
      "question": "He's having a bath, __________?",
      "options": [
        "is he",
        "isn't he",
        "has he",
        "hasn't he"
      ],
      "answer": "isn't he",
      "explanation": "અહીં 'He's having' એ ચાલુ વર્તમાનકાળ ('He is having') છે. તેથી, 'isn't he' Tag आएगा."
    },
    {
      "question": "Let us have a look, __________?",
      "options": [
        "will you",
        "shall we",
        "do we",
        "have we"
      ],
      "answer": "will you",
      "explanation": "જ્યારે 'Let us' નો અર્થ 'allow us' (અમને પરવાનગી આપો) થાય, ત્યારે Tag 'will you' આવે છે."
    },
    {
      "question": "The Three Musketeers was written by Dumas, __________?",
      "options": [
        "was it",
        "wasn't it",
        "were they",
        "weren't they"
      ],
      "answer": "wasn't it",
      "explanation": "'The Three Musketeers' એ પુસ્તકનું નામ છે, જે એકવચન ગણાય છે. તેથી, Tag 'wasn't it' आएगा."
    },
    {
      "question": "My glasses are missing, __________?",
      "options": [
        "is it",
        "isn't it",
        "are they",
        "aren't they"
      ],
      "answer": "aren't they",
      "explanation": "'Glasses', 'trousers', 'scissors' જેવા શબ્દો હંમેશા બહુવચન ગણાય છે. તેથી 'they' સર્વнаમ અને 'aren't they' Tag आएगा."
    }
  ],
  "test-29": [
    {
      "question": "What is needed is a good plan, __________?",
      "options": [
        "is it",
        "isn't it",
        "is what",
        "isn't what"
      ],
      "answer": "isn't it",
      "explanation": "અહીં કર્તા 'What is needed' (જે જરૂરી છે તે) છે, જે એક વિચાર છે. તેના માટે 'it' સર્વનામ વપરાય છે. તેથી, 'isn't it' आएगा."
    },
    {
      "question": "The quality of these apples is not good, __________?",
      "options": [
        "is it",
        "isn't it",
        "are they",
        "aren't they"
      ],
      "answer": "is it",
      "explanation": "મુખ્ય કર્તા 'The quality' (ગુણવત્તા) છે, જે એકવચન છે. વાક્ય નકાર હોવાથી હકાર Tag 'is it' আসবে."
    },
    {
      "question": "Neither his friends nor he is to blame, __________?",
      "options": [
        "is he",
        "isn't he",
        "are they",
        "aren't they"
      ],
      "answer": "is he",
      "explanation": "'Neither...nor' વાક્યને નકાર બનાવે છે. ક્રિયાપદ અને Tag નજીકના કર્તા ('he') મુજબ આવે છે. તેથી હકાર Tag 'is he' आएगा."
    },
    {
      "question": "It is believed that he is innocent, __________?",
      "options": [
        "is it",
        "isn't it",
        "is he",
        "isn't he"
      ],
      "answer": "isn't it",
      "explanation": "આવા 'Passive with reporting verb' વાક્યમાં Tag મુખ્ય વાક્ય ('It is believed') પરથી બને છે. તેથી, 'isn't it' आएगा."
    },
    {
      "question": "He is said to be a millionaire, __________?",
      "options": [
        "is he",
        "isn't he",
        "is it",
        "isn't it"
      ],
      "answer": "isn't he",
      "explanation": "આ પણ 'Passive with reporting verb' નું ઉદાહરણ છે. અહીં Tag મુખ્ય કર્તા 'He' પરથી બને છે. તેથી, 'isn't he' आएगा."
    },
    {
      "question": "How tall he is, __________?",
      "options": [
        "is he",
        "isn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "isn't he",
      "explanation": "ઉદ્ગાર વાક્યનો મૂળ ભાવ 'He is very tall' છે. તેથી, નકાર Tag 'isn't he' आएगा."
    },
    {
      "question": "Somebody has stolen his wallet, __________?",
      "options": [
        "hasn't he",
        "haven't they",
        "has someone",
        "hasn't someone"
      ],
      "answer": "haven't they",
      "explanation": "'Somebody' માટે 'they' સર્વનામ વપરાય છે. 'they' સાથે 'have' આવે છે. વાક્ય હકાર હોવાથી નકાર Tag 'haven't they' আসবে."
    },
    {
      "question": "Your advice won't make any difference, __________?",
      "options": [
        "will it",
        "won't it",
        "will you",
        "won't you"
      ],
      "answer": "will it",
      "explanation": "વાક્ય નકાર ('won't') છે. કર્તા 'Your advice' માટે 'it' સર્વнаમ વપરાય છે. તેથી હકાર Tag 'will it' आएगा."
    },
    {
      "question": "Let's assume that he agrees, __________?",
      "options": [
        "shall we",
        "will he",
        "do we",
        "don't we"
      ],
      "answer": "shall we",
      "explanation": "'Let's assume' એ એક દરખાસ્ત છે. 'Let's' થી શરૂ થતા વાક્યો માટે Tag 'shall we' આવે છે."
    },
    {
      "question": "This book is not very interesting, __________?",
      "options": [
        "is it",
        "isn't it",
        "is this",
        "isn't this"
      ],
      "answer": "is it",
      "explanation": "વાક્ય નકાર છે. 'This book' માટે 'it' સર્વનામ વપરાય છે. તેથી હકાર Tag 'is it' आएगा."
    }
  ],
  "test-30": [
    {
      "question": "The committee has decided to postpone the meeting, __________?",
      "options": [
        "has it",
        "hasn't it",
        "have they",
        "haven't they"
      ],
      "answer": "hasn't it",
      "explanation": "જ્યારે 'committee' એક જૂથ તરીકે સામૂહિક નિર્ણય લે, ત્યારે તે એકવચન ગણાય છે. તેથી Tag 'hasn't it' আসবে."
    },
    {
      "question": "The committee are arguing among themselves, __________?",
      "options": [
        "is it",
        "isn't it",
        "are they",
        "aren't they"
      ],
      "answer": "aren't they",
      "explanation": "જ્યારે 'committee' ના સભ્યોમાં મતભેદ હોય, ત્યારે તે બહુવચન ગણાય છે અને 'they' સર્વનામ વપરાય છે. તેથી, 'aren't they' आएगा."
    },
    {
      "question": "Neither food nor water was available, __________?",
      "options": [
        "was it",
        "wasn't it",
        "were they",
        "weren't they"
      ],
      "answer": "was it",
      "explanation": "'Neither...nor' વાક્યને નકાર બનાવે છે. જયારે બે એકવચન કર્તા જોડાય, ત્યારે ક્રિયાપદ અને Tag એકવચન રહે છે. 'food nor water' માટે 'it' ગણી શકાય. તેથી, હકાર Tag 'was it' আসবে."
    },
    {
      "question": "Winning the lottery is a dream for many, __________?",
      "options": [
        "is it",
        "isn't it",
        "is that",
        "isn't that"
      ],
      "answer": "isn't it",
      "explanation": "અહીં કર્તા 'Winning the lottery' (લોટરી જીતવી) છે, જે એક ક્રિયા છે. તેના માટે 'it' સર્વનામ વપરાય છે. તેથી, 'isn't it' आएगा."
    },
    {
      "question": "It's unlikely that he will succeed, __________?",
      "options": [
        "is it",
        "isn't it",
        "will he",
        "won't he"
      ],
      "answer": "is it",
      "explanation": "'unlikely' શબ્દ વાક્યને નકારાત્મક ભાવ આપે છે. Tag મુખ્ય વાક્ય ('It is unlikely') પરથી બને છે. તેથી, હકાર Tag 'is it' आएगा."
    },
    {
      "question": "She's got to go now, __________?",
      "options": [
        "hasn't she",
        "doesn't she",
        "has she",
        "does she"
      ],
      "answer": "hasn't she",
      "explanation": "'has got to' એ 'must' જેવો ભાવ દર્શાવે છે. અહીં 'has' સહાયકારક ક્રિયાપદ તરીકે ગણાય છે. તેથી, 'hasn't she' आएगा."
    },
    {
      "question": "He has his hair cut once a month, __________?",
      "options": [
        "has he",
        "hasn't he",
        "does he",
        "doesn't he"
      ],
      "answer": "doesn't he",
      "explanation": "'has his hair cut' (વાળ કપાવે છે) એ 'causative verb' રચના છે, જે સાદા વર્તમાનકાળમાં છે. તેથી, 'doesn't he' आएगा."
    },
    {
      "question": "One of the boys has broken the window, __________?",
      "options": [
        "hasn't he",
        "haven't they",
        "has he",
        "have they"
      ],
      "answer": "hasn't he",
      "explanation": "આ પ્રકારના વાક્યમાં Tag કર્તા 'One' મુજબ બને છે, 'boys' મુજબ નહીં. તેથી, એકવચન Tag 'hasn't he' আসবে."
    },
    {
      "question": "Your car is bigger than mine, __________?",
      "options": [
        "is it",
        "isn't it",
        "is yours",
        "isn't yours"
      ],
      "answer": "isn't it",
      "explanation": "કર્તા 'Your car' માટે 'it' સર્વનામ વપરાય છે. હકાર વાક્ય માટે નકાર Tag 'isn't it' आएगा."
    },
    {
      "question": "I don't think anyone saw us, __________?",
      "options": [
        "do I",
        "don't I",
        "did they",
        "didn't they"
      ],
      "answer": "did they",
      "explanation": "મુખ્ય વાક્ય ('I don't think') નકાર છે, તેથી Tag હકાર આવશે અને તે ગૌણ વાક્ય ('anyone saw us') પરથી બનશે. 'anyone' માટે 'they' અને 'saw' (ભૂતકાળ) માટે 'did' વપરાશે. તેથી 'did they' आएगा."
    }
  ]
};
