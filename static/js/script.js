
var CHARACTERS = [
	["Baby Mario", "Light", 0, 8, 0, 6, 0, 0, 0,"baby-mario"],
	["Baby Luigi", "Light", 5, 8, 0, 0, 0, 0, 0,"baby-luigi"],
	["Baby Peach", "Light", 3, 6, 3, 3, 0, 0, 0,"baby-peach"],
	["Baby Daisy", "Light", 5, 6, 0, 0, 0, 0, 3,"baby-daisy"],
	["Toad", "Light", 0, 0, 6, 0, 6, 0, 0,"toad"],
	["Toadette", "Light", 3, 0, 0, 0, 0, 6, 0,"toadette"],
	["Koopa Troopa", "Light", 0, 0, 0, 3, 0, 0, 6,"koopa-troopa"],
	["Dry Bones", "Light", 0, 0, 3, 0, 3, 0, 6,"dry-bones"],
	["Mario", "Medium", 0, 6, 2, 2, 3, 0, 0,"mario"],
	["Luigi", "Medium", 2, 6, 0, 0, 0, 0, 0,"luigi"],
	["Peach", "Medium", 2, 0, 5, 0, 6, 0, 0,"peach"],
	["Daisy", "Medium", 4, 0, 0, 2, 0, 0, 3,"daisy"],
	["Yoshi", "Medium", 0, 3, 0, 0, 3, 5, 0,"yoshi"],
	["Birdo", "Medium", 0, 3, 0, 0, 0, 3, 5,"birdo"],
	["Diddy Kong", "Medium", 0, 0, 3, 0, 3, 0, 5,"diddy-kong"],
	["Bowser Jr.", "Medium", 0, 0, 0, 0, 0, 3, 3,"bowser-jr"],
	["Wario", "Heavy", 0, 3, 0, 0, 0, 3, 6,"wario"],
	["Waluigi", "Heavy", 0, 0, 6, 0, 5, 3, 0,"waluigi"],
	["Donkey Kong", "Heavy", 0, 3, 2, 2, 0, 0, 3,"donkey-kong"],
	["Bowser", "Heavy", 2, 5, 0, 0, 3, 0, 0,"bowser"],
	["King Boo", "Heavy", 0, 0, 0, 5, 0, 3, 0,"king-boo"],
	["Rosalina", "Heavy", 3, 0, 0, 3, 0, 0, 3,"rosalina"],
	["Funky Kong", "Heavy", 4, 0, 0, 0, 0, 3, 0,"funky-kong"],
	["Dry Bowser", "Heavy", 0, 0, 0, 0, 0, 6, 6,"dry-bowser"],
	["Mii (Light)", "Light", 3, 3, 0, 0, 3, 0, 3,"mii-light"],
	["Mii (Medium)", "Medium", 3, 3, 0, 0, 0, 3, 3,"mii-medium"],
	["Mii (Heavy)", "Heavy", 3, 0, 3, 3, 3, 0, 0,"mii-heavy"]
];
var VEHICLES = [
	["Standard Kart S", "Light", 41, 29, 48, 48, 51, 40, 45,"standard-kart-s"],
	["Baby Booster", "Light", 27, 27, 56, 64, 37, 54, 59,"baby-booster"],
	["Concerto", "Light", 55, 32, 29, 32, 64, 27, 64,"concerto"],
	["Cheep Charger", "Light", 34, 24, 64, 56, 59, 45, 54,"cheep-charger"],
	["Rally Romper", "Light", 46, 35, 43, 43, 29, 64, 40,"rally-romper"],
	["Blue Falcon", "Light", 60, 29, 35, 29, 43, 24, 29,"blue-falcon"],
	["Standard Bike S", "Light", 39, 21, 51, 51, 54, 43, 48,"standard-bike-s"],
	["Bullet Bike", "Light", 53, 24, 32, 35, 67, 29, 67,"bullet-bike"],
	["Nanobike", "Light", 25, 18, 59, 67, 40, 56, 62,"nanobike"],
	["Quacker", "Light", 32, 17, 67, 60, 62, 48, 57,"quacker"],
	["Magikruiser", "Light", 43, 24, 45, 45, 32, 67, 43,"magikruiser"],
	["Bubble Bike", "Light", 48, 27, 40, 40, 45, 35, 37,"bubble-bike"],
	["Standard Kart M", "Medium", 46, 45, 40, 43, 45, 35, 40,"standard-kart-m"],
	["Nostalgia 1", "Medium", 37, 43, 59, 54, 54, 40, 51,"nostalgia-1"],
	["Wild Wing", "Medium", 57, 51, 21, 29, 59, 24, 59,"wild-wing"],
	["Turbo Blooper", "Medium", 50, 40, 35, 37, 21, 54, 35,"turbo-blooper"],
	["Royal Racer", "Medium", 34, 45, 51, 59, 32, 48, 54,"royal-racer"],
	["B Dasher Mk 2", "Medium", 64, 48, 27, 24, 37, 21, 24,"b-dasher-mk-2"],
	["Standard Bike M", "Medium", 43, 37, 43, 45, 48, 37, 43,"standard-bike-m"],
	["Mach Bike", "Medium", 55, 37, 24, 32, 62, 27, 62,"mach-bike"],
	["Sugarscoot", "Medium", 32, 32, 54, 62, 35, 51, 56,"bon-bon"],
	["Rapide", "Medium", 41, 35, 45, 51, 29, 62, 45,"rapide"],
	["Nitrocycle", "Medium", 62, 40, 29, 27, 40, 24, 27,"nitrocycle"],
	["Dolphin Dasher", "Medium", 48, 43, 37, 40, 24, 56, 37,"dolphin-dasher"],
	["Standard Kart L", "Heavy", 48, 59, 37, 40, 40, 35, 35,"standard-kart-l"],
	["Offroader", "Heavy", 39, 64, 48, 54, 18, 43, 45,"offroader"],
	["Flame Flyer", "Heavy", 62, 59, 16, 21, 48, 18, 48,"flame-flyer"],
	["Piranha Prowler", "Heavy", 55, 67, 29, 35, 35, 29, 27,"piranha-prowler"],
	["Aero Glider", "Heavy", 69, 56, 21, 17, 27, 16, 16,"aero-glider"],
	["Dragonetti", "Heavy", 53, 62, 27, 29, 56, 24, 56,"dragonetti"],
	["Standard Bike L", "Heavy", 46, 54, 40, 43, 43, 37, 37,"standard-bike-l"],
	["Bowser Bike", "Heavy", 60, 54, 18, 24, 51, 21, 51,"bowser-bike"],
	["Wario Bike", "Heavy", 37, 59, 51, 56, 21, 45, 48,"wario-bike"],
	["Twinkle Star", "Heavy", 50, 48, 29, 32, 59, 27, 59,"twinkle-star"],
	["Torpedo", "Heavy", 67, 56, 24, 18, 29, 18, 18,"torpedo"],
	["Phantom", "Heavy", 43, 51, 43, 48, 17, 56, 40,"phantom"]
];

var STATISTICS = ["speed", "weight", "acceleration", "handling", "drift", "offroad", "miniturbo"];


//Set all the selectables to update the stats when clicked
var m = document.getElementsByClassName("selectable");
for (var i=0;i<m.length;i++){
  m[i].onclick = function () { updatestats(); };
}

updatestats();

//Returns an array representing the first currently selected Character
function getSelectedCharacterA(){
  var cs = document.getElementsByName('characters-radio-a');
  for (var i=0;i<cs.length;i++){
    if (cs[i].checked){
      var index = cs[i].value;
      return CHARACTERS[index];
    }
  }
}

function getSelectedCharacterIndex(side){
  var cs = document.getElementsByName('characters-radio-' + side);
  for (var i=0;i<cs.length;i++){
    if (cs[i].checked){
      return parseInt(cs[i].value, 10);
    }
  }
  return 0;
}

function getSelectedVehicleIndex(side){
  var charIndex = getSelectedCharacterIndex(side);
  var character = CHARACTERS[charIndex];
  var vehicleOffset = getWeightVehicleOffset(character[1]);
  var vs = document.getElementsByName('vehicles-radio-' + side);
  for (var i=0;i<vs.length;i++){
    if (vs[i].checked){
      var index = parseInt(vs[i].value, 10);
      return index + vehicleOffset;
    }
  }
  return vehicleOffset;
}

function getWeightVehicleOffset(weightClass) {
  switch(weightClass) {
    case "Heavy":
      return 24;
    case "Medium":
      return 12;
    default:
      return 0;
  }
}

//Returns an array representing the first currently selected Vehicle
function getSelectedVehicleA(){
  return VEHICLES[getSelectedVehicleIndex('a')];
}

//Returns an array representing the first currently selected Character
function getSelectedCharacterB(){
  var cs = document.getElementsByName('characters-radio-b');
  for (var i=0;i<cs.length;i++){
    if (cs[i].checked){
      var index = cs[i].value;
      return CHARACTERS[index];
    }
  }
}

//Returns an array representing the first currently selected Vehicle
function getSelectedVehicleB(){
  return VEHICLES[getSelectedVehicleIndex('b')];
}


// Update the statistics comparison in the centre of the page
function updatestats() {

	updateKarts();

  //Set all selectables to unselected except those with checked inputs
  var selectables = document.getElementsByClassName("selectable");
  for (var i=0;i<selectables.length;i++){
    for (var j=0;j<selectables[i].childNodes.length;j++) {
      if (selectables[i].childNodes[j].nodeName == "INPUT") {
        selectables[i].style.backgroundColor = "";
        if (selectables[i].childNodes[j].checked){
          selectables[i].classList.add("selected");
        }
        else{
          selectables[i].classList.remove("selected");
        }
      }
    }
  }

  var ca = getSelectedCharacterA();
  var cb = getSelectedCharacterB();
  var va = getSelectedVehicleA();
  var vb = getSelectedVehicleB();
	var	sa, sb;
	var sumA = 0;
	var sumB = 0;
	var totalAbsDelta = 0;
	var sumSqDelta = 0;

	document.getElementById("character-a-name").innerHTML = ca[0];
	document.getElementById("vehicle-a-name").innerHTML = va[0];
	document.getElementById("character-b-name").innerHTML = cb[0];
	document.getElementById("vehicle-b-name").innerHTML = vb[0];
	for(var s=0;s<STATISTICS.length;s++) {
		sa = ca[s+2] + va[s+2];
		sb = cb[s+2] + vb[s+2];
		var d = sb - sa;
		sumA += sa;
		sumB += sb;
		totalAbsDelta += Math.abs(d);
		sumSqDelta += d * d;

		document.getElementById(STATISTICS[s]+"-num-a").innerHTML = sa;
		document.getElementById(STATISTICS[s]+"-num-b").innerHTML = sb;
		var diffEl = document.getElementById(STATISTICS[s]+"-num-diff");
		diffEl.innerHTML = (sb > sa ? "+" : "") + d;
		var diffColor = sb > sa ? "#55ff55" : (sa > sb ? "#ff5555" : "#cccccc");
		diffEl.style.color = diffColor;
		diffEl.style.webkitTextFillColor = diffColor;
		diffEl.style.webkitTextStrokeWidth = "0px";
		document.getElementById(STATISTICS[s]).style.width = (Math.min(sa, sb) / 70 * 86) + "%";
		var barDiffEl = document.getElementById(STATISTICS[s]+"-diff");
		barDiffEl.style.width = (Math.abs(d) / 70 * 86) + "%";
		barDiffEl.className = "bar-diff " + (sb > sa ? "diff-pos" : "diff-neg");
	}

	var netDelta = sumB - sumA;
	var euclidDelta = Math.sqrt(sumSqDelta);
	var deltaBadgeClass = "delta-med";
	if (totalAbsDelta === 0) deltaBadgeClass = "delta-zero";
	else if (totalAbsDelta <= 6) deltaBadgeClass = "delta-very-low";
	else if (totalAbsDelta <= 12) deltaBadgeClass = "delta-low";

	var headerDeltaEl = document.getElementById("header-total-abs-delta");
	if (headerDeltaEl) {
		headerDeltaEl.innerHTML = "|&Delta;| " + totalAbsDelta;
		headerDeltaEl.className = "total-delta-badge h2h-vs-delta-badge " + deltaBadgeClass;
	}

	var totalAbsEl = document.getElementById("total-abs-delta");
	if (totalAbsEl) {
		totalAbsEl.innerHTML = totalAbsDelta;
		totalAbsEl.className = "total-delta-badge " + deltaBadgeClass;
	}

	var sumAEl = document.getElementById("total-sum-a");
	if (sumAEl) sumAEl.innerHTML = sumA;
	var sumBEl = document.getElementById("total-sum-b");
	if (sumBEl) sumBEl.innerHTML = sumB;

	var netEl = document.getElementById("total-net-delta");
	if (netEl) {
		netEl.innerHTML = (netDelta > 0 ? "+" : "") + netDelta;
		var netColor = netDelta > 0 ? "#55ff55" : (netDelta < 0 ? "#ff5555" : "#cccccc");
		netEl.style.color = netColor;
		netEl.style.webkitTextFillColor = netColor;
	}

	var euclidEl = document.getElementById("total-euclid-delta");
	if (euclidEl) {
		euclidEl.innerHTML = euclidDelta.toFixed(1);
	}

	var mobSumA = document.getElementById("mobile-slot-summary-a");
	if (mobSumA) {
		mobSumA.innerHTML = ca[0] + " / " + va[0];
	}
	var mobSumB = document.getElementById("mobile-slot-summary-b");
	if (mobSumB) {
		mobSumB.innerHTML = cb[0] + " / " + vb[0];
	}
}

function setMobilePickerSide(side) {
  var leftCol = document.getElementById("left-picker-col");
  var rightCol = document.getElementById("right-picker-col");
  var btnA = document.getElementById("mobile-pick-btn-a");
  var btnB = document.getElementById("mobile-pick-btn-b");
  if (!leftCol || !rightCol) return;

  if (side === "b") {
    leftCol.classList.add("d-none", "d-md-block");
    rightCol.classList.remove("d-none");
    if (btnA) btnA.classList.remove("active");
    if (btnB) btnB.classList.add("active");
  } else {
    rightCol.classList.add("d-none", "d-md-block");
    leftCol.classList.remove("d-none");
    if (btnB) btnB.classList.remove("active");
    if (btnA) btnA.classList.add("active");
  }
}

function toggleMobileAdvancedFilters() {
  var adv = document.getElementById("advanced-delta-filters");
  var btn = document.getElementById("mobile-filter-toggle-btn");
  if (!adv) return;
  if (adv.classList.contains("d-none")) {
    adv.classList.remove("d-none");
    if (btn) btn.innerHTML = "Stat Toggles &amp; Metric Options &#9652;";
  } else {
    adv.classList.add("d-none");
    if (btn) btn.innerHTML = "Stat Toggles &amp; Metric Options &#9662;";
  }
}

function updateKarts(){
  var ca = getSelectedCharacterA();
  var cb = getSelectedCharacterB();

	var vaOffset = getWeightVehicleOffset(ca[1]);
	var vbOffset = getWeightVehicleOffset(cb[1]);

	for(var i=0;i<12;i++){
		var imgA = document.getElementById("vehicle-a-image-"+i);
		var va = VEHICLES[vaOffset+i];
		imgA.setAttribute("src","./static/img/vehicles/"+va[9]+".png");
		var imgB = document.getElementById("vehicle-b-image-"+i);
		var vb = VEHICLES[vbOffset+i];
		imgB.setAttribute("src","./static/img/vehicles/"+vb[9]+".png");
	}
}

// ============================================================================
// Delta Rankings (Least Different Combinations) Tab Logic
// ============================================================================

var ALL_COMBINATIONS = [];

function buildAllCombinations() {
  ALL_COMBINATIONS = [];
  for (var cIdx = 0; cIdx < CHARACTERS.length; cIdx++) {
    var ch = CHARACTERS[cIdx];
    var weightClass = ch[1];
    var vOffset = getWeightVehicleOffset(weightClass);
    for (var localV = 0; localV < 12; localV++) {
      var vIdx = vOffset + localV;
      var veh = VEHICLES[vIdx];
      var stats = [];
      for (var s = 0; s < 7; s++) {
        stats.push(ch[s + 2] + veh[s + 2]);
      }
      ALL_COMBINATIONS.push({
        id: cIdx * 100 + vIdx,
        charIndex: cIdx,
        vehIndex: vIdx,
        vehLocalIndex: localV,
        charName: ch[0],
        vehName: veh[0],
        weightClass: weightClass,
        isBike: localV >= 6,
        isKart: localV < 6,
        charImg: "./static/img/characters/" + ch[9] + ".png",
        vehImg: "./static/img/vehicles/" + veh[9] + ".png",
        stats: stats
      });
    }
  }
}

function switchTab(tabName) {
  var comparePane = document.getElementById("tab-compare");
  var deltasPane = document.getElementById("tab-deltas");
  var btnCompare = document.getElementById("tab-btn-compare");
  var btnDeltas = document.getElementById("tab-btn-deltas");

  if (tabName === "deltas") {
    comparePane.classList.add("d-none");
    deltasPane.classList.remove("d-none");
    btnCompare.classList.remove("active");
    btnDeltas.classList.add("active");
    renderDeltaRankings();
  } else {
    deltasPane.classList.add("d-none");
    comparePane.classList.remove("d-none");
    btnDeltas.classList.remove("active");
    btnCompare.classList.add("active");
  }
}

function initDeltaFilters() {
  buildAllCombinations();
  populateCharDropdown();
  populateVehicleDropdown();
}

function populateCharDropdown() {
  var mode = document.getElementById("delta-mode-select").value;
  var charSelect = document.getElementById("delta-char-select");
  var prevVal = charSelect.value;
  charSelect.innerHTML = "";

  if (mode === "all_pairs") {
    var allOpt = document.createElement("option");
    allOpt.value = "all";
    allOpt.textContent = "All Characters (27)";
    charSelect.appendChild(allOpt);
  }

  for (var i = 0; i < CHARACTERS.length; i++) {
    var opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = CHARACTERS[i][0] + " (" + CHARACTERS[i][1] + ")";
    charSelect.appendChild(opt);
  }

  if (mode === "target") {
    if (prevVal !== "all" && prevVal !== "") {
      charSelect.value = prevVal;
    } else {
      charSelect.value = String(getSelectedCharacterIndex("a"));
    }
  } else {
    charSelect.value = prevVal || "all";
  }
}

function populateVehicleDropdown() {
  var mode = document.getElementById("delta-mode-select").value;
  var charVal = document.getElementById("delta-char-select").value;
  var vehType = document.getElementById("delta-vehtype-select").value;
  var vehSelect = document.getElementById("delta-veh-select");
  var prevVal = vehSelect.value;
  vehSelect.innerHTML = "";

  if (mode === "all_pairs") {
    var allOpt = document.createElement("option");
    allOpt.value = "all";
    allOpt.textContent = "All Matching Vehicles";
    vehSelect.appendChild(allOpt);
  }

  var targetWeight = null;
  if (charVal !== "all") {
    var cIdx = parseInt(charVal, 10);
    if (!isNaN(cIdx) && CHARACTERS[cIdx]) {
      targetWeight = CHARACTERS[cIdx][1];
    }
  }

  for (var vIdx = 0; vIdx < VEHICLES.length; vIdx++) {
    var veh = VEHICLES[vIdx];
    var isBike = (vIdx % 12) >= 6;
    if (targetWeight && veh[1] !== targetWeight) {
      continue;
    }
    if (mode === "all_pairs") {
      if (vehType === "bikes" && !isBike) continue;
      if (vehType === "karts" && isBike) continue;
    }
    var opt = document.createElement("option");
    opt.value = String(vIdx);
    opt.textContent = veh[0] + " (" + veh[1] + " " + (isBike ? "Bike" : "Kart") + ")";
    vehSelect.appendChild(opt);
  }

  var foundPrev = false;
  for (var j = 0; j < vehSelect.options.length; j++) {
    if (vehSelect.options[j].value === prevVal) {
      foundPrev = true;
      break;
    }
  }

  if (foundPrev) {
    vehSelect.value = prevVal;
  } else if (mode === "target" && vehSelect.options.length > 0) {
    // Prefer a bike if vehType === "bikes"
    var preferredIdx = 0;
    if (vehType === "bikes") {
      for (var k = 0; k < vehSelect.options.length; k++) {
        var candidateV = parseInt(vehSelect.options[k].value, 10);
        if ((candidateV % 12) >= 6) {
          preferredIdx = k;
          break;
        }
      }
    }
    vehSelect.selectedIndex = preferredIdx;
  } else {
    vehSelect.value = "all";
  }
}

function onDeltaModeChange() {
  var mode = document.getElementById("delta-mode-select").value;
  document.getElementById("target-character-label").textContent =
    mode === "target" ? "Target Character" : "Filter Character";
  document.getElementById("target-vehicle-label").textContent =
    mode === "target" ? "Target Vehicle" : "Filter Vehicle";

  populateCharDropdown();
  populateVehicleDropdown();
  renderDeltaRankings();
}

function onDeltaCharChange() {
  populateVehicleDropdown();
  renderDeltaRankings();
}

function onVehicleTypeChange() {
  populateVehicleDropdown();
  renderDeltaRankings();
}

function setStatToggles(preset) {
  var checkboxes = document.getElementsByClassName("stat-toggle");
  for (var i = 0; i < checkboxes.length; i++) {
    var statIdx = parseInt(checkboxes[i].value, 10);
    if (preset === "core") {
      checkboxes[i].checked = (statIdx === 0 || statIdx === 4 || statIdx === 6);
    } else {
      checkboxes[i].checked = true;
    }
  }
  renderDeltaRankings();
}

function getIncludedStatIndices() {
  var checkboxes = document.getElementsByClassName("stat-toggle");
  var included = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      included.push(parseInt(checkboxes[i].value, 10));
    }
  }
  if (included.length === 0) {
    return [0, 1, 2, 3, 4, 5, 6];
  }
  return included;
}

function findClosestTo(side) {
  var cIdx = getSelectedCharacterIndex(side);
  var vIdx = getSelectedVehicleIndex(side);
  var isBike = (vIdx % 12) >= 6;

  var modeSelect = document.getElementById("delta-mode-select");
  modeSelect.value = "target";
  document.getElementById("target-character-label").textContent = "Target Character";
  document.getElementById("target-vehicle-label").textContent = "Target Vehicle";

  var vehTypeSelect = document.getElementById("delta-vehtype-select");
  if (vehTypeSelect.value === "bikes" && !isBike) {
    vehTypeSelect.value = "all";
  } else if (vehTypeSelect.value === "karts" && isBike) {
    vehTypeSelect.value = "all";
  }

  populateCharDropdown();
  document.getElementById("delta-char-select").value = String(cIdx);
  populateVehicleDropdown();
  document.getElementById("delta-veh-select").value = String(vIdx);

  switchTab("deltas");
}

function loadPairIntoCompare(cIdxA, vLocalA, cIdxB, vLocalB) {
  var csA = document.getElementsByName("characters-radio-a");
  for (var i = 0; i < csA.length; i++) {
    csA[i].checked = (parseInt(csA[i].value, 10) === cIdxA);
  }
  var vsA = document.getElementsByName("vehicles-radio-a");
  for (var j = 0; j < vsA.length; j++) {
    vsA[j].checked = (parseInt(vsA[j].value, 10) === vLocalA);
  }

  var csB = document.getElementsByName("characters-radio-b");
  for (var k = 0; k < csB.length; k++) {
    csB[k].checked = (parseInt(csB[k].value, 10) === cIdxB);
  }
  var vsB = document.getElementsByName("vehicles-radio-b");
  for (var l = 0; l < vsB.length; l++) {
    vsB[l].checked = (parseInt(vsB[l].value, 10) === vLocalB);
  }

  updatestats();
  switchTab("compare");
}

function computePairDelta(comboA, comboB, includedStats) {
  var totalAbs = 0;
  var sumSq = 0;
  var maxAbs = 0;
  var deltas = new Array(7);

  for (var s = 0; s < 7; s++) {
    var d = comboB.stats[s] - comboA.stats[s];
    deltas[s] = d;
  }

  for (var i = 0; i < includedStats.length; i++) {
    var idx = includedStats[i];
    var absD = Math.abs(deltas[idx]);
    totalAbs += absD;
    sumSq += absD * absD;
    if (absD > maxAbs) {
      maxAbs = absD;
    }
  }

  return {
    comboA: comboA,
    comboB: comboB,
    deltas: deltas,
    totalAbs: totalAbs,
    maxAbs: maxAbs,
    euclidean: Math.sqrt(sumSq)
  };
}

function passesConstraint(comboA, comboB, constraint) {
  if (constraint === "diff_vehicles") {
    return comboA.vehIndex !== comboB.vehIndex;
  }
  if (constraint === "diff_chars") {
    return comboA.charIndex !== comboB.charIndex;
  }
  if (constraint === "diff_both") {
    return comboA.charIndex !== comboB.charIndex && comboA.vehIndex !== comboB.vehIndex;
  }
  if (constraint === "diff_weight") {
    return comboA.weightClass !== comboB.weightClass;
  }
  return true;
}

function matchesVehicleType(combo, vehType) {
  if (vehType === "bikes") return combo.isBike;
  if (vehType === "karts") return combo.isKart;
  return true;
}

function renderDeltaRankings() {
  if (ALL_COMBINATIONS.length === 0) {
    initDeltaFilters();
  }

  var mode = document.getElementById("delta-mode-select").value;
  var charVal = document.getElementById("delta-char-select").value;
  var vehVal = document.getElementById("delta-veh-select").value;
  var vehType = document.getElementById("delta-vehtype-select").value;
  var constraint = document.getElementById("delta-constraint-select").value;
  var metric = document.getElementById("delta-metric-select").value;
  var limit = parseInt(document.getElementById("delta-limit-select").value, 10) || 100;
  var includedStats = getIncludedStatIndices();
  var includedSet = {};
  for (var s = 0; s < includedStats.length; s++) {
    includedSet[includedStats[s]] = true;
  }

  var results = [];

  if (mode === "target") {
    var targetCharIdx = parseInt(charVal, 10);
    var targetVehIdx = parseInt(vehVal, 10);
    var targetCombo = null;

    for (var i = 0; i < ALL_COMBINATIONS.length; i++) {
      if (ALL_COMBINATIONS[i].charIndex === targetCharIdx && ALL_COMBINATIONS[i].vehIndex === targetVehIdx) {
        targetCombo = ALL_COMBINATIONS[i];
        break;
      }
    }

    if (targetCombo) {
      for (var j = 0; j < ALL_COMBINATIONS.length; j++) {
        var other = ALL_COMBINATIONS[j];
        if (other.id === targetCombo.id) continue;
        if (!matchesVehicleType(other, vehType)) continue;
        if (!passesConstraint(targetCombo, other, constraint)) continue;
        results.push(computePairDelta(targetCombo, other, includedStats));
      }
    }
  } else {
    // All Pairs mode
    var pool = [];
    for (var p = 0; p < ALL_COMBINATIONS.length; p++) {
      if (matchesVehicleType(ALL_COMBINATIONS[p], vehType)) {
        pool.push(ALL_COMBINATIONS[p]);
      }
    }

    var filterC = charVal !== "all" ? parseInt(charVal, 10) : null;
    var filterV = vehVal !== "all" ? parseInt(vehVal, 10) : null;

    for (var a = 0; a < pool.length; a++) {
      var cA = pool[a];
      for (var b = a + 1; b < pool.length; b++) {
        var cB = pool[b];
        if (!passesConstraint(cA, cB, constraint)) continue;

        if (filterC !== null && cA.charIndex !== filterC && cB.charIndex !== filterC) {
          continue;
        }
        if (filterV !== null && cA.vehIndex !== filterV && cB.vehIndex !== filterV) {
          continue;
        }

        // If a character/vehicle filter is active, place the matching combo in slot A
        var first = cA;
        var second = cB;
        if (filterC !== null && cB.charIndex === filterC && cA.charIndex !== filterC) {
          first = cB;
          second = cA;
        } else if (filterV !== null && cB.vehIndex === filterV && cA.vehIndex !== filterV) {
          first = cB;
          second = cA;
        }

        results.push(computePairDelta(first, second, includedStats));
      }
    }
  }

  // Sort ascending (least different at the top)
  results.sort(function (x, y) {
    if (metric === "euclidean") {
      if (x.euclidean !== y.euclidean) return x.euclidean - y.euclidean;
      if (x.totalAbs !== y.totalAbs) return x.totalAbs - y.totalAbs;
      return x.maxAbs - y.maxAbs;
    }
    if (metric === "max_abs") {
      if (x.maxAbs !== y.maxAbs) return x.maxAbs - y.maxAbs;
      if (x.totalAbs !== y.totalAbs) return x.totalAbs - y.totalAbs;
      return x.euclidean - y.euclidean;
    }
    // Default: total_abs
    if (x.totalAbs !== y.totalAbs) return x.totalAbs - y.totalAbs;
    if (x.euclidean !== y.euclidean) return x.euclidean - y.euclidean;
    return x.maxAbs - y.maxAbs;
  });

  var totalMatching = results.length;
  var displayCount = Math.min(limit, totalMatching);
  var minDeltaText = totalMatching > 0 ? results[0].totalAbs : "N/A";

  var summaryEl = document.getElementById("delta-summary-text");
  summaryEl.innerHTML =
    "Showing top <strong>" + displayCount + "</strong> of <strong>" + totalMatching.toLocaleString() +
    "</strong> combination pairs &bull; Minimum Total |&Delta;|: <strong>" + minDeltaText + "</strong> (" +
    includedStats.length + "/7 stats active)";

  var tbody = document.getElementById("delta-rankings-tbody");
  var mobileList = document.getElementById("delta-rankings-mobile-list");
  var htmlRows = [];
  var mobileCards = [];
  var shortStatLabels = ["Spd", "Wgt", "Acc", "Hnd", "Drf", "Off", "MT"];

  for (var r = 0; r < displayCount; r++) {
    var item = results[r];
    var ca = item.comboA;
    var cb = item.comboB;

    var badgeClass = "delta-med";
    if (item.totalAbs === 0) badgeClass = "delta-zero";
    else if (item.totalAbs <= 6) badgeClass = "delta-very-low";
    else if (item.totalAbs <= 12) badgeClass = "delta-low";

    var statCells = "";
    var mobileStatCells = "";
    for (var st = 0; st < 7; st++) {
      var dVal = item.deltas[st];
      var dStr = dVal > 0 ? "+" + dVal : String(dVal);
      var dClass = dVal > 0 ? "stat-delta-pos" : (dVal < 0 ? "stat-delta-neg" : "stat-delta-even");
      var colClass = includedSet[st] ? "" : " stat-col-excluded";

      statCells +=
        '<td class="text-center' + colClass + '">' +
          '<div class="stat-delta-val ' + dClass + '">' + dStr + '</div>' +
          '<div class="stat-raw-pair">' + ca.stats[st] + '&rarr;' + cb.stats[st] + '</div>' +
        '</td>';

      mobileStatCells +=
        '<div class="mobile-stat-chip' + colClass + '">' +
          '<div class="mobile-stat-name">' + shortStatLabels[st] + '</div>' +
          '<div class="stat-delta-val ' + dClass + '">' + dStr + '</div>' +
          '<div class="stat-raw-pair">' + ca.stats[st] + '&rarr;' + cb.stats[st] + '</div>' +
        '</div>';
    }

    var clickCall =
      "loadPairIntoCompare(" +
      ca.charIndex + "," + ca.vehLocalIndex + "," +
      cb.charIndex + "," + cb.vehLocalIndex + ")";

    htmlRows.push(
      '<tr onclick="' + clickCall + '">' +
        '<td class="text-center font-weight-bold">#' + (r + 1) + '</td>' +
        '<td>' +
          '<div class="combo-cell">' +
            '<div class="combo-icons">' +
              '<img class="combo-char-img" src="' + ca.charImg + '" alt="' + ca.charName + '"/>' +
              '<img class="combo-veh-img" src="' + ca.vehImg + '" alt="' + ca.vehName + '"/>' +
            '</div>' +
            '<div class="combo-names">' +
              '<div class="combo-char-title">' + ca.charName +
                '<span class="weight-badge weight-' + ca.weightClass + '">' + ca.weightClass[0] + '</span>' +
              '</div>' +
              '<div class="combo-veh-title">' + ca.vehName + '</div>' +
            '</div>' +
          '</div>' +
        '</td>' +
        '<td>' +
          '<div class="combo-cell">' +
            '<div class="combo-icons">' +
              '<img class="combo-char-img" src="' + cb.charImg + '" alt="' + cb.charName + '"/>' +
              '<img class="combo-veh-img" src="' + cb.vehImg + '" alt="' + cb.vehName + '"/>' +
            '</div>' +
            '<div class="combo-names">' +
              '<div class="combo-char-title">' + cb.charName +
                '<span class="weight-badge weight-' + cb.weightClass + '">' + cb.weightClass[0] + '</span>' +
              '</div>' +
              '<div class="combo-veh-title">' + cb.vehName + '</div>' +
            '</div>' +
          '</div>' +
        '</td>' +
        '<td class="text-center"><span class="total-delta-badge ' + badgeClass + '">' + item.totalAbs + '</span></td>' +
        '<td class="text-center">' + item.maxAbs + '</td>' +
        '<td class="text-center">' + item.euclidean.toFixed(1) + '</td>' +
        statCells +
        '<td class="text-center">' +
          '<button type="button" class="mk-mini-btn" onclick="event.stopPropagation(); ' + clickCall + '">Compare</button>' +
        '</td>' +
      '</tr>'
    );

    mobileCards.push(
      '<div class="mobile-delta-card mb-2 p-2" onclick="' + clickCall + '">' +
        '<div class="d-flex justify-content-between align-items-center mb-2 pb-1" style="border-bottom: 1px solid #333;">' +
          '<div class="d-flex align-items-center">' +
            '<span class="mobile-rank-num mr-2">#' + (r + 1) + '</span>' +
            '<span class="total-delta-badge ' + badgeClass + ' mr-2">Total |&Delta;|: ' + item.totalAbs + '</span>' +
            '<span class="mobile-sub-metric">Max: ' + item.maxAbs + ' &bull; Euc: ' + item.euclidean.toFixed(1) + '</span>' +
          '</div>' +
          '<button type="button" class="mk-mini-btn" onclick="event.stopPropagation(); ' + clickCall + '">Compare</button>' +
        '</div>' +
        '<div class="row no-gutters align-items-center mb-2">' +
          '<div class="col-6 pr-1">' +
            '<div class="combo-cell">' +
              '<div class="combo-icons">' +
                '<img class="combo-char-img" src="' + ca.charImg + '" alt="' + ca.charName + '"/>' +
                '<img class="combo-veh-img" src="' + ca.vehImg + '" alt="' + ca.vehName + '"/>' +
              '</div>' +
              '<div class="combo-names">' +
                '<div class="combo-char-title">' + ca.charName +
                  '<span class="weight-badge weight-' + ca.weightClass + '">' + ca.weightClass[0] + '</span>' +
                '</div>' +
                '<div class="combo-veh-title">' + ca.vehName + '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="col-6 pl-1" style="border-left: 1px solid #333;">' +
            '<div class="combo-cell">' +
              '<div class="combo-icons">' +
                '<img class="combo-char-img" src="' + cb.charImg + '" alt="' + cb.charName + '"/>' +
                '<img class="combo-veh-img" src="' + cb.vehImg + '" alt="' + cb.vehName + '"/>' +
              '</div>' +
              '<div class="combo-names">' +
                '<div class="combo-char-title">' + cb.charName +
                  '<span class="weight-badge weight-' + cb.weightClass + '">' + cb.weightClass[0] + '</span>' +
                '</div>' +
                '<div class="combo-veh-title">' + cb.vehName + '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="mobile-stats-grid">' +
          mobileStatCells +
        '</div>' +
      '</div>'
    );
  }

  if (displayCount === 0) {
    htmlRows.push(
      '<tr><td colspan="14" class="text-center py-4">No combinations match the selected filters.</td></tr>'
    );
    mobileCards.push(
      '<div class="text-center py-4 small-text">No combinations match the selected filters.</div>'
    );
  }

  tbody.innerHTML = htmlRows.join("");
  if (mobileList) {
    mobileList.innerHTML = mobileCards.join("");
  }
}

initDeltaFilters();

