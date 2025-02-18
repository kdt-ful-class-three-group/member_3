let getForm = document.getElementById("getForm")

// GET 요청 처리 (자바스크립트로 처리)
getForm.addEventListener('submit', function(event) {
  event.preventDefault();  // 기본 폼 제출 방지

  // 사용자 입력 값 가져오기
  const name = document.getElementById('getName').value;
  const age = document.getElementById('getAge').value;

  // GET 요청으로 데이터를 서버에 보내기 (실제 서버는 없으니 로그로 출력)
  // queryString 방식
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




// 파일 생성 (Create)
document.getElementById('createFileBtn').onclick = function() {
  const textContent = '뭘봐';
  const file = new File([textContent], 'newFile.txt', { type: 'text/plain' });  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);  
  link.download = file.name;  // 파일 이름을 사용
  link.click();
};

// 파일 읽기 (Read)
document.getElementById('fileInput').onchange = function(event) {
  currentFile = event.target.files[0];
  if (currentFile) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('fileContent').textContent = e.target.result;
      };
      reader.readAsText(currentFile); 
  }
};

// 파일 수정 (Update) 
document.getElementById('modifyFileBtn').onclick = function() {
  if (currentFile) {
      const modifiedContent = document.getElementById('fileContent').textContent + '\n수정해봐!';
      const file = new File([modifiedContent], 'modifiedFile.txt', { type: 'text/plain' }); 
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file); 
      link.download = file.name;  // 파일 이름을 사용
      link.click();
  } else {
      alert('먼저 파일을 선택하세요!');
  }
};


 // 파일 삭제 (Delete)
 document.getElementById('deleteFileBtn').onclick = function() {
  if (currentFile) {
    
    // 파일 선택 초기화
      document.getElementById('fileInput').value = ''; 

      // 내용도 초기화
      document.getElementById('fileContent').textContent = ''; 

      // 현재 파일 객체도 초기화
      currentFile = null; 
      alert('파일이 삭제되었습니다. (실제로 삭제된 것은 아닙니다. 선택이 초기화 됐습니다. )');
  } else {
      alert('삭제할 파일을 선택하세요!');
  }
};
