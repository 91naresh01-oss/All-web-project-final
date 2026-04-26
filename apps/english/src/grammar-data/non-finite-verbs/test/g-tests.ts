import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "નીચેના વાક્યમાં Non-Finite Verb ઓળખો: 'I want to learn English.'",
      "options": [
        "want",
        "to learn",
        "learn",
        "English"
      ],
      "answer": "to learn",
      "explanation": "અહીં 'to learn' એ 'to' સાથેનું મૂળ ક્રિયાપદ (infinitive) છે. તે વાક્યનો મુખ્ય ક્રિયાપદ નથી પણ એક હેતુ દર્શાવે છે."
    },
    {
      "question": "નીચેના વાક્યમાં Gerund ઓળખો: 'Swimming is a good exercise.'",
      "options": [
        "is",
        "good",
        "Swimming",
        "exercise"
      ],
      "answer": "Swimming",
      "explanation": "અહીં 'Swimming' (ક્રિયાપદ 'swim' + ing) એ વાક્યના કર્તા (subject) તરીકે વપરાયું છે, તેથી તે Gerund છે."
    },
    {
      "question": "નીચેના વાક્યમાં Participle ઓળખો: 'I saw a running train.'",
      "options": [
        "saw",
        "a",
        "train",
        "running"
      ],
      "answer": "running",
      "explanation": "અહીં 'running' (ક્રિયાપદ 'run' + ing) એ 'train' સંજ્ઞાના વિશેષણ (adjective) તરીકે કાર્ય કરે છે, તેથી તે Present Participle છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He likes _______ chess.'",
      "options": [
        "play",
        "to playing",
        "playing",
        "to played"
      ],
      "answer": "playing",
      "explanation": "'Like' ક્રિયાપદ પછી સામાન્ય રીતે Gerund ('-ing' વાળું રૂપ) વપરાય છે."
    },
    {
      "question": "વાક્યમાં to-infinitive શોધો: 'She agreed to help me.'",
      "options": [
        "She",
        "agreed",
        "to help",
        "me"
      ],
      "answer": "to help",
      "explanation": "'to help' એ to-infinitive છે, કારણ કે તે 'to' અને ક્રિયાપદના મૂળ રૂપથી બનેલું છે."
    },
    {
      "question": "આ વાક્યમાં Gerund શોધો: 'My hobby is collecting stamps.'",
      "options": [
        "is",
        "hobby",
        "collecting",
        "stamps"
      ],
      "answer": "collecting",
      "explanation": "અહીં 'collecting' એ 'hobby' ને પૂરક (complement) તરીકે વર્ણવે છે અને ક્રિયાપદના '-ing' રૂપમાં છે, તેથી તે Gerund છે."
    },
    {
      "question": "આ વાક્યમાં Present Participle કયું છે?: 'The crying baby was hungry.'",
      "options": [
        "crying",
        "was",
        "hungry",
        "The"
      ],
      "answer": "crying",
      "explanation": "'crying' શબ્દ 'baby' સંજ્ઞાનું વર્ણન કરે છે, તેથી તે વિશેષણ તરીકે કાર્ય કરતું Present Participle છે."
    },
    {
      "question": "ખાલી જગ્યા માટે સાચો વિકલ્પ પસંદ કરો: 'It is easy _______ this question.'",
      "options": [
        "solving",
        "to solving",
        "to solve",
        "solved"
      ],
      "answer": "to solve",
      "explanation": "સામાન્ય રીતે 'It is + adjective' પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં Gerund ઓળખો: 'He is fond of reading books.'",
      "options": [
        "is",
        "fond",
        "reading",
        "books"
      ],
      "answer": "reading",
      "explanation": "'of' જેવા preposition પછી હંમેશા Gerund ('-ing' વાળું રૂપ) આવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'To err is human.'",
      "options": [
        "Gerund",
        "Present Participle",
        "Infinitive",
        "Past Participle"
      ],
      "answer": "Infinitive",
      "explanation": "'To err' એ વાક્યના કર્તા તરીકે વપરાયેલ to-infinitive છે."
    }
  ],
  "test-2": [
    {
      "question": "ખાલી જગ્યામાં યોગ્ય non-finite verb મૂકો: 'Let me _______.'",
      "options": [
        "to go",
        "going",
        "go",
        "gone"
      ],
      "answer": "go",
      "explanation": "'Let' ક્રિયાપદ પછી હંમેશા 'to' વગરનું મૂળ ક્રિયાપદ (bare infinitive) આવે છે."
    },
    {
      "question": "આ વાક્યમાં Past Participle શોધો: 'The broken glass was on the floor.'",
      "options": [
        "broken",
        "glass",
        "was",
        "floor"
      ],
      "answer": "broken",
      "explanation": "'broken' (break નું V3 રૂપ) એ 'glass' સંજ્ઞાનું વિશેષણ તરીકે વર્ણન કરે છે, તેથી તે Past Participle છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I enjoy _______ to music.'",
      "options": [
        "listen",
        "to listening",
        "listening",
        "to listen"
      ],
      "answer": "listening",
      "explanation": "'Enjoy' ક્રિયાપદ પછી સામાન્ય રીતે Gerund ('-ing' વાળું રૂપ) વપરાય છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'Barking dogs seldom bite.'",
      "options": [
        "Gerund",
        "Present Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Present Participle",
      "explanation": "'Barking' શબ્દ 'dogs' સંજ્ઞાનું વર્ણન કરતું વિશેષણ છે, તેથી તે Present Participle છે."
    },
    {
      "question": "સાચો વિકલ્પ પસંદ કરો: 'We decided _______ a new car.'",
      "options": [
        "buying",
        "to buy",
        "buy",
        "bought"
      ],
      "answer": "to buy",
      "explanation": "'Decide' ક્રિયાપદ પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "Gerund શોધો: 'She is good at painting.'",
      "options": [
        "is",
        "good",
        "at",
        "painting"
      ],
      "answer": "painting",
      "explanation": "'at' એ preposition છે, અને preposition પછી ક્રિયાપદનું '-ing' વાળું રૂપ (Gerund) આવે છે."
    },
    {
      "question": "આ વાક્યમાં infinitive ઓળખો: 'He came here to meet his friend.'",
      "options": [
        "came",
        "here",
        "to meet",
        "friend"
      ],
      "answer": "to meet",
      "explanation": "'to meet' એ ક્રિયાનો હેતુ દર્શાવે છે અને 'to' + મૂળ ક્રિયાપદથી બનેલું છે, તેથી તે to-infinitive છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'Would you mind _______ the door?'",
      "options": [
        "closing",
        "to close",
        "close",
        "closed"
      ],
      "answer": "closing",
      "explanation": "'Would you mind' પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "વાક્યમાં Past Participle ઓળખો: 'A burnt child dreads the fire.'",
      "options": [
        "burnt",
        "child",
        "dreads",
        "fire"
      ],
      "answer": "burnt",
      "explanation": "'burnt' (burn નું V3 રૂપ) એ 'child' સંજ્ઞાના વિશેષણ તરીકે વપરાયું છે, તેથી તે Past Participle છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'It is important _______ your homework.'",
      "options": [
        "doing",
        "to doing",
        "do",
        "to do"
      ],
      "answer": "to do",
      "explanation": "વાક્યની રચના 'It is + adjective' પછી to-infinitive નો ઉપયોગ સૂચવે છે."
    }
  ],
  "test-3": [
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He made me cry.'",
      "options": [
        "Gerund",
        "Present Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "Bare Infinitive",
      "explanation": "'Make' ક્રિયાપદના active voice માં બીજા ક્રિયાપદ સાથે 'to' વગરનું મૂળ રૂપ (Bare Infinitive) વપરાય છે. (made someone do something)"
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She is busy _______ a letter.'",
      "options": [
        "to write",
        "writing",
        "write",
        "written"
      ],
      "answer": "writing",
      "explanation": "'busy' શબ્દ પછી સામાન્ય રીતે Gerund ('-ing' વાળું રૂપ) આવે છે."
    },
    {
      "question": "આ વાક્યમાં Participle શોધો: 'I found the door locked.'",
      "options": [
        "found",
        "the",
        "door",
        "locked"
      ],
      "answer": "locked",
      "explanation": "'locked' (lock નું V3 રૂપ) એ 'door' સંજ્ઞાની સ્થિતિનું વર્ણન કરે છે. તે Past Participle છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'They are planning _______ to Goa.'",
      "options": [
        "going",
        "to go",
        "go",
        "to going"
      ],
      "answer": "to go",
      "explanation": "'Plan' ક્રિયાપદ પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "Gerund શોધો: 'Thank you for helping me.'",
      "options": [
        "Thank",
        "for",
        "helping",
        "me"
      ],
      "answer": "helping",
      "explanation": "'for' એ preposition છે, અને preposition પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "વાક્યમાં to-infinitive ઓળખો: 'To forgive is divine.'",
      "options": [
        "To forgive",
        "is",
        "divine",
        "To"
      ],
      "answer": "To forgive",
      "explanation": "'To forgive' એ વાક્યના કર્તા (subject) તરીકે વપરાયેલ to-infinitive છે."
    },
    {
      "question": "ખાલી જગ્યા માટે યોગ્ય શબ્દ પસંદ કરો: 'I heard him _______ a song.'",
      "options": [
        "sing",
        "to sing",
        "singing",
        "sang"
      ],
      "answer": "sing",
      "explanation": "'Hear' જેવા સંવેદનાના ક્રિયાપદ (verb of perception) પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) વપરાય છે. અહીં 'singing' પણ સાચું હોઈ શકે છે, પણ 'sing' વધુ સામાન્ય છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'I am tired of waiting.'",
      "options": [
        "Infinitive",
        "Gerund",
        "Present Participle",
        "Past Participle"
      ],
      "answer": "Gerund",
      "explanation": "'of' એ preposition છે, અને તેના પછી આવતું ક્રિયાપદનું '-ing' વાળું રૂપ 'waiting' એ Gerund છે."
    },
    {
      "question": "Past Participle શોધો: 'The written report was submitted.'",
      "options": [
        "written",
        "report",
        "was",
        "submitted"
      ],
      "answer": "written",
      "explanation": "'written' (write નું V3 રૂપ) એ 'report' સંજ્ઞાના વિશેષણ તરીકે કાર્ય કરે છે, માટે તે Past Participle છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He refused _______ my question.'",
      "options": [
        "answering",
        "to answer",
        "answer",
        "to answering"
      ],
      "answer": "to answer",
      "explanation": "'Refuse' ક્રિયાપદ પછી to-infinitive નો ઉપયોગ થાય છે."
    }
  ],
  "test-4": [
    {
      "question": "આ વાક્યમાં Gerund કયું છે?: 'He stopped smoking last year.'",
      "options": [
        "stopped",
        "smoking",
        "last",
        "year"
      ],
      "answer": "smoking",
      "explanation": "'Stop' ક્રિયાપદ પછી જો કોઈ ક્રિયા અટકાવવાનો અર્થ હોય તો Gerund (-ing form) વપરાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'We went to the market _______ vegetables.'",
      "options": [
        "to buy",
        "buying",
        "buy",
        "for buying"
      ],
      "answer": "to buy",
      "explanation": "હેતુ દર્શાવવા માટે to-infinitive નો ઉપયોગ થાય છે. અહીં શાકભાજી ખરીદવાનો હેતુ છે."
    },
    {
      "question": "વાક્યમાં Present Participle ઓળખો: 'Seeing the police, the thief ran away.'",
      "options": [
        "Seeing",
        "police",
        "thief",
        "ran away"
      ],
      "answer": "Seeing",
      "explanation": "'Seeing' એ એક ક્રિયાનું વર્ણન કરે છે જે બીજી ક્રિયાનું કારણ છે. તે Present Participle છે જે adverbial phrase બનાવે છે."
    },
    {
      "question": "ખાલી જગ્યામાં યોગ્ય ક્રિયાપદનું રૂપ મૂકો: 'She avoids _______ fast food.'",
      "options": [
        "to eat",
        "eating",
        "eat",
        "eaten"
      ],
      "answer": "eating",
      "explanation": "'Avoid' ક્રિયાપદ પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "Past Participle શોધો: 'The story was written by a famous author.'",
      "options": [
        "story",
        "was",
        "written",
        "famous"
      ],
      "answer": "written",
      "explanation": "Passive voice માં મુખ્ય ક્રિયાપદ તરીકે 'write' નું V3 રૂપ 'written' વપરાયું છે, જે Past Participle છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'It's no use _______ over spilt milk.'",
      "options": [
        "to cry",
        "crying",
        "cry",
        "cried"
      ],
      "answer": "crying",
      "explanation": "'It's no use' અથવા 'It's no good' પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "Bare Infinitive શોધો: 'You had better _______ now.'",
      "options": [
        "leave",
        "to leave",
        "leaving",
        "left"
      ],
      "answer": "leave",
      "explanation": "'Had better' પછી હંમેશા 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I am looking forward to _______ you.'",
      "options": [
        "meet",
        "meeting",
        "met",
        "to meet"
      ],
      "answer": "meeting",
      "explanation": "'look forward to' માં 'to' એ preposition છે, તેથી તેના પછી Gerund ('-ing' form) આવે છે, infinitive નહીં."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He has a house to live in.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "None"
      ],
      "answer": "Infinitive",
      "explanation": "'to live' એ to-infinitive છે જે 'house' સંજ્ઞાનું વર્ણન કરે છે."
    },
    {
      "question": "ખાલી જગ્યા માટે યોગ્ય વિકલ્પ પસંદ કરો: 'She prevented me from _______ there.'",
      "options": [
        "go",
        "to go",
        "going",
        "gone"
      ],
      "answer": "going",
      "explanation": "'Prevent from' પછી હંમેશા Gerund ('-ing' form) નો ઉપયોગ થાય છે."
    }
  ],
  "test-5": [
    {
      "question": "વાક્યમાં Participle ઓળખો: 'The teacher found the student sleeping in the class.'",
      "options": [
        "found",
        "student",
        "sleeping",
        "class"
      ],
      "answer": "sleeping",
      "explanation": "અહીં 'sleeping' એ 'student' શું કરી રહ્યો હતો તે દર્શાવે છે. તે Present Participle છે જે object complement તરીકે કાર્ય કરે છે."
    },
    {
      "question": "યોગ્ય non-finite verb પસંદ કરો: 'He promised _______ me.'",
      "options": [
        "helping",
        "to helping",
        "to help",
        "help"
      ],
      "answer": "to help",
      "explanation": "'Promise' ક્રિયાપદ પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I can't help _______ at his jokes.'",
      "options": [
        "laugh",
        "to laugh",
        "laughing",
        "laughed"
      ],
      "answer": "laughing",
      "explanation": "'Can't help' (રોકી ન શકવું) પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "આ વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'Walking on the grass is forbidden.'",
      "options": [
        "Infinitive",
        "Gerund",
        "Present Participle",
        "Past Participle"
      ],
      "answer": "Gerund",
      "explanation": "'Walking' એ વાક્યના કર્તા (subject) તરીકે વપરાયું છે, તેથી તે Gerund છે."
    },
    {
      "question": "Past Participle શોધો: 'Tired from the journey, he went to sleep.'",
      "options": [
        "Tired",
        "journey",
        "went",
        "sleep"
      ],
      "answer": "Tired",
      "explanation": "'Tired' (tire નું V3 રૂપ) એ 'he' ની સ્થિતિનું વર્ણન કરે છે અને વાક્યની શરૂઆતમાં આવીને કારણ દર્શાવે છે. તે Past Participle છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She is learning _______ the guitar.'",
      "options": [
        "playing",
        "play",
        "to play",
        "to playing"
      ],
      "answer": "to play",
      "explanation": "'Learn' ક્રિયાપદ પછી કોઈ કળા કે આવડત શીખવાનો અર્થ હોય ત્યારે to-infinitive આવે છે."
    },
    {
      "question": "Gerund ઓળખો: 'My father’s job is driving a bus.'",
      "options": [
        "father's",
        "job",
        "is",
        "driving"
      ],
      "answer": "driving",
      "explanation": "અહીં 'driving' એ 'job' શું છે તે સમજાવે છે (complement of the verb 'is'), તેથી તે Gerund છે."
    },
    {
      "question": "ખાલી જગ્યા માટે સાચો વિકલ્પ પસંદ કરો: 'The man seems ______ about something.'",
      "options": [
        "to worry",
        "worrying",
        "worried",
        "to be worried"
      ],
      "answer": "worried",
      "explanation": "'Seems' પછી સામાન્ય રીતે Past Participle (worried) વિશેષણ તરીકે વપરાય છે જે વ્યક્તિની સ્થિતિ દર્શાવે છે. 'to be worried' પણ સાચું છે પણ 'worried' વધુ સામાન્ય છે."
    },
    {
      "question": "વાક્યમાં Bare Infinitive શોધો: 'I saw him enter the room.'",
      "options": [
        "saw",
        "him",
        "enter",
        "room"
      ],
      "answer": "enter",
      "explanation": "'See' જેવા સંવેદનાના ક્રિયાપદ (verb of perception) પછી object આવે અને પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He is used to _______ up early.'",
      "options": [
        "getting",
        "get",
        "to get",
        "got"
      ],
      "answer": "getting",
      "explanation": "'be used to' (ની આદત હોવી) પછી હંમેશા Gerund (-ing form) આવે છે."
    }
  ],
  "test-6": [
    {
      "question": "નીચેના વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'I have some clothes to wash.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Infinitive",
      "explanation": "'to wash' એ to-infinitive છે, જે 'clothes' સંજ્ઞા વિશે વધુ માહિતી આપે છે (કપડાં શા માટે છે)."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She insisted on _______ with us.'",
      "options": [
        "come",
        "to come",
        "coming",
        "came"
      ],
      "answer": "coming",
      "explanation": "'insist on' માં 'on' એ preposition છે, તેથી તેના પછી Gerund ('-ing' form) આવે છે."
    },
    {
      "question": "વાક્યમાં Past Participle ઓળખો: 'The police found the stolen car.'",
      "options": [
        "police",
        "found",
        "stolen",
        "car"
      ],
      "answer": "stolen",
      "explanation": "'stolen' (steal નું V3 રૂપ) એ 'car' સંજ્ઞાના વિશેષણ તરીકે વપરાયું છે, તેથી તે Past Participle છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He offered _______ me a ride.'",
      "options": [
        "giving",
        "to giving",
        "give",
        "to give"
      ],
      "answer": "to give",
      "explanation": "'Offer' ક્રિયાપદ પછી સામાન્ય રીતે to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "Gerund શોધો: 'I dislike waiting in queues.'",
      "options": [
        "dislike",
        "waiting",
        "in",
        "queues"
      ],
      "answer": "waiting",
      "explanation": "'Dislike' ક્રિયાપદ પછી Gerund ('-ing' form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She made her children _______ their room.'",
      "options": [
        "clean",
        "to clean",
        "cleaning",
        "cleaned"
      ],
      "answer": "clean",
      "explanation": "'Make' ના active voice માં object પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "વાક્યમાં Present Participle ઓળખો: 'The story was very interesting.'",
      "options": [
        "story",
        "was",
        "very",
        "interesting"
      ],
      "answer": "interesting",
      "explanation": "અહીં 'interesting' એ 'story' નું વર્ણન કરતું વિશેષણ છે. તે ક્રિયાપદ 'interest' માંથી બનેલું છે, તેથી તે Present Participle છે."
    },
    {
      "question": "સાચો વિકલ્પ પસંદ કરો: 'It is time _______ to bed.'",
      "options": [
        "going",
        "to go",
        "go",
        "went"
      ],
      "answer": "to go",
      "explanation": "'It is time' પછી કોઈ ક્રિયા કરવા માટે to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He is afraid of _______ alone.'",
      "options": [
        "be",
        "to be",
        "being",
        "been"
      ],
      "answer": "being",
      "explanation": "'of' એ preposition છે, જેના પછી Gerund આવે છે. 'be' નું Gerund રૂપ 'being' છે."
    },
    {
      "question": "આ વાક્યમાં non-finite verb શું છે?: 'I heard the bell ring.'",
      "options": [
        "heard",
        "bell",
        "ring",
        "the"
      ],
      "answer": "ring",
      "explanation": "'Hear' જેવા સંવેદનાના ક્રિયાપદ પછી object અને પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    }
  ],
  "test-7": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He failed _______ the exam.'",
      "options": [
        "passing",
        "to pass",
        "pass",
        "to passing"
      ],
      "answer": "to pass",
      "explanation": "'Fail' ક્રિયાપદ પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં Gerund શોધો: 'Painting is my favorite pastime.'",
      "options": [
        "Painting",
        "is",
        "my",
        "favorite"
      ],
      "answer": "Painting",
      "explanation": "અહીં 'Painting' વાક્યના કર્તા (subject) તરીકે કાર્ય કરે છે, તેથી તે Gerund છે."
    },
    {
      "question": "Participle નો પ્રકાર જણાવો: 'The defeated army fled.'",
      "options": [
        "Present Participle",
        "Past Participle",
        "Perfect Participle",
        "Gerund"
      ],
      "answer": "Past Participle",
      "explanation": "'defeated' (defeat નું V3 રૂપ) એ 'army' સંજ્ઞાના વિશેષણ તરીકે વપરાયું છે, તેથી તે Past Participle છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She doesn't mind _______ for me.'",
      "options": [
        "to wait",
        "wait",
        "waiting",
        "waited"
      ],
      "answer": "waiting",
      "explanation": "'Mind' (વાંધો હોવો) ક્રિયાપદ પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'They were seen _______ out of the house.'",
      "options": [
        "to go",
        "going",
        "go",
        "gone"
      ],
      "answer": "to go",
      "explanation": "'see' ક્રિયાપદનું passive voice ('were seen') હોય ત્યારે to-infinitive નો ઉપયોગ થાય છે. Active voice ('saw them') હોત તો 'go' અથવા 'going' આવત."
    },
    {
      "question": "વાક્યમાં to-infinitive શોધો: 'My dream is to become a doctor.'",
      "options": [
        "dream",
        "is",
        "to become",
        "doctor"
      ],
      "answer": "to become",
      "explanation": "'to become' એ to-infinitive છે, જે 'dream' શું છે તે સમજાવે છે (complement)."
    },
    {
      "question": "Gerund ઓળખો: 'I am tired of arguing with you.'",
      "options": [
        "tired",
        "of",
        "arguing",
        "with"
      ],
      "answer": "arguing",
      "explanation": "'of' એ preposition છે, અને preposition પછી ક્રિયાપદનું -ing વાળું રૂપ (Gerund) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She is thinking of _______ a new business.'",
      "options": [
        "start",
        "to start",
        "starting",
        "started"
      ],
      "answer": "starting",
      "explanation": "'think of' માં 'of' એ preposition છે, તેથી તેના પછી Gerund ('-ing' form) આવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'The wounded man was taken to the hospital.'",
      "options": [
        "Gerund",
        "Infinitive",
        "Past Participle",
        "Present Participle"
      ],
      "answer": "Past Participle",
      "explanation": "'wounded' (wound નું V3 રૂપ) એ 'man' સંજ્ઞાના વિશેષણ તરીકે કાર્ય કરે છે, તેથી તે Past Participle છે."
    },
    {
      "question": "સાચો વિકલ્પ પસંદ કરો: 'I can't afford _______ such an expensive car.'",
      "options": [
        "buying",
        "to buy",
        "buy",
        "bought"
      ],
      "answer": "to buy",
      "explanation": "'Afford' ક્રિયાપદ પછી to-infinitive નો ઉપયોગ થાય છે."
    }
  ],
  "test-8": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He spends a lot of time _______ TV.'",
      "options": [
        "watching",
        "to watch",
        "watch",
        "watched"
      ],
      "answer": "watching",
      "explanation": "'Spend time' પછી કોઈ ક્રિયા કરવાના અર્થમાં Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં Bare Infinitive ઓળખો: 'You need not _______ so fast.'",
      "options": [
        "need",
        "not",
        "drive",
        "so fast"
      ],
      "answer": "drive",
      "explanation": "'Need not' એ modal verb તરીકે વપરાયું છે, તેથી તેના પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "Gerund શોધો: 'Giving is better than receiving.'",
      "options": [
        "is",
        "better",
        "than",
        "Giving"
      ],
      "answer": "Giving",
      "explanation": "'Giving' વાક્યના કર્તા (subject) તરીકે વપરાયું છે, તેથી તે Gerund છે. 'receiving' પણ Gerund છે જે 'than' preposition પછી આવ્યું છે."
    },
    {
      "question": "ખાલી જગ્યા માટે યોગ્ય વિકલ્પ પસંદ કરો: 'I am planning _______ my grandparents this weekend.'",
      "options": [
        "visiting",
        "to visit",
        "visit",
        "visited"
      ],
      "answer": "to visit",
      "explanation": "'Plan' ક્રિયાપદ પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં Participle શોધો: 'The boy, carrying a heavy bag, walked slowly.'",
      "options": [
        "boy",
        "carrying",
        "bag",
        "walked"
      ],
      "answer": "carrying",
      "explanation": "'carrying a heavy bag' એ Present Participle phrase છે જે 'boy' સંજ્ઞા વિશે વધારાની માહિતી આપે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He is accused of _______ money.'",
      "options": [
        "steal",
        "to steal",
        "stealing",
        "stolen"
      ],
      "answer": "stealing",
      "explanation": "'accused of' માં 'of' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She taught me _______.'",
      "options": [
        "how to swim",
        "swimming",
        "to swimming",
        "how swimming"
      ],
      "answer": "how to swim",
      "explanation": "'Teach' ક્રિયાપદ પછી કોઈ પ્રવૃત્તિ કેવી રીતે કરવી તે શીખવવા માટે 'how to + infinitive' નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં Past Participle શોધો: 'He lived in a house built of stone.'",
      "options": [
        "lived",
        "house",
        "built",
        "stone"
      ],
      "answer": "built",
      "explanation": "'built' (build નું V3 રૂપ) એ 'house' સંજ્ઞાનું વર્ણન કરતું Past Participle છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He has given up _______.'",
      "options": [
        "smoke",
        "to smoke",
        "smoking",
        "smoked"
      ],
      "answer": "smoking",
      "explanation": "'Give up' (છોડી દેવું) phrasal verb પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "Infinitive શોધો: 'The doctor advised me to take rest.'",
      "options": [
        "advised",
        "me",
        "to take",
        "rest"
      ],
      "answer": "to take",
      "explanation": "'advise' ક્રિયાપદ પછી object ('me') આવે અને પછી to-infinitive ('to take') આવે છે."
    }
  ],
  "test-9": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'It is difficult _______ him.'",
      "options": [
        "to convince",
        "convincing",
        "convince",
        "convinced"
      ],
      "answer": "to convince",
      "explanation": "વાક્યની રચના 'It is + adjective' પછી to-infinitive નો ઉપયોગ સૂચવે છે."
    },
    {
      "question": "Gerund શોધો: 'She succeeded in winning the prize.'",
      "options": [
        "succeeded",
        "in",
        "winning",
        "prize"
      ],
      "answer": "winning",
      "explanation": "'in' એ preposition છે, અને 'succeed in' પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "વાક્યમાં Participle નો પ્રકાર જણાવો: 'The barking dog frightened the little girl.'",
      "options": [
        "Gerund",
        "Past Participle",
        "Present Participle",
        "Infinitive"
      ],
      "answer": "Present Participle",
      "explanation": "'barking' શબ્દ 'dog' સંજ્ઞાનું વર્ણન કરતું વિશેષણ છે, તેથી તે Present Participle છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I want you _______ this letter.'",
      "options": [
        "post",
        "to post",
        "posting",
        "posted"
      ],
      "answer": "to post",
      "explanation": "'Want' ક્રિયાપદ પછી object ('you') અને પછી to-infinitive આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He practices _______ the piano every day.'",
      "options": [
        "play",
        "to play",
        "playing",
        "to playing"
      ],
      "answer": "playing",
      "explanation": "'Practice' ક્રિયાપદ પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "Past Participle શોધો: 'The windows were broken.'",
      "options": [
        "windows",
        "were",
        "broken",
        "The"
      ],
      "answer": "broken",
      "explanation": "'broken' એ passive voice માં વપરાયેલ Past Participle (V3 of break) છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I am busy _______ my project.'",
      "options": [
        "to complete",
        "completing",
        "complete",
        "completed"
      ],
      "answer": "completing",
      "explanation": "'busy' શબ્દ પછી કોઈ ક્રિયામાં વ્યસ્ત હોવાનો અર્થ દર્શાવવા Gerund (-ing form) વપરાય છે."
    },
    {
      "question": "Bare Infinitive શોધો: 'He helped me _______ my luggage.'",
      "options": [
        "carry",
        "to carry",
        "carrying",
        "carried"
      ],
      "answer": "carry",
      "explanation": "'Help' ક્રિયાપદ પછી object ('me') આવે ત્યારે Bare Infinitive ('carry') અથવા to-infinitive ('to carry') બંને વાપરી શકાય છે. Bare Infinitive વધુ સામાન્ય છે."
    },
    {
      "question": "વાક્યમાં Gerund ઓળખો: 'I can't stand waiting in long lines.'",
      "options": [
        "stand",
        "waiting",
        "in",
        "long"
      ],
      "answer": "waiting",
      "explanation": "'Can't stand' (સહન ન કરી શકવું) પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The teacher told me _______ quiet.'",
      "options": [
        "be",
        "to be",
        "being",
        "to being"
      ],
      "answer": "to be",
      "explanation": "'Tell' ક્રિયાપદ પછી object ('me') અને પછી to-infinitive નો ઉપયોગ થાય છે."
    }
  ],
  "test-10": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'She asked me _______ her a favor.'",
      "options": [
        "doing",
        "to do",
        "do",
        "done"
      ],
      "answer": "to do",
      "explanation": "'Ask' ક્રિયાપદ પછી object ('me') અને પછી કોઈ વિનંતીના અર્થમાં to-infinitive આવે છે."
    },
    {
      "question": "વાક્યમાં Gerund શોધો: 'Reading is a good way to improve vocabulary.'",
      "options": [
        "Reading",
        "is",
        "good",
        "improve"
      ],
      "answer": "Reading",
      "explanation": "'Reading' વાક્યના કર્તા (subject) તરીકે વપરાયું છે, તેથી તે Gerund છે."
    },
    {
      "question": "Participle ઓળખો: 'The rising sun looks beautiful.'",
      "options": [
        "rising",
        "sun",
        "looks",
        "beautiful"
      ],
      "answer": "rising",
      "explanation": "'rising' એ Present Participle છે જે 'sun' સંજ્ઞાના વિશેષણ તરીકે કાર્ય કરે છે."
    },
    {
      "question": "ખાલી જગ્યા માટે યોગ્ય વિકલ્પ પસંદ કરો: 'He has decided _______ abroad.'",
      "options": [
        "studying",
        "to study",
        "study",
        "studied"
      ],
      "answer": "to study",
      "explanation": "'Decide' ક્રિયાપદ પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "Bare Infinitive શોધો: 'Let's _______ for a walk.'",
      "options": [
        "go",
        "to go",
        "going",
        "gone"
      ],
      "answer": "go",
      "explanation": "'Let's' (Let us) પછી હંમેશા 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He is addicted to _______ video games.'",
      "options": [
        "play",
        "to play",
        "playing",
        "played"
      ],
      "answer": "playing",
      "explanation": "'addicted to' માં 'to' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "Past Participle ઓળખો: 'He was punished for his mistake.'",
      "options": [
        "was",
        "punished",
        "for",
        "mistake"
      ],
      "answer": "punished",
      "explanation": "આ passive voice નું વાક્ય છે, જેમાં 'punished' એ Past Participle (V3) છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She went to the library _______ some books.'",
      "options": [
        "borrowing",
        "borrow",
        "to borrow",
        "borrowed"
      ],
      "answer": "to borrow",
      "explanation": "હેતુ દર્શાવવા માટે to-infinitive નો ઉપયોગ થાય છે. અહીં પુસ્તકો ઉધાર લેવાનો હેતુ છે."
    },
    {
      "question": "Gerund શોધો: 'I am excited about visiting Paris.'",
      "options": [
        "excited",
        "about",
        "visiting",
        "Paris"
      ],
      "answer": "visiting",
      "explanation": "'about' એ preposition છે, અને preposition પછી ક્રિયાપદનું -ing વાળું રૂપ (Gerund) આવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He was made to confess his crime.'",
      "options": [
        "Gerund",
        "Bare Infinitive",
        "To-infinitive",
        "Participle"
      ],
      "answer": "To-infinitive",
      "explanation": "'make' ક્રિયાપદનું passive voice ('was made') હોય ત્યારે to-infinitive ('to confess') નો ઉપયોગ થાય છે."
    }
  ],
  "test-11": [
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He stopped _______ a newspaper.'",
      "options": [
        "to read",
        "reading",
        "read",
        "having read"
      ],
      "answer": "to read",
      "explanation": "'Stop' પછી to-infinitive નો અર્થ 'કોઈક ક્રિયા કરવા માટે અટકવું' થાય છે. અહીં તે અખબાર વાંચવા માટે અટક્યો. જો 'reading' હોત તો અર્થ 'વાંચવાનું બંધ કરી દીધું' થાત."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I remember _______ him at the party last year.'",
      "options": [
        "to see",
        "seeing",
        "saw",
        "to have seen"
      ],
      "answer": "seeing",
      "explanation": "'Remember' પછી Gerund (-ing form) નો અર્થ ભૂતકાળમાં બનેલી ઘટનાને યાદ કરવી તેવો થાય છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'Having finished his homework, he went out to play.'",
      "options": [
        "Present Participle",
        "Past Participle",
        "Perfect Participle",
        "Gerund"
      ],
      "answer": "Perfect Participle",
      "explanation": "'Having + V3' (Having finished) ની રચના Perfect Participle કહેવાય છે. તે દર્શાવે છે કે એક ક્રિયા પૂરી થયા પછી બીજી ક્રિયા શરૂ થઈ."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I regret _______ you the bad news.'",
      "options": [
        "telling",
        "to tell",
        "told",
        "to have told"
      ],
      "answer": "to tell",
      "explanation": "'Regret' પછી to-infinitive નો અર્થ 'દુઃખ સાથે કંઈક કહેવું' થાય છે (ભવિષ્યની ક્રિયા). જો 'telling' હોત તો અર્થ 'કંઈક કહી દીધાનો અફસોસ' થાત (ભૂતકાળની ક્રિયા)."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He is not accustomed to _______ so much.'",
      "options": [
        "work",
        "working",
        "be working",
        "to work"
      ],
      "answer": "working",
      "explanation": "'Accustomed to' (ની ટેવ હોવી) પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'We watched the artist _______ a beautiful portrait.'",
      "options": [
        "to draw",
        "drawing",
        "drew",
        "to have drawn"
      ],
      "answer": "drawing",
      "explanation": "'Watch' જેવા સંવેદનાના ક્રિયાપદ પછી જો ક્રિયા ચાલુ હોય તેવું દર્શાવવું હોય તો Present Participle ('drawing') વપરાય છે. 'draw' (bare infinitive) પણ વાપરી શકાય."
    },
    {
      "question": "વાક્યને ફરીથી લખો: 'He was sorry that he missed the train.' Gerund નો ઉપયોગ કરો.",
      "options": [
        "He was sorry for missing the train.",
        "He was sorry to miss the train.",
        "He was sorry about to miss the train.",
        "He was sorry that he has missed the train."
      ],
      "answer": "He was sorry for missing the train.",
      "explanation": "'sorry for' પછી Gerund નો ઉપયોગ કરીને વાક્યનો ભાવ જાળવી શકાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I am opposed to _______ new taxes.'",
      "options": [
        "introduce",
        "to introduce",
        "introducing",
        "introduced"
      ],
      "answer": "introducing",
      "explanation": "'Opposed to' માં 'to' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The book is worth _______.'",
      "options": [
        "to read",
        "reading",
        "read",
        "to be read"
      ],
      "answer": "reading",
      "explanation": "'Worth' પછી હંમેશા Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'His greatest pleasure is singing.'",
      "options": [
        "Participle",
        "Infinitive",
        "Gerund",
        "Bare Infinitive"
      ],
      "answer": "Gerund",
      "explanation": "અહીં 'singing' એ ક્રિયાપદ 'is' ના complement (પૂરક) તરીકે વપરાયું છે અને તે એક પ્રવૃત્તિનું નામ છે, તેથી તે Gerund છે."
    }
  ],
  "test-12": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He went on _______ even though I told him to stop.'",
      "options": [
        "to talk",
        "talking",
        "talked",
        "talk"
      ],
      "answer": "talking",
      "explanation": "'Go on' પછી Gerund (-ing form) નો અર્થ 'કોઈ ક્રિયા ચાલુ રાખવી' તેવો થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I meant _______ the letter, but I forgot.'",
      "options": [
        "to post",
        "posting",
        "post",
        "to have posted"
      ],
      "answer": "to post",
      "explanation": "'Mean' પછી to-infinitive નો અર્થ 'ઈરાદો હોવો' તેવો થાય છે."
    },
    {
      "question": "વાક્યમાં Perfect Participle શોધો: 'Having rested, we continued our journey.'",
      "options": [
        "Having rested",
        "rested",
        "continued",
        "journey"
      ],
      "answer": "Having rested",
      "explanation": "'Having + V3' ની રચના Perfect Participle છે, જે દર્શાવે છે કે આરામ કર્યા પછી યાત્રા ફરી શરૂ થઈ."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She is committed to _______ the poor.'",
      "options": [
        "help",
        "helping",
        "to help",
        "have helped"
      ],
      "answer": "helping",
      "explanation": "'Committed to' માં 'to' એ preposition તરીકે વપરાયું છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'Try _______ this key in the lock.'",
      "options": [
        "to put",
        "putting",
        "put",
        "to putting"
      ],
      "answer": "putting",
      "explanation": "'Try' પછી Gerund (-ing form) નો અર્થ 'પ્રયોગ કરી જોવો' થાય છે. અહીં ચાવી તાળામાં નાખીને પ્રયત્ન કરવાની વાત છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He needs _______ his car.'",
      "options": [
        "to wash",
        "washing",
        "wash",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "'Need' પછી to-infinitive ('to wash') નો અર્થ 'કામ કરવાની જરૂર છે' (active) થાય છે. 'Need' પછી Gerund ('washing') નો અર્થ 'કામ થવાની જરૂર છે' (passive) થાય છે. બંને સાચા છે."
    },
    {
      "question": "વાક્યને Gerund નો ઉપયોગ કરી જોડો: 'He writes novels. It is his profession.'",
      "options": [
        "He writes novels for his profession.",
        "To write novels is his profession.",
        "Writing novels is his profession.",
        "His profession is to write novels."
      ],
      "answer": "Writing novels is his profession.",
      "explanation": "અહીં 'Writing novels' એ Gerund phrase છે જે વાક્યના કર્તા તરીકે કાર્ય કરે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I can't imagine him _______ such a thing.'",
      "options": [
        "to do",
        "doing",
        "does",
        "done"
      ],
      "answer": "doing",
      "explanation": "'Imagine' ક્રિયાપદ પછી object ('him') અને પછી Gerund (-ing form) અથવા Present Participle આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'They were made _______ overtime.'",
      "options": [
        "work",
        "working",
        "to work",
        "to working"
      ],
      "answer": "to work",
      "explanation": "જ્યારે 'make' ક્રિયાપદ passive voice ('were made') માં હોય, ત્યારે તેની સાથે to-infinitive આવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'The problem is to find a solution.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to find' એ to-infinitive છે જે 'problem' શું છે તે સમજાવે છે (complement)."
    }
  ],
  "test-13": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'She couldn't help _______ when she heard the joke.'",
      "options": [
        "laughing",
        "to laugh",
        "laugh",
        "laughed"
      ],
      "answer": "laughing",
      "explanation": "'Couldn't help' (હસવું રોકી ન શકવું) પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The purpose of his visit was _______ our new office.'",
      "options": [
        "seeing",
        "to see",
        "see",
        "to have seen"
      ],
      "answer": "to see",
      "explanation": "હેતુ કે કારણ દર્શાવવા માટે to-infinitive નો ઉપયોગ થાય છે. અહીં 'was' ક્રિયાપદના complement તરીકે to-infinitive વપરાયું છે."
    },
    {
      "question": "વાક્યમાં Participle phrase શોધો: 'Being tired, I went to bed early.'",
      "options": [
        "Being tired",
        "I went",
        "to bed",
        "early"
      ],
      "answer": "Being tired",
      "explanation": "'Being tired' એ Present Participle phrase છે જે 'I' (હું) શા માટે વહેલો સૂઈ ગયો તેનું કારણ દર્શાવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He denied _______ the money.'",
      "options": [
        "to steal",
        "stealing",
        "stole",
        "to have stolen"
      ],
      "answer": "stealing",
      "explanation": "'Deny' (ઇનકાર કરવો) ક્રિયાપદ પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The police saw the thief _______ into the house.'",
      "options": [
        "to climb",
        "climbing",
        "climbed",
        "to have climbed"
      ],
      "answer": "climbing",
      "explanation": "'See' જેવા સંવેદનાના ક્રિયાપદ પછી જો ક્રિયા ચાલુ હોય તેવું દર્શાવવું હોય તો Present Participle ('climbing') વપરાય છે. 'climb' (bare infinitive) પણ આવી શકે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He is subject to _______ frequent headaches.'",
      "options": [
        "get",
        "to get",
        "getting",
        "got"
      ],
      "answer": "getting",
      "explanation": "'Subject to' (ને આધીન હોવું) માં 'to' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "Infinitive phrase શોધો: 'He has no choice but to obey.'",
      "options": [
        "has no choice",
        "but to obey",
        "to obey",
        "obey"
      ],
      "answer": "to obey",
      "explanation": "અહીં 'but' પછી to-infinitive 'to obey' નો ઉપયોગ થયો છે, જેનો અર્થ 'પાલન કરવા સિવાય' થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'We are busy _______ for the exam.'",
      "options": [
        "to prepare",
        "preparing",
        "prepare",
        "prepared"
      ],
      "answer": "preparing",
      "explanation": "'busy' પછી કોઈ ક્રિયામાં વ્યસ્ત હોવાનો ભાવ દર્શાવવા માટે Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She seems _______ very happy.'",
      "options": [
        "being",
        "be",
        "to be",
        "to being"
      ],
      "answer": "to be",
      "explanation": "'Seem' (લાગવું) ક્રિયાપદ પછી સામાન્ય રીતે to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'His ambition is to fly.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to fly' એ to-infinitive છે જે 'ambition' શું છે તે સ્પષ્ટ કરે છે (complement)."
    }
  ],
  "test-14": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He was fined for _______ the speed limit.'",
      "options": [
        "exceed",
        "to exceed",
        "exceeding",
        "exceeded"
      ],
      "answer": "exceeding",
      "explanation": "'for' એ preposition છે. Preposition પછી હંમેશા Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I would rather _______ than beg.'",
      "options": [
        "die",
        "to die",
        "dying",
        "died"
      ],
      "answer": "die",
      "explanation": "'Would rather' પછી હંમેશા 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "વાક્યમાં Perfect Participle શોધો: 'Having lost all his money, he became a beggar.'",
      "options": [
        "Having lost",
        "lost all",
        "he became",
        "a beggar"
      ],
      "answer": "Having lost",
      "explanation": "'Having + V3' (Having lost) ની રચના Perfect Participle છે, જે એક ક્રિયા પૂરી થયા પછી બીજી થઈ તે દર્શાવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She is used to _______ in a big city.'",
      "options": [
        "live",
        "living",
        "to live",
        "lived"
      ],
      "answer": "living",
      "explanation": "'be used to' (ની આદત હોવી) પછી હંમેશા Gerund (-ing form) આવે છે. 'used to' (ભૂતકાળની ટેવ) પછી V1 આવે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He was heard _______ that he would resign.'",
      "options": [
        "say",
        "to say",
        "saying",
        "said"
      ],
      "answer": "to say",
      "explanation": "જ્યારે 'hear' જેવા સંવેદનાના ક્રિયાપદ passive voice ('was heard') માં હોય, ત્યારે તેની સાથે to-infinitive આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'It is a pleasure _______ you.'",
      "options": [
        "to meet",
        "meeting",
        "meet",
        "met"
      ],
      "answer": "to meet",
      "explanation": "'It is a pleasure' પછી સામાન્ય રીતે to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "Gerund ઓળખો: 'I am not good at remembering names.'",
      "options": [
        "good",
        "at",
        "remembering",
        "names"
      ],
      "answer": "remembering",
      "explanation": "'at' એ preposition છે, તેથી તેના પછી ક્રિયાપદનું Gerund (-ing form) રૂપ આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The teacher does not allow _______ in class.'",
      "options": [
        "talking",
        "to talk",
        "talk",
        "students to talking"
      ],
      "answer": "talking",
      "explanation": "'Allow' પછી જો object ન હોય તો Gerund આવે છે. જો object હોય (allow students) તો to-infinitive (to talk) આવે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She doesn't feel like _______ out tonight.'",
      "options": [
        "to go",
        "going",
        "go",
        "went"
      ],
      "answer": "going",
      "explanation": "'Feel like' (મન હોવું) પછી હંમેશા Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'Let him do what he wants.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "Bare Infinitive",
      "explanation": "'Let' ક્રિયાપદ પછી object ('him') અને પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive - 'do') આવે છે."
    }
  ],
  "test-15": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He has finished _______ his novel.'",
      "options": [
        "to write",
        "writing",
        "write",
        "written"
      ],
      "answer": "writing",
      "explanation": "'Finish' ક્રિયાપદ પછી હંમેશા Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'Do you fancy _______ for a drink?'",
      "options": [
        "to go",
        "go",
        "going",
        "gone"
      ],
      "answer": "going",
      "explanation": "'Fancy' (ઈચ્છા હોવી) ક્રિયાપદ પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં Participle શોધો: 'The girl sitting in the corner is my sister.'",
      "options": [
        "girl",
        "sitting",
        "corner",
        "sister"
      ],
      "answer": "sitting",
      "explanation": "'sitting in the corner' એ Present Participle phrase છે જે 'girl' સંજ્ઞા વિશે વધારાની માહિતી આપે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I forgot _______ the door when I left.'",
      "options": [
        "locking",
        "to lock",
        "lock",
        "to have locked"
      ],
      "answer": "to lock",
      "explanation": "'Forget' પછી to-infinitive નો અર્થ 'કોઈ કામ કરવાનું ભૂલી જવું' થાય છે. જો 'locking' હોત તો અર્થ 'લોક કર્યાની વાત ભૂલી જવી' થાત."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The problem is _______ a place to park.'",
      "options": [
        "finding",
        "to find",
        "found",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "'be' ક્રિયાપદના complement તરીકે Gerund ('finding') અને to-infinitive ('to find') બંનેનો ઉપયોગ થઈ શકે છે. બંને વિકલ્પ સાચા છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He risks _______ his job if he is late again.'",
      "options": [
        "to lose",
        "losing",
        "lose",
        "lost"
      ],
      "answer": "losing",
      "explanation": "'Risk' ક્રિયાપદ પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "Gerund શોધો: 'What I hate most is waiting in the rain.'",
      "options": [
        "hate",
        "is",
        "waiting",
        "rain"
      ],
      "answer": "waiting",
      "explanation": "'waiting' એ 'is' ક્રિયાપદનું complement છે અને તે એક ક્રિયાનું નામ છે, તેથી તે Gerund છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He was advised _______ a doctor.'",
      "options": [
        "seeing",
        "see",
        "to see",
        "saw"
      ],
      "answer": "to see",
      "explanation": "'advise' ક્રિયાપદના passive voice ('was advised') માં to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The project requires _______ carefully.'",
      "options": [
        "planning",
        "to be planned",
        "to plan",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "'Require' પછી Gerund ('planning') અથવા passive infinitive ('to be planned') બંનેનો ઉપયોગ થઈ શકે છે. બંનેનો અર્થ સરખો છે: 'યોજના બનાવવાની જરૂર છે'."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'She has come to stay.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to stay' એ to-infinitive છે જે અહીં આવવાનો હેતુ દર્શાવે છે."
    }
  ],
  "test-16": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He suggested _______ to the cinema.'",
      "options": [
        "to go",
        "going",
        "go",
        "that we to go"
      ],
      "answer": "going",
      "explanation": "'Suggest' ક્રિયાપદ પછી સીધું જ બીજું ક્રિયાપદ આવે તો તે Gerund (-ing form) હોય છે. (દા.ત., He suggested going). જો object હોય, તો રચના અલગ હોય છે (દા.ત., He suggested that we should go)."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She went to the USA with a view to _______ higher education.'",
      "options": [
        "get",
        "getting",
        "to get",
        "have got"
      ],
      "answer": "getting",
      "explanation": "'with a view to' માં 'to' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "વાક્યમાં Perfect Participle શોધો: 'Having been warned, he was more careful.'",
      "options": [
        "Having been warned",
        "warned",
        "was more careful",
        "careful"
      ],
      "answer": "Having been warned",
      "explanation": "'Having been + V3' એ Perfect Participle નું passive રૂપ છે. તે દર્શાવે છે કે ચેતવણી મળ્યા પછી તે સાવચેત થયો."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The teacher encouraged the students _______ harder.'",
      "options": [
        "to work",
        "working",
        "work",
        "to have worked"
      ],
      "answer": "to work",
      "explanation": "'Encourage' ક્રિયાપદ પછી object ('the students') અને પછી to-infinitive ('to work') નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I am considering _______ to a new city.'",
      "options": [
        "to move",
        "moving",
        "move",
        "moved"
      ],
      "answer": "moving",
      "explanation": "'Consider' ક્રિયાપદ પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He tried _______ the window, but it was stuck.'",
      "options": [
        "to open",
        "opening",
        "open",
        "opened"
      ],
      "answer": "to open",
      "explanation": "'Try' પછી to-infinitive નો અર્થ 'પ્રયાસ કરવો' થાય છે. અહીં બારી ખોલવાનો પ્રયાસ નિષ્ફળ ગયો."
    },
    {
      "question": "Gerund શોધો: 'He has a bad habit of biting his nails.'",
      "options": [
        "bad",
        "habit",
        "of",
        "biting"
      ],
      "answer": "biting",
      "explanation": "'of' એ preposition છે, અને preposition પછી આવતું '-ing' વાળું ક્રિયાપદ 'biting' એ Gerund છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The film was so sad it made me _______.'",
      "options": [
        "cry",
        "to cry",
        "crying",
        "cried"
      ],
      "answer": "cry",
      "explanation": "'Make' ક્રિયાપદના active voice માં object ('me') પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The government aims _______ poverty.'",
      "options": [
        "at eradicating",
        "to eradicate",
        "eradicating",
        "eradicate"
      ],
      "answer": "to eradicate",
      "explanation": "'Aim' ક્રિયાપદ પછી to-infinitive નો ઉપયોગ થાય છે. જો 'aim at' હોત, તો gerund ('eradicating') આવત."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'Let us pray for the departed souls.'",
      "options": [
        "Gerund",
        "Present Participle",
        "Past Participle",
        "Bare Infinitive"
      ],
      "answer": "Past Participle",
      "explanation": "'departed' (depart નું V3 રૂપ) એ 'souls' સંજ્ઞાના વિશેષણ તરીકે વપરાયું છે, જેનો અર્થ 'મૃત્યુ પામેલા' થાય છે. તેથી તે Past Participle છે."
    }
  ],
  "test-17": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'She admitted _______ the mistake.'",
      "options": [
        "to make",
        "making",
        "made",
        "to have made"
      ],
      "answer": "making",
      "explanation": "'Admit' (કબૂલ કરવું) ક્રિયાપદ પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He seems to have _______ a lot of money.'",
      "options": [
        "earn",
        "earning",
        "earned",
        "to earn"
      ],
      "answer": "earned",
      "explanation": "આ રચના Perfect Infinitive ('to have + V3') ની છે, જે દર્શાવે છે કે ક્રિયા ભૂતકાળમાં થઈ ગઈ છે. 'to have' પછી ક્રિયાપદનું V3 રૂપ 'earned' આવે છે."
    },
    {
      "question": "વાક્યમાં Participle phrase શોધો: 'The ideas presented in the book are interesting.'",
      "options": [
        "The ideas",
        "presented in the book",
        "are interesting",
        "in the book"
      ],
      "answer": "presented in the book",
      "explanation": "'presented in the book' એ Past Participle phrase છે જે 'ideas' સંજ્ઞા વિશે વધારાની માહિતી આપે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I don't permit _______ in my office.'",
      "options": [
        "smoking",
        "to smoke",
        "smoke",
        "people to smoking"
      ],
      "answer": "smoking",
      "explanation": "'Permit' ક્રિયાપદ પછી જો object ન હોય, તો Gerund (-ing form) આવે છે. જો object હોય (permit people) તો to-infinitive (to smoke) આવે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She is looking forward to _______ her family.'",
      "options": [
        "see",
        "seeing",
        "to see",
        "be seeing"
      ],
      "answer": "seeing",
      "explanation": "'look forward to' માં 'to' એ preposition છે, તેથી તેના પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'You'd better _______ what he says.'",
      "options": [
        "to do",
        "doing",
        "do",
        "done"
      ],
      "answer": "do",
      "explanation": "'Had better' ('d better) પછી હંમેશા 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "Gerund શોધો: 'He is an expert in solving puzzles.'",
      "options": [
        "expert",
        "in",
        "solving",
        "puzzles"
      ],
      "answer": "solving",
      "explanation": "'in' એ preposition છે. Preposition પછી આવતું '-ing' વાળું ક્રિયાપદ 'solving' એ Gerund છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She made her story _______ believable.'",
      "options": [
        "sound",
        "to sound",
        "sounding",
        "sounded"
      ],
      "answer": "sound",
      "explanation": "'Make' ક્રિયાપદ પછી object ('her story') અને પછી Bare Infinitive ('sound') આવે છે, જેનો અર્થ 'લાગવું' થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The man was seen _______ from the bank.'",
      "options": [
        "run",
        "to run",
        "running",
        "ran"
      ],
      "answer": "to run",
      "explanation": "'see' ક્રિયાપદનું passive voice ('was seen') હોય ત્યારે તેની સાથે to-infinitive આવે છે. 'running' પણ આવી શકે છે જો ક્રિયા ચાલુ હતી તેવું દર્શાવવું હોય."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'His only fault is talking too much.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Gerund",
      "explanation": "અહીં 'talking' એ 'fault' શું છે તે સમજાવે છે (complement). તે એક પ્રવૃત્તિનું નામ છે, તેથી તે Gerund છે."
    }
  ],
  "test-18": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'She put off _______ the decision until the next day.'",
      "options": [
        "to make",
        "making",
        "make",
        "made"
      ],
      "answer": "making",
      "explanation": "'Put off' (મોકૂફ રાખવું) phrasal verb પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I would prefer _______ by train.'",
      "options": [
        "to travel",
        "travelling",
        "travel",
        "traveled"
      ],
      "answer": "to travel",
      "explanation": "'Prefer' ક્રિયાપદ પછી to-infinitive ('to travel') અથવા Gerund ('travelling') બંને વાપરી શકાય છે, પણ to-infinitive વધુ સામાન્ય છે. જો 'prefer...to...' ની રચના હોય તો Gerund આવે (I prefer travelling to driving)."
    },
    {
      "question": "વાક્યમાં Perfect Participle શોધો: 'Having failed twice, he didn't want to try again.'",
      "options": [
        "Having failed",
        "failed twice",
        "didn't want",
        "to try"
      ],
      "answer": "Having failed",
      "explanation": "'Having + V3' ની રચના Perfect Participle છે, જે દર્શાવે છે કે બે વાર નિષ્ફળ થયા પછી તેણે ફરી પ્રયાસ કરવાની ઈચ્છા ન કરી."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He has no difficulty in _______ English.'",
      "options": [
        "speak",
        "to speak",
        "speaking",
        "spoken"
      ],
      "answer": "speaking",
      "explanation": "'have difficulty in' પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'Let's not waste time _______ about this.'",
      "options": [
        "to argue",
        "arguing",
        "argue",
        "argued"
      ],
      "answer": "arguing",
      "explanation": "'Waste time' પછી કોઈ ક્રિયામાં સમય બગાડવાનો અર્થ દર્શાવવા Gerund (-ing form) વપરાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He was punished for _______ a lie.'",
      "options": [
        "tell",
        "telling",
        "to tell",
        "told"
      ],
      "answer": "telling",
      "explanation": "'for' એ preposition છે, અને preposition પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "Gerund શોધો: 'My doctor advised me against eating junk food.'",
      "options": [
        "advised",
        "against",
        "eating",
        "junk"
      ],
      "answer": "eating",
      "explanation": "'against' એ preposition છે, તેથી તેના પછી Gerund ('eating') આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She helped me _______ the problem.'",
      "options": [
        "to solving",
        "solving",
        "to solve",
        "solve"
      ],
      "answer": "to solve",
      "explanation": "'Help' ક્રિયાપદ પછી object ('me') આવે ત્યારે to-infinitive ('to solve') અથવા bare infinitive ('solve') બંનેનો ઉપયોગ થઈ શકે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I am used to _______ on my own.'",
      "options": [
        "live",
        "living",
        "to live",
        "lived"
      ],
      "answer": "living",
      "explanation": "'be used to' (ની આદત હોવી) પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He is the man to watch.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to watch' એ to-infinitive છે જે 'man' સંજ્ઞા વિશે વધુ માહિતી આપે છે (જેના પર નજર રાખવી જોઈએ)."
    }
  ],
  "test-19": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'She insisted on my _______ the party.'",
      "options": [
        "attending",
        "to attend",
        "attend",
        "attended"
      ],
      "answer": "attending",
      "explanation": "જ્યારે Gerund ની પહેલાં કોઈ સર્વનામ (pronoun) આવે, ત્યારે તે possessive case (my, his, her, etc.) માં હોય છે. 'insist on' પછી Gerund આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I remember _______ the zoo when I was a child.'",
      "options": [
        "to visit",
        "visiting",
        "visit",
        "to have visited"
      ],
      "answer": "visiting",
      "explanation": "'Remember' પછી Gerund (-ing form) નો ઉપયોગ ભૂતકાળમાં બનેલી ઘટનાને યાદ કરવા માટે થાય છે."
    },
    {
      "question": "વાક્યમાં Participle શોધો: 'The speech delivered by the principal was inspiring.'",
      "options": [
        "speech",
        "delivered",
        "principal",
        "inspiring"
      ],
      "answer": "delivered",
      "explanation": "'delivered by the principal' એ Past Participle phrase છે જે 'speech' સંજ્ઞા વિશે વધુ માહિતી આપે છે. 'inspiring' પણ Present Participle છે જે વિશેષણ તરીકે વપરાયું છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The situation is too complicated _______.'",
      "options": [
        "to explain",
        "explaining",
        "explain",
        "for explaining"
      ],
      "answer": "to explain",
      "explanation": "'too + adjective' પછી to-infinitive નો ઉપયોગ નકારાત્મક ભાવ દર્શાવવા માટે થાય છે (એટલું જટિલ છે કે સમજાવી શકાતું નથી)."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He stopped his car _______ at the map.'",
      "options": [
        "looking",
        "to look",
        "look",
        "to have looked"
      ],
      "answer": "to look",
      "explanation": "'Stop' પછી to-infinitive નો અર્થ 'કોઈક હેતુથી અટકવું' થાય છે. અહીં તે નકશો જોવા માટે અટક્યો."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I am not averse to _______ on a holiday.'",
      "options": [
        "go",
        "to go",
        "going",
        "have gone"
      ],
      "answer": "going",
      "explanation": "'averse to' (નો વિરોધી હોવું) માં 'to' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "Gerund શોધો: 'There is no point in waiting for him.'",
      "options": [
        "point",
        "in",
        "waiting",
        "for"
      ],
      "answer": "waiting",
      "explanation": "'in' એ preposition છે, અને 'no point in' પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The work needs _______ immediately.'",
      "options": [
        "doing",
        "to do",
        "done",
        "to be done"
      ],
      "answer": "doing",
      "explanation": "'Need' પછી Gerund ('doing') નો અર્થ passive થાય છે ('કરવાની જરૂર છે'). 'to be done' પણ સાચો passive infinitive છે. બંને વિકલ્પોનો અર્થ સમાન છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'They were lucky _______ the accident.'",
      "options": [
        "escaping",
        "to escape",
        "escape",
        "to have escaped"
      ],
      "answer": "to escape",
      "explanation": "'Lucky' જેવા વિશેષણ પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He is old enough to understand.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'adjective + enough' પછી to-infinitive ('to understand') નો ઉપયોગ થાય છે."
    }
  ],
  "test-20": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'I regret _______ so much money on that car.'",
      "options": [
        "to spend",
        "spending",
        "spent",
        "to have spent"
      ],
      "answer": "spending",
      "explanation": "'Regret' પછી Gerund (-ing form) નો ઉપયોગ ભૂતકાળમાં કરેલી ક્રિયા માટે અફસોસ વ્યક્ત કરવા માટે થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She is likely _______ late.'",
      "options": [
        "arriving",
        "to arrive",
        "arrive",
        "to be arriving"
      ],
      "answer": "to arrive",
      "explanation": "'be likely' પછી to-infinitive નો ઉપયોગ થાય છે, જે સંભાવના દર્શાવે છે."
    },
    {
      "question": "વાક્યમાં Perfect Participle શોધો: 'Having been defeated, the team left the field.'",
      "options": [
        "Having been defeated",
        "defeated",
        "team",
        "left"
      ],
      "answer": "Having been defeated",
      "explanation": "'Having been + V3' એ Perfect Participle નું passive રૂપ છે, જે દર્શાવે છે કે હાર્યા પછી ટીમે મેદાન છોડી દીધું."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He chose _______ in the city rather than in the countryside.'",
      "options": [
        "living",
        "to live",
        "live",
        "lived"
      ],
      "answer": "to live",
      "explanation": "'Choose' ક્રિયાપદ પછી સામાન્ય રીતે to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I got him _______ my car.'",
      "options": [
        "to repair",
        "repairing",
        "repair",
        "repaired"
      ],
      "answer": "to repair",
      "explanation": "Causative verb 'get' પછી object ('him') અને પછી to-infinitive ('to repair') નો ઉપયોગ થાય છે (get someone to do something)."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He is proud of _______ a doctor.'",
      "options": [
        "be",
        "to be",
        "being",
        "been"
      ],
      "answer": "being",
      "explanation": "'proud of' માં 'of' એ preposition છે, તેથી તેના પછી Gerund આવે છે. 'be' નું gerund રૂપ 'being' છે."
    },
    {
      "question": "Gerund શોધો: 'He escaped by jumping out of the window.'",
      "options": [
        "escaped",
        "by",
        "jumping",
        "out"
      ],
      "answer": "jumping",
      "explanation": "'by' એ preposition છે, જે રીત દર્શાવે છે. Preposition પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'This is the book _______.'",
      "options": [
        "to be read",
        "reading",
        "to read",
        "read"
      ],
      "answer": "to be read",
      "explanation": "અહીં passive અર્થની જરૂર છે ('જેને વાંચવાનું છે'). 'to be read' એ passive infinitive છે. 'to read' પણ સાચું હોઈ શકે છે પણ 'to be read' વધુ સ્પષ્ટ છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I don't recall ever _______ him before.'",
      "options": [
        "to meet",
        "meeting",
        "met",
        "to have met"
      ],
      "answer": "meeting",
      "explanation": "'Recall' (યાદ કરવું) ક્રિયાપદ પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'The teacher let us leave early.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "Bare Infinitive",
      "explanation": "'Let' ક્રિયાપદ પછી object ('us') અને પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive - 'leave') આવે છે."
    }
  ],
  "test-21": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'She made a decision _______ her job and travel the world.'",
      "options": [
        "quitting",
        "to quit",
        "quit",
        "to have quit"
      ],
      "answer": "to quit",
      "explanation": "અહીં to-infinitive 'to quit' એ 'decision' સંજ્ઞાને સ્પષ્ટ કરે છે (કયો નિર્ણય). આ infinitive as an appositive to a noun છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: '_______ the truth, I have no idea.'",
      "options": [
        "To tell",
        "Telling",
        "Having told",
        "To be telling"
      ],
      "answer": "To tell",
      "explanation": "'To tell the truth' એ એક નિશ્ચિત infinitive phrase છે જેનો અર્થ 'સાચું કહું તો' થાય છે. તેને split infinitive પણ કહેવાય છે."
    },
    {
      "question": "આ વાક્યમાં કયા પ્રકારનો Participle વપરાયો છે?: 'The agreement having been signed, the negotiations ended.'",
      "options": [
        "Present Participle Phrase",
        "Past Participle Phrase",
        "Nominative Absolute (Perfect Participle)",
        "Gerund"
      ],
      "answer": "Nominative Absolute (Perfect Participle)",
      "explanation": "અહીં 'The agreement having been signed' એ Nominative Absolute રચના છે. તેનો કર્તા 'The agreement' મુખ્ય વાક્યના કર્તા 'the negotiations' થી અલગ છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He had his car _______ by a professional.'",
      "options": [
        "clean",
        "to clean",
        "cleaning",
        "cleaned"
      ],
      "answer": "cleaned",
      "explanation": "આ causative verb 'have' ની passive રચના છે (have something done). અહીં object 'his car' પછી ક્રિયાપદનું V3 રૂપ (Past Participle) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The teacher's advice is _______ regularly.'",
      "options": [
        "studying",
        "to study",
        "study",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "'be' ક્રિયાપદના complement તરીકે, સલાહ શું છે તે દર્શાવવા Gerund ('studying') અને to-infinitive ('to study') બંનેનો ઉપયોગ સાચો છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I object to _______ like a child.'",
      "options": [
        "be treated",
        "being treated",
        "treat",
        "to be treated"
      ],
      "answer": "being treated",
      "explanation": "'object to' માં 'to' preposition છે, તેથી Gerund આવે. વાક્યનો ભાવ passive છે, તેથી passive gerund ('being treated') નો ઉપયોગ થશે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'I would sooner _______ than surrender.'",
      "options": [
        "to die",
        "dying",
        "die",
        "died"
      ],
      "answer": "die",
      "explanation": "'Would sooner' એ 'would rather' જેવું જ છે, અને તેના પછી હંમેશા Bare Infinitive ('to' વગરનું મૂળ ક્રિયાપદ) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The house wants _______.'",
      "options": [
        "painting",
        "to paint",
        "painted",
        "to be painted"
      ],
      "answer": "painting",
      "explanation": "'Want' ક્રિયાપદ પછી જયારે વસ્તુને કોઈ ક્રિયાની જરૂર હોય તેવો passive અર્થ દર્શાવવો હોય, ત્યારે Gerund (-ing form) નો ઉપયોગ થાય છે. 'The house needs painting' જેવો જ અર્થ છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He is said _______ a genius.'",
      "options": [
        "being",
        "to be",
        "be",
        "to have been"
      ],
      "answer": "to be",
      "explanation": "Passive રચના 'be said' પછી to-infinitive નો ઉપયોગ થાય છે. (People say that he is a genius -> He is said to be a genius)."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'His desire to win was obvious.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Infinitive",
      "explanation": "'to win' એ to-infinitive છે જે 'desire' (ઈચ્છા) સંજ્ઞાને સ્પષ્ટ કરે છે."
    }
  ],
  "test-22": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He went on _______, ignoring my question completely.'",
      "options": [
        "to speak",
        "speaking",
        "spoke",
        "having spoken"
      ],
      "answer": "speaking",
      "explanation": "'Go on' પછી Gerund (-ing form) નો અર્થ 'કોઈ ક્રિયા ચાલુ રાખવી' થાય છે. 'to speak' નો અર્થ 'એક વાત પૂરી કરીને બીજી વાત શરૂ કરવી' થાત."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I am in favour of _______ him a second chance.'",
      "options": [
        "give",
        "to give",
        "giving",
        "given"
      ],
      "answer": "giving",
      "explanation": "'in favour of' માં 'of' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "આ વાક્યમાં Nominative Absolute રચના શોધો: 'The sun having set, the birds returned to their nests.'",
      "options": [
        "The sun having set",
        "the birds returned",
        "to their nests",
        "having set"
      ],
      "answer": "The sun having set",
      "explanation": "આ Nominative Absolute છે કારણ કે તેનો કર્તા 'The sun' મુખ્ય વાક્યના કર્તા 'the birds' થી અલગ છે અને તે સમય/કારણ દર્શાવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'We had the roof _______ last year.'",
      "options": [
        "repair",
        "to repair",
        "repairing",
        "repaired"
      ],
      "answer": "repaired",
      "explanation": "આ causative verb 'have' ની passive રચના છે (have something done). Object ('the roof') પછી ક્રિયાપદનું V3 રૂપ (Past Participle) આવે છે, જેનો અર્થ છે કે કામ કોઈ બીજા દ્વારા કરવામાં આવ્યું."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She is anxious _______ for the results.'",
      "options": [
        "waiting",
        "to wait",
        "wait",
        "to be waiting"
      ],
      "answer": "to wait",
      "explanation": "'Anxious' (ચિંતિત/આતુર) જેવા વિશેષણ પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I don't approve of people _______ during a film.'",
      "options": [
        "to talk",
        "talk",
        "talking",
        "talked"
      ],
      "answer": "talking",
      "explanation": "'approve of' માં 'of' preposition છે, તેથી Gerund આવે છે. 'people' એ Gerund 'talking' નો કર્તા છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'He was the first man _______ the shore.'",
      "options": [
        "reaching",
        "to reach",
        "reached",
        "to have reached"
      ],
      "answer": "to reach",
      "explanation": "Ordinal numbers (first, second, last, etc.) પછી સામાન્ય રીતે to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'This shirt needs _______.'",
      "options": [
        "iron",
        "to iron",
        "ironing",
        "ironed"
      ],
      "answer": "ironing",
      "explanation": "'Need' પછી જ્યારે વસ્તુ પર ક્રિયા થવાની જરૂર હોય તેવો passive અર્થ હોય, ત્યારે Gerund (-ing form) વપરાય છે. તેનો અર્થ 'needs to be ironed' જેવો જ છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I am not in the habit of _______ early.'",
      "options": [
        "get up",
        "getting up",
        "to get up",
        "got up"
      ],
      "answer": "getting up",
      "explanation": "'in the habit of' માં 'of' એ preposition છે, તેથી તેના પછી Gerund ('getting up') આવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He is a man to be admired.'",
      "options": [
        "Passive Gerund",
        "Passive Participle",
        "Passive Infinitive",
        "Perfect Participle"
      ],
      "answer": "Passive Infinitive",
      "explanation": "'to be admired' એ to-infinitive નું passive રૂપ છે ('to be + V3'). તે 'man' સંજ્ઞાનું વર્ણન કરે છે."
    }
  ],
  "test-23": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He helped me _______ the heavy box.'",
      "options": [
        "to carrying",
        "carrying",
        "carry",
        "to carry"
      ],
      "answer": "carry",
      "explanation": "'Help' ક્રિયાપદ પછી object ('me') આવે ત્યારે bare infinitive ('carry') અથવા to-infinitive ('to carry') બંને વાપરી શકાય. Bare infinitive વધુ સામાન્ય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'There's no _______ what might happen.'",
      "options": [
        "to know",
        "knowing",
        "known",
        "to have known"
      ],
      "answer": "knowing",
      "explanation": "'There is no + Gerund' એ એક નિશ્ચિત રચના છે જેનો અર્થ 'શક્ય નથી' કે 'અશક્ય છે' થાય છે."
    },
    {
      "question": "આ વાક્યમાં કયો non-finite verb વપરાયો છે?: 'He is believed to have left the country.'",
      "options": [
        "Present Infinitive",
        "Perfect Infinitive",
        "Passive Infinitive",
        "Gerund"
      ],
      "answer": "Perfect Infinitive",
      "explanation": "'to have left' એ Perfect Infinitive ('to have + V3') છે. તે દર્શાવે છે કે મુખ્ય ક્રિયાપદ ('is believed') ના સમય પહેલાં 'left' ની ક્રિયા થઈ ગઈ હતી."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She couldn't resist _______ another piece of cake.'",
      "options": [
        "to eat",
        "eating",
        "eat",
        "eaten"
      ],
      "answer": "eating",
      "explanation": "'Resist' (પ્રતિકાર કરવો, રોકવું) ક્રિયાપદ પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I heard the bomb _______.'",
      "options": [
        "to explode",
        "exploding",
        "explode",
        "B and C both"
      ],
      "answer": "B and C both",
      "explanation": "'Hear' જેવા સંવેદનાના ક્રિયાપદ પછી bare infinitive ('explode') - પૂરી ઘટના સાંભળી, અથવા present participle ('exploding') - ઘટના ચાલુ હતી ત્યારે સાંભળી, બંને આવી શકે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He is supposed _______ here by now.'",
      "options": [
        "be",
        "to be",
        "being",
        "to have been"
      ],
      "answer": "to be",
      "explanation": "'be supposed' પછી to-infinitive નો ઉપયોગ થાય છે, જેનો અર્થ 'અપેક્ષા હોવી' થાય છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'She is on the point of _______.'",
      "options": [
        "cry",
        "to cry",
        "crying",
        "cried"
      ],
      "answer": "crying",
      "explanation": "'on the point of' (ની તૈયારીમાં હોવું) માં 'of' preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The floor requires _______.'",
      "options": [
        "to sweep",
        "sweeping",
        "swept",
        "to be swept"
      ],
      "answer": "sweeping",
      "explanation": "'Require' પછી જ્યારે passive અર્થ હોય, ત્યારે Gerund (-ing form) નો ઉપયોગ થાય છે. તેનો અર્થ 'requires to be swept' જેવો જ છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I caught him _______ my letters.'",
      "options": [
        "to read",
        "read",
        "reading",
        "to have read"
      ],
      "answer": "reading",
      "explanation": "'Catch' ક્રિયાપદ પછી object ('him') અને પછી Present Participle ('reading') આવે છે, જે કોઈને કોઈ ક્રિયા કરતાં પકડી પાડવાનો ભાવ દર્શાવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He is to report for duty tomorrow.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "અહીં 'be + to-infinitive' (is to report) ની રચના ભવિષ્યની કોઈ યોજના, આદેશ કે ફરજ દર્શાવવા માટે વપરાય છે."
    }
  ],
  "test-24": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'It being a holiday, the office was closed.' આ વાક્યમાં 'It being a holiday' શું છે?",
      "options": [
        "Gerund Phrase",
        "Infinitive Phrase",
        "Nominative Absolute",
        "Adjective Phrase"
      ],
      "answer": "Nominative Absolute",
      "explanation": "આ Nominative Absolute રચના છે. તેનો કર્તા 'It' મુખ્ય વાક્યના કર્તા 'the office' થી અલગ છે અને તે કારણ દર્શાવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I am looking forward to _______ from you.'",
      "options": [
        "hear",
        "hearing",
        "to hear",
        "have heard"
      ],
      "answer": "hearing",
      "explanation": "'look forward to' માં 'to' એ preposition છે, infinitive marker નથી. તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He got his watch _______.'",
      "options": [
        "repair",
        "to repair",
        "repairing",
        "repaired"
      ],
      "answer": "repaired",
      "explanation": "આ causative verb 'get' ની passive રચના છે (get something done). Object ('his watch') પછી ક્રિયાપદનું V3 રૂપ (Past Participle - 'repaired') આવે છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'She was the last person _______ the room.'",
      "options": [
        "to leave",
        "leaving",
        "left",
        "to have left"
      ],
      "answer": "to leave",
      "explanation": "Ordinal numbers (first, second, etc.) અને 'last', 'only' જેવા શબ્દો પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He recollects _______ her at the station.'",
      "options": [
        "to see",
        "seeing",
        "saw",
        "to have seen"
      ],
      "answer": "seeing",
      "explanation": "'Recollect' (યાદ કરવું) ક્રિયાપદ પછી ભૂતકાળની ઘટના માટે Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The police found the man _______ on the ground.'",
      "options": [
        "lie",
        "to lie",
        "lying",
        "lain"
      ],
      "answer": "lying",
      "explanation": "'Find' ક્રિયાપદ પછી object ('the man') અને પછી Present Participle ('lying') આવે છે, જે તે વ્યક્તિની સ્થિતિ દર્શાવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He seems _______ the secret.'",
      "options": [
        "to know",
        "knowing",
        "know",
        "to have known"
      ],
      "answer": "to know",
      "explanation": "'Seem' ક્રિયાપદ પછી સામાન્ય રીતે to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'What is the use of _______ about it now?'",
      "options": [
        "worrying",
        "to worry",
        "worry",
        "worried"
      ],
      "answer": "worrying",
      "explanation": "'What is the use of...?' પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She was obliged _______ the order.'",
      "options": [
        "obeying",
        "to obey",
        "obey",
        "obeyed"
      ],
      "answer": "to obey",
      "explanation": "'be obliged' (ફરજ પડવી) પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He does nothing but complain.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "Bare Infinitive",
      "explanation": "'do nothing but' પછી હંમેશા 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    }
  ],
  "test-25": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'I forbid you _______ there.'",
      "options": [
        "to go",
        "going",
        "go",
        "from going"
      ],
      "answer": "to go",
      "explanation": "'Forbid' (મનાઈ કરવી) ક્રિયાપદ પછી object ('you') અને પછી to-infinitive નો ઉપયોગ થાય છે. 'forbid...from going' પણ એક વિકલ્પ છે, પણ to-infinitive વધુ સામાન્ય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'The problem is not _______, but applying it.'",
      "options": [
        "to know",
        "knowing",
        "known",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "અહીં 'not X but Y' ની સમાંતર રચના છે. 'applying' Gerund છે, તેથી તેની સાથે Gerund ('knowing') અથવા to-infinitive ('to know') બંને આવી શકે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: '_______ in the city for a long time, he knows all the streets.'",
      "options": [
        "Living",
        "Having lived",
        "To live",
        "Lived"
      ],
      "answer": "Having lived",
      "explanation": "'Having lived' એ Perfect Participle છે જે દર્શાવે છે કે લાંબા સમય સુધી શહેરમાં રહેવાની ક્રિયાના પરિણામે તે બધા રસ્તાઓ જાણે છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'I had my phone _______.'",
      "options": [
        "steal",
        "to steal",
        "stealing",
        "stolen"
      ],
      "answer": "stolen",
      "explanation": "આ causative verb 'have' ની passive રચના છે (have something done). Object ('my phone') પછી ક્રિયાપદનું V3 રૂપ (Past Participle) આવે છે, જે દર્શાવે છે કે ફોન ચોરાઈ ગયો."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He was made _______ for his mistake.'",
      "options": [
        "apologize",
        "to apologize",
        "apologizing",
        "apologized"
      ],
      "answer": "to apologize",
      "explanation": "જ્યારે 'make' ક્રિયાપદ passive voice ('was made') માં હોય, ત્યારે તેની સાથે to-infinitive આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'It is a crime _______ other people.'",
      "options": [
        "to deceive",
        "deceiving",
        "deceive",
        "deceived"
      ],
      "answer": "to deceive",
      "explanation": "'It is a crime' જેવી રચના પછી ક્રિયાને વર્ણવવા માટે to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She went _______ without _______ goodbye.'",
      "options": [
        "shopping, saying",
        "to shop, saying",
        "shopping, to say",
        "to shop, to say"
      ],
      "answer": "shopping, saying",
      "explanation": "'go shopping' એ એક નિશ્ચિત gerund phrase છે. 'without' એ preposition છે, તેથી તેના પછી gerund ('saying') આવે છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'I remember _______ the door, but I am not sure.'",
      "options": [
        "to lock",
        "locking",
        "lock",
        "to have locked"
      ],
      "answer": "locking",
      "explanation": "'Remember' પછી Gerund (-ing form) નો ઉપયોગ ભૂતકાળમાં કરેલી ક્રિયાને યાદ કરવા માટે થાય છે. અહીં દરવાજો લોક કર્યાની ઘટના યાદ છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The teacher made the whole class _______ the essay.'",
      "options": [
        "rewrite",
        "to rewrite",
        "rewriting",
        "rewritten"
      ],
      "answer": "rewrite",
      "explanation": "'Make' ના active voice માં object ('the whole class') પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'I am determined to succeed.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'Determined' (કૃતનિશ્ચયી) જેવા વિશેષણ પછી to-infinitive ('to succeed') નો ઉપયોગ થાય છે."
    }
  ],
  "test-26": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He was seen _______ the building at midnight.'",
      "options": [
        "leave",
        "to leave",
        "leaving",
        "left"
      ],
      "answer": "to leave",
      "explanation": "'see' ક્રિયાપદનું passive voice ('was seen') હોય ત્યારે to-infinitive નો ઉપયોગ થાય છે. 'leaving' પણ સાચું છે જો ક્રિયા ચાલુ હતી તેવું દર્શાવવું હોય."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He is busy _______ for his exams.'",
      "options": [
        "to prepare",
        "preparing",
        "prepare",
        "prepared"
      ],
      "answer": "preparing",
      "explanation": "'busy' શબ્દ પછી કોઈ ક્રિયામાં વ્યસ્ત હોવાનો ભાવ દર્શાવવા માટે Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The weather being fine, we went for a picnic.' આ વાક્યમાં 'The weather being fine' શું છે?",
      "options": [
        "Participle Phrase",
        "Gerund Phrase",
        "Nominative Absolute",
        "Infinitive Phrase"
      ],
      "answer": "Nominative Absolute",
      "explanation": "આ Nominative Absolute રચના છે. તેનો કર્તા 'The weather' મુખ્ય વાક્યના કર્તા 'we' થી અલગ છે અને તે કારણ દર્શાવે છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'I would advise you _______ a doctor.'",
      "options": [
        "seeing",
        "to see",
        "see",
        "to have seen"
      ],
      "answer": "to see",
      "explanation": "'Advise' ક્રિયાપદ પછી object ('you') અને પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The manager let everyone _______ home early.'",
      "options": [
        "to go",
        "going",
        "go",
        "gone"
      ],
      "answer": "go",
      "explanation": "'Let' ક્રિયાપદ પછી object ('everyone') અને પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He will never admit _______ a mistake.'",
      "options": [
        "to make",
        "making",
        "to have made",
        "B and C both"
      ],
      "answer": "B and C both",
      "explanation": "'Admit' પછી Gerund ('making') અથવા Perfect Gerund ('to have made') બંને આવી શકે છે. Perfect Gerund ભૂતકાળમાં થયેલી ક્રિયા પર ભાર મૂકે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'It is easy _______ advice, but difficult to follow.'",
      "options": [
        "giving",
        "to give",
        "give",
        "given"
      ],
      "answer": "to give",
      "explanation": "'It is easy' જેવી રચના પછી to-infinitive નો ઉપયોગ થાય છે. વાક્યમાં 'to follow' સાથે સમાંતર રચના જળવાઈ રહે છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'He has a reputation for _______ honest.'",
      "options": [
        "be",
        "to be",
        "being",
        "to being"
      ],
      "answer": "being",
      "explanation": "'reputation for' માં 'for' એ preposition છે, તેથી તેના પછી Gerund આવે છે. 'be' નું gerund રૂપ 'being' છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The purpose of education is _______ the mind.'",
      "options": [
        "to train",
        "training",
        "train",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "હેતુ દર્શાવવા માટે 'be' ક્રિયાપદના complement તરીકે to-infinitive ('to train') અને Gerund ('training') બંનેનો ઉપયોગ થઈ શકે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He watched the children playing in the park.'",
      "options": [
        "Gerund",
        "Present Participle",
        "To-infinitive",
        "Past Participle"
      ],
      "answer": "Present Participle",
      "explanation": "'playing' એ Present Participle છે જે 'children' શું કરી રહ્યા હતા તે દર્શાવે છે (object complement)."
    }
  ],
  "test-27": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'I don't feel up to _______ out tonight.'",
      "options": [
        "go",
        "to go",
        "going",
        "went"
      ],
      "answer": "going",
      "explanation": "'feel up to' (માટે તૈયાર/સ્વસ્થ હોવું) માં 'to' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She dared not _______ the truth.'",
      "options": [
        "tell",
        "to tell",
        "telling",
        "told"
      ],
      "answer": "tell",
      "explanation": "જ્યારે 'dare' modal verb (હિંમત કરવી) તરીકે નકારાત્મક વાક્યમાં વપરાય છે, ત્યારે તેની સાથે 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He got his hair _______ yesterday.'",
      "options": [
        "cut",
        "to cut",
        "cutting",
        "to be cut"
      ],
      "answer": "cut",
      "explanation": "આ causative verb 'get' ની passive રચના છે (get something done). 'cut' નું V3 રૂપ પણ 'cut' જ છે, તેથી અહીં Past Participle તરીકે વપરાયું છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'He appeared _______ calm, but he was very nervous.'",
      "options": [
        "being",
        "be",
        "to be",
        "to being"
      ],
      "answer": "to be",
      "explanation": "'Appear' (દેખાવું, લાગવું) ક્રિયાપદ પછી સામાન્ય રીતે to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The work is too much for one person _______.'",
      "options": [
        "doing",
        "to do",
        "do",
        "to be done"
      ],
      "answer": "to do",
      "explanation": "'too much for someone + to-infinitive' ની રચના વપરાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'His confession of _______ the crime surprised everyone.'",
      "options": [
        "committing",
        "to commit",
        "commit",
        "having committed"
      ],
      "answer": "committing",
      "explanation": "'confession of' માં 'of' એ preposition છે, તેથી તેના પછી Gerund આવે છે. 'having committed' પણ સાચું છે અને ભૂતકાળ પર વધુ ભાર મૂકે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He was forced _______ the truth.'",
      "options": [
        "telling",
        "to tell",
        "tell",
        "told"
      ],
      "answer": "to tell",
      "explanation": "'force' ક્રિયાપદના passive voice ('was forced') માં to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'There is nothing to do but _______.'",
      "options": [
        "to wait",
        "waiting",
        "wait",
        "waited"
      ],
      "answer": "wait",
      "explanation": "'do nothing but' અને 'nothing to do but' પછી હંમેશા 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He burst out _______.'",
      "options": [
        "to laugh",
        "laughing",
        "laugh",
        "laughed"
      ],
      "answer": "laughing",
      "explanation": "'Burst out' (અચાનક શરૂ કરવું) phrasal verb પછી હંમેશા Gerund (-ing form) આવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He is a difficult person to please.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "અહીં to-infinitive 'to please' એ 'difficult person' સંજ્ઞા phrase વિશે વધુ માહિતી આપે છે."
    }
  ],
  "test-28": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He was found _______ in his room.'",
      "options": [
        "study",
        "to study",
        "studying",
        "studied"
      ],
      "answer": "studying",
      "explanation": "'find' ક્રિયાપદના passive voice ('was found') પછી Present Participle ('studying') નો ઉપયોગ તે સમયે ક્રિયા ચાલુ હતી તે દર્શાવવા માટે થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I am not used to _______ treated like this.'",
      "options": [
        "be",
        "to be",
        "being",
        "been"
      ],
      "answer": "being",
      "explanation": "'be used to' પછી Gerund આવે છે. વાક્યનો ભાવ passive છે, તેથી passive gerund ('being treated') નો ઉપયોગ થશે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The dog, _______ its tail, ran towards its master.'",
      "options": [
        "wagging",
        "wagged",
        "having wagged",
        "to wag"
      ],
      "answer": "wagging",
      "explanation": "'wagging its tail' એ Present Participle phrase છે જે 'dog' દ્વારા તે જ સમયે થતી બીજી ક્રિયાનું વર્ણન કરે છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'I would sooner starve than _______ for money.'",
      "options": [
        "to ask",
        "asking",
        "ask",
        "asked"
      ],
      "answer": "ask",
      "explanation": "'Would sooner...than...' ની રચનામાં બંને ક્રિયાપદો Bare Infinitive ('to' વગરના મૂળ રૂપ) માં આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She is deemed _______ the best candidate for the job.'",
      "options": [
        "be",
        "to be",
        "being",
        "to have been"
      ],
      "answer": "to be",
      "explanation": "'be deemed' (માનવામાં આવવું) જેવી passive રચના પછી to-infinitive નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He went _______ although he was told not to.'",
      "options": [
        "to fish",
        "fishing",
        "fish",
        "fished"
      ],
      "answer": "fishing",
      "explanation": "'go fishing', 'go swimming', 'go shopping' જેવી રચનાઓમાં Gerund નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'This is the plan _______.'",
      "options": [
        "following",
        "to be followed",
        "to follow",
        "followed"
      ],
      "answer": "to be followed",
      "explanation": "અહીં passive અર્થની જરૂર છે ('જેનું પાલન કરવાનું છે'). 'to be followed' એ passive infinitive છે જે 'plan' સંજ્ઞાનું વર્ણન કરે છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'He felt the house _______.'",
      "options": [
        "shake",
        "to shake",
        "shaking",
        "A and C both"
      ],
      "answer": "A and C both",
      "explanation": "'Feel' જેવા સંવેદનાના ક્રિયાપદ પછી bare infinitive ('shake') અથવા present participle ('shaking') બંને આવી શકે છે. 'shake' એટલે પૂરી ઘટના અનુભવી, 'shaking' એટલે ઘટના ચાલુ હતી ત્યારે અનુભવી."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'We are committed to _______ quality education.'",
      "options": [
        "provide",
        "providing",
        "to provide",
        "provided"
      ],
      "answer": "providing",
      "explanation": "'committed to' માં 'to' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He is the only one to object.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'the only' પછી to-infinitive નો ઉપયોગ થાય છે."
    }
  ],
  "test-29": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'He set about _______ the broken fence.'",
      "options": [
        "repairing",
        "to repair",
        "repair",
        "repaired"
      ],
      "answer": "repairing",
      "explanation": "'Set about' (કોઈ કામ શરૂ કરવું) phrasal verb પછી Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'I resent _______ lied to.'",
      "options": [
        "be",
        "to be",
        "being",
        "been"
      ],
      "answer": "being",
      "explanation": "'Resent' (અણગમો હોવો) ક્રિયાપદ પછી Gerund આવે છે. વાક્યનો ભાવ passive છે ('મારી સાથે ખોટું બોલાયું'), તેથી passive gerund ('being lied to') નો ઉપયોગ થશે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: '_______ by the loud noise, the baby started crying.'",
      "options": [
        "Waking up",
        "Having woken up",
        "Woken up",
        "To wake up"
      ],
      "answer": "Woken up",
      "explanation": "અહીં Past Participle 'Woken up' (wake up નું V3) નો ઉપયોગ થયો છે, જે passive અર્થ દર્શાવે છે ('ઘોંઘાટ દ્વારા જગાડવામાં આવતા')."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'You need _______ more careful.'",
      "options": [
        "be",
        "being",
        "to be",
        "to being"
      ],
      "answer": "to be",
      "explanation": "જ્યારે 'need' મુખ્ય ક્રિયાપદ તરીકે વપરાય છે, ત્યારે તેના પછી to-infinitive આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'She was seen _______ of the car and _______ into the shop.'",
      "options": [
        "to get, go",
        "getting, going",
        "to get, to go",
        "get, go"
      ],
      "answer": "to get, to go",
      "explanation": "'see' ના passive voice ('was seen') પછી to-infinitive આવે છે. 'and' થી જોડાયેલું બીજું ક્રિયાપદ પણ સમાંતર રચનાને કારણે to-infinitive માં આવશે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'It's a waste of time _______ to convince him.'",
      "options": [
        "to try",
        "trying",
        "try",
        "tried"
      ],
      "answer": "trying",
      "explanation": "'a waste of time' પછી સામાન્ય રીતે Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The man, _______ to be a doctor, was actually a fraud.'",
      "options": [
        "claiming",
        "claimed",
        "to claim",
        "having claimed"
      ],
      "answer": "claiming",
      "explanation": "'claiming to be a doctor' એ Present Participle phrase છે જે 'man' સંજ્ઞા વિશે વધારાની માહિતી આપે છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'I am accustomed to _______ long hours.'",
      "options": [
        "work",
        "to work",
        "working",
        "be working"
      ],
      "answer": "working",
      "explanation": "'be accustomed to' (ની ટેવ હોવી) માં 'to' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'He had difficulty _______ a taxi.'",
      "options": [
        "to find",
        "finding",
        "in finding",
        "B and C both"
      ],
      "answer": "B and C both",
      "explanation": "'have difficulty' પછી સીધું Gerund ('finding') અથવા 'in + Gerund' ('in finding') બંનેનો ઉપયોગ થઈ શકે છે. બંને સાચા છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'He is a man to rely on.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to rely on' એ to-infinitive છે જે 'man' સંજ્ઞાનું વર્ણન કરે છે (જેના પર વિશ્વાસ કરી શકાય)."
    }
  ],
  "test-30": [
    {
      "question": "ખાલી જગ્યા પૂરો: 'The book is not worth _______.'",
      "options": [
        "reading",
        "to read",
        "read",
        "to be read"
      ],
      "answer": "reading",
      "explanation": "'Worth' પછી હંમેશા Gerund (-ing form) નો ઉપયોગ થાય છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'He was about _______ when the phone rang.'",
      "options": [
        "to leave",
        "leaving",
        "leave",
        "left"
      ],
      "answer": "to leave",
      "explanation": "'be about to' (ની તૈયારીમાં હોવું) પછી હંમેશા to-infinitive આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The issue is too important _______.'",
      "options": [
        "ignoring",
        "to be ignored",
        "to ignore",
        "ignored"
      ],
      "answer": "to be ignored",
      "explanation": "'too + adjective' પછી passive અર્થ દર્શાવવા માટે passive infinitive ('to be + V3') નો ઉપયોગ થાય છે (એટલું મહત્વનું છે કે અવગણી શકાય નહીં)."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'They won't tolerate people _______ late.'",
      "options": [
        "to be",
        "be",
        "being",
        "to being"
      ],
      "answer": "being",
      "explanation": "'Tolerate' ક્રિયાપદ પછી Gerund ('being') આવે છે. 'people' એ Gerund નો કર્તા છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'I had the plumber _______ the leaky tap.'",
      "options": [
        "fix",
        "to fix",
        "fixing",
        "fixed"
      ],
      "answer": "fix",
      "explanation": "આ causative verb 'have' ની active રચના છે (have someone do something). Object ('the plumber') પછી 'to' વગરનું મૂળ ક્રિયાપદ (Bare Infinitive) આવે છે."
    },
    {
      "question": "યોગ્ય વિકલ્પ પસંદ કરો: 'She is incapable of _______ a secret.'",
      "options": [
        "keep",
        "to keep",
        "keeping",
        "kept"
      ],
      "answer": "keeping",
      "explanation": "'incapable of' માં 'of' એ preposition છે, તેથી તેના પછી Gerund (-ing form) આવે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'There are many problems _______.'",
      "options": [
        "to solve",
        "solving",
        "solved",
        "to be solving"
      ],
      "answer": "to solve",
      "explanation": "અહીં to-infinitive 'to solve' એ 'problems' સંજ્ઞાના વિશેષણ તરીકે કાર્ય કરે છે."
    },
    {
      "question": "સાચો વિકલ્પ શોધો: 'I saw him _______ out of the house.'",
      "options": [
        "to come",
        "coming",
        "came",
        "A and B both"
      ],
      "answer": "coming",
      "explanation": "'See' જેવા સંવેદનાના ક્રિયાપદ પછી object અને પછી Present Participle ('coming') આવે છે જે ક્રિયાને ચાલુ અવસ્થામાં દર્શાવે છે. Bare infinitive 'come' પણ આવી શકે છે."
    },
    {
      "question": "ખાલી જગ્યા પૂરો: 'The teacher forbade the students _______ their phones in class.'",
      "options": [
        "to use",
        "using",
        "use",
        "from using"
      ],
      "answer": "to use",
      "explanation": "'Forbid' પછી object ('the students') અને પછી to-infinitive ('to use') નો ઉપયોગ થાય છે. 'from using' પણ એક સાચી રચના છે."
    },
    {
      "question": "વાક્યમાં non-finite verb નો પ્રકાર જણાવો: 'His only exercise is walking.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Gerund",
      "explanation": "અહીં 'walking' એ 'exercise' શું છે તે સમજાવે છે (complement). તે એક પ્રવૃત્તિનું નામ છે, તેથી તે Gerund છે."
    }
  ]
};
