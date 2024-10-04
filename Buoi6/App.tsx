import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ca nấu lẩu, nấu mì mini',
    supplier: 'Devang',
    linkImage: require('./image/ca_nau_lau.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '1 KG khô gà bơ tỏi',
    supplier: 'LTD Food',
    linkImage: require('./image/ga_bo_toi.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Xe can cau da nang',
    supplier: 'Thế giới đồ chơi',
    linkImage: require('./image/xa_can_cau.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Đồ chơi dạng mô hình',
    supplier: 'Thế giới đồ chơi',
    linkImage: require('./image/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Lãnh đạo giảng đơn',
    supplier: 'Minh Long Book',
    linkImage: require('./image/lanh_dao_gian_don.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hiểu lòng con trẻ',
    supplier: 'Minh Long Book',
    linkImage: require('./image/hieu_long_con_tre.png'),
  },
];

type ItemProps = {title: string, supplier: string, linkImage: string};

const Item = ({title, supplier, linkImage}: ItemProps) => (
  <View style={styles.item}>
    <View>
    <Image
          source={linkImage}
          style={{maxWidth: 80, height: 80}}
          />
    </View>
      
    <View style = {{alignItems: 'flex-start', minWidth: 180, justifyContent: 'flex-start', height: 90}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Shop {supplier}</Text>
    </View>

    <View style= {styles.buttonChat}>
      <Text style={{fontSize: 20 ,color: "#ffffff"}}>
      Chat
      </Text>
    </View>
  </View>
);

const App = () => {
  
  const [itemData, setItemData] = useState(null);

    useEffect(() => {
        fetch('https://mockapi.io/clone/66fa5546afc569e13a9b45e9')
            .then(response => response.json())
            .then(data => setItemData(data));
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbarhead}>
        <View>
          <Image
          source={require('./image/ant-design_arrow-left-outlined.png')}
          style={{width: 30, height: 30}}
          />
        </View>
        <Text style = {styles.navbarhead_center}>
            Chat
        </Text>
        <View>
          <Image
          source={require('./image/bi_cart-check.png')}
          style={{width: 30, height: 30}}
          />
        </View>
      </View>
      <View style={styles.remind}>
        <Text style={styles.noted}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} supplier = {item.supplier} linkImage = {item.linkImage} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#f2f2f2"
  },
  item: {
    
    padding: 20,
    marginVertical: 2,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "nowrap",
    borderTopWidth:  1,
    borderTopColor: "#cccccc"
  },
  itemIsSelected:{
    backgroundColor: 'white',
  }
  ,
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 14
  },
  remind: {
    width: 400,
    height: 70,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center"
  },
  noted: {
    width: 320,
    marginVertical: 16,
    fontWeight: 500
  },
  navbarhead: {
    width: 400,
    height: 60,
    backgroundColor: "#1ad1ff",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  navbarhead_center : {
    fontSize: 24,
    color: "white"
  },
  buttonChat: {
    backgroundColor: "red",
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    
  }
});

export default App;