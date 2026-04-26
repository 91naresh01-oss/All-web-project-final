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
      "explanation": "वाक्य हकार है, इसलिए Question Tag नकार यहवशे. 'is' का नकार रूप 'isn't' होता है."
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
      "explanation": "वाक्य नकार है, इसलिए Question Tag हकार यहवशे. 'are not' का हकार रूप 'are' होता है."
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
      "explanation": "वाक्य सामान्य वर्तमान काल में है और क्रिया (Verb) 'plays' है, इसलिए सहायकारक क्रिया (Verb) 'does' प्रयोग होगा. वाक्य हकार होने के कारण Tag नकार 'doesn't he' यहवशे."
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
      "explanation": "वाक्य नकार है और सहायकारक क्रिया (Verb) 'do' है, इसलिए Question Tag हकार 'do you' यहवशे."
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
      "explanation": "वाक्य हकार है और भूतकाल में है, इसलिए Question Tag नकार 'wasn't it' यहवशे."
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
      "explanation": "वाक्य नकार है, इसलिए Question Tag हकार 'were we' यहवशे."
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
      "explanation": "वाक्य हकार है और सहायकारक क्रिया (Verb) 'has' है, इसलिए Question Tag नकार 'hasn't she' यहवशे."
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
      "explanation": "वाक्य नकार है ('haven't'), इसलिए Question Tag हकार 'have they' यहवशे."
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
      "explanation": "वाक्य सामान्य भूतकाल में है ('went'), इसलिए सहायकारक क्रिया (Verb) 'did' प्रयोग होगा. वाक्य हकार होने के कारण Tag नकार 'didn't he' यहवशे."
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
      "explanation": "वाक्य नकार है ('didn't'), इसलिए Question Tag हकार 'did you' यहवशे."
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
      "explanation": "वाक्य हकार है ('It is'), इसलिए Question Tag नकार 'isn't it' यहवशे."
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
      "explanation": "वाक्य नकार है ('are not'), इसलिए Question Tag हकार 'are they' यहवशे."
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
      "explanation": "सामान्य वर्तमान काल का हकार वाक्य है, इसलिए सहायकारक क्रिया (Verb) 'does' के साथ नकार Tag 'doesn't she' बनशे."
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
      "explanation": "वाक्य नकार है ('doesn't'), इसलिए Question Tag हकार 'does he' यहवशे."
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
      "explanation": "वाक्य हकार है ('was'), इसलिए Question Tag नकार 'wasn't it' यहवशे."
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
      "explanation": "वाक्य नकार है ('were not'), इसलिए Question Tag हकार 'were you' यहवशे."
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
      "explanation": "वाक्य हकार है और सहायकारक क्रिया (Verb) 'have' है, इसलिए Tag नकार 'haven't we' बनशे."
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
      "explanation": "'never' शब्द वाक्य को नकार बनाता है, इसलिए Question Tag हकार 'has he' यहवशे."
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
      "explanation": "वाक्य सामान्य भूतकाल में है ('enjoyed'), इसलिए सहायकारक क्रिया (Verb) 'did' के साथ नकार Tag 'didn't they' बनशे."
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
      "explanation": "वाक्य नकार है ('didn't'), इसलिए Question Tag हकार 'did she' यहवशे."
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
      "explanation": "वाक्य हकार है, इसलिए Question Tag नकार यहवशे. 'are' का नकार रूप 'aren't' होता है."
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
      "explanation": "वाक्य नकार है ('isn't'), इसलिए Question Tag हकार 'is it' यहवशे."
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
      "explanation": "वाक्य सामान्य वर्तमान काल में है और क्रिया (Verb) 'live' है, इसलिए सहायकारक क्रिया (Verb) 'do' प्रयोग होगा. वाक्य हकार होने के कारण Tag नकार 'don't they' यहवशे."
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
      "explanation": "वाक्य नकार है ('doesn't'), इसलिए Question Tag हकार 'does she' यहवशे."
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
      "explanation": "वाक्य हकार है ('was'), इसलिए Question Tag नकार 'wasn't he' यहवशे."
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
      "explanation": "वाक्य नकार है ('weren't'), इसलिए Question Tag हकार 'were they' यहवशे. 'The children' के लिए 'they' सर्वनाम प्रयोग होता है."
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
      "explanation": "वाक्य हकार है ('have'), इसलिए Question Tag नकार 'haven't you' यहवशे."
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
      "explanation": "वाक्य नकार है ('hasn't'), इसलिए Question Tag हकार 'has he' यहवशे."
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
      "explanation": "वाक्य सामान्य भूतकाल में है ('bought'), इसलिए सहायकारक क्रिया (Verb) 'did' के साथ नकार Tag 'didn't she' बनशे."
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
      "explanation": "वाक्य नकार है ('didn't'), इसलिए Question Tag हकार 'did they' यहवशे."
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
      "explanation": "हकार वाक्य के लिए नकार Tag प्रयोग होता है. 'are' का नकार 'aren't' होता है."
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
      "explanation": "नकार वाक्य के लिए हकार Tag प्रयोग होता है. 'This' के लिए 'it' सर्वनाम प्रयोग होता है."
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
      "explanation": "सामान्य वर्तमान काल के हकार वाक्य में 'he' के साथ 'does' आता है, इसलिए Tag 'doesn't he' बनशे."
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
      "explanation": "नकार वाक्य ('don't') के लिए हकार Tag 'do you' प्रयोग होता है."
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
      "explanation": "हकार वाक्य ('was') के लिए नकार Tag 'wasn't it' प्रयोग होता है. 'The movie' के लिए 'it' सर्वनाम प्रयोग होता है."
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
      "explanation": "नकार वाक्य ('weren't') के लिए हकार Tag 'were they' प्रयोग होता है."
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
      "explanation": "पूर्ण भूतकाल के हकार वाक्य ('had eaten') के लिए नकार Tag 'hadn't she' प्रयोग होता है."
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
      "explanation": "नकार वाक्य ('hadn't') के लिए हकार Tag 'had we' प्रयोग होता है."
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
      "explanation": "सामान्य भूतकाल के हकार वाक्य ('drank') के लिए 'did' प्रयोग होता, इसलिए Tag 'didn't it' बनशे."
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
      "explanation": "नकार वाक्य ('didn't') के लिए हकार Tag 'did he' प्रयोग होता है."
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
      "explanation": "यहाँ 'He's'  का अर्थ 'He is' है. वाक्य हकार होने के कारण Tag नकार 'isn't he' यहवशे."
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
      "explanation": "यहाँ 'They're not'  का अर्थ 'They are not' है. वाक्य नकार होने के कारण Tag हकार 'are they' यहवशे."
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
      "explanation": "सामान्य वर्तमान काल के हकार वाक्य ('runs') के लिए 'does'  का प्रयोग होता, इसलिए Tag 'doesn't she' यहवशे."
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
      "explanation": "नकार वाक्य ('don't') के लिए हकार Tag 'do we' प्रयोग होगा."
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
      "explanation": "हकार वाक्य ('was') के लिए नकार Tag 'wasn't it' यहवशे. 'That' के लिए 'it' सर्वनाम प्रयोग होता है."
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
      "explanation": "नकार वाक्य ('weren't') के लिए हकार Tag 'were they' प्रयोग होगा. 'The keys' (बहुवचन) के लिए 'they' प्रयोग होता है."
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
      "explanation": "'have got' वाला वाक्य में 'have' सहायकारक क्रिया (Verb) है. हकार वाक्य के लिए नकार Tag 'haven't you' यहवशे."
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
      "explanation": "नकार वाक्य ('has not') के लिए हकार Tag 'has she' प्रयोग होगा."
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
      "explanation": "सामान्य भूतकाल का हकार वाक्य ('told') होने के कारण, 'did' के साथ नकार Tag 'didn't he' बनशे."
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
      "explanation": "नकार वाक्य ('didn't') के लिए हकार Tag 'did you' प्रयोग होगा."
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
      "explanation": "Modal verb 'can' वाला हकार वाक्य के लिए नकार Tag 'can't he' प्रयोग होता है."
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
      "explanation": "Modal verb 'can't' वाला नकार वाक्य के लिए हकार Tag 'can they' प्रयोग होता है."
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
      "explanation": "'will' का नकार रूप 'will not' (या) टूंक में 'won't' होता है. हकार वाक्य के लिए नकार Tag प्रयोग होता है."
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
      "explanation": "'won't' (will not) वाला नकार वाक्य के लिए हकार Tag 'will she' प्रयोग होता है."
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
      "explanation": "Modal verb 'should' वाला हकार वाक्य के लिए नकार Tag 'shouldn't we' प्रयोग होता है."
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
      "explanation": "Modal verb 'shouldn't' वाला नकार वाक्य के लिए हकार Tag 'should he' प्रयोग होता है."
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
      "explanation": "Modal verb 'could' वाला हकार वाक्य के लिए नकार Tag 'couldn't it' प्रयोग होता है."
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
      "explanation": "Modal verb 'couldn't' वाला नकार वाक्य के लिए हकार Tag 'could you' प्रयोग होता है."
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
      "explanation": "Modal verb 'must' वाला हकार वाक्य के लिए नकार Tag 'mustn't they' प्रयोग होता है."
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
      "explanation": "Modal verb 'must not' वाला नकार वाक्य के लिए हकार Tag 'must we' प्रयोग होता है."
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
      "explanation": "यहाँ 'You're' यह 'You are' का संक्षिप्त रूप है. वाक्य हकार होने के कारण Tag नकार 'aren't you' यहवशे."
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
      "explanation": "वाक्य नकार ('wasn't') होने के कारण Tag हकार 'was it' यहवशे."
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
      "explanation": "सामान्य वर्तमान काल के हकार वाक्य ('eat') के लिए 'do' प्रयोग होता, इसलिए Tag 'don't they' यहवशे."
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
      "explanation": "'I am' वाला हकार वाक्य के लिए Question Tag 'aren't I' प्रयोग होता है. 'amn't I' असामान्य है."
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
      "explanation": "'I am not' वाला नकार वाक्य के लिए Question Tag 'am I' प्रयोग होता है."
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
      "explanation": "जब 'have/has' मुख्य क्रिया (Verb) (मालिकी दर्शाने) के रूप में प्रयोग होता, तब Tag 'do/does' के साथ बनता है. यहाँ वाक्य हकार होने के कारण 'doesn't she' यहवशे."
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
      "explanation": "जब 'had' मुख्य क्रिया (Verb) (अनुभव दर्शाने) के रूप में प्रयोग होता, तब Tag 'did' के साथ बनता है. यहाँ वाक्य हकार होने के कारण 'didn't they' यहवशे."
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
      "explanation": "'Let's' (Let us) से शुरू होने वाले दरखास्त सूचवता वाक्यों के लिए Question Tag हमेशा 'shall we' आता है."
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
      "explanation": "आज्ञार्थ वाक्य (Imperative sentence) के लिए 'will you' (या) 'won't you' Question Tag के रूप में प्रयोग होता है. 'will you' अधिक सामान्य है."
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
      "explanation": "नकार आज्ञार्थ वाक्य के लिए Question Tag हमेशा हकार 'will you' आता है."
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
      "explanation": "हकार वाक्य में 'will' के लिए नकार Tag 'won't he' आता है."
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
      "explanation": "नकार वाक्य में 'won't' (will not) के लिए हकार Tag 'will she' आता है."
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
      "explanation": "Modal 'would' वाला हकार वाक्य के लिए नकार Tag 'wouldn't you' आता है."
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
      "explanation": "Modal 'wouldn't' वाला नकार वाक्य के लिए हकार Tag 'would they' आता है."
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
      "explanation": "वाक्य हकार है. 'This' के लिए सर्वनाम 'it' प्रयोग होता है. इसलिए Tag 'isn't it' यहवशे."
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
      "explanation": "वाक्य नकार है. 'Those' के लिए सर्वनाम 'they' प्रयोग होता है. इसलिए Tag 'are they' यहवशे."
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
      "explanation": "'There is' से शुरू होने वाले हकार वाक्य के लिए Tag 'isn't there' आता है. यहाँ 'there' ही कर्ता (Subject) के रूप में रहता है."
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
      "explanation": "'There aren't' से शुरू होने वाले नकार वाक्य के लिए Tag 'are there' आता है."
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
      "explanation": "'has to' यह फरज दर्शाता है और वह सामान्य वर्तमान काल की जैसे वर्वह है. इसलिए सहायकारक क्रिया (Verb) 'does' के साथ नकार Tag 'doesn't he' बनशे."
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
      "explanation": "'had to' यह भूतकाल की फरज दर्शाता है और वह सामान्य भूतकाल की जैसे वर्वह है. इसलिए सहायकारक क्रिया (Verb) 'did' के साथ नकार Tag 'didn't they' बनशे."
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
      "explanation": "Someone, somebody, everyone, everybody, no one जैसे शब्दो के लिए Question Tag में 'they' सर्वनाम प्रयोग होता है. 'is' के साथ 'they' के लिए 'are' आता है, इसलिए 'aren't they' सही जवाब है."
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
      "explanation": "'Nobody' शब्द वाक्य को नकार बनाता है और उसके लिए 'they' सर्वनाम प्रयोग होता है. वाक्य सामान्य भूतकाल में होने के कारण हकार Tag 'did they' यहवशे."
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
      "explanation": "Something, nothing, anything, everything जैसे शब्दो के लिए Question Tag में 'it' सर्वनाम प्रयोग होता है. हकार वाक्य के लिए नकार Tag 'isn't it' यहवशे."
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
      "explanation": "'Nothing' शब्द वाक्य को नकार बनाता है और उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए हकार Tag 'was it' यहवशे."
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
      "explanation": "'Hardly', 'rarely', 'seldom', 'scarcely' जैसे शब्दो वाक्य को नकार अर्थ देता है, इसलिए Question Tag हकार 'does he' यहवशे."
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
      "explanation": "'Seldom' (शायद ही कभी) वाक्य को नकार बनाता है, इसलिए Question Tag हकार 'does she' यहवशे."
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
      "explanation": "'Little' और 'few' (a बिके) नकार अर्थ दर्शाता है. इसलिए Question Tag हकार 'have you' यहवशे."
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
      "explanation": "'A little' और 'a few' हकार अर्थ दर्शाता है (थोड़ाक). यहाँ 'has' मुख्य क्रिया (Verb) के रूप में गणी सकता, भी ब्रिटिश अंग्रेजी में 'hasn't he' भी स्वीकार्य है. हालांकि, 'doesn't he' भी सही माने. यहाँ 'has' को സഹായക गणी 'hasn't he' अधिक उचित है."
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
      "explanation": "आज्ञार्थ वाक्य (Imperative) के लिए Question Tag के रूप में 'will you' (या) 'won't you' प्रयोग होता है."
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
      "explanation": "जब 'Let us'  का अर्थ 'allow us' (अम को अनुमति यहपो) होता, तब Tag 'will you' आता है. 'Let's' (चालो) के लिए 'shall we' आता है."
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
      "explanation": "यहाँ 'd rather' यह 'would rather' का संक्षिप्त रूप है. इसलिए, Question Tag 'wouldn't she' यहवशे."
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
      "explanation": "यहाँ 'd better' यह 'had better' का संक्षिप्त रूप है. इसलिए, Question Tag 'hadn't he' यहवशे."
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
      "explanation": "'This' और 'That' के लिए Question Tag में 'it' सर्वनाम प्रयोग होता है. वाक्य हकार होने के कारण Tag नकार यहवशे."
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
      "explanation": "'These' और 'Those' के लिए Question Tag में 'they' सर्वनाम प्रयोग होता है. वाक्य हकार होने के कारण Tag नकार यहवशे."
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
      "explanation": "'Everybody' के लिए सर्वनाम 'they' प्रयोग होता है. 'they' के साथ 'were' आता है. वाक्य हकार ('was') होना फिर भी, 'they' को कारणे 'weren't' प्रयोग होगा."
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
      "explanation": "'No one' वाक्य को नकार बनाता है और उसके लिए 'they' सर्वनाम प्रयोग होता है. सामान्य भूतकाल का वाक्य होने के कारण 'did they' यहवशे."
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
      "explanation": "'Let's' से शुरू होती दरखास्त के लिए Question Tag हमेशा 'shall we' होता है."
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
      "explanation": "आज्ञार्थ वाक्य (Imperative) के लिए 'will you' (या) 'can you'  का प्रयोग Question Tag के रूप में होता है."
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
      "explanation": "जब 'has' मुख्य क्रिया (Verb) के रूप में (खावुं/पीवुं) प्रयोग होता, तब Tag 'do/does' के साथ बनता है. यहाँ हकार वाक्य होने के कारण 'doesn't he' यहवशे."
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
      "explanation": "'I am not' वाला नकार वाक्य के लिए Question Tag 'am I' आता है."
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
      "explanation": "यह एक विशिष्ट नियम है. 'I am' वाला हकार वाक्य के लिए Question Tag के रूप में 'aren't I' का प्रयोग होता है. 'amn't I' अंग्रेजी में प्रयुक्त नहीं."
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
      "explanation": "'Let's' (Let us) से शुरू होती दरखास्तो के लिए Question Tag हमेशा 'shall we' आता है."
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
      "explanation": "नकारात्मक आज्ञार्थ वाक्य (Negative Imperative) के लिए Question Tag हमेशा हकार 'will you' आता है."
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
      "explanation": "'There is/are' से शुरू होने वाले वाक्यों में Question Tag में भी 'there' का प्रयोग होता है. हकार वाक्य के लिए नकार Tag 'isn't there' आएगा."
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
      "explanation": "'no' शब्द को कारणे वाक्य नकार है. 'There were' वाला वाक्य में Tag हकार 'were there' यहवशे."
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
      "explanation": "Somebody, someone, everybody के लिए सर्वनाम 'they' प्रयोग होता है. 'they' के साथ 'have' आता है. वाक्य हकार होने के कारण नकार Tag 'haven't they' आएगा."
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
      "explanation": "'Nothing' शब्द वाक्य को नकार बनाता है और उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए, हकार Tag 'is it' यहवशे."
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
      "explanation": "जब 'has' मालिकी दर्शाने वाला मुख्य क्रिया (Verb) हो, तब सामान्य वर्तमान काल के नियम अनुसार 'does' का प्रयोग होता है. इसलिए, 'doesn't he' सही जवाब है. (ब्रिटिश अंग्रेजी में 'hasn't he' भी प्रयोग होता है, भी 'doesn't he' अधिक सामान्य है)."
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
      "explanation": "'used to' वाली रचना भूतकाल की आदत दर्शाता है, और उसके लिए Question Tag 'didn't' के साथ बनता है."
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
      "explanation": "'ought to' के लिए Question Tag में 'shouldn't' (या) 'oughtn't' का प्रयोग होता है. 'shouldn't' अधिक प्रचलित है."
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
      "explanation": "यहाँ 'd better' यह 'had better' का संक्षिप्त रूप है. वाक्य हकार होने के कारण Tag नकार 'hadn't he' यहवशे."
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
      "explanation": "यहाँ 'd rather not' यह 'would rather not' का रूप है. वाक्य नकार होने के कारण Tag हकार 'would you' यहवशे."
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
      "explanation": "'hardly' शब्द वाक्य को नकार बनाता है, इसलिए Question Tag हकार 'is he' यहवशे."
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
      "explanation": "'rarely' (शायद ही कभी) वाक्य को नकार बनाता है. सामान्य वर्तमान काल का वाक्य होने के कारण Tag हकार 'does she' यहवशे."
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
      "explanation": "'Few' (a बिके) नकारात्मक अर्थ ('लगभग कुछ नहीं') दर्शाता है. वाक्य भूतकाल में होने के कारण, हकार Tag 'did they' यहवशे."
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
      "explanation": "'A few' हकारात्मक अर्थ ('थोडाक') दर्शाता है. वाक्य भूतकाल में होने के कारण, नकार Tag 'didn't they' यहवशे."
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
      "explanation": "'Little' (a बिके) नकारात्मक अर्थ ('लगभग कुछ नहीं') दर्शाता है. वाक्य में 'has' सहायकारक क्रिया (Verb) है, इसलिए हकार Tag 'has it' आएगा."
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
      "explanation": "'A little' हकारात्मक अर्थ ('थोड़ाक') दर्शाता है. यहाँ 'have' को सहायकारक क्रिया (Verb) के रूप में गणी को नकार Tag 'haven't I' बनाकर सकता. (या 'don't I' भी स्वीकार्य है)."
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
      "explanation": "जब वाक्य का कर्ता (Subject) 'one' हो, तब Question Tag में भी 'one' का प्रयोग होता है."
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
      "explanation": "जब 'jury' जैसे समूहवाचक संज्ञा एक समूह के रूप में काम करे, तब वह एकवचन माना जाता है और 'it' सर्वनाम प्रयोग होता है. इसलिए 'hasn't it' यहवशे."
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
      "explanation": "हकार वाक्य में modal verb 'can' है, इसलिए Tag नकार 'can't you' यहवशे."
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
      "explanation": "नकार वाक्य में 'won't' (will not) है, इसलिए Tag हकार 'will they' यहवशे."
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
      "explanation": "'I am' वाला हकार वाक्य का Question Tag 'aren't I' होता है, जो एक अपवादरूप नियम है."
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
      "explanation": "आज्ञार्थ वाक्य (Imperative sentence) के लिए 'will you' (या) 'won't you' Tag के रूप में प्रयोग होता है."
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
      "explanation": "'There is' से शुरू होने वाले हकार वाक्य के लिए Tag 'isn't there' प्रयोग होता है."
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
      "explanation": "'Nobody' वाक्य को नकार बनाता है और उसके लिए 'they' सर्वनाम प्रयोग होता है. 'they' के साथ 'were' आता है, इसलिए हकार Tag 'were they' यहवशे."
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
      "explanation": "'Everything' के लिए 'it' सर्वनाम प्रयोग होता है. हकार वाक्य होने के कारण नकार Tag 'isn't it' यहवशे."
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
      "explanation": "'seldom' (शायद ही कभी) शब्द वाक्य को नकार बनाता है, इसलिए Question Tag हकार 'does he' यहवशे."
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
      "explanation": "जब 'need' modal verb के रूप में (not के साथ) प्रयोग होता, तब Tag में भी 'need' का प्रयोग होता है. वाक्य नकार होने के कारण Tag हकार 'need you' यहवशे."
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
      "explanation": "जब 'dare' modal verb के रूप में (not के साथ) प्रयोग होता, तब Tag में भी 'dare' का प्रयोग होता है. वाक्य नकार होने के कारण Tag हकार 'dare she' यहवशे."
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
      "explanation": "'I am not' वाला नकार वाक्य के लिए Question Tag 'am I' प्रयोग होता है."
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
      "explanation": "जब 'Let' के बाद 'me, him, her, them' आता है और वह अनुमति  मैंगवा का भाव दर्शावे, तब Question Tag 'will you' प्रयोग होता है."
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
      "explanation": "आज्ञार्थ वाक्य (Imperative sentence) जो विनती दर्शाता है, उसके लिए 'will you' (या) 'won't you' प्रयोग होता है."
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
      "explanation": "'There are' से शुरू होने वाले हकार वाक्य के लिए नकार Tag 'aren't there' प्रयोग होता है."
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
      "explanation": "'Everyone' के लिए सर्वनाम 'they' प्रयोग होता है और 'they' के साथ 'have' आता है. वाक्य हकार होने के कारण नकार Tag 'haven't they' यहवशे."
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
      "explanation": "'Nothing' शब्द वाक्य को नकार बनाता है और उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए, हकार Tag 'was it' यहवशे."
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
      "explanation": "'rarely' (शायद ही कभी) वाक्य को नकारात्मक अर्थ देता है, इसलिए Question Tag हकार 'does he' यहवशे."
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
      "explanation": "जब 'have' मुख्य क्रिया (Verb) (मालिकी दर्शाने) के रूप में प्रयोग होता, तब Tag 'do/does' के साथ बनता है. यहाँ 'they' के साथ 'do' प्रयोग होता, इसलिए नकार Tag 'don't they' यहवशे."
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
      "explanation": "जब 'need to' मुख्य क्रिया (Verb) के रूप में प्रयोग होता, तब Tag 'do/does' के साथ बनता है. इसलिए, 'don't you' सही जवाब है."
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
      "explanation": "जब 'team' जैसे समूहवाचक संज्ञा उसका सदस्यों का उल्लेख करे (एक साथ रम्या), तब 'they' सर्वनाम प्रयोग होता है. इसलिए 'didn't they' यहवशे."
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
      "explanation": "Modal verb 'might' वाला हकार वाक्य के लिए नकार Tag 'mightn't he' प्रयोग होता है."
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
      "explanation": "Modal verb 'may not' वाला नकार वाक्य के लिए हकार Tag 'may she' प्रयोग होता है."
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
      "explanation": "यह एक अपवाद है. 'I am' वाला हकार वाक्य का Question Tag 'aren't I' होता है."
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
      "explanation": "'Let's' (Let us) से शुरू होती दरखास्त के लिए Question Tag हमेशा 'shall we' आता है."
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
      "explanation": "'There were' से शुरू होने वाले हकार वाक्य के लिए नकार Tag 'weren't there' प्रयोग होता है."
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
      "explanation": "'Anybody', 'somebody', 'everyone' जैसे शब्दो के लिए 'they' सर्वनाम प्रयोग होता है. इसलिए नकार Tag 'can't they' यहवशे."
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
      "explanation": "'Nothing' वाक्य को नकार बनाता है और उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए हकार Tag 'has it' यहवशे."
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
      "explanation": "यहाँ 'has' मुख्य क्रिया (Verb) (खावुं) के रूप में प्रयोग होता है, जो सामान्य वर्तमान काल में है. इसलिए, Tag 'doesn't she' बनशे."
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
      "explanation": "'used to' वाली रचना के लिए Question Tag 'didn't' के साथ बनता है."
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
      "explanation": "'Police' शब्द हमेशा बहुवचन माना जाता है. इसलिए, सर्वनाम 'they' और सहायकारक क्रिया (Verb) 'have' प्रयोग होगा. Tag 'haven't they' बनशे."
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
      "explanation": "'ought to' के लिए Question Tag में 'should' (या) 'ought' का प्रयोग होता है. 'shouldn't you' अधिक प्रचलित है."
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
      "explanation": "जब 'dare' मुख्य क्रिया (Verb) के रूप में प्रयोग होता, तब Tag 'do/does' के साथ बनता है. इसलिए, 'don't they' यहवशे."
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
      "explanation": "जब 'need' मुख्य क्रिया (Verb) के रूप में प्रयोग होता, तब Tag 'do/does' के साथ बनता है. इसलिए, 'doesn't she' यहवशे."
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
      "explanation": "आज्ञार्थ वाक्य के लिए Question Tag के रूप में 'will you' (या) 'won't you' का प्रयोग होता है."
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
      "explanation": "'I am not' वाला नकार वाक्य के लिए Question Tag 'am I' आता है."
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
      "explanation": "'Everybody' के लिए सर्वनाम 'they' प्रयोग होता है. वाक्य सामान्य भूतकाल में होने के कारण नकार Tag 'didn't they' बनशे."
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
      "explanation": "'Nothing' वाक्य को नकार बनाता है और उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए हकार Tag 'can it' आएगा."
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
      "explanation": "'A little' हकारात्मक अर्थ ('थोड़ाक') दर्शाता है. यहाँ 'has' को सहायकारक क्रिया (Verb) के रूप में गणी को 'hasn't he' बनाया जा सकता है."
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
      "explanation": "'The fleet' (वहाणो का काफलो) एक ਸਮूहवाचक संज्ञा है जो एक समूह के रूप में वर्वह है, इसलिए वह एकवचन माना जाता है. Tag 'isn't it' यहवशे."
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
      "explanation": "यहाँ 'You'd completed' में 'd यह 'had' का संक्षिप्त रूप है क्योंकि वह पूर्ण क्रिया (Verb) (completed) के साथ है. इसलिए Tag 'hadn't you' यहवशे."
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
      "explanation": "'never' शब्द वाक्य को नकार बनाता है, इसलिए Question Tag हकार 'would she' यहवशे."
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
      "explanation": "Modal verb 'could' वाला हकार वाक्य के लिए नकार Tag 'couldn't he' यहवशे."
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
      "explanation": "Modal verb 'must' वाला हकार वाक्य के लिए नकार Tag 'mustn't they' यहवशे."
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
      "explanation": "'I am' से शुरू होने वाले हकार वाक्य के लिए अपवादरूपे 'aren't I' का प्रयोग होता है."
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
      "explanation": "जब 'Let' के बाद 'me, him, her' आता है और वह अनुमति  मैंगवा का भाव दर्शावे, तब Tag 'will you' प्रयोग होता है. (कुछवार 'may I' भी प्रयोग होता है)."
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
      "explanation": "'no' शब्द वाक्य को नकार बनाता है. 'There is' वाला वाक्य में Tag हकार 'is there' यहवशे."
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
      "explanation": "जब वाक्य का कर्ता (Subject) 'one' हो, तब Tag में भी 'one' का प्रयोग होता है. वाक्य नकार होने के कारण Tag हकार 'can one' आएगा."
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
      "explanation": "'Audience' जैसे समूहवाचक संज्ञा जब उसका सदस्यों का उल्लेख करे, तब वह बहुवचन माना जाता है. इसलिए 'weren't they' यहवशे."
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
      "explanation": "'used to' वाली रचना भूतकाल की आदत बतावे है, और उसका Question Tag 'didn't' के साथ बनता है."
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
      "explanation": "'Few' (a बिके) नकारात्मक अर्थ ('लगभग कुछ नहीं') दर्शाता है. इसलिए, Question Tag हकार 'have they' यहवशे."
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
      "explanation": "यहाँ 'has' मुख्य क्रिया (Verb) के रूप में नहीं, भी 'has something done' (कुछ कराववुं) रचना का भाग है. यह सामान्य वर्तमान काल में है, इसलिए Tag 'doesn't he' बनशे."
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
      "explanation": "हकार वाक्य है और क्रिया (Verb) 'is' है. 'The sun' के लिए 'it' सर्वनाम प्रयोग होता है, इसलिए Tag 'isn't it' यहवशे."
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
      "explanation": "यहाँ 'need' मुख्य क्रिया (Verb) के रूप में प्रयोग होता है. वाक्य सामान्य वर्तमान काल में होने के कारण Tag 'don't I' बनशे."
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
      "explanation": "यहाँ 'need' modal verb के रूप में प्रयोग होता है (not के साथ). इसलिए Tag में भी 'need' का प्रयोग होगा. वाक्य नकार होने के कारण Tag हकार 'need you' यहवशे."
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
      "explanation": "'Let's' से शुरू होती दरखास्तो के लिए Question Tag हमेशा 'shall we' आता है."
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
      "explanation": "'Somebody' के लिए सर्वनाम 'they' प्रयोग होता है. वाक्य सामान्य भूतकाल में होने के कारण, नकार Tag 'didn't they' यहवशे."
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
      "explanation": "'Nothing' वाक्य को नकार बनाता है और उसके लिए 'it' सर्वनाम प्रयोग होता है. वाक्य सामान्य वर्तमान काल में ('seems') होने के कारण, हकार Tag 'does it' आएगा."
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
      "explanation": "यहाँ 'd rather' यह 'would rather' का संक्षिप्त रूप है. इसलिए, Question Tag 'wouldn't she' यहवशे."
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
      "explanation": "वाक्य नकार ('won't') है. 'This' के लिए सर्वनाम 'it' प्रयोग होता है. इसलिए हकार Tag 'will it' आएगा."
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
      "explanation": "यह एक आज्ञार्थ वाक्य (चेतावनी) है, जोके के लिए Question Tag 'will you' प्रयोग होता है."
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
      "explanation": "वाक्य सामान्य वर्तमान काल में है ('shines'). 'The moon' के लिए 'it' सर्वनाम प्रयोग होता है. हकार वाक्य के लिए नकार Tag 'doesn't it' यहवशे."
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
      "explanation": "'seldom' (शायद ही कभी) शब्द वाक्य को नकार बनाता है, इसलिए Question Tag हकार 'is he' यहवशे."
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
      "explanation": "हकार वाक्य है. 'My father' के लिए 'he' सर्वनाम प्रयोग होता है. इसलिए Tag 'isn't he' आएगा."
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
      "explanation": "यहाँ 'team members' (सदस्यों) बहुवचन में है, इसलिए 'they' सर्वनाम प्रयोग होगा. वाक्य नकार होने के कारण हकार Tag 'have they' आएगा."
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
      "explanation": "जब वाक्य का कर्ता (Subject) 'one' हो, तब Tag में भी 'one' का प्रयोग होता है. वाक्य नकार होने के कारण Tag हकार यहवशे."
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
      "explanation": "'All of us' के लिए सर्वनाम 'we' प्रयोग होता है. हकार वाक्य ('can') के लिए नकार Tag 'can't we' আসবে."
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
      "explanation": "'None' शब्द वाक्य को नकार बनाता है. 'them' के लिए 'they' सर्वनाम प्रयोग होता है. सामान्य भूतकाल का वाक्य होने के कारण हकार Tag 'did they' আসবে."
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
      "explanation": "यहाँ 'She's been' यह 'She has been' का संक्षिप्त रूप है (अपूर्ण पूर्ण वर्तमान काल). इसलिए, नकार Tag 'hasn't she' यहवशे."
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
      "explanation": "नकारात्मक आज्ञार्थ वाक्य के लिए Question Tag हमेशा 'will you' आता है."
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
      "explanation": "उद्गार वाक्य (Exclamatory sentence) के लिए, वाक्यके भाव और कर्ता (Subject) अनुसार Tag बनता है. यहाँ 'The painting is beautiful'  का भाव है, इसलिए 'isn't it' यहवशे."
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
      "explanation": "यहाँ 'He's' यह 'He has' का संक्षिप्त रूप है (पूर्ण वर्तमान काल). वाक्य हकार होने के कारण नकार Tag 'hasn't he' यहवशे."
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
      "explanation": "जब वाक्य 'I think', 'I believe', 'He says' से शुरू होता, तब Tag मुख्य वाक्य (he is right) परसे बनता है, 'I think' परसे नहीं. इसलिए, 'isn't he' यहवशे."
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
      "explanation": "जब मुख्य वाक्य ('She doesn't think') नकार हो, तब Tag हकार बनता है, और वह गौण वाक्य ('you are correct') परसे बनता है. इसलिए 'are you' यहवशे."
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
      "explanation": "वाक्य नकार ('doesn't') है. कर्ता (Subject) 'The climate' के लिए 'it' सर्वनाम प्रयोग होता है. इसलिए हकार Tag 'does it' यहवशे."
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
      "explanation": "'Let's' से शुरू होती दरखास्त के लिए Question Tag हमेशा 'shall we' होता है."
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
      "explanation": "जब आज्ञार्थ वाक्य में कुछ ओफर किया जाता है, तब 'will you' (या) 'won't you' प्रयोग होता है. 'will you' अधिक सामान्य है."
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
      "explanation": "'Somebody' के लिए 'they' सर्वनाम प्रयोग होता. 'has to' सामान्य वर्तमान काल की जैसे वर्वह है. 'they' के साथ 'do' आता है. वाक्य हकार होने के कारण नकार Tag 'don't they' आएगा."
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
      "explanation": "'Nothing' वाक्य को नकार बनाता है और उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए हकार Tag 'was it' আসবে."
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
      "explanation": "'barely' (शायद ही कभी) शब्द वाक्य को नकार बनाता है, इसलिए Question Tag हकार 'does he' यहवशे."
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
      "explanation": "जब 'jury' जैसे समूहवाचक संज्ञा उसका सदस्यों में विभाजन दर्शावे, तब वह बहुवचन माना जाता है और 'they' सर्वनाम प्रयोग होता है. इसलिए नकार Tag 'weren't they' आएगा."
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
      "explanation": "जब वाक्य 'I think/believe/suppose' से शुरू होता, तब Question Tag मुख्य वाक्य (he's a spy) परसे बनता है. यहाँ 'he is a spy' हकार होने के कारण Tag 'isn't he' आएगा."
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
      "explanation": "जब मुख्य वाक्य ('She doesn't suppose') नकार हो, तब Tag हकार बनता है और वह गौण वाक्य ('he will come') परसे बनता है. इसलिए, 'will he' आएगा."
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
      "explanation": "'It seems/appears that' वाला वाक्यों में Tag गौण वाक्य ('they are busy') परसे बनता है. इसलिए, 'aren't they' आएगा."
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
      "explanation": "उद्गार वाक्य का Tag उसका मूल भाव परसे बनता है. यहाँ 'The idea is terrible'  का भाव है, इसलिए Tag 'isn't it' आएगा."
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
      "explanation": "यह उद्गार वाक्य का मूल भाव 'She speaks cleverly' है, जो सामान्य वर्तमान काल में है. इसलिए, Tag 'doesn't she' आएगा."
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
      "explanation": "'All of them' के लिए 'they' सर्वनाम प्रयोग होता है. वाक्य हकार होने के कारण Tag 'aren't they' आएगा."
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
      "explanation": "'None' वाक्य को नकार बनाता है. 'your friends' के लिए 'they' सर्वनाम प्रयोग होता है. वाक्य सामान्य भूतकाल में होने के कारण हकार Tag 'did they' आएगा."
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
      "explanation": "'The rich'  का अर्थ 'सभी श्रीमंत लोगों' (बहुवचन) होता है. वाक्य नकार होने के कारण हकार Tag 'are they' आएगा."
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
      "explanation": "'The poor'  का अर्थ 'सभी गरीब लोगों' (बहुवचन) होता है. वाक्य सामान्य वर्तमान काल में होने के कारण नकार Tag 'don't they' आएगा."
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
      "explanation": "यह प्रकारके वाक्य में Tag मुख्य वाक्य 'This is the fifth time' परसे बनता है, गौण वाक्य परसे नहीं. इसलिए, 'isn't it' आएगा."
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
      "explanation": "कर्ता (Subject) 'The guest of honor' के लिए 'he' (या) 'she' प्रयोग कर सकते. वाक्य सामान्य भूतकाल में है. इसलिए, 'didn't he/she' यहवशे. विकल्पो में 'didn't he' है."
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
      "explanation": "यहाँ 'The mother' यह एक व्यक्ति नहीं, भी 'मातृत्व की भावके' (Abstract Noun) दर्शाता है. इसलिए, 'it' सर्वनाम प्रयोग होगा. Tag 'wasn't it' आएगा."
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
      "explanation": "यहाँ 'The beast' यह 'पशुवृत्ति' (Abstract Noun) दर्शाता है. इसलिए, 'it' सर्वनाम प्रयोग होगा. Tag 'doesn't it' आएगा."
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
      "explanation": "'as well as', 'with', 'along with' जैसे शब्दोसे जोडाए हुए वाक्यों में क्रिया (Verb) और Tag पहले कर्ता (Subject) (He) अनुसार आता है. इसलिए, 'isn't he' आएगा."
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
      "explanation": "'not' के बाद यहवता कर्ता (Subject) को बदले, पहले यहवता कर्ता (Subject) ('My friends') अनुसार Tag बनता है. इसलिए, 'haven't they' আসবে."
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
      "explanation": "मुख्य वाक्य 'I am not' है, इसलिए उसका हकार Tag 'am I' बनशे."
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
      "explanation": "यहाँ 'has' मुख्य क्रिया (Verb) है. सामान्य वर्तमान काल अनुसार, 'he' के साथ 'does' आता है. इसलिए, नकार Tag 'doesn't he' আসবে."
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
      "explanation": "'The wind' के लिए 'it' सर्वनाम प्रयोग होता है. वाक्य हकार होने के कारण नकार Tag 'isn't it' আসবে."
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
      "explanation": "वाक्य में क्रिया (Verb) 'was' (एकवचन) 'Each' अनुसार है, भी Tag में 'boys' के लिए 'they' सर्वनाम प्रयोग होगा. 'they' के साथ 'were' आता है, इसलिए 'weren't they' आएगा."
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
      "explanation": "यह एक कहेवत है. 'not' शब्द को कारणे वाक्य नकार माना जाता है. 'All that glitters' के लिए 'it' सर्वनाम प्रयोग होता है. इसलिए, हकार Tag 'is it' यहवशे."
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
      "explanation": "'Somebody' के लिए 'they' सर्वनाम प्रयोग होता है. 'has to' सामान्य वर्तमान काल की जैसे वर्वह है. 'they' के साथ 'do' आता है. हकार वाक्य होने के कारण नकार Tag 'don't they' यहवशे."
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
      "explanation": "यहाँ कर्ता (Subject) 'What he says' (वह जो कहे है वह) है, जो एक विचार है. उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए, 'isn't it' आएगा."
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
      "explanation": "यहाँ कर्ता (Subject) 'To err' (भूल करना) है, जो एक क्रिया है. उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए, 'isn't it' आएगा."
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
      "explanation": "यहाँ 'The team' एक समूह के रूप में वर्वह है, इसलिए वह एकवचन है. उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए, 'isn't it' आएगा."
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
      "explanation": "'Neither' वाक्य को नकार बनाता है. 'them' के लिए 'they' सर्वनाम प्रयोग होता है. वाक्य में 'was' होना फिर भी, Tag में 'they' के साथ 'were' यहवशे. इसलिए, हकार Tag 'were they' আসবে."
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
      "explanation": "'The United States' देश की संज्ञा है, जो एकवचन माना जाता है. इसलिए, 'it' सर्वनाम और 'isn't it' Tag आएगा."
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
      "explanation": "'The Arabian Nights' पुस्तक की संज्ञा है, जो एकवचन माना जाता है. इसलिए, 'it' सर्वनाम और 'isn't it' Tag आएगा."
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
      "explanation": "जब वाक्य में दो कर्ता (Subject) हो, तब Tag दूसरों कर्ता (Subject)के वाक्य परसे बनता है. यहाँ 'you are very smart' परसे 'aren't you' बनशे."
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
      "explanation": "'never' मुख्य वाक्य ('He never said') को नकार बनाता है. Tag मुख्य वाक्य परसे बनशे, गौण वाक्य परसे नहीं. इसलिए 'did he' यहवशे."
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
      "explanation": "'seldom' वाक्य को नकार बनाता है. कर्ता (Subject) 'A barking dog' के लिए 'it' सर्वनाम प्रयोग होता है. इसलिए हकार Tag 'does it' आएगा."
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
      "explanation": "'few' (a बिके) नकारात्मक अर्थ ('लगभग कुछ नहीं') दर्शाता है. इसलिए Question Tag हकार यहवशे. यहाँ 'has' सहायकारक क्रिया (Verb) है, इसलिए 'has he' आएगा."
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
      "explanation": "'I suppose' वाला वाक्यों में Tag गौण वाक्य ('we should leave') परसे बनता है. इसलिए, 'shouldn't we' आएगा."
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
      "explanation": "'He believes' वाला वाक्यों में Tag गौण वाक्य ('they are wrong') परसे बनता है. इसलिए, 'aren't they' आएगा."
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
      "explanation": "उद्गार वाक्य का मूल भाव 'The garden is beautiful' है. इसलिए, नकार Tag 'isn't it' आएगा."
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
      "explanation": "वाक्य में क्रिया (Verb) 'is' (एकवचन) 'Either' अनुसार है, भी Tag में 'students' के लिए 'they' सर्वнаम प्रयोग होगा. 'they' के साथ 'are' आता है, इसलिए 'aren't they' आएगा."
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
      "explanation": "जब 'jury' एक समूह के रूप में सर्वसंमतिसे निर्णय ले, तब वह एकवचन माना जाता है. इसलिए Tag 'hasn't it' यहवशे."
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
      "explanation": "'Mob' (झुंड) यहाँ एक समूह के रूप में काम करता है, इसलिए वह एकवचन माना जाता है. इसलिए Tag 'hasn't it' यहवशे. (हालांकि, कुछ किस्सा में 'haven't they' भी प्रयोग होता है)."
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
      "explanation": "'along with' से जोडाए हुए वाक्य में क्रिया (Verb) और Tag पहले कर्ता (Subject) ('He') अनुसार आता है. इसलिए, 'isn't he' आएगा."
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
      "explanation": "मुख्य वाक्य 'She is not the one' है, जो नकार है. इसलिए, हकार Tag 'is she' आएगा."
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
      "explanation": "'little' (a बिके) नकारात्मक अर्थ ('लगभग कुछ नहीं') दर्शाता है. इसलिए, 'There is' वाला वाक्य के लिए हकार Tag 'is there' आएगा."
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
      "explanation": "हकार वाक्य है. कर्ता (Subject) 'Your father' के लिए 'he' सर्वनाम प्रयोग होता है. इसलिए Tag 'isn't he' आएगा."
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
      "explanation": "'Let's' से शुरू होती दरखास्त के लिए Question Tag हमेशा 'shall we' होता है."
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
      "explanation": "कर्ता (Subject) 'The girl' है, जोके के लिए 'she' सर्वनाम प्रयोग होता है. हकार वाक्य होने के कारण Tag 'isn't she' आएगा."
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
      "explanation": "'Neither' वाक्य को नकार बनाता है. 'you' के लिए 'you' ही सर्वनाम रथेशे. सामान्य भूतकाल का वाक्य होने के कारण हकार Tag 'did you' आएगा."
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
      "explanation": "'hardly' शब्द वाक्य को नकार बनाता है. यहाँ कर्ता (Subject) 'His brother' है. इसलिए हकार Tag 'does he' आएगा."
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
      "explanation": "यह जटिल वाक्य है. मुख्य क्रिया (Verb) 'proved' है, जो सामान्य भूतकाल में है. कर्ता (Subject) 'Everything that was said' के लिए 'it' प्रयोग होगा. इसलिए नकार Tag 'didn't it' आएगा."
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
      "explanation": "मुख्य कर्ता (Subject) 'The man' है, जोके के लिए 'he' सर्वनाम प्रयोग होता है. इसलिए, 'isn't he' आएगा."
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
      "explanation": "'Mathematics' विषय की संज्ञा है, जो एकवचन माना जाता है. इसलिए Tag 'isn't it' আসবে."
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
      "explanation": "'News' शब्द एकवचन माना जाता है. वाक्य नकार होने के कारण हकार Tag 'is it' আসবে."
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
      "explanation": "जब मुख्य वाक्य ('I don't believe') नकार हो, तब Tag हकार बनता है और वह गौण वाक्य ('he has failed') परसे बनता है. इसलिए, 'has he' आएगा."
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
      "explanation": "'Somebody' के लिए 'they' सर्वनाम प्रयोग होता है. वाक्य सामान्य भूतकाल में है, इसलिए नकार Tag 'didn't they' आएगा."
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
      "explanation": "उद्गार वाक्य का मूल भाव 'She has a lovely voice' है. यहाँ 'has' मुख्य क्रिया (Verb) है. इसलिए, नकार Tag 'doesn't she' আসবে."
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
      "explanation": "यहाँ कर्ता (Subject) 'That he is a genius' (या वह एक जीनियस है) है, जो एक हकीकत/विचार है. उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए 'isn't it' आएगा."
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
      "explanation": "यहाँ 'One of them'  में से 'them' मुख्य है, जोके के लिए 'they' सर्वनाम प्रयोग होता है. इसलिए, 'mustn't they' आएगा."
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
      "explanation": "'Crowd' (झुंड) यहाँ एक समूह के रूप में माना जाता है, इसलिए वह एकवचन है. Tag 'hasn't it' आएगा."
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
      "explanation": "'not' के बाद यहवता कर्ता (Subject) को बदले, पहले यहवता कर्ता (Subject) ('He') अनुसार Tag बनता है. इसलिए, 'isn't he' आएगा."
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
      "explanation": "मुख्य वाक्य 'The boy was very happy' है. कर्ता (Subject) 'The boy' के लिए 'he' सर्वनाम प्रयोग होता है. इसलिए, 'wasn't he' आएगा."
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
      "explanation": "'no' शब्द वाक्य को नकार बनाता है. इसलिए, हकार Tag 'is it' आएगा."
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
      "explanation": "'scarcely' (शायद ही कभी) शब्द वाक्य को नकार बनाता है, इसलिए Question Tag हकार 'would she' आएगा."
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
      "explanation": "नदीों के नाम के लिए 'it' सर्वнаम प्रयोग होता है (जोरत में नदीओ को 'she' के रूप में भी संबोधाय है, भी व्याकरण की दृष्टियह 'it' अधिक उचित है). इसलिए 'isn't it' आएगा."
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
      "explanation": "'Either...or' वाला वाक्य में क्रिया (Verb) और Tag पासके कर्ता (Subject) ('he') अनुसार आता है. इसलिए, 'isn't he' आएगा."
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
      "explanation": "'Neither...nor' वाक्य को नकार बनाता है. क्रिया (Verb) और Tag पासके कर्ता (Subject) ('I') अनुसार आता है. इसलिए हकार Tag 'am I' आएगा."
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
      "explanation": "'a little' हकारात्मक अर्थ ('थोडीक') दर्शाता है. यहाँ 'has' को സഹായക गणी को 'hasn't he' Tag बनाकर सकता."
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
      "explanation": "मुख्य वाक्य 'I am' है. उसका हकार Tag 'aren't I' बनता है."
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
      "explanation": "उद्गार वाक्य का मूल भाव 'The night is cold' है. इसलिए, नकार Tag 'isn't it' आएगा."
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
      "explanation": "'Most of us' के लिए सर्वनाम 'we' प्रयोग होता है. वाक्य सामान्य वर्तमान काल में होने के कारण नकार Tag 'don't we' आएगा."
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
      "explanation": "वाक्य में क्रिया (Verb) 'can' 'One' अनुसार है, भी Tag में 'girls' के लिए 'they' सर्वनाम प्रयोग होगा. इसलिए, नकार Tag 'can't they' आएगा."
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
      "explanation": "'Police' शब्द हमेशा बहुवचन माना जाता है. इसलिए सर्वनाम 'they' प्रयोग होगा. हकार वाक्य के लिए नकार Tag 'weren't they' आएगा."
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
      "explanation": "'as well as' से जोडाए हुए वाक्यों में क्रिया (Verb) और Tag पहले कर्ता (Subject) ('The captain') अनुसार आता है. इसलिए, 'isn't he' आएगा."
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
      "explanation": "'It's time' वाली रचसंज्ञाां Tag मुख्य वाक्य ('It's time') परसे बनता है, गौण वाक्य ('we left') परसे नहीं. इसलिए, 'isn't it' आएगा."
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
      "explanation": "यहाँ कर्ता (Subject) 'To forgive' (माफ़ करना) है, जो एक क्रिया/विचार है. उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए, 'isn't it' आएगा."
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
      "explanation": "मुख्य कर्ता (Subject) 'The writer' है, जोके के लिए 'he' (या) 'she' प्रयोग होता. विकल्पो में 'he' है. इसलिए, 'isn't he' आएगा."
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
      "explanation": "जब 'jury' में मतभेद हो (या) सर्वसंमति न हो, तब उसका सदस्यों अलग-अलग माना जाता है और 'they' सर्वनाम प्रयोग होता है. इसलिए, 'have they' आएगा."
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
      "explanation": "'It seems that' वाला वाक्यों में Tag गौण वाक्य ('you are right') परसे बनता है. इसलिए, 'aren't you' आएगा."
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
      "explanation": "जब मुख्य वाक्य ('I don't suppose') नकार हो, तब Tag हकार बनता है और वह गौण वाक्य ('anyone will volunteer') परसे बनता है. 'anyone' के लिए 'they' प्रयोग होता है. इसलिए, 'will they' आएगा."
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
      "explanation": "'Not all' वाक्य को यहंशिक नकार बनाता है, भी Tag समग्र समूह के लिए हकार बनता है. इसलिए, 'can they' आएगा."
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
      "explanation": "यहाँ 'He's having' यह अपूर्ण वर्तमान काल ('He is having') है. इसलिए, 'isn't he' Tag आएगा."
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
      "explanation": "जब 'Let us'  का अर्थ 'allow us' (अम को अनुमति यहपो) होता, तब Tag 'will you' आता है."
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
      "explanation": "'The Three Musketeers' यह पुस्तक की संज्ञा है, जो एकवचन माना जाता है. इसलिए, Tag 'wasn't it' आएगा."
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
      "explanation": "'Glasses', 'trousers', 'scissors' जैसे शब्दो हमेशा बहुवचन माना जाता है. इसलिए 'they' सर्वнаम और 'aren't they' Tag आएगा."
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
      "explanation": "यहाँ कर्ता (Subject) 'What is needed' (जो जरूरी है वह) है, जो एक विचार है. उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए, 'isn't it' आएगा."
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
      "explanation": "मुख्य कर्ता (Subject) 'The quality' (गुणवत्ता) है, जो एकवचन है. वाक्य नकार होने के कारण हकार Tag 'is it' আসবে."
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
      "explanation": "'Neither...nor' वाक्य को नकार बनाता है. क्रिया (Verb) और Tag पासके कर्ता (Subject) ('he') अनुसार आता है. इसलिए हकार Tag 'is he' आएगा."
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
      "explanation": "यहवा 'Passive with reporting verb' वाक्य में Tag मुख्य वाक्य ('It is believed') परसे बनता है. इसलिए, 'isn't it' आएगा."
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
      "explanation": "यह भी 'Passive with reporting verb' का उदाहरण है. यहाँ Tag मुख्य कर्ता (Subject) 'He' परसे बनता है. इसलिए, 'isn't he' आएगा."
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
      "explanation": "उद्गार वाक्य का मूल भाव 'He is very tall' है. इसलिए, नकार Tag 'isn't he' आएगा."
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
      "explanation": "'Somebody' के लिए 'they' सर्वनाम प्रयोग होता है. 'they' के साथ 'have' आता है. वाक्य हकार होने के कारण नकार Tag 'haven't they' আসবে."
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
      "explanation": "वाक्य नकार ('won't') है. कर्ता (Subject) 'Your advice' के लिए 'it' सर्वнаम प्रयोग होता है. इसलिए हकार Tag 'will it' आएगा."
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
      "explanation": "'Let's assume' यह एक दरखास्त है. 'Let's' से शुरू होने वाले वाक्यों के लिए Tag 'shall we' आता है."
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
      "explanation": "वाक्य नकार है. 'This book' के लिए 'it' सर्वनाम प्रयोग होता है. इसलिए हकार Tag 'is it' आएगा."
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
      "explanation": "जब 'committee' एक समूह के रूप में सामूहिक निर्णय ले, तब वह एकवचन माना जाता है. इसलिए Tag 'hasn't it' আসবে."
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
      "explanation": "जब 'committee' के सदस्यों में मतभेद हो, तब वह बहुवचन माना जाता है और 'they' सर्वनाम प्रयोग होता है. इसलिए, 'aren't they' आएगा."
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
      "explanation": "'Neither...nor' वाक्य को नकार बनाता है. जब दो एकवचन कर्ता (Subject) जोडाय, तब क्रिया (Verb) और Tag एकवचन रहता है. 'food nor water' के लिए 'it' गणी सकता. इसलिए, हकार Tag 'was it' আসবে."
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
      "explanation": "यहाँ कर्ता (Subject) 'Winning the lottery' (लोटरी जीतवी) है, जो एक क्रिया है. उसके लिए 'it' सर्वनाम प्रयोग होता है. इसलिए, 'isn't it' आएगा."
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
      "explanation": "'unlikely' शब्द वाक्य को नकारात्मक भाव देता है. Tag मुख्य वाक्य ('It is unlikely') परसे बनता है. इसलिए, हकार Tag 'is it' आएगा."
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
      "explanation": "'has got to' यह 'must' जैसा भाव दर्शाता है. यहाँ 'has' सहायकारक क्रिया (Verb) के रूप में माना जाता है. इसलिए, 'hasn't she' आएगा."
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
      "explanation": "'has his hair cut' (वाल कपावे है) यह 'causative verb' रचना है, जो सामान्य वर्तमान काल में है. इसलिए, 'doesn't he' आएगा."
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
      "explanation": "यह प्रकारके वाक्य में Tag कर्ता (Subject) 'One' अनुसार बनता है, 'boys' अनुसार नहीं. इसलिए, एकवचन Tag 'hasn't he' আসবে."
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
      "explanation": "कर्ता (Subject) 'Your car' के लिए 'it' सर्वनाम प्रयोग होता है. हकार वाक्य के लिए नकार Tag 'isn't it' आएगा."
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
      "explanation": "मुख्य वाक्य ('I don't think') नकार है, इसलिए Tag हकार यहवशे और वह गौण वाक्य ('anyone saw us') परसे बनशे. 'anyone' के लिए 'they' और 'saw' (भूतकाल) के लिए 'did' प्रयोग होगा. इसलिए 'did they' आएगा."
    }
  ]
};
