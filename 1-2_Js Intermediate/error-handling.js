// try {
//   let num = 5;
//   console.log(num.toString());
//   num.toUpperCase();
// } catch (error) {
//   console.log("An error occured" + error.message);
// }

const student = [{ name: "Rey" }];
try {
  console.log(student[1].name);
} catch (error) {
  console.log("Nama student tidak ada");
}
