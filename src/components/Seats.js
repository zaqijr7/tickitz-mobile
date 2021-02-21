import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

function Seats() {
  const [select, setSelect] = useState([]);
  const handleClick = (data) => {
    if (select.includes(data) === true) {
      setSelect(select.filter((items) => items !== data));
    } else {
      setSelect([...select, data]);
    }
  };
  console.log(select);
  return (
    <>
      <View style={styleSeat.rowParent}>
        <View style={styleSeat.lineColumn} />
        <View style={styleSeat.cardSeat}>
          {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((col) => {
            return (
              <View style={styleSeat.row}>
                {[1, 2, 3, 4, 5, 6, 7].map((row, index) => {
                  return (
                    <TouchableOpacity
                      key={String(index)}
                      onPress={() => handleClick(`${col}${row}`)}>
                      <View
                        style={
                          select.includes(`${col}${row}`) === true
                            ? styleSeat.clicked
                            : styleSeat.seat
                        }
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
          <View style={styleSeat.lineNumber} />
        </View>
        <View style={styleSeat.cardSeat}>
          {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((col) => {
            return (
              <View style={styleSeat.row}>
                {[8, 9, 10, 11, 12, 13, 14]
                  .filter((row) => (col === 'F' && row !== 11) || col !== 'F')
                  .map((row, index) => {
                    return (
                      <TouchableOpacity
                        key={String(index)}
                        onPress={() => handleClick(`${col}${row}`)}>
                        {col === 'F' && row === 10 ? (
                          <View
                            style={
                              select.includes(`${col}${row}`) === true
                                ? styleSeat.loveNestClicked
                                : styleSeat.loveNest
                            }
                          />
                        ) : (
                          <View
                            style={
                              select.includes(`${col}${row}`) === true
                                ? styleSeat.clicked
                                : styleSeat.seat
                            }
                          />
                        )}
                      </TouchableOpacity>
                    );
                  })}
              </View>
            );
          })}
          <View style={styleSeat.lineNumber} />
        </View>
      </View>
    </>
  );
}

const styleSeat = StyleSheet.create({
  seat: {
    height: 16,
    width: 16,
    backgroundColor: '#D6D8E7',
    margin: 2.5,
    borderRadius: 3,
  },
  row: {
    flexDirection: 'row',
  },
  rowParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  clicked: {
    height: 16,
    width: 16,
    backgroundColor: '#5F2EEA',
    margin: 2.5,
    borderRadius: 3,
  },
  loveNest: {
    height: 16,
    width: 37,
    backgroundColor: '#F589D7',
    margin: 2.5,
    borderRadius: 3,
  },
  loveNestClicked: {
    height: 16,
    width: 37,
    backgroundColor: '#5F2EEA',
    margin: 2.5,
    borderRadius: 3,
  },
  lineNumber: {
    width: '96%',
    height: 3,
    backgroundColor: 'orange',
    marginTop: 10,
    borderRadius: 10,
  },
  cardSeat: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineColumn: {
    width: 3,
    height: '85%',
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 5,
  },
});

export default Seats;
