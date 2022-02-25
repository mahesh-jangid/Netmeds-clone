let penEdit = document.getElementById("penEdit");

let editH4 = document.getElementById("editH4");

penEdit.addEventListener("click", function () {
  editH4.contentEditable = "true";

  editH4.focus();

  // Creates range object
  var setPos = document.createRange();

  // Creates object for selection
  var set = window.getSelection();

  // Set start position of range
  setPos.setStart(editH4.childNodes[0], 6);

  // Returns boolean
  setPos.collapse(true);

  // Remove all ranges set
  set.removeAllRanges();

  // Add range with respect to range object.
  set.addRange(setPos);
});

editH4.addEventListener("keyup", function () {
  let newValue = document.getElementById("editH4").textContent;
  console.log(newValue);

  editH4.textContent = newValue;
});
