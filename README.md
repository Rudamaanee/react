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
준비 node.js 설치 npm 설치 확인 => node -v / npm -v

## ts로 프로젝트 생성
npx create-react-app ts-guide --template typescript
                    생성될폴더명
npx create-react-app ts-boot --template typescript

## 기본 프로젝트에 ts 적용
$npm install --save typescript @types/node @types/react @types/react-dom @types/jest

### scss 설치시 해당 폴더에서 설치
해당폴더 $npm i sass
css -> scss 로 변경


### react-bootstrap 설치 
해당폴더 $npm install react-bootstrap bootstrap
아이콘 설치
$npm i bootstrap-icons

#### App.js 또는 index.js 추가
import 'bootstrap/dist/css/bootstrap.min.css';


##### 서버 실행
npm start
serve -s build

==========================================================================

# git react 배포

npm install gh-pages 실행

package.json 수정

"homepage": "https://rudamaanee.github.io/", //git 주소
"name": "react",
"scripts": {
    (...)
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },

npm run deploy