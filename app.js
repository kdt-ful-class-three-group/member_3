let getForm = document.getElementById("getForm")

// GET 요청 처리 (자바스크립트로 처리)
getForm.addEventListener('submit', function(event) {
  event.preventDefault();  // 기본 폼 제출 방지

  // 사용자 입력 값 가져오기
  const name = document.getElementById('getName').value;
  const age = document.getElementById('getAge').value;

  // GET 요청으로 데이터를 서버에 보내기 (실제 서버는 없으니 로그로 출력)
  // queryString방식
  const url = `/test?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`;
  document.getElementById('result').innerText = `GET 요청 URL: ${url}`;  // 결과 표시
});




// POST 요청 처리 (자바스크립트로 처리)
document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault();  // 기본 폼 제출 방지

  // 사용자 입력 값 가져오기
  const name = document.getElementById('postName').value;
  const age = document.getElementById('postAge').value;

  // POST 요청으로 데이터를 서버에 보내기 (실제 서버는 없으니 로그로 출력)
  // JSON 방식 
  const data = JSON.stringify({ name, age });
  document.getElementById('result').innerText = `POST 요청 데이터: ${data}`;  // 결과 표시
});

