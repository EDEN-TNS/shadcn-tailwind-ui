# tsconfig.json

- 참고 할 만한 tsconfig 설정 관련 링크
  - [tsconfig 참고 링크](https://gist.github.com/SeonHyungJo/f93fd203f7dc5bb3657437a1cad29c48)

``` json
{
  "compilerOptions": {
      "target": "ESNext", // JavaScript 버젼의 컴파일 설정, ESNext는 최신 JavaScript 버젼을 의미하며 자동으로 업데이트 됨
      "module": "ESNext", // 모듈 시스템 설정, ESNext는 최신 JavaScript 모듈 시스템을 의미하며 자동으로 업데이트 됨
      "lib": ["DOM", "DOM.Iterable", "ESNext"], // 라이브러리 설정, DOM은 브라우저 환경에서 사용되는 라이브러리, DOM.Iterable은 DOM 객체의 반복 가능한 속성을 제공하는 라이브러리, ESNext는 최신 JavaScript 라이브러리를 의미하며 자동으로 업데이트 됨
      "importHelpers": true, // 도우미 함수 임포트 설정, true로 설정하면 도우미 함수를 임포트하여 사용할 수 있음, tslib 패키지가 필수로 설치 되어야 함
      "allowJs": false, // JavaScript 파일 허용 설정, false로 설정하면 JavaScript 파일을 사용할 수 없음, import add from './add.js' 와 같이 js파일 import 허용
      "skipLibCheck": true, // 모든 선언파일(*.d.ts)의 유형검사를 건너뛸지 여부, 컴파일 속도 문제로 설정
      "esModuleInterop": true, // esModuleInterop 속성이 true로 설정될 경우, ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져올 수 있게 됨
      "allowSyntheticDefaultImports": true, // default import 허용 설정
      "forceConsistentCasingInFileNames": true, // // 파일명에 대소문자 구분하지 않아도 되는 기능 사용 여부, 직역: 파일 이름에 일관된 casing 강제 적용

      /* Bundler mode */
      "moduleResolution": "bundler", // 모듈 해석 방법 설정, bundler는 번들러 모드를 의미하며 자동으로 업데이트 됨
      "allowImportingTsExtensions": true, // ts 확장자를 가진 파일을 임포트할 수 있는지 여부, true로 설정하면 ts 확장자를 가진 파일을 임포트할 수 있음
      "isolatedModules": true, // 각 파일이 독립적으로 컴파일되는지 여부, true로 설정하면 각 파일이 독립적으로 컴파일됨
      "moduleDetection": "force", // 모듈 검색 방법 설정, force로 설정하면 모듈 검색 방법을 강제로 설정함
      "noEmit": true, // 컴파일 결과를 출력하지 않음, true로 설정하면 컴파일 결과를 출력하지 않음
      "jsx": "react-jsx", // jsx 설정, react-jsx로 설정하면 jsx 파일을 사용할 수 있음

      /* Linting */
      "strict": true, // 엄격한 타입 검사 설정, true로 설정하면 엄격한 타입 검사를 사용할 수 있음
      "noUnusedLocals": true, // 사용하지 않는 지역 변수 경고 설정, true로 설정하면 사용하지 않는 지역 변수를 경고함
      "noUnusedParameters": true, // 사용하지 않는 매개변수 경고 설정, true로 설정하면 사용하지 않는 매개변수를 경고함
      "noFallthroughCasesInSwitch": true, // switch 문에서 fallthrough 경고 설정, true로 설정하면 switch 문에서 fallthrough를 경고함

      /* type definitions */
      "typeRoots": ["node_modules/@types", "types"], // 타입 정의 파일 경로 설정, node_modules/@types는 노드 모듈의 타입 정의 파일 경로, types는 사용자 정의 타입 정의 파일 경로

      /* Path Alias */
      "baseUrl": "./", // 기본 경로 설정, 현재 디렉토리를 기본 경로로 설정
      "paths": {
          "@app/*": ["src/app/*"], // @app/*는 src/app/* 경로를 가리킴
          "@assets/*": ["src/assets/*"], // @assets/*는 src/assets/* 경로를 가리킴
          "@features/*": ["src/features/*"], // @features/*는 src/features/* 경로를 가리킴
          "@interfaces/*": ["src/interfaces/*"], // @interfaces/*는 src/interfaces/* 경로를 가리킴
          "@routes/*": ["src/routes/*"], // @routes/*는 src/routes/* 경로를 가리킴
          "@shared/*": ["src/shared/*"] // @shared/*는 src/shared/* 경로를 가리킴
      }
  },
  "include": ["src/**/*"] // 컴파일할 파일 경로 설정, src/**/*는 src 디렉토리 아래의 모든 파일을 컴파일함
}
```