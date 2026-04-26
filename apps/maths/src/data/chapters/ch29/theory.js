export const theory = {
  id: 29,
  title: "પ્રકરણ 29: બીજગણિત (Algebra)",
  content: [
    {
      type: "intro",
      icon: "📌",
      title: "મુખ્ય મુદ્દાઓ",
      text: "બીજગણિતના પ્રમાણિત સૂત્રો, જેનો ઉપયોગ લાંબા દાખલાઓની ગણતરી ટૂંકમાં કરવા માટે થાય છે:",
      list: [
        "વર્ગના સૂત્રો: (a+b)² = a²+2ab+b² | (a-b)² = a²-2ab+b²",
        "(a+b)² + (a-b)² = 2(a²+b²) | a²-b² = (a-b)(a+b)",
        "(a+b+c)² = a²+b²+c²+2(ab+bc+ca)",
        "ઘનના સૂત્રો: a³+b³ = (a+b)(a²-ab+b²) અથવા (a+b)³-3ab(a+b)",
        "a³-b³ = (a-b)(a²+ab+b²) અથવા (a-b)³+3ab(a-b)",
        "a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)"
      ]
    },
    {
      type: "intro",
      icon: "⚠️",
      title: "કન્ફ્યુઝન પોઇન્ટ્સ (Confusion Points)",
      text: "વિદ્યાર્થીઓ સામાન્ય રીતે જ્યાં ભૂલ કરે છે તેવા ખાસ મુદ્દાઓ:",
      list: [
        "નિશાનીઓની ભૂલ: (a-b)³ = a³-b³-3ab(a-b) થાય. જ્યારે a³-b³ = (a-b)(a²+ab+b²) થાય — બીજા કૌંસમાં બધે પ્લસ (+) આવે.",
        "ઘાતાંક: (xᵃ)ᵇ = x^(ab) ગુણાકાર થાય. પણ xᵃ × xᵇ = x^(a+b) સરવાળો થાય.",
        "શોર્ટકટ: જ્યારે x + 1/x = 2 હોય, ત્યારે x^100 + 1/x^100 નો જવાબ હંમેશા 2 જ મળે."
      ]
    },
    {
      type: "solvedExamples",
      icon: "🔍",
      title: "Type 1: અજ્ઞાત કિંમત શોધવી (Value Finding)",
      text: "અમુક પદોનો સરવાળો કે ગુણાકાર આપેલો હોય અને તેના પરથી વર્ગ કે ઘનની કિંમત શોધવાની હોય છે.",
      examples: [
        {
          id: "Type 1 - E1",
          title: "ઘનનો સરવાળો",
          question: "જો a+b = 5 અને ab = 3 હોય તો a³+b³ = ?",
          color: "blue",
          steps: [
            "સૂત્ર: (a+b)³ = a³+b³+3ab(a+b)",
            "(5)³ = a³+b³ + 3(3)(5)",
            "125 = a³+b³ + 45",
            "a³+b³ = 125 - 45",
            { main: "જવાબ: a³+b³ = 80", tone: "answer" }
          ]
        },
        {
          id: "Type 1 - E2",
          title: "સરવાળો શોધો",
          question: "જો xy = 18 અને x²+y² = 45 હોય તો x+y = ?",
          color: "blue",
          steps: [
            "સૂત્ર: (x+y)² = x²+y²+2xy",
            "(x+y)² = 45 + 2(18)",
            "(x+y)² = 45 + 36 = 81",
            "વર્ગમૂળ કાઢતા: x+y = √81",
            { main: "જવાબ: x+y = 9", tone: "answer" }
          ]
        }
      ]
    },
    {
      type: "solvedExamples",
      icon: "📐",
      title: "Type 2: બહુપદીઓનું વિસ્તરણ (Expansion)",
      text: "કૌંસનો વર્ગ આપેલો હોય અને તેનું વિસ્તરણ કરવાનું હોય છે.",
      examples: [
        {
          id: "Type 2 - E1",
          title: "વર્ગનું વિસ્તરણ",
          question: "(2x+y)² = ?",
          color: "green",
          steps: [
            "સૂત્ર: (a+b)² = a²+2ab+b²",
            "a = 2x, b = y",
            "(2x)² + 2(2x)(y) + (y)²",
            { main: "જવાબ: 4x² + 4xy + y²", tone: "answer" }
          ]
        },
        {
          id: "Type 2 - E2",
          title: "ત્રણ પદનું વિસ્તરણ",
          question: "(2x+3y+4z)² = ?",
          color: "green",
          steps: [
            "સૂત્ર: (a+b+c)² = a²+b²+c²+2(ab+bc+ca)",
            "a=2x, b=3y, c=4z",
            "= (2x)²+(3y)²+(4z)²+2(2x·3y)+2(3y·4z)+2(4z·2x)",
            { main: "જવાબ: 4x²+9y²+16z²+12xy+24yz+16zx", tone: "answer" }
          ]
        }
      ]
    },
    {
      type: "solvedExamples",
      icon: "✂️",
      title: "Type 3: અપૂર્ણાંકોનું સાદુંરૂપ (Simplification)",
      text: "દેખાવમાં અઘરા લાગતા દાખલા જે સૂત્રથી 2 સેકન્ડમાં ઉકેલાય છે.",
      examples: [
        {
          id: "Type 3 - E1",
          title: "a²-b² સૂત્ર",
          question: "(x²-4)/(x-2) = ?",
          color: "amber",
          steps: [
            "x²-4 = x²-2² = (x-2)(x+2)",
            "અંશ: (x-2)(x+2), છેદ: (x-2)",
            "(x-2) ઉડી જાય.",
            { main: "જવાબ: x+2", tone: "answer" }
          ]
        },
        {
          id: "Type 3 - E2",
          title: "a³+b³+c³-3abc સૂત્ર",
          question: "2.8³+1.7³+1.5³-3(2.8)(1.7)(1.5) ÷ (2.8²+1.7²+1.5²-2.8×1.7-1.7×1.5-1.5×2.8) = ?",
          color: "amber",
          steps: [
            "સૂત્ર: a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)",
            "અંશ = (a+b+c) × છેદ",
            "છેદ ઉડી જતા ફક્ત (a+b+c) વધે.",
            { main: "જવાબ: 2.8+1.7+1.5 = 6", tone: "answer" }
          ]
        }
      ]
    },
    {
      type: "solvedExamples",
      icon: "⚡",
      title: "Type 4: ઘાતાંકના નિયમો (Exponent Rules)",
      text: "આધાર સરખા હોય ત્યારે ઘાતાંકની સરખામણી કરવામાં આવે છે.",
      examples: [
        {
          id: "Type 4 - E1",
          title: "ઘાતાંક",
          question: "3^(2x-16) × 4^(x-5) = 64 તો x = ?",
          color: "purple",
          steps: [
            "64 = 4³ × 3⁰",
            "3^(2x-16) × 4^(x-5) = 3⁰ × 4³",
            "આધાર સરખાવતા: 2x-16 = 0 → x = 8",
            "અને x-5 = 3 → x = 8",
            { main: "જવાબ: x = 8", tone: "answer" }
          ]
        },
        {
          id: "Type 4 - E2",
          title: "બહુપદીનો સરવાળો",
          question: "3x²+2y-5z અને 7x²-3y+6z નો સરવાળો શોધો.",
          color: "purple",
          steps: [
            "સમાન પદોનો સરવાળો:",
            "x² ના: 3+7 = 10x²",
            "y ના: 2+(-3) = -y",
            "z ના: -5+6 = +z",
            { main: "જવાબ: 10x² - y + z", tone: "answer" }
          ]
        }
      ]
    }
  ]
};
