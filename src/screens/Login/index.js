import React, { useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, Alert } from 'react-native';
import { useTheme } from '../../hooks';
import { reduxStorage } from '../../store';
import { useDispatch, useSelector, connect } from 'react-redux';
import { setToken } from '../../store/auth';

const Login = ({ auth, navigation }) => {
  const { Common, Layout, Gutters } = useTheme();
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });

  const goToDashboard = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  const handleLogin = () => {
    dispatch(setToken({ token: 'kl12j3odwidoauwn1oidno1in2nd' }));
    goToDashboard();
  };

  useEffect(() => {
    if (auth.token) {
      goToDashboard();
    }
  }, []);

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
        <Text>Welcome to Diary Report</Text>
        <View style={[Gutters.smallVMargin]} />
        <View
          style={{
            flexDirection: 'column',
            display: 'flex',
            width: '80%',
            lineHeight: '4em',
          }}
        >
          <TextInput
            style={[Common.textInput]}
            onChangeText={value => setForm({ ...form, username: value })}
            value={form.username}
            placeholder="Email or Username"
          />
          <View style={[Gutters.tinyVMargin]} />
          <TextInput
            style={[Common.textInput]}
            onChangeText={value => setForm({ ...form, password: value })}
            value={form.password}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={[Gutters.tinyVMargin]} />
          <Button title="Login" onPress={() => handleLogin()} />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateProps = state => state;

export default connect(mapStateProps)(Login);
