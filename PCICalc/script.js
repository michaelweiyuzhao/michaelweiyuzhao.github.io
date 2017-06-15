$(document).ready(function(){
  var PCI0;
  var TOTAL_ANN_PRECIP;
  var FREEZE_THAW_YR;
  var Remed_Years;
  var result = $("#result-text");
  var result_string = "";

  $("#go").click(function(){
    result_string = PCITree($("#PCI0").val(),$("#TOTAL_ANN_PRECIP").val(),
      $("#FREEZE_THAW_YR").val(),$("#Remed_Years").val());
    result.text(result_string);
  });

  var PCITree = function(PCI0,TOTAL_ANN_PRECIP,FREEZE_THAW_YR,Remed_Years){

      if(PCI0 <= 85.1){
          if(PCI0 <= 57.6){
              if(PCI0 <= 46.4){
                  if(PCI0 <= 34.3){
                      console.log("Serious (47.0/17.0)");
                      return "Serious (47.0/17.0)";
                  }
                  if(PCI0 > 34.3){
                      if(TOTAL_ANN_PRECIP <= 375.6){
                          console.log("Very Poor (22.0/3.0)");
                          return "Very Poor (22.0/3.0)";
                      }
                      if(TOTAL_ANN_PRECIP > 375.6){
                          if(TOTAL_ANN_PRECIP <= 601.4){
                              console.log("Serious (5.0/1.0)");
                              return "Serious (5.0/1.0)";
                          }
                          if(TOTAL_ANN_PRECIP > 601.4){
                              console.log("Very Poor (41.0/7.0)");
                              return "Very Poor (41.0/7.0)";
                          }
                      }
                  }
              }
              if(PCI0 > 46.4){
                  if(TOTAL_ANN_PRECIP <= 683){
                      console.log("Poor (33.0/3.0)");
                      return "Poor (33.0/3.0)";
                  }
                  if(TOTAL_ANN_PRECIP > 683){
                      if(TOTAL_ANN_PRECIP <= 920){
                          console.log("Very Poor (10.0/4.0)");
                          return "Very Poor (10.0/4.0)";
                      }
                      if(TOTAL_ANN_PRECIP > 920){
                          if(PCI0 <= 55.1){
                              if(FREEZE_THAW_YR <= 32){
                                  console.log("Poor (5.0/1.0)");
                                  return "Poor (5.0/1.0)";
                              }
                              if(FREEZE_THAW_YR > 32){
                                  if(PCI0 <= 51.5){
                                      console.log("Very Poor (9.0/2.0)");
                                      return "Very Poor (9.0/2.0)";
                                  }
                                  if(PCI0 > 51.5){
                                      if(PCI0 <= 53.7){
                                          console.log("Serious (5.0/1.0)");
                                          return "Serious (5.0/1.0)";
                                      }
                                      if(PCI0 > 53.7){
                                          console.log("Very Poor (5.0/1.0)");
                                          return "Very Poor (5.0/1.0)";
                                      }
                                  }
                              }
                          }
                          if(PCI0 > 55.1){
                              console.log("Poor (10.0)");
                              return "Poor (10.0)";
                          }
                      }
                  }
              }
          }
          if(PCI0 > 57.6){
              if(PCI0 <= 70.6){
                  if(PCI0 <= 64.6){
                      if(FREEZE_THAW_YR <= 130){
                          if(PCI0 <= 63.1){
                              if(FREEZE_THAW_YR <= 56){
                                  if(TOTAL_ANN_PRECIP <= 799){
                                      console.log("Poor (5.0)");
                                      return "Poor (5.0)";
                                  }
                                  if(TOTAL_ANN_PRECIP > 799){
                                      if(TOTAL_ANN_PRECIP <= 1154){
                                          console.log("Fair (9.0/2.0)");
                                          return "Fair (9.0/2.0)";
                                      }
                                      if(TOTAL_ANN_PRECIP > 1154){
                                          console.log("Poor (6.0/2.0)");
                                          return "Poor (6.0/2.0)";
                                      }
                                  }
                              }
                              if(FREEZE_THAW_YR > 56){
                                  if(FREEZE_THAW_YR <= 115){
                                      if(PCI0 <= 62.3){
                                          console.log("Poor (24.0/13.0)");
                                          return "Poor (24.0/13.0)";
                                      }
                                      if(PCI0 > 62.3){
                                          console.log("Fair (6.0/2.0)");
                                          return "Fair (6.0/2.0)";
                                      }
                                  }
                                  if(FREEZE_THAW_YR > 115){
                                      console.log("Very Poor (11.0/2.0)");
                                      return "Very Poor (11.0/2.0)";
                                  }
                              }
                          }
                          if(PCI0 > 63.1){
                              console.log("Poor (14.0/1.0)");
                              return "Poor (14.0/1.0)";
                          }
                      }
                      if(FREEZE_THAW_YR > 130){
                          if(FREEZE_THAW_YR <= 144){
                              console.log("Fair (11.0)");
                              return "Fair (11.0)";
                          }
                          if(FREEZE_THAW_YR > 144){
                              if(PCI0 <= 60.9){
                                  console.log("Fair (5.0/2.0)");
                                  return "Fair (5.0/2.0)";
                              }
                              if(PCI0 > 60.9){
                                  console.log("Poor (7.0/3.0)");
                                  return "Poor (7.0/3.0)";
                              }
                          }
                      }
                  }
                  if(PCI0 > 64.6){
                      if(PCI0 <= 68.2){
                          if(TOTAL_ANN_PRECIP <= 239.6){
                              console.log("Very Poor (5.0/1.0)");
                              return "Very Poor (5.0/1.0)";
                          }
                          if(TOTAL_ANN_PRECIP > 239.6){
                              console.log("Fair (67.0/11.0)");
                              return "Fair (67.0/11.0)";
                          }
                      }
                      if(PCI0 > 68.2){
                          if(FREEZE_THAW_YR <= 102){
                              console.log("Poor (11.0/3.0)");
                              return "Poor (11.0/3.0)";
                          }
                          if(FREEZE_THAW_YR > 102){
                              console.log("Fair (22.0/9.0)");
                              return "Fair (22.0/9.0)";
                          }
                      }
                  }
              }
              if(PCI0 > 70.6){
                  if(PCI0 <= 84.4){
                      if(FREEZE_THAW_YR <= 19){
                          if(FREEZE_THAW_YR <= 10){
                              console.log("Fair (34.0/6.0)");
                              return "Fair (34.0/6.0)";
                          }
                          if(FREEZE_THAW_YR > 10){
                              console.log("Satisfactory (17.0/1.0)");
                              return "Satisfactory (17.0/1.0)";
                          }
                      }
                      if(FREEZE_THAW_YR > 19){
                          if(FREEZE_THAW_YR <= 74){
                              if(FREEZE_THAW_YR <= 39){
                                  if(Remed_Years <= 5.3){
                                      console.log("Satisfactory (8.8/2.8)");
                                      return "Satisfactory (8.8/2.8)";
                                  }
                                  if(Remed_Years > 5.3){
                                      console.log("Fair (13.2/1.0)");
                                      return "Fair (13.2/1.0)";
                                  }
                              }
                              if(FREEZE_THAW_YR > 39){
                                  if(TOTAL_ANN_PRECIP <= 1002){
                                      if(FREEZE_THAW_YR <= 58){
                                          console.log("Poor (5.0/1.0)");
                                          return "Poor (5.0/1.0)";
                                      }
                                      if(FREEZE_THAW_YR > 58){
                                          console.log("Fair (9.0/5.0)");
                                          return "Fair (9.0/5.0)";
                                      }
                                  }
                                  if(TOTAL_ANN_PRECIP > 1002){
                                      if(Remed_Years <= 3.6){
                                          console.log("Satisfactory (5.67/2.33)");
                                          return "Satisfactory (5.67/2.33)";
                                      }
                                      if(Remed_Years > 3.6){
                                          console.log("Fair (11.33/0.67)");
                                          return "Fair (11.33/0.67)";
                                      }
                                  }
                              }
                          }
                          if(FREEZE_THAW_YR > 74){
                              if(TOTAL_ANN_PRECIP <= 239.6){
                                  console.log("Fair (6.0)");
                                  return "Fair (6.0)";
                              }
                              if(TOTAL_ANN_PRECIP > 239.6){
                                  if(TOTAL_ANN_PRECIP <= 400.2){
                                      console.log("Satisfactory (17.0/5.0)");
                                      return "Satisfactory (17.0/5.0)";
                                  }
                                  if(TOTAL_ANN_PRECIP > 400.2){
                                      if(FREEZE_THAW_YR <= 101){
                                          console.log("Satisfactory (25.0/13.0)");
                                          return "Satisfactory (25.0/13.0)";
                                      }
                                      if(FREEZE_THAW_YR > 101){
                                          console.log("Fair (8.0/3.0)");
                                          return "Fair (8.0/3.0)";
                                      }
                                  }
                              }
                          }
                      }
                  }
                  if(PCI0 > 84.4){
                      console.log("Very Poor (16.0/3.0)");
                      return "Very Poor (16.0/3.0)";
                  }
              }
          }
      }
      if(PCI0 > 85.1){
          if(TOTAL_ANN_PRECIP <= 322){
              if(PCI0 <= 94.8){
                  if(FREEZE_THAW_YR <= 81){
                      console.log("Very Poor (5.0/1.0)");
                      return "Very Poor (5.0/1.0)";
                  }
                  if(FREEZE_THAW_YR > 81){
                      console.log("Good (15.0/5.0)");
                      return "Good (15.0/5.0)";
                  }
              }
              if(PCI0 > 94.8){
                  console.log("Good (49.0/2.0)");
                  return "Good (49.0/2.0)";
              }
          }
          if(TOTAL_ANN_PRECIP > 322){
              if(TOTAL_ANN_PRECIP <= 325){
                  console.log("Satisfactory (16.0)");
                  return "Satisfactory (16.0)";
              }
              if(TOTAL_ANN_PRECIP > 325){
                  if(PCI0 <= 99.3){
                      if(TOTAL_ANN_PRECIP <= 1633.1){
                          if(PCI0 <= 87.2){
                              console.log("Satisfactory (22.0/4.0)");
                              return "Satisfactory (22.0/4.0)";
                          }
                          if(PCI0 > 87.2){
                              if(TOTAL_ANN_PRECIP <= 1063.5){
                                  if(Remed_Years <= 5){
                                      if(Remed_Years <= 2.8){
                                          if(FREEZE_THAW_YR <= 83){
                                              console.log("Good (9.4/1.8)");
                                              return "Good (9.4/1.8)";
                                          }
                                          if(FREEZE_THAW_YR > 83){
                                              if(Remed_Years <= 1.9){
                                                  console.log("Fair (12.09/7.31)");
                                                  return "Fair (12.09/7.31)";
                                              }
                                              if(Remed_Years > 1.9){
                                                  console.log("Satisfactory (6.71/2.07)");
                                                  return "Satisfactory (6.71/2.07)";
                                              }
                                          }
                                      }
                                      if(Remed_Years > 2.8){
                                          console.log("Good (7.83/2.33)");
                                          return "Good (7.83/2.33)";
                                      }
                                  }
                                  if(Remed_Years > 5){
                                      if(FREEZE_THAW_YR <= 85){
                                          console.log("Satisfactory (5.57/2.1)");
                                          return "Satisfactory (5.57/2.1)";
                                      }
                                      if(FREEZE_THAW_YR > 85){
                                          console.log("Fair (5.4/1.93)");
                                          return "Fair (5.4/1.93)";
                                      }
                                  }
                              }
                              if(TOTAL_ANN_PRECIP > 1063.5){
                                  if(FREEZE_THAW_YR <= 101){
                                      if(Remed_Years <= 3.6){
                                          console.log("Fair (6.67/2.67)");
                                          return "Fair (6.67/2.67)";
                                      }
                                      if(Remed_Years > 3.6){
                                          console.log("Satisfactory (21.33/3.52)");
                                          return "Satisfactory (21.33/3.52)";
                                      }
                                  }
                                  if(FREEZE_THAW_YR > 101){
                                      console.log("Poor (5.0/2.0)");
                                      return "Poor (5.0/2.0)";
                                  }
                              }
                          }
                      }
                      if(TOTAL_ANN_PRECIP > 1633.1){
                          console.log("Good (10.0/1.0)");
                          return "Good (10.0/1.0)";
                      }
                  }
                  if(PCI0 > 99.3){
                      if(FREEZE_THAW_YR <= 88){
                          if(FREEZE_THAW_YR <= 85){
                              if(FREEZE_THAW_YR <= 56){
                                  console.log("Good (68.0/11.0)");
                                  return "Good (68.0/11.0)";
                              }
                              if(FREEZE_THAW_YR > 56){
                                  if(Remed_Years <= 0.5){
                                      console.log("Satisfactory (17.81/8.37)");
                                      return "Satisfactory (17.81/8.37)";
                                  }
                                  if(Remed_Years > 0.5){
                                      console.log("Good (19.19/5.07)");
                                      return "Good (19.19/5.07)";
                                  }
                              }
                          }
                          if(FREEZE_THAW_YR > 85){
                              if(TOTAL_ANN_PRECIP <= 754){
                                  console.log("Poor (6.0/2.0)");
                                  return "Poor (6.0/2.0)";
                              }
                              if(TOTAL_ANN_PRECIP > 754){
                                  console.log("Good (5.0)");
                                  return "Good (5.0)";
                              }
                          }
                      }
                      if(FREEZE_THAW_YR > 88){
                          if(Remed_Years <= 0.2){
                              console.log("Satisfactory (11.19/4.19)");
                              return "Satisfactory (11.19/4.19)";
                          }
                          if(Remed_Years > 0.2){
                              if(FREEZE_THAW_YR <= 103){
                                  console.log("Fair (18.0/5.0)");
                                  return "Fair (18.0/5.0)";
                              }
                              if(FREEZE_THAW_YR > 103){
                                  console.log("Good (28.81/2.0)");
                                  return "Good (28.81/2.0)";
                              }
                          }
                      }
                  }
              }
          }
      }

      return ""
  }

});
