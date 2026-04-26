import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "My house is ______ than yours.",
      "options": [
        "big",
        "bigger",
        "biggest",
        "more big"
      ],
      "answer": "bigger",
      "explanation": "जब दो वस्तुओ की तुलना किया जाता है और विशेषण एक सिलेबल का हो, तब comparative degree बनाने के लिए विशेषणके अंदर '-er' लगता है. यहाँ 'than' शब्द तुलना सूचित करता है."
    },
    {
      "question": "This is the ______ book I have ever read.",
      "options": [
        "good",
        "better",
        "best",
        "most good"
      ],
      "answer": "best",
      "explanation": "जब दो की बजाय अधिक वस्तुओ की तुलना किया जाता है और कोई वस्तु को सर्वसबसे सुंदर बताना हो, तब superlative degree प्रयोग होता है. 'Good' का superlative 'best' है. 'The' आर्टिकल superlative degree सूचित करता है."
    },
    {
      "question": "She is ______ than her sister.",
      "options": [
        "tall",
        "taller",
        "tallest",
        "more tall"
      ],
      "answer": "taller",
      "explanation": "यहाँ दो व्यक्तिओ (उसकी और उसकी बहेन) की ऊंचाई की तुलना हो रही है. 'tall' यह एक सिलेबल का शब्द होने के कारण comparative degree 'taller' बनता है."
    },
    {
      "question": "Mount Everest is the ______ mountain in the world.",
      "options": [
        "high",
        "higher",
        "highest",
        "more high"
      ],
      "answer": "highest",
      "explanation": "इस वाक्य में मैंउन्ट एवरेस्ट की दुनियाके दूसरों सभी पर्वतो के साथ तुलना करना उसको सौसे ऊँचा बताने गए है, इसलिए superlative degree 'highest' का प्रयोग होगा."
    },
    {
      "question": "This flower is as ______ as that one.",
      "options": [
        "beautiful",
        "more beautiful",
        "beautifuler",
        "most beautiful"
      ],
      "answer": "beautiful",
      "explanation": "जब 'as...as' का प्रयोग होता है, तब दो वस्तुओ बीच समानता बताने में आता है. यह रचसंज्ञाां हमेशा positive degree का विशेषण (मूल रूप) ही प्रयोग होता है, इसलिए 'beautiful' सही जवाब है."
    },
    {
      "question": "The cheetah is the ______ land animal.",
      "options": [
        "fast",
        "faster",
        "fastest",
        "more fast"
      ],
      "answer": "fastest",
      "explanation": "इस वाक्य में चित्ता को जमीन परके सभी प्राणीओ में सौसे वहज़ गणाव्यो है, जो superlative degree  का प्रयोग सूचित करता है. 'fast' का superlative 'fastest' है."
    },
    {
      "question": "My bag is ______ than his bag.",
      "options": [
        "heavy",
        "heavier",
        "heaviest",
        "more heavy"
      ],
      "answer": "heavier",
      "explanation": "जब विशेषण 'y' में समाप्त होता और उससे पहले व्यंजन (consonant) हो, तब 'y'  का 'i' करना '-er' लगाडवासे comparative degree बनता है. यहाँ दो थेला की तुलना है."
    },
    {
      "question": "He is the ______ man in the village.",
      "options": [
        "old",
        "older",
        "oldest",
        "more old"
      ],
      "answer": "oldest",
      "explanation": "यह वाक्य गामके सभी आदमीो में एक व्यक्ति को सौसे वृद्ध बतावे है, इसलिए superlative degree 'oldest' प्रयोग होगा. 'The' आर्टिकल भी यह सूचित करता है."
    },
    {
      "question": "This summer is ______ than the last one.",
      "options": [
        "hot",
        "hotter",
        "hottest",
        "more hot"
      ],
      "answer": "hotter",
      "explanation": "जब विशेषण CVC (consonant-vowel-consonant) फोर्मेट में हो, तब comparative degree बकेवती समय हैल्लो व्यंजन बेवडाय है और '-er' लगता है. 'hot' का 'hotter' होता है."
    },
    {
      "question": "It was the ______ day of the year.",
      "options": [
        "cold",
        "colder",
        "coldest",
        "most cold"
      ],
      "answer": "coldest",
      "explanation": "पूरा वर्षके दिनो में एक दिन को सौसे ठंडो गणाव्यो है, जो superlative degree  का प्रयोग दर्शाता है. इसलिए 'coldest' सही जवाब है."
    }
  ],
  "test-2": [
    {
      "question": "A turtle is ______ than a rabbit.",
      "options": [
        "slow",
        "slower",
        "slowest",
        "more slow"
      ],
      "answer": "slower",
      "explanation": "यहाँ काचबा और ससला की गति की तुलना करवा गए है. 'than' शब्द comparative degree सूचित करता है, इसलिए 'slow' का 'slower' थशे."
    },
    {
      "question": "Who is the ______ person you know?",
      "options": [
        "rich",
        "richer",
        "richest",
        "most rich"
      ],
      "answer": "richest",
      "explanation": "यह प्रश्न आप जाणता हो वह सभी लोगों में से सौसे धनिक व्यक्ति बारे में पूछता है है, इसलिए superlative degree 'richest' का प्रयोग होगा."
    },
    {
      "question": "Your handwriting is ______ than mine.",
      "options": [
        "bad",
        "badder",
        "worse",
        "worst"
      ],
      "answer": "worse",
      "explanation": "'Bad' यह अनियमित विशेषण है. उसका comparative form 'worse' है. 'badder' जैसा कोई शब्द अंग्रेजी में नहीं."
    },
    {
      "question": "This is the ______ mistake I've ever made.",
      "options": [
        "big",
        "bigger",
        "biggest",
        "most big"
      ],
      "answer": "biggest",
      "explanation": "यह वाक्य अत्यार सुधी की सब भूलो में यह भूल को सौसे मोटी गणावे है. CVC नियम अनुसार, 'big' का superlative 'biggest' होता है."
    },
    {
      "question": "The Pacific Ocean is ______ than the Atlantic Ocean.",
      "options": [
        "large",
        "larger",
        "largest",
        "more large"
      ],
      "answer": "larger",
      "explanation": "यहाँ दो महासागरो की तुलना है. 'large' शब्द 'e' में पूरा होता है, इसलिए comparative बनाने के लिए केवल '-r' जोड़ा जाता है."
    },
    {
      "question": "She is the ______ girl in her class.",
      "options": [
        "smart",
        "smarter",
        "smartest",
        "most smart"
      ],
      "answer": "smartest",
      "explanation": "उसकी को वर्ग की सब लड़कीओ में सौसे होंशियार बताने गए है, इसलिए superlative degree 'smartest' का प्रयोग होगा."
    },
    {
      "question": "This exercise is ______ than the previous one.",
      "options": [
        "easy",
        "easier",
        "easiest",
        "more easy"
      ],
      "answer": "easier",
      "explanation": "जब विशेषण 'y' में समाप्त होता, तब comparative degree बनाने के लिए 'y'  का 'i' कर '-er' जोड़ा जाए है. यहाँ दो कसरतो की तुलना है."
    },
    {
      "question": "It was the ______ party of the year.",
      "options": [
        "good",
        "better",
        "best",
        "most good"
      ],
      "answer": "best",
      "explanation": "'Good' यह अनियमित विशेषण है. उसका superlative form 'best' है. यह वाक्य पार्टी को वर्ष की सर्वसबसे सुंदर बतावे है."
    },
    {
      "question": "The new phone is ______ than the old model.",
      "options": [
        "thin",
        "thinner",
        "thinnest",
        "more thin"
      ],
      "answer": "thinner",
      "explanation": "'thin' शब्द CVC (consonant-vowel-consonant) नियम को अनुसरे है, इसलिए comparative degree बकेवती समय हैल्लो अक्षर 'n' बेवडाय है और '-er' लगता है."
    },
    {
      "question": "He is as ______ as his brother.",
      "options": [
        "strong",
        "stronger",
        "strongest",
        "more strong"
      ],
      "answer": "strong",
      "explanation": "'as...as' की रचना में दो व्यक्तिओ की समैंन तुलना होता है, और उसमैं हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है. इसलिए 'strong' सही जवाब है."
    }
  ],
  "test-3": [
    {
      "question": "The final exam was ______ than the midterm.",
      "options": [
        "difficult",
        "more difficult",
        "most difficult",
        "difficulter"
      ],
      "answer": "more difficult",
      "explanation": "जब विशेषण दो या इसलिए अधिक सिलेबल का हो (जैसे या 'difficult'), तब comparative degree बनाने के लिए शब्द की आगे 'more' रखा जाता है."
    },
    {
      "question": "This is the ______ painting in the gallery.",
      "options": [
        "valuable",
        "more valuable",
        "most valuable",
        "valuabler"
      ],
      "answer": "most valuable",
      "explanation": "लंबे विशेषणो के लिए superlative degree बनाने के लिए शब्द की आगे 'most' रखा जाता है. यहाँ चित्र को गेलेरी में सौसे किंमती गणावायुं है."
    },
    {
      "question": "Health is ______ than wealth.",
      "options": [
        "important",
        "more important",
        "most important",
        "importanter"
      ],
      "answer": "more important",
      "explanation": "'important' यह त्रण सिलेबल का शब्द है. दो वस्तुओ (स्वास्थ्य और संपत्ति) की तुलना करने के लिए उसके आगे 'more' लागशे."
    },
    {
      "question": "She is the ______ singer in the group.",
      "options": [
        "popular",
        "more popular",
        "most popular",
        "popularest"
      ],
      "answer": "most popular",
      "explanation": "इस वाक्य में गायिका को ग्रुप में सौसे अधिक लोकप्रिय बताने गए है. 'popular' लांबो शब्द होने के कारण superlative के लिए 'most' प्रयोग होगा."
    },
    {
      "question": "A lion is ______ than a wolf.",
      "options": [
        "dangerous",
        "more dangerous",
        "most dangerous",
        "dangerouser"
      ],
      "answer": "more dangerous",
      "explanation": "'dangerous' यह लंबा विशेषण है. सिंह और वरु, यह दो प्राणीओ की तुलना करने के लिए comparative degree 'more dangerous' प्रयोग होता है."
    },
    {
      "question": "It was the ______ moment of my life.",
      "options": [
        "happy",
        "happier",
        "happiest",
        "most happy"
      ],
      "answer": "happiest",
      "explanation": "विशेषण 'happy' के अंदर 'y' है और उससे पहले व्यंजन है. Superlative degree बनाने के लिए 'y'  का 'i' करना '-est' लगाडवा में आता है."
    },
    {
      "question": "This puzzle is not as ______ as I thought.",
      "options": [
        "simple",
        "simpler",
        "simplest",
        "more simple"
      ],
      "answer": "simple",
      "explanation": "'as...as' (या 'not as...as') की रचना में हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है. इसलिए 'simple' सही जवाब है."
    },
    {
      "question": "His condition is getting ______ day by day.",
      "options": [
        "bad",
        "worse",
        "worst",
        "badder"
      ],
      "answer": "worse",
      "explanation": "जब कोई परिस्थिति धीमे धीमे अधिक खराब हुई रज हो होना बताने के लिए 'bad' के comparative form 'worse' का प्रयोग होता है."
    },
    {
      "question": "This is the ______ of the two options.",
      "options": [
        "good",
        "better",
        "best",
        "the better"
      ],
      "answer": "the better",
      "explanation": "जब केवल दो विकल्पो में से कोई एक को सबसे सुंदर बताने का हो, तब 'the' के साथ comparative degree ('better') का प्रयोग होता है, superlative ('best')  का नहीं."
    },
    {
      "question": "The journey was ______ than we expected.",
      "options": [
        "long",
        "longer",
        "longest",
        "more long"
      ],
      "answer": "longer",
      "explanation": "यहाँ यात्रा की वास्तविक लंबाई और अपेक्षित लंबाई बीच तुलना है. 'long' यह एक सिलेबल का शब्द होने के कारण comparative degree 'longer' बनता है."
    }
  ],
  "test-4": [
    {
      "question": "She is the ______ intelligent student in the class.",
      "options": [
        "intelligent",
        "more intelligent",
        "most intelligent",
        "intelligenter"
      ],
      "answer": "most intelligent",
      "explanation": "'intelligent' यह लांबो शब्द (बे की बजाय अधिक सिलेबल) है. इसलिए, superlative degree बनाने के लिए उसके आगे 'most' रखा जाता है."
    },
    {
      "question": "The weather today is ______ than yesterday.",
      "options": [
        "pleasant",
        "more pleasant",
        "most pleasant",
        "pleasantest"
      ],
      "answer": "more pleasant",
      "explanation": "यहाँ यहजके और गईकालके मौसम की तुलना है. 'pleasant' यह दो सिलेबल का शब्द है, इसलिए comparative degree के लिए 'more'  का प्रयोग करना उचित है."
    },
    {
      "question": "This is the ______ job I've ever had.",
      "options": [
        "stressful",
        "more stressful",
        "most stressful",
        "stressfuler"
      ],
      "answer": "most stressful",
      "explanation": "यहाँ व्यक्ति की अत्यार सुधी की सब  नौकरओ के साथ तुलना हो रही है. 'stressful' यह लांबो शब्द होने के कारण superlative degree 'most stressful' प्रयोग होगा."
    },
    {
      "question": "He runs ______ than his friend.",
      "options": [
        "fast",
        "faster",
        "fastest",
        "more fast"
      ],
      "answer": "faster",
      "explanation": "यहाँ दो व्यक्तिओ की दोडवा की गति की तुलके करवा गए है, इसलिए comparative degree 'faster' का प्रयोग होगा."
    },
    {
      "question": "The whale is the ______ animal on Earth.",
      "options": [
        "large",
        "larger",
        "largest",
        "the largest"
      ],
      "answer": "the largest",
      "explanation": "Superlative degree की आगे हमेशा आर्टिकल 'the' लगता है. यहाँ व्हेल को पृथ्वी पर का सौसे बड़ा प्राणी गणाव्युं है, इसलिए 'the largest' सही विकल्प है."
    },
    {
      "question": "His performance was ______ than expected.",
      "options": [
        "good",
        "better",
        "best",
        "more good"
      ],
      "answer": "better",
      "explanation": "'good' यह अनियमित विशेषण है और उसका comparative form 'better' है. यहाँ प्रदर्शन की तुलना अपेक्षा के साथ हो रही है."
    },
    {
      "question": "She is as ______ as her mother.",
      "options": [
        "graceful",
        "more graceful",
        "most graceful",
        "gracefuler"
      ],
      "answer": "graceful",
      "explanation": "'as...as' की रचना समानता दर्शाता है और उसमैं हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है. इसलिए 'graceful' सही जवाब है."
    },
    {
      "question": "This is the ______ path to the summit.",
      "options": [
        "short",
        "shorter",
        "shortest",
        "more short"
      ],
      "answer": "shortest",
      "explanation": "यह वाक्य शिखर पर जवाके सभी रस्ताओ में से सौसे टूंको रस्तो सूचित करता है, जो superlative degree  का प्रयोग दर्शाता है. 'short' का superlative 'shortest' है."
    },
    {
      "question": "The movie was ______ than the book.",
      "options": [
        "exciting",
        "more exciting",
        "most exciting",
        "excitinger"
      ],
      "answer": "more exciting",
      "explanation": "'exciting' यह लंबा विशेषण है. फिल्म और पुस्तक, यह दो वस्तुओ की तुलना करने के लिए comparative degree 'more exciting' का प्रयोग होता है."
    },
    {
      "question": "Which is the ______ city in your country?",
      "options": [
        "crowded",
        "more crowded",
        "most crowded",
        "crowdeder"
      ],
      "answer": "most crowded",
      "explanation": "यह प्रश्न देशके सभी शहेरो में से सौसे अधिक भीडवाला शहेर बारे में पूछता है है, इसलिए superlative degree 'most crowded' का प्रयोग होगा."
    }
  ],
  "test-5": [
    {
      "question": "He is the ______ person I have ever met.",
      "options": [
        "funny",
        "funnier",
        "funniest",
        "most funny"
      ],
      "answer": "funniest",
      "explanation": "विशेषण 'funny' के अंदर 'y' है. Superlative degree बनाने के लिए 'y' को 'i' में बदली को '-est' जोड़ा जाता है. यहाँ व्यक्ति की तुलना अत्यार सुधी मलेला सभी लोगों के साथ है."
    },
    {
      "question": "The red dress is ______ than the blue one.",
      "options": [
        "expensive",
        "more expensive",
        "most expensive",
        "expensiver"
      ],
      "answer": "more expensive",
      "explanation": "'expensive' यह लंबा विशेषण है. दो ड्रेस की किंमत की तुलना करने के लिए comparative degree 'more expensive' का प्रयोग होगा."
    },
    {
      "question": "This is one of the ______ buildings in the city.",
      "options": [
        "old",
        "older",
        "oldest",
        "more old"
      ],
      "answer": "oldest",
      "explanation": "'one of the' के बाद हमेशा superlative degree और बहुवचन की संज्ञा आता है. यहाँ शहेर की सौसे पुरानी इमैंरतो में की एक की बात है, इसलिए 'oldest' प्रयोग होगा."
    },
    {
      "question": "The situation is ______ than we thought.",
      "options": [
        "serious",
        "more serious",
        "most serious",
        "seriouser"
      ],
      "answer": "more serious",
      "explanation": "यहाँ परिस्थिति की गंभीरता की तुलना हमंरी विचारणा के साथ हो रही है. 'serious' लांबो शब्द होने के कारण 'more' का प्रयोग होगा."
    },
    {
      "question": "He drives ______ than his brother.",
      "options": [
        "careful",
        "more carefully",
        "carefully",
        "most carefully"
      ],
      "answer": "more carefully",
      "explanation": "यहाँ क्रिया (drives) की रीत की तुलना हो रही है, इसलिए क्रियाविशेषण (adverb) 'carefully' प्रयोग होगा. दो व्यक्तिओ की तुलना के लिए comparative adverb 'more carefully' का प्रयोग होता है."
    },
    {
      "question": "It's the ______ restaurant in town.",
      "options": [
        "bad",
        "worse",
        "worst",
        "baddest"
      ],
      "answer": "worst",
      "explanation": "'bad' का superlative form 'worst' है. यहाँ रेस्टोरन्ट को शहेर में सौसे खराब गणावायुं है. 'the' आर्टिकल superlative degree सूचित करता है."
    },
    {
      "question": "Your explanation is ______ than mine.",
      "options": [
        "clear",
        "clearer",
        "clearest",
        "more clear"
      ],
      "answer": "clearer",
      "explanation": "यहाँ दो स्पष्टताओ की तुलना है. 'clear' एक सिलेबल का शब्द है, इसलिए comparative degree 'clearer' बनशे."
    },
    {
      "question": "He is not as ______ as he looks.",
      "options": [
        "young",
        "younger",
        "youngest",
        "more young"
      ],
      "answer": "young",
      "explanation": "'not as...as' की रचना में हमेशा विशेषण का मूल रूप (positive degree) ही प्रयोग होता है. इसलिए 'young' सही जवाब है."
    },
    {
      "question": "This is the ______ song I've heard all day.",
      "options": [
        "beautiful",
        "more beautiful",
        "most beautiful",
        "beautifulest"
      ],
      "answer": "most beautiful",
      "explanation": "'beautiful' यह लंबा विशेषण है. पूरा दिन में सांभले हीला सभी गीतो में यह गीत को सर्वसबसे सुंदर बताने के लिए superlative degree 'most beautiful' प्रयोग होगा."
    },
    {
      "question": "I feel ______ today than I did yesterday.",
      "options": [
        "good",
        "better",
        "best",
        "well"
      ],
      "answer": "better",
      "explanation": "यहाँ व्यक्ति की शारीरिक या मैंनसिक स्थिति की तुलना गईकाल के साथ हो रही है. 'good' का comparative 'better' है."
    }
  ],
  "test-6": [
    {
      "question": "This is the ______ solution to the problem.",
      "options": [
        "simple",
        "simpler",
        "simplest",
        "most simple"
      ],
      "answer": "simplest",
      "explanation": "जब विशेषण 'e' में समाप्त होता, तब superlative degree के लिए '-st' जोड़ा जाता है. 'simple' का 'simplest' होता है. यहाँ उयाल को सर्वसबसे सुंदर बतावायो है."
    },
    {
      "question": "She is ______ about her work than he is.",
      "options": [
        "passionate",
        "more passionate",
        "most passionate",
        "passionater"
      ],
      "answer": "more passionate",
      "explanation": "'passionate' यह लंबा विशेषण है. दो व्यक्तिों के जुस्सा की तुलना करने के लिए comparative degree 'more passionate' का प्रयोग होता है."
    },
    {
      "question": "This laptop is ______ than my old one.",
      "options": [
        "light",
        "lighter",
        "lightest",
        "more light"
      ],
      "answer": "lighter",
      "explanation": "यहाँ दो लेपटोपके वजन की तुलना है. 'light' एक सिलेबल का शब्द होने के कारण comparative degree के लिए '-er' जोड़ा जाए है."
    },
    {
      "question": "Of all the players, he is the ______.",
      "options": [
        "talented",
        "more talented",
        "most talented",
        "talentedest"
      ],
      "answer": "most talented",
      "explanation": "यह वाक्य सभी खिलाड़ीओ में से एक को सौसे प्रतिभाशाली बतावे है, इसलिए superlative degree 'most talented' का प्रयोग होगा."
    },
    {
      "question": "The Nile is the ______ river in the world.",
      "options": [
        "long",
        "longer",
        "longest",
        "more long"
      ],
      "answer": "longest",
      "explanation": "विश्व की आपंम नदीओ में केइल नदी को सौसे लंबी गणाने गए है. यह superlative degree है, इसलिए 'longest' सही जवाब है."
    },
    {
      "question": "This room is not as ______ as the other one.",
      "options": [
        "spacious",
        "more spacious",
        "most spacious",
        "spaciouser"
      ],
      "answer": "spacious",
      "explanation": "'not as...as' की रचना में हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है, भले ही विशेषण लांबु हो. इसलिए 'spacious' सही है."
    },
    {
      "question": "The temperature is ______ today.",
      "options": [
        "low",
        "lower",
        "lowest",
        "more low"
      ],
      "answer": "low",
      "explanation": "इस वाक्य में कोई तुलना करने में नहीं आई, केवल यहजके तापमैंन बारे में हकीकत जणाने गए है. इसलिए, विशेषण का मूल रूप (positive degree) 'low' प्रयोग होगा."
    },
    {
      "question": "He has ______ money than I do.",
      "options": [
        "many",
        "much",
        "more",
        "most"
      ],
      "answer": "more",
      "explanation": "'Money' यह uncoutable noun है. 'many' और 'much' दोनों का comparative form 'more' है. यहाँ दो व्यक्तिओ पास रहे पैसा की तुलना है."
    },
    {
      "question": "She is ______ of the two sisters.",
      "options": [
        "the elder",
        "the eldest",
        "elder",
        "eldest"
      ],
      "answer": "the elder",
      "explanation": "जब एक ही परिवारके दो सदस्यों की उंमर की तुलना होता, तब 'elder' प्रयोग होता है. दो व्यक्तिओ में से एक की बात होने के कारण 'the' के साथ comparative degree 'the elder' का प्रयोग होगा."
    },
    {
      "question": "That was the ______ performance I've seen.",
      "options": [
        "impressive",
        "more impressive",
        "most impressive",
        "impressiver"
      ],
      "answer": "most impressive",
      "explanation": "अत्यार सुधी देखे हुयह सभी प्रदर्श का में यह प्रदर्शन को सर्वसबसे सुंदर बतावायुं है. 'impressive' लांबो शब्द होने के कारण superlative के लिए 'most' का प्रयोग होगा."
    }
  ],
  "test-7": [
    {
      "question": "Iron is ______ than cotton.",
      "options": [
        "useful",
        "more useful",
        "most useful",
        "usefuller"
      ],
      "answer": "more useful",
      "explanation": "'useful' यह दो सिलेबल का शब्द है. सामान्य रूप से, दो सिलेबलके शब्दो के लिए 'more' का प्रयोग होता है. यहाँ लोखंड और कपास की प्रयोगीता की तुलना है."
    },
    {
      "question": "This is the ______ story I have ever heard.",
      "options": [
        "strange",
        "stranger",
        "strangest",
        "more strange"
      ],
      "answer": "strangest",
      "explanation": "यहाँ सांभले हीली सब वार्ताओ में यह वार्ता को सौसे विचित्र गणावी है. 'strange' शब्द 'e' में पूरा होने के कारण superlative के लिए केवल '-st' जोड़ा जाए है."
    },
    {
      "question": "The new employee is ______ than the old one.",
      "options": [
        "efficient",
        "more efficient",
        "most efficient",
        "efficienter"
      ],
      "answer": "more efficient",
      "explanation": "'efficient' यह लंबा विशेषण है. दो कर्मचारियों की कार्यक्षमता की तुलना करने के लिए comparative degree 'more efficient' का प्रयोग होता है."
    },
    {
      "question": "She is the ______ member of her family.",
      "options": [
        "young",
        "younger",
        "youngest",
        "most young"
      ],
      "answer": "youngest",
      "explanation": "परिवारके सभी सदस्यों में उसकी को सौसे के की बताने गए है, इसलिए superlative degree 'youngest' प्रयोग होगा."
    },
    {
      "question": "This cake is not as ______ as the one you make.",
      "options": [
        "tasty",
        "tastier",
        "tastiest",
        "more tasty"
      ],
      "answer": "tasty",
      "explanation": "'as...as' की रचना में हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है. इसलिए 'tasty' सही जवाब है."
    },
    {
      "question": "The blue whale is the ______ animal that has ever lived.",
      "options": [
        "heavy",
        "heavier",
        "heaviest",
        "most heavy"
      ],
      "answer": "heaviest",
      "explanation": "यहाँ वादली व्हेल को अत्यार सुधीके आपंम प्राणीओ में सौसे जोरे गणाने गए है, जो superlative degree  का प्रयोग सूचित करता है. 'heavy' का superlative 'heaviest' होता है."
    },
    {
      "question": "I have ______ work to do today than yesterday.",
      "options": [
        "little",
        "less",
        "least",
        "lesser"
      ],
      "answer": "less",
      "explanation": "'Little' (जथ्था के लिए) यह अनियमित विशेषण है. उसका comparative form 'less' है. यहाँ यहजके और गईकालके काम की तुलना है."
    },
    {
      "question": "He chose the ______ of the three paths.",
      "options": [
        "short",
        "shorter",
        "shortest",
        "more short"
      ],
      "answer": "shortest",
      "explanation": "जब दो की बजाय अधिक (यहाँ त्रण) विकल्पो में से पसंद करने की हो, तब superlative degree ('shortest') का प्रयोग होता है."
    },
    {
      "question": "The movie becomes ______ towards the end.",
      "options": [
        "interesting",
        "more interesting",
        "most interesting",
        "interestinger"
      ],
      "answer": "more interesting",
      "explanation": "यहाँ फिल्म जैसे अंत तरफ आगे वधे है वे अधिक रोचक बनता है, होना दर्शावायुं है. क्रमिक वृद्धि बताने के लिए comparative degree का प्रयोग होता है."
    },
    {
      "question": "She is as ______ as a deer.",
      "options": [
        "gentle",
        "gentler",
        "gentlest",
        "more gentle"
      ],
      "answer": "gentle",
      "explanation": "'as...as' की रचना समानता दर्शाने के लिए प्रयोग होता है और उसमैं हमेशा विशेषण का मूल रूप (positive degree) आता है. इसलिए 'gentle' सही जवाब है."
    }
  ],
  "test-8": [
    {
      "question": "This is the ______ book in the series.",
      "options": [
        "late",
        "later",
        "latest",
        "last"
      ],
      "answer": "latest",
      "explanation": "'Latest'  का अर्थ 'सौसे नवुं' (या) 'अभी का' होता है, जो श्रेणीके सौसे नवा पुस्तक के लिए उचित है. 'Last'  का अर्थ 'हैल्लुं' (क्रम मैं) होता है."
    },
    {
      "question": "Your project is ______ than all the others.",
      "options": [
        "good",
        "better",
        "best",
        "well"
      ],
      "answer": "better",
      "explanation": "यहाँ आपके प्रोजेक्ट की तुलना 'दूसरों सभी' प्रोजेक्ट्स के साथ है. 'than'  का प्रयोग comparative degree सूचित करता है. 'good' का comparative 'better' है."
    },
    {
      "question": "He is the ______ of the two brothers.",
      "options": [
        "smart",
        "smarter",
        "smartest",
        "the smarter"
      ],
      "answer": "the smarter",
      "explanation": "जब केवल दो व्यक्तिओ या वस्तुओ में से कोई एक को चडियातुं बताने का हो, तब 'the' के साथ comparative degree का प्रयोग होता है."
    },
    {
      "question": "She has ______ patience than I do.",
      "options": [
        "little",
        "less",
        "least",
        "lesser"
      ],
      "answer": "less",
      "explanation": "'Patience' यह uncoutable noun है. 'little' का comparative form 'less' है, जो का अर्थ 'कम' होता है. यहाँ दो व्यक्तिओ की धीरज की तुलना है."
    },
    {
      "question": "This is the ______ part of the movie.",
      "options": [
        "exciting",
        "more exciting",
        "most exciting",
        "excitingest"
      ],
      "answer": "most exciting",
      "explanation": "यह वाक्य फिल्मके एक भाग को दूसरों सभी भागो की बजाय सौसे अधिक रो मैंचक बतावे है, इसलिए superlative degree 'most exciting' का प्रयोग होगा."
    },
    {
      "question": "The diamond is the ______ of all gems.",
      "options": [
        "hard",
        "harder",
        "hardest",
        "most hard"
      ],
      "answer": "hardest",
      "explanation": "सभी रत् का में जरा को सौसे कठण गणाव्यो है, जो superlative degree  का प्रयोग सूचित करता है. इसलिए 'hardest' सही जवाब है."
    },
    {
      "question": "His house is ______ from the station than mine.",
      "options": [
        "far",
        "farther",
        "further",
        "farthest"
      ],
      "answer": "farther",
      "explanation": "'Farther'  का प्रयोग भौतिक अंतर (physical distance) दर्शाने के लिए होता है. यहाँ दो घरोके स्टेशनहीं अंतर की तुलना है."
    },
    {
      "question": "Today is the ______ day of my life.",
      "options": [
        "bad",
        "worse",
        "worst",
        "baddest"
      ],
      "answer": "worst",
      "explanation": "'bad' का superlative form 'worst' है. यहाँ यह दिन को जीवन का सौसे खराब दिन गणाव्यो है, इसलिए 'worst' प्रयोग होगा."
    },
    {
      "question": "This watch is ______ than that one.",
      "options": [
        "cheap",
        "cheaper",
        "cheapest",
        "more cheap"
      ],
      "answer": "cheaper",
      "explanation": "यहाँ दो घडियालो की किंमत की तुलना है. 'cheap' एक सिलेबल का शब्द है, इसलिए comparative degree 'cheaper' बनता है."
    },
    {
      "question": "You are as ______ as your sister.",
      "options": [
        "kind",
        "kinder",
        "kindest",
        "more kind"
      ],
      "answer": "kind",
      "explanation": "'as...as' की रचना में हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है, जो दो व्यक्तिओ बीच समानता दर्शाता है. इसलिए 'kind' सही जवाब है."
    }
  ],
  "test-9": [
    {
      "question": "This is the ______ of all the stories.",
      "options": [
        "interesting",
        "more interesting",
        "most interesting",
        "interestinger"
      ],
      "answer": "most interesting",
      "explanation": "सब वार्ताओ में से एक को सौसे रोचक बताने के लिए superlative degree का प्रयोग होता है. 'interesting' लांबो शब्द होने के कारण 'most' प्रयोग होगा."
    },
    {
      "question": "The puppy is ______ than the kitten.",
      "options": [
        "playful",
        "more playful",
        "most playful",
        "playfuler"
      ],
      "answer": "more playful",
      "explanation": "'playful' यह दो सिलेबल का शब्द है और '-ful' से समाप्त होता है, इसलिए comparative degree के लिए 'more' का प्रयोग होता है."
    },
    {
      "question": "She is the ______ responsible person in the office.",
      "options": [
        "responsible",
        "more responsible",
        "most responsible",
        "responsibler"
      ],
      "answer": "most responsible",
      "explanation": "'responsible' यह लंबा विशेषण है. ओफिसके सभी लोगों में उसकी को सौसे ज़िम्मेदार बताने के लिए superlative degree 'most responsible' का प्रयोग होगा."
    },
    {
      "question": "This brand is ______ than the other one.",
      "options": [
        "reliable",
        "more reliable",
        "most reliable",
        "reliabler"
      ],
      "answer": "more reliable",
      "explanation": "यहाँ दो ब्रान्ड की विश्वस कीयता की तुलना है. 'reliable' लांबो शब्द होने के कारण comparative degree के लिए 'more' का प्रयोग होगा."
    },
    {
      "question": "His was the ______ speech of the evening.",
      "options": [
        "powerful",
        "more powerful",
        "most powerful",
        "powerfuler"
      ],
      "answer": "most powerful",
      "explanation": "सांजके सभी भाषणो में एक भाषण को सौसे शक्तिशाली गणाव्युं है, जो superlative degree  का प्रयोग सूचित करता है. 'powerful' के साथ 'most' प्रयोग होता है."
    },
    {
      "question": "My new shoes are ______ than my old ones.",
      "options": [
        "comfortable",
        "more comfortable",
        "most comfortable",
        "comfortabler"
      ],
      "answer": "more comfortable",
      "explanation": "'comfortable' यह लंबा विशेषण है. दो जोडी जूता की आराम की तुलना करने के लिए comparative degree 'more comfortable' का प्रयोग होता है."
    },
    {
      "question": "This is the ______ news I've heard all week.",
      "options": [
        "good",
        "better",
        "best",
        "most good"
      ],
      "answer": "best",
      "explanation": "'Good' का superlative form 'best' है. पूरा अठवाडियाके समैंचारो में यह समैंचार को सर्वसबसे सुंदर बताने के लिए 'best' का प्रयोग होगा."
    },
    {
      "question": "The sun is ______ than the moon.",
      "options": [
        "bright",
        "brighter",
        "brightest",
        "more bright"
      ],
      "answer": "brighter",
      "explanation": "यहाँ सूर्य और चंद्र की वहजस्वीता की तुलना है. 'bright' एक सिलेबल का शब्द है, इसलिए comparative degree 'brighter' बनशे."
    },
    {
      "question": "He is the ______ worker in the company.",
      "options": [
        "hardworking",
        "more hardworking",
        "most hardworking",
        "hardworkingest"
      ],
      "answer": "most hardworking",
      "explanation": "'hardworking' यह संयुक्त विशेषण है. उसको लंबे विशेषण के रूप में गणवा में आता है, इसलिए superlative degree के लिए 'most hardworking' का प्रयोग होता है."
    },
    {
      "question": "This hotel is as ______ as the one we stayed in last year.",
      "options": [
        "luxurious",
        "more luxurious",
        "most luxurious",
        "luxuriouser"
      ],
      "answer": "luxurious",
      "explanation": "'as...as' की रचना में हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है, भले ही विशेषण लांबु हो. इसलिए 'luxurious' सही जवाब है."
    }
  ],
  "test-10": [
    {
      "question": "Which of the two routes is ______?",
      "options": [
        "the safer",
        "the safest",
        "safer",
        "safe"
      ],
      "answer": "the safer",
      "explanation": "जब केवल दो वस्तुओ (यहाँ दो रस्ता)  में से पसंद करने की हो और तुलना होती हो, तब 'the' के साथ comparative degree का प्रयोग होता है."
    },
    {
      "question": "This is the ______ film by that director.",
      "options": [
        "little-known",
        "less-known",
        "least-known",
        "lesser-known"
      ],
      "answer": "least-known",
      "explanation": "'Little' का superlative 'least' है. यहाँ निर्देशक की सब फिल्मो में यह फिल्म को सौसे कम जाणीती गणावी है, इसलिए 'least-known' प्रयोग होगा."
    },
    {
      "question": "He feels ______ better today.",
      "options": [
        "much",
        "more",
        "many",
        "most"
      ],
      "answer": "much",
      "explanation": "Comparative degree (जैसे या 'better') पर जोर देने के लिए उसके आगे 'much' (या) 'far' जैसे शब्दोका प्रयोग होता है. 'much better' यानी 'बहुत अच्छा'."
    },
    {
      "question": "The ______ you study, the ______ you will score.",
      "options": [
        "harder, higher",
        "hard, high",
        "hardest, highest",
        "more hard, more high"
      ],
      "answer": "harder, higher",
      "explanation": "'The + comparative..., the + comparative...' की रचना कारण और परिणाम दर्शाता है. (जोटलुं अधिक..., वहटलुं अधिक...). इसलिए 'The harder you study, the higher you will score' सही वाक्य है."
    },
    {
      "question": "This is by far the ______ cake I have ever tasted.",
      "options": [
        "delicious",
        "more delicious",
        "most delicious",
        "deliciousest"
      ],
      "answer": "most delicious",
      "explanation": "'by far'  का प्रयोग superlative degree पर जोर देने के लिए होता है. 'delicious' लांबो शब्द होने के कारण 'most' प्रयोग होगा. यह वाक्य याक को अत्यार सुधी की सर्वसबसे सुंदर बतावे है."
    },
    {
      "question": "She is ______ than her two sisters.",
      "options": [
        "pretty",
        "prettier",
        "prettiest",
        "more pretty"
      ],
      "answer": "prettier",
      "explanation": "यहाँ एक लड़की की तुलना उसकी दो बहे का के साथ हो रही है. 'than' शब्द comparative degree सूचित करता है. 'pretty' का comparative 'prettier' होता है."
    },
    {
      "question": "The final chapter is the ______ in the book.",
      "options": [
        "long",
        "longer",
        "longest",
        "more long"
      ],
      "answer": "longest",
      "explanation": "पुस्तकके सभी प्रकरणो में अंतिम प्रकरण को सौसे लांबु गणाव्युं है, जो superlative degree  का प्रयोग दर्शाता है. इसलिए 'longest' सही जवाब है."
    },
    {
      "question": "No other metal is as ______ as gold.",
      "options": [
        "precious",
        "more precious",
        "most precious",
        "preciouser"
      ],
      "answer": "precious",
      "explanation": "'as...as' की रचना में हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है. 'No other' से शुरू होने वाले वाक्यों positive degree  का प्रयोग करना superlative degree  का अर्थ देता है."
    },
    {
      "question": "The ______ you leave, the ______ you will arrive.",
      "options": [
        "soon, soon",
        "sooner, sooner",
        "soonest, soonest",
        "sooner, soonest"
      ],
      "answer": "sooner, sooner",
      "explanation": "'The + comparative..., the + comparative...' की रचना कारण और परिणाम दर्शाता है. यहाँ 'The sooner you leave, the sooner you will arrive' (जोटला जल्दी आप  कीकलशो, वहटला जल्दी आप पहोंचशो) यह सही प्रयोग है."
    },
    {
      "question": "He has very ______ information on the topic.",
      "options": [
        "little",
        "less",
        "least",
        "a little"
      ],
      "answer": "little",
      "explanation": "'very little'  का अर्थ 'लगभग कुछ नहीं' (या) 'बहुत कम' होता है. यहाँ कोई तुलना नहीं, केवल जानकारीके जथ्था बारे में बात है, इसलिए positive degree 'little' प्रयोग होगा."
    }
  ],
  "test-11": [
    {
      "question": "This problem is ______ than the one we solved yesterday.",
      "options": [
        "complex",
        "more complex",
        "most complex",
        "complexer"
      ],
      "answer": "more complex",
      "explanation": "'complex' यह दो सिलेबल का शब्द है. उसकी तुलना करने के लिए comparative degree 'more complex' का प्रयोग होता है."
    },
    {
      "question": "Of the three brothers, John is the ______.",
      "options": [
        "tall",
        "taller",
        "tallest",
        "more tall"
      ],
      "answer": "tallest",
      "explanation": "जब दो की बजाय अधिक (यहाँ त्रण) व्यक्तिओ की तुलना होती हो और उसमें से एक को सर्वसबसे सुंदर बताववो हो, तब superlative degree ('tallest') का प्रयोग होता है."
    },
    {
      "question": "I have ______ friends than she does.",
      "options": [
        "few",
        "fewer",
        "fewest",
        "less"
      ],
      "answer": "fewer",
      "explanation": "'Friends' यह countable noun (गणनीय संज्ञा) है. Countable nouns के लिए comparative degree में 'fewer' प्रयोग होता है. 'less'  का प्रयोग uncountable nouns (न गणनीय संज्ञा) के लिए होता है."
    },
    {
      "question": "This is the ______ road I have ever driven on.",
      "options": [
        "narrow",
        "narrower",
        "narrowest",
        "most narrow"
      ],
      "answer": "narrowest",
      "explanation": "'narrow' यह दो सिलेबल का शब्द है जो '-er' और '-est' लई शया है. यहाँ अत्यार सुधीके सभी रस्ताओ के साथ तुलना होने के कारण superlative degree 'narrowest' प्रयोग होगा."
    },
    {
      "question": "The ______ you practice, the ______ you become.",
      "options": [
        "more, good",
        "most, best",
        "more, better",
        "much, better"
      ],
      "answer": "more, better",
      "explanation": "'The + comparative..., the + comparative...' की रचना कारण-परिणाम दर्शाता है. 'practice' के लिए 'more' और 'good' का comparative 'better' है. (जितना अधिक अभ्यास करशो, वहटला अधिक अच्छे बनशो)."
    },
    {
      "question": "His theory is not so ______ as his professor's.",
      "options": [
        "developed",
        "more developed",
        "most developed",
        "well-developed"
      ],
      "answer": "developed",
      "explanation": "'not so...as' की रचना 'not as...as' जैसी ही है और उसमैं हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है. यहाँ 'developed' मूल रूप है."
    },
    {
      "question": "For ______ information, please contact our helpdesk.",
      "options": [
        "far",
        "farther",
        "further",
        "farthest"
      ],
      "answer": "further",
      "explanation": "'Further'  का अर्थ 'वृद्धि की' (additional) जानकारी, चर्चा आदि होता है. 'Farther'  का प्रयोग भौतिक अंतर के लिए होता है."
    },
    {
      "question": "This knife is ______ than that one.",
      "options": [
        "sharp",
        "sharper",
        "sharpest",
        "more sharp"
      ],
      "answer": "sharper",
      "explanation": "यहाँ दो छरीओ की धार की तुलना है. 'sharp' एक सिलेबल का शब्द होने के कारण comparative degree 'sharper' बनशे."
    },
    {
      "question": "He is the ______ polite person I know.",
      "options": [
        "polite",
        "politer",
        "politest",
        "most polite"
      ],
      "answer": "most polite",
      "explanation": "'polite' जैसे दो सिलेबलके शब्दो के लिए 'more' और 'most'  का प्रयोग अधिक प्रचलित और सुरक्षित है. यहाँ superlative degree की जरूर है, इसलिए 'most polite' यहवशे."
    },
    {
      "question": "Your essay has ______ mistakes than mine.",
      "options": [
        "many",
        "more",
        "most",
        "much"
      ],
      "answer": "more",
      "explanation": "'Mistakes' यह countable noun है. 'many' का comparative form 'more' है. यहाँ दो निबंधो में रखी हुई भूलो की तुलना है."
    }
  ],
  "test-12": [
    {
      "question": "Very few cities in India are as ______ as Mumbai.",
      "options": [
        "big",
        "bigger",
        "biggest",
        "as big"
      ],
      "answer": "big",
      "explanation": "यह वाक्य Positive Degree में है. 'as...as' की बीच हमेशा विशेषण का मूल रूप आता है. इस वाक्य का अर्थ है या मुंबई जोरतके सौसे बड़े शहेरो में का एक है."
    },
    {
      "question": "Mumbai is bigger than ______ cities in India.",
      "options": [
        "any other",
        "all other",
        "most other",
        "many other"
      ],
      "answer": "most other",
      "explanation": "जब 'Very few' से शुरू होने वाले positive वाक्य को comparative में बदलकरए, तब 'than most other' का प्रयोग होता है. उसका अर्थ है या मुंबई जोरतके बड़े भागके अन्य शहेरो की बजाय बड़ा है."
    },
    {
      "question": "Mumbai is one of the ______ cities in India.",
      "options": [
        "big",
        "bigger",
        "biggest",
        "the biggest"
      ],
      "answer": "biggest",
      "explanation": "जब 'Very few' से शुरू होने वाले positive वाक्य को superlative में बदलकरए, तब 'one of the + superlative degree' की रचना प्रयोग होता है. इसलिए 'one of the biggest cities' सही प्रयोग है."
    },
    {
      "question": "No other boy in the class is as ______ as Rahul.",
      "options": [
        "clever",
        "cleverer",
        "cleverest",
        "more clever"
      ],
      "answer": "clever",
      "explanation": "यह वाक्य Positive Degree में है. 'as...as' की बीच विशेषण का मूल रूप आता है. 'No other'  का प्रयोग दर्शाता है या राहुल सौसे होंशियार है."
    },
    {
      "question": "Change to comparative: 'No other boy in the class is as clever as Rahul.'",
      "options": [
        "Rahul is cleverer than most other boys.",
        "Rahul is cleverer than any other boy.",
        "Rahul is cleverer than all boys.",
        "Rahul is the cleverest boy."
      ],
      "answer": "Rahul is cleverer than any other boy.",
      "explanation": "जब 'No other' से शुरू होने वाले positive वाक्य को comparative में बदलने के लिए में आता है, तब 'than any other' का प्रयोग होता है."
    },
    {
      "question": "Change to superlative: 'No other boy in the class is as clever as Rahul.'",
      "options": [
        "Rahul is one of the cleverest boys.",
        "Rahul is the cleverest boy.",
        "Rahul is a clever boy.",
        "Rahul is cleverer than other boys."
      ],
      "answer": "Rahul is the cleverest boy.",
      "explanation": "जब 'No other' से शुरू होने वाले positive वाक्य को superlative में बदलने के लिए में आता है, तब 'the + superlative degree' की रचना प्रयोग होता है."
    },
    {
      "question": "This book is ______ than that one.",
      "options": [
        "informative",
        "more informative",
        "most informative",
        "informativer"
      ],
      "answer": "more informative",
      "explanation": "'informative' यह लंबा विशेषण है. दो पुस्तकिसका तुलना करवा के लिए comparative degree 'more informative' का प्रयोग होता है."
    },
    {
      "question": "He is the ______ member of the team.",
      "options": [
        "experienced",
        "more experienced",
        "most experienced",
        "experienceder"
      ],
      "answer": "most experienced",
      "explanation": "टीमके सभी सदस्यों में एक को सौसे अनुभवी बताने के लिए superlative degree का प्रयोग होता है. 'experienced' लांबो शब्द होने के कारण 'most' प्रयोग होगा."
    },
    {
      "question": "The ______ I get to know him, the ______ I like him.",
      "options": [
        "little, little",
        "less, less",
        "least, least",
        "lesser, lesser"
      ],
      "answer": "less, less",
      "explanation": "'The + comparative..., the + comparative...' की रचना कारण-परिणाम दर्शाता है. यहाँ 'The less I get to know him, the less I like him' (मैं उसको जितना ओहो जानता हूँ, उतना ओहो वह म को पसंद है) यह सही प्रयोग है."
    },
    {
      "question": "This coffee is not as ______ as the one from the cafe.",
      "options": [
        "strong",
        "stronger",
        "strongest",
        "more strong"
      ],
      "answer": "strong",
      "explanation": "'as...as' की रचना में हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है. इसलिए 'strong' सही जवाब है."
    }
  ],
  "test-13": [
    {
      "question": "Gold is more precious than ______ metal.",
      "options": [
        "any",
        "any other",
        "all other",
        "some other"
      ],
      "answer": "any other",
      "explanation": "जब कोई एक वस्तु की तुलना वह ही समूह की बीजी सब वस्तुओ के साथ किया जाता है, तब comparative degree में 'than any other' का प्रयोग होता है. इस वाक्य का अर्थ है या सो का बीजी कोई भी धातु की बजाय अधिक कीमती है."
    },
    {
      "question": "This is the ______ tree in the park.",
      "options": [
        "shady",
        "shadier",
        "shadiest",
        "more shady"
      ],
      "answer": "shadiest",
      "explanation": "'shady' जैसे विशेषण या जो 'y' में समाप्त होता है, superlative degree बनाने के लिए 'y'  का 'i' करना '-est' लगाडवा में आता है. यहाँ झाड को पार्क का सौसे छांयडावाला गणावायुं है."
    },
    {
      "question": "The exam was ______ than I had expected.",
      "options": [
        "easy",
        "easier",
        "easiest",
        "far easier"
      ],
      "answer": "far easier",
      "explanation": "Comparative degree ('easier') पर जोर रख के लिए के लिए उसके आगे 'far', 'much', 'a lot' जैसे शब्दो का प्रयोग किया जा सकता है. 'far easier'  का अर्थ 'घणी अधिक सरल' होता है."
    },
    {
      "question": "He has ______ knowledge about this subject.",
      "options": [
        "little",
        "a little",
        "the little",
        "less"
      ],
      "answer": "little",
      "explanation": "'Little'  का अर्थ 'लगभग कुछ नहीं' (लगभग कंई नहीं) होता है. 'A little'  का अर्थ 'थोड़ाक' (हकारात्मक) होता है. वाक्यके संदर्भ मैं, वह विषय पर उसको लगभग कुछ नहीं ज्ञान है होना कह को  मैंगे है."
    },
    {
      "question": "She is ______ beautiful than her sister.",
      "options": [
        "less",
        "lesser",
        "least",
        "little"
      ],
      "answer": "less",
      "explanation": "'more' की जैसे, 'less'  का प्रयोग भी लंबे विशेषणो के साथ comparative degree बनाने के लिए होता है, परंतु वह 'कम' होना का भाव दर्शाता है. 'less beautiful' यानी 'कम सुंदर'."
    },
    {
      "question": "This is the ______ interesting of all the books.",
      "options": [
        "little",
        "less",
        "least",
        "lesser"
      ],
      "answer": "least",
      "explanation": "'Less' का superlative form 'least' है, जो का अर्थ 'सौसे कम' होता है. यहाँ पुस्तक को सभी पुस्तको में सौसे कम रोचक गणावायुं है."
    },
    {
      "question": "Your problem is not very ______ from mine.",
      "options": [
        "different",
        "more different",
        "most different",
        "differ"
      ],
      "answer": "different",
      "explanation": "इस वाक्य में कोई तुलना नहीं, केवल एक हकीकत है या आपकी समस्या मेरी समस्यासे बहु अलग नहीं. इसलिए विशेषण का मूल रूप 'different' प्रयोग होगा."
    },
    {
      "question": "The ______ you wait, the ______ it will be.",
      "options": [
        "long, bad",
        "longer, worse",
        "longest, worst",
        "long, worse"
      ],
      "answer": "longer, worse",
      "explanation": "'The + comparative..., the + comparative...' की रचना यहाँ भी लागु पडे है. 'long' का comparative 'longer' और 'bad' का comparative 'worse' है. (जोटली अधिक राह जोशो, वहटलुं अधिक खराब थशे)."
    },
    {
      "question": "She is one of the ______ actresses in Hollywood.",
      "options": [
        "talented",
        "more talented",
        "most talented",
        "talenteder"
      ],
      "answer": "most talented",
      "explanation": "'one of the' के बाद हमेशा superlative degree और बहुवचन की संज्ञा आता है. 'talented' लांबो शब्द होने के कारण superlative के लिए 'most' प्रयोग होगा."
    },
    {
      "question": "His eldest son is a doctor, the ______ is an engineer.",
      "options": [
        "young",
        "younger",
        "youngest",
        "more young"
      ],
      "answer": "younger",
      "explanation": "यहाँ दो दीकराओ (सौसे मोटो और दूसरा) की बात है. जब दो की तुलना हो, तब comparative degree 'younger' प्रयोग होता है."
    }
  ],
  "test-14": [
    {
      "question": "The puppy is the ______ of the two.",
      "options": [
        "playful",
        "more playful",
        "playfullest",
        "the more playful"
      ],
      "answer": "the more playful",
      "explanation": "जब केवल दो वस्तुओ या प्राणीओ में से कोई एक को अधिक चडियातुं बताने का हो, तब 'the' के साथ comparative degree का प्रयोग होता है. इसलिए 'the more playful' सही जवाब है."
    },
    {
      "question": "He is ______ than I thought.",
      "options": [
        "a lot kinder",
        "many kinder",
        "much kind",
        "very kinder"
      ],
      "answer": "a lot kinder",
      "explanation": "Comparative degree ('kinder') पर जोर देने के लिए उसके आगे 'a lot', 'much', (या) 'far' जैसे शब्दो मुकी सकता है. 'a lot kinder' यानी 'घणो अधिक दयालु'."
    },
    {
      "question": "This is the ______ creative solution.",
      "options": [
        "little",
        "less",
        "least",
        "lesser"
      ],
      "answer": "least",
      "explanation": "'Least' यह 'little' का superlative form है, जो का अर्थ 'सौसे कम' होता है. यहाँ उयाल को सौसे ओहो सर्जकेत्मक गणावायो है."
    },
    {
      "question": "She has ______ knowledge of the matter than he does.",
      "options": [
        "far",
        "further",
        "farther",
        "a lot"
      ],
      "answer": "further",
      "explanation": "इस वाक्य में 'further'  का अर्थ 'वृद्धि का' (या) 'अधिक ऊंडुं' ज्ञान होता है. वह भौतिक अंतर नहीं, परंतु ज्ञान की ऊंडाई दर्शाता है."
    },
    {
      "question": "The new manager is ______ than the previous one.",
      "options": [
        "decisive",
        "more decisive",
        "most decisive",
        "decisiver"
      ],
      "answer": "more decisive",
      "explanation": "'decisive' यह लंबा विशेषण है. दो मेनेजरो की तुलना करने के लिए comparative degree 'more decisive' का प्रयोग होता है."
    },
    {
      "question": "Your car is not so ______ as mine.",
      "options": [
        "fuel-efficient",
        "more fuel-efficient",
        "most fuel-efficient",
        "fuel-efficienter"
      ],
      "answer": "fuel-efficient",
      "explanation": "'not so...as' की रचना में हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है. 'fuel-efficient' यह संयुक्त विशेषण है और उसका मूल रूप प्रयोग होगा."
    },
    {
      "question": "Who is the ______ of all the employees?",
      "options": [
        "diligent",
        "more diligent",
        "most diligent",
        "diligenter"
      ],
      "answer": "most diligent",
      "explanation": "सभी कर्मचारियों में से एक को सौसे मेहनतुं बताने के लिए superlative degree 'most diligent' का प्रयोग होता है, क्योंकि 'diligent' लांबो शब्द है."
    },
    {
      "question": "The ______ you practice, the ______ your skills become.",
      "options": [
        "more, sharp",
        "more, sharper",
        "most, sharpest",
        "much, sharper"
      ],
      "answer": "more, sharper",
      "explanation": "'The + comparative..., the + comparative...' की रचना कारण-परिणाम दर्शाता है. यहाँ 'The more you practice, the sharper your skills become' (जितना अधिक अभ्यास करशो, वहटली आपकी कुशलता अधिक तीव्र बनशे) सही है."
    },
    {
      "question": "There is ______ hope of his recovery now.",
      "options": [
        "little",
        "less",
        "least",
        "a little"
      ],
      "answer": "little",
      "explanation": "'little'  का अर्थ लगभग कुछ नहीं आशा है ऐसा होता है. 'a little' यानी थोडी आशा. वाक्यके भाव अनुसार, अब साजा होने की आशा लगभग नहीं."
    },
    {
      "question": "This path is ______ than the other, but it is more scenic.",
      "options": [
        "long",
        "longer",
        "longest",
        "more long"
      ],
      "answer": "longer",
      "explanation": "यहाँ दो रस्ताओ की लंबाई की तुलना है. 'but' के बाद दूसरा वाक्य होना फिर भी, पहले वाक्य में comparative degree 'longer' का प्रयोग होगा."
    }
  ],
  "test-15": [
    {
      "question": "He is considered the ______ statesman of our time.",
      "options": [
        "great",
        "greater",
        "greatest",
        "more great"
      ],
      "answer": "greatest",
      "explanation": "यहाँ व्यक्ति को हमा समयके सभी राज कोताओ में सर्वसबसे सुंदर गणवा गए हैं, इसलिए superlative degree 'greatest' प्रयोग होगा."
    },
    {
      "question": "This brand of coffee is ______ superior to that one.",
      "options": [
        "much",
        "more",
        "most",
        "very"
      ],
      "answer": "much",
      "explanation": "'superior', 'inferior', 'junior', 'senior' जैसे लेटिन विशेषणो वह खुद ही comparative अर्थ धरावे है. उनकी आगे 'more' नहीं लागतुं, भी जोर देने 'much' लगावी सकता. उनकी के बाद 'than' को बदले 'to' आता है."
    },
    {
      "question": "I have never seen a ______ beautiful sunset.",
      "options": [
        "beautiful",
        "more beautiful",
        "most beautiful",
        "as beautiful"
      ],
      "answer": "more beautiful",
      "explanation": "इस वाक्य का भाव है कि में अब जो सूर्यास्त देखा उसका की बजाय अधिक सुंदर सूर्यास्त कभी नहीं देखा नहीं. यह एक प्रकार की अप्रत्यक्ष तुलना है, इसलिए comparative degree 'more beautiful' प्रयोग होगा."
    },
    {
      "question": "The ______ part of the journey was through the mountains.",
      "options": [
        "challenging",
        "more challenging",
        "most challenging",
        "challengingest"
      ],
      "answer": "most challenging",
      "explanation": "यात्राके सभी भागो में पर्वतोवाला भाग को सौसे पडकारजनक गणाव्यो है, इसलिए superlative degree 'most challenging' का प्रयोग होगा."
    },
    {
      "question": "Your house is not as ______ decorated as theirs.",
      "options": [
        "tastefully",
        "more tastefully",
        "most tastefully",
        "tasteful"
      ],
      "answer": "tastefully",
      "explanation": "'as...as' की रचना में क्रियाविशेषण (adverb) का भी मूल रूप ही प्रयोग होता है. यहाँ 'decorated' क्रिया (Verb) की रीत बताने 'tastefully' प्रयोग होता है."
    },
    {
      "question": "Of all my friends, he has the ______ sense of humor.",
      "options": [
        "good",
        "better",
        "best",
        "most good"
      ],
      "answer": "best",
      "explanation": "सभी मित्रो में से एकके सेन्स ओफ ह्युमर को सर्वसबसे सुंदर बताने के लिए 'good' का superlative form 'best' प्रयोग होगा."
    },
    {
      "question": "The later chapters of the book are ______ than the earlier ones.",
      "options": [
        "engaging",
        "more engaging",
        "most engaging",
        "engaginger"
      ],
      "answer": "more engaging",
      "explanation": "यहाँ पुस्तकके पीहैके और शुरुआतके प्रकरणो की तुलना है. 'engaging' लांबो शब्द होने के कारण comparative degree के लिए 'more' प्रयोग होगा."
    },
    {
      "question": "She is ______ than wise.",
      "options": [
        "more clever",
        "cleverer",
        "clever",
        "most clever"
      ],
      "answer": "more clever",
      "explanation": "जब एक ही व्यक्तिके दो गुणो की तुलना किया जाता है, तब विशेषण एक सिलेबल का हो तो भी '-er' लगाडवा को बदले 'more' का प्रयोग होता है. (She is more clever than wise)."
    },
    {
      "question": "The population of this city is ______ than that of my village.",
      "options": [
        "large",
        "larger",
        "largest",
        "more large"
      ],
      "answer": "larger",
      "explanation": "यहाँ शहेर और गाम की आबादी की तुलना है. 'large' शब्द 'e' में पूरा होने के कारण comparative degree के लिए केवल '-r' जोड़ा जाए है."
    },
    {
      "question": "This is the ______ that I can do for you.",
      "options": [
        "little",
        "less",
        "least",
        "lesser"
      ],
      "answer": "least",
      "explanation": "'Least'  का अर्थ 'सौसे कम' होता है. वाक्य का अर्थ है 'यह मैं आपके लिए कर सकता वह सौसे कम है'. यह superlative degree है."
    }
  ],
  "test-16": [
    {
      "question": "No other poet in English is as ______ as Shakespeare.",
      "options": [
        "great",
        "greater",
        "greatest",
        "as great"
      ],
      "answer": "great",
      "explanation": "यह वाक्य Positive Degree में है और 'as...as' की बीच हमेशा विशेषण का मूल रूप 'great' आता है. 'No other'  का प्रयोग शेक्सपियर की सर्वसबसे सुंदरता दर्शाता है."
    },
    {
      "question": "Shakespeare is greater than ______ in English.",
      "options": [
        "any poet",
        "all poets",
        "any other poet",
        "most other poets"
      ],
      "answer": "any other poet",
      "explanation": "जब 'No other' से शुरू होने वाले Positive वाक्य को Comparative में बदलकरए, तब 'than any other' का प्रयोग होता है, क्योंकि शेक्सपियर वह खुद भी एक कवि है और उनकी तुलना अन्य कविओ के साथ होता है."
    },
    {
      "question": "She is ______ of her three daughters.",
      "options": [
        "the prettiest",
        "the prettier",
        "prettier",
        "prettiest"
      ],
      "answer": "the prettiest",
      "explanation": "त्रण दीकरओ (बे की बजाय अधिक)  में से एक की तुलना होती होने के कारण Superlative Degree ('prettiest') प्रयोग होगा. Superlative की आगे हमेशा 'the' आता है."
    },
    {
      "question": "The offer sounds ______ to be true.",
      "options": [
        "too good",
        "very good",
        "better",
        "best"
      ],
      "answer": "too good",
      "explanation": "'too...to' की रचना नकारात्मक अर्थ दर्शाता है (एटलुं बधुं अच्छा या सही न होई शया). यहाँ कोई तुलना नहीं, इसलिए Positive Degree 'good' प्रयोग होगा."
    },
    {
      "question": "He is ______ older than his wife.",
      "options": [
        "slightly",
        "slight",
        "slighter",
        "slightest"
      ],
      "answer": "slightly",
      "explanation": "Comparative degree ('older') की तीव्रता दर्शाने के लिए 'slightly' (थोड़ाक) जैसे क्रियाविशेषणका प्रयोग होता है."
    },
    {
      "question": "This is the ______-written book I have ever read.",
      "options": [
        "badly",
        "worse",
        "worst",
        "bad"
      ],
      "answer": "worst",
      "explanation": "यहाँ 'written' क्रिया (Verb) की रीत दर्शावता adverb 'badly' का Superlative form 'worst' प्रयोग होता है. (badly - worse - worst). पूरा वाक्य का अर्थ है 'अत्यार सुधी वांचेलुं सौसे खराब लिखा हुआ पुस्तक'."
    },
    {
      "question": "His house is twice as ______ as mine.",
      "options": [
        "big",
        "bigger",
        "biggest",
        "so big"
      ],
      "answer": "big",
      "explanation": "'twice as...as', 'three times as...as' जैसी रचनाएँ में भी 'as...as' की जैसे Positive Degree का विशेषण ही प्रयोग होता है."
    },
    {
      "question": "The ______ he gets, the ______ he becomes.",
      "options": [
        "old, weak",
        "older, weaker",
        "oldest, weakest",
        "older, weak"
      ],
      "answer": "older, weaker",
      "explanation": "'The + comparative..., the + comparative...' की रचना कारण-परिणाम दर्शाता है. (जितना वृद्ध होता है, उतना अधिक अशक्त बनता है). 'old' का comparative 'older' और 'weak' का 'weaker' है."
    },
    {
      "question": "Very few countries are as ______ as Japan.",
      "options": [
        "developed",
        "more developed",
        "most developed",
        "as developed"
      ],
      "answer": "developed",
      "explanation": "'Very few' से शुरू होने वाले वाक्य में भी 'as...as' की बीच Positive Degree का विशेषण 'developed' आता है. यह वाक्य दर्शाता है या जापान विश्वके सौसे विकसित देशो में का एक है."
    },
    {
      "question": "This is a ______ issue than we initially perceived.",
      "options": [
        "far more complex",
        "far most complex",
        "far complexer",
        "much complex"
      ],
      "answer": "far more complex",
      "explanation": "'complex' यह लांबो शब्द है, इसलिए उसका comparative 'more complex' होता. उसका पर जोर देने के लिए आगे 'far' मुकवा में आया है."
    }
  ],
  "test-17": [
    {
      "question": "He is senior ______ me by two years.",
      "options": [
        "than",
        "to",
        "from",
        "of"
      ],
      "answer": "to",
      "explanation": "'senior', 'junior', 'superior', 'inferior', 'prior' जैसे लेटिन मूलके विशेषणो के बाद तुलना करवा के लिए 'than' को बदले 'to' का प्रयोग होता है."
    },
    {
      "question": "This hotel is preferable ______ that one.",
      "options": [
        "than",
        "to",
        "from",
        "over"
      ],
      "answer": "to",
      "explanation": "'preferable' शब्द के बाद भी तुलना के लिए 'than' को बदले 'to' का प्रयोग होता है. उसका अर्थ 'अधिक पसंद करवा उचित' होता है."
    },
    {
      "question": "The ______ you climb, the colder it gets.",
      "options": [
        "high",
        "higher",
        "highest",
        "more high"
      ],
      "answer": "higher",
      "explanation": "'The + comparative..., the + comparative...' की रचना कारण-परिणाम दर्शाता है. यहाँ 'The higher you climb...' (जोटलुं ऊंचे आप चढो...) यह सही प्रयोग है."
    },
    {
      "question": "She is not only the tallest but also the ______ student in the class.",
      "options": [
        "strong",
        "stronger",
        "strongest",
        "more strong"
      ],
      "answer": "strongest",
      "explanation": "जब 'not only...but also' से दो विशेषणो जोडाए हुए हो और पहेलुं विशेषण superlative degree में हो, तो दूसरा विशेषण भी superlative degree में ही आता है."
    },
    {
      "question": "This material is ______ to that one in quality.",
      "options": [
        "inferior",
        "more inferior",
        "most inferior",
        "less inferior"
      ],
      "answer": "inferior",
      "explanation": "'inferior' शब्द वह खुद ही comparative अर्थ (अधिक उतरती कक्षा का) धरावे है. उसके आगे 'more' नहीं लागतुं और उसके बाद 'to' प्रयोग होता है."
    },
    {
      "question": "Of the two plans, this one is the ______.",
      "options": [
        "practical",
        "more practical",
        "most practical",
        "the more practical"
      ],
      "answer": "the more practical",
      "explanation": "जब केवल दो वस्तुओ (यहाँ दो प्लान)  में से एक को अधिक अच्छा बताने का हो, तब 'the' के साथ comparative degree का प्रयोग होता है."
    },
    {
      "question": "This building is older than ______ building in this area.",
      "options": [
        "any",
        "any other",
        "all other",
        "every"
      ],
      "answer": "any other",
      "explanation": "जब कोई एक वस्तु की तुलना वह ही समूह की बीजी सब वस्तुओ के साथ होती हो, तब comparative degree में 'than any other' प्रयोग होता है, जोसे वह वस्तु को खुद समूह में से बाकात राखी सकता."
    },
    {
      "question": "I have read the ______ five chapters of this book.",
      "options": [
        "first",
        "former",
        "foremost",
        "five first"
      ],
      "answer": "first",
      "explanation": "क्रम दर्शाने के लिए Ordinal numbers (first, second, third...) का प्रयोग होता है. Cardinal numbers (one, two, three...) के बाद आता है. इसलिए 'the first five chapters' सही है."
    },
    {
      "question": "The ______ you are, the ______ you will understand.",
      "options": [
        "attentive, better",
        "more attentive, better",
        "most attentive, best",
        "attentive, good"
      ],
      "answer": "more attentive, better",
      "explanation": "'The + comparative..., the + comparative...' की रचना यहाँ लागु पडे है. 'attentive' का comparative 'more attentive' और 'good' का comparative 'better' है."
    },
    {
      "question": "Her knowledge of the subject is very ______.",
      "options": [
        "limited",
        "more limited",
        "most limited",
        "less limited"
      ],
      "answer": "limited",
      "explanation": "इस वाक्य में कोई तुलना करने में नहीं आई. उसकेवल उसका ज्ञान की स्थिति बारे में एक हकीकत जणावे है. इसलिए, विशेषण का मूल रूप (positive degree) 'limited' प्रयोग होगा."
    }
  ],
  "test-18": [
    {
      "question": "This is a ______ problem than the previous one.",
      "options": [
        "major",
        "more major",
        "majorly",
        "most major"
      ],
      "answer": "major",
      "explanation": "'major', 'minor', 'exterior', 'interior' जैसे कुछ विशेषणो का प्रयोग केवल positive degree में ही होता है. उनकी comparative या superlative degree बनती नहीं. हालांकि, संदर्भ तुलना का होने के कारण बहुत लोगों 'bigger' (या) 'more significant' जैसे शब्दो वापरवा का पसंद करता है, परंतु दियह गयह विकल्पो में 'major' सौसे उचित है."
    },
    {
      "question": "This diamond is ______.",
      "options": [
        "unique",
        "more unique",
        "most unique",
        "very unique"
      ],
      "answer": "unique",
      "explanation": "'unique', 'perfect', 'complete', 'extreme', 'universal' जैसे विशेषणो वह खुद ही अंतिम (absolute) अर्थ धरावे है. इसलिए, उनकी comparative या superlative degree ('more unique', 'most unique') बनती नहीं. वह 'अजोड' है, 'अधिक अजोड' न होई शया."
    },
    {
      "question": "Her performance was ______ of all.",
      "options": [
        "good",
        "better",
        "the best",
        "best"
      ],
      "answer": "the best",
      "explanation": "सभी में सर्वसबसे सुंदर बताने के लिए superlative degree प्रयोग होता है. Superlative degree ('best') की आगे हमेशा 'the' आर्टिकल आता है."
    },
    {
      "question": "He is ______ than his reputation suggests.",
      "options": [
        "a lot more generous",
        "many more generous",
        "much generous",
        "very generous"
      ],
      "answer": "a lot more generous",
      "explanation": "'generous' लांबो शब्द होने के कारण उसका comparative 'more generous' होता. उसका पर जोर देने के लिए आगे 'a lot', 'much' (या) 'far'  का प्रयोग किया जा सकता है."
    },
    {
      "question": "The ______ news is that the project is approved.",
      "options": [
        "late",
        "later",
        "latest",
        "last"
      ],
      "answer": "latest",
      "explanation": "'Latest'  का अर्थ 'सौसे ताजा' (या) 'हालके' समैंचार होता है. 'Last'  का अर्थ 'हैल्ला' होता है. यहाँ ताजा समैंचार की बात है."
    },
    {
      "question": "She is ______ of the four sisters.",
      "options": [
        "the youngest",
        "the younger",
        "younger",
        "youngest"
      ],
      "answer": "the youngest",
      "explanation": "जब दो की बजाय अधिक (यहाँ चार) व्यक्तिओ की तुलना हो, तब superlative degree ('youngest') और उसके आगे 'the' का प्रयोग होता है."
    },
    {
      "question": "The more you earn, the ______ you want.",
      "options": [
        "more",
        "most",
        "much",
        "many"
      ],
      "answer": "more",
      "explanation": "'The + comparative..., the + comparative...' की रचना अनुसार, 'The more you earn, the more you want' (जोटलुं अधिक आप कमैंओ हो, वहटलुं अधिक आप इच्हो हो) यह सही वाक्य है."
    },
    {
      "question": "Your dress is similar ______ mine.",
      "options": [
        "than",
        "to",
        "as",
        "from"
      ],
      "answer": "to",
      "explanation": "'similar' विशेषण के बाद तुलना दर्शाने के लिए 'to' preposition का प्रयोग होता है, 'than'  का नहीं."
    },
    {
      "question": "He is ______ than sorry for his mistake.",
      "options": [
        "more angry",
        "angrier",
        "angriest",
        "angrily"
      ],
      "answer": "more angry",
      "explanation": "जब एक ही व्यक्तिके दो भावो या गुणो की तुलना होता ('angry' और 'sorry'), तब '-er' वापरवा को बदले 'more' का प्रयोग होता है, भले ही विशेषण एक सिलेबल का हो."
    },
    {
      "question": "This is by far the ______ movie I have ever seen.",
      "options": [
        "entertaining",
        "more entertaining",
        "most entertaining",
        "entertaininger"
      ],
      "answer": "most entertaining",
      "explanation": "'by far'  का प्रयोग superlative degree ('most entertaining') पर जोर रख के लिए के लिए होता है और वह वाक्य को अधिक जोर देकर बनाता है."
    }
  ],
  "test-19": [
    {
      "question": "This logic is ______.",
      "options": [
        "flawless",
        "more flawless",
        "most flawless",
        "very flawless"
      ],
      "answer": "flawless",
      "explanation": "'flawless' (दोषरहित), 'perfect', 'complete' जैसे विशेषणो absolute (अंतिम) अर्थ धरावे है. उनकी comparative या superlative degree हुई शकती नहीं, क्योंकि कोई वस्तु 'अधिक दोषरहित' न होई शया."
    },
    {
      "question": "She is ______ to me, so I must respect her.",
      "options": [
        "senior",
        "more senior",
        "most senior",
        "seniormost"
      ],
      "answer": "senior",
      "explanation": "'senior' यह लेटिन विशेषण है जो वह खुद ही तुलकेत्मक अर्थ धरावे है. उसके बाद 'to' प्रयोग होता है. 'more senior' गलत प्रयोग है. 'seniormost'  का प्रयोग superlative के रूप में होता है, भी यहाँ दो व्यक्तिओ की तुलना है."
    },
    {
      "question": "The two brothers are not ______ different in their opinions.",
      "options": [
        "much",
        "many",
        "very",
        "more"
      ],
      "answer": "very",
      "explanation": "'different' यह positive degree का विशेषण है. उसकी तीव्रता बताने के लिए 'very' का प्रयोग होता है. 'much'  का प्रयोग comparative degree के साथ होता है."
    },
    {
      "question": "He has ______ experience than his colleague.",
      "options": [
        "much",
        "more",
        "most",
        "many"
      ],
      "answer": "more",
      "explanation": "'Experience' को uncountable noun के रूप में गणवा में आता है. 'much' का comparative form 'more' है. यहाँ दो व्यक्तिों के अनुभव की तुलना है."
    },
    {
      "question": "This discussion is not necessary. Let's talk about something ______.",
      "options": [
        "farther",
        "further",
        "farthest",
        "furthest"
      ],
      "answer": "further",
      "explanation": "'further'  का अर्थ 'आगे' (या) 'वृद्धि का' होता है, जो चर्चा या बातचीतके संदर्भ में प्रयोग होता है. 'farther' भौतिक अंतर के लिए प्रयोग होता है. यहाँ 'let's not talk about it any further' (चालो उसका पर अधिक बात न करते हैं) जैसा भाव है."
    },
    {
      "question": "His ______ concern is the health of his family.",
      "options": [
        "foremost",
        "first",
        "former",
        "main"
      ],
      "answer": "foremost",
      "explanation": "'Foremost'  का अर्थ 'सौसे मुख्य' (या) 'सौसे महत्व का' होता है. वह superlative जैसा भाव धरावे है. यहाँ उसकी मुख्य चिंता परिवार का स्वास्थ्य है."
    },
    {
      "question": "The ______ you are, the ______ you think.",
      "options": [
        "quieter, clearly",
        "quiet, clear",
        "quieter, more clearly",
        "quietest, most clearly"
      ],
      "answer": "quieter, more clearly",
      "explanation": "'The + comparative..., the + comparative...' की रचना है. यहाँ 'quiet' का comparative 'quieter' और adverb 'clearly' का comparative 'more clearly' है. (जोटला अधिक शांत थशो, वहटलुं अधिक स्पष्टभीे विचारी शकशो)."
    },
    {
      "question": "This decision is ______ to the previous one.",
      "options": [
        "prior than",
        "prior to",
        "prior from",
        "more prior to"
      ],
      "answer": "prior to",
      "explanation": "'prior' (पहले का) यह लेटिन विशेषण है. उसके बाद तुलना के लिए 'than' को बदले 'to' का प्रयोग होता है."
    },
    {
      "question": "This building is circular in shape. It cannot be ______.",
      "options": [
        "more circular",
        "most circular",
        "very circular",
        "circular"
      ],
      "answer": "circular",
      "explanation": "'circular', 'round', 'square' जैसे आकार दर्शावता विशेषणो absolute होता है. उनकी comparative या superlative degree न बनता, क्योंकि कोई वस्तु 'अधिक गोल' न होई शया."
    },
    {
      "question": "Of the two evils, choose the ______.",
      "options": [
        "less",
        "least",
        "lesser",
        "little"
      ],
      "answer": "lesser",
      "explanation": "'Lesser'  का अर्थ 'कम महत्व का' (या) 'बे  में से कम खराब' होता है. यह कहेवत है 'choose the lesser of two evils', जो का अर्थ है या दो खराब विकल्पो में से ओहो खराब विकल्प पसंद करो."
    }
  ],
  "test-20": [
    {
      "question": "Your need is ______ than mine.",
      "options": [
        "great",
        "greater",
        "greatest",
        "more great"
      ],
      "answer": "greater",
      "explanation": "यहाँ दो व्यक्तिओ की जरूरियात की तीव्रता की तुलना है. 'great' एक सिलेबल का शब्द है, इसलिए comparative degree 'greater' बनशे."
    },
    {
      "question": "He is the ______ person for this job.",
      "options": [
        "perfect",
        "more perfect",
        "most perfect",
        "very perfect"
      ],
      "answer": "perfect",
      "explanation": "'perfect' (संपूर्ण) यह absolute विशेषण है. कोई व्यक्ति 'अधिक संपूर्ण' न होई शया. इसलिए, उसकी comparative या superlative degree बनती नहीं."
    },
    {
      "question": "The ______ you go, the ______ the view becomes.",
      "options": [
        "farther, better",
        "further, better",
        "farthest, best",
        "far, good"
      ],
      "answer": "farther, better",
      "explanation": "'The + comparative..., the + comparative...' की रचना है. यहाँ भौतिक अंतर की बात है, इसलिए 'far' का comparative 'farther' प्रयोग होगा. 'good' का comparative 'better' है."
    },
    {
      "question": "He is my ______ brother.",
      "options": [
        "old",
        "older",
        "elder",
        "eldest"
      ],
      "answer": "elder",
      "explanation": "जब एक ही परिवारके सदस्यों की उंमर की बात हो, तब 'older' को बदले 'elder'  का प्रयोग अधिक उचित माना जाता है. 'elder brother' यानी 'मोटो भाई'."
    },
    {
      "question": "This is the ______ copy of the document.",
      "options": [
        "original",
        "more original",
        "most original",
        "very original"
      ],
      "answer": "original",
      "explanation": "'original' (मूल) शब्द वह खुद ही एक विशेष स्थिति दर्शाता है. उसकी comparative या superlative degree बनती नहीं."
    },
    {
      "question": "The ______ part of the book was boring.",
      "options": [
        "late",
        "later",
        "latter",
        "latest"
      ],
      "answer": "latter",
      "explanation": "'Latter'  का अर्थ 'पीहै का' (या) 'बे  में से दूसरा' होता है. यहाँ पुस्तकके दो भाग (शुरुआत और अंत)  में से पीहैके भाग की बात है. 'Later' समय दर्शाता है."
    },
    {
      "question": "She is as ______ as ever.",
      "options": [
        "charming",
        "more charming",
        "most charming",
        "charminger"
      ],
      "answer": "charming",
      "explanation": "'as...as' की रचना में हमेशा विशेषण का मूल रूप (positive degree) प्रयोग होता है. 'as charming as ever'  का अर्थ 'हंमेश की जैसे ही यहकर्षक' होता है."
    },
    {
      "question": "This is a matter of ______ importance.",
      "options": [
        "utmost",
        "utter",
        "most",
        "more"
      ],
      "answer": "utmost",
      "explanation": "'Utmost' यह superlative विशेषण है जो का अर्थ 'सौसे अधिक' (या) 'परम' होता है. 'a matter of utmost importance' एक सामान्य मुहावरा है."
    },
    {
      "question": "He gave me ______ advice.",
      "options": [
        "a few",
        "few",
        "a little",
        "the few"
      ],
      "answer": "a little",
      "explanation": "'Advice' यह uncountable noun है. 'a little'  का अर्थ 'थोडीक' (हकारात्मक भाव मैं) होता है. 'a few'  का प्रयोग countable nouns के साथ होता है."
    },
    {
      "question": "The situation is now ______ under control.",
      "options": [
        "more or less",
        "less and more",
        "more and less",
        "most or least"
      ],
      "answer": "more or less",
      "explanation": "'More or less' यह एक मुहावरा है, जो का अर्थ 'लगभग' (या) 'यहशरे' होता है. (The situation is now more or less under control - परिस्थिति अब लगभग काबू में है)."
    }
  ],
  "test-21": [
    {
      "question": "I prefer reading books ______ watching movies.",
      "options": [
        "to",
        "than",
        "over",
        "from"
      ],
      "answer": "to",
      "explanation": "'prefer' क्रिया (Verb) के साथ एक वस्तु की बीजी वस्तु पर चयन उतारवा के लिए 'to' preposition का प्रयोग होता है, 'than'  का नहीं. (I prefer X to Y)."
    },
    {
      "question": "He is ______ his brother in intelligence.",
      "options": [
        "superior than",
        "superior to",
        "more superior to",
        "superior over"
      ],
      "answer": "superior to",
      "explanation": "'superior', 'inferior', 'junior' जैसे लेटिन विशेषणो के बाद 'than' को बदले 'to' प्रयोग होता है और उनकी आगे 'more' लागतुं नहीं."
    },
    {
      "question": "This discussion should go no ______.",
      "options": [
        "farther",
        "further",
        "farthest",
        "furthest"
      ],
      "answer": "further",
      "explanation": "'Further'  का प्रयोग अमूर्त अर्थ में 'अधिक आगे' (moreover, in addition) के लिए होता है, जैसे या चर्चा, विचारणा आदि. 'Farther' भौतिक अंतर दर्शाता है."
    },
    {
      "question": "The ______ you are, the more you have to lose.",
      "options": [
        "rich",
        "richer",
        "richest",
        "more rich"
      ],
      "answer": "richer",
      "explanation": "'The + comparative..., the + comparative...' की रचना कारण-परिणाम दर्शाता है. यहाँ 'The richer you are...' (आप जोटला अधिक धनिक हो...) यह सही प्रयोग है."
    },
    {
      "question": "His ______ brother lives in London.",
      "options": [
        "older",
        "elder",
        "oldest",
        "eldest"
      ],
      "answer": "elder",
      "explanation": "जब एक ही परिवारके सदस्यों की उंमर की बात हो और दो भाईओ में से बड़े भाई की बात हो, तब 'elder' का प्रयोग होता है. 'older'  का प्रयोग भी हो सकता है, भी 'elder' अधिक सामान्य है."
    },
    {
      "question": "Your performance is good, but it could be even ______.",
      "options": [
        "good",
        "better",
        "best",
        "well"
      ],
      "answer": "better",
      "explanation": "'even' शब्द का प्रयोग comparative degree ('better') पर जोर रख के लिए के लिए होता है. वाक्य का अर्थ है या आपका प्रदर्शन अच्छा है, भी वह 'हजी अधिक अच्छा' हो सकता है."
    },
    {
      "question": "He is ______ stronger than his opponent.",
      "options": [
        "many",
        "much",
        "very",
        "more"
      ],
      "answer": "much",
      "explanation": "Comparative degree ('stronger') की तीव्रता वधारवा के लिए उसके आगे 'much', 'far', 'a lot' जैसे शब्दोका प्रयोग होता है. 'very'  का प्रयोग positive degree के साथ होता है."
    },
    {
      "question": "This car is ______ as the other one.",
      "options": [
        "three times as expensive",
        "three times expensive",
        "three times more expensive",
        "thrice expensive"
      ],
      "answer": "three times as expensive",
      "explanation": "जब गुणांक (twice, three times)  का प्रयोग होता, तब '...as + adjective + as...' की रचना प्रयोग होता है. इसलिए 'three times as expensive as' सही प्रयोग है."
    },
    {
      "question": "Among the politicians, he is the ______.",
      "options": [
        "less popular",
        "least popular",
        "lesser popular",
        "little popular"
      ],
      "answer": "least popular",
      "explanation": "सभी राजकारणीओ (बे की बजाय अधिक)  में से एक को 'सौसे ओहो' लोकप्रिय बताने के लिए superlative degree 'least popular' का प्रयोग होता है."
    },
    {
      "question": "The ______ chapter of this story is not yet written.",
      "options": [
        "late",
        "later",
        "latest",
        "last"
      ],
      "answer": "last",
      "explanation": "'Last'  का अर्थ 'अंतिम' (या) 'क्रम में हैल्लुं' होता है. यहाँ वार्ताके अंतिम प्रकरण की बात है. 'Latest'  का अर्थ 'सौसे नवुं' होता है."
    }
  ],
  "test-22": [
    {
      "question": "The Taj Mahal is ______ than any other monument in India.",
      "options": [
        "beautiful",
        "more beautiful",
        "most beautiful",
        "the most beautiful"
      ],
      "answer": "more beautiful",
      "explanation": "'than any other'  का प्रयोग comparative degree के साथ होता है, जो दर्शाता है या ताजमहेल जोरत की अन्य कोई भी इमैंरत की बजाय अधिक सुंदर है."
    },
    {
      "question": "This is the very ______ model available in the market.",
      "options": [
        "late",
        "later",
        "latest",
        "last"
      ],
      "answer": "latest",
      "explanation": "'very' शब्द superlative degree ('latest') पर जोर रख के लिए के लिए प्रयोग होताो है. 'the very latest'  का अर्थ 'एकदम नवुं' होता है."
    },
    {
      "question": "He is ______ than you think.",
      "options": [
        "much cleverer",
        "many cleverer",
        "very cleverer",
        "much clever"
      ],
      "answer": "much cleverer",
      "explanation": "Comparative degree ('cleverer') पर जोर रख के लिए के लिए 'much' का प्रयोग होता है. 'many'  का प्रयोग countable nouns के साथ और 'very'  का प्रयोग positive degree के साथ होता है."
    },
    {
      "question": "Of the two suggestions, the ______ is better.",
      "options": [
        "late",
        "later",
        "latter",
        "last"
      ],
      "answer": "latter",
      "explanation": "'Latter'  का अर्थ 'बे  में से दूसरा' (या) 'पीहै का' होता है. यहाँ दो सूच का में से दूसरों सूचन की बात है."
    },
    {
      "question": "This circle is ______ than that one.",
      "options": [
        "more perfect",
        "perfect",
        "bigger",
        "most perfect"
      ],
      "answer": "bigger",
      "explanation": "'perfect', 'circular' जैसे absolute विशेषणो की comparative degree बनती नहीं. इसलिए, 'more perfect' गलत है. यहाँ दो वर्तुलोके कद की तुलना करवा 'bigger'  का प्रयोग हो सकता है, जो वाक्य को तार्किक बनाता है."
    },
    {
      "question": "She is ______ to none in her field.",
      "options": [
        "second",
        "secondary",
        "the second",
        "a second"
      ],
      "answer": "second",
      "explanation": "'Second to none' यह एक मुहावरा है, जो का अर्थ 'सर्वसबसे सुंदर' (या) 'जोकेसे चडियातुं कोई नहीं' ऐसा होता है. वह superlative degree  का भाव दर्शाता है."
    },
    {
      "question": "I have ______ interest in politics than he does.",
      "options": [
        "little",
        "less",
        "least",
        "a little"
      ],
      "answer": "less",
      "explanation": "'Interest' यह uncountable noun है. 'little' का comparative form 'less' है. यहाँ दो व्यक्तिों के रस की तुलना हो रही है."
    },
    {
      "question": "His ______ remarks were very insightful.",
      "options": [
        "farther",
        "further",
        "farthest",
        "furthest"
      ],
      "answer": "further",
      "explanation": "'Further'  का अर्थ 'वृद्धि की' (या) 'आगे की' होता है. यहाँ उसकी वृद्धि की टिप्भीीओ की बात है. वह भौतिक अंतर नहीं."
    },
    {
      "question": "The ______ you think, the ______ you get confused.",
      "options": [
        "more, more",
        "most, most",
        "much, much",
        "more, most"
      ],
      "answer": "more, more",
      "explanation": "'The + comparative..., the + comparative...' की रचना अनुसार, 'The more you think, the more you get confused' (जोटलुं अधिक आप विचारो हो, वहटला अधिक आप गूंचवाओ हो) यह सही वाक्य है."
    },
    {
      "question": "He is ______ than strong.",
      "options": [
        "taller",
        "more tall",
        "tallest",
        "tall"
      ],
      "answer": "more tall",
      "explanation": "जब एक ही व्यक्तिके दो गुणो की (यहाँ ऊंचाई और शक्ति) तुलना होता, तब विशेषण एक सिलेबल का हो तो भी '-er' को बदले 'more' का प्रयोग होता है. (He is more tall than strong)."
    }
  ],
  "test-23": [
    {
      "question": "This is the ______ of his two novels.",
      "options": [
        "better",
        "best",
        "the better",
        "the best"
      ],
      "answer": "the better",
      "explanation": "जब केवल दो वस्तुओ (यहाँ दो नवलकथाओ)  में से एक को सबसे सुंदर बताने की हो, तब 'the' के साथ comparative degree ('better') का प्रयोग होता है, superlative ('best')  का नहीं."
    },
    {
      "question": "No sooner did he see the police ______ he ran away.",
      "options": [
        "to",
        "than",
        "then",
        "when"
      ],
      "answer": "than",
      "explanation": "'No sooner' से शुरू होने वाले वाक्य में हमेशा उसके साथ 'than' का प्रयोग होता है. यह एक जोडी (pair) है. (No sooner... than...)."
    },
    {
      "question": "He has ______ friends here.",
      "options": [
        "a little",
        "little",
        "a few",
        "the few"
      ],
      "answer": "a few",
      "explanation": "'Friends' यह countable noun है. 'a few'  का अर्थ 'थोडाक' (हकारात्मक अर्थ में) होता है. 'a little'  का प्रयोग uncountable nouns के साथ होता है."
    },
    {
      "question": "This problem is ______ difficult to solve.",
      "options": [
        "very",
        "much",
        "more",
        "too"
      ],
      "answer": "too",
      "explanation": "'too...to' की रचना नकारात्मक अर्थ दर्शाता है. 'too difficult to solve' यानी 'एटलुं बधुं मुश्याल या उयाली न सकता'. 'very difficult' हकारात्मक अर्थ देता है."
    },
    {
      "question": "She is ______ beautiful and intelligent.",
      "options": [
        "both",
        "as",
        "either",
        "not only"
      ],
      "answer": "both",
      "explanation": "इस वाक्य में कोई तुलना नहीं. यहाँ 'both...and...'  का प्रयोग करना दो गुणो (beautiful and intelligent) को जोड़ने गए हैं."
    },
    {
      "question": "The ______ floor of the building is for commercial use.",
      "options": [
        "upper",
        "uppermost",
        "up",
        "higher"
      ],
      "answer": "upper",
      "explanation": "'Upper'  का अर्थ 'उपर का' होता है. 'Uppermost'  का अर्थ 'सौसे उपर का' (superlative) होता है. वाक्य में केवल ऊपर के मैंल की बात है, सौसे ऊपर के मैंल की नहीं."
    },
    {
      "question": "This issue is of ______ importance.",
      "options": [
        "lesser",
        "less",
        "least",
        "little"
      ],
      "answer": "lesser",
      "explanation": "'Lesser'  का अर्थ 'कम महत्व का' होता है और वह 'importance' जैसे abstract noun के साथ प्रयोग होता है. 'less'  का प्रयोग सामान्य रूप से 'than' के साथ होता है."
    },
    {
      "question": "The two friends haven't met since ______.",
      "options": [
        "long",
        "a long time",
        "longer",
        "longest"
      ],
      "answer": "a long time",
      "explanation": "'since long' यह गलत प्रयोग है. सही प्रयोग 'for a long time' (या) 'in a long time' है. यहाँ वाक्य का भाव 'बहुत समयसे' है, इसलिए 'a long time' संदर्भ को पूर्ण करता है."
    },
    {
      "question": "He is ______ as his father.",
      "options": [
        "nearly as tall",
        "nearly tall",
        "nearly taller",
        "as nearly tall"
      ],
      "answer": "nearly as tall",
      "explanation": "'as...as' की रचना में 'nearly' (लगभग) जैसा शब्द 'as' से पहले रखा जाता है. रचना: 'nearly as + adjective + as'. "
    },
    {
      "question": "His ______ son joined the army.",
      "options": [
        "eldest",
        "oldest",
        "elder",
        "older"
      ],
      "answer": "eldest",
      "explanation": "जब एक ही परिवार में दो की बजाय अधिक भाई-बहे का में से सौसे बड़े की बात हो, तब 'eldest' का प्रयोग होता है. 'oldest'  का प्रयोग व्यक्तिओ और वस्तुओ दोनों के लिए हो सकता है."
    }
  ],
  "test-24": [
    {
      "question": "He is junior ______ me in service.",
      "options": [
        "than",
        "to",
        "from",
        "by"
      ],
      "answer": "to",
      "explanation": "'junior', 'senior', 'superior', 'inferior' जैसे लेटिन विशेषणो के बाद तुलना करवा के लिए 'than' को बदले 'to' का प्रयोग होता है."
    },
    {
      "question": "This screen is ______.",
      "options": [
        "perfectly round",
        "more round",
        "most round",
        "rounder"
      ],
      "answer": "perfectly round",
      "explanation": "'round' यह absolute विशेषण है, जो की comparative या superlative degree बनती नहीं. उसकी तीव्रता बताने 'perfectly' जैसे adverb  का प्रयोग हो सकता है."
    },
    {
      "question": "She is ______ of the two candidates.",
      "options": [
        "the most qualified",
        "more qualified",
        "the more qualified",
        "qualified"
      ],
      "answer": "the more qualified",
      "explanation": "जब केवल दो उमेदवारो में से एक को अधिक लायक बताने की हो, तब 'the' के साथ comparative degree ('the more qualified') का प्रयोग होता है."
    },
    {
      "question": "He is ______ known for his honesty.",
      "options": [
        "good",
        "better",
        "best",
        "well"
      ],
      "answer": "best",
      "explanation": "यहाँ 'known' (जाणीता) क्रिया की रीत बताने के लिए adverb प्रयोग होगा. 'well' (adverb) का superlative form 'best' है. 'best-known' एक सामान्य प्रयोग है जो का अर्थ 'सौसे अधिक जाणीता' होता है."
    },
    {
      "question": "The ______ you work now, the ______ you will have to work later.",
      "options": [
        "harder, lesser",
        "harder, less",
        "hard, little",
        "hardest, least"
      ],
      "answer": "harder, less",
      "explanation": "'The + comparative..., the + comparative...' की रचना है. 'hard' का comparative 'harder' और 'little' (work के लिए) का comparative 'less' है."
    },
    {
      "question": "His financial condition is ______ than mine.",
      "options": [
        "bad",
        "worse",
        "worst",
        "badly"
      ],
      "answer": "worse",
      "explanation": "यहाँ दो व्यक्तिओ की यहर्थिक स्थिति की तुलना है. 'bad' यह अनियमित विशेषण है और उसका comparative form 'worse' है."
    },
    {
      "question": "This is an issue of ______ importance and should be addressed immediately.",
      "options": [
        "primary",
        "more primary",
        "most primary",
        "primarily"
      ],
      "answer": "primary",
      "explanation": "'primary' (प्राथमिक) यह absolute विशेषण है. उसकी comparative या superlative degree बनती नहीं. कोई वस्तु 'अधिक प्राथमिक' न होई शया."
    },
    {
      "question": "I find this painting ______ interesting than that one.",
      "options": [
        "far less",
        "far least",
        "much less",
        "very less"
      ],
      "answer": "far less",
      "explanation": "'less interesting' यह comparative degree है. उसका पर जोर देने के लिए 'far' (या) 'much'  का प्रयोग किया जा सकता है. 'far less'  का अर्थ 'बहुत कम रोचक' होता है."
    },
    {
      "question": "This is the ______ point from the city center.",
      "options": [
        "farther",
        "further",
        "farthest",
        "furthest"
      ],
      "answer": "farthest",
      "explanation": "'Farthest' यह 'far' का superlative form है और उसका प्रयोग भौतिक अंतर में 'सौसे दूर का' बताने के लिए होता है. 'Furthest'  का प्रयोग अमूर्त अर्थ में भी होता है, भी अंतर के लिए 'farthest' अधिक प्रचलित है."
    },
    {
      "question": "She is ______ beautiful than her photos suggest.",
      "options": [
        "even more",
        "even most",
        "very more",
        "many more"
      ],
      "answer": "even more",
      "explanation": "'more beautiful' यह comparative degree है. उसका पर जोर रख के लिए के लिए 'even' का प्रयोग होता है. 'even more' यानी 'अभी भी अधिक'."
    }
  ],
  "test-25": [
    {
      "question": "Very few historical figures are as ______ as Gandhi.",
      "options": [
        "influential",
        "more influential",
        "most influential",
        "as influential"
      ],
      "answer": "influential",
      "explanation": "यह वाक्य Positive Degree में है. 'Very few' और 'as...as' की रचना में हमेशा विशेषण का मूल रूप आता है. इसका अर्थ है या गांधीजी सौसे प्रभावशाली व्यक्तिओ मा को एक है."
    },
    {
      "question": "Gandhi is more influential than ______ historical figures.",
      "options": [
        "any other",
        "all other",
        "most other",
        "many"
      ],
      "answer": "most other",
      "explanation": "जब 'Very few' से शुरू होने वाले Positive वाक्य को Comparative में बदलने के लिए में आता है, तब 'than most other' का प्रयोग होता है."
    },
    {
      "question": "Gandhi is one of the ______ historical figures.",
      "options": [
        "influential",
        "more influential",
        "most influential",
        "the most influential"
      ],
      "answer": "most influential",
      "explanation": "जब 'Very few' से शुरू होने वाले Positive वाक्य को Superlative में बदलकरए, तब 'one of the + superlative degree' की रचना प्रयोग होता है."
    },
    {
      "question": "The ______ you are, the ______ you learn.",
      "options": [
        "older, more",
        "old, much",
        "oldest, most",
        "elder, more"
      ],
      "answer": "older, more",
      "explanation": "'The + comparative..., the + comparative...' की रचना है. 'old' का comparative 'older' और 'much' का comparative 'more' है. (जोटला बड़े थाओ, वहटलुं अधिक शीखो)."
    },
    {
      "question": "This film is ______ to the one released last year.",
      "options": [
        "inferior than",
        "inferior to",
        "more inferior to",
        "less inferior than"
      ],
      "answer": "inferior to",
      "explanation": "'inferior' यह लेटिन विशेषण है, जो की के बाद 'to' आता है और उसके आगे 'more' या 'less' नहीं लागतुं क्योंकि वह वह खुद ही तुलकेत्मक है."
    },
    {
      "question": "This is a ______ task than it appears.",
      "options": [
        "considerably harder",
        "considerable harder",
        "considerably hard",
        "very harder"
      ],
      "answer": "considerably harder",
      "explanation": "'harder' यह comparative degree है. उसकी तीव्रता दर्शाने के लिए 'considerably' (खासा एवा प्रमैंण मैं) जैसे adverb का प्रयोग होता है."
    },
    {
      "question": "He is the ______ person to consult for financial advice.",
      "options": [
        "right",
        "righter",
        "rightest",
        "most right"
      ],
      "answer": "right",
      "explanation": "'right', 'wrong' जैसे शब्दो absolute माना जाता है. हालांकि, बोलचाल में 'the right person'  का अर्थ 'सौसे उचित व्यक्ति' होता है. उसकी formal comparative/superlative degree बनती नहीं."
    },
    {
      "question": "The inner meaning of the poem is ______ than the literal one.",
      "options": [
        "profound",
        "more profound",
        "most profound",
        "profounder"
      ],
      "answer": "more profound",
      "explanation": "'profound' (ऊंडुं) यह लांबो शब्द है. यहाँ दो अर्थो (यहंतरिक और शाब्दिक) की तुलना करवा 'more profound' प्रयोग होगा."
    },
    {
      "question": "His argument was ______ of all.",
      "options": [
        "the most logical",
        "the more logical",
        "most logical",
        "logical"
      ],
      "answer": "the most logical",
      "explanation": "सब दलीलो में एक को सर्वसबसे सुंदर बताने superlative degree प्रयोग होता है. 'logical' लांबो शब्द होने के कारण 'most logical' और उसके आगे 'the' यहवशे."
    },
    {
      "question": "She spoke with ______ confidence after the training.",
      "options": [
        "far greater",
        "far great",
        "many greater",
        "very greater"
      ],
      "answer": "far greater",
      "explanation": "यहाँ तुलना गर्भित है (तालीम पहले और के बाद). 'greater confidence' यह comparative phrase है और उसका पर जोर देने 'far'  का प्रयोग थयो है."
    }
  ],
  "test-26": [
    {
      "question": "He is ______ than his brother.",
      "options": [
        "less ambitious",
        "least ambitious",
        "lesser ambitious",
        "little ambitious"
      ],
      "answer": "less ambitious",
      "explanation": "'less'  का प्रयोग लंबे विशेषणो के साथ 'कम' होना का तुलकेत्मक भाव दर्शाने के लिए होता है. यहाँ दो भाईओ की तुलना है."
    },
    {
      "question": "This is the ______ price I can offer.",
      "options": [
        "low",
        "lower",
        "lowest",
        "least"
      ],
      "answer": "lowest",
      "explanation": "यहाँ किंमत को 'सौसे कम' बताने गए है, जो superlative degree है. 'low' का superlative 'lowest' है. 'least' यह 'little' का superlative है और जथ्था के लिए प्रयोग होता है."
    },
    {
      "question": "The ______ part of the film was shot in Switzerland.",
      "options": [
        "beautiful",
        "more beautiful",
        "most beautiful",
        "beautifulest"
      ],
      "answer": "most beautiful",
      "explanation": "यह वाक्य फिल्मके एक भाग को दूसरों सभी भागो की बजाय सौसे अधिक सुंदर बतावे है, इसलिए superlative degree 'most beautiful' का प्रयोग होगा."
    },
    {
      "question": "He works ______ now than he used to.",
      "options": [
        "harder",
        "more hard",
        "hard",
        "hardest"
      ],
      "answer": "harder",
      "explanation": "यहाँ व्यक्ति की अत्यार की और भूतकाल की मेहनत की तुलना है. 'hard' शब्द adverb और adjective दोनों के रूप में प्रयोग होता है, और उसका comparative 'harder' है."
    },
    {
      "question": "This is the ______ known fact about the universe.",
      "options": [
        "little",
        "less",
        "least",
        "lesser"
      ],
      "answer": "least",
      "explanation": "यहाँ adverb 'little' का superlative form 'least' प्रयोग होता है. 'least-known'  का अर्थ 'सौसे कम जाणीतुं' होता है."
    },
    {
      "question": "The patient is ______ today.",
      "options": [
        "no better",
        "not better",
        "no good",
        "not good"
      ],
      "answer": "no better",
      "explanation": "'no better' यह एक सामान्य प्रयोग है जो का अर्थ 'जरा भी सुधारो नहीं' होता है. वह 'not any better' जैसा ही भाव दर्शाता है."
    },
    {
      "question": "Of the two players, he is ______.",
      "options": [
        "the more skilled",
        "the most skilled",
        "more skilled",
        "most skilled"
      ],
      "answer": "the more skilled",
      "explanation": "जब केवल दो खिलाड़ीओ में से एक को अधिक कुशल बताने का हो, तब 'the' के साथ comparative degree ('the more skilled') का प्रयोग होता है."
    },
    {
      "question": "The ______ you are, the more responsibilities you have.",
      "options": [
        "senior",
        "more senior",
        "the more senior",
        "the most senior"
      ],
      "answer": "the more senior",
      "explanation": "'The + comparative..., the + comparative...' की रचना है. हालांकि 'senior' लेटिन विशेषण है, यह खास रचसंज्ञाां 'the more senior'  का प्रयोग स्वीकार्य है."
    },
    {
      "question": "The project deadline is ______ to this meeting.",
      "options": [
        "prior",
        "prior than",
        "prior to",
        "more prior"
      ],
      "answer": "prior",
      "explanation": "'prior to' यह prepositional phrase है जो का अर्थ ' से पहले' होता है. यहाँ 'is prior to' एम कज सकता. 'prior' वह खुद ही तुलकेत्मक भाव धरावे है."
    },
    {
      "question": "This is a ______ example of his work.",
      "options": [
        "prime",
        "primer",
        "primest",
        "most prime"
      ],
      "answer": "prime",
      "explanation": "'prime' (मुख्य, उत्तम) यह absolute विशेषण है. उसकी comparative या superlative degree बनती नहीं. 'a prime example' यह 'एक उत्तम उदाहरण' दर्शाता है."
    }
  ],
  "test-27": [
    {
      "question": "He is ______ his father.",
      "options": [
        "as tall as",
        "as taller as",
        "so tall as",
        "as tall than"
      ],
      "answer": "as tall as",
      "explanation": "समानता दर्शाने के लिए 'as + positive degree + as' की रचना प्रयोग होता है. 'so...as'  का प्रयोग सामान्य रूप से नकारात्मक वाक्यों में होता है."
    },
    {
      "question": "This problem is ______ than it looks.",
      "options": [
        "trickier",
        "more tricky",
        "trickiest",
        "most tricky"
      ],
      "answer": "trickier",
      "explanation": "विशेषण 'tricky' के अंदर 'y' है और उससे पहले व्यंजन है. Comparative degree बनाने के लिए 'y'  का 'i' करना '-er' लगाडवा में आता है."
    },
    {
      "question": "She is by far the ______ candidate for the position.",
      "options": [
        "suitable",
        "more suitable",
        "most suitable",
        "suitabler"
      ],
      "answer": "most suitable",
      "explanation": "'by far'  का प्रयोग superlative degree पर जोर देने के लिए होता है. 'suitable' लांबो शब्द होने के कारण 'most' प्रयोग होगा."
    },
    {
      "question": "The ______ you invest, the ______ the potential return.",
      "options": [
        "early, great",
        "earlier, greater",
        "earliest, greatest",
        "early, greater"
      ],
      "answer": "earlier, greater",
      "explanation": "'The + comparative..., the + comparative...' की रचना है. 'early' का comparative 'earlier' और 'great' का comparative 'greater' है."
    },
    {
      "question": "This diamond is said to be ______.",
      "options": [
        "priceless",
        "more priceless",
        "most priceless",
        "very priceless"
      ],
      "answer": "priceless",
      "explanation": "'Priceless' (अमूल्य) यह absolute विशेषण है. जो वस्तु की किंमत यहंकी न सकता वह 'अधिक अमूल्य' न होई शया. इसलिए उसकी comparative/superlative degree बनती नहीं."
    },
    {
      "question": "He arrived ______ than expected.",
      "options": [
        "much later",
        "many later",
        "very later",
        "much late"
      ],
      "answer": "much later",
      "explanation": "'later' यह comparative degree है. उसका पर जोर रख के लिए के लिए 'much' का प्रयोग होता है. 'much later' यानी 'बहुत मोडा'."
    },
    {
      "question": "His health is ______ better now.",
      "options": [
        "considerably",
        "considerable",
        "more considerably",
        "most considerable"
      ],
      "answer": "considerably",
      "explanation": "'better' यह comparative degree है. उसकी तीव्रता दर्शाने के लिए 'considerably' (खासा एवा प्रमैंण मैं) जैसे adverb का प्रयोग होता है."
    },
    {
      "question": "This is the ______ version of the software.",
      "options": [
        "ultimate",
        "more ultimate",
        "most ultimate",
        "very ultimate"
      ],
      "answer": "ultimate",
      "explanation": "'Ultimate' (अंतिम, सर्वोच्च) यह absolute विशेषण है. उसकी comparative या superlative degree बनती नहीं."
    },
    {
      "question": "He has ______ to do with this matter.",
      "options": [
        "nothing",
        "anything",
        "something",
        "less"
      ],
      "answer": "nothing",
      "explanation": "यह वाक्य डिग्री ओफ कम्पेरिझन का नहीं. 'have nothing to do with' यह एक मुहावरा है जो का अर्थ 'कोई लेना-देना न होवी' होता है."
    },
    {
      "question": "The story was ______ than the title suggested.",
      "options": [
        "deeper",
        "more deep",
        "deepest",
        "most deep"
      ],
      "answer": "deeper",
      "explanation": "'deep' यह एक सिलेबल का शब्द है. उसका comparative form 'deeper' है. हालांकि 'more deep' भी अमुक संदर्भ में स्वीकार्य है, भी 'deeper' अधिक सामान्य और उचित है."
    }
  ],
  "test-28": [
    {
      "question": "This is the ______ solution possible.",
      "options": [
        "bad",
        "worse",
        "worst",
        "least good"
      ],
      "answer": "worst",
      "explanation": "'bad' का superlative 'worst' है. यहाँ उयाल को 'सौसे खराब शक्य' गणावायो है, जो superlative degree  का प्रयोग सूचित करता है."
    },
    {
      "question": "The ______ we get, the more we understand life.",
      "options": [
        "older",
        "elder",
        "oldest",
        "eldest"
      ],
      "answer": "older",
      "explanation": "'The + comparative..., the + comparative...' की रचना है. सामान्य रूप से उंमर वधवा की बात हो तब 'older' प्रयोग होता है. 'elder'  का प्रयोग मुख्यत्वे परिवारके सदस्यों के लिए होता है."
    },
    {
      "question": "His statement is ______ from the truth.",
      "options": [
        "far",
        "farther",
        "further",
        "farthest"
      ],
      "answer": "far",
      "explanation": "इस वाक्य में 'far from the truth' एक मुहावरा है, जो का अर्थ 'सत्यसे तद्दन विपरीत' होता है. यहाँ कोई भौतिक अंतर की तुलना नहीं, इसलिए positive degree 'far' प्रयोग होगा."
    },
    {
      "question": "This is an ______ fact that cannot be denied.",
      "options": [
        "absolute",
        "more absolute",
        "most absolute",
        "very absolute"
      ],
      "answer": "absolute",
      "explanation": "'absolute' (निरपेक्ष) यह वह खुद ही अंतिम अर्थ धरावे है. उसकी comparative या superlative degree बनती नहीं."
    },
    {
      "question": "She is ______ than her colleagues.",
      "options": [
        "productive",
        "more productive",
        "most productive",
        "productiver"
      ],
      "answer": "more productive",
      "explanation": "'productive' यह लंबा विशेषण है. दो या इसलिए अधिक व्यक्तिओ की उत्पादकता की तुलना करने के लिए comparative degree 'more productive' का प्रयोग होता है."
    },
    {
      "question": "He felt ______ after the long journey.",
      "options": [
        "tired",
        "more tired",
        "most tired",
        "very tired"
      ],
      "answer": "very tired",
      "explanation": "इस वाक्य में कोई तुलना नहीं. यहाँ उसकी स्थिति का वर्णन है. 'tired' यह positive degree है और उसकी तीव्रता बताने 'very' प्रयोग होता है."
    },
    {
      "question": "The second half of the movie was ______ than the first.",
      "options": [
        "less predictable",
        "least predictable",
        "lesser predictable",
        "little predictable"
      ],
      "answer": "less predictable",
      "explanation": "'less'  का प्रयोग लंबे विशेषणो के साथ 'कम' होना का तुलकेत्मक भाव दर्शाने के लिए होता है. यहाँ फिल्मके दो भागो की तुलना है."
    },
    {
      "question": "This coffee is ______ strong for me.",
      "options": [
        "too",
        "very",
        "much",
        "so"
      ],
      "answer": "too",
      "explanation": "'too'  का अर्थ 'जरूर की बजाय अधिक' (नकारात्मक भाव मैं) होता है. 'too strong for me' यानी 'मैंरा के लिए अधिक पडती सख्त'. 'very strong'  का अर्थ 'बहुत सख्त' (हकारात्मक या तटस्थ) होता है."
    },
    {
      "question": "She is ______ of the twins.",
      "options": [
        "the cleverest",
        "the cleverer",
        "cleverer",
        "cleverest"
      ],
      "answer": "the cleverer",
      "explanation": "जब केवल दो व्यक्तिओ (यहाँ जोडिया)  में से एक को अधिक चडियाती बताने की हो, तब 'the' के साथ comparative degree ('the cleverer') का प्रयोग होता है."
    },
    {
      "question": "His knowledge is not limited ______ one subject.",
      "options": [
        "than",
        "to",
        "from",
        "by"
      ],
      "answer": "to",
      "explanation": "'limited' विशेषण के बाद कोई विशेष क्षेत्र या वस्तु दर्शाने के लिए 'to' preposition का प्रयोग होता है. यह डिग्री ओफ कम्पेरिझन का वाक्य नहीं."
    }
  ],
  "test-29": [
    {
      "question": "The universe is ______ than we can imagine.",
      "options": [
        "vastly more complex",
        "vastly most complex",
        "vastly complexer",
        "very more complex"
      ],
      "answer": "vastly more complex",
      "explanation": "'more complex' यह comparative degree है. उसकी तीव्रता पर जोर रख के लिए के लिए 'vastly' (विशाल प्रमैंण मैं) जैसे adverb का प्रयोग होता है."
    },
    {
      "question": "His ______ achievement was winning the national award.",
      "options": [
        "great",
        "greater",
        "greatest",
        "more great"
      ],
      "answer": "greatest",
      "explanation": "यहाँ उसकी सब सिद्धिओ में राष्ट्रीय पुरस्कार जीतवा को सर्वसबसे सुंदर गणाने में आया है, इसलिए superlative degree 'greatest' प्रयोग होगा."
    },
    {
      "question": "She is ______ than shy.",
      "options": [
        "more reserved",
        "reserver",
        "most reserved",
        "reserved"
      ],
      "answer": "more reserved",
      "explanation": "जब एक ही व्यक्तिके दो गुणो की (reserved और shy) तुलना होता, तब 'more' का प्रयोग होता है, भले ही विशेषण के का हो. यहाँ कह को  मैंगे है या वह शरमैंल होना की बजाय अधिक अंतर्मुखी है."
    },
    {
      "question": "The final decision is ______.",
      "options": [
        "yours",
        "more yours",
        "most yours",
        "of yours"
      ],
      "answer": "yours",
      "explanation": "'yours' यह possessive pronoun है. उसके साथ degree of comparison  का प्रयोग नहीं होता. इस वाक्य में कोई तुलना नहीं."
    },
    {
      "question": "The ______ you go down the ocean, the ______ it becomes.",
      "options": [
        "deep, dark",
        "deeper, darker",
        "deepest, darkest",
        "deeper, dark"
      ],
      "answer": "deeper, darker",
      "explanation": "'The + comparative..., the + comparative...' की रचना है. 'deep' का comparative 'deeper' और 'dark' का comparative 'darker' है. (जोटला ऊंडा जाओ, वहटलुं अधिक अंधारुं होता है)."
    },
    {
      "question": "This piece of art is truly ______.",
      "options": [
        "one of a kind",
        "more one of a kind",
        "most one of a kind",
        "a kind"
      ],
      "answer": "one of a kind",
      "explanation": "'one of a kind' (अद्वितीय, अजोड) यह एक मुहावरा है जो absolute अर्थ धरावे है. उसकी comparative या superlative degree बनती नहीं."
    },
    {
      "question": "His explanation was anything but ______.",
      "options": [
        "clear",
        "clearer",
        "clearest",
        "clearly"
      ],
      "answer": "clear",
      "explanation": "'anything but'  का अर्थ 'जरा भी नहीं' (या) 'से तद्दन विपरीत' होता है. उसके साथ विशेषण का मूल रूप प्रयोग होता है. (His explanation was anything but clear = उसकी समजूती जरा भी स्पष्ट न से)."
    },
    {
      "question": "The company's performance this year is ______ better than last year.",
      "options": [
        "marginally",
        "marginal",
        "more marginally",
        "most marginally"
      ],
      "answer": "marginally",
      "explanation": "'better' यह comparative degree है. 'marginally' (नजीवा प्रमैंण मैं) यह adverb है जो comparative degree की तीव्रता दर्शाने के लिए प्रयोग होता है."
    },
    {
      "question": "He is ______ to his principles.",
      "options": [
        "true",
        "truer",
        "truest",
        "truthful"
      ],
      "answer": "true",
      "explanation": "'true to his principles' यह एक सामान्य प्रयोग है. यहाँ कोई तुलना नहीं, इसलिए positive degree 'true' प्रयोग होगा."
    },
    {
      "question": "The economic situation is ______ than ever before.",
      "options": [
        "unstable",
        "more unstable",
        "most unstable",
        "unstabler"
      ],
      "answer": "more unstable",
      "explanation": "'unstable' यह लांबो शब्द है. यहाँ अत्यार की और भूतकाल की यहर्थिक परिस्थिति की तुलना करवा 'more unstable' का प्रयोग होगा."
    }
  ],
  "test-30": [
    {
      "question": "This knife's edge is ______.",
      "options": [
        "razor-sharp",
        "more razor-sharp",
        "most razor-sharp",
        "sharper than razor"
      ],
      "answer": "razor-sharp",
      "explanation": "'razor-sharp' (अत्यंत तीक्ष्ण) यह संयुक्त विशेषण है जो absolute अर्थ धरावे है. उसकी comparative या superlative degree सामान्य रूप से बनती नहीं."
    },
    {
      "question": "The chances of success are ______ than we had hoped.",
      "options": [
        "slim",
        "slimmer",
        "slimmest",
        "more slim"
      ],
      "answer": "slimmer",
      "explanation": "'slim' (पातलुं, कम) CVC नियम को अनुसरे है, इसलिए comparative degree बकेवती समय 'm' बेवडाय है और '-er' लगता है. यहाँ सफलता की तकिसका तुलना है."
    },
    {
      "question": "He is known to be the ______ man in the town.",
      "options": [
        "wise",
        "wiser",
        "wisest",
        "most wise"
      ],
      "answer": "wisest",
      "explanation": "शहेरके सभी लोगों में एक को सौसे डाह्यो बताने superlative degree प्रयोग होता है. 'wise' शब्द 'e' में पूरा होने के कारण superlative के लिए केवल '-st' जोड़ा जाए है."
    },
    {
      "question": "The view from the top is ______.",
      "options": [
        "breathtaking",
        "more breathtaking",
        "most breathtaking",
        "very breathtaking"
      ],
      "answer": "breathtaking",
      "explanation": "इस वाक्य में कोई तुलना नहीं. 'breathtaking' (अदभूत) यह positive degree का विशेषण है जो द्रश्य का वर्णन करता है. 'very'  का प्रयोग जोर देने थइ शया, भी यहाँ दियह गयह विकल्पो में 'breathtaking' वह खुद ही संपूर्ण है."
    },
    {
      "question": "His work is ______ mine.",
      "options": [
        "in no way superior than",
        "in no way superior to",
        "not superior to",
        "less superior than"
      ],
      "answer": "in no way superior to",
      "explanation": "'superior' के बाद 'to' आता है. 'in no way' यह 'not at all' (जरा भी नहीं) जैसा भाव दर्शाने के लिए प्रयुक्त मुहावरा है. वह वाक्य को अधिक जोर देकर बनाता है."
    },
    {
      "question": "The ______ you are about the details, the ______ mistakes you will make.",
      "options": [
        "careful, few",
        "more careful, fewer",
        "carefuller, less",
        "most careful, fewest"
      ],
      "answer": "more careful, fewer",
      "explanation": "'The + comparative..., the + comparative...' की रचना है. 'careful' का comparative 'more careful' और 'few' (mistakes के लिए) का comparative 'fewer' है."
    },
    {
      "question": "This offer is unique ______ its kind.",
      "options": [
        "in",
        "of",
        "to",
        "for"
      ],
      "answer": "of",
      "explanation": "'unique of its kind' यह एक प्रयोग है जो का अर्थ 'उसका प्रकार का इकाईात्र' होता है. यह डिग्री ओफ कम्पेरिझन का वाक्य नहीं."
    },
    {
      "question": "She is ______ about the results.",
      "options": [
        "as nervous as I am",
        "as nervous as me",
        "nervouser than I",
        "more nervous than me"
      ],
      "answer": "as nervous as I am",
      "explanation": "'as...as' के बाद जो pronoun (सर्वनाम) आता है तो वह subjective case में (I, he, she) होना चाहिए. 'as I' के बाद गर्भित क्रिया (Verb) 'am' है, इसलिए 'as nervous as I am' संपूर्ण और व्याकरण की दृष्टियह सौसे सही वाक्य है."
    },
    {
      "question": "The company's ______ priority is customer satisfaction.",
      "options": [
        "top",
        "topper",
        "topmost",
        "most top"
      ],
      "answer": "topmost",
      "explanation": "'Topmost' यह superlative विशेषण है जो का अर्थ 'सौसे उपर का' (या) 'सौसे महत्व का' होता है. 'Top' भी प्रयोग कर सकते, भी 'topmost' अधिक जोर दर्शाता है."
    },
    {
      "question": "His ideas are ______ different from the mainstream.",
      "options": [
        "radically",
        "radical",
        "more radically",
        "most radically"
      ],
      "answer": "radically",
      "explanation": "'different' यह positive degree का विशेषण है. 'radically' (यहमूल परिवर्तनकारी रूप से) यह adverb है जो दर्शाता है या उसका विचारो याटली हदे अलग है. यहाँ कोई तुलना नहीं."
    }
  ]
};
