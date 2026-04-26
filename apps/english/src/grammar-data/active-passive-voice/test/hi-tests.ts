import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "Change the voice: He writes a letter.",
      "options": [
        "A letter is written by him.",
        "A letter was written by him.",
        "A letter will be written by him.",
        "A letter is being written by him."
      ],
      "answer": "A letter is written by him.",
      "explanation": "यह वाक्य सामान्य वर्तमान काल में है. पैसिव वॉयस में बदलते समय 'is/am/are + V3' का प्रयोग होता है. 'A letter' एकवचन होने के कारण 'is written' का प्रयोग होगा."
    },
    {
      "question": "Change the voice: They play cricket.",
      "options": [
        "Cricket was played by them.",
        "Cricket is played by them.",
        "Cricket will be played by them.",
        "Cricket is being played by them."
      ],
      "answer": "Cricket is played by them.",
      "explanation": "यह वाक्य सामान्य वर्तमान काल में है. कर्म (Object) 'Cricket' को कर्ता (Subject) बनाकर, 'is' और 'play' का Past Participle (V3) 'played' रखा जाता है."
    },
    {
      "question": "Change the voice: She helps me.",
      "options": [
        "I am helped by her.",
        "I was helped by her.",
        "She is helped by me.",
        "I will be helped by her."
      ],
      "answer": "I am helped by her.",
      "explanation": "कर्म (Object) 'me' का कर्ता (Subject) 'I' होता है. 'I' के साथ सामान्य वर्तमान काल के पैसिव वॉयस में 'am' और 'help' का V3 'helped' प्रयोग होता है."
    },
    {
      "question": "Change the voice: We respect our elders.",
      "options": [
        "Our elders were respected by us.",
        "Our elders are respected by us.",
        "Our elders will be respected by us.",
        "We are respected by our elders."
      ],
      "answer": "Our elders are respected by us.",
      "explanation": "यह वाक्य सामान्य वर्तमान काल में है. 'Our elders' बहुवचन होने के कारण 'are respected' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The cat drinks milk.",
      "options": [
        "Milk is drunk by the cat.",
        "Milk was drunk by the cat.",
        "Milk is being drunk by the cat.",
        "The cat is drunk by milk."
      ],
      "answer": "Milk is drunk by the cat.",
      "explanation": "यह वाक्य सामान्य वर्तमान काल का है. पैसिव वॉयस में बदलते समय 'is + V3' (drink-drank-drunk) का प्रयोग होता है."
    },
    {
      "question": "Change the voice: I read a book.",
      "options": [
        "A book is read by me.",
        "A book was read by me.",
        "A book will be read by me.",
        "A book is being read by me."
      ],
      "answer": "A book is read by me.",
      "explanation": "यह वाक्य सामान्य वर्तमान काल में है. 'read' के तीनों रूप समैंन है. 'A book' के साथ 'is' और 'read' (V3) प्रयोग होता है."
    },
    {
      "question": "Change the voice: The postman delivers the letters.",
      "options": [
        "The letters were delivered by the postman.",
        "The letters are being delivered by the postman.",
        "The letters are delivered by the postman.",
        "The postman is delivered by the letters."
      ],
      "answer": "The letters are delivered by the postman.",
      "explanation": "कर्म (Object) 'The letters' बहुवचन है, इसलिए सामान्य वर्तमान काल के पैसिव वॉयस में 'are' और 'deliver' का V3 'delivered' प्रयोग होता है."
    },
    {
      "question": "Change the voice: Birds build nests.",
      "options": [
        "Nests are built by birds.",
        "Nests were built by birds.",
        "Nests will be built by birds.",
        "Nests are being built by birds."
      ],
      "answer": "Nests are built by birds.",
      "explanation": "यह वाक्य सामान्य वर्तमान काल में है. 'Nests' बहुवचन होने के कारण, पैसिव वॉयस में 'are built' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: A farmer grows crops.",
      "options": [
        "Crops were grown by a farmer.",
        "Crops are grown by a farmer.",
        "Crops are being grown by a farmer.",
        "A farmer is grown by crops."
      ],
      "answer": "Crops are grown by a farmer.",
      "explanation": "कर्म (Object) 'Crops' बहुवचन है. सामान्य वर्तमान काल के पेसिव में बदलते समय 'are + V3' (grow-grew-grown) का प्रयोग होता है."
    },
    {
      "question": "Change the voice: My mother cooks food.",
      "options": [
        "Food is cooked by my mother.",
        "Food was cooked by my mother.",
        "Food will be cooked by my mother.",
        "My mother is cooked by food."
      ],
      "answer": "Food is cooked by my mother.",
      "explanation": "यह वाक्य सामान्य वर्तमान काल में है. कर्म (Object) 'Food' को कर्ता (Subject) बनाकर, 'is' और 'cook' का Past Participle (V3) 'cooked' रखा जाता है."
    }
  ],
  "test-2": [
    {
      "question": "Change the voice: He broke the window.",
      "options": [
        "The window is broken by him.",
        "The window was broken by him.",
        "The window will be broken by him.",
        "The window was being broken by him."
      ],
      "answer": "The window was broken by him.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है ('broke' V2 है). पैसिव वॉयस में बदलते समय 'was/were + V3' का प्रयोग होता है. 'The window' एकवचन होने के कारण 'was broken' का प्रयोग होगा."
    },
    {
      "question": "Change the voice: Someone stole my pen.",
      "options": [
        "My pen is stolen by someone.",
        "My pen was stolen by someone.",
        "My pen will be stolen.",
        "My pen was being stolen."
      ],
      "answer": "My pen was stolen by someone.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है ('stole' V2 है). पैसिव वॉयस में 'was/were + V3' (steal-stole-stolen) का प्रयोग होता है. 'by someone' लिखके वैकल्पिक है."
    },
    {
      "question": "Change the voice: The police caught the thief.",
      "options": [
        "The thief is caught by the police.",
        "The thief will be caught by the police.",
        "The thief was caught by the police.",
        "The thief was being caught by the police."
      ],
      "answer": "The thief was caught by the police.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है ('caught' V2 है). पैसिव वॉयस में 'was' और 'catch' का Past Participle (V3) 'caught' प्रयोग होता है."
    },
    {
      "question": "Change the voice: She wrote a novel.",
      "options": [
        "A novel is written by her.",
        "A novel was written by her.",
        "A novel will be written by her.",
        "A novel is being written by her."
      ],
      "answer": "A novel was written by her.",
      "explanation": "यह वाक्य सामान्य भूतकाल का है. पैसिव वॉयस में बदलते समय 'was + V3' (write-wrote-written) का प्रयोग होता है."
    },
    {
      "question": "Change the voice: We won the match.",
      "options": [
        "The match is won by us.",
        "The match was being won by us.",
        "The match will be won by us.",
        "The match was won by us."
      ],
      "answer": "The match was won by us.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है ('won' V2 है). कर्म (Object) 'The match' को कर्ता (Subject) बनाकर, 'was' और 'win' का Past Participle (V3) 'won' रखा जाता है."
    },
    {
      "question": "Change the voice: I repaired the car.",
      "options": [
        "The car is repaired by me.",
        "The car was repaired by me.",
        "The car will be repaired by me.",
        "The car was being repaired by me."
      ],
      "answer": "The car was repaired by me.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. पैसिव वॉयस में बदलते समय 'was/were + V3' का प्रयोग होता है. 'The car' के साथ 'was repaired' आता है."
    },
    {
      "question": "Change the voice: The teacher taught a lesson.",
      "options": [
        "A lesson is taught by the teacher.",
        "A lesson was taught by the teacher.",
        "A lesson will be taught by the teacher.",
        "A lesson was being taught by the teacher."
      ],
      "answer": "A lesson was taught by the teacher.",
      "explanation": "यह वाक्य सामान्य भूतकाल का है. पैसिव वॉयस में बदलते समय 'was' और 'teach' का Past Participle (V3) 'taught' प्रयोग होता है."
    },
    {
      "question": "Change the voice: They built this house.",
      "options": [
        "This house is built by them.",
        "This house will be built by them.",
        "This house was being built by them.",
        "This house was built by them."
      ],
      "answer": "This house was built by them.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है ('built' V2 है). पैसिव वॉयस में बदलते समय 'was + V3' (build-built-built) का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The child drank all the milk.",
      "options": [
        "All the milk was drunk by the child.",
        "All the milk is drunk by the child.",
        "All the milk will be drunk by the child.",
        "All the milk was being drunk by the child."
      ],
      "answer": "All the milk was drunk by the child.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. 'drank' (V2) का पेसिव 'was drunk' (was + V3) होता है."
    },
    {
      "question": "Change the voice: He sold his car.",
      "options": [
        "His car is sold by him.",
        "His car was being sold by him.",
        "His car was sold by him.",
        "His car will be sold by him."
      ],
      "answer": "His car was sold by him.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. 'sold' (V2) का पेसिव 'was sold' (was + V3) होता है."
    }
  ],
  "test-3": [
    {
      "question": "Change the voice: She will accept the offer.",
      "options": [
        "The offer is accepted by her.",
        "The offer was accepted by her.",
        "The offer will be accepted by her.",
        "The offer will be getting accepted by her."
      ],
      "answer": "The offer will be accepted by her.",
      "explanation": "यह वाक्य सामान्य भविष्य काल में है. पैसिव वॉयस में बदलते समय 'will be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: I will finish the work.",
      "options": [
        "The work is finished by me.",
        "The work was finished by me.",
        "The work will be finished by me.",
        "The work would be finished by me."
      ],
      "answer": "The work will be finished by me.",
      "explanation": "यह वाक्य सामान्य भविष्य काल में है. कर्म (Object) 'The work' को कर्ता (Subject) बनाकर, 'will be' और 'finish' का Past Participle (V3) 'finished' रखा जाता है."
    },
    {
      "question": "Change the voice: They will announce the results tomorrow.",
      "options": [
        "The results are announced by them tomorrow.",
        "The results were announced by them tomorrow.",
        "The results will be announced by them tomorrow.",
        "The results would be announced tomorrow."
      ],
      "answer": "The results will be announced by them tomorrow.",
      "explanation": "यह वाक्य सामान्य भविष्य काल में है. पैसिव वॉयस में 'will be + V3' का प्रयोग होता है. 'by them' लिखके वैकल्पिक है."
    },
    {
      "question": "Change the voice: He will not betray his country.",
      "options": [
        "His country will not be betrayed by him.",
        "His country is not betrayed by him.",
        "His country was not betrayed by him.",
        "His country would not be betrayed by him."
      ],
      "answer": "His country will not be betrayed by him.",
      "explanation": "यह वाक्य नकारात्मक सामान्य भविष्य काल में है. पैसिव वॉयस में 'will not be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: We shall post the letter.",
      "options": [
        "The letter will be posted by us.",
        "The letter is posted by us.",
        "The letter was posted by us.",
        "The letter shall being posted by us."
      ],
      "answer": "The letter will be posted by us.",
      "explanation": "'I' और 'We' के साथ 'shall' प्रयोग होता है, भी पैसिव वॉयस में सामान्य रूप से 'will' का प्रयोग होता है. रचना 'will be + V3' है."
    },
    {
      "question": "Change the voice: The company will launch a new product.",
      "options": [
        "A new product is launched by the company.",
        "A new product was launched by the company.",
        "A new product will be launched by the company.",
        "A new product would be launched by the company."
      ],
      "answer": "A new product will be launched by the company.",
      "explanation": "यह वाक्य सामान्य भविष्य काल का है. पैसिव वॉयस में 'will be launched' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: She will sing a song.",
      "options": [
        "A song is sung by her.",
        "A song was sung by her.",
        "A song will be sung by her.",
        "A song will have been sung by her."
      ],
      "answer": "A song will be sung by her.",
      "explanation": "सामान्य भविष्य काल के वाक्य को पेसिव में बदलने के लिए 'will be + V3' (sing-sang-sung) का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The government will build a bridge.",
      "options": [
        "A bridge is built by the government.",
        "A bridge was built by the government.",
        "A bridge will be built by the government.",
        "A bridge would be built by the government."
      ],
      "answer": "A bridge will be built by the government.",
      "explanation": "यह वाक्य सामान्य भविष्य काल में है. पेसिव वोइसकी रचना 'will be + V3' है."
    },
    {
      "question": "Change the voice: He will repair the computer.",
      "options": [
        "The computer is repaired by him.",
        "The computer was repaired by him.",
        "The computer would be repaired by him.",
        "The computer will be repaired by him."
      ],
      "answer": "The computer will be repaired by him.",
      "explanation": "सामान्य भविष्य काल के वाक्य को पेसिव में बदलने के लिए 'will be repaired' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: They will not help you.",
      "options": [
        "You are not helped by them.",
        "You were not helped by them.",
        "You will not be helped by them.",
        "You would not be helped by them."
      ],
      "answer": "You will not be helped by them.",
      "explanation": "यह वाक्य नकारात्मक सामान्य भविष्य काल में है. पैसिव वॉयस में बदलते समय 'will not be + V3' का प्रयोग होता है."
    }
  ],
  "test-4": [
    {
      "question": "Change the voice: She is writing a story.",
      "options": [
        "A story is written by her.",
        "A story was being written by her.",
        "A story is being written by her.",
        "A story has been written by her."
      ],
      "answer": "A story is being written by her.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. पैसिव वॉयस में बदलते समय 'is/am/are + being + V3' का प्रयोग होता है. 'A story' एकवचन होने के कारण 'is being written' का प्रयोग होगा."
    },
    {
      "question": "Change the voice: They are playing football.",
      "options": [
        "Football is played by them.",
        "Football is being played by them.",
        "Football was being played by them.",
        "Football has been played by them."
      ],
      "answer": "Football is being played by them.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. पैसिव वॉयस में बदलते समय 'is/am/are + being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: I am reading a magazine.",
      "options": [
        "A magazine is read by me.",
        "A magazine was being read by me.",
        "A magazine is being read by me.",
        "A magazine has been read by me."
      ],
      "answer": "A magazine is being read by me.",
      "explanation": "चालू वर्तमान काल के वाक्य को पेसिव में बदलने के लिए 'is being + V3' का प्रयोग होता है. कर्म (Object) 'A magazine' कर्ता (Subject) बनता है."
    },
    {
      "question": "Change the voice: He is not driving the car.",
      "options": [
        "The car is not driven by him.",
        "The car was not being driven by him.",
        "The car is not being driven by him.",
        "The car has not been driven by him."
      ],
      "answer": "The car is not being driven by him.",
      "explanation": "यह वाक्य नकारात्मक अपूर्ण वर्तमान काल में है. पैसिव वॉयस में 'is not being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Are you watching a movie?",
      "options": [
        "Is a movie watched by you?",
        "Was a movie being watched by you?",
        "Is a movie being watched by you?",
        "Has a movie been watched by you?"
      ],
      "answer": "Is a movie being watched by you?",
      "explanation": "यह वाक्य प्रश्नवाचक अपूर्ण वर्तमान काल में है. पैसिव वॉयस में 'Is/Am/Are + object + being + V3' की रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: The gardener is watering the plants.",
      "options": [
        "The plants are watered by the gardener.",
        "The plants are being watered by the gardener.",
        "The plants were being watered by the gardener.",
        "The plants have been watered by the gardener."
      ],
      "answer": "The plants are being watered by the gardener.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. 'The plants' बहुवचन होने के कारण 'are being watered' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: My sister is baking a cake.",
      "options": [
        "A cake is baked by my sister.",
        "A cake was being baked by my sister.",
        "A cake has been baked by my sister.",
        "A cake is being baked by my sister."
      ],
      "answer": "A cake is being baked by my sister.",
      "explanation": "चालू वर्तमान काल के वाक्य को पेसिव में बदलने के लिए 'is being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Who is knocking at the door?",
      "options": [
        "By whom is the door knocked at?",
        "By whom is the door being knocked at?",
        "By whom was the door being knocked at?",
        "Who is the door being knocked at by?"
      ],
      "answer": "By whom is the door being knocked at?",
      "explanation": "'Who' वाला प्रश्नवाचक वाक्य की शुरुआत 'By whom' से होता है. अपूर्ण वर्तमान काल होने के कारण 'is being knocked' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The children are flying kites.",
      "options": [
        "Kites are flown by the children.",
        "Kites were being flown by the children.",
        "Kites are being flown by the children.",
        "Kites have been flown by the children."
      ],
      "answer": "Kites are being flown by the children.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. 'Kites' बहुवचन होने के कारण 'are being flown' (fly-flew-flown) का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Is she helping them?",
      "options": [
        "Are they helped by her?",
        "Were they being helped by her?",
        "Are they being helped by her?",
        "Have they been helped by her?"
      ],
      "answer": "Are they being helped by her?",
      "explanation": "यह वाक्य प्रश्नवाचक अपूर्ण वर्तमान काल में है. कर्म (Object) 'them' का 'they' होता है, जो की के साथ 'Are' प्रयोग होता है. रचना 'Are they being helped' है."
    }
  ],
  "test-5": [
    {
      "question": "Change the voice: He was reading a book.",
      "options": [
        "A book was read by him.",
        "A book is being read by him.",
        "A book was being read by him.",
        "A book had been read by him."
      ],
      "answer": "A book was being read by him.",
      "explanation": "यह वाक्य चालू (Continuous) भूतकाल में है. पैसिव वॉयस में बदलते समय 'was/were + being + V3' का प्रयोग होता है. 'A book' एकवचन होने के कारण 'was being read' का प्रयोग होगा."
    },
    {
      "question": "Change the voice: They were watching a movie.",
      "options": [
        "A movie was watched by them.",
        "A movie is being watched by them.",
        "A movie had been watched by them.",
        "A movie was being watched by them."
      ],
      "answer": "A movie was being watched by them.",
      "explanation": "यह वाक्य चालू (Continuous) भूतकाल में है. पैसिव वॉयस में बदलते समय 'was/were + being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The mechanic was repairing the bike.",
      "options": [
        "The bike was repaired by the mechanic.",
        "The bike is being repaired by the mechanic.",
        "The bike was being repaired by the mechanic.",
        "The bike had been repaired by the mechanic."
      ],
      "answer": "The bike was being repaired by the mechanic.",
      "explanation": "चालू भूतकाल के वाक्य को पेसिव में बदलने के लिए 'was being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: She was not singing songs.",
      "options": [
        "Songs were not sung by her.",
        "Songs are not being sung by her.",
        "Songs were not being sung by her.",
        "Songs had not been sung by her."
      ],
      "answer": "Songs were not being sung by her.",
      "explanation": "यह वाक्य नकारात्मक अपूर्ण भूतकाल में है. 'Songs' बहुवचन होने के कारण 'were not being sung' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Was he driving the car?",
      "options": [
        "Was the car driven by him?",
        "Is the car being driven by him?",
        "Was the car being driven by him?",
        "Had the car been driven by him?"
      ],
      "answer": "Was the car being driven by him?",
      "explanation": "यह वाक्य प्रश्नवाचक अपूर्ण भूतकाल में है. पैसिव वॉयस में 'Was/Were + object + being + V3' की रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: The students were making a noise.",
      "options": [
        "A noise was made by the students.",
        "A noise is being made by the students.",
        "A noise was being made by the students.",
        "A noise had been made by the students."
      ],
      "answer": "A noise was being made by the students.",
      "explanation": "यह वाक्य चालू (Continuous) भूतकाल में है. 'A noise' एकवचन होने के कारण 'was being made' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: I was writing an email.",
      "options": [
        "An email was written by me.",
        "An email is being written by me.",
        "An email had been written by me.",
        "An email was being written by me."
      ],
      "answer": "An email was being written by me.",
      "explanation": "चालू भूतकाल के वाक्य को पेसिव में बदलने के लिए 'was being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: What were you doing?",
      "options": [
        "What was done by you?",
        "What was being done by you?",
        "What is being done by you?",
        "What had been done by you?"
      ],
      "answer": "What was being done by you?",
      "explanation": "'What' वाला प्रश्नवाचक वाक्य में 'What' वैसा ही रहता है. अपूर्ण भूतकाल होने के कारण 'was being done' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The birds were building nests.",
      "options": [
        "Nests were built by the birds.",
        "Nests are being built by the birds.",
        "Nests were being built by the birds.",
        "Nests had been built by the birds."
      ],
      "answer": "Nests were being built by the birds.",
      "explanation": "यह वाक्य चालू (Continuous) भूतकाल में है. 'Nests' बहुवचन होने के कारण 'were being built' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Were they discussing the matter?",
      "options": [
        "Was the matter discussed by them?",
        "Is the matter being discussed by them?",
        "Was the matter being discussed by them?",
        "Had the matter been discussed by them?"
      ],
      "answer": "Was the matter being discussed by them?",
      "explanation": "यह वाक्य प्रश्नवाचक अपूर्ण भूतकाल में है. कर्म (Object) 'the matter' एकवचन होने के कारण 'Was' प्रयोग होता है. रचना 'Was the matter being discussed' है."
    }
  ],
  "test-6": [
    {
      "question": "Change the voice: She has completed the project.",
      "options": [
        "The project is completed by her.",
        "The project was completed by her.",
        "The project has been completed by her.",
        "The project had been completed by her."
      ],
      "answer": "The project has been completed by her.",
      "explanation": "यह वाक्य पूर्ण वर्तमान काल में है. पैसिव वॉयस में बदलते समय 'has/have + been + V3' का प्रयोग होता है. 'The project' एकवचन होने के कारण 'has been completed' का प्रयोग होगा."
    },
    {
      "question": "Change the voice: They have won the game.",
      "options": [
        "The game is won by them.",
        "The game was won by them.",
        "The game has been won by them.",
        "The game had been won by them."
      ],
      "answer": "The game has been won by them.",
      "explanation": "यह वाक्य पूर्ण वर्तमान काल में है. पैसिव वॉयस में बदलते समय 'has/have + been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: I have written a letter.",
      "options": [
        "A letter is written by me.",
        "A letter was written by me.",
        "A letter has been written by me.",
        "A letter had been written by me."
      ],
      "answer": "A letter has been written by me.",
      "explanation": "पूर्ण वर्तमान काल के वाक्य को पेसिव में बदलने के लिए 'has been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: He has not finished his homework.",
      "options": [
        "His homework has not been finished by him.",
        "His homework is not finished by him.",
        "His homework was not finished by him.",
        "His homework had not been finished by him."
      ],
      "answer": "His homework has not been finished by him.",
      "explanation": "यह वाक्य नकारात्मक पूर्ण वर्तमान काल में है. पैसिव वॉयस में 'has not been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Have you seen the movie?",
      "options": [
        "Is the movie seen by you?",
        "Was the movie seen by you?",
        "Has the movie been seen by you?",
        "Had the movie been seen by you?"
      ],
      "answer": "Has the movie been seen by you?",
      "explanation": "यह वाक्य प्रश्नवाचक पूर्ण वर्तमान काल में है. पैसिव वॉयस में 'Has/Have + object + been + V3' की रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: The police have arrested the culprit.",
      "options": [
        "The culprit is arrested by the police.",
        "The culprit was arrested by the police.",
        "The culprit has been arrested by the police.",
        "The culprit had been arrested by the police."
      ],
      "answer": "The culprit has been arrested by the police.",
      "explanation": "यह वाक्य पूर्ण वर्तमान काल में है. 'The culprit' एकवचन होने के कारण 'has been arrested' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Someone has stolen my wallet.",
      "options": [
        "My wallet is stolen.",
        "My wallet was stolen.",
        "My wallet has been stolen.",
        "My wallet had been stolen."
      ],
      "answer": "My wallet has been stolen.",
      "explanation": "पूर्ण वर्तमान काल के वाक्य को पेसिव में बदलने के लिए 'has been + V3' का प्रयोग होता है. 'by someone' लिखके जरूरी नहीं."
    },
    {
      "question": "Change the voice: Why have you done this?",
      "options": [
        "Why is this done by you?",
        "Why was this done by you?",
        "Why has this been done by you?",
        "Why had this been done by you?"
      ],
      "answer": "Why has this been done by you?",
      "explanation": "WH-प्रश्नवाचक वाक्य में 'Why' वैसा ही रहता है. पूर्ण वर्तमान काल होने के कारण 'has this been done' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: We have informed them.",
      "options": [
        "They are informed by us.",
        "They were informed by us.",
        "They have been informed by us.",
        "They had been informed by us."
      ],
      "answer": "They have been informed by us.",
      "explanation": "कर्म (Object) 'them' का 'They' होता है. 'They' बहुवचन होने के कारण 'have been informed' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Has she cooked the dinner?",
      "options": [
        "Is the dinner cooked by her?",
        "Was the dinner cooked by her?",
        "Has the dinner been cooked by her?",
        "Had the dinner been cooked by her?"
      ],
      "answer": "Has the dinner been cooked by her?",
      "explanation": "यह वाक्य प्रश्नवाचक पूर्ण वर्तमान काल में है. पैसिव वॉयस में 'Has + object + been + V3' की रचना प्रयोग होता है."
    }
  ],
  "test-7": [
    {
      "question": "Change the voice: He had finished the task.",
      "options": [
        "The task has been finished by him.",
        "The task was finished by him.",
        "The task had been finished by him.",
        "The task would be finished by him."
      ],
      "answer": "The task had been finished by him.",
      "explanation": "यह वाक्य पूर्ण भूतकाल में है. पैसिव वॉयस में बदलते समय 'had been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: They had won the tournament.",
      "options": [
        "The tournament has been won by them.",
        "The tournament was won by them.",
        "The tournament had been won by them.",
        "The tournament would have been won by them."
      ],
      "answer": "The tournament had been won by them.",
      "explanation": "यह वाक्य पूर्ण भूतकाल में है. पैसिव वॉयस में बदलते समय 'had been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: I had already posted the letter.",
      "options": [
        "The letter has already been posted by me.",
        "The letter was already posted by me.",
        "The letter had already been posted by me.",
        "The letter would already be posted by me."
      ],
      "answer": "The letter had already been posted by me.",
      "explanation": "पूर्ण भूतकाल के वाक्य को पेसिव में बदलने के लिए 'had been + V3' का प्रयोग होता है. 'already' जैसे क्रियाविशेषण 'had' और 'been' की बीच आता है है."
    },
    {
      "question": "Change the voice: She had not completed her assignment.",
      "options": [
        "Her assignment has not been completed by her.",
        "Her assignment was not completed by her.",
        "Her assignment had not been completed by her.",
        "Her assignment would not be completed by her."
      ],
      "answer": "Her assignment had not been completed by her.",
      "explanation": "यह वाक्य नकारात्मक पूर्ण भूतकाल में है. पैसिव वॉयस में 'had not been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Had you informed the police?",
      "options": [
        "Have the police been informed by you?",
        "Were the police informed by you?",
        "Had the police been informed by you?",
        "Would the police be informed by you?"
      ],
      "answer": "Had the police been informed by you?",
      "explanation": "यह वाक्य प्रश्नवाचक पूर्ण भूतकाल में है. पैसिव वॉयस में 'Had + object + been + V3' की रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: The company had launched a new scheme.",
      "options": [
        "A new scheme has been launched by the company.",
        "A new scheme was launched by the company.",
        "A new scheme had been launched by the company.",
        "A new scheme would be launched by the company."
      ],
      "answer": "A new scheme had been launched by the company.",
      "explanation": "यह वाक्य पूर्ण भूतकाल में है. पैसिव वॉयस में 'had been launched' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Someone had cleaned the room before I arrived.",
      "options": [
        "The room has been cleaned before I arrived.",
        "The room was cleaned before I arrived.",
        "The room had been cleaned before I arrived.",
        "The room would be cleaned before I arrived."
      ],
      "answer": "The room had been cleaned before I arrived.",
      "explanation": "पूर्ण भूतकाल के वाक्य को पेसिव में बदलने के लिए 'had been + V3' का प्रयोग होता है. 'by someone' लिखके जरूरी नहीं."
    },
    {
      "question": "Change the voice: Why had he sold the house?",
      "options": [
        "Why has the house been sold by him?",
        "Why was the house sold by him?",
        "Why had the house been sold by him?",
        "Why would the house be sold by him?"
      ],
      "answer": "Why had the house been sold by him?",
      "explanation": "WH-प्रश्नवाचक वाक्य में 'Why' वैसा ही रहता है. पूर्ण भूतकाल होने के कारण 'had the house been sold' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: We had booked the tickets.",
      "options": [
        "The tickets have been booked by us.",
        "The tickets were booked by us.",
        "The tickets had been booked by us.",
        "The tickets would be booked by us."
      ],
      "answer": "The tickets had been booked by us.",
      "explanation": "यह वाक्य पूर्ण भूतकाल में है. 'The tickets' बहुवचन होना फिर भी 'had' ही प्रयोग होता है. रचना 'had been booked' है."
    },
    {
      "question": "Change the voice: Had the children eaten the chocolates?",
      "options": [
        "Have the chocolates been eaten by the children?",
        "Were the chocolates eaten by the children?",
        "Had the chocolates been eaten by the children?",
        "Would the chocolates be eaten by the children?"
      ],
      "answer": "Had the chocolates been eaten by the children?",
      "explanation": "यह वाक्य प्रश्नवाचक पूर्ण भूतकाल में है. पैसिव वॉयस में 'Had + object + been + V3' की रचना प्रयोग होता है."
    }
  ],
  "test-8": [
    {
      "question": "Change the voice: He will have finished the assignment.",
      "options": [
        "The assignment will be finished by him.",
        "The assignment would have been finished by him.",
        "The assignment will have been finished by him.",
        "The assignment will be being finished by him."
      ],
      "answer": "The assignment will have been finished by him.",
      "explanation": "यह वाक्य पूर्ण भविष्य काल में है. पैसिव वॉयस में बदलते समय 'will have been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: They will have built the bridge by next year.",
      "options": [
        "The bridge will be built by next year.",
        "The bridge would have been built by next year.",
        "The bridge will have been built by them by next year.",
        "The bridge will be being built by next year."
      ],
      "answer": "The bridge will have been built by them by next year.",
      "explanation": "यह वाक्य पूर्ण भविष्य काल में है. पैसिव वॉयस में 'will have been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: She will have cooked the meal.",
      "options": [
        "The meal will be cooked by her.",
        "The meal would have been cooked by her.",
        "The meal will have been cooked by her.",
        "The meal will be being cooked by her."
      ],
      "answer": "The meal will have been cooked by her.",
      "explanation": "पूर्ण भविष्य कालके वाक्य को पेसिव में बदलने के लिए 'will have been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: I shall have written the exam.",
      "options": [
        "The exam will be written by me.",
        "The exam would have been written by me.",
        "The exam shall have been written by me.",
        "The exam will have been written by me."
      ],
      "answer": "The exam will have been written by me.",
      "explanation": "यह वाक्य पूर्ण भविष्य काल में है. 'shall have written' का पेसिव 'will have been written' होता है. सामान्य रूप से पेसिव में 'will'  का अधिक प्रयोग होता है."
    },
    {
      "question": "Change the voice: The train will have left the station.",
      "options": [
        "The station will be left by the train.",
        "The station would have been left by the train.",
        "The station will have been left by the train.",
        "This is an intransitive verb and cannot be changed to passive."
      ],
      "answer": "This is an intransitive verb and cannot be changed to passive.",
      "explanation": "इस वाक्य में 'left' क्रिया (Verb) अकर्म (Object)क (intransitive) है क्योंकि उसकी पीहै कर्म (Object) नहीं. इसलिए, उसका पेसिव वोइस हुई शकतुं नहीं."
    },
    {
      "question": "Change the voice: By 2025, they will have completed the project.",
      "options": [
        "By 2025, the project will be completed.",
        "By 2025, the project would have been completed.",
        "By 2025, the project will have been completed by them.",
        "By 2025, the project will be being completed."
      ],
      "answer": "By 2025, the project will have been completed by them.",
      "explanation": "पूर्ण भविष्य कालके वाक्य को पेसिव में बदलने के लिए 'will have been + V3' का प्रयोग होता है. समयसूचक शब्दसमूह 'By 2025' वाक्य की शुरुआत में ही रहता है."
    },
    {
      "question": "Change the voice: He will not have sold the car.",
      "options": [
        "The car will not be sold by him.",
        "The car would not have been sold by him.",
        "The car will not have been sold by him.",
        "The car will not be being sold by him."
      ],
      "answer": "The car will not have been sold by him.",
      "explanation": "यह वाक्य नकारात्मक पूर्ण भविष्य काल में है. पैसिव वॉयस में 'will not have been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Will you have received the parcel?",
      "options": [
        "Will the parcel be received by you?",
        "Would the parcel have been received by you?",
        "Will the parcel have been received by you?",
        "Will the parcel be being received by you?"
      ],
      "answer": "Will the parcel have been received by you?",
      "explanation": "यह वाक्य प्रश्नवाचक पूर्ण भविष्य काल में है. पैसिव वॉयस में 'Will + object + have been + V3' की रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: We shall have done our duty.",
      "options": [
        "Our duty will be done by us.",
        "Our duty would have been done by us.",
        "Our duty will have been done by us.",
        "Our duty will be being done by us."
      ],
      "answer": "Our duty will have been done by us.",
      "explanation": "पूर्ण भविष्य कालके वाक्य को पेसिव में बदलने के लिए 'will have been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The tailor will have stitched the clothes.",
      "options": [
        "The clothes will be stitched by the tailor.",
        "The clothes would have been stitched by the tailor.",
        "The clothes will have been stitched by the tailor.",
        "The clothes will be being stitched by the tailor."
      ],
      "answer": "The clothes will have been stitched by the tailor.",
      "explanation": "यह वाक्य पूर्ण भविष्य काल में है. पेसिव वोइसकी रचना 'will have been + V3' है."
    }
  ],
  "test-9": [
    {
      "question": "Change the voice: Help the poor.",
      "options": [
        "The poor are helped.",
        "Let the poor be helped.",
        "You are requested to help the poor.",
        "The poor should be helped."
      ],
      "answer": "The poor should be helped.",
      "explanation": "यह वाक्य नैतिक फरज या सलाह सूचवे है, इसलिए पैसिव वॉयस में 'Subject + should be + V3' की रचनाका प्रयोग होता है. 'Let the poor be helped' भी सही है, भी 'should' अधिक उचित है."
    },
    {
      "question": "Change the voice: Open the door.",
      "options": [
        "The door is opened.",
        "Let the door be opened.",
        "You should open the door.",
        "The door was opened."
      ],
      "answer": "Let the door be opened.",
      "explanation": "यह आज्ञार्थ वाक्य (Imperative Sentence) है जो में हुक्म का भाव है. ऐसे वाक्योंं को पेसिव में बदलने के लिए 'Let + object + be + V3' की रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: Please give me a glass of water.",
      "options": [
        "Let a glass of water be given to me.",
        "A glass of water should be given to me.",
        "You are requested to give me a glass of water.",
        "I am given a glass of water."
      ],
      "answer": "You are requested to give me a glass of water.",
      "explanation": "'Please' या 'Kindly' से शुरू होने वाले विनम्र वाक्यों को पेसिव में बदलते समय 'You are requested to' का प्रयोग होता है और बाकी वाक्य वैसा ही रहता है."
    },
    {
      "question": "Change the voice: Do not insult the weak.",
      "options": [
        "Let the weak not be insulted.",
        "The weak should not be insulted.",
        "You are forbidden to insult the weak.",
        "All of the above."
      ],
      "answer": "All of the above.",
      "explanation": "नकारात्मक आज्ञार्थ वाक्य को कई रूप से पेसिव में बदला जा सकता है. 'Let not'  का प्रयोग, 'should not' (सलाह के लिए)  का प्रयोग, और 'You are forbidden/prohibited to'  का प्रयोग - यह तीनों तरीके सही है."
    },
    {
      "question": "Change the voice: Let him play cricket.",
      "options": [
        "Let cricket be played by him.",
        "Cricket should be played by him.",
        "He should play cricket.",
        "You should let him play cricket."
      ],
      "answer": "Let cricket be played by him.",
      "explanation": "'Let' से शुरू होने वाले और अनुमति दर्शावता वाक्यों मैं, पैसिव रचना 'Let + object + be + V3 + by + agent' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Post this letter immediately.",
      "options": [
        "This letter should be posted immediately.",
        "Let this letter be posted immediately.",
        "You are ordered to post this letter immediately.",
        "All of the above."
      ],
      "answer": "All of the above.",
      "explanation": "आज्ञार्थ वाक्य में जोर या हुक्म दर्शाने 'You are ordered to' का प्रयोग होता है. सामान्य रूप से 'Let...' (या) '...should be...' भी सही है."
    },
    {
      "question": "Change the voice: Work hard.",
      "options": [
        "You must work hard.",
        "You are advised to work hard.",
        "Let work be done hard.",
        "You are ordered to work hard."
      ],
      "answer": "You are advised to work hard.",
      "explanation": "इस वाक्य में कर्म (Object) नहीं और वह सलाह का भाव दर्शाता है. इसलिए, पैसिव वॉयस में 'You are advised to'  का प्रयोग करना सौसे उचित है."
    },
    {
      "question": "Change the voice: Kindly grant me a leave.",
      "options": [
        "I should be granted a leave.",
        "Let a leave be granted to me.",
        "You are requested to grant me a leave.",
        "A leave is granted to me."
      ],
      "answer": "You are requested to grant me a leave.",
      "explanation": "'Kindly' शब्द विनती दर्शाता है, इसलिए पेसिव वोइस 'You are requested to' से शुरू होता है."
    },
    {
      "question": "Change the voice: Let us organize a party.",
      "options": [
        "It is suggested that we should organize a party.",
        "A party should be organized by us.",
        "Let a party be organized by us.",
        "We should organize a party."
      ],
      "answer": "It is suggested that we should organize a party.",
      "explanation": "'Let us' से शुरू होने वाले और दरखास्त (suggestion) सूचवता वाक्यों के लिए, पैसिव वॉयस में 'It is suggested that we should...' की रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: Don't touch the wire.",
      "options": [
        "Let the wire not be touched.",
        "You are warned not to touch the wire.",
        "The wire should not be touched.",
        "All of the above."
      ],
      "answer": "All of the above.",
      "explanation": "यह वाक्य चेताव का भाव दर्शाता है. इसलिए 'You are warned...'  का प्रयोग किया जा सकता. 'Let not...' और 'should not' भी सही रचनाएँ है."
    }
  ],
  "test-10": [
    {
      "question": "Change the voice: He can lift this box.",
      "options": [
        "This box can be lifted by him.",
        "This box could be lifted by him.",
        "This box can have been lifted by him.",
        "This box is lifted by him."
      ],
      "answer": "This box can be lifted by him.",
      "explanation": "Modal auxiliary (can, could, may, might, should, must, etc.) वाला वाक्यों को पेसिव में बदलते समय 'Modal + be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: You should respect your teachers.",
      "options": [
        "Your teachers are respected by you.",
        "Your teachers should be respected by you.",
        "Your teachers must be respected by you.",
        "Your teachers have to be respected by you."
      ],
      "answer": "Your teachers should be respected by you.",
      "explanation": "Modal auxiliary 'should' वाला वाक्य में पैसिव रचना 'should be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: She may win the prize.",
      "options": [
        "The prize might be won by her.",
        "The prize may be won by her.",
        "The prize can be won by her.",
        "The prize is won by her."
      ],
      "answer": "The prize may be won by her.",
      "explanation": "Modal 'may' वाला वाक्य में पैसिव रचना 'may be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: We must finish this task.",
      "options": [
        "This task is finished by us.",
        "This task must be finished by us.",
        "This task should be finished by us.",
        "This task must have been finished by us."
      ],
      "answer": "This task must be finished by us.",
      "explanation": "Modal 'must' वाला वाक्य में पैसिव रचना 'must be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: He could solve the puzzle.",
      "options": [
        "The puzzle can be solved by him.",
        "The puzzle could have been solved by him.",
        "The puzzle could be solved by him.",
        "The puzzle was solved by him."
      ],
      "answer": "The puzzle could be solved by him.",
      "explanation": "Modal 'could' वाला वाक्य में पैसिव रचना 'could be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: They might postpone the meeting.",
      "options": [
        "The meeting may be postponed by them.",
        "The meeting might be postponed by them.",
        "The meeting might have been postponed by them.",
        "The meeting should be postponed by them."
      ],
      "answer": "The meeting might be postponed by them.",
      "explanation": "Modal 'might' वाला वाक्य में पैसिव रचना 'might be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: One ought to do one's duty.",
      "options": [
        "Duty ought to be done.",
        "One's duty is to be done.",
        "Duty can be done.",
        "Duty ought to been done."
      ],
      "answer": "Duty ought to be done.",
      "explanation": "Modal 'ought to' वाला वाक्य में पैसिव रचना 'ought to be + V3' का प्रयोग होता है. 'by one' लिखके जरूरी नहीं."
    },
    {
      "question": "Change the voice: You have to complete the assignment.",
      "options": [
        "The assignment has to be completed by you.",
        "The assignment had to be completed by you.",
        "The assignment must be completed by you.",
        "The assignment is completed by you."
      ],
      "answer": "The assignment has to be completed by you.",
      "explanation": "'have to' वाली रचसंज्ञाां, पैसिव वॉयस में 'has/have to be + V3' का प्रयोग होता है. 'The assignment' एकवचन होने के कारण 'has to be' प्रयोग होता है."
    },
    {
      "question": "Change the voice: He is to buy a car.",
      "options": [
        "A car is to be bought by him.",
        "A car has to be bought by him.",
        "A car should be bought by him.",
        "A car is bought by him."
      ],
      "answer": "A car is to be bought by him.",
      "explanation": "'is/am/are + to + V1' वाली रचसंज्ञाां, पैसिव वॉयस में 'is/am/are + to be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: We could have won the match.",
      "options": [
        "The match could be won by us.",
        "The match can have been won by us.",
        "The match could have been won by us.",
        "The match should have been won by us."
      ],
      "answer": "The match could have been won by us.",
      "explanation": "'Modal + have + V3' वाली रचसंज्ञाां, पैसिव वॉयस में 'Modal + have been + V3' का प्रयोग होता है."
    }
  ],
  "test-11": [
    {
      "question": "Change the voice: Who taught you French?",
      "options": [
        "By whom were you taught French?",
        "By whom was you taught French?",
        "Who were you taught French by?",
        "Both A and C are correct."
      ],
      "answer": "Both A and C are correct.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. 'Who' से शुरू होने वाले प्रश्नवाचक वाक्य को 'By whom' से शुरू किया जा सकता है (या) 'Who' से शुरू कर 'by' को अंदर मूकी सकता है. 'you' के साथ 'were' आता है. इसलिए दोनों विकल्प सही हैं."
    },
    {
      "question": "Change the voice: It is time to take tea.",
      "options": [
        "It is time for tea to be taken.",
        "It is time tea was taken.",
        "It is time to be taken tea.",
        "Tea is to be taken."
      ],
      "answer": "It is time for tea to be taken.",
      "explanation": "'It is time to + V1 + object' वाली रचना का पेसिव 'It is time for + object + to be + V3' होता है."
    },
    {
      "question": "Change the voice: The audience loudly cheered the Mayor's speech.",
      "options": [
        "The Mayor's speech was loudly cheered by the audience.",
        "The Mayor's speech is loudly cheered by the audience.",
        "The audience loudly cheered the Mayor's speech.",
        "The Mayor's speech was being loudly cheered by the audience."
      ],
      "answer": "The Mayor's speech was loudly cheered by the audience.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. क्रियाविशेषण 'loudly' को 'cheered' से पहले मुकवा में आता है है. रचना: Object + was/were + adverb + V3 + by + Subject."
    },
    {
      "question": "Change the voice: His behavior vexes me.",
      "options": [
        "I am vexed by his behavior.",
        "I am vexed at his behavior.",
        "I am vexed with his behavior.",
        "I was vexed at his behavior."
      ],
      "answer": "I am vexed at his behavior.",
      "explanation": "'vex', 'annoy', 'surprise', 'displease' जैसे क्रिया (Verb)ो के बाद पैसिव वॉयस में 'by' को बदले 'at' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: I know him.",
      "options": [
        "He is known by me.",
        "He is known to me.",
        "He was known to me.",
        "He has been known by me."
      ],
      "answer": "He is known to me.",
      "explanation": "'know' और 'oblige' जैसे क्रिया (Verb)ो के बाद पैसिव वॉयस में 'by' को बदले 'to' Prepositionका प्रयोग होता है."
    },
    {
      "question": "Change the voice: The box contains books.",
      "options": [
        "Books are contained by the box.",
        "Books are contained in the box.",
        "Books were contained in the box.",
        "Books are contained with the box."
      ],
      "answer": "Books are contained in the box.",
      "explanation": "'contain' और 'interest' जैसे क्रिया (Verb)ो के बाद पैसिव वॉयस में 'by' को बदले 'in' Prepositionका प्रयोग होता है."
    },
    {
      "question": "Change the voice: One should keep one's promises.",
      "options": [
        "One's promises should be kept by one.",
        "Promises should be kept.",
        "A promise should be kept.",
        "Promises were kept."
      ],
      "answer": "Promises should be kept.",
      "explanation": "जब कर्ता (Subject) के रूप में 'one', 'someone', 'people' जैसे अनिश्चित सर्वनाम हो, तब पैसिव वॉयस में 'by + agent'  का उल्लेख करने में यहवतो नहीं."
    },
    {
      "question": "Change the voice: The Romans expected to conquer Carthage.",
      "options": [
        "It was expected by the Romans that they would conquer Carthage.",
        "Carthage was expected to be conquered by the Romans.",
        "The Romans expected Carthage to be conquered.",
        "Both A and B are correct."
      ],
      "answer": "It was expected by the Romans that they would conquer Carthage.",
      "explanation": "जब मुख्य वाक्य में 'expect', 'hope', 'think' जैसे क्रिया (Verb) हो और उसके बाद infinitive (to + V1) हो, तब पेसिव वोइस 'It was/is + V3 + by + agent + that...' से बनता है."
    },
    {
      "question": "Change the voice: Why did he deprive you of the membership?",
      "options": [
        "Why you were deprived of the membership by him?",
        "Why were you deprived of the membership by him?",
        "Why did you deprive the membership?",
        "Why was he deprived of the membership by you?"
      ],
      "answer": "Why were you deprived of the membership by him?",
      "explanation": "यह WH-प्रश्नवाचक वाक्य है जो सामान्य भूतकाल में है. पेसिव में बदलते समय 'Why + was/were + object + V3...?' रचना प्रयोग होता है. 'you' के साथ 'were' आता है."
    },
    {
      "question": "Change the voice: They are building a house.",
      "options": [
        "A house is built by them.",
        "A house is being built by them.",
        "A house was being built by them.",
        "A house has been built by them."
      ],
      "answer": "A house is being built by them.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. पैसिव वॉयस में बदलते समय 'is/am/are + being + V3' का प्रयोग होता है."
    }
  ],
  "test-12": [
    {
      "question": "Change the voice: The news surprised us.",
      "options": [
        "We were surprised by the news.",
        "We were surprised at the news.",
        "We are surprised at the news.",
        "We were surprised with the news."
      ],
      "answer": "We were surprised at the news.",
      "explanation": "'surprise', 'astonish', 'vex', 'annoy' जैसे क्रिया (Verb)ो के बाद पैसिव वॉयस में 'by' को बदले 'at' Prepositionका प्रयोग होता है."
    },
    {
      "question": "Change the voice: This jar contains ink.",
      "options": [
        "Ink is contained in this jar.",
        "Ink is contained by this jar.",
        "Ink was contained in this jar.",
        "Ink is contained with this jar."
      ],
      "answer": "Ink is contained in this jar.",
      "explanation": "'contain' और 'interest' जैसे क्रिया (Verb)ो के बाद पैसिव वॉयस में 'by' को बदले 'in' Prepositionका प्रयोग होता है."
    },
    {
      "question": "Change the voice: Let me do this.",
      "options": [
        "Let this be done by me.",
        "Let us do this.",
        "This should be done by me.",
        "I should do this."
      ],
      "answer": "Let this be done by me.",
      "explanation": "इस वाक्य में अनुमति का भाव है. 'Let + object (me) + V1' वाली रचना का पेसिव 'Let + object (this) + be + V3 + by + agent (me)' होता है."
    },
    {
      "question": "Change the voice: Who can question Gandhi's integrity?",
      "options": [
        "By whom can Gandhi's integrity be questioned?",
        "By whom Gandhi's integrity can be questioned?",
        "Gandhi's integrity can be questioned by whom?",
        "Who could question Gandhi's integrity?"
      ],
      "answer": "By whom can Gandhi's integrity be questioned?",
      "explanation": "'Who' वाला प्रश्नवाचक वाक्य को 'By whom' से शुरू कराय है. Modal (can) होने के कारण पैसिव रचना 'By whom + modal + object + be + V3?' होता है."
    },
    {
      "question": "Change the voice: He has to finish the work.",
      "options": [
        "The work has to be finished by him.",
        "The work have to be finished by him.",
        "The work must be finished by him.",
        "The work is to be finished by him."
      ],
      "answer": "The work has to be finished by him.",
      "explanation": "'has/have to + V1' वाली रचना का पेसिव 'has/have to be + V3' होता है. 'The work' एकवचन होने के कारण 'has to be' प्रयोग होता है."
    },
    {
      "question": "Change the voice: People speak English all over the world.",
      "options": [
        "English is spoken all over the world.",
        "English was spoken all over the world.",
        "English is spoken by people.",
        "English was being spoken all over the world."
      ],
      "answer": "English is spoken all over the world.",
      "explanation": "जब कर्ता (Subject) के रूप में 'people' जैसे अनिश्चित सर्वनाम हो, तब पैसिव वॉयस में 'by people'  का उल्लेख करने में यहवतो नहीं. यह वाक्य सामान्य वर्तमान काल में है."
    },
    {
      "question": "Change the voice: Do it.",
      "options": [
        "Let it be done.",
        "It should be done.",
        "You are ordered to do it.",
        "All of the above are correct."
      ],
      "answer": "All of the above are correct.",
      "explanation": "आज्ञार्थ वाक्य 'Do it' को भाव अनुसार जुदी जुदी रूप से पेसिव में बदला जा सकता है. 'Let it be done' (हुक्म), 'It should be done' (सलाह), और 'You are ordered to do it' (यहदेश) तीनों सही है."
    },
    {
      "question": "Change the voice: The fire engulfed the building.",
      "options": [
        "The building was engulfed by the fire.",
        "The building was engulfed with the fire.",
        "The building was engulfed in the fire.",
        "The building is engulfed in the fire."
      ],
      "answer": "The building was engulfed in the fire.",
      "explanation": "'engulf' (घेरी लेके) जैसे क्रिया (Verb) के बाद पैसिव वॉयस में 'by' को बदले 'in'  का प्रयोग अधिक उचित है."
    },
    {
      "question": "Change the voice: Circumstances will oblige me to go.",
      "options": [
        "I will be obliged to go by circumstances.",
        "I shall be obliged to go by the circumstances.",
        "I would be obliged to go.",
        "Circumstances will be obliged by me to go."
      ],
      "answer": "I shall be obliged to go by the circumstances.",
      "explanation": "'oblige' क्रिया (Verb) के बाद पेसिव में 'to' आता है है. 'me' का 'I' होता और 'I' के साथ सामान्य रूप से 'shall' प्रयोग होता है. पैसिव रचना: 'shall be obliged'."
    },
    {
      "question": "Change the voice: The painter is painting the house.",
      "options": [
        "The house is painted by the painter.",
        "The house was being painted by the painter.",
        "The house is being painted by the painter.",
        "The house has been painted by the painter."
      ],
      "answer": "The house is being painted by the painter.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. पैसिव वॉयस में 'is/am/are + being + V3' का प्रयोग होता है."
    }
  ],
  "test-13": [
    {
      "question": "Change the voice: He teaches us grammar.",
      "options": [
        "Grammar is taught to us by him.",
        "We are taught grammar by him.",
        "Grammar is taught by him to us.",
        "Both A and B are correct."
      ],
      "answer": "Both A and B are correct.",
      "explanation": "इस वाक्य में दो कर्म (Object) है: 'us' (indirect) और 'grammar' (direct). दोकां में से कोई भी कर्म (Object) को कर्ता (Subject) बनाकर पेसिव वाक्य बनाया जा सकता है. इसलिए दोनों विकल्प सही हैं."
    },
    {
      "question": "Change the voice: Your manners disgust me.",
      "options": [
        "I am disgusted by your manners.",
        "I am disgusted with your manners.",
        "I am disgusted at your manners.",
        "I was disgusted with your manners."
      ],
      "answer": "I am disgusted with your manners.",
      "explanation": "'disgust', 'please', 'satisfy' जैसे क्रिया (Verb)ो के बाद पैसिव वॉयस में 'by' को बदले 'with' Prepositionका प्रयोग होता है."
    },
    {
      "question": "Change the voice: Who wrote this book?",
      "options": [
        "By whom was this book written?",
        "By whom is this book written?",
        "By whom this book was written?",
        "Who was this book written by?"
      ],
      "answer": "By whom was this book written?",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. 'Who' से शुरू होने वाले प्रश्नवाचक वाक्य को 'By whom' से शुरू कराय है और 'was/were + object + V3' रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: The noise of the traffic kept me awake.",
      "options": [
        "I was kept awake by the noise of the traffic.",
        "The traffic kept me awake by the noise.",
        "I am kept awake by the noise of the traffic.",
        "I remained awake because of the noise."
      ],
      "answer": "I was kept awake by the noise of the traffic.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. 'me' कर्म (Object) का 'I' होता और 'kept' (V2) का 'was kept' होता. 'awake' यह object complement है, जो V3 के बाद आता है है."
    },
    {
      "question": "Change the voice: We saw him cross the river.",
      "options": [
        "He was seen cross the river by us.",
        "He was seen to cross the river by us.",
        "He was seen crossing the river by us.",
        "He was seen by us to cross the river."
      ],
      "answer": "He was seen to cross the river by us.",
      "explanation": "जब एक्टिव वॉयस में see, hear, make, feel जैसे क्रिया (Verb) के बाद bare infinitive (V1) हो, तब पैसिव वॉयस में वह 'to + V1' में बदल जाता है."
    },
    {
      "question": "Change the voice: They have made him the president.",
      "options": [
        "The president has been made by them.",
        "He was made the president by them.",
        "He has been made the president by them.",
        "He has been made president by them."
      ],
      "answer": "He has been made the president by them.",
      "explanation": "यह वाक्य पूर्ण वर्तमान काल में है. 'him' कर्म (Object) का 'He' होता है. 'made' के बाद object complement 'the president' आता है है. रचना 'has been made' है."
    },
    {
      "question": "Change the voice: Do not make a noise.",
      "options": [
        "Let a noise not be made.",
        "You are requested not to make a noise.",
        "You are ordered not to make a noise.",
        "Both A and C are correct."
      ],
      "answer": "Both A and C are correct.",
      "explanation": "यह नकारात्मक आज्ञार्थ वाक्य है. उसको 'Let not...' से (या) 'You are ordered/forbidden not to...' से पेसिव में बदला जा सकता है."
    },
    {
      "question": "Change the voice: A lion may be helped even by a little mouse.",
      "options": [
        "A little mouse may even help a lion.",
        "Even a little mouse may help a lion.",
        "A little mouse can help a lion.",
        "Even a little mouse can help a lion."
      ],
      "answer": "Even a little mouse may help a lion.",
      "explanation": "यह पेसिव वोइस का वाक्य है, उसको एक्टिव में बदलने के लिए है. 'may be helped' का एक्टिव 'may help' होता है. 'by a little mouse' कर्ता (Subject) बनता है."
    },
    {
      "question": "Change the voice: What amuses you?",
      "options": [
        "By what are you amused?",
        "What are you amused by?",
        "What you are amused by?",
        "Both A and B are correct."
      ],
      "answer": "By what are you amused?",
      "explanation": "जब 'What' वह खुद ही कर्ता (Subject) हो, तब पेसिव वोइस 'By what' से शुरू होता है. रचना: 'By what + is/am/are + object + V3?'."
    },
    {
      "question": "Change the voice: His words pleased the minister.",
      "options": [
        "The minister was pleased by his words.",
        "The minister was pleased at his words.",
        "The minister was pleased with his words.",
        "The minister is pleased with his words."
      ],
      "answer": "The minister was pleased with his words.",
      "explanation": "'please', 'satisfy', 'disgust' जैसे क्रिया (Verb)ो के बाद पैसिव वॉयस में 'by' को बदले 'with' Prepositionका प्रयोग होता है."
    }
  ],
  "test-14": [
    {
      "question": "Change the voice: They will have to cancel the trip.",
      "options": [
        "The trip will be cancelled.",
        "The trip will have to be cancelled by them.",
        "The trip has to be cancelled.",
        "The trip would have to be cancelled."
      ],
      "answer": "The trip will have to be cancelled by them.",
      "explanation": "'will have to + V1' वाली रचना का पेसिव 'will have to be + V3' होता है."
    },
    {
      "question": "Change the voice: The police are investigating the case.",
      "options": [
        "The case is investigated by the police.",
        "The case was being investigated by the police.",
        "The case has been investigated by the police.",
        "The case is being investigated by the police."
      ],
      "answer": "The case is being investigated by the police.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. पैसिव वॉयस में 'is/am/are + being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: You need to water the plants.",
      "options": [
        "The plants are needed to be watered.",
        "The plants need watering by you.",
        "The plants need to be watered by you.",
        "The plants must be watered."
      ],
      "answer": "The plants need to be watered by you.",
      "explanation": "'need to + V1' वाली रचना का पेसिव 'need to be + V3' होता है."
    },
    {
      "question": "Change the voice: We elected Balu captain.",
      "options": [
        "Balu was elected captain by us.",
        "Balu is elected captain by us.",
        "Captain was elected Balu by us.",
        "Balu and captain were elected by us."
      ],
      "answer": "Balu was elected captain by us.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. 'him' कर्म (Object) का 'He' होता है. 'elected' के बाद object complement 'captain' आता है है. रचना 'was elected' है."
    },
    {
      "question": "Change the voice: Who gave you this ice cream?",
      "options": [
        "By whom was this ice cream given to you?",
        "By whom were you given this ice cream?",
        "Both of the above.",
        "None of the above."
      ],
      "answer": "Both of the above.",
      "explanation": "इस वाक्य में दो कर्म (Object) है: 'you' और 'this ice cream'. दोनों को कर्ता (Subject) बनाकर पेसिव वाक्य बनाया जा सकता है. 'Who' का 'By whom' होता. इसलिए दोनों विकल्प सही हैं."
    },
    {
      "question": "Change the voice: They are laughing at you.",
      "options": [
        "You are being laughed.",
        "You are laughed at by them.",
        "You are being laughed at by them.",
        "You are being laughed by them."
      ],
      "answer": "You are being laughed at by them.",
      "explanation": "जब क्रिया (Verb) के साथ prepositional phrase (laugh at) हो, तब पैसिव वॉयस में वह preposition क्रिया (Verb) की के साथ ही रहता है. यह वाक्य चालू (Continuous) वर्तमान काल में है."
    },
    {
      "question": "Change the voice: His performance satisfied the teacher.",
      "options": [
        "The teacher was satisfied by his performance.",
        "The teacher was satisfied with his performance.",
        "The teacher is satisfied with his performance.",
        "The teacher was satisfied at his performance."
      ],
      "answer": "The teacher was satisfied with his performance.",
      "explanation": "'satisfy', 'please', 'disgust' जैसे क्रिया (Verb)ो के बाद पैसिव वॉयस में 'by' को बदले 'with' Prepositionका प्रयोग होता है."
    },
    {
      "question": "Change the voice: The walls had not been decorated by us.",
      "options": [
        "We had not decorated the walls.",
        "We have not decorated the walls.",
        "We did not decorate the walls.",
        "We were not decorating the walls."
      ],
      "answer": "We had not decorated the walls.",
      "explanation": "यह पेसिव वोइस का वाक्य है, उसको एक्टिव में बदलने के लिए है. 'had not been decorated' (पूर्ण भूतकाल पेसिव) का एक्टिव 'had not decorated' होता है."
    },
    {
      "question": "Change the voice: Let him be told to do it.",
      "options": [
        "Tell him to do it.",
        "Let's tell him to do it.",
        "He should be told to do it.",
        "He must be told to do it."
      ],
      "answer": "Tell him to do it.",
      "explanation": "यह पेसिव वोइस का आज्ञार्थ वाक्य है. 'Let + object + be + V3' का एक्टिव 'V1 + object' होता है."
    },
    {
      "question": "Change the voice: It is being read by us.",
      "options": [
        "We are reading it.",
        "We read it.",
        "It can be read by us.",
        "We have to read it."
      ],
      "answer": "We are reading it.",
      "explanation": "यह पेसिव वोइस का (अपूर्ण वर्तमान काल) वाक्य है. 'is being read' का एक्टिव 'are reading' होता है. 'by us' का 'We' होता है."
    }
  ],
  "test-15": [
    {
      "question": "Change the voice: The story was written by an old man.",
      "options": [
        "An old man writes the story.",
        "An old man wrote the story.",
        "An old man was writing the story.",
        "An old man has written the story."
      ],
      "answer": "An old man wrote the story.",
      "explanation": "यह पेसिव वोइस का (सामान्य भूतकाल) वाक्य है. 'was written' का एक्टिव 'wrote' (V2) होता है."
    },
    {
      "question": "Change the voice: A car is being bought by him.",
      "options": [
        "He is buying a car.",
        "He buys a car.",
        "He was buying a car.",
        "He has bought a car."
      ],
      "answer": "He is buying a car.",
      "explanation": "यह पेसिव वोइस का (अपूर्ण वर्तमान काल) वाक्य है. 'is being bought' का एक्टिव 'is buying' होता है."
    },
    {
      "question": "Change the voice: The bridge had been repaired by them.",
      "options": [
        "They repaired the bridge.",
        "They have repaired the bridge.",
        "They had repaired the bridge.",
        "They were repairing the bridge."
      ],
      "answer": "They had repaired the bridge.",
      "explanation": "यह पेसिव वोइस का (पूर्ण भूतकाल) वाक्य है. 'had been repaired' का एक्टिव 'had repaired' होता है."
    },
    {
      "question": "Change the voice: He was made king.",
      "options": [
        "They made him king.",
        "The king made him.",
        "They make him king.",
        "He is made king by them."
      ],
      "answer": "They made him king.",
      "explanation": "यह पेसिव वोइसके वाक्य में कर्ता (Subject) (agent) 'by...' नहीं, इसलिए हम 'They' जैसा सामान्य कर्ता (Subject) मैंन सकवह हैं. 'was made' का एक्टिव 'made' (V2) होता है."
    },
    {
      "question": "Change the voice: Promises should be kept.",
      "options": [
        "We should keep promises.",
        "One should keep promises.",
        "They should keep promises.",
        "Both A and B are correct."
      ],
      "answer": "One should keep promises.",
      "explanation": "यह पैसिव वॉयस में कर्ता (Subject) नहीं. यह एक सामान्य सत्य या सलाह है, इसलिए एक्टिव वॉयस में 'One' जैसा सामान्य कर्ता (Subject) वापरवो सौसे उचित है."
    },
    {
      "question": "Change the voice: I was asked my name.",
      "options": [
        "They asked me my name.",
        "Someone asked me my name.",
        "He asked me my name.",
        "All of the above are possible."
      ],
      "answer": "All of the above are possible.",
      "explanation": "पैसिव वॉयस में कर्ता (Subject) (by...)  का उल्लेख नहीं है. इसलिए, एक्टिव वॉयस में 'They', 'Someone', 'He' जैसा कोई भी तार्किक कर्ता (Subject) मूकी सकता है."
    },
    {
      "question": "Change the voice: The thief was caught.",
      "options": [
        "Someone caught the thief.",
        "The police caught the thief.",
        "They caught the thief.",
        "People caught the thief."
      ],
      "answer": "The police caught the thief.",
      "explanation": "चोर को पकडवा का काम सामान्य रूप से पोलीस करता है, इसलिए 'The police' यह सौसे तार्किक और उचित कर्ता (Subject) है. 'was caught' का एक्टिव 'caught' (V2) होता है."
    },
    {
      "question": "Change the voice: By whom was this window broken?",
      "options": [
        "Who broke this window?",
        "Who has broken this window?",
        "Who had broken this window?",
        "Who was breaking this window?"
      ],
      "answer": "Who broke this window?",
      "explanation": "यह पेसिव वोइस का प्रश्न है. 'By whom was... broken' (सामान्य भूतकाल) का एक्टिव 'Who broke...?' होता है."
    },
    {
      "question": "Change the voice: Cricket is played by many people in India.",
      "options": [
        "Many people in India play cricket.",
        "People in India play cricket.",
        "Many people are playing cricket in India.",
        "Cricket is a popular game in India."
      ],
      "answer": "Many people in India play cricket.",
      "explanation": "यह पेसिव वोइस का (सामान्य वर्तमान काल) वाक्य है. 'is played' का एक्टिव 'play' होता है. 'by many people in India' कर्ता (Subject) बनता है."
    },
    {
      "question": "Change the voice: The wounded man was being helped by a boy.",
      "options": [
        "A boy helped the wounded man.",
        "A boy was helping the wounded man.",
        "A boy is helping the wounded man.",
        "A boy has helped the wounded man."
      ],
      "answer": "A boy was helping the wounded man.",
      "explanation": "यह पेसिव वोइस का (अपूर्ण भूतकाल) वाक्य है. 'was being helped' का एक्टिव 'was helping' होता है."
    }
  ],
  "test-16": [
    {
      "question": "Change the voice: The problem cannot be solved by me.",
      "options": [
        "I cannot solve the problem.",
        "I could not solve the problem.",
        "I can solve the problem.",
        "The problem is not solvable."
      ],
      "answer": "I cannot solve the problem.",
      "explanation": "यह पेसिव वोइस का वाक्य है. 'cannot be solved' (Modal Passive) का एक्टिव 'cannot solve' होता है."
    },
    {
      "question": "Change the voice: Has the report been finished by you?",
      "options": [
        "Did you finish the report?",
        "Have you finished the report?",
        "Had you finished the report?",
        "Do you finish the report?"
      ],
      "answer": "Have you finished the report?",
      "explanation": "यह पेसिव वोइस का (पूर्ण वर्तमान काल) प्रश्न है. 'Has... been finished' का एक्टिव 'Have... finished' होता है."
    },
    {
      "question": "Change the voice: You are requested to keep quiet.",
      "options": [
        "Keep quiet.",
        "Please keep quiet.",
        "You should keep quiet.",
        "Both A and B are correct."
      ],
      "answer": "Please keep quiet.",
      "explanation": "'You are requested to...' वाली पैसिव रचना का एक्टिव वाक्य 'Please' (या) 'Kindly' से शुरू होता विनम्र वाक्य होता है."
    },
    {
      "question": "Change the voice: It is known that he is a genius.",
      "options": [
        "He is known to be a genius.",
        "People know that he is a genius.",
        "Everyone knows him as a genius.",
        "Both A and B are correct."
      ],
      "answer": "Both A and B are correct.",
      "explanation": "'It is known that...' वाली रचना को दो रूप से एक्टिव में बदला जा सकता है. 'People know that...' से शुरू किया जा सकता (या) Object (he) को कर्ता (Subject) बनाकर 'He is known to be...' लिखी सकता."
    },
    {
      "question": "Change the voice: The fields are being ploughed by the farmers.",
      "options": [
        "The farmers plough the fields.",
        "The farmers were ploughing the fields.",
        "The farmers are ploughing the fields.",
        "The farmers have ploughed the fields."
      ],
      "answer": "The farmers are ploughing the fields.",
      "explanation": "यह पेसिव वोइस का (अपूर्ण वर्तमान काल) वाक्य है. 'are being ploughed' का एक्टिव 'are ploughing' होता है."
    },
    {
      "question": "Change the voice: What is wanted by you?",
      "options": [
        "What you want?",
        "What do you want?",
        "What did you want?",
        "What are you wanting?"
      ],
      "answer": "What do you want?",
      "explanation": "यह पेसिव वोइस का (सामान्य वर्तमान काल) प्रश्न है. 'is wanted' का एक्टिव 'do... want' होता है. प्रश्नवाचक वाक्य में सहायक क्रिया (Verb) 'do' आता है."
    },
    {
      "question": "Change the voice: Let the order be given.",
      "options": [
        "Give the order.",
        "You should give the order.",
        "Someone give the order.",
        "I will give the order."
      ],
      "answer": "Give the order.",
      "explanation": "यह पेसिव वोइस का आज्ञार्थ वाक्य है. 'Let + object + be + V3' का एक्टिव वाक्य 'V1 + object' होता है."
    },
    {
      "question": "Change the voice: I was shocked at his rudeness.",
      "options": [
        "His rudeness shocked me.",
        "His rudeness has shocked me.",
        "His rudeness was shocking me.",
        "I am shocked by his rudeness."
      ],
      "answer": "His rudeness shocked me.",
      "explanation": "यह पेसिव वाक्य है. 'was shocked at' (सामान्य भूतकाल) का एक्टिव 'shocked' (V2) होता है."
    },
    {
      "question": "Change the voice: The plants have been watered by the gardener.",
      "options": [
        "The gardener watered the plants.",
        "The gardener has watered the plants.",
        "The gardener is watering the plants.",
        "The gardener was watering the plants."
      ],
      "answer": "The gardener has watered the plants.",
      "explanation": "यह पेसिव वोइस का (पूर्ण वर्तमान काल) वाक्य है. 'have been watered' का एक्टिव 'has watered' होता है. ('gardener' एकवचन है)."
    },
    {
      "question": "Change the voice: English is taught here.",
      "options": [
        "They teach English here.",
        "A teacher teaches English here.",
        "Someone teaches English here.",
        "All of the above are possible."
      ],
      "answer": "All of the above are possible.",
      "explanation": "यह पैसिव वॉयस में कर्ता (Subject) (agent) नहीं. इसलिए एक्टिव वॉयस में 'They', 'A teacher', 'Someone' जैसे कोई भी तार्किक कर्ता (Subject) मूकी सकता है."
    }
  ],
  "test-17": [
    {
      "question": "Change the voice: The problem was so difficult that nobody could solve it.",
      "options": [
        "The problem was too difficult to be solved.",
        "The problem was very difficult and it could not be solved.",
        "The problem was so difficult that it could not be solved.",
        "It was a very difficult problem to be solved."
      ],
      "answer": "The problem was so difficult that it could not be solved.",
      "explanation": "इस वाक्य में दो क्लोझ है. दूसरा क्लोझ 'nobody could solve it' को पेसिव में बदलवह हुयह 'it could not be solved by anybody' होता. 'by anybody' लिखके जरूरी नहीं. प्रथम क्लोझ वैसा ही रहता है."
    },
    {
      "question": "Change the voice: He was appointed monitor.",
      "options": [
        "The principal appointed him monitor.",
        "They appointed him monitor.",
        "Someone appointed him monitor.",
        "The teacher appointed him monitor."
      ],
      "answer": "They appointed him monitor.",
      "explanation": "यह पैसिव वाक्य में कर्ता (Subject) नहीं. 'was appointed' सामान्य भूतकाल में है. एक्टिव में बदलते समय, हम 'They' जैसा सामान्य कर्ता (Subject) मैंन सकवह हैं. 'They made him captain' जैसी यह रचना है."
    },
    {
      "question": "Change the voice: We must listen to his words.",
      "options": [
        "His words must be listened to by us.",
        "His words must be listened by us.",
        "His words should be listened to by us.",
        "His words have to be listened by us."
      ],
      "answer": "His words must be listened to by us.",
      "explanation": "जब क्रिया (Verb) के साथ Preposition (listen to) हो, तब पैसिव वॉयस में वह Preposition क्रिया (Verb) की के साथ ही रहता है. Modal 'must' होने के कारण 'must be listened to' रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: The Swiss regarded him as an impostor and called him a villain.",
      "options": [
        "He was regarded as an impostor and was called a villain by the Swiss.",
        "He has been regarded as an impostor and called a villain by the Swiss.",
        "He was regarded as an impostor and called a villain by the Swiss.",
        "He is regarded as an impostor and called a villain by the Swiss."
      ],
      "answer": "He was regarded as an impostor and called a villain by the Swiss.",
      "explanation": "इस वाक्य में 'and' से जोडाए हुए दो क्रिया (Verb)ो है. दोनों को पेसिव में बदलने के लिए के है. 'regarded' का 'was regarded' और 'called' का 'was called' होता है. दूसरों 'was' को पुनरावर्तित करवा की जरूर नहीं."
    },
    {
      "question": "Change the voice: I was obliged to leave.",
      "options": [
        "Circumstances obliged me to leave.",
        "I was forced to leave.",
        "They obliged me to leave.",
        "My obligation was to leave."
      ],
      "answer": "Circumstances obliged me to leave.",
      "explanation": "यह पेसिव वाक्य है. 'was obliged' सामान्य भूतकाल में है. यहाँ 'by...' कर्ता (Subject) नहीं. यहवा किस्सा मैं, 'Circumstances' (संजोगो) यह सौसे उचित कर्ता (Subject) है."
    },
    {
      "question": "Change the voice: I saw him leaving the house.",
      "options": [
        "He was seen leaving the house by me.",
        "He was seen to be leaving the house by me.",
        "Leaving the house he was seen by me.",
        "He had been seen leaving the house by me."
      ],
      "answer": "He was seen leaving the house by me.",
      "explanation": "जब एक्टिव वॉयस में see, hear, feel जैसे क्रिया (Verb) के बाद V-ing (present participle) हो, तब पैसिव वॉयस में वह वैसा ही रहता है. 'was seen leaving' रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: A great deal of money is spent on advertising by them.",
      "options": [
        "They spend a great deal of money on advertising.",
        "They spent a great deal of money on advertising.",
        "They are spending a great deal of money on advertising.",
        "They have spent a great deal of money on advertising."
      ],
      "answer": "They spend a great deal of money on advertising.",
      "explanation": "यह पेसिव वोइस का (सामान्य वर्तमान काल) वाक्य है. 'is spent' का एक्टिव 'spend' होता है."
    },
    {
      "question": "Change the voice: How was it managed by you?",
      "options": [
        "How did you manage it?",
        "How you managed it?",
        "How do you manage it?",
        "How could you manage it?"
      ],
      "answer": "How did you manage it?",
      "explanation": "यह पेसिव वोइस का (सामान्य भूतकाल) प्रश्न है. 'was managed' का एक्टिव 'did... manage' होता है."
    },
    {
      "question": "Change the voice: He was refused admittance.",
      "options": [
        "They refused him admittance.",
        "Admittance was refused to him.",
        "He refused admittance.",
        "They refused admittance to him."
      ],
      "answer": "They refused him admittance.",
      "explanation": "यह पैसिव वाक्य में कर्ता (Subject) नहीं, इसलिए 'They' जैसे सामान्य कर्ता (Subject) का प्रयोग करक्या. 'was refused' सामान्य भूतकाल में है, जो का एक्टिव 'refused' (V2) होता है."
    },
    {
      "question": "Change the voice: The proposal was accepted by the committee.",
      "options": [
        "The committee accepted the proposal.",
        "The committee accepts the proposal.",
        "The committee has accepted the proposal.",
        "The committee was accepting the proposal."
      ],
      "answer": "The committee accepted the proposal.",
      "explanation": "यह पेसिव वोइस का (सामान्य भूतकाल) वाक्य है. 'was accepted' का एक्टिव 'accepted' (V2) होता है."
    }
  ],
  "test-18": [
    {
      "question": "Change the voice: The cat is feared by the mouse.",
      "options": [
        "The mouse fears the cat.",
        "The mouse is fearing the cat.",
        "The mouse feared the cat.",
        "The cat fears the mouse."
      ],
      "answer": "The mouse fears the cat.",
      "explanation": "यह पेसिव वोइस का (सामान्य वर्तमान काल) वाक्य है. 'is feared' का एक्टिव 'fears' होता है."
    },
    {
      "question": "Change the voice: The letter will be posted.",
      "options": [
        "I will post the letter.",
        "Someone will post the letter.",
        "They will post the letter.",
        "Any of the above can be used."
      ],
      "answer": "Any of the above can be used.",
      "explanation": "पैसिव वाक्य में कर्ता (Subject) नहीं. इसलिए, एक्टिव वॉयस में 'I', 'Someone', 'They' जैसे कोई भी तार्किक कर्ता (Subject) का प्रयोग किया जा सकता है. 'will be posted' का एक्टिव 'will post' होता है."
    },
    {
      "question": "Change the voice: Quinine tastes bitter.",
      "options": [
        "Quinine is bitter when it is tasted.",
        "Quinine is tasted bitter.",
        "The taste of quinine is bitter.",
        "Quinine is bitter."
      ],
      "answer": "Quinine is bitter when it is tasted.",
      "explanation": "यह वाक्य Quasi-Passive Voice का है. 'taste', 'smell', 'feel' जैसे क्रिया (Verb)ोकी रचना 'Subject + verb + complement' होता है. उसका पेसिव 'Subject + is/are + complement + when + it is/they are + V3' होता है."
    },
    {
      "question": "Change the voice: The room was cleaned.",
      "options": [
        "I cleaned the room.",
        "Someone cleaned the room.",
        "The cleaner cleaned the room.",
        "Any of the above can be used."
      ],
      "answer": "Any of the above can be used.",
      "explanation": "यह पैसिव वाक्य में कर्ता (Subject) का उल्लेख नहीं है. इसलिए एक्टिव वॉयस में 'I', 'Someone', (या) 'The cleaner' जैसे कोई भी उचित कर्ता (Subject) का प्रयोग किया जा सकता है. 'was cleaned' का एक्टिव 'cleaned' (V2) होता है."
    },
    {
      "question": "Change the voice: His pocket has been picked.",
      "options": [
        "They have picked his pocket.",
        "Someone has picked his pocket.",
        "The pickpocket has picked his pocket.",
        "Picking has been done to his pocket."
      ],
      "answer": "Someone has picked his pocket.",
      "explanation": "'has been picked' (पूर्ण वर्तमान काल पेसिव) का एक्टिव 'has picked' होता है. कर्ता (Subject) अज्ञात होने के कारण 'Someone'  का प्रयोग करना उचित है."
    },
    {
      "question": "Change the voice: Why should I be suspected by you?",
      "options": [
        "Why should you suspect me?",
        "Why you should suspect me?",
        "Why do you suspect me?",
        "Should you suspect me?"
      ],
      "answer": "Why should you suspect me?",
      "explanation": "यह पेसिव वोइस का प्रश्न है. 'should I be suspected' का एक्टिव 'should you suspect me' होता है. प्रश्नवाचक रचना 'Why + modal + subject + V1 + object?' है."
    },
    {
      "question": "Change the voice: The ground has to be dug by the labourers.",
      "options": [
        "The labourers have to dig the ground.",
        "The labourers must dig the ground.",
        "The labourers are to dig the ground.",
        "The labourers will dig the ground."
      ],
      "answer": "The labourers have to dig the ground.",
      "explanation": "'has to be dug' का एक्टिव 'have to dig' होता है. 'The labourers' बहुवचन होने के कारण 'have to' प्रयोग होता है."
    },
    {
      "question": "Change the voice: It is hoped that he will pass.",
      "options": [
        "We hope that he will pass.",
        "They hope that he will pass.",
        "One hopes that he will pass.",
        "All of the above are possible."
      ],
      "answer": "All of the above are possible.",
      "explanation": "'It is hoped that...' वाली पैसिव रचनाके एक्टिव वाक्य में कर्ता (Subject) के रूप में 'We', 'They', 'One' जैसे सामान्य कर्ता (Subject) का प्रयोग किया जा सकता है."
    },
    {
      "question": "Change the voice: I remember my sister taking me to the museum.",
      "options": [
        "I remember being taken to the museum by my sister.",
        "I remember myself being taken to the museum.",
        "I remember I was taken to the museum by my sister.",
        "I remember being taken to the museum."
      ],
      "answer": "I remember being taken to the museum by my sister.",
      "explanation": "इस वाक्य में 'remember' के बाद gerund ('taking') है. 'my sister taking me' भाग को पेसिव में बदलवह हुयह 'being taken by my sister' होता है. मुख्य क्रिया (Verb) 'remember' वैसा ही रहता है."
    },
    {
      "question": "Change the voice: It is impossible to do this.",
      "options": [
        "This is impossible to be done.",
        "To do this is impossible.",
        "This cannot be done.",
        "This must not be done."
      ],
      "answer": "This is impossible to be done.",
      "explanation": "'It is + adjective + to + V1' वाली रचना का पेसिव 'Subject + is + adjective + to be + V3' होता है."
    }
  ],
  "test-19": [
    {
      "question": "Change the voice: The accounts were checked by the officer.",
      "options": [
        "The officer is checking the accounts.",
        "The officer has checked the accounts.",
        "The officer checked the accounts.",
        "The officer was checking the accounts."
      ],
      "answer": "The officer checked the accounts.",
      "explanation": "यह पेसिव वोइस का (सामान्य भूतकाल) वाक्य है. 'were checked' का एक्टिव 'checked' (V2) होता है."
    },
    {
      "question": "Change the voice: You will be looked after well.",
      "options": [
        "They will look after you well.",
        "They can look after you well.",
        "They may look after you well.",
        "They should look after you well."
      ],
      "answer": "They will look after you well.",
      "explanation": "यह पैसिव वाक्य में कर्ता (Subject) नहीं. 'will be looked after' (सामान्य भविष्य काल) का एक्टिव 'will look after' होता है. 'They' जैसा सामान्य कर्ता (Subject) उमेरी सकता."
    },
    {
      "question": "Change the voice: Let this be done.",
      "options": [
        "Do this.",
        "I shall do this.",
        "He will do this.",
        "They should do this."
      ],
      "answer": "Do this.",
      "explanation": "यह पेसिव वोइस का आज्ञार्थ वाक्य है. 'Let + object + be + V3' का एक्टिव 'V1 + object' होता है."
    },
    {
      "question": "Change the voice: He was considered a genius.",
      "options": [
        "They considered him a genius.",
        "People consider him a genius.",
        "He is considered a genius.",
        "A genius was he considered."
      ],
      "answer": "They considered him a genius.",
      "explanation": "यह पेसिव वाक्य (सामान्य भूतकाल) में कर्ता (Subject) नहीं. हम 'They' जैसा सामान्य कर्ता (Subject) मैंन सकवह हैं. 'was considered' का एक्टिव 'considered' (V2) होता है."
    },
    {
      "question": "Change the voice: Why was such a letter written by your brother?",
      "options": [
        "Why did your brother write such a letter?",
        "Why your brother wrote such a letter?",
        "Why has your brother written such a letter?",
        "Why does your brother write such a letter?"
      ],
      "answer": "Why did your brother write such a letter?",
      "explanation": "यह पेसिव वोइस का (सामान्य भूतकाल) प्रश्न है. 'was... written' का एक्टिव 'did... write' होता है."
    },
    {
      "question": "Change the voice: The ship is being taken to a safe place by the captain.",
      "options": [
        "The captain took the ship to a safe place.",
        "The captain is taking the ship to a safe place.",
        "The captain has taken the ship to a safe place.",
        "The captain was taking the ship to a safe place."
      ],
      "answer": "The captain is taking the ship to a safe place.",
      "explanation": "यह पेसिव वोइस का (अपूर्ण वर्तमान काल) वाक्य है. 'is being taken' का एक्टिव 'is taking' होता है."
    },
    {
      "question": "Change the voice: These things have been left here by an unknown person.",
      "options": [
        "An unknown person left these things here.",
        "An unknown person has left these things here.",
        "An unknown person had left these things here.",
        "An unknown person was leaving these things here."
      ],
      "answer": "An unknown person has left these things here.",
      "explanation": "यह पेसिव वोइस का (पूर्ण वर्तमान काल) वाक्य है. 'have been left' का एक्टिव 'has left' होता है. ('An unknown person' एकवचन है)."
    },
    {
      "question": "Change the voice: Let the window be closed.",
      "options": [
        "Close the window.",
        "You should close the window.",
        "I will close the window.",
        "The window is closed."
      ],
      "answer": "Close the window.",
      "explanation": "यह पेसिव वोइस का आज्ञार्थ वाक्य है. 'Let + object + be + V3' का एक्टिव 'V1 + object' होता है."
    },
    {
      "question": "Change the voice: The students were laughing at the old man.",
      "options": [
        "The old man was being laughed by the students.",
        "The old man was laughed at by the students.",
        "The old man was being laughed at by the students.",
        "The old man is being laughed at by the students."
      ],
      "answer": "The old man was being laughed at by the students.",
      "explanation": "यह वाक्य चालू (Continuous) भूतकाल में है. 'laugh at' यह prepositional verb है, इसलिए 'at' V3 के बाद आता है है. रचना: 'was being laughed at'."
    },
    {
      "question": "Change the voice: They say that he is a spy.",
      "options": [
        "It is said that he is a spy.",
        "He is said to be a spy.",
        "Both A and B are correct.",
        "He is a spy, they say."
      ],
      "answer": "Both A and B are correct.",
      "explanation": "जब कर्ता (Subject) 'They' या 'People' हो और क्रिया (Verb) 'say', 'think', 'believe' हो, तब दो रूप से पेसिव बनाया जा सकता है: 'It is said that...' से (या) दूसरों क्लोझके कर्ता (Subject) (he) को मुख्य कर्ता (Subject) बनाकर 'He is said to be...'."
    }
  ],
  "test-20": [
    {
      "question": "Change the voice: The doctor has advised me to take rest.",
      "options": [
        "I have been advised by the doctor to take rest.",
        "I was advised by the doctor to take rest.",
        "I am advised to take rest by the doctor.",
        "Rest has been advised to me by the doctor."
      ],
      "answer": "I have been advised by the doctor to take rest.",
      "explanation": "यह वाक्य पूर्ण वर्तमान काल में है. 'me' कर्म (Object) का 'I' होता है और उसके साथ 'have been advised' प्रयोग होता है. infinitive ('to take rest') वैसा ही रहता है."
    },
    {
      "question": "Change the voice: The project will have been completed by Jane.",
      "options": [
        "Jane will complete the project.",
        "Jane has to complete the project.",
        "Jane will have completed the project.",
        "Jane would complete the project."
      ],
      "answer": "Jane will have completed the project.",
      "explanation": "यह पेसिव वोइस का (पूर्ण भविष्य काल) वाक्य है. 'will have been completed' का एक्टिव 'will have completed' होता है."
    },
    {
      "question": "Change the voice: His manners pleased us very much.",
      "options": [
        "We were pleased by his manners very much.",
        "We were very much pleased with his manners.",
        "We are pleased with his manners very much.",
        "We were pleased at his manners very much."
      ],
      "answer": "We were very much pleased with his manners.",
      "explanation": "'please' क्रिया (Verb) के बाद पैसिव वॉयस में 'with' Preposition आता है है. 'very much' जैसे क्रियाविशेषण को V3 से पहले मूकी सकता है. वाक्य सामान्य भूतकाल में है."
    },
    {
      "question": "Change the voice: This surface feels smooth.",
      "options": [
        "This surface is smooth when it is felt.",
        "This surface is felt smooth.",
        "This surface is smooth.",
        "Smooth is felt by this surface."
      ],
      "answer": "This surface is smooth when it is felt.",
      "explanation": "यह वाक्य Quasi-Passive Voice का है. 'feel' जैसे क्रिया (Verb)की रचना 'Subject + verb + complement' होता है. उसका पेसिव 'Subject + is + complement + when + it is + V3' होता है."
    },
    {
      "question": "Change the voice: I am doing sums.",
      "options": [
        "Sums are done by me.",
        "Sums are being done by me.",
        "Sums were being done by me.",
        "I have been doing sums."
      ],
      "answer": "Sums are being done by me.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. 'sums' बहुवचन होने के कारण 'are being done' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The tiger was chasing the deer.",
      "options": [
        "The deer was chased by the tiger.",
        "The deer is being chased by the tiger.",
        "The deer was being chased by the tiger.",
        "The deer has been chased by the tiger."
      ],
      "answer": "The deer was being chased by the tiger.",
      "explanation": "यह वाक्य चालू (Continuous) भूतकाल में है. पैसिव वॉयस में 'was/were + being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: He had composed a song.",
      "options": [
        "A song has been composed by him.",
        "A song was composed by him.",
        "A song had been composed by him.",
        "A song is being composed by him."
      ],
      "answer": "A song had been composed by him.",
      "explanation": "यह वाक्य पूर्ण भूतकाल में है. पैसिव वॉयस में बदलते समय 'had been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: She will have washed the clothes.",
      "options": [
        "The clothes will be washed by her.",
        "The clothes will have been washed by her.",
        "The clothes would have been washed by her.",
        "The clothes are washed by her."
      ],
      "answer": "The clothes will have been washed by her.",
      "explanation": "यह वाक्य पूर्ण भविष्य काल में है. पैसिव वॉयस में 'will have been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: You must not break the rules.",
      "options": [
        "The rules must not be broken by you.",
        "The rules should not be broken by you.",
        "The rules are not to be broken by you.",
        "The rules cannot be broken."
      ],
      "answer": "The rules must not be broken by you.",
      "explanation": "Modal auxiliary 'must' वाला नकारात्मक वाक्य में पैसिव रचना 'must not be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Let a doctor be sent for.",
      "options": [
        "Send for a doctor.",
        "You should send for a doctor.",
        "We must send for a doctor.",
        "A doctor must be sent for."
      ],
      "answer": "Send for a doctor.",
      "explanation": "यह पेसिव वोइस का आज्ञार्थ वाक्य है. 'Let + object + be + V3' का एक्टिव 'V1 + object' होता है. 'sent for' यह phrasal verb है."
    }
  ],
  "test-21": [
    {
      "question": "Change the voice: The enemy has defeated our army.",
      "options": [
        "Our army had been defeated by the enemy.",
        "Our army has been defeated by the enemy.",
        "Our army was defeated by the enemy.",
        "Our army is defeated by the enemy."
      ],
      "answer": "Our army has been defeated by the enemy.",
      "explanation": "यह वाक्य पूर्ण वर्तमान काल में है. 'Our army' एकवचन माने, इसलिए पेसिव में 'has been defeated' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Do you imitate others?",
      "options": [
        "Are others imitated by you?",
        "Were others imitated by you?",
        "Are others being imitated by you?",
        "Have others been imitated by you?"
      ],
      "answer": "Are others imitated by you?",
      "explanation": "यह वाक्य सामान्य वर्तमान काल का प्रश्न है. 'Do...' से शुरू होने वाले वाक्य का पेसिव 'Are...' से शुरू होता है कारणया कर्म (Object) 'others' बहुवचन है. रचना: Is/Am/Are + object + V3 + by + subject?"
    },
    {
      "question": "Change the voice: He was driving a car very fast.",
      "options": [
        "A car was driven very fast by him.",
        "A car was being driven very fast by him.",
        "A car is being driven very fast by him.",
        "A car has been driven very fast by him."
      ],
      "answer": "A car was being driven very fast by him.",
      "explanation": "यह वाक्य चालू (Continuous) भूतकाल में है. पैसिव वॉयस में 'was being driven' का प्रयोग होता है. क्रियाविशेषण 'very fast' वाक्यके अंदर आता है है."
    },
    {
      "question": "Change the voice: Her manners please us very much.",
      "options": [
        "We are very much pleased with her manners.",
        "We were very much pleased with her manners.",
        "We are very much pleased by her manners.",
        "We are pleased with her manners."
      ],
      "answer": "We are very much pleased with her manners.",
      "explanation": "'please' क्रिया (Verb) के बाद पैसिव वॉयस में 'with' प्रयोग होता है. वाक्य सामान्य वर्तमान काल में होने के कारण 'are pleased' आता है है. 'very much' यह क्रियाविशेषण है."
    },
    {
      "question": "Change the voice: It is time to shut the shop.",
      "options": [
        "It is time for the shop to be shut.",
        "It is time the shop was shut.",
        "It is time to be shut the shop.",
        "The shop is to be shut."
      ],
      "answer": "It is time for the shop to be shut.",
      "explanation": "'It is time to + V1 + object' वाली रचना का पेसिव 'It is time for + object + to be + V3' होता है."
    },
    {
      "question": "Change the voice: Who is creating this mess?",
      "options": [
        "By whom is this mess created?",
        "By whom has this mess been created?",
        "By whom this mess is being created?",
        "By whom is this mess being created?"
      ],
      "answer": "By whom is this mess being created?",
      "explanation": "'Who' वाला चालू वर्तमान काल के प्रश्नवाचक वाक्य का पेसिव 'By whom + is/am/are + object + being + V3?' होता है."
    },
    {
      "question": "Change the voice: They will demolish the entire block.",
      "options": [
        "The entire block is being demolished.",
        "The entire block will have been demolished.",
        "The entire block will be demolished by them.",
        "The block may be demolished entirely."
      ],
      "answer": "The entire block will be demolished by them.",
      "explanation": "यह वाक्य सामान्य भविष्य काल में है. पैसिव वॉयस में 'will be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: We are taught English here.",
      "options": [
        "A teacher teaches us English here.",
        "English is taught here by us.",
        "We teach English here.",
        "A teacher is teaching us English here."
      ],
      "answer": "A teacher teaches us English here.",
      "explanation": "यह पेसिव वाक्य है जो में कर्ता (Subject) नहीं. 'are taught' (सामान्य वर्तमान काल) का एक्टिव 'teaches' (A teacher एकवचन) होता है. 'A teacher' यह तार्किक कर्ता (Subject) है."
    },
    {
      "question": "Change the voice: Can we send the parcel tomorrow?",
      "options": [
        "Can the parcel be sent by us tomorrow?",
        "Could the parcel be sent by us tomorrow?",
        "Can we be sent the parcel tomorrow?",
        "The parcel can be sent tomorrow by us."
      ],
      "answer": "Can the parcel be sent by us tomorrow?",
      "explanation": "Modal 'Can' वाला प्रश्नवाचक वाक्य का पेसिव 'Can + object + be + V3...?' होता है."
    },
    {
      "question": "Change the voice: A letter has to be written.",
      "options": [
        "I have to write a letter.",
        "You have to write a letter.",
        "We have to write a letter.",
        "Any of the above."
      ],
      "answer": "Any of the above.",
      "explanation": "यह पैसिव वाक्य में कर्ता (Subject) नहीं. 'has to be written' का एक्टिव 'have to write' होता है. कर्ता (Subject) के रूप में 'I', 'You', 'We' जैसे कोई भी उचित सर्वनाम का प्रयोग किया जा सकता है."
    }
  ],
  "test-22": [
    {
      "question": "Change the voice: My father will write a letter.",
      "options": [
        "A letter will be written by my father.",
        "A letter is written by my father.",
        "A letter was written by my father.",
        "A letter will have been written by my father."
      ],
      "answer": "A letter will be written by my father.",
      "explanation": "यह वाक्य सामान्य भविष्य काल में है. पैसिव वॉयस में 'will be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: We have warned you.",
      "options": [
        "You have been warned by us.",
        "You were warned by us.",
        "You are warned by us.",
        "You have warned us."
      ],
      "answer": "You have been warned by us.",
      "explanation": "यह वाक्य पूर्ण वर्तमान काल में है. 'you' के साथ 'have been warned' आता है है. रचना: have/has + been + V3."
    },
    {
      "question": "Change the voice: Has somebody broken the window?",
      "options": [
        "Has the window been broken?",
        "Had the window been broken?",
        "Was the window broken?",
        "Is the window broken?"
      ],
      "answer": "Has the window been broken?",
      "explanation": "यह प्रश्नवाचक पूर्ण वर्तमान काल का वाक्य है. पैसिव वॉयस में 'Has/Have + object + been + V3?' रचना प्रयोग होता है. 'by somebody' लिखके जरूरी नहीं."
    },
    {
      "question": "Change the voice: I was writing a poem.",
      "options": [
        "A poem was written by me.",
        "A poem is being written by me.",
        "A poem was being written by me.",
        "A poem had been written by me."
      ],
      "answer": "A poem was being written by me.",
      "explanation": "यह वाक्य चालू (Continuous) भूतकाल में है. पैसिव वॉयस में बदलते समय 'was/were + being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The boy is climbing the cliff.",
      "options": [
        "The cliff was being climbed by the boy.",
        "The cliff is climbed by the boy.",
        "The cliff has been climbed by the boy.",
        "The cliff is being climbed by the boy."
      ],
      "answer": "The cliff is being climbed by the boy.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. पैसिव वॉयस में 'is being + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: They have spotted me in the crowd.",
      "options": [
        "I was spotted by them in the crowd.",
        "I have been spotted by them in the crowd.",
        "I had been spotted by them in the crowd.",
        "I am spotted by them in the crowd."
      ],
      "answer": "I have been spotted by them in the crowd.",
      "explanation": "यह वाक्य पूर्ण वर्तमान काल में है. 'me' कर्म (Object) का 'I' होता और 'I' के साथ 'have been spotted' प्रयोग होता."
    },
    {
      "question": "Change the voice: The Government has not approved the new drug for sale.",
      "options": [
        "The new drug has not been approved for sale by the Government.",
        "The new drug was not approved for sale by the Government.",
        "The Government's approval for the sale of the new drug has not been given.",
        "The new drug is not approved for sale by the Government."
      ],
      "answer": "The new drug has not been approved for sale by the Government.",
      "explanation": "यह नकारात्मक पूर्ण वर्तमान काल का वाक्य है. पैसिव वॉयस में 'has not been approved' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Who had laughed at you?",
      "options": [
        "By whom had you been laughed at?",
        "By whom were you been laughed at?",
        "By whom you had been laughed at?",
        "By whom are you laughed at?"
      ],
      "answer": "By whom had you been laughed at?",
      "explanation": "'Who' वाला पूर्ण भूतकाल के प्रश्नवाचक वाक्य का पेसिव 'By whom + had + object + been + V3?' होता है. 'laugh at' में 'at' के साथ ही रहता है."
    },
    {
      "question": "Change the voice: You must look into this matter.",
      "options": [
        "This matter should be looked into by you.",
        "This matter must be looked into by you.",
        "This matter has to be looked into by you.",
        "This matter may be looked into by you."
      ],
      "answer": "This matter must be looked into by you.",
      "explanation": "Modal 'must' वाला वाक्य में पैसिव रचना 'must be + V3' का प्रयोग होता है. 'look into' यह phrasal verb है, इसलिए 'into' के साथ ही रहता है."
    },
    {
      "question": "Change the voice: His speech was listened to with great respect.",
      "options": [
        "People listened to his speech with great respect.",
        "They listened to his speech with great respect.",
        "We listened to his speech with great respect.",
        "The audience listened to his speech with great respect."
      ],
      "answer": "People listened to his speech with great respect.",
      "explanation": "यह पैसिव वाक्य में कर्ता (Subject) नहीं. 'was listened to' (सामान्य भूतकाल) का एक्टिव 'listened to' होता है. 'People' जैसा सामान्य कर्ता (Subject) उचित है."
    }
  ],
  "test-23": [
    {
      "question": "Change the voice: The sage said, \"God helps those who help themselves.\"",
      "options": [
        "The sage said that God helps those who help themselves.",
        "The sage advised that God helps those who are helped by themselves.",
        "The sage said that those who help themselves are helped by God.",
        "It is said by the sage that God helps those who help themselves."
      ],
      "answer": "The sage said that God helps those who help themselves.",
      "explanation": "इस वाक्य में अवतरण चिह्न में कहेवत (proverb) है. कहेवतो और सनातन सत्योके काल में बदलाव नहीं होता, इसलिए उसका वोइस भी बदलातुं नहीं. केवल 'that' Conjunction जोड़ा जाए है."
    },
    {
      "question": "Change the voice: Let him see the picture.",
      "options": [
        "Let the picture be seen by him.",
        "The picture is seen by him.",
        "Let him be seen the picture.",
        "He should see the picture."
      ],
      "answer": "Let the picture be seen by him.",
      "explanation": "'Let' से शुरू होने वाले और अनुमति दर्शावता वाक्य में, पैसिव रचना 'Let + object + be + V3 + by + agent' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: We are reaching the end of this exercise.",
      "options": [
        "The end of this exercise is being reached by us.",
        "This exercise is ended by us.",
        "The end of this exercise is reached by us.",
        "This exercise is being ended by us."
      ],
      "answer": "The end of this exercise is being reached by us.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. 'The end of this exercise' यह यहखुं कर्म (Object) है. पैसिव रचना 'is being reached' है."
    },
    {
      "question": "Change the voice: I did not trust anybody.",
      "options": [
        "Nobody was trusted by me.",
        "Anybody was not trusted by me.",
        "Somebody was not trusted by me.",
        "I was not trusted by anybody."
      ],
      "answer": "Nobody was trusted by me.",
      "explanation": "सामान्य भूतकाल के नकारात्मक वाक्य का पेसिव है. 'did not trust' का 'was not trusted' होता. 'not anybody' को बदले 'nobody'  का प्रयोग वाक्य को अधिक स्वाभाविक बनाता है."
    },
    {
      "question": "Change the voice: The judge ordered the murderer to be hanged.",
      "options": [
        "It was ordered by the judge to hang the murderer.",
        "The judge ordered that the murderer should be hanged.",
        "The murderer was ordered by the judge to be hanged.",
        "The order was given by the judge to hang the murderer."
      ],
      "answer": "The judge ordered that the murderer should be hanged.",
      "explanation": "इस वाक्य में 'ordered' के बाद object + to-infinitive है. उसका पेसिव 'ordered that + object + should be + V3' जैसी रचनासे बनता है, जो अधिक स्पष्ट है."
    },
    {
      "question": "Change the voice: Who will have broken the record?",
      "options": [
        "By whom will the record have been broken?",
        "By whom the record will have been broken?",
        "By whom will have the record been broken?",
        "Who will be breaking the record?"
      ],
      "answer": "By whom will the record have been broken?",
      "explanation": "'Who' वाला पूर्ण भविष्य कालके प्रश्न का पेसिव 'By whom + will + object + have been + V3?' होता है."
    },
    {
      "question": "Change the voice: You should not offer meat to vegetarians.",
      "options": [
        "Vegetarians should not be offered meat by you.",
        "Meat should not be offered to vegetarians by you.",
        "Both A and B are correct.",
        "Meat and vegetarians should not be offered."
      ],
      "answer": "Both A and B are correct.",
      "explanation": "इस वाक्य में दो कर्म (Object) है: 'meat' (direct) और 'vegetarians' (indirect). दोनों को कर्ता (Subject) बनाकर पेसिव वाक्य बनाया जा सकता है. इसलिए दोनों विकल्प सही हैं."
    },
    {
      "question": "Change the voice: The Principal has granted him a scholarship.",
      "options": [
        "A scholarship has been granted to him by the Principal.",
        "He has been granted a scholarship by the Principal.",
        "He was granted a scholarship by the Principal.",
        "Both A and B are correct."
      ],
      "answer": "Both A and B are correct.",
      "explanation": "इस वाक्य में भी दो कर्म (Object) है ('him' और 'a scholarship'). दोनों को कर्ता (Subject) बनाकर पूर्ण वर्तमान काल का पेसिव वाक्य बनाया जा सकता है."
    },
    {
      "question": "Change the voice: They are going to build a new airport.",
      "options": [
        "A new airport is built by them.",
        "A new airport is going to be built by them.",
        "A new airport will be built by them.",
        "A new airport is being built by them."
      ],
      "answer": "A new airport is going to be built by them.",
      "explanation": "'be going to + V1' वाली रचना का पेसिव 'be going to be + V3' होता है. वह भविष्य का ईरादो दर्शाता है."
    },
    {
      "question": "Change the voice: We found the lock broken last night.",
      "options": [
        "The lock was found broken by us last night.",
        "The lock had been found broken by us last night.",
        "The lock was found to be broken last night.",
        "Broken lock was found by us last night."
      ],
      "answer": "The lock was found broken by us last night.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. 'found' का 'was found' होता है. 'broken' यह यहाँ object complement के रूप में काम करता है, जो V3 के बाद आता है है."
    }
  ],
  "test-24": [
    {
      "question": "Change the voice: Why are you making a noise?",
      "options": [
        "Why is a noise made by you?",
        "Why is a noise being made by you?",
        "Why a noise is being made by you?",
        "By whom is a noise being made?"
      ],
      "answer": "Why is a noise being made by you?",
      "explanation": "यह WH-प्रश्नवाचक वाक्य अपूर्ण वर्तमान काल में है. पेसिव में 'Why + is/am/are + object + being + V3...?' रचना प्रयोग होता है. 'a noise' एकवचन होने के कारण 'is' आता है."
    },
    {
      "question": "Change the voice: The dog is being teased by the boy.",
      "options": [
        "The boy teases the dog.",
        "The boy is teasing the dog.",
        "The boy was teasing the dog.",
        "The boy has teased the dog."
      ],
      "answer": "The boy is teasing the dog.",
      "explanation": "यह पेसिव वोइस का (अपूर्ण वर्तमान काल) वाक्य है. 'is being teased' का एक्टिव 'is teasing' होता है."
    },
    {
      "question": "Change the voice: The President gave him a reward.",
      "options": [
        "A reward was given to him by the President.",
        "He was given a reward by the President.",
        "He was given the President's reward.",
        "Both A and B are correct."
      ],
      "answer": "Both A and B are correct.",
      "explanation": "इस वाक्य में दो कर्म (Object) है ('him' और 'a reward'). दोकां में से कोई भी कर्म (Object) को कर्ता (Subject) बनाकर सामान्य भूतकाल का पेसिव वाक्य बनाया जा सकता है."
    },
    {
      "question": "Change the voice: You will be surprised at my conduct.",
      "options": [
        "My conduct will surprise you.",
        "My conduct would surprise you.",
        "Your conduct will surprise me.",
        "My conduct is surprising."
      ],
      "answer": "My conduct will surprise you.",
      "explanation": "यह पेसिव वाक्य है. 'will be surprised at' का एक्टिव 'will surprise' होता है. 'at' Preposition निकल जाता है."
    },
    {
      "question": "Change the voice: Let this work be finished at once.",
      "options": [
        "Finish this work at once.",
        "You should finish this work at once.",
        "You must finish this work at once.",
        "Let's finish this work."
      ],
      "answer": "Finish this work at once.",
      "explanation": "यह पेसिव वोइस का आज्ञार्थ वाक्य है. 'Let + object + be + V3' का एक्टिव 'V1 + object' होता है."
    },
    {
      "question": "Change the voice: Where were they playing the cricket match?",
      "options": [
        "Where was the cricket match played?",
        "Where has the cricket match been played?",
        "Where was the cricket match being played by them?",
        "Where is the cricket match being played?"
      ],
      "answer": "Where was the cricket match being played by them?",
      "explanation": "यह WH-प्रश्नवाचक वाक्य अपूर्ण भूतकाल में है. पेसिव में 'Where + was/were + object + being + V3...?' रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: My mother baked the cake yesterday.",
      "options": [
        "The cake is baked by my mother yesterday.",
        "The cake was baked by my mother yesterday.",
        "The cake was being baked by my mother yesterday.",
        "The cake has been baked by my mother yesterday."
      ],
      "answer": "The cake was baked by my mother yesterday.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है ('yesterday'). पैसिव वॉयस में 'was baked' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: They have published all the details of the invention.",
      "options": [
        "All the details of the invention are published by them.",
        "All the details of the invention were published by them.",
        "All the details of the invention have been published by them.",
        "The publication of the details of the invention was done by them."
      ],
      "answer": "All the details of the invention have been published by them.",
      "explanation": "यह वाक्य पूर्ण वर्तमान काल में है. 'All the details of the invention' यह कर्म (Object) है और वह बहुवचन है, इसलिए 'have been published' प्रयोग होता है."
    },
    {
      "question": "Change the voice: I should have met him yesterday.",
      "options": [
        "He should be met by me yesterday.",
        "He should have been met by me yesterday.",
        "He should have met by me yesterday.",
        "He should have been meeting me yesterday."
      ],
      "answer": "He should have been met by me yesterday.",
      "explanation": "'Modal + have + V3' वाली रचसंज्ञाां, पैसिव वॉयस में 'Modal + have been + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Somebody told me that there had been an explosion in the mall.",
      "options": [
        "I was told by somebody about the explosion in the mall.",
        "I was told by somebody that there had been an explosion in the mall.",
        "I was told that there had been an explosion in the mall.",
        "Both B and C are correct."
      ],
      "answer": "Both B and C are correct.",
      "explanation": "इस वाक्य में मुख्य क्लोझ 'Somebody told me' को पेसिव में 'I was told' में बदल जाता है. 'by somebody' लिखके वैकल्पिक है. दूसरा क्लोझ ('that...') वैसा ही रहता है. इसलिए B और C दोनों सही है, भी C अधिक सामान्य है."
    }
  ],
  "test-25": [
    {
      "question": "Change the voice: I shall be obliged to go.",
      "options": [
        "Circumstances will oblige me to go.",
        "I will go.",
        "They will oblige me to go.",
        "Circumstances may oblige me to go."
      ],
      "answer": "Circumstances will oblige me to go.",
      "explanation": "यह पेसिव वाक्य है. 'shall be obliged' का एक्टिव 'will oblige' होता है. यहाँ कर्ता (Subject) का उल्लेख नहीं है, इसलिए 'Circumstances' (संजोगो) यह सौसे उचित कर्ता (Subject) है."
    },
    {
      "question": "Change the voice: He has been arrested by the police.",
      "options": [
        "The police arrested him.",
        "The police were arresting him.",
        "The police has arrested him.",
        "The police have arrested him."
      ],
      "answer": "The police have arrested him.",
      "explanation": "यह पेसिव वोइस का (पूर्ण वर्तमान काल) वाक्य है. 'has been arrested' का एक्टिव 'have arrested' होता है क्योंकि 'The police' बहुवचन माना जाता है."
    },
    {
      "question": "Change the voice: I am trusted by him.",
      "options": [
        "He trusts me.",
        "He trusted me.",
        "He is trusting me.",
        "He will trust me."
      ],
      "answer": "He trusts me.",
      "explanation": "यह पेसिव वोइस का (सामान्य वर्तमान काल) वाक्य है. 'am trusted' का एक्टिव 'trusts' होता है क्योंकि कर्ता (Subject) 'He' अन्य पुरुष एकवचन है."
    },
    {
      "question": "Change the voice: This work will have to be done by you.",
      "options": [
        "You will have to do this work.",
        "You have to do this work.",
        "You would have to do this work.",
        "You must do this work."
      ],
      "answer": "You will have to do this work.",
      "explanation": "यह पेसिव वाक्य है. 'will have to be done' का एक्टिव 'will have to do' होता है."
    },
    {
      "question": "Change the voice: The walls were not being painted by them.",
      "options": [
        "They were not painting the walls.",
        "They did not paint the walls.",
        "They are not painting the walls.",
        "They had not painted the walls."
      ],
      "answer": "They were not painting the walls.",
      "explanation": "यह पेसिव वोइस का (अपूर्ण भूतकाल) नकारात्मक वाक्य है. 'were not being painted' का एक्टिव 'were not painting' होता है."
    },
    {
      "question": "Change the voice: What could be done by him?",
      "options": [
        "What he could do?",
        "What can he do?",
        "What could he do?",
        "Could he do what?"
      ],
      "answer": "What could he do?",
      "explanation": "यह पेसिव वोइस का प्रश्न है. 'could be done' का एक्टिव 'could do' होता है. प्रश्नवाचक रचना 'What + modal + subject + V1?' है."
    },
    {
      "question": "Change the voice: The food tastes delicious.",
      "options": [
        "The food is delicious when it is tasted.",
        "The food is tasted delicious.",
        "The food is delicious.",
        "The food's taste is delicious."
      ],
      "answer": "The food is delicious when it is tasted.",
      "explanation": "यह वाक्य Quasi-Passive Voice का है. 'taste' जैसे क्रिया (Verb)की रचना का पेसिव 'Subject + is + complement + when + it is + V3' होता है."
    },
    {
      "question": "Change the voice: Let him not be disturbed.",
      "options": [
        "Don't disturb him.",
        "You should not disturb him.",
        "Let's not disturb him.",
        "He is not to be disturbed."
      ],
      "answer": "Don't disturb him.",
      "explanation": "यह पेसिव वोइस का नकारात्मक आज्ञार्थ वाक्य है. 'Let + object + not be + V3' का एक्टिव 'Do not + V1 + object' होता है."
    },
    {
      "question": "Change the voice: Had the work been finished by you?",
      "options": [
        "Did you finish the work?",
        "Have you finished the work?",
        "Had you finished the work?",
        "Were you finishing the work?"
      ],
      "answer": "Had you finished the work?",
      "explanation": "यह पेसिव वोइस का (पूर्ण भूतकाल) प्रश्न है. 'Had... been finished' का एक्टिव 'Had... finished' होता है."
    },
    {
      "question": "Change the voice: He was seen to enter the house.",
      "options": [
        "We saw him entering the house.",
        "We saw him enter the house.",
        "They saw him to enter the house.",
        "He entered the house as we saw."
      ],
      "answer": "We saw him enter the house.",
      "explanation": "यह पेसिव वाक्य है. 'was seen to enter' का एक्टिव 'saw... enter' (bare infinitive) होता है क्योंकि एक्टिव में 'see' के बाद to-infinitive प्रयुक्त नहीं."
    }
  ],
  "test-26": [
    {
      "question": "Change the voice: People claim that the earth is round.",
      "options": [
        "It is claimed that the earth is round.",
        "The earth is claimed to be round.",
        "The earth is round, it is claimed.",
        "Both A and B are correct."
      ],
      "answer": "Both A and B are correct.",
      "explanation": "जब कर्ता (Subject) 'People' या 'They' हो और क्रिया (Verb) 'claim', 'say', 'think' हो, तब दो रूप से पेसिव बनाया जा सकता है: 'It is claimed that...' से (या) दूसरों क्लोझके कर्ता (Subject) (the earth) को मुख्य कर्ता (Subject) बनाकर 'The earth is claimed to be...'."
    },
    {
      "question": "Change the voice: The doctor is examining the patients.",
      "options": [
        "The patients were being examined by the doctor.",
        "The patients are examined by the doctor.",
        "The patients have been examined by the doctor.",
        "The patients are being examined by the doctor."
      ],
      "answer": "The patients are being examined by the doctor.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. 'The patients' बहुवचन होने के कारण पैसिव वॉयस में 'are being examined' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: Whom did you laugh at?",
      "options": [
        "Who was laughed at by you?",
        "By whom were you laughed at?",
        "Who was being laughed at by you?",
        "Who is laughed at by you?"
      ],
      "answer": "Who was laughed at by you?",
      "explanation": "'Whom' से शुरू होने वाले प्रश्न का पेसिव 'Who' से शुरू होता है. यह वाक्य सामान्य भूतकाल में है, इसलिए 'Who + was/were + V3...?' रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: You have to choose a subject.",
      "options": [
        "A subject has to be chosen by you.",
        "A subject have to be chosen by you.",
        "A subject is to be chosen by you.",
        "A subject must be chosen by you."
      ],
      "answer": "A subject has to be chosen by you.",
      "explanation": "'have to + V1' वाली रचना का पेसिव 'has/have to be + V3' होता है. 'A subject' एकवचन होने के कारण 'has to be chosen' आता है."
    },
    {
      "question": "Change the voice: The noise of the cars disturbed our sleep.",
      "options": [
        "Our sleep was disturbed by the noise of the cars.",
        "We were disturbed in our sleep by the noise of the cars.",
        "Our sleep is disturbed by the noise of the cars.",
        "The noise of the cars was disturbing our sleep."
      ],
      "answer": "Our sleep was disturbed by the noise of the cars.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. कर्म (Object) 'Our sleep' है. पैसिव वॉयस में 'was disturbed' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: This unexpected news surprised me a great deal.",
      "options": [
        "I was a great deal surprised by this unexpected news.",
        "I was surprised a great deal by this unexpected news.",
        "I was surprised a great deal at this unexpected news.",
        "I am surprised at this unexpected news a great deal."
      ],
      "answer": "I was surprised a great deal at this unexpected news.",
      "explanation": "'surprise' क्रिया (Verb) के बाद पेसिव में 'at' Preposition आता है है. 'a great deal' यह क्रियाविशेषण है जो V3 के बाद आता है है. वाक्य सामान्य भूतकाल में है."
    },
    {
      "question": "Change the voice: Has a dog ever bitten you?",
      "options": [
        "Have you ever been bitten by a dog?",
        "Has a dog ever been bitten by you?",
        "Were you ever bitten by a dog?",
        "Are you ever bitten by a dog?"
      ],
      "answer": "Have you ever been bitten by a dog?",
      "explanation": "यह प्रश्नवाचक पूर्ण वर्तमान काल का वाक्य है. कर्म (Object) 'you' को कर्ता (Subject) बकेवता 'Have you...' से वाक्य शुरू होता है. रचना: 'Have + object + ever + been + V3?'"
    },
    {
      "question": "Change the voice: Don't speak until someone speaks to you.",
      "options": [
        "Don't speak until you are spoken to.",
        "You should not be spoken to.",
        "Let someone speak to you.",
        "You are not to be spoken to."
      ],
      "answer": "Don't speak until you are spoken to.",
      "explanation": "इस वाक्य में दूसरा क्लोझ 'someone speaks to you' (सामान्य वर्तमान काल) है, जो का पेसिव 'you are spoken to' होता है. प्रथम क्लोझ वैसा ही रहता है."
    },
    {
      "question": "Change the voice: Did the noise frighten you?",
      "options": [
        "Did you frighten the noise?",
        "Were you frightened by the noise?",
        "Was you frightened by the noise?",
        "Are you frightened by the noise?"
      ],
      "answer": "Were you frightened by the noise?",
      "explanation": "यह सामान्य भूतकाल का प्रश्न है. 'Did...' से शुरू होने वाले वाक्य का पेसिव 'Were...' से शुरू होता है कारणया कर्म (Object) 'you' है. रचना: Was/Were + object + V3 + by + subject?"
    },
    {
      "question": "Change the voice: We must endure what we cannot cure.",
      "options": [
        "What cannot be cured must be endured.",
        "What cannot be cured must be endured by us.",
        "What we cannot cure must be endured.",
        "What cannot be cured by us must be endured."
      ],
      "answer": "What cannot be cured must be endured.",
      "explanation": "इस वाक्य में दो क्लोझ है. 'what we cannot cure' में 'what' यह कर्म (Object) है. पेसिव में वह कर्ता (Subject) बनता है: 'what cannot be cured'. मुख्य क्लोझ 'We must endure (it)' का पेसिव 'it must be endured' होता है. दोनों को जोडी को सही जवाब बनता है."
    }
  ],
  "test-27": [
    {
      "question": "Change the voice: I am certain that he has committed the mistake.",
      "options": [
        "It is certain that the mistake has been committed by him.",
        "He is certain to have committed the mistake.",
        "I am certain about the mistake being committed by him.",
        "That he has committed the mistake is certain."
      ],
      "answer": "He is certain to have committed the mistake.",
      "explanation": "यह प्रकारके वाक्य में, दूसरों क्लोझके कर्ता (Subject) 'he' को मुख्य कर्ता (Subject) बनाया जा सकता है. 'is certain' वैसा ही रहता है और 'that he has committed' का 'to have committed' (perfect infinitive) होता है."
    },
    {
      "question": "Change the voice: The residents celebrated the Independence Day.",
      "options": [
        "The Independence Day is celebrated by the residents.",
        "The Independence Day was celebrated by the residents.",
        "The Independence Day has been celebrated by the residents.",
        "Celebration of Independence Day was done by the residents."
      ],
      "answer": "The Independence Day was celebrated by the residents.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. पैसिव वॉयस में 'was celebrated' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The boys were digging a hole in the ground.",
      "options": [
        "A hole was being dug in the ground by the boys.",
        "A hole is being dug in the ground by the boys.",
        "In the ground, a hole was being dug by the boys.",
        "A hole has been dug in the ground by the boys."
      ],
      "answer": "A hole was being dug in the ground by the boys.",
      "explanation": "यह वाक्य चालू (Continuous) भूतकाल में है. पैसिव वॉयस में 'was being dug' का प्रयोग होता है. 'in the ground' यह स्थलसूचक शब्दसमूह है जो अंदर आता है है."
    },
    {
      "question": "Change the voice: Who can count the stars in the sky?",
      "options": [
        "By whom can the stars in the sky be counted?",
        "By whom can be the stars in the sky counted?",
        "Can the stars in the sky be counted?",
        "By whom could the stars be counted in the sky?"
      ],
      "answer": "By whom can the stars in the sky be counted?",
      "explanation": "'Who' वाला प्रश्नवाचक वाक्य को 'By whom' से शुरू कराय है. Modal (can) होने के कारण पैसिव रचना 'By whom + modal + object + be + V3?' होता है."
    },
    {
      "question": "Change the voice: Was the question answered?",
      "options": [
        "Did someone answer the question?",
        "Has someone answered the question?",
        "Did the question get answered?",
        "Was the answer given?"
      ],
      "answer": "Did someone answer the question?",
      "explanation": "यह पेसिव वोइस का (सामान्य भूतकाल) प्रश्न है. 'Was... answered' का एक्टिव 'Did... answer' होता है. कर्ता (Subject) अज्ञात होने के कारण 'someone'  का प्रयोग किया जा सकता."
    },
    {
      "question": "Change the voice: The smoke of the cigarette filled the room.",
      "options": [
        "The room was filled with the smoke of the cigarette.",
        "The room was filled by the smoke of the cigarette.",
        "The room is filled with the smoke of the cigarette.",
        "The room got filled by the smoke."
      ],
      "answer": "The room was filled with the smoke of the cigarette.",
      "explanation": "'fill' क्रिया (Verb) के बाद पैसिव वॉयस में 'by' को बदले 'with' Prepositionका प्रयोग होता है. वाक्य सामान्य भूतकाल में है."
    },
    {
      "question": "Change the voice: Why did you not agree to my proposal?",
      "options": [
        "Why was my proposal not agreed to by you?",
        "Why was my proposal not agreed by you?",
        "Why my proposal was not agreed to by you?",
        "Why you did not agree to my proposal?"
      ],
      "answer": "Why was my proposal not agreed to by you?",
      "explanation": "यह WH-प्रश्नवाचक वाक्य सामान्य भूतकाल में है. 'agree to' यह phrasal verb है, इसलिए 'to' के साथ ही रहता है. रचना: 'Why + was/were + object + not + V3...?'"
    },
    {
      "question": "Change the voice: He has been singing a song for two hours.",
      "options": [
        "A song has been being sung by him for two hours.",
        "A song is being sung by him for two hours.",
        "This sentence cannot be changed into passive voice.",
        "A song has been sung by him for two hours."
      ],
      "answer": "This sentence cannot be changed into passive voice.",
      "explanation": "पूर्ण अपूर्ण काल (Perfect Continuous Tenses) - यानी, पूर्ण अपूर्ण वर्तमान काल, पूर्ण अपूर्ण भूतकाल, और पूर्ण अपूर्ण भविष्य कालके वाक्यों का पेसिव वोइस सामान्य रूप से बनाने के लिए में आता है नहीं क्योंकि 'been' और 'being'  का के साथ प्रयोग व्याकरण की दृष्टियह अउचित माना जाता है."
    },
    {
      "question": "Change the voice: They are to buy a new house.",
      "options": [
        "A new house is to be bought by them.",
        "A new house must be bought by them.",
        "A new house is being bought by them.",
        "A new house has to be bought by them."
      ],
      "answer": "A new house is to be bought by them.",
      "explanation": "'is/am/are + to + V1' वाली रचसंज्ञाां, पैसिव वॉयस में 'is/am/are + to be + V3' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The Principal kept the staff members waiting.",
      "options": [
        "The staff members were kept waiting by the Principal.",
        "The staff members were waiting for the Principal.",
        "The staff members were being kept waiting by the Principal.",
        "The staff members had been kept waiting."
      ],
      "answer": "The staff members were kept waiting by the Principal.",
      "explanation": "यह वाक्य सामान्य भूतकाल में है. 'kept' का 'were kept' होता है. 'waiting' यह यहाँ object complement के रूप में काम करता है, जो V3 के बाद आता है है."
    }
  ],
  "test-28": [
    {
      "question": "Change the voice: Someone gave her a bulldog.",
      "options": [
        "She was given a bulldog.",
        "A bulldog was given to her.",
        "She has been given a bulldog.",
        "Both A and B are correct."
      ],
      "answer": "Both A and B are correct.",
      "explanation": "इस वाक्य में दो कर्म (Object) है ('her' और 'a bulldog'). दोनों को कर्ता (Subject) बनाकर सामान्य भूतकाल का पेसिव वाक्य बनाया जा सकता है. 'by someone' लिखके जरूरी नहीं."
    },
    {
      "question": "Change the voice: We should not laugh at the poor.",
      "options": [
        "The poor should not be laughed.",
        "The poor should not be laughed at by us.",
        "The poor must not be laughed at.",
        "The poor are not to be laughed at."
      ],
      "answer": "The poor should not be laughed at by us.",
      "explanation": "'laugh at' यह phrasal verb है, इसलिए पेसिव में 'at' के साथ ही रहता है. 'should' वाला वाक्य में 'should not be laughed at' रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: I was disappointed with the results.",
      "options": [
        "The results disappointed me.",
        "The results have disappointed me.",
        "The results were disappointing me.",
        "The results are disappointing."
      ],
      "answer": "The results disappointed me.",
      "explanation": "यह पेसिव वाक्य है. 'was disappointed with' (सामान्य भूतकाल) का एक्टिव 'disappointed' (V2) होता है. 'disappoint' के बाद 'with' Preposition निकल जाता है."
    },
    {
      "question": "Change the voice: Had he completed the work before the deadline?",
      "options": [
        "Had the work been completed by him before the deadline?",
        "Was the work completed before the deadline?",
        "Has the work been completed before the deadline?",
        "Had he been completing the work?"
      ],
      "answer": "Had the work been completed by him before the deadline?",
      "explanation": "यह प्रश्नवाचक पूर्ण भूतकाल का वाक्य है. पैसिव वॉयस में 'Had + object + been + V3' की रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: It is your duty to make tea at eleven o'clock.",
      "options": [
        "You are supposed to make tea at eleven o'clock.",
        "Tea is to be made by you at eleven o'clock.",
        "You are asked to make tea at eleven o'clock.",
        "You have to make tea at eleven o'clock."
      ],
      "answer": "You are supposed to make tea at eleven o'clock.",
      "explanation": "'It is your duty to...' जैसी रचना फरज का भाव दर्शाता है. उसका पेसिव 'You are supposed to...' से बनाया जा सकता है, जो अपेक्षा या ज़िम्मेदारी सूचवे है."
    },
    {
      "question": "Change the voice: The king gave him a reward.",
      "options": [
        "He was given a reward by the king.",
        "A reward was given to him by the king.",
        "He was given the king's reward.",
        "Both A and B are correct."
      ],
      "answer": "Both A and B are correct.",
      "explanation": "इस वाक्य में दो कर्म (Object) है ('him' और 'a reward'). दोनों को कर्ता (Subject) बनाकर सामान्य भूतकाल का पेसिव वाक्य बनाया जा सकता है."
    },
    {
      "question": "Change the voice: His father will look after him.",
      "options": [
        "He will be looked after by his father.",
        "He would be looked after by his father.",
        "He will be looked by his father.",
        "He is looked after by his father."
      ],
      "answer": "He will be looked after by his father.",
      "explanation": "यह सामान्य भविष्य काल का वाक्य है. 'look after' यह phrasal verb है, इसलिए 'after' के साथ ही रहता है. पैसिव रचना 'will be looked after' है."
    },
    {
      "question": "Change the voice: What did you eat for breakfast?",
      "options": [
        "What was eaten by you for breakfast?",
        "What were eaten by you for breakfast?",
        "What has been eaten for breakfast?",
        "What is eaten for breakfast by you?"
      ],
      "answer": "What was eaten by you for breakfast?",
      "explanation": "यह WH-प्रश्नवाचक वाक्य सामान्य भूतकाल में है. 'What' यहाँ कर्म (Object) है और पेसिव में वह कर्ता (Subject) के रूप में कार्य करता है. इसलिए उसके साथ एकवचन 'was' प्रयोग होता है. रचना: 'What + was/were + V3...?'"
    },
    {
      "question": "Change the voice: The team is preparing the report.",
      "options": [
        "The report is prepared by the team.",
        "The report has been prepared by the team.",
        "The report was being prepared by the team.",
        "The report is being prepared by the team."
      ],
      "answer": "The report is being prepared by the team.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. पैसिव वॉयस में 'is being prepared' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: They must have followed the instructions.",
      "options": [
        "The instructions must be followed by them.",
        "The instructions must have been followed by them.",
        "The instructions should have been followed by them.",
        "The instructions can have been followed by them."
      ],
      "answer": "The instructions must have been followed by them.",
      "explanation": "'Modal + have + V3' वाली रचसंज्ञाां, पैसिव वॉयस में 'Modal + have been + V3' का प्रयोग होता है."
    }
  ],
  "test-29": [
    {
      "question": "Change the voice: Our task had been completed before sunset.",
      "options": [
        "We completed our task before sunset.",
        "We had completed our task before sunset.",
        "We have completed our task before sunset.",
        "We complete our task before sunset."
      ],
      "answer": "We had completed our task before sunset.",
      "explanation": "यह पेसिव वोइस का (पूर्ण भूतकाल) वाक्य है. 'had been completed' का एक्टिव 'had completed' होता है. कर्ता (Subject) 'by us' गर्भित है."
    },
    {
      "question": "Change the voice: The boy was punished for his misconduct.",
      "options": [
        "The teacher punished the boy for his misconduct.",
        "His misconduct punished the boy.",
        "The boy's punishment was for his misconduct.",
        "They punished the boy for his misconduct."
      ],
      "answer": "The teacher punished the boy for his misconduct.",
      "explanation": "यह पैसिव वाक्य में कर्ता (Subject) नहीं. 'was punished' (सामान्य भूतकाल) का एक्टिव 'punished' (V2) होता है. 'The teacher' एक उचित, तार्किक कर्ता (Subject) है."
    },
    {
      "question": "Change the voice: He is said to be very rich.",
      "options": [
        "People say that he is very rich.",
        "It is said that he is very rich.",
        "He says he is very rich.",
        "Both A and B are correct."
      ],
      "answer": "People say that he is very rich.",
      "explanation": "'He is said to be...' वाली पैसिव रचना का एक्टिव 'People say that...' होता है. 'is said' (सामान्य वर्तमान काल) का एक्टिव 'say' होता है."
    },
    {
      "question": "Change the voice: Let the child not be disturbed.",
      "options": [
        "Do not disturb the child.",
        "You should not disturb the child.",
        "Don't disturb the child.",
        "Both A and C are correct."
      ],
      "answer": "Both A and C are correct.",
      "explanation": "यह पेसिव वोइस का नकारात्मक आज्ञार्थ वाक्य है. 'Let + object + not be + V3' का एक्टिव 'Do not + V1 + object' होता है. 'Don't' यह 'Do not' का संक्षिप्त रूप है."
    },
    {
      "question": "Change the voice: I was shocked by the news.",
      "options": [
        "The news shocked me.",
        "The news was shocking to me.",
        "I am shocked by the news.",
        "The news has shocked me."
      ],
      "answer": "The news shocked me.",
      "explanation": "यह पेसिव वाक्य है. 'was shocked by' (सामान्य भूतकाल) का एक्टिव 'shocked' (V2) होता है."
    },
    {
      "question": "Change the voice: Let not his feelings be hurt.",
      "options": [
        "Do not hurt his feelings.",
        "You must not hurt his feelings.",
        "Don't hurt his feelings.",
        "Both A and C are correct."
      ],
      "answer": "Both A and C are correct.",
      "explanation": "यह पेसिव वोइस का नकारात्मक आज्ञार्थ वाक्य है. 'Let not + object + be + V3' का एक्टिव 'Do not + V1 + object' होता है. 'Don't' यह 'Do not' का संक्षिप्त रूप है."
    },
    {
      "question": "Change the voice: The car has to be washed.",
      "options": [
        "I have to wash the car.",
        "Someone has to wash the car.",
        "You have to wash the car.",
        "Any of the above."
      ],
      "answer": "Any of the above.",
      "explanation": "यह पैसिव वाक्य में कर्ता (Subject) नहीं. 'has to be washed' का एक्टिव 'have/has to wash' होता है. कर्ता (Subject) के रूप में 'I', 'Someone', 'You' जैसे कोई भी उचित सर्वनाम का प्रयोग किया जा सकता है."
    },
    {
      "question": "Change the voice: What is being eaten by you?",
      "options": [
        "What are you eating?",
        "What you are eating?",
        "What do you eat?",
        "What were you eating?"
      ],
      "answer": "What are you eating?",
      "explanation": "यह पेसिव वोइस का (अपूर्ण वर्तमान काल) प्रश्न है. 'is being eaten' का एक्टिव 'are eating' होता है ('you' के साथ 'are' आता है)."
    },
    {
      "question": "Change the voice: The plants were watered by the gardener.",
      "options": [
        "The gardener waters the plants.",
        "The gardener is watering the plants.",
        "The gardener has watered the plants.",
        "The gardener watered the plants."
      ],
      "answer": "The gardener watered the plants.",
      "explanation": "यह पेसिव वोइस का (सामान्य भूतकाल) वाक्य है. 'were watered' का एक्टिव 'watered' (V2) होता है."
    },
    {
      "question": "Change the voice: He will be forgiven by his mother.",
      "options": [
        "His mother forgave him.",
        "His mother will forgive him.",
        "His mother has forgiven him.",
        "His mother may forgive him."
      ],
      "answer": "His mother will forgive him.",
      "explanation": "यह पेसिव वोइस का (सामान्य भविष्य काल) वाक्य है. 'will be forgiven' का एक्टिव 'will forgive' होता है."
    }
  ],
  "test-30": [
    {
      "question": "Change the voice: The results will have been declared by the board.",
      "options": [
        "The board will declare the results.",
        "The board will be declaring the results.",
        "The board will have declared the results.",
        "The board must declare the results."
      ],
      "answer": "The board will have declared the results.",
      "explanation": "यह पेसिव वोइस का (पूर्ण भविष्य काल) वाक्य है. 'will have been declared' का एक्टिव 'will have declared' होता है."
    },
    {
      "question": "Change the voice: These doors are to be painted.",
      "options": [
        "Someone is to paint these doors.",
        "Paint these doors.",
        "They are to paint these doors.",
        "Both A and C are correct."
      ],
      "answer": "Both A and C are correct.",
      "explanation": "यह पैसिव वाक्य में कर्ता (Subject) नहीं. 'are to be painted' का एक्टिव 'are to paint' होता है. कर्ता (Subject) के रूप में 'Someone' या 'They' जैसे सामान्य सर्वनाम का प्रयोग किया जा सकता है."
    },
    {
      "question": "Change the voice: The birds are building a nest.",
      "options": [
        "A nest is built by the birds.",
        "A nest was being built by the birds.",
        "A nest is being built by the birds.",
        "A nest has been built by the birds."
      ],
      "answer": "A nest is being built by the birds.",
      "explanation": "यह वाक्य चालू (Continuous) वर्तमान काल में है. पैसिव वॉयस में 'is being built' का प्रयोग होता है."
    },
    {
      "question": "Change the voice: The job had not been done by me.",
      "options": [
        "I did not do the job.",
        "I was not doing the job.",
        "I have not done the job.",
        "I had not done the job."
      ],
      "answer": "I had not done the job.",
      "explanation": "यह पेसिव वोइस का (पूर्ण भूतकाल) नकारात्मक वाक्य है. 'had not been done' का एक्टिव 'had not done' होता है."
    },
    {
      "question": "Change the voice: Who painted this beautiful picture?",
      "options": [
        "By whom was this beautiful picture painted?",
        "By whom is this beautiful picture painted?",
        "Was this beautiful picture painted by who?",
        "By whom has this beautiful picture been painted?"
      ],
      "answer": "By whom was this beautiful picture painted?",
      "explanation": "यह सामान्य भूतकाल का प्रश्न है. 'Who' से शुरू होने वाले प्रश्न का पेसिव 'By whom' से शुरू होता है और 'was/were + object + V3' रचना प्रयोग होता है."
    },
    {
      "question": "Change the voice: The old man is being helped by his son.",
      "options": [
        "His son helps the old man.",
        "His son is helping the old man.",
        "His son has helped the old man.",
        "His son was helping the old man."
      ],
      "answer": "His son is helping the old man.",
      "explanation": "यह पेसिव वोइस का (अपूर्ण वर्तमान काल) वाक्य है. 'is being helped' का एक्टिव 'is helping' होता है."
    },
    {
      "question": "Change the voice: The medicine tastes bad.",
      "options": [
        "The medicine is bad when tasted.",
        "The medicine is tasted bad.",
        "The medicine is bad when it is tasted.",
        "Bad is tasted by the medicine."
      ],
      "answer": "The medicine is bad when it is tasted.",
      "explanation": "यह वाक्य Quasi-Passive Voice का है. 'taste' जैसे क्रिया (Verb)की रचना का पेसिव 'Subject + is + complement + when + it is + V3' होता है."
    },
    {
      "question": "Change the voice: Let the truth be spoken.",
      "options": [
        "Speak the truth.",
        "You should speak the truth.",
        "We must speak the truth.",
        "Let's speak the truth."
      ],
      "answer": "Speak the truth.",
      "explanation": "यह पेसिव वोइस का आज्ञार्थ वाक्य है. 'Let + object + be + V3' का एक्टिव 'V1 + object' होता है."
    },
    {
      "question": "Change the voice: Was a car bought by your father?",
      "options": [
        "Was your father buying a car?",
        "Does your father buy a car?",
        "Has your father bought a car?",
        "Did your father buy a car?"
      ],
      "answer": "Did your father buy a car?",
      "explanation": "यह पेसिव वोइस का (सामान्य भूतकाल) प्रश्न है. 'Was... bought' का एक्टिव 'Did... buy' होता है."
    },
    {
      "question": "Change the voice: His words are not to be trusted.",
      "options": [
        "One should not trust his words.",
        "You must not trust his words.",
        "Don't trust his words.",
        "All of the above are possible."
      ],
      "answer": "All of the above are possible.",
      "explanation": "पैसिव रचना 'are not to be trusted' यह नकारात्मक सलाह या यहदेश सूचवे है. उसका एक्टिव स्वरूप के रूप में 'should not', 'must not', (या) 'Do not' वाली आज्ञार्थ रचना भी उचित है."
    }
  ]
};
