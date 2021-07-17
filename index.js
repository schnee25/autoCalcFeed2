function calcButtonClick() {
  var NumLb = parseInt(document.getElementById('Ladybug').value)
  var NumAL = parseInt(document.getElementById('AtractomorphaLata').value)
  var NumG = parseInt(document.getElementById('Geotrupidae').value)
  var NumIF = parseInt(document.getElementById('IndianFritillary').value)
  var NumCWB = parseInt(document.getElementById('Cabbagewhitebutterfly').value)
  var NumTOI = parseInt(document.getElementById('TheretraOldenlandia').value)
  var NumB = parseInt(document.getElementById('Beetle').value)
  var NumF = parseInt(document.getElementById('Formicaaponica').value)
  var CPR = parseInt(document.getElementById('CurrentPercentageR').value)
  var CPG = parseInt(document.getElementById('CurrentPercentageG').value)
  var CPB = parseInt(document.getElementById('CurrentPercentageB').value)
  var rsltR
  var rsltG
  var rsltB
  console.log(NumLb)
  console.log(CPB)
  console.log(NumF)
  rsltR = 4 * NumLb + -2 * NumAL + -2 * NumG + 7 * NumIF + 0 * NumCWB + 0 * NumTOI + 2 * NumB + -2 * NumF + CPR
  rsltG = -2 * NumLb + 4 * NumAL + 4 * NumG + 0 * NumIF + 7 * NumCWB + 0 * NumTOI + 2 * NumB + -2 * NumF + CPG
  rsltB = -2 * NumLb + -2 * NumAL + 5 * NumG + 0 * NumIF + 0 * NumCWB + 7 * NumTOI + 2 * NumB + -2 * NumF + CPB
  console.log(rsltR)
  document.getElementById('ResultR').value = rsltR
  document.getElementById('ResultG').value = rsltG
  document.getElementById('ResultB').value = rsltB
}
