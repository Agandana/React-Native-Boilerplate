import React, { useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, Alert } from 'react-native';
import { useTheme } from '../../hooks';
import { useDispatch } from 'react-redux';
import { removeToken } from '../../store/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="glass" size={30} color="#900" />;

const Dashboard = ({ navigation }) => {
  const { Common, Layout, Gutters } = useTheme();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeToken());
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const handleFetch = () => {
    console.log('FETCH');
  };

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}
    >
      <View
        style={[
          Layout.fill,
          Layout.relative,
          Layout.fullWidth,
          Layout.justifyContentCenter,
          Layout.alignItemsCenter,
        ]}
      >
        <Text>Welcome to Dashboard</Text>
        <View style={[Gutters.tinyVMargin]} />
        <Button title="Logout" onPress={() => handleLogout()} />
        <View style={[Gutters.tinyVMargin]} />
        <Button title="Fetch" onPress={() => handleFetch()} />
        {myIcon}
      </View>
    </ScrollView>
  );
};
export default Dashboard;
