// ============================================================
//  MPG2026 – P07 Question Bank
//  End-of-Class Quiz – Tense & Aspect: Viewpoint, Completion & Reality Distance
// ============================================================

const QUIZ_META = {
  courseID: "MPG2026",
  lessonID: "P07",
  quizID:   "MPG2026_P07",
  title:    "Modern Pronunciation and Grammar 2026",
  subtitle: "Tense & Aspect Quiz – P07: Viewpoint, Completion & Reality Distance",
};

const SECTIONS = [
  { name: "Core Tense & Aspect",        questions: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] },
  { name: "Choose the Best Sentence",   questions: [16,17,18,19,20] },
  { name: "Find the Error",             questions: [21,22,23,24,25] },
  { name: "Word Order",                 questions: [26,27,28,29,30,31,32,33] },
  { name: "Transformation",             questions: [34,35,36,37,38] },
  { name: "Guided Writing",             questions: [39,40,41,42] },
  { name: "Dictation + Analysis",       questions: [43,44,45] },
];

const COMMENT_BANDS = [
  { min: 41, max: 45, comment: "Excellent. You have a strong command of English tense and aspect distinctions." },
  { min: 34, max: 40, comment: "Good work. Your core tense understanding is solid. Review perfect forms and conditionals." },
  { min: 25, max: 33, comment: "Developing. Focus on the present perfect vs. simple past distinction first — it is the key contrast." },
  { min: 13, max: 24, comment: "Keep working. Review how tense shows viewpoint: is the action complete, ongoing, or connected to now?" },
  { min:  0, max: 12, comment: "Work harder. Start with the basics: simple past = finished, present perfect = connected to now." },
];
const CLOSING_NOTE = "Tense is not about time alone — it is about your viewpoint. Are you inside the action, looking back at it, or connecting it to now?";

const QUESTIONS = [

  // ── Section 1: Core Tense & Aspect ─────────────────────────

  {
    id: 1, section: 1, type: "mc",
    stem: "She is a calligrapher. She ___ such beautiful letters.",
    options: { A: "writes", B: "is writing", C: "has written", D: "wrote" },
    correct: "A",
    explanation: "A calligrapher writes by profession — it is her regular skill and defining habit, not an action happening at this exact moment.",
  },
  {
    id: 2, section: 1, type: "mc",
    stem: "He usually works in Tokyo, but this week he ___ in Osaka.",
    options: { A: "works", B: "worked", C: "is working", D: "has worked" },
    correct: "C",
    explanation: "PRESENT CONTINUOUS = a temporary situation happening around now. 'This week' signals a short-term change from his usual pattern. Compare: 'He works in Tokyo' (permanent habit) vs. 'he is working in Osaka this week' (temporary).",
  },
  {
    id: 3, section: 1, type: "mc",
    stem: "Listen! Someone ___ at the door.",
    options: { A: "knocks", B: "is knocking", C: "knocked", D: "has knocked" },
    correct: "B",
    explanation: "PRESENT CONTINUOUS = an action happening at this exact moment. 'Listen!' signals the sound is audible right now. Compare: 'Someone knocks at the door every morning' (simple present = habit). When you perceive evidence of an action in progress → present continuous.",
  },
  {
    id: 4, section: 1, type: "mc",
    stem: "She ___ in Paris for three years when she was a student.",
    options: { A: "lives", B: "has lived", C: "lived", D: "is living" },
    correct: "C",
    explanation: "SIMPLE PAST = a completed action in a finished period. 'When she was a student' tells us the time is over — the connection to now is closed. Compare: PRESENT PERFECT ('has lived') = still connected to now. Here, student life is finished → simple past.",
  },
  {
    id: 5, section: 1, type: "mc",
    stem: "Water ___ at 100°C.",
    options: { A: "would boil", B: "boiled", C: "boils", D: "will boil" },
    correct: "C",
    explanation: "This is a scientific fact that is always true — water behaves this way in every time and place, not just in the past or future.",
  },
  {
    id: 6, section: 1, type: "mc",
    stem: "I ___ this film before. It's really good.",
    options: { A: "saw", B: "was seeing", C: "have seen", D: "had seen" },
    correct: "C",
    explanation: "PRESENT PERFECT = a past experience relevant to now. 'Before' without a specific time means at some point up to now — the experience connects to the current conversation. Compare: 'I saw it in 2019' — a specific time closes the connection to now → simple past.",
  },
  {
    id: 7, section: 1, type: "mc",
    stem: "She ___ here since 2020.",
    options: { A: "lived", B: "lives", C: "has lived", D: "was living" },
    correct: "C",
    explanation: "PRESENT PERFECT + SINCE = from a specific past point to NOW. The situation started in 2020 and continues to the present. 'She lived here since 2020' is wrong — simple past cannot be used with SINCE for a continuing situation. SINCE always requires the perfect.",
  },
  {
    id: 8, section: 1, type: "mc",
    stem: "I ___ a book when the phone rang.",
    options: { A: "read", B: "had read", C: "was reading", D: "have read" },
    correct: "C",
    explanation: "PAST CONTINUOUS = a longer background activity already in progress when a shorter event interrupted it. 'Was reading' = the ongoing action. 'Rang' = the interrupting event (simple past). Simple past 'read' would make both actions equal completed events, losing the sense of interruption.",
  },
  {
    id: 9, section: 1, type: "mc",
    stem: "By the time he got home, his wife ___ dinner.",
    options: { A: "cooked", B: "was cooking", C: "has cooked", D: "had cooked" },
    correct: "D",
    explanation: "PAST PERFECT = an action completed before another past event. The cooking was done BEFORE he got home. 'By the time' + past event → past perfect for the earlier action. 'Has cooked' (present perfect) cannot refer to a past moment.",
  },
  {
    id: 10, section: 1, type: "mc",
    stem: "Look at those clouds! It ___ rain.",
    options: { A: "will", B: "is going to", C: "would", D: "rains" },
    correct: "B",
    explanation: "BE GOING TO = a prediction based on visible evidence right now. You can see the clouds — they are evidence. Compare: WILL = a general prediction or decision made at the moment of speaking, without visible evidence. When you can see the reason, use BE GOING TO.",
  },
  {
    id: 11, section: 1, type: "mc",
    stem: "A: Can someone carry this box? B: I ___ help you.",
    options: { A: "am going to", B: "would", C: "will", D: "am helping" },
    correct: "C",
    explanation: "WILL = a spontaneous decision or offer made at the moment of speaking. B decides to help right now, in response to A's request — it is not a pre-planned intention. Compare: 'I am going to help you' = a decision made before this moment. Spontaneous offers → WILL.",
  },
  {
    id: 12, section: 1, type: "mc",
    stem: "If I ___ a car, I would drive you to the airport.",
    options: { A: "have", B: "had", C: "would have", D: "am having" },
    correct: "B",
    explanation: "SECOND CONDITIONAL = an imaginary or unlikely present situation. Structure: If + PAST SIMPLE, would + base verb. 'Had' signals unreality — I do not actually have a car. The past tense creates distance from reality. Compare: FIRST CONDITIONAL ('if I have') = a real possibility.",
  },
  {
    id: 13, section: 1, type: "mc",
    stem: "When I arrived, she ___ on the phone.",
    options: { A: "talked", B: "was talking", C: "has talked", D: "would talk" },
    correct: "B",
    explanation: "PAST CONTINUOUS = a background action already in progress when a shorter event happened. 'When I arrived' = the short interrupting event (simple past). 'Was talking' = the longer action already underway. Simple past 'talked' would suggest the talking happened as a result of my arrival, not before it.",
  },
  {
    id: 14, section: 1, type: "mc",
    stem: "It is eleven thirty. He ___ all evening.",
    options: { A: "drank", B: "has been drinking", C: "drinks", D: "was drinking" },
    correct: "B",
    explanation: "The drinking started earlier this evening and is still happening now.",
  },
  {
    id: 15, section: 1, type: "mc",
    stem: "If she ___ harder, she would have passed the exam.",
    options: { A: "studied", B: "had studied", C: "would study", D: "studies" },
    correct: "B",
    explanation: "THIRD CONDITIONAL = an imaginary past — what did not happen. Structure: If + PAST PERFECT, would have + past participle. 'Had studied' = the imaginary condition (she did NOT study enough). 'Would have passed' = the imaginary result. This expresses regret about a past situation that cannot be changed.",
  },

  // ── Section 2: Choose the Best Sentence ─────────────────────

  {
    id: 16, section: 2, type: "mc",
    stem: "Which sentence is correct?",
    options: {
      A: "I have seen him yesterday.",
      B: "I saw him yesterday.",
      C: "I have saw him yesterday.",
      D: "I was seeing him yesterday.",
    },
    correct: "B",
    explanation: "SIMPLE PAST is required when a specific past time is given ('yesterday'). Present perfect ('have seen') cannot combine with specific past time words like yesterday, last week, or in 2019. 'Have saw' is an incorrect form. SEE is also a stative verb of perception, making 'was seeing' unnatural here.",
  },
  {
    id: 17, section: 2, type: "mc",
    stem: "Which sentence is correct?",
    options: {
      A: "She is knowing the answer.",
      B: "She knows the answer.",
      C: "She has been knowing the answer.",
      D: "She was knowing the answer.",
    },
    correct: "B",
    explanation: "KNOW is a stative verb — it describes a mental state, not a developing action. Stative verbs (know, believe, understand, love, want) do not use the continuous form in standard English. 'She knows' is always correct for a permanent mental state.",
  },
  {
    id: 18, section: 2, type: "mc",
    stem: "Which sentence is correct?",
    options: {
      A: "When I arrived, she already left.",
      B: "When I arrived, she has already left.",
      C: "When I arrived, she had already left.",
      D: "When I arrived, she was already left.",
    },
    correct: "C",
    explanation: "PAST PERFECT is required for an action completed BEFORE another past event. She left before I arrived — two past events in sequence. 'Had already left' makes the order clear. 'Has already left' (present perfect) cannot refer to a past moment. 'Was already left' is a passive form with a different meaning.",
  },
  {
    id: 19, section: 2, type: "mc",
    stem: "Which sentence is correct?",
    options: {
      A: "If it will rain, take an umbrella.",
      B: "If it rains, take an umbrella.",
      C: "If it rained, take an umbrella.",
      D: "If it would rain, take an umbrella.",
    },
    correct: "B",
    explanation: "FIRST CONDITIONAL = a real, possible situation. Structure: If + PRESENT SIMPLE, imperative (or will + base). Never use 'will' in the if-clause — this is a very common error. 'If it rains' (present simple) already refers to the future. 'If it rained' signals second conditional, which does not fit a practical instruction.",
  },
  {
    id: 20, section: 2, type: "mc",
    stem: "The phone is ringing. Which sentence is the best response?",
    options: {
      A: "I'll answer it.",
      B: "I'm going to answer it.",
      C: "I answered it.",
      D: "I have answered it.",
    },
    correct: "A",
    explanation: "The decision is made at the moment of speaking, so will is the best choice here. Be going to can be possible in real English, but this question focuses on the basic classroom distinction: will for a decision made now.",
  },

  // ── Section 3: Find the Error ────────────────────────────────

  {
    id: 21, section: 3, type: "mc",
    stem: "One of these sentences has an error. Which sentence is correct?",
    options: {
      A: "She has lived here since three years.",
      B: "She has lived here for three years.",
      C: "She lived here since three years.",
      D: "She is living here since three years.",
    },
    correct: "B",
    explanation: "FOR = a measured duration (three years, two months, a long time). SINCE = a specific starting point (since 2020, since Monday). 'Since three years' is wrong — three years is a duration, not a point in time. Rule: FOR + duration, SINCE + starting point.",
  },
  {
    id: 22, section: 3, type: "mc",
    stem: "One of these sentences has an error. Which sentence is correct?",
    options: {
      A: "I had already eaten when she called.",
      B: "I have already eaten when she called.",
      C: "I already eat when she called.",
      D: "I will already eat when she calls.",
    },
    correct: "A",
    explanation: "PAST PERFECT ('had eaten') = the action was completed before another past event (she called). 'Have eaten' (present perfect) cannot refer to a past moment — it always connects to now. Option C uses simple present — wrong tense for a past narrative. Option D mixes future with a past when-clause — not possible.",
  },
  {
    id: 23, section: 3, type: "mc",
    stem: "One of these sentences has an error. Which sentence is correct?",
    options: {
      A: "He didn't went to the meeting.",
      B: "He didn't go to the meeting.",
      C: "He hasn't gone to the meeting yesterday.",
      D: "He wasn't go to the meeting.",
    },
    correct: "B",
    explanation: "After the auxiliary DID, the main verb stays in the base form. 'Didn't went' = double past marking — one of the most common errors. 'Hasn't gone...yesterday' combines present perfect with a specific past time — wrong. 'Wasn't go' is not a valid English structure.",
  },
  {
    id: 24, section: 3, type: "mc",
    stem: "One of these sentences has an error. Which sentence is correct?",
    options: {
      A: "If she will come, I will tell her.",
      B: "If she comes, I will tell her.",
      C: "If she would come, I will tell her.",
      D: "If she had come, I will tell her.",
    },
    correct: "B",
    explanation: "FIRST CONDITIONAL: If + PRESENT SIMPLE, will + base verb. Never use 'will' in the if-clause — this is one of the most common grammar errors. 'If she comes' (not 'will come') is the standard structure. The present simple in the if-clause already expresses a future condition.",
  },
  {
    id: 25, section: 3, type: "mc",
    stem: "One of these sentences has an error. Which sentence is correct?",
    options: {
      A: "She has graduated in 2022.",
      B: "She graduated in 2022.",
      C: "She is graduating in 2022.",
      D: "She had graduated in 2022.",
    },
    correct: "B",
    explanation: "SIMPLE PAST is required when a specific past time is given ('in 2022'). Present perfect ('has graduated') cannot combine with a specific time reference like 'in 2022, last year, yesterday.' The specific time closes the connection to the present. Simple past is always correct with a named past time.",
  },

  // ── Section 4: Word Order ────────────────────────────────────

  {
    id: 26, section: 4, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks:  ["She", "has", "already", "finished", "her", "homework"],
    correct: ["She", "has", "already", "finished", "her", "homework"],
  },
  {
    id: 27, section: 4, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks:  ["By", "the", "time", "he", "arrived", "she", "had", "left"],
    correct: ["By", "the", "time", "he", "arrived", "she", "had", "left"],
  },
  {
    id: 28, section: 4, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks:  ["If", "it", "rains", "we", "will", "stay", "inside"],
    correct: ["If", "it", "rains", "we", "will", "stay", "inside"],
  },
  {
    id: 29, section: 4, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks:  ["I", "was", "reading", "when", "the", "lights", "went", "out"],
    correct: ["I", "was", "reading", "when", "the", "lights", "went", "out"],
  },
  {
    id: 30, section: 4, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks:  ["She", "has", "been", "working", "here", "since", "2019"],
    correct: ["She", "has", "been", "working", "here", "since", "2019"],
  },
  {
    id: 31, section: 4, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks:  ["If", "I", "had", "known", "I", "would", "have", "told", "you"],
    correct: ["If", "I", "had", "known", "I", "would", "have", "told", "you"],
  },
  {
    id: 32, section: 4, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks:  ["They", "are", "going", "to", "open", "a", "new", "office", "next", "month"],
    correct: ["They", "are", "going", "to", "open", "a", "new", "office", "next", "month"],
  },
  {
    id: 33, section: 4, type: "dragdrop",
    instruction: "Arrange the words to make a correct English sentence.",
    blocks:  ["She", "has", "not", "eaten", "anything", "since", "this", "morning"],
    correct: ["She", "has", "not", "eaten", "anything", "since", "this", "morning"],
  },

  // ── Section 5: Transformation ────────────────────────────────

  {
    id: 34, section: 5, type: "mc",
    stem: "Someone stole her bag last night. Choose the correct passive sentence.",
    options: {
      A: "Her bag has been stolen last night.",
      B: "Her bag was stolen last night.",
      C: "Her bag is stolen last night.",
      D: "Her bag had stolen last night.",
    },
    correct: "B",
    explanation: "PASSIVE PAST: was/were + past participle. 'Last night' = a specific past time → simple past passive ('was stolen'). 'Has been stolen' (present perfect passive) cannot combine with 'last night.' 'Had stolen' is the wrong passive form — had + past participle is past perfect active, not passive.",
  },
  {
    id: 35, section: 5, type: "mc",
    stem: "She started her shift at 9am. It is now noon. She is still at work. Choose the correct sentence.",
    options: {
      A: "She worked for three hours.",
      B: "She has been working for three hours.",
      C: "She works for three hours.",
      D: "She had worked for three hours.",
    },
    correct: "B",
    explanation: "PRESENT PERFECT CONTINUOUS = an activity that started in the past and continues to now, with emphasis on the duration. She started at 9am (past), is still working (now) → 'has been working for three hours.' 'Worked' (simple past) implies it is finished. 'Had worked' = past perfect — requires another past event as a reference point.",
  },
  {
    id: 36, section: 5, type: "mc",
    stem: "She started working here in 2021. It is now 2026. Choose the correct sentence.",
    options: {
      A: "She works here for five years.",
      B: "She worked here since 2021.",
      C: "She has worked here for five years.",
      D: "She has worked here since five years.",
    },
    correct: "C",
    explanation: "PRESENT PERFECT + FOR = a duration from the past to now. Five years = a measured duration → FOR. 'Since five years' is wrong — SINCE requires a starting point (since 2021), not a duration. 'She worked here since 2021' is wrong — simple past cannot be used with SINCE for a continuing situation.",
  },
  {
    id: 37, section: 5, type: "mc",
    stem: "'If I have time, I will help you.' Choose the version that means you probably do NOT have time.",
    options: {
      A: "If I will have time, I would help you.",
      B: "If I had time, I would help you.",
      C: "If I had time, I will help you.",
      D: "If I have time, I would help you.",
    },
    correct: "B",
    explanation: "SECOND CONDITIONAL: If + PAST SIMPLE, would + base verb. 'If I had time' uses the past tense to signal an unreal present — I do NOT have time right now. Compare: FIRST CONDITIONAL ('If I have time, I will help you') = a real possibility. The past tense in the if-clause creates 'reality distance.'",
  },
  {
    id: 38, section: 5, type: "mc",
    stem: "He didn't study. He failed the exam. Choose the sentence that expresses regret.",
    options: {
      A: "He should study harder.",
      B: "He would study harder.",
      C: "He should have studied harder.",
      D: "He must have studied harder.",
    },
    correct: "C",
    explanation: "SHOULD HAVE + past participle = regret or criticism about a past action that did NOT happen. He did not study enough — that is the regret. 'Should study' = advice for the future. 'Must have studied' = a deduction (we think he probably did study). SHOULD HAVE = the thing didn't happen, but it should have.",
  },

  // ── Section 6: Guided Writing ────────────────────────────────

  {
    id: 39, section: 6, type: "mc",
    stem: "Your friend asks for help right now. Which is the most natural response?",
    options: {
      A: "I am going to help you.",
      B: "I help you.",
      C: "I'll help you.",
      D: "I have helped you.",
    },
    correct: "C",
    explanation: "WILL = a spontaneous offer or decision made at the moment of speaking. 'I'll help you' is the most natural way to offer help. 'I am going to help you' suggests a pre-planned intention — less natural for a spontaneous offer. 'I help you' (simple present) is not standard for offers. 'I have helped you' = past, already done.",
  },
  {
    id: 40, section: 6, type: "mc",
    stem: "You are applying for a job. You have five years of experience and you are still working in this field. Which sentence is best?",
    options: {
      A: "I work in this field for five years.",
      B: "I have been working in this field for five years.",
      C: "I worked in this field for five years.",
      D: "I am working in this field for five years.",
    },
    correct: "B",
    explanation: "You started five years ago and are still working now — have been working shows the unbroken activity from then to this moment.",
  },
  {
    id: 41, section: 6, type: "mc",
    stem: "You are telling a story about last night. Your friend called while you were doing something. Which sentence is best?",
    options: {
      A: "I cook dinner when she called.",
      B: "I cooked dinner when she called.",
      C: "I was cooking dinner when she called.",
      D: "I had cooked dinner when she called.",
    },
    correct: "C",
    explanation: "PAST CONTINUOUS = a background action already in progress when another event happened. 'Was cooking' = the longer activity underway. 'Called' = the interrupting event (simple past). 'I cooked dinner when she called' (simple past for both) loses the sense of background activity. Past continuous is the natural choice for storytelling.",
  },
  {
    id: 42, section: 6, type: "mc",
    stem: "You forgot to call your friend on her birthday. Which sentence best expresses how you feel now?",
    options: {
      A: "I should call her yesterday.",
      B: "I must have called her.",
      C: "I should have called her.",
      D: "I would call her if I remembered.",
    },
    correct: "C",
    explanation: "SHOULD HAVE + past participle = regret about something that did NOT happen in the past. You did not call her — that is the regret. 'Should call' = advice for the future. 'Must have called' = a deduction (you think you probably did call). 'Would call if I remembered' = second conditional for present/future, not past regret.",
  },

  // ── Section 7: Dictation + Analysis ─────────────────────────

  {
    id: 43, section: 7, type: "dictation_analysis",
    audio: "audio/p07_q43.mp3",
    correct: "She has lived here since she finished university.",
    analysisQuestion: "Why is <em>has lived</em> used — not <em>lived</em>?",
    options: {
      A: "Because the action is now finished and has no connection to the present",
      B: "Because she still lives here now",
      C: "Because 'lived' is an incorrect form in English",
    },
    correctAnalysis: "B",
    explanation: "PRESENT PERFECT + SINCE = the situation started in the past and CONTINUES to now. She finished university in the past and has lived here ever since — she still lives here now. Simple past ('lived') would imply she no longer lives there. SINCE always signals a continuing connection to the present.",
    note: "PRESENT PERFECT + SINCE = started then, still true now. The situation has not ended.",
  },
  {
    id: 44, section: 7, type: "dictation_analysis",
    audio: "audio/p07_q44.mp3",
    correct: "If I had more time, I would learn another language.",
    analysisQuestion: "What does this sentence tell us about the speaker's situation right now?",
    options: {
      A: "The speaker has plenty of time",
      B: "The speaker is certain they will learn a language",
      C: "The speaker does not have enough time right now",
    },
    correctAnalysis: "C",
    explanation: "SECOND CONDITIONAL: If + PAST SIMPLE, would + base verb. 'If I had more time' uses the past tense to express an unreal present situation — the speaker does NOT have enough time now. This is not about the past. The past tense creates 'reality distance.' The situation is imaginary, not real.",
    note: "SECOND CONDITIONAL = imaginary present. Past simple in the if-clause shows the situation is not real right now.",
  },
  {
    id: 45, section: 7, type: "dictation_analysis",
    audio: "audio/p07_q45.mp3",
    correct: "By the time she arrived, the meeting had already finished.",
    analysisQuestion: "Why is <em>had finished</em> used — not <em>finished</em>?",
    options: {
      A: "Because 'had' is used whenever we talk about something that happened in the past",
      B: "Because the meeting ended before she arrived",
      C: "Because 'finished' is too informal",
    },
    correctAnalysis: "B",
    explanation: "PAST PERFECT = an action completed BEFORE another past event. 'By the time she arrived' is the reference point. The meeting ended EARLIER — before her arrival. Past perfect (had finished) shows which event came first. Simple past 'finished' would make both actions seem to happen at the same time.",
    note: "PAST PERFECT = earlier past action. By the time + simple past → past perfect for the action that happened first.",
  },

];
