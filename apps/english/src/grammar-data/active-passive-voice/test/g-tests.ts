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
      "explanation": "આ વાક્ય સાદા વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'is/am/are + V3' નો ઉપયોગ થાય છે. 'A letter' એકવચન હોવાથી 'is written' નો ઉપયોગ થશે."
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
      "explanation": "આ વાક્ય સાદા વર્તમાનકાળમાં છે. ઓબ્જેક્ટ 'Cricket' ને સબ્જેક્ટ બનાવી, 'is' અને 'play' નું ભૂતકૃદંત (V3) 'played' મુકાય છે."
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
      "explanation": "ઓબ્જેક્ટ 'me' નું સબ્જેક્ટ 'I' થાય છે. 'I' સાથે સાદા વર્તમાનકાળના પેસિવ વોઇસમાં 'am' અને 'help' નું V3 'helped' વપરાય છે."
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
      "explanation": "આ વાક્ય સાદા વર્તમાનકાળમાં છે. 'Our elders' બહુવચન હોવાથી 'are respected' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા વર્તમાનકાળનું છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'is + V3' (drink-drank-drunk) નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા વર્તમાનકાળમાં છે. 'read' ના ત્રણેય રૂપ સરખા છે. 'A book' સાથે 'is' અને 'read' (V3) વપરાય છે."
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
      "explanation": "ઓબ્જેક્ટ 'The letters' બહુવચન છે, તેથી સાદા વર્તમાનકાળના પેસિવ વોઇસમાં 'are' અને 'deliver' નું V3 'delivered' વપરાય છે."
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
      "explanation": "આ વાક્ય સાદા વર્તમાનકાળમાં છે. 'Nests' બહુવચન હોવાથી, પેસિવ વોઇસમાં 'are built' નો ઉપયોગ થાય છે."
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
      "explanation": "ઓબ્જેક્ટ 'Crops' બહુવચન છે. સાદા વર્તમાનકાળના પેસિવમાં ફેરવતી વખતે 'are + V3' (grow-grew-grown) નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા વર્તમાનકાળમાં છે. ઓબ્જેક્ટ 'Food' ને સબ્જેક્ટ બનાવી, 'is' અને 'cook' નું ભૂતકૃદંત 'cooked' મુકાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે ('broke' V2 છે). પેસિવ વોઇસમાં ફેરવતી વખતે 'was/were + V3' નો ઉપયોગ થાય છે. 'The window' એકવચન હોવાથી 'was broken' નો ઉપયોગ થશે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે ('stole' V2 છે). પેસિવ વોઇસમાં 'was/were + V3' (steal-stole-stolen) નો ઉપયોગ થાય છે. 'by someone' લખવું વૈકલ્પિક છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે ('caught' V2 છે). પેસિવ વોઇસમાં 'was' અને 'catch' નું ભૂતકૃદંત 'caught' વપરાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળનું છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'was + V3' (write-wrote-written) નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે ('won' V2 છે). ઓબ્જેક્ટ 'The match' ને સબ્જેક્ટ બનાવી, 'was' અને 'win' નું ભૂતકૃદંત 'won' મુકાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'was/were + V3' નો ઉપયોગ થાય છે. 'The car' સાથે 'was repaired' આવે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળનું છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'was' અને 'teach' નું ભૂતકૃદંત 'taught' વપરાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે ('built' V2 છે). પેસિવ વોઇસમાં ફેરવતી વખતે 'was + V3' (build-built-built) નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. 'drank' (V2) નું પેસિવ 'was drunk' (was + V3) થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. 'sold' (V2) નું પેસિવ 'was sold' (was + V3) થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'will be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભવિષ્યકાળમાં છે. ઓબ્જેક્ટ 'The work' ને સબ્જેક્ટ બનાવી, 'will be' અને 'finish' નું ભૂતકૃદંત 'finished' મુકાય છે."
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
      "explanation": "આ વાક્ય સાદા ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં 'will be + V3' નો ઉપયોગ થાય છે. 'by them' લખવું વૈકલ્પિક છે."
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
      "explanation": "આ વાક્ય નકારાત્મક સાદા ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં 'will not be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "'I' અને 'We' સાથે 'shall' વપરાય છે, પણ પેસિવ વોઇસમાં સામાન્ય રીતે 'will' નો ઉપયોગ થાય છે. રચના 'will be + V3' છે."
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
      "explanation": "આ વાક્ય સાદા ભવિષ્યકાળનું છે. પેસિવ વોઇસમાં 'will be launched' નો ઉપયોગ થાય છે."
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
      "explanation": "સાદા ભવિષ્યકાળના વાક્યને પેસિવમાં ફેરવવા 'will be + V3' (sing-sang-sung) નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભવિષ્યકાળમાં છે. પેસિવ વોઇસની રચના 'will be + V3' છે."
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
      "explanation": "સાદા ભવિષ્યકાળના વાક્યને પેસિવમાં ફેરવવા 'will be repaired' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય નકારાત્મક સાદા ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'will not be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'is/am/are + being + V3' નો ઉપયોગ થાય છે. 'A story' એકવચન હોવાથી 'is being written' નો ઉપયોગ થશે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'is/am/are + being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "ચાલુ વર્તમાનકાળના વાક્યને પેસિવમાં ફેરવવા 'is being + V3' નો ઉપયોગ થાય છે. ઓબ્જેક્ટ 'A magazine' સબ્જેક્ટ બને છે."
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
      "explanation": "આ વાક્ય નકારાત્મક ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'is not being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પ્રશ્નાર્થ ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'Is/Am/Are + object + being + V3' ની રચના વપરાય છે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. 'The plants' બહુવચન હોવાથી 'are being watered' નો ઉપયોગ થાય છે."
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
      "explanation": "ચાલુ વર્તમાનકાળના વાક્યને પેસિવમાં ફેરવવા 'is being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "'Who' વાળા પ્રશ્નાર્થ વાક્યની શરૂઆત 'By whom' થી થાય છે. ચાલુ વર્તમાનકાળ હોવાથી 'is being knocked' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. 'Kites' બહુવચન હોવાથી 'are being flown' (fly-flew-flown) નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પ્રશ્નાર્થ ચાલુ વર્તમાનકાળમાં છે. ઓબ્જેક્ટ 'them' નું 'they' થાય છે, જેની સાથે 'Are' વપરાય છે. રચના 'Are they being helped' છે."
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
      "explanation": "આ વાક્ય ચાલુ ભૂતકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'was/were + being + V3' નો ઉપયોગ થાય છે. 'A book' એકવચન હોવાથી 'was being read' નો ઉપયોગ થશે."
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
      "explanation": "આ વાક્ય ચાલુ ભૂતકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'was/were + being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "ચાલુ ભૂતકાળના વાક્યને પેસિવમાં ફેરવવા 'was being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય નકારાત્મક ચાલુ ભૂતકાળમાં છે. 'Songs' બહુવચન હોવાથી 'were not being sung' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પ્રશ્નાર્થ ચાલુ ભૂતકાળમાં છે. પેસિવ વોઇસમાં 'Was/Were + object + being + V3' ની રચના વપરાય છે."
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
      "explanation": "આ વાક્ય ચાલુ ભૂતકાળમાં છે. 'A noise' એકવચન હોવાથી 'was being made' નો ઉપયોગ થાય છે."
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
      "explanation": "ચાલુ ભૂતકાળના વાક્યને પેસિવમાં ફેરવવા 'was being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "'What' વાળા પ્રશ્નાર્થ વાક્યમાં 'What' યથાવત રહે છે. ચાલુ ભૂતકાળ હોવાથી 'was being done' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ ભૂતકાળમાં છે. 'Nests' બહુવચન હોવાથી 'were being built' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પ્રશ્નાર્થ ચાલુ ભૂતકાળમાં છે. ઓબ્જેક્ટ 'the matter' એકવચન હોવાથી 'Was' વપરાય છે. રચના 'Was the matter being discussed' છે."
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
      "explanation": "આ વાક્ય પૂર્ણ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'has/have + been + V3' નો ઉપયોગ થાય છે. 'The project' એકવચન હોવાથી 'has been completed' નો ઉપયોગ થશે."
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
      "explanation": "આ વાક્ય પૂર્ણ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'has/have + been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "પૂર્ણ વર્તમાનકાળના વાક્યને પેસિવમાં ફેરવવા 'has been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય નકારાત્મક પૂર્ણ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'has not been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પ્રશ્નાર્થ પૂર્ણ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'Has/Have + object + been + V3' ની રચના વપરાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ વર્તમાનકાળમાં છે. 'The culprit' એકવચન હોવાથી 'has been arrested' નો ઉપયોગ થાય છે."
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
      "explanation": "પૂર્ણ વર્તમાનકાળના વાક્યને પેસિવમાં ફેરવવા 'has been + V3' નો ઉપયોગ થાય છે. 'by someone' લખવું જરૂરી નથી."
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
      "explanation": "WH-પ્રશ્નાર્થ વાક્યમાં 'Why' યથાવત રહે છે. પૂર્ણ વર્તમાનકાળ હોવાથી 'has this been done' નો ઉપયોગ થાય છે."
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
      "explanation": "ઓબ્જેક્ટ 'them' નું 'They' થાય છે. 'They' બહુવચન હોવાથી 'have been informed' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પ્રશ્નાર્થ પૂર્ણ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'Has + object + been + V3' ની રચના વપરાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભૂતકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'had been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભૂતકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'had been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "પૂર્ણ ભૂતકાળના વાક્યને પેસિવમાં ફેરવવા 'had been + V3' નો ઉપયોગ થાય છે. 'already' જેવા ક્રિયાવિશેષણ 'had' અને 'been' ની વચ્ચે આવે છે."
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
      "explanation": "આ વાક્ય નકારાત્મક પૂર્ણ ભૂતકાળમાં છે. પેસિવ વોઇસમાં 'had not been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પ્રશ્નાર્થ પૂર્ણ ભૂતકાળમાં છે. પેસિવ વોઇસમાં 'Had + object + been + V3' ની રચના વપરાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભૂતકાળમાં છે. પેસિવ વોઇસમાં 'had been launched' નો ઉપયોગ થાય છે."
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
      "explanation": "પૂર્ણ ભૂતકાળના વાક્યને પેસિવમાં ફેરવવા 'had been + V3' નો ઉપયોગ થાય છે. 'by someone' લખવું જરૂરી નથી."
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
      "explanation": "WH-પ્રશ્નાર્થ વાક્યમાં 'Why' યથાવત રહે છે. પૂર્ણ ભૂતકાળ હોવાથી 'had the house been sold' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભૂતકાળમાં છે. 'The tickets' બહુવચન હોવા છતાં 'had' જ વપરાય છે. રચના 'had been booked' છે."
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
      "explanation": "આ વાક્ય પ્રશ્નાર્થ પૂર્ણ ભૂતકાળમાં છે. પેસિવ વોઇસમાં 'Had + object + been + V3' ની રચના વપરાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'will have been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં 'will have been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "પૂર્ણ ભવિષ્યકાળના વાક્યને પેસિવમાં ફેરવવા 'will have been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભવિષ્યકાળમાં છે. 'shall have written' નું પેસિવ 'will have been written' થાય છે. સામાન્ય રીતે પેસિવમાં 'will' નો વધુ ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્યમાં 'left' ક્રિયાપદ અકર્મક (intransitive) છે કારણ કે તેની પાછળ કર્મ (object) નથી. તેથી, તેનું પેસિવ વોઇસ બની શકતું નથી."
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
      "explanation": "પૂર્ણ ભવિષ્યકાળના વાક્યને પેસિવમાં ફેરવવા 'will have been + V3' નો ઉપયોગ થાય છે. સમયસૂચક શબ્દસમૂહ 'By 2025' વાક્યની શરૂઆતમાં જ રહે છે."
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
      "explanation": "આ વાક્ય નકારાત્મક પૂર્ણ ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં 'will not have been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પ્રશ્નાર્થ પૂર્ણ ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં 'Will + object + have been + V3' ની રચના વપરાય છે."
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
      "explanation": "પૂર્ણ ભવિષ્યકાળના વાક્યને પેસિવમાં ફેરવવા 'will have been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભવિષ્યકાળમાં છે. પેસિવ વોઇસની રચના 'will have been + V3' છે."
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
      "explanation": "આ વાક્ય નૈતિક ફરજ કે સલાહ સૂચવે છે, તેથી પેસિવ વોઇસમાં 'Subject + should be + V3' ની રચનાનો ઉપયોગ થાય છે. 'Let the poor be helped' પણ સાચું છે, પણ 'should' વધુ યોગ્ય છે."
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
      "explanation": "આ આજ્ઞાર્થ વાક્ય (Imperative Sentence) છે જેમાં હુકમનો ભાવ છે. આવા વાક્યોને પેસિવમાં ફેરવવા 'Let + object + be + V3' ની રચના વપરાય છે."
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
      "explanation": "'Please' કે 'Kindly' થી શરૂ થતા વિનંતીસૂચક વાક્યોને પેસિવમાં ફેરવતી વખતે 'You are requested to' નો ઉપયોગ થાય છે અને બાકીનું વાક્ય યથાવત રહે છે."
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
      "explanation": "નકારાત્મક આજ્ઞાર્થ વાક્યને ઘણી રીતે પેસિવમાં ફેરવી શકાય છે. 'Let not' નો ઉપયોગ, 'should not' (સલાહ માટે) નો ઉપયોગ, અને 'You are forbidden/prohibited to' નો ઉપયોગ - આ ત્રણેય રીતો સાચી છે."
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
      "explanation": "'Let' થી શરૂ થતા અને પરવાનગી દર્શાવતા વાક્યોમાં, પેસિવ રચના 'Let + object + be + V3 + by + agent' નો ઉપયોગ થાય છે."
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
      "explanation": "આજ્ઞાર્થ વાક્યમાં ભાર કે હુકમ દર્શાવવા 'You are ordered to' નો ઉપયોગ થાય છે. સામાન્ય રીતે 'Let...' અથવા '...should be...' પણ સાચું છે."
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
      "explanation": "આ વાક્યમાં કર્મ (object) નથી અને તે સલાહનો ભાવ દર્શાવે છે. તેથી, પેસિવ વોઇસમાં 'You are advised to' નો ઉપયોગ કરવો સૌથી યોગ્ય છે."
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
      "explanation": "'Kindly' શબ્દ વિનંતી દર્શાવે છે, તેથી પેસિવ વોઇસ 'You are requested to' થી શરૂ થાય છે."
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
      "explanation": "'Let us' થી શરૂ થતા અને દરખાસ્ત (suggestion) સૂચવતા વાક્યો માટે, પેસિવ વોઇસમાં 'It is suggested that we should...' ની રચના વપરાય છે."
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
      "explanation": "આ વાક્ય ચેતવણીનો ભાવ દર્શાવે છે. તેથી 'You are warned...' નો ઉપયોગ કરી શકાય. 'Let not...' અને 'should not' પણ સાચી રચનાઓ છે."
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
      "explanation": "Modal auxiliary (can, could, may, might, should, must, etc.) વાળા વાક્યોને પેસિવમાં ફેરવતી વખતે 'Modal + be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "Modal auxiliary 'should' વાળા વાક્યમાં પેસિવ રચના 'should be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "Modal 'may' વાળા વાક્યમાં પેસિવ રચના 'may be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "Modal 'must' વાળા વાક્યમાં પેસિવ રચના 'must be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "Modal 'could' વાળા વાક્યમાં પેસિવ રચના 'could be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "Modal 'might' વાળા વાક્યમાં પેસિવ રચના 'might be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "Modal 'ought to' વાળા વાક્યમાં પેસિવ રચના 'ought to be + V3' નો ઉપયોગ થાય છે. 'by one' લખવું જરૂરી નથી."
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
      "explanation": "'have to' વાળી રચનામાં, પેસિવ વોઇસમાં 'has/have to be + V3' નો ઉપયોગ થાય છે. 'The assignment' એકવચન હોવાથી 'has to be' વપરાય છે."
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
      "explanation": "'is/am/are + to + V1' વાળી રચનામાં, પેસિવ વોઇસમાં 'is/am/are + to be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "'Modal + have + V3' વાળી રચનામાં, પેસિવ વોઇસમાં 'Modal + have been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. 'Who' થી શરૂ થતા પ્રશ્નાર્થ વાક્યને 'By whom' થી શરૂ કરી શકાય છે અથવા 'Who' થી શરૂ કરી 'by' ને અંતે મૂકી શકાય છે. 'you' સાથે 'were' આવે. તેથી બંને વિકલ્પો સાચા છે."
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
      "explanation": "'It is time to + V1 + object' વાળી રચનાનું પેસિવ 'It is time for + object + to be + V3' થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. ક્રિયાવિશેષણ 'loudly' ને 'cheered' ની પહેલાં મુકવામાં આવે છે. રચના: Object + was/were + adverb + V3 + by + Subject."
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
      "explanation": "'vex', 'annoy', 'surprise', 'displease' જેવા ક્રિયાપદો પછી પેસિવ વોઇસમાં 'by' ને બદલે 'at' નો ઉપયોગ થાય છે."
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
      "explanation": "'know' અને 'oblige' જેવા ક્રિયાપદો પછી પેસિવ વોઇસમાં 'by' ને બદલે 'to' પ્રેપોઝિશનનો ઉપયોગ થાય છે."
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
      "explanation": "'contain' અને 'interest' જેવા ક્રિયાપદો પછી પેસિવ વોઇસમાં 'by' ને બદલે 'in' પ્રેપોઝિશનનો ઉપયોગ થાય છે."
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
      "explanation": "જ્યારે કર્તા તરીકે 'one', 'someone', 'people' જેવા અનિશ્ચિત સર્વનામ હોય, ત્યારે પેસિવ વોઇસમાં 'by + agent' નો ઉલ્લેખ કરવામાં આવતો નથી."
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
      "explanation": "જ્યારે મુખ્ય વાક્યમાં 'expect', 'hope', 'think' જેવા ક્રિયાપદ હોય અને તે પછી infinitive (to + V1) હોય, ત્યારે પેસિવ વોઇસ 'It was/is + V3 + by + agent + that...' થી બને છે."
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
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય છે જે સાદા ભૂતકાળમાં છે. પેસિવમાં ફેરવતી વખતે 'Why + was/were + object + V3...?' રચના વપરાય છે. 'you' સાથે 'were' આવે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'is/am/are + being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "'surprise', 'astonish', 'vex', 'annoy' જેવા ક્રિયાપદો પછી પેસિવ વોઇસમાં 'by' ને બદલે 'at' પ્રેપોઝિશનનો ઉપયોગ થાય છે."
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
      "explanation": "'contain' અને 'interest' જેવા ક્રિયાપદો પછી પેસિવ વોઇસમાં 'by' ને બદલે 'in' પ્રેપોઝિશનનો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્યમાં પરવાનગીનો ભાવ છે. 'Let + object (me) + V1' વાળી રચનાનું પેસિવ 'Let + object (this) + be + V3 + by + agent (me)' થાય છે."
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
      "explanation": "'Who' વાળા પ્રશ્નાર્થ વાક્યને 'By whom' થી શરૂ કરાય છે. Modal (can) હોવાથી પેસિવ રચના 'By whom + modal + object + be + V3?' થાય છે."
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
      "explanation": "'has/have to + V1' વાળી રચનાનું પેસિવ 'has/have to be + V3' થાય છે. 'The work' એકવચન હોવાથી 'has to be' વપરાય છે."
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
      "explanation": "જ્યારે કર્તા તરીકે 'people' જેવા અનિશ્ચિત સર્વનામ હોય, ત્યારે પેસિવ વોઇસમાં 'by people' નો ઉલ્લેખ કરવામાં આવતો નથી. આ વાક્ય સાદા વર્તમાનકાળમાં છે."
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
      "explanation": "આજ્ઞાર્થ વાક્ય 'Do it' ને ભાવ અનુસાર જુદી જુદી રીતે પેસિવમાં ફેરવી શકાય છે. 'Let it be done' (હુકમ), 'It should be done' (સલાહ), અને 'You are ordered to do it' (આદેશ) ત્રણેય સાચા છે."
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
      "explanation": "'engulf' (ઘેરી લેવું) જેવા ક્રિયાપદ પછી પેસિવ વોઇસમાં 'by' ને બદલે 'in' નો ઉપયોગ વધુ યોગ્ય છે."
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
      "explanation": "'oblige' ક્રિયાપદ પછી પેસિવમાં 'to' આવે છે. 'me' નું 'I' થાય અને 'I' સાથે સામાન્ય રીતે 'shall' વપરાય છે. પેસિવ રચના: 'shall be obliged'."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'is/am/are + being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્યમાં બે કર્મ છે: 'us' (indirect) અને 'grammar' (direct). બંનેમાંથી કોઈ પણ કર્મને સબ્જેક્ટ બનાવીને પેસિવ વાક્ય બનાવી શકાય છે. તેથી બંને વિકલ્પો સાચા છે."
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
      "explanation": "'disgust', 'please', 'satisfy' જેવા ક્રિયાપદો પછી પેસિવ વોઇસમાં 'by' ને બદલે 'with' પ્રેપોઝિશનનો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. 'Who' થી શરૂ થતા પ્રશ્નાર્થ વાક્યને 'By whom' થી શરૂ કરાય છે અને 'was/were + object + V3' રચના વપરાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. 'me' કર્મનું 'I' થાય અને 'kept' (V2) નું 'was kept' થાય. 'awake' એ object complement છે, જે V3 પછી આવે છે."
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
      "explanation": "જ્યારે એક્ટિવ વોઇસમાં see, hear, make, feel જેવા ક્રિયાપદ પછી bare infinitive (V1) હોય, ત્યારે પેસિવ વોઇસમાં તે 'to + V1' માં ફેરવાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ વર્તમાનકાળમાં છે. 'him' કર્મનું 'He' થાય છે. 'made' પછી object complement 'the president' આવે છે. રચના 'has been made' છે."
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
      "explanation": "આ નકારાત્મક આજ્ઞાર્થ વાક્ય છે. તેને 'Let not...' થી અથવા 'You are ordered/forbidden not to...' થી પેસિવમાં ફેરવી શકાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું વાક્ય છે, તેને એક્ટિવમાં ફેરવવાનું છે. 'may be helped' નું એક્ટિવ 'may help' થાય છે. 'by a little mouse' સબ્જેક્ટ બને છે."
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
      "explanation": "જ્યારે 'What' પોતે જ કર્તા હોય, ત્યારે પેસિવ વોઇસ 'By what' થી શરૂ થાય છે. રચના: 'By what + is/am/are + object + V3?'."
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
      "explanation": "'please', 'satisfy', 'disgust' જેવા ક્રિયાપદો પછી પેસિવ વોઇસમાં 'by' ને બદલે 'with' પ્રેપોઝિશનનો ઉપયોગ થાય છે."
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
      "explanation": "'will have to + V1' વાળી રચનાનું પેસિવ 'will have to be + V3' થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'is/am/are + being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "'need to + V1' વાળી રચનાનું પેસિવ 'need to be + V3' થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. 'him' કર્મનું 'He' થાય છે. 'elected' પછી object complement 'captain' આવે છે. રચના 'was elected' છે."
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
      "explanation": "આ વાક્યમાં બે કર્મ છે: 'you' અને 'this ice cream'. બંનેને સબ્જેક્ટ બનાવીને પેસિવ વાક્ય બનાવી શકાય છે. 'Who' નું 'By whom' થાય. તેથી બંને વિકલ્પો સાચા છે."
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
      "explanation": "જ્યારે ક્રિયાપદ સાથે prepositional phrase (laugh at) હોય, ત્યારે પેસિવ વોઇસમાં તે preposition ક્રિયાપદની સાથે જ રહે છે. આ વાક્ય ચાલુ વર્તમાનકાળમાં છે."
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
      "explanation": "'satisfy', 'please', 'disgust' જેવા ક્રિયાપદો પછી પેસિવ વોઇસમાં 'by' ને બદલે 'with' પ્રેપોઝિશનનો ઉપયોગ થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું વાક્ય છે, તેને એક્ટિવમાં ફેરવવાનું છે. 'had not been decorated' (પૂર્ણ ભૂતકાળ પેસિવ) નું એક્ટિવ 'had not decorated' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું આજ્ઞાર્થ વાક્ય છે. 'Let + object + be + V3' નું એક્ટિવ 'V1 + object' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (ચાલુ વર્તમાનકાળ) વાક્ય છે. 'is being read' નું એક્ટિવ 'are reading' થાય છે. 'by us' નું 'We' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (સાદો ભૂતકાળ) વાક્ય છે. 'was written' નું એક્ટિવ 'wrote' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (ચાલુ વર્તમાનકાળ) વાક્ય છે. 'is being bought' નું એક્ટિવ 'is buying' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (પૂર્ણ ભૂતકાળ) વાક્ય છે. 'had been repaired' નું એક્ટિવ 'had repaired' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસના વાક્યમાં કર્તા (agent) 'by...' નથી, તેથી આપણે 'They' જેવો સામાન્ય કર્તા ધારી શકીએ છીએ. 'was made' નું એક્ટિવ 'made' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વોઇસમાં કર્તા નથી. આ એક સામાન્ય સત્ય કે સલાહ છે, તેથી એક્ટિવ વોઇસમાં 'One' જેવો સામાન્ય કર્તા વાપરવો સૌથી યોગ્ય છે."
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
      "explanation": "પેસિવ વોઇસમાં કર્તા (by...) નો ઉલ્લેખ નથી. તેથી, એક્ટિવ વોઇસમાં 'They', 'Someone', 'He' જેવો કોઈ પણ તાર્કિક કર્તા મૂકી શકાય છે."
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
      "explanation": "ચોરને પકડવાનું કામ સામાન્ય રીતે પોલીસ કરે છે, તેથી 'The police' એ સૌથી તાર્કિક અને યોગ્ય કર્તા છે. 'was caught' નું એક્ટિવ 'caught' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો પ્રશ્ન છે. 'By whom was... broken' (સાદો ભૂતકાળ) નું એક્ટિવ 'Who broke...?' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (સાદો વર્તમાનકાળ) વાક્ય છે. 'is played' નું એક્ટિવ 'play' થાય છે. 'by many people in India' કર્તા બને છે."
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
      "explanation": "આ પેસિવ વોઇસનું (ચાલુ ભૂતકાળ) વાક્ય છે. 'was being helped' નું એક્ટિવ 'was helping' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું વાક્ય છે. 'cannot be solved' (Modal Passive) નું એક્ટિવ 'cannot solve' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો (પૂર્ણ વર્તમાનકાળ) પ્રશ્ન છે. 'Has... been finished' નું એક્ટિવ 'Have... finished' થાય છે."
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
      "explanation": "'You are requested to...' વાળી પેસિવ રચનાનું એક્ટિવ વાક્ય 'Please' અથવા 'Kindly' થી શરૂ થતું વિનંતીસૂચક વાક્ય હોય છે."
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
      "explanation": "'It is known that...' વાળી રચનાને બે રીતે એક્ટિવમાં ફેરવી શકાય છે. 'People know that...' થી શરૂ કરી શકાય અથવા Object (he) ને સબ્જેક્ટ બનાવીને 'He is known to be...' લખી શકાય."
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
      "explanation": "આ પેસિવ વોઇસનું (ચાલુ વર્તમાનકાળ) વાક્ય છે. 'are being ploughed' નું એક્ટિવ 'are ploughing' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો (સાદો વર્તમાનકાળ) પ્રશ્ન છે. 'is wanted' નું એક્ટિવ 'do... want' થાય છે. પ્રશ્નાર્થ વાક્યમાં સહાયક ક્રિયાપદ 'do' આવે."
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
      "explanation": "આ પેસિવ વોઇસનું આજ્ઞાર્થ વાક્ય છે. 'Let + object + be + V3' નું એક્ટિવ વાક્ય 'V1 + object' થાય છે."
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
      "explanation": "આ પેસિવ વાક્ય છે. 'was shocked at' (સાદો ભૂતકાળ) નું એક્ટિવ 'shocked' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (પૂર્ણ વર્તમાનકાળ) વાક્ય છે. 'have been watered' નું એક્ટિવ 'has watered' થાય છે. ('gardener' એકવચન છે)."
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
      "explanation": "આ પેસિવ વોઇસમાં કર્તા (agent) નથી. તેથી એક્ટિવ વોઇસમાં 'They', 'A teacher', 'Someone' જેવા કોઈ પણ તાર્કિક કર્તા મૂકી શકાય છે."
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
      "explanation": "આ વાક્યમાં બે ક્લોઝ છે. બીજું ક્લોઝ 'nobody could solve it' ને પેસિવમાં ફેરવતા 'it could not be solved by anybody' થાય. 'by anybody' લખવું જરૂરી નથી. પ્રથમ ક્લોઝ યથાવત રહે છે."
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
      "explanation": "આ પેસિવ વાક્યમાં કર્તા નથી. 'was appointed' સાદા ભૂતકાળમાં છે. એક્ટિવમાં ફેરવતી વખતે, આપણે 'They' જેવો સામાન્ય કર્તા ધારી શકીએ છીએ. 'They made him captain' જેવી આ રચના છે."
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
      "explanation": "જ્યારે ક્રિયાપદ સાથે પ્રેપોઝિશન (listen to) હોય, ત્યારે પેસિવ વોઇસમાં તે પ્રેપોઝિશન ક્રિયાપદની સાથે જ રહે છે. Modal 'must' હોવાથી 'must be listened to' રચના વપરાય છે."
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
      "explanation": "આ વાક્યમાં 'and' થી જોડાયેલા બે ક્રિયાપદો છે. બંનેને પેસિવમાં ફેરવવાના છે. 'regarded' નું 'was regarded' અને 'called' નું 'was called' થાય છે. બીજા 'was' ને પુનરાવર્તિત કરવાની જરૂર નથી."
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
      "explanation": "આ પેસિવ વાક્ય છે. 'was obliged' સાદા ભૂતકાળમાં છે. અહીં 'by...' કર્તા નથી. આવા કિસ્સામાં, 'Circumstances' (સંજોગો) એ સૌથી યોગ્ય કર્તા છે."
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
      "explanation": "જ્યારે એક્ટિવ વોઇસમાં see, hear, feel જેવા ક્રિયાપદ પછી V-ing (present participle) હોય, ત્યારે પેસિવ વોઇસમાં તે યથાવત રહે છે. 'was seen leaving' રચના વપરાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (સાદો વર્તમાનકાળ) વાક્ય છે. 'is spent' નું એક્ટિવ 'spend' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો (સાદો ભૂતકાળ) પ્રશ્ન છે. 'was managed' નું એક્ટિવ 'did... manage' થાય છે."
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
      "explanation": "આ પેસિવ વાક્યમાં કર્તા નથી, તેથી 'They' જેવા સામાન્ય કર્તાનો ઉપયોગ કરીશું. 'was refused' સાદા ભૂતકાળમાં છે, જેનું એક્ટિવ 'refused' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (સાદો ભૂતકાળ) વાક્ય છે. 'was accepted' નું એક્ટિવ 'accepted' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (સાદો વર્તમાનકાળ) વાક્ય છે. 'is feared' નું એક્ટિવ 'fears' થાય છે."
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
      "explanation": "પેસિવ વાક્યમાં કર્તા નથી. તેથી, એક્ટિવ વોઇસમાં 'I', 'Someone', 'They' જેવા કોઈ પણ તાર્કિક કર્તાનો ઉપયોગ કરી શકાય છે. 'will be posted' નું એક્ટિવ 'will post' થાય છે."
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
      "explanation": "આ વાક્ય Quasi-Passive Voice નું છે. 'taste', 'smell', 'feel' જેવા ક્રિયાપદોની રચના 'Subject + verb + complement' હોય છે. તેનું પેસિવ 'Subject + is/are + complement + when + it is/they are + V3' થાય છે."
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
      "explanation": "આ પેસિવ વાક્યમાં કર્તાનો ઉલ્લેખ નથી. તેથી એક્ટિવ વોઇસમાં 'I', 'Someone', અથવા 'The cleaner' જેવા કોઈ પણ યોગ્ય કર્તાનો ઉપયોગ કરી શકાય છે. 'was cleaned' નું એક્ટિવ 'cleaned' (V2) થાય છે."
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
      "explanation": "'has been picked' (પૂર્ણ વર્તમાનકાળ પેસિવ) નું એક્ટિવ 'has picked' થાય છે. કર્તા અજ્ઞાત હોવાથી 'Someone' નો ઉપયોગ કરવો યોગ્ય છે."
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
      "explanation": "આ પેસિવ વોઇસનો પ્રશ્ન છે. 'should I be suspected' નું એક્ટિવ 'should you suspect me' થાય છે. પ્રશ્નાર્થ રચના 'Why + modal + subject + V1 + object?' છે."
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
      "explanation": "'has to be dug' નું એક્ટિવ 'have to dig' થાય છે. 'The labourers' બહુવચન હોવાથી 'have to' વપરાય છે."
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
      "explanation": "'It is hoped that...' વાળી પેસિવ રચનાના એક્ટિવ વાક્યમાં કર્તા તરીકે 'We', 'They', 'One' જેવા સામાન્ય કર્તાનો ઉપયોગ કરી શકાય છે."
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
      "explanation": "આ વાક્યમાં 'remember' પછી gerund ('taking') છે. 'my sister taking me' ભાગને પેસિવમાં ફેરવતા 'being taken by my sister' થાય છે. મુખ્ય ક્રિયાપદ 'remember' યથાવત રહે છે."
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
      "explanation": "'It is + adjective + to + V1' વાળી રચનાનું પેસિવ 'Subject + is + adjective + to be + V3' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (સાદો ભૂતકાળ) વાક્ય છે. 'were checked' નું એક્ટિવ 'checked' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વાક્યમાં કર્તા નથી. 'will be looked after' (સાદો ભવિષ્યકાળ) નું એક્ટિવ 'will look after' થાય છે. 'They' જેવો સામાન્ય કર્તા ઉમેરી શકાય."
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
      "explanation": "આ પેસિવ વોઇસનું આજ્ઞાર્થ વાક્ય છે. 'Let + object + be + V3' નું એક્ટિવ 'V1 + object' થાય છે."
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
      "explanation": "આ પેસિવ વાક્ય (સાદો ભૂતકાળ) માં કર્તા નથી. આપણે 'They' જેવો સામાન્ય કર્તા ધારી શકીએ છીએ. 'was considered' નું એક્ટિવ 'considered' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો (સાદો ભૂતકાળ) પ્રશ્ન છે. 'was... written' નું એક્ટિવ 'did... write' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (ચાલુ વર્તમાનકાળ) વાક્ય છે. 'is being taken' નું એક્ટિવ 'is taking' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (પૂર્ણ વર્તમાનકાળ) વાક્ય છે. 'have been left' નું એક્ટિવ 'has left' થાય છે. ('An unknown person' એકવચન છે)."
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
      "explanation": "આ પેસિવ વોઇસનું આજ્ઞાર્થ વાક્ય છે. 'Let + object + be + V3' નું એક્ટિવ 'V1 + object' થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ ભૂતકાળમાં છે. 'laugh at' એ prepositional verb છે, તેથી 'at' V3 પછી આવે છે. રચના: 'was being laughed at'."
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
      "explanation": "જ્યારે કર્તા 'They' કે 'People' હોય અને ક્રિયાપદ 'say', 'think', 'believe' હોય, ત્યારે બે રીતે પેસિવ બનાવી શકાય છે: 'It is said that...' થી અથવા બીજા ક્લોઝના કર્તા (he) ને મુખ્ય કર્તા બનાવીને 'He is said to be...'."
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
      "explanation": "આ વાક્ય પૂર્ણ વર્તમાનકાળમાં છે. 'me' કર્મનું 'I' થાય છે અને તેની સાથે 'have been advised' વપરાય છે. infinitive ('to take rest') યથાવત રહે છે."
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
      "explanation": "આ પેસિવ વોઇસનું (પૂર્ણ ભવિષ્યકાળ) વાક્ય છે. 'will have been completed' નું એક્ટિવ 'will have completed' થાય છે."
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
      "explanation": "'please' ક્રિયાપદ પછી પેસિવ વોઇસમાં 'with' પ્રેપોઝિશન આવે છે. 'very much' જેવા ક્રિયાવિશેષણને V3 ની પહેલાં મૂકી શકાય છે. વાક્ય સાદા ભૂતકાળમાં છે."
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
      "explanation": "આ વાક્ય Quasi-Passive Voice નું છે. 'feel' જેવા ક્રિયાપદની રચના 'Subject + verb + complement' હોય છે. તેનું પેસિવ 'Subject + is + complement + when + it is + V3' થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. 'sums' બહુવચન હોવાથી 'are being done' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ ભૂતકાળમાં છે. પેસિવ વોઇસમાં 'was/were + being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભૂતકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'had been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં 'will have been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "Modal auxiliary 'must' વાળા નકારાત્મક વાક્યમાં પેસિવ રચના 'must not be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું આજ્ઞાર્થ વાક્ય છે. 'Let + object + be + V3' નું એક્ટિવ 'V1 + object' થાય છે. 'sent for' એ phrasal verb છે."
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
      "explanation": "આ વાક્ય પૂર્ણ વર્તમાનકાળમાં છે. 'Our army' એકવચન ગણાય, તેથી પેસિવમાં 'has been defeated' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા વર્તમાનકાળનો પ્રશ્ન છે. 'Do...' થી શરૂ થતા વાક્યનું પેસિવ 'Are...' થી શરૂ થાય છે કારણકે ઓબ્જેક્ટ 'others' બહુવચન છે. રચના: Is/Am/Are + object + V3 + by + subject?"
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
      "explanation": "આ વાક્ય ચાલુ ભૂતકાળમાં છે. પેસિવ વોઇસમાં 'was being driven' નો ઉપયોગ થાય છે. ક્રિયાવિશેષણ 'very fast' વાક્યના અંતે આવે છે."
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
      "explanation": "'please' ક્રિયાપદ પછી પેસિવ વોઇસમાં 'with' વપરાય છે. વાક્ય સાદા વર્તમાનકાળમાં હોવાથી 'are pleased' આવે છે. 'very much' એ ક્રિયાવિશેષણ છે."
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
      "explanation": "'It is time to + V1 + object' વાળી રચનાનું પેસિવ 'It is time for + object + to be + V3' થાય છે."
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
      "explanation": "'Who' વાળા ચાલુ વર્તમાનકાળના પ્રશ્નાર્થ વાક્યનું પેસિવ 'By whom + is/am/are + object + being + V3?' થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં 'will be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ પેસિવ વાક્ય છે જેમાં કર્તા નથી. 'are taught' (સાદો વર્તમાનકાળ) નું એક્ટિવ 'teaches' (A teacher એકવચન) થાય છે. 'A teacher' એ તાર્કિક કર્તા છે."
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
      "explanation": "Modal 'Can' વાળા પ્રશ્નાર્થ વાક્યનું પેસિવ 'Can + object + be + V3...?' થાય છે."
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
      "explanation": "આ પેસિવ વાક્યમાં કર્તા નથી. 'has to be written' નું એક્ટિવ 'have to write' થાય છે. કર્તા તરીકે 'I', 'You', 'We' જેવા કોઈ પણ યોગ્ય સર્વનામનો ઉપયોગ કરી શકાય છે."
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
      "explanation": "આ વાક્ય સાદા ભવિષ્યકાળમાં છે. પેસિવ વોઇસમાં 'will be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ વર્તમાનકાળમાં છે. 'you' સાથે 'have been warned' આવે છે. રચના: have/has + been + V3."
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
      "explanation": "આ પ્રશ્નાર્થ પૂર્ણ વર્તમાનકાળનું વાક્ય છે. પેસિવ વોઇસમાં 'Has/Have + object + been + V3?' રચના વપરાય છે. 'by somebody' લખવું જરૂરી નથી."
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
      "explanation": "આ વાક્ય ચાલુ ભૂતકાળમાં છે. પેસિવ વોઇસમાં ફેરવતી વખતે 'was/were + being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'is being + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ વર્તમાનકાળમાં છે. 'me' કર્મનું 'I' થાય અને 'I' સાથે 'have been spotted' વપરાય."
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
      "explanation": "આ નકારાત્મક પૂર્ણ વર્તમાનકાળનું વાક્ય છે. પેસિવ વોઇસમાં 'has not been approved' નો ઉપયોગ થાય છે."
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
      "explanation": "'Who' વાળા પૂર્ણ ભૂતકાળના પ્રશ્નાર્થ વાક્યનું પેસિવ 'By whom + had + object + been + V3?' થાય છે. 'laugh at' માં 'at' સાથે જ રહે છે."
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
      "explanation": "Modal 'must' વાળા વાક્યમાં પેસિવ રચના 'must be + V3' નો ઉપયોગ થાય છે. 'look into' એ phrasal verb છે, તેથી 'into' સાથે જ રહે છે."
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
      "explanation": "આ પેસિવ વાક્યમાં કર્તા નથી. 'was listened to' (સાદો ભૂતકાળ) નું એક્ટિવ 'listened to' થાય છે. 'People' જેવો સામાન્ય કર્તા યોગ્ય છે."
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
      "explanation": "આ વાક્યમાં અવતરણ ચિહ્નમાં કહેવત (proverb) છે. કહેવતો અને સનાતન સત્યોના કાળમાં ફેરફાર થતો નથી, તેથી તેનું વોઇસ પણ બદલાતું નથી. ફક્ત 'that' સંયોજક ઉમેરાય છે."
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
      "explanation": "'Let' થી શરૂ થતા અને પરવાનગી દર્શાવતા વાક્યમાં, પેસિવ રચના 'Let + object + be + V3 + by + agent' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. 'The end of this exercise' એ આખું ઓબ્જેક્ટ છે. પેસિવ રચના 'is being reached' છે."
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
      "explanation": "સાદા ભૂતકાળના નકારાત્મક વાક્યનું પેસિવ છે. 'did not trust' નું 'was not trusted' થાય. 'not anybody' ને બદલે 'nobody' નો ઉપયોગ વાક્યને વધુ સ્વાભાવિક બનાવે છે."
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
      "explanation": "આ વાક્યમાં 'ordered' પછી object + to-infinitive છે. તેનું પેસિવ 'ordered that + object + should be + V3' જેવી રચનાથી બને છે, જે વધુ સ્પષ્ટ છે."
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
      "explanation": "'Who' વાળા પૂર્ણ ભવિષ્યકાળના પ્રશ્નનું પેસિવ 'By whom + will + object + have been + V3?' થાય છે."
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
      "explanation": "આ વાક્યમાં બે કર્મ છે: 'meat' (direct) અને 'vegetarians' (indirect). બંનેને સબ્જેક્ટ બનાવીને પેસિવ વાક્ય બનાવી શકાય છે. તેથી બંને વિકલ્પો સાચા છે."
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
      "explanation": "આ વાક્યમાં પણ બે કર્મ છે ('him' અને 'a scholarship'). બંનેને સબ્જેક્ટ બનાવીને પૂર્ણ વર્તમાનકાળનું પેસિવ વાક્ય બનાવી શકાય છે."
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
      "explanation": "'be going to + V1' વાળી રચનાનું પેસિવ 'be going to be + V3' થાય છે. તે ભવિષ્યનો ઈરાદો દર્શાવે છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. 'found' નું 'was found' થાય છે. 'broken' એ અહીં object complement તરીકે કામ કરે છે, જે V3 પછી આવે છે."
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
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય ચાલુ વર્તમાનકાળમાં છે. પેસિવમાં 'Why + is/am/are + object + being + V3...?' રચના વપરાય છે. 'a noise' એકવચન હોવાથી 'is' આવે."
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
      "explanation": "આ પેસિવ વોઇસનું (ચાલુ વર્તમાનકાળ) વાક્ય છે. 'is being teased' નું એક્ટિવ 'is teasing' થાય છે."
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
      "explanation": "આ વાક્યમાં બે કર્મ છે ('him' અને 'a reward'). બંનેમાંથી કોઈ પણ કર્મને સબ્જેક્ટ બનાવીને સાદા ભૂતકાળનું પેસિવ વાક્ય બનાવી શકાય છે."
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
      "explanation": "આ પેસિવ વાક્ય છે. 'will be surprised at' નું એક્ટિવ 'will surprise' થાય છે. 'at' પ્રેપોઝિશન નીકળી જાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું આજ્ઞાર્થ વાક્ય છે. 'Let + object + be + V3' નું એક્ટિવ 'V1 + object' થાય છે."
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
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય ચાલુ ભૂતકાળમાં છે. પેસિવમાં 'Where + was/were + object + being + V3...?' રચના વપરાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે ('yesterday'). પેસિવ વોઇસમાં 'was baked' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય પૂર્ણ વર્તમાનકાળમાં છે. 'All the details of the invention' એ ઓબ્જેક્ટ છે અને તે બહુવચન છે, તેથી 'have been published' વપરાય છે."
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
      "explanation": "'Modal + have + V3' વાળી રચનામાં, પેસિવ વોઇસમાં 'Modal + have been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્યમાં મુખ્ય ક્લોઝ 'Somebody told me' ને પેસિવમાં 'I was told' માં ફેરવાય છે. 'by somebody' લખવું વૈકલ્પિક છે. બીજું ક્લોઝ ('that...') યથાવત રહે છે. તેથી B અને C બંને સાચા છે, પણ C વધુ સામાન્ય છે."
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
      "explanation": "આ પેસિવ વાક્ય છે. 'shall be obliged' નું એક્ટિવ 'will oblige' થાય છે. અહીં કર્તાનો ઉલ્લેખ નથી, તેથી 'Circumstances' (સંજોગો) એ સૌથી યોગ્ય કર્તા છે."
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
      "explanation": "આ પેસિવ વોઇસનું (પૂર્ણ વર્તમાનકાળ) વાક્ય છે. 'has been arrested' નું એક્ટિવ 'have arrested' થાય છે કારણ કે 'The police' બહુવચન ગણાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (સાદો વર્તમાનકાળ) વાક્ય છે. 'am trusted' નું એક્ટિવ 'trusts' થાય છે કારણ કે કર્તા 'He' ત્રીજો પુરુષ એકવચન છે."
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
      "explanation": "આ પેસિવ વાક્ય છે. 'will have to be done' નું એક્ટિવ 'will have to do' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (ચાલુ ભૂતકાળ) નકારાત્મક વાક્ય છે. 'were not being painted' નું એક્ટિવ 'were not painting' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો પ્રશ્ન છે. 'could be done' નું એક્ટિવ 'could do' થાય છે. પ્રશ્નાર્થ રચના 'What + modal + subject + V1?' છે."
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
      "explanation": "આ વાક્ય Quasi-Passive Voice નું છે. 'taste' જેવા ક્રિયાપદની રચનાનું પેસિવ 'Subject + is + complement + when + it is + V3' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું નકારાત્મક આજ્ઞાર્થ વાક્ય છે. 'Let + object + not be + V3' નું એક્ટિવ 'Do not + V1 + object' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો (પૂર્ણ ભૂતકાળ) પ્રશ્ન છે. 'Had... been finished' નું એક્ટિવ 'Had... finished' થાય છે."
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
      "explanation": "આ પેસિવ વાક્ય છે. 'was seen to enter' નું એક્ટિવ 'saw... enter' (bare infinitive) થાય છે કારણ કે એક્ટિવમાં 'see' પછી to-infinitive વપરાતું નથી."
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
      "explanation": "જ્યારે કર્તા 'People' કે 'They' હોય અને ક્રિયાપદ 'claim', 'say', 'think' હોય, ત્યારે બે રીતે પેસિવ બનાવી શકાય છે: 'It is claimed that...' થી અથવા બીજા ક્લોઝના કર્તા (the earth) ને મુખ્ય કર્તા બનાવીને 'The earth is claimed to be...'."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. 'The patients' બહુવચન હોવાથી પેસિવ વોઇસમાં 'are being examined' નો ઉપયોગ થાય છે."
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
      "explanation": "'Whom' થી શરૂ થતા પ્રશ્નનું પેસિવ 'Who' થી શરૂ થાય છે. આ વાક્ય સાદા ભૂતકાળમાં છે, તેથી 'Who + was/were + V3...?' રચના વપરાય છે."
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
      "explanation": "'have to + V1' વાળી રચનાનું પેસિવ 'has/have to be + V3' થાય છે. 'A subject' એકવચન હોવાથી 'has to be chosen' આવે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. ઓબ્જેક્ટ 'Our sleep' છે. પેસિવ વોઇસમાં 'was disturbed' નો ઉપયોગ થાય છે."
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
      "explanation": "'surprise' ક્રિયાપદ પછી પેસિવમાં 'at' પ્રેપોઝિશન આવે છે. 'a great deal' એ ક્રિયાવિશેષણ છે જે V3 પછી આવે છે. વાક્ય સાદા ભૂતકાળમાં છે."
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
      "explanation": "આ પ્રશ્નાર્થ પૂર્ણ વર્તમાનકાળનું વાક્ય છે. ઓબ્જેક્ટ 'you' ને સબ્જેક્ટ બનાવતા 'Have you...' થી વાક્ય શરૂ થાય છે. રચના: 'Have + object + ever + been + V3?'"
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
      "explanation": "આ વાક્યમાં બીજું ક્લોઝ 'someone speaks to you' (સાદો વર્તમાનકાળ) છે, જેનું પેસિવ 'you are spoken to' થાય છે. પ્રથમ ક્લોઝ યથાવત રહે છે."
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
      "explanation": "આ સાદા ભૂતકાળનો પ્રશ્ન છે. 'Did...' થી શરૂ થતા વાક્યનું પેસિવ 'Were...' થી શરૂ થાય છે કારણકે ઓબ્જેક્ટ 'you' છે. રચના: Was/Were + object + V3 + by + subject?"
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
      "explanation": "આ વાક્યમાં બે ક્લોઝ છે. 'what we cannot cure' માં 'what' એ ઓબ્જેક્ટ છે. પેસિવમાં તે સબ્જેક્ટ બને છે: 'what cannot be cured'. મુખ્ય ક્લોઝ 'We must endure (it)' નું પેસિવ 'it must be endured' થાય છે. બંનેને જોડીને સાચો જવાબ બને છે."
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
      "explanation": "આ પ્રકારના વાક્યમાં, બીજા ક્લોઝના કર્તા 'he' ને મુખ્ય કર્તા બનાવી શકાય છે. 'is certain' યથાવત રહે છે અને 'that he has committed' નું 'to have committed' (perfect infinitive) થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. પેસિવ વોઇસમાં 'was celebrated' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય ચાલુ ભૂતકાળમાં છે. પેસિવ વોઇસમાં 'was being dug' નો ઉપયોગ થાય છે. 'in the ground' એ સ્થળસૂચક શબ્દસમૂહ છે જે અંતે આવે છે."
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
      "explanation": "'Who' વાળા પ્રશ્નાર્થ વાક્યને 'By whom' થી શરૂ કરાય છે. Modal (can) હોવાથી પેસિવ રચના 'By whom + modal + object + be + V3?' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો (સાદો ભૂતકાળ) પ્રશ્ન છે. 'Was... answered' નું એક્ટિવ 'Did... answer' થાય છે. કર્તા અજ્ઞાત હોવાથી 'someone' નો ઉપયોગ કરી શકાય."
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
      "explanation": "'fill' ક્રિયાપદ પછી પેસિવ વોઇસમાં 'by' ને બદલે 'with' પ્રેપોઝિશનનો ઉપયોગ થાય છે. વાક્ય સાદા ભૂતકાળમાં છે."
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
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય સાદા ભૂતકાળમાં છે. 'agree to' એ phrasal verb છે, તેથી 'to' સાથે જ રહે છે. રચના: 'Why + was/were + object + not + V3...?'"
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
      "explanation": "પૂર્ણ ચાલુ કાળ (Perfect Continuous Tenses) - એટલે કે, પૂર્ણ ચાલુ વર્તમાનકાળ, પૂર્ણ ચાલુ ભૂતકાળ, અને પૂર્ણ ચાલુ ભવિષ્યકાળના વાક્યોનું પેસિવ વોઇસ સામાન્ય રીતે બનાવવામાં આવતું નથી કારણ કે 'been' અને 'being' નો સાથે ઉપયોગ વ્યાકરણની દૃષ્ટિએ અયોગ્ય ગણાય છે."
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
      "explanation": "'is/am/are + to + V1' વાળી રચનામાં, પેસિવ વોઇસમાં 'is/am/are + to be + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ વાક્ય સાદા ભૂતકાળમાં છે. 'kept' નું 'were kept' થાય છે. 'waiting' એ અહીં object complement તરીકે કામ કરે છે, જે V3 પછી આવે છે."
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
      "explanation": "આ વાક્યમાં બે કર્મ છે ('her' અને 'a bulldog'). બંનેને સબ્જેક્ટ બનાવીને સાદા ભૂતકાળનું પેસિવ વાક્ય બનાવી શકાય છે. 'by someone' લખવું જરૂરી નથી."
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
      "explanation": "'laugh at' એ phrasal verb છે, તેથી પેસિવમાં 'at' સાથે જ રહે છે. 'should' વાળા વાક્યમાં 'should not be laughed at' રચના વપરાય છે."
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
      "explanation": "આ પેસિવ વાક્ય છે. 'was disappointed with' (સાદો ભૂતકાળ) નું એક્ટિવ 'disappointed' (V2) થાય છે. 'disappoint' પછી 'with' પ્રેપોઝિશન નીકળી જાય છે."
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
      "explanation": "આ પ્રશ્નાર્થ પૂર્ણ ભૂતકાળનું વાક્ય છે. પેસિવ વોઇસમાં 'Had + object + been + V3' ની રચના વપરાય છે."
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
      "explanation": "'It is your duty to...' જેવી રચના ફરજનો ભાવ દર્શાવે છે. તેનું પેસિવ 'You are supposed to...' થી બનાવી શકાય છે, જે અપેક્ષા કે જવાબદારી સૂચવે છે."
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
      "explanation": "આ વાક્યમાં બે કર્મ છે ('him' અને 'a reward'). બંનેને સબ્જેક્ટ બનાવીને સાદા ભૂતકાળનું પેસિવ વાક્ય બનાવી શકાય છે."
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
      "explanation": "આ સાદા ભવિષ્યકાળનું વાક્ય છે. 'look after' એ phrasal verb છે, તેથી 'after' સાથે જ રહે છે. પેસિવ રચના 'will be looked after' છે."
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
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય સાદા ભૂતકાળમાં છે. 'What' અહીં ઓબ્જેક્ટ છે અને પેસિવમાં તે સબ્જેક્ટ તરીકે કાર્ય કરે છે. તેથી તેની સાથે એકવચન 'was' વપરાય છે. રચના: 'What + was/were + V3...?'"
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'is being prepared' નો ઉપયોગ થાય છે."
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
      "explanation": "'Modal + have + V3' વાળી રચનામાં, પેસિવ વોઇસમાં 'Modal + have been + V3' નો ઉપયોગ થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (પૂર્ણ ભૂતકાળ) વાક્ય છે. 'had been completed' નું એક્ટિવ 'had completed' થાય છે. કર્તા 'by us' ગર્ભિત છે."
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
      "explanation": "આ પેસિવ વાક્યમાં કર્તા નથી. 'was punished' (સાદો ભૂતકાળ) નું એક્ટિવ 'punished' (V2) થાય છે. 'The teacher' એક યોગ્ય, તાર્કિક કર્તા છે."
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
      "explanation": "'He is said to be...' વાળી પેસિવ રચનાનું એક્ટિવ 'People say that...' થાય છે. 'is said' (સાદો વર્તમાનકાળ) નું એક્ટિવ 'say' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું નકારાત્મક આજ્ઞાર્થ વાક્ય છે. 'Let + object + not be + V3' નું એક્ટિવ 'Do not + V1 + object' થાય છે. 'Don't' એ 'Do not' નું ટૂંકું રૂપ છે."
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
      "explanation": "આ પેસિવ વાક્ય છે. 'was shocked by' (સાદો ભૂતકાળ) નું એક્ટિવ 'shocked' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું નકારાત્મક આજ્ઞાર્થ વાક્ય છે. 'Let not + object + be + V3' નું એક્ટિવ 'Do not + V1 + object' થાય છે. 'Don't' એ 'Do not' નું ટૂંકું રૂપ છે."
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
      "explanation": "આ પેસિવ વાક્યમાં કર્તા નથી. 'has to be washed' નું એક્ટિવ 'have/has to wash' થાય છે. કર્તા તરીકે 'I', 'Someone', 'You' જેવા કોઈ પણ યોગ્ય સર્વનામનો ઉપયોગ કરી શકાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો (ચાલુ વર્તમાનકાળ) પ્રશ્ન છે. 'is being eaten' નું એક્ટિવ 'are eating' થાય છે ('you' સાથે 'are' આવે)."
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
      "explanation": "આ પેસિવ વોઇસનું (સાદો ભૂતકાળ) વાક્ય છે. 'were watered' નું એક્ટિવ 'watered' (V2) થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (સાદો ભવિષ્યકાળ) વાક્ય છે. 'will be forgiven' નું એક્ટિવ 'will forgive' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (પૂર્ણ ભવિષ્યકાળ) વાક્ય છે. 'will have been declared' નું એક્ટિવ 'will have declared' થાય છે."
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
      "explanation": "આ પેસિવ વાક્યમાં કર્તા નથી. 'are to be painted' નું એક્ટિવ 'are to paint' થાય છે. કર્તા તરીકે 'Someone' કે 'They' જેવા સામાન્ય સર્વનામનો ઉપયોગ કરી શકાય છે."
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
      "explanation": "આ વાક્ય ચાલુ વર્તમાનકાળમાં છે. પેસિવ વોઇસમાં 'is being built' નો ઉપયોગ થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (પૂર્ણ ભૂતકાળ) નકારાત્મક વાક્ય છે. 'had not been done' નું એક્ટિવ 'had not done' થાય છે."
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
      "explanation": "આ સાદા ભૂતકાળનો પ્રશ્ન છે. 'Who' થી શરૂ થતા પ્રશ્નનું પેસિવ 'By whom' થી શરૂ થાય છે અને 'was/were + object + V3' રચના વપરાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું (ચાલુ વર્તમાનકાળ) વાક્ય છે. 'is being helped' નું એક્ટિવ 'is helping' થાય છે."
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
      "explanation": "આ વાક્ય Quasi-Passive Voice નું છે. 'taste' જેવા ક્રિયાપદની રચનાનું પેસિવ 'Subject + is + complement + when + it is + V3' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનું આજ્ઞાર્થ વાક્ય છે. 'Let + object + be + V3' નું એક્ટિવ 'V1 + object' થાય છે."
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
      "explanation": "આ પેસિવ વોઇસનો (સાદો ભૂતકાળ) પ્રશ્ન છે. 'Was... bought' નું એક્ટિવ 'Did... buy' થાય છે."
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
      "explanation": "પેસિવ રચના 'are not to be trusted' એ નકારાત્મક સલાહ કે આદેશ સૂચવે છે. તેના એક્ટિવ સ્વરૂપ તરીકે 'should not', 'must not', અથવા 'Do not' વાળી આજ્ઞાર્થ રચના પણ યોગ્ય છે."
    }
  ]
};
