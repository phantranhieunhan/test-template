import { platform } from 'os';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  PermissionsAndroid,
  Text,
  Platform,
  Alert,
  ToastAndroid,
} from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import Ripple from 'react-native-material-ripple';
import Sound from 'react-native-sound';

// interface ICameraScreen{
//     successEvent(qrCode: string): any;
//     failEvent: any;
// }
const CameraScreenCustom = (props: any) => {
  let valueQR = '';
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState<boolean>(false);
  const { onScanSuccess } = props.route.params;
  const [State, setState] = useState(1);
  useEffect(() => {
    onOpneScanner();
  });

  const onBarcodeScan = (barCode) => {
    if (State == 1) {
      if (valueQR !== '') {
        return;
      }
      Sound.setCategory('Playback');
      var whoosh = new Sound('bip.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        whoosh.setVolume(1);
        // Play the sound with an onEnd callback
        whoosh.play();
      });
      valueQR = barCode;
       onScanSuccess(valueQR)
        

      setState(2);
    }
  };
  useEffect(() => {
    props.navigation.addListener('focus', async () => {
      try {
        valueQR = '';
        setState(1);
      } catch (E) {}
    });
    return () => {};
  }, []);
  const backButton_clicked = () => {
    props.navigation.goBack();
  };
  const onOpneScanner = () => {
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
            title: 'CameraExample App Camera Permission',
            message: 'CameraExample App needs access to your camera ',
          });
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setQrvalue('');
            setOpneScanner(true);
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err' + err);
          console.warn(err);
        }
      }
      requestCameraPermission();
    } else {
      setOpneScanner(true);
    }
  };
  return (
    <View style={styles.container}>
      <CameraKitCameraScreen
        showFrame={true}
        scanBarcode={true}
        laserColor={'#5cb85c'}
        frameColor={'white'}
        colorForScannerFrame={'black'}
        onReadCode={onBarcodeScan} //optional
      />
      {Platform.OS === 'ios' ? (
        <View style={[styles.itemNote, { marginTop: 5 }]}>
          <Text style={{ color: '#000', fontSize: 16 }}>Đưa mã vào trung tâm màn hình</Text>
          <Ripple style={styles.ButtonDong1} onPress={backButton_clicked}>
            <Text style={{ color: '#000', fontSize: 16 }}>Đóng</Text>
          </Ripple>
        </View>
      ) : (
        <View style={styles.itemNote}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Đưa mã vào trung tâm màn hình</Text>
          <Ripple style={styles.ButtonDong} onPress={backButton_clicked}>
            <Text style={{ color: '#fff', fontSize: 16 }}>Đóng</Text>
          </Ripple>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemNote: {
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonDong: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginTop: 35,
    marginBottom: 10,
  },
  ButtonDong1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginTop: 35,
    marginBottom: 10,
  },
});
export default CameraScreenCustom;
