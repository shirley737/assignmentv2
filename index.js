// import data1 from "./Data/1";
// import data2 from "./Data/2";
// import data3 from "./Data/3";
// import data4 from "./Data/4";
// import data5 from "./Data/5";
// import data6 from "./Data/6";
// import data7 from "./Data/7";
// import data8 from "./Data/8";
// import data9 from "./Data/9";
// import data10 from "./Data/10";

const data1 = [
  [5, 9],
  [1, 4],
  [3, 7],
];

// var indicator = Array(1000).fill(0);
const newArray = data1.sort((a, b) => a[0] - b[0]);
console.log(newArray);

const logic = () => {
  var allDetail = [];

  for (let i = 0; i < newArray.length; i++) {
    if (i === 0) {
      if (newArray[i][1] > newArray[i + 1][0]) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i][1] - newArray[i + 1][0])
        );
      } else {
        allDetail.push(newArray[i][1] - newArray[i][0]);
      }
    } else if (i > 0 && i < newArray.length - 1) {
      if (
        newArray[i - 1][1] > newArray[i][0] &&
        newArray[i + 1][0] < newArray[i][1]
      ) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i - 1][1] - newArray[i][0]) -
            (newArray[i][1] - newArray[i + 1][0])
        );
      } else if (
        newArray[i - 1][1] > newArray[i][0] &&
        newArray[i + 1][0] > newArray[i][1]
      ) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i - 1][1] - newArray[i][0])
        );
      } else if (
        newArray[i - 1][1] < newArray[i][0] &&
        newArray[i + 1][0] < newArray[i][1]
      ) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i][1] - newArray[i + 1][0])
        );
      } else if (
        newArray[i - 1][1] < newArray[i][0] &&
        newArray[i + 1][0] > newArray[i][1]
      ) {
        allDetail.push(allDetail.push(newArray[i][1] - newArray[i][0]));
      }
    } else if (i === newArray.length - 1) {
      if (newArray[i - 1][1] > newArray[i][0]) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i - 1][1] - newArray[i][0])
        );
      } else {
        allDetail.push(newArray[i][1] - newArray[i][0]);
      }
    }
  }

  console.log(allDetail);
  var test = Math.min(...allDetail);
  console.log(test);
  var index = allDetail.indexOf(test);
  console.log(index);

  var final = newArray[0][1] - newArray[0][0];
  console.log(newArray[0][1]);
  console.log(newArray[0][0]);

  for (let j = 0; j < newArray.length; j++) {
    if (j === index) {
      final = final;
    } else {
      if (j === 0) {
        final += newArray[0][1] - newArray[0][0];
      } else if (j > 0 && j < newArray.length - 1) {
        if (newArray[j + 1][0] < newArray[j][1]) {
          if (newArray[j + 1][1] > newArray[j][1]) {
            final += newArray[j][1] - newArray[j + 1][0];
          } else {
            final = final;
          }
        }
      } else if (j === newArray.length - 1) {
        if (newArray[j][0] < newArray[j - 1][1]) {
          if (newArray[j][1] > newArray[j - 1][1]) {
            final += newArray[j][1] - newArray[j - 1][1];
          } else {
            final = final;
          }
        }
      }
    }
  }

  console.log(`final: ${final}`);
};

logic();
