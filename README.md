# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project dcd,,irectory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [
  running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

==========================================================================

# react 설치

준비 node.js 설치 npm 설치 확인 => 

``` C
node -v
```

``` C
npm -v
```

## ts로 프로젝트 생성
npx create-react-app ts-guide --template typescript
                    생성될폴더명
npx create-react-app ts-boot --template typescript

## 기본 프로젝트에 ts 적용
``` C
$npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

### scss 설치시 해당 폴더에서 설치
해당폴더에서
``` C
$npm i sass
```
css -> scss 로 변경


### react-bootstrap 설치 
해당폴더 $npm install react-bootstrap bootstrap
아이콘 설치
``` C
$npm i bootstrap-icons
```
#### App.js 또는 index.js 추가
``` C
import 'bootstrap/dist/css/bootstrap.min.css';
```

##### 서버 실행
``` C
npm start
```
``` C
serve -s build
```
==========================================================================

# git react 배포

npm install gh-pages 실행

package.json 수정

"homepage": "https://rudamaanee.github.io/react", //git 주소
"name": "react",
"scripts": {
    (...)
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },

``` C
npm run deploy
```


==========  markdown (마크다운)  ==========
# 0) text 입력하기
안녕하세요!
오늘은 Markdown 사용법에 대해서 알아보도록 하겠습니다.

# 1) 제목
# 가장큰 크기의 text로 변환
## 그다음 작은 크기위 text로 변환
### 그다음 작은 크기의 text로 변환
#### 그다음 작은 크기의 text로 변환
##### 그다음 작은 크기의 text로 변환
###### 그다음 작은 크기의 text로 변환

# 2) 코드블럭 안에 source 넣기
## 첫 번째 방법.

tab을 이용해서 코드블럭 만들기
주의 : 코드 블럭 시키고 싶은 내용 앞뒤로 enter 해줘야함

EX) 
code 1

     code 2 // code block 할 내용

code 3 // 정상적으로 출력

## 두 번째 방법.

` 을 사용해서 코드블럭 시키기

" ``` 과 ``` " 사이에 코드블럭 시키고 싶은 code를 넣기

```
손 쉽게 만들 수 있는
코드블럭
```

``` C
printf("Hello world !\n");
printf("code Block \n");
```

# 3) BlockQuote 사용하기
> 안녕하세요
> > 저는 
> > > may-june 입니다.

# 4) 숫자 목록 출력하기
1. 안녕하세요
2. 오늘하루도
3. 행복하세요

# 5) 순서 없는 목록 출력 (글머리 기호)
 +, *, -  총 3가지의 기호가 동일한 출력을 불러오는 것을 확인 할 수 있습니다. 

tab을 통해서 소속을 만들 수 있습니다.

+ 안녕
  + Hello
    + hi


* 안녕
  * Hello
    * hi

- 안녕
  - Hello
    - hi

# 6) 구분선, 수평선 만들기
------------