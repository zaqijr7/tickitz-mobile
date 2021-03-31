import React, {useState} from 'react';
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {inputDate} from '../redux/action/findSchedule';

function ButtonDate() {
  const [date, setDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    dispatch(inputDate(moment(currentDate).format('YYYY-MM-DD')));
    setDate(currentDate);
    setDisplayDate(selectedDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={style.parentFrame}>
      <TouchableOpacity onPress={showDatepicker}>
        <View style={style.buttonDate}>
          <Icon name="calendar" style={style.iconCalendar} />
          <Text style={style.buttonTitle}>
            {displayDate === null
              ? 'Set a Date'
              : moment(displayDate).format('LL')}
          </Text>
          <Icon name="chevron-down" style={style.dropdownIcon} />
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  parentFrame: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  buttonDate: {
    height: 48,
    width: 260,
    backgroundColor: '#EFF0F6',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  iconCalendar: {
    marginRight: 15,
    fontSize: 16,
    color: '#4E4B66',
  },
  buttonTitle: {
    fontSize: 16,
    color: '#4E4B66',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 0,
    fontSize: 16,
    color: '#4E4B66',
    marginRight: 15,
  },
});

export default ButtonDate;
