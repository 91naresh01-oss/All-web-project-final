import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "He said, 'I am happy.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he was happy.",
        "He said that I was happy.",
        "He says that he is happy.",
        "He said that he is happy."
      ],
      "answer": "He said that he was happy.",
      "explanation": "यह विधान वाक्य है और Reporting Verb भूतकाल में ('said') है, इसलिए Reported Speech  का काल (am) भूतकाल (was) में फेरवाशे. सर्वनाम 'I' बोलकेर (He) अनुसार 'he' में फेरवाशे."
    },
    {
      "question": "She says, 'I will come.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She says that she will come.",
        "She said that she would come.",
        "She says that she would come.",
        "She says I will come."
      ],
      "answer": "She says that she will come.",
      "explanation": "यहाँ Reporting Verb 'says' वर्तमान काल में है, इसलिए Reported Speech के काल में कोई बदलाव थशे नहीं. केवल सर्वनाम 'I' बोलकेर (She) अनुसार 'she' में बदलाशे."
    },
    {
      "question": "They said, 'We play cricket.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "They said that they played cricket.",
        "They said that we play cricket.",
        "They said that they play cricket.",
        "They told that they played cricket."
      ],
      "answer": "They said that they played cricket.",
      "explanation": "Reporting Verb 'said' भूतकाल में होने के कारण, सामान्य वर्तमान काल ('play') सामान्य भूतकाल ('played') में फेरवाशे. सर्वनाम 'We' बोलकेर (They) अनुसार 'they' में बदलाशे."
    },
    {
      "question": "Ram said to Sita, 'You are my friend.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "Ram told Sita that she was his friend.",
        "Ram said to Sita that you were my friend.",
        "Ram told Sita that you are his friend.",
        "Ram asked Sita that she was his friend."
      ],
      "answer": "Ram told Sita that she was his friend.",
      "explanation": "'said to' का 'told' थशे. Reporting Verb भूतकाल में होने के कारण 'are' का 'was' थशे. सर्वनाम 'You' सांभलकेर (Sita) अनुसार 'she' में और 'my' बोलकेर (Ram) अनुसार 'his' में बदलाशे."
    },
    {
      "question": "The teacher said, 'The Earth is round.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher said that the Earth is round.",
        "The teacher said that the Earth was round.",
        "The teacher told that the Earth is round.",
        "The teacher said that the Earth had been round."
      ],
      "answer": "The teacher said that the Earth is round.",
      "explanation": "यह वाक्य सनातन सत्य (Universal Truth) दर्शाता है, इसलिए Reporting Verb भूतकाल में होना फिर भी Reported Speech के काल में कोई बदलाव थशे नहीं."
    },
    {
      "question": "He said, 'I have finished my work.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had finished his work.",
        "He said that I have finished my work.",
        "He said that he has finished his work.",
        "He said that he finished his work."
      ],
      "answer": "He said that he had finished his work.",
      "explanation": "Reporting Verb भूतकाल में है, इसलिए पूर्ण वर्तमान काल ('have finished') पूर्ण भूतकाल ('had finished') में फेरवाशे. 'I' का 'he' और 'my' का 'his' थशे."
    },
    {
      "question": "My father said, 'Honesty is the best policy.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "My father said that honesty is the best policy.",
        "My father said that honesty was the best policy.",
        "My father told that honesty is the best policy.",
        "My father advises that honesty is the best policy."
      ],
      "answer": "My father said that honesty is the best policy.",
      "explanation": "यह वाक्य एक कहेवत (Proverb) है. सनातन सत्य, कहेवतो या वैज्ञानिक नियमोके काल में बदलाव नहीं होता, भले ही Reporting Verb भूतकाल में हो."
    },
    {
      "question": "She said, 'I am not feeling well.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she was not feeling well.",
        "She said that she is not feeling well.",
        "She said that I was not feeling well.",
        "She told that she was not feeling well."
      ],
      "answer": "She said that she was not feeling well.",
      "explanation": "Reporting Verb 'said' भूतकाल में होने के कारण, अपूर्ण वर्तमान काल ('am not feeling') अपूर्ण भूतकाल ('was not feeling') में बदलाशे. 'I' का 'she' थशे."
    },
    {
      "question": "Ravi said, 'I will go to the market.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "Ravi said that he would go to the market.",
        "Ravi said that he will go to the market.",
        "Ravi said that I would go to the market.",
        "Ravi said he will go to the market."
      ],
      "answer": "Ravi said that he would go to the market.",
      "explanation": "Reporting Verb भूतकाल में होने के कारण 'will' का 'would' थशे. सर्वनाम 'I' बोलकेर (Ravi) अनुसार 'he' में बदलाशे."
    },
    {
      "question": "The boy said, 'My mother is cooking.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that his mother was cooking.",
        "The boy said that my mother was cooking.",
        "The boy said that his mother is cooking.",
        "The boy said that her mother was cooking."
      ],
      "answer": "The boy said that his mother was cooking.",
      "explanation": "Reporting Verb 'said' भूतकाल में है, इसलिए 'is cooking' का 'was cooking' थशे. 'My' सर्वनाम बोलकेर (The boy) अनुसार 'his' में फेरवाशे."
    }
  ],
  "test-2": [
    {
      "question": "I said to him, 'You are a good player.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I told him that he was a good player.",
        "I said him that he was a good player.",
        "I told him that you are a good player.",
        "I told him that I was a good player."
      ],
      "answer": "I told him that he was a good player.",
      "explanation": "'said to' का 'told' होता. Reporting Verb भूतकाल में है, इसलिए 'are' का 'was' थशे. 'You' सर्वनाम सांभलकेर (him) अनुसार 'he' में बदलाशे."
    },
    {
      "question": "She said, 'I can sing a song.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she could sing a song.",
        "She said that she can sing a song.",
        "She said that I could sing a song.",
        "She said she will sing a song."
      ],
      "answer": "She said that she could sing a song.",
      "explanation": "Reporting Verb भूतकाल में होने के कारण, सहायकारक क्रिया (Verb) 'can' का भूतकाल का रूप 'could' प्रयोग होगा. 'I' का 'she' थशे."
    },
    {
      "question": "He said, 'I wrote a letter.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had written a letter.",
        "He said that he wrote a letter.",
        "He said that he has written a letter.",
        "He said that I had written a letter."
      ],
      "answer": "He said that he had written a letter.",
      "explanation": "जब Reported Speech सामान्य भूतकाल में ('wrote') हो और Reporting Verb भी भूतकाल में हो, तब Reported Speech पूर्ण भूतकाल ('had written') में बदल जाता है."
    },
    {
      "question": "They said to us, 'We are going to the party.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "They told us that they were going to the party.",
        "They said us that they were going to the party.",
        "They told us that we were going to the party.",
        "They told us that they are going to the party."
      ],
      "answer": "They told us that they were going to the party.",
      "explanation": "'said to' का 'told' होता. 'are going' (अपूर्ण वर्तमान काल) का 'were going' (अपूर्ण भूतकाल) थशे. 'We' सर्वनाम बोलकेर (They) अनुसार 'they' में बदलाशे."
    },
    {
      "question": "The girl said, 'I love my parents.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The girl said that she loved her parents.",
        "The girl said that she loves her parents.",
        "The girl said that I loved my parents.",
        "The girl told that she loved her parents."
      ],
      "answer": "The girl said that she loved her parents.",
      "explanation": "Reporting Verb भूतकाल में होने के कारण सामान्य वर्तमान काल ('love') सामान्य भूतकाल ('loved') में फेरवाशे. 'I' का 'she' और 'my' का 'her' थशे."
    },
    {
      "question": "He says, 'I am reading a book.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He says that he is reading a book.",
        "He says that he was reading a book.",
        "He said that he was reading a book.",
        "He says that I am reading a book."
      ],
      "answer": "He says that he is reading a book.",
      "explanation": "Reporting Verb 'says' वर्तमान काल में है, इसलिए Reported Speech के काल में कोई बदलाव थशे नहीं. केवल 'I' का 'he' में रूपांतर थशे."
    },
    {
      "question": "She said, 'My brother is a doctor.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that her brother was a doctor.",
        "She said that my brother was a doctor.",
        "She said that her brother is a doctor.",
        "She told that her brother was a doctor."
      ],
      "answer": "She said that her brother was a doctor.",
      "explanation": "Reporting Verb भूतकाल में होने के कारण 'is' का 'was' थशे. 'My' सर्वनाम बोलकेर (She) अनुसार 'her' में फेरवाशे."
    },
    {
      "question": "Tom said, 'I may buy a car.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "Tom said that he might buy a car.",
        "Tom said that he may buy a car.",
        "Tom said that I might buy a car.",
        "Tom said that he will buy a car."
      ],
      "answer": "Tom said that he might buy a car.",
      "explanation": "Reporting Verb भूतकाल में होने के कारण, सहायकारक क्रिया (Verb) 'may' का भूतकाल का रूप 'might' प्रयोग होगा. 'I' का 'he' थशे."
    },
    {
      "question": "The students said, 'We want to play.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The students said that they wanted to play.",
        "The students said that we wanted to play.",
        "The students said that they want to play.",
        "The students told that they wanted to play."
      ],
      "answer": "The students said that they wanted to play.",
      "explanation": "Reporting Verb भूतकाल में है, इसलिए 'want' (सामान्य वर्तमान काल) का 'wanted' (सामान्य भूतकाल) थशे. 'We' सर्वनाम बोलकेर (The students) अनुसार 'they' में फेरवाशे."
    },
    {
      "question": "I said to her, 'I know you.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I told her that I knew her.",
        "I told her that I know you.",
        "I told her that you knew me.",
        "I said her that I knew her."
      ],
      "answer": "I told her that I knew her.",
      "explanation": "'said to' का 'told' होता. 'know' का 'knew' थशे. सर्वनाम 'you' सांभलकेर (her) अनुसार 'her' में बदलाशे. 'I' यह बोलकेर है, इसलिए वह 'I' ही रथेशे."
    }
  ],
  "test-3": [
    {
      "question": "The captain said, 'The team played well.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The captain said that the team had played well.",
        "The captain said that the team played well.",
        "The captain said that the team has played well.",
        "The captain told that the team had played well."
      ],
      "answer": "The captain said that the team had played well.",
      "explanation": "जब Reported Speech सामान्य भूतकाल में ('played') हो और Reporting Verb भी भूतकाल में हो, तब Reported Speech पूर्ण भूतकाल ('had played') में बदल जाता है."
    },
    {
      "question": "She said, 'I was writing a letter.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she had been writing a letter.",
        "She said that she was writing a letter.",
        "She said that she wrote a letter.",
        "She said that she has been writing a letter."
      ],
      "answer": "She said that she had been writing a letter.",
      "explanation": "Reporting Verb भूतकाल में है और Reported Speech अपूर्ण भूतकाल में ('was writing') है, इसलिए वह अपूर्ण पूर्ण भूतकाल ('had been writing') में फेरवाशे."
    },
    {
      "question": "He will say, 'I am busy.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He will say that he is busy.",
        "He will say that he was busy.",
        "He would say that he was busy.",
        "He will say that I am busy."
      ],
      "answer": "He will say that he is busy.",
      "explanation": "यहाँ Reporting Verb 'will say' भविष्य काल में है. जब Reporting Verb वर्तमान काल या भविष्य काल में हो, तब Reported Speech के काल में बदलाव नहीं होता."
    },
    {
      "question": "Sita said to me, 'I have seen this movie.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "Sita told me that she had seen that movie.",
        "Sita told me that she has seen this movie.",
        "Sita told me that she had seen this movie.",
        "Sita told me that I had seen that movie."
      ],
      "answer": "Sita told me that she had seen that movie.",
      "explanation": "पूर्ण वर्तमान काल ('have seen') पूर्ण भूतकाल ('had seen') में फेरवाशे. 'this' का 'that' थशे. 'I' का 'she' थशे."
    },
    {
      "question": "He said, 'I must go now.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had to go then.",
        "He said that he must go now.",
        "He said that he had to go now.",
        "He said that he must go then."
      ],
      "answer": "He said that he had to go then.",
      "explanation": "सामान्य रूप से 'must' को 'had to' में बदलने के लिए में आता है जब वह फरज दर्शावे. समयसूचक शब्द 'now' का 'then' होता है."
    },
    {
      "question": "My friend said, 'I am buying a new phone today.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "My friend said that he was buying a new phone that day.",
        "My friend said that he is buying a new phone today.",
        "My friend said that he was buying a new phone today.",
        "My friend said that I was buying a new phone that day."
      ],
      "answer": "My friend said that he was buying a new phone that day.",
      "explanation": "'am buying' का 'was buying' थशे. 'I' का 'he' थशे और समयसूचक शब्द 'today' का 'that day' थशे."
    },
    {
      "question": "She said to her mother, 'I will not repeat this mistake.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She told her mother that she would not repeat that mistake.",
        "She told her mother that she will not repeat this mistake.",
        "She told her mother that she would not repeat this mistake.",
        "She told her mother that I would not repeat that mistake."
      ],
      "answer": "She told her mother that she would not repeat that mistake.",
      "explanation": "'said to' का 'told' होता. 'will not' का 'would not' होता. 'I' का 'she' और 'this' का 'that' होता."
    },
    {
      "question": "The old man said, 'I can't walk fast.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The old man said that he couldn't walk fast.",
        "The old man said that he can't walk fast.",
        "The old man said that I couldn't walk fast.",
        "The old man said he can not walk fast."
      ],
      "answer": "The old man said that he couldn't walk fast.",
      "explanation": "Reporting Verb भूतकाल में होने के कारण 'can't' (can not) का 'couldn't' (could not) थशे. 'I' का 'he' थशे."
    },
    {
      "question": "He said, 'I had already finished the work.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had already finished the work.",
        "He said that he had been already finishing the work.",
        "He said that he finished the work.",
        "He said that he has already finished the work."
      ],
      "answer": "He said that he had already finished the work.",
      "explanation": "जब Reported Speech पहेलेसे ही पूर्ण भूतकाल में ('had finished') हो, तब उसका काल में कोई बदलाव नहीं होता."
    },
    {
      "question": "Priya said, 'I am learning classical music.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "Priya said that she was learning classical music.",
        "Priya said that she is learning classical music.",
        "Priya said that I was learning classical music.",
        "Priya told that she was learning classical music."
      ],
      "answer": "Priya said that she was learning classical music.",
      "explanation": "Reporting Verb भूतकाल में है, इसलिए अपूर्ण वर्तमान काल ('am learning') का अपूर्ण भूतकाल ('was learning') थशे. 'I' का 'she' में रूपांतर थशे."
    }
  ],
  "test-4": [
    {
      "question": "He said to me, 'I will see you tomorrow.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He told me that he would see me the next day.",
        "He told me that he will see me tomorrow.",
        "He told me that he would see you the next day.",
        "He said me that he would see me the next day."
      ],
      "answer": "He told me that he would see me the next day.",
      "explanation": "'said to' का 'told' होता. 'will' का 'would' होता. 'I' बोलकेर (He) अनुसार 'he'  मैं, 'you' सांभलकेर (me) अनुसार 'me' में बदलाशे. 'tomorrow' का 'the next day' होता."
    },
    {
      "question": "She said, 'I saw a movie yesterday.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she had seen a movie the previous day.",
        "She said that she saw a movie yesterday.",
        "She said that she had seen a movie yesterday.",
        "She said that she has seen a movie the previous day."
      ],
      "answer": "She said that she had seen a movie the previous day.",
      "explanation": "सामान्य भूतकाल ('saw') पूर्ण भूतकाल ('had seen') में फेरवाशे. 'yesterday' का 'the previous day' (या) 'the day before' होता."
    },
    {
      "question": "The teacher said to the students, 'I shall teach you a new lesson tomorrow.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher told the students that he/she would teach them a new lesson the next day.",
        "The teacher told the students that I would teach you a new lesson tomorrow.",
        "The teacher told the students that he/she will teach them a new lesson tomorrow.",
        "The teacher told the students that he/she should teach them a new lesson the next day."
      ],
      "answer": "The teacher told the students that he/she would teach them a new lesson the next day.",
      "explanation": "'said to' का 'told' होता. 'shall', जब भविष्य काल दर्शावे, तब 'would' में फेरवाय. 'I' का 'he/she', 'you' का 'them' और 'tomorrow' का 'the next day' होता."
    },
    {
      "question": "He said, 'I have been waiting here for a long time.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had been waiting there for a long time.",
        "He said that he has been waiting here for a long time.",
        "He said that he had been waiting here for a long time.",
        "He said that he was waiting there for a long time."
      ],
      "answer": "He said that he had been waiting there for a long time.",
      "explanation": "अपूर्ण पूर्ण वर्तमान काल ('have been waiting') का अपूर्ण पूर्ण भूतकाल ('had been waiting') होता. स्थलसूचक शब्द 'here' का 'there' होता."
    },
    {
      "question": "My sister said to me, 'You have done your work well.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "My sister told me that I had done my work well.",
        "My sister told me that you had done your work well.",
        "My sister told me that I have done my work well.",
        "My sister told me that she had done her work well."
      ],
      "answer": "My sister told me that I had done my work well.",
      "explanation": "'said to' का 'told' होता. 'have done' का 'had done' होता. 'You' सांभलकेर (me) अनुसार 'I' में और 'your' भी 'my' में बदलाशे."
    },
    {
      "question": "The old woman said, 'I am feeling tired now.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The old woman said that she was feeling tired then.",
        "The old woman said that she is feeling tired now.",
        "The old woman said that she was feeling tired now.",
        "The old woman said that I was feeling tired then."
      ],
      "answer": "The old woman said that she was feeling tired then.",
      "explanation": "अपूर्ण वर्तमान काल ('am feeling') का अपूर्ण भूतकाल ('was feeling') थशे. 'I' का 'she' और 'now' का 'then' थशे."
    },
    {
      "question": "He said, 'I must finish this report by evening.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had to finish that report by evening.",
        "He said that he must finish this report by evening.",
        "He said that he had to finish this report by evening.",
        "He said that he would finish that report by evening."
      ],
      "answer": "He said that he had to finish that report by evening.",
      "explanation": "फरज दर्शाने के लिए 'must' का 'had to' होता है. 'this' का 'that' होता है."
    },
    {
      "question": "They said, 'We will be playing a match next week.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "They said that they would be playing a match the following week.",
        "They said that we would be playing a match the next week.",
        "They said that they will be playing a match next week.",
        "They said that they would be playing a match next week."
      ],
      "answer": "They said that they would be playing a match the following week.",
      "explanation": "'will be playing' (अपूर्ण भविष्य काल) का 'would be playing' थशे. 'We' का 'they' और 'next week' का 'the following week' होता."
    },
    {
      "question": "Ketan said to Rina, 'I need your help.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "Ketan told Rina that he needed her help.",
        "Ketan told Rina that I needed your help.",
        "Ketan told Rina that he needs her help.",
        "Ketan asked Rina that he needed her help."
      ],
      "answer": "Ketan told Rina that he needed her help.",
      "explanation": "'said to' का 'told' होता. 'need' का 'needed' होता. 'I' बोलकेर (Ketan) अनुसार 'he' में और 'your' सांभलकेर (Rina) अनुसार 'her' में बदलाशे."
    },
    {
      "question": "She said, 'This is my house.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that that was her house.",
        "She said that this was her house.",
        "She said that that is her house.",
        "She said that this is her house."
      ],
      "answer": "She said that that was her house.",
      "explanation": "जब 'this' समय या स्थल की पासता न बताने वाला हो और वस्तु का निर्देश करतुं हो, तब 'this' का 'that' होता है. 'is' का 'was' और 'my' का 'her' होता."
    }
  ],
  "test-5": [
    {
      "question": "The boy said, 'I have been studying since morning.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that he had been studying since morning.",
        "The boy said that he has been studying since morning.",
        "The boy said that he was studying since morning.",
        "The boy said that I had been studying since morning."
      ],
      "answer": "The boy said that he had been studying since morning.",
      "explanation": "Reporting Verb भूतकाल में है, इसलिए अपूर्ण पूर्ण वर्तमान काल ('have been studying') अपूर्ण पूर्ण भूतकाल ('had been studying') में फेरवाशे. 'I' का 'he' थशे."
    },
    {
      "question": "She said to me, 'I was waiting for you.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She told me that she had been waiting for me.",
        "She told me that she was waiting for me.",
        "She told me that she had been waiting for you.",
        "She told me that I had been waiting for her."
      ],
      "answer": "She told me that she had been waiting for me.",
      "explanation": "अपूर्ण भूतकाल ('was waiting') अपूर्ण पूर्ण भूतकाल ('had been waiting') में बदल जाता है. 'I' का 'she' और 'you' का 'me' थशे."
    },
    {
      "question": "He said, 'I came here yesterday.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had gone there the previous day.",
        "He said that he came here yesterday.",
        "He said that he had come there the previous day.",
        "He said that he had gone there yesterday."
      ],
      "answer": "He said that he had gone there the previous day.",
      "explanation": "सामान्य भूतकाल ('came') पूर्ण भूतकाल ('had gone') में फेरवाशे. 'come' का 'go' होता है क्योंकि बोलवा की जगह बदलाई है. 'here' का 'there' और 'yesterday' का 'the previous day' थशे."
    },
    {
      "question": "The girl said, 'What a beautiful dress it is!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The girl exclaimed that it was a very beautiful dress.",
        "The girl said that what a beautiful dress it was.",
        "The girl exclaimed that it is a very beautiful dress.",
        "The girl asked what a beautiful dress it was."
      ],
      "answer": "The girl exclaimed that it was a very beautiful dress.",
      "explanation": "यह उद्गार वाक्य है. Reporting Verb के रूप में 'exclaimed' प्रयोग होता है. 'what a' या 'how' को बदले 'very' या 'great' प्रयोग होता है और वाक्य को विधान वाक्य में बदलने के लिए में आता है."
    },
    {
      "question": "He said to his friend, 'Please help me.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He requested his friend to help him.",
        "He told his friend to please help him.",
        "He requested his friend to help me.",
        "He asked his friend for help."
      ],
      "answer": "He requested his friend to help him.",
      "explanation": "यह विनम्र आज्ञार्थ वाक्य है. 'said to' का 'requested' थशे. वाक्य 'to' से जोडाशे और 'please'  कीकली जशे. 'me' का 'him' थशे."
    },
    {
      "question": "The teacher said, 'Two and two make four.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher said that two and two make four.",
        "The teacher said that two and two made four.",
        "The teacher said that two and two makes four.",
        "The teacher said that two and two have made four."
      ],
      "answer": "The teacher said that two and two make four.",
      "explanation": "यह एक गाणितिक सत्य है, जो सनातन सत्य जैसा है. इसलिए, Reported Speech के काल में कोई बदलाव थशे नहीं."
    },
    {
      "question": "Anjali said, 'I shall definitely complete my project.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "Anjali said that she would definitely complete her project.",
        "Anjali said that she shall definitely complete her project.",
        "Anjali said that she should definitely complete her project.",
        "Anjali said that I would definitely complete my project."
      ],
      "answer": "Anjali said that she would definitely complete her project.",
      "explanation": "यहाँ 'shall' द्रढ निश्चय बतावे है, जो दूसरों और तीसरा पुरुष के साथ 'will' जैसा अर्थ देता है. इसलिए, उसका 'would' थशे. 'I' का 'she' और 'my' का 'her' थशे."
    },
    {
      "question": "He said, 'I could solve the puzzle.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he could solve the puzzle.",
        "He said that he can solve the puzzle.",
        "He said that he had been able to solve the puzzle.",
        "He said that he might solve the puzzle."
      ],
      "answer": "He said that he could solve the puzzle.",
      "explanation": "जब Reported Speech में 'could', 'would', 'should', 'might' जैसे Modal Auxiliaries हो, तब उसमैं कोई बदलाव नहीं होता."
    },
    {
      "question": "The stranger said to me, 'I belong to this village.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The stranger told me that he belonged to that village.",
        "The stranger told me that he belongs to this village.",
        "The stranger told me that he belonged to this village.",
        "The stranger told me that I belonged to that village."
      ],
      "answer": "The stranger told me that he belonged to that village.",
      "explanation": "'said to' का 'told' होता. 'belong' का 'belonged' होता. 'I' का 'he' और 'this' का 'that' थशे."
    },
    {
      "question": "She said, 'We must respect our elders.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that we must respect our elders.",
        "She said that they must respect their elders.",
        "She said that we had to respect our elders.",
        "She said that they had to respect their elders."
      ],
      "answer": "She said that we must respect our elders.",
      "explanation": "जब 'must' नैतिक फरज या सार्वत्रिक सिद्धांत दर्शावे, तब उसमैं कोई बदलाव नहीं होता. 'we'  का प्रयोग सामान्य रूप से सभी लोगों को लागु पडतो होने के कारण वह बदलाशे नहीं."
    }
  ],
  "test-6": [
    {
      "question": "The teacher said to the boy, 'Why are you late?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher asked the boy why he was late.",
        "The teacher asked the boy that why he was late.",
        "The teacher asked the boy why was he late.",
        "The teacher told the boy why he was late."
      ],
      "answer": "The teacher asked the boy why he was late.",
      "explanation": "यह प्रश्नवाचक वाक्य है, इसलिए 'said to' का 'asked' थशे. संयोजक के रूप में 'why' वह खुद ही प्रयोग होगा. प्रश्नवाचक वाक्य को विधान वाक्य में फेरववुं, यानी 'he' के बाद 'was' यहवशे."
    },
    {
      "question": "He said to me, 'What is your name?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He asked me what my name was.",
        "He asked me what is my name.",
        "He asked me what my name is.",
        "He asked me that what my name was."
      ],
      "answer": "He asked me what my name was.",
      "explanation": "यह प्रश्नवाचक वाक्य होने के कारण 'said to' का 'asked' थशे. 'What' संयोजक के रूप में प्रयोग होगा. वाक्य विधान में फेरवाशे ('my name was') और 'your' का 'my' थशे."
    },
    {
      "question": "She said to them, 'Are you listening to me?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked them if they were listening to her.",
        "She asked them that if they were listening to her.",
        "She asked them are you listening to her.",
        "She asked them if were they listening to her."
      ],
      "answer": "She asked them if they were listening to her.",
      "explanation": "यह सहायकारक क्रिया (Verb)से शुरू होता प्रश्नवाचक वाक्य है, इसलिए संयोजक के रूप में 'if' (या) 'whether' प्रयोग होगा. 'said to' का 'asked' थशे. वाक्य विधान में फेरवाशे. 'are' का 'were', 'you' का 'they', 'me' का 'her' थशे."
    },
    {
      "question": "My father said to me, 'Do not waste your time.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "My father advised me not to waste my time.",
        "My father told me do not waste my time.",
        "My father advised me to not waste my time.",
        "My father forbade me to waste your time."
      ],
      "answer": "My father advised me not to waste my time.",
      "explanation": "यह नकारात्मक आज्ञार्थ वाक्य है. यहाँ भाव सलाह का है, इसलिए 'advised' प्रयोग होता है. वाक्य को 'not to' से जोड़ने में आता है. 'your' का 'my' थशे."
    },
    {
      "question": "He said, 'Let us go for a walk.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He suggested that they should go for a walk.",
        "He proposed to go for a walk.",
        "He said that let us go for a walk.",
        "He requested them to go for a walk."
      ],
      "answer": "He suggested that they should go for a walk.",
      "explanation": "जब 'Let us' से वाक्य शुरू होता और दरखास्त का भाव हो, तब Reporting Verb के रूप में 'suggested' या 'proposed' प्रयोग होता है. वाक्य 'that' से जोडाय है और 'us' का 'they' या 'we' कर 'should' रखा जाता है."
    },
    {
      "question": "She said, 'Alas! I am undone.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed with sorrow that she was undone.",
        "She said with sorrow that she was undone.",
        "She exclaimed that alas she was undone.",
        "She exclaimed sorrowfully she was undone."
      ],
      "answer": "She exclaimed with sorrow that she was undone.",
      "explanation": "यह उद्गार वाक्य है जो दुःख दर्शाता है. 'Alas!' के लिए 'exclaimed with sorrow' प्रयोग होता है. 'am' का 'was' थशे."
    },
    {
      "question": "The captain commanded the soldiers, 'March forward.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The captain commanded the soldiers to march forward.",
        "The captain told the soldiers to march forward.",
        "The captain commanded the soldiers march forward.",
        "The captain commanded the soldiers that they should march forward."
      ],
      "answer": "The captain commanded the soldiers to march forward.",
      "explanation": "यह आज्ञार्थ वाक्य है. Reporting Verb 'commanded' उचित है. वाक्य को 'to' से जोड़ने में आता है."
    },
    {
      "question": "He said to the judge, 'Let me go, sir.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He respectfully requested the judge to let him go.",
        "He requested the judge to let him go.",
        "He told the judge to let him go.",
        "He begged the judge let him go."
      ],
      "answer": "He respectfully requested the judge to let him go.",
      "explanation": "'Let me' वाला वाक्य में विनती का भाव होता है. 'sir' शब्द के लिए 'respectfully' उमेरवुं अधिक उचित है. वाक्य को 'to' से जोड़ने में आता है."
    },
    {
      "question": "I said to the child, 'Did you break the glass?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked the child if he had broken the glass.",
        "I asked the child did he break the glass.",
        "I asked the child if he broke the glass.",
        "I told the child if he had broken the glass."
      ],
      "answer": "I asked the child if he had broken the glass.",
      "explanation": "यह प्रश्नवाचक वाक्य है, जो सहायकारक क्रिया (Verb)से शुरू होता है. संयोजक के रूप में 'if' प्रयोग होगा. Reported Speech सामान्य भूतकाल में ('Did you break') होने के कारण वह पूर्ण भूतकाल ('had broken') में फेरवाशे."
    },
    {
      "question": "She said, 'Hurrah! We have won the match.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed with joy that they had won the match.",
        "She exclaimed with joy that we had won the match.",
        "She said with joy that they had won the match.",
        "She exclaimed that they have won the match."
      ],
      "answer": "She exclaimed with joy that they had won the match.",
      "explanation": "आनंद दर्शाने वाला उद्गार वाक्य है. 'Hurrah!' के लिए 'exclaimed with joy' प्रयोग होता है. 'have won' (पूर्ण वर्तमान काल) का 'had won' (पूर्ण भूतकाल) थशे. 'We' का 'they' थशे."
    }
  ],
  "test-7": [
    {
      "question": "He said, 'Where is my car?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He asked where his car was.",
        "He asked where is his car.",
        "He asked where his car is.",
        "He said where his car was."
      ],
      "answer": "He asked where his car was.",
      "explanation": "यह WH-प्रश्नवाचक वाक्य है. Reporting Verb 'asked' थशे. संयोजक 'where' ही रथेशे. वाक्य को विधान में बदलवह हुयह 'his car' कर्ता (Subject) के बाद क्रिया (Verb) 'was' यहवशे. 'my' का 'his' थशे."
    },
    {
      "question": "She said to her servant, 'Bring me a glass of water.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She ordered her servant to bring her a glass of water.",
        "She told her servant to bring me a glass of water.",
        "She requested her servant to bring her a glass of water.",
        "She ordered her servant bring her a glass of water."
      ],
      "answer": "She ordered her servant to bring her a glass of water.",
      "explanation": "यह आज्ञार्थ वाक्य है. मैंलिक और  काकर बीचके संबंध में 'ordered' अधिक उचित Reporting Verb है. वाक्य 'to' से जोडाशे. 'me' का 'her' थशे."
    },
    {
      "question": "The boy said, 'I did not go to school yesterday.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that he had not gone to school the previous day.",
        "The boy said that he did not go to school the previous day.",
        "The boy said that he had not gone to school yesterday.",
        "The boy said that he did not go to school yesterday."
      ],
      "answer": "The boy said that he had not gone to school the previous day.",
      "explanation": "Reported speech सामान्य भूतकाल के नकार में है ('did not go'), जो पूर्ण भूतकाल के नकार ('had not gone') में फेरवाशे. 'yesterday' का 'the previous day' थशे."
    },
    {
      "question": "He said, 'May you live long!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He wished that I might live long.",
        "He prayed that I might live long.",
        "He said that I may live long.",
        "He wished that may I live long."
      ],
      "answer": "He wished that I might live long.",
      "explanation": "यह शुभेच्छादर्शक (Optative) वाक्य है. यहाँ Reporting Verb के रूप में 'wished' या 'prayed' प्रयोग होता. 'you' को सांभलकेर के रूप में 'I' में की लेवाय है. 'may' का 'might' होता है."
    },
    {
      "question": "I said to him, 'When will you return?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked him when he would return.",
        "I asked him when would he return.",
        "I asked him that when he would return.",
        "I asked him when he will return."
      ],
      "answer": "I asked him when he would return.",
      "explanation": "WH-प्रश्नवाचक वाक्य होने के कारण 'said to' का 'asked' और संयोजक के रूप में 'when' प्रयोग होगा. वाक्य विधान में फेरवाशे ('he would'). 'will' का 'would' और 'you' का 'he' थशे."
    },
    {
      "question": "She said, 'Goodbye, my friends.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She bade her friends goodbye.",
        "She said goodbye to her friends.",
        "She wished her friends goodbye.",
        "She exclaimed goodbye to her friends."
      ],
      "answer": "She bade her friends goodbye.",
      "explanation": "'Goodbye' जैसे विदायके शब्दो के लिए Reporting Verb 'bade' का प्रयोग होता है. यह एक विशिष्ट रचना है."
    },
    {
      "question": "The teacher said to me, 'Have you completed your homework?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher asked me if I had completed my homework.",
        "The teacher asked me have you completed your homework.",
        "The teacher asked me if I have completed my homework.",
        "The teacher asked me if you had completed your homework."
      ],
      "answer": "The teacher asked me if I had completed my homework.",
      "explanation": "सहायकारक क्रिया (Verb)से शुरू होता प्रश्नवाचक वाक्य है. संयोजक 'if' यहवशे. 'have you completed' (पूर्ण वर्तमान काल) का 'I had completed' (पूर्ण भूतकाल) थशे. 'your' का 'my' थशे."
    },
    {
      "question": "He said, 'I have to go to the office.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had to go to the office.",
        "He said that he has to go to the office.",
        "He said that he have to go to the office.",
        "He said that I had to go to the office."
      ],
      "answer": "He said that he had to go to the office.",
      "explanation": "'have to' यह 'must' जैसी फरज बतावे है और Reporting Verb भूतकाल में होने के कारण उसका 'had to' थशे. 'I' का 'he' थशे."
    },
    {
      "question": "The saint said, 'Man is mortal.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The saint said that man is mortal.",
        "The saint said that man was mortal.",
        "The saint told that man is mortal.",
        "The saint preached that man was mortal."
      ],
      "answer": "The saint said that man is mortal.",
      "explanation": "यह वाक्य सनातन सत्य है, इसलिए Reported Speech के काल में कोई बदलाव थशे नहीं."
    },
    {
      "question": "She said, 'What a pity!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed that it was a great pity.",
        "She exclaimed what a pity it was.",
        "She said that it was a pity.",
        "She exclaimed with sorrow that it was a pity."
      ],
      "answer": "She exclaimed that it was a great pity.",
      "explanation": "दुःख या दया व्यक्त करतुं उद्गार वाक्य है. Reporting Verb 'exclaimed' प्रयोग होगा. 'What a' को बदले 'it was a great' जैसी रचना प्रयोग होता है."
    }
  ],
  "test-8": [
    {
      "question": "He said to his son, 'Do not smoke.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He forbade his son to smoke.",
        "He advised his son not to smoke.",
        "He told his son not to smoke.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "यह नकारात्मक आज्ञार्थ वाक्य है. यहाँ पिता-पुत्रके संबंध में सलाह (advised), मकेई (forbade) (या) सामान्य कथन (told) - तीनों Reporting Verb भाव अनुसार सही है. 'forbade' वापरती समय 'not'  का प्रयोग नहीं होता."
    },
    {
      "question": "I said to my sister, 'Where were you yesterday?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked my sister where she had been the previous day.",
        "I asked my sister where she was yesterday.",
        "I asked my sister where had she been the previous day.",
        "I asked my sister where she had been yesterday."
      ],
      "answer": "I asked my sister where she had been the previous day.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. Reported Speech में 'were' (सामान्य भूतकाल) है, जो पूर्ण भूतकाल ('had been') में फेरवाशे. 'you' का 'she' और 'yesterday' का 'the previous day' थशे."
    },
    {
      "question": "She said, 'I will do it now or never.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she would do it then or never.",
        "She said that she will do it now or never.",
        "She said that she would do it now or never.",
        "She said that she will do it then or never."
      ],
      "answer": "She said that she would do it then or never.",
      "explanation": "Reporting Verb भूतकाल में होने के कारण 'will' का 'would' और 'now' का 'then' थशे. 'never' में कोई बदलाव नहीं होता."
    },
    {
      "question": "The boy said, 'Wow! What a great shot!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy exclaimed with joy that it was a great shot.",
        "The boy said that it was a great shot.",
        "The boy exclaimed that what a great shot it was.",
        "The boy happily said that it was a great shot."
      ],
      "answer": "The boy exclaimed with joy that it was a great shot.",
      "explanation": "आनंद व्यक्त करतुं उद्गार वाक्य है. 'Wow!' के लिए 'exclaimed with joy' या 'exclaimed joyfully' प्रयोग होता है. वाक्य को विधान में बदलने के लिए में आता है."
    },
    {
      "question": "He said to me, 'Let's discuss the matter.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He suggested to me that we should discuss the matter.",
        "He told me that we should discuss the matter.",
        "He proposed me that we should discuss the matter.",
        "He suggested me to discuss the matter."
      ],
      "answer": "He suggested to me that we should discuss the matter.",
      "explanation": "'Let's' (Let us) से शुरू होता दरखास्तसूचक वाक्य है. Reporting Verb 'suggested to' प्रयोग होगा. वाक्य 'that' से जोडाशे और 'we should' का प्रयोग होगा."
    },
    {
      "question": "The beggar said, 'Please give me some food.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The beggar begged to give him some food.",
        "The beggar requested to give him some food.",
        "The beggar asked to give him some food.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "यह विनम्र वाक्य है. भिखारीके संदर्भ में 'begged' (यहजीजी कर), 'requested' (विनती कर), या 'asked' (कहा) - तीनों Reporting Verb प्रयोग कर सकते. 'begged' सौसे अधिक उचित है. वाक्य 'to' से जोडाशे."
    },
    {
      "question": "The policeman said to the thief, 'Don't move.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The policeman ordered the thief not to move.",
        "The policeman warned the thief not to move.",
        "The policeman told the thief not to move.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह नकारात्मक आज्ञार्थ वाक्य है. पोलीस और चोरके संदर्भ में हुक्म (ordered) या चेतावनी (warned) दोनों Reporting Verb उचित है. वाक्य 'not to' से जोडाशे."
    },
    {
      "question": "I said to her, 'Can you lend me your pen?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked her if she could lend me her pen.",
        "I asked her if you could lend me your pen.",
        "I asked her can you lend me your pen.",
        "I requested her if she could lend me her pen."
      ],
      "answer": "I asked her if she could lend me her pen.",
      "explanation": "यह प्रश्नवाचक वाक्य है. संयोजक के रूप में 'if' प्रयोग होगा. 'can' का 'could' थशे. 'you' सांभलकेर (her) अनुसार 'she' में और 'your' भी 'her' में बदलाशे. 'me' एम ही रथेशे क्योंकि बोलकेर 'I' है."
    },
    {
      "question": "He said, 'I had a wonderful dream last night.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had had a wonderful dream the previous night.",
        "He said that he had a wonderful dream the previous night.",
        "He said that he had a wonderful dream last night.",
        "He said that he has had a wonderful dream the previous night."
      ],
      "answer": "He said that he had had a wonderful dream the previous night.",
      "explanation": "Reported Speech में 'had' मुख्य क्रिया (Verb) के रूप में सामान्य भूतकाल में है. इसलिए वह पूर्ण भूतकाल 'had had' में फेरवाशे. 'last night' का 'the previous night' थशे."
    },
    {
      "question": "The leader said, 'Let me speak freely.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The leader wished that he might be allowed to speak freely.",
        "The leader requested to let him speak freely.",
        "The leader said that he should speak freely.",
        "The leader wished to speak freely."
      ],
      "answer": "The leader wished that he might be allowed to speak freely.",
      "explanation": "'Let me' से शुरू होने वाले वाक्य में जब अनुमति  मैंगवा का भाव हो, तब 'might be allowed to' जैसी रचनाका प्रयोग होता है. 'wished' या 'desired' जैसे Reporting Verb प्रयोग कर सकते."
    }
  ],
  "test-9": [
    {
      "question": "She said to me, 'Which book do you like the most?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked me which book I liked the most.",
        "She asked me which book did I like the most.",
        "She asked me which book you liked the most.",
        "She asked me that which book I liked the most."
      ],
      "answer": "She asked me which book I liked the most.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'Which book' यह संयोजक के रूप में काम करशे. 'do you like' (सामान्य वर्तमान काल) का 'I liked' (सामान्य भूतकाल) थशे और वाक्य विधान बनशे."
    },
    {
      "question": "He said, 'Oh! I lost my wallet.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He exclaimed with sorrow that he had lost his wallet.",
        "He said that he lost his wallet.",
        "He exclaimed with sorrow that I had lost my wallet.",
        "He exclaimed that oh he had lost his wallet."
      ],
      "answer": "He exclaimed with sorrow that he had lost his wallet.",
      "explanation": "दुःख व्यक्त करतुं उद्गार वाक्य है. 'Oh!' के लिए 'exclaimed with sorrow/regret' प्रयोग होता है. 'lost' (सामान्य भूतकाल) का 'had lost' (पूर्ण भूतकाल) थशे."
    },
    {
      "question": "The mother said to her son, 'Where have you been all day?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The mother asked her son where he had been all day.",
        "The mother asked her son where had he been all day.",
        "The mother asked her son where he has been all day.",
        "The mother told her son where he had been all day."
      ],
      "answer": "The mother asked her son where he had been all day.",
      "explanation": "'said to' का 'asked' होता. 'where' संयोजक है. 'have you been' (पूर्ण वर्तमान काल) का 'he had been' (पूर्ण भूतकाल) थशे और वाक्य विधान बनशे."
    },
    {
      "question": "She said, 'Let me see what it is.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she would see what it was.",
        "She wished to see what it was.",
        "She asked to see what it was.",
        "She said to let her see what it was."
      ],
      "answer": "She said that she would see what it was.",
      "explanation": "यहाँ 'Let me see' यह भविष्य में कुछ देखने की इच्छा व्यक्त करता है, जिसे 'I will see' के अर्थ में लई सकता. इसलिए उसका 'she would see' करना उचित है. 'is' का 'was' थशे."
    },
    {
      "question": "The old man said to the boy, 'May God bless you!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The old man prayed that God might bless the boy.",
        "The old man wished that God might bless the boy.",
        "The old man said that God may bless the boy.",
        "The old man prayed that God might bless you."
      ],
      "answer": "The old man prayed that God might bless the boy.",
      "explanation": "यह शुभेच्छादर्शक (Optative) वाक्य है, जो में प्रार्थके का भाव है. इसलिए Reporting Verb 'prayed' प्रयोग होगा. 'may' का 'might' थशे और 'you' का 'the boy' थशे."
    },
    {
      "question": "He said, 'I am to go to Delhi.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he was to go to Delhi.",
        "He said that he is to go to Delhi.",
        "He said that I was to go to Delhi.",
        "He said that he had to go to Delhi."
      ],
      "answer": "He said that he was to go to Delhi.",
      "explanation": "'am to' यह पूर्वनिर्धारित योजके या फरज दर्शाता है. Reporting Verb भूतकाल में होने के कारण, 'am to' का 'was to' थशे."
    },
    {
      "question": "The principal said, 'Let the students come in.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The principal ordered that the students should be allowed to come in.",
        "The principal said to let the students come in.",
        "The principal ordered the students to come in.",
        "The principal allowed the students to come in."
      ],
      "answer": "The principal ordered that the students should be allowed to come in.",
      "explanation": "यहाँ 'Let' अनुमति देनेके अर्थ में प्रयोग होता है. इसलिए 'ordered' या 'instructed' जैसे Reporting verb के साथ 'that... should be allowed to' जैसी रचनाका प्रयोग होता है."
    },
    {
      "question": "I said to him, 'I have not seen you for ages.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I told him that I had not seen him for ages.",
        "I told him that I have not seen you for ages.",
        "I told him that I had not seen you for ages.",
        "I said to him that I had not seen him for ages."
      ],
      "answer": "I told him that I had not seen him for ages.",
      "explanation": "'said to' का 'told' होता. 'have not seen' का 'had not seen' होता. 'you' सांभलकेर (him) अनुसार 'him' में बदलाशे. बोलकेर 'I' होने के कारण पहला 'I' बदलाशे नहीं."
    },
    {
      "question": "The boy said, 'What a clever idea!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy exclaimed that it was a very clever idea.",
        "The boy said that it was a very clever idea.",
        "The boy exclaimed what a clever idea it was.",
        "The boy exclaimed that what a clever idea."
      ],
      "answer": "The boy exclaimed that it was a very clever idea.",
      "explanation": "यह उद्गार वाक्य है. Reporting Verb के रूप में 'exclaimed' प्रयोग होता है. 'what a' को बदले 'it was a very' जैसी रचना प्रयोग होता है और वाक्य को विधान वाक्य में बदलने के लिए में आता है."
    },
    {
      "question": "She said, 'We were living in Paris.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that they had been living in Paris.",
        "She said that they were living in Paris.",
        "She said that we had been living in Paris.",
        "She said that we were living in Paris."
      ],
      "answer": "She said that they had been living in Paris.",
      "explanation": "Reporting Verb भूतकाल में है और Reported Speech अपूर्ण भूतकाल में ('were living') है, इसलिए वह अपूर्ण पूर्ण भूतकाल ('had been living') में फेरवाशे. 'We' का 'they' थशे."
    }
  ],
  "test-10": [
    {
      "question": "He said, 'Thank you!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He thanked me.",
        "He said thank you.",
        "He told me thank you.",
        "He said that thank you."
      ],
      "answer": "He thanked me.",
      "explanation": "'Thank you' जैसे शब्दो को Reporting Verb के रूप में ही लई लेवा में आता है. यहाँ 'thank' का भूतकाल का रूप 'thanked' प्रयोग होगा. सांभलकेर के रूप में 'me' उमेरी सकता है."
    },
    {
      "question": "She said to me, 'Congratulations!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She congratulated me.",
        "She said congratulations to me.",
        "She told me congratulations.",
        "She wished me congratulations."
      ],
      "answer": "She congratulated me.",
      "explanation": "'Congratulations' जैसे अभिनंदन यहपता शब्दो को Reporting Verb के रूप में लई लेवा में आता है. 'congratulate' का भूतकाल का रूप 'congratulated' प्रयोग होगा."
    },
    {
      "question": "The teacher said, 'Be quiet and listen to my words.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher urged them to be quiet and listen to his/her words.",
        "The teacher told them to be quiet and listen to my words.",
        "The teacher said be quiet and listen to his words.",
        "The teacher requested them to be quiet and listen to his/her words."
      ],
      "answer": "The teacher urged them to be quiet and listen to his/her words.",
      "explanation": "यह एक आज्ञार्थ वाक्य है. यहाँ 'urged' (यहग्रह किया) Reporting Verb के रूप में उचित है. वाक्य 'to' से जोडाशे. 'my' का 'his/her' थशे. सांभलकेर के रूप में 'them' (विद्यार्सेओ) उमेरी सकता."
    },
    {
      "question": "He said, 'I used to play here when I was a child.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he used to play there when he was a child.",
        "He said that he had used to play there when he was a child.",
        "He said that he played there when he was a child.",
        "He said that he used to play here when he was a child."
      ],
      "answer": "He said that he used to play there when he was a child.",
      "explanation": "'used to' भूतकाल की टेव दर्शाता है और वह Indirect speech में बदलातुं नहीं. केवल 'here' का 'there' थशे."
    },
    {
      "question": "The Prime Minister said, 'We will fight corruption.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The Prime Minister said that they would fight corruption.",
        "The Prime Minister said that we would fight corruption.",
        "The Prime Minister said that they will fight corruption.",
        "The Prime Minister ordered that they would fight corruption."
      ],
      "answer": "The Prime Minister said that they would fight corruption.",
      "explanation": "यहाँ 'We'  का प्रयोग सरकारके प्रतिनिधि के रूप में थयो है, इसलिए उसका 'they' करना अधिक उचित है. 'will' का 'would' थशे."
    },
    {
      "question": "She said, 'I wish I were a bird!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She wished that she had been a bird.",
        "She wished that she were a bird.",
        "She said that she wished she had been a bird.",
        "She exclaimed that she were a bird."
      ],
      "answer": "She wished that she had been a bird.",
      "explanation": "यह एक अवास्तविक इच्छा (unreal wish) है. 'I wish I were...' वाली रचसंज्ञाां, 'said' का 'wished' होता है और 'were' का 'had been' होता है."
    },
    {
      "question": "The doctor said to the patient, 'Take this medicine twice a day.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The doctor advised the patient to take that medicine twice a day.",
        "The doctor told the patient to take this medicine twice a day.",
        "The doctor advised the patient to take this medicine twice a day.",
        "The doctor ordered the patient to take that medicine twice a day."
      ],
      "answer": "The doctor advised the patient to take that medicine twice a day.",
      "explanation": "आज्ञार्थ वाक्य है जो में सलाह का भाव है. 'said to' का 'advised' थशे. वाक्य 'to' से जोडाशे. 'this' का 'that' थशे."
    },
    {
      "question": "He said, 'How foolish I have been!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He confessed with regret that he had been very foolish.",
        "He exclaimed that he had been very foolish.",
        "He said that how foolish he had been.",
        "He confessed that he was very foolish."
      ],
      "answer": "He confessed with regret that he had been very foolish.",
      "explanation": "यह उद्गार वाक्य है जो पस्तावो दर्शाता है. Reporting Verb के रूप में 'confessed with regret' या 'exclaimed with regret' प्रयोग कर सकते. वाक्य को विधान में बदलकर 'very' जोड़ा जाए है. 'have been' का 'had been' थशे."
    },
    {
      "question": "I said to the porter, 'When does the next train arrive?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I enquired of the porter when the next train arrived.",
        "I asked the porter when the next train arrives.",
        "I asked the porter when did the next train arrive.",
        "I enquired the porter when the next train would arrive."
      ],
      "answer": "I enquired of the porter when the next train arrived.",
      "explanation": "पूछपरछ के लिए 'asked' को बदले 'enquired of' भी प्रयोग कर सकते. 'does...arrive' (सामान्य वर्तमान काल) का 'arrived' (सामान्य भूतकाल) थशे और वाक्य विधान बनशे."
    },
    {
      "question": "He said, 'My son is coming home tomorrow.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that his son was coming home the next day.",
        "He said that his son is coming home tomorrow.",
        "He said that my son was coming home the next day.",
        "He said that his son was coming home tomorrow."
      ],
      "answer": "He said that his son was coming home the next day.",
      "explanation": "'is coming' का 'was coming' थशे. 'my' का 'his' थशे और 'tomorrow' का 'the next day' थशे."
    }
  ],
  "test-11": [
    {
      "question": "She said to her father, 'Please allow me to go to the party.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She requested her father to allow her to go to the party.",
        "She told her father to allow her to go to the party.",
        "She asked her father if she could go to the party.",
        "She requested her father to please allow her to go to the party."
      ],
      "answer": "She requested her father to allow her to go to the party.",
      "explanation": "यह विनम्र वाक्य है, इसलिए 'said to' का 'requested' होता. वाक्य को 'to' के द्वारा जोड़ने में आता है और 'please' शब्द निकल जाता है. 'me' सर्वनाम का 'her' में रूपांतर होता है."
    },
    {
      "question": "The boy said, 'I have been working on this project since last Monday.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that he had been working on that project since the previous Monday.",
        "The boy said that he has been working on this project since last Monday.",
        "The boy said that he was working on that project since the previous Monday.",
        "The boy said that he had been working on this project since last Monday."
      ],
      "answer": "The boy said that he had been working on that project since the previous Monday.",
      "explanation": "अपूर्ण पूर्ण वर्तमान काल ('have been working') का अपूर्ण पूर्ण भूतकाल ('had been working') होता है. 'this' का 'that' और 'last Monday' का 'the previous Monday' होता है."
    },
    {
      "question": "He said, 'What a beautiful painting!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He exclaimed that it was a very beautiful painting.",
        "He said that it was a very beautiful painting.",
        "He exclaimed what a beautiful painting it was.",
        "He asked what a beautiful painting it was."
      ],
      "answer": "He exclaimed that it was a very beautiful painting.",
      "explanation": "यह उद्गार वाक्य है. Reporting Verb के रूप में 'exclaimed' का प्रयोग होता है. वाक्य को विधान में बदलते समय 'what a' को बदले 'very' का प्रयोग होता है और उद्गार चिह्न दूर होता है."
    },
    {
      "question": "The teacher said to the students, 'Why have you not done your homework?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher asked the students why they had not done their homework.",
        "The teacher asked the students why had they not done their homework.",
        "The teacher asked the students why they have not done their homework.",
        "The teacher told the students why they had not done their homework."
      ],
      "answer": "The teacher asked the students why they had not done their homework.",
      "explanation": "यह WH-प्रश्नवाचक वाक्य है. 'said to' का 'asked' होता. 'why' संयोजक के रूप में प्रयोग होता है. प्रश्नवाचक वाक्य को विधान वाक्य में बदलकर को 'they had' लिखा है. 'have not done' का 'had not done' होता है. 'your' का 'their' होता है."
    },
    {
      "question": "She said, 'If I had money, I would help you.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that if she had had money, she would have helped me.",
        "She said that if she had money, she would help me.",
        "She said that if she had had money, she would help me.",
        "She told that if she had money, she would have helped me."
      ],
      "answer": "She said that if she had had money, she would have helped me.",
      "explanation": "यह शर्त वाला वाक्य प्रकार-2 (अवास्तविक वर्तमान) है. Indirect speech में वह शर्त वाला वाक्य प्रकार-3 में बदल जाता है. इसलिए 'had' का 'had had' और 'would help' का 'would have helped' होता है. 'you' का 'me' (सांभलकेर के रूप में धारी को) होता."
    },
    {
      "question": "My mother said, 'It may rain today.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "My mother said that it might rain that day.",
        "My mother said that it may rain today.",
        "My mother said that it might rain today.",
        "My mother predicted that it may rain that day."
      ],
      "answer": "My mother said that it might rain that day.",
      "explanation": "Reporting verb भूतकाल में होने के कारण, 'may' का 'might' होता है. समयसूचक शब्द 'today' का 'that day' में रूपांतर होता है."
    },
    {
      "question": "He said to me, 'Let us go home.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He suggested to me that we should go home.",
        "He proposed that we should go home.",
        "He told me to go home.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Let us' वाला दरखास्तसूचक वाक्यों में Reporting Verb के रूप में 'suggested to' (या) 'proposed' दोनों का प्रयोग किया जा सकता है. वाक्य 'that' से जोडाय है और 'we should' या 'they should' का प्रयोग होता है."
    },
    {
      "question": "The saint said to his followers, 'Be kind to all.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The saint advised his followers to be kind to all.",
        "The saint told his followers to be kind to all.",
        "The saint ordered his followers to be kind to all.",
        "The saint preached his followers to be kind to all."
      ],
      "answer": "The saint advised his followers to be kind to all.",
      "explanation": "यह आज्ञार्थ वाक्य है जो में उपदेश या सलाह का भाव है. इसलिए, Reporting verb 'advised' सौसे उचित है. वाक्य को 'to' के द्वारा जोड़ने में आता है."
    },
    {
      "question": "She said, 'I must leave at once.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she had to leave at once.",
        "She said that she must leave at once.",
        "She said that she has to leave at once.",
        "She said that she would leave at once."
      ],
      "answer": "She said that she had to leave at once.",
      "explanation": "जब 'must' तात्कालिक जरूरियात या फरज दर्शावे, तब Indirect speech में 'had to' का प्रयोग होता है. 'at once' में कोई बदलाव नहीं होता."
    },
    {
      "question": "The general said, 'Bravo! You have fought well.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The general applauded them, saying that they had fought well.",
        "The general said bravo that they had fought well.",
        "The general exclaimed with joy that they had fought well.",
        "The general applauded them and said that you have fought well."
      ],
      "answer": "The general applauded them, saying that they had fought well.",
      "explanation": "'Bravo!' जैसे शाबाशीके शब्दो के लिए Reporting Verb 'applauded' का प्रयोग होता है और उसको 'saying that...' के द्वारा जोड़ने में आता है. 'have fought' का 'had fought' और 'You' का 'they' होता है."
    }
  ],
  "test-12": [
    {
      "question": "He said to me, 'Who teaches you English?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He asked me who taught me English.",
        "He asked me who teaches me English.",
        "He asked me who taught you English.",
        "He asked me that who taught me English."
      ],
      "answer": "He asked me who taught me English.",
      "explanation": "यह WH-प्रश्नवाचक वाक्य है. 'who' वह खुद कर्ता (Subject) है, इसलिए वाक्य रचसंज्ञाां बदलाव थशे नहीं, केवल काल बदलाशे. सामान्य वर्तमान काल ('teaches') सामान्य भूतकाल ('taught') में फेरवाशे. 'you' का 'me' थशे."
    },
    {
      "question": "She said, 'I would rather die than beg.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she would rather die than beg.",
        "She said that she had rather die than beg.",
        "She said that she would have rather died than beg.",
        "She preferred to die than beg."
      ],
      "answer": "She said that she would rather die than beg.",
      "explanation": "'would rather', 'would sooner', 'had better' जैसी रचनाएँ Indirect Speech में बदलाती नहीं."
    },
    {
      "question": "The boy said, 'What a stupid fellow I am!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy exclaimed that he was a very stupid fellow.",
        "The boy confessed that he was a very stupid fellow.",
        "The boy said that he was a very stupid fellow.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह उद्गार वाक्य है. 'exclaimed'  का प्रयोग सामान्य है. हालांकि, लड़का खुद की भूल स्वीकारी रहा है, इसलिए 'confessed' (कबूल्युं) भी उचित है. वाक्य को विधान में बदलकर को 'very' जोड़ा जाए है."
    },
    {
      "question": "My father said to me, 'Will you listen to such a man?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "My father asked me if I would listen to such a man.",
        "My father asked me would I listen to such a man.",
        "My father asked me if I will listen to such a man.",
        "My father asked me not to listen to such a man."
      ],
      "answer": "My father asked me if I would listen to such a man.",
      "explanation": "यह सहायकारक क्रिया (Verb)से शुरू होता प्रश्नवाचक है. संयोजक के रूप में 'if' प्रयोग होगा. 'Will you' का 'if I would' थशे. वाक्य का भाव प्रश्न का है, नकारात्मक सलाह का नहीं."
    },
    {
      "question": "I said to him, 'Do you really come from China?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked him if he really came from China.",
        "I asked him if he really comes from China.",
        "I asked him did he really come from China.",
        "I enquired him if he really came from China."
      ],
      "answer": "I asked him if he really came from China.",
      "explanation": "यह प्रश्नवाचक वाक्य है. 'do you come' (सामान्य वर्तमान काल) है, जो सामान्य भूतकाल ('came') में फेरवाशे. संयोजक के रूप में 'if' का प्रयोग होगा और वाक्य विधान बनशे."
    },
    {
      "question": "She said, 'Let's wait for our friends.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She proposed that they should wait for their friends.",
        "She suggested that they should wait for their friends.",
        "She said to wait for their friends.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Let's' वाली दरखास्त के लिए 'proposed' और 'suggested' दोनों Reporting Verb के रूप में प्रयोग कर सकते है. वाक्य 'that... should' की रचनासे जोडाय है. 'our' का 'their' थशे."
    },
    {
      "question": "He said, 'I was having dinner when you called.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had been having dinner when I called.",
        "He said that he was having dinner when I had called.",
        "He said that he was having dinner when you called.",
        "He said that he had been having dinner when I had called."
      ],
      "answer": "He said that he had been having dinner when I called.",
      "explanation": "जब वाक्य में दो भूतकाल की क्रियाओ हो, तब मुख्य क्रिया का काल बदलाय है. 'was having' (अपूर्ण भूतकाल) का 'had been having' (अपूर्ण पूर्ण भूतकाल) थशे. 'when' के बादके गौण वाक्य 'you called' (सामान्य भूतकाल) के काल में बदलाव नहीं होता और 'you' का 'I' थशे."
    },
    {
      "question": "The man said, 'I came here two days ago.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The man said that he had gone there two days before.",
        "The man said that he had come there two days ago.",
        "The man said that he came there two days before.",
        "The man said that he had gone there two days previous."
      ],
      "answer": "The man said that he had gone there two days before.",
      "explanation": "सामान्य भूतकाल ('came') पूर्ण भूतकाल ('had gone') में बदल जाता है. 'come' का 'go' होता है. 'here' का 'there' और 'ago' का 'before' होता है."
    },
    {
      "question": "'Call the first witness,' said the judge. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The judge commanded them to call the first witness.",
        "The judge said to call the first witness.",
        "The judge commanded to call the first witness.",
        "The judge commanded that the first witness be called."
      ],
      "answer": "The judge commanded them to call the first witness.",
      "explanation": "यह आज्ञार्थ वाक्य है. जजके यहदेश के लिए 'commanded' उचित Reporting Verb है. वाक्य 'to' से जोडाय है. यहाँ सांभलकेर के रूप में 'them' उमेरवुं व्याजबी है."
    },
    {
      "question": "She said to the teacher, 'Could you please explain this again?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She requested the teacher to explain that again.",
        "She asked the teacher if he/she could explain that again.",
        "She asked the teacher to please explain this again.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Could you please' अत्यंत नम्र विनती दर्शाता है. इसलिए Reporting Verb के रूप में 'requested' और वाक्य को 'to' से जोड़के यह सबसे सुंदर विकल्प है. 'asked if he/she could' भी व्याकरण की दृष्टियह सही है. 'this' का 'that' होता."
    }
  ],
  "test-13": [
    {
      "question": "He said, 'I shall go as soon as it is possible.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he would go as soon as it was possible.",
        "He said that he shall go as soon as it is possible.",
        "He said that he would go as soon as it is possible.",
        "He said that he should go as soon as it was possible."
      ],
      "answer": "He said that he would go as soon as it was possible.",
      "explanation": "पहले पुरुष 'I' के साथ 'shall' भविष्य काल दर्शाता है, जो Indirect में 'he' के साथ 'would' में फेरवाशे. 'is' का 'was' थशे."
    },
    {
      "question": "She said to me, 'What can I do for you?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked me what she could do for me.",
        "She asked me what could she do for me.",
        "She asked me what she can do for me.",
        "She asked me that what she could do for me."
      ],
      "answer": "She asked me what she could do for me.",
      "explanation": "यह WH-प्रश्नवाचक वाक्य है. 'said to' का 'asked' होता. 'what' संयोजक के रूप में प्रयोग होता है. वाक्य विधान में फेरवाशे. 'can' का 'could', 'I' का 'she', और 'you' का 'me' थशे."
    },
    {
      "question": "The prisoner said, 'Forgive me, Your Majesty.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The prisoner begged His Majesty to forgive him.",
        "The prisoner requested His Majesty to forgive him.",
        "The prisoner asked His Majesty to forgive him.",
        "The prisoner told His Majesty to forgive him."
      ],
      "answer": "The prisoner begged His Majesty to forgive him.",
      "explanation": "सूची के द्वारा राजा को करने में यहवती विनती के लिए 'begged' (यहजीजी कर) सौसे उचित Reporting Verb है. यह एक आज्ञार्थ वाक्य है जो 'to' से जोडाय है."
    },
    {
      "question": "He said, 'We have been living here since 2010.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that they had been living there since 2010.",
        "He said that they have been living there since 2010.",
        "He said that we had been living here since 2010.",
        "He said that they were living there since 2010."
      ],
      "answer": "He said that they had been living there since 2010.",
      "explanation": "अपूर्ण पूर्ण वर्तमान काल ('have been living') का अपूर्ण पूर्ण भूतकाल ('had been living') होता है. 'We' का 'they' और 'here' का 'there' होता है. विशेष वर्ष होने के कारण 'since 2010' बदलाशे नहीं."
    },
    {
      "question": "The boy said, 'I am glad to be here this evening.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that he was glad to be there that evening.",
        "The boy said that he was glad to be here this evening.",
        "The boy said that he is glad to be there that evening.",
        "The boy said that he was glad to be there this evening."
      ],
      "answer": "The boy said that he was glad to be there that evening.",
      "explanation": "'am' का 'was' थशे. 'here' का 'there' और 'this evening' का 'that evening' थशे."
    },
    {
      "question": "'Are you the manager?' I said. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked him if he was the manager.",
        "I asked are you the manager.",
        "I asked him that if he was the manager.",
        "I asked if he is the manager."
      ],
      "answer": "I asked him if he was the manager.",
      "explanation": "यह प्रश्नवाचक वाक्य है. Reporting verb 'said' का 'asked' थशे. सांभलकेर के रूप में 'him' उमेरवुं उचित है. संयोजक के रूप में 'if' प्रयोग होगा. वाक्य विधान में फेरवाशे और 'are' का 'was' थशे."
    },
    {
      "question": "She said, 'My God! I have missed the train.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed with regret that she had missed the train.",
        "She exclaimed that she has missed the train.",
        "She said My God that she had missed the train.",
        "She exclaimed that she had missed the train."
      ],
      "answer": "She exclaimed with regret that she had missed the train.",
      "explanation": "'My God!' यहश्चर्य और पस्तावो बतावे है, इसलिए 'exclaimed with regret' उचित है. 'have missed' का 'had missed' थशे."
    },
    {
      "question": "He said, 'The sun rises in the east.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that the sun rises in the east.",
        "He said that the sun rose in the east.",
        "He said that the sun had risen in the east.",
        "He told that the sun rises in the east."
      ],
      "answer": "He said that the sun rises in the east.",
      "explanation": "यह सनातन सत्य है. सनातन सत्यके काल में कोई बदलाव नहीं होता, भले ही Reporting Verb भूतकाल में हो."
    },
    {
      "question": "The captain said to the team, 'Let's play our best game.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The captain encouraged the team to play their best game.",
        "The captain suggested that they should play their best game.",
        "The captain told the team to play our best game.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यहाँ दरखास्त ('suggested') और प्रोत्साहन ('encouraged') दोनों भाव उचित है. 'suggested' के साथ 'that...should' की रचना आता है, जब 'encouraged' के साथ 'to' infinitive आता है. 'our' का 'their' होता."
    },
    {
      "question": "The teacher said, 'Who is responsible for this mess?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher demanded to know who was responsible for that mess.",
        "The teacher asked who was responsible for that mess.",
        "The teacher asked who is responsible for this mess.",
        "The teacher demanded who was responsible for this mess."
      ],
      "answer": "The teacher demanded to know who was responsible for that mess.",
      "explanation": "यहाँ शिक्षक गुस्सा में या सख्ताईसे पूछी रहे हैं, इसलिए 'asked' को बदले 'demanded to know' (जाणवा की  मैंगणी कर) अधिक भानेज है. 'is' का 'was' और 'this' का 'that' थशे."
    }
  ],
  "test-14": [
    {
      "question": "He said, 'I must go home tomorrow.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he would have to go home the next day.",
        "He said that he must go home the next day.",
        "He said that he had to go home tomorrow.",
        "He said that he will have to go home the next day."
      ],
      "answer": "He said that he would have to go home the next day.",
      "explanation": "जब 'must' भविष्य की फरज दर्शावे, तब उसको 'will have to' के अर्थ में लेवाय है. Indirect Speech में उसका 'would have to' होता है. 'tomorrow' का 'the next day' होता है."
    },
    {
      "question": "'How clever of you to have solved it!' she said. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed that it was very clever of me to have solved it.",
        "She told me that I was very clever to have solved it.",
        "She exclaimed how clever of me to have solved it.",
        "She exclaimed that it was very clever of you to have solved it."
      ],
      "answer": "She exclaimed that it was very clever of me to have solved it.",
      "explanation": "यह उद्गार वाक्य है. 'exclaimed' Reporting Verb प्रयोग होगा. 'you' को सांभलकेर के रूप में 'me' में की लेवाय है. 'how clever' को 'very clever' में बदलकर वाक्य को विधान बकेवाय है."
    },
    {
      "question": "The boy said, 'I will not play with you again.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that he would not play with me again.",
        "The boy said that he will not play with me again.",
        "The boy said that I would not play with you again.",
        "The boy refused to play with me again."
      ],
      "answer": "The boy said that he would not play with me again.",
      "explanation": "'will not' का 'would not' थशे. 'I' का 'he' थशे. सांभलकेर के रूप में 'me' धारी को 'you' का 'me' थशे. 'refused' भी प्रयोग कर सकते, भी देतालो विकल्प अधिक सीधो है."
    },
    {
      "question": "She said to her friend, 'From where did you get this dress?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked her friend from where she had got that dress.",
        "She asked her friend from where did she get that dress.",
        "She asked her friend from where she got that dress.",
        "She asked her friend from where she had got this dress."
      ],
      "answer": "She asked her friend from where she had got that dress.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'From where' संयोजक बनशे. 'did you get' (सामान्य भूतकाल) का 'she had got' (पूर्ण भूतकाल) थशे. 'this' का 'that' थशे."
    },
    {
      "question": "He said, 'I need not go there.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he did not have to go there.",
        "He said that he need not go there.",
        "He said that he would not have to go there.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'need not' Indirect Speech में बदलातुं नहीं. उसको 'did not have to' के रूप में भी लिखी सकता है. दोनों विकल्प सही है."
    },
    {
      "question": "The teacher said, 'Let's not make noise.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher suggested that they should not make noise.",
        "The teacher forbade them to make noise.",
        "The teacher told them not to make noise.",
        "The teacher proposed not to make noise."
      ],
      "answer": "The teacher suggested that they should not make noise.",
      "explanation": "यह नकारात्मक दरखास्त है. 'suggested' Reporting verb के साथ 'that... should not' की रचना सौसे उचित है. 'forbade'  का अर्थ 'मकेई फरमैंवी' होता, जो भी शक्य है भी 'suggested' अधिक बंधबेसतुं है."
    },
    {
      "question": "I said to him, 'I had hoped to succeed.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I told him that I had hoped to succeed.",
        "I told him that I had been hoping to succeed.",
        "I told him that I hoped to succeed.",
        "I told him that I hoped I would succeed."
      ],
      "answer": "I told him that I had hoped to succeed.",
      "explanation": "Reported Speech में 'had hoped' (पूर्ण भूतकाल) है. पूर्ण भूतकाल Indirect Speech में बदलातो नहीं. इसलिए वाक्य एम ही रथेशे, केवल 'said to' का 'told' थशे."
    },
    {
      "question": "She said, 'What a good idea!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed that it was a very good idea.",
        "She said that it was a good idea.",
        "She exclaimed what a good idea it was.",
        "She told that it was a very good idea."
      ],
      "answer": "She exclaimed that it was a very good idea.",
      "explanation": "उद्गार वाक्य को विधान वाक्य में बदलने के लिए में आता है. 'exclaimed' Reporting Verb का प्रयोग होता है और 'What a' को बदले 'it was a very' जैसी रचना प्रयोग होता है."
    },
    {
      "question": "He said to his officer, 'Pardon me, sir.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He respectfully begged his officer to pardon him.",
        "He begged his officer to pardon him.",
        "He requested his officer to pardon him.",
        "He told his officer to pardon him."
      ],
      "answer": "He respectfully begged his officer to pardon him.",
      "explanation": "यहाँ माफ़ी  मैंगवा का भाव है, इसलिए 'begged' उचित है. 'sir' के लिए 'respectfully' शब्द जोड़ा जाता है. यह आज्ञार्थ वाक्य होने के कारण 'to' से जोडाय है."
    },
    {
      "question": "The girl said, 'I am going to the cinema tomorrow.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The girl said that she was going to the cinema the next day.",
        "The girl said that she is going to the cinema tomorrow.",
        "The girl said that she was going to the cinema tomorrow.",
        "The girl said that she would go to the cinema the next day."
      ],
      "answer": "The girl said that she was going to the cinema the next day.",
      "explanation": "'am going' (अपूर्ण वर्तमान काल) का 'was going' (अपूर्ण भूतकाल) होता है. 'tomorrow' का 'the next day' होता है."
    }
  ],
  "test-15": [
    {
      "question": "'Don't you know the way home?' I said to the boy. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked the boy if he didn't know the way home.",
        "I asked the boy if he knew the way home.",
        "I asked the boy don't you know the way home.",
        "I asked the boy that if he didn't know the way home."
      ],
      "answer": "I asked the boy if he didn't know the way home.",
      "explanation": "यह नकारात्मक प्रश्नवाचक वाक्य है. संयोजक के रूप में 'if' प्रयोग होगा. 'Don't you know' (सामान्य वर्तमान काल) का 'if he didn't know' (सामान्य भूतकाल) थशे और वाक्य विधान बनशे."
    },
    {
      "question": "He said, 'I have often told you not to play with fire.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He reminded me that he had often told me not to play with fire.",
        "He told me that he had often told me not to play with fire.",
        "He said that he had often told you not to play with fire.",
        "He warned me not to play with fire."
      ],
      "answer": "He reminded me that he had often told me not to play with fire.",
      "explanation": "यहाँ 'I have often told you' याद अपाने का भाव दर्शाता है. इसलिए 'reminded' Reporting Verb अधिक उचित है. 'have told' का 'had told' थशे. 'you' का 'me' थशे."
    },
    {
      "question": "The boy said, 'Let me go out to play.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy requested that he might be allowed to go out to play.",
        "The boy wished to go out to play.",
        "The boy asked to let him go out to play.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "'Let me' वाला वाक्य में अनुमति या विनती का भाव होता है. 'requested that he might be allowed to...' यह सौसे औपचारिक रीत है. 'wished to' और 'asked to' भी सही अर्थ रजू करता है."
    },
    {
      "question": "She said, 'I couldn't come because I was ill.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she couldn't come because she was ill.",
        "She said that she couldn't have come because she was ill.",
        "She said that she hadn't been able to come because she was ill.",
        "She explained that she couldn't come because she was ill."
      ],
      "answer": "She said that she couldn't come because she was ill.",
      "explanation": "'couldn't' में कोई बदलाव नहीं होता. 'was' यह कारण दर्शावता गौण वाक्य में है, इसलिए वह भी बदलाशे नहीं. यहखुं वाक्य एम ही रथेशे."
    },
    {
      "question": "The speaker said, 'I will speak on this topic tomorrow.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The speaker said that he/she would speak on that topic the next day.",
        "The speaker said that he/she will speak on this topic tomorrow.",
        "The speaker said that he/she would speak on this topic the next day.",
        "The speaker announced that he/she would speak on that topic tomorrow."
      ],
      "answer": "The speaker said that he/she would speak on that topic the next day.",
      "explanation": "'will' का 'would' होता है. 'this' का 'that' होता है. 'tomorrow' का 'the next day' होता है."
    },
    {
      "question": "He said to me, 'What a silly mistake you have made!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He exclaimed that I had made a very silly mistake.",
        "He told me that I had made a very silly mistake.",
        "He exclaimed what a silly mistake I had made.",
        "He exclaimed that you had made a very silly mistake."
      ],
      "answer": "He exclaimed that I had made a very silly mistake.",
      "explanation": "उद्गार वाक्य है. 'exclaimed' प्रयोग होगा. 'what a' को बदले 'very' प्रयोग होगा. 'you' का 'I' और 'have made' का 'had made' थशे."
    },
    {
      "question": "My mother said to my father, 'Have you brought my medicine?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "My mother asked my father if he had brought her medicine.",
        "My mother asked my father have you brought her medicine.",
        "My mother asked my father if you had brought my medicine.",
        "My mother asked my father if he has brought her medicine."
      ],
      "answer": "My mother asked my father if he had brought her medicine.",
      "explanation": "प्रश्नवाचक वाक्य है, इसलिए 'asked' और संयोजक 'if' प्रयोग होगा. 'Have you brought' का 'if he had brought' थशे. 'my' का 'her' थशे."
    },
    {
      "question": "The spectators shouted, 'Well done, players!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The spectators applauded the players, saying that they had done well.",
        "The spectators shouted that the players had done well.",
        "The spectators encouraged the players that they did well.",
        "The spectators shouted well done to the players."
      ],
      "answer": "The spectators applauded the players, saying that they had done well.",
      "explanation": "'Well done' शाबाशी दर्शाता है. 'shouted' को बदले 'applauded' (वखाण कर्या) अधिक उचित है, और उसको 'saying that...' से जोड़ने में आता है. 'done' यह Past Participle (V3) है जो पूर्णकाल सूचित करता है."
    },
    {
      "question": "He said, 'We must obey the laws of the country.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that we must obey the laws of the country.",
        "He said that they must obey the laws of the country.",
        "He said that we had to obey the laws of the country.",
        "He said that they had to obey the laws of the country."
      ],
      "answer": "He said that we must obey the laws of the country.",
      "explanation": "जब 'must' नैतिक या कायदाकीय फरज बतावे, तब उसमैं बदलाव नहीं होता. 'we'  का प्रयोग सौ को लागु पडतो होने के कारण वह बदलाशे नहीं."
    },
    {
      "question": "I said to him, 'How long will you stay here?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked him how long he would stay there.",
        "I asked him how long would he stay there.",
        "I asked him how long he will stay here.",
        "I asked him that how long he would stay there."
      ],
      "answer": "I asked him how long he would stay there.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'asked' प्रयोग होगा. 'How long' संयोजक बनशे. वाक्य विधान में फेरवाशे. 'will' का 'would', 'you' का 'he' और 'here' का 'there' थशे."
    }
  ],
  "test-16": [
    {
      "question": "The student said, 'Sir, may I come in?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The student respectfully asked the teacher if he might come in.",
        "The student asked the teacher if he may come in.",
        "The student told the teacher if he might come in.",
        "The student requested the teacher to come in."
      ],
      "answer": "The student respectfully asked the teacher if he might come in.",
      "explanation": "यह अनुमति  मैंगतुं प्रश्नवाचक वाक्य है. 'Sir' के लिए 'respectfully' जोड़ा जाए है. संयोजक 'if' प्रयोग होगा और 'may' का 'might' थशे. वाक्य को विधान में बदलने के लिए में आता है."
    },
    {
      "question": "He said, 'It is time we started for the station.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that it was time they had started for the station.",
        "He said that it was time they started for the station.",
        "He said that it is time we started for the station.",
        "He said that it would be time they started for the station."
      ],
      "answer": "He said that it was time they had started for the station.",
      "explanation": "'It is time' वाली रचसंज्ञाां, 'started' (सामान्य भूतकाल) पूर्ण भूतकाल ('had started') में फेरवाशे. 'is' का 'was' और 'we' का 'they' थशे."
    },
    {
      "question": "'What happened?' she said. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked what had happened.",
        "She asked what happened.",
        "She asked that what had happened.",
        "She enquired what happened."
      ],
      "answer": "She asked what had happened.",
      "explanation": "यह WH-प्रश्नवाचक वाक्य है. 'What' वह खुद ही कर्ता (Subject) है. 'happened' (सामान्य भूतकाल) पूर्ण भूतकाल ('had happened') में फेरवाशे."
    },
    {
      "question": "She said, 'I wish I had a car.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She wished that she had had a car.",
        "She wished that she had a car.",
        "She said that she had a car.",
        "She exclaimed that she had a car."
      ],
      "answer": "She wished that she had had a car.",
      "explanation": "यह अवास्तविक इच्छा है. 'said' का 'wished' होता. 'had' (यहाँ सामान्य भूतकाल) का 'had had' (पूर्ण भूतकाल) होता है."
    },
    {
      "question": "The boy said, 'Let me have a piece of cake.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy expressed a wish to have a piece of cake.",
        "The boy asked to have a piece of cake.",
        "The boy said that he should have a piece of cake.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यहाँ 'Let me' इच्छा व्यक्त करता है. इसलिए 'expressed a wish to have' (या) 'asked to have' दोनों उचित है. Reporting Verb 'wished for' भी प्रयोग कर सकते."
    },
    {
      "question": "I said to the children, 'Do not make a noise.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I forbade the children to make a noise.",
        "I told the children not to make a noise.",
        "I ordered the children not to make a noise.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "नकारात्मक आज्ञार्थ वाक्य है. 'forbade' (मकेई कर), 'told' (कहा), 'ordered' (यहदेश यहप्यो) - तीनों Reporting Verb भाव अनुसार उचित है. 'forbade' के साथ 'not' आता है नहीं."
    },
    {
      "question": "He said, 'I have been a teacher for ten years.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had been a teacher for ten years.",
        "He said that he has been a teacher for ten years.",
        "He said that he was a teacher for ten years.",
        "He told that he had been a teacher for ten years."
      ],
      "answer": "He said that he had been a teacher for ten years.",
      "explanation": "पूर्ण वर्तमान काल ('have been') का पूर्ण भूतकाल ('had been') होता है. 'I' का 'he' थशे."
    },
    {
      "question": "The officer said, 'Get out of my office.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The officer ordered me to get out of his office.",
        "The officer told me to get out of his office.",
        "The officer shouted at me to get out of his office.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "आज्ञार्थ वाक्य है. गुस्सा और अधिकारके भाव के लिए 'ordered', 'shouted at', या सामान्य रूप से 'told' भी प्रयोग कर सकते. सांभलकेर 'me' और 'my' का 'his' थशे."
    },
    {
      "question": "She said to her husband, 'Why do you look so worried?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked her husband why he looked so worried.",
        "She asked her husband why did he look so worried.",
        "She asked her husband why he looks so worried.",
        "She enquired of her husband why he looked so worried."
      ],
      "answer": "She asked her husband why he looked so worried.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'do you look' (सामान्य वर्तमान काल) का 'he looked' (सामान्य भूतकाल) थशे और वाक्य विधान बनशे. 'enquired of' भी प्रयोग कर सकते, भी 'asked' अधिक सामान्य है."
    },
    {
      "question": "He said, 'It is a cold day today.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that it was a cold day that day.",
        "He remarked that it was a cold day that day.",
        "He said that it is a cold day today.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह एक सामान्य विधान है. Reporting Verb के रूप में 'said' उपरांत 'remarked' (टिप्भीी कर) भी प्रयोग कर सकते है. 'is' का 'was' और 'today' का 'that day' थशे."
    }
  ],
  "test-17": [
    {
      "question": "He said to me, 'I did not see you at the party last night.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He told me that he had not seen me at the party the previous night.",
        "He told me that he did not see me at the party last night.",
        "He told me that he had not seen you at the party the previous night.",
        "He told me that he had not seen me at the party last night."
      ],
      "answer": "He told me that he had not seen me at the party the previous night.",
      "explanation": "सामान्य भूतकाल का नकार ('did not see') पूर्ण भूतकाल के नकार ('had not seen') में फेरवाशे. 'you' का 'me' और 'last night' का 'the previous night' थशे."
    },
    {
      "question": "The teacher said to the boys, 'If you do your best, you will surely pass.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher told the boys that if they did their best, they would surely pass.",
        "The teacher told the boys that if you do your best, you will surely pass.",
        "The teacher told the boys that if they do their best, they will surely pass.",
        "The teacher told the boys that if they did their best, they will surely pass."
      ],
      "answer": "The teacher told the boys that if they did their best, they would surely pass.",
      "explanation": "यह शर्त वाला वाक्य प्रकार-1 है. 'if' वाला गौण वाक्य सामान्य वर्तमान काल में है, जो सामान्य भूतकाल ('did') में फेरवाशे. मुख्य वाक्य में 'will' का 'would' थशे. 'you' और 'your' का 'they' और 'their' थशे."
    },
    {
      "question": "She said, 'May your dream come true!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She wished that my dream might come true.",
        "She prayed that my dream might come true.",
        "She said that my dream may come true.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह शुभेच्छादर्शक वाक्य है. Reporting Verb के रूप में 'wished' या 'prayed' दोनों प्रयोग कर सकते. सांभलकेर के रूप में 'me' धारी को 'your' का 'my' होता है. 'may' का 'might' होता है."
    },
    {
      "question": "The boss said, 'Let the meeting begin.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boss ordered that the meeting should begin.",
        "The boss said to let the meeting begin.",
        "The boss ordered the meeting to begin.",
        "The boss proposed that the meeting should begin."
      ],
      "answer": "The boss ordered that the meeting should begin.",
      "explanation": "यहाँ 'Let' से शुरू होता वाक्य यहदेश सूचित करता है. इसलिए 'ordered that... should' वाली रचना प्रयोग होगा. 'proposed' दरखास्त के लिए प्रयोग होता, जो यहाँ उचित नहीं."
    },
    {
      "question": "He said to me, 'Whose house is this?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He asked me whose house that was.",
        "He asked me whose house is this.",
        "He asked me whose house was that.",
        "He asked me that whose house that was."
      ],
      "answer": "He asked me whose house that was.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'Whose house' संयोजक बनशे. वाक्य को विधान में बदलकर को 'that was' लखाशे. 'this' का 'that' और 'is' का 'was' थशे."
    },
    {
      "question": "The child said, 'I want a balloon.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The child said that he/she wanted a balloon.",
        "The child demanded that he/she wanted a balloon.",
        "The child said that he/she wants a balloon.",
        "The child told that he/she wanted a balloon."
      ],
      "answer": "The child said that he/she wanted a balloon.",
      "explanation": "सादुं विधान वाक्य है. 'want' (सामान्य वर्तमान काल) का 'wanted' (सामान्य भूतकाल) थशे. बालक के लिए 'he/she' दोनों प्रयोग कर सकते."
    },
    {
      "question": "She said, 'What a terrible storm it is!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed that it was a terrible storm.",
        "She exclaimed that it was a very terrible storm.",
        "She exclaimed what a terrible storm it was.",
        "She said that it was a terrible storm."
      ],
      "answer": "She exclaimed that it was a very terrible storm.",
      "explanation": "उद्गार वाक्य है. 'exclaimed' प्रयोग होगा. 'what a' को 'a very' में फेरववुं अधिक उचित है, हालांकि 'a' भी चली शया. 'is' का 'was' थशे."
    },
    {
      "question": "The Prime Minister said, 'Let there be peace in the world.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The Prime Minister wished that there should be peace in the world.",
        "The Prime Minister said that there should be peace in the world.",
        "The Prime Minister ordered that there be peace in the world.",
        "The Prime Minister prayed for peace in the world."
      ],
      "answer": "The Prime Minister wished that there should be peace in the world.",
      "explanation": "'Let there be...' वाली रचना इच्छा या प्रार्थके व्यक्त करता है. इसलिए Reporting Verb 'wished' या 'prayed' प्रयोग होता है और वाक्य 'that there should be...' से जोडाय है."
    },
    {
      "question": "He said, 'I can speak three languages.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he could speak three languages.",
        "He said that he can speak three languages.",
        "He said that he would speak three languages.",
        "He boasted that he could speak three languages."
      ],
      "answer": "He said that he could speak three languages.",
      "explanation": "Reporting Verb भूतकाल में होने के कारण, 'can' का 'could' होता है. 'boasted' (बडाई मेरी) भी भाव अनुसार प्रयोग कर सकते, भी 'said' अधिक सामान्य और सुरक्षित है."
    },
    {
      "question": "The police said to the man, 'Where were you at 9 pm last night?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The police asked the man where he had been at 9 pm the previous night.",
        "The police asked the man where he was at 9 pm last night.",
        "The police enquired the man where had he been at 9 pm the previous night.",
        "The police asked the man where he had been at 9 pm last night."
      ],
      "answer": "The police asked the man where he had been at 9 pm the previous night.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'were' (सामान्य भूतकाल) का 'had been' (पूर्ण भूतकाल) थशे. 'last night' का 'the previous night' थशे. वाक्य विधान बनशे."
    }
  ],
  "test-18": [
    {
      "question": "He said to me, 'Which way should I go?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He asked me which way he should go.",
        "He asked me which way should he go.",
        "He asked me that which way he should go.",
        "He wanted to know which way he should go."
      ],
      "answer": "He asked me which way he should go.",
      "explanation": "यह WH-प्रश्नवाचक वाक्य है. 'asked' प्रयोग होगा. 'should' में कोई बदलाव नहीं होता. वाक्य को विधान में बदलवह हुयह 'he should go' एम लखाशे."
    },
    {
      "question": "'Help! Help!' she cried, 'I am drowning.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She cried for help, saying that she was drowning.",
        "She shouted for help and said that she was drowning.",
        "She cried that she was drowning.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यहाँ 'Help! Help!' मदद के लिए की बूम है. इसलिए, 'cried for help' या 'shouted for help' उचित Reporting Verb है. बाकी के वाक्य को 'saying that...' से जोडी सकता. 'am' का 'was' थशे."
    },
    {
      "question": "The hermit said, 'May you all go to hell!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The hermit cursed that they might all go to hell.",
        "The hermit wished that they might all go to hell.",
        "The hermit said that they may all go to hell.",
        "The hermit angrily said that they might all go to hell."
      ],
      "answer": "The hermit cursed that they might all go to hell.",
      "explanation": "यह श्राप (curse) यहपतुं वाक्य है. इसलिए Reporting Verb के रूप में 'cursed' का प्रयोग होता है. 'may' का 'might' होता है."
    },
    {
      "question": "She said, 'We are all sinners.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that we are all sinners.",
        "She said that they were all sinners.",
        "She said that we were all sinners.",
        "She preached that we are all sinners."
      ],
      "answer": "She said that we are all sinners.",
      "explanation": "जब 'we' समग्र मैंनवजाति का उल्लेख करतुं हो (सार्वत्रिक सत्य), तब 'we' बदलातुं नहीं और काल भी बदलातो नहीं."
    },
    {
      "question": "The boys said, 'It is time we played a game.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boys said that it was time they had played a game.",
        "The boys said that it was time they played a game.",
        "The boys exclaimed that it was time they played a game.",
        "The boys said it is time they played a game."
      ],
      "answer": "The boys said that it was time they had played a game.",
      "explanation": "'It is time' + सामान्य भूतकाल वाली रचसंज्ञाां, Indirect speech में सामान्य भूतकाल ('played') को पूर्ण भूतकाल ('had played') में बदलने के लिए में आता है. 'is' का 'was' और 'we' का 'they' होता है."
    },
    {
      "question": "I said to him, 'Do you take sugar in your tea?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked him if he took sugar in his tea.",
        "I asked him if he takes sugar in his tea.",
        "I asked him do you take sugar in your tea.",
        "I asked him whether he took sugar in his tea."
      ],
      "answer": "I asked him if he took sugar in his tea.",
      "explanation": "यह प्रश्नवाचक वाक्य है. 'Do you take' (सामान्य वर्तमान काल) का 'if he took' (सामान्य भूतकाल) थशे. 'your' का 'his' थशे. 'whether' भी प्रयोग कर सकते."
    },
    {
      "question": "He said, 'What a lazy boy you are!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He exclaimed that I was a very lazy boy.",
        "He told me that I was a very lazy boy.",
        "He exclaimed what a lazy boy I was.",
        "He called me a very lazy boy."
      ],
      "answer": "He exclaimed that I was a very lazy boy.",
      "explanation": "उद्गार वाक्य है. Reporting Verb 'exclaimed' प्रयोग होगा. सांभलकेर 'me' धारी को 'you' का 'I' होता है. वाक्य को विधान में बदलकर को 'very' जोड़ा जाए है. 'called me a...' भी एक वैकल्पिक रीत है."
    },
    {
      "question": "The teacher said, 'Gandhi was born in Porbandar.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher said that Gandhi was born in Porbandar.",
        "The teacher said that Gandhi had been born in Porbandar.",
        "The teacher told that Gandhi was born in Porbandar.",
        "The teacher informed that Gandhi had been born in Porbandar."
      ],
      "answer": "The teacher said that Gandhi was born in Porbandar.",
      "explanation": "यह एक ऐतिहासिक हकीकत है. ऐतिहासिक तथ्योंके काल में Indirect speech में कोई बदलाव नहीं होता."
    },
    {
      "question": "He said to me, 'Wait here until I return.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He asked me to wait there until he returned.",
        "He told me to wait here until I return.",
        "He ordered me to wait there until he returned.",
        "He asked me to wait there until he would return."
      ],
      "answer": "He asked me to wait there until he returned.",
      "explanation": "आज्ञार्थ वाक्य है. 'told' या 'asked' प्रयोग कर सकते. 'to' से वाक्य जोडाय है. 'here' का 'there' होता. 'until' के बादके वाक्य में 'return' (वर्तमान काल) का 'returned' (भूतकाल) थशे. 'I' का 'he' थशे."
    },
    {
      "question": "She said, 'My husband is coming.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that her husband was coming.",
        "She said that my husband was coming.",
        "She said that her husband is coming.",
        "She told that her husband was coming."
      ],
      "answer": "She said that her husband was coming.",
      "explanation": "सादुं विधान वाक्य है. 'is coming' का 'was coming' और 'My' का 'her' थशे."
    }
  ],
  "test-19": [
    {
      "question": "He said, 'Let us not say anything about this.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He suggested that they should not say anything about that.",
        "He proposed that they should not say anything about this.",
        "He said not to say anything about that.",
        "He suggested them not to say anything about that."
      ],
      "answer": "He suggested that they should not say anything about that.",
      "explanation": "नकारात्मक दरखास्त है. 'suggested' या 'proposed' के साथ 'that... should not' की रचना प्रयोग होता है. 'this' का 'that' होता है."
    },
    {
      "question": "The boy said, 'I have made a kite.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that he had made a kite.",
        "The boy said that he has made a kite.",
        "The boy said that I had made a kite.",
        "The boy said he made a kite."
      ],
      "answer": "The boy said that he had made a kite.",
      "explanation": "पूर्ण वर्तमान काल ('have made') पूर्ण भूतकाल ('had made') में फेरवाशे. 'I' का 'he' थशे."
    },
    {
      "question": "'How did you do it?' he said to me. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He asked me how I had done it.",
        "He asked me how did I do it.",
        "He asked me how I did it.",
        "He asked me that how I had done it."
      ],
      "answer": "He asked me how I had done it.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'did you do' (सामान्य भूतकाल) का 'I had done' (पूर्ण भूतकाल) थशे और वाक्य विधान बनशे. 'you' का 'I' थशे."
    },
    {
      "question": "She said, 'Oh dear! I have torn my dress.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed with regret that she had torn her dress.",
        "She said with sorrow that she had torn her dress.",
        "She exclaimed that she has torn her dress.",
        "She exclaimed Oh dear that she had torn her dress."
      ],
      "answer": "She exclaimed with regret that she had torn her dress.",
      "explanation": "'Oh dear!' पस्तावो या दुःख बतावे है, इसलिए 'exclaimed with regret/sorrow' उचित है. 'have torn' का 'had torn' थशे. 'my' का 'her' थशे."
    },
    {
      "question": "The teacher said to the student, 'Why were you absent yesterday?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher asked the student why he had been absent the previous day.",
        "The teacher asked the student why he was absent the previous day.",
        "The teacher asked the student why was he absent the previous day.",
        "The teacher asked the student why he had been absent yesterday."
      ],
      "answer": "The teacher asked the student why he had been absent the previous day.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'were' (सामान्य भूतकाल) का 'had been' (पूर्ण भूतकाल) थशे. 'yesterday' का 'the previous day' थशे."
    },
    {
      "question": "He said, 'I ought to help him.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he ought to help him.",
        "He said that he should help him.",
        "He said that he had to help him.",
        "He said that he ought to have helped him."
      ],
      "answer": "He said that he ought to help him.",
      "explanation": "'ought to' यह नैतिक फरज दर्शाने वाला modal है और वह Indirect speech में बदलातुं नहीं."
    },
    {
      "question": "The man said, 'Let me have some water, I am thirsty.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The man requested for some water as he was thirsty.",
        "The man said to let him have some water as he was thirsty.",
        "The man asked for some water because he is thirsty.",
        "The man requested for some water and said he was thirsty."
      ],
      "answer": "The man requested for some water as he was thirsty.",
      "explanation": "यह विनती है. 'Let me have' के लिए 'requested for' प्रयोग कर सकते. दूसरा वाक्य कारण दर्शाता है इसलिए उसको 'as' से जोडी सकता. 'am' का 'was' थशे."
    },
    {
      "question": "The mother said to the daughter, 'Did you see the movie?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The mother asked the daughter if she had seen the movie.",
        "The mother asked the daughter if she saw the movie.",
        "The mother asked the daughter did you see the movie.",
        "The mother asked the daughter that if she had seen the movie."
      ],
      "answer": "The mother asked the daughter if she had seen the movie.",
      "explanation": "प्रश्नवाचक वाक्य है. 'Did you see' (सामान्य भूतकाल) का 'if she had seen' (पूर्ण भूतकाल) थशे. संयोजक के रूप में 'if' प्रयोग होगा."
    },
    {
      "question": "He said, 'What a pleasant surprise!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He exclaimed with delight that it was a pleasant surprise.",
        "He said that it was a pleasant surprise.",
        "He exclaimed what a pleasant surprise it was.",
        "He exclaimed that it was a very pleasant surprise."
      ],
      "answer": "He exclaimed with delight that it was a pleasant surprise.",
      "explanation": "उद्गार वाक्य है जो आनंद दर्शाता है. 'exclaimed with delight/joy' उचित Reporting Verb है. वाक्य को विधान में बदलने के लिए में आता है."
    },
    {
      "question": "They said, 'We are planning to visit the museum next month.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "They said that they were planning to visit the museum the following month.",
        "They said that we are planning to visit the museum next month.",
        "They said that they are planning to visit the museum the following month.",
        "They said that they were planning to visit the museum next month."
      ],
      "answer": "They said that they were planning to visit the museum the following month.",
      "explanation": "'are planning' का 'were planning' थशे. 'We' का 'they' थशे और 'next month' का 'the following month' थशे."
    }
  ],
  "test-20": [
    {
      "question": "He said to me, 'You were not helping me.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He told me that I had not been helping him.",
        "He told me that you were not helping him.",
        "He told me that I was not helping him.",
        "He complained that I had not been helping him."
      ],
      "answer": "He told me that I had not been helping him.",
      "explanation": "अपूर्ण भूतकाल ('were not helping') का अपूर्ण पूर्ण भूतकाल ('had not been helping') थशे. 'You' का 'I' और 'me' का 'him' थशे. 'complained' भी भाव अनुसार प्रयोग कर सकते."
    },
    {
      "question": "The officer said, 'If you confess your fault, you may be spared.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The officer said that if he confessed his fault, he might be spared.",
        "The officer said that if you confess your fault, you may be spared.",
        "The officer said that if he confessed his fault, he may be spared.",
        "The officer promised that if he confessed his fault, he might be spared."
      ],
      "answer": "The officer said that if he confessed his fault, he might be spared.",
      "explanation": "शर्त वाला वाक्य प्रकार-1 है. 'confess' (वर्तमान काल) का 'confessed' (भूतकाल) थशे. 'may' का 'might' थशे. 'you' का 'he' और 'your' का 'his' थशे."
    },
    {
      "question": "The saint said, 'Trust in God and do the right.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The saint advised us to trust in God and do the right.",
        "The saint said to trust in God and do the right.",
        "The saint preached that we should trust in God and do the right.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "यह उपदेशात्मक आज्ञार्थ वाक्य है. Reporting Verb के रूप में 'advised' या 'preached' प्रयोग कर सकते. 'advised' के साथ 'to' infinitive आता है, जब 'preached' के साथ 'that...should' की रचना आता है. 'us' या 'we' सौ को लागु पडे है."
    },
    {
      "question": "She said to me, 'Where are my books?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked me where her books were.",
        "She asked me where are her books.",
        "She asked me where her books are.",
        "She asked me that where her books were."
      ],
      "answer": "She asked me where her books were.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'asked' प्रयोग होगा. 'where' संयोजक बनशे. वाक्य विधान में फेरवाशे ('her books were'). 'my' का 'her' और 'are' का 'were' थशे."
    },
    {
      "question": "He said, 'Goodbye, cruel world!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He bade the cruel world goodbye.",
        "He said goodbye to the cruel world.",
        "He exclaimed goodbye to the cruel world.",
        "He wished the cruel world goodbye."
      ],
      "answer": "He bade the cruel world goodbye.",
      "explanation": "'Goodbye' के लिए Reporting verb 'bade'  का प्रयोग करना यह औपचारिक और उचित रीत है."
    },
    {
      "question": "I said to her, 'You must be quiet.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I told her that she had to be quiet.",
        "I told her that she must be quiet.",
        "I told her that she must have been quiet.",
        "I ordered her to be quiet."
      ],
      "answer": "I told her that she had to be quiet.",
      "explanation": "जब 'must' कोई विशेष समये पालवा की फरज दर्शावे, तब 'had to' का प्रयोग होता है. 'ordered' भी प्रयोग कर सकते, भी 'told' अधिक सामान्य है."
    },
    {
      "question": "The player said, 'Hurrah! My team has won the tournament.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The player exclaimed with joy that his team had won the tournament.",
        "The player said with joy that his team has won the tournament.",
        "The player exclaimed that his team won the tournament.",
        "The player exclaimed with joy that my team had won the tournament."
      ],
      "answer": "The player exclaimed with joy that his team had won the tournament.",
      "explanation": "'Hurrah!' आनंद व्यक्त करता है. 'exclaimed with joy' प्रयोग होगा. 'has won' का 'had won' थशे. 'My' का 'his' थशे."
    },
    {
      "question": "He said, 'I was a fool to trust her.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had been a fool to trust her.",
        "He confessed that he had been a fool to trust her.",
        "He said that he was a fool to trust her.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'was' (सामान्य भूतकाल) का 'had been' (पूर्ण भूतकाल) थशे. यहाँ पस्तावो या कबूलात का भाव होने के कारण 'confessed' Reporting Verb भी उचित है."
    },
    {
      "question": "She said to her mother, 'Can I wear this dress tonight?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked her mother if she could wear that dress that night.",
        "She asked her mother if she can wear this dress tonight.",
        "She asked her mother could she wear that dress that night.",
        "She asked her mother if she could wear this dress that night."
      ],
      "answer": "She asked her mother if she could wear that dress that night.",
      "explanation": "प्रश्नवाचक वाक्य है. 'asked' और 'if' प्रयोग होगा. 'can' का 'could', 'this' का 'that', और 'tonight' का 'that night' थशे."
    },
    {
      "question": "The father said, 'Let's plan a trip to Goa.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The father proposed that they should plan a trip to Goa.",
        "The father suggested that they should plan a trip to Goa.",
        "The father said to plan a trip to Goa.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Let's' वाला दरखास्तसूचक वाक्य में 'proposed' या 'suggested' के साथ 'that...should' की रचना प्रयोग होता है."
    }
  ],
  "test-21": [
    {
      "question": "'You are a cheat,' she said to me, 'I will never trust you again.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She called me a cheat and said that she would never trust me again.",
        "She told me I was a cheat and would never trust me again.",
        "She called me a cheat and I will never trust you again.",
        "She exclaimed that I was a cheat and she would never trust me again."
      ],
      "answer": "She called me a cheat and said that she would never trust me again.",
      "explanation": "यहाँ दो वाक्यों है. पहले वाक्य में 'You are a cheat' यह यहरोप है, इसलिए Reporting Verb 'called' (कज को बोलाव्यो) प्रयोग कर सकते. दूसरों वाक्य को 'and said that' से जोडी सकता. 'will' का 'would' और 'you' का 'me' थशे."
    },
    {
      "question": "He said, 'If I were you, I would not do that.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that if he had been me, he would not have done that.",
        "He said that if he were me, he would not do that.",
        "He advised me not to do that.",
        "Both B and C"
      ],
      "answer": "Both B and C",
      "explanation": "यह शर्त वाला वाक्य प्रकार-2 है, जो सलाह देता है. नियम अनुसार उसमैं काल बदलातो नहीं ('were' का 'were' और 'would' का 'would' रहता है). इसलिए विकल्प B सही है. हालांकि, इस वाक्य का मुख्य भाव सलाह देने का है, इसलिए 'He advised me not to do that.' भी एकदम सही और अधिक प्रचलित जवाब है."
    },
    {
      "question": "The boy said, 'Mother, please give me another cookie. I am still hungry.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy requested his mother to give him another cookie as he was still hungry.",
        "The boy told his mother to give him another cookie and said that he was still hungry.",
        "The boy requested his mother for another cookie because I am still hungry.",
        "The boy begged his mother for another cookie because he was still hungry."
      ],
      "answer": "The boy requested his mother to give him another cookie as he was still hungry.",
      "explanation": "पहेलुं वाक्य विनम्र आज्ञार्थ है ('requested...to give...'). दूसरा वाक्य कारण दर्शाता है, इसलिए उसको 'as' या 'because' से जोडी सकता. 'am' का 'was' थशे."
    },
    {
      "question": "'By God!' he said, 'I have not cheated you.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He swore by God that he had not cheated me.",
        "He said by God that he had not cheated me.",
        "He swore that he has not cheated me.",
        "He swore by God that he had not cheated you."
      ],
      "answer": "He swore by God that he had not cheated me.",
      "explanation": "'By God!' जैसे सोगंद लेवा के लिए के शब्दो के लिए Reporting Verb 'swore' (सोगंद खाधा) का प्रयोग होता है. 'have not cheated' का 'had not cheated' और 'you' का 'me' (सांभलकेर के रूप में धारी को) थशे."
    },
    {
      "question": "She said, 'Though this dress is expensive, I will buy it.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that though that dress was expensive, she would buy it.",
        "She said that though this dress was expensive, she would buy it.",
        "She said that though that dress is expensive, she will buy it.",
        "She said that that dress was expensive but she would buy it."
      ],
      "answer": "She said that though that dress was expensive, she would buy it.",
      "explanation": "यह मिश्र वाक्य है. 'though' वाला गौण वाक्य में 'this' का 'that' और 'is' का 'was' थशे. मुख्य वाक्य में 'will' का 'would' थशे."
    },
    {
      "question": "He said, 'When I was a student, I used to get up at 5 a.m.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that when he was a student, he used to get up at 5 a.m.",
        "He said that when he had been a student, he used to get up at 5 a.m.",
        "He said that when he was a student, he had used to get up at 5 a.m.",
        "He said that when he had been a student, he had got up at 5 a.m."
      ],
      "answer": "He said that when he was a student, he used to get up at 5 a.m.",
      "explanation": "जब 'when' वाला गौण वाक्य भूतकाल का कोई विशेष समय दर्शावे, तब उसका काल में बदलाव नहीं होता. 'used to' में भी बदलाव नहीं होता."
    },
    {
      "question": "The Fox said to the Grapes, 'You are sour.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The Fox said that the Grapes were sour.",
        "The Fox told the Grapes that they were sour.",
        "The Fox remarked that the Grapes were sour.",
        "The Fox called the Grapes sour."
      ],
      "answer": "The Fox called the Grapes sour.",
      "explanation": "यह वार्ता का जाणीतो प्रसंग है. यहाँ सीधा कहने के बजाय 'द्राक्ष खाटी है' एवुं कज को बोलावी. इसलिए 'called the Grapes sour' (द्राक्ष को खाटी कज) यह सौसे उचित और भानेज रूपांतर है. हालांकि, अन्य विकल्पो भी व्याकरण की द्रष्टियह गलत नहीं."
    },
    {
      "question": "'How do you do, Mrs. Das?' said Mr. Sharma. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "Mr. Sharma greeted Mrs. Das.",
        "Mr. Sharma asked Mrs. Das how she did.",
        "Mr. Sharma asked Mrs. Das how do you do.",
        "Mr. Sharma asked Mrs. Das how she was."
      ],
      "answer": "Mr. Sharma greeted Mrs. Das.",
      "explanation": "'How do you do?' यह एक औपचारिक अभिवादन (greeting) है, वह खरेखर प्रश्न नहीं. उसका जवाब भी 'How do you do?' ही होता है. इसलिए, Indirect Speech में उसको 'greeted' (अभिवादन किया) के रूप में दर्शावाय है."
    },
    {
      "question": "The boy said, 'It is useless to cry over spilt milk.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that it is useless to cry over spilt milk.",
        "The boy said that it was useless to cry over spilt milk.",
        "The boy remarked that it is useless to cry over spilt milk.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "'To cry over spilt milk' एक कहेवत है. कहेवतोके काल में बदलाव नहीं होता. Reporting verb के रूप में 'said' या 'remarked' (टिप्भीी कर) दोनों प्रयोग कर सकते."
    },
    {
      "question": "She said, 'What if the train is late?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She wondered what would happen if the train was late.",
        "She asked what would happen if the train was late.",
        "She asked what if the train was late.",
        "She worried what if the train were late."
      ],
      "answer": "She wondered what would happen if the train was late.",
      "explanation": "'What if...?' वाली रचना चिंता या शंका व्यक्त करता है और वह एक अधूरो प्रश्न है. Indirect Speech में उसको 'wondered what would happen if...' जैसी रचनासे पूर्ण करने में आता है. 'is' का 'was' थशे."
    }
  ],
  "test-22": [
    {
      "question": "The accused said to the judge, 'I am innocent. I did not commit this crime.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The accused pleaded that he was innocent and that he had not committed that crime.",
        "The accused told the judge that he was innocent and had not committed that crime.",
        "The accused pleaded his innocence and said he did not commit that crime.",
        "The accused pleaded that he is innocent and he had not committed that crime."
      ],
      "answer": "The accused pleaded that he was innocent and that he had not committed that crime.",
      "explanation": "यहरोपी जज समक्ष दलील करता है, इसलिए 'pleaded' (दलील कर) उचित Reporting Verb है. दो वाक्यों को 'and that' से जोडी सकता. 'am' का 'was', 'did not commit' का 'had not committed', और 'this' का 'that' थशे."
    },
    {
      "question": "He said, 'Let it rain as hard as it will, I must go.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he must go however hard it might rain.",
        "He was determined to go however hard it might rain.",
        "He said that even if it rained hard, he had to go.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "यह वाक्य द्रढ निश्चय बतावे है. 'Let it rain...'  का अर्थ 'चाहे जितना बारिश पडे...' होता है. उसको 'however hard it might rain' के रूप में रजू किया जा सकता. 'determined' (कृत्निश्चयी) जैसा शब्द भी भाव रजू करता है. 'must' यहाँ 'had to' में भी बदला जा सकता. तीनों विकल्पो अर्थ की द्रष्टियह सही है."
    },
    {
      "question": "She said, 'I must go to the wedding, whether I am invited or not.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she had to go to the wedding, whether she was invited or not.",
        "She was determined to go to the wedding, whether she was invited or not.",
        "She said that she must go to the wedding, whether she was invited or not.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'must' यहाँ मजबूत ईरादो या फरज दर्शाता है, जो का 'had to' होता है. वाक्य का एकंदर भाव द्रढ निश्चय का है, इसलिए 'was determined' भी एक उत्तम रीत है. 'am' का 'was' थशे."
    },
    {
      "question": "The boy said, 'Thank you, madam, for your help.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy respectfully thanked the lady for her help.",
        "The boy thanked the madam for her help.",
        "The boy said thank you to the madam for her help.",
        "The boy told the madam thank you for her help."
      ],
      "answer": "The boy respectfully thanked the lady for her help.",
      "explanation": "'Thank you' को Reporting verb 'thanked' में बदल जाता है. 'madam' जैसे आदरणीय शब्दो के लिए 'respectfully' जोड़ा जाता है और 'madam' को 'the lady' में बदला जा सकता है. 'your' का 'her' थशे."
    },
    {
      "question": "'You liar!' he said. 'You have deceived me.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He called me a liar and accused me of having deceived him.",
        "He called me a liar and said that I had deceived him.",
        "He said I was a liar and I have deceived him.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "पहले भाग में 'You liar!' यह संबोधन है, जिसे 'He called me a liar' के रूप में बदला जा सकता. दूसरों भाग में यहरोप है, जिसे 'and said that...' (या) 'and accused me of...' से जोडी सकता. 'have deceived' का 'had deceived' और 'you'/'me' का 'me'/'him' थशे."
    },
    {
      "question": "He said, 'If my car were working, I would drive you to the city.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that if his car were working, he would drive me to the city.",
        "He said that if his car had been working, he would have driven me to the city.",
        "He told me that if his car was working, he would drive me to the city.",
        "He said that if my car were working, he would drive me to the city."
      ],
      "answer": "He said that if his car were working, he would drive me to the city.",
      "explanation": "यह शर्त वाला वाक्य प्रकार-2 (अवास्तविक वर्तमान) है. नियम अनुसार, यहवा वाक्यों में Indirect Speech में काल बदलातो नहीं. केवल सर्वनाम 'my' का 'his' और 'you' का 'me' थशे."
    },
    {
      "question": "The king said, 'Let the next prisoner be brought in.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The king ordered that the next prisoner should be brought in.",
        "The king ordered them to bring the next prisoner in.",
        "The king commanded that the next prisoner be brought in.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "यह राजा का यहदेश है. 'ordered' या 'commanded' दोनों प्रयोग कर सकते. उसको 'that...should be' (या) 'to' infinitive से जोडी सकता. '...that the prisoner be brought in' (subjunctive mood) भी एक औपचारिक और सही रीत है."
    },
    {
      "question": "'Which of you has done this?' the teacher asked. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher asked which of them had done that.",
        "The teacher asked which of you had done this.",
        "The teacher demanded to know which of them had done that.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "WH-प्रश्नवाचक वाक्य है. शिक्षक के गुस्साके भाव को रजू करवा 'demanded to know' अधिक उचित है, भी 'asked' भी सही है. 'you' का 'them', 'has done' का 'had done' और 'this' का 'that' थशे."
    },
    {
      "question": "He said, 'I must remind you of your promise.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he must remind me of my promise.",
        "He said that he had to remind me of my promise.",
        "He told me that he had to remind me of my promise.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "जब 'must' याद अपाने की फरज दर्शावे, तब वह बदलातुं नहीं. हालांकि, उसको 'had to' में भी बदला जा सकता है. 'said' को 'told' में भी बदला जा सकता कारणया सांभलकेर 'me' स्पष्ट है. 'you' का 'me' और 'your' का 'my' थशे."
    },
    {
      "question": "She said, 'So help me, Heaven! I will not sin again.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She called upon Heaven to witness her resolve that she would not sin again.",
        "She swore by Heaven that she would not sin again.",
        "She asked Heaven to help her and resolved that she would not sin again.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "'So help me, Heaven!' यह स्वर्ग को साक्षी राखी को सोगंद लेवा की एक रीत है. उसको 'called upon Heaven to witness' (स्वर्ग को साक्षी के रूप में बोलाव्युं), 'swore by Heaven' (स्वर्गके सोगंद खाधा), या 'asked Heaven to help her and resolved' (स्वर्ग को मदद करवा कज को संकल्प किया) - यह सब रूप से व्यक्त किया जा सकता है."
    }
  ],
  "test-23": [
    {
      "question": "He said, 'Though he is my relative, I shall not spare him.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that though he was his relative, he would not spare him.",
        "He said that though he is his relative, he would not spare him.",
        "He said that though he was his relative, he shall not spare him.",
        "He admitted that though he was his relative, he would not spare him."
      ],
      "answer": "He said that though he was his relative, he would not spare him.",
      "explanation": "'Though' वाला मिश्र वाक्य में, दोनों भागके काल बदलाशे. 'is' का 'was', 'shall' का 'would' (क्योंकि अन्य पुरुष है) थशे. 'my' का 'his' थशे."
    },
    {
      "question": "The Prime Minister said, 'Let no one disturb the peace.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The Prime Minister ordered that no one should disturb the peace.",
        "The Prime Minister urged that no one should disturb the peace.",
        "The Prime Minister said that no one should disturb the peace.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह एक मजबूत यहदेश या यहग्रह है. 'ordered' (यहदेश यहप्यो) या 'urged' (यहग्रह किया) दोनों Reporting verb उचित है. वाक्य 'that no one should...' से जोडाशे."
    },
    {
      "question": "'Are you coming with us?' I said to him. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked him if he was coming with us.",
        "I asked him are you coming with us.",
        "I asked him if he is coming with us.",
        "I asked him that if he was coming with us."
      ],
      "answer": "I asked him if he was coming with us.",
      "explanation": "यह प्रश्नवाचक वाक्य है. संयोजक के रूप में 'if' प्रयोग होगा. 'Are you coming' (अपूर्ण वर्तमान काल) का 'if he was coming' (अपूर्ण भूतकाल) थशे. 'us' बदलाशे नहीं कारणया बोलकेर 'I'  का समैंवेश होता है."
    },
    {
      "question": "She said, 'I wish I had been born in a royal family.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She wished that she had been born in a royal family.",
        "She wished that she was born in a royal family.",
        "She said that she had been born in a royal family.",
        "She wished that she would be born in a royal family."
      ],
      "answer": "She wished that she had been born in a royal family.",
      "explanation": "यहाँ 'I wish' के साथ पूर्ण भूतकाल ('had been')  का प्रयोग थयो है, जो एक अशक्य इच्छा दर्शाता है. Indirect Speech में Reporting verb 'wished' थशे, भी Reported Speech के काल में कोई बदलाव नहीं होता."
    },
    {
      "question": "'Where do you live?' asked the stranger. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The stranger asked where I lived.",
        "The stranger enquired where I lived.",
        "The stranger asked where do I live.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'asked' या 'enquired' दोनों प्रयोग कर सकते. 'do you live' (सामान्य वर्तमान काल) का 'I lived' (सामान्य भूतकाल) थशे. सांभलकेर 'me' धारी लेवा का है."
    },
    {
      "question": "The boy said, 'What a piece of work is man!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy exclaimed that man is a wonderful piece of work.",
        "The boy said that man is a wonderful piece of work.",
        "The boy exclaimed what a piece of work man is.",
        "The boy remarked that man is a wonderful piece of work."
      ],
      "answer": "The boy exclaimed that man is a wonderful piece of work.",
      "explanation": "यह शेक्सपियर का प्रख्यात उद्गार वाक्य है, जो सार्वत्रिक सत्य जैसा है. इसलिए काल बदलाशे नहीं. 'exclaimed' या 'remarked' प्रयोग कर सकते. 'what a piece of work' को 'a wonderful piece of work' में फेरववुं उचित है."
    },
    {
      "question": "He said, 'I would have helped you if you had asked me.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he would have helped me if I had asked him.",
        "He said that he would have helped me if I had been asked him.",
        "He said that he would help me if I had asked him.",
        "He said that he would have helped you if you had asked him."
      ],
      "answer": "He said that he would have helped me if I had asked him.",
      "explanation": "यह शर्त वाला वाक्य प्रकार-3 (अशक्य भूतकाल) है. यहवा वाक्योंके काल में Indirect speech में कोई बदलाव नहीं होता. केवल सर्वनामो बदलाशे: 'you' का 'me' और 'me' का 'him'."
    },
    {
      "question": "She said, 'My son will be back on Friday.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that her son would be back on Friday.",
        "She said that her son will be back on Friday.",
        "She said that my son would be back on Friday.",
        "She hoped that her son would be back on Friday."
      ],
      "answer": "She said that her son would be back on Friday.",
      "explanation": "सादुं भविष्य काल का वाक्य है. 'will be' का 'would be' थशे और 'My' का 'her' थशे. 'on Friday' में कोई बदलाव नहीं होता."
    },
    {
      "question": "The teacher said, 'Who taught you grammar?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher asked who had taught me grammar.",
        "The teacher asked who taught me grammar.",
        "The teacher asked that who had taught me grammar.",
        "The teacher wanted to know who taught you grammar."
      ],
      "answer": "The teacher asked who had taught me grammar.",
      "explanation": "WH-प्रश्नवाचक वाक्य है, जो में 'who' कर्ता (Subject) है. 'taught' (सामान्य भूतकाल) का 'had taught' (पूर्ण भूतकाल) थशे. 'you' का 'me' (सांभलकेर के रूप में धारी को) थशे."
    },
    {
      "question": "He said to his master, 'Let me go home. My wife is ill.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He requested his master to let him go home as his wife was ill.",
        "He told his master to let him go home because his wife was ill.",
        "He requested his master that he might be allowed to go home as his wife was ill.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "'Let me go' विनती सूचित करता है. उसको 'requested... to let him go' (या) अधिक औपचारिक रूप से 'requested that he might be allowed to go' के रूप में बदला जा सकता. दूसरों वाक्य को 'as' या 'because' से जोडी सकता. 'is' का 'was' थशे."
    }
  ],
  "test-24": [
    {
      "question": "She said, 'Alas! I could not save my friend.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed with sorrow that she could not save her friend.",
        "She exclaimed with sorrow that she had not been able to save her friend.",
        "She said with sorrow that she could not save her friend.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Alas!' दुःख व्यक्त करता है. 'exclaimed with sorrow' उचित है. 'could not' में बदलाव नहीं होता, भी उसको 'had not been able to' में भी बदला जा सकता है, जो असमर्थता पर अधिक जोर मूया है. दोनों व्याकरण की द्रष्टियह स्वीकार्य है."
    },
    {
      "question": "He said, 'I was writing a novel, which is now finished.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had been writing a novel, which was then finished.",
        "He said that he was writing a novel, which was now finished.",
        "He said that he had been writing a novel, which is now finished.",
        "He said that he wrote a novel, which was then finished."
      ],
      "answer": "He said that he had been writing a novel, which was then finished.",
      "explanation": "'was writing' (अपूर्ण भूतकाल) का 'had been writing' (अपूर्ण पूर्ण भूतकाल) थशे. 'which' के बादके वाक्य में 'is' का 'was' और 'now' का 'then' थशे."
    },
    {
      "question": "The President said, 'Let us unite to fight the enemy.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The President urged the people to unite to fight the enemy.",
        "The President suggested that they should unite to fight the enemy.",
        "The President said that they should unite to fight the enemy.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह वाक्य यहह्वान या दरखास्त सूचित करता है. 'urged the people to...' (लोगों को यहग्रह किया या...) यह भानेज रूपांतर है. 'suggested that they should...' भी व्याकरण की द्रष्टियह सही है."
    },
    {
      "question": "'What do you want?' she said to him. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked him what he wanted.",
        "She asked him what did he want.",
        "She asked him what he wants.",
        "She asked him that what he wanted."
      ],
      "answer": "She asked him what he wanted.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'do you want' (सामान्य वर्तमान काल) का 'he wanted' (सामान्य भूतकाल) थशे. वाक्य विधान बनशे."
    },
    {
      "question": "He said, 'I saw this man long ago.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had seen that man long before.",
        "He said that he saw that man long before.",
        "He said that he had seen this man long ago.",
        "He said that he had seen that man long ago."
      ],
      "answer": "He said that he had seen that man long before.",
      "explanation": "'saw' (सामान्य भूतकाल) का 'had seen' (पूर्ण भूतकाल) थशे. 'this' का 'that' और 'ago' का 'before' होता है."
    },
    {
      "question": "The teacher said to me, 'What is the matter?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher asked me what the matter was.",
        "The teacher asked me what is the matter.",
        "The teacher asked me what the matter is.",
        "The teacher asked me that what the matter was."
      ],
      "answer": "The teacher asked me what the matter was.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'asked' प्रयोग होगा. 'what' संयोजक बनशे. वाक्य को विधान में बदलकर को 'the matter was' लखाशे. 'is' का 'was' थशे."
    },
    {
      "question": "She said, 'My uncle came yesterday, but he will leave tomorrow.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that her uncle had come the previous day, but he would leave the next day.",
        "She said that her uncle came yesterday, but he would leave tomorrow.",
        "She said that her uncle had come the previous day, but he will leave the next day.",
        "She said that her uncle had come yesterday, but he would leave tomorrow."
      ],
      "answer": "She said that her uncle had come the previous day, but he would leave the next day.",
      "explanation": "यह संयुक्त वाक्य है. पहले भाग में 'came' (सामान्य भूतकाल) का 'had come' (पूर्ण भूतकाल) और 'yesterday' का 'the previous day' थशे. दूसरों भाग में 'will leave' का 'would leave' और 'tomorrow' का 'the next day' थशे. 'My' का 'her' थशे."
    },
    {
      "question": "The captain said, 'Let us not waste our time in idle talk.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The captain urged his men not to waste their time in idle talk.",
        "The captain proposed that they should not waste their time in idle talk.",
        "The captain told his men not to waste our time in idle talk.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह नकारात्मक दरखास्त या यहग्रह है. 'urged... not to...' और 'proposed that they should not...' दोनों रचनाएँ सही है. 'us' और 'our' का 'his men' और 'their' में रूपांतर किया जा सकता."
    },
    {
      "question": "He said, 'Phew! It is very hot today.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He exclaimed that it was very hot that day.",
        "He said that it was very hot that day.",
        "He exclaimed that it is very hot today.",
        "He remarked that it was very hot that day."
      ],
      "answer": "He exclaimed that it was very hot that day.",
      "explanation": "'Phew!' यह गरमी या थाक का भाव व्यक्त करतो उद्गार है. Reporting Verb 'exclaimed' या 'remarked' प्रयोग कर सकते. 'is' का 'was' और 'today' का 'that day' थशे."
    },
    {
      "question": "I said to the students, 'Why have you been making a noise since yesterday?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked the students why they had been making a noise since the previous day.",
        "I asked the students why have you been making a noise since yesterday.",
        "I asked the students why they have been making a noise since the previous day.",
        "I asked the students why had they been making a noise since the previous day."
      ],
      "answer": "I asked the students why they had been making a noise since the previous day.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'have you been making' (अपूर्ण पूर्ण वर्तमान काल) का 'they had been making' (अपूर्ण पूर्ण भूतकाल) थशे. 'yesterday' का 'the previous day' थशे."
    }
  ],
  "test-25": [
    {
      "question": "The dying man said, 'I was a sinner, may God forgive me.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The dying man confessed that he had been a sinner and prayed that God might forgive him.",
        "The dying man said that he was a sinner and prayed God to forgive him.",
        "The dying man confessed that he was a sinner and asked God to forgive him.",
        "The dying man confessed that he had been a sinner and prayed that God might forgive me."
      ],
      "answer": "The dying man confessed that he had been a sinner and prayed that God might forgive him.",
      "explanation": "यह मिश्र वाक्य है. पहला भाग कबूलात है, इसलिए 'confessed' प्रयोग होगा और 'was' का 'had been' थशे. दूसरा भाग प्रार्थके है, इसलिए 'and prayed that' से जोडाशे, और 'may' का 'might' और 'me' का 'him' थशे."
    },
    {
      "question": "She said, 'I did not see the signal.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she had not seen the signal.",
        "She said that she did not see the signal.",
        "She said that she has not seen the signal.",
        "She denied seeing the signal."
      ],
      "answer": "She said that she had not seen the signal.",
      "explanation": "सामान्य भूतकाल का नकार ('did not see') पूर्ण भूतकाल के नकार ('had not seen') में फेरवाशे. 'denied seeing the signal' भी एक वैकल्पिक सही रीत है."
    },
    {
      "question": "He said to me, 'I expect you to attend the function.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He told me that he expected me to attend the function.",
        "He told me that he expects me to attend the function.",
        "He told me that I expected him to attend the function.",
        "He told me that he expected you to attend the function."
      ],
      "answer": "He told me that he expected me to attend the function.",
      "explanation": "'said to' का 'told' थशे. 'expect' का 'expected' थशे. 'I' का 'he' और 'you' का 'me' थशे."
    },
    {
      "question": "The boy said, 'Let's clean our room first.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy suggested that they should clean their room first.",
        "The boy proposed that they should clean their room first.",
        "The boy said to clean their room first.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "दरखास्तसूचक वाक्य है. 'suggested' या 'proposed' के साथ 'that...should' की रचना प्रयोग होता है. 'our' का 'their' थशे."
    },
    {
      "question": "The saint said to his disciples, 'What you sow, so shall you reap.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The saint preached to his disciples that as they sowed, so they would reap.",
        "The saint told his disciples that what they sow, so they shall reap.",
        "The saint advised his disciples that what they sowed, so they would reap.",
        "The saint preached that as you sow, so you will reap."
      ],
      "answer": "The saint preached to his disciples that as they sowed, so they would reap.",
      "explanation": "यह एक कहेवत जैसा वाक्य है, जो उपदेश देता है. 'preached' (उपदेश यहप्यो) उचित verb है. 'What you sow...' को 'as they sowed...' में बदला जा सकता. 'sow' का 'sowed' और 'shall reap' का 'would reap' थशे. 'you' का 'they' थशे."
    },
    {
      "question": "He said, 'I must have left my keys in the car.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he must have left his keys in the car.",
        "He thought that he might have left his keys in the car.",
        "He said that he had to have left his keys in the car.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "जब 'must have' भूतकाल की शक्यता या अनुमैंन दर्शावे, तब उसमैं बदलाव नहीं होता. यह अनुमैंन होने के कारण, 'said' को बदले 'thought' या 'surmised' जैसे शब्दो भी प्रयोग कर सकते है."
    },
    {
      "question": "'How beautiful the rain is!' she said. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed that the rain was very beautiful.",
        "She exclaimed how beautiful the rain was.",
        "She said that the rain was very beautiful.",
        "She exclaimed that the rain is very beautiful."
      ],
      "answer": "She exclaimed that the rain was very beautiful.",
      "explanation": "उद्गार वाक्य है. 'exclaimed' प्रयोग होगा. 'How beautiful' को 'very beautiful' में बदलकर को वाक्य को विधान बकेवाय है. 'is' का 'was' थशे."
    },
    {
      "question": "The judge said to the witness, 'Do you have anything to say?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The judge asked the witness if he had anything to say.",
        "The judge asked the witness if he has anything to say.",
        "The judge asked the witness do you have anything to say.",
        "The judge enquired of the witness if he had anything to say."
      ],
      "answer": "The judge asked the witness if he had anything to say.",
      "explanation": "प्रश्नवाचक वाक्य है. 'asked' और 'if' प्रयोग होगा. 'do you have' का 'if he had' थशे. 'enquired of' भी प्रयोग कर सकते."
    },
    {
      "question": "He said, 'When I lived in Delhi, my neighbours often helped me.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that when he lived in Delhi, his neighbours had often helped him.",
        "He said that when he had lived in Delhi, his neighbours had often helped him.",
        "He said that when he lived in Delhi, his neighbours often helped him.",
        "He said that when he had lived in Delhi, his neighbours often helped him."
      ],
      "answer": "He said that when he lived in Delhi, his neighbours had often helped him.",
      "explanation": "'when' वाला गौण वाक्य समय दर्शाता है, इसलिए उसका काल ('lived') बदलाशे नहीं. मुख्य वाक्य 'my neighbours often helped me' (सामान्य भूतकाल) पूर्ण भूतकाल ('his neighbours had often helped him') में फेरवाशे."
    },
    {
      "question": "The girl said, 'I would study hard if I were a student again.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The girl said that she would study hard if she were a student again.",
        "The girl wished that she could study hard by being a student again.",
        "The girl said that she would have studied hard if she had been a student again.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह शर्त वाला वाक्य प्रकार-2 है, जो अवास्तविक इच्छा दर्शाता है. नियम अनुसार काल बदलातो नहीं (विकल्प A). हालांकि, यह एक इच्छा होने के कारण उसको 'The girl wished that...' के रूप में भी रजू किया जा सकता है (विकल्प B)."
    }
  ],
  "test-26": [
    {
      "question": "He said to me, 'I should have warned you.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He told me that he should have warned me.",
        "He regretted that he had not warned me.",
        "He said that he should have warned me.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'should have' + V3 भूतकाल की न हुई क्रिया के लिए अफसोस बतावे है. इसलिए, वाक्य एम का एम राखी सकता (विकल्प A). उसका भाव पस्तावा का होने के कारण 'regretted' (अफसोस व्यक्त किया) Reporting Verb  का प्रयोग करना अधिक भानेज है (विकल्प B)."
    },
    {
      "question": "The boy said, 'I must go now as my father is waiting for me.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that he had to go then as his father was waiting for him.",
        "The boy said that he must go now as his father is waiting for him.",
        "The boy said that he had to go then because his father is waiting for him.",
        "The boy said he had to go as his father was waiting for him."
      ],
      "answer": "The boy said that he had to go then as his father was waiting for him.",
      "explanation": "'must' का 'had to', 'now' का 'then', 'is waiting' का 'was waiting', 'my' का 'his' और 'me' का 'him' थशे."
    },
    {
      "question": "She said, 'Let us see the film.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She suggested that they should see the film.",
        "She proposed that they should see the film.",
        "She said to see the film.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह दरखास्त है. 'suggested' या 'proposed' के साथ 'that...should' की रचना प्रयोग होता है."
    },
    {
      "question": "The teacher said to Rahul, 'What is the capital of France?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher asked Rahul what the capital of France is.",
        "The teacher asked Rahul what the capital of France was.",
        "The teacher asked Rahul that what the capital of France is.",
        "The teacher asked Rahul what is the capital of France."
      ],
      "answer": "The teacher asked Rahul what the capital of France is.",
      "explanation": "यह भौगोलिक हकीकत (Geographical Fact) है, जो सनातन सत्य जैसा है. इसलिए, Reported Speech  का काल बदलाशे नहीं, भले ही Reporting verb भूतकाल में हो. वाक्य विधान बनशे, यानी 'what the capital of France is' एम लखाशे."
    },
    {
      "question": "He said, 'If it does not rain, we shall go out.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that if it did not rain, they would go out.",
        "He said that if it does not rain, they shall go out.",
        "He said that if it did not rain, they will go out.",
        "He said that unless it rained, they would go out."
      ],
      "answer": "He said that if it did not rain, they would go out.",
      "explanation": "शर्त वाला वाक्य प्रकार-1 है. 'if' वाला वाक्य में 'does not rain' (सामान्य वर्तमान काल) का 'did not rain' (सामान्य भूतकाल) थशे. मुख्य वाक्य में 'shall' का 'would' थशे. 'we' का 'they' थशे."
    },
    {
      "question": "'Come in, gentlemen,' said the host. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The host invited the gentlemen to come in.",
        "The host told the gentlemen to come in.",
        "The host asked the gentlemen to come in.",
        "The host welcomed the gentlemen to come in."
      ],
      "answer": "The host invited the gentlemen to come in.",
      "explanation": "आज्ञार्थ वाक्य है, भी यहाँ भाव आमंत्रण का है. इसलिए Reporting Verb 'invited' या 'welcomed' सौसे उचित है. 'gentlemen' यह संबोधन है, जो object के रूप में यहवशे."
    },
    {
      "question": "She said, 'What a horrible sight!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed that it was a horrible sight.",
        "She exclaimed that it was a very horrible sight.",
        "She exclaimed what a horrible sight it was.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "उद्गार वाक्य है. 'exclaimed' प्रयोग होगा. 'what a' को 'a' (या) 'a very' में बदला जा सकता. दोनों विकल्प सही है."
    },
    {
      "question": "The boy said to his mother, 'Why did you not wash my clothes?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy asked his mother why she had not washed his clothes.",
        "The boy asked his mother why she did not wash his clothes.",
        "The boy asked his mother why had she not washed his clothes.",
        "The boy asked his mother that why she had not washed his clothes."
      ],
      "answer": "The boy asked his mother why she had not washed his clothes.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'did you not wash' (सामान्य भूतकाल नकार) का 'she had not washed' (पूर्ण भूतकाल नकार) थशे. 'my' का 'his' थशे."
    },
    {
      "question": "He said, 'I was absent for two days.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had been absent for two days.",
        "He said that he was absent for two days.",
        "He informed that he had been absent for two days.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "'was' (सामान्य भूतकाल) का 'had been' (पूर्ण भूतकाल) थशे. यह एक जानकारी है, इसलिए Reporting Verb के रूप में 'said' को बदले 'informed' (जाण कर) भी प्रयोग कर सकते है."
    },
    {
      "question": "The girl said, 'I must get a new dress for the party.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The girl said that she had to get a new dress for the party.",
        "The girl said that she must get a new dress for the party.",
        "The girl said that she would have to get a new dress for the party.",
        "The girl said that she must have got a new dress for the party."
      ],
      "answer": "The girl said that she had to get a new dress for the party.",
      "explanation": "यहाँ 'must' वर्तमान समय की जरूरियात दर्शाता है. इसलिए Indirect Speech में उसका 'had to' थशे."
    }
  ],
  "test-27": [
    {
      "question": "He said, 'I have a toothache.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he had a toothache.",
        "He said that he has a toothache.",
        "He complained that he had a toothache.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "यहाँ 'have' मुख्य क्रिया (Verb) के रूप में सामान्य वर्तमान काल में है, इसलिए उसका भूतकाल 'had' थशे. दांत का दुःखावो एक फरियाद है, इसलिए Reporting Verb के रूप में 'complained' भी प्रयोग कर सकते है."
    },
    {
      "question": "She said, 'My God! You have come back.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She exclaimed with surprise that he had come back.",
        "She exclaimed that he has come back.",
        "She said My God that he had come back.",
        "She exclaimed with surprise that you had come back."
      ],
      "answer": "She exclaimed with surprise that he had come back.",
      "explanation": "'My God!' यहश्चर्य व्यक्त करता है. 'exclaimed with surprise' उचित है. 'have come' का 'had come' थशे. 'you' का 'he' (सांभलकेर के रूप में धारी को) थशे."
    },
    {
      "question": "I said to her, 'Is this your book?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I asked her if that was her book.",
        "I asked her if this was her book.",
        "I asked her is this her book.",
        "I asked her that if that was her book."
      ],
      "answer": "I asked her if that was her book.",
      "explanation": "प्रश्नवाचक वाक्य है. संयोजक 'if' प्रयोग होगा. 'is' का 'was' और 'this' का 'that' थशे. वाक्य विधान बनशे."
    },
    {
      "question": "The teacher said, 'The First World War started in 1914.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher said that the First World War started in 1914.",
        "The teacher said that the First World War had started in 1914.",
        "The teacher taught that the First World War started in 1914.",
        "The teacher informed that the First World War had started in 1914."
      ],
      "answer": "The teacher said that the First World War started in 1914.",
      "explanation": "यह एक ऐतिहासिक हकीकत है. ऐतिहासिक तथ्योंके काल में Indirect Speech में बदलाव नहीं होता."
    },
    {
      "question": "He said, 'Let us hope for the best.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that they should hope for the best.",
        "He wished that they should hope for the best.",
        "He suggested that they should hope for the best.",
        "Both B and C"
      ],
      "answer": "Both B and C",
      "explanation": "यहाँ 'Let us hope' यह इच्छा या दरखास्त जैसा भाव व्यक्त करता है. 'wished' या 'suggested' दोनों Reporting Verb के रूप में प्रयोग कर सकते और वाक्य 'that...should' से जोडाय है."
    },
    {
      "question": "The boy said to the principal, 'Thank you, sir. I shall never forget your kindness.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy respectfully thanked the principal and said that he would never forget his kindness.",
        "The boy thanked the principal and said he will never forget your kindness.",
        "The boy respectfully thanked the principal and said that he would never forget your kindness.",
        "The boy thanked the principal and promised that he would never forget his kindness."
      ],
      "answer": "The boy respectfully thanked the principal and said that he would never forget his kindness.",
      "explanation": "पहले 'Thank you, sir' को 'respectfully thanked the principal' में फेरवाय. दूसरों वाक्य को 'and said that' से जोडी को 'I' का 'he', 'shall' का 'would' और 'your' का 'his' थशे."
    },
    {
      "question": "She said, 'I was taking my exam when the fire broke out.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that she had been taking her exam when the fire broke out.",
        "She said that she was taking her exam when the fire broke out.",
        "She said that she was taking her exam when the fire had broken out.",
        "She said that she had been taking her exam when the fire had broken out."
      ],
      "answer": "She said that she had been taking her exam when the fire broke out.",
      "explanation": "जब दो भूतकाल की क्रियाओ हो, तब मुख्य क्रिया का काल बदलाय. 'was taking' (अपूर्ण भूतकाल) का 'had been taking' (अपूर्ण पूर्ण भूतकाल) थशे. 'when' के बादके गौण वाक्य 'the fire broke out' (सामान्य भूतकाल) के काल में बदलाव नहीं होता."
    },
    {
      "question": "He said to me, 'How many brothers have you?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He asked me how many brothers I had.",
        "He asked me how many brothers do you have.",
        "He asked me how many brothers I have.",
        "He asked me that how many brothers I had."
      ],
      "answer": "He asked me how many brothers I had.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'How many brothers' संयोजक बनशे. 'have you?' (यहाँ 'do you have?' के अर्थ में) का 'I had' थशे और वाक्य विधान बनशे."
    },
    {
      "question": "The mother said to the child, 'Don't touch the fire.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The mother warned the child not to touch the fire.",
        "The mother forbade the child to touch the fire.",
        "The mother told the child not to touch the fire.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "यह नकारात्मक आज्ञार्थ वाक्य है. यहाँ चेतावनी ('warned'), मकेई ('forbade'), या सामान्य कथन ('told') तीनों Reporting Verb भाव अनुसार सही है. 'forbade' के साथ 'not' आता है नहीं."
    },
    {
      "question": "He said, 'I would do it if I were allowed.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that he would do it if he were allowed.",
        "He said that he would have done it if he had been allowed.",
        "He said that he would do it if he was allowed.",
        "He wished to do it if he were allowed."
      ],
      "answer": "He said that he would do it if he were allowed.",
      "explanation": "यह शर्त वाला वाक्य प्रकार-2 है. नियम अनुसार, यहवा वाक्यों में Indirect speech में काल बदलातो नहीं. इसलिए वाक्य एम ही रथेशे, केवल 'I' का 'he' थशे."
    }
  ],
  "test-28": [
    {
      "question": "She said to her son, 'Where did you put the keys I gave you yesterday?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked her son where he had put the keys she had given him the previous day.",
        "She asked her son where he put the keys she gave him yesterday.",
        "She asked her son where had he put the keys she had given him the previous day.",
        "She asked her son where he had put the keys I had given him the previous day."
      ],
      "answer": "She asked her son where he had put the keys she had given him the previous day.",
      "explanation": "यह जटिल प्रश्नवाचक वाक्य है. 'did you put' (सामान्य भूतकाल) का 'he had put' (पूर्ण भूतकाल) थशे. विशेषण वाकहाँश 'I gave you' में भी 'gave' (सामान्य भूतकाल) का 'she had given him' (पूर्ण भूतकाल) थशे. 'yesterday' का 'the previous day' थशे."
    },
    {
      "question": "He said, 'O for a glass of water!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He earnestly wished for a glass of water.",
        "He exclaimed that he wanted a glass of water.",
        "He asked for a glass of water.",
        "He said O for a glass of water."
      ],
      "answer": "He earnestly wished for a glass of water.",
      "explanation": "'O for...' वाली रचना तीव्र इच्छा व्यक्त करता है. इसलिए, Reporting verb के रूप में 'earnestly wished for' (बहुत इच्छा व्यक्त कर) या 'longed for' का प्रयोग होता है."
    },
    {
      "question": "The teacher said, 'If you had worked hard, you would have passed.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher said that if he had worked hard, he would have passed.",
        "The teacher told him that if he had worked hard, he would have passed.",
        "The teacher said that if he worked hard, he would pass.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह शर्त वाला वाक्य प्रकार-3 है (अशक्य भूतकाल). यहवा वाक्योंके काल में Indirect speech में कोई बदलाव नहीं होता. 'said' को 'told him' में भी बदला जा सकता जो सांभलकेर स्पष्ट हो."
    },
    {
      "question": "I said to my friend, 'Let us go to a restaurant for a change.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "I suggested to my friend that we should go to a restaurant for a change.",
        "I asked my friend to go to a restaurant for a change.",
        "I told my friend that we shall go to a restaurant for a change.",
        "I proposed my friend that we should go to a restaurant for a change."
      ],
      "answer": "I suggested to my friend that we should go to a restaurant for a change.",
      "explanation": "यह दरखास्त है. 'suggested to' के साथ 'that we should' की रचना प्रयोग होता है. 'we' बदलाशे नहीं कारणया बोलकेर 'I' भी उसमैं सामेल है."
    },
    {
      "question": "'You must not break your promise,' said the father to his son. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The father told his son that he must not break his promise.",
        "The father ordered his son not to break his promise.",
        "The father reminded his son that he must not break his promise.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "'must not' मकेई दर्शाता है और वह बदलातुं नहीं. यहाँ 'told', 'ordered', या 'reminded' (याद अपाव्युं) - तीनों Reporting Verb भाव अनुसार सही है."
    },
    {
      "question": "He said, 'What a surprise to see you here!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He exclaimed with surprise that it was a great surprise to see me there.",
        "He told me that it was a surprise to see me there.",
        "He exclaimed what a surprise it was to see me there.",
        "He said that it was a great surprise to see me there."
      ],
      "answer": "He exclaimed with surprise that it was a great surprise to see me there.",
      "explanation": "यहश्चर्य व्यक्त करतुं उद्गार वाक्य है. 'exclaimed with surprise' उचित है. 'you' का 'me' और 'here' का 'there' थशे. 'what a' को 'a great' में फेरववुं अधिक भानेज है."
    },
    {
      "question": "The boy said, 'I'd rather starve than steal.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that he would rather starve than steal.",
        "The boy said that he had rather starve than steal.",
        "The boy said that he would prefer to starve than steal.",
        "The boy decided that he would rather starve than steal."
      ],
      "answer": "The boy said that he would rather starve than steal.",
      "explanation": "'I'd rather' ('I would rather') वाली रचना चयन दर्शाता है और वह Indirect Speech में बदलाती नहीं."
    },
    {
      "question": "She said to me, 'How have you managed this?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked me how I had managed that.",
        "She asked me how have you managed this.",
        "She asked me that how I had managed that.",
        "She wondered how I had managed that."
      ],
      "answer": "She asked me how I had managed that.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'have you managed' (पूर्ण वर्तमान काल) का 'I had managed' (पूर्ण भूतकाल) थशे. 'this' का 'that' थशे. 'wondered' भी प्रयोग कर सकते."
    },
    {
      "question": "The teacher said, 'Time and tide wait for none.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher said that time and tide wait for none.",
        "The teacher said that time and tide waited for none.",
        "The teacher preached that time and tide wait for none.",
        "The teacher advised that time and tide waits for none."
      ],
      "answer": "The teacher said that time and tide wait for none.",
      "explanation": "यह एक प्रचलित कहेवत (proverb) है. कहेवतोके काल में Indirect Speech में बदलाव नहीं होता."
    },
    {
      "question": "He said, 'Let's give a party.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He suggested giving a party.",
        "He suggested that they should give a party.",
        "He said to give a party.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "दरखास्तसूचक वाक्य है. 'suggested' के बाद सीधा gerund ('giving') प्रयोग कर सकते (विकल्प A), (या) 'that...should' वाली रचना भी प्रयोग कर सकते (विकल्प B). दोनों सही है."
    }
  ],
  "test-29": [
    {
      "question": "He said, 'When the cat is away, the mice will play.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that when the cat is away, the mice will play.",
        "He said that when the cat was away, the mice would play.",
        "He remarked that when the cat is away, the mice will play.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "यह एक कहेवत है. कहेवतोके काल में सामान्य रूप से बदलाव नहीं होता. Reporting verb के रूप में 'said' या 'remarked' (टिप्भीी कर) दोनों प्रयोग कर सकते है."
    },
    {
      "question": "She said to her friend, 'Will you help me carry this box?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked her friend if she would help her carry that box.",
        "She requested her friend to help her carry that box.",
        "She asked her friend would you help me carry this box.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह वाक्य प्रश्न भी है और विनती भी है. इसलिए, 'asked if she would...' (विकल्प A) और 'requested... to help...' (विकल्प B) दोनों रचनाएँ सही है. 'this' का 'that' थशे."
    },
    {
      "question": "The boy said, 'I did not know the answer, so I kept quiet.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that as he had not known the answer, he had kept quiet.",
        "The boy said that he did not know the answer, so he kept quiet.",
        "The boy said that because he had not known the answer, he kept quiet.",
        "The boy said that he had not known the answer, so he kept quiet."
      ],
      "answer": "The boy said that as he had not known the answer, he had kept quiet.",
      "explanation": "यहाँ दो क्रियाओ है. 'did not know' (सामान्य भूतकाल) का 'had not known' (पूर्ण भूतकाल) थशे. 'kept quiet' (सामान्य भूतकाल) का भी 'had kept quiet' (पूर्ण भूतकाल) थशे. 'so' (इसलिए) को बदले 'as' (क्योंकि) से वाक्य जोड़के अधिक स्वाभाविक लगता है."
    },
    {
      "question": "He said, 'Ah! The little bird is dead.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He exclaimed with sorrow that the little bird was dead.",
        "He said that the little bird was dead.",
        "He exclaimed sadly that the little bird was dead.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "'Ah!' दुःख व्यक्त करतो उद्गार है. 'exclaimed with sorrow' या 'exclaimed sadly' दोनों Reporting verb के रूप में प्रयोग कर सकते है. 'is' का 'was' थशे."
    },
    {
      "question": "The teacher said to the latecomer, 'Why are you so late today?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The teacher asked the latecomer why he was so late that day.",
        "The teacher asked the latecomer why he is so late today.",
        "The teacher demanded of the latecomer why he was so late that day.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "WH-प्रश्नवाचक वाक्य है. 'asked' (या) सख्ताईके भाव के लिए 'demanded of' प्रयोग कर सकते. 'are' का 'was' और 'today' का 'that day' थशे. वाक्य विधान बनशे."
    },
    {
      "question": "She said, 'We had a lovely time here.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that they had had a lovely time there.",
        "She said that they had a lovely time there.",
        "She said that we had a lovely time here.",
        "She exclaimed that they had had a lovely time there."
      ],
      "answer": "She said that they had had a lovely time there.",
      "explanation": "यहाँ 'had' मुख्य क्रिया (Verb) के रूप में सामान्य भूतकाल में है. इसलिए वह पूर्ण भूतकाल ('had had') में फेरवाशे. 'We' का 'they' और 'here' का 'there' थशे."
    },
    {
      "question": "The son said, 'Father, let me manage my own affairs.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The son requested his father to let him manage his own affairs.",
        "The son wished that he might be allowed to manage his own affairs.",
        "The son told his father to let him manage his own affairs.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Let me' वाली विनम्र रचना है. 'requested... to let him...' (या) अधिक औपचारिक रूप से 'wished that he might be allowed to...' दोनों रूप से बदला जा सकता है."
    },
    {
      "question": "'Have you anything to say on behalf of the accused?' said the judge. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The judge asked him if he had anything to say on behalf of the accused.",
        "The judge asked him have you anything to say on behalf of the accused.",
        "The judge asked if he has anything to say on behalf of the accused.",
        "The judge asked him whether he had anything to say on behalf of the accused."
      ],
      "answer": "The judge asked him if he had anything to say on behalf of the accused.",
      "explanation": "प्रश्नवाचक वाक्य है. 'asked' और 'if/whether' प्रयोग होगा. सांभलकेर के रूप में 'him' उमेरवुं उचित है. 'Have you' का 'if he had' थशे."
    },
    {
      "question": "He said, 'What a fool I was!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He confessed with regret that he had been a great fool.",
        "He exclaimed that he had been a great fool.",
        "He said that he was a great fool.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "पस्तावो व्यक्त करतुं उद्गार वाक्य है. 'confessed with regret' या 'exclaimed' दोनों प्रयोग कर सकते. 'was' का 'had been' थशे और 'what a' का 'a great' थशे."
    },
    {
      "question": "The students said, 'Let us have a holiday tomorrow.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The students proposed that they should have a holiday the next day.",
        "The students requested that they might have a holiday the next day.",
        "The students said that they should have a holiday the next day.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "यह दरखास्त ('proposed that... should') भी होई शया और विनती ('requested that... might') भी होई शया. दोनों भाव यहाँ बंधबेसता है. 'tomorrow' का 'the next day' थशे."
    }
  ],
  "test-30": [
    {
      "question": "He said, 'A thing of beauty is a joy forever.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that a thing of beauty is a joy forever.",
        "He said that a thing of beauty was a joy forever.",
        "He commented that a thing of beauty is a joy forever.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "यह एक प्रख्यात कविता की पंक्ति और सार्वत्रिक विचार है. इसलिए, उसका काल बदलाशे नहीं. Reporting Verb के रूप में 'said' या 'commented' (टिप्भीी कर) प्रयोग कर सकते है."
    },
    {
      "question": "The boy said, 'I did not break the slate. My sister did it.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The boy said that he had not broken the slate and that his sister had done it.",
        "The boy denied having broken the slate and said that his sister had done it.",
        "The boy said that he did not break the slate and his sister did it.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "पहले वाक्य में नकार है, जिसे 'said that he had not broken' (या) 'denied having broken' के रूप में लिखी सकता. दूसरा वाक्य 'and that...' से जोडाय है, जो में 'did' का 'had done' थशे."
    },
    {
      "question": "She said to her boss, 'Can I take a leave tomorrow?' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She asked her boss if she could take a leave the next day.",
        "She asked her boss if she can take a leave tomorrow.",
        "She requested her boss if she could take a leave the next day.",
        "She asked her boss that if she could take a leave the next day."
      ],
      "answer": "She asked her boss if she could take a leave the next day.",
      "explanation": "यह अनुमति  मैंगतो प्रश्न है. 'asked' और 'if' प्रयोग होगा. 'Can' का 'could' और 'tomorrow' का 'the next day' थशे. 'requested' भी प्रयोग कर सकते, भी 'asked' अधिक सामान्य है."
    },
    {
      "question": "He said, 'If I had the tools, I could mend the car.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He said that if he had had the tools, he could have mended the car.",
        "He said that if he had the tools, he could mend the car.",
        "He said that if he had had the tools, he could mend the car.",
        "He said that if he had the tools, he could have mended the car."
      ],
      "answer": "He said that if he had had the tools, he could have mended the car.",
      "explanation": "शर्त वाला वाक्य प्रकार-2 है. Indirect में वह प्रकार-3 में बदल जाता है. 'had' (सामान्य भूतकाल) का 'had had' (पूर्ण भूतकाल) और 'could mend' का 'could have mended' थशे."
    },
    {
      "question": "'Don't be a fool,' he said to me. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He advised me not to be a fool.",
        "He told me not to be a fool.",
        "He warned me not to be a fool.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "यह नकारात्मक आज्ञार्थ वाक्य है. यहाँ सलाह ('advised'), सामान्य कथन ('told'), या चेतावनी ('warned')  का भाव हो सकता है. तीनों Reporting Verb सही है. वाक्य 'not to' से जोडाय है."
    },
    {
      "question": "The student said, 'Let me try once more.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The student requested that he might be allowed to try once more.",
        "The student wanted to try once more.",
        "The student asked to try once more.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "'Let me' वाली रचना विनती या इच्छा दर्शाता है. 'requested that he might be allowed to...', 'wanted to...', और 'asked to...' - यह तीनों तरीकेसे उसको व्यक्त किया जा सकता है."
    },
    {
      "question": "He said, 'What a clever answer!' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He exclaimed that it was a very clever answer.",
        "He remarked that it was a very clever answer.",
        "He exclaimed what a clever answer it was.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "उद्गार वाक्य है. Reporting Verb के रूप में 'exclaimed' या 'remarked' (टिप्भीी कर) प्रयोग कर सकते. 'What a' को 'a very' में बदलकर को वाक्य को विधान बकेवाय है."
    },
    {
      "question": "She said, 'My parents are arriving tomorrow.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "She said that her parents were arriving the next day.",
        "She said that my parents were arriving the next day.",
        "She said that her parents are arriving tomorrow.",
        "She said that her parents would be arriving the next day."
      ],
      "answer": "She said that her parents were arriving the next day.",
      "explanation": "'are arriving' (अपूर्ण वर्तमान काल) का 'were arriving' (अपूर्ण भूतकाल) थशे. 'My' का 'her' और 'tomorrow' का 'the next day' थशे."
    },
    {
      "question": "'Which way did she go?' asked the policeman. वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "The policeman enquired which way she had gone.",
        "The policeman asked which way did she go.",
        "The policeman asked which way she went.",
        "The policeman enquired which way had she gone."
      ],
      "answer": "The policeman enquired which way she had gone.",
      "explanation": "WH-प्रश्नवाचक वाक्य है. पूछपरछ के लिए 'enquired' अधिक उचित है. 'did she go' (सामान्य भूतकाल) का 'she had gone' (पूर्ण भूतकाल) थशे और वाक्य विधान बनशे."
    },
    {
      "question": "He said, 'Had I the wings of a dove, I would fly away.' वाक्य को Indirect Speech में फेरवो.",
      "options": [
        "He wished that he had had the wings of a dove to fly away.",
        "He said that if he had the wings of a dove, he would fly away.",
        "He wished that if he had the wings of a dove, he would fly away.",
        "He wished for the wings of a dove to fly away."
      ],
      "answer": "He wished that he had had the wings of a dove to fly away.",
      "explanation": "'Had I...' से शुरू होता वाक्य 'If I had...' जैसी अवास्तविक शरत दर्शाता है. यह एक इच्छा है, इसलिए Reporting Verb 'wished' थशे. शर्त वाला वाक्य प्रकार-2 होने के कारण, वह प्रकार-3 में फेरवाशे, यानी 'had' का 'had had' थशे. 'I would fly' को 'to fly' में बदला जा सकता."
    }
  ]
};
