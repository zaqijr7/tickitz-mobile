import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {listSeat, totalPayment} from '../redux/action/transaction';

function Seats() {
  const [select, setSelect] = useState([]);
  const seatSold = useSelector((state) => state.findSchedule.seatSold);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const priceMovie = useSelector((state) => state.transaction.movie.price);
  const handleClick = (data) => {
    if (select.includes(data) === true) {
      setSelect(select.filter((items) => items !== data));
      dispatch(listSeat(select.filter((items) => items !== data)));
      if (data === 'F10') {
        const loveNest = priceMovie * 2;
        setPrice(price - loveNest);
        dispatch(totalPayment(price - loveNest));
      } else {
        setPrice(price - priceMovie);
        dispatch(totalPayment(price - priceMovie));
      }
    } else {
      setSelect([...select, data]);
      dispatch(listSeat([...select, data]));
      if (data === 'F10') {
        const loveNest = priceMovie * 2;
        setPrice(price + loveNest);
        dispatch(totalPayment(price + loveNest));
      } else {
        setPrice(price + priceMovie);
        dispatch(totalPayment(price + priceMovie));
      }
    }
  };

  return (
    <>
      <View style={styleSeat.rowParent}>
        <View style={styleSeat.lineColumn} />
        <View style={styleSeat.cardSeat}>
          {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((col) => {
            return (
              <View style={styleSeat.row} key={String(col)}>
                {[1, 2, 3, 4, 5, 6, 7].map((row, index) => {
                  return (
                    <>
                      {seatSold.split(',').indexOf(`${col}${row}`) > -1 ? (
                        <View style={styleSeat.seatSold} />
                      ) : (
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
                      )}
                    </>
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
              <View style={styleSeat.row} key={col}>
                {[8, 9, 10, 11, 12, 13, 14]
                  .filter((row) => (col === 'F' && row !== 11) || col !== 'F')
                  .map((row, index) => {
                    return (
                      <>
                        {col === 'F' && row === 10 ? (
                          <>
                            {seatSold.split(',').indexOf(`${col}${row}`) >
                            -1 ? (
                              <View style={styleSeat.loveNestSold} />
                            ) : (
                              <TouchableOpacity
                                key={String(index)}
                                onPress={() => handleClick(`${col}${row}`)}>
                                <View
                                  style={
                                    select.includes(`${col}${row}`) === true
                                      ? styleSeat.loveNestClicked
                                      : styleSeat.loveNest
                                  }
                                />
                              </TouchableOpacity>
                            )}
                          </>
                        ) : (
                          <>
                            {seatSold.split(',').indexOf(`${col}${row}`) >
                            -1 ? (
                              <View style={styleSeat.seatSold} />
                            ) : (
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
                            )}
                          </>
                        )}
                      </>
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
    height: 14,
    width: 14,
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
    height: 14,
    width: 14,
    backgroundColor: '#5F2EEA',
    margin: 2.5,
    borderRadius: 3,
  },
  seatSold: {
    height: 14,
    width: 14,
    backgroundColor: '#6E7191',
    margin: 2.5,
    borderRadius: 3,
  },
  loveNest: {
    height: 14,
    width: 33,
    backgroundColor: '#F589D7',
    margin: 2.5,
    borderRadius: 3,
  },
  loveNestSold: {
    height: 14,
    width: 33,
    backgroundColor: '#6E7191',
    margin: 2.5,
    borderRadius: 3,
  },
  loveNestClicked: {
    height: 14,
    width: 33,
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
