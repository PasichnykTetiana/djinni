function truncateText() {
  const showMoreButtons = document.getElementsByClassName("show-more");
  const texts = document.getElementsByClassName("text-description");

  Array.from(texts).forEach((text, index) => {
    const lineHeight = parseInt(getComputedStyle(text).lineHeight);
    const maxHeight = lineHeight * 2;
    const actualHeight = text.offsetHeight;
    const fullText = text.innerHTML;

    if (actualHeight > maxHeight) {
      const words = fullText.split(" ");
      let truncatedText = "";
      let RestOfTheText = "";

      for (let i = 0; i < words.length; i++) {
        const line = truncatedText + words[i] + " ";
        const tempDiv = document.createElement("div");
        tempDiv.style.visibility = "hidden";
        tempDiv.style.position = "absolute";
        tempDiv.style.width = getComputedStyle(text).width;
        tempDiv.innerHTML = line;
        document.body.appendChild(tempDiv);
        const tempHeight = tempDiv.offsetHeight;
        document.body.removeChild(tempDiv);

        if (tempHeight > lineHeight * 2) {
          break;
        }

        truncatedText = line;
      }
      RestOfTheText = fullText.substring(truncatedText.length);
      console.log(truncatedText);

      text.innerHTML = truncatedText.trim() + "...";
      showMoreButtons[index].style.display = "block";

      showMoreButtons[index].addEventListener("click", function () {
        text.innerHTML =
          truncatedText +
          `<span class="text-animation">${RestOfTheText}</span>`;
        showMoreButtons[index].style.display = "none";
      });
    } else {
      showMoreButtons[index].style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  truncateText();
});
