function cardGame() {
  return {
    cardFlipped: false,
    cardsAnswered: 0,
    totalCards: 0,
    selectedCategory: null,
    currentCard: { 
      question: "Click next card to begin", 
      category: "Getting Started" 
    },
    currentCategory: "Getting Started",
    categories: ["Unity", "Trust", "Care", "Bridge", "Voice", "Action", "Place", "Hope", "Learn", "Joy"],
    askedQuestions: {}, // Track asked questions by category
    availableQuestions: {}, // Track available questions by category
    allAskedQuestions: new Set(), // Track all asked questions across categories for random mode

    // Community-oriented questions from different categories (50 questions each)
    questions: [
      {
        category: "Unity",
        questions: [
          "What unites people here despite differences?",
          "What’s one hope you share with your neighbors?",
          "How do you show welcome to strangers?",
          "When did you feel most connected to this place?",
          "What value do you want our community known for?",
          "What symbol could represent our unity?",
          "How can we celebrate wins together?",
          "What phrase brings people closer?",
          "What keeps us from unity right now?",
          "What small act could build trust tomorrow?",
          "What song feels like a community anthem?",
          "What meal could bring people together?",
          "How can sports unite us here?",
          "What’s a shared challenge we overcame?",
          "What’s one project we could all join?",
          "What gesture feels like ‘we’ instead of ‘me’?",
          "How can festivals strengthen unity?",
          "What tradition makes you proud of this place?",
          "When did unity surprise you?",
          "What’s a small daily ritual of togetherness?",
          "What’s a quote that inspires unity?",
          "What color represents unity to you?",
          "How do we welcome newcomers better?",
          "What moment of unity do you treasure?",
          "What group deserves more recognition?",
          "What language could help connect more people?",
          "What does respect for differences look like?",
          "How can art unite us?",
          "When did you feel part of something bigger?",
          "What shared value binds this community?",
          "What’s a unity gesture you’ve seen work?",
          "What’s a way to cross cultural divides?",
          "What story of unity would you tell children?",
          "What role can elders play in unity?",
          "How can youth lead unity projects?",
          "What symbol of peace would you adopt here?",
          "What’s a memory of people standing together?",
          "What act of kindness felt unifying?",
          "What tradition of unity from the past should return?",
          "What’s the best thing about being united?",
          "How can unity survive conflict?",
          "What food, music, or dance unites us?",
          "What festival could we create for unity?",
          "What gesture crosses all differences?",
          "How can humor unite us?",
          "What word in another language means ‘together’?",
          "What action says ‘you belong’?",
          "What’s a dream everyone here shares?",
          "What symbol of unity should we display?",
          "What’s a unity habit to build daily?",
          "How do you show unity in tough times?"
        ]
      },
      {
        category: "Trust",
        questions: [
          "When has someone here earned your trust?",
          "What’s a fair way to rebuild broken trust?",
          "What promise matters most to keep?",
          "How can we handle conflict without blame?",
          "What gesture shows reliability to you?",
          "When did you trust a stranger and it worked?",
          "What makes you feel safe in this group?",
          "What boundary do you need respected?",
          "How can we be more transparent with each other?",
          "What does honesty look like in practice?",
          "What’s a sign you can count on someone?",
          "When did broken trust teach you something?",
          "What small act makes you trust faster?",
          "What weakens trust in communities?",
          "How do we show consistency as neighbors?",
          "What makes you hesitate to trust?",
          "How can leaders earn trust fairly?",
          "What’s a trust-building activity we could try?",
          "When has trust surprised you?",
          "What body language builds trust?",
          "How can we keep promises as a group?",
          "What tradition shows reliability here?",
          "When did you trust and get let down?",
          "What heals trust after conflict?",
          "How can sharing food build trust?",
          "What’s a time someone defended you?",
          "What’s your personal rule about promises?",
          "What gesture signals honesty to you?",
          "What’s an example of collective trust?",
          "What undermines trust quickly?",
          "How do apologies rebuild trust?",
          "What’s a story of trust from your culture?",
          "What role does respect play in trust?",
          "What makes trust fragile?",
          "How can youth practice trust safely?",
          "What words build trust instantly?",
          "What tradition passes on reliability?",
          "What makes trust grow slowly?",
          "What’s a time forgiveness restored trust?",
          "What ritual could we create to show trust?",
          "What behavior signals mistrust?",
          "How do you show someone they’re trusted?",
          "What role does listening play in trust?",
          "What example of trust do you admire?",
          "What does keeping confidence mean to you?",
          "What role does fairness play in trust?",
          "What makes institutions trustworthy?",
          "What personal quality builds trust fastest?",
          "How can humor build trust?",
          "What’s one thing you’d never risk with trust?",
          "What’s a community promise we should all keep?"
        ]
      },
      {
        category: "Care",
        questions: [
          "What’s a simple way to check in on neighbors?",
          "Who here could use extra care this week?",
          "What tradition of care do you remember from childhood?",
          "What words comfort you when stressed?",
          "How can we notice unspoken needs?",
          "What’s one caring act you’ll never forget?",
          "How can we include isolated neighbors?",
          "What makes you feel cared for?",
          "What’s a skill of care you’d like to learn?",
          "How can we teach kids to care for others?",
          "What’s a local group that shows true care?",
          "When did a stranger show you kindness?",
          "What’s a daily act of care you practice?",
          "What song or story reminds you of care?",
          "What foods feel like comfort to share?",
          "How can we care for nature here?",
          "What’s a time you felt supported by many?",
          "What gesture always cheers you up?",
          "What’s a form of care people overlook?",
          "When did you feel safe because of others?",
          "What role does listening play in care?",
          "How do you show care without words?",
          "What community event feels like care in action?",
          "What is self-care you wish more people practiced?",
          "How can we care for elders better?",
          "What’s a care tradition worth reviving?",
          "Who taught you about compassion?",
          "What’s the best care you’ve received here?",
          "How can we care for new parents locally?",
          "What small gift shows care?",
          "What role do pets play in care?",
          "When did someone check in at the right time?",
          "How can we care during emergencies?",
          "What’s a care role you naturally take?",
          "What gesture of care should be universal?",
          "What role does patience play in care?",
          "When did care heal a conflict?",
          "What’s a memory of group care you hold dear?",
          "What’s one way to reduce loneliness here?",
          "What volunteer role feels like care to you?",
          "How do you know when to offer help?",
          "What’s a story of care you’ve witnessed recently?",
          "What local place feels most caring?",
          "How can we care for children better?",
          "What tradition of care do you want to start?",
          "How can neighbors support each other in winter?",
          "What gesture feels like home to you?",
          "What role does touch play in care?",
          "What makes care feel genuine?",
          "How can we show care to newcomers?"
        ]
      },
      {
        category: "Bridge",
        questions: [
          "What divides us that we could bridge?",
          "What’s a respectful way to disagree?",
          "When did someone change your perspective?",
          "What’s a shared goal across differences?",
          "How can we reduce ‘us vs. them’ thinking?",
          "What words open up dialogue?",
          "What stereotype do you wish people dropped?",
          "When did listening change a conflict?",
          "What tradition brings groups together?",
          "What’s a bridge activity we could start?",
          "How can we unite across age groups?",
          "What value do all cultures share?",
          "When did you connect with someone unexpected?",
          "What’s a story that crosses divides?",
          "How can music or art build bridges?",
          "What’s a moment you felt unity in diversity?",
          "What habit creates separation here?",
          "How can we build empathy daily?",
          "What gesture makes peace easier?",
          "What word means common ground to you?",
          "What’s a small act to bridge generations?",
          "How can humor cross divides?",
          "What’s a respectful debate you’ve had?",
          "What’s a custom that deserves wider sharing?",
          "When did compromise work well?",
          "How can we learn from disagreements?",
          "What signals openness in a hard talk?",
          "What topic can unite very different people?",
          "What divides neighbors most, and how to fix?",
          "What builds trust between groups?",
          "What tradition crosses religion or culture?",
          "When did collaboration surprise you?",
          "What does forgiveness look like in groups?",
          "How can we avoid echo chambers?",
          "What symbol means bridging to you?",
          "What story of peace do you admire?",
          "What’s a bridge role you can play?",
          "What helps in talking politics respectfully?",
          "When did you feel included after being excluded?",
          "What’s a practice to welcome differences?",
          "How can neighbors learn each other’s stories?",
          "What makes dialogue break down?",
          "What makes dialogue succeed?",
          "How can we handle misunderstandings kindly?",
          "What action says ‘we’re together’?",
          "What divides do kids bridge naturally?",
          "What’s a project requiring many views?",
          "When did bridging feel joyful?",
          "What does community harmony look like?",
          "What’s the first step to bridge today?"
        ]
      },
      {
        category: "Voice",
        questions: [
          "What issue do you want heard locally?",
          "How can quieter voices be lifted?",
          "What makes you feel listened to?",
          "What meeting style brings out all voices?",
          "When was your idea valued here?",
          "What silences people, and how can we fix it?",
          "How could youth voices matter more?",
          "What’s the power of storytelling in community?",
          "What does respectful listening sound like?",
          "What change would you speak for tomorrow?",
          "What’s a song that gives people voice?",
          "When did someone speak up for you?",
          "What’s a story you’d like to tell?",
          "What gesture says ‘I hear you’?",
          "How can we amplify overlooked voices?",
          "What role do elders’ voices play here?",
          "What’s a moment when you felt ignored?",
          "How can technology give us more voice?",
          "What ritual ensures everyone speaks?",
          "When did speaking out change something?",
          "What makes you confident to share?",
          "How can we honor lived experiences?",
          "What holds people back from speaking?",
          "What’s a safe space to practice voice?",
          "What role do questions play in dialogue?",
          "When did silence speak louder than words?",
          "What tradition carries community stories?",
          "What’s a time your opinion shifted?",
          "How can we balance many voices?",
          "What skill helps people be heard?",
          "What voice from history inspires you?",
          "What’s a respectful way to challenge ideas?",
          "What gesture says ‘your voice matters’?",
          "How can we give space to new leaders?",
          "What role do protests play in voice?",
          "When did you feel brave speaking up?",
          "What’s a method for equal airtime?",
          "How can we hear kids more?",
          "What’s a story you’d record for the future?",
          "What role do artists’ voices play?",
          "What makes a speaker trustworthy?",
          "How can listening prevent conflict?",
          "What’s a time you regretted not speaking?",
          "What forum gives power to the people?",
          "What role do questions play in democracy?",
          "When did voice bring healing?",
          "What makes a message clear and strong?",
          "How can we support free expression?",
          "What moment made you feel seen?",
          "What should never be silenced?"
        ]
      },
      {
        category: "Action",
        questions: [
          "What small project could start this week?",
          "What’s one change we could do in one day?",
          "When did action here inspire you?",
          "How can we share responsibility fairly?",
          "What resource do we already have for action?",
          "What keeps people from acting together?",
          "What motivates you to step up?",
          "What tradition of action should we revive?",
          "What’s a low-cost way to show impact?",
          "What’s one action we can celebrate soon?",
          "What skill helps turn talk into action?",
          "What’s a habit that builds momentum?",
          "When did collective effort succeed?",
          "What role does planning play in action?",
          "What’s an example of leading by doing?",
          "What makes action fun instead of heavy?",
          "What barrier stops follow-through?",
          "What helps you commit to a task?",
          "What role do volunteers play here?",
          "What’s a time neighbors acted fast together?",
          "How can we make action inclusive?",
          "What motivates you more—goals or deadlines?",
          "What’s the best action from the past year?",
          "When did inaction cause regret?",
          "What role does courage play in action?",
          "What’s a daily micro-action anyone can try?",
          "How can we celebrate small wins?",
          "What makes people stick to commitments?",
          "What inspires you to take initiative?",
          "What’s an action worth repeating monthly?",
          "What role does teamwork play in results?",
          "When did persistence pay off?",
          "What helps people overcome procrastination?",
          "What does accountability look like in action?",
          "What role does creativity play in solutions?",
          "When did action heal division?",
          "What tool or space enables quick action?",
          "What makes people show up to help?",
          "What’s a project we could finish in one day?",
          "How can we balance speed and quality?",
          "What story of action inspires you most?",
          "What helps transform ideas into steps?",
          "What can we do with no budget?",
          "What motivates kids to act?",
          "What keeps energy alive in long projects?",
          "What role do leaders play in action?",
          "When did neighbors rally for a cause?",
          "What helps turn mistakes into lessons?",
          "What’s an action you’d like to start soon?",
          "What step can we take together today?"
        ]
      },
      {
        category: "Place",
        questions: [
          "What local spot feels like home?",
          "Where could we gather more often?",
          "What landmark tells our story?",
          "What public space needs care?",
          "What memory ties you to this land?",
          "Where do different groups naturally mix?",
          "What place is most welcoming here?",
          "What corner could become beautiful?",
          "Where should we plant something together?",
          "What’s a hidden gem nearby to share?",
          "What’s your favorite park or green space?",
          "What building feels like a community anchor?",
          "Where did you feel safe as a child?",
          "What spot inspires creativity for you?",
          "Where can we showcase local art?",
          "What place could host a community festival?",
          "Where is history most visible here?",
          "What’s a safe place for kids?",
          "Where do people relax together?",
          "What street feels most alive?",
          "What’s one space that needs more light?",
          "Where would you take a visitor first?",
          "What’s a spot that sparks joy?",
          "Where have you felt the strongest togetherness?",
          "What part of town needs more love?",
          "Where could we create a mural?",
          "What local place holds deep memories?",
          "Where could neighbors share meals outdoors?",
          "What’s a place you avoid, and why?",
          "Where should we gather in emergencies?",
          "What spot would make a great market?",
          "Where does nature feel strongest here?",
          "What’s a gathering place worth protecting?",
          "Where can youth safely hang out?",
          "What place brings back old stories?",
          "Where could we build a playground?",
          "What’s the quietest spot around?",
          "Where is diversity most visible?",
          "What public place feels underused?",
          "Where could we create a garden?",
          "What place makes you proud of home?",
          "Where can music bring people together?",
          "What spot could become more inclusive?",
          "Where should we install more benches?",
          "What place could connect generations?",
          "Where do people go for reflection?",
          "What space should stay open to all?",
          "What’s a dream place for community events?",
          "Where could we build common ground?",
          "What place do you want future kids to love?"
        ]
      },
      {
        category: "Hope",
        questions: [
          "What future do you dream for this place?",
          "What do you wish for kids growing up here?",
          "What small hope feels possible soon?",
          "What big hope would take all of us?",
          "When have you seen hope restored?",
          "What’s a hopeful message we could spread?",
          "How do you stay hopeful in tough times?",
          "What hope could unite all ages here?",
          "What’s a story of hope you’ve lived?",
          "What hope will you pass on to others?",
          "What symbol represents hope to you?",
          "When did neighbors give you hope?",
          "What song fills you with hope?",
          "What tradition sparks hope in hard times?",
          "What’s a hope worth repeating aloud daily?",
          "What helps hope turn into action?",
          "When did kids inspire your hope?",
          "What role do stories play in hope?",
          "What place feels full of hope?",
          "What hope makes you smile instantly?",
          "What small act renewed your hope recently?",
          "What dream should this community chase?",
          "What role does faith play in hope?",
          "What makes you hopeful about young people?",
          "What hope do you have for elders?",
          "What helps hope survive setbacks?",
          "What words spark hope in you?",
          "What tradition carries hope across time?",
          "What hope feels contagious?",
          "When has hope spread quickly?",
          "What’s a hopeful vision for five years from now?",
          "What hope could bring strangers together?",
          "What’s the bravest hope you hold?",
          "What makes people lose hope?",
          "What restores hope after loss?",
          "What action shows hope in practice?",
          "What is the most hopeful story you know?",
          "What gives you hope about this land?",
          "What role does laughter play in hope?",
          "What dream feels within reach?",
          "What makes hope fragile?",
          "What makes hope strong?",
          "What hope would you write on a wall?",
          "What’s a hope you’ve seen fulfilled?",
          "What hope should never be forgotten?",
          "What’s a hope you share with neighbors?",
          "What picture represents hope here?",
          "What do you hope to learn soon?",
          "What hope crosses all boundaries?",
          "What gives you hope for tomorrow?",
          "What hope feels urgent today?"
        ]
      },
      {
        category: "Learn",
        questions: [
          "What skill could neighbors trade?",
          "What lesson did your elders teach you?",
          "What could we learn from kids here?",
          "What tradition deserves to be shared?",
          "What’s a mistake this community learned from?",
          "What topic should we study together?",
          "What language or phrase could we all learn?",
          "What story shaped how you see the world?",
          "What do newcomers teach us?",
          "What’s one thing you’d love to teach others?",
          "When did learning change your perspective?",
          "What role does failure play in learning?",
          "What hobby could unite neighbors?",
          "What’s a cultural practice worth learning?",
          "What book taught you something lasting?",
          "What’s a local history more people should know?",
          "What’s a skill future generations must learn?",
          "What’s the best lesson from a child?",
          "What tradition teaches patience?",
          "What’s something you learned outside school?",
          "Who in this community is a hidden teacher?",
          "What’s a recipe worth passing on?",
          "What plant or place taught you something?",
          "What does lifelong learning mean to you?",
          "What’s the best advice you’ve received?",
          "When did teaching someone teach you more?",
          "What role do libraries play in learning?",
          "What lesson comes from nature here?",
          "What podcast or show taught you something?",
          "What’s a skill every household should know?",
          "What role does curiosity play in unity?",
          "What’s a tradition of mentoring worth reviving?",
          "What lesson about kindness stayed with you?",
          "What’s a game that teaches cooperation?",
          "What mistake taught you the most?",
          "What story from an elder shaped you?",
          "What lesson did hard times teach?",
          "What’s something you’d like to unlearn?",
          "What lesson crosses all cultures?",
          "What’s a phrase in another language you love?",
          "What’s a way to share learning freely?",
          "When did learning feel joyful?",
          "What’s the most surprising thing you learned here?",
          "What role does listening play in learning?",
          "What lesson could kids teach adults?",
          "What tradition teaches resilience?",
          "What’s a lesson you want remembered?",
          "What tool helps you learn best?",
          "What skill could we learn as a group?",
          "What lesson should be passed to newcomers?",
          "What’s the most important thing to learn next?"
        ]
      },
      {
        category: "Joy",
        questions: [
          "What makes this community laugh?",
          "What celebration brings us alive?",
          "What’s a joyful sound in this place?",
          "What game could everyone play together?",
          "When did you last see joy spread widely?",
          "What tradition brings joy across generations?",
          "How can we create fun for free?",
          "What small joy do you notice daily?",
          "What’s a joyful surprise you’ve given?",
          "How can joy keep us strong in hard times?",
          "What music fills this place with joy?",
          "What local food sparks happiness?",
          "What’s a funny story neighbors share?",
          "What festival feels most joyful here?",
          "What gesture spreads instant smiles?",
          "What makes children light up with joy?",
          "When did laughter heal a moment?",
          "What joyful habit could we build?",
          "What’s a memory of shared laughter?",
          "What’s a holiday tradition full of joy?",
          "How can play unite generations?",
          "What role does dancing play in joy?",
          "What’s a joke that always works?",
          "What moment made you laugh until you cried?",
          "What’s a simple joy in nature?",
          "What activity brings neighbors together joyfully?",
          "When did you feel joy in a crowd?",
          "What joy do pets bring to community?",
          "What silly tradition would you start?",
          "What’s a joy you rediscovered recently?",
          "What colors feel joyful to you?",
          "What’s a joyful memory in this place?",
          "What sport or game spreads smiles here?",
          "What’s a joy worth celebrating yearly?",
          "What’s a local song of joy?",
          "When did humor break the tension?",
          "What’s a random act of joy you’ve seen?",
          "What gift brought the most laughter?",
          "What joy do you hope to share soon?",
          "What activity sparks joy for kids?",
          "What makes gatherings more fun?",
          "What playful thing should adults do more?",
          "What moment of joy was unexpected?",
          "What tradition do you hope never ends?",
          "What role do stories play in joy?",
          "What memory of joy do you carry?",
          "What small toy or game brings smiles?",
          "What joy comes from giving?",
          "What’s a sound that makes you grin?",
          "What’s a joy we should create together?",
          "What joy will you pass forward?"
        ]
      }
    ],

    init() {
      // Initialize tracking of asked and available questions
      this.questions.forEach(category => {
        this.askedQuestions[category.category] = [];
        this.availableQuestions[category.category] = [...category.questions];
      });
      
      // Calculate total cards
      this.totalCards = this.questions.reduce((total, category) => total + category.questions.length, 0);
    },

    flipCard() {
      if (this.currentCard.question !== "Click next card to begin") {
        this.cardFlipped = !this.cardFlipped;
      }
    },

    selectCategory(category) {
      this.selectedCategory = this.selectedCategory === category ? null : category;
    },

    nextCard() {
      let availableCategories = this.questions;
      
      // If a category is selected, filter to only that category
      if (this.selectedCategory) {
        availableCategories = this.questions.filter(cat => cat.category === this.selectedCategory);
      }
      
      // Filter categories that still have available questions
      availableCategories = availableCategories.filter(cat => 
        this.availableQuestions[cat.category].length > 0
      );
      
      // If no questions are available, show message and return
      if (availableCategories.length === 0) {
        this.currentCard = {
          category: "All Done!",
          question: "You've answered all available questions in " + 
                   (this.selectedCategory ? this.selectedCategory : "all categories") + 
                   ". Reset the game or select a different category."
        };
        this.currentCategory = "All Done!";
        this.cardFlipped = true;
        return;
      }
      
      // Select a random category from available ones
      const categoryIndex = Math.floor(Math.random() * availableCategories.length);
      const category = availableCategories[categoryIndex];
      
      // Select a random question from available questions in that category
      const questionIndex = Math.floor(Math.random() * this.availableQuestions[category.category].length);
      const question = this.availableQuestions[category.category][questionIndex];
      
      // Update asked and available questions
      this.askedQuestions[category.category].push(question);
      this.availableQuestions[category.category] = this.availableQuestions[category.category]
        .filter(q => q !== question);
      
      // Add to global asked questions set for random mode
      this.allAskedQuestions.add(question);
      
      this.currentCard = {
        category: category.category,
        question: question
      };
      
      this.currentCategory = category.category;
      this.cardsAnswered++;
      
      this.cardFlipped = true;
    },

    resetGame() {
      this.cardFlipped = false;
      this.cardsAnswered = 0;
      this.selectedCategory = null;
      this.currentCard = { 
        question: "Click next card to begin", 
        category: "Getting Started" 
      };
      this.currentCategory = "Getting Started";
      this.resetTracking();
    },
    
    resetTracking() {
      // Reset tracking of asked and available questions
      this.questions.forEach(category => {
        this.askedQuestions[category.category] = [];
        this.availableQuestions[category.category] = [...category.questions];
      });
      this.allAskedQuestions.clear();
    },
    
    getCategoryProgress(categoryName) {
      const category = this.questions.find(cat => cat.category === categoryName);
      if (!category) return { answered: 0, total: 0 };
      
      return {
        answered: this.askedQuestions[categoryName].length,
        total: category.questions.length
      };
    }
  }
}