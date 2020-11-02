//your code goes here
function MyError(message) {
    this.name = 'MyError';
    this.message = message || 'Error!';
    this.stack = (new Error()).stack;
  }
  MyError.prototype = Object.create(Error.prototype);
  MyError.prototype.constructor = MyError;


try{
    let exp = prompt ('Enter your mathematical expression');
    if(exp !== null){
    if(exp ==='')throw new MyError('Please enter your mathematical expression');
    if(!exp.includes('+') && !exp.includes('-')&& !exp.includes('*')&& !exp.includes('/'))
    throw new MyError('Invalid input! Please enter a mathematical expression.');
    if(exp.slice(-1)==='+'|| exp.slice(-1)==='-'|| exp.slice(-1)==='*'|| exp.slice(-1)==='/'
    ||exp[exp.indexOf('+')+1]==='+'||exp[exp.indexOf('-')+1]==='-'||exp[exp.indexOf('*')+1]==='*'||exp[exp.indexOf('/')+1]==='/')
    throw new MyError('Invalid input! There must be a number after the mathematical sign. Please try again.');
    if(isNaN(eval(exp)))throw new MyError('Result of calculation is Not a Number. Please try again.');
    if(eval(exp)===Infinity)throw new MyError('Result of calculation is Infinity. Please try again.');
    if(exp[0]==='+'|| exp[0]==='*'|| exp[0]==='/')throw new MyError('Mathematical expression cannot start with math sign. Please try again.');
    
    alert('Result: '+ eval(exp));}
}catch(e){
    alert(e.message);
    document.location.reload();
}