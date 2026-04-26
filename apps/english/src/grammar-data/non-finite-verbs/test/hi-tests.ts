import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": " कीचेके वाक्य में Non-Finite Verb पहचान: 'I want to learn English.'",
      "options": [
        "want",
        "to learn",
        "learn",
        "English"
      ],
      "answer": "to learn",
      "explanation": "यहाँ 'to learn' यह 'to' के साथ का मूल क्रिया (Verb) (infinitive) है. वह वाक्य का मुख्य क्रिया (Verb) नहीं भी एक हेतु दर्शाता है."
    },
    {
      "question": " कीचेके वाक्य में Gerund पहचान: 'Swimming is a good exercise.'",
      "options": [
        "is",
        "good",
        "Swimming",
        "exercise"
      ],
      "answer": "Swimming",
      "explanation": "यहाँ 'Swimming' (क्रिया (Verb) 'swim' + ing) यह वाक्यके कर्ता (Subject) के रूप में प्रयोग होता है, इसलिए वह Gerund है."
    },
    {
      "question": " कीचेके वाक्य में Participle पहचान: 'I saw a running train.'",
      "options": [
        "saw",
        "a",
        "train",
        "running"
      ],
      "answer": "running",
      "explanation": "यहाँ 'running' (क्रिया (Verb) 'run' + ing) यह 'train' संज्ञाके विशेषण (adjective) के रूप में कार्य करता है, इसलिए वह Present Participle है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He likes _______ chess.'",
      "options": [
        "play",
        "to playing",
        "playing",
        "to played"
      ],
      "answer": "playing",
      "explanation": "'Like' क्रिया (Verb) के बाद सामान्य रूप से Gerund ('-ing' वाला रूप) प्रयोग होता है."
    },
    {
      "question": "वाक्य में to-infinitive ढूंढिए: 'She agreed to help me.'",
      "options": [
        "She",
        "agreed",
        "to help",
        "me"
      ],
      "answer": "to help",
      "explanation": "'to help' यह to-infinitive है, क्योंकि वह 'to' और क्रिया (Verb) के मूल रूपसे बना हुआ है."
    },
    {
      "question": "इस वाक्य में Gerund ढूंढिए: 'My hobby is collecting stamps.'",
      "options": [
        "is",
        "hobby",
        "collecting",
        "stamps"
      ],
      "answer": "collecting",
      "explanation": "यहाँ 'collecting' यह 'hobby' को पूरक (complement) के रूप में वर्णवे है और क्रिया (Verb) के '-ing' रूप में है, इसलिए वह Gerund है."
    },
    {
      "question": "इस वाक्य में Present Participle कौन सा है?: 'The crying baby was hungry.'",
      "options": [
        "crying",
        "was",
        "hungry",
        "The"
      ],
      "answer": "crying",
      "explanation": "'crying' शब्द 'baby' संज्ञा का वर्णन करता है, इसलिए वह विशेषण के रूप में कार्य करतुं Present Participle है."
    },
    {
      "question": "रिक्त स्थान के लिए सही विकल्प पसंद करो: 'It is easy _______ this question.'",
      "options": [
        "solving",
        "to solving",
        "to solve",
        "solved"
      ],
      "answer": "to solve",
      "explanation": "सामान्य रूप से 'It is + adjective' के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "वाक्य में Gerund पहचान: 'He is fond of reading books.'",
      "options": [
        "is",
        "fond",
        "reading",
        "books"
      ],
      "answer": "reading",
      "explanation": "'of' जैसे preposition के बाद हमेशा Gerund ('-ing' वाला रूप) आता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'To err is human.'",
      "options": [
        "Gerund",
        "Present Participle",
        "Infinitive",
        "Past Participle"
      ],
      "answer": "Infinitive",
      "explanation": "'To err' यह वाक्यके कर्ता (Subject) के रूप में प्रयोग होताेल to-infinitive है."
    }
  ],
  "test-2": [
    {
      "question": "रिक्त स्थान में उचित non-finite verb मूको: 'Let me _______.'",
      "options": [
        "to go",
        "going",
        "go",
        "gone"
      ],
      "answer": "go",
      "explanation": "'Let' क्रिया (Verb) के बाद हमेशा 'to' बिना का मूल क्रिया (Verb) (bare infinitive) आता है."
    },
    {
      "question": "इस वाक्य में Past Participle ढूंढिए: 'The broken glass was on the floor.'",
      "options": [
        "broken",
        "glass",
        "was",
        "floor"
      ],
      "answer": "broken",
      "explanation": "'broken' (break का V3 रूप) यह 'glass' संज्ञा का विशेषण के रूप में वर्णन करता है, इसलिए वह Past Participle है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I enjoy _______ to music.'",
      "options": [
        "listen",
        "to listening",
        "listening",
        "to listen"
      ],
      "answer": "listening",
      "explanation": "'Enjoy' क्रिया (Verb) के बाद सामान्य रूप से Gerund ('-ing' वाला रूप) प्रयोग होता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'Barking dogs seldom bite.'",
      "options": [
        "Gerund",
        "Present Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Present Participle",
      "explanation": "'Barking' शब्द 'dogs' संज्ञा का वर्णन करतुं विशेषण है, इसलिए वह Present Participle है."
    },
    {
      "question": "सही विकल्प पसंद करो: 'We decided _______ a new car.'",
      "options": [
        "buying",
        "to buy",
        "buy",
        "bought"
      ],
      "answer": "to buy",
      "explanation": "'Decide' क्रिया (Verb) के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "Gerund ढूंढिए: 'She is good at painting.'",
      "options": [
        "is",
        "good",
        "at",
        "painting"
      ],
      "answer": "painting",
      "explanation": "'at' यह preposition है, और preposition के बाद क्रिया (Verb) का '-ing' वाला रूप (Gerund) आता है."
    },
    {
      "question": "इस वाक्य में infinitive पहचान: 'He came here to meet his friend.'",
      "options": [
        "came",
        "here",
        "to meet",
        "friend"
      ],
      "answer": "to meet",
      "explanation": "'to meet' यह क्रिया का हेतु दर्शाता है और 'to' + मूल क्रिया (Verb)से बना हुआ है, इसलिए वह to-infinitive है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'Would you mind _______ the door?'",
      "options": [
        "closing",
        "to close",
        "close",
        "closed"
      ],
      "answer": "closing",
      "explanation": "'Would you mind' के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "वाक्य में Past Participle पहचान: 'A burnt child dreads the fire.'",
      "options": [
        "burnt",
        "child",
        "dreads",
        "fire"
      ],
      "answer": "burnt",
      "explanation": "'burnt' (burn का V3 रूप) यह 'child' संज्ञाके विशेषण के रूप में प्रयोग होता है, इसलिए वह Past Participle है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'It is important _______ your homework.'",
      "options": [
        "doing",
        "to doing",
        "do",
        "to do"
      ],
      "answer": "to do",
      "explanation": "वाक्यकी रचना 'It is + adjective' के बाद to-infinitive  का प्रयोग सूचित करता है."
    }
  ],
  "test-3": [
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He made me cry.'",
      "options": [
        "Gerund",
        "Present Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "Bare Infinitive",
      "explanation": "'Make' क्रिया (Verb) के active voice में दूसरों क्रिया (Verb) के साथ 'to' बिना का मूल रूप (Bare Infinitive) प्रयोग होता है. (made someone do something)"
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She is busy _______ a letter.'",
      "options": [
        "to write",
        "writing",
        "write",
        "written"
      ],
      "answer": "writing",
      "explanation": "'busy' शब्द के बाद सामान्य रूप से Gerund ('-ing' वाला रूप) आता है."
    },
    {
      "question": "इस वाक्य में Participle ढूंढिए: 'I found the door locked.'",
      "options": [
        "found",
        "the",
        "door",
        "locked"
      ],
      "answer": "locked",
      "explanation": "'locked' (lock का V3 रूप) यह 'door' संज्ञा की स्थिति का वर्णन करता है. वह Past Participle है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'They are planning _______ to Goa.'",
      "options": [
        "going",
        "to go",
        "go",
        "to going"
      ],
      "answer": "to go",
      "explanation": "'Plan' क्रिया (Verb) के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "Gerund ढूंढिए: 'Thank you for helping me.'",
      "options": [
        "Thank",
        "for",
        "helping",
        "me"
      ],
      "answer": "helping",
      "explanation": "'for' यह preposition है, और preposition के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "वाक्य में to-infinitive पहचान: 'To forgive is divine.'",
      "options": [
        "To forgive",
        "is",
        "divine",
        "To"
      ],
      "answer": "To forgive",
      "explanation": "'To forgive' यह वाक्यके कर्ता (Subject) के रूप में प्रयोग होताेल to-infinitive है."
    },
    {
      "question": "रिक्त स्थान के लिए उचित शब्द पसंद करो: 'I heard him _______ a song.'",
      "options": [
        "sing",
        "to sing",
        "singing",
        "sang"
      ],
      "answer": "sing",
      "explanation": "'Hear' जैसे संवेदकेके क्रिया (Verb) (verb of perception) के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) प्रयोग होता है. यहाँ 'singing' भी सही हो सकता है, भी 'sing' अधिक सामान्य है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'I am tired of waiting.'",
      "options": [
        "Infinitive",
        "Gerund",
        "Present Participle",
        "Past Participle"
      ],
      "answer": "Gerund",
      "explanation": "'of' यह preposition है, और उसका के बाद आता है क्रिया (Verb) का '-ing' वाला रूप 'waiting' यह Gerund है."
    },
    {
      "question": "Past Participle ढूंढिए: 'The written report was submitted.'",
      "options": [
        "written",
        "report",
        "was",
        "submitted"
      ],
      "answer": "written",
      "explanation": "'written' (write का V3 रूप) यह 'report' संज्ञाके विशेषण के रूप में कार्य करता है, के लिए वह Past Participle है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He refused _______ my question.'",
      "options": [
        "answering",
        "to answer",
        "answer",
        "to answering"
      ],
      "answer": "to answer",
      "explanation": "'Refuse' क्रिया (Verb) के बाद to-infinitive का प्रयोग होता है."
    }
  ],
  "test-4": [
    {
      "question": "इस वाक्य में Gerund कौन सा है?: 'He stopped smoking last year.'",
      "options": [
        "stopped",
        "smoking",
        "last",
        "year"
      ],
      "answer": "smoking",
      "explanation": "'Stop' क्रिया (Verb) के बाद जो कोई क्रिया अटकाने का अर्थ हो तो Gerund (-ing form) प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'We went to the market _______ vegetables.'",
      "options": [
        "to buy",
        "buying",
        "buy",
        "for buying"
      ],
      "answer": "to buy",
      "explanation": "हेतु दर्शाने के लिए to-infinitive का प्रयोग होता है. यहाँ शाकभाजी खरीदवा का हेतु है."
    },
    {
      "question": "वाक्य में Present Participle पहचान: 'Seeing the police, the thief ran away.'",
      "options": [
        "Seeing",
        "police",
        "thief",
        "ran away"
      ],
      "answer": "Seeing",
      "explanation": "'Seeing' यह एक क्रिया का वर्णन करता है जो बीजी क्रिया का कारण है. वह Present Participle है जो adverbial phrase बनाता है."
    },
    {
      "question": "रिक्त स्थान में उचित क्रिया का रूप मूको: 'She avoids _______ fast food.'",
      "options": [
        "to eat",
        "eating",
        "eat",
        "eaten"
      ],
      "answer": "eating",
      "explanation": "'Avoid' क्रिया (Verb) के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "Past Participle ढूंढिए: 'The story was written by a famous author.'",
      "options": [
        "story",
        "was",
        "written",
        "famous"
      ],
      "answer": "written",
      "explanation": "Passive voice में मुख्य क्रिया (Verb) के रूप में 'write' का V3 रूप 'written' प्रयोग होता है, जो Past Participle है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'It's no use _______ over spilt milk.'",
      "options": [
        "to cry",
        "crying",
        "cry",
        "cried"
      ],
      "answer": "crying",
      "explanation": "'It's no use' (या) 'It's no good' के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "Bare Infinitive ढूंढिए: 'You had better _______ now.'",
      "options": [
        "leave",
        "to leave",
        "leaving",
        "left"
      ],
      "answer": "leave",
      "explanation": "'Had better' के बाद हमेशा 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I am looking forward to _______ you.'",
      "options": [
        "meet",
        "meeting",
        "met",
        "to meet"
      ],
      "answer": "meeting",
      "explanation": "'look forward to' में 'to' यह preposition है, इसलिए उसका के बाद Gerund ('-ing' form) आता है, infinitive नहीं."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He has a house to live in.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "None"
      ],
      "answer": "Infinitive",
      "explanation": "'to live' यह to-infinitive है जो 'house' संज्ञा का वर्णन करता है."
    },
    {
      "question": "रिक्त स्थान के लिए उचित विकल्प पसंद करो: 'She prevented me from _______ there.'",
      "options": [
        "go",
        "to go",
        "going",
        "gone"
      ],
      "answer": "going",
      "explanation": "'Prevent from' के बाद हमेशा Gerund ('-ing' form) का प्रयोग होता है."
    }
  ],
  "test-5": [
    {
      "question": "वाक्य में Participle पहचान: 'The teacher found the student sleeping in the class.'",
      "options": [
        "found",
        "student",
        "sleeping",
        "class"
      ],
      "answer": "sleeping",
      "explanation": "यहाँ 'sleeping' यह 'student' क्या कर रह्यो था वह दर्शाता है. वह Present Participle है जो object complement के रूप में कार्य करता है."
    },
    {
      "question": "उचित non-finite verb पसंद करो: 'He promised _______ me.'",
      "options": [
        "helping",
        "to helping",
        "to help",
        "help"
      ],
      "answer": "to help",
      "explanation": "'Promise' क्रिया (Verb) के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I can't help _______ at his jokes.'",
      "options": [
        "laugh",
        "to laugh",
        "laughing",
        "laughed"
      ],
      "answer": "laughing",
      "explanation": "'Can't help' (रोकी न सकना) के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "इस वाक्य में non-finite verb  का प्रकार जणावो: 'Walking on the grass is forbidden.'",
      "options": [
        "Infinitive",
        "Gerund",
        "Present Participle",
        "Past Participle"
      ],
      "answer": "Gerund",
      "explanation": "'Walking' यह वाक्यके कर्ता (Subject) के रूप में प्रयोग होता है, इसलिए वह Gerund है."
    },
    {
      "question": "Past Participle ढूंढिए: 'Tired from the journey, he went to sleep.'",
      "options": [
        "Tired",
        "journey",
        "went",
        "sleep"
      ],
      "answer": "Tired",
      "explanation": "'Tired' (tire का V3 रूप) यह 'he' की स्थिति का वर्णन करता है और वाक्य की शुरुआत में आई को कारण दर्शाता है. वह Past Participle है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She is learning _______ the guitar.'",
      "options": [
        "playing",
        "play",
        "to play",
        "to playing"
      ],
      "answer": "to play",
      "explanation": "'Learn' क्रिया (Verb) के बाद कोई कला या आदत शीखवा का अर्थ हो तब to-infinitive आता है."
    },
    {
      "question": "Gerund पहचान: 'My father’s job is driving a bus.'",
      "options": [
        "father's",
        "job",
        "is",
        "driving"
      ],
      "answer": "driving",
      "explanation": "यहाँ 'driving' यह 'job' क्या है वह समजावे है (complement of the verb 'is'), इसलिए वह Gerund है."
    },
    {
      "question": "रिक्त स्थान के लिए सही विकल्प पसंद करो: 'The man seems ______ about something.'",
      "options": [
        "to worry",
        "worrying",
        "worried",
        "to be worried"
      ],
      "answer": "worried",
      "explanation": "'Seems' के बाद सामान्य रूप से Past Participle (worried) विशेषण के रूप में प्रयोग होता है जो व्यक्ति की स्थिति दर्शाता है. 'to be worried' भी सही है भी 'worried' अधिक सामान्य है."
    },
    {
      "question": "वाक्य में Bare Infinitive ढूंढिए: 'I saw him enter the room.'",
      "options": [
        "saw",
        "him",
        "enter",
        "room"
      ],
      "answer": "enter",
      "explanation": "'See' जैसे संवेदकेके क्रिया (Verb) (verb of perception) के बाद object आता है और के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He is used to _______ up early.'",
      "options": [
        "getting",
        "get",
        "to get",
        "got"
      ],
      "answer": "getting",
      "explanation": "'be used to' ( की आदत होवी) के बाद हमेशा Gerund (-ing form) आता है."
    }
  ],
  "test-6": [
    {
      "question": " कीचेके वाक्य में non-finite verb  का प्रकार जणावो: 'I have some clothes to wash.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Infinitive",
      "explanation": "'to wash' यह to-infinitive है, जो 'clothes' संज्ञा बारे में अधिक जानकारी देता है (कपड़े शा के लिए है)."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She insisted on _______ with us.'",
      "options": [
        "come",
        "to come",
        "coming",
        "came"
      ],
      "answer": "coming",
      "explanation": "'insist on' में 'on' यह preposition है, इसलिए उसका के बाद Gerund ('-ing' form) आता है."
    },
    {
      "question": "वाक्य में Past Participle पहचान: 'The police found the stolen car.'",
      "options": [
        "police",
        "found",
        "stolen",
        "car"
      ],
      "answer": "stolen",
      "explanation": "'stolen' (steal का V3 रूप) यह 'car' संज्ञाके विशेषण के रूप में प्रयोग होता है, इसलिए वह Past Participle है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He offered _______ me a ride.'",
      "options": [
        "giving",
        "to giving",
        "give",
        "to give"
      ],
      "answer": "to give",
      "explanation": "'Offer' क्रिया (Verb) के बाद सामान्य रूप से to-infinitive का प्रयोग होता है."
    },
    {
      "question": "Gerund ढूंढिए: 'I dislike waiting in queues.'",
      "options": [
        "dislike",
        "waiting",
        "in",
        "queues"
      ],
      "answer": "waiting",
      "explanation": "'Dislike' क्रिया (Verb) के बाद Gerund ('-ing' form) का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She made her children _______ their room.'",
      "options": [
        "clean",
        "to clean",
        "cleaning",
        "cleaned"
      ],
      "answer": "clean",
      "explanation": "'Make' के active voice में object के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "वाक्य में Present Participle पहचान: 'The story was very interesting.'",
      "options": [
        "story",
        "was",
        "very",
        "interesting"
      ],
      "answer": "interesting",
      "explanation": "यहाँ 'interesting' यह 'story' का वर्णन करतुं विशेषण है. वह क्रिया (Verb) 'interest'  में से बना हुआ है, इसलिए वह Present Participle है."
    },
    {
      "question": "सही विकल्प पसंद करो: 'It is time _______ to bed.'",
      "options": [
        "going",
        "to go",
        "go",
        "went"
      ],
      "answer": "to go",
      "explanation": "'It is time' के बाद कोई क्रिया करवा के लिए to-infinitive का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He is afraid of _______ alone.'",
      "options": [
        "be",
        "to be",
        "being",
        "been"
      ],
      "answer": "being",
      "explanation": "'of' यह preposition है, जोके के बाद Gerund आता है. 'be' का Gerund रूप 'being' है."
    },
    {
      "question": "इस वाक्य में non-finite verb क्या है?: 'I heard the bell ring.'",
      "options": [
        "heard",
        "bell",
        "ring",
        "the"
      ],
      "answer": "ring",
      "explanation": "'Hear' जैसे संवेदकेके क्रिया (Verb) के बाद object और के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    }
  ],
  "test-7": [
    {
      "question": "रिक्त स्थान पूरा: 'He failed _______ the exam.'",
      "options": [
        "passing",
        "to pass",
        "pass",
        "to passing"
      ],
      "answer": "to pass",
      "explanation": "'Fail' क्रिया (Verb) के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "वाक्य में Gerund ढूंढिए: 'Painting is my favorite pastime.'",
      "options": [
        "Painting",
        "is",
        "my",
        "favorite"
      ],
      "answer": "Painting",
      "explanation": "यहाँ 'Painting' वाक्यके कर्ता (Subject) के रूप में कार्य करता है, इसलिए वह Gerund है."
    },
    {
      "question": "Participle  का प्रकार जणावो: 'The defeated army fled.'",
      "options": [
        "Present Participle",
        "Past Participle",
        "Perfect Participle",
        "Gerund"
      ],
      "answer": "Past Participle",
      "explanation": "'defeated' (defeat का V3 रूप) यह 'army' संज्ञाके विशेषण के रूप में प्रयोग होता है, इसलिए वह Past Participle है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She doesn't mind _______ for me.'",
      "options": [
        "to wait",
        "wait",
        "waiting",
        "waited"
      ],
      "answer": "waiting",
      "explanation": "'Mind' (आपत्ति होना) क्रिया (Verb) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'They were seen _______ out of the house.'",
      "options": [
        "to go",
        "going",
        "go",
        "gone"
      ],
      "answer": "to go",
      "explanation": "'see' क्रिया (Verb) का passive voice ('were seen') हो तब to-infinitive का प्रयोग होता है. Active voice ('saw them') होत तो 'go' (या) 'going' यहवत."
    },
    {
      "question": "वाक्य में to-infinitive ढूंढिए: 'My dream is to become a doctor.'",
      "options": [
        "dream",
        "is",
        "to become",
        "doctor"
      ],
      "answer": "to become",
      "explanation": "'to become' यह to-infinitive है, जो 'dream' क्या है वह समजावे है (complement)."
    },
    {
      "question": "Gerund पहचान: 'I am tired of arguing with you.'",
      "options": [
        "tired",
        "of",
        "arguing",
        "with"
      ],
      "answer": "arguing",
      "explanation": "'of' यह preposition है, और preposition के बाद क्रिया (Verb) का -ing वाला रूप (Gerund) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She is thinking of _______ a new business.'",
      "options": [
        "start",
        "to start",
        "starting",
        "started"
      ],
      "answer": "starting",
      "explanation": "'think of' में 'of' यह preposition है, इसलिए उसका के बाद Gerund ('-ing' form) आता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'The wounded man was taken to the hospital.'",
      "options": [
        "Gerund",
        "Infinitive",
        "Past Participle",
        "Present Participle"
      ],
      "answer": "Past Participle",
      "explanation": "'wounded' (wound का V3 रूप) यह 'man' संज्ञाके विशेषण के रूप में कार्य करता है, इसलिए वह Past Participle है."
    },
    {
      "question": "सही विकल्प पसंद करो: 'I can't afford _______ such an expensive car.'",
      "options": [
        "buying",
        "to buy",
        "buy",
        "bought"
      ],
      "answer": "to buy",
      "explanation": "'Afford' क्रिया (Verb) के बाद to-infinitive का प्रयोग होता है."
    }
  ],
  "test-8": [
    {
      "question": "रिक्त स्थान पूरा: 'He spends a lot of time _______ TV.'",
      "options": [
        "watching",
        "to watch",
        "watch",
        "watched"
      ],
      "answer": "watching",
      "explanation": "'Spend time' के बाद कोई क्रिया करवाके अर्थ में Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "वाक्य में Bare Infinitive पहचान: 'You need not _______ so fast.'",
      "options": [
        "need",
        "not",
        "drive",
        "so fast"
      ],
      "answer": "drive",
      "explanation": "'Need not' यह modal verb के रूप में प्रयोग होता है, इसलिए उसका के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "Gerund ढूंढिए: 'Giving is better than receiving.'",
      "options": [
        "is",
        "better",
        "than",
        "Giving"
      ],
      "answer": "Giving",
      "explanation": "'Giving' वाक्यके कर्ता (Subject) के रूप में प्रयोग होता है, इसलिए वह Gerund है. 'receiving' भी Gerund है जो 'than' preposition के बाद आया है."
    },
    {
      "question": "रिक्त स्थान के लिए उचित विकल्प पसंद करो: 'I am planning _______ my grandparents this weekend.'",
      "options": [
        "visiting",
        "to visit",
        "visit",
        "visited"
      ],
      "answer": "to visit",
      "explanation": "'Plan' क्रिया (Verb) के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "वाक्य में Participle ढूंढिए: 'The boy, carrying a heavy bag, walked slowly.'",
      "options": [
        "boy",
        "carrying",
        "bag",
        "walked"
      ],
      "answer": "carrying",
      "explanation": "'carrying a heavy bag' यह Present Participle phrase है जो 'boy' संज्ञा बारे में वृद्धि की जानकारी देता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He is accused of _______ money.'",
      "options": [
        "steal",
        "to steal",
        "stealing",
        "stolen"
      ],
      "answer": "stealing",
      "explanation": "'accused of' में 'of' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She taught me _______.'",
      "options": [
        "how to swim",
        "swimming",
        "to swimming",
        "how swimming"
      ],
      "answer": "how to swim",
      "explanation": "'Teach' क्रिया (Verb) के बाद कोई गतिविधि यावी रूप से करना वह शीखववा के लिए 'how to + infinitive' का प्रयोग होता है."
    },
    {
      "question": "वाक्य में Past Participle ढूंढिए: 'He lived in a house built of stone.'",
      "options": [
        "lived",
        "house",
        "built",
        "stone"
      ],
      "answer": "built",
      "explanation": "'built' (build का V3 रूप) यह 'house' संज्ञा का वर्णन करतुं Past Participle है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He has given up _______.'",
      "options": [
        "smoke",
        "to smoke",
        "smoking",
        "smoked"
      ],
      "answer": "smoking",
      "explanation": "'Give up' (होडी देवुं) phrasal verb के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "Infinitive ढूंढिए: 'The doctor advised me to take rest.'",
      "options": [
        "advised",
        "me",
        "to take",
        "rest"
      ],
      "answer": "to take",
      "explanation": "'advise' क्रिया (Verb) के बाद object ('me') आता है और के बाद to-infinitive ('to take') आता है."
    }
  ],
  "test-9": [
    {
      "question": "रिक्त स्थान पूरा: 'It is difficult _______ him.'",
      "options": [
        "to convince",
        "convincing",
        "convince",
        "convinced"
      ],
      "answer": "to convince",
      "explanation": "वाक्यकी रचना 'It is + adjective' के बाद to-infinitive  का प्रयोग सूचित करता है."
    },
    {
      "question": "Gerund ढूंढिए: 'She succeeded in winning the prize.'",
      "options": [
        "succeeded",
        "in",
        "winning",
        "prize"
      ],
      "answer": "winning",
      "explanation": "'in' यह preposition है, और 'succeed in' के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "वाक्य में Participle  का प्रकार जणावो: 'The barking dog frightened the little girl.'",
      "options": [
        "Gerund",
        "Past Participle",
        "Present Participle",
        "Infinitive"
      ],
      "answer": "Present Participle",
      "explanation": "'barking' शब्द 'dog' संज्ञा का वर्णन करतुं विशेषण है, इसलिए वह Present Participle है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I want you _______ this letter.'",
      "options": [
        "post",
        "to post",
        "posting",
        "posted"
      ],
      "answer": "to post",
      "explanation": "'Want' क्रिया (Verb) के बाद object ('you') और के बाद to-infinitive आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He practices _______ the piano every day.'",
      "options": [
        "play",
        "to play",
        "playing",
        "to playing"
      ],
      "answer": "playing",
      "explanation": "'Practice' क्रिया (Verb) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "Past Participle ढूंढिए: 'The windows were broken.'",
      "options": [
        "windows",
        "were",
        "broken",
        "The"
      ],
      "answer": "broken",
      "explanation": "'broken' यह passive voice में प्रयोग होताेल Past Participle (V3 of break) है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I am busy _______ my project.'",
      "options": [
        "to complete",
        "completing",
        "complete",
        "completed"
      ],
      "answer": "completing",
      "explanation": "'busy' शब्द के बाद कोई क्रिया में व्यस्त होना का अर्थ दर्शाने Gerund (-ing form) प्रयोग होता है."
    },
    {
      "question": "Bare Infinitive ढूंढिए: 'He helped me _______ my luggage.'",
      "options": [
        "carry",
        "to carry",
        "carrying",
        "carried"
      ],
      "answer": "carry",
      "explanation": "'Help' क्रिया (Verb) के बाद object ('me') आता है तब Bare Infinitive ('carry') (या) to-infinitive ('to carry') दोनों प्रयोग कर सकते है. Bare Infinitive अधिक सामान्य है."
    },
    {
      "question": "वाक्य में Gerund पहचान: 'I can't stand waiting in long lines.'",
      "options": [
        "stand",
        "waiting",
        "in",
        "long"
      ],
      "answer": "waiting",
      "explanation": "'Can't stand' (सहन न कर सकना) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The teacher told me _______ quiet.'",
      "options": [
        "be",
        "to be",
        "being",
        "to being"
      ],
      "answer": "to be",
      "explanation": "'Tell' क्रिया (Verb) के बाद object ('me') और के बाद to-infinitive का प्रयोग होता है."
    }
  ],
  "test-10": [
    {
      "question": "रिक्त स्थान पूरा: 'She asked me _______ her a favor.'",
      "options": [
        "doing",
        "to do",
        "do",
        "done"
      ],
      "answer": "to do",
      "explanation": "'Ask' क्रिया (Verb) के बाद object ('me') और के बाद कोई विनतीके अर्थ में to-infinitive आता है."
    },
    {
      "question": "वाक्य में Gerund ढूंढिए: 'Reading is a good way to improve vocabulary.'",
      "options": [
        "Reading",
        "is",
        "good",
        "improve"
      ],
      "answer": "Reading",
      "explanation": "'Reading' वाक्यके कर्ता (Subject) के रूप में प्रयोग होता है, इसलिए वह Gerund है."
    },
    {
      "question": "Participle पहचान: 'The rising sun looks beautiful.'",
      "options": [
        "rising",
        "sun",
        "looks",
        "beautiful"
      ],
      "answer": "rising",
      "explanation": "'rising' यह Present Participle है जो 'sun' संज्ञाके विशेषण के रूप में कार्य करता है."
    },
    {
      "question": "रिक्त स्थान के लिए उचित विकल्प पसंद करो: 'He has decided _______ abroad.'",
      "options": [
        "studying",
        "to study",
        "study",
        "studied"
      ],
      "answer": "to study",
      "explanation": "'Decide' क्रिया (Verb) के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "Bare Infinitive ढूंढिए: 'Let's _______ for a walk.'",
      "options": [
        "go",
        "to go",
        "going",
        "gone"
      ],
      "answer": "go",
      "explanation": "'Let's' (Let us) के बाद हमेशा 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He is addicted to _______ video games.'",
      "options": [
        "play",
        "to play",
        "playing",
        "played"
      ],
      "answer": "playing",
      "explanation": "'addicted to' में 'to' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "Past Participle पहचान: 'He was punished for his mistake.'",
      "options": [
        "was",
        "punished",
        "for",
        "mistake"
      ],
      "answer": "punished",
      "explanation": "यह passive voice का वाक्य है, जो में 'punished' यह Past Participle (V3) है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She went to the library _______ some books.'",
      "options": [
        "borrowing",
        "borrow",
        "to borrow",
        "borrowed"
      ],
      "answer": "to borrow",
      "explanation": "हेतु दर्शाने के लिए to-infinitive का प्रयोग होता है. यहाँ पुस्तको उधार लेवा का हेतु है."
    },
    {
      "question": "Gerund ढूंढिए: 'I am excited about visiting Paris.'",
      "options": [
        "excited",
        "about",
        "visiting",
        "Paris"
      ],
      "answer": "visiting",
      "explanation": "'about' यह preposition है, और preposition के बाद क्रिया (Verb) का -ing वाला रूप (Gerund) आता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He was made to confess his crime.'",
      "options": [
        "Gerund",
        "Bare Infinitive",
        "To-infinitive",
        "Participle"
      ],
      "answer": "To-infinitive",
      "explanation": "'make' क्रिया (Verb) का passive voice ('was made') हो तब to-infinitive ('to confess') का प्रयोग होता है."
    }
  ],
  "test-11": [
    {
      "question": "उचित विकल्प पसंद करो: 'He stopped _______ a newspaper.'",
      "options": [
        "to read",
        "reading",
        "read",
        "having read"
      ],
      "answer": "to read",
      "explanation": "'Stop' के बाद to-infinitive  का अर्थ 'कोईक क्रिया करवा के लिए अटकवुं' होता है. यहाँ वह अखबार पढ़ने के लिए अटक्यो. जो 'reading' होत तो अर्थ 'पढ़ने का बंध कर दीधुं' थात."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I remember _______ him at the party last year.'",
      "options": [
        "to see",
        "seeing",
        "saw",
        "to have seen"
      ],
      "answer": "seeing",
      "explanation": "'Remember' के बाद Gerund (-ing form)  का अर्थ भूतकाल में बनताली घटना को याद करना ऐसा होता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'Having finished his homework, he went out to play.'",
      "options": [
        "Present Participle",
        "Past Participle",
        "Perfect Participle",
        "Gerund"
      ],
      "answer": "Perfect Participle",
      "explanation": "'Having + V3' (Having finished) की रचना Perfect Participle कहा जाता है. वह दर्शाता है या एक क्रिया पूरी थया के बाद बीजी क्रिया शुरू हुई."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I regret _______ you the bad news.'",
      "options": [
        "telling",
        "to tell",
        "told",
        "to have told"
      ],
      "answer": "to tell",
      "explanation": "'Regret' के बाद to-infinitive  का अर्थ 'दुःख के साथ कुछ कहना' होता है (भविष्य की क्रिया). जो 'telling' होत तो अर्थ 'कुछ कज दीधा का अफसोस' थात (भूतकाल की क्रिया)."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He is not accustomed to _______ so much.'",
      "options": [
        "work",
        "working",
        "be working",
        "to work"
      ],
      "answer": "working",
      "explanation": "'Accustomed to' ( की टेव होवी) के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'We watched the artist _______ a beautiful portrait.'",
      "options": [
        "to draw",
        "drawing",
        "drew",
        "to have drawn"
      ],
      "answer": "drawing",
      "explanation": "'Watch' जैसे संवेदकेके क्रिया (Verb) के बाद जो क्रिया अपूर्ण हो होना दर्शाववुं हो तो Present Participle ('drawing') प्रयोग होता है. 'draw' (bare infinitive) भी प्रयोग कर सकते."
    },
    {
      "question": "वाक्य को दुबारा लखो: 'He was sorry that he missed the train.' Gerund  का प्रयोग करो.",
      "options": [
        "He was sorry for missing the train.",
        "He was sorry to miss the train.",
        "He was sorry about to miss the train.",
        "He was sorry that he has missed the train."
      ],
      "answer": "He was sorry for missing the train.",
      "explanation": "'sorry for' के बाद Gerund  का प्रयोग करना वाक्य का भाव जालवी सकता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I am opposed to _______ new taxes.'",
      "options": [
        "introduce",
        "to introduce",
        "introducing",
        "introduced"
      ],
      "answer": "introducing",
      "explanation": "'Opposed to' में 'to' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The book is worth _______.'",
      "options": [
        "to read",
        "reading",
        "read",
        "to be read"
      ],
      "answer": "reading",
      "explanation": "'Worth' के बाद हमेशा Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'His greatest pleasure is singing.'",
      "options": [
        "Participle",
        "Infinitive",
        "Gerund",
        "Bare Infinitive"
      ],
      "answer": "Gerund",
      "explanation": "यहाँ 'singing' यह क्रिया (Verb) 'is' के complement (पूरक) के रूप में प्रयोग होता है और वह एक गतिविधि की संज्ञा है, इसलिए वह Gerund है."
    }
  ],
  "test-12": [
    {
      "question": "रिक्त स्थान पूरा: 'He went on _______ even though I told him to stop.'",
      "options": [
        "to talk",
        "talking",
        "talked",
        "talk"
      ],
      "answer": "talking",
      "explanation": "'Go on' के बाद Gerund (-ing form)  का अर्थ 'कोई क्रिया अपूर्ण राखवी' ऐसा होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I meant _______ the letter, but I forgot.'",
      "options": [
        "to post",
        "posting",
        "post",
        "to have posted"
      ],
      "answer": "to post",
      "explanation": "'Mean' के बाद to-infinitive  का अर्थ 'ईरादो होना' ऐसा होता है."
    },
    {
      "question": "वाक्य में Perfect Participle ढूंढिए: 'Having rested, we continued our journey.'",
      "options": [
        "Having rested",
        "rested",
        "continued",
        "journey"
      ],
      "answer": "Having rested",
      "explanation": "'Having + V3' की रचना Perfect Participle है, जो दर्शाता है या आराम कर्या के बाद यात्रा फरी शुरू हुई."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She is committed to _______ the poor.'",
      "options": [
        "help",
        "helping",
        "to help",
        "have helped"
      ],
      "answer": "helping",
      "explanation": "'Committed to' में 'to' यह preposition के रूप में प्रयोग होता है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'Try _______ this key in the lock.'",
      "options": [
        "to put",
        "putting",
        "put",
        "to putting"
      ],
      "answer": "putting",
      "explanation": "'Try' के बाद Gerund (-ing form)  का अर्थ 'प्रयोग कर जैसा' होता है. यहाँ चाबी ताला में केखी को प्रयत्न करवा की बात है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He needs _______ his car.'",
      "options": [
        "to wash",
        "washing",
        "wash",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "'Need' के बाद to-infinitive ('to wash')  का अर्थ 'काम करवा की जरूर है' (active) होता है. 'Need' के बाद Gerund ('washing')  का अर्थ 'काम होने की जरूर है' (passive) होता है. दोनों सही है."
    },
    {
      "question": "वाक्य को Gerund  का प्रयोग कर जोडो: 'He writes novels. It is his profession.'",
      "options": [
        "He writes novels for his profession.",
        "To write novels is his profession.",
        "Writing novels is his profession.",
        "His profession is to write novels."
      ],
      "answer": "Writing novels is his profession.",
      "explanation": "यहाँ 'Writing novels' यह Gerund phrase है जो वाक्यके कर्ता (Subject) के रूप में कार्य करता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I can't imagine him _______ such a thing.'",
      "options": [
        "to do",
        "doing",
        "does",
        "done"
      ],
      "answer": "doing",
      "explanation": "'Imagine' क्रिया (Verb) के बाद object ('him') और के बाद Gerund (-ing form) (या) Present Participle आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'They were made _______ overtime.'",
      "options": [
        "work",
        "working",
        "to work",
        "to working"
      ],
      "answer": "to work",
      "explanation": "जब 'make' क्रिया (Verb) passive voice ('were made') में हो, तब उसके साथ to-infinitive आता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'The problem is to find a solution.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to find' यह to-infinitive है जो 'problem' क्या है वह समजावे है (complement)."
    }
  ],
  "test-13": [
    {
      "question": "रिक्त स्थान पूरा: 'She couldn't help _______ when she heard the joke.'",
      "options": [
        "laughing",
        "to laugh",
        "laugh",
        "laughed"
      ],
      "answer": "laughing",
      "explanation": "'Couldn't help' (हसवुं रोकी न सकना) के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The purpose of his visit was _______ our new office.'",
      "options": [
        "seeing",
        "to see",
        "see",
        "to have seen"
      ],
      "answer": "to see",
      "explanation": "हेतु या कारण दर्शाने के लिए to-infinitive का प्रयोग होता है. यहाँ 'was' क्रिया (Verb) के complement के रूप में to-infinitive प्रयोग होता है."
    },
    {
      "question": "वाक्य में Participle phrase ढूंढिए: 'Being tired, I went to bed early.'",
      "options": [
        "Being tired",
        "I went",
        "to bed",
        "early"
      ],
      "answer": "Being tired",
      "explanation": "'Being tired' यह Present Participle phrase है जो 'I' (मैं) शा के लिए वहेलो सूई गया उसका कारण दर्शाता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He denied _______ the money.'",
      "options": [
        "to steal",
        "stealing",
        "stole",
        "to have stolen"
      ],
      "answer": "stealing",
      "explanation": "'Deny' (इनकार करना) क्रिया (Verb) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The police saw the thief _______ into the house.'",
      "options": [
        "to climb",
        "climbing",
        "climbed",
        "to have climbed"
      ],
      "answer": "climbing",
      "explanation": "'See' जैसे संवेदकेके क्रिया (Verb) के बाद जो क्रिया अपूर्ण हो होना दर्शाववुं हो तो Present Participle ('climbing') प्रयोग होता है. 'climb' (bare infinitive) भी आ सकता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He is subject to _______ frequent headaches.'",
      "options": [
        "get",
        "to get",
        "getting",
        "got"
      ],
      "answer": "getting",
      "explanation": "'Subject to' ( को यहधीन होना) में 'to' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "Infinitive phrase ढूंढिए: 'He has no choice but to obey.'",
      "options": [
        "has no choice",
        "but to obey",
        "to obey",
        "obey"
      ],
      "answer": "to obey",
      "explanation": "यहाँ 'but' के बाद to-infinitive 'to obey'  का प्रयोग थयो है, जो का अर्थ 'पालन करवा सिवाय' होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'We are busy _______ for the exam.'",
      "options": [
        "to prepare",
        "preparing",
        "prepare",
        "prepared"
      ],
      "answer": "preparing",
      "explanation": "'busy' के बाद कोई क्रिया में व्यस्त होना का भाव दर्शाने के लिए Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She seems _______ very happy.'",
      "options": [
        "being",
        "be",
        "to be",
        "to being"
      ],
      "answer": "to be",
      "explanation": "'Seem' (लागवुं) क्रिया (Verb) के बाद सामान्य रूप से to-infinitive का प्रयोग होता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'His ambition is to fly.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to fly' यह to-infinitive है जो 'ambition' क्या है वह स्पष्ट करता है (complement)."
    }
  ],
  "test-14": [
    {
      "question": "रिक्त स्थान पूरा: 'He was fined for _______ the speed limit.'",
      "options": [
        "exceed",
        "to exceed",
        "exceeding",
        "exceeded"
      ],
      "answer": "exceeding",
      "explanation": "'for' यह preposition है. Preposition के बाद हमेशा Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I would rather _______ than beg.'",
      "options": [
        "die",
        "to die",
        "dying",
        "died"
      ],
      "answer": "die",
      "explanation": "'Would rather' के बाद हमेशा 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "वाक्य में Perfect Participle ढूंढिए: 'Having lost all his money, he became a beggar.'",
      "options": [
        "Having lost",
        "lost all",
        "he became",
        "a beggar"
      ],
      "answer": "Having lost",
      "explanation": "'Having + V3' (Having lost) की रचना Perfect Participle है, जो एक क्रिया पूरी थया के बाद बीजी हुई वह दर्शाता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She is used to _______ in a big city.'",
      "options": [
        "live",
        "living",
        "to live",
        "lived"
      ],
      "answer": "living",
      "explanation": "'be used to' ( की आदत होवी) के बाद हमेशा Gerund (-ing form) आता है. 'used to' (भूतकाल की टेव) के बाद V1 आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He was heard _______ that he would resign.'",
      "options": [
        "say",
        "to say",
        "saying",
        "said"
      ],
      "answer": "to say",
      "explanation": "जब 'hear' जैसे संवेदकेके क्रिया (Verb) passive voice ('was heard') में हो, तब उसके साथ to-infinitive आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'It is a pleasure _______ you.'",
      "options": [
        "to meet",
        "meeting",
        "meet",
        "met"
      ],
      "answer": "to meet",
      "explanation": "'It is a pleasure' के बाद सामान्य रूप से to-infinitive का प्रयोग होता है."
    },
    {
      "question": "Gerund पहचान: 'I am not good at remembering names.'",
      "options": [
        "good",
        "at",
        "remembering",
        "names"
      ],
      "answer": "remembering",
      "explanation": "'at' यह preposition है, इसलिए उसका के बाद क्रिया (Verb) का Gerund (-ing form) रूप आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The teacher does not allow _______ in class.'",
      "options": [
        "talking",
        "to talk",
        "talk",
        "students to talking"
      ],
      "answer": "talking",
      "explanation": "'Allow' के बाद जो object न हो तो Gerund आता है. जो object हो (allow students) तो to-infinitive (to talk) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She doesn't feel like _______ out tonight.'",
      "options": [
        "to go",
        "going",
        "go",
        "went"
      ],
      "answer": "going",
      "explanation": "'Feel like' (मन होना) के बाद हमेशा Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'Let him do what he wants.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "Bare Infinitive",
      "explanation": "'Let' क्रिया (Verb) के बाद object ('him') और के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive - 'do') आता है."
    }
  ],
  "test-15": [
    {
      "question": "रिक्त स्थान पूरा: 'He has finished _______ his novel.'",
      "options": [
        "to write",
        "writing",
        "write",
        "written"
      ],
      "answer": "writing",
      "explanation": "'Finish' क्रिया (Verb) के बाद हमेशा Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'Do you fancy _______ for a drink?'",
      "options": [
        "to go",
        "go",
        "going",
        "gone"
      ],
      "answer": "going",
      "explanation": "'Fancy' (इच्छा होवी) क्रिया (Verb) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "वाक्य में Participle ढूंढिए: 'The girl sitting in the corner is my sister.'",
      "options": [
        "girl",
        "sitting",
        "corner",
        "sister"
      ],
      "answer": "sitting",
      "explanation": "'sitting in the corner' यह Present Participle phrase है जो 'girl' संज्ञा बारे में वृद्धि की जानकारी देता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I forgot _______ the door when I left.'",
      "options": [
        "locking",
        "to lock",
        "lock",
        "to have locked"
      ],
      "answer": "to lock",
      "explanation": "'Forget' के बाद to-infinitive  का अर्थ 'कोई काम करने की भूल जाना' होता है. जो 'locking' होत तो अर्थ 'लोक कर्या की बात भूली जवी' थात."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The problem is _______ a place to park.'",
      "options": [
        "finding",
        "to find",
        "found",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "'be' क्रिया (Verb) के complement के रूप में Gerund ('finding') और to-infinitive ('to find') दोनों का प्रयोग हो सकता है. दोनों विकल्प सही है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He risks _______ his job if he is late again.'",
      "options": [
        "to lose",
        "losing",
        "lose",
        "lost"
      ],
      "answer": "losing",
      "explanation": "'Risk' क्रिया (Verb) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "Gerund ढूंढिए: 'What I hate most is waiting in the rain.'",
      "options": [
        "hate",
        "is",
        "waiting",
        "rain"
      ],
      "answer": "waiting",
      "explanation": "'waiting' यह 'is' क्रिया (Verb) का complement है और वह एक क्रिया की संज्ञा है, इसलिए वह Gerund है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He was advised _______ a doctor.'",
      "options": [
        "seeing",
        "see",
        "to see",
        "saw"
      ],
      "answer": "to see",
      "explanation": "'advise' क्रिया (Verb) के passive voice ('was advised') में to-infinitive का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The project requires _______ carefully.'",
      "options": [
        "planning",
        "to be planned",
        "to plan",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "'Require' के बाद Gerund ('planning') (या) passive infinitive ('to be planned') दोनों का प्रयोग हो सकता है. दोनों का अर्थ सरखो है: 'योजके बनाने के लिए की जरूर है'."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'She has come to stay.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to stay' यह to-infinitive है जो यहाँ आने का हेतु दर्शाता है."
    }
  ],
  "test-16": [
    {
      "question": "रिक्त स्थान पूरा: 'He suggested _______ to the cinema.'",
      "options": [
        "to go",
        "going",
        "go",
        "that we to go"
      ],
      "answer": "going",
      "explanation": "'Suggest' क्रिया (Verb) के बाद सीधा ही दूसरा क्रिया (Verb) आता है तो वह Gerund (-ing form) होता है. (दा.त., He suggested going). जो object हो, तो रचना अलग होता है (दा.त., He suggested that we should go)."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She went to the USA with a view to _______ higher education.'",
      "options": [
        "get",
        "getting",
        "to get",
        "have got"
      ],
      "answer": "getting",
      "explanation": "'with a view to' में 'to' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "वाक्य में Perfect Participle ढूंढिए: 'Having been warned, he was more careful.'",
      "options": [
        "Having been warned",
        "warned",
        "was more careful",
        "careful"
      ],
      "answer": "Having been warned",
      "explanation": "'Having been + V3' यह Perfect Participle का passive रूप है. वह दर्शाता है या चेतावनी मल्या के बाद वह सावधान थयो."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The teacher encouraged the students _______ harder.'",
      "options": [
        "to work",
        "working",
        "work",
        "to have worked"
      ],
      "answer": "to work",
      "explanation": "'Encourage' क्रिया (Verb) के बाद object ('the students') और के बाद to-infinitive ('to work') का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I am considering _______ to a new city.'",
      "options": [
        "to move",
        "moving",
        "move",
        "moved"
      ],
      "answer": "moving",
      "explanation": "'Consider' क्रिया (Verb) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He tried _______ the window, but it was stuck.'",
      "options": [
        "to open",
        "opening",
        "open",
        "opened"
      ],
      "answer": "to open",
      "explanation": "'Try' के बाद to-infinitive  का अर्थ 'प्रयास करना' होता है. यहाँ खिड़की खोलवा का प्रयास फेल गया."
    },
    {
      "question": "Gerund ढूंढिए: 'He has a bad habit of biting his nails.'",
      "options": [
        "bad",
        "habit",
        "of",
        "biting"
      ],
      "answer": "biting",
      "explanation": "'of' यह preposition है, और preposition के बाद आता है '-ing' वाला क्रिया (Verb) 'biting' यह Gerund है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The film was so sad it made me _______.'",
      "options": [
        "cry",
        "to cry",
        "crying",
        "cried"
      ],
      "answer": "cry",
      "explanation": "'Make' क्रिया (Verb) के active voice में object ('me') के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The government aims _______ poverty.'",
      "options": [
        "at eradicating",
        "to eradicate",
        "eradicating",
        "eradicate"
      ],
      "answer": "to eradicate",
      "explanation": "'Aim' क्रिया (Verb) के बाद to-infinitive का प्रयोग होता है. जो 'aim at' होत, तो gerund ('eradicating') यहवत."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'Let us pray for the departed souls.'",
      "options": [
        "Gerund",
        "Present Participle",
        "Past Participle",
        "Bare Infinitive"
      ],
      "answer": "Past Participle",
      "explanation": "'departed' (depart का V3 रूप) यह 'souls' संज्ञाके विशेषण के रूप में प्रयोग होता है, जो का अर्थ 'मृत्यु पामेला' होता है. इसलिए वह Past Participle है."
    }
  ],
  "test-17": [
    {
      "question": "रिक्त स्थान पूरा: 'She admitted _______ the mistake.'",
      "options": [
        "to make",
        "making",
        "made",
        "to have made"
      ],
      "answer": "making",
      "explanation": "'Admit' (कबूल करना) क्रिया (Verb) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He seems to have _______ a lot of money.'",
      "options": [
        "earn",
        "earning",
        "earned",
        "to earn"
      ],
      "answer": "earned",
      "explanation": "यह रचना Perfect Infinitive ('to have + V3') की है, जो दर्शाता है या क्रिया भूतकाल में हुई है. 'to have' के बाद क्रिया (Verb) का V3 रूप 'earned' आता है."
    },
    {
      "question": "वाक्य में Participle phrase ढूंढिए: 'The ideas presented in the book are interesting.'",
      "options": [
        "The ideas",
        "presented in the book",
        "are interesting",
        "in the book"
      ],
      "answer": "presented in the book",
      "explanation": "'presented in the book' यह Past Participle phrase है जो 'ideas' संज्ञा बारे में वृद्धि की जानकारी देता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I don't permit _______ in my office.'",
      "options": [
        "smoking",
        "to smoke",
        "smoke",
        "people to smoking"
      ],
      "answer": "smoking",
      "explanation": "'Permit' क्रिया (Verb) के बाद जो object न हो, तो Gerund (-ing form) आता है. जो object हो (permit people) तो to-infinitive (to smoke) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She is looking forward to _______ her family.'",
      "options": [
        "see",
        "seeing",
        "to see",
        "be seeing"
      ],
      "answer": "seeing",
      "explanation": "'look forward to' में 'to' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'You'd better _______ what he says.'",
      "options": [
        "to do",
        "doing",
        "do",
        "done"
      ],
      "answer": "do",
      "explanation": "'Had better' ('d better) के बाद हमेशा 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "Gerund ढूंढिए: 'He is an expert in solving puzzles.'",
      "options": [
        "expert",
        "in",
        "solving",
        "puzzles"
      ],
      "answer": "solving",
      "explanation": "'in' यह preposition है. Preposition के बाद आता है '-ing' वाला क्रिया (Verb) 'solving' यह Gerund है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She made her story _______ believable.'",
      "options": [
        "sound",
        "to sound",
        "sounding",
        "sounded"
      ],
      "answer": "sound",
      "explanation": "'Make' क्रिया (Verb) के बाद object ('her story') और के बाद Bare Infinitive ('sound') आता है, जो का अर्थ 'लागवुं' होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The man was seen _______ from the bank.'",
      "options": [
        "run",
        "to run",
        "running",
        "ran"
      ],
      "answer": "to run",
      "explanation": "'see' क्रिया (Verb) का passive voice ('was seen') हो तब उसके साथ to-infinitive आता है. 'running' भी आ सकता है है जो क्रिया अपूर्ण से होना दर्शाववुं हो."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'His only fault is talking too much.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Gerund",
      "explanation": "यहाँ 'talking' यह 'fault' क्या है वह समजावे है (complement). वह एक गतिविधि की संज्ञा है, इसलिए वह Gerund है."
    }
  ],
  "test-18": [
    {
      "question": "रिक्त स्थान पूरा: 'She put off _______ the decision until the next day.'",
      "options": [
        "to make",
        "making",
        "make",
        "made"
      ],
      "answer": "making",
      "explanation": "'Put off' (मोकूफ राखवुं) phrasal verb के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I would prefer _______ by train.'",
      "options": [
        "to travel",
        "travelling",
        "travel",
        "traveled"
      ],
      "answer": "to travel",
      "explanation": "'Prefer' क्रिया (Verb) के बाद to-infinitive ('to travel') (या) Gerund ('travelling') दोनों प्रयोग कर सकते है, भी to-infinitive अधिक सामान्य है. जो 'prefer...to...' की रचना हो तो Gerund आता है (I prefer travelling to driving)."
    },
    {
      "question": "वाक्य में Perfect Participle ढूंढिए: 'Having failed twice, he didn't want to try again.'",
      "options": [
        "Having failed",
        "failed twice",
        "didn't want",
        "to try"
      ],
      "answer": "Having failed",
      "explanation": "'Having + V3' की रचना Perfect Participle है, जो दर्शाता है या दो वार फेल थया के बाद उसे फरी प्रयास करवा की इच्छा न कर."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He has no difficulty in _______ English.'",
      "options": [
        "speak",
        "to speak",
        "speaking",
        "spoken"
      ],
      "answer": "speaking",
      "explanation": "'have difficulty in' के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'Let's not waste time _______ about this.'",
      "options": [
        "to argue",
        "arguing",
        "argue",
        "argued"
      ],
      "answer": "arguing",
      "explanation": "'Waste time' के बाद कोई क्रिया में समय बगाडवा का अर्थ दर्शाने Gerund (-ing form) प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He was punished for _______ a lie.'",
      "options": [
        "tell",
        "telling",
        "to tell",
        "told"
      ],
      "answer": "telling",
      "explanation": "'for' यह preposition है, और preposition के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "Gerund ढूंढिए: 'My doctor advised me against eating junk food.'",
      "options": [
        "advised",
        "against",
        "eating",
        "junk"
      ],
      "answer": "eating",
      "explanation": "'against' यह preposition है, इसलिए उसका के बाद Gerund ('eating') आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She helped me _______ the problem.'",
      "options": [
        "to solving",
        "solving",
        "to solve",
        "solve"
      ],
      "answer": "to solve",
      "explanation": "'Help' क्रिया (Verb) के बाद object ('me') आता है तब to-infinitive ('to solve') (या) bare infinitive ('solve') दोनों का प्रयोग हो सकता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I am used to _______ on my own.'",
      "options": [
        "live",
        "living",
        "to live",
        "lived"
      ],
      "answer": "living",
      "explanation": "'be used to' ( की आदत होवी) के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He is the man to watch.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to watch' यह to-infinitive है जो 'man' संज्ञा बारे में अधिक जानकारी देता है (जोके पर नजर राखवी चाहिए)."
    }
  ],
  "test-19": [
    {
      "question": "रिक्त स्थान पूरा: 'She insisted on my _______ the party.'",
      "options": [
        "attending",
        "to attend",
        "attend",
        "attended"
      ],
      "answer": "attending",
      "explanation": "जब Gerund से पहले कोई सर्वनाम (pronoun) आता है, तब वह possessive case (my, his, her, etc.) में होता है. 'insist on' के बाद Gerund आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I remember _______ the zoo when I was a child.'",
      "options": [
        "to visit",
        "visiting",
        "visit",
        "to have visited"
      ],
      "answer": "visiting",
      "explanation": "'Remember' के बाद Gerund (-ing form)  का प्रयोग भूतकाल में बनताली घटना को याद करवा के लिए होता है."
    },
    {
      "question": "वाक्य में Participle ढूंढिए: 'The speech delivered by the principal was inspiring.'",
      "options": [
        "speech",
        "delivered",
        "principal",
        "inspiring"
      ],
      "answer": "delivered",
      "explanation": "'delivered by the principal' यह Past Participle phrase है जो 'speech' संज्ञा बारे में अधिक जानकारी देता है. 'inspiring' भी Present Participle है जो विशेषण के रूप में प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The situation is too complicated _______.'",
      "options": [
        "to explain",
        "explaining",
        "explain",
        "for explaining"
      ],
      "answer": "to explain",
      "explanation": "'too + adjective' के बाद to-infinitive  का प्रयोग नकारात्मक भाव दर्शाने के लिए होता है (एटलुं जटिल है या समजावी नहीं सकता)."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He stopped his car _______ at the map.'",
      "options": [
        "looking",
        "to look",
        "look",
        "to have looked"
      ],
      "answer": "to look",
      "explanation": "'Stop' के बाद to-infinitive  का अर्थ 'कोईक हेतुसे अटकवुं' होता है. यहाँ वह नकशो जैसे के लिए अटक्यो."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I am not averse to _______ on a holiday.'",
      "options": [
        "go",
        "to go",
        "going",
        "have gone"
      ],
      "answer": "going",
      "explanation": "'averse to' ( का विरोधी होना) में 'to' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "Gerund ढूंढिए: 'There is no point in waiting for him.'",
      "options": [
        "point",
        "in",
        "waiting",
        "for"
      ],
      "answer": "waiting",
      "explanation": "'in' यह preposition है, और 'no point in' के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The work needs _______ immediately.'",
      "options": [
        "doing",
        "to do",
        "done",
        "to be done"
      ],
      "answer": "doing",
      "explanation": "'Need' के बाद Gerund ('doing')  का अर्थ passive होता है ('करवा की जरूर है'). 'to be done' भी सही passive infinitive है. दोनों विकल्प का अर्थ समैंन है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'They were lucky _______ the accident.'",
      "options": [
        "escaping",
        "to escape",
        "escape",
        "to have escaped"
      ],
      "answer": "to escape",
      "explanation": "'Lucky' जैसे विशेषण के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He is old enough to understand.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'adjective + enough' के बाद to-infinitive ('to understand') का प्रयोग होता है."
    }
  ],
  "test-20": [
    {
      "question": "रिक्त स्थान पूरा: 'I regret _______ so much money on that car.'",
      "options": [
        "to spend",
        "spending",
        "spent",
        "to have spent"
      ],
      "answer": "spending",
      "explanation": "'Regret' के बाद Gerund (-ing form)  का प्रयोग भूतकाल में की हुई क्रिया के लिए अफसोस व्यक्त करने के लिए होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She is likely _______ late.'",
      "options": [
        "arriving",
        "to arrive",
        "arrive",
        "to be arriving"
      ],
      "answer": "to arrive",
      "explanation": "'be likely' के बाद to-infinitive का प्रयोग होता है, जो संभावके दर्शाता है."
    },
    {
      "question": "वाक्य में Perfect Participle ढूंढिए: 'Having been defeated, the team left the field.'",
      "options": [
        "Having been defeated",
        "defeated",
        "team",
        "left"
      ],
      "answer": "Having been defeated",
      "explanation": "'Having been + V3' यह Perfect Participle का passive रूप है, जो दर्शाता है या हार्या के बाद टीमे मेदान होडी दीधुं."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He chose _______ in the city rather than in the countryside.'",
      "options": [
        "living",
        "to live",
        "live",
        "lived"
      ],
      "answer": "to live",
      "explanation": "'Choose' क्रिया (Verb) के बाद सामान्य रूप से to-infinitive का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I got him _______ my car.'",
      "options": [
        "to repair",
        "repairing",
        "repair",
        "repaired"
      ],
      "answer": "to repair",
      "explanation": "Causative verb 'get' के बाद object ('him') और के बाद to-infinitive ('to repair') का प्रयोग होता है (get someone to do something)."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He is proud of _______ a doctor.'",
      "options": [
        "be",
        "to be",
        "being",
        "been"
      ],
      "answer": "being",
      "explanation": "'proud of' में 'of' यह preposition है, इसलिए उसका के बाद Gerund आता है. 'be' का gerund रूप 'being' है."
    },
    {
      "question": "Gerund ढूंढिए: 'He escaped by jumping out of the window.'",
      "options": [
        "escaped",
        "by",
        "jumping",
        "out"
      ],
      "answer": "jumping",
      "explanation": "'by' यह preposition है, जो रीत दर्शाता है. Preposition के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'This is the book _______.'",
      "options": [
        "to be read",
        "reading",
        "to read",
        "read"
      ],
      "answer": "to be read",
      "explanation": "यहाँ passive अर्थ की जरूर है ('जिसे पढ़ने का है'). 'to be read' यह passive infinitive है. 'to read' भी सही हो सकता है भी 'to be read' अधिक स्पष्ट है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I don't recall ever _______ him before.'",
      "options": [
        "to meet",
        "meeting",
        "met",
        "to have met"
      ],
      "answer": "meeting",
      "explanation": "'Recall' (याद करना) क्रिया (Verb) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'The teacher let us leave early.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "Bare Infinitive",
      "explanation": "'Let' क्रिया (Verb) के बाद object ('us') और के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive - 'leave') आता है."
    }
  ],
  "test-21": [
    {
      "question": "रिक्त स्थान पूरा: 'She made a decision _______ her job and travel the world.'",
      "options": [
        "quitting",
        "to quit",
        "quit",
        "to have quit"
      ],
      "answer": "to quit",
      "explanation": "यहाँ to-infinitive 'to quit' यह 'decision' संज्ञा को स्पष्ट करता है (कौन सा निर्णय). यह infinitive as an appositive to a noun है."
    },
    {
      "question": "उचित विकल्प पसंद करो: '_______ the truth, I have no idea.'",
      "options": [
        "To tell",
        "Telling",
        "Having told",
        "To be telling"
      ],
      "answer": "To tell",
      "explanation": "'To tell the truth' यह एक निश्चित infinitive phrase है जो का अर्थ 'सही कमैं तो' होता है. उसको split infinitive भी कहा जाता है."
    },
    {
      "question": "इस वाक्य में कया प्रकार का Participle प्रयोग होताो है?: 'The agreement having been signed, the negotiations ended.'",
      "options": [
        "Present Participle Phrase",
        "Past Participle Phrase",
        "Nominative Absolute (Perfect Participle)",
        "Gerund"
      ],
      "answer": "Nominative Absolute (Perfect Participle)",
      "explanation": "यहाँ 'The agreement having been signed' यह Nominative Absolute रचना है. उसका कर्ता (Subject) 'The agreement' मुख्य वाक्यके कर्ता (Subject) 'the negotiations' से अलग है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He had his car _______ by a professional.'",
      "options": [
        "clean",
        "to clean",
        "cleaning",
        "cleaned"
      ],
      "answer": "cleaned",
      "explanation": "यह causative verb 'have' की passive रचना है (have something done). यहाँ object 'his car' के बाद क्रिया (Verb) का V3 रूप (Past Participle) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The teacher's advice is _______ regularly.'",
      "options": [
        "studying",
        "to study",
        "study",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "'be' क्रिया (Verb) के complement के रूप में, सलाह क्या है वह दर्शाने Gerund ('studying') और to-infinitive ('to study') दोनों का प्रयोग सही है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I object to _______ like a child.'",
      "options": [
        "be treated",
        "being treated",
        "treat",
        "to be treated"
      ],
      "answer": "being treated",
      "explanation": "'object to' में 'to' preposition है, इसलिए Gerund आता है. वाक्य का भाव passive है, इसलिए passive gerund ('being treated') का प्रयोग होगा."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'I would sooner _______ than surrender.'",
      "options": [
        "to die",
        "dying",
        "die",
        "died"
      ],
      "answer": "die",
      "explanation": "'Would sooner' यह 'would rather' जैसा ही है, और उसका के बाद हमेशा Bare Infinitive ('to' बिना का मूल क्रिया (Verb)) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The house wants _______.'",
      "options": [
        "painting",
        "to paint",
        "painted",
        "to be painted"
      ],
      "answer": "painting",
      "explanation": "'Want' क्रिया (Verb) के बाद जब वस्तु को कोई क्रिया की जरूर हो ऐसा passive अर्थ दर्शाना हो, तब Gerund (-ing form) का प्रयोग होता है. 'The house needs painting' जैसा ही अर्थ है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He is said _______ a genius.'",
      "options": [
        "being",
        "to be",
        "be",
        "to have been"
      ],
      "answer": "to be",
      "explanation": "Passive रचना 'be said' के बाद to-infinitive का प्रयोग होता है. (People say that he is a genius -> He is said to be a genius)."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'His desire to win was obvious.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Infinitive",
      "explanation": "'to win' यह to-infinitive है जो 'desire' (इच्छा) संज्ञा को स्पष्ट करता है."
    }
  ],
  "test-22": [
    {
      "question": "रिक्त स्थान पूरा: 'He went on _______, ignoring my question completely.'",
      "options": [
        "to speak",
        "speaking",
        "spoke",
        "having spoken"
      ],
      "answer": "speaking",
      "explanation": "'Go on' के बाद Gerund (-ing form)  का अर्थ 'कोई क्रिया अपूर्ण राखवी' होता है. 'to speak'  का अर्थ 'एक बात पूरी करना बीजी बात शुरू करना' थात."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I am in favour of _______ him a second chance.'",
      "options": [
        "give",
        "to give",
        "giving",
        "given"
      ],
      "answer": "giving",
      "explanation": "'in favour of' में 'of' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "इस वाक्य में Nominative Absolute रचना ढूंढिए: 'The sun having set, the birds returned to their nests.'",
      "options": [
        "The sun having set",
        "the birds returned",
        "to their nests",
        "having set"
      ],
      "answer": "The sun having set",
      "explanation": "यह Nominative Absolute है क्योंकि उसका कर्ता (Subject) 'The sun' मुख्य वाक्यके कर्ता (Subject) 'the birds' से अलग है और वह समय/कारण दर्शाता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'We had the roof _______ last year.'",
      "options": [
        "repair",
        "to repair",
        "repairing",
        "repaired"
      ],
      "answer": "repaired",
      "explanation": "यह causative verb 'have' की passive रचना है (have something done). Object ('the roof') के बाद क्रिया (Verb) का V3 रूप (Past Participle) आता है, जो का अर्थ है या काम कोई दूसरों के द्वारा करने में आया."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She is anxious _______ for the results.'",
      "options": [
        "waiting",
        "to wait",
        "wait",
        "to be waiting"
      ],
      "answer": "to wait",
      "explanation": "'Anxious' (चिंतित/यहतुर) जैसे विशेषण के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I don't approve of people _______ during a film.'",
      "options": [
        "to talk",
        "talk",
        "talking",
        "talked"
      ],
      "answer": "talking",
      "explanation": "'approve of' में 'of' preposition है, इसलिए Gerund आता है. 'people' यह Gerund 'talking'  का कर्ता (Subject) है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'He was the first man _______ the shore.'",
      "options": [
        "reaching",
        "to reach",
        "reached",
        "to have reached"
      ],
      "answer": "to reach",
      "explanation": "Ordinal numbers (first, second, last, etc.) के बाद सामान्य रूप से to-infinitive का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'This shirt needs _______.'",
      "options": [
        "iron",
        "to iron",
        "ironing",
        "ironed"
      ],
      "answer": "ironing",
      "explanation": "'Need' के बाद जब वस्तु पर क्रिया होने की जरूर हो ऐसा passive अर्थ हो, तब Gerund (-ing form) प्रयोग होता है. उसका अर्थ 'needs to be ironed' जैसा ही है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I am not in the habit of _______ early.'",
      "options": [
        "get up",
        "getting up",
        "to get up",
        "got up"
      ],
      "answer": "getting up",
      "explanation": "'in the habit of' में 'of' यह preposition है, इसलिए उसका के बाद Gerund ('getting up') आता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He is a man to be admired.'",
      "options": [
        "Passive Gerund",
        "Passive Participle",
        "Passive Infinitive",
        "Perfect Participle"
      ],
      "answer": "Passive Infinitive",
      "explanation": "'to be admired' यह to-infinitive का passive रूप है ('to be + V3'). वह 'man' संज्ञा का वर्णन करता है."
    }
  ],
  "test-23": [
    {
      "question": "रिक्त स्थान पूरा: 'He helped me _______ the heavy box.'",
      "options": [
        "to carrying",
        "carrying",
        "carry",
        "to carry"
      ],
      "answer": "carry",
      "explanation": "'Help' क्रिया (Verb) के बाद object ('me') आता है तब bare infinitive ('carry') (या) to-infinitive ('to carry') दोनों प्रयोग कर सकते. Bare infinitive अधिक सामान्य है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'There's no _______ what might happen.'",
      "options": [
        "to know",
        "knowing",
        "known",
        "to have known"
      ],
      "answer": "knowing",
      "explanation": "'There is no + Gerund' यह एक निश्चित रचना है जो का अर्थ 'शक्य नहीं' या 'अशक्य है' होता है."
    },
    {
      "question": "इस वाक्य में कौन सा non-finite verb प्रयोग होताो है?: 'He is believed to have left the country.'",
      "options": [
        "Present Infinitive",
        "Perfect Infinitive",
        "Passive Infinitive",
        "Gerund"
      ],
      "answer": "Perfect Infinitive",
      "explanation": "'to have left' यह Perfect Infinitive ('to have + V3') है. वह दर्शाता है या मुख्य क्रिया (Verb) ('is believed') के समय पहले 'left' की क्रिया हुई गई से."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She couldn't resist _______ another piece of cake.'",
      "options": [
        "to eat",
        "eating",
        "eat",
        "eaten"
      ],
      "answer": "eating",
      "explanation": "'Resist' (प्रतिकार करना, रोकवुं) क्रिया (Verb) के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I heard the bomb _______.'",
      "options": [
        "to explode",
        "exploding",
        "explode",
        "B and C both"
      ],
      "answer": "B and C both",
      "explanation": "'Hear' जैसे संवेदकेके क्रिया (Verb) के बाद bare infinitive ('explode') - पूरी घटना सांभली, (या) present participle ('exploding') - घटना अपूर्ण से तब सांभली, दोनों आ सकता है है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He is supposed _______ here by now.'",
      "options": [
        "be",
        "to be",
        "being",
        "to have been"
      ],
      "answer": "to be",
      "explanation": "'be supposed' के बाद to-infinitive का प्रयोग होता है, जो का अर्थ 'अपेक्षा होवी' होता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'She is on the point of _______.'",
      "options": [
        "cry",
        "to cry",
        "crying",
        "cried"
      ],
      "answer": "crying",
      "explanation": "'on the point of' ( की तैयारी में होना) में 'of' preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The floor requires _______.'",
      "options": [
        "to sweep",
        "sweeping",
        "swept",
        "to be swept"
      ],
      "answer": "sweeping",
      "explanation": "'Require' के बाद जब passive अर्थ हो, तब Gerund (-ing form) का प्रयोग होता है. उसका अर्थ 'requires to be swept' जैसा ही है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I caught him _______ my letters.'",
      "options": [
        "to read",
        "read",
        "reading",
        "to have read"
      ],
      "answer": "reading",
      "explanation": "'Catch' क्रिया (Verb) के बाद object ('him') और के बाद Present Participle ('reading') आता है, जो कोई को कोई क्रिया की बजाय पकड़े जाने का भाव दर्शाता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He is to report for duty tomorrow.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "यहाँ 'be + to-infinitive' (is to report) की रचना भविष्य की कोई योजके, यहदेश या फरज दर्शाने के लिए प्रयोग होता है."
    }
  ],
  "test-24": [
    {
      "question": "रिक्त स्थान पूरा: 'It being a holiday, the office was closed.' इस वाक्य में 'It being a holiday' क्या है?",
      "options": [
        "Gerund Phrase",
        "Infinitive Phrase",
        "Nominative Absolute",
        "Adjective Phrase"
      ],
      "answer": "Nominative Absolute",
      "explanation": "यह Nominative Absolute रचना है. उसका कर्ता (Subject) 'It' मुख्य वाक्यके कर्ता (Subject) 'the office' से अलग है और उसकारण दर्शाता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I am looking forward to _______ from you.'",
      "options": [
        "hear",
        "hearing",
        "to hear",
        "have heard"
      ],
      "answer": "hearing",
      "explanation": "'look forward to' में 'to' यह preposition है, infinitive marker नहीं. इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He got his watch _______.'",
      "options": [
        "repair",
        "to repair",
        "repairing",
        "repaired"
      ],
      "answer": "repaired",
      "explanation": "यह causative verb 'get' की passive रचना है (get something done). Object ('his watch') के बाद क्रिया (Verb) का V3 रूप (Past Participle - 'repaired') आता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'She was the last person _______ the room.'",
      "options": [
        "to leave",
        "leaving",
        "left",
        "to have left"
      ],
      "answer": "to leave",
      "explanation": "Ordinal numbers (first, second, etc.) और 'last', 'only' जैसे शब्दो के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He recollects _______ her at the station.'",
      "options": [
        "to see",
        "seeing",
        "saw",
        "to have seen"
      ],
      "answer": "seeing",
      "explanation": "'Recollect' (याद करना) क्रिया (Verb) के बाद भूतकाल की घटना के लिए Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The police found the man _______ on the ground.'",
      "options": [
        "lie",
        "to lie",
        "lying",
        "lain"
      ],
      "answer": "lying",
      "explanation": "'Find' क्रिया (Verb) के बाद object ('the man') और के बाद Present Participle ('lying') आता है, जो वह व्यक्ति की स्थिति दर्शाता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He seems _______ the secret.'",
      "options": [
        "to know",
        "knowing",
        "know",
        "to have known"
      ],
      "answer": "to know",
      "explanation": "'Seem' क्रिया (Verb) के बाद सामान्य रूप से to-infinitive का प्रयोग होता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'What is the use of _______ about it now?'",
      "options": [
        "worrying",
        "to worry",
        "worry",
        "worried"
      ],
      "answer": "worrying",
      "explanation": "'What is the use of...?' के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She was obliged _______ the order.'",
      "options": [
        "obeying",
        "to obey",
        "obey",
        "obeyed"
      ],
      "answer": "to obey",
      "explanation": "'be obliged' (फरज पडवी) के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He does nothing but complain.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "Bare Infinitive",
      "explanation": "'do nothing but' के बाद हमेशा 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    }
  ],
  "test-25": [
    {
      "question": "रिक्त स्थान पूरा: 'I forbid you _______ there.'",
      "options": [
        "to go",
        "going",
        "go",
        "from going"
      ],
      "answer": "to go",
      "explanation": "'Forbid' (मकेई करना) क्रिया (Verb) के बाद object ('you') और के बाद to-infinitive का प्रयोग होता है. 'forbid...from going' भी एक विकल्प है, भी to-infinitive अधिक सामान्य है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'The problem is not _______, but applying it.'",
      "options": [
        "to know",
        "knowing",
        "known",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "यहाँ 'not X but Y' की समानांतर रचना है. 'applying' Gerund है, इसलिए उसके साथ Gerund ('knowing') (या) to-infinitive ('to know') दोनों आ सकता है है."
    },
    {
      "question": "रिक्त स्थान पूरा: '_______ in the city for a long time, he knows all the streets.'",
      "options": [
        "Living",
        "Having lived",
        "To live",
        "Lived"
      ],
      "answer": "Having lived",
      "explanation": "'Having lived' यह Perfect Participle है जो दर्शाता है या लंबे समय सुधी शहेर में रथेवा की क्रियाके परिणामे वह सभी रस्ताओ जानते हैं."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'I had my phone _______.'",
      "options": [
        "steal",
        "to steal",
        "stealing",
        "stolen"
      ],
      "answer": "stolen",
      "explanation": "यह causative verb 'have' की passive रचना है (have something done). Object ('my phone') के बाद क्रिया (Verb) का V3 रूप (Past Participle) आता है, जो दर्शाता है या फोन चोराई गया."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He was made _______ for his mistake.'",
      "options": [
        "apologize",
        "to apologize",
        "apologizing",
        "apologized"
      ],
      "answer": "to apologize",
      "explanation": "जब 'make' क्रिया (Verb) passive voice ('was made') में हो, तब उसके साथ to-infinitive आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'It is a crime _______ other people.'",
      "options": [
        "to deceive",
        "deceiving",
        "deceive",
        "deceived"
      ],
      "answer": "to deceive",
      "explanation": "'It is a crime' जैसी रचना के बाद क्रिया को वर्णववा के लिए to-infinitive का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She went _______ without _______ goodbye.'",
      "options": [
        "shopping, saying",
        "to shop, saying",
        "shopping, to say",
        "to shop, to say"
      ],
      "answer": "shopping, saying",
      "explanation": "'go shopping' यह एक निश्चित gerund phrase है. 'without' यह preposition है, इसलिए उसका के बाद gerund ('saying') आता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'I remember _______ the door, but I am not sure.'",
      "options": [
        "to lock",
        "locking",
        "lock",
        "to have locked"
      ],
      "answer": "locking",
      "explanation": "'Remember' के बाद Gerund (-ing form)  का प्रयोग भूतकाल में की हुई क्रिया को याद करवा के लिए होता है. यहाँ दरवाज़ा लोक कर्या की घटना याद है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The teacher made the whole class _______ the essay.'",
      "options": [
        "rewrite",
        "to rewrite",
        "rewriting",
        "rewritten"
      ],
      "answer": "rewrite",
      "explanation": "'Make' के active voice में object ('the whole class') के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'I am determined to succeed.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'Determined' (कृतनिश्चयी) जैसे विशेषण के बाद to-infinitive ('to succeed') का प्रयोग होता है."
    }
  ],
  "test-26": [
    {
      "question": "रिक्त स्थान पूरा: 'He was seen _______ the building at midnight.'",
      "options": [
        "leave",
        "to leave",
        "leaving",
        "left"
      ],
      "answer": "to leave",
      "explanation": "'see' क्रिया (Verb) का passive voice ('was seen') हो तब to-infinitive का प्रयोग होता है. 'leaving' भी सही है जो क्रिया अपूर्ण से होना दर्शाववुं हो."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He is busy _______ for his exams.'",
      "options": [
        "to prepare",
        "preparing",
        "prepare",
        "prepared"
      ],
      "answer": "preparing",
      "explanation": "'busy' शब्द के बाद कोई क्रिया में व्यस्त होना का भाव दर्शाने के लिए Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The weather being fine, we went for a picnic.' इस वाक्य में 'The weather being fine' क्या है?",
      "options": [
        "Participle Phrase",
        "Gerund Phrase",
        "Nominative Absolute",
        "Infinitive Phrase"
      ],
      "answer": "Nominative Absolute",
      "explanation": "यह Nominative Absolute रचना है. उसका कर्ता (Subject) 'The weather' मुख्य वाक्यके कर्ता (Subject) 'we' से अलग है और उसकारण दर्शाता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'I would advise you _______ a doctor.'",
      "options": [
        "seeing",
        "to see",
        "see",
        "to have seen"
      ],
      "answer": "to see",
      "explanation": "'Advise' क्रिया (Verb) के बाद object ('you') और के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The manager let everyone _______ home early.'",
      "options": [
        "to go",
        "going",
        "go",
        "gone"
      ],
      "answer": "go",
      "explanation": "'Let' क्रिया (Verb) के बाद object ('everyone') और के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He will never admit _______ a mistake.'",
      "options": [
        "to make",
        "making",
        "to have made",
        "B and C both"
      ],
      "answer": "B and C both",
      "explanation": "'Admit' के बाद Gerund ('making') (या) Perfect Gerund ('to have made') दोनों आ सकता है है. Perfect Gerund भूतकाल में हुई क्रिया पर जोर मूया है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'It is easy _______ advice, but difficult to follow.'",
      "options": [
        "giving",
        "to give",
        "give",
        "given"
      ],
      "answer": "to give",
      "explanation": "'It is easy' जैसी रचना के बाद to-infinitive का प्रयोग होता है. वाक्य में 'to follow' के साथ समानांतर रचना जलवाई रहता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'He has a reputation for _______ honest.'",
      "options": [
        "be",
        "to be",
        "being",
        "to being"
      ],
      "answer": "being",
      "explanation": "'reputation for' में 'for' यह preposition है, इसलिए उसका के बाद Gerund आता है. 'be' का gerund रूप 'being' है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The purpose of education is _______ the mind.'",
      "options": [
        "to train",
        "training",
        "train",
        "A and B both"
      ],
      "answer": "A and B both",
      "explanation": "हेतु दर्शाने के लिए 'be' क्रिया (Verb) के complement के रूप में to-infinitive ('to train') और Gerund ('training') दोनों का प्रयोग हो सकता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He watched the children playing in the park.'",
      "options": [
        "Gerund",
        "Present Participle",
        "To-infinitive",
        "Past Participle"
      ],
      "answer": "Present Participle",
      "explanation": "'playing' यह Present Participle है जो 'children' क्या कर रह्या थे वह दर्शाता है (object complement)."
    }
  ],
  "test-27": [
    {
      "question": "रिक्त स्थान पूरा: 'I don't feel up to _______ out tonight.'",
      "options": [
        "go",
        "to go",
        "going",
        "went"
      ],
      "answer": "going",
      "explanation": "'feel up to' (के लिए तैयार/स्वस्थ होना) में 'to' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She dared not _______ the truth.'",
      "options": [
        "tell",
        "to tell",
        "telling",
        "told"
      ],
      "answer": "tell",
      "explanation": "जब 'dare' modal verb (हिंमत करना) के रूप में नकारात्मक वाक्य में प्रयोग होता है, तब उसके साथ 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He got his hair _______ yesterday.'",
      "options": [
        "cut",
        "to cut",
        "cutting",
        "to be cut"
      ],
      "answer": "cut",
      "explanation": "यह causative verb 'get' की passive रचना है (get something done). 'cut' का V3 रूप भी 'cut' ही है, इसलिए यहाँ Past Participle के रूप में प्रयोग होता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'He appeared _______ calm, but he was very nervous.'",
      "options": [
        "being",
        "be",
        "to be",
        "to being"
      ],
      "answer": "to be",
      "explanation": "'Appear' (देखावुं, लागवुं) क्रिया (Verb) के बाद सामान्य रूप से to-infinitive का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The work is too much for one person _______.'",
      "options": [
        "doing",
        "to do",
        "do",
        "to be done"
      ],
      "answer": "to do",
      "explanation": "'too much for someone + to-infinitive' की रचना प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'His confession of _______ the crime surprised everyone.'",
      "options": [
        "committing",
        "to commit",
        "commit",
        "having committed"
      ],
      "answer": "committing",
      "explanation": "'confession of' में 'of' यह preposition है, इसलिए उसका के बाद Gerund आता है. 'having committed' भी सही है और भूतकाल पर अधिक जोर मूया है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He was forced _______ the truth.'",
      "options": [
        "telling",
        "to tell",
        "tell",
        "told"
      ],
      "answer": "to tell",
      "explanation": "'force' क्रिया (Verb) के passive voice ('was forced') में to-infinitive का प्रयोग होता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'There is nothing to do but _______.'",
      "options": [
        "to wait",
        "waiting",
        "wait",
        "waited"
      ],
      "answer": "wait",
      "explanation": "'do nothing but' और 'nothing to do but' के बाद हमेशा 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He burst out _______.'",
      "options": [
        "to laugh",
        "laughing",
        "laugh",
        "laughed"
      ],
      "answer": "laughing",
      "explanation": "'Burst out' (अचानक शुरू करना) phrasal verb के बाद हमेशा Gerund (-ing form) आता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He is a difficult person to please.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "यहाँ to-infinitive 'to please' यह 'difficult person' संज्ञा phrase बारे में अधिक जानकारी देता है."
    }
  ],
  "test-28": [
    {
      "question": "रिक्त स्थान पूरा: 'He was found _______ in his room.'",
      "options": [
        "study",
        "to study",
        "studying",
        "studied"
      ],
      "answer": "studying",
      "explanation": "'find' क्रिया (Verb) के passive voice ('was found') के बाद Present Participle ('studying')  का प्रयोग वह समये क्रिया अपूर्ण से वह दर्शाने के लिए होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I am not used to _______ treated like this.'",
      "options": [
        "be",
        "to be",
        "being",
        "been"
      ],
      "answer": "being",
      "explanation": "'be used to' के बाद Gerund आता है. वाक्य का भाव passive है, इसलिए passive gerund ('being treated') का प्रयोग होगा."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The dog, _______ its tail, ran towards its master.'",
      "options": [
        "wagging",
        "wagged",
        "having wagged",
        "to wag"
      ],
      "answer": "wagging",
      "explanation": "'wagging its tail' यह Present Participle phrase है जो 'dog' के द्वारा वह ही समये होती बीजी क्रिया का वर्णन करता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'I would sooner starve than _______ for money.'",
      "options": [
        "to ask",
        "asking",
        "ask",
        "asked"
      ],
      "answer": "ask",
      "explanation": "'Would sooner...than...' की रचना में दोनों क्रिया (Verb)ो Bare Infinitive ('to' बिकेके मूल रूप) में आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She is deemed _______ the best candidate for the job.'",
      "options": [
        "be",
        "to be",
        "being",
        "to have been"
      ],
      "answer": "to be",
      "explanation": "'be deemed' (मैंनवा में आना) जैसी passive रचना के बाद to-infinitive का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He went _______ although he was told not to.'",
      "options": [
        "to fish",
        "fishing",
        "fish",
        "fished"
      ],
      "answer": "fishing",
      "explanation": "'go fishing', 'go swimming', 'go shopping' जैसी रचनाएँ में Gerund का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'This is the plan _______.'",
      "options": [
        "following",
        "to be followed",
        "to follow",
        "followed"
      ],
      "answer": "to be followed",
      "explanation": "यहाँ passive अर्थ की जरूर है ('जो का पालन करने की है'). 'to be followed' यह passive infinitive है जो 'plan' संज्ञा का वर्णन करता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'He felt the house _______.'",
      "options": [
        "shake",
        "to shake",
        "shaking",
        "A and C both"
      ],
      "answer": "A and C both",
      "explanation": "'Feel' जैसे संवेदकेके क्रिया (Verb) के बाद bare infinitive ('shake') (या) present participle ('shaking') दोनों आ सकता है है. 'shake' यानी पूरी घटना अनुभवी, 'shaking' यानी घटना अपूर्ण से तब अनुभवी."
    },
    {
      "question": "रिक्त स्थान पूरा: 'We are committed to _______ quality education.'",
      "options": [
        "provide",
        "providing",
        "to provide",
        "provided"
      ],
      "answer": "providing",
      "explanation": "'committed to' में 'to' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He is the only one to object.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'the only' के बाद to-infinitive का प्रयोग होता है."
    }
  ],
  "test-29": [
    {
      "question": "रिक्त स्थान पूरा: 'He set about _______ the broken fence.'",
      "options": [
        "repairing",
        "to repair",
        "repair",
        "repaired"
      ],
      "answer": "repairing",
      "explanation": "'Set about' (कोई काम शुरू करना) phrasal verb के बाद Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'I resent _______ lied to.'",
      "options": [
        "be",
        "to be",
        "being",
        "been"
      ],
      "answer": "being",
      "explanation": "'Resent' (केपसंद होना) क्रिया (Verb) के बाद Gerund आता है. वाक्य का भाव passive है ('मेरी के साथ गलत बोला'), इसलिए passive gerund ('being lied to') का प्रयोग होगा."
    },
    {
      "question": "रिक्त स्थान पूरा: '_______ by the loud noise, the baby started crying.'",
      "options": [
        "Waking up",
        "Having woken up",
        "Woken up",
        "To wake up"
      ],
      "answer": "Woken up",
      "explanation": "यहाँ Past Participle 'Woken up' (wake up का V3)  का प्रयोग थयो है, जो passive अर्थ दर्शाता है ('घोंघाट के द्वारा जगाडवा में यहवता')."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'You need _______ more careful.'",
      "options": [
        "be",
        "being",
        "to be",
        "to being"
      ],
      "answer": "to be",
      "explanation": "जब 'need' मुख्य क्रिया (Verb) के रूप में प्रयोग होता है, तब उसका के बाद to-infinitive आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'She was seen _______ of the car and _______ into the shop.'",
      "options": [
        "to get, go",
        "getting, going",
        "to get, to go",
        "get, go"
      ],
      "answer": "to get, to go",
      "explanation": "'see' के passive voice ('was seen') के बाद to-infinitive आता है. 'and' से जोडाया हुआ दूसरा क्रिया (Verb) भी समानांतर रचना को कारणे to-infinitive में यहवशे."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'It's a waste of time _______ to convince him.'",
      "options": [
        "to try",
        "trying",
        "try",
        "tried"
      ],
      "answer": "trying",
      "explanation": "'a waste of time' के बाद सामान्य रूप से Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The man, _______ to be a doctor, was actually a fraud.'",
      "options": [
        "claiming",
        "claimed",
        "to claim",
        "having claimed"
      ],
      "answer": "claiming",
      "explanation": "'claiming to be a doctor' यह Present Participle phrase है जो 'man' संज्ञा बारे में वृद्धि की जानकारी देता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'I am accustomed to _______ long hours.'",
      "options": [
        "work",
        "to work",
        "working",
        "be working"
      ],
      "answer": "working",
      "explanation": "'be accustomed to' ( की टेव होवी) में 'to' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'He had difficulty _______ a taxi.'",
      "options": [
        "to find",
        "finding",
        "in finding",
        "B and C both"
      ],
      "answer": "B and C both",
      "explanation": "'have difficulty' के बाद सीधा Gerund ('finding') (या) 'in + Gerund' ('in finding') दोनों का प्रयोग हो सकता है. दोनों सही है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'He is a man to rely on.'",
      "options": [
        "Gerund",
        "Participle",
        "To-infinitive",
        "Bare Infinitive"
      ],
      "answer": "To-infinitive",
      "explanation": "'to rely on' यह to-infinitive है जो 'man' संज्ञा का वर्णन करता है (जोके पर विश्वास किया जा सकता)."
    }
  ],
  "test-30": [
    {
      "question": "रिक्त स्थान पूरा: 'The book is not worth _______.'",
      "options": [
        "reading",
        "to read",
        "read",
        "to be read"
      ],
      "answer": "reading",
      "explanation": "'Worth' के बाद हमेशा Gerund (-ing form) का प्रयोग होता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'He was about _______ when the phone rang.'",
      "options": [
        "to leave",
        "leaving",
        "leave",
        "left"
      ],
      "answer": "to leave",
      "explanation": "'be about to' ( की तैयारी में होना) के बाद हमेशा to-infinitive आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The issue is too important _______.'",
      "options": [
        "ignoring",
        "to be ignored",
        "to ignore",
        "ignored"
      ],
      "answer": "to be ignored",
      "explanation": "'too + adjective' के बाद passive अर्थ दर्शाने के लिए passive infinitive ('to be + V3') का प्रयोग होता है (एटलुं महत्व का है या अवगणी सकता नहीं)."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'They won't tolerate people _______ late.'",
      "options": [
        "to be",
        "be",
        "being",
        "to being"
      ],
      "answer": "being",
      "explanation": "'Tolerate' क्रिया (Verb) के बाद Gerund ('being') आता है. 'people' यह Gerund  का कर्ता (Subject) है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'I had the plumber _______ the leaky tap.'",
      "options": [
        "fix",
        "to fix",
        "fixing",
        "fixed"
      ],
      "answer": "fix",
      "explanation": "यह causative verb 'have' की active रचना है (have someone do something). Object ('the plumber') के बाद 'to' बिना का मूल क्रिया (Verb) (Bare Infinitive) आता है."
    },
    {
      "question": "उचित विकल्प पसंद करो: 'She is incapable of _______ a secret.'",
      "options": [
        "keep",
        "to keep",
        "keeping",
        "kept"
      ],
      "answer": "keeping",
      "explanation": "'incapable of' में 'of' यह preposition है, इसलिए उसका के बाद Gerund (-ing form) आता है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'There are many problems _______.'",
      "options": [
        "to solve",
        "solving",
        "solved",
        "to be solving"
      ],
      "answer": "to solve",
      "explanation": "यहाँ to-infinitive 'to solve' यह 'problems' संज्ञाके विशेषण के रूप में कार्य करता है."
    },
    {
      "question": "सही विकल्प ढूंढिए: 'I saw him _______ out of the house.'",
      "options": [
        "to come",
        "coming",
        "came",
        "A and B both"
      ],
      "answer": "coming",
      "explanation": "'See' जैसे संवेदकेके क्रिया (Verb) के बाद object और के बाद Present Participle ('coming') आता है जो क्रिया को अपूर्ण अवस्था में दर्शाता है. Bare infinitive 'come' भी आ सकता है है."
    },
    {
      "question": "रिक्त स्थान पूरा: 'The teacher forbade the students _______ their phones in class.'",
      "options": [
        "to use",
        "using",
        "use",
        "from using"
      ],
      "answer": "to use",
      "explanation": "'Forbid' के बाद object ('the students') और के बाद to-infinitive ('to use') का प्रयोग होता है. 'from using' भी एक सही रचना है."
    },
    {
      "question": "वाक्य में non-finite verb  का प्रकार जणावो: 'His only exercise is walking.'",
      "options": [
        "Gerund",
        "Participle",
        "Infinitive",
        "Bare Infinitive"
      ],
      "answer": "Gerund",
      "explanation": "यहाँ 'walking' यह 'exercise' क्या है वह समजावे है (complement). वह एक गतिविधि की संज्ञा है, इसलिए वह Gerund है."
    }
  ]
};
