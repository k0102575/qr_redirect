import { useCallback, useEffect } from 'react';

function App() {
  // handler
  const pageMove = useCallback(
    () => {
      window.location.href = "https://www.naver.com"
    },
    [],
  )
  
  // useEffect
  useEffect(() => {
    pageMove()
  }, [pageMove])
  
  return (
    <div className="App">
      <p>리다이렉트 중입니다...</p>
      <button
        type="button"
        onClick={pageMove}
      >
        바로가기
      </button>
    </div>
  );
}

export default App;
