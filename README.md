## lambda-layer-sample

### Local

- Localではpuppeteer-coreではなくpuppeteerが必要なのでdevDependenciesに入れている

## AWS

- chrome-aws-lambdaが重いのでlayersを使っている
- layersにアップロードするフォルダは`xx/nodejs/node_modules`の構成でないといけない
    - なので`layers/nodejs`にpackage.jsonを配置し`predeploy`でinstallを実行するようにしている
