import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {REACT_APP_API_URL as API_URL} from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import ListNowShow from '../components/ListNowShow';
import http from '../helper/http';
import LoadMore from '../components/LoadMore';

function ViewAll() {
  const [sortBy, setSortBy] = useState('title');
  const [sort, setSort] = useState('ASC');
  const [up, setUp] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [page, setPage] = useState(1);
  const [msgResponse, setMsgResponse] = useState('');
  const [result, setResult] = useState(null);
  const [pageInfo, setPageInfo] = useState(null);
  const [listRefresh, setListRefresh] = useState(false);
  const limit = 4;

  const handleSort = () => {
    setUp(!up);
    if (up === false) {
      setSort('ASC');
    } else {
      setSort('DESC');
    }
  };

  const getMovieByCondition = async () => {
    try {
      const response = await http().get(
        `${API_URL}nowshow?search=${inputSearch}&page=${page}&limit=${limit}&sort=${sortBy}&order=${sort}`,
      );
      setResult(response.data.results);
      setPageInfo(response.data.pageInfo);
    } catch (err) {
      setMsgResponse(err.response.data.message);
    }
  };

  const fetchNewData = async () => {
    try {
      setListRefresh(true);
      const oldData = result;
      const response = await http().get(`${pageInfo.nextLink}`);
      const resultResponse = response.data.results;
      console.log(resultResponse, '<< ini datanya');
      setPageInfo(response.data.pageInfo);
      const newData = [...oldData, ...resultResponse];
      setResult(newData);
      setListRefresh(false);
    } catch (err) {
      setMsgResponse(err.response.data.message);
    }
  };

  const nextData = async () => {
    const oldData = result;
    try {
      const response = await http().get(`${pageInfo.nextLink}`);
      const resultResponse = response.data.results;
      console.log(resultResponse, '<< ini datanya');
      setPageInfo(response.data.pageInfo);
      const newData = [...oldData, ...resultResponse];
      setResult(newData);
    } catch (err) {
      setMsgResponse(err.response.data.message);
    }
  };

  useEffect(() => {
    getMovieByCondition();
  }, [listRefresh, inputSearch, up, sortBy]);
  return (
    <>
      <View style={styles.parentWrapper}>
        <View style={styles.wrapperInput}>
          <Icon name="search" style={styles.iconSearch} />
          <TextInput
            style={styles.formInput}
            placeholder="Search Title..."
            onChangeText={(value) => setInputSearch(value)}
          />
        </View>
        <View style={styles.parentFrame}>
          <View style={styles.btnWrapper}>
            <Picker
              selectedValue={sortBy}
              style={styles.btnLocation}
              onValueChange={(itemValue, itemIndex) => setSortBy(itemValue)}>
              <Picker.Item label="Sort By" value="Choose Location" />
              <Picker.Item label="Title" value="title" />
              <Picker.Item label="Price" value="price" />
            </Picker>
            <Icon name="chevron-down" style={styles.dropdownIcon} />
          </View>
          {up === true ? (
            <TouchableOpacity
              style={styles.btnArrow}
              onPress={() => handleSort()}>
              <Icon name="arrow-up" style={styles.dropdownIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btnArrow}
              onPress={() => handleSort()}>
              <Icon name="arrow-down" style={styles.dropdownIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.parentWrapperList}>
        <FlatList
          data={result}
          keyExtractor={(item, index) => String(item.id)}
          renderItem={({item}) => (
            <ListNowShow
              title={item.title}
              poster={item.poster}
              price={item.price}
              genre={item.genre}
              id={item.id}
            />
          )}
          refreshing={listRefresh}
          onRefresh={fetchNewData}
          onEndReached={nextData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<LoadMore load={listRefresh} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    paddingStart: 40,
    paddingVertical: 5,
    width: '100%',
  },
  wrapperInput: {
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    marginVertical: 15,
  },
  iconSearch: {
    position: 'absolute',
    fontSize: 16,
    color: '#888',
    marginLeft: 15,
  },
  parentWrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  parentWrapperList: {
    paddingHorizontal: 20,
    flex: 1,
  },
  btnSortBy: {
    width: 170,
    backgroundColor: '#aaa',
  },
  bodyDropdown: {
    width: 170,
    backgroundColor: '#fafafa',
  },
  parentFrame: {
    flexDirection: 'row',
  },
  btnLocation: {
    height: 48,
    // width: 160,
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#4E4B66',
  },
  btnWrapper: {
    height: 48,
    // width: 160,
    flex: 1,
    backgroundColor: '#EFF0F6',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  iconCalendar: {
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
  btnArrow: {
    height: 48,
    width: 48,
    backgroundColor: '#EFF0F6',
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ViewAll;
