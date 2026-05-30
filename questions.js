// ============================================================
//  MPG2026 – P06 Question Bank
//  End-of-Class Quiz – Prepositions: Schema, Movement & Idioms
// ============================================================

const QUIZ_META = {
  courseID: "MPG2026",
  lessonID: "P06",
  quizID:   "MPG2026_P06",
  title:    "Modern Pronunciation and Grammar 2026",
  subtitle: "Preposition Quiz – P06: Schema, Movement & Idioms",
};

const SECTIONS = [
  { name: "Core Schema: IN / ON / AT",         questions: [1,2,3,4,5,6,7,8] },
  { name: "Transport, Medium & Tool",           questions: [9,10,11,12,13,14] },
  { name: "Spatial Movement & Position",        questions: [15,16,17,18,19,20,21,22] },
  { name: "Collocations & Fixed Phrases",       questions: [23,24,25,26,27,28,29,30] },
  { name: "Word Order",                         questions: [31,32,33,34,35] },
  { name: "Dictation + Analysis",               questions: [36,37,38,39,40] },
];

const COMMENT_BANDS = [
  { min: 36, max: 40, comment: "Excellent. You have a strong grasp of English preposition schemas and idiomatic expressions." },
  { min: 30, max: 35, comment: "Good work. Your core schema understanding is solid. Review collocations and phrasal patterns." },
  { min: 22, max: 29, comment: "Developing. Focus on the IN/ON/AT spatial schema first — it is the foundation for everything else." },
  { min: 12, max: 21, comment: "Keep working. Review Sessions 1 and 2: boundary, surface, and point are the key ideas." },
  { min:  0, max: 11, comment: "Work harder. Start with the core schema: IN = boundary, ON = surface, AT = point or abstraction." },
];
const CLOSING_NOTE = "Prepositions reflect how we mentally frame space, time, and relationships. The schema is your foundation.";

const QUESTIONS = [

  // ── Section 1: Core Schema IN / ON / AT ────────────────────

  {
    id: 1, section: 1, type: "mc",
    stem: "I was ___ the picture with my family.",
    options: { A: "on", B: "at", C: "in", D: "by" },
    correct: "C",
    explanation: "IN = enclosed space with a clear boundary. A photo frame has a clear boundary — you are inside it. Contrast: 'on TV' (screen as surface), 'at school' (abstract institution).",
  },
  {
    id: 2, section: 1, type: "mc",
    stem: "She works ___ the office on weekdays.",
    options: { A: "at", B: "in", C: "on", D: "by" },
    correct: "B",
    explanation: "IN = enclosed physical space. An office is a room with walls — a clear boundary. Compare: 'at the office' is also possible but stresses the location as a point rather than the interior space.",
  },
  {
    id: 3, section: 1, type: "mc",
    stem: "He is ___ school now — he has class until 3pm.",
    options: { A: "in", B: "on", C: "by", D: "at" },
    correct: "D",
    explanation: "AT = abstract institution / function. 'At school' = there as a student (the function). 'In the school' would mean physically inside the building — a different frame entirely.",
  },
  {
    id: 4, section: 1, type: "mc",
    stem: "She was born ___ 1998.",
    options: { A: "on", B: "at", C: "in", D: "by" },
    correct: "C",
    explanation: "IN = enclosed time period. A year is a large time container. Rule: IN + year/month/season. ON + specific day. AT + exact clock time.",
  },
  {
    id: 5, section: 1, type: "mc",
    stem: "We'll meet ___ 3 p.m. outside the library.",
    options: { A: "in", B: "on", C: "by", D: "at" },
    correct: "D",
    explanation: "AT = a precise point in time. Clock times collapse the timeline to a single point → AT. IN = a broad period. ON = a specific day or date.",
  },
  {
    id: 6, section: 1, type: "mc",
    stem: "She is ___ the sea swimming — she'll be back at noon.",
    options: { A: "at", B: "on", C: "by", D: "in" },
    correct: "D",
    explanation: "IN = surrounded/immersed within a substance. Swimming means you are enclosed by water — the boundary is the water itself. 'On the sea' = on a boat (surface). 'At the sea' = near it (point).",
  },
  {
    id: 7, section: 1, type: "mc",
    stem: "He put the books ___ the shelf.",
    options: { A: "in", B: "at", C: "on", D: "above" },
    correct: "C",
    explanation: "ON = surface contact. A shelf is a surface, and the books rest on it. 'In the shelf' would imply the books are inside an enclosed container.",
  },
  {
    id: 8, section: 1, type: "mc",
    stem: "Which sentence uses the correct preposition for an abstract/emotional state?",
    options: {
      A: "She is on trouble at work.",
      B: "She is in trouble at work.",
      C: "She is at trouble at work.",
      D: "She is by trouble at work."
    },
    correct: "B",
    explanation: "IN = enclosed state. Abstract conditions that 'surround' you use IN: in trouble, in love, in debt, in danger. The spatial schema extends — you are enclosed within the condition.",
  },

  // ── Section 2: Transport, Medium & Tool ────────────────────

  {
    id: 9, section: 2, type: "mc",
    stem: "She was ___ a bike when she saw him.",
    options: { A: "by", B: "in", C: "at", D: "on" },
    correct: "D",
    explanation: "ON = platform/surface you ride. Bikes, horses, motorbikes → ON (you sit on top). Compare: in a car (enclosed container). The distinction is whether you are enclosed or riding on top.",
  },
  {
    id: 10, section: 2, type: "mc",
    stem: "I usually go to work ___ car.",
    options: { A: "in", B: "with", C: "by", D: "on" },
    correct: "C",
    explanation: "BY + no article = means/method of transport. 'By car' = the method, not the vehicle. Notice: NO article. Compare: 'in a car' (you are inside it, article needed) vs. 'by car' (it is your method).",
  },
  {
    id: 11, section: 2, type: "mc",
    stem: "She came ___ foot to the office.",
    options: { A: "by", B: "with", C: "in", D: "on" },
    correct: "D",
    explanation: "'On foot' = fixed expression. The foot is the surface/platform you move on. Note: 'by foot' sounds logical but is wrong in standard English. 'On foot' is the fixed idiom.",
  },
  {
    id: 12, section: 2, type: "mc",
    stem: "He fixed the chair ___ a hammer.",
    options: { A: "in", B: "by", C: "on", D: "with" },
    correct: "D",
    explanation: "WITH = instrument/tool. The hammer is a countable physical object → WITH + article (a hammer). Compare: 'in ink' (medium, uncountable, no article). Countable tool → WITH. Uncountable medium → IN.",
  },
  {
    id: 13, section: 2, type: "mc",
    stem: "The letter was written ___ pencil.",
    options: { A: "with", B: "by", C: "in", D: "on" },
    correct: "C",
    explanation: "IN = medium/substance. Pencil here is uncountable (no article) — it is the material the writing exists in. Compare: 'with a pencil' (countable tool, needs 'a'). The grammar signals the frame: no article → medium → IN.",
  },
  {
    id: 14, section: 2, type: "mc",
    stem: "This book was written ___ a famous author.",
    options: { A: "with", B: "in", C: "from", D: "by" },
    correct: "D",
    explanation: "BY = agent in passive voice. The author created the book — BY marks who performed the action. Not 'with' (that would make the author a tool, not the creator).",
  },

  // ── Section 3: Spatial Movement & Position ─────────────────

  {
    id: 15, section: 3, type: "mc",
    stem: "We walked ___ the forest for two hours.",
    options: { A: "across", B: "over", C: "around", D: "through" },
    correct: "D",
    explanation: "THROUGH = movement inside a 3D enclosed space. A forest surrounds you — trees on all sides. You enter and exit it. ACROSS = flat 2D surface. The key question: is the space 3D (enclosed) or 2D (flat)?",
  },
  {
    id: 16, section: 3, type: "mc",
    stem: "They drove ___ the desert to reach the city.",
    options: { A: "through", B: "over", C: "along", D: "across" },
    correct: "D",
    explanation: "ACROSS = movement over a flat 2D surface from one side to the other. A desert is open and flat — you cross it. THROUGH = 3D enclosed space (like a forest or tunnel). The spatial shape determines the preposition.",
  },
  {
    id: 17, section: 3, type: "mc",
    stem: "She looked ___ the window and saw the garden.",
    options: { A: "across", B: "over", C: "into", D: "through" },
    correct: "D",
    explanation: "THROUGH = vision or movement passing through a 3D medium. Light and sight pass through the glass. 'Into' = entering a space. 'Across' = side-to-side on a surface. Glass is a 3D medium → THROUGH.",
  },
  {
    id: 18, section: 3, type: "mc",
    stem: "A bird flew ___ the river.",
    options: { A: "above", B: "across", C: "over", D: "through" },
    correct: "C",
    explanation: "OVER = arc movement above and crossing. The bird traces an arc as it crosses above the river. ABOVE = static, higher level only (no movement or crossing implied). Movement + crossing above → OVER.",
  },
  {
    id: 19, section: 3, type: "mc",
    stem: "The village lies ___ the mountain.",
    options: { A: "under", B: "beneath", C: "down", D: "below" },
    correct: "D",
    explanation: "BELOW = lower level, no contact, often on a scale or general elevation. The village is at a lower altitude than the mountain. UNDER = directly beneath, often with contact. BENEATH = literary/formal (buried treasure, figurative inferiority).",
  },
  {
    id: 20, section: 3, type: "mc",
    stem: "The old treasure lies ___ the temple.",
    options: { A: "below", B: "under", C: "down", D: "beneath" },
    correct: "D",
    explanation: "BENEATH = formal/literary, suggests buried deep under. Often used for things hidden below ground, or for figurative inferiority ('beneath his dignity'). UNDER = direct contact/coverage. BELOW = just a lower level.",
  },
  {
    id: 21, section: 3, type: "mc",
    stem: "The secret was shared ___ the three friends.",
    options: { A: "between", B: "across", C: "through", D: "among" },
    correct: "D",
    explanation: "AMONG = within a group of three or more, not individually specified. BETWEEN = two specific, named entities. Three friends form a group → AMONG. Exception: 'between' can be used even for 3+ if they are each individually named.",
  },
  {
    id: 22, section: 3, type: "mc",
    stem: "She walked ___ the room quietly.",
    options: { A: "in", B: "inside", C: "onto", D: "into" },
    correct: "D",
    explanation: "INTO = movement entering a boundary. She was outside and moved inside — the preposition captures the direction of entry. IN = static (already inside). INTO = dynamic (crossing the boundary). Same logic: onto vs. on.",
  },

  // ── Section 4: Collocations & Fixed Phrases ─────────────────

  {
    id: 23, section: 4, type: "mc",
    stem: "I bought a sandwich ___ you.",
    options: { A: "to", B: "at", C: "with", D: "for" },
    correct: "D",
    explanation: "FOR = benefit/purpose. Buy, make, cook, prepare all take FOR — you are doing something for someone's benefit. Contrast: give/explain/send take TO (the object physically transfers toward the recipient).",
  },
  {
    id: 24, section: 4, type: "mc",
    stem: "She gave the book ___ him.",
    options: { A: "for", B: "at", C: "to", D: "with" },
    correct: "C",
    explanation: "TO = transfer/direction. Give, send, show, explain, lend — the object travels toward the recipient → TO. Compare: 'She bought a book for him' (benefit) vs. 'She gave the book to him' (transfer).",
  },
  {
    id: 25, section: 4, type: "mc",
    stem: "He arrived ___ the station late.",
    options: { A: "in", B: "to", C: "on", D: "at" },
    correct: "D",
    explanation: "Arrive AT = the station is a point on a map. AT = abstract point schema. Arrive IN = a city or country (large enclosed area). Station / airport / school → AT. City / country / room → IN.",
  },
  {
    id: 26, section: 4, type: "mc",
    stem: "She has lived here ___ 2018.",
    options: { A: "for", B: "during", C: "from", D: "since" },
    correct: "D",
    explanation: "SINCE = from a specific past point to NOW. Always requires perfect tense (has lived). FOR = measured duration ('for six years'). DURING = within a named period. FROM...TO = a span between two fixed points.",
  },
  {
    id: 27, section: 4, type: "mc",
    stem: "She is good ___ mathematics.",
    options: { A: "in", B: "on", C: "at", D: "with" },
    correct: "C",
    explanation: "Good AT = your skill reaches a point of competence. AT = abstract point schema applied to ability level. Other AT collocations: bad at, skilled at, surprised at. Compare: interested IN (surrounded by a topic).",
  },
  {
    id: 28, section: 4, type: "mc",
    stem: "She acted ___ behalf of the team.",
    options: { A: "for", B: "in", C: "by", D: "on" },
    correct: "D",
    explanation: "'On behalf of' = fixed phrase meaning 'representing someone.' ON = the platform/role she stands on. This is a fixed collocations — learn it as a unit. 'For behalf of' and 'in behalf of' are both wrong.",
  },
  {
    id: 29, section: 4, type: "mc",
    stem: "In spite ___ the rain, the match continued.",
    options: { A: "to", B: "for", C: "of", D: "about" },
    correct: "C",
    explanation: "'In spite OF' = despite. Always OF + noun phrase. NEVER a full clause directly after: 'in spite of the rain' ✓ / 'in spite of it rained' ✗. 'Despite' works the same way: despite + noun phrase.",
  },
  {
    id: 30, section: 4, type: "mc",
    stem: "He finally ___ smoking last year.",
    options: { A: "gave in", B: "gave out", C: "gave away", D: "gave up" },
    correct: "D",
    explanation: "'Give up' = stop trying / quit. UP = completion, finishing something entirely. Compare: gave IN (surrendered/yielded), gave OUT (distributed or stopped working), gave AWAY (donated or revealed a secret). The particle completely changes the meaning.",
  },

  // ── Section 5: Word Order (Drag and Drop) ──────────────────

  {
    id: 31, section: 5, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks: ["She", "came", "on", "foot", "to", "the", "office"],
    correct: ["She", "came", "on", "foot", "to", "the", "office"],
  },
  {
    id: 32, section: 5, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks: ["The", "letter", "was", "written", "in", "pencil"],
    correct: ["The", "letter", "was", "written", "in", "pencil"],
  },
  {
    id: 33, section: 5, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks: ["The", "train", "went", "through", "the", "tunnel"],
    correct: ["The", "train", "went", "through", "the", "tunnel"],
  },
  {
    id: 34, section: 5, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks: ["She", "has", "lived", "here", "since", "2018"],
    correct: ["She", "has", "lived", "here", "since", "2018"],
  },
  {
    id: 35, section: 5, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks: ["In", "spite", "of", "the", "rain", "the", "match", "continued"],
    correct: ["In", "spite", "of", "the", "rain", "the", "match", "continued"],
  },

  // ── Section 6: Dictation + Analysis ────────────────────────

  {
    id: 36, section: 6, type: "dictation_analysis",
    audio: "audio/p06_q36.mp3",
    correct: "She arrived at the station just before the train left.",
    analysisQuestion: "Why is <em>at</em> used — not <em>in</em>?",
    options: {
      A: "Because 'at' is used for large places like cities",
      B: "Because the station is treated as a point, not an enclosed space",
      C: "Because 'arrived in' is never correct"
    },
    correctAnalysis: "B",
    explanation: "Arrive AT = the station is a single point on a map. AT = the point schema. Compare: 'arrived in Tokyo' — a city is a large enclosed area → IN. Station / airport / school → AT. City / country → IN.",
    note: "Arrive AT = a point (station, airport). Arrive IN = a large area (city, country). The size and shape of the destination determines the preposition.",
  },
  {
    id: 37, section: 6, type: "dictation_analysis",
    audio: "audio/p06_q37.mp3",
    correct: "She walked into the room quietly.",
    analysisQuestion: "Why is <em>into</em> used — not <em>in</em>?",
    options: {
      A: "Because 'in' is only used for time expressions",
      B: "Because 'into' shows movement entering a boundary",
      C: "Because the room is large"
    },
    correctAnalysis: "B",
    explanation: "'Into' = dynamic movement crossing a boundary (she was outside → she entered). 'In' = static location (she is already inside). The same logic applies to on/onto: 'on the table' (static) vs. 'climbed onto the table' (movement).",
    note: "IN = where you are. INTO = the direction of movement. Static vs. dynamic is the key distinction.",
  },
  {
    id: 38, section: 6, type: "dictation_analysis",
    audio: "audio/p06_q38.mp3",
    correct: "I usually go to work by car.",
    analysisQuestion: "Why is there NO article before <em>car</em>?",
    options: {
      A: "Because 'car' is uncountable",
      B: "Because 'by' marks the method, not the vehicle itself",
      C: "Because it is a fixed expression with no grammar rules"
    },
    correctAnalysis: "B",
    explanation: "'By car' = the method/means of transport — not referring to a specific vehicle. BY + no article = means. Compare: 'in a car' (you are inside a specific car — article needed). The presence or absence of the article reflects a completely different mental frame.",
    note: "BY + no article = means/method. IN/ON + article = you are inside/on a specific vehicle.",
  },
  {
    id: 39, section: 6, type: "dictation_analysis",
    audio: "audio/p06_q39.mp3",
    correct: "The letter was written in pencil, not with a pen.",
    analysisQuestion: "What is the difference between <em>in pencil</em> and <em>with a pen</em>?",
    options: {
      A: "There is no real difference — both are correct",
      B: "'In pencil' means the pencil is a medium; 'with a pen' means the pen is a tool",
      C: "'In pencil' is used for formal writing only"
    },
    correctAnalysis: "B",
    explanation: "IN pencil = medium (uncountable, no article) — the writing exists within the substance of pencil. WITH a pen = tool (countable, needs article 'a') — you hold the pen as an instrument. The grammar signals the frame: no article = medium = IN; article = tool = WITH.",
    note: "IN + no article = medium/substance. WITH + article = countable tool. The countability difference is the key.",
  },
  {
    id: 40, section: 6, type: "dictation_analysis",
    audio: "audio/p06_q40.mp3",
    correct: "We walked through the forest and came out across the field.",
    analysisQuestion: "What is the difference between <em>through</em> and <em>across</em> here?",
    options: {
      A: "They mean the same thing — both show movement",
      B: "Through = inside a 3D enclosed space; across = over a flat 2D surface",
      C: "Through is used for large spaces; across for small spaces"
    },
    correctAnalysis: "B",
    explanation: "THROUGH = movement inside a 3D enclosed space. A forest surrounds you with trees on all sides — you move inside it. ACROSS = movement over a flat open 2D surface from one side to the other. A field is flat and open — you cross its surface.",
    note: "Key question: is the space 3D and enclosed (forest, tunnel) → THROUGH, or flat and open (field, desert, road) → ACROSS?",
  },

];