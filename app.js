const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }

  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

const checkDead = setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 3 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    const refresh = confirm("You Lost! Would you play again ?");

    
    refresh ? window.location.reload(true) :null;
  }
}, 10);
