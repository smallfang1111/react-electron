import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'


// 自定义左侧容器
const LeftDiv = styled.div.attrs({
  className: 'col-3 left-panel'
})`
background-color: #7b8c7c;
min-height:100vh;
`

// 自定义右侧容器
const RightDiv = styled.div.attrs({
  className: 'col-9 right-panel'
})`

background-color: #ccc;
`

function App() {
  return (
    <div className="App container-fluid">
      <div className="row no-gutters">
        <LeftDiv>左侧</LeftDiv>
        <RightDiv>12侧</RightDiv>
      </div>
    </div>
  );
}

export default App;
