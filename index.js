$("form").change(function() {
  let checkedBoxes = [];

  $("[type=checkbox]:checked").each(function() {
    checkedBoxes.push($(this).val());
  });

  let twoPlusCheckedBoxes = checkedBoxes.join(", ");
  let twoCheckedBoxes = checkedBoxes.join(" and ");

  $("span").text(twoPlusCheckedBoxes);

  if (checkedBoxes.length === 0) {
    $("span").text("...");
  } else if (checkedBoxes.length === 2) {
    $("span").text(twoCheckedBoxes);
  } else if (checkedBoxes.length > 2) {
    const last = checkedBoxes[checkedBoxes.length - 1];
    checkedBoxes.pop();
    const remainder = checkedBoxes.join(", ");
    $("span").text(remainder + " and " + last);
  }

  console.log(checkedBoxes);
});

$(`input[name="deselect"]`).change(function() {
  $("input[type=checkbox]").prop("checked", false);
});
