import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
    "test-1": [
        {
            "question": "શબ્દોનો એવો સમૂહ કે જે વાક્યનો પૂરેપૂરો અર્થ સ્પષ્ટ કરે તેને શું કહેવાય છે?",
            "options": [
                "Phrase (શબ્દસમૂહ)",
                "Sentence (વાક્ય)",
                "Word (શબ્દ)",
                "Letter (અક્ષર)"
            ],
            "answer": "Sentence (વાક્ય)",
            "explanation": "શબ્દોનો એવો સમૂહ કે જે વાક્યનો પૂરેપૂરો અર્થ સ્પષ્ટ કરે તેને Sentence (વાક્ય) કહેવાય છે."
        },
        {
            "question": "નીચેનામાંથી કયું વાક્ય (Sentence) નું ઉદાહરણ છે?",
            "options": [
                "in the morning",
                "under the tree",
                "She is reading a book.",
                "very fast"
            ],
            "answer": "She is reading a book.",
            "explanation": "'She is reading a book.' એક સંપૂર્ણ અર્થ આપે છે, તેથી તે વાક્ય છે. બાકીના બધા શબ્દસમૂહો (Phrases) છે."
        },
        {
            "question": "નીચેના વાક્યમાં કર્તા (Subject) કયો છે?<br><b>My brother is a doctor.</b>",
            "options": [
                "is a doctor",
                "My brother",
                "doctor",
                "is"
            ],
            "answer": "My brother",
            "explanation": "વાક્ય જેના વિશે છે તે 'My brother' છે, તેથી તે Subject (કર્તા) છે."
        },
        {
            "question": "નીચેના વાક્યમાં વિધેય (Predicate) કયો છે?<br><b>The sun rises in the east.</b>",
            "options": [
                "The sun",
                "rises in the east",
                "in the east",
                "rises"
            ],
            "answer": "rises in the east",
            "explanation": "'The sun' સિવાયનો વાક્યનો ભાગ 'rises in the east' એ કર્તા વિશે માહિતી આપે છે, તેથી તે Predicate છે."
        },
        {
            "question": "વાક્યના મુખ્ય બે ભાગ કયા છે?",
            "options": [
                "Noun and Verb",
                "Subject and Predicate",
                "Phrase and Clause",
                "Object and Complement"
            ],
            "answer": "Subject and Predicate",
            "explanation": "દરેક વાક્ય બે ભાગમાં વહેંચાયેલું હોય છે: Subject (કર્તા) અને Predicate (વિધેય)."
        },
        {
            "question": "Subject (કર્તા) સામાન્ય રીતે વાક્યમાં ક્યાં આવે છે?",
            "options": [
                "વાક્યની શરૂઆતમાં",
                "વાક્યના અંતે",
                "ક્રિયાપદ પછી",
                "ક્યાંય પણ"
            ],
            "answer": "વાક્યની શરૂઆતમાં",
            "explanation": "સામાન્ય રીતે વિધાન વાક્યોમાં Subject (કર્તા) વાક્યની શરૂઆતમાં આવે છે."
        },
        {
            "question": "નીચેનામાંથી કયું Phrase (શબ્દસમૂહ) છે?",
            "options": [
                "He is playing.",
                "on the table",
                "Birds fly.",
                "I like tea."
            ],
            "answer": "on the table",
            "explanation": "'on the table' પૂરો અર્થ આપતું નથી અને તેમાં Subject કે Verb નથી, તેથી તે Phrase છે."
        },
        {
            "question": "નીચેના વાક્યમાં Subject શોધો:<br><b>Birds fly in the sky.</b>",
            "options": [
                "fly",
                "in the sky",
                "Birds",
                "sky"
            ],
            "answer": "Birds",
            "explanation": "'Birds' એ ક્રિયા કરનાર છે, તેથી તે Subject છે."
        },
        {
            "question": "નીચેના વાક્યમાં Predicate શોધો:<br><b>She sings beautifully.</b>",
            "options": [
                "She",
                "sings beautifully",
                "beautifully",
                "sings"
            ],
            "answer": "sings beautifully",
            "explanation": "'sings beautifully' એ She વિશે માહિતી આપે છે, તેથી તે Predicate છે."
        },
        {
            "question": "વાક્યનો અર્થ પૂરો કરવા માટે શું જરૂરી છે?",
            "options": [
                "માત્ર શબ્દો",
                "માત્ર ક્રિયાપદ",
                "શબ્દોનો યોગ્ય ક્રમ અને અર્થ",
                "માત્ર કર્તા"
            ],
            "answer": "શબ્દોનો યોગ્ય ક્રમ અને અર્થ",
            "explanation": "વાક્ય બનવા માટે શબ્દોનો યોગ્ય ક્રમ હોવો જોઈએ જેથી તે સંપૂર્ણ અર્થ (Complete Sense) આપે."
        }
    ],
    "test-2": [
        {
            "question": "જે વાક્યમાં કશાક વિશે વિધાન કરવામાં આવ્યું હોય તેને કયું વાક્ય કહેવાય?",
            "options": [
                "Imperative Sentence",
                "Assertive Sentence",
                "Interrogative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Assertive Sentence",
            "explanation": "જે વાક્યમાં સામાન્ય વિધાન કે હકીકત રજૂ થાય તેને Assertive અથવા Declarative Sentence કહેવાય છે."
        },
        {
            "question": "Assertive Sentences ના બે પ્રકાર કયા છે?",
            "options": [
                "Affirmative and Negative",
                "Subject and Object",
                "Question and Answer",
                "Active and Passive"
            ],
            "answer": "Affirmative and Negative",
            "explanation": "Assertive Sentences હકાર (Affirmative) અથવા નકાર (Negative) હોઈ શકે છે."
        },
        {
            "question": "આ વાક્ય કયા પ્રકારનું છે?<br><b>The earth goes round the sun.</b>",
            "options": [
                "Negative Sentence",
                "Interrogative Sentence",
                "Affirmative Sentence",
                "Imperative Sentence"
            ],
            "answer": "Affirmative Sentence",
            "explanation": "આ એક સાદું હકારાત્મક વિધાન છે, તેથી તે Affirmative Sentence છે."
        },
        {
            "question": "આ વાક્યને ઓળખો:<br><b>I do not like coffee.</b>",
            "options": [
                "Affirmative Sentence",
                "Negative Sentence",
                "Imperative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Negative Sentence",
            "explanation": "વાક્યમાં 'do not' નો ઉપયોગ થયો છે, જે નકાર દર્શાવે છે, તેથી તે Negative Sentence છે."
        },
        {
            "question": "Assertive Sentence ના અંતે કયું ચિહ્ન આવે છે?",
            "options": [
                "પ્રશ્નાર્થ ચિહ્ન (?)",
                "ઉદ્ગાર ચિહ્ન (!)",
                "પૂર્ણવિરામ (.)",
                "અલ્પવિરામ (,)"
            ],
            "answer": "પૂર્ણવિરામ (.)",
            "explanation": "Assertive (વિધાન) વાક્યના અંતે હંમેશા Full Stop (પૂર્ણવિરામ) આવે છે."
        },
        {
            "question": "નીચેનામાંથી કયું Negative Sentence છે?",
            "options": [
                "He is a good boy.",
                "Open the door.",
                "She is not at home.",
                "What is your name?"
            ],
            "answer": "She is not at home.",
            "explanation": "આ વાક્યમાં 'not' નો ઉપયોગ થયો છે, તેથી તે Negative Sentence છે."
        },
        {
            "question": "નીચેનામાંથી કયું Affirmative Sentence છે?",
            "options": [
                "They never play cricket.",
                "We won the match.",
                "Do not run.",
                "Is he happy?"
            ],
            "answer": "We won the match.",
            "explanation": "આ વાક્યમાં કોઈ નકારાત્મક શબ્દ નથી, તેથી તે Affirmative Sentence છે."
        },
        {
            "question": "Assertive Sentence બીજી કયા નામથી ઓળખાય છે?",
            "options": [
                "Imperative",
                "Declarative",
                "Interrogative",
                "Exclamatory"
            ],
            "answer": "Declarative",
            "explanation": "Assertive Sentence ને Declarative Sentence પણ કહેવાય છે."
        },
        {
            "question": "આપેલ વાક્યનો પ્રકાર જણાવો:<br><b>India is a big country.</b>",
            "options": [
                "Assertive Sentence",
                "Interrogative Sentence",
                "Imperative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Assertive Sentence",
            "explanation": "આ વાક્ય ભારત વિશે એક વિધાન કરે છે, તેથી તે Assertive Sentence છે."
        },
        {
            "question": "આપેલ વાક્યનો પ્રકાર જણાવો:<br><b>She does not have a car.</b>",
            "options": [
                "Affirmative",
                "Negative",
                "Interrogative",
                "Imperative"
            ],
            "answer": "Negative",
            "explanation": "'does not' હોવાથી આ Negative Sentence છે."
        }
    ],
    "test-3": [
        {
            "question": "જે વાક્યમાં પ્રશ્ન પૂછવામાં આવે તેને કયું વાક્ય કહેવાય?",
            "options": [
                "Assertive Sentence",
                "Imperative Sentence",
                "Interrogative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Interrogative Sentence",
            "explanation": "માહિતી મેળવવા માટે પૂછાયેલા પ્રશ્નવાળા વાક્યને Interrogative Sentence કહેવાય છે."
        },
        {
            "question": "Interrogative Sentence ના અંતે કયું ચિહ્ન આવે છે?",
            "options": [
                ".",
                "!",
                "?",
                ","
            ],
            "answer": "?",
            "explanation": "પ્રશ્નાર્થ વાક્યના અંતે હંમેશા Question Mark (?) આવે છે."
        },
        {
            "question": "આ વાક્ય કયા પ્રકારનું છે?<br><b>Where serve do you live?</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Interrogative",
            "explanation": "આ વાક્યમાં પ્રશ્ન પૂછવામાં આવ્યો છે અને અંતે '?' છે."
        },
        {
            "question": "નીચેનામાંથી કયું Interrogative Sentence છે?",
            "options": [
                "I live in Surat.",
                "Please help me.",
                "Are you hungry?",
                "What a beautiful scene!"
            ],
            "answer": "Are you hungry?",
            "explanation": "'Are you hungry?' માં પ્રશ્ન પૂછવામાં આવ્યો છે."
        },
        {
            "question": "Interrogative Sentence ની શરૂઆત સામાન્ય રીતે શેનાથી થાય છે?",
            "options": [
                "Noun થી",
                "WH-words કે Auxiliary Verb થી",
                "Adjective થી",
                "Preposition થી"
            ],
            "answer": "WH-words કે Auxiliary Verb થી",
            "explanation": "પ્રશ્નાર્થ વાક્યો સામાન્ય રીતે WH-words (What, Why, etc.) અથવા સહાયકારક ક્રિયાપદો (Do, Is, Are, etc.) થી શરૂ થાય છે."
        },
        {
            "question": "આપેલ વાક્યનો પ્રકાર જણાવો:<br><b>Can you swim?</b>",
            "options": [
                "Assertive",
                "Negative",
                "Interrogative",
                "Imperative"
            ],
            "answer": "Interrogative",
            "explanation": "અહીં ક્ષમતા વિશે પ્રશ્ન પૂછ્યો છે, તેથી તે Interrogative છે."
        },
        {
            "question": "આપેલ વાક્યનો પ્રકાર જણાવો:<br><b>Who is your teacher?</b>",
            "options": [
                "Interrogative Sentence",
                "Assertive Sentence",
                "Imperative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Interrogative Sentence",
            "explanation": "'Who' થી શરૂ થતો પ્રશ્ન છે."
        },
        {
            "question": "નીચેનામાંથી કયા વાક્યમાં પ્રશ્નાર્થ ચિહ્ન ખૂટે છે?",
            "options": [
                "What is your name",
                "This is a pen.",
                "Go there.",
                "Hurrah! We won."
            ],
            "answer": "What is your name",
            "explanation": "'What is your name' એક પ્રશ્ન છે, તેથી અંતે '?' હોવું જોઈએ."
        },
        {
            "question": "Interrogative Sentence શું મેળવવા માટે વપરાય છે?",
            "options": [
                "આદેશ આપવા",
                "માહિતી મેળવવા",
                "લાગણી વ્યક્ત કરવા",
                "વિધાન કરવા"
            ],
            "answer": "માહિતી મેળવવા",
            "explanation": "પ્રશ્નાર્થ વાક્યોનો ઉપયોગ માહિતી (Information) મેળવવા માટે થાય છે."
        },
        {
            "question": "આ વાક્યમાં યોગ્ય ચિહ્ન મૂકો:<br><b>Will you come with me__</b>",
            "options": [
                ".",
                "!",
                "?",
                ","
            ],
            "answer": "?",
            "explanation": "આ એક પ્રશ્ન છે, તેથી અંતે પ્રશ્નાર્થ ચિહ્ન (?) આવશે."
        }
    ],
    "test-4": [
        {
            "question": "જે વાક્યમાં આજ્ઞા, વિનંતી કે સલાહનો ભાવ હોય તેને શું કહેવાય?",
            "options": [
                "Assertive Sentence",
                "Interrogative Sentence",
                "Imperative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Imperative Sentence",
            "explanation": "આજ્ઞા, વિનંતી, સલાહ કે સૂચન દર્શાવતા વાક્યોને Imperative Sentence (આજ્ઞાર્થ વાક્ય) કહેવાય છે."
        },
        {
            "question": "Imperative Sentence માં સામાન્ય રીતે કયો કર્તા (Subject) દેખાતો નથી?",
            "options": [
                "I",
                "He",
                "You",
                "They"
            ],
            "answer": "You",
            "explanation": "આજ્ઞાર્થ વાક્યોમાં 'You' અધ્યાહાર (understood/hidden) હોય છે. દા.ત. 'Sit down' એટલે '(You) Sit down'."
        },
        {
            "question": "આ વાક્ય કયા પ્રકારનું છે?<br><b>Open the window.</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "અહીં આદેશ આપવામાં આવ્યો છે, તેથી તે Imperative છે."
        },
        {
            "question": "નીચેનામાંથી કયું વાક્ય વિનંતી (Request) દર્શાવે છે?",
            "options": [
                "Get out.",
                "Please give me some water.",
                "I drink water.",
                "Do you want water?"
            ],
            "answer": "Please give me some water.",
            "explanation": "'Please' શબ્દ વિનંતી સૂચવે છે, જે Imperative વાક્યનો પ્રકાર છે."
        },
        {
            "question": "Imperative Sentence ની શરૂઆત સામાન્ય રીતે શેનાથી થાય છે?",
            "options": [
                "Noun થી",
                "Verb થી",
                "Adjective થી",
                "Pronoun થી"
            ],
            "answer": "Verb થી",
            "explanation": "આજ્ઞાર્થ વાક્યો સામાન્ય રીતે મુખ્ય ક્રિયાપદ (Main Verb) થી શરૂ થાય છે. દા.ત. 'Run', 'Stop', 'Help'."
        },
        {
            "question": "આ વાક્ય કયા પ્રકારનું છે?<br><b>Don't talk in the class.</b>",
            "options": [
                "Affirmative",
                "Imperative",
                "Interrogative",
                "Exclamatory"
            ],
            "answer": "Imperative",
            "explanation": "આ એક નકારાત્મક સૂચન/આદેશ છે, તેથી તે Imperative છે."
        },
        {
            "question": "નીચેનામાંથી કયું Imperative Sentence છે?",
            "options": [
                "She dances well.",
                "Be quiet.",
                "Are you waiting?",
                "What a car!"
            ],
            "answer": "Be quiet.",
            "explanation": "'Be quiet' એક આદેશ છે."
        },
        {
            "question": "આ વાક્યમાં શું ભાવ છે?<br><b>Take rest for a few days.</b>",
            "options": [
                "Order (આદેશ)",
                "Question (પ્રશ્ન)",
                "Advice (સલાહ)",
                "Exclamation (ઉદ્ગાર)"
            ],
            "answer": "Advice (સલાહ)",
            "explanation": "અહીં આરામ કરવાની સલાહ આપવામાં આવી છે."
        },
        {
            "question": "Imperative Sentence ના અંતે કયું ચિહ્ન આવે છે?",
            "options": [
                "?",
                "!",
                ".",
                "None"
            ],
            "answer": ".",
            "explanation": "સામાન્ય રીતે Imperative Sentence ના અંતે પૂર્ણવિરામ (.) આવે છે."
        },
        {
            "question": "આપેલ વાક્યનો પ્રકાર જણાવો:<br><b>Let us play cricket.</b>",
            "options": [
                "Imperative Sentence",
                "Assertive Sentence",
                "Interrogative Sentence",
                "Exclamatory Sentence"
            ],
            "answer": "Imperative Sentence",
            "explanation": "'Let' થી શરૂ થતાં વાક્યો દરખાસ્ત કે સૂચન દર્શાવે છે અને તે Imperative ની શ્રેણીમાં આવે છે."
        }
    ],
    "test-5": [
        {
            "question": "જે વાક્ય અચાનક ઉદ્ભવતી લાગણી કે આશ્ચર્ય વ્યક્ત કરે તેને શું કહેવાય?",
            "options": [
                "Assertive Sentence",
                "Interrogative Sentence",
                "Exclamatory Sentence",
                "Imperative Sentence"
            ],
            "answer": "Exclamatory Sentence",
            "explanation": "આનંદ, દુઃખ, આશ્ચર્ય જેવી લાગણીઓ વ્યક્ત કરતા વાક્યને Exclamatory Sentence (ઉદ્ગાર વાક્ય) કહેવાય છે."
        },
        {
            "question": "Exclamatory Sentence ના અંતે કયું ચિહ્ન આવે છે?",
            "options": [
                "?",
                ".",
                "!",
                ","
            ],
            "answer": "!",
            "explanation": "ઉદ્ગાર વાક્યના અંતે Exclamation Mark (!) આવે છે."
        },
        {
            "question": "આ વાક્ય કયા પ્રકારનું છે?<br><b>What a beautiful flower it is!</b>",
            "options": [
                "Assertive",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Exclamatory",
            "explanation": "આ વાક્ય આશ્ચર્ય વ્યક્ત કરે છે અને અંતે '!' છે."
        },
        {
            "question": "નીચેનામાંથી કયું Exclamatory Sentence છે?",
            "options": [
                "How old are you?",
                "I am very happy.",
                "How tall he is!",
                "Sit down."
            ],
            "answer": "How tall he is!",
            "explanation": "'How tall he is!' નવાઈ દર્શાવે છે."
        },
        {
            "question": "Exclamatory વાક્યો શેનાથી શરૂ થાય છે?",
            "options": [
                "What કે How થી",
                "Is કે Are થી",
                "Please થી",
                "Subject થી"
            ],
            "answer": "What કે How થી",
            "explanation": "શબ્દો 'What' અથવા 'How' થી મોટાભાગના ઉદ્ગાર વાક્યો શરૂ થાય છે."
        },
        {
            "question": "નીચેના વાક્યનો પ્રકાર ઓળખો:<br><b>Alas! He failed.</b>",
            "options": [
                "Exclamatory Sentence",
                "Assertive Sentence",
                "Imperative Sentence",
                "Interrogative Sentence"
            ],
            "answer": "Exclamatory Sentence",
            "explanation": "'Alas!' દુઃખની લાગણી વ્યક્ત કરે છે."
        },
        {
            "question": "આ વાક્ય કયું છે?<br><b>Hurrah! We won the match.</b>",
            "options": [
                "Imperative",
                "Interrogative",
                "Exclamatory",
                "Negative"
            ],
            "answer": "Exclamatory",
            "explanation": "'Hurrah!' આનંદની લાગણી વ્યક્ત કરે છે."
        },
        {
            "question": "આપેલ વાક્યનો પ્રકાર જણાવો:<br><b>How dare you!</b>",
            "options": [
                "Interrogative",
                "Imperative",
                "Exclamatory",
                "Assertive"
            ],
            "answer": "Exclamatory",
            "explanation": "આ વાક્ય ગુસ્સો કે આશ્ચર્યનો ભાવ દર્શાવે છે."
        },
        {
            "question": "નીચેનામાંથી કયો શબ્દ આનંદ વ્યક્ત કરે છે?",
            "options": [
                "Alas",
                "Oh",
                "Hurrah",
                "What"
            ],
            "answer": "Hurrah",
            "explanation": "'Hurrah' શબ્દ આનંદ (Joy) વ્યક્ત કરવા માટે વપરાય છે."
        },
        {
            "question": "નીચેનામાંથી કયો શબ્દ દુઃખ વ્યક્ત કરે છે?",
            "options": [
                "Bravo",
                "Alas",
                "Wow",
                "Hurrah"
            ],
            "answer": "Alas",
            "explanation": "'Alas' શબ્દ દુઃખ (Sorrow) વ્યક્ત કરવા માટે વપરાય છે."
        }
    ]
};
