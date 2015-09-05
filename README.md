# FPinJS

Functional Programming in JavaScript

JavaScript로 배우는 함수형 프로그래밍

    $ git clone https://github.com/FunctionalThinking/FPinJS.git

## Dependencies

    $ npm install lodash
    $ npm install mocha -g
    $ npm install expectations

## Testing

    $ mocha --require expectations change/test/generate[string | randomcharacter].js

## Troubleshooting

SSL certification problem: unable to get local issuer certificate 문제 발생 시 Git 설정 변경

    $ git config --global http.sslVerify false
