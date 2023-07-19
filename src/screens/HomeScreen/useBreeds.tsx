import { useIsFocused, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetFile } from "../../redux";
import { createFilter } from "react-native-search-filter";
const KEYS_TO_FILTERS = ['name', 'alt_names'];

interface _IBreedsRes {
    data: IBreedData[],
    error: string,
    loading: boolean,
}

export const useBreeds = () => {
    const navigation =
  useNavigation<
    StackNavigationProp<ParamList, 'HomeScreen'>
  >();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const isFocus = useIsFocused();
  const dispatch: any = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [choosedBreeds, setChoosedBreeds] = useState<IBreedData>({});
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(10);
  const [endOfLimit, setEndOfLimit] = useState<boolean>(false);
  const breedsData: _IBreedsRes  = useSelector((state: any) => state?.getImage);
  const flatListRef: any = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBreeds = breedsData?.data?.filter(createFilter(searchTerm, KEYS_TO_FILTERS))

  const searchUpdated = (term: string) => {
    setSearchTerm(term)
  }

  useEffect(() => {
    setEndOfLimit(false);
    setLimit(10)
  }, [isFocus]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(fetchGetFile({limit: limit}));
    },2000);
  }, [limit]);

  useEffect(() => {
    if (!isSearch) {
      if (breedsData?.loading) {
        setIsLoading(true)
      } else {
        setIsLoading(false)
      }
      if (breedsData?.data.length === 0) {
        setEndOfLimit(true);
      }
    }
  }, [breedsData]);

    return {
        navigation,
        screenHeight,
        screenWidth,
        isFocus,
        dispatch,
        isLoading,
        setIsLoading,
        isModalVisible,
        setIsModalVisible,
        choosedBreeds,
        setChoosedBreeds,
        isSearch,
        setIsSearch,
        limit,
        setLimit,
        endOfLimit,
        setEndOfLimit,
        breedsData,
        flatListRef,
        searchTerm,
        setSearchTerm,
        searchUpdated,
        filteredBreeds
    }
};