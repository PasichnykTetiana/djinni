function infiniteScroll() {
  let picsumData;

  fetch("https://picsum.photos/v2/list?page=1&limit=9")
    .then((response) => response.json())
    .then((data) => {
      picsumData = data;
    })
    .catch((error) => console.error(error));

  let container = document.getElementById("container");
  window.addEventListener("scroll", function () {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight > scrollHeight - 5) {
      setTimeout(createPost, 1000);
    }
  });
  let count = 0;

  function createPost() {
    for (let i = 0; i < 2; i++) {
      count += 1;
      if (count > picsumData.length) {
        count = 0;
      }

      let post = document.createElement("div");
      post.className = "col-lg-6 py-1 animation";
      let card = document.createElement("div");
      card.className = "card my-2";
      let img = document.createElement("img");
      img.className = "card-img-top";
      img.src = picsumData[count].download_url;
      img.alt = "picture";
      let cardBody = document.createElement("div");
      cardBody.className = "card-body pt-3 px-4";
      let mb5 = document.createElement("div");
      mb5.className = "mb-5 pb-1 ";
      let h5 = document.createElement("h5");
      h5.className = "card-title fw-bold";
      h5.innerHTML = "Heading";
      let p = document.createElement("p");
      p.className = "text-description card-text text-muted mb-0";
      p.innerHTML =
        "Here goes some sample, example text that is relatively short.";
      let row = document.createElement("div");
      row.className = "row mx-n4 px-0 border-top";
      let col = document.createElement("div");
      col.className = "col d-flex pt-3 px-3";
      let saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = "btn me-3 btn-primary btn-md";
      saveBtn.innerHTML = "Save to collection";
      let shareBtn = document.createElement("button");
      shareBtn.type = "button";
      shareBtn.className = "btn btn-sm btn-outline-secondary";
      shareBtn.innerHTML = "Share";

      mb5.appendChild(h5);
      mb5.appendChild(p);
      cardBody.appendChild(mb5);
      col.appendChild(saveBtn);
      col.appendChild(shareBtn);
      row.appendChild(col);
      cardBody.appendChild(row);
      card.appendChild(img);
      card.appendChild(cardBody);
      post.appendChild(card);
      container.appendChild(post);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  infiniteScroll();
});
