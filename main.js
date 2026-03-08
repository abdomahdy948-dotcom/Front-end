const form = document.getElementById("form");
const upload = document.querySelector(".icon-upload");
const input = document.getElementById("input");

const container = document.querySelector(".container");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const element = ` <div class="task">
      <span class="icon-star icon"></span>

      <p lang="ar" class="task-text">  ${input.value}  </p>

      <div>
        <span class="icon-trash icon"></span>

        <span class="icon-angry2 icon"></span>

      </div>

    </div>`;

  container.innerHTML += element;

  input.value = "";
});

container.addEventListener("click", (eo) => {
  /*if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove();
  } 
  
  else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("dn");

    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");

    const heart = `<span class="icon-heart"></span>`;

    eo.target.parentElement.innerHTML += heart;

  } 
  
  
  else if (eo.target.className == "icon-heart") {
    
    
    
    eo.target.parentElement
      .getElementsByClassName("icon-angry2")[0]
      .classList.remove("dn");

    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");




      eo.target.classList.add("dn")
  }


  else if(eo.target.className == "icon-star icon"){
    
    eo.target.classList.add("orange")

   container.prepend(eo.target.parentElement)

  }

  else if(eo.target.className == "icon-star icon orange"){

    eo.target.classList.remove("orange")

  }

*/

  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry2 icon":
      eo.target.classList.add("dn");

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");

      const heart = `<span class="icon-heart"></span>`;

      eo.target.parentElement.innerHTML += heart;
      break;

    case "icon-heart":
      eo.target.parentElement
        .getElementsByClassName("icon-angry2")[0]
        .classList.remove("dn");

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");

      eo.target.classList.add("dn");
      break;

    case "icon-star icon":
      eo.target.classList.add("orange");

      container.prepend(eo.target.parentElement);

      break;

    case "icon-star icon orange":
      eo.target.classList.remove("orange");

      break;

    default:
      break;
  }
});
