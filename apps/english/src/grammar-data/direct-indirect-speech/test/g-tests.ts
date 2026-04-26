import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "He said, 'I am happy.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he was happy.",
        "He said that I was happy.",
        "He says that he is happy.",
        "He said that he is happy."
      ],
      "answer": "He said that he was happy.",
      "explanation": "આ વિધાન વાક્ય છે અને Reporting Verb ભૂતકાળમાં ('said') છે, તેથી Reported Speech નો કાળ (am) ભૂતકાળ (was) માં ફેરવાશે. સર્વનામ 'I' બોલનાર (He) મુજબ 'he' માં ફેરવાશે."
    },
    {
      "question": "She says, 'I will come.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She says that she will come.",
        "She said that she would come.",
        "She says that she would come.",
        "She says I will come."
      ],
      "answer": "She says that she will come.",
      "explanation": "અહીં Reporting Verb 'says' વર્તમાનકાળમાં છે, તેથી Reported Speech ના કાળમાં કોઈ ફેરફાર થશે નહીં. ફક્ત સર્વનામ 'I' બોલનાર (She) મુજબ 'she' માં બદલાશે."
    },
    {
      "question": "They said, 'We play cricket.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "They said that they played cricket.",
        "They said that we play cricket.",
        "They said that they play cricket.",
        "They told that they played cricket."
      ],
      "answer": "They said that they played cricket.",
      "explanation": "Reporting Verb 'said' ભૂતકાળમાં હોવાથી, સાદો વર્તમાનકાળ ('play') સાદા ભૂતકાળ ('played') માં ફેરવાશે. સર્વનામ 'We' બોલનાર (They) મુજબ 'they' માં બદલાશે."
    },
    {
      "question": "Ram said to Sita, 'You are my friend.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "Ram told Sita that she was his friend.",
        "Ram said to Sita that you were my friend.",
        "Ram told Sita that you are his friend.",
        "Ram asked Sita that she was his friend."
      ],
      "answer": "Ram told Sita that she was his friend.",
      "explanation": "'said to' નું 'told' થશે. Reporting Verb ભૂતકાળમાં હોવાથી 'are' નું 'was' થશે. સર્વનામ 'You' સાંભળનાર (Sita) મુજબ 'she' માં અને 'my' બોલનાર (Ram) મુજબ 'his' માં બદલાશે."
    },
    {
      "question": "The teacher said, 'The Earth is round.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher said that the Earth is round.",
        "The teacher said that the Earth was round.",
        "The teacher told that the Earth is round.",
        "The teacher said that the Earth had been round."
      ],
      "answer": "The teacher said that the Earth is round.",
      "explanation": "આ વાક્ય સનાતન સત્ય (Universal Truth) દર્શાવે છે, તેથી Reporting Verb ભૂતકાળમાં હોવા છતાં Reported Speech ના કાળમાં કોઈ ફેરફાર થશે નહીં."
    },
    {
      "question": "He said, 'I have finished my work.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had finished his work.",
        "He said that I have finished my work.",
        "He said that he has finished his work.",
        "He said that he finished his work."
      ],
      "answer": "He said that he had finished his work.",
      "explanation": "Reporting Verb ભૂતકાળમાં છે, તેથી પૂર્ણ વર્તમાનકાળ ('have finished') પૂર્ણ ભૂતકાળ ('had finished') માં ફેરવાશે. 'I' નું 'he' અને 'my' નું 'his' થશે."
    },
    {
      "question": "My father said, 'Honesty is the best policy.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "My father said that honesty is the best policy.",
        "My father said that honesty was the best policy.",
        "My father told that honesty is the best policy.",
        "My father advises that honesty is the best policy."
      ],
      "answer": "My father said that honesty is the best policy.",
      "explanation": "આ વાક્ય એક કહેવત (Proverb) છે. સનાતન સત્ય, કહેવતો કે વૈજ્ઞાનિક નિયમોના કાળમાં ફેરફાર થતો નથી, ભલે Reporting Verb ભૂતકાળમાં હોય."
    },
    {
      "question": "She said, 'I am not feeling well.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she was not feeling well.",
        "She said that she is not feeling well.",
        "She said that I was not feeling well.",
        "She told that she was not feeling well."
      ],
      "answer": "She said that she was not feeling well.",
      "explanation": "Reporting Verb 'said' ભૂતકાળમાં હોવાથી, ચાલુ વર્તમાનકાળ ('am not feeling') ચાલુ ભૂતકાળ ('was not feeling') માં બદલાશે. 'I' નું 'she' થશે."
    },
    {
      "question": "Ravi said, 'I will go to the market.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "Ravi said that he would go to the market.",
        "Ravi said that he will go to the market.",
        "Ravi said that I would go to the market.",
        "Ravi said he will go to the market."
      ],
      "answer": "Ravi said that he would go to the market.",
      "explanation": "Reporting Verb ભૂતકાળમાં હોવાથી 'will' નું 'would' થશે. સર્વનામ 'I' બોલનાર (Ravi) મુજબ 'he' માં બદલાશે."
    },
    {
      "question": "The boy said, 'My mother is cooking.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that his mother was cooking.",
        "The boy said that my mother was cooking.",
        "The boy said that his mother is cooking.",
        "The boy said that her mother was cooking."
      ],
      "answer": "The boy said that his mother was cooking.",
      "explanation": "Reporting Verb 'said' ભૂતકાળમાં છે, તેથી 'is cooking' નું 'was cooking' થશે. 'My' સર્વનામ બોલનાર (The boy) મુજબ 'his' માં ફેરવાશે."
    }
  ],
  "test-2": [
    {
      "question": "I said to him, 'You are a good player.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I told him that he was a good player.",
        "I said him that he was a good player.",
        "I told him that you are a good player.",
        "I told him that I was a good player."
      ],
      "answer": "I told him that he was a good player.",
      "explanation": "'said to' નું 'told' થાય. Reporting Verb ભૂતકાળમાં છે, તેથી 'are' નું 'was' થશે. 'You' સર્વનામ સાંભળનાર (him) મુજબ 'he' માં બદલાશે."
    },
    {
      "question": "She said, 'I can sing a song.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she could sing a song.",
        "She said that she can sing a song.",
        "She said that I could sing a song.",
        "She said she will sing a song."
      ],
      "answer": "She said that she could sing a song.",
      "explanation": "Reporting Verb ભૂતકાળમાં હોવાથી, સહાયકારક ક્રિયાપદ 'can' નું ભૂતકાળનું રૂપ 'could' વપરાશે. 'I' નું 'she' થશે."
    },
    {
      "question": "He said, 'I wrote a letter.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had written a letter.",
        "He said that he wrote a letter.",
        "He said that he has written a letter.",
        "He said that I had written a letter."
      ],
      "answer": "He said that he had written a letter.",
      "explanation": "જ્યારે Reported Speech સાદા ભૂતકાળમાં ('wrote') હોય અને Reporting Verb પણ ભૂતકાળમાં હોય, ત્યારે Reported Speech પૂર્ણ ભૂતકાળ ('had written') માં ફેરવાય છે."
    },
    {
      "question": "They said to us, 'We are going to the party.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "They told us that they were going to the party.",
        "They said us that they were going to the party.",
        "They told us that we were going to the party.",
        "They told us that they are going to the party."
      ],
      "answer": "They told us that they were going to the party.",
      "explanation": "'said to' નું 'told' થાય. 'are going' (ચાલુ વર્તમાનકાળ) નું 'were going' (ચાલુ ભૂતકાળ) થશે. 'We' સર્વનામ બોલનાર (They) મુજબ 'they' માં બદલાશે."
    },
    {
      "question": "The girl said, 'I love my parents.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The girl said that she loved her parents.",
        "The girl said that she loves her parents.",
        "The girl said that I loved my parents.",
        "The girl told that she loved her parents."
      ],
      "answer": "The girl said that she loved her parents.",
      "explanation": "Reporting Verb ભૂતકાળમાં હોવાથી સાદો વર્તમાનકાળ ('love') સાદા ભૂતકાળ ('loved') માં ફેરવાશે. 'I' નું 'she' અને 'my' નું 'her' થશે."
    },
    {
      "question": "He says, 'I am reading a book.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He says that he is reading a book.",
        "He says that he was reading a book.",
        "He said that he was reading a book.",
        "He says that I am reading a book."
      ],
      "answer": "He says that he is reading a book.",
      "explanation": "Reporting Verb 'says' વર્તમાનકાળમાં છે, તેથી Reported Speech ના કાળમાં કોઈ ફેરફાર થશે નહીં. ફક્ત 'I' નું 'he' માં રૂપાંતર થશે."
    },
    {
      "question": "She said, 'My brother is a doctor.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that her brother was a doctor.",
        "She said that my brother was a doctor.",
        "She said that her brother is a doctor.",
        "She told that her brother was a doctor."
      ],
      "answer": "She said that her brother was a doctor.",
      "explanation": "Reporting Verb ભૂતકાળમાં હોવાથી 'is' નું 'was' થશે. 'My' સર્વનામ બોલનાર (She) મુજબ 'her' માં ફેરવાશે."
    },
    {
      "question": "Tom said, 'I may buy a car.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "Tom said that he might buy a car.",
        "Tom said that he may buy a car.",
        "Tom said that I might buy a car.",
        "Tom said that he will buy a car."
      ],
      "answer": "Tom said that he might buy a car.",
      "explanation": "Reporting Verb ભૂતકાળમાં હોવાથી, સહાયકારક ક્રિયાપદ 'may' નું ભૂતકાળનું રૂપ 'might' વપરાશે. 'I' નું 'he' થશે."
    },
    {
      "question": "The students said, 'We want to play.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The students said that they wanted to play.",
        "The students said that we wanted to play.",
        "The students said that they want to play.",
        "The students told that they wanted to play."
      ],
      "answer": "The students said that they wanted to play.",
      "explanation": "Reporting Verb ભૂતકાળમાં છે, તેથી 'want' (સાદો વર્તમાનકાળ) નું 'wanted' (સાદો ભૂતકાળ) થશે. 'We' સર્વનામ બોલનાર (The students) મુજબ 'they' માં ફેરવાશે."
    },
    {
      "question": "I said to her, 'I know you.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I told her that I knew her.",
        "I told her that I know you.",
        "I told her that you knew me.",
        "I said her that I knew her."
      ],
      "answer": "I told her that I knew her.",
      "explanation": "'said to' નું 'told' થાય. 'know' નું 'knew' થશે. સર્વનામ 'you' સાંભળનાર (her) મુજબ 'her' માં બદલાશે. 'I' એ બોલનાર છે, તેથી તે 'I' જ રહેશે."
    }
  ],
  "test-3": [
    {
      "question": "The captain said, 'The team played well.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The captain said that the team had played well.",
        "The captain said that the team played well.",
        "The captain said that the team has played well.",
        "The captain told that the team had played well."
      ],
      "answer": "The captain said that the team had played well.",
      "explanation": "જ્યારે Reported Speech સાદા ભૂતકાળમાં ('played') હોય અને Reporting Verb પણ ભૂતકાળમાં હોય, ત્યારે Reported Speech પૂર્ણ ભૂતકાળ ('had played') માં ફેરવાય છે."
    },
    {
      "question": "She said, 'I was writing a letter.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she had been writing a letter.",
        "She said that she was writing a letter.",
        "She said that she wrote a letter.",
        "She said that she has been writing a letter."
      ],
      "answer": "She said that she had been writing a letter.",
      "explanation": "Reporting Verb ભૂતકાળમાં છે અને Reported Speech ચાલુ ભૂતકાળમાં ('was writing') છે, તેથી તે ચાલુ પૂર્ણ ભૂતકાળ ('had been writing') માં ફેરવાશે."
    },
    {
      "question": "He will say, 'I am busy.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He will say that he is busy.",
        "He will say that he was busy.",
        "He would say that he was busy.",
        "He will say that I am busy."
      ],
      "answer": "He will say that he is busy.",
      "explanation": "અહીં Reporting Verb 'will say' ભવિષ્યકાળમાં છે. જ્યારે Reporting Verb વર્તમાનકાળ કે ભવિષ્યકાળમાં હોય, ત્યારે Reported Speech ના કાળમાં ફેરફાર થતો નથી."
    },
    {
      "question": "Sita said to me, 'I have seen this movie.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "Sita told me that she had seen that movie.",
        "Sita told me that she has seen this movie.",
        "Sita told me that she had seen this movie.",
        "Sita told me that I had seen that movie."
      ],
      "answer": "Sita told me that she had seen that movie.",
      "explanation": "પૂર્ણ વર્તમાનકાળ ('have seen') પૂર્ણ ભૂતકાળ ('had seen') માં ફેરવાશે. 'this' નું 'that' થશે. 'I' નું 'she' થશે."
    },
    {
      "question": "He said, 'I must go now.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had to go then.",
        "He said that he must go now.",
        "He said that he had to go now.",
        "He said that he must go then."
      ],
      "answer": "He said that he had to go then.",
      "explanation": "સામાન્ય રીતે 'must' ને 'had to' માં ફેરવવામાં આવે છે જ્યારે તે ફરજ દર્શાવે. સમયસૂચક શબ્દ 'now' નું 'then' થાય છે."
    },
    {
      "question": "My friend said, 'I am buying a new phone today.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "My friend said that he was buying a new phone that day.",
        "My friend said that he is buying a new phone today.",
        "My friend said that he was buying a new phone today.",
        "My friend said that I was buying a new phone that day."
      ],
      "answer": "My friend said that he was buying a new phone that day.",
      "explanation": "'am buying' નું 'was buying' થશે. 'I' નું 'he' થશે અને સમયસૂચક શબ્દ 'today' નું 'that day' થશે."
    },
    {
      "question": "She said to her mother, 'I will not repeat this mistake.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She told her mother that she would not repeat that mistake.",
        "She told her mother that she will not repeat this mistake.",
        "She told her mother that she would not repeat this mistake.",
        "She told her mother that I would not repeat that mistake."
      ],
      "answer": "She told her mother that she would not repeat that mistake.",
      "explanation": "'said to' નું 'told' થાય. 'will not' નું 'would not' થાય. 'I' નું 'she' અને 'this' નું 'that' થાય."
    },
    {
      "question": "The old man said, 'I can't walk fast.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The old man said that he couldn't walk fast.",
        "The old man said that he can't walk fast.",
        "The old man said that I couldn't walk fast.",
        "The old man said he can not walk fast."
      ],
      "answer": "The old man said that he couldn't walk fast.",
      "explanation": "Reporting Verb ભૂતકાળમાં હોવાથી 'can't' (can not) નું 'couldn't' (could not) થશે. 'I' નું 'he' થશે."
    },
    {
      "question": "He said, 'I had already finished the work.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had already finished the work.",
        "He said that he had been already finishing the work.",
        "He said that he finished the work.",
        "He said that he has already finished the work."
      ],
      "answer": "He said that he had already finished the work.",
      "explanation": "જ્યારે Reported Speech પહેલેથી જ પૂર્ણ ભૂતકાળમાં ('had finished') હોય, ત્યારે તેના કાળમાં કોઈ ફેરફાર થતો નથી."
    },
    {
      "question": "Priya said, 'I am learning classical music.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "Priya said that she was learning classical music.",
        "Priya said that she is learning classical music.",
        "Priya said that I was learning classical music.",
        "Priya told that she was learning classical music."
      ],
      "answer": "Priya said that she was learning classical music.",
      "explanation": "Reporting Verb ભૂતકાળમાં છે, તેથી ચાલુ વર્તમાનકાળ ('am learning') નું ચાલુ ભૂતકાળ ('was learning') થશે. 'I' નું 'she' માં રૂપાંતર થશે."
    }
  ],
  "test-4": [
    {
      "question": "He said to me, 'I will see you tomorrow.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He told me that he would see me the next day.",
        "He told me that he will see me tomorrow.",
        "He told me that he would see you the next day.",
        "He said me that he would see me the next day."
      ],
      "answer": "He told me that he would see me the next day.",
      "explanation": "'said to' નું 'told' થાય. 'will' નું 'would' થાય. 'I' બોલનાર (He) મુજબ 'he' માં, 'you' સાંભળનાર (me) મુજબ 'me' માં બદલાશે. 'tomorrow' નું 'the next day' થાય."
    },
    {
      "question": "She said, 'I saw a movie yesterday.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she had seen a movie the previous day.",
        "She said that she saw a movie yesterday.",
        "She said that she had seen a movie yesterday.",
        "She said that she has seen a movie the previous day."
      ],
      "answer": "She said that she had seen a movie the previous day.",
      "explanation": "સાદો ભૂતકાળ ('saw') પૂર્ણ ભૂતકાળ ('had seen') માં ફેરવાશે. 'yesterday' નું 'the previous day' અથવા 'the day before' થાય."
    },
    {
      "question": "The teacher said to the students, 'I shall teach you a new lesson tomorrow.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher told the students that he/she would teach them a new lesson the next day.",
        "The teacher told the students that I would teach you a new lesson tomorrow.",
        "The teacher told the students that he/she will teach them a new lesson tomorrow.",
        "The teacher told the students that he/she should teach them a new lesson the next day."
      ],
      "answer": "The teacher told the students that he/she would teach them a new lesson the next day.",
      "explanation": "'said to' નું 'told' થાય. 'shall', જ્યારે ભવિષ્યકાળ દર્શાવે, ત્યારે 'would' માં ફેરવાય. 'I' નું 'he/she', 'you' નું 'them' અને 'tomorrow' નું 'the next day' થાય."
    },
    {
      "question": "He said, 'I have been waiting here for a long time.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had been waiting there for a long time.",
        "He said that he has been waiting here for a long time.",
        "He said that he had been waiting here for a long time.",
        "He said that he was waiting there for a long time."
      ],
      "answer": "He said that he had been waiting there for a long time.",
      "explanation": "ચાલુ પૂર્ણ વર્તમાનકાળ ('have been waiting') નું ચાલુ પૂર્ણ ભૂતકાળ ('had been waiting') થાય. સ્થળસૂચક શબ્દ 'here' નું 'there' થાય."
    },
    {
      "question": "My sister said to me, 'You have done your work well.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "My sister told me that I had done my work well.",
        "My sister told me that you had done your work well.",
        "My sister told me that I have done my work well.",
        "My sister told me that she had done her work well."
      ],
      "answer": "My sister told me that I had done my work well.",
      "explanation": "'said to' નું 'told' થાય. 'have done' નું 'had done' થાય. 'You' સાંભળનાર (me) મુજબ 'I' માં અને 'your' પણ 'my' માં બદલાશે."
    },
    {
      "question": "The old woman said, 'I am feeling tired now.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The old woman said that she was feeling tired then.",
        "The old woman said that she is feeling tired now.",
        "The old woman said that she was feeling tired now.",
        "The old woman said that I was feeling tired then."
      ],
      "answer": "The old woman said that she was feeling tired then.",
      "explanation": "ચાલુ વર્તમાનકાળ ('am feeling') નું ચાલુ ભૂતકાળ ('was feeling') થશે. 'I' નું 'she' અને 'now' નું 'then' થશે."
    },
    {
      "question": "He said, 'I must finish this report by evening.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had to finish that report by evening.",
        "He said that he must finish this report by evening.",
        "He said that he had to finish this report by evening.",
        "He said that he would finish that report by evening."
      ],
      "answer": "He said that he had to finish that report by evening.",
      "explanation": "ફરજ દર્શાવવા માટે 'must' નું 'had to' થાય છે. 'this' નું 'that' થાય છે."
    },
    {
      "question": "They said, 'We will be playing a match next week.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "They said that they would be playing a match the following week.",
        "They said that we would be playing a match the next week.",
        "They said that they will be playing a match next week.",
        "They said that they would be playing a match next week."
      ],
      "answer": "They said that they would be playing a match the following week.",
      "explanation": "'will be playing' (ચાલુ ભવિષ્યકાળ) નું 'would be playing' થશે. 'We' નું 'they' અને 'next week' નું 'the following week' થાય."
    },
    {
      "question": "Ketan said to Rina, 'I need your help.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "Ketan told Rina that he needed her help.",
        "Ketan told Rina that I needed your help.",
        "Ketan told Rina that he needs her help.",
        "Ketan asked Rina that he needed her help."
      ],
      "answer": "Ketan told Rina that he needed her help.",
      "explanation": "'said to' નું 'told' થાય. 'need' નું 'needed' થાય. 'I' બોલનાર (Ketan) મુજબ 'he' માં અને 'your' સાંભળનાર (Rina) મુજબ 'her' માં બદલાશે."
    },
    {
      "question": "She said, 'This is my house.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that that was her house.",
        "She said that this was her house.",
        "She said that that is her house.",
        "She said that this is her house."
      ],
      "answer": "She said that that was her house.",
      "explanation": "જ્યારે 'this' સમય કે સ્થળની નજીકતા ન બતાવતું હોય અને વસ્તુનો નિર્દેશ કરતું હોય, ત્યારે 'this' નું 'that' થાય છે. 'is' નું 'was' અને 'my' નું 'her' થાય."
    }
  ],
  "test-5": [
    {
      "question": "The boy said, 'I have been studying since morning.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that he had been studying since morning.",
        "The boy said that he has been studying since morning.",
        "The boy said that he was studying since morning.",
        "The boy said that I had been studying since morning."
      ],
      "answer": "The boy said that he had been studying since morning.",
      "explanation": "Reporting Verb ભૂતકાળમાં છે, તેથી ચાલુ પૂર્ણ વર્તમાનકાળ ('have been studying') ચાલુ પૂર્ણ ભૂતકાળ ('had been studying') માં ફેરવાશે. 'I' નું 'he' થશે."
    },
    {
      "question": "She said to me, 'I was waiting for you.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She told me that she had been waiting for me.",
        "She told me that she was waiting for me.",
        "She told me that she had been waiting for you.",
        "She told me that I had been waiting for her."
      ],
      "answer": "She told me that she had been waiting for me.",
      "explanation": "ચાલુ ભૂતકાળ ('was waiting') ચાલુ પૂર્ણ ભૂતકાળ ('had been waiting') માં ફેરવાય છે. 'I' નું 'she' અને 'you' નું 'me' થશે."
    },
    {
      "question": "He said, 'I came here yesterday.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had gone there the previous day.",
        "He said that he came here yesterday.",
        "He said that he had come there the previous day.",
        "He said that he had gone there yesterday."
      ],
      "answer": "He said that he had gone there the previous day.",
      "explanation": "સાદો ભૂતકાળ ('came') પૂર્ણ ભૂતકાળ ('had gone') માં ફેરવાશે. 'come' નું 'go' થાય છે કારણ કે બોલવાની જગ્યા બદલાઈ છે. 'here' નું 'there' અને 'yesterday' નું 'the previous day' થશે."
    },
    {
      "question": "The girl said, 'What a beautiful dress it is!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The girl exclaimed that it was a very beautiful dress.",
        "The girl said that what a beautiful dress it was.",
        "The girl exclaimed that it is a very beautiful dress.",
        "The girl asked what a beautiful dress it was."
      ],
      "answer": "The girl exclaimed that it was a very beautiful dress.",
      "explanation": "આ ઉદ્ગાર વાક્ય છે. Reporting Verb તરીકે 'exclaimed' વપરાય છે. 'what a' કે 'how' ને બદલે 'very' કે 'great' વપરાય છે અને વાક્યને વિધાન વાક્યમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "He said to his friend, 'Please help me.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He requested his friend to help him.",
        "He told his friend to please help him.",
        "He requested his friend to help me.",
        "He asked his friend for help."
      ],
      "answer": "He requested his friend to help him.",
      "explanation": "આ વિનંતીસૂચક આજ્ઞાર્થ વાક્ય છે. 'said to' નું 'requested' થશે. વાક્ય 'to' થી જોડાશે અને 'please' નીકળી જશે. 'me' નું 'him' થશે."
    },
    {
      "question": "The teacher said, 'Two and two make four.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher said that two and two make four.",
        "The teacher said that two and two made four.",
        "The teacher said that two and two makes four.",
        "The teacher said that two and two have made four."
      ],
      "answer": "The teacher said that two and two make four.",
      "explanation": "આ એક ગાણિતિક સત્ય છે, જે સનાતન સત્ય જેવું છે. તેથી, Reported Speech ના કાળમાં કોઈ ફેરફાર થશે નહીં."
    },
    {
      "question": "Anjali said, 'I shall definitely complete my project.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "Anjali said that she would definitely complete her project.",
        "Anjali said that she shall definitely complete her project.",
        "Anjali said that she should definitely complete her project.",
        "Anjali said that I would definitely complete my project."
      ],
      "answer": "Anjali said that she would definitely complete her project.",
      "explanation": "અહીં 'shall' દ્રઢ નિશ્ચય બતાવે છે, જે બીજા અને ત્રીજા પુરુષ સાથે 'will' જેવો અર્થ આપે છે. તેથી, તેનું 'would' થશે. 'I' નું 'she' અને 'my' નું 'her' થશે."
    },
    {
      "question": "He said, 'I could solve the puzzle.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he could solve the puzzle.",
        "He said that he can solve the puzzle.",
        "He said that he had been able to solve the puzzle.",
        "He said that he might solve the puzzle."
      ],
      "answer": "He said that he could solve the puzzle.",
      "explanation": "જ્યારે Reported Speech માં 'could', 'would', 'should', 'might' જેવા Modal Auxiliaries હોય, ત્યારે તેમાં કોઈ ફેરફાર થતો નથી."
    },
    {
      "question": "The stranger said to me, 'I belong to this village.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The stranger told me that he belonged to that village.",
        "The stranger told me that he belongs to this village.",
        "The stranger told me that he belonged to this village.",
        "The stranger told me that I belonged to that village."
      ],
      "answer": "The stranger told me that he belonged to that village.",
      "explanation": "'said to' નું 'told' થાય. 'belong' નું 'belonged' થાય. 'I' નું 'he' અને 'this' નું 'that' થશે."
    },
    {
      "question": "She said, 'We must respect our elders.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that we must respect our elders.",
        "She said that they must respect their elders.",
        "She said that we had to respect our elders.",
        "She said that they had to respect their elders."
      ],
      "answer": "She said that we must respect our elders.",
      "explanation": "જ્યારે 'must' નૈતિક ફરજ કે સાર્વત્રિક સિદ્ધાંત દર્શાવે, ત્યારે તેમાં કોઈ ફેરફાર થતો નથી. 'we' નો ઉપયોગ સામાન્ય રીતે બધા લોકોને લાગુ પડતો હોવાથી તે બદલાશે નહીં."
    }
  ],
  "test-6": [
    {
      "question": "The teacher said to the boy, 'Why are you late?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher asked the boy why he was late.",
        "The teacher asked the boy that why he was late.",
        "The teacher asked the boy why was he late.",
        "The teacher told the boy why he was late."
      ],
      "answer": "The teacher asked the boy why he was late.",
      "explanation": "આ પ્રશ્નાર્થ વાક્ય છે, તેથી 'said to' નું 'asked' થશે. સંયોજક તરીકે 'why' પોતે જ વપરાશે. પ્રશ્નાર્થ વાક્યને વિધાન વાક્યમાં ફેરવવું, એટલે 'he' પછી 'was' આવશે."
    },
    {
      "question": "He said to me, 'What is your name?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He asked me what my name was.",
        "He asked me what is my name.",
        "He asked me what my name is.",
        "He asked me that what my name was."
      ],
      "answer": "He asked me what my name was.",
      "explanation": "આ પ્રશ્નાર્થ વાક્ય હોવાથી 'said to' નું 'asked' થશે. 'What' સંયોજક તરીકે વપરાશે. વાક્ય વિધાનમાં ફેરવાશે ('my name was') અને 'your' નું 'my' થશે."
    },
    {
      "question": "She said to them, 'Are you listening to me?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked them if they were listening to her.",
        "She asked them that if they were listening to her.",
        "She asked them are you listening to her.",
        "She asked them if were they listening to her."
      ],
      "answer": "She asked them if they were listening to her.",
      "explanation": "આ સહાયકારક ક્રિયાપદથી શરૂ થતું પ્રશ્નાર્થ વાક્ય છે, તેથી સંયોજક તરીકે 'if' અથવા 'whether' વપરાશે. 'said to' નું 'asked' થશે. વાક્ય વિધાનમાં ફેરવાશે. 'are' નું 'were', 'you' નું 'they', 'me' નું 'her' થશે."
    },
    {
      "question": "My father said to me, 'Do not waste your time.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "My father advised me not to waste my time.",
        "My father told me do not waste my time.",
        "My father advised me to not waste my time.",
        "My father forbade me to waste your time."
      ],
      "answer": "My father advised me not to waste my time.",
      "explanation": "આ નકારાત્મક આજ્ઞાર્થ વાક્ય છે. અહીં ભાવ સલાહનો છે, તેથી 'advised' વપરાયું છે. વાક્યને 'not to' થી જોડવામાં આવે છે. 'your' નું 'my' થશે."
    },
    {
      "question": "He said, 'Let us go for a walk.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He suggested that they should go for a walk.",
        "He proposed to go for a walk.",
        "He said that let us go for a walk.",
        "He requested them to go for a walk."
      ],
      "answer": "He suggested that they should go for a walk.",
      "explanation": "જ્યારે 'Let us' થી વાક્ય શરૂ થાય અને દરખાસ્તનો ભાવ હોય, ત્યારે Reporting Verb તરીકે 'suggested' કે 'proposed' વપરાય છે. વાક્ય 'that' થી જોડાય છે અને 'us' નું 'they' કે 'we' કરી 'should' મુકાય છે."
    },
    {
      "question": "She said, 'Alas! I am undone.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed with sorrow that she was undone.",
        "She said with sorrow that she was undone.",
        "She exclaimed that alas she was undone.",
        "She exclaimed sorrowfully she was undone."
      ],
      "answer": "She exclaimed with sorrow that she was undone.",
      "explanation": "આ ઉદ્ગાર વાક્ય છે જે દુઃખ દર્શાવે છે. 'Alas!' માટે 'exclaimed with sorrow' વપરાય છે. 'am' નું 'was' થશે."
    },
    {
      "question": "The captain commanded the soldiers, 'March forward.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The captain commanded the soldiers to march forward.",
        "The captain told the soldiers to march forward.",
        "The captain commanded the soldiers march forward.",
        "The captain commanded the soldiers that they should march forward."
      ],
      "answer": "The captain commanded the soldiers to march forward.",
      "explanation": "આ આજ્ઞાર્થ વાક્ય છે. Reporting Verb 'commanded' યોગ્ય છે. વાક્યને 'to' થી જોડવામાં આવે છે."
    },
    {
      "question": "He said to the judge, 'Let me go, sir.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He respectfully requested the judge to let him go.",
        "He requested the judge to let him go.",
        "He told the judge to let him go.",
        "He begged the judge let him go."
      ],
      "answer": "He respectfully requested the judge to let him go.",
      "explanation": "'Let me' વાળા વાક્યમાં વિનંતીનો ભાવ હોય છે. 'sir' શબ્દ માટે 'respectfully' ઉમેરવું વધુ યોગ્ય છે. વાક્યને 'to' થી જોડવામાં આવે છે."
    },
    {
      "question": "I said to the child, 'Did you break the glass?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked the child if he had broken the glass.",
        "I asked the child did he break the glass.",
        "I asked the child if he broke the glass.",
        "I told the child if he had broken the glass."
      ],
      "answer": "I asked the child if he had broken the glass.",
      "explanation": "આ પ્રશ્નાર્થ વાક્ય છે, જે સહાયકારક ક્રિયાપદથી શરૂ થાય છે. સંયોજક તરીકે 'if' વપરાશે. Reported Speech સાદા ભૂતકાળમાં ('Did you break') હોવાથી તે પૂર્ણ ભૂતકાળ ('had broken') માં ફેરવાશે."
    },
    {
      "question": "She said, 'Hurrah! We have won the match.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed with joy that they had won the match.",
        "She exclaimed with joy that we had won the match.",
        "She said with joy that they had won the match.",
        "She exclaimed that they have won the match."
      ],
      "answer": "She exclaimed with joy that they had won the match.",
      "explanation": "આનંદ દર્શાવતું ઉદ્ગાર વાક્ય છે. 'Hurrah!' માટે 'exclaimed with joy' વપરાય છે. 'have won' (પૂર્ણ વર્તમાનકાળ) નું 'had won' (પૂર્ણ ભૂતકાળ) થશે. 'We' નું 'they' થશે."
    }
  ],
  "test-7": [
    {
      "question": "He said, 'Where is my car?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He asked where his car was.",
        "He asked where is his car.",
        "He asked where his car is.",
        "He said where his car was."
      ],
      "answer": "He asked where his car was.",
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય છે. Reporting Verb 'asked' થશે. સંયોજક 'where' જ રહેશે. વાક્યને વિધાનમાં ફેરવતા 'his car' કર્તા પછી ક્રિયાપદ 'was' આવશે. 'my' નું 'his' થશે."
    },
    {
      "question": "She said to her servant, 'Bring me a glass of water.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She ordered her servant to bring her a glass of water.",
        "She told her servant to bring me a glass of water.",
        "She requested her servant to bring her a glass of water.",
        "She ordered her servant bring her a glass of water."
      ],
      "answer": "She ordered her servant to bring her a glass of water.",
      "explanation": "આ આજ્ઞાર્થ વાક્ય છે. માલિક અને નોકર વચ્ચેના સંબંધમાં 'ordered' વધુ યોગ્ય Reporting Verb છે. વાક્ય 'to' થી જોડાશે. 'me' નું 'her' થશે."
    },
    {
      "question": "The boy said, 'I did not go to school yesterday.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that he had not gone to school the previous day.",
        "The boy said that he did not go to school the previous day.",
        "The boy said that he had not gone to school yesterday.",
        "The boy said that he did not go to school yesterday."
      ],
      "answer": "The boy said that he had not gone to school the previous day.",
      "explanation": "Reported speech સાદા ભૂતકાળના નકારમાં છે ('did not go'), જે પૂર્ણ ભૂતકાળના નકાર ('had not gone') માં ફેરવાશે. 'yesterday' નું 'the previous day' થશે."
    },
    {
      "question": "He said, 'May you live long!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He wished that I might live long.",
        "He prayed that I might live long.",
        "He said that I may live long.",
        "He wished that may I live long."
      ],
      "answer": "He wished that I might live long.",
      "explanation": "આ શુભેચ્છાદર્શક (Optative) વાક્ય છે. અહીં Reporting Verb તરીકે 'wished' કે 'prayed' વપરાય. 'you' ને સાંભળનાર તરીકે 'I' માની લેવાય છે. 'may' નું 'might' થાય છે."
    },
    {
      "question": "I said to him, 'When will you return?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked him when he would return.",
        "I asked him when would he return.",
        "I asked him that when he would return.",
        "I asked him when he will return."
      ],
      "answer": "I asked him when he would return.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય હોવાથી 'said to' નું 'asked' અને સંયોજક તરીકે 'when' વપરાશે. વાક્ય વિધાનમાં ફેરવાશે ('he would'). 'will' નું 'would' અને 'you' નું 'he' થશે."
    },
    {
      "question": "She said, 'Goodbye, my friends.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She bade her friends goodbye.",
        "She said goodbye to her friends.",
        "She wished her friends goodbye.",
        "She exclaimed goodbye to her friends."
      ],
      "answer": "She bade her friends goodbye.",
      "explanation": "'Goodbye' જેવા વિદાયના શબ્દો માટે Reporting Verb 'bade' નો ઉપયોગ થાય છે. આ એક વિશિષ્ટ રચના છે."
    },
    {
      "question": "The teacher said to me, 'Have you completed your homework?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher asked me if I had completed my homework.",
        "The teacher asked me have you completed your homework.",
        "The teacher asked me if I have completed my homework.",
        "The teacher asked me if you had completed your homework."
      ],
      "answer": "The teacher asked me if I had completed my homework.",
      "explanation": "સહાયકારક ક્રિયાપદથી શરૂ થતું પ્રશ્નાર્થ વાક્ય છે. સંયોજક 'if' આવશે. 'have you completed' (પૂર્ણ વર્તમાનકાળ) નું 'I had completed' (પૂર્ણ ભૂતકાળ) થશે. 'your' નું 'my' થશે."
    },
    {
      "question": "He said, 'I have to go to the office.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had to go to the office.",
        "He said that he has to go to the office.",
        "He said that he have to go to the office.",
        "He said that I had to go to the office."
      ],
      "answer": "He said that he had to go to the office.",
      "explanation": "'have to' એ 'must' જેવી ફરજ બતાવે છે અને Reporting Verb ભૂતકાળમાં હોવાથી તેનું 'had to' થશે. 'I' નું 'he' થશે."
    },
    {
      "question": "The saint said, 'Man is mortal.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The saint said that man is mortal.",
        "The saint said that man was mortal.",
        "The saint told that man is mortal.",
        "The saint preached that man was mortal."
      ],
      "answer": "The saint said that man is mortal.",
      "explanation": "આ વાક્ય સનાતન સત્ય છે, તેથી Reported Speech ના કાળમાં કોઈ ફેરફાર થશે નહીં."
    },
    {
      "question": "She said, 'What a pity!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed that it was a great pity.",
        "She exclaimed what a pity it was.",
        "She said that it was a pity.",
        "She exclaimed with sorrow that it was a pity."
      ],
      "answer": "She exclaimed that it was a great pity.",
      "explanation": "દુઃખ કે દયા વ્યક્ત કરતું ઉદ્ગાર વાક્ય છે. Reporting Verb 'exclaimed' વપરાશે. 'What a' ને બદલે 'it was a great' જેવી રચના વપરાય છે."
    }
  ],
  "test-8": [
    {
      "question": "He said to his son, 'Do not smoke.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He forbade his son to smoke.",
        "He advised his son not to smoke.",
        "He told his son not to smoke.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "આ નકારાત્મક આજ્ઞાર્થ વાક્ય છે. અહીં પિતા-પુત્રના સંબંધમાં સલાહ (advised), મનાઈ (forbade) અથવા સામાન્ય કથન (told) - ત્રણેય Reporting Verb ભાવ મુજબ સાચા છે. 'forbade' વાપરતી વખતે 'not' નો ઉપયોગ થતો નથી."
    },
    {
      "question": "I said to my sister, 'Where were you yesterday?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked my sister where she had been the previous day.",
        "I asked my sister where she was yesterday.",
        "I asked my sister where had she been the previous day.",
        "I asked my sister where she had been yesterday."
      ],
      "answer": "I asked my sister where she had been the previous day.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. Reported Speech માં 'were' (સાદો ભૂતકાળ) છે, જે પૂર્ણ ભૂતકાળ ('had been') માં ફેરવાશે. 'you' નું 'she' અને 'yesterday' નું 'the previous day' થશે."
    },
    {
      "question": "She said, 'I will do it now or never.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she would do it then or never.",
        "She said that she will do it now or never.",
        "She said that she would do it now or never.",
        "She said that she will do it then or never."
      ],
      "answer": "She said that she would do it then or never.",
      "explanation": "Reporting Verb ભૂતકાળમાં હોવાથી 'will' નું 'would' અને 'now' નું 'then' થશે. 'never' માં કોઈ ફેરફાર નહીં થાય."
    },
    {
      "question": "The boy said, 'Wow! What a great shot!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy exclaimed with joy that it was a great shot.",
        "The boy said that it was a great shot.",
        "The boy exclaimed that what a great shot it was.",
        "The boy happily said that it was a great shot."
      ],
      "answer": "The boy exclaimed with joy that it was a great shot.",
      "explanation": "આનંદ વ્યક્ત કરતું ઉદ્ગાર વાક્ય છે. 'Wow!' માટે 'exclaimed with joy' કે 'exclaimed joyfully' વપરાય છે. વાક્યને વિધાનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "He said to me, 'Let's discuss the matter.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He suggested to me that we should discuss the matter.",
        "He told me that we should discuss the matter.",
        "He proposed me that we should discuss the matter.",
        "He suggested me to discuss the matter."
      ],
      "answer": "He suggested to me that we should discuss the matter.",
      "explanation": "'Let's' (Let us) થી શરૂ થતું દરખાસ્તસૂચક વાક્ય છે. Reporting Verb 'suggested to' વપરાશે. વાક્ય 'that' થી જોડાશે અને 'we should' નો ઉપયોગ થશે."
    },
    {
      "question": "The beggar said, 'Please give me some food.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The beggar begged to give him some food.",
        "The beggar requested to give him some food.",
        "The beggar asked to give him some food.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "આ વિનંતીસૂચક વાક્ય છે. ભિખારીના સંદર્ભમાં 'begged' (આજીજી કરી), 'requested' (વિનંતી કરી), કે 'asked' (કહ્યું) - ત્રણેય Reporting Verb વાપરી શકાય. 'begged' સૌથી વધુ યોગ્ય છે. વાક્ય 'to' થી જોડાશે."
    },
    {
      "question": "The policeman said to the thief, 'Don't move.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The policeman ordered the thief not to move.",
        "The policeman warned the thief not to move.",
        "The policeman told the thief not to move.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ નકારાત્મક આજ્ઞાર્થ વાક્ય છે. પોલીસ અને ચોરના સંદર્ભમાં હુકમ (ordered) કે ચેતવણી (warned) બંને Reporting Verb યોગ્ય છે. વાક્ય 'not to' થી જોડાશે."
    },
    {
      "question": "I said to her, 'Can you lend me your pen?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked her if she could lend me her pen.",
        "I asked her if you could lend me your pen.",
        "I asked her can you lend me your pen.",
        "I requested her if she could lend me her pen."
      ],
      "answer": "I asked her if she could lend me her pen.",
      "explanation": "આ પ્રશ્નાર્થ વાક્ય છે. સંયોજક તરીકે 'if' વપરાશે. 'can' નું 'could' થશે. 'you' સાંભળનાર (her) મુજબ 'she' માં અને 'your' પણ 'her' માં બદલાશે. 'me' એમ જ રહેશે કારણ કે બોલનાર 'I' છે."
    },
    {
      "question": "He said, 'I had a wonderful dream last night.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had had a wonderful dream the previous night.",
        "He said that he had a wonderful dream the previous night.",
        "He said that he had a wonderful dream last night.",
        "He said that he has had a wonderful dream the previous night."
      ],
      "answer": "He said that he had had a wonderful dream the previous night.",
      "explanation": "Reported Speech માં 'had' મુખ્ય ક્રિયાપદ તરીકે સાદા ભૂતકાળમાં છે. તેથી તે પૂર્ણ ભૂતકાળ 'had had' માં ફેરવાશે. 'last night' નું 'the previous night' થશે."
    },
    {
      "question": "The leader said, 'Let me speak freely.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The leader wished that he might be allowed to speak freely.",
        "The leader requested to let him speak freely.",
        "The leader said that he should speak freely.",
        "The leader wished to speak freely."
      ],
      "answer": "The leader wished that he might be allowed to speak freely.",
      "explanation": "'Let me' થી શરૂ થતા વાક્યમાં જ્યારે પરવાનગી માંગવાનો ભાવ હોય, ત્યારે 'might be allowed to' જેવી રચનાનો ઉપયોગ થાય છે. 'wished' કે 'desired' જેવા Reporting Verb વાપરી શકાય."
    }
  ],
  "test-9": [
    {
      "question": "She said to me, 'Which book do you like the most?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked me which book I liked the most.",
        "She asked me which book did I like the most.",
        "She asked me which book you liked the most.",
        "She asked me that which book I liked the most."
      ],
      "answer": "She asked me which book I liked the most.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'Which book' એ સંયોજક તરીકે કામ કરશે. 'do you like' (સાદો વર્તમાનકાળ) નું 'I liked' (સાદો ભૂતકાળ) થશે અને વાક્ય વિધાન બનશે."
    },
    {
      "question": "He said, 'Oh! I lost my wallet.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He exclaimed with sorrow that he had lost his wallet.",
        "He said that he lost his wallet.",
        "He exclaimed with sorrow that I had lost my wallet.",
        "He exclaimed that oh he had lost his wallet."
      ],
      "answer": "He exclaimed with sorrow that he had lost his wallet.",
      "explanation": "દુઃખ વ્યક્ત કરતું ઉદ્ગાર વાક્ય છે. 'Oh!' માટે 'exclaimed with sorrow/regret' વપરાય છે. 'lost' (સાદો ભૂતકાળ) નું 'had lost' (પૂર્ણ ભૂતકાળ) થશે."
    },
    {
      "question": "The mother said to her son, 'Where have you been all day?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The mother asked her son where he had been all day.",
        "The mother asked her son where had he been all day.",
        "The mother asked her son where he has been all day.",
        "The mother told her son where he had been all day."
      ],
      "answer": "The mother asked her son where he had been all day.",
      "explanation": "'said to' નું 'asked' થાય. 'where' સંયોજક છે. 'have you been' (પૂર્ણ વર્તમાનકાળ) નું 'he had been' (પૂર્ણ ભૂતકાળ) થશે અને વાક્ય વિધાન બનશે."
    },
    {
      "question": "She said, 'Let me see what it is.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she would see what it was.",
        "She wished to see what it was.",
        "She asked to see what it was.",
        "She said to let her see what it was."
      ],
      "answer": "She said that she would see what it was.",
      "explanation": "અહીં 'Let me see' એ ભવિષ્યમાં કંઈક જોવાની ઈચ્છા વ્યક્ત કરે છે, જેને 'I will see' ના અર્થમાં લઈ શકાય. તેથી તેનું 'she would see' કરવું યોગ્ય છે. 'is' નું 'was' થશે."
    },
    {
      "question": "The old man said to the boy, 'May God bless you!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The old man prayed that God might bless the boy.",
        "The old man wished that God might bless the boy.",
        "The old man said that God may bless the boy.",
        "The old man prayed that God might bless you."
      ],
      "answer": "The old man prayed that God might bless the boy.",
      "explanation": "આ શુભેચ્છાદર્શક (Optative) વાક્ય છે, જેમાં પ્રાર્થનાનો ભાવ છે. તેથી Reporting Verb 'prayed' વપરાશે. 'may' નું 'might' થશે અને 'you' નું 'the boy' થશે."
    },
    {
      "question": "He said, 'I am to go to Delhi.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he was to go to Delhi.",
        "He said that he is to go to Delhi.",
        "He said that I was to go to Delhi.",
        "He said that he had to go to Delhi."
      ],
      "answer": "He said that he was to go to Delhi.",
      "explanation": "'am to' એ પૂર્વનિર્ધારિત યોજના કે ફરજ દર્શાવે છે. Reporting Verb ભૂતકાળમાં હોવાથી, 'am to' નું 'was to' થશે."
    },
    {
      "question": "The principal said, 'Let the students come in.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The principal ordered that the students should be allowed to come in.",
        "The principal said to let the students come in.",
        "The principal ordered the students to come in.",
        "The principal allowed the students to come in."
      ],
      "answer": "The principal ordered that the students should be allowed to come in.",
      "explanation": "અહીં 'Let' પરવાનગી આપવાના અર્થમાં વપરાયું છે. તેથી 'ordered' કે 'instructed' જેવા Reporting verb સાથે 'that... should be allowed to' જેવી રચનાનો ઉપયોગ થાય છે."
    },
    {
      "question": "I said to him, 'I have not seen you for ages.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I told him that I had not seen him for ages.",
        "I told him that I have not seen you for ages.",
        "I told him that I had not seen you for ages.",
        "I said to him that I had not seen him for ages."
      ],
      "answer": "I told him that I had not seen him for ages.",
      "explanation": "'said to' નું 'told' થાય. 'have not seen' નું 'had not seen' થાય. 'you' સાંભળનાર (him) મુજબ 'him' માં બદલાશે. બોલનાર 'I' હોવાથી પહેલો 'I' બદલાશે નહીં."
    },
    {
      "question": "The boy said, 'What a clever idea!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy exclaimed that it was a very clever idea.",
        "The boy said that it was a very clever idea.",
        "The boy exclaimed what a clever idea it was.",
        "The boy exclaimed that what a clever idea."
      ],
      "answer": "The boy exclaimed that it was a very clever idea.",
      "explanation": "આ ઉદ્ગાર વાક્ય છે. Reporting Verb તરીકે 'exclaimed' વપરાય છે. 'what a' ને બદલે 'it was a very' જેવી રચના વપરાય છે અને વાક્યને વિધાન વાક્યમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "She said, 'We were living in Paris.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that they had been living in Paris.",
        "She said that they were living in Paris.",
        "She said that we had been living in Paris.",
        "She said that we were living in Paris."
      ],
      "answer": "She said that they had been living in Paris.",
      "explanation": "Reporting Verb ભૂતકાળમાં છે અને Reported Speech ચાલુ ભૂતકાળમાં ('were living') છે, તેથી તે ચાલુ પૂર્ણ ભૂતકાળ ('had been living') માં ફેરવાશે. 'We' નું 'they' થશે."
    }
  ],
  "test-10": [
    {
      "question": "He said, 'Thank you!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He thanked me.",
        "He said thank you.",
        "He told me thank you.",
        "He said that thank you."
      ],
      "answer": "He thanked me.",
      "explanation": "'Thank you' જેવા શબ્દોને Reporting Verb તરીકે જ લઈ લેવામાં આવે છે. અહીં 'thank' નું ભૂતકાળનું રૂપ 'thanked' વપરાશે. સાંભળનાર તરીકે 'me' ઉમેરી શકાય છે."
    },
    {
      "question": "She said to me, 'Congratulations!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She congratulated me.",
        "She said congratulations to me.",
        "She told me congratulations.",
        "She wished me congratulations."
      ],
      "answer": "She congratulated me.",
      "explanation": "'Congratulations' જેવા અભિનંદન આપતા શબ્દોને Reporting Verb તરીકે લઈ લેવામાં આવે છે. 'congratulate' નું ભૂતકાળનું રૂપ 'congratulated' વપરાશે."
    },
    {
      "question": "The teacher said, 'Be quiet and listen to my words.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher urged them to be quiet and listen to his/her words.",
        "The teacher told them to be quiet and listen to my words.",
        "The teacher said be quiet and listen to his words.",
        "The teacher requested them to be quiet and listen to his/her words."
      ],
      "answer": "The teacher urged them to be quiet and listen to his/her words.",
      "explanation": "આ એક આજ્ઞાર્થ વાક્ય છે. અહીં 'urged' (આગ્રહ કર્યો) Reporting Verb તરીકે યોગ્ય છે. વાક્ય 'to' થી જોડાશે. 'my' નું 'his/her' થશે. સાંભળનાર તરીકે 'them' (વિદ્યાર્થીઓ) ઉમેરી શકાય."
    },
    {
      "question": "He said, 'I used to play here when I was a child.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he used to play there when he was a child.",
        "He said that he had used to play there when he was a child.",
        "He said that he played there when he was a child.",
        "He said that he used to play here when he was a child."
      ],
      "answer": "He said that he used to play there when he was a child.",
      "explanation": "'used to' ભૂતકાળની ટેવ દર્શાવે છે અને તે Indirect speech માં બદલાતું નથી. ફક્ત 'here' નું 'there' થશે."
    },
    {
      "question": "The Prime Minister said, 'We will fight corruption.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The Prime Minister said that they would fight corruption.",
        "The Prime Minister said that we would fight corruption.",
        "The Prime Minister said that they will fight corruption.",
        "The Prime Minister ordered that they would fight corruption."
      ],
      "answer": "The Prime Minister said that they would fight corruption.",
      "explanation": "અહીં 'We' નો ઉપયોગ સરકારના પ્રતિનિધિ તરીકે થયો છે, તેથી તેનું 'they' કરવું વધુ યોગ્ય છે. 'will' નું 'would' થશે."
    },
    {
      "question": "She said, 'I wish I were a bird!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She wished that she had been a bird.",
        "She wished that she were a bird.",
        "She said that she wished she had been a bird.",
        "She exclaimed that she were a bird."
      ],
      "answer": "She wished that she had been a bird.",
      "explanation": "આ એક અવાસ્તવિક ઈચ્છા (unreal wish) છે. 'I wish I were...' વાળી રચનામાં, 'said' નું 'wished' થાય છે અને 'were' નું 'had been' થાય છે."
    },
    {
      "question": "The doctor said to the patient, 'Take this medicine twice a day.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The doctor advised the patient to take that medicine twice a day.",
        "The doctor told the patient to take this medicine twice a day.",
        "The doctor advised the patient to take this medicine twice a day.",
        "The doctor ordered the patient to take that medicine twice a day."
      ],
      "answer": "The doctor advised the patient to take that medicine twice a day.",
      "explanation": "આજ્ઞાર્થ વાક્ય છે જેમાં સલાહનો ભાવ છે. 'said to' નું 'advised' થશે. વાક્ય 'to' થી જોડાશે. 'this' નું 'that' થશે."
    },
    {
      "question": "He said, 'How foolish I have been!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He confessed with regret that he had been very foolish.",
        "He exclaimed that he had been very foolish.",
        "He said that how foolish he had been.",
        "He confessed that he was very foolish."
      ],
      "answer": "He confessed with regret that he had been very foolish.",
      "explanation": "આ ઉદ્ગાર વાક્ય છે જે પસ્તાવો દર્શાવે છે. Reporting Verb તરીકે 'confessed with regret' કે 'exclaimed with regret' વાપરી શકાય. વાક્યને વિધાનમાં ફેરવી 'very' ઉમેરાય છે. 'have been' નું 'had been' થશે."
    },
    {
      "question": "I said to the porter, 'When does the next train arrive?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I enquired of the porter when the next train arrived.",
        "I asked the porter when the next train arrives.",
        "I asked the porter when did the next train arrive.",
        "I enquired the porter when the next train would arrive."
      ],
      "answer": "I enquired of the porter when the next train arrived.",
      "explanation": "પૂછપરછ માટે 'asked' ને બદલે 'enquired of' પણ વાપરી શકાય. 'does...arrive' (સાદો વર્તમાનકાળ) નું 'arrived' (સાદો ભૂતકાળ) થશે અને વાક્ય વિધાન બનશે."
    },
    {
      "question": "He said, 'My son is coming home tomorrow.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that his son was coming home the next day.",
        "He said that his son is coming home tomorrow.",
        "He said that my son was coming home the next day.",
        "He said that his son was coming home tomorrow."
      ],
      "answer": "He said that his son was coming home the next day.",
      "explanation": "'is coming' નું 'was coming' થશે. 'my' નું 'his' થશે અને 'tomorrow' નું 'the next day' થશે."
    }
  ],
  "test-11": [
    {
      "question": "She said to her father, 'Please allow me to go to the party.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She requested her father to allow her to go to the party.",
        "She told her father to allow her to go to the party.",
        "She asked her father if she could go to the party.",
        "She requested her father to please allow her to go to the party."
      ],
      "answer": "She requested her father to allow her to go to the party.",
      "explanation": "આ વિનંતીસૂચક વાક્ય છે, તેથી 'said to' નું 'requested' થાય. વાક્યને 'to' વડે જોડવામાં આવે છે અને 'please' શબ્દ નીકળી જાય છે. 'me' સર્વનામનું 'her' માં રૂપાંતર થાય છે."
    },
    {
      "question": "The boy said, 'I have been working on this project since last Monday.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that he had been working on that project since the previous Monday.",
        "The boy said that he has been working on this project since last Monday.",
        "The boy said that he was working on that project since the previous Monday.",
        "The boy said that he had been working on this project since last Monday."
      ],
      "answer": "The boy said that he had been working on that project since the previous Monday.",
      "explanation": "ચાલુ પૂર્ણ વર્તમાનકાળ ('have been working') નું ચાલુ પૂર્ણ ભૂતકાળ ('had been working') થાય છે. 'this' નું 'that' અને 'last Monday' નું 'the previous Monday' થાય છે."
    },
    {
      "question": "He said, 'What a beautiful painting!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He exclaimed that it was a very beautiful painting.",
        "He said that it was a very beautiful painting.",
        "He exclaimed what a beautiful painting it was.",
        "He asked what a beautiful painting it was."
      ],
      "answer": "He exclaimed that it was a very beautiful painting.",
      "explanation": "આ ઉદ્ગાર વાક્ય છે. Reporting Verb તરીકે 'exclaimed' નો ઉપયોગ થાય છે. વાક્યને વિધાનમાં ફેરવતી વખતે 'what a' ને બદલે 'very' નો ઉપયોગ થાય છે અને ઉદ્ગાર ચિહ્ન દૂર થાય છે."
    },
    {
      "question": "The teacher said to the students, 'Why have you not done your homework?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher asked the students why they had not done their homework.",
        "The teacher asked the students why had they not done their homework.",
        "The teacher asked the students why they have not done their homework.",
        "The teacher told the students why they had not done their homework."
      ],
      "answer": "The teacher asked the students why they had not done their homework.",
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય છે. 'said to' નું 'asked' થાય. 'why' સંયોજક તરીકે વપરાય છે. પ્રશ્નાર્થ વાક્યને વિધાન વાક્યમાં ફેરવીને 'they had' લખાય છે. 'have not done' નું 'had not done' થાય છે. 'your' નું 'their' થાય છે."
    },
    {
      "question": "She said, 'If I had money, I would help you.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that if she had had money, she would have helped me.",
        "She said that if she had money, she would help me.",
        "She said that if she had had money, she would help me.",
        "She told that if she had money, she would have helped me."
      ],
      "answer": "She said that if she had had money, she would have helped me.",
      "explanation": "આ શરતી વાક્ય પ્રકાર-2 (અવાસ્તવિક વર્તમાન) છે. Indirect speech માં તે શરતી વાક્ય પ્રકાર-3 માં ફેરવાય છે. તેથી 'had' નું 'had had' અને 'would help' નું 'would have helped' થાય છે. 'you' નું 'me' (સાંભળનાર તરીકે ધારીને) થાય."
    },
    {
      "question": "My mother said, 'It may rain today.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "My mother said that it might rain that day.",
        "My mother said that it may rain today.",
        "My mother said that it might rain today.",
        "My mother predicted that it may rain that day."
      ],
      "answer": "My mother said that it might rain that day.",
      "explanation": "Reporting verb ભૂતકાળમાં હોવાથી, 'may' નું 'might' થાય છે. સમયસૂચક શબ્દ 'today' નું 'that day' માં રૂપાંતર થાય છે."
    },
    {
      "question": "He said to me, 'Let us go home.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He suggested to me that we should go home.",
        "He proposed that we should go home.",
        "He told me to go home.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Let us' વાળા દરખાસ્તસૂચક વાક્યોમાં Reporting Verb તરીકે 'suggested to' અથવા 'proposed' બંનેનો ઉપયોગ કરી શકાય છે. વાક્ય 'that' થી જોડાય છે અને 'we should' કે 'they should' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The saint said to his followers, 'Be kind to all.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The saint advised his followers to be kind to all.",
        "The saint told his followers to be kind to all.",
        "The saint ordered his followers to be kind to all.",
        "The saint preached his followers to be kind to all."
      ],
      "answer": "The saint advised his followers to be kind to all.",
      "explanation": "આ આજ્ઞાર્થ વાક્ય છે જેમાં ઉપદેશ કે સલાહનો ભાવ છે. તેથી, Reporting verb 'advised' સૌથી યોગ્ય છે. વાક્યને 'to' વડે જોડવામાં આવે છે."
    },
    {
      "question": "She said, 'I must leave at once.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she had to leave at once.",
        "She said that she must leave at once.",
        "She said that she has to leave at once.",
        "She said that she would leave at once."
      ],
      "answer": "She said that she had to leave at once.",
      "explanation": "જ્યારે 'must' તાત્કાલિક જરૂરિયાત કે ફરજ દર્શાવે, ત્યારે Indirect speech માં 'had to' નો ઉપયોગ થાય છે. 'at once' માં કોઈ ફેરફાર થતો નથી."
    },
    {
      "question": "The general said, 'Bravo! You have fought well.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The general applauded them, saying that they had fought well.",
        "The general said bravo that they had fought well.",
        "The general exclaimed with joy that they had fought well.",
        "The general applauded them and said that you have fought well."
      ],
      "answer": "The general applauded them, saying that they had fought well.",
      "explanation": "'Bravo!' જેવા શાબાશીના શબ્દો માટે Reporting Verb 'applauded' નો ઉપયોગ થાય છે અને તેને 'saying that...' વડે જોડવામાં આવે છે. 'have fought' નું 'had fought' અને 'You' નું 'they' થાય છે."
    }
  ],
  "test-12": [
    {
      "question": "He said to me, 'Who teaches you English?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He asked me who taught me English.",
        "He asked me who teaches me English.",
        "He asked me who taught you English.",
        "He asked me that who taught me English."
      ],
      "answer": "He asked me who taught me English.",
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય છે. 'who' પોતે કર્તા છે, તેથી વાક્ય રચનામાં ફેરફાર થશે નહીં, માત્ર કાળ બદલાશે. સાદો વર્તમાનકાળ ('teaches') સાદા ભૂતકાળ ('taught') માં ફેરવાશે. 'you' નું 'me' થશે."
    },
    {
      "question": "She said, 'I would rather die than beg.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she would rather die than beg.",
        "She said that she had rather die than beg.",
        "She said that she would have rather died than beg.",
        "She preferred to die than beg."
      ],
      "answer": "She said that she would rather die than beg.",
      "explanation": "'would rather', 'would sooner', 'had better' જેવી રચનાઓ Indirect Speech માં બદલાતી નથી."
    },
    {
      "question": "The boy said, 'What a stupid fellow I am!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy exclaimed that he was a very stupid fellow.",
        "The boy confessed that he was a very stupid fellow.",
        "The boy said that he was a very stupid fellow.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ ઉદ્ગાર વાક્ય છે. 'exclaimed' નો ઉપયોગ સામાન્ય છે. જોકે, છોકરો પોતાની ભૂલ સ્વીકારી રહ્યો છે, તેથી 'confessed' (કબૂલ્યું) પણ યોગ્ય છે. વાક્યને વિધાનમાં ફેરવીને 'very' ઉમેરાય છે."
    },
    {
      "question": "My father said to me, 'Will you listen to such a man?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "My father asked me if I would listen to such a man.",
        "My father asked me would I listen to such a man.",
        "My father asked me if I will listen to such a man.",
        "My father asked me not to listen to such a man."
      ],
      "answer": "My father asked me if I would listen to such a man.",
      "explanation": "આ સહાયકારક ક્રિયાપદથી શરૂ થતો પ્રશ્નાર્થ છે. સંયોજક તરીકે 'if' વપરાશે. 'Will you' નું 'if I would' થશે. વાક્યનો ભાવ પ્રશ્નનો છે, નકારાત્મક સલાહનો નથી."
    },
    {
      "question": "I said to him, 'Do you really come from China?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked him if he really came from China.",
        "I asked him if he really comes from China.",
        "I asked him did he really come from China.",
        "I enquired him if he really came from China."
      ],
      "answer": "I asked him if he really came from China.",
      "explanation": "આ પ્રશ્નાર્થ વાક્ય છે. 'do you come' (સાદો વર્તમાનકાળ) છે, જે સાદા ભૂતકાળ ('came') માં ફેરવાશે. સંયોજક તરીકે 'if' નો ઉપયોગ થશે અને વાક્ય વિધાન બનશે."
    },
    {
      "question": "She said, 'Let's wait for our friends.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She proposed that they should wait for their friends.",
        "She suggested that they should wait for their friends.",
        "She said to wait for their friends.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Let's' વાળી દરખાસ્ત માટે 'proposed' અને 'suggested' બંને Reporting Verb તરીકે વાપરી શકાય છે. વાક્ય 'that... should' ની રચનાથી જોડાય છે. 'our' નું 'their' થશે."
    },
    {
      "question": "He said, 'I was having dinner when you called.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had been having dinner when I called.",
        "He said that he was having dinner when I had called.",
        "He said that he was having dinner when you called.",
        "He said that he had been having dinner when I had called."
      ],
      "answer": "He said that he had been having dinner when I called.",
      "explanation": "જ્યારે વાક્યમાં બે ભૂતકાળની ક્રિયાઓ હોય, ત્યારે મુખ્ય ક્રિયાનો કાળ બદલાય છે. 'was having' (ચાલુ ભૂતકાળ) નું 'had been having' (ચાલુ પૂર્ણ ભૂતકાળ) થશે. 'when' પછીના ગૌણ વાક્ય 'you called' (સાદો ભૂતકાળ) ના કાળમાં ફેરફાર નહીં થાય અને 'you' નું 'I' થશે."
    },
    {
      "question": "The man said, 'I came here two days ago.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The man said that he had gone there two days before.",
        "The man said that he had come there two days ago.",
        "The man said that he came there two days before.",
        "The man said that he had gone there two days previous."
      ],
      "answer": "The man said that he had gone there two days before.",
      "explanation": "સાદો ભૂતકાળ ('came') પૂર્ણ ભૂતકાળ ('had gone') માં ફેરવાય છે. 'come' નું 'go' થાય છે. 'here' નું 'there' અને 'ago' નું 'before' થાય છે."
    },
    {
      "question": "'Call the first witness,' said the judge. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The judge commanded them to call the first witness.",
        "The judge said to call the first witness.",
        "The judge commanded to call the first witness.",
        "The judge commanded that the first witness be called."
      ],
      "answer": "The judge commanded them to call the first witness.",
      "explanation": "આ આજ્ઞાર્થ વાક્ય છે. જજના આદેશ માટે 'commanded' યોગ્ય Reporting Verb છે. વાક્ય 'to' થી જોડાય છે. અહીં સાંભળનાર તરીકે 'them' ઉમેરવું વ્યાજબી છે."
    },
    {
      "question": "She said to the teacher, 'Could you please explain this again?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She requested the teacher to explain that again.",
        "She asked the teacher if he/she could explain that again.",
        "She asked the teacher to please explain this again.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Could you please' અત્યંત નમ્ર વિનંતી દર્શાવે છે. તેથી Reporting Verb તરીકે 'requested' અને વાક્યને 'to' થી જોડવું એ શ્રેષ્ઠ વિકલ્પ છે. 'asked if he/she could' પણ વ્યાકરણની દૃષ્ટિએ સાચું છે. 'this' નું 'that' થાય."
    }
  ],
  "test-13": [
    {
      "question": "He said, 'I shall go as soon as it is possible.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he would go as soon as it was possible.",
        "He said that he shall go as soon as it is possible.",
        "He said that he would go as soon as it is possible.",
        "He said that he should go as soon as it was possible."
      ],
      "answer": "He said that he would go as soon as it was possible.",
      "explanation": "પહેલા પુરુષ 'I' સાથે 'shall' ભવિષ્યકાળ દર્શાવે છે, જે Indirect માં 'he' સાથે 'would' માં ફેરવાશે. 'is' નું 'was' થશે."
    },
    {
      "question": "She said to me, 'What can I do for you?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked me what she could do for me.",
        "She asked me what could she do for me.",
        "She asked me what she can do for me.",
        "She asked me that what she could do for me."
      ],
      "answer": "She asked me what she could do for me.",
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય છે. 'said to' નું 'asked' થાય. 'what' સંયોજક તરીકે વપરાય છે. વાક્ય વિધાનમાં ફેરવાશે. 'can' નું 'could', 'I' નું 'she', અને 'you' નું 'me' થશે."
    },
    {
      "question": "The prisoner said, 'Forgive me, Your Majesty.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The prisoner begged His Majesty to forgive him.",
        "The prisoner requested His Majesty to forgive him.",
        "The prisoner asked His Majesty to forgive him.",
        "The prisoner told His Majesty to forgive him."
      ],
      "answer": "The prisoner begged His Majesty to forgive him.",
      "explanation": "કેદી દ્વારા રાજાને કરવામાં આવતી વિનંતી માટે 'begged' (આજીજી કરી) સૌથી યોગ્ય Reporting Verb છે. આ એક આજ્ઞાર્થ વાક્ય છે જે 'to' થી જોડાય છે."
    },
    {
      "question": "He said, 'We have been living here since 2010.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that they had been living there since 2010.",
        "He said that they have been living there since 2010.",
        "He said that we had been living here since 2010.",
        "He said that they were living there since 2010."
      ],
      "answer": "He said that they had been living there since 2010.",
      "explanation": "ચાલુ પૂર્ણ વર્તમાનકાળ ('have been living') નું ચાલુ પૂર્ણ ભૂતકાળ ('had been living') થાય છે. 'We' નું 'they' અને 'here' નું 'there' થાય છે. ચોક્કસ વર્ષ હોવાથી 'since 2010' બદલાશે નહીં."
    },
    {
      "question": "The boy said, 'I am glad to be here this evening.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that he was glad to be there that evening.",
        "The boy said that he was glad to be here this evening.",
        "The boy said that he is glad to be there that evening.",
        "The boy said that he was glad to be there this evening."
      ],
      "answer": "The boy said that he was glad to be there that evening.",
      "explanation": "'am' નું 'was' થશે. 'here' નું 'there' અને 'this evening' નું 'that evening' થશે."
    },
    {
      "question": "'Are you the manager?' I said. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked him if he was the manager.",
        "I asked are you the manager.",
        "I asked him that if he was the manager.",
        "I asked if he is the manager."
      ],
      "answer": "I asked him if he was the manager.",
      "explanation": "આ પ્રશ્નાર્થ વાક્ય છે. Reporting verb 'said' નું 'asked' થશે. સાંભળનાર તરીકે 'him' ઉમેરવું યોગ્ય છે. સંયોજક તરીકે 'if' વપરાશે. વાક્ય વિધાનમાં ફેરવાશે અને 'are' નું 'was' થશે."
    },
    {
      "question": "She said, 'My God! I have missed the train.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed with regret that she had missed the train.",
        "She exclaimed that she has missed the train.",
        "She said My God that she had missed the train.",
        "She exclaimed that she had missed the train."
      ],
      "answer": "She exclaimed with regret that she had missed the train.",
      "explanation": "'My God!' આશ્ચર્ય અને પસ્તાવો બતાવે છે, તેથી 'exclaimed with regret' યોગ્ય છે. 'have missed' નું 'had missed' થશે."
    },
    {
      "question": "He said, 'The sun rises in the east.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that the sun rises in the east.",
        "He said that the sun rose in the east.",
        "He said that the sun had risen in the east.",
        "He told that the sun rises in the east."
      ],
      "answer": "He said that the sun rises in the east.",
      "explanation": "આ સનાતન સત્ય છે. સનાતન સત્યના કાળમાં કોઈ ફેરફાર થતો નથી, ભલે Reporting Verb ભૂતકાળમાં હોય."
    },
    {
      "question": "The captain said to the team, 'Let's play our best game.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The captain encouraged the team to play their best game.",
        "The captain suggested that they should play their best game.",
        "The captain told the team to play our best game.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "અહીં દરખાસ્ત ('suggested') અને પ્રોત્સાહન ('encouraged') બંને ભાવ યોગ્ય છે. 'suggested' સાથે 'that...should' ની રચના આવે, જ્યારે 'encouraged' સાથે 'to' infinitive આવે. 'our' નું 'their' થાય."
    },
    {
      "question": "The teacher said, 'Who is responsible for this mess?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher demanded to know who was responsible for that mess.",
        "The teacher asked who was responsible for that mess.",
        "The teacher asked who is responsible for this mess.",
        "The teacher demanded who was responsible for this mess."
      ],
      "answer": "The teacher demanded to know who was responsible for that mess.",
      "explanation": "અહીં શિક્ષક ગુસ્સામાં કે કડકાઈથી પૂછી રહ્યા છે, તેથી 'asked' ને બદલે 'demanded to know' (જાણવાની માંગણી કરી) વધુ ભાવવાહી છે. 'is' નું 'was' અને 'this' નું 'that' થશે."
    }
  ],
  "test-14": [
    {
      "question": "He said, 'I must go home tomorrow.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he would have to go home the next day.",
        "He said that he must go home the next day.",
        "He said that he had to go home tomorrow.",
        "He said that he will have to go home the next day."
      ],
      "answer": "He said that he would have to go home the next day.",
      "explanation": "જ્યારે 'must' ભવિષ્યની ફરજ દર્શાવે, ત્યારે તેને 'will have to' ના અર્થમાં લેવાય છે. Indirect Speech માં તેનું 'would have to' થાય છે. 'tomorrow' નું 'the next day' થાય છે."
    },
    {
      "question": "'How clever of you to have solved it!' she said. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed that it was very clever of me to have solved it.",
        "She told me that I was very clever to have solved it.",
        "She exclaimed how clever of me to have solved it.",
        "She exclaimed that it was very clever of you to have solved it."
      ],
      "answer": "She exclaimed that it was very clever of me to have solved it.",
      "explanation": "આ ઉદ્ગાર વાક્ય છે. 'exclaimed' Reporting Verb વપરાશે. 'you' ને સાંભળનાર તરીકે 'me' માની લેવાય છે. 'how clever' ને 'very clever' માં ફેરવી વાક્યને વિધાન બનાવાય છે."
    },
    {
      "question": "The boy said, 'I will not play with you again.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that he would not play with me again.",
        "The boy said that he will not play with me again.",
        "The boy said that I would not play with you again.",
        "The boy refused to play with me again."
      ],
      "answer": "The boy said that he would not play with me again.",
      "explanation": "'will not' નું 'would not' થશે. 'I' નું 'he' થશે. સાંભળનાર તરીકે 'me' ધારીને 'you' નું 'me' થશે. 'refused' પણ વાપરી શકાય, પણ આપેલો વિકલ્પ વધુ સીધો છે."
    },
    {
      "question": "She said to her friend, 'From where did you get this dress?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked her friend from where she had got that dress.",
        "She asked her friend from where did she get that dress.",
        "She asked her friend from where she got that dress.",
        "She asked her friend from where she had got this dress."
      ],
      "answer": "She asked her friend from where she had got that dress.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'From where' સંયોજક બનશે. 'did you get' (સાદો ભૂતકાળ) નું 'she had got' (પૂર્ણ ભૂતકાળ) થશે. 'this' નું 'that' થશે."
    },
    {
      "question": "He said, 'I need not go there.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he did not have to go there.",
        "He said that he need not go there.",
        "He said that he would not have to go there.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'need not' Indirect Speech માં બદલાતું નથી. તેને 'did not have to' તરીકે પણ લખી શકાય છે. બંને વિકલ્પો સાચા છે."
    },
    {
      "question": "The teacher said, 'Let's not make noise.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher suggested that they should not make noise.",
        "The teacher forbade them to make noise.",
        "The teacher told them not to make noise.",
        "The teacher proposed not to make noise."
      ],
      "answer": "The teacher suggested that they should not make noise.",
      "explanation": "આ નકારાત્મક દરખાસ્ત છે. 'suggested' Reporting verb સાથે 'that... should not' ની રચના સૌથી યોગ્ય છે. 'forbade' નો અર્થ 'મનાઈ ફરમાવી' થાય, જે પણ શક્ય છે પણ 'suggested' વધુ બંધબેસતું છે."
    },
    {
      "question": "I said to him, 'I had hoped to succeed.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I told him that I had hoped to succeed.",
        "I told him that I had been hoping to succeed.",
        "I told him that I hoped to succeed.",
        "I told him that I hoped I would succeed."
      ],
      "answer": "I told him that I had hoped to succeed.",
      "explanation": "Reported Speech માં 'had hoped' (પૂર્ણ ભૂતકાળ) છે. પૂર્ણ ભૂતકાળ Indirect Speech માં બદલાતો નથી. તેથી વાક્ય એમ જ રહેશે, ફક્ત 'said to' નું 'told' થશે."
    },
    {
      "question": "She said, 'What a good idea!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed that it was a very good idea.",
        "She said that it was a good idea.",
        "She exclaimed what a good idea it was.",
        "She told that it was a very good idea."
      ],
      "answer": "She exclaimed that it was a very good idea.",
      "explanation": "ઉદ્ગાર વાક્યને વિધાન વાક્યમાં ફેરવવામાં આવે છે. 'exclaimed' Reporting Verb નો ઉપયોગ થાય છે અને 'What a' ને બદલે 'it was a very' જેવી રચના વપરાય છે."
    },
    {
      "question": "He said to his officer, 'Pardon me, sir.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He respectfully begged his officer to pardon him.",
        "He begged his officer to pardon him.",
        "He requested his officer to pardon him.",
        "He told his officer to pardon him."
      ],
      "answer": "He respectfully begged his officer to pardon him.",
      "explanation": "અહીં માફી માંગવાનો ભાવ છે, તેથી 'begged' યોગ્ય છે. 'sir' માટે 'respectfully' શબ્દ ઉમેરવામાં આવે છે. આ આજ્ઞાર્થ વાક્ય હોવાથી 'to' થી જોડાય છે."
    },
    {
      "question": "The girl said, 'I am going to the cinema tomorrow.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The girl said that she was going to the cinema the next day.",
        "The girl said that she is going to the cinema tomorrow.",
        "The girl said that she was going to the cinema tomorrow.",
        "The girl said that she would go to the cinema the next day."
      ],
      "answer": "The girl said that she was going to the cinema the next day.",
      "explanation": "'am going' (ચાલુ વર્તમાનકાળ) નું 'was going' (ચાલુ ભૂતકાળ) થાય છે. 'tomorrow' નું 'the next day' થાય છે."
    }
  ],
  "test-15": [
    {
      "question": "'Don't you know the way home?' I said to the boy. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked the boy if he didn't know the way home.",
        "I asked the boy if he knew the way home.",
        "I asked the boy don't you know the way home.",
        "I asked the boy that if he didn't know the way home."
      ],
      "answer": "I asked the boy if he didn't know the way home.",
      "explanation": "આ નકારાત્મક પ્રશ્નાર્થ વાક્ય છે. સંયોજક તરીકે 'if' વપરાશે. 'Don't you know' (સાદો વર્તમાનકાળ) નું 'if he didn't know' (સાદો ભૂતકાળ) થશે અને વાક્ય વિધાન બનશે."
    },
    {
      "question": "He said, 'I have often told you not to play with fire.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He reminded me that he had often told me not to play with fire.",
        "He told me that he had often told me not to play with fire.",
        "He said that he had often told you not to play with fire.",
        "He warned me not to play with fire."
      ],
      "answer": "He reminded me that he had often told me not to play with fire.",
      "explanation": "અહીં 'I have often told you' યાદ અપાવવાનો ભાવ દર્શાવે છે. તેથી 'reminded' Reporting Verb વધુ યોગ્ય છે. 'have told' નું 'had told' થશે. 'you' નું 'me' થશે."
    },
    {
      "question": "The boy said, 'Let me go out to play.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy requested that he might be allowed to go out to play.",
        "The boy wished to go out to play.",
        "The boy asked to let him go out to play.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "'Let me' વાળા વાક્યમાં પરવાનગી કે વિનંતીનો ભાવ હોય છે. 'requested that he might be allowed to...' એ સૌથી ઔપચારિક રીત છે. 'wished to' અને 'asked to' પણ સાચા અર્થ રજૂ કરે છે."
    },
    {
      "question": "She said, 'I couldn't come because I was ill.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she couldn't come because she was ill.",
        "She said that she couldn't have come because she was ill.",
        "She said that she hadn't been able to come because she was ill.",
        "She explained that she couldn't come because she was ill."
      ],
      "answer": "She said that she couldn't come because she was ill.",
      "explanation": "'couldn't' માં કોઈ ફેરફાર થતો નથી. 'was' એ કારણ દર્શાવતા ગૌણ વાક્યમાં છે, તેથી તે પણ બદલાશે નહીં. આખું વાક્ય એમ જ રહેશે."
    },
    {
      "question": "The speaker said, 'I will speak on this topic tomorrow.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The speaker said that he/she would speak on that topic the next day.",
        "The speaker said that he/she will speak on this topic tomorrow.",
        "The speaker said that he/she would speak on this topic the next day.",
        "The speaker announced that he/she would speak on that topic tomorrow."
      ],
      "answer": "The speaker said that he/she would speak on that topic the next day.",
      "explanation": "'will' નું 'would' થાય છે. 'this' નું 'that' થાય છે. 'tomorrow' નું 'the next day' થાય છે."
    },
    {
      "question": "He said to me, 'What a silly mistake you have made!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He exclaimed that I had made a very silly mistake.",
        "He told me that I had made a very silly mistake.",
        "He exclaimed what a silly mistake I had made.",
        "He exclaimed that you had made a very silly mistake."
      ],
      "answer": "He exclaimed that I had made a very silly mistake.",
      "explanation": "ઉદ્ગાર વાક્ય છે. 'exclaimed' વપરાશે. 'what a' ને બદલે 'very' વપરાશે. 'you' નું 'I' અને 'have made' નું 'had made' થશે."
    },
    {
      "question": "My mother said to my father, 'Have you brought my medicine?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "My mother asked my father if he had brought her medicine.",
        "My mother asked my father have you brought her medicine.",
        "My mother asked my father if you had brought my medicine.",
        "My mother asked my father if he has brought her medicine."
      ],
      "answer": "My mother asked my father if he had brought her medicine.",
      "explanation": "પ્રશ્નાર્થ વાક્ય છે, તેથી 'asked' અને સંયોજક 'if' વપરાશે. 'Have you brought' નું 'if he had brought' થશે. 'my' નું 'her' થશે."
    },
    {
      "question": "The spectators shouted, 'Well done, players!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The spectators applauded the players, saying that they had done well.",
        "The spectators shouted that the players had done well.",
        "The spectators encouraged the players that they did well.",
        "The spectators shouted well done to the players."
      ],
      "answer": "The spectators applauded the players, saying that they had done well.",
      "explanation": "'Well done' શાબાશી દર્શાવે છે. 'shouted' ને બદલે 'applauded' (વખાણ કર્યા) વધુ યોગ્ય છે, અને તેને 'saying that...' થી જોડવામાં આવે છે. 'done' એ ભૂતકૃદંત છે જે પૂર્ણકાળ સૂચવે છે."
    },
    {
      "question": "He said, 'We must obey the laws of the country.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that we must obey the laws of the country.",
        "He said that they must obey the laws of the country.",
        "He said that we had to obey the laws of the country.",
        "He said that they had to obey the laws of the country."
      ],
      "answer": "He said that we must obey the laws of the country.",
      "explanation": "જ્યારે 'must' નૈતિક કે કાયદાકીય ફરજ બતાવે, ત્યારે તેમાં ફેરફાર થતો નથી. 'we' નો ઉપયોગ સૌને લાગુ પડતો હોવાથી તે બદલાશે નહીં."
    },
    {
      "question": "I said to him, 'How long will you stay here?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked him how long he would stay there.",
        "I asked him how long would he stay there.",
        "I asked him how long he will stay here.",
        "I asked him that how long he would stay there."
      ],
      "answer": "I asked him how long he would stay there.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'asked' વપરાશે. 'How long' સંયોજક બનશે. વાક્ય વિધાનમાં ફેરવાશે. 'will' નું 'would', 'you' નું 'he' અને 'here' નું 'there' થશે."
    }
  ],
  "test-16": [
    {
      "question": "The student said, 'Sir, may I come in?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The student respectfully asked the teacher if he might come in.",
        "The student asked the teacher if he may come in.",
        "The student told the teacher if he might come in.",
        "The student requested the teacher to come in."
      ],
      "answer": "The student respectfully asked the teacher if he might come in.",
      "explanation": "આ પરવાનગી માંગતું પ્રશ્નાર્થ વાક્ય છે. 'Sir' માટે 'respectfully' ઉમેરાય છે. સંયોજક 'if' વપરાશે અને 'may' નું 'might' થશે. વાક્યને વિધાનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "He said, 'It is time we started for the station.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that it was time they had started for the station.",
        "He said that it was time they started for the station.",
        "He said that it is time we started for the station.",
        "He said that it would be time they started for the station."
      ],
      "answer": "He said that it was time they had started for the station.",
      "explanation": "'It is time' વાળી રચનામાં, 'started' (સાદો ભૂતકાળ) પૂર્ણ ભૂતકાળ ('had started') માં ફેરવાશે. 'is' નું 'was' અને 'we' નું 'they' થશે."
    },
    {
      "question": "'What happened?' she said. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked what had happened.",
        "She asked what happened.",
        "She asked that what had happened.",
        "She enquired what happened."
      ],
      "answer": "She asked what had happened.",
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય છે. 'What' પોતે જ કર્તા છે. 'happened' (સાદો ભૂતકાળ) પૂર્ણ ભૂતકાળ ('had happened') માં ફેરવાશે."
    },
    {
      "question": "She said, 'I wish I had a car.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She wished that she had had a car.",
        "She wished that she had a car.",
        "She said that she had a car.",
        "She exclaimed that she had a car."
      ],
      "answer": "She wished that she had had a car.",
      "explanation": "આ અવાસ્તવિક ઈચ્છા છે. 'said' નું 'wished' થાય. 'had' (અહીં સાદો ભૂતકાળ) નું 'had had' (પૂર્ણ ભૂતકાળ) થાય છે."
    },
    {
      "question": "The boy said, 'Let me have a piece of cake.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy expressed a wish to have a piece of cake.",
        "The boy asked to have a piece of cake.",
        "The boy said that he should have a piece of cake.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "અહીં 'Let me' ઈચ્છા વ્યક્ત કરે છે. તેથી 'expressed a wish to have' અથવા 'asked to have' બંને યોગ્ય છે. Reporting Verb 'wished for' પણ વાપરી શકાય."
    },
    {
      "question": "I said to the children, 'Do not make a noise.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I forbade the children to make a noise.",
        "I told the children not to make a noise.",
        "I ordered the children not to make a noise.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "નકારાત્મક આજ્ઞાર્થ વાક્ય છે. 'forbade' (મનાઈ કરી), 'told' (કહ્યું), 'ordered' (આદેશ આપ્યો) - ત્રણેય Reporting Verb ભાવ અનુસાર યોગ્ય છે. 'forbade' સાથે 'not' આવતું નથી."
    },
    {
      "question": "He said, 'I have been a teacher for ten years.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had been a teacher for ten years.",
        "He said that he has been a teacher for ten years.",
        "He said that he was a teacher for ten years.",
        "He told that he had been a teacher for ten years."
      ],
      "answer": "He said that he had been a teacher for ten years.",
      "explanation": "પૂર્ણ વર્તમાનકાળ ('have been') નું પૂર્ણ ભૂતકાળ ('had been') થાય છે. 'I' નું 'he' થશે."
    },
    {
      "question": "The officer said, 'Get out of my office.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The officer ordered me to get out of his office.",
        "The officer told me to get out of his office.",
        "The officer shouted at me to get out of his office.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "આજ્ઞાર્થ વાક્ય છે. ગુસ્સા અને અધિકારના ભાવ માટે 'ordered', 'shouted at', કે સામાન્ય રીતે 'told' પણ વાપરી શકાય. સાંભળનાર 'me' અને 'my' નું 'his' થશે."
    },
    {
      "question": "She said to her husband, 'Why do you look so worried?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked her husband why he looked so worried.",
        "She asked her husband why did he look so worried.",
        "She asked her husband why he looks so worried.",
        "She enquired of her husband why he looked so worried."
      ],
      "answer": "She asked her husband why he looked so worried.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'do you look' (સાદો વર્તમાનકાળ) નું 'he looked' (સાદો ભૂતકાળ) થશે અને વાક્ય વિધાન બનશે. 'enquired of' પણ વાપરી શકાય, પણ 'asked' વધુ સામાન્ય છે."
    },
    {
      "question": "He said, 'It is a cold day today.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that it was a cold day that day.",
        "He remarked that it was a cold day that day.",
        "He said that it is a cold day today.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ એક સામાન્ય વિધાન છે. Reporting Verb તરીકે 'said' ઉપરાંત 'remarked' (ટિપ્પણી કરી) પણ વાપરી શકાય છે. 'is' નું 'was' અને 'today' નું 'that day' થશે."
    }
  ],
  "test-17": [
    {
      "question": "He said to me, 'I did not see you at the party last night.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He told me that he had not seen me at the party the previous night.",
        "He told me that he did not see me at the party last night.",
        "He told me that he had not seen you at the party the previous night.",
        "He told me that he had not seen me at the party last night."
      ],
      "answer": "He told me that he had not seen me at the party the previous night.",
      "explanation": "સાદા ભૂતકાળનો નકાર ('did not see') પૂર્ણ ભૂતકાળના નકાર ('had not seen') માં ફેરવાશે. 'you' નું 'me' અને 'last night' નું 'the previous night' થશે."
    },
    {
      "question": "The teacher said to the boys, 'If you do your best, you will surely pass.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher told the boys that if they did their best, they would surely pass.",
        "The teacher told the boys that if you do your best, you will surely pass.",
        "The teacher told the boys that if they do their best, they will surely pass.",
        "The teacher told the boys that if they did their best, they will surely pass."
      ],
      "answer": "The teacher told the boys that if they did their best, they would surely pass.",
      "explanation": "આ શરતી વાક્ય પ્રકાર-1 છે. 'if' વાળું ગૌણ વાક્ય સાદા વર્તમાનકાળમાં છે, જે સાદા ભૂતકાળ ('did') માં ફેરવાશે. મુખ્ય વાક્યમાં 'will' નું 'would' થશે. 'you' અને 'your' નું 'they' અને 'their' થશે."
    },
    {
      "question": "She said, 'May your dream come true!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She wished that my dream might come true.",
        "She prayed that my dream might come true.",
        "She said that my dream may come true.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ શુભેચ્છાદર્શક વાક્ય છે. Reporting Verb તરીકે 'wished' કે 'prayed' બંને વાપરી શકાય. સાંભળનાર તરીકે 'me' ધારીને 'your' નું 'my' થાય છે. 'may' નું 'might' થાય છે."
    },
    {
      "question": "The boss said, 'Let the meeting begin.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boss ordered that the meeting should begin.",
        "The boss said to let the meeting begin.",
        "The boss ordered the meeting to begin.",
        "The boss proposed that the meeting should begin."
      ],
      "answer": "The boss ordered that the meeting should begin.",
      "explanation": "અહીં 'Let' થી શરૂ થતું વાક્ય આદેશ સૂચવે છે. તેથી 'ordered that... should' વાળી રચના વપરાશે. 'proposed' દરખાસ્ત માટે વપરાય, જે અહીં યોગ્ય નથી."
    },
    {
      "question": "He said to me, 'Whose house is this?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He asked me whose house that was.",
        "He asked me whose house is this.",
        "He asked me whose house was that.",
        "He asked me that whose house that was."
      ],
      "answer": "He asked me whose house that was.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'Whose house' સંયોજક બનશે. વાક્યને વિધાનમાં ફેરવીને 'that was' લખાશે. 'this' નું 'that' અને 'is' નું 'was' થશે."
    },
    {
      "question": "The child said, 'I want a balloon.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The child said that he/she wanted a balloon.",
        "The child demanded that he/she wanted a balloon.",
        "The child said that he/she wants a balloon.",
        "The child told that he/she wanted a balloon."
      ],
      "answer": "The child said that he/she wanted a balloon.",
      "explanation": "સાદું વિધાન વાક્ય છે. 'want' (સાદો વર્તમાનકાળ) નું 'wanted' (સાદો ભૂતકાળ) થશે. બાળક માટે 'he/she' બંને વાપરી શકાય."
    },
    {
      "question": "She said, 'What a terrible storm it is!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed that it was a terrible storm.",
        "She exclaimed that it was a very terrible storm.",
        "She exclaimed what a terrible storm it was.",
        "She said that it was a terrible storm."
      ],
      "answer": "She exclaimed that it was a very terrible storm.",
      "explanation": "ઉદ્ગાર વાક્ય છે. 'exclaimed' વપરાશે. 'what a' ને 'a very' માં ફેરવવું વધુ યોગ્ય છે, જોકે 'a' પણ ચાલી શકે. 'is' નું 'was' થશે."
    },
    {
      "question": "The Prime Minister said, 'Let there be peace in the world.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The Prime Minister wished that there should be peace in the world.",
        "The Prime Minister said that there should be peace in the world.",
        "The Prime Minister ordered that there be peace in the world.",
        "The Prime Minister prayed for peace in the world."
      ],
      "answer": "The Prime Minister wished that there should be peace in the world.",
      "explanation": "'Let there be...' વાળી રચના ઈચ્છા કે પ્રાર્થના વ્યક્ત કરે છે. તેથી Reporting Verb 'wished' કે 'prayed' વપરાય છે અને વાક્ય 'that there should be...' થી જોડાય છે."
    },
    {
      "question": "He said, 'I can speak three languages.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he could speak three languages.",
        "He said that he can speak three languages.",
        "He said that he would speak three languages.",
        "He boasted that he could speak three languages."
      ],
      "answer": "He said that he could speak three languages.",
      "explanation": "Reporting Verb ભૂતકાળમાં હોવાથી, 'can' નું 'could' થાય છે. 'boasted' (બડાઈ મારી) પણ ભાવ મુજબ વાપરી શકાય, પણ 'said' વધુ સામાન્ય અને સુરક્ષિત છે."
    },
    {
      "question": "The police said to the man, 'Where were you at 9 pm last night?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The police asked the man where he had been at 9 pm the previous night.",
        "The police asked the man where he was at 9 pm last night.",
        "The police enquired the man where had he been at 9 pm the previous night.",
        "The police asked the man where he had been at 9 pm last night."
      ],
      "answer": "The police asked the man where he had been at 9 pm the previous night.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'were' (સાદો ભૂતકાળ) નું 'had been' (પૂર્ણ ભૂતકાળ) થશે. 'last night' નું 'the previous night' થશે. વાક્ય વિધાન બનશે."
    }
  ],
  "test-18": [
    {
      "question": "He said to me, 'Which way should I go?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He asked me which way he should go.",
        "He asked me which way should he go.",
        "He asked me that which way he should go.",
        "He wanted to know which way he should go."
      ],
      "answer": "He asked me which way he should go.",
      "explanation": "આ WH-પ્રશ્નાર્થ વાક્ય છે. 'asked' વપરાશે. 'should' માં કોઈ ફેરફાર થતો નથી. વાક્યને વિધાનમાં ફેરવતા 'he should go' એમ લખાશે."
    },
    {
      "question": "'Help! Help!' she cried, 'I am drowning.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She cried for help, saying that she was drowning.",
        "She shouted for help and said that she was drowning.",
        "She cried that she was drowning.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "અહીં 'Help! Help!' મદદ માટેની બૂમ છે. તેથી, 'cried for help' કે 'shouted for help' યોગ્ય Reporting Verb છે. બાકીના વાક્યને 'saying that...' થી જોડી શકાય. 'am' નું 'was' થશે."
    },
    {
      "question": "The hermit said, 'May you all go to hell!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The hermit cursed that they might all go to hell.",
        "The hermit wished that they might all go to hell.",
        "The hermit said that they may all go to hell.",
        "The hermit angrily said that they might all go to hell."
      ],
      "answer": "The hermit cursed that they might all go to hell.",
      "explanation": "આ શ્રાપ (curse) આપતું વાક્ય છે. તેથી Reporting Verb તરીકે 'cursed' નો ઉપયોગ થાય છે. 'may' નું 'might' થાય છે."
    },
    {
      "question": "She said, 'We are all sinners.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that we are all sinners.",
        "She said that they were all sinners.",
        "She said that we were all sinners.",
        "She preached that we are all sinners."
      ],
      "answer": "She said that we are all sinners.",
      "explanation": "જ્યારે 'we' સમગ્ર માનવજાતનો ઉલ્લેખ કરતું હોય (સાર્વત્રિક સત્ય), ત્યારે 'we' બદલાતું નથી અને કાળ પણ બદલાતો નથી."
    },
    {
      "question": "The boys said, 'It is time we played a game.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boys said that it was time they had played a game.",
        "The boys said that it was time they played a game.",
        "The boys exclaimed that it was time they played a game.",
        "The boys said it is time they played a game."
      ],
      "answer": "The boys said that it was time they had played a game.",
      "explanation": "'It is time' + સાદો ભૂતકાળ વાળી રચનામાં, Indirect speech માં સાદા ભૂતકાળ ('played') ને પૂર્ણ ભૂતકાળ ('had played') માં ફેરવવામાં આવે છે. 'is' નું 'was' અને 'we' નું 'they' થાય છે."
    },
    {
      "question": "I said to him, 'Do you take sugar in your tea?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked him if he took sugar in his tea.",
        "I asked him if he takes sugar in his tea.",
        "I asked him do you take sugar in your tea.",
        "I asked him whether he took sugar in his tea."
      ],
      "answer": "I asked him if he took sugar in his tea.",
      "explanation": "આ પ્રશ્નાર્થ વાક્ય છે. 'Do you take' (સાદો વર્તમાનકાળ) નું 'if he took' (સાદો ભૂતકાળ) થશે. 'your' નું 'his' થશે. 'whether' પણ વાપરી શકાય."
    },
    {
      "question": "He said, 'What a lazy boy you are!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He exclaimed that I was a very lazy boy.",
        "He told me that I was a very lazy boy.",
        "He exclaimed what a lazy boy I was.",
        "He called me a very lazy boy."
      ],
      "answer": "He exclaimed that I was a very lazy boy.",
      "explanation": "ઉદ્ગાર વાક્ય છે. Reporting Verb 'exclaimed' વપરાશે. સાંભળનાર 'me' ધારીને 'you' નું 'I' થાય છે. વાક્યને વિધાનમાં ફેરવીને 'very' ઉમેરાય છે. 'called me a...' પણ એક વૈકલ્પિક રીત છે."
    },
    {
      "question": "The teacher said, 'Gandhi was born in Porbandar.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher said that Gandhi was born in Porbandar.",
        "The teacher said that Gandhi had been born in Porbandar.",
        "The teacher told that Gandhi was born in Porbandar.",
        "The teacher informed that Gandhi had been born in Porbandar."
      ],
      "answer": "The teacher said that Gandhi was born in Porbandar.",
      "explanation": "આ એક ઐતિહાસિક હકીકત છે. ઐતિહાસિક હકીકતોના કાળમાં Indirect speech માં કોઈ ફેરફાર થતો નથી."
    },
    {
      "question": "He said to me, 'Wait here until I return.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He asked me to wait there until he returned.",
        "He told me to wait here until I return.",
        "He ordered me to wait there until he returned.",
        "He asked me to wait there until he would return."
      ],
      "answer": "He asked me to wait there until he returned.",
      "explanation": "આજ્ઞાર્થ વાક્ય છે. 'told' કે 'asked' વાપરી શકાય. 'to' થી વાક્ય જોડાય છે. 'here' નું 'there' થાય. 'until' પછીના વાક્યમાં 'return' (વર્તમાનકાળ) નું 'returned' (ભૂતકાળ) થશે. 'I' નું 'he' થશે."
    },
    {
      "question": "She said, 'My husband is coming.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that her husband was coming.",
        "She said that my husband was coming.",
        "She said that her husband is coming.",
        "She told that her husband was coming."
      ],
      "answer": "She said that her husband was coming.",
      "explanation": "સાદું વિધાન વાક્ય છે. 'is coming' નું 'was coming' અને 'My' નું 'her' થશે."
    }
  ],
  "test-19": [
    {
      "question": "He said, 'Let us not say anything about this.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He suggested that they should not say anything about that.",
        "He proposed that they should not say anything about this.",
        "He said not to say anything about that.",
        "He suggested them not to say anything about that."
      ],
      "answer": "He suggested that they should not say anything about that.",
      "explanation": "નકારાત્મક દરખાસ્ત છે. 'suggested' કે 'proposed' સાથે 'that... should not' ની રચના વપરાય છે. 'this' નું 'that' થાય છે."
    },
    {
      "question": "The boy said, 'I have made a kite.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that he had made a kite.",
        "The boy said that he has made a kite.",
        "The boy said that I had made a kite.",
        "The boy said he made a kite."
      ],
      "answer": "The boy said that he had made a kite.",
      "explanation": "પૂર્ણ વર્તમાનકાળ ('have made') પૂર્ણ ભૂતકાળ ('had made') માં ફેરવાશે. 'I' નું 'he' થશે."
    },
    {
      "question": "'How did you do it?' he said to me. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He asked me how I had done it.",
        "He asked me how did I do it.",
        "He asked me how I did it.",
        "He asked me that how I had done it."
      ],
      "answer": "He asked me how I had done it.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'did you do' (સાદો ભૂતકાળ) નું 'I had done' (પૂર્ણ ભૂતકાળ) થશે અને વાક્ય વિધાન બનશે. 'you' નું 'I' થશે."
    },
    {
      "question": "She said, 'Oh dear! I have torn my dress.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed with regret that she had torn her dress.",
        "She said with sorrow that she had torn her dress.",
        "She exclaimed that she has torn her dress.",
        "She exclaimed Oh dear that she had torn her dress."
      ],
      "answer": "She exclaimed with regret that she had torn her dress.",
      "explanation": "'Oh dear!' પસ્તાવો કે દુઃખ બતાવે છે, તેથી 'exclaimed with regret/sorrow' યોગ્ય છે. 'have torn' નું 'had torn' થશે. 'my' નું 'her' થશે."
    },
    {
      "question": "The teacher said to the student, 'Why were you absent yesterday?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher asked the student why he had been absent the previous day.",
        "The teacher asked the student why he was absent the previous day.",
        "The teacher asked the student why was he absent the previous day.",
        "The teacher asked the student why he had been absent yesterday."
      ],
      "answer": "The teacher asked the student why he had been absent the previous day.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'were' (સાદો ભૂતકાળ) નું 'had been' (પૂર્ણ ભૂતકાળ) થશે. 'yesterday' નું 'the previous day' થશે."
    },
    {
      "question": "He said, 'I ought to help him.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he ought to help him.",
        "He said that he should help him.",
        "He said that he had to help him.",
        "He said that he ought to have helped him."
      ],
      "answer": "He said that he ought to help him.",
      "explanation": "'ought to' એ નૈતિક ફરજ દર્શાવતું modal છે અને તે Indirect speech માં બદલાતું નથી."
    },
    {
      "question": "The man said, 'Let me have some water, I am thirsty.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The man requested for some water as he was thirsty.",
        "The man said to let him have some water as he was thirsty.",
        "The man asked for some water because he is thirsty.",
        "The man requested for some water and said he was thirsty."
      ],
      "answer": "The man requested for some water as he was thirsty.",
      "explanation": "આ વિનંતી છે. 'Let me have' માટે 'requested for' વાપરી શકાય. બીજું વાક્ય કારણ દર્શાવે છે તેથી તેને 'as' થી જોડી શકાય. 'am' નું 'was' થશે."
    },
    {
      "question": "The mother said to the daughter, 'Did you see the movie?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The mother asked the daughter if she had seen the movie.",
        "The mother asked the daughter if she saw the movie.",
        "The mother asked the daughter did you see the movie.",
        "The mother asked the daughter that if she had seen the movie."
      ],
      "answer": "The mother asked the daughter if she had seen the movie.",
      "explanation": "પ્રશ્નાર્થ વાક્ય છે. 'Did you see' (સાદો ભૂતકાળ) નું 'if she had seen' (પૂર્ણ ભૂતકાળ) થશે. સંયોજક તરીકે 'if' વપરાશે."
    },
    {
      "question": "He said, 'What a pleasant surprise!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He exclaimed with delight that it was a pleasant surprise.",
        "He said that it was a pleasant surprise.",
        "He exclaimed what a pleasant surprise it was.",
        "He exclaimed that it was a very pleasant surprise."
      ],
      "answer": "He exclaimed with delight that it was a pleasant surprise.",
      "explanation": "ઉદ્ગાર વાક્ય છે જે આનંદ દર્શાવે છે. 'exclaimed with delight/joy' યોગ્ય Reporting Verb છે. વાક્યને વિધાનમાં ફેરવવામાં આવે છે."
    },
    {
      "question": "They said, 'We are planning to visit the museum next month.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "They said that they were planning to visit the museum the following month.",
        "They said that we are planning to visit the museum next month.",
        "They said that they are planning to visit the museum the following month.",
        "They said that they were planning to visit the museum next month."
      ],
      "answer": "They said that they were planning to visit the museum the following month.",
      "explanation": "'are planning' નું 'were planning' થશે. 'We' નું 'they' થશે અને 'next month' નું 'the following month' થશે."
    }
  ],
  "test-20": [
    {
      "question": "He said to me, 'You were not helping me.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He told me that I had not been helping him.",
        "He told me that you were not helping him.",
        "He told me that I was not helping him.",
        "He complained that I had not been helping him."
      ],
      "answer": "He told me that I had not been helping him.",
      "explanation": "ચાલુ ભૂતકાળ ('were not helping') નું ચાલુ પૂર્ણ ભૂતકાળ ('had not been helping') થશે. 'You' નું 'I' અને 'me' નું 'him' થશે. 'complained' પણ ભાવ મુજબ વાપરી શકાય."
    },
    {
      "question": "The officer said, 'If you confess your fault, you may be spared.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The officer said that if he confessed his fault, he might be spared.",
        "The officer said that if you confess your fault, you may be spared.",
        "The officer said that if he confessed his fault, he may be spared.",
        "The officer promised that if he confessed his fault, he might be spared."
      ],
      "answer": "The officer said that if he confessed his fault, he might be spared.",
      "explanation": "શરતી વાક્ય પ્રકાર-1 છે. 'confess' (વર્તમાનકાળ) નું 'confessed' (ભૂતકાળ) થશે. 'may' નું 'might' થશે. 'you' નું 'he' અને 'your' નું 'his' થશે."
    },
    {
      "question": "The saint said, 'Trust in God and do the right.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The saint advised us to trust in God and do the right.",
        "The saint said to trust in God and do the right.",
        "The saint preached that we should trust in God and do the right.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "આ ઉપદેશાત્મક આજ્ઞાર્થ વાક્ય છે. Reporting Verb તરીકે 'advised' કે 'preached' વાપરી શકાય. 'advised' સાથે 'to' infinitive આવે, જ્યારે 'preached' સાથે 'that...should' ની રચના આવે. 'us' કે 'we' સૌને લાગુ પડે છે."
    },
    {
      "question": "She said to me, 'Where are my books?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked me where her books were.",
        "She asked me where are her books.",
        "She asked me where her books are.",
        "She asked me that where her books were."
      ],
      "answer": "She asked me where her books were.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'asked' વપરાશે. 'where' સંયોજક બનશે. વાક્ય વિધાનમાં ફેરવાશે ('her books were'). 'my' નું 'her' અને 'are' નું 'were' થશે."
    },
    {
      "question": "He said, 'Goodbye, cruel world!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He bade the cruel world goodbye.",
        "He said goodbye to the cruel world.",
        "He exclaimed goodbye to the cruel world.",
        "He wished the cruel world goodbye."
      ],
      "answer": "He bade the cruel world goodbye.",
      "explanation": "'Goodbye' માટે Reporting verb 'bade' નો ઉપયોગ કરવો એ ઔપચારિક અને યોગ્ય રીત છે."
    },
    {
      "question": "I said to her, 'You must be quiet.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I told her that she had to be quiet.",
        "I told her that she must be quiet.",
        "I told her that she must have been quiet.",
        "I ordered her to be quiet."
      ],
      "answer": "I told her that she had to be quiet.",
      "explanation": "જ્યારે 'must' કોઈ ચોક્કસ સમયે પાળવાની ફરજ દર્શાવે, ત્યારે 'had to' નો ઉપયોગ થાય છે. 'ordered' પણ વાપરી શકાય, પણ 'told' વધુ સામાન્ય છે."
    },
    {
      "question": "The player said, 'Hurrah! My team has won the tournament.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The player exclaimed with joy that his team had won the tournament.",
        "The player said with joy that his team has won the tournament.",
        "The player exclaimed that his team won the tournament.",
        "The player exclaimed with joy that my team had won the tournament."
      ],
      "answer": "The player exclaimed with joy that his team had won the tournament.",
      "explanation": "'Hurrah!' આનંદ વ્યક્ત કરે છે. 'exclaimed with joy' વપરાશે. 'has won' નું 'had won' થશે. 'My' નું 'his' થશે."
    },
    {
      "question": "He said, 'I was a fool to trust her.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had been a fool to trust her.",
        "He confessed that he had been a fool to trust her.",
        "He said that he was a fool to trust her.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'was' (સાદો ભૂતકાળ) નું 'had been' (પૂર્ણ ભૂતકાળ) થશે. અહીં પસ્તાવો કે કબૂલાતનો ભાવ હોવાથી 'confessed' Reporting Verb પણ યોગ્ય છે."
    },
    {
      "question": "She said to her mother, 'Can I wear this dress tonight?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked her mother if she could wear that dress that night.",
        "She asked her mother if she can wear this dress tonight.",
        "She asked her mother could she wear that dress that night.",
        "She asked her mother if she could wear this dress that night."
      ],
      "answer": "She asked her mother if she could wear that dress that night.",
      "explanation": "પ્રશ્નાર્થ વાક્ય છે. 'asked' અને 'if' વપરાશે. 'can' નું 'could', 'this' નું 'that', અને 'tonight' નું 'that night' થશે."
    },
    {
      "question": "The father said, 'Let's plan a trip to Goa.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The father proposed that they should plan a trip to Goa.",
        "The father suggested that they should plan a trip to Goa.",
        "The father said to plan a trip to Goa.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Let's' વાળા દરખાસ્તસૂચક વાક્યમાં 'proposed' કે 'suggested' સાથે 'that...should' ની રચના વપરાય છે."
    }
  ],
  "test-21": [
    {
      "question": "'You are a cheat,' she said to me, 'I will never trust you again.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She called me a cheat and said that she would never trust me again.",
        "She told me I was a cheat and would never trust me again.",
        "She called me a cheat and I will never trust you again.",
        "She exclaimed that I was a cheat and she would never trust me again."
      ],
      "answer": "She called me a cheat and said that she would never trust me again.",
      "explanation": "અહીં બે વાક્યો છે. પહેલા વાક્યમાં 'You are a cheat' એ આરોપ છે, તેથી Reporting Verb 'called' (કહીને બોલાવ્યો) વાપરી શકાય. બીજા વાક્યને 'and said that' થી જોડી શકાય. 'will' નું 'would' અને 'you' નું 'me' થશે."
    },
    {
      "question": "He said, 'If I were you, I would not do that.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that if he had been me, he would not have done that.",
        "He said that if he were me, he would not do that.",
        "He advised me not to do that.",
        "Both B and C"
      ],
      "answer": "Both B and C",
      "explanation": "આ શરતી વાક્ય પ્રકાર-2 છે, જે સલાહ આપે છે. નિયમ મુજબ તેમાં કાળ બદલાતો નથી ('were' નું 'were' અને 'would' નું 'would' રહે છે). તેથી વિકલ્પ B સાચો છે. જોકે, આ વાક્યનો મુખ્ય ભાવ સલાહ આપવાનો છે, તેથી 'He advised me not to do that.' પણ એકદમ સાચો અને વધુ પ્રચલિત જવાબ છે."
    },
    {
      "question": "The boy said, 'Mother, please give me another cookie. I am still hungry.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy requested his mother to give him another cookie as he was still hungry.",
        "The boy told his mother to give him another cookie and said that he was still hungry.",
        "The boy requested his mother for another cookie because I am still hungry.",
        "The boy begged his mother for another cookie because he was still hungry."
      ],
      "answer": "The boy requested his mother to give him another cookie as he was still hungry.",
      "explanation": "પહેલું વાક્ય વિનંતીસૂચક આજ્ઞાર્થ છે ('requested...to give...'). બીજું વાક્ય કારણ દર્શાવે છે, તેથી તેને 'as' કે 'because' થી જોડી શકાય. 'am' નું 'was' થશે."
    },
    {
      "question": "'By God!' he said, 'I have not cheated you.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He swore by God that he had not cheated me.",
        "He said by God that he had not cheated me.",
        "He swore that he has not cheated me.",
        "He swore by God that he had not cheated you."
      ],
      "answer": "He swore by God that he had not cheated me.",
      "explanation": "'By God!' જેવા સોગંદ લેવા માટેના શબ્દો માટે Reporting Verb 'swore' (સોગંદ ખાધા) નો ઉપયોગ થાય છે. 'have not cheated' નું 'had not cheated' અને 'you' નું 'me' (સાંભળનાર તરીકે ધારીને) થશે."
    },
    {
      "question": "She said, 'Though this dress is expensive, I will buy it.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that though that dress was expensive, she would buy it.",
        "She said that though this dress was expensive, she would buy it.",
        "She said that though that dress is expensive, she will buy it.",
        "She said that that dress was expensive but she would buy it."
      ],
      "answer": "She said that though that dress was expensive, she would buy it.",
      "explanation": "આ મિશ્ર વાક્ય છે. 'though' વાળા ગૌણ વાક્યમાં 'this' નું 'that' અને 'is' નું 'was' થશે. મુખ્ય વાક્યમાં 'will' નું 'would' થશે."
    },
    {
      "question": "He said, 'When I was a student, I used to get up at 5 a.m.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that when he was a student, he used to get up at 5 a.m.",
        "He said that when he had been a student, he used to get up at 5 a.m.",
        "He said that when he was a student, he had used to get up at 5 a.m.",
        "He said that when he had been a student, he had got up at 5 a.m."
      ],
      "answer": "He said that when he was a student, he used to get up at 5 a.m.",
      "explanation": "જ્યારે 'when' વાળું ગૌણ વાક્ય ભૂતકાળનો કોઈ ચોક્કસ સમય દર્શાવે, ત્યારે તેના કાળમાં ફેરફાર થતો નથી. 'used to' માં પણ ફેરફાર થતો નથી."
    },
    {
      "question": "The Fox said to the Grapes, 'You are sour.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The Fox said that the Grapes were sour.",
        "The Fox told the Grapes that they were sour.",
        "The Fox remarked that the Grapes were sour.",
        "The Fox called the Grapes sour."
      ],
      "answer": "The Fox called the Grapes sour.",
      "explanation": "આ વાર્તાનો જાણીતો પ્રસંગ છે. અહીં સીધું કહેવાને બદલે 'દ્રાક્ષ ખાટી છે' એવું કહીને બોલાવી. તેથી 'called the Grapes sour' (દ્રાક્ષને ખાટી કહી) એ સૌથી યોગ્ય અને ભાવવાહી રૂપાંતર છે. જોકે, અન્ય વિકલ્પો પણ વ્યાકરણની દ્રષ્ટિએ ખોટા નથી."
    },
    {
      "question": "'How do you do, Mrs. Das?' said Mr. Sharma. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "Mr. Sharma greeted Mrs. Das.",
        "Mr. Sharma asked Mrs. Das how she did.",
        "Mr. Sharma asked Mrs. Das how do you do.",
        "Mr. Sharma asked Mrs. Das how she was."
      ],
      "answer": "Mr. Sharma greeted Mrs. Das.",
      "explanation": "'How do you do?' એ એક ઔપચારિક અભિવાદન (greeting) છે, તે ખરેખર પ્રશ્ન નથી. તેનો જવાબ પણ 'How do you do?' જ હોય છે. તેથી, Indirect Speech માં તેને 'greeted' (અભિવાદન કર્યું) તરીકે દર્શાવાય છે."
    },
    {
      "question": "The boy said, 'It is useless to cry over spilt milk.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that it is useless to cry over spilt milk.",
        "The boy said that it was useless to cry over spilt milk.",
        "The boy remarked that it is useless to cry over spilt milk.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "'To cry over spilt milk' એક કહેવત છે. કહેવતોના કાળમાં ફેરફાર થતો નથી. Reporting verb તરીકે 'said' કે 'remarked' (ટિપ્પણી કરી) બંને વાપરી શકાય."
    },
    {
      "question": "She said, 'What if the train is late?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She wondered what would happen if the train was late.",
        "She asked what would happen if the train was late.",
        "She asked what if the train was late.",
        "She worried what if the train were late."
      ],
      "answer": "She wondered what would happen if the train was late.",
      "explanation": "'What if...?' વાળી રચના ચિંતા કે શંકા વ્યક્ત કરે છે અને તે એક અધૂરો પ્રશ્ન છે. Indirect Speech માં તેને 'wondered what would happen if...' જેવી રચનાથી પૂર્ણ કરવામાં આવે છે. 'is' નું 'was' થશે."
    }
  ],
  "test-22": [
    {
      "question": "The accused said to the judge, 'I am innocent. I did not commit this crime.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The accused pleaded that he was innocent and that he had not committed that crime.",
        "The accused told the judge that he was innocent and had not committed that crime.",
        "The accused pleaded his innocence and said he did not commit that crime.",
        "The accused pleaded that he is innocent and he had not committed that crime."
      ],
      "answer": "The accused pleaded that he was innocent and that he had not committed that crime.",
      "explanation": "આરોપી જજ સમક્ષ દલીલ કરે છે, તેથી 'pleaded' (દલીલ કરી) યોગ્ય Reporting Verb છે. બે વાક્યોને 'and that' થી જોડી શકાય. 'am' નું 'was', 'did not commit' નું 'had not committed', અને 'this' નું 'that' થશે."
    },
    {
      "question": "He said, 'Let it rain as hard as it will, I must go.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he must go however hard it might rain.",
        "He was determined to go however hard it might rain.",
        "He said that even if it rained hard, he had to go.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "આ વાક્ય દ્રઢ નિશ્ચય બતાવે છે. 'Let it rain...' નો અર્થ 'ગમે તેટલો વરસાદ પડે...' થાય છે. તેને 'however hard it might rain' તરીકે રજૂ કરી શકાય. 'determined' (કૃત્નિશ્ચયી) જેવો શબ્દ પણ ભાવ રજૂ કરે છે. 'must' અહીં 'had to' માં પણ ફેરવી શકાય. ત્રણેય વિકલ્પો અર્થની દ્રષ્ટિએ સાચા છે."
    },
    {
      "question": "She said, 'I must go to the wedding, whether I am invited or not.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she had to go to the wedding, whether she was invited or not.",
        "She was determined to go to the wedding, whether she was invited or not.",
        "She said that she must go to the wedding, whether she was invited or not.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'must' અહીં મજબૂત ઈરાદો કે ફરજ દર્શાવે છે, જેનું 'had to' થાય છે. વાક્યનો એકંદર ભાવ દ્રઢ નિશ્ચયનો છે, તેથી 'was determined' પણ એક ઉત્તમ રીત છે. 'am' નું 'was' થશે."
    },
    {
      "question": "The boy said, 'Thank you, madam, for your help.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy respectfully thanked the lady for her help.",
        "The boy thanked the madam for her help.",
        "The boy said thank you to the madam for her help.",
        "The boy told the madam thank you for her help."
      ],
      "answer": "The boy respectfully thanked the lady for her help.",
      "explanation": "'Thank you' ને Reporting verb 'thanked' માં ફેરવાય છે. 'madam' જેવા આદરણીય શબ્દો માટે 'respectfully' ઉમેરવામાં આવે છે અને 'madam' ને 'the lady' માં ફેરવી શકાય છે. 'your' નું 'her' થશે."
    },
    {
      "question": "'You liar!' he said. 'You have deceived me.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He called me a liar and accused me of having deceived him.",
        "He called me a liar and said that I had deceived him.",
        "He said I was a liar and I have deceived him.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "પહેલા ભાગમાં 'You liar!' એ સંબોધન છે, જેને 'He called me a liar' તરીકે ફેરવી શકાય. બીજા ભાગમાં આરોપ છે, જેને 'and said that...' અથવા 'and accused me of...' થી જોડી શકાય. 'have deceived' નું 'had deceived' અને 'you'/'me' નું 'me'/'him' થશે."
    },
    {
      "question": "He said, 'If my car were working, I would drive you to the city.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that if his car were working, he would drive me to the city.",
        "He said that if his car had been working, he would have driven me to the city.",
        "He told me that if his car was working, he would drive me to the city.",
        "He said that if my car were working, he would drive me to the city."
      ],
      "answer": "He said that if his car were working, he would drive me to the city.",
      "explanation": "આ શરતી વાક્ય પ્રકાર-2 (અવાસ્તવિક વર્તમાન) છે. નિયમ મુજબ, આવા વાક્યોમાં Indirect Speech માં કાળ બદલાતો નથી. ફક્ત સર્વનામ 'my' નું 'his' અને 'you' નું 'me' થશે."
    },
    {
      "question": "The king said, 'Let the next prisoner be brought in.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The king ordered that the next prisoner should be brought in.",
        "The king ordered them to bring the next prisoner in.",
        "The king commanded that the next prisoner be brought in.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "આ રાજાનો આદેશ છે. 'ordered' કે 'commanded' બંને વાપરી શકાય. તેને 'that...should be' અથવા 'to' infinitive થી જોડી શકાય. '...that the prisoner be brought in' (subjunctive mood) પણ એક ઔપચારિક અને સાચી રીત છે."
    },
    {
      "question": "'Which of you has done this?' the teacher asked. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher asked which of them had done that.",
        "The teacher asked which of you had done this.",
        "The teacher demanded to know which of them had done that.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. શિક્ષકના ગુસ્સાના ભાવને રજૂ કરવા 'demanded to know' વધુ યોગ્ય છે, પણ 'asked' પણ સાચું છે. 'you' નું 'them', 'has done' નું 'had done' અને 'this' નું 'that' થશે."
    },
    {
      "question": "He said, 'I must remind you of your promise.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he must remind me of my promise.",
        "He said that he had to remind me of my promise.",
        "He told me that he had to remind me of my promise.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "જ્યારે 'must' યાદ અપાવવાની ફરજ દર્શાવે, ત્યારે તે બદલાતું નથી. જોકે, તેને 'had to' માં પણ ફેરવી શકાય છે. 'said' ને 'told' માં પણ ફેરવી શકાય કારણકે સાંભળનાર 'me' સ્પષ્ટ છે. 'you' નું 'me' અને 'your' નું 'my' થશે."
    },
    {
      "question": "She said, 'So help me, Heaven! I will not sin again.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She called upon Heaven to witness her resolve that she would not sin again.",
        "She swore by Heaven that she would not sin again.",
        "She asked Heaven to help her and resolved that she would not sin again.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "'So help me, Heaven!' એ સ્વર્ગને સાક્ષી રાખીને સોગંદ લેવાની એક રીત છે. તેને 'called upon Heaven to witness' (સ્વર્ગને સાક્ષી તરીકે બોલાવ્યું), 'swore by Heaven' (સ્વર્ગના સોગંદ ખાધા), કે 'asked Heaven to help her and resolved' (સ્વર્ગને મદદ કરવા કહીને સંકલ્પ કર્યો) - આ બધી રીતે વ્યક્ત કરી શકાય છે."
    }
  ],
  "test-23": [
    {
      "question": "He said, 'Though he is my relative, I shall not spare him.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that though he was his relative, he would not spare him.",
        "He said that though he is his relative, he would not spare him.",
        "He said that though he was his relative, he shall not spare him.",
        "He admitted that though he was his relative, he would not spare him."
      ],
      "answer": "He said that though he was his relative, he would not spare him.",
      "explanation": "'Though' વાળા મિશ્ર વાક્યમાં, બંને ભાગના કાળ બદલાશે. 'is' નું 'was', 'shall' નું 'would' (કારણ કે ત્રીજો પુરુષ છે) થશે. 'my' નું 'his' થશે."
    },
    {
      "question": "The Prime Minister said, 'Let no one disturb the peace.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The Prime Minister ordered that no one should disturb the peace.",
        "The Prime Minister urged that no one should disturb the peace.",
        "The Prime Minister said that no one should disturb the peace.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ એક મજબૂત આદેશ કે આગ્રહ છે. 'ordered' (આદેશ આપ્યો) કે 'urged' (આગ્રહ કર્યો) બંને Reporting verb યોગ્ય છે. વાક્ય 'that no one should...' થી જોડાશે."
    },
    {
      "question": "'Are you coming with us?' I said to him. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked him if he was coming with us.",
        "I asked him are you coming with us.",
        "I asked him if he is coming with us.",
        "I asked him that if he was coming with us."
      ],
      "answer": "I asked him if he was coming with us.",
      "explanation": "આ પ્રશ્નાર્થ વાક્ય છે. સંયોજક તરીકે 'if' વપરાશે. 'Are you coming' (ચાલુ વર્તમાનકાળ) નું 'if he was coming' (ચાલુ ભૂતકાળ) થશે. 'us' બદલાશે નહીં કારણકે બોલનાર 'I' નો સમાવેશ થાય છે."
    },
    {
      "question": "She said, 'I wish I had been born in a royal family.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She wished that she had been born in a royal family.",
        "She wished that she was born in a royal family.",
        "She said that she had been born in a royal family.",
        "She wished that she would be born in a royal family."
      ],
      "answer": "She wished that she had been born in a royal family.",
      "explanation": "અહીં 'I wish' સાથે પૂર્ણ ભૂતકાળ ('had been') નો ઉપયોગ થયો છે, જે એક અશક્ય ઈચ્છા દર્શાવે છે. Indirect Speech માં Reporting verb 'wished' થશે, પણ Reported Speech ના કાળમાં કોઈ ફેરફાર નહીં થાય."
    },
    {
      "question": "'Where do you live?' asked the stranger. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The stranger asked where I lived.",
        "The stranger enquired where I lived.",
        "The stranger asked where do I live.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'asked' કે 'enquired' બંને વાપરી શકાય. 'do you live' (સાદો વર્તમાનકાળ) નું 'I lived' (સાદો ભૂતકાળ) થશે. સાંભળનાર 'me' ધારી લેવાનો છે."
    },
    {
      "question": "The boy said, 'What a piece of work is man!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy exclaimed that man is a wonderful piece of work.",
        "The boy said that man is a wonderful piece of work.",
        "The boy exclaimed what a piece of work man is.",
        "The boy remarked that man is a wonderful piece of work."
      ],
      "answer": "The boy exclaimed that man is a wonderful piece of work.",
      "explanation": "આ શેક્સપિયરનું પ્રખ્યાત ઉદ્ગાર વાક્ય છે, જે સાર્વત્રિક સત્ય જેવું છે. તેથી કાળ બદલાશે નહીં. 'exclaimed' કે 'remarked' વાપરી શકાય. 'what a piece of work' ને 'a wonderful piece of work' માં ફેરવવું યોગ્ય છે."
    },
    {
      "question": "He said, 'I would have helped you if you had asked me.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he would have helped me if I had asked him.",
        "He said that he would have helped me if I had been asked him.",
        "He said that he would help me if I had asked him.",
        "He said that he would have helped you if you had asked him."
      ],
      "answer": "He said that he would have helped me if I had asked him.",
      "explanation": "આ શરતી વાક્ય પ્રકાર-3 (અશક્ય ભૂતકાળ) છે. આવા વાક્યોના કાળમાં Indirect speech માં કોઈ ફેરફાર થતો નથી. ફક્ત સર્વનામો બદલાશે: 'you' નું 'me' અને 'me' નું 'him'."
    },
    {
      "question": "She said, 'My son will be back on Friday.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that her son would be back on Friday.",
        "She said that her son will be back on Friday.",
        "She said that my son would be back on Friday.",
        "She hoped that her son would be back on Friday."
      ],
      "answer": "She said that her son would be back on Friday.",
      "explanation": "સાદું ભવિષ્યકાળનું વાક્ય છે. 'will be' નું 'would be' થશે અને 'My' નું 'her' થશે. 'on Friday' માં કોઈ ફેરફાર નહીં થાય."
    },
    {
      "question": "The teacher said, 'Who taught you grammar?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher asked who had taught me grammar.",
        "The teacher asked who taught me grammar.",
        "The teacher asked that who had taught me grammar.",
        "The teacher wanted to know who taught you grammar."
      ],
      "answer": "The teacher asked who had taught me grammar.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે, જેમાં 'who' કર્તા છે. 'taught' (સાદો ભૂતકાળ) નું 'had taught' (પૂર્ણ ભૂતકાળ) થશે. 'you' નું 'me' (સાંભળનાર તરીકે ધારીને) થશે."
    },
    {
      "question": "He said to his master, 'Let me go home. My wife is ill.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He requested his master to let him go home as his wife was ill.",
        "He told his master to let him go home because his wife was ill.",
        "He requested his master that he might be allowed to go home as his wife was ill.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "'Let me go' વિનંતી સૂચવે છે. તેને 'requested... to let him go' અથવા વધુ ઔપચારિક રીતે 'requested that he might be allowed to go' તરીકે ફેરવી શકાય. બીજા વાક્યને 'as' કે 'because' થી જોડી શકાય. 'is' નું 'was' થશે."
    }
  ],
  "test-24": [
    {
      "question": "She said, 'Alas! I could not save my friend.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed with sorrow that she could not save her friend.",
        "She exclaimed with sorrow that she had not been able to save her friend.",
        "She said with sorrow that she could not save her friend.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Alas!' દુઃખ વ્યક્ત કરે છે. 'exclaimed with sorrow' યોગ્ય છે. 'could not' માં ફેરફાર થતો નથી, પણ તેને 'had not been able to' માં પણ ફેરવી શકાય છે, જે અસમર્થતા પર વધુ ભાર મૂકે છે. બંને વ્યાકરણની દ્રષ્ટિએ સ્વીકાર્ય છે."
    },
    {
      "question": "He said, 'I was writing a novel, which is now finished.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had been writing a novel, which was then finished.",
        "He said that he was writing a novel, which was now finished.",
        "He said that he had been writing a novel, which is now finished.",
        "He said that he wrote a novel, which was then finished."
      ],
      "answer": "He said that he had been writing a novel, which was then finished.",
      "explanation": "'was writing' (ચાલુ ભૂતકાળ) નું 'had been writing' (ચાલુ પૂર્ણ ભૂતકાળ) થશે. 'which' પછીના વાક્યમાં 'is' નું 'was' અને 'now' નું 'then' થશે."
    },
    {
      "question": "The President said, 'Let us unite to fight the enemy.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The President urged the people to unite to fight the enemy.",
        "The President suggested that they should unite to fight the enemy.",
        "The President said that they should unite to fight the enemy.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ વાક્ય આહ્વાન કે દરખાસ્ત સૂચવે છે. 'urged the people to...' (લોકોને આગ્રહ કર્યો કે...) એ ભાવવાહી રૂપાંતર છે. 'suggested that they should...' પણ વ્યાકરણની દ્રષ્ટિએ સાચું છે."
    },
    {
      "question": "'What do you want?' she said to him. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked him what he wanted.",
        "She asked him what did he want.",
        "She asked him what he wants.",
        "She asked him that what he wanted."
      ],
      "answer": "She asked him what he wanted.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'do you want' (સાદો વર્તમાનકાળ) નું 'he wanted' (સાદો ભૂતકાળ) થશે. વાક્ય વિધાન બનશે."
    },
    {
      "question": "He said, 'I saw this man long ago.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had seen that man long before.",
        "He said that he saw that man long before.",
        "He said that he had seen this man long ago.",
        "He said that he had seen that man long ago."
      ],
      "answer": "He said that he had seen that man long before.",
      "explanation": "'saw' (સાદો ભૂતકાળ) નું 'had seen' (પૂર્ણ ભૂતકાળ) થશે. 'this' નું 'that' અને 'ago' નું 'before' થાય છે."
    },
    {
      "question": "The teacher said to me, 'What is the matter?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher asked me what the matter was.",
        "The teacher asked me what is the matter.",
        "The teacher asked me what the matter is.",
        "The teacher asked me that what the matter was."
      ],
      "answer": "The teacher asked me what the matter was.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'asked' વપરાશે. 'what' સંયોજક બનશે. વાક્યને વિધાનમાં ફેરવીને 'the matter was' લખાશે. 'is' નું 'was' થશે."
    },
    {
      "question": "She said, 'My uncle came yesterday, but he will leave tomorrow.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that her uncle had come the previous day, but he would leave the next day.",
        "She said that her uncle came yesterday, but he would leave tomorrow.",
        "She said that her uncle had come the previous day, but he will leave the next day.",
        "She said that her uncle had come yesterday, but he would leave tomorrow."
      ],
      "answer": "She said that her uncle had come the previous day, but he would leave the next day.",
      "explanation": "આ સંયુક્ત વાક્ય છે. પહેલા ભાગમાં 'came' (સાદો ભૂતકાળ) નું 'had come' (પૂર્ણ ભૂતકાળ) અને 'yesterday' નું 'the previous day' થશે. બીજા ભાગમાં 'will leave' નું 'would leave' અને 'tomorrow' નું 'the next day' થશે. 'My' નું 'her' થશે."
    },
    {
      "question": "The captain said, 'Let us not waste our time in idle talk.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The captain urged his men not to waste their time in idle talk.",
        "The captain proposed that they should not waste their time in idle talk.",
        "The captain told his men not to waste our time in idle talk.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ નકારાત્મક દરખાસ્ત કે આગ્રહ છે. 'urged... not to...' અને 'proposed that they should not...' બંને રચનાઓ સાચી છે. 'us' અને 'our' નું 'his men' અને 'their' માં રૂપાંતર કરી શકાય."
    },
    {
      "question": "He said, 'Phew! It is very hot today.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He exclaimed that it was very hot that day.",
        "He said that it was very hot that day.",
        "He exclaimed that it is very hot today.",
        "He remarked that it was very hot that day."
      ],
      "answer": "He exclaimed that it was very hot that day.",
      "explanation": "'Phew!' એ ગરમી કે થાકનો ભાવ વ્યક્ત કરતો ઉદ્ગાર છે. Reporting Verb 'exclaimed' કે 'remarked' વાપરી શકાય. 'is' નું 'was' અને 'today' નું 'that day' થશે."
    },
    {
      "question": "I said to the students, 'Why have you been making a noise since yesterday?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked the students why they had been making a noise since the previous day.",
        "I asked the students why have you been making a noise since yesterday.",
        "I asked the students why they have been making a noise since the previous day.",
        "I asked the students why had they been making a noise since the previous day."
      ],
      "answer": "I asked the students why they had been making a noise since the previous day.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'have you been making' (ચાલુ પૂર્ણ વર્તમાનકાળ) નું 'they had been making' (ચાલુ પૂર્ણ ભૂતકાળ) થશે. 'yesterday' નું 'the previous day' થશે."
    }
  ],
  "test-25": [
    {
      "question": "The dying man said, 'I was a sinner, may God forgive me.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The dying man confessed that he had been a sinner and prayed that God might forgive him.",
        "The dying man said that he was a sinner and prayed God to forgive him.",
        "The dying man confessed that he was a sinner and asked God to forgive him.",
        "The dying man confessed that he had been a sinner and prayed that God might forgive me."
      ],
      "answer": "The dying man confessed that he had been a sinner and prayed that God might forgive him.",
      "explanation": "આ મિશ્ર વાક્ય છે. પહેલો ભાગ કબૂલાત છે, તેથી 'confessed' વપરાશે અને 'was' નું 'had been' થશે. બીજો ભાગ પ્રાર્થના છે, તેથી 'and prayed that' થી જોડાશે, અને 'may' નું 'might' અને 'me' નું 'him' થશે."
    },
    {
      "question": "She said, 'I did not see the signal.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she had not seen the signal.",
        "She said that she did not see the signal.",
        "She said that she has not seen the signal.",
        "She denied seeing the signal."
      ],
      "answer": "She said that she had not seen the signal.",
      "explanation": "સાદા ભૂતકાળનો નકાર ('did not see') પૂર્ણ ભૂતકાળના નકાર ('had not seen') માં ફેરવાશે. 'denied seeing the signal' પણ એક વૈકલ્પિક સાચી રીત છે."
    },
    {
      "question": "He said to me, 'I expect you to attend the function.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He told me that he expected me to attend the function.",
        "He told me that he expects me to attend the function.",
        "He told me that I expected him to attend the function.",
        "He told me that he expected you to attend the function."
      ],
      "answer": "He told me that he expected me to attend the function.",
      "explanation": "'said to' નું 'told' થશે. 'expect' નું 'expected' થશે. 'I' નું 'he' અને 'you' નું 'me' થશે."
    },
    {
      "question": "The boy said, 'Let's clean our room first.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy suggested that they should clean their room first.",
        "The boy proposed that they should clean their room first.",
        "The boy said to clean their room first.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "દરખાસ્તસૂચક વાક્ય છે. 'suggested' કે 'proposed' સાથે 'that...should' ની રચના વપરાય છે. 'our' નું 'their' થશે."
    },
    {
      "question": "The saint said to his disciples, 'What you sow, so shall you reap.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The saint preached to his disciples that as they sowed, so they would reap.",
        "The saint told his disciples that what they sow, so they shall reap.",
        "The saint advised his disciples that what they sowed, so they would reap.",
        "The saint preached that as you sow, so you will reap."
      ],
      "answer": "The saint preached to his disciples that as they sowed, so they would reap.",
      "explanation": "આ એક કહેવત જેવું વાક્ય છે, જે ઉપદેશ આપે છે. 'preached' (ઉપદેશ આપ્યો) યોગ્ય verb છે. 'What you sow...' ને 'as they sowed...' માં ફેરવી શકાય. 'sow' નું 'sowed' અને 'shall reap' નું 'would reap' થશે. 'you' નું 'they' થશે."
    },
    {
      "question": "He said, 'I must have left my keys in the car.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he must have left his keys in the car.",
        "He thought that he might have left his keys in the car.",
        "He said that he had to have left his keys in the car.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "જ્યારે 'must have' ભૂતકાળની શક્યતા કે અનુમાન દર્શાવે, ત્યારે તેમાં ફેરફાર થતો નથી. આ અનુમાન હોવાથી, 'said' ને બદલે 'thought' કે 'surmised' જેવા શબ્દો પણ વાપરી શકાય છે."
    },
    {
      "question": "'How beautiful the rain is!' she said. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed that the rain was very beautiful.",
        "She exclaimed how beautiful the rain was.",
        "She said that the rain was very beautiful.",
        "She exclaimed that the rain is very beautiful."
      ],
      "answer": "She exclaimed that the rain was very beautiful.",
      "explanation": "ઉદ્ગાર વાક્ય છે. 'exclaimed' વપરાશે. 'How beautiful' ને 'very beautiful' માં ફેરવીને વાક્યને વિધાન બનાવાય છે. 'is' નું 'was' થશે."
    },
    {
      "question": "The judge said to the witness, 'Do you have anything to say?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The judge asked the witness if he had anything to say.",
        "The judge asked the witness if he has anything to say.",
        "The judge asked the witness do you have anything to say.",
        "The judge enquired of the witness if he had anything to say."
      ],
      "answer": "The judge asked the witness if he had anything to say.",
      "explanation": "પ્રશ્નાર્થ વાક્ય છે. 'asked' અને 'if' વપરાશે. 'do you have' નું 'if he had' થશે. 'enquired of' પણ વાપરી શકાય."
    },
    {
      "question": "He said, 'When I lived in Delhi, my neighbours often helped me.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that when he lived in Delhi, his neighbours had often helped him.",
        "He said that when he had lived in Delhi, his neighbours had often helped him.",
        "He said that when he lived in Delhi, his neighbours often helped him.",
        "He said that when he had lived in Delhi, his neighbours often helped him."
      ],
      "answer": "He said that when he lived in Delhi, his neighbours had often helped him.",
      "explanation": "'when' વાળું ગૌણ વાક્ય સમય દર્શાવે છે, તેથી તેનો કાળ ('lived') બદલાશે નહીં. મુખ્ય વાક્ય 'my neighbours often helped me' (સાદો ભૂતકાળ) પૂર્ણ ભૂતકાળ ('his neighbours had often helped him') માં ફેરવાશે."
    },
    {
      "question": "The girl said, 'I would study hard if I were a student again.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The girl said that she would study hard if she were a student again.",
        "The girl wished that she could study hard by being a student again.",
        "The girl said that she would have studied hard if she had been a student again.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ શરતી વાક્ય પ્રકાર-2 છે, જે અવાસ્તવિક ઈચ્છા દર્શાવે છે. નિયમ મુજબ કાળ બદલાતો નથી (વિકલ્પ A). જોકે, આ એક ઈચ્છા હોવાથી તેને 'The girl wished that...' તરીકે પણ રજૂ કરી શકાય છે (વિકલ્પ B)."
    }
  ],
  "test-26": [
    {
      "question": "He said to me, 'I should have warned you.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He told me that he should have warned me.",
        "He regretted that he had not warned me.",
        "He said that he should have warned me.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'should have' + V3 ભૂતકાળની ન થયેલી ક્રિયા માટેનો અફસોસ બતાવે છે. તેથી, વાક્ય એમનું એમ રાખી શકાય (વિકલ્પ A). તેનો ભાવ પસ્તાવાનો હોવાથી 'regretted' (અફસોસ વ્યક્ત કર્યો) Reporting Verb નો ઉપયોગ કરવો વધુ ભાવવાહી છે (વિકલ્પ B)."
    },
    {
      "question": "The boy said, 'I must go now as my father is waiting for me.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that he had to go then as his father was waiting for him.",
        "The boy said that he must go now as his father is waiting for him.",
        "The boy said that he had to go then because his father is waiting for him.",
        "The boy said he had to go as his father was waiting for him."
      ],
      "answer": "The boy said that he had to go then as his father was waiting for him.",
      "explanation": "'must' નું 'had to', 'now' નું 'then', 'is waiting' નું 'was waiting', 'my' નું 'his' અને 'me' નું 'him' થશે."
    },
    {
      "question": "She said, 'Let us see the film.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She suggested that they should see the film.",
        "She proposed that they should see the film.",
        "She said to see the film.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ દરખાસ્ત છે. 'suggested' કે 'proposed' સાથે 'that...should' ની રચના વપરાય છે."
    },
    {
      "question": "The teacher said to Rahul, 'What is the capital of France?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher asked Rahul what the capital of France is.",
        "The teacher asked Rahul what the capital of France was.",
        "The teacher asked Rahul that what the capital of France is.",
        "The teacher asked Rahul what is the capital of France."
      ],
      "answer": "The teacher asked Rahul what the capital of France is.",
      "explanation": "આ ભૌગોલિક હકીકત (Geographical Fact) છે, જે સનાતન સત્ય જેવું છે. તેથી, Reported Speech નો કાળ બદલાશે નહીં, ભલે Reporting verb ભૂતકાળમાં હોય. વાક્ય વિધાન બનશે, એટલે 'what the capital of France is' એમ લખાશે."
    },
    {
      "question": "He said, 'If it does not rain, we shall go out.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that if it did not rain, they would go out.",
        "He said that if it does not rain, they shall go out.",
        "He said that if it did not rain, they will go out.",
        "He said that unless it rained, they would go out."
      ],
      "answer": "He said that if it did not rain, they would go out.",
      "explanation": "શરતી વાક્ય પ્રકાર-1 છે. 'if' વાળા વાક્યમાં 'does not rain' (સાદો વર્તમાનકાળ) નું 'did not rain' (સાદો ભૂતકાળ) થશે. મુખ્ય વાક્યમાં 'shall' નું 'would' થશે. 'we' નું 'they' થશે."
    },
    {
      "question": "'Come in, gentlemen,' said the host. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The host invited the gentlemen to come in.",
        "The host told the gentlemen to come in.",
        "The host asked the gentlemen to come in.",
        "The host welcomed the gentlemen to come in."
      ],
      "answer": "The host invited the gentlemen to come in.",
      "explanation": "આજ્ઞાર્થ વાક્ય છે, પણ અહીં ભાવ આમંત્રણનો છે. તેથી Reporting Verb 'invited' કે 'welcomed' સૌથી યોગ્ય છે. 'gentlemen' એ સંબોધન છે, જે object તરીકે આવશે."
    },
    {
      "question": "She said, 'What a horrible sight!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed that it was a horrible sight.",
        "She exclaimed that it was a very horrible sight.",
        "She exclaimed what a horrible sight it was.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "ઉદ્ગાર વાક્ય છે. 'exclaimed' વપરાશે. 'what a' ને 'a' અથવા 'a very' માં ફેરવી શકાય. બંને વિકલ્પો સાચા છે."
    },
    {
      "question": "The boy said to his mother, 'Why did you not wash my clothes?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy asked his mother why she had not washed his clothes.",
        "The boy asked his mother why she did not wash his clothes.",
        "The boy asked his mother why had she not washed his clothes.",
        "The boy asked his mother that why she had not washed his clothes."
      ],
      "answer": "The boy asked his mother why she had not washed his clothes.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'did you not wash' (સાદો ભૂતકાળ નકાર) નું 'she had not washed' (પૂર્ણ ભૂતકાળ નકાર) થશે. 'my' નું 'his' થશે."
    },
    {
      "question": "He said, 'I was absent for two days.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had been absent for two days.",
        "He said that he was absent for two days.",
        "He informed that he had been absent for two days.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "'was' (સાદો ભૂતકાળ) નું 'had been' (પૂર્ણ ભૂતકાળ) થશે. આ એક માહિતી છે, તેથી Reporting Verb તરીકે 'said' ને બદલે 'informed' (જાણ કરી) પણ વાપરી શકાય છે."
    },
    {
      "question": "The girl said, 'I must get a new dress for the party.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The girl said that she had to get a new dress for the party.",
        "The girl said that she must get a new dress for the party.",
        "The girl said that she would have to get a new dress for the party.",
        "The girl said that she must have got a new dress for the party."
      ],
      "answer": "The girl said that she had to get a new dress for the party.",
      "explanation": "અહીં 'must' વર્તમાન સમયની જરૂરિયાત દર્શાવે છે. તેથી Indirect Speech માં તેનું 'had to' થશે."
    }
  ],
  "test-27": [
    {
      "question": "He said, 'I have a toothache.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he had a toothache.",
        "He said that he has a toothache.",
        "He complained that he had a toothache.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "અહીં 'have' મુખ્ય ક્રિયાપદ તરીકે સાદા વર્તમાનકાળમાં છે, તેથી તેનું ભૂતકાળ 'had' થશે. દાંતનો દુઃખાવો એક ફરિયાદ છે, તેથી Reporting Verb તરીકે 'complained' પણ વાપરી શકાય છે."
    },
    {
      "question": "She said, 'My God! You have come back.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She exclaimed with surprise that he had come back.",
        "She exclaimed that he has come back.",
        "She said My God that he had come back.",
        "She exclaimed with surprise that you had come back."
      ],
      "answer": "She exclaimed with surprise that he had come back.",
      "explanation": "'My God!' આશ્ચર્ય વ્યક્ત કરે છે. 'exclaimed with surprise' યોગ્ય છે. 'have come' નું 'had come' થશે. 'you' નું 'he' (સાંભળનાર તરીકે ધારીને) થશે."
    },
    {
      "question": "I said to her, 'Is this your book?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I asked her if that was her book.",
        "I asked her if this was her book.",
        "I asked her is this her book.",
        "I asked her that if that was her book."
      ],
      "answer": "I asked her if that was her book.",
      "explanation": "પ્રશ્નાર્થ વાક્ય છે. સંયોજક 'if' વપરાશે. 'is' નું 'was' અને 'this' નું 'that' થશે. વાક્ય વિધાન બનશે."
    },
    {
      "question": "The teacher said, 'The First World War started in 1914.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher said that the First World War started in 1914.",
        "The teacher said that the First World War had started in 1914.",
        "The teacher taught that the First World War started in 1914.",
        "The teacher informed that the First World War had started in 1914."
      ],
      "answer": "The teacher said that the First World War started in 1914.",
      "explanation": "આ એક ઐતિહાસિક હકીકત છે. ઐતિહાસિક હકીકતોના કાળમાં Indirect Speech માં ફેરફાર થતો નથી."
    },
    {
      "question": "He said, 'Let us hope for the best.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that they should hope for the best.",
        "He wished that they should hope for the best.",
        "He suggested that they should hope for the best.",
        "Both B and C"
      ],
      "answer": "Both B and C",
      "explanation": "અહીં 'Let us hope' એ ઈચ્છા કે દરખાસ્ત જેવો ભાવ વ્યક્ત કરે છે. 'wished' કે 'suggested' બંને Reporting Verb તરીકે વાપરી શકાય અને વાક્ય 'that...should' થી જોડાય છે."
    },
    {
      "question": "The boy said to the principal, 'Thank you, sir. I shall never forget your kindness.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy respectfully thanked the principal and said that he would never forget his kindness.",
        "The boy thanked the principal and said he will never forget your kindness.",
        "The boy respectfully thanked the principal and said that he would never forget your kindness.",
        "The boy thanked the principal and promised that he would never forget his kindness."
      ],
      "answer": "The boy respectfully thanked the principal and said that he would never forget his kindness.",
      "explanation": "પહેલા 'Thank you, sir' ને 'respectfully thanked the principal' માં ફેરવાય. બીજા વાક્યને 'and said that' થી જોડીને 'I' નું 'he', 'shall' નું 'would' અને 'your' નું 'his' થશે."
    },
    {
      "question": "She said, 'I was taking my exam when the fire broke out.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that she had been taking her exam when the fire broke out.",
        "She said that she was taking her exam when the fire broke out.",
        "She said that she was taking her exam when the fire had broken out.",
        "She said that she had been taking her exam when the fire had broken out."
      ],
      "answer": "She said that she had been taking her exam when the fire broke out.",
      "explanation": "જ્યારે બે ભૂતકાળની ક્રિયાઓ હોય, ત્યારે મુખ્ય ક્રિયાનો કાળ બદલાય. 'was taking' (ચાલુ ભૂતકાળ) નું 'had been taking' (ચાલુ પૂર્ણ ભૂતકાળ) થશે. 'when' પછીના ગૌણ વાક્ય 'the fire broke out' (સાદો ભૂતકાળ) ના કાળમાં ફેરફાર નહીં થાય."
    },
    {
      "question": "He said to me, 'How many brothers have you?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He asked me how many brothers I had.",
        "He asked me how many brothers do you have.",
        "He asked me how many brothers I have.",
        "He asked me that how many brothers I had."
      ],
      "answer": "He asked me how many brothers I had.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'How many brothers' સંયોજક બનશે. 'have you?' (અહીં 'do you have?' ના અર્થમાં) નું 'I had' થશે અને વાક્ય વિધાન બનશે."
    },
    {
      "question": "The mother said to the child, 'Don't touch the fire.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The mother warned the child not to touch the fire.",
        "The mother forbade the child to touch the fire.",
        "The mother told the child not to touch the fire.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "આ નકારાત્મક આજ્ઞાર્થ વાક્ય છે. અહીં ચેતવણી ('warned'), મનાઈ ('forbade'), કે સામાન્ય કથન ('told') ત્રણેય Reporting Verb ભાવ મુજબ સાચા છે. 'forbade' સાથે 'not' આવતું નથી."
    },
    {
      "question": "He said, 'I would do it if I were allowed.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that he would do it if he were allowed.",
        "He said that he would have done it if he had been allowed.",
        "He said that he would do it if he was allowed.",
        "He wished to do it if he were allowed."
      ],
      "answer": "He said that he would do it if he were allowed.",
      "explanation": "આ શરતી વાક્ય પ્રકાર-2 છે. નિયમ મુજબ, આવા વાક્યોમાં Indirect speech માં કાળ બદલાતો નથી. તેથી વાક્ય એમ જ રહેશે, ફક્ત 'I' નું 'he' થશે."
    }
  ],
  "test-28": [
    {
      "question": "She said to her son, 'Where did you put the keys I gave you yesterday?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked her son where he had put the keys she had given him the previous day.",
        "She asked her son where he put the keys she gave him yesterday.",
        "She asked her son where had he put the keys she had given him the previous day.",
        "She asked her son where he had put the keys I had given him the previous day."
      ],
      "answer": "She asked her son where he had put the keys she had given him the previous day.",
      "explanation": "આ જટિલ પ્રશ્નાર્થ વાક્ય છે. 'did you put' (સાદો ભૂતકાળ) નું 'he had put' (પૂર્ણ ભૂતકાળ) થશે. વિશેષણ વાક્યાંશ 'I gave you' માં પણ 'gave' (સાદો ભૂતકાળ) નું 'she had given him' (પૂર્ણ ભૂતકાળ) થશે. 'yesterday' નું 'the previous day' થશે."
    },
    {
      "question": "He said, 'O for a glass of water!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He earnestly wished for a glass of water.",
        "He exclaimed that he wanted a glass of water.",
        "He asked for a glass of water.",
        "He said O for a glass of water."
      ],
      "answer": "He earnestly wished for a glass of water.",
      "explanation": "'O for...' વાળી રચના તીવ્ર ઈચ્છા વ્યક્ત કરે છે. તેથી, Reporting verb તરીકે 'earnestly wished for' (ખૂબ ઈચ્છા વ્યક્ત કરી) કે 'longed for' નો ઉપયોગ થાય છે."
    },
    {
      "question": "The teacher said, 'If you had worked hard, you would have passed.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher said that if he had worked hard, he would have passed.",
        "The teacher told him that if he had worked hard, he would have passed.",
        "The teacher said that if he worked hard, he would pass.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ શરતી વાક્ય પ્રકાર-3 છે (અશક્ય ભૂતકાળ). આવા વાક્યોના કાળમાં Indirect speech માં કોઈ ફેરફાર થતો નથી. 'said' ને 'told him' માં પણ ફેરવી શકાય જો સાંભળનાર સ્પષ્ટ હોય."
    },
    {
      "question": "I said to my friend, 'Let us go to a restaurant for a change.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "I suggested to my friend that we should go to a restaurant for a change.",
        "I asked my friend to go to a restaurant for a change.",
        "I told my friend that we shall go to a restaurant for a change.",
        "I proposed my friend that we should go to a restaurant for a change."
      ],
      "answer": "I suggested to my friend that we should go to a restaurant for a change.",
      "explanation": "આ દરખાસ્ત છે. 'suggested to' સાથે 'that we should' ની રચના વપરાય છે. 'we' બદલાશે નહીં કારણકે બોલનાર 'I' પણ તેમાં સામેલ છે."
    },
    {
      "question": "'You must not break your promise,' said the father to his son. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The father told his son that he must not break his promise.",
        "The father ordered his son not to break his promise.",
        "The father reminded his son that he must not break his promise.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "'must not' મનાઈ દર્શાવે છે અને તે બદલાતું નથી. અહીં 'told', 'ordered', કે 'reminded' (યાદ અપાવ્યું) - ત્રણેય Reporting Verb ભાવ મુજબ સાચા છે."
    },
    {
      "question": "He said, 'What a surprise to see you here!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He exclaimed with surprise that it was a great surprise to see me there.",
        "He told me that it was a surprise to see me there.",
        "He exclaimed what a surprise it was to see me there.",
        "He said that it was a great surprise to see me there."
      ],
      "answer": "He exclaimed with surprise that it was a great surprise to see me there.",
      "explanation": "આશ્ચર્ય વ્યક્ત કરતું ઉદ્ગાર વાક્ય છે. 'exclaimed with surprise' યોગ્ય છે. 'you' નું 'me' અને 'here' નું 'there' થશે. 'what a' ને 'a great' માં ફેરવવું વધુ ભાવવાહી છે."
    },
    {
      "question": "The boy said, 'I'd rather starve than steal.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that he would rather starve than steal.",
        "The boy said that he had rather starve than steal.",
        "The boy said that he would prefer to starve than steal.",
        "The boy decided that he would rather starve than steal."
      ],
      "answer": "The boy said that he would rather starve than steal.",
      "explanation": "'I'd rather' ('I would rather') વાળી રચના પસંદગી દર્શાવે છે અને તે Indirect Speech માં બદલાતી નથી."
    },
    {
      "question": "She said to me, 'How have you managed this?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked me how I had managed that.",
        "She asked me how have you managed this.",
        "She asked me that how I had managed that.",
        "She wondered how I had managed that."
      ],
      "answer": "She asked me how I had managed that.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'have you managed' (પૂર્ણ વર્તમાનકાળ) નું 'I had managed' (પૂર્ણ ભૂતકાળ) થશે. 'this' નું 'that' થશે. 'wondered' પણ વાપરી શકાય."
    },
    {
      "question": "The teacher said, 'Time and tide wait for none.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher said that time and tide wait for none.",
        "The teacher said that time and tide waited for none.",
        "The teacher preached that time and tide wait for none.",
        "The teacher advised that time and tide waits for none."
      ],
      "answer": "The teacher said that time and tide wait for none.",
      "explanation": "આ એક પ્રચલિત કહેવત (proverb) છે. કહેવતોના કાળમાં Indirect Speech માં ફેરફાર થતો નથી."
    },
    {
      "question": "He said, 'Let's give a party.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He suggested giving a party.",
        "He suggested that they should give a party.",
        "He said to give a party.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "દરખાસ્તસૂચક વાક્ય છે. 'suggested' પછી સીધું gerund ('giving') વાપરી શકાય (વિકલ્પ A), અથવા 'that...should' વાળી રચના પણ વાપરી શકાય (વિકલ્પ B). બંને સાચા છે."
    }
  ],
  "test-29": [
    {
      "question": "He said, 'When the cat is away, the mice will play.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that when the cat is away, the mice will play.",
        "He said that when the cat was away, the mice would play.",
        "He remarked that when the cat is away, the mice will play.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "આ એક કહેવત છે. કહેવતોના કાળમાં સામાન્ય રીતે ફેરફાર થતો નથી. Reporting verb તરીકે 'said' કે 'remarked' (ટિપ્પણી કરી) બંને વાપરી શકાય છે."
    },
    {
      "question": "She said to her friend, 'Will you help me carry this box?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked her friend if she would help her carry that box.",
        "She requested her friend to help her carry that box.",
        "She asked her friend would you help me carry this box.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ વાક્ય પ્રશ્ન પણ છે અને વિનંતી પણ છે. તેથી, 'asked if she would...' (વિકલ્પ A) અને 'requested... to help...' (વિકલ્પ B) બંને રચનાઓ સાચી છે. 'this' નું 'that' થશે."
    },
    {
      "question": "The boy said, 'I did not know the answer, so I kept quiet.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that as he had not known the answer, he had kept quiet.",
        "The boy said that he did not know the answer, so he kept quiet.",
        "The boy said that because he had not known the answer, he kept quiet.",
        "The boy said that he had not known the answer, so he kept quiet."
      ],
      "answer": "The boy said that as he had not known the answer, he had kept quiet.",
      "explanation": "અહીં બે ક્રિયાઓ છે. 'did not know' (સાદો ભૂતકાળ) નું 'had not known' (પૂર્ણ ભૂતકાળ) થશે. 'kept quiet' (સાદો ભૂતકાળ) નું પણ 'had kept quiet' (પૂર્ણ ભૂતકાળ) થશે. 'so' (તેથી) ને બદલે 'as' (કારણ કે) થી વાક્ય જોડવું વધુ સ્વાભાવિક લાગે છે."
    },
    {
      "question": "He said, 'Ah! The little bird is dead.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He exclaimed with sorrow that the little bird was dead.",
        "He said that the little bird was dead.",
        "He exclaimed sadly that the little bird was dead.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "'Ah!' દુઃખ વ્યક્ત કરતો ઉદ્ગાર છે. 'exclaimed with sorrow' કે 'exclaimed sadly' બંને Reporting verb તરીકે વાપરી શકાય છે. 'is' નું 'was' થશે."
    },
    {
      "question": "The teacher said to the latecomer, 'Why are you so late today?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The teacher asked the latecomer why he was so late that day.",
        "The teacher asked the latecomer why he is so late today.",
        "The teacher demanded of the latecomer why he was so late that day.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. 'asked' અથવા કડકાઈના ભાવ માટે 'demanded of' વાપરી શકાય. 'are' નું 'was' અને 'today' નું 'that day' થશે. વાક્ય વિધાન બનશે."
    },
    {
      "question": "She said, 'We had a lovely time here.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that they had had a lovely time there.",
        "She said that they had a lovely time there.",
        "She said that we had a lovely time here.",
        "She exclaimed that they had had a lovely time there."
      ],
      "answer": "She said that they had had a lovely time there.",
      "explanation": "અહીં 'had' મુખ્ય ક્રિયાપદ તરીકે સાદા ભૂતકાળમાં છે. તેથી તે પૂર્ણ ભૂતકાળ ('had had') માં ફેરવાશે. 'We' નું 'they' અને 'here' નું 'there' થશે."
    },
    {
      "question": "The son said, 'Father, let me manage my own affairs.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The son requested his father to let him manage his own affairs.",
        "The son wished that he might be allowed to manage his own affairs.",
        "The son told his father to let him manage his own affairs.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "'Let me' વાળી વિનંતીસૂચક રચના છે. 'requested... to let him...' અથવા વધુ ઔપચારિક રીતે 'wished that he might be allowed to...' બંને રીતે ફેરવી શકાય છે."
    },
    {
      "question": "'Have you anything to say on behalf of the accused?' said the judge. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The judge asked him if he had anything to say on behalf of the accused.",
        "The judge asked him have you anything to say on behalf of the accused.",
        "The judge asked if he has anything to say on behalf of the accused.",
        "The judge asked him whether he had anything to say on behalf of the accused."
      ],
      "answer": "The judge asked him if he had anything to say on behalf of the accused.",
      "explanation": "પ્રશ્નાર્થ વાક્ય છે. 'asked' અને 'if/whether' વપરાશે. સાંભળનાર તરીકે 'him' ઉમેરવું યોગ્ય છે. 'Have you' નું 'if he had' થશે."
    },
    {
      "question": "He said, 'What a fool I was!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He confessed with regret that he had been a great fool.",
        "He exclaimed that he had been a great fool.",
        "He said that he was a great fool.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "પસ્તાવો વ્યક્ત કરતું ઉદ્ગાર વાક્ય છે. 'confessed with regret' કે 'exclaimed' બંને વાપરી શકાય. 'was' નું 'had been' થશે અને 'what a' નું 'a great' થશે."
    },
    {
      "question": "The students said, 'Let us have a holiday tomorrow.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The students proposed that they should have a holiday the next day.",
        "The students requested that they might have a holiday the next day.",
        "The students said that they should have a holiday the next day.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "આ દરખાસ્ત ('proposed that... should') પણ હોઈ શકે અને વિનંતી ('requested that... might') પણ હોઈ શકે. બંને ભાવ અહીં બંધબેસતા છે. 'tomorrow' નું 'the next day' થશે."
    }
  ],
  "test-30": [
    {
      "question": "He said, 'A thing of beauty is a joy forever.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that a thing of beauty is a joy forever.",
        "He said that a thing of beauty was a joy forever.",
        "He commented that a thing of beauty is a joy forever.",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "આ એક પ્રખ્યાત કવિતાની પંક્તિ અને સાર્વત્રિક વિચાર છે. તેથી, તેનો કાળ બદલાશે નહીં. Reporting Verb તરીકે 'said' કે 'commented' (ટિપ્પણી કરી) વાપરી શકાય છે."
    },
    {
      "question": "The boy said, 'I did not break the slate. My sister did it.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The boy said that he had not broken the slate and that his sister had done it.",
        "The boy denied having broken the slate and said that his sister had done it.",
        "The boy said that he did not break the slate and his sister did it.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "પહેલા વાક્યમાં નકાર છે, જેને 'said that he had not broken' અથવા 'denied having broken' તરીકે લખી શકાય. બીજું વાક્ય 'and that...' થી જોડાય છે, જેમાં 'did' નું 'had done' થશે."
    },
    {
      "question": "She said to her boss, 'Can I take a leave tomorrow?' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She asked her boss if she could take a leave the next day.",
        "She asked her boss if she can take a leave tomorrow.",
        "She requested her boss if she could take a leave the next day.",
        "She asked her boss that if she could take a leave the next day."
      ],
      "answer": "She asked her boss if she could take a leave the next day.",
      "explanation": "આ પરવાનગી માંગતો પ્રશ્ન છે. 'asked' અને 'if' વપરાશે. 'Can' નું 'could' અને 'tomorrow' નું 'the next day' થશે. 'requested' પણ વાપરી શકાય, પણ 'asked' વધુ સામાન્ય છે."
    },
    {
      "question": "He said, 'If I had the tools, I could mend the car.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He said that if he had had the tools, he could have mended the car.",
        "He said that if he had the tools, he could mend the car.",
        "He said that if he had had the tools, he could mend the car.",
        "He said that if he had the tools, he could have mended the car."
      ],
      "answer": "He said that if he had had the tools, he could have mended the car.",
      "explanation": "શરતી વાક્ય પ્રકાર-2 છે. Indirect માં તે પ્રકાર-3 માં ફેરવાય છે. 'had' (સાદો ભૂતકાળ) નું 'had had' (પૂર્ણ ભૂતકાળ) અને 'could mend' નું 'could have mended' થશે."
    },
    {
      "question": "'Don't be a fool,' he said to me. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He advised me not to be a fool.",
        "He told me not to be a fool.",
        "He warned me not to be a fool.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "આ નકારાત્મક આજ્ઞાર્થ વાક્ય છે. અહીં સલાહ ('advised'), સામાન્ય કથન ('told'), કે ચેતવણી ('warned') નો ભાવ હોઈ શકે છે. ત્રણેય Reporting Verb સાચા છે. વાક્ય 'not to' થી જોડાય છે."
    },
    {
      "question": "The student said, 'Let me try once more.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The student requested that he might be allowed to try once more.",
        "The student wanted to try once more.",
        "The student asked to try once more.",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "'Let me' વાળી રચના વિનંતી કે ઈચ્છા દર્શાવે છે. 'requested that he might be allowed to...', 'wanted to...', અને 'asked to...' - આ ત્રણેય રીતોથી તેને વ્યક્ત કરી શકાય છે."
    },
    {
      "question": "He said, 'What a clever answer!' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He exclaimed that it was a very clever answer.",
        "He remarked that it was a very clever answer.",
        "He exclaimed what a clever answer it was.",
        "Both A and B"
      ],
      "answer": "Both A and B",
      "explanation": "ઉદ્ગાર વાક્ય છે. Reporting Verb તરીકે 'exclaimed' કે 'remarked' (ટિપ્પણી કરી) વાપરી શકાય. 'What a' ને 'a very' માં ફેરવીને વાક્યને વિધાન બનાવાય છે."
    },
    {
      "question": "She said, 'My parents are arriving tomorrow.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "She said that her parents were arriving the next day.",
        "She said that my parents were arriving the next day.",
        "She said that her parents are arriving tomorrow.",
        "She said that her parents would be arriving the next day."
      ],
      "answer": "She said that her parents were arriving the next day.",
      "explanation": "'are arriving' (ચાલુ વર્તમાનકાળ) નું 'were arriving' (ચાલુ ભૂતકાળ) થશે. 'My' નું 'her' અને 'tomorrow' નું 'the next day' થશે."
    },
    {
      "question": "'Which way did she go?' asked the policeman. વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "The policeman enquired which way she had gone.",
        "The policeman asked which way did she go.",
        "The policeman asked which way she went.",
        "The policeman enquired which way had she gone."
      ],
      "answer": "The policeman enquired which way she had gone.",
      "explanation": "WH-પ્રશ્નાર્થ વાક્ય છે. પૂછપરછ માટે 'enquired' વધુ યોગ્ય છે. 'did she go' (સાદો ભૂતકાળ) નું 'she had gone' (પૂર્ણ ભૂતકાળ) થશે અને વાક્ય વિધાન બનશે."
    },
    {
      "question": "He said, 'Had I the wings of a dove, I would fly away.' વાક્યને Indirect Speech માં ફેરવો.",
      "options": [
        "He wished that he had had the wings of a dove to fly away.",
        "He said that if he had the wings of a dove, he would fly away.",
        "He wished that if he had the wings of a dove, he would fly away.",
        "He wished for the wings of a dove to fly away."
      ],
      "answer": "He wished that he had had the wings of a dove to fly away.",
      "explanation": "'Had I...' થી શરૂ થતું વાક્ય 'If I had...' જેવી અવાસ્તવિક શરત દર્શાવે છે. આ એક ઈચ્છા છે, તેથી Reporting Verb 'wished' થશે. શરતી વાક્ય પ્રકાર-2 હોવાથી, તે પ્રકાર-3 માં ફેરવાશે, એટલે 'had' નું 'had had' થશે. 'I would fly' ને 'to fly' માં ફેરવી શકાય."
    }
  ]
};
