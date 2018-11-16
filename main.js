
for (i = 1; i <= 100; i++)
{
  document.writeln(i)



  if (i % 15 == 0) {
    document.writeln('fizzbuzz')

  }
  else if (i % 5 == 0) {
    document.writeln('buzz')
    console.log(i);
  }
  else if (i % 3 == 0) {
    document.writeln('fizz')
    console.log(i);
  }

}
