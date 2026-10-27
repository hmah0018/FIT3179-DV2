// C1
console.log("Vega script started");

vegaEmbed(
    "#c1_food_inflation",
    "vis/c1_food_inflation.vg.json?v=4",
    {
        actions: false
    }
)
.then(function () {
    console.log("C1 loaded successfully");
})
.catch(function (error) {
    console.error("C1 FAILED:", error);
});


// C2
vegaEmbed(
    "#c2_divisions",
    "vis/c2_divisions.vg.json?v=5",
    {
        actions: false
    }
)
.then(function () {
    console.log("C2 loaded successfully");
})
.catch(function (error) {
    console.error("C2 FAILED:", error);
});


// C3
vegaEmbed(
    "#c3_state_month_heatmap",
    "vis/c3_state_month_heatmap.vg.json?v=1",
    {
        actions: false
    }
)
.then(function () {
    console.log("C3 loaded successfully");
})
.catch(function (error) {
    console.error("C3 FAILED:", error);
});


// M1
vegaEmbed(
    "#m1_state_choropleth",
    "vis/m1_state_choropleth.vg.json?v=5",
    {
        actions: false
    }
)
.then(function () {
    console.log("M1 loaded successfully");
})
.catch(function (error) {
    console.error("M1 FAILED:", error);
});


// C4
vegaEmbed(
    "#c4_item_year_heatmap",
    "vis/c4_item_change.vg.json?v=11",
    {
        actions: false
    }
)
.then(function () {
    console.log("C4 loaded successfully");
})
.catch(function (error) {
    console.error("C4 FAILED:", error);
});


// C5
vegaEmbed(
  "#c5_food_subclasses",
  "vis/c5_food_subclasses.vg.json?v=4",
  { actions: false }
)
.then(function () {
  console.log("C5 loaded successfully");
})
.catch(function (error) {
  console.error("C5 FAILED:", error);
});


// C6
vegaEmbed(
  "#c6_waffle",
  "vis/c6_waffle.vg.json?v=4",
  { actions: false }
)
.then(function () {
  console.log("C6 loaded successfully");
})
.catch(function (error) {
  console.error("C6 FAILED:", error);
});

// C7
const c7ItemMap = {
  "1110": "Eggs, Grade B (30)",
  "1": "Chicken (standard, 1kg)",
  "263": "Cooking oil, Cap Buruh (5kg)",
  "114": "Tomato (1kg)"
};

vegaEmbed(
  "#c7_box_shop_type",
  "vis/c7_box_shop_type.vg.json?v=2",
  { actions: false }
)
.then(function (result) {

  console.log("C7 loaded successfully");

  const c7View = result.view;
  const c7Select = document.getElementById("shop-item-select");

  function updateC7() {

    const selectedItem =
      c7ItemMap[c7Select.value];

    c7View
      .signal("selectedItem", selectedItem)
      .runAsync();

  }

  updateC7();

  c7Select.addEventListener(
    "change",
    updateC7
  );

})
.catch(function (error) {

  console.error(
    "C7 FAILED:",
    error
  );

});

// C8
vegaEmbed(
  "#c8_chain_item",
  "vis/c8_chain_item.vg.json?v=5",
  {
    actions: false
  }
)
.then(function () {
  console.log("C8 loaded successfully");
})
.catch(function (error) {
  console.error("C8 FAILED:", error);
});

// M2
vegaEmbed(
  "#m2_district_price",
  "vis/m2_district_price.vg.json?v=1",
  {
    actions: false
  }
)
.then(function () {
  console.log("M2 loaded successfully");
})
.catch(function (error) {
  console.error("M2 FAILED:", error);
});

// M3
vegaEmbed(
  "#m3_state_affordability",
  "vis/m3_state_affordability.vg.json?v=2",
  {
    actions: false
  }
)
.then(function () {
  console.log("M3 loaded successfully");
})
.catch(function (error) {
  console.error("M3 FAILED:", error);
});