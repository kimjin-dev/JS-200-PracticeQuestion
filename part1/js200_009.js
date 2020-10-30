//콘솔로 자료형 출력하기
/*콘솔; 자바스크립트의 내장 객체 중 하나이다.
콘솔에는 여러 메소드들이 있는데 그 중에서 log 메소드를 활용한 예제를 여기서 살펴보자.
*/
var str = '자바스크립트';//문자열
var num = 200;//숫자
var arr = [1, 2, 3, 4, 5];//배열형
var obj = {a : 1, b : 2, c : 3};//변수에 대입된 객체값

console.log(str);
console.log(num);
console.log(arr);
console.log(obj);

//그 외 사용할 수 있는 다른 console 메소드
console.debug('log와 동일한 로그 메시지를 출력한다.');
console.error('에러 메시지를 출력한다.');
console.info('정보성 메시지를 출력한다.');
console.warn('경고성 메시지를 출력한다.');
//위의 메시지들을 보려면 출력할 메시지들의 레벨을 설정해야함. 웹 콘솔에서 원하는 레벨의 메시지들만 필터링해서 출력할 수도 있음.
