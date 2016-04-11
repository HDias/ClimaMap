## horecio@gmail.com

### Install

  `npm install`

  `react-native android`

  `react-native ios`

  #### Global

  `npm install rnpm -g` Para atualizar configurações de pacotes como 'react-native-maps'. https://github.com/rnpm/rnpm  

### Run

  `npm start`

  `android avd`

  `react-native run-android`,

  `rnpm link` Copia configurações do react-native-maps

### Observations

   To android device it's necessary install `npm install react-native-maps --save` to use <MapView></MapView>. https://github.com/lelandrichardson/react-native-maps

#### Configurações do react-native-maps
   https://github.com/lelandrichardson/react-native-maps/blob/master/docs/installation.md

#### Para rodar google maps emulador android
    Baixe:
    - http://google-play-services.br.uptodown.com/android
    - http://www.filedropper.com/comandroidvending-1
    - http://www.filedropper.com/comgoogleandroidgms-1

    Instale no emulador:
    `android adb install <path-to-apk.apk>`

    Verifica se em /home/<user>/.bashrc tem as seguintes configurações:

    `export GRADLE_HOME=/home/horecio/android-studio
    export PATH=${PATH}:$GRADLE_HOME/bin%`

#### Para Rodar no Device

    1º https://facebook.github.io/react-native/docs/getting-started-linux.html#content

    'lsusb' - Lista os devices conectados no USB

    'adb devices' - Verifica se está ok o device

    'echo SUBSYSTEM=="usb", ATTR{idVendor}=="VALOR_DO_DEVICE", MODE="0666", GROUP="plugdev" | sudo tee /etc/udev/rules.d/51-android-usb.rules'

    antes de rodar 'react-native run-android' rode: 'adb reverse tcp:8081 tcp:8081'

    para versões 4.0
    no tópico :
    Configure your app to connect to the local dev server via Wi-Fi
    em
    Rode: react-native run-adroid vá em opções e em 'Debug server host for device' adicion o IP::porta
    https://facebook.github.io/react-native/docs/running-on-device-android.html#content
