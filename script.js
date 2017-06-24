$(document).ready(function() {
    $("#PCICalc-go").click(function() {
      var newPCI = $("#PCICalc-selecter").val();
      if(newPCI === "Default") {
        $("#PCICalc-go").attr("href", "https://michaelweiyuzhao.github.io/PCICalculator/");
      }
      else if(newPCI === "T4") {
        $("#PCICalc-go").attr("href", "https://michaelweiyuzhao.github.io/PCICalcT4/");
      }
      else {
        $("#PCICalc-go").attr("href", "https://michaelweiyuzhao.github.io/PCICalc8Basic/");
      }
    });
});
