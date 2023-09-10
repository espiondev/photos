function populate(container, img_class, div_class, page_num, max_photos) {
  var container_block = document.getElementById(container);
  if (container_block) {
    container_block.innerHTML = "";
  } else {
    console.error("Container not found:", container);
  }
  var container_block = document.getElementById(container);
  var photos_list = [];
  fetch("photos.json")
    .then((response) => response.json())
    .then((data) => {
      for (
        let i = page_num * max_photos;
        i < (page_num + 1) * max_photos;
        i++
      ) {
        if (i >= data["photos"].length) {
          break;
        }
        var div_to_insert = document.createElement("div");
        div_to_insert.className = div_class;

        var image_to_insert = document.createElement("img");
        image_to_insert.setAttribute("src", data["photos"][i]);
        image_to_insert.className = img_class;

        div_to_insert.appendChild(image_to_insert);
        container_block.appendChild(div_to_insert);
      }
    })
    .catch((error) => {
      console.error("Error loading JSON file:", error);
    });
}
function clear_photos(container) {
  var container_block = document.getElementById(container);
  if (container_block) {
    container_block.innerHTML = "";
  } else {
    console.error("Container not found:", container);
  }
}
