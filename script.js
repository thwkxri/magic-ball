let a = Number(prompt('Введите коэффициент a: '));
let b = Number(prompt('Введите коэффициент b: '));
let c = Number(prompt('Введите коэффициент c: '));
let D=b**2-4*a*c;
if(D>0){
  let x1=(-b+D**0.5)/(2*a);
  let x2=(-b-D**0.5)/(2*a);
  alert('D = ' + D + ', ' + 'первый корень: '+ x1 + ', ' + 'второй корень: '+ x2);
}
else if(D==0){
  let x=(-b+D**0.5)/(2*a);
  alert('D = ' + D + ', ' + 'корень: '+ x);
}
else{
  alert('D = ' + D + ', ' +  'корней нет');
}