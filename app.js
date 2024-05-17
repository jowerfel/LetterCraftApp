
const app = Vue.createApp({
   // template: '<h2>This is the template</h2>'
   data() {
    return {
      lettersMade: [],
      VowelsMde: [],
      addtoDate: 0,
      wordsMade: 0,
        lettersLeft: 0,
        RemovinglettersLeft: 0,
         year: new Date(),
        winner: false,
        loser: true,
        wordIsAWord: "Make a Guess",
        enteredBox: false,
        leftBox: false,
        doubleclicked: false,
        mouseMoving: false,
        x: 0,
        y: 0,
        seed: "",
        PastWords: [

        ],
        ratings: [
            { name: 'Amazing'},
            { name: 'Good'},
            { name: 'All right'},
            { name: 'Not good'},
            { name: 'Terrible'}
        ],
        lettersInGame: [
           // {0, name: "A"}
        ],
        isAWord: false,
        Word: [
            
        ],
        WordTogether: '',
        Letters: [
           // {used: false, index: 0, name: "A"},
            {used: false, index: 1, name: "B"},
            {used: false, index: 2, name: "C"},
            {used: false, index: 3, name: "D"},
           // {used: false, index: 4, name: "E"},
            {used: false, index: 5, name: "F"},
            {used: false, index: 6, name: "G"},
            {used: false, index: 7, name: "H"},
           // {used: false, index: 8, name: "I"},
            {used: false, index: 9, name: "J"},
            {used: false, index: 10, name: "K"},
            {used: false, index: 11, name: "L"},
            {used: false, index: 12, name: "M"},
            {used: false, index: 13, name: "N"},
           // {used: false, index: 14, name: "O"},
            {used: false, index: 15, name: "P"},
            {used: false, index: 17, name: "R"},
            {used: false, index: 18, name: "S"},
            {used: false, index: 19, name: "T"},
           // {used: false, index: 20, name: "U"},
            {used: false, index: 21, name: "V"},
            {used: false, index: 22, name: "W"},
            
           // {used: false, index: 24, name: "Y"},
           // {used: false, index: 25, name: "Z"}
            
        ],
        Vowels: [
            {used: false, index: 0, name: "A"},
            {used: false, index: 4, name: "E"},
            {used: false, index: 8, name: "I"},
            {used: false, index: 14, name: "O"},
            {used: false, index: 20, name: "U"},
            {used: false, index: 0, name: "A"},
            {used: false, index: 4, name: "E"},
            {used: false, index: 8, name: "I"},
            {used: false, index: 14, name: "O"},
            {used: false, index: 20, name: "U"},
            {used: false, index: 24, name: "Y"}
            
        ],
        OriginalWord: [

        ]
    }

   },
   methods: {
    // toggleShowletters(){
    //     this.wordIsAWord = !this.wordIsAWord
    // },
    enter(){
       this.enteredBox = true
        this.leftBox = false
    },
    exit(){
        this.leftBox = true
        this.enteredBox = false
    },
    mouseMove(e){
        this.x = e.offsetX
        this.y = e.offsetY
    },
    doubleClick(){
        this.doubleclicked = !this.doubleclicked
        console.log(this.doubleclicked)
    },
    addVowel(){
        //this.generateLetter
      //  this.lettersInGame.push(this.chosenLetterID)
      //  console.log(getRandomInt(3));
     // console.log('In')
       // this.chosenLetterID = Letters.random();
       // chosenLetterID.LetterID = num

       let index = (Math.floor(Math.random() * this.Vowels.length));
       let letter = this.Vowels[index];

       let letterCopy = JSON.parse(JSON.stringify(letter));
       this.lettersInGame.push(letterCopy);
       const thingymagig = this.lettersInGame.indexOf(letterCopy)
       letterCopy.index = thingymagig
       this.lettersLeft ++
       this.RemovinglettersLeft ++
      this.checkWinnerOrLoser()
/*
      let myObj = {};

      let objCopy = JSON.parse(JSON.stringify(myObj));


        //console.log(this.chosenLetterID)*/
       // this.lettersInGame.push(this.chosenLetterID)
    },
    addLetter2(){
      //this.generateLetter
    //  this.lettersInGame.push(this.chosenLetterID)
    //  console.log(getRandomInt(3));
   // console.log('In')
     // this.chosenLetterID = Letters.random();
     // chosenLetterID.LetterID = num

     let index = (Math.floor(Math.random() * this.Letters.length));
     let letter = this.Letters[index];

     let letterCopy = JSON.parse(JSON.stringify(letter));
     this.lettersInGame.push(letterCopy);
     const thingymagig = this.lettersInGame.indexOf(letterCopy)
     letterCopy.index = thingymagig
     this.lettersLeft ++
     this.RemovinglettersLeft ++
    this.checkWinnerOrLoser()
/*
    let myObj = {};

    let objCopy = JSON.parse(JSON.stringify(myObj));


      //console.log(this.chosenLetterID)*/
     // this.lettersInGame.push(this.chosenLetterID)
  },
    /*
    generateLetter(){
        var number = Math.floor(Math.random() * this.Letters.length)
        this.chosenLetterID = this.list[number];
        var test = Math.random()
        console.log(this.test)
      //  var chosenNumber = Math.floor(Math.random() * this.Letters.length);
      //  this.chosenLetter = this.list[chosenNumber];
      },*/
      addtoword(lett){
        lett.used = true
        console.log("in addtoword: " + lett);
        console.log(lett.name)
        let letter = this.Word[lett.name];
        let letterCopy = JSON.parse(JSON.stringify(lett.name));
        this.Word.push(letterCopy);
        this.OriginalWord.push(lett);
        console.log(this.Word)
        //this.WordTogether = this.Word.name

        //let names = this.Word.map(p => p.name);
        //let names = this.Word.join('');
        this.WordTogether = this.Word.join('');
        //this.WordTogether = names.join('');

        console.log(this.WordTogether.length)
        console.log("Word is:" + this.WordTogether)
        console.log(this.RemovinglettersLeft)
    },
    
      addLetter(le) {
        console.log("in addLetter()")
        console.log(le)
        
      //  console.log('In')
       // this.chosenLetterID = Letters.random();
       // chosenLetterID.LetterID = num

       let index = (Math.floor(Math.random() * this.Letters.length));
       index = this.Letters.indexOf(le)
       let letter = this.Letters[index];

    //   console.log("index is: " + index + ", letter is: " + letter);

       let letterCopy = JSON.parse(JSON.stringify(le));
       this.lettersInGame.push(letterCopy);
       const thingymagig = this.lettersInGame.indexOf(letterCopy)
       letterCopy.index = thingymagig
       console.log(letterCopy.index)
       //console.log(this.Letters[index]);
        this.lettersLeft ++
        this.RemovinglettersLeft ++
        this.checkWinnerOrLoser()
      },
      
      startGame(){
       // let th = "A"
        try {
          this.winner = false
          this.loser = false
          this.lettersLeft = 0
          this.RemovinglettersLeft = 0
          this.wordsMade = 0
            this.WordTogether = ""
            this.Word = []
            this.OriginalWord = []
            this.lettersInGame = []
            // this.addLetter({used: false, index: 0, name: th,})
            // this.addLetter()
            // this.addVowel()
            // this.addVowel()
            // this.addLetter()
            // this.addLetter()
            // this.addLetter()
            // this.addLetter()
            this.lettersLeft = 8
            this.RemovinglettersLeft = 8
            this.WordTogether = ""
            
            if (this.lettersLeft !== 8 ){
           // console.log(this.lettersInGame)
            }
        }
        catch(e) {
            console.log("Error: " + e);
        }
        
      },
      removeLastLetter(){
        this.OriginalWord = []
        this.Word = []
       this.WordTogether = ""

       for(let i = 0; i < this.lettersInGame.length; i++) {
        this.lettersInGame[i].used = false;
       }
       
        
        
      },
      fetchData() {
        if (this.WordTogether.length < 3){
          this.wordIsAWord = "Word Is Too Short"
          console.log(this.wordIsAWord)
          this.removeLastLetter()
        } else{
          this.wordIsAWord = "";
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + this.WordTogether, {
        })
          .then((response) => {
            
            response.json().then((data) => {
              
                console.log(response)
               
                console.log(response.title)
                this.isAWord = response.ok
                console.log(this.isAWord)
                if (this.isAWord == true) {
                  this.RemovinglettersLeft -= this.OriginalWord.length
                   console.log(this.RemovinglettersLeft)
                  this.wordsMade ++
                  this.wordIsAWord = this.WordTogether + " is a Word"
                  this.PastWords.push(this.WordTogether)
                  for(let i = 0; i < this.WordTogether.length; i++) {
                    let letter = this.WordTogether[i];

                    for(let j = 0; j < this.lettersInGame.length; j++) {
                      let currentLetter = this.lettersInGame[j];
                      if(currentLetter.name == letter) {
                        this.lettersInGame.splice(j, 1);
                        break;
                      }
                    }
                  }

                   
                   
                     this.removeLastLetter()
                     this.checkWinnerOrLoser()
                  }else{
                    this.wordIsAWord = this.WordTogether + " is not a Word"
                    this.removeLastLetter()
                    
                  }

                  //console.log("word")
         //     this.fact = data[0].fact;
            });
          })
          .catch((err) => {
            console.error(err);
          });
        }
      },
      checkWinnerOrLoser(){
        console.log("checking Who won")
        if (this.RemovinglettersLeft >= 25){
          
          this.winner = false
          console.log("Loser")
          console.log(this.lettersLeft)
        } else{
          console.log(this.RemovinglettersLeft)
        }
        if (this.RemovinglettersLeft <= 0){
          this.winner = true
          this.loser = false
          console.log("winner")
        } else{
          console.log(this.RemovinglettersLeft)
        }
      },
    //    selectLetters() {
       
    //     const currentDate = new Date();
    //     const alphabet = 'abcdefghijklmnopqrstuvwxy';
    //     const excludedLetters = ['q', 'x', 'z'];
       
    //     // Shuffle the alphabet array based on current date
    //     let shuffledAlphabet = alphabet.split('');
    //     for (let i = shuffledAlphabet.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [shuffledAlphabet[i], shuffledAlphabet[j]] = [shuffledAlphabet[j], shuffledAlphabet[i]];
    //     }
        
    //     // Select the first 8 letters from the shuffled array excluding excluded letters
    //     let selectedLetters = [];
    //     let count = 0;
       
    //     for (let letter of shuffledAlphabet) {
    //         if (!excludedLetters.includes(letter)) {
    //             selectedLetters.push(letter);
    //             count++;
    //         }
    //         if (count === 8) break;
    //     }
       
    //     const lettersCreated = selectedLetters.join('')
    //     // return selectedLetters.join(''); 
    //     console.log("in")
    //     console.log("Letters: " + lettersCreated);
    // },
    recordKey(e) {
      console.log("You pressed ${e.key}");
    },
    selectLetters() {
      document.addEventListener('keydown', this.recordKey);


      let currentDate = new Date()
      var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);
      let alphabet = 'AHPKYEUWFJIDYNALMOTSGEIVBOCRUAHPKEUWFIDNALMOTSGEIVBOCRU';
     
      // shuffle = str => [...str].sort(()=>Math.random()-.5).join('');
      // alphabet = shuffle(alphabet)
      const excludedLetters = ['q', 'x', 'z'];
      let d = new Date()
      d.setDate(d.getDate() + this.addtoDate)
      currentDate = d
      console.log(currentDate)
     // console.log(d)
      console.log("in")
      this.year = currentDate.getFullYear();
       console.log(this.year)
       this.getCentury()
       console.log(this.year)
       this.year += day
       currentDate = this.year
      let dayOfMonth = new Date();
      dayOfMonth = currentDate
      
      // Shuffle the alphabet array based on the day of the month
      
      let shuffledAlphabet = alphabet.split('');
      this.testo(shuffledAlphabet)
      this.testo(shuffledAlphabet)
      this.testo(shuffledAlphabet)
      this.testo(shuffledAlphabet)
      this.testo(shuffledAlphabet)
      console.log("Before: " + shuffledAlphabet)
      for (let i = 0; i < dayOfMonth; i++) {
          shuffledAlphabet.push(shuffledAlphabet.shift());
      }
      console.log("after: " + shuffledAlphabet)
      // Select the first 8 letters from the shuffled array excluding excluded letters
      let selectedLetters = [];
      let count = 0;
      for (let letter of shuffledAlphabet) {
          if (!excludedLetters.includes(letter)) {
              selectedLetters.push(letter);
              count++;
          }
          if (count === 8) break;
      }
      console.log("First: " + selectedLetters)
      this.startGame()
      this.addLetter({used: false, index: 0, name: selectedLetters[0],})
      this.addLetter({used: false, index: 0, name: selectedLetters[1],})
      this.addLetter({used: false, index: 0, name: selectedLetters[2],})
      this.addLetter({used: false, index: 0, name: selectedLetters[3],})
      this.addLetter({used: false, index: 0, name: selectedLetters[4],})
      this.addLetter({used: false, index: 0, name: selectedLetters[5],})
      this.addLetter({used: false, index: 0, name: selectedLetters[6],})
      this.addLetter({used: false, index: 0, name: selectedLetters[7],})    
      let shuffledAlphabet2 = alphabet.split('');
      this.PastWords = []
      this.lettersLeft = 8
      this.RemovinglettersLeft = 8
      console.log(this.RemovinglettersLeft)
      for (let i = 0; i < dayOfMonth; i++) {
          shuffledAlphabet2.push(shuffledAlphabet2.shift());
      }
      
      // Select the first 8 letters from the shuffled array excluding excluded letters
      let selectedLetters2 = [];
      let count2 = 0;
      for (let letter of shuffledAlphabet2) {
          if (!excludedLetters.includes(letter)) {
              selectedLetters2.push(letter);
              count++;
          }
          if (count2 === 17) break;
      }

      const lettersCreated = selectedLetters.join('')
      // return selectedLetters.join('');
      this.StartAddConstinent()
      this.StartAddVowel()
        console.log("Letters: " + lettersCreated);
  },

  StartAddConstinent() {
   


    let currentDate = new Date()
    var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  console.log('Day of year: ' + day);
    let alphabet = 'HPKWFJDYNLMTSGVBCRHPKWFJDYNLMTSGVBCRHPKWFJDYNLMTSGVBCRHPKWFJDYNLMTSGVBCRHPKWFJDYNLMTSGVBCRHPKWFJDYNLMTSGVBCRHPKWFJDYNLMTSGVBCRHPKWFJDYNLMTSGVBCRHPKWFJDYNLMTSGVBCRHPKWFJDYNLMTSGVBCR';
   
    // shuffle = str => [...str].sort(()=>Math.random()-.5).join('');
    // alphabet = shuffle(alphabet)
    const excludedLetters = ['q', 'x', 'z'];
    let d = new Date()
    d.setDate(d.getDate() + this.addtoDate)
    currentDate = d
    console.log(currentDate)
   // console.log(d)
    console.log("in")
    this.year = currentDate.getFullYear();
     console.log(this.year)
     this.getCentury()
     console.log(this.year)
     this.year += day
     currentDate = this.year
    let dayOfMonth = new Date();
    dayOfMonth = currentDate
    
    // Shuffle the alphabet array based on the day of the month
    
    let shuffledAlphabet = alphabet.split('');
    this.testo(shuffledAlphabet)
    this.testo(shuffledAlphabet)
    this.testo(shuffledAlphabet)
    this.testo(shuffledAlphabet)
    this.testo(shuffledAlphabet)
    this.testo(shuffledAlphabet)
    this.testo(shuffledAlphabet)
    this.testo(shuffledAlphabet)
    this.testo(shuffledAlphabet)
    this.testo(shuffledAlphabet)
    console.log("Before: " + shuffledAlphabet)
    for (let i = 0; i < dayOfMonth; i++) {
        shuffledAlphabet.push(shuffledAlphabet.shift());
    }
    console.log("after: " + shuffledAlphabet)
    // Select the first 8 letters from the shuffled array excluding excluded letters
    let selectedLetters = [];
    let count = 0;
    for (let letter of shuffledAlphabet) {
        if (!excludedLetters.includes(letter)) {
            selectedLetters.push(letter);
            count++;
        }
        if (count === 250) break;
    }
    console.log(selectedLetters)
    this.lettersMade = selectedLetters
      
},
addConstinent(){
  this.addLetter({used: false, index: 0, name: this.lettersMade[0],})
    this.lettersMade.shift()
    console.log("In")
},
StartAddVowel() {
   


  let currentDate = new Date()
  var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);
  let alphabet = 'AEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUYAEIOUAEIOUAEIOUY';
 
  // shuffle = str => [...str].sort(()=>Math.random()-.5).join('');
  // alphabet = shuffle(alphabet)
  const excludedLetters = ['q', 'x', 'z'];
  let d = new Date()
  d.setDate(d.getDate() + this.addtoDate)
  currentDate = d
  console.log(currentDate)
 // console.log(d)
  console.log("in")
  this.year = currentDate.getFullYear();
   console.log(this.year)
   this.getCentury()
   console.log(this.year)
   this.year += day
   currentDate = this.year
  let dayOfMonth = new Date();
  dayOfMonth = currentDate
  
  // Shuffle the alphabet array based on the day of the month
  
  let shuffledAlphabet = alphabet.split('');
  this.testo(shuffledAlphabet)
  this.testo(shuffledAlphabet)
  this.testo(shuffledAlphabet)
  this.testo(shuffledAlphabet)
  this.testo(shuffledAlphabet)
  this.testo(shuffledAlphabet)
  this.testo(shuffledAlphabet)
  this.testo(shuffledAlphabet)
  this.testo(shuffledAlphabet)
  this.testo(shuffledAlphabet)
  console.log("Before: " + shuffledAlphabet)
  for (let i = 0; i < dayOfMonth; i++) {
      shuffledAlphabet.push(shuffledAlphabet.shift());
  }
  console.log("after: " + shuffledAlphabet)
  // Select the first 8 letters from the shuffled array excluding excluded letters
  let letterthings = [];
  console.log("Before SelectedLetters: " + letterthings)
  let count = 0;
  for (let letter of shuffledAlphabet) {
      if (!excludedLetters.includes(letter)) {
        letterthings.push(letter);
          count++;
      }
      if (count === 250) break;
  }
  console.log("vowels: " + letterthings)
  this.VowelsMde = letterthings
    
},
realAddVowel(){
  console.log(this.VowelsMde[0])
  this.addLetter({used: false, index: 0, name: this.VowelsMde[0],})
    this.VowelsMde.shift()
},
  myFunction() {
    const currentDate = new Date().toDateString();
    // Get the text field
    let copyText = ("I solved the LetterCraft on " + currentDate + " in " + this.lettersLeft + " letters and made " + this.wordsMade + " words!! https://www.jwerfel.com/josh/lettercraft/")
    console.log(copyText)
    console.log("in")
    // Select the text field
  //  copyText.select();
   // copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
     const shareData = {
    //   title: "LetterCraft",
       text: "I solved the LetterCraft on " + currentDate + " in " + this.lettersLeft + " letters and made " + this.wordsMade + " words!! https://www.jwerfel.com/josh/lettercraft/",
    //   url: "https://www.jwerfel.com/josh/LetterCraft/",
     };
    
   //  const btn = document.querySelector("thingy");
    // const resultPara = document.querySelector(".result");
    
    // Share must be triggered by "user activation"
   // btn.addEventListener("click", async () => {
      try {
       //  navigator.share(shareData);
       navigator.share(shareData)
       // resultPara.textContent = "MDN shared successfully";
      } catch (err) {
       // resultPara.textContent = `Error: ${err}`;
      }
  //  });
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  },
  getCentury() {
    var century = Math.ceil(this.year / 100);
    century = (this.year - 2000)
    this.year = this.year - 2000
    console.log("It is currently:" + century)
    century = century * 365
    console.log("Now it is:" + century)
    this.year = century
    console.log(this.year)
    
 },
 
  
    return(){
      console.log(this.selectLetters());
    },
    randomizeArray(arr) {
      let d = new Date()
      d.setDate(d.getDate() + this.addtoDate)
      let currentDate = new Date()
      var now = new Date();
    // var start = new Date(now.getFullYear(), 0, 0);
    
    var diff = (now - d) + ((d.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);
      let alphabet = 'HPKYUWFJDNALMTSGEIVBOCR';
      // shuffle = str => [...str].sort(()=>Math.random()-.5).join('');
      // alphabet = shuffle(alphabet)
      const excludedLetters = ['q', 'x', 'z'];
      
      currentDate = d
      // console.log(currentDate)
     // console.log(d)
      // console.log("in")
      this.year = currentDate.getFullYear();
      //  console.log(this.year)
       this.getCentury()
      //  console.log(this.year)
       this.year += day
      //  console.log(this.year)
       currentDate = this.year
      let dayOfMonth = new Date();
      dayOfMonth = currentDate
      // console.log(dayOfMonth)
        // let currentDate = new Date();
        //  let d = new Date()
        //  d.setDate(d.getDate() + 0)
        // currentDate = d
          this.seed = dayOfMonth//.toISOString().slice(0, 10); // Extract YYYY-MM-DD
        //  console.log("Seed: " + this.seed)
        let currentIndex = arr.length, temporaryValue, randomIndex;
        // console.log(currentIndex)
      // Use a seeded random number generator
      
      
      while (0 !== currentIndex) {
          randomIndex = Math.floor(this.seededRandom() * currentIndex);
          
          currentIndex -= 1;
      
          // Swap current element with randomly selected element
          temporaryValue = arr[currentIndex];
          // console.log(temporaryValue)
          arr[currentIndex] = arr[randomIndex];
          // console.log("2: " + randomIndex)
          arr[randomIndex] = temporaryValue;
          // console.log(arr)
        }
        // console.log(arr)
        return arr;
      },
      seededRandom() {
        const x = Math.sin(this.seed) * 10000;
        // console.log("X: " + x)
        // console.log(Math.floor(x))
          return x - Math.floor(x);
          },
      // Example usage:
      // const stringsArray = ["apple", "banana", "orange", "grape", "kiwi"];
      // const randomizedArray = randomizeArray(stringsArray);
      // console.log(randomizedArray);
      testo(duthing){
        let stringsArray = ["apple", "banana", "orange", "grape", "kiwi"];
      let randomizedArray = this.randomizeArray(duthing);
      console.log(randomizedArray);
      return randomizedArray
      },
      testThing(){
        document.addEventListener('keydown', (event)=> {    
          console.log(event.key);
          console.log(event.code);
      });
      },
      // window.addEventListener('keydown', Thing(e)),
      // Thing(e) {
      //   document.querySelector('p').innerHTML = `You pressed ${e.key}`;
      // }, 
    },
})

app.mount('#app')