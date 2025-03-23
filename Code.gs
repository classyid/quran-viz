function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Al-Quran App')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
