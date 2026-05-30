# MPG2026 – P06 Preposition Quiz

A standalone, mobile-friendly web quiz for **Modern Pronunciation and Grammar 2026**.
Topic: **Prepositions — Schema, Movement & Idioms**

---

## Folder Structure

```
p06-preposition-quiz/
├── index.html        ← Main page (start, quiz, results)
├── style.css         ← All styling (unchanged from orientation quiz)
├── script.js         ← Quiz logic (unchanged — drop-in compatible)
├── questions.js      ← All 40 questions + metadata (edit here)
├── Code.gs           ← Google Apps Script backend
├── README.md         ← This file
└── audio/
    ├── p06_q36.mp3   ← "Either the captain or the players are responsible for the mistake."
    ├── p06_q37.mp3   ← "She walked into the room quietly."
    ├── p06_q38.mp3   ← "I usually go to work by car."
    ├── p06_q39.mp3   ← "The letter was written in pencil, not with a pen."
    └── p06_q40.mp3   ← "He gave up smoking after twenty years."
```

---

## Quiz Structure: 40 Questions

| Section | Topic | Q# | Type | Count |
|---------|-------|----|------|-------|
| 1 | Core Schema: IN / ON / AT | 1–8 | Multiple choice | 8 |
| 2 | Transport, Medium & Tool | 9–14 | Multiple choice | 6 |
| 3 | Spatial Movement & Position | 15–22 | Multiple choice | 8 |
| 4 | Collocations & Fixed Phrases | 23–30 | Multiple choice | 8 |
| 5 | Word Order | 31–35 | Drag and drop | 5 |
| 6 | Dictation + Analysis | 36–40 | Dictation + analysis | 5 |
| | **Total** | | | **40** |

---

## Audio Files Required

Generate MP3 files for the 5 dictation sentences using espeak-ng or Azure TTS,
then place them in the `audio/` folder:

| File | Sentence |
|------|----------|
| p06_q36.mp3 | Either the captain or the players are responsible for the mistake. |
| p06_q37.mp3 | She walked into the room quietly. |
| p06_q38.mp3 | I usually go to work by car. |
| p06_q39.mp3 | The letter was written in pencil, not with a pen. |
| p06_q40.mp3 | He gave up smoking after twenty years. |

### Generate with espeak-ng (same method as your existing quiz):
```bash
espeak-ng -v en-us -s 130 -w audio/p06_q36.mp3 "Either the captain or the players are responsible for the mistake."
espeak-ng -v en-us -s 130 -w audio/p06_q37.mp3 "She walked into the room quietly."
espeak-ng -v en-us -s 130 -w audio/p06_q38.mp3 "I usually go to work by car."
espeak-ng -v en-us -s 130 -w audio/p06_q39.mp3 "The letter was written in pencil, not with a pen."
espeak-ng -v en-us -s 130 -w audio/p06_q40.mp3 "He gave up smoking after twenty years."
```

---

## How to Open Locally

1. Put all files in the same folder (including the `audio/` subfolder).
2. Open `index.html` in a modern browser.
3. For audio to work, serve via a local web server:
   ```bash
   python3 -m http.server 8000
   # Then open: http://localhost:8000
   ```

---

## Google Apps Script Backend

The `Code.gs` file is identical to your existing quiz — no changes needed.
Just deploy a new Web App and paste the URL into `script.js` as `SCRIPT_URL`
(or reuse the same URL if your sheet accepts multiple quiz IDs).

The `quizID` is set to `MPG2026_P06` so responses are clearly labelled.

---

## Score Bands

| Score | Feedback |
|-------|----------|
| 36–40 | Excellent |
| 30–35 | Good |
| 22–29 | Developing |
| 12–21 | Keep working |
| 0–11  | Work harder |

---

## Key Conceptual Points Tested

- **IN/ON/AT schema**: boundary / surface / point (space, time, abstract)
- **Transport**: in a car (container) · on a bus (platform) · by car (method, no article)
- **Medium vs. Tool**: in pencil (uncountable medium) · with a pen (countable tool)
- **THROUGH vs. ACROSS**: 3D enclosed space vs. flat 2D surface
- **ABOVE vs. OVER**: static level vs. arc/covering/movement
- **BELOW / UNDER / BENEATH**: level · contact · literary
- **INTO vs. IN**: dynamic entry vs. static location
- **BETWEEN vs. AMONG**: two specific vs. many in a group
- **TO vs. FOR**: transfer/direction vs. benefit/purpose
- **BY (agent)**: passive voice agent
- **SINCE vs. FOR**: point to now (perfect) vs. measured duration
- **Phrasal verbs**: give up · look after · call off · take off
- **Fixed phrases**: on behalf of · in spite of · by no means
