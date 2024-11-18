export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "15-10192" );
  }

  if (query === "What is your name?") { 
    return "Oliver"; 
  }

  const additionRegex = /what is (\d+) plus (\d+)/i;
  const matchAddition = query.match(additionRegex);
  if (matchAddition) {
    const num1 = parseInt(matchAddition[1], 10);
    const num2 = parseInt(matchAddition[2], 10);
    const result = num1 + num2;
    return result.toString();
  }


  return "";
}
