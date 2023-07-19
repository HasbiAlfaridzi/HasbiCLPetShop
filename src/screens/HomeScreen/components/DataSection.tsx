import { Image, Text, View } from "react-native"
import Styles from '../styles';
import { StarImage } from "../../../assets/image";

const DataSection = ({data,title} : {data: any, title: string}) => {
    const renderStar = (count: any) => {
      const components = [];
      for (let index = 0; index < count; index++) {
        components.push(<Image source={StarImage} style={{width:10,height:10,marginHorizontal:1}} />);
      }
      return components;
    }

    return (
        <View style={Styles.modalDataContainer}>
              <View style={Styles.modalDataTitleContainer}>
                <Text style={Styles.modalDataTitle}>{title}</Text>
              </View>
              <View style={Styles.modalDataColonContainer} >
                <Text style={Styles.modalDataColon}>:</Text>
              </View>
              <View style={Styles.modalDataResultContainer}>
                {typeof(data) === 'string' ? (
                  <Text style={Styles.modalDataResult}>{data}</Text>
                ) : (
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    {renderStar(data)}
                  </View>
                  )}
              </View>
            </View>
    )
}

export default DataSection; 