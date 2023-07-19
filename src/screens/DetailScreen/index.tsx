/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGetFile} from '../../redux';
import { StackNavigationProp } from '@react-navigation/stack';

export const DetailScreen = () => {
  const navigation =
  useNavigation<
    StackNavigationProp<ParamList, 'DetailScreen'>
  >();
  const isFocus = useIsFocused();
  const dispatch: any = useDispatch();
  const onPressDetail = () => {navigation?.navigate('HomeScreen')};

  useEffect(() => {
   
  }, [isFocus]);

  return (
    <View style={{flex: 1}}>
      <Button title="Go to Home" onPress={onPressDetail} />
    </View>
  );
};
