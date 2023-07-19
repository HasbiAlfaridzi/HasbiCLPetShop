/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Dimensions, FlatList, Image, Modal, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGetDetailBreeds, fetchGetFile} from '../../redux';
import { StackNavigationProp } from '@react-navigation/stack';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { FrameImage, HeaderImage, PawImage, SearchImage } from '../../assets/image';
import { ImageBackground } from 'react-native';
import { Colors } from '../../util/globalVariable';
import Styles from './styles';
import { useBreeds } from './useBreeds';
import DataSection from './components/DataSection';

export const HomeScreen = () => {
  const {
    breedsData,
    choosedBreeds,
    dispatch,
    endOfLimit,
    flatListRef,
    isFocus,
    filteredBreeds,
    isLoading,
    isModalVisible,
    isSearch,
    limit,
    navigation,
    screenHeight,
    screenWidth,
    searchTerm,
    searchUpdated,
    setChoosedBreeds,
    setEndOfLimit,
    setIsLoading,
    setIsModalVisible,
    setIsSearch,
    setLimit,
    setSearchTerm,
  } = useBreeds();

  const renderImage = (_imageData: {url: string, width: number, height: number}) => {
    if (_imageData?.url?.endsWith('.jpg') || _imageData?.url?.endsWith('.jpeg' || _imageData?.url?.endsWith('.png') || _imageData?.url?.endsWith('.gif'))) {
      return (
      <Image source={{uri: _imageData?.url}} resizeMode='center' style={Styles.renderImage} width={195} height={150} />
      )
    } else {
      return (
        <Image source={{uri: 'https://img.freepik.com/premium-vector/vector-illustration-cute-cat-empty-outline-isolated-white-background-children39s-coloring-books_373520-2778.jpg'}} style={Styles.renderImageEmpty} resizeMode='stretch' width={200} height={150} />
      )
    }
  }

  const renderItem = (item: IBreedData) => {
    return (
        <Pressable onPress={() => dispatch(fetchGetDetailBreeds({
          breeds_id: item?.id,
          height: item?.img_heigth, 
          width: item?.img_width, 
          path_url: item?.path_url, 
          callback: (res: any) => {
            setChoosedBreeds(res?.data);
            setIsModalVisible(true);
          } }))} 
          style={Styles.renderItemContainer}>
          <ImageBackground borderRadius={20} source={FrameImage} style={Styles.renderItemImageBackground}>
            {renderImage({
              height: item?.img_heigth,
              width: item?.img_width,
              url: item?.path_url
            })}
             <Image source={PawImage} style={Styles.renderItemPawImage} />
            <Text>{item?.name}</Text>
            <Text style={Styles.renderItemCountry}>{`(${item?.country_codes})`}</Text>
          </ImageBackground>
        </Pressable>
    )
  }
  return (
    <View style={Styles.container}>
      {!isSearch ? (
        <View style={Styles.headerContainer}>
          <Image source={HeaderImage} width={100} height={50} />
          <TouchableOpacity onPress={() => setIsSearch(true)} style={Styles.seacrhIconContainer}>
            <Image source={SearchImage} style={Styles.searchIcon} />
          </TouchableOpacity>
      </View>
      ) : (
        <View style={Styles.searchHeader}>
            <SearchInput 
              onChangeText={(term) => { searchUpdated(term) }} 
              style={Styles.searchInput}
              placeholder="Find a cat here...."
            />
            <TouchableOpacity onPress={() => setIsSearch(false)} style={Styles.searchCloseContainer}>
              <Text style={Styles.searchClose}>X</Text>
            </TouchableOpacity>
        </View>
       
      )}
      <FlatList
        ref={flatListRef}
        data={isSearch ? filteredBreeds : breedsData?.data}
        renderItem={(item: {index: number,item: IBreedData,separators: any}) => renderItem(item?.item)}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListFooterComponentStyle={Styles.listFooterStyle}
        onEndReached={() => {!endOfLimit && !isSearch && setLimit((prevLimit => prevLimit + 10))}}
        ListFooterComponent={isLoading ? (<ActivityIndicator size={'large'} color={Colors.Pink.main}/>) : null}
        keyExtractor={(item: IBreedData) => item?.id + Math.random()}
      />
      <Modal visible={isModalVisible} transparent={true} animationType='fade'>
        <View style={Styles.modalContainer}>
          <View style={Styles.modalInnerContainer}>
            <View style={Styles.modalCloseContainer}>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text style={Styles.modalCloseIcon}>x</Text>
              </TouchableOpacity>
            </View>
            <Image style={Styles.modalCatImage} source={{uri: choosedBreeds?.path_url}} resizeMode='stretch'  width={choosedBreeds?.img_width > choosedBreeds?.img_heigth ? 350 : 300} height={choosedBreeds?.img_heigth > choosedBreeds?.img_width ? 300 : 250} />
            <Text style={Styles.modalCatDescription}>{`"${choosedBreeds?.description}"`}</Text>
            <DataSection title='Name' data={choosedBreeds?.name} />
            <DataSection title='Origin' data={choosedBreeds?.origin} />
            <DataSection title='Temprament' data={choosedBreeds?.temperament} />
            <DataSection title='Weight' data={`${choosedBreeds?.weight?.imperial} & ${choosedBreeds?.weight?.metric}`} />
            <DataSection title='Life Span' data={choosedBreeds?.life_span} />
            <DataSection title='Adaptability' data={choosedBreeds?.adaptability} />
            <DataSection title='Affection Level' data={choosedBreeds?.affection_level} />
            <DataSection title='Child Friendly' data={choosedBreeds?.child_friendly} />
            <DataSection title='Dog Friendly' data={choosedBreeds?.dog_friendly} />
            <DataSection title='Energy Level' data={choosedBreeds?.energy_level} />
            <DataSection title='Experimental' data={choosedBreeds?.experimental} />
            <DataSection title='Grooming' data={choosedBreeds?.grooming} />
            <DataSection title='Hairless' data={choosedBreeds?.hairless} />
            <DataSection title='Health Issue' data={choosedBreeds?.health_issues} />
            <DataSection title='Rare Level' data={choosedBreeds?.rare} />
            <DataSection title='Shedding Level' data={choosedBreeds?.shedding_level} />

          </View>
        </View>
      </Modal>
    </View>
  );
};
