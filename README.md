## archisketch

![스크린샷 2022-03-29 오후 6 55 03](https://user-images.githubusercontent.com/86298255/160585751-a50d8592-bd06-4bc3-a00e-660387bab349.png)

## 사용 스택

`Typescript` `React` `Styled-Components` `recoil` `localStorage`

## 주요 기능

1. Dummy data 를 이용하여 gird list 만들기
2. router 를 이용한 Detail 페이지
3. Recoil를 이용한 상태관리
4. 다음페이지 이전페이지 버튼을 눌렀을때 사진 전환
5. 해당 이미지 다운로드
6. 이미지 삭제 구현

---

### 📎 Dummy data 를 이용하여 gird list 만들기

Dummy data 를 사용하여 초반 리스트를 만들어 준후
이미지 삭제 후 부터는 삼항 연산자를 사용하여 localStorage 에 담긴 Data를 출력해주었습니다.
삭제 버튼을 누를시 atom 에 담긴 값을 true로 바꿔주고,
true 부터는 localStorage Data 에 담긴 데이터가 출력됩니다.

---

### 📎 router 를 이용한 Detail 페이지

Data 에서 받아온 index 를 Link로 보내주고,
Detail 컴포넌트에서 useMatch hook 을 이용하여 값을 받아온후
Data에서 index 와 useMatch 의 값이 일치하는 데이터를 찾아 그 데이터가 존재할시에 데이터를 뿌려주는 방식을 사용했습니다.

![스크린샷 2022-03-29 오후 6 56 36](https://user-images.githubusercontent.com/86298255/160585986-c30574ab-8f09-442c-9188-079b4c99e34b.png)

---

### 📎 Recoil를 이용한 상태관리

데이터의 상태관리는 recoil을 사용하였습니다.
selector를 사용하여 Dummy Data를 받아오고 get 안에 업데이트된 Data를 localStorage 안에 set 시켜주었습니다.

---

### 📎 다음페이지 이전페이지 버튼을 눌렀을때 사진 전환

```
const onNext = () => {
    if (matchId.params.i >= galleryData.length) {
      matchId.params.i++;
      navigate(`/detail/${matchId.params.i}`);
    }
  };

  const onPrev = () => {
    if (matchId.params.i > 0) {
      navigate(`/detail/${matchId.params.i - 1}`);
    }
  };
```

useMatch 에서 받아온 params.i 정보를 이용하여 다음버튼은 더해주고
이전 버튼은 빼주어 컨트롤 했습니다.
조건문을 걸어주고 현재 있는 데이터의 량을 넘어갈수 없게 구현했습니다.

---

### 📎해당 이미지 다운로드

라이브러리를 활용하여 구현했습니다.
dom-to-image
file-saver

```
  const cardRef = React.useRef() as React.MutableRefObject<HTMLImageElement>;
  const onDownloadBtn = () => {
    const card = cardRef.current;
    domtoimage.toBlob(card).then((blob) => {
      saveAs(blob, 'img.png');
    });
  };
```

useRef를 사용하여 dom을 선택해주고
dom-to-image 기능 안에 ref 를 넣어주었습니다.
그후file-saver 를 사용하여 이미지를 다운로드 할수있도록 구현했습니다.

---

### 📎이미지 삭제 구현

localStorag를 이용하여 구현하였습니다.
filter 로 새로 반환된 배열을 recoil atom 속 selector 안에 set 시켜주고
메인홈에서 그 데이터를 이용하여 다시 데이터를 출력해주었습니다.

### Getting Started

1. `clone` the repository,

```
https://github.com/slobbie/archisketch.git
```

2. `yarn` dependencies,

```
$ yarn
```

3. `start` the project,

```
$ yarn start
```

4. `Setting` prettier,

```
$ npx prettier --write .
```

### Commit Emoji

|   emoji    | commit message |       when to use it        |
| :--------: | :------------: | :-------------------------: |
|   :tada:   |     Start      |        프로젝트 시작        |
| :sparkles: |      Feat      |      새로운 기능 추가       |
|   :bug:    |      Fix       |          버그 수정          |
| :recycle:  |    Refactor    |        코드 리팩터링        |
| :lipstick: |     Style      |   스타일 추가 및 업데이트   |
| :package:  |     Chore      |   패키지 추가 및 업데이트   |
|  :books:   |      Docs      | 그 외 문서 추가 및 업데이트 |

### <br/>

###
