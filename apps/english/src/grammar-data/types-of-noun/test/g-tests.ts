import { Question } from '@/components/grammar/GrammarTestRunner';

export const tests: Record<string, Question[]> = {
  "test-1": [
    {
      "question": "નીચેના વાક્યમાં 'India' શબ્દ કયા પ્રકારનું નામ છે?<br><b>India is a beautiful country.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "Proper Noun (વિશેષ નામ) એ કોઈ ચોક્કસ વ્યક્તિ, સ્થળ, કે વસ્તુનું નામ છે. 'India' એક ચોક્કસ દેશનું નામ છે, તેથી તે Proper Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'boy' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The boy is playing.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "Common Noun (જાતિવાચક નામ) એ કોઈ સામાન્ય વ્યક્તિ, સ્થળ, કે વસ્તુની જાતિ દર્શાવે છે. 'boy' કોઈ પણ છોકરા માટે વાપરી શકાય છે, તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun (વિશેષ નામ) છે?",
      "options": [
        "city",
        "river",
        "Mount Everest",
        "person"
      ],
      "answer": "Mount Everest",
      "explanation": "'Mount Everest' એક ચોક્કસ પર્વતનું નામ છે, જ્યારે 'city', 'river', અને 'person' સામાન્ય નામો છે. તેથી 'Mount Everest' Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "London",
        "Nile",
        "book",
        "Shakespeare"
      ],
      "answer": "book",
      "explanation": "'book' કોઈ પણ પુસ્તક માટે વાપરી શકાય તેવું સામાન્ય નામ છે. 'London', 'Nile', અને 'Shakespeare' ચોક્કસ નામો છે, તેથી તે Proper Nouns છે."
    },
    {
      "question": "વાક્યમાં ખાલી જગ્યા માટે યોગ્ય નામ પસંદ કરો:<br><b>My favorite city is ______.</b>",
      "options": [
        "city",
        "country",
        "Paris",
        "continent"
      ],
      "answer": "Paris",
      "explanation": "આ વાક્યમાં એક ચોક્કસ શહેરનું નામ જરૂરી છે. 'Paris' એક ચોક્કસ શહેરનું નામ છે, તેથી તે Proper Noun છે અને અહીં બંધબેસે છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'dog' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The dog is barking.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'dog' એ કોઈપણ કૂતરા માટે વપરાતો સામાન્ય શબ્દ છે. તે કોઈ ચોક્કસ કૂતરાનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Narendra Modi' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Narendra Modi is the Prime Minister of India.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Narendra Modi' એ એક ચોક્કસ વ્યક્તિનું નામ છે. જ્યારે કોઈ ચોક્કસ વ્યક્તિ, સ્થળ કે વસ્તુનું નામ હોય, ત્યારે તેને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun નથી?",
      "options": [
        "Ganges",
        "Amazon",
        "river",
        "Yamuna"
      ],
      "answer": "river",
      "explanation": "'Ganges', 'Amazon', અને 'Yamuna' એ ચોક્કસ નદીઓના નામ છે, તેથી તે Proper Nouns છે. 'river' એ એક સામાન્ય નામ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં ખાલી જગ્યા માટે યોગ્ય Common Noun પસંદ કરો:<br><b>I saw a ______ in the zoo.</b>",
      "options": [
        "Leo",
        "lion",
        "Asia",
        "Africa"
      ],
      "answer": "lion",
      "explanation": "વાક્યમાં પ્રાણી સંગ્રહાલયમાં જોયેલા પ્રાણીનું સામાન્ય નામ પૂછવામાં આવ્યું છે. 'lion' એ એક સામાન્ય નામ (Common Noun) છે. 'Leo' એ કોઈ ચોક્કસ સિંહનું નામ હોઈ શકે છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'school' શબ્દ કયા પ્રકારનું નામ છે?<br><b>I go to school every day.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'school' એ કોઈ પણ શાળા માટે વપરાતો સામાન્ય શબ્દ છે, કોઈ ચોક્કસ શાળાનું નામ નથી. તેથી તે Common Noun છે."
    }
  ],
  "test-2": [
    {
      "question": "નીચેના વાક્યમાં 'teacher' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The teacher is explaining the lesson.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'teacher' કોઈ પણ શિક્ષક માટે વાપરી શકાય તેવું સામાન્ય નામ છે. તે કોઈ ચોક્કસ શિક્ષકનું નામ નથી, તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Mumbai' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Mumbai is a big city.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Mumbai' એક ચોક્કસ શહેરનું નામ છે. ચોક્કસ સ્થળના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "Jupiter",
        "Mars",
        "planet",
        "Earth"
      ],
      "answer": "planet",
      "explanation": "'planet' એ કોઈપણ ગ્રહ માટે વપરાતો સામાન્ય શબ્દ છે. 'Jupiter', 'Mars', અને 'Earth' ચોક્કસ ગ્રહોના નામ છે, તેથી તે Proper Nouns છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun (વિશેષ નામ) છે?",
      "options": [
        "car",
        "Ford",
        "road",
        "vehicle"
      ],
      "answer": "Ford",
      "explanation": "'Ford' એક ચોક્કસ કાર કંપનીનું નામ છે. 'car', 'road', અને 'vehicle' સામાન્ય નામો છે. તેથી 'Ford' Proper Noun છે."
    },
    {
      "question": "વાક્યમાં 'man' શબ્દ શું છે?<br><b>That man is very tall.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Pronoun (સર્વનામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'man' એ કોઈપણ પુરુષ માટે વપરાતો સામાન્ય શબ્દ છે, કોઈ ચોક્કસ વ્યક્તિનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Sita' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Sita is a good singer.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Proper Noun (વિશેષ નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Sita' એક ચોક્કસ છોકરીનું નામ છે. જ્યારે કોઈ ચોક્કસ વ્યક્તિનું નામ હોય, ત્યારે તેને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun નથી?",
      "options": [
        "table",
        "chair",
        "house",
        "Taj Mahal"
      ],
      "answer": "Taj Mahal",
      "explanation": "'Taj Mahal' એક ચોક્કસ સ્મારકનું નામ છે, તેથી તે Proper Noun છે. 'table', 'chair', અને 'house' સામાન્ય નામો (Common Nouns) છે."
    },
    {
      "question": "વાક્યમાં 'country' શબ્દ શું છે?<br><b>I love my country.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'country' એ કોઈપણ દેશ માટે વપરાતો સામાન્ય શબ્દ છે. તે કોઈ ચોક્કસ દેશનું નામ નથી (જેમ કે India). તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Red Fort' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The Red Fort is in Delhi.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Red Fort' એ દિલ્હીમાં આવેલા એક ચોક્કસ કિલ્લાનું નામ છે. ચોક્કસ સ્થળ કે ઇમારતના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun છે?",
      "options": [
        "actor",
        "movie",
        "Shah Rukh Khan",
        "film"
      ],
      "answer": "Shah Rukh Khan",
      "explanation": "'Shah Rukh Khan' એક ચોક્કસ અભિનેતાનું નામ છે. 'actor', 'movie', અને 'film' સામાન્ય નામો છે. તેથી 'Shah Rukh Khan' Proper Noun છે."
    }
  ],
  "test-3": [
    {
      "question": "નીચેના વાક્યમાં 'girl' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The girl is reading a book.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'girl' કોઈ પણ છોકરી માટે વાપરી શકાય તેવું સામાન્ય નામ છે. તે કોઈ ચોક્કસ છોકરીનું નામ નથી. તેથી, તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Sunday' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Sunday is a holiday.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Sunday' અઠવાડિયાના એક ચોક્કસ દિવસનું નામ છે. ચોક્કસ દિવસ, મહિના કે તહેવારના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun (વિશેષ નામ) છે?",
      "options": [
        "ocean",
        "Pacific Ocean",
        "sea",
        "water"
      ],
      "answer": "Pacific Ocean",
      "explanation": "'Pacific Ocean' એક ચોક્કસ મહાસાગરનું નામ છે. 'ocean' અને 'sea' સામાન્ય નામો છે. તેથી, 'Pacific Ocean' Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "Asia",
        "Europe",
        "continent",
        "Africa"
      ],
      "answer": "continent",
      "explanation": "'continent' એ કોઈપણ ખંડ માટે વપરાતો સામાન્ય શબ્દ છે. 'Asia', 'Europe', અને 'Africa' ચોક્કસ ખંડોના નામ છે, તેથી તે Proper Nouns છે."
    },
    {
      "question": "વાક્યમાં 'car' શબ્દ શું છે?<br><b>He drives a blue car.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'car' એ કોઈપણ ગાડી માટે વપરાતો સામાન્ય શબ્દ છે. તે કોઈ ચોક્કસ બ્રાન્ડ કે મોડેલનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Ahmedabad' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Ahmedabad is a major city in Gujarat.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Ahmedabad' એ ગુજરાતના એક ચોક્કસ શહેરનું નામ છે. ચોક્કસ સ્થળના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun નથી?",
      "options": [
        "Diwali",
        "Christmas",
        "festival",
        "Holi"
      ],
      "answer": "festival",
      "explanation": "'Diwali', 'Christmas', અને 'Holi' ચોક્કસ તહેવારોના નામ છે, તેથી તે Proper Nouns છે. 'festival' એ એક સામાન્ય નામ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં 'doctor' શબ્દ શું છે?<br><b>My father is a doctor.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'doctor' એ કોઈપણ ડોક્ટર માટે વપરાતો સામાન્ય વ્યવસાયસૂચક શબ્દ છે. તે કોઈ ચોક્કસ વ્યક્તિનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Harry Potter' શબ્દ કયા પ્રકારનું નામ છે?<br><b>'Harry Potter' is a famous book series.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Harry Potter' એ એક ચોક્કસ પુસ્તક શ્રેણીનું નામ છે. ચોક્કસ પુસ્તક, ફિલ્મ કે કલાકૃતિના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "Mr. Smith",
        "woman",
        "Mrs. Jones",
        "Peter"
      ],
      "answer": "woman",
      "explanation": "'woman' કોઈપણ સ્ત્રી માટે વપરાતો સામાન્ય શબ્દ છે. 'Mr. Smith', 'Mrs. Jones', અને 'Peter' ચોક્કસ વ્યક્તિઓના નામ છે, તેથી તે Proper Nouns છે."
    }
  ],
  "test-4": [
    {
      "question": "નીચેના વાક્યમાં 'river' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The river flows to the sea.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'river' એ કોઈપણ નદી માટે વપરાતો સામાન્ય શબ્દ છે, કોઈ ચોક્કસ નદીનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'January' શબ્દ કયા પ્રકારનું નામ છે?<br><b>My birthday is in January.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'January' એ વર્ષના એક ચોક્કસ મહિનાનું નામ છે. ચોક્કસ મહિનાના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun (વિશેષ નામ) છે?",
      "options": [
        "language",
        "subject",
        "English",
        "grammar"
      ],
      "answer": "English",
      "explanation": "'English' એક ચોક્કસ ભાષાનું નામ છે. 'language', 'subject', અને 'grammar' સામાન્ય નામો છે. તેથી 'English' Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "Himalayas",
        "mountain",
        "Alps",
        "Andes"
      ],
      "answer": "mountain",
      "explanation": "'mountain' એ કોઈપણ પર્વત માટે વપરાતો સામાન્ય શબ્દ છે. 'Himalayas', 'Alps', અને 'Andes' ચોક્કસ પર્વતમાળાઓના નામ છે, તેથી તે Proper Nouns છે."
    },
    {
      "question": "વાક્યમાં 'building' શબ્દ શું છે?<br><b>That building is very old.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'building' એ કોઈપણ ઇમારત માટે વપરાતો સામાન્ય શબ્દ છે. તે કોઈ ચોક્કસ ઇમારતનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'The Ramayana' શબ્દ કયા પ્રકારનું નામ છે?<br><b>'The Ramayana' is an ancient epic.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'The Ramayana' એક ચોક્કસ મહાકાવ્યનું નામ છે. ચોક્કસ પુસ્તક કે ગ્રંથના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun નથી?",
      "options": [
        "pen",
        "pencil",
        "paper",
        "Parker"
      ],
      "answer": "Parker",
      "explanation": "'Parker' એક ચોક્કસ બ્રાન્ડનું નામ છે, તેથી તે Proper Noun છે. 'pen', 'pencil', અને 'paper' સામાન્ય નામો (Common Nouns) છે."
    },
    {
      "question": "વાક્યમાં 'student' શબ્દ શું છે?<br><b>Every student must wear a uniform.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'student' એ કોઈપણ વિદ્યાર્થી માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Statue of Unity' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The Statue of Unity is located in Gujarat.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Statue of Unity' એ ગુજરાતમાં આવેલી એક ચોક્કસ પ્રતિમાનું નામ છે. ચોક્કસ સ્મારક કે પ્રતિમાના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun છે?",
      "options": [
        "actor",
        "actress",
        "Amitabh Bachchan",
        "character"
      ],
      "answer": "Amitabh Bachchan",
      "explanation": "'Amitabh Bachchan' એક ચોક્કસ અભિનેતાનું નામ છે. બાકીના બધા સામાન્ય નામો છે. તેથી 'Amitabh Bachchan' Proper Noun છે."
    }
  ],
  "test-5": [
    {
      "question": "નીચેના વાક્યમાં 'computer' શબ્દ કયા પ્રકારનું નામ છે?<br><b>This is my new computer.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'computer' એ કોઈ પણ કમ્પ્યુટર માટે વાપરી શકાય તેવું સામાન્ય નામ છે, તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'The USA' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The USA is a powerful country.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'The USA' (United States of America) એ એક ચોક્કસ દેશનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun (વિશેષ નામ) નથી?",
      "options": [
        "Honda",
        "Toyota",
        "car company",
        "Suzuki"
      ],
      "answer": "car company",
      "explanation": "'car company' એ કોઈપણ કાર કંપની માટે વપરાતો સામાન્ય શબ્દ છે. 'Honda', 'Toyota', અને 'Suzuki' ચોક્કસ કંપનીઓના નામ છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "The Times of India",
        "newspaper",
        "The Guardian",
        "The New York Times"
      ],
      "answer": "newspaper",
      "explanation": "'newspaper' એ કોઈપણ અખબાર માટે વપરાતો સામાન્ય શબ્દ છે. બાકીના વિકલ્પો ચોક્કસ અખબારોના નામ છે."
    },
    {
      "question": "વાક્યમાં 'friend' શબ્દ શું છે?<br><b>He is my best friend.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Pronoun (સર્વનામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'friend' એ કોઈપણ મિત્ર માટે વપરાતો સામાન્ય શબ્દ છે, કોઈ ચોક્કસ મિત્રનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Sachin Tendulkar' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Sachin Tendulkar is a great cricketer.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Sachin Tendulkar' એક ચોક્કસ ખેલાડીનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun છે?",
      "options": [
        "Apple",
        "Samsung",
        "mobile phone",
        "Google"
      ],
      "answer": "mobile phone",
      "explanation": "'mobile phone' એ કોઈપણ મોબાઇલ ફોન માટે વપરાતો સામાન્ય શબ્દ છે. 'Apple', 'Samsung', અને 'Google' ચોક્કસ કંપનીઓના નામ છે."
    },
    {
      "question": "વાક્યમાં 'king' શબ્દ શું છે?<br><b>The king ruled the kingdom.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'king' એ કોઈપણ રાજા માટે વપરાતો સામાન્ય શબ્દ છે, કોઈ ચોક્કસ રાજાનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Facebook' શબ્દ કયા પ્રકારનું નામ છે?<br><b>I use Facebook every day.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Facebook' એ એક ચોક્કસ સોશિયલ મીડિયા પ્લેટફોર્મનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun નથી?",
      "options": [
        "Leonardo da Vinci",
        "artist",
        "Vincent van Gogh",
        "Pablo Picasso"
      ],
      "answer": "artist",
      "explanation": "'artist' કોઈપણ કલાકાર માટે વપરાતો સામાન્ય શબ્દ છે, તેથી તે Common Noun છે. બાકીના બધા ચોક્કસ કલાકારોના નામ છે."
    }
  ],
  "test-6": [
    {
      "question": "નીચેના વાક્યમાં 'planet' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Earth is a planet.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'planet' એ કોઈપણ ગ્રહ માટે વપરાતો સામાન્ય શબ્દ છે. તે કોઈ ચોક્કસ ગ્રહનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'The Bible' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The Bible is a holy book.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'The Bible' એ એક ચોક્કસ ધાર્મિક ગ્રંથનું નામ છે. ચોક્કસ પુસ્તકોના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "Sardar Patel",
        "leader",
        "Mahatma Gandhi",
        "Jawaharlal Nehru"
      ],
      "answer": "leader",
      "explanation": "'leader' એ કોઈપણ નેતા માટે વપરાતો સામાન્ય શબ્દ છે. બાકીના વિકલ્પો ચોક્કસ નેતાઓના નામ છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun (વિશેષ નામ) છે?",
      "options": [
        "state",
        "Gujarat",
        "country",
        "city"
      ],
      "answer": "Gujarat",
      "explanation": "'Gujarat' એક ચોક્કસ રાજ્યનું નામ છે. 'state', 'country', અને 'city' સામાન્ય નામો છે. તેથી, 'Gujarat' Proper Noun છે."
    },
    {
      "question": "વાક્યમાં 'teacher' શબ્દ શું છે?<br><b>The students respect their teacher.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'teacher' એ કોઈપણ શિક્ષક માટે વપરાતો સામાન્ય શબ્દ છે, કોઈ ચોક્કસ વ્યક્તિનું નામ નથી. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Atlantic Ocean' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The Atlantic Ocean is very large.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Atlantic Ocean' એ એક ચોક્કસ મહાસાગરનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun નથી?",
      "options": [
        "Monday",
        "Tuesday",
        "day",
        "Friday"
      ],
      "answer": "day",
      "explanation": "'day' એ કોઈપણ દિવસ માટે વપરાતો સામાન્ય શબ્દ છે. 'Monday', 'Tuesday', અને 'Friday' ચોક્કસ દિવસોના નામ છે."
    },
    {
      "question": "વાક્યમાં 'restaurant' શબ્દ શું છે?<br><b>We ate at a new restaurant.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'restaurant' એ કોઈપણ ભોજનાલય માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'William Shakespeare' શબ્દ કયા પ્રકારનું નામ છે?<br><b>William Shakespeare was a famous writer.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'William Shakespeare' એ એક ચોક્કસ લેખકનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "India Gate",
        "monument",
        "Eiffel Tower",
        "Statue of Liberty"
      ],
      "answer": "monument",
      "explanation": "'monument' એ કોઈપણ સ્મારક માટે વપરાતો સામાન્ય શબ્દ છે. બાકીના વિકલ્પો ચોક્કસ સ્મારકોના નામ છે."
    }
  ],
  "test-7": [
    {
      "question": "નીચેના વાક્યમાં 'laptop' શબ્દ કયા પ્રકારનું નામ છે?<br><b>She bought a new laptop.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'laptop' એ કોઈ પણ લેપટોપ માટે વાપરી શકાય તેવું સામાન્ય નામ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Microsoft' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Microsoft is a technology company.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Microsoft' એ એક ચોક્કસ કંપનીનું નામ છે. ચોક્કસ કંપની, સંસ્થા કે બ્રાન્ડના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun નથી?",
      "options": [
        "Toyota",
        "Nissan",
        "car",
        "Mercedes"
      ],
      "answer": "car",
      "explanation": "'car' એ કોઈપણ ગાડી માટે વપરાતો સામાન્ય શબ્દ (Common Noun) છે. 'Toyota', 'Nissan', અને 'Mercedes' ચોક્કસ કાર બ્રાન્ડના નામ છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "Mount Abu",
        "Girnar",
        "hill station",
        "Saputara"
      ],
      "answer": "hill station",
      "explanation": "'hill station' એ કોઈપણ ગિરિમથક માટે વપરાતો સામાન્ય શબ્દ છે. 'Mount Abu', 'Girnar', અને 'Saputara' ચોક્કસ સ્થળોના નામ છે."
    },
    {
      "question": "વાક્યમાં 'bird' શબ્દ શું છે?<br><b>A bird is flying in the sky.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'bird' એ કોઈપણ પક્ષી માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'The Indian Ocean' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The Indian Ocean is the third largest ocean.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'The Indian Ocean' એ એક ચોક્કસ મહાસાગરનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun છે?",
      "options": [
        "Asia",
        "Africa",
        "continent",
        "Europe"
      ],
      "answer": "continent",
      "explanation": "'continent' એ કોઈપણ ખંડ માટે વપરાતો સામાન્ય શબ્દ છે. 'Asia', 'Africa', અને 'Europe' ચોક્કસ ખંડોના નામ છે."
    },
    {
      "question": "વાક્યમાં 'flower' શબ્દ શું છે?<br><b>The garden is full of flowers.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'flower' એ કોઈપણ ફૂલ માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Albert Einstein' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Albert Einstein was a brilliant scientist.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Albert Einstein' એ એક ચોક્કસ વૈજ્ઞાનિકનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun છે?",
      "options": [
        "singer",
        "musician",
        "Lata Mangeshkar",
        "artist"
      ],
      "answer": "Lata Mangeshkar",
      "explanation": "'Lata Mangeshkar' એક ચોક્કસ ગાયિકાનું નામ છે. બાકીના બધા સામાન્ય નામો છે. તેથી 'Lata Mangeshkar' Proper Noun છે."
    }
  ],
  "test-8": [
    {
      "question": "નીચેના વાક્યમાં 'bridge' શબ્દ કયા પ્રકારનું નામ છે?<br><b>They built a new bridge over the river.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'bridge' એ કોઈ પણ પુલ માટે વાપરી શકાય તેવું સામાન્ય નામ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Jupiter' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Jupiter is the largest planet in our solar system.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Jupiter' એ આપણા સૌરમંડળના એક ચોક્કસ ગ્રહનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun નથી?",
      "options": [
        "Nike",
        "Adidas",
        "brand",
        "Puma"
      ],
      "answer": "brand",
      "explanation": "'brand' એ કોઈપણ બ્રાન્ડ માટે વપરાતો સામાન્ય શબ્દ (Common Noun) છે. 'Nike', 'Adidas', અને 'Puma' ચોક્કસ બ્રાન્ડના નામ છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "Statue of Liberty",
        "monument",
        "Eiffel Tower",
        "Colosseum"
      ],
      "answer": "monument",
      "explanation": "'monument' એ કોઈપણ સ્મારક માટે વપરાતો સામાન્ય શબ્દ છે. બાકીના વિકલ્પો ચોક્કસ સ્મારકોના નામ છે."
    },
    {
      "question": "વાક્યમાં 'tree' શબ્દ શું છે?<br><b>There is a big tree in the garden.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'tree' એ કોઈપણ વૃક્ષ માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'The Quran' શબ્દ કયા પ્રકારનું નામ છે?<br><b>'The Quran' is the holy book of Islam.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'The Quran' એ ઇસ્લામના એક ચોક્કસ પવિત્ર ગ્રંથનું નામ છે. ચોક્કસ ગ્રંથોના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun છે?",
      "options": [
        "Leonardo DiCaprio",
        "Tom Hanks",
        "actor",
        "Brad Pitt"
      ],
      "answer": "actor",
      "explanation": "'actor' એ કોઈપણ અભિનેતા માટે વપરાતો સામાન્ય શબ્દ છે. બાકીના વિકલ્પો ચોક્કસ અભિનેતાઓના નામ છે."
    },
    {
      "question": "વાક્યમાં 'hospital' શબ્દ શું છે?<br><b>She was taken to the hospital.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'hospital' એ કોઈપણ દવાખાના માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Google' શબ્દ કયા પ્રકારનું નામ છે?<br><b>I searched for it on Google.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Google' એ એક ચોક્કસ સર્ચ એન્જિન અને કંપનીનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun નથી?",
      "options": [
        "Pacific",
        "Atlantic",
        "ocean",
        "Arctic"
      ],
      "answer": "ocean",
      "explanation": "'ocean' કોઈપણ મહાસાગર માટે વપરાતો સામાન્ય શબ્દ છે, તેથી તે Common Noun છે. બાકીના બધા ચોક્કસ મહાસાગરોના નામ છે."
    }
  ],
  "test-9": [
    {
      "question": "નીચેના વાક્યમાં 'city' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Delhi is a big city.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'city' એ કોઈ પણ શહેર માટે વાપરી શકાય તેવું સામાન્ય નામ છે. વાક્યમાં 'Delhi' Proper Noun છે, પણ 'city' Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'The Lord of the Rings' શબ્દ કયા પ્રકારનું નામ છે?<br><b>'The Lord of the Rings' was written by J.R.R. Tolkien.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'The Lord of the Rings' એ એક ચોક્કસ પુસ્તકનું નામ છે. ચોક્કસ પુસ્તકો, ફિલ્મો, કે કલાકૃતિઓના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun છે?",
      "options": [
        "sports car",
        "vehicle",
        "Ferrari",
        "automobile"
      ],
      "answer": "Ferrari",
      "explanation": "'Ferrari' એક ચોક્કસ કાર બ્રાન્ડનું નામ છે. બાકીના વિકલ્પો સામાન્ય નામો છે. તેથી 'Ferrari' Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "The Great Wall of China",
        "wall",
        "Berlin Wall",
        "Hadrian's Wall"
      ],
      "answer": "wall",
      "explanation": "'wall' એ કોઈપણ દીવાલ માટે વપરાતો સામાન્ય શબ્દ છે. બાકીના વિકલ્પો ચોક્કસ દીવાલોના નામ છે."
    },
    {
      "question": "વાક્યમાં 'player' શબ્દ શું છે?<br><b>He is a talented player.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'player' એ કોઈપણ ખેલાડી માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Amazon' (નદી) શબ્દ કયા પ્રકારનું નામ છે?<br><b>The Amazon is the largest river by discharge volume of water in the world.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Amazon' એ એક ચોક્કસ નદીનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun નથી?",
      "options": [
        "road",
        "street",
        "highway",
        "Abbey Road"
      ],
      "answer": "Abbey Road",
      "explanation": "'Abbey Road' લંડનમાં આવેલા એક ચોક્કસ રસ્તાનું નામ છે (અને એક પ્રખ્યાત આલ્બમનું પણ). તેથી તે Proper Noun છે. બાકીના સામાન્ય નામો છે."
    },
    {
      "question": "વાક્યમાં 'animal' શબ્દ શું છે?<br><b>The lion is a wild animal.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'animal' એ કોઈપણ પ્રાણી માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'The Mona Lisa' શબ્દ કયા પ્રકારનું નામ છે?<br><b>'The Mona Lisa' is a famous painting.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'The Mona Lisa' એ એક ચોક્કસ પેઇન્ટિંગનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun છે?",
      "options": [
        "king",
        "queen",
        "prince",
        "King Charles"
      ],
      "answer": "King Charles",
      "explanation": "'King Charles' એક ચોક્કસ રાજાનું નામ છે. 'king', 'queen', અને 'prince' સામાન્ય પદવીઓ છે. તેથી 'King Charles' Proper Noun છે."
    }
  ],
  "test-10": [
    {
      "question": "નીચેના વાક્યમાં 'book' શબ્દ કયા પ્રકારનું નામ છે?<br><b>This is an interesting book.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'book' એ કોઈ પણ પુસ્તક માટે વાપરી શકાય તેવું સામાન્ય નામ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Eiffel Tower' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The Eiffel Tower is in Paris.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Eiffel Tower' એ પેરિસમાં આવેલા એક ચોક્કસ ટાવરનું નામ છે. ચોક્કસ ઇમારતો કે સ્મારકોના નામને Proper Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun નથી?",
      "options": [
        "Mercury",
        "Venus",
        "planet",
        "Mars"
      ],
      "answer": "planet",
      "explanation": "'planet' એ કોઈપણ ગ્રહ માટે વપરાતો સામાન્ય શબ્દ (Common Noun) છે. 'Mercury', 'Venus', અને 'Mars' ચોક્કસ ગ્રહોના નામ છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun (જાતિવાચક નામ) છે?",
      "options": [
        "The Alps",
        "The Rockies",
        "mountain range",
        "The Andes"
      ],
      "answer": "mountain range",
      "explanation": "'mountain range' એ કોઈપણ પર્વતમાળા માટે વપરાતો સામાન્ય શબ્દ છે. બાકીના વિકલ્પો ચોક્કસ પર્વતમાળાઓના નામ છે."
    },
    {
      "question": "વાક્યમાં 'child' શબ્દ શું છે?<br><b>Every child needs love and care.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'child' એ કોઈપણ બાળક માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'Coca-Cola' શબ્દ કયા પ્રકારનું નામ છે?<br><b>I would like a Coca-Cola.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'Coca-Cola' એ એક ચોક્કસ પીણાની બ્રાન્ડનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Common Noun છે?",
      "options": [
        "BMW",
        "Audi",
        "car",
        "Mercedes-Benz"
      ],
      "answer": "car",
      "explanation": "'car' એ કોઈપણ ગાડી માટે વપરાતો સામાન્ય શબ્દ છે. બાકીના વિકલ્પો ચોક્કસ કાર બ્રાન્ડના નામ છે."
    },
    {
      "question": "વાક્યમાં 'ocean' શબ્દ શું છે?<br><b>The ship sailed across the ocean.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "'ocean' એ કોઈપણ મહાસાગર માટે વપરાતો સામાન્ય શબ્દ છે. તેથી તે Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'The Beatles' શબ્દ કયા પ્રકારનું નામ છે?<br><b>'The Beatles' were a famous band.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Proper Noun (વિશેષ નામ)",
      "explanation": "'The Beatles' એ એક ચોક્કસ મ્યુઝિક બેન્ડનું નામ છે. તેથી, તે Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Proper Noun નથી?",
      "options": [
        "writer",
        "J.K. Rowling",
        "George R.R. Martin",
        "Stephen King"
      ],
      "answer": "writer",
      "explanation": "'writer' કોઈપણ લેખક માટે વપરાતો સામાન્ય શબ્દ છે, તેથી તે Common Noun છે. બાકીના બધા ચોક્કસ લેખકોના નામ છે."
    }
  ],
  "test-11": [
    {
      "question": "નીચેના વાક્યમાં 'team' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Our team won the match.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "Collective Noun (સમૂહવાચક નામ) એ વ્યક્તિઓ, વસ્તુઓ કે પ્રાણીઓના સમૂહને દર્શાવે છે. 'team' એ ખેલાડીઓના સમૂહને દર્શાવે છે, તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'gold' શબ્દ કયા પ્રકારનું નામ છે?<br><b>This ring is made of gold.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "Material Noun (દ્રવ્યવાચક નામ) એ પદાર્થ કે દ્રવ્યનું નામ છે જેમાંથી વસ્તુઓ બને છે. 'gold' (સોનું) એક દ્રવ્ય છે, તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "soldier",
        "captain",
        "army",
        "general"
      ],
      "answer": "army",
      "explanation": "'army' (સૈન્ય) એ સૈનિકોના સમૂહને દર્શાવે છે. તેથી, તે Collective Noun છે. 'soldier' એ Common Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "chair",
        "table",
        "wood",
        "furniture"
      ],
      "answer": "wood",
      "explanation": "'wood' (લાકડું) એક દ્રવ્ય છે જેમાંથી 'chair' અને 'table' જેવી વસ્તુઓ બને છે. તેથી 'wood' Material Noun છે."
    },
    {
      "question": "વાક્યમાં 'flock' શબ્દ શું છે?<br><b>A flock of sheep is grazing in the field.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'flock' (ટોળું) એ ઘેટાંના સમૂહને દર્શાવે છે. સમૂહ દર્શાવતા નામને Collective Noun કહેવાય છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'plastic' શબ્દ કયા પ્રકારનું નામ છે?<br><b>This toy is made of plastic.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'plastic' એક દ્રવ્ય છે જેમાંથી રમકડાં જેવી વસ્તુઓ બને છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun નથી?",
      "options": [
        "crowd",
        "person",
        "audience",
        "family"
      ],
      "answer": "person",
      "explanation": "'crowd' (ભીડ), 'audience' (શ્રોતાગણ), અને 'family' (પરિવાર) સમૂહ દર્શાવે છે. 'person' (વ્યક્તિ) એકવચન અને સામાન્ય નામ છે."
    },
    {
      "question": "વાક્યમાં 'silver' શબ્દ શું છે?<br><b>Her necklace is made of silver.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'silver' (ચાંદી) એક ધાતુ અને દ્રવ્ય છે. જેમાંથી વસ્તુઓ બને તેવા દ્રવ્યના નામને Material Noun કહેવાય છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'bunch' શબ્દ કયા પ્રકારનું નામ છે?<br><b>He gave me a bunch of grapes.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'bunch' (ઝૂમખું) એ દ્રાક્ષના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "cake",
        "bread",
        "flour",
        "biscuit"
      ],
      "answer": "flour",
      "explanation": "'flour' (લોટ) એક દ્રવ્ય છે જેમાંથી 'cake' અને 'bread' જેવી વસ્તુઓ બને છે. તેથી 'flour' Material Noun છે."
    }
  ],
  "test-12": [
    {
      "question": "નીચેના વાક્યમાં 'jury' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The jury has given its verdict.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'jury' એ ન્યાયાધીશોના સમૂહને દર્શાવે છે. એક જ નામથી ઓળખાતા સમૂહને Collective Noun કહેવાય છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'cotton' શબ્દ કયા પ્રકારનું નામ છે?<br><b>This shirt is made of cotton.</b>",
      "options": [
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'cotton' (કપાસ) એક દ્રવ્ય છે જેમાંથી કપડાં જેવી વસ્તુઓ બને છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "ship",
        "sailor",
        "crew",
        "captain"
      ],
      "answer": "crew",
      "explanation": "'crew' એ જહાજ પર કામ કરતા ખલાસીઓના સમૂહને દર્શાવે છે. તેથી, તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) નથી?",
      "options": [
        "water",
        "milk",
        "bottle",
        "oil"
      ],
      "answer": "bottle",
      "explanation": "'water', 'milk', અને 'oil' દ્રવ્યો છે. 'bottle' એ તે દ્રવ્યોને ભરવા માટે વપરાતી એક વસ્તુ (Common Noun) છે, દ્રવ્ય નથી."
    },
    {
      "question": "વાક્યમાં 'herd' શબ્દ શું છે?<br><b>I saw a herd of elephants.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'herd' (ટોળું) એ હાથી જેવા પ્રાણીઓના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'iron' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The gate is made of iron.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'iron' (લોખંડ) એક ધાતુ અને દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun છે?",
      "options": [
        "player",
        "team",
        "coach",
        "stadium"
      ],
      "answer": "team",
      "explanation": "'team' (ટુકડી) એ ખેલાડીઓના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "વાક્યમાં 'paper' શબ્દ શું છે?<br><b>Books are made from paper.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "આ વાક્યમાં, 'paper' (કાગળ) એ એક દ્રવ્ય તરીકે વપરાયો છે જેમાંથી પુસ્તકો બને છે. તેથી અહીં તે Material Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'committee' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The committee is discussing the issue.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'committee' (સમિતિ) એ સભ્યોના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "ring",
        "necklace",
        "jewellery",
        "diamond"
      ],
      "answer": "diamond",
      "explanation": "'diamond' (હીરો) એક દ્રવ્ય છે જેમાંથી ઘરેણાં બને છે. 'ring' અને 'necklace' વસ્તુઓ છે. 'jewellery' એ વસ્તુઓનો સમૂહ છે. તેથી 'diamond' Material Noun છે."
    }
  ],
  "test-13": [
    {
      "question": "નીચેના વાક્યમાં 'class' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The whole class was silent.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'class' (વર્ગ) એ વિદ્યાર્થીઓના સમૂહને દર્શાવે છે. તેથી, તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'glass' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The window is made of glass.</b>",
      "options": [
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'glass' (કાચ) એક દ્રવ્ય છે જેમાંથી બારી જેવી વસ્તુઓ બને છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "flower",
        "bouquet",
        "garden",
        "rose"
      ],
      "answer": "bouquet",
      "explanation": "'bouquet' (ગુચ્છો) એ ફૂલોના સમૂહને દર્શાવે છે. તેથી, તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "cup",
        "tea",
        "kettle",
        "sugar"
      ],
      "answer": "sugar",
      "explanation": "'sugar' (ખાંડ) એક દ્રવ્ય છે જેનો ઉપયોગ ખાવા-પીવાની વસ્તુઓમાં થાય છે. તેથી તે Material Noun છે. 'tea' પણ દ્રવ્ય છે, પણ વિકલ્પોમાંથી 'sugar' વધુ યોગ્ય છે."
    },
    {
      "question": "વાક્યમાં 'library' શબ્દ શું છે?<br><b>A library is a collection of books.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'library' (પુસ્તકાલય) એ પુસ્તકોના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે. જોકે, તે સ્થળ તરીકે Common Noun પણ હોઈ શકે છે, પણ અહીં 'collection of books' પર ભાર છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'milk' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Children should drink milk every day.</b>",
      "options": [
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'milk' (દૂધ) એક પ્રવાહી અને દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun નથી?",
      "options": [
        "government",
        "politician",
        "parliament",
        "council"
      ],
      "answer": "politician",
      "explanation": "'government' (સરકાર), 'parliament' (સંસદ), અને 'council' (પરિષદ) લોકોના સમૂહને દર્શાવે છે. 'politician' (રાજકારણી) એ એક વ્યક્તિ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં 'leather' શબ્દ શું છે?<br><b>My shoes are made of leather.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'leather' (ચામડું) એક દ્રવ્ય છે જેમાંથી પગરખાં જેવી વસ્તુઓ બને છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'gang' શબ્દ કયા પ્રકારનું નામ છે?<br><b>A gang of robbers was arrested.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'gang' (ટોળકી) એ લૂંટારાઓના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun છે?",
      "options": [
        "pizza",
        "cheese",
        "oven",
        "box"
      ],
      "answer": "cheese",
      "explanation": "'cheese' એક ખાદ્ય દ્રવ્ય છે જેમાંથી પિઝા જેવી વાનગીઓ બને છે. તેથી 'cheese' Material Noun છે."
    }
  ],
  "test-14": [
    {
      "question": "નીચેના વાક્યમાં 'crowd' શબ્દ કયા પ્રકારનું નામ છે?<br><b>A large crowd gathered in the street.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'crowd' (ભીડ) એ લોકોના સમૂહને દર્શાવે છે. તેથી, તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'air' શબ્દ કયા પ્રકારનું નામ છે?<br><b>We need fresh air to breathe.</b>",
      "options": [
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'air' (હવા) એક દ્રવ્ય (ગેસ) છે. જે વસ્તુને જોઈ કે સ્પર્શી ન શકાય પણ તે દ્રવ્ય હોય, તેને Material Noun ગણવામાં આવે છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "bee",
        "hive",
        "swarm",
        "honey"
      ],
      "answer": "swarm",
      "explanation": "'swarm' એ મધમાખીઓ જેવા ઉડતા જંતુઓના ટોળાને દર્શાવે છે. 'hive' એ તેમનું ઘર છે. તેથી 'swarm' Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) નથી?",
      "options": [
        "steel",
        "brass",
        "metal",
        "sword"
      ],
      "answer": "sword",
      "explanation": "'steel' અને 'brass' ધાતુઓ (Material Nouns) છે. 'metal' પણ દ્રવ્યનો પ્રકાર છે. 'sword' (તલવાર) એ ધાતુમાંથી બનેલી એક વસ્તુ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં 'band' શબ્દ શું છે?<br><b>A band of musicians was playing music.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'band' એ સંગીતકારોના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'water' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Please give me a glass of water.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'water' (પાણી) એક પ્રવાહી દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun છે?",
      "options": [
        "book",
        "library",
        "page",
        "author"
      ],
      "answer": "library",
      "explanation": "'library' (પુસ્તકાલય) એ પુસ્તકોના સંગ્રહ કે સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "વાક્યમાં 'wool' શબ્દ શું છે?<br><b>Sweaters are made of wool.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'wool' (ઊન) એક દ્રવ્ય છે જેમાંથી સ્વેટર જેવી વસ્તુઓ બને છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'audience' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The audience clapped loudly.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'audience' (શ્રોતાગણ/પ્રેક્ષકગણ) એ લોકોના સમૂહને દર્શાવે છે જે કોઈ કાર્યક્રમ જોઈ રહ્યા છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "building",
        "cement",
        "wall",
        "house"
      ],
      "answer": "cement",
      "explanation": "'cement' એક બાંધકામ સામગ્રી (દ્રવ્ય) છે. 'building', 'wall', અને 'house' તેમાંથી બનેલી વસ્તુઓ (Common Nouns) છે."
    }
  ],
  "test-15": [
    {
      "question": "નીચેના વાક્યમાં 'family' શબ્દ કયા પ્રકારનું નામ છે?<br><b>My family lives in a small house.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'family' (કુટુંબ) એ સભ્યોના સમૂહને દર્શાવે છે. તેથી, તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'silk' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The saree is made of pure silk.</b>",
      "options": [
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'silk' (રેશમ) એક પ્રકારનું દ્રવ્ય છે જેમાંથી કપડાં બને છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "fish",
        "river",
        "school",
        "water"
      ],
      "answer": "school",
      "explanation": "'school' શબ્દનો એક અર્થ 'માછલીઓનું ટોળું' પણ થાય છે. તેથી, આ સંદર્ભમાં તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "coal",
        "mine",
        "miner",
        "engine"
      ],
      "answer": "coal",
      "explanation": "'coal' (કોલસો) એક કુદરતી દ્રવ્ય છે. 'mine' (ખાણ) એ સ્થળ છે અને 'miner' (ખાણિયો) એ વ્યક્તિ છે."
    },
    {
      "question": "વાક્યમાં 'fleet' શબ્દ શું છે?<br><b>A fleet of ships is in the harbor.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'fleet' (વહાણોનો કાફલો) એ જહાજોના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'plastic' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Most toys are made of plastic.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'plastic' એક કૃત્રિમ દ્રવ્ય છે જેમાંથી વસ્તુઓ બનાવવામાં આવે છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun નથી?",
      "options": [
        "pack",
        "wolf",
        "herd",
        "flock"
      ],
      "answer": "wolf",
      "explanation": "'pack' (વરુઓનું ટોળું), 'herd' (પ્રાણીઓનું ટોળું), અને 'flock' (પક્ષીઓ/ઘેટાંનું ટોળું) સમૂહ દર્શાવે છે. 'wolf' (વરુ) એક પ્રાણીનું સામાન્ય નામ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં 'wood' શબ્દ શું છે?<br><b>The table is made of wood.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'wood' (લાકડું) એ એક દ્રવ્ય છે જેમાંથી ટેબલ બને છે. તેથી અહીં તે Material Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'parliament' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The parliament passed the bill.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'parliament' (સંસદ) એ ચૂંટાયેલા પ્રતિનિધિઓના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun છે?",
      "options": [
        "juice",
        "glass",
        "bottle",
        "jug"
      ],
      "answer": "juice",
      "explanation": "'juice' (રસ) એક પ્રવાહી દ્રવ્ય છે. 'glass', 'bottle', અને 'jug' તે ભરવા માટેની વસ્તુઓ (Common Nouns) છે."
    }
  ],
  "test-16": [
    {
      "question": "નીચેના વાક્યમાં 'choir' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The school choir sang beautifully.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'choir' (ગાયકવૃંદ) એ ગાયકોના સમૂહને દર્શાવે છે. તેથી, તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'bronze' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The statue is made of bronze.</b>",
      "options": [
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'bronze' (કાંસું) એક મિશ્ર ધાતુ અને દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "grape",
        "bunch",
        "vine",
        "fruit"
      ],
      "answer": "bunch",
      "explanation": "'bunch' (ઝૂમખું/ગુચ્છો) એ દ્રાક્ષ, ચાવીઓ, કે ફૂલોના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) નથી?",
      "options": [
        "sand",
        "stone",
        "rock",
        "beach"
      ],
      "answer": "beach",
      "explanation": "'sand' (રેતી), 'stone' (પથ્થર), અને 'rock' (ખડક) દ્રવ્યો છે. 'beach' (દરિયાકિનારો) એ એક સ્થળ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં 'orchestra' શબ્દ શું છે?<br><b>The orchestra played a symphony.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'orchestra' એ વાદ્યવૃંદ, એટલે કે વાદ્ય વગાડનારાઓના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'honey' શબ્દ કયા પ્રકારનું નામ છે?<br><b>I like honey in my tea.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'honey' (મધ) એક ખાદ્ય દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun છે?",
      "options": [
        "board",
        "director",
        "meeting",
        "company"
      ],
      "answer": "board",
      "explanation": "'board' (જેમ કે Board of Directors) એ સંચાલકોના સમૂહ (મંડળ) ને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "વાક્યમાં 'glass' શબ્દનો પ્રકાર ઓળખો.<br><b>I drank a glass of water.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Common Noun (જાતિવાચક નામ)",
      "explanation": "આ વાક્યમાં, 'glass' એ પાણી પીવા માટેના પાત્ર (પ્યાલો) તરીકે વપરાયો છે, જે એક વસ્તુ છે. તેથી અહીં તે Common Noun છે. જો તે 'The window is made of glass' માં હોત તો તે Material Noun હોત."
    },
    {
      "question": "નીચેના વાક્યમાં 'staff' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The hotel staff is very helpful.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'staff' એ કર્મચારીઓના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "rain",
        "cloud",
        "sky",
        "water"
      ],
      "answer": "water",
      "explanation": "'water' (પાણી) એક દ્રવ્ય છે. 'rain' એ એક ઘટના છે, 'cloud' એક વસ્તુ છે અને 'sky' એક સ્થળ છે."
    }
  ],
  "test-17": [
    {
      "question": "નીચેના વાક્યમાં 'pack' શબ્દ કયા પ્રકારનું નામ છે?<br><b>A pack of wolves was seen in the forest.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'pack' એ વરુઓ જેવા પ્રાણીઓના ટોળાને દર્શાવે છે. તેથી, તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'salt' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Add some salt to the soup.</b>",
      "options": [
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'salt' (મીઠું) એક ખાદ્ય દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "student",
        "teacher",
        "class",
        "school"
      ],
      "answer": "class",
      "explanation": "'class' (વર્ગ) એ વિદ્યાર્થીઓના સમૂહને દર્શાવે છે. 'school' એક સ્થળ છે. તેથી 'class' Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "chair",
        "wood",
        "forest",
        "tree"
      ],
      "answer": "wood",
      "explanation": "'wood' (લાકડું) એ એક દ્રવ્ય છે જેમાંથી 'chair' જેવી વસ્તુઓ બને છે. 'tree' Common Noun છે અને 'forest' Collective Noun છે."
    },
    {
      "question": "વાક્યમાં 'colony' શબ્દ શું છે?<br><b>A colony of ants marched across the path.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'colony' એ કીડીઓ જેવા જંતુઓના સમૂહ (વસાહત)ને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'marble' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The floor is made of marble.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'marble' (આરસપહાણ) એક પ્રકારનો પથ્થર અને દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun નથી?",
      "options": [
        "gaggle",
        "goose",
        "flock",
        "herd"
      ],
      "answer": "goose",
      "explanation": "'gaggle' (હંસોનું ટોળું), 'flock' (ટોળું), અને 'herd' (ટોળું) સમૂહ દર્શાવે છે. 'goose' (હંસ) એક પક્ષીનું સામાન્ય નામ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં 'steel' શબ્દ શું છે?<br><b>This building is reinforced with steel.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'steel' (પોલાદ) એક ધાતુ અને દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'council' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The town council made a decision.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'council' (પરિષદ) એ સભ્યોના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun છે?",
      "options": [
        "shirt",
        "trousers",
        "fabric",
        "clothes"
      ],
      "answer": "fabric",
      "explanation": "'fabric' (કાપડ) એ એક દ્રવ્ય છે જેમાંથી 'shirt' અને 'trousers' જેવા કપડાં બને છે. તેથી 'fabric' Material Noun છે."
    }
  ],
  "test-18": [
    {
      "question": "નીચેના વાક્યમાં 'litter' શબ્દ કયા પ્રકારનું નામ છે?<br><b>We saw a litter of puppies.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'litter' એ ગલૂડિયાં કે બિલાડીના બચ્ચાં જેવા એક સાથે જન્મેલા બચ્ચાઓના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'oxygen' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Plants produce oxygen.</b>",
      "options": [
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'oxygen' એક વાયુ (દ્રવ્ય) છે. જે વસ્તુઓનું રાસાયણિક કે ભૌતિક સ્વરૂપ હોય તેને Material Noun કહેવાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "galaxy",
        "star",
        "constellation",
        "planet"
      ],
      "answer": "constellation",
      "explanation": "'constellation' (નક્ષત્ર) એ તારાઓના સમૂહને દર્શાવે છે જે એક ચોક્કસ આકાર બનાવે છે. તેથી, તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "statue",
        "clay",
        "sculptor",
        "art"
      ],
      "answer": "clay",
      "explanation": "'clay' (માટી) એક દ્રવ્ય છે જેમાંથી 'statue' (મૂર્તિ) જેવી વસ્તુઓ બને છે. તેથી 'clay' Material Noun છે."
    },
    {
      "question": "વાક્યમાં 'mob' શબ્દ શું છે?<br><b>The police dispersed the angry mob.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'mob' (ટોળું, ખાસ કરીને ગુસ્સે થયેલું) એ લોકોના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'brass' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The trophy is made of brass.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Proper Noun (વિશેષ નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'brass' (પિત્તળ) એક મિશ્રધાતુ અને દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun નથી?",
      "options": [
        "tribe",
        "village",
        "native",
        "clan"
      ],
      "answer": "native",
      "explanation": "'tribe' (આદિજાતિ), 'village' (ગામ), અને 'clan' (કુળ) લોકોના સમૂહને દર્શાવે છે. 'native' (મૂળ નિવાસી) એ એક વ્યક્તિ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં 'rubber' શબ્દ શું છે?<br><b>Tires are made from rubber.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'rubber' એક દ્રવ્ય છે જેમાંથી ટાયર જેવી વસ્તુઓ બને છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'regiment' શબ્દ કયા પ્રકારનું નામ છે?<br><b>A regiment of soldiers marched past.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'regiment' એ સૈનિકોની એક મોટી ટુકડી (પલટન) ને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "poem",
        "book",
        "ink",
        "pen"
      ],
      "answer": "ink",
      "explanation": "'ink' (શાહી) એક પ્રવાહી દ્રવ્ય છે જેનો ઉપયોગ લખવા માટે થાય છે. 'pen' અને 'book' વસ્તુઓ છે."
    }
  ],
  "test-19": [
    {
      "question": "નીચેના વાક્યમાં 'pride' શબ્દ કયા પ્રકારનું નામ છે?<br><b>He saw a pride of lions.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "આ વાક્યમાં, 'pride' એ સિંહોના ટોળાને દર્શાવે છે. જ્યારે 'pride' ગર્વના ભાવ તરીકે વપરાય ત્યારે તે Abstract Noun હોય છે, પરંતુ અહીં તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'dough' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The baker is kneading the dough.</b>",
      "options": [
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'dough' (કણક) એ લોટ અને પાણીનું મિશ્રણ છે, જે એક દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "card",
        "deck",
        "game",
        "player"
      ],
      "answer": "deck",
      "explanation": "'deck' એ પત્તાના સમૂહ (ગંજી)ને દર્શાવે છે. તેથી, તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "house",
        "brick",
        "wall",
        "builder"
      ],
      "answer": "brick",
      "explanation": "'brick' (ઈંટ) એક બાંધકામ સામગ્રી છે, જે દ્રવ્ય ગણાય છે. 'house' અને 'wall' તેમાંથી બનેલી રચનાઓ છે. 'builder' વ્યક્તિ છે."
    },
    {
      "question": "વાક્યમાં 'congregation' શબ્દ શું છે?<br><b>The congregation listened to the sermon.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'congregation' એ ધાર્મિક સભામાં એકઠા થયેલા લોકોના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'chalk' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The teacher wrote with a piece of chalk.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'chalk' એક દ્રવ્ય છે જેમાંથી લખવા માટેના ચોક બને છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun નથી?",
      "options": [
        "orchestra",
        "band",
        "musician",
        "choir"
      ],
      "answer": "musician",
      "explanation": "'orchestra', 'band', અને 'choir' સંગીતકારોના સમૂહને દર્શાવે છે. 'musician' (સંગીતકાર) એ એક વ્યક્તિ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં 'porcelain' શબ્દ શું છે?<br><b>This vase is made of porcelain.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'porcelain' (ચિનાઈ માટી) એક પ્રકારનું દ્રવ્ય છે જેમાંથી વાસણો જેવી વસ્તુઓ બને છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'troupe' શબ્દ કયા પ્રકારનું નામ છે?<br><b>A troupe of dancers performed on stage.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'troupe' એ કલાકારો, ખાસ કરીને નર્તકો કે અભિનેતાઓના સમૂહ (મંડળી)ને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun છે?",
      "options": [
        "perfume",
        "bottle",
        "fragrance",
        "scent"
      ],
      "answer": "perfume",
      "explanation": "'perfume' (અત્તર) એ એક પ્રવાહી દ્રવ્ય છે. 'bottle' એક વસ્તુ છે. 'fragrance' અને 'scent' એ ભાવવાચક નામ (Abstract Noun) છે."
    }
  ],
  "test-20": [
    {
      "question": "નીચેના વાક્યમાં 'string' શબ્દ કયા પ્રકારનું નામ છે?<br><b>She bought a string of pearls.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "આ વાક્યમાં, 'string' એ મોતીઓની માળા (સમૂહ) દર્શાવે છે. તેથી, અહીં તે Collective Noun તરીકે વપરાયું છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'cement' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Cement is used in construction.</b>",
      "options": [
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'cement' એક બાંધકામ સામગ્રી (દ્રવ્ય) છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun (સમૂહવાચક નામ) છે?",
      "options": [
        "galaxy",
        "universe",
        "star",
        "solar system"
      ],
      "answer": "galaxy",
      "explanation": "'galaxy' (આકાશગંગા) એ તારાઓ, ગ્રહો અને અન્ય અવકાશી પદાર્થોના વિશાળ સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "raincoat",
        "umbrella",
        "rain",
        "plastic"
      ],
      "answer": "plastic",
      "explanation": "'plastic' એક દ્રવ્ય છે જેમાંથી રેઈનકોટ જેવી વસ્તુઓ બને છે. 'rain' એક કુદરતી ઘટના છે. તેથી, 'plastic' Material Noun છે."
    },
    {
      "question": "વાક્યમાં 'board' શબ્દ શું છે?<br><b>The board of directors will meet tomorrow.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'board' (જેમ કે board of directors) એ સંચાલકોના સમૂહને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'sand' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The desert is full of sand.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'sand' (રેતી) એ એક દ્રવ્ય છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Collective Noun નથી?",
      "options": [
        "jury",
        "judge",
        "committee",
        "panel"
      ],
      "answer": "judge",
      "explanation": "'jury', 'committee', અને 'panel' લોકોના સમૂહને દર્શાવે છે. 'judge' (ન્યાયાધીશ) એ એક વ્યક્તિ (Common Noun) છે."
    },
    {
      "question": "વાક્યમાં 'coal' શબ્દ શું છે?<br><b>Coal is a fossil fuel.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Material Noun (દ્રવ્યવાચક નામ)",
      "explanation": "'coal' (કોલસો) એક દ્રવ્ય અને બળતણ છે. તેથી તે Material Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'shoal' શબ્દ કયા પ્રકારનું નામ છે?<br><b>A shoal of fish swam by.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Proper Noun (વિશેષ નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Collective Noun (સમૂહવાચક નામ)",
      "explanation": "'shoal' એ માછલીઓના ટોળાને દર્શાવે છે. તેથી તે Collective Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Material Noun (દ્રવ્યવાચક નામ) છે?",
      "options": [
        "cup",
        "saucer",
        "ceramic",
        "plate"
      ],
      "answer": "ceramic",
      "explanation": "'ceramic' (ચીનાઈ માટી) એક દ્રવ્ય છે જેમાંથી 'cup' અને 'plate' જેવી વસ્તુઓ બને છે. તેથી 'ceramic' Material Noun છે."
    }
  ],
  "test-21": [
    {
      "question": "નીચેના વાક્યમાં 'honesty' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Honesty is the best policy.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "Abstract Noun (ભાવવાચક નામ) એ ગુણ, વિચાર, લાગણી કે અવસ્થા દર્શાવે છે જેને સ્પર્શી કે જોઈ શકાતું નથી. 'honesty' (પ્રામાણિકતા) એક ગુણ છે, તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'team' અને 'spirit' કયા પ્રકારના નામ છે?<br><b>The team showed great spirit.</b>",
      "options": [
        "Collective, Abstract",
        "Common, Proper",
        "Material, Collective",
        "Abstract, Common"
      ],
      "answer": "Collective, Abstract",
      "explanation": "'team' (ટુકડી) એ ખેલાડીઓના સમૂહને દર્શાવે છે, તેથી તે Collective Noun છે. 'spirit' (જુસ્સો) એક ભાવ છે, તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "child",
        "childhood",
        "toy",
        "game"
      ],
      "answer": "childhood",
      "explanation": "'childhood' (બાળપણ) એ જીવનની એક અવસ્થા છે. તેને જોઈ કે સ્પર્શી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'wisdom' શબ્દ શું છે?<br><b>King Solomon was known for his wisdom.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'wisdom' (શાણપણ/બુદ્ધિ) એક ગુણ છે. તે એક ભાવવાચક નામ છે કારણ કે તેને ઇન્દ્રિયો દ્વારા અનુભવી શકાતું નથી."
    },
    {
      "question": "આપેલા વાક્યમાં કયા બે પ્રકારના નામ છે?<br><b>The jury praised his courage.</b>",
      "options": [
        "Proper, Common",
        "Collective, Abstract",
        "Material, Proper",
        "Common, Collective"
      ],
      "answer": "Collective, Abstract",
      "explanation": "'jury' (ન્યાયાધીશોનું મંડળ) એ Collective Noun છે અને 'courage' (હિંમત) એ Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'poverty' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Poverty is a major problem.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'poverty' (ગરીબી) એક અવસ્થા છે. તે એક ભાવ છે, જેને જોઈ કે સ્પર્શી શકાતો નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "love",
        "hate",
        "friendship",
        "friend"
      ],
      "answer": "friend",
      "explanation": "'love' (પ્રેમ), 'hate' (નફરત), અને 'friendship' (મિત્રતા) ભાવો અને સંબંધો છે, જે Abstract Nouns છે. 'friend' (મિત્ર) એક વ્યક્તિ છે, જે Common Noun છે."
    },
    {
      "question": "વાક્યમાં 'knowledge' શબ્દ શું છે?<br><b>Knowledge is power.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'knowledge' (જ્ઞાન) એક વિચાર કે ખ્યાલ છે. તેને ભૌતિક રીતે સ્પર્શી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા ત્રણ પ્રકારના નામ છે?<br><b>The army fought with bravery for the freedom of their country.</b>",
      "options": [
        "Collective, Abstract, Common",
        "Proper, Material, Common",
        "Collective, Material, Abstract",
        "Common, Proper, Abstract"
      ],
      "answer": "Collective, Abstract, Common",
      "explanation": "'army' (સૈન્ય) Collective Noun છે, 'bravery' (બહાદુરી) અને 'freedom' (સ્વતંત્રતા) Abstract Nouns છે, અને 'country' (દેશ) Common Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "happy",
        "happiness",
        "happily",
        "unhappy"
      ],
      "answer": "happiness",
      "explanation": "'happiness' (ખુશી) એક ભાવ છે. 'happy' વિશેષણ છે, 'happily' ક્રિયાવિશેષણ છે. તેથી 'happiness' Abstract Noun છે."
    }
  ],
  "test-22": [
    {
      "question": "નીચેના વાક્યમાં 'laughter' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Laughter is the best medicine.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'laughter' (હાસ્ય) એ એક ક્રિયાનો ભાવ છે જેને આપણે અનુભવી શકીએ છીએ પરંતુ સ્પર્શી શકતા નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા બે પ્રકારના નામ છે?<br><b>A crowd gathered to see the beauty of the Taj Mahal.</b>",
      "options": [
        "Collective, Abstract, Proper",
        "Common, Abstract, Proper",
        "Collective, Common, Material",
        "Material, Abstract, Collective"
      ],
      "answer": "Collective, Abstract, Proper",
      "explanation": "'crowd' (ભીડ) Collective Noun છે, 'beauty' (સુંદરતા) Abstract Noun છે, અને 'Taj Mahal' Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "king",
        "kingdom",
        "kindness",
        "kind"
      ],
      "answer": "kindness",
      "explanation": "'kindness' (દયા) એક ગુણ છે. 'king' અને 'kingdom' Common Noun છે, અને 'kind' વિશેષણ છે. તેથી 'kindness' Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'strength' શબ્દ શું છે?<br><b>He showed great strength during the difficulty.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'strength' (તાકાત) એક ગુણ કે ક્ષમતા છે, જેને જોઈ કે સ્પર્શી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા બે પ્રકારના નામ છે?<br><b>The team needs a lot of practice.</b>",
      "options": [
        "Collective, Abstract",
        "Common, Abstract",
        "Proper, Collective",
        "Material, Abstract"
      ],
      "answer": "Collective, Abstract",
      "explanation": "'team' (ટુકડી) એ ખેલાડીઓનો સમૂહ છે, તેથી તે Collective Noun છે. 'practice' (મહાવરો) એ એક ક્રિયાનો ભાવ છે, તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'childhood' શબ્દ કયા પ્રકારનું નામ છે?<br><b>I miss my childhood.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'childhood' (બાળપણ) એ જીવનની એક અવસ્થા છે. તેને ભૌતિક રીતે સ્પર્શી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "anger",
        "joy",
        "sad",
        "fear"
      ],
      "answer": "sad",
      "explanation": "'anger' (ગુસ્સો), 'joy' (આનંદ), અને 'fear' (ડર) એ ભાવો છે, જે Abstract Nouns છે. 'sad' (દુઃખી) એ એક વિશેષણ છે."
    },
    {
      "question": "વાક્યમાં 'truth' શબ્દ શું છે?<br><b>Always speak the truth.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'truth' (સત્ય) એક વિચાર કે ખ્યાલ છે. તેને જોઈ કે સ્પર્શી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં નામ ઓળખો અને તેનો પ્રકાર જણાવો.<br><b>His decision was based on logic.</b>",
      "options": [
        "decision (Abstract), logic (Abstract)",
        "decision (Common), logic (Abstract)",
        "His (Pronoun), based (Verb)",
        "decision (Abstract), logic (Common)"
      ],
      "answer": "decision (Abstract), logic (Abstract)",
      "explanation": "'decision' (નિર્ણય) અને 'logic' (તર્ક) બંને એવા ખ્યાલો છે જેને આપણે સ્પર્શી શકતા નથી. તેથી બંને Abstract Nouns છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "poor",
        "poverty",
        "poorest",
        "poorly"
      ],
      "answer": "poverty",
      "explanation": "'poverty' (ગરીબી) એક અવસ્થા છે. 'poor' વિશેષણ છે, 'poorest' વિશેષણનું superlative form છે, અને 'poorly' ક્રિયાવિશેષણ છે."
    }
  ],
  "test-23": [
    {
      "question": "નીચેના વાક્યમાં 'freedom' શબ્દ કયા પ્રકારનું નામ છે?<br><b>They fought for their freedom.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'freedom' (સ્વતંત્રતા) એક અવસ્થા કે ભાવ છે જેને સ્પર્શી શકાતો નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'wood' અને 'beauty' કયા પ્રકારના નામ છે?<br><b>I admire the beauty of this table made of wood.</b>",
      "options": [
        "Abstract, Material",
        "Common, Abstract",
        "Material, Abstract",
        "Proper, Material"
      ],
      "answer": "Material, Abstract",
      "explanation": "'wood' (લાકડું) એ એક દ્રવ્ય છે, તેથી તે Material Noun છે. 'beauty' (સુંદરતા) એ એક ગુણ છે, તેથી તે Abstract Noun છે. અહીં ક્રમ 'wood' અને 'beauty' નો પૂછ્યો છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "brave",
        "bravery",
        "bravely",
        "bravest"
      ],
      "answer": "bravery",
      "explanation": "'bravery' (બહાદુરી) એક ગુણ છે. 'brave' વિશેષણ છે. 'bravely' ક્રિયાવિશેષણ છે. 'bravest' વિશેષણનું superlative form છે. તેથી 'bravery' Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'love' શબ્દ શું છે?<br><b>Love is a powerful emotion.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'love' (પ્રેમ) એક લાગણી છે. તેને જોઈ કે સ્પર્શી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં નામ ઓળખો અને તેનો પ્રકાર જણાવો.<br><b>The team celebrated their victory with joy.</b>",
      "options": [
        "team (Collective), victory (Abstract), joy (Abstract)",
        "team (Common), victory (Common), joy (Abstract)",
        "team (Collective), victory (Common), joy (Abstract)",
        "team (Abstract), victory (Abstract), joy (Abstract)"
      ],
      "answer": "team (Collective), victory (Abstract), joy (Abstract)",
      "explanation": "'team' (ટુકડી) Collective Noun છે. 'victory' (વિજય) અને 'joy' (આનંદ) બંને ભાવો છે, તેથી તે Abstract Nouns છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'death' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Death is inevitable.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'death' (મૃત્યુ) એક અવસ્થા છે. તે એક ભાવવાચક નામ છે કારણ કે તે ભૌતિક નથી."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "thought",
        "idea",
        "dream",
        "thinker"
      ],
      "answer": "thinker",
      "explanation": "'thought' (વિચાર), 'idea' (વિચાર), અને 'dream' (સ્વપ્ન) એ માનસિક ખ્યાલો છે, જે Abstract Nouns છે. 'thinker' (વિચારક) એક વ્યક્તિ છે, જે Common Noun છે."
    },
    {
      "question": "વાક્યમાં 'youth' શબ્દ શું છે?<br><b>He spent his youth in the village.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'youth' (યુવાની) એ જીવનની એક અવસ્થા છે. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા પ્રકારના નામ છે?<br><b>The committee judged the quality of the product.</b>",
      "options": [
        "Collective, Abstract, Common",
        "Common, Abstract, Material",
        "Proper, Collective, Abstract",
        "Collective, Material, Abstract"
      ],
      "answer": "Collective, Abstract, Common",
      "explanation": "'committee' (સમિતિ) Collective Noun છે, 'quality' (ગુણવત્તા) Abstract Noun છે, અને 'product' (ઉત્પાદન) Common Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "deep",
        "depth",
        "deepen",
        "deeply"
      ],
      "answer": "depth",
      "explanation": "'depth' (ઊંડાઈ) એક માપ કે ભાવ છે. 'deep' વિશેષણ છે, 'deepen' ક્રિયાપદ છે, અને 'deeply' ક્રિયાવિશેષણ છે. તેથી 'depth' Abstract Noun છે."
    }
  ],
  "test-24": [
    {
      "question": "નીચેના વાક્યમાં 'fear' શબ્દ કયા પ્રકારનું નામ છે?<br><b>He has a fear of heights.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'fear' (ડર) એક લાગણી છે. તેને ભૌતિક રીતે અનુભવી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'gold' અને 'beauty' કયા પ્રકારના નામ છે?<br><b>The beauty of the gold necklace is amazing.</b>",
      "options": [
        "Abstract, Material",
        "Material, Abstract",
        "Common, Proper",
        "Collective, Abstract"
      ],
      "answer": "Material, Abstract",
      "explanation": "'gold' (સોનું) એક દ્રવ્ય છે, તેથી તે Material Noun છે. 'beauty' (સુંદરતા) એક ગુણ છે, તેથી તે Abstract Noun છે. 'necklace' એક Common Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "friend",
        "friendly",
        "friendship",
        "friendless"
      ],
      "answer": "friendship",
      "explanation": "'friendship' (મિત્રતા) એક સંબંધ કે ભાવ છે. 'friend' Common Noun છે, 'friendly' વિશેષણ છે. તેથી 'friendship' Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'patience' શબ્દ શું છે?<br><b>Patience is a virtue.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'patience' (ધીરજ) એક ગુણ છે. તેને જોઈ કે સ્પર્શી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં નામ ઓળખો અને તેનો પ્રકાર જણાવો.<br><b>The crowd felt a sense of excitement.</b>",
      "options": [
        "crowd (Collective), excitement (Abstract)",
        "crowd (Common), excitement (Abstract)",
        "crowd (Collective), sense (Common)",
        "crowd (Abstract), excitement (Abstract)"
      ],
      "answer": "crowd (Collective), excitement (Abstract)",
      "explanation": "'crowd' (ભીડ) એ લોકોનો સમૂહ છે, તેથી તે Collective Noun છે. 'excitement' (ઉત્તેજના) એક ભાવ છે, તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'childhood' શબ્દ કયા પ્રકારનું નામ છે?<br><b>He remembers his childhood fondly.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'childhood' (બાળપણ) જીવનની એક અવસ્થા છે. તે એક ભાવવાચક નામ છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "justice",
        "law",
        "judge",
        "crime"
      ],
      "answer": "judge",
      "explanation": "'justice' (ન્યાય), 'law' (કાયદો), અને 'crime' (ગુનો) એ ખ્યાલો છે, જે Abstract Nouns છે. 'judge' (ન્યાયાધીશ) એક વ્યક્તિ છે, જે Common Noun છે."
    },
    {
      "question": "વાક્યમાં 'health' શબ્દ શું છે?<br><b>Health is wealth.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'health' (સ્વાસ્થ્ય) અને 'wealth' (સંપત્તિ) બંને અવસ્થાઓ કે ભાવો છે. તેથી બંને Abstract Nouns છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા પ્રકારના નામ છે?<br><b>The team's success was due to their hard work.</b>",
      "options": [
        "Collective, Abstract, Abstract",
        "Common, Proper, Abstract",
        "Collective, Common, Abstract",
        "Proper, Abstract, Common"
      ],
      "answer": "Collective, Abstract, Abstract",
      "explanation": "'team' (ટુકડી) Collective Noun છે. 'success' (સફળતા) અને 'hard work' (સખત મહેનત) બંને ભાવો છે, તેથી તે Abstract Nouns છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "long",
        "length",
        "lengthen",
        "longer"
      ],
      "answer": "length",
      "explanation": "'length' (લંબાઈ) એક માપ કે ગુણ છે. 'long' વિશેષણ છે, 'lengthen' ક્રિયાપદ છે. તેથી 'length' Abstract Noun છે."
    }
  ],
  "test-25": [
    {
      "question": "નીચેના વાક્યમાં 'anger' શબ્દ કયા પ્રકારનું નામ છે?<br><b>He could not control his anger.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'anger' (ગુસ્સો) એક લાગણી છે. તેને જોઈ કે સ્પર્શી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "વાક્યમાં 'wisdom' અને 'Solomon' કયા પ્રકારના નામ છે?<br><b>The wisdom of Solomon is famous.</b>",
      "options": [
        "Abstract, Proper",
        "Common, Proper",
        "Proper, Abstract",
        "Abstract, Common"
      ],
      "answer": "Abstract, Proper",
      "explanation": "'wisdom' (શાણપણ) એ Abstract Noun છે અને 'Solomon' એ Proper Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "man",
        "humanity",
        "human",
        "woman"
      ],
      "answer": "humanity",
      "explanation": "'humanity' (માનવતા) એક ગુણ કે ભાવ છે. 'man', 'human', અને 'woman' Common Nouns છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'charity' શબ્દ શું છે?<br><b>Charity begins at home.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'charity' (દાન/પરોપકાર) એક ગુણ કે ક્રિયાનો ભાવ છે. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં નામ ઓળખો અને તેનો પ્રકાર જણાવો.<br><b>The gang of thieves had a plan.</b>",
      "options": [
        "gang (Collective), thieves (Common), plan (Abstract)",
        "gang (Common), thieves (Common), plan (Abstract)",
        "gang (Collective), thieves (Collective), plan (Common)",
        "gang (Abstract), thieves (Common), plan (Abstract)"
      ],
      "answer": "gang (Collective), thieves (Common), plan (Abstract)",
      "explanation": "'gang' (ટોળકી) Collective Noun છે. 'thieves' (ચોરો) Common Noun (Plural) છે. 'plan' (યોજના) Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'education' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Education is important for progress.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'education' (શિક્ષણ) એક ખ્યાલ છે. તેને ભૌતિક રીતે સ્પર્શી શકાતું નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "beauty",
        "beautiful",
        "strength",
        "courage"
      ],
      "answer": "beautiful",
      "explanation": "'beauty' (સુંદરતા), 'strength' (તાકાત), અને 'courage' (હિંમત) એ Abstract Nouns છે. 'beautiful' (સુંદર) એ એક વિશેષણ છે."
    },
    {
      "question": "વાક્યમાં 'advice' શબ્દ શું છે?<br><b>He gave me a piece of advice.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'advice' (સલાહ) એક અમૂર્ત ખ્યાલ છે. તે ભાવવાચક નામ છે. તેની ગણતરી કરવા 'a piece of' નો ઉપયોગ થાય છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા પ્રકારના નામ છે?<br><b>The team discussed the strategy with the coach.</b>",
      "options": [
        "Collective, Abstract, Common",
        "Common, Abstract, Proper",
        "Collective, Material, Common",
        "Proper, Abstract, Common"
      ],
      "answer": "Collective, Abstract, Common",
      "explanation": "'team' (ટુકડી) Collective Noun છે. 'strategy' (વ્યૂહરચના) Abstract Noun છે. 'coach' (કોચ) Common Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "high",
        "height",
        "highly",
        "hight"
      ],
      "answer": "height",
      "explanation": "'height' (ઊંચાઈ) એક માપ કે ગુણ છે. 'high' વિશેષણ છે, 'highly' ક્રિયાવિશેષણ છે. 'hight' ખોટો શબ્દ છે."
    }
  ],
  "test-26": [
    {
      "question": "નીચેના વાક્યમાં 'movement' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Freedom of movement is a basic right.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'movement' (હલનચલન) એ એક ક્રિયાનો ભાવ છે. અહીં તે એક ખ્યાલ તરીકે વપરાયો છે, તેથી તે Abstract Noun છે."
    },
    {
      "question": "વાક્યમાં 'iron' અને 'strength' કયા પ્રકારના નામ છે?<br><b>The strength of iron is well known.</b>",
      "options": [
        "Abstract, Material",
        "Material, Abstract",
        "Common, Abstract",
        "Material, Common"
      ],
      "answer": "Material, Abstract",
      "explanation": "'iron' (લોખંડ) એ Material Noun છે. 'strength' (મજબૂતાઈ/તાકાત) એ Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "true",
        "truth",
        "truly",
        "truthful"
      ],
      "answer": "truth",
      "explanation": "'truth' (સત્ય) એક ખ્યાલ છે. 'true' અને 'truthful' વિશેષણ છે, 'truly' ક્રિયાવિશેષણ છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'pain' શબ્દ શું છે?<br><b>She felt a sharp pain in her leg.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'pain' (પીડા) એક સંવેદના કે લાગણી છે. તેને જોઈ શકાતી નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં નામ ઓળખો અને તેનો પ્રકાર જણાવો.<br><b>A group of tourists admired the architecture.</b>",
      "options": [
        "group (Collective), tourists (Common), architecture (Abstract)",
        "group (Common), tourists (Collective), architecture (Abstract)",
        "group (Collective), tourists (Abstract), architecture (Common)",
        "group (Abstract), tourists (Common), architecture (Abstract)"
      ],
      "answer": "group (Collective), tourists (Common), architecture (Abstract)",
      "explanation": "'group' (સમૂહ) Collective Noun છે. 'tourists' (પ્રવાસીઓ) Common Noun છે. 'architecture' (સ્થાપત્ય) Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'luck' શબ્દ કયા પ્રકારનું નામ છે?<br><b>I wish you good luck.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'luck' (નસીબ) એક ખ્યાલ છે. તે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "belief",
        "faith",
        "hope",
        "believer"
      ],
      "answer": "believer",
      "explanation": "'belief' (માન્યતા), 'faith' (વિશ્વાસ), અને 'hope' (આશા) એ ભાવો છે, જે Abstract Nouns છે. 'believer' (માનનાર વ્યક્તિ) એક વ્યક્તિ છે, જે Common Noun છે."
    },
    {
      "question": "વાક્યમાં 'humor' શબ્દ શું છે?<br><b>He has a great sense of humor.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'humor' (રમુજ) એક ગુણ કે ભાવ છે. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા પ્રકારના નામ છે?<br><b>The beauty of the girl was a distraction.</b>",
      "options": [
        "Abstract, Common, Abstract",
        "Common, Abstract, Abstract",
        "Proper, Common, Abstract",
        "Abstract, Proper, Abstract"
      ],
      "answer": "Abstract, Common, Abstract",
      "explanation": "'beauty' (સુંદરતા) Abstract Noun છે. 'girl' (છોકરી) Common Noun છે. 'distraction' (વિક્ષેપ/ધ્યાનભંગ) પણ એક Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "able",
        "ability",
        "ably",
        "enable"
      ],
      "answer": "ability",
      "explanation": "'ability' (ક્ષમતા) એક ગુણ છે. 'able' વિશેષણ છે, 'ably' ક્રિયાવિશેષણ છે, અને 'enable' ક્રિયાપદ છે."
    }
  ],
  "test-27": [
    {
      "question": "નીચેના વાક્યમાં 'justice' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Everyone seeks justice.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'justice' (ન્યાય) એક અમૂર્ત ખ્યાલ છે. તેને સ્પર્શી શકાતો નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "વાક્યમાં 'team' અને 'determination' કયા પ્રકારના નામ છે?<br><b>The determination of the team was inspiring.</b>",
      "options": [
        "Abstract, Collective",
        "Collective, Abstract",
        "Common, Abstract",
        "Material, Collective"
      ],
      "answer": "Collective, Abstract",
      "explanation": "'team' (ટુકડી) એ Collective Noun છે. 'determination' (નિર્ધાર) એ Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "generous",
        "generously",
        "generosity",
        "general"
      ],
      "answer": "generosity",
      "explanation": "'generosity' (ઉદારતા) એક ગુણ છે. 'generous' વિશેષણ છે, અને 'generously' ક્રિયાવિશેષણ છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'thought' શબ્દ શું છે?<br><b>She was lost in thought.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'thought' (વિચાર) એક માનસિક ક્રિયા કે ખ્યાલ છે. તે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં નામ ઓળખો અને તેનો પ્રકાર જણાવો.<br><b>Her performance showed her confidence.</b>",
      "options": [
        "performance (Abstract), confidence (Abstract)",
        "performance (Common), confidence (Abstract)",
        "Her (Pronoun), showed (Verb)",
        "performance (Abstract), confidence (Common)"
      ],
      "answer": "performance (Abstract), confidence (Abstract)",
      "explanation": "'performance' (પ્રદર્શન) અને 'confidence' (આત્મવિશ્વાસ) બંને એવા ખ્યાલો છે જેને સ્પર્શી શકાતા નથી. તેથી બંને Abstract Nouns છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'youth' શબ્દ કયા પ્રકારનું નામ છે?<br><b>The youth of the nation is its future.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "આ વાક્યમાં 'youth' (યુવાધન) એક સમૂહ અથવા એક ખ્યાલ તરીકે વપરાયું છે, જે Abstract Noun તરીકે ગણાય છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "growth",
        "height",
        "weight",
        "grower"
      ],
      "answer": "grower",
      "explanation": "'growth' (વિકાસ), 'height' (ઊંચાઈ), અને 'weight' (વજન) એ ભાવો કે માપ છે, જે Abstract Nouns છે. 'grower' (ઉગાડનાર) એક વ્યક્તિ છે, જે Common Noun છે."
    },
    {
      "question": "વાક્યમાં 'success' શબ્દ શું છે?<br><b>Success requires hard work.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'success' (સફળતા) એક પરિણામ કે અવસ્થા છે, જે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા પ્રકારના નામ છે?<br><b>The boy showed great courage in the face of danger.</b>",
      "options": [
        "Common, Abstract, Abstract",
        "Common, Proper, Abstract",
        "Common, Collective, Abstract",
        "Proper, Abstract, Common"
      ],
      "answer": "Common, Abstract, Abstract",
      "explanation": "'boy' (છોકરો) Common Noun છે. 'courage' (હિંમત) અને 'danger' (ખતરો) બંને ભાવો છે, તેથી તે Abstract Nouns છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "ignore",
        "ignorance",
        "ignorant",
        "ignorantly"
      ],
      "answer": "ignorance",
      "explanation": "'ignorance' (અજ્ઞાનતા) એક અવસ્થા છે. 'ignore' ક્રિયાપદ છે, 'ignorant' વિશેષણ છે, અને 'ignorantly' ક્રિયાવિશેષણ છે."
    }
  ],
  "test-28": [
    {
      "question": "નીચેના વાક્યમાં 'friendship' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Their friendship is very strong.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'friendship' (મિત્રતા) એક સંબંધનો ભાવ છે. તેને ભૌતિક રીતે સ્પર્શી શકાતો નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "વાક્યમાં 'information' અને 'source' કયા પ્રકારના નામ છે?<br><b>This information comes from a reliable source.</b>",
      "options": [
        "Abstract, Common",
        "Common, Abstract",
        "Material, Common",
        "Abstract, Abstract"
      ],
      "answer": "Abstract, Common",
      "explanation": "'information' (માહિતી) એ Abstract Noun છે કારણ કે તે અમૂર્ત છે. 'source' (સ્ત્રોત) એ Common Noun છે કારણ કે તે કોઈપણ સ્ત્રોતનો ઉલ્લેખ કરી શકે છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "poor",
        "poverty",
        "poorest",
        "poorly"
      ],
      "answer": "poverty",
      "explanation": "'poverty' (ગરીબી) એક અવસ્થા છે. 'poor' વિશેષણ છે, 'poorest' વિશેષણનું superlative form છે, અને 'poorly' ક્રિયાવિશેષણ છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'hope' શબ્દ શું છે?<br><b>There is always hope.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'hope' (આશા) એક લાગણી કે ભાવ છે. તે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં નામ ઓળખો અને તેનો પ્રકાર જણાવો.<br><b>His knowledge of mathematics is excellent.</b>",
      "options": [
        "knowledge (Abstract), mathematics (Proper)",
        "knowledge (Abstract), mathematics (Abstract)",
        "knowledge (Common), mathematics (Proper)",
        "knowledge (Abstract), mathematics (Common)"
      ],
      "answer": "knowledge (Abstract), mathematics (Abstract)",
      "explanation": "'knowledge' (જ્ઞાન) એ Abstract Noun છે. વિષયોના નામ (જેમ કે 'mathematics') ને પણ Abstract Noun ગણવામાં આવે છે કારણ કે તે જ્ઞાનની શાખા છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'beauty' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Beauty lies in the eyes of the beholder.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'beauty' (સુંદરતા) એક ગુણ કે ખ્યાલ છે. તેને જોઈ કે સ્પર્શી શકાતો નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "heroism",
        "bravery",
        "hero",
        "courage"
      ],
      "answer": "hero",
      "explanation": "'heroism' (વીરતા), 'bravery' (બહાદુરી), અને 'courage' (હિંમત) એ ગુણો છે, જે Abstract Nouns છે. 'hero' (નાયક) એક વ્યક્તિ છે, જે Common Noun છે."
    },
    {
      "question": "વાક્યમાં 'sadness' શબ્દ શું છે?<br><b>He felt a great sadness.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'sadness' (ઉદાસી) એક લાગણી છે. તે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા પ્રકારના નામ છે?<br><b>The herd of cattle showed great patience.</b>",
      "options": [
        "Collective, Common, Abstract",
        "Collective, Collective, Abstract",
        "Common, Common, Abstract",
        "Proper, Abstract, Common"
      ],
      "answer": "Collective, Common, Abstract",
      "explanation": "'herd' (ટોળું) Collective Noun છે. 'cattle' (ઢોર) Common Noun છે. 'patience' (ધીરજ) Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "strong",
        "strength",
        "strengthen",
        "strongly"
      ],
      "answer": "strength",
      "explanation": "'strength' (તાકાત) એક ગુણ છે. 'strong' વિશેષણ છે, 'strengthen' ક્રિયાપદ છે, અને 'strongly' ક્રિયાવિશેષણ છે."
    }
  ],
  "test-29": [
    {
      "question": "નીચેના વાક્યમાં 'curiosity' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Curiosity killed the cat.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'curiosity' (જિજ્ઞાસા) એક માનસિક ભાવ છે. તેને સ્પર્શી શકાતો નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "વાક્યમાં 'child' અને 'innocence' કયા પ્રકારના નામ છે?<br><b>The innocence of a child is precious.</b>",
      "options": [
        "Common, Abstract",
        "Proper, Abstract",
        "Abstract, Common",
        "Collective, Abstract"
      ],
      "answer": "Common, Abstract",
      "explanation": "'child' (બાળક) એ Common Noun છે. 'innocence' (નિર્દોષતા) એ Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "wise",
        "wisdom",
        "wisely",
        "wiser"
      ],
      "answer": "wisdom",
      "explanation": "'wisdom' (ડહાપણ) એક ગુણ છે. 'wise' વિશેષણ છે, 'wisely' ક્રિયાવિશેષણ છે. તેથી 'wisdom' Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'hatred' શબ્દ શું છે?<br><b>Hatred is a destructive emotion.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'hatred' (નફરત) એક તીવ્ર લાગણી છે. તે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં નામ ઓળખો અને તેનો પ્રકાર જણાવો.<br><b>The crew showed teamwork to save the ship.</b>",
      "options": [
        "crew (Collective), teamwork (Abstract), ship (Common)",
        "crew (Common), teamwork (Abstract), ship (Common)",
        "crew (Collective), teamwork (Common), ship (Common)",
        "crew (Abstract), teamwork (Abstract), ship (Abstract)"
      ],
      "answer": "crew (Collective), teamwork (Abstract), ship (Common)",
      "explanation": "'crew' (ખલાસીઓનો સમૂહ) Collective Noun છે. 'teamwork' (સહકાર) Abstract Noun છે. 'ship' (જહાજ) Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'failure' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Failure is the pillar of success.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'failure' (નિષ્ફળતા) એક અવસ્થા કે પરિણામ છે. તે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "pleasure",
        "pain",
        "comfort",
        "doctor"
      ],
      "answer": "doctor",
      "explanation": "'pleasure' (આનંદ), 'pain' (પીડા), અને 'comfort' (આરામ) એ ભાવો કે અવસ્થાઓ છે, જે Abstract Nouns છે. 'doctor' (ડૉક્ટર) એક વ્યક્તિ છે, જે Common Noun છે."
    },
    {
      "question": "વાક્યમાં 'permission' શબ્દ શું છે?<br><b>You need permission to enter.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'permission' (પરવાનગી) એક અમૂર્ત ખ્યાલ છે. તે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા પ્રકારના નામ છે?<br><b>The judiciary ensures justice in the country.</b>",
      "options": [
        "Collective, Abstract, Common",
        "Common, Abstract, Proper",
        "Collective, Material, Common",
        "Proper, Abstract, Common"
      ],
      "answer": "Collective, Abstract, Common",
      "explanation": "'judiciary' (ન્યાયતંત્ર) એ ન્યાયાધીશોનો સમૂહ છે, તેથી તે Collective Noun છે. 'justice' (ન્યાય) Abstract Noun છે. 'country' (દેશ) Common Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "free",
        "freedom",
        "freely",
        "freer"
      ],
      "answer": "freedom",
      "explanation": "'freedom' (સ્વતંત્રતા) એક અવસ્થા છે. 'free' વિશેષણ છે, 'freely' ક્રિયાવિશેષણ છે. તેથી 'freedom' Abstract Noun છે."
    }
  ],
  "test-30": [
    {
      "question": "નીચેના વાક્યમાં 'satisfaction' શબ્દ કયા પ્રકારનું નામ છે?<br><b>He gets great satisfaction from his work.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'satisfaction' (સંતોષ) એક લાગણી છે. તેને ભૌતિક રીતે સ્પર્શી શકાતો નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "વાક્યમાં 'Ganges' અને 'purity' કયા પ્રકારના નામ છે?<br><b>The purity of the Ganges is important.</b>",
      "options": [
        "Proper, Abstract",
        "Common, Abstract",
        "Material, Abstract",
        "Abstract, Proper"
      ],
      "answer": "Proper, Abstract",
      "explanation": "'Ganges' (ગંગા નદી) એ Proper Noun છે. 'purity' (શુદ્ધતા) એ Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "leader",
        "leadership",
        "lead",
        "leading"
      ],
      "answer": "leadership",
      "explanation": "'leadership' (નેતૃત્વ) એક ગુણ કે કળા છે. 'leader' Common Noun છે, 'lead' ક્રિયાપદ છે. તેથી 'leadership' Abstract Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'grammar' શબ્દ શું છે?<br><b>He is learning English grammar.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'grammar' (વ્યાકરણ) એ ભાષાના નિયમોનો સમૂહ અને એક અભ્યાસનો વિષય છે, જે એક અમૂર્ત ખ્યાલ છે. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં નામ ઓળખો અને તેનો પ્રકાર જણાવો.<br><b>The government promised development for the nation.</b>",
      "options": [
        "government (Collective), development (Abstract), nation (Common)",
        "government (Common), development (Abstract), nation (Common)",
        "government (Collective), development (Common), nation (Collective)",
        "government (Abstract), development (Abstract), nation (Common)"
      ],
      "answer": "government (Collective), development (Abstract), nation (Common)",
      "explanation": "'government' (સરકાર) Collective Noun છે. 'development' (વિકાસ) Abstract Noun છે. 'nation' (રાષ્ટ્ર) Common Noun છે."
    },
    {
      "question": "નીચેના વાક્યમાં 'anxiety' શબ્દ કયા પ્રકારનું નામ છે?<br><b>Her anxiety was increasing.</b>",
      "options": [
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)",
        "Collective Noun (સમૂહવાચક નામ)",
        "Proper Noun (વિશેષ નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'anxiety' (ચિંતા) એક માનસિક ભાવ છે. તે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun નથી?",
      "options": [
        "childhood",
        "boyhood",
        "manhood",
        "boy"
      ],
      "answer": "boy",
      "explanation": "'childhood' (બાળપણ), 'boyhood' (છોકરું), અને 'manhood' (પુરુષત્વ) એ જીવનની અવસ્થાઓ છે, જે Abstract Nouns છે. 'boy' (છોકરો) એક વ્યક્તિ છે, જે Common Noun છે."
    },
    {
      "question": "વાક્યમાં 'chaos' શબ્દ શું છે?<br><b>There was chaos after the announcement.</b>",
      "options": [
        "Proper Noun (વિશેષ નામ)",
        "Material Noun (દ્રવ્યવાચક નામ)",
        "Common Noun (જાતિવાચક નામ)",
        "Abstract Noun (ભાવવાચક નામ)"
      ],
      "answer": "Abstract Noun (ભાવવાચક નામ)",
      "explanation": "'chaos' (અંધાધૂંધી) એક અવસ્થા છે. તે ભૌતિક નથી. તેથી તે Abstract Noun છે."
    },
    {
      "question": "આપેલા વાક્યમાં કયા પ્રકારના નામ છે?<br><b>The team had faith in their captain's ability.</b>",
      "options": [
        "Collective, Abstract, Common, Abstract",
        "Collective, Common, Common, Abstract",
        "Common, Abstract, Common, Abstract",
        "Proper, Abstract, Common, Abstract"
      ],
      "answer": "Collective, Abstract, Common, Abstract",
      "explanation": "'team' (ટુકડી) Collective Noun છે. 'faith' (વિશ્વાસ) Abstract Noun છે. 'captain' (કપ્તાન) Common Noun છે. 'ability' (ક્ષમતા) Abstract Noun છે."
    },
    {
      "question": "નીચેનામાંથી કયું Abstract Noun (ભાવવાચક નામ) છે?",
      "options": [
        "real",
        "reality",
        "realize",
        "really"
      ],
      "answer": "reality",
      "explanation": "'reality' (વાસ્તવિકતા) એક ખ્યાલ છે. 'real' વિશેષણ છે, 'realize' ક્રિયાપદ છે, અને 'really' ક્રિયાવિશેષણ છે."
    }
  ]
};
