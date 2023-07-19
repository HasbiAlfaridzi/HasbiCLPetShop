import { StyleSheet } from 'react-native';
import { Colors } from '../../util/globalVariable';

export default StyleSheet.create({
    container: {flex: 1,backgroundColor:Colors.Pink.light2},
    headerContainer: {alignItems:'center',width:'100%',backgroundColor:'white',shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,},
    seacrhIconContainer:{position:'absolute',backgroundColor:'white',borderRadius:50,right:10,top:12,padding: 10},
    searchIcon: {width:50,height:50},
    searchHeader: {paddingBottom: 10},
    searchInput: {width:'100%',paddingVertical:20,paddingLeft: 30,backgroundColor:Colors.Pink.main,borderRadius:40,marginTop:10},
    searchClose: {fontSize:18,fontWeight:'bold',color:Colors.Pink.main},
    searchCloseContainer: {paddingVertical:8,paddingHorizontal:14,position:'absolute',right:10,top:20,backgroundColor:Colors.Pink.light1,borderRadius:100},
    listFooterStyle: {marginBottom: 50},
    modalContainer: {justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'rgba(255, 99, 71, 0.6)'},
    modalInnerContainer: {width:400,paddingBottom:30,backgroundColor:Colors.Pink.light2,borderRadius: 30},
    modalCloseContainer: {width: '100%',paddingVertical:10,alignItems:'flex-end',paddingRight: 30},
    modalCloseIcon: {fontSize:30,fontWeight:'bold'},
    modalCatImage: {borderRadius: 30,alignSelf:'center',marginBottom: 10,borderWidth:5,borderColor: Colors.Pink.main},
    modalCatDescription: {marginBottom:10,marginHorizontal:50,fontSize:12,textAlign:'center',color:'brown',fontWeight: '500',fontStyle:'italic'},
    modalDataContainer: {width:'100%',flexDirection: 'row',alignItems:'flex-start',paddingVertical:1},
    modalDataTitleContainer: {flex:1,paddingLeft:50,justifyContent:'center'},
    modalDataTitle: {fontSize:8,color:'brown',fontWeight: '500'},
    modalDataColonContainer: {flex:0.1,justifyContent:'center'},
    modalDataColon: {fontSize:8,color:'brown',fontWeight: '500'},
    modalDataResultContainer: {flex:2,justifyContent:'center'},
    modalDataResult: {fontSize:8,color:'brown',fontWeight: '300'},
    renderImage: {borderRadius:20,marginVertical:5},
    renderImageEmpty: {borderRadius:30,marginVertical:5},
    renderItemContainer:{
        width: '48%',
        backgroundColor: 'transparent',
        marginBottom: 10,
        marginTop: 20,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    renderItemImageBackground: {flex:1,backgroundColor:Colors.Pink.light1,width:'100%',paddingBottom:30,borderRadius: 20,alignItems:'center'},
    renderItemPawImage: {position:'absolute',width:100,height:100,top:30,opacity:0.2},
    renderItemCountry: {fontSize:16,fontWeight:'bold',color:'black'},




})