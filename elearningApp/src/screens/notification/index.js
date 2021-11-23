import React, { useState } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  ScrollView
 } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/header/header';
import { styles } from '../../assets/css/notification/_notification';
import { dataNotification } from '../../utilities/datavirtual';
import { SwipeListView } from 'react-native-swipe-list-view';
import { height, moderateScale, width } from '../../utilities/size';

const Notification = ({navigation}) => {
  const [listData, setListData] = useState(
    dataNotification.map((item, index) => ({
      key:`${index}`,
      title:item.title,
      desc:item.desc,
      date:item.date,
      check:item.check
    }))
  )
  const closeRow = (rowMap, rowKey) => {
    if(rowMap[rowKey]){
      rowMap[rowKey].closeRow();
    }
  }
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex( item => item.key === rowKey)
    newData.splice(prevIndex, 1);
    setListData(newData)
  }
  const onClickCheckAll = () => {
    setListData(
      dataNotification.map((item, index) => ({ 
      key:`${index}`,
      title:item.title,
      desc:item.desc,
      date:item.date,
      check:true}))
    )
  } 

  const renderItem = (data, rowMap) =>{
    return(
      <View style={[styles.rowFront]} >
        <View style={[styles.rowFrontVisible,{backgroundColor:data.item.check == false ? '#f4f9fd':'#fff'}]}>
          <View style={{flexDirection:'row', alignItems:'center', width:width}}>
            <View style={styles.iconLeft}>
              <Icon name='ios-book-outline' size={moderateScale(24)} color='#048ad1'/>
            </View>
            <View style={styles.notContent}> 
              <TouchableOpacity onPress={() => navigation.navigate('NotificationDetail', {
                name:data.item.title,
                desc:data.item.desc
              })}>
                <Text style={styles.title} numberOfLines={1}>{data.item.title}</Text>
              </TouchableOpacity>
              <Text style={styles.details} numberOfLines={2}>{data.item.desc}</Text>
              <Text style={styles.date}>{data.item.date}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  const renderHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity 
          style = {[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => closeRow(rowMap, data.item.key)} >
            <Icon name='ios-close-circle-outline' color='#fff' size={28} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() =>deleteRow(rowMap, data.item.key)}>
            <Icon name='trash-outline' color='#fff' size={28} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title='Thông báo' />
      <View>
        <TouchableOpacity style={styles.notTop} onPress={onClickCheckAll}>
          <Text style={styles.checkAllText}>Đánh dấu tất cả là đã đọc</Text>
        </TouchableOpacity>
        {
          listData.length != 0 ?
          <View style={{marginBottom:moderateScale(140)}}>
             <SwipeListView
               data={listData}
               renderItem={renderItem}
               keyExtractor={item => item.key}
               renderHiddenItem={renderHiddenItem}
               leftOpenValue={moderateScale(75)}
               rightOpenValue={moderateScale(-150)}
               disableRightSwipe
            />
          </View>
          
          :
          <View style={{
            alignItems:'center',
            justifyContent:'center',
            height:height - moderateScale(150)
          }}>
            <Text style={{
              color:'#048ad1',
              fontStyle:'italic'
            }}>Bạn không có thông báo nào</Text>
          </View>
        }
      </View>
    </View>
  )
};

export default Notification;