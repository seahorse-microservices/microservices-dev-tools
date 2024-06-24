
function codeForTryBlock(a: number, b: number) {
  const num1: number = a;
  const num2: number = b;
  if (num1 === num2) {
      console.log("Provided Numbers are same!!");
  }
  else {
      throw new Error("Provided numbers are not same!!");
  }
}

function demoImplementation() {
  try {
      codeForTryBlock(3, 5);
  } catch (error: any) {
      console.error("An error Occured: ", error.message);
  } finally {
      console.log(
"This text is from finally block it runs irrespective of try-catch blocks.");
  }
}
demoImplementation();


