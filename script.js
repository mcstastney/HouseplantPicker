// Initialize Global variables for later use in functions 
const recommendation = "We recommend a"
const plantName = document.getElementById("recommendedPlantName");
const plantDescription = document.getElementById("plantDescription");
const plantImage = document.getElementById("imagePlaceholder");

// Add eventlisteners to each button
const quizButton = document.getElementById("quizButton");
const resultsButton = document.getElementById("resultsButton");
const retakeButton = document.getElementById("retakeButton");
const shopButton = document.getElementById("shopButton");

// Array with multiple objects containing 'key:value' pairs to store plant data 
// Images linked to online examples from Google - hopefully they still work!
const plants = [
  {
    name: "Spider plant", 
    size: "Big", 
    light: "Sunny", 
    care: "Beginner", 
    description: "Spider plants prefer bright, indirect light. Avoid direct sunlight, as it can scorch their leaves. Water them well but do not allow the plants to become too soggy, which can lead to root rot. In fact, spider plants prefer to dry out some between waterings.",
    image: 'https://m.media-amazon.com/images/I/81HfiPu145L._AC_SX679_.jpg'
  },
  
  {
    name: "Monstera", 
    size: "Big", 
    light: "Shady", 
    care: "Beginner", 
    description: "Monsteras like bright indirect light. They can adjust to medium light, but might get leggy in that environment. Best placed in a room that has large west-facing windows. Monsteras prefer slightly moist soil and generally like to dry out just a bit between waterings.",
    image: 'https://i.etsystatic.com/37970779/r/il/48becb/4277071735/il_1588xN.4277071735_bgyr.jpg'
  },
  
  {
    name: "Ficus tree", 
    size: "Big", 
    light: "Shady", 
    care: "Expert", 
    description: "Most ficus trees enjoy bright indirect or filtered light with variegated varieties happily able to take medium light. Bright, direct light may result in scalding of the leaves and leaf loss. To feed your ficus tree give it a liquid all-purpose fertilizer during its growing season from April to September.", 
    image: 'https://palmcentre.co.uk/wp-content/uploads/2023/08/F_16395_603c118c1d3fd.jpg'
  },
  
  {
    name: "Snake leaf fern", 
    size: "Big", 
    light: "Sunny", 
    care: "Expert", 
    description: "Like many ferns, Snake leaf fern enjoys a well-drained growing medium plus shade with plenty of light but not direct sunlight. Keep moist but not soggy. When repotting, it is a good idea to add mulch to the original potting compost in the form of composted tree bark.",
    image: 'https://palmcentre.co.uk/wp-content/uploads/2022/03/305-scaled.jpg'
  },
  
    {
    name: "Monkey Mask", 
    size: "Small", 
    light: "Shady", 
    care: "Beginner", 
    description: "Monstera adansonii is easy to care for so long as it has moist, warm conditions. The plant has a vining habit and often grows entwined in and around itself, with new leaves and vines sometimes growing through the holes in existing leaves.",
    image: 'https://hortology.co.uk/cdn/shop/products/Monstera-adansonii-Philodendron-Monkey-Mask-Large_1200x.jpg?v=1704199325'
  },
  
  {
    name: "Mother in law's tongue", 
    size: "Small", 
    light: "Sunny", 
    care: "Beginner", 
    description: "Snake-plants tend to do best in positions where they are drenched in bright, filtered light. However, not ones to be fussy, many species also grow to their full potential in partial or low light conditions making them an ideal choice for hallways or offices.",
    image: 'https://www.ikea.com/gb/en/images/products/sansevieria-trifasciata-potted-plant-mother-in-laws-tongue__0908898_pe676659_s5.jpg?f=s'
  },
  
  {
    name: "Prayer plant", 
    size: "Small", 
    light: "Shady", 
    care: "Expert", 
    description: "Prayer plants need a consistently warm spot and bright but indirect light. Keep the soil moist from spring to autumn, and provide some humidity by misting the leaves daily. They need to be watered with filtered or distilled water, or rainwater – not tap water.",
    image: 'https://i.etsystatic.com/14339179/r/il/a8823f/2359005661/il_570xN.2359005661_8u10.jpg'
  },
  
  {
    name: "Philodendron", 
    size: "Small", 
    light: "Sunny", 
    care: "Expert", 
    description: "Provide plenty of warmth and moisture near a sunny window. Beware of direct sunlight; it can burn their delicate leaves. Philodendrons are not particularly thirsty plants and should only be watered whenever the top inch of soil is dry to the touch.",
    image: 'https://thewateredgarden.co.uk/cdn/shop/files/PhilodendronScandensBrasil_2048x2048.jpg?v=1701818040'
  }
]

// When 'quizButton' clicked, hide #welcome section and display #quiz section using CSS 'display' property
quizButton.addEventListener("click", loadQuiz);
function loadQuiz() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("quiz").style.display = "block";
}

// For loop to iterate over the 'plants' array 
// The function parameters are the 'plants' array and the user's 3 answers
function getPlant(plantsArray, size, light, care) {
  for (let i = 0; i < plantsArray.length; i++) {
    let currentPlant = plantsArray[i];

    // Check if the current plant index matches all 3 criteria, if true, return that plant
    if (
      currentPlant.size === size &&
      currentPlant.light === light &&
      currentPlant.care === care
    ) {
      return currentPlant;
    }
  }
    // If no matching plant is found, return a message / empty the placeholders
    return { name: "...", description: "Sorry, no plants match", image: "" };
}

// When 'resultsButton' clicked, run 'if else' loop to check user's answers against the 'plants' array
// Recommend a plant that matches the user's selection for size, light and care type
resultsButton.addEventListener("click", recommendPlants);
function recommendPlants() {  
  
  // Check if each question has been answered i.e. radio button is 'checked'
  let answer1 = document.querySelector('input[name="size"]:checked');
  let answer2 = document.querySelector('input[name="light"]:checked');
  let answer3 = document.querySelector('input[name="care"]:checked');
  
  // If all 3 questions have been answered, execute the code in curly braces
  if (answer1 && answer2 && answer3) {
    
    // Get values from the user's answers and store them as variables
    let responseSize = answer1.value;
    let responseLight = answer2.value; 
    let responseCare = answer3.value;
    
    // Pass the 'plants' array and user's 3 answers as the arguements in 'getPlant' function
    let myPlant = getPlant(plants, responseSize, responseLight, responseCare);
    
    // Update the DOM with name, description and image of the recommended plant, then load #results section
    plantName.innerHTML = `${recommendation} ${myPlant.name}`;
    plantDescription.innerHTML = myPlant.description;
    plantImage.src = myPlant.image;
    loadResults();
  }
  
  // If any of the questions haven't been answered, display an alert
  else {
    alert("Please answer all questions.");
  }
}

// When 'resultsButton' clicked, hide #quiz section, display #results section using CSS 'display' property
// Set discount alert to pop-up after 1 second 
function loadResults() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("results").style.display = "block";
  setTimeout(discountCode, 1000);
}

// When 'retakeButton' clicked, hide #results section, display #welcome section using CSS 'display' property
// Reset the form and log this to the console
retakeButton.addEventListener("click", startAgain);
function startAgain() {
  document.getElementById("results").style.display = "none";
  document.getElementById("welcome").style.display = "block";
  clearForm();
  console.log("Quiz completed - reset form"); 
}

// When 'retakeButton' clicked, clear previous quiz answers using querySelectorAll to switch all radio buttons to unchecked
function clearForm() {  
  document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.checked = false;
  });
  return false;
}

// When 'shopButton' clicked, show a discount code in alert box and log this to the console
shopButton.addEventListener("click", discountCode);
function discountCode() {
  alert("Get 10% discount on plants today with discount code \"PLANTS10\"");
  console.log("Discount code shared with user"); 
}