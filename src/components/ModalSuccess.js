import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import success from '../assets/icons/successTicket.png';

function ModalSuccess(props) {
  return (
    <Modal
      transparent={props.transparent}
      visible={props.visible}
      style={{flex: 1}}>
      <View style={styles.parentModal}>
        <View style={styles.bodyModal}>
          <View style={styles.rowBody}>
            <Image source={success} />
            <Text style={styles.textMsg}>{props.message}</Text>
          </View>
          <View style={styles.rowBtnClose}>
            <TouchableOpacity style={styles.btnClose} onPress={props.onPress}>
              <Text style={styles.textBtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  parentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // position: 'absolute',
  },
  bodyModal: {
    backgroundColor: 'white',
    height: 270,
    width: 270,
    borderRadius: 15,
    padding: 20,
  },
  textBtn: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  rowBtnClose: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btnClose: {
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#ba0900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMsg: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
  },
});

export default ModalSuccess;
