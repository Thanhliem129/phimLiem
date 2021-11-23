import React from 'react';
import {Appbar} from 'react-native-paper';
import { Text, View, TouchableOpacity,  FlatList } from 'react-native';
import { Menu } from "native-base"
import Icon from 'react-native-vector-icons/Ionicons';
import { moderateScale} from '../../utilities/size';
import { styles } from '../../assets/css/layout/_header';

const Header = (props) => {

  const {onPress, title, action, icon, functionIcon, functionAction, dataMenu, iconMenu, navigation} = props

  return (
    <View>
      <Appbar.Header style={styles.header}>
        {onPress ? <Appbar.BackAction onPress={onPress} color={'#fff'} /> : <Text />}
        
        <Appbar.Content title={title} style={styles.content}/>
        {action ? (
          <TouchableOpacity onPress={action}>
            <Icon name={icon} size={moderateScale(24)} style={styles.iconAdd} />
          </TouchableOpacity>
        ) : (
          <Text />
        )}
        {
          functionIcon && (
            <TouchableOpacity onPress={functionAction}>
              <Icon name={functionIcon} size={moderateScale(26)} style={styles.iconAdd} />
            </TouchableOpacity>
          )
        }
        {
          dataMenu &&
          <Menu w="190" trigger={(triggerProps) => {
            return (
              <TouchableOpacity {...triggerProps} style={{marginHorizontal:moderateScale(10)}}>
                <Icon name='ios-ellipsis-vertical' style={{color:'white'}} size={moderateScale(22)} />
              </TouchableOpacity>
            )
          }} >
            <FlatList
              keyExtractor={item => item.id}
              data={dataMenu}
              renderItem={({item, index}) => (
                <Menu.Item  
                  key={index}  
                  style={styles.menu}
                  onPress ={() => navigation.navigate(item.link)}>
                  {
                    iconMenu && <Icon name={item.icon} size={moderateScale(12)} />
                  }
                  <Text style={styles.menuItem}>
                    {item.name}
                  </Text>
                </Menu.Item>
              )}
            />
          </Menu>
        }
      </Appbar.Header>
    </View>
  );
};

export default Header;

