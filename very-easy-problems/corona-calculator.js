function endCorona(recovers, newCases, activeCases) {
  let dividingRate = (recovers - newCases);
  return Math.round(Math.ceil(activeCases / dividingRate));
}
