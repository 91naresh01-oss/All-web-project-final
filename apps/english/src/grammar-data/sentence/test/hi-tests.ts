import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
    "test-1": [
        {
            "question": "Choose the correct sentence type:<br/><b>The sun rises in the east.</b>",
            "options": [
                "Assertive Sentence",
                "Interrogative Sentence",
                "Imperative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Assertive Sentence",
            "explanation": "This is a statement giving information, so it is an Assertive Sentence. (यह एक जानकारी देने वाला विधान है, इसलिए यह Assertive Sentence है।)"
        },
        {
            "question": "Identify the sentence type:<br/><b>Shut the door.</b>",
            "options": [
                "Assertive Sentence",
                "Interrogative Sentence",
                "Imperative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Imperative Sentence",
            "explanation": "This sentence gives an order, so it is an Imperative Sentence. (यह वाक्य एक आदेश देता है, इसलिए यह Imperative Sentence है।)"
        },
        {
            "question": "Which type of sentence is this?<br/><b>Where are you going?</b>",
            "options": [
                "Assertive Sentence",
                "Interrogative Sentence",
                "Imperative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Interrogative Sentence",
            "explanation": "This sentence asks a question, so it is an Interrogative Sentence. (यह वाक्य एक प्रश्न पूछता है, इसलिए यह Interrogative Sentence है।)"
        },
        {
            "question": "Choose the type:<br/><b>What a beautiful flower!</b>",
            "options": [
                "Assertive Sentence",
                "Interrogative Sentence",
                "Imperative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Exclamatory Sentence",
            "explanation": "This sentence expresses strong emotion, so it is an Exclamatory Sentence. (यह वाक्य तीव्र भावना व्यक्त करता है, इसलिए यह Exclamatory Sentence है।)"
        },
        {
            "question": "Identify the type:<br/><b>Please help me.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "This sentence makes a request ('Please'), so it is an Imperative Sentence. (यह वाक्य एक विनती ('Please') करता है, इसलिए यह Imperative Sentence है।)"
        },
        {
            "question": "Select the correct type:<br/><b>Hurrah! We won the match.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Exclamatory",
            "explanation": "It starts with an interjection 'Hurrah!' expressing joy. (यह 'Hurrah!' के साथ खुशी व्यक्त करता है।)"
        },
        {
            "question": "Identify the type:<br/><b>I do not like tea.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Assertive",
            "explanation": "This is a negative statement, which falls under Assertive Sentences. (यह एक नकारात्मक विधान है, जो Assertive Sentences के अंतर्गत आता है।)"
        },
        {
            "question": "What kind of sentence is this?<br/><b>Are you coming with us?</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Interrogative",
            "explanation": "It asks a question and ends with a question mark. (यह प्रश्न पूछता है और प्रश्नचिह्न के साथ समाप्त होता है।)"
        },
        {
            "question": "Identify the sentence:<br/><b>Work hard to succeed.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "This is a piece of advice, so it is an Imperative Sentence. (यह एक सलाह है, इसलिए यह Imperative Sentence है।)"
        },
        {
            "question": "Choose the correct type:<br/><b>How sad the news is!</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Exclamatory",
            "explanation": "It expresses sorrow/emotion and ends with an exclamation mark. (यह दुःख/भावना व्यक्त करता है और विस्मयादिबोधक चिह्न के साथ समाप्त होता है।)"
        }
    ],
    "test-2": [
        {
            "question": "Identify Subject:<br/><b>The dog barked loudly.</b>",
            "options": [
                "The dog",
                "barked",
                "loudly",
                "barked loudly"
            ],
            "answer": "The dog",
            "explanation": "'The dog' is the doer of the action. ('The dog' क्रिया का कर्ता है।)"
        },
        {
            "question": "Identify Predicate:<br/><b>Birds fly in the sky.</b>",
            "options": [
                "Birds",
                "fly",
                "fly in the sky",
                "in the sky"
            ],
            "answer": "fly in the sky",
            "explanation": "The part telling about the subject is 'fly in the sky'. (कर्ता के बारे में बताने वाला भाग 'fly in the sky' है।)"
        },
        {
            "question": "Identify the type:<br/><b>Don't make a noise.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "It's a negative command/order. (यह एक नकारात्मक आदेश है।)"
        },
        {
            "question": "Identify the type:<br/><b>May God bless you!</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Exclamatory",
            "explanation": "Sentences expressing a wish or prayer typically fall under Exclamatory (Optative). (इच्छा या प्रार्थना व्यक्त करने वाले वाक्य आमतौर पर Exclamatory में आते हैं।)"
        },
        {
            "question": "Identify the type:<br/><b>Who is your best friend?</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Interrogative",
            "explanation": "It is asking for information regarding a person. (यह किसी व्यक्ति के बारे में जानकारी मांग रहा है।)"
        },
        {
            "question": "Identify Subject:<br/><b>My father reads newspaper.</b>",
            "options": [
                "My father",
                "reads",
                "newspaper",
                "reads newspaper"
            ],
            "answer": "My father",
            "explanation": "'My father' is the person doing the reading. ('My father' वह व्यक्ति है जो पढ़ रहा है।)"
        },
        {
            "question": "Identify Predicate:<br/><b>She is a good dancer.</b>",
            "options": [
                "She",
                "is",
                "a good dancer",
                "is a good dancer"
            ],
            "answer": "is a good dancer",
            "explanation": "'is a good dancer' describes the subject 'She'. ('is a good dancer' कर्ता 'She' का वर्णन करता है।)"
        },
        {
            "question": "Identify the type:<br/><b>Be quiet.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "It sends a command. (यह एक कमांड भेजता है।)"
        },
        {
            "question": "Identify the type:<br/><b>New Delhi is the capital of India.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Assertive",
            "explanation": "It states a fact. (यह एक तथ्य बताता है।)"
        },
        {
            "question": "Identify the type:<br/><b>How hot it is today!</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Exclamatory",
            "explanation": "Exclamation regarding the weather. (मौसम के बारे में विस्मय।)"
        }
    ],
    "test-3": [
        {
            "question": "Transform to Negative:<br/><b>He is happy.</b>",
            "options": [
                "He is not happy.",
                "He was not happy.",
                "Is he happy?",
                "He not happy."
            ],
            "answer": "He is not happy.",
            "explanation": "To make 'is' negative, we add 'not' after it. ('is' को नकारात्मक बनाने के लिए, हम इसके बाद 'not' जोड़ते हैं।)"
        },
        {
            "question": "Transform to Interrogative:<br/><b>She likes ice cream.</b>",
            "options": [
                "Does she like ice cream?",
                "Do she like ice cream?",
                "Is she like ice cream?",
                "Did she like ice cream?"
            ],
            "answer": "Does she like ice cream?",
            "explanation": "Simple present tense with 'She' uses 'Does' for questions. (Simple present tense में 'She' के साथ प्रश्न के लिए 'Does' का उपयोग होता है।)"
        },
        {
            "question": "Identify the sentence type:<br/><b>Alas! The cat is dead.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Exclamatory",
            "explanation": "'Alas!' shows sorrow. ('Alas!' दुःख दर्शाता है।)"
        },
        {
            "question": "Identify the sentence type:<br/><b>Always speak the truth.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "It is a moral advice/command. (यह एक नैतिक सलाह/आदेश है।)"
        },
        {
            "question": "Transform to Assertive:<br/><b>What a lovely garden!</b>",
            "options": [
                "The garden is very lovely.",
                "Is the garden lovely?",
                "Garden is lovely.",
                "What is a lovely garden."
            ],
            "answer": "The garden is very lovely.",
            "explanation": "In assertive, we remove 'What a' and use 'very'. (Assertive में, हम 'What a' हटाते हैं और 'very' का उपयोग करते हैं।)"
        },
        {
            "question": "Identify the sentence type:<br/><b>Why are you late?</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Interrogative",
            "explanation": "It asks for a reason using 'Why'. ('Why' का उपयोग करके कारण पूछता है।)"
        },
        {
            "question": "Identify the sentence type:<br/><b>I have two pens.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Assertive",
            "explanation": "Simple statement of possession. (कब्जे का सरल विधान।)"
        },
        {
            "question": "Identify the sentence type:<br/><b>Let us go for a walk.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "Suggestions starting with 'Let' are Imperative. ('Let' से शुरू होने वाले सुझाव Imperative होते हैं।)"
        },
        {
            "question": "Which is correct Interrogative?<br/><b>They played well.</b>",
            "options": [
                "Did they play well?",
                "Do they play well?",
                "Did they played well?",
                "Have they played well?"
            ],
            "answer": "Did they play well?",
            "explanation": "Past tense 'played' changes to 'Did... play' in questions. (भूतकाल 'played' प्रश्न में 'Did... play' में बदल जाता है।)"
        },
        {
            "question": "Identify the sentence type:<br/><b>How dare you!</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Exclamatory",
            "explanation": "Expresses anger or shock. (क्रोध या आघात व्यक्त करता है।)"
        }
    ],
    "test-4": [
        {
            "question": "Subject of the sentence:<br/><b>The rising sun looks beautiful.</b>",
            "options": [
                "The rising sun",
                "looks",
                "beautiful",
                "sun"
            ],
            "answer": "The rising sun",
            "explanation": "The entire phrase 'The rising sun' is the subject. (पूरा वाक्यांश 'The rising sun' कर्ता है।)"
        },
        {
            "question": "Predicate of the sentence:<br/><b>Honesty is the best policy.</b>",
            "options": [
                "Honesty",
                "is",
                "is the best policy",
                "policy"
            ],
            "answer": "is the best policy",
            "explanation": "Everything after the subject 'Honesty' is the predicate. (कर्ता 'Honesty' के बाद सब कुछ विधेय है।)"
        },
        {
            "question": "Sentence type:<br/><b>Have a nice day.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "It acts as a wish/greeting, treated as Imperative style. (यह एक शुभकामना/अभिवादन के रूप में कार्य करता है, जिसे Imperative शैली माना जाता है।)"
        },
        {
            "question": "Sentence type:<br/><b>Is it raining?</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Interrogative",
            "explanation": "Question about weather. (मौसम के बारे में प्रश्न।)"
        },
        {
            "question": "Sentence type:<br/><b>Stars twinkle at night.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Assertive",
            "explanation": "Universal fact. (सार्वभौमिक सत्य।)"
        },
        {
            "question": "Sentence type:<br/><b>Stop talking immediately.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "Direct command. (सीधा आदेश।)"
        },
        {
            "question": "Sentence type:<br/><b>How tall you have grown!</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Exclamatory",
            "explanation": "Surprise at growth. (विकास पर आश्चर्य।)"
        },
        {
            "question": "Make Negative:<br/><b>Open the window.</b>",
            "options": [
                "Do not open the window.",
                "Not open the window.",
                "No open window.",
                "Open not the window."
            ],
            "answer": "Do not open the window.",
            "explanation": "Imperative negative starts with 'Do not'. (Imperative नकारात्मक 'Do not' से शुरू होता है।)"
        },
        {
            "question": "Make Assertive:<br/><b>Who does not love his country?</b>",
            "options": [
                "Everyone loves his country.",
                "No one loves his country.",
                "Someone loves his country.",
                "Everyone does not love country."
            ],
            "answer": "Everyone loves his country.",
            "explanation": "The rhetorical question implies 'Everyone loves...'. (काव्यात्मक प्रश्न का अर्थ है 'Everyone loves...'.)"
        },
        {
            "question": "Sentence type:<br/><b>Does he play cricket?</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Interrogative",
            "explanation": "Question starts with auxiliary 'Does'. (प्रश्न सहायक 'Does' से शुरू होता है।)"
        }
    ],
    "test-5": [
        {
            "question": "Identify type:<br/><b>Bring me a glass of water.</b>",
            "options": ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
            "answer": "Imperative",
            "explanation": "It is an order. (यह एक आदेश है।)"
        },
        {
            "question": "Identify type:<br/><b>What a shame!</b>",
            "options": ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
            "answer": "Exclamatory",
            "explanation": "Expression of disgust/regret. (घृणा/खेद की अभिव्यक्ति।)"
        },
        {
            "question": "Identify type:<br/><b>She writes neatly.</b>",
            "options": ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
            "answer": "Assertive",
            "explanation": "Statement about habit. (आदत के बारे में विधान।)"
        },
        {
            "question": "Identify type:<br/><b>Can you lift this box?</b>",
            "options": ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
            "answer": "Interrogative",
            "explanation": "Question about ability. (क्षमता के बारे में प्रश्न।)"
        },
        {
            "question": "Identify type:<br/><b>Do not run in the corridor.</b>",
            "options": ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
            "answer": "Imperative",
            "explanation": "Prohibition. (निषेध।)"
        },
        {
            "question": "Subject is:<br/><b>On the top of the hill lives a hermit.</b>",
            "options": ["On the top", "the hill", "a hermit", "lives"],
            "answer": "a hermit",
            "explanation": "Here subject 'a hermit' is at the end. (यहाँ कर्ता 'a hermit' अंत में है।)"
        },
        {
            "question": "Predicate is:<br/><b>The early bird catches the worm.</b>",
            "options": ["The early bird", "catches the worm", "catches", "bird catches"],
            "answer": "catches the worm",
            "explanation": "Part telling what the bird does. (पक्षी क्या करता है, यह बताने वाला भाग।)"
        },
        {
            "question": "Identify type:<br/><b>What is your name?</b>",
            "options": ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
            "answer": "Interrogative",
            "explanation": "Basic question. (मूलभूत प्रश्न।)"
        },
        {
            "question": "Identify type:<br/><b>Man is mortal.</b>",
            "options": ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
            "answer": "Assertive",
            "explanation": "Universal truth statement. (सार्वभौमिक सत्य कथन।)"
        },
        {
            "question": "Identify type:<br/><b>Oh! I cut my finger.</b>",
            "options": ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
            "answer": "Exclamatory",
            "explanation": "Pain expression with 'Oh!'. ('Oh!' के साथ दर्द की अभिव्यक्ति।)"
        }
    ]
};
