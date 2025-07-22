document.addEventListener("DOMContentLoaded", () => {
  const avatarContainer = document.getElementById("avatarContainer");
  const screamTextContainer = document.getElementById("screamTextContainer");

  const createAvatar = () => {
    const avatar = document.createElement("img");
    avatar.src = "images/default-avatar.png";
    avatar.id = "avatar";
    avatar.style.width = "200px";
    avatarContainer.appendChild(avatar);

    avatar.addEventListener("click", () => {
      avatar.classList.add("hit");
      const text = document.createElement("div");
      text.className = "scream-text";
      text.innerText = "AAARGHH!";
      screamTextContainer.appendChild(text);
      setTimeout(() => {
        screamTextContainer.removeChild(text);
      }, 300000); // 5 minutes
    });
  };

  createAvatar();
});
