function toTimestamp(strDate) {
  if (strDate) {
    let datum = Date.parse(strDate);
    return datum;
  } else return Date.now();
}

module.exports = toTimestamp;
