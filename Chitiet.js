import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, FlatList,StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const Chitiet = ({ route }) => {
  const { product } = route.params;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // const handleCommentSubmit = () => {
  //   if (comment.trim() !== '') {
  //     // Gửi bình luận lên server và cập nhật danh sách bình luận
  //     axios.post('http://192.168.1.47:3000/comments', { content: comment })
  //       .then(response => {
  //         console.log('Comment submitted successfully:', response.data);
  //         setComments([...comments, response.data]);
  //         setComment('');
  //       })
  //       .catch(error => {
  //         console.error('Error submitting comment:', error);
  //       });
  //   }
  // };
  const handleCommentSubmit = () => {
    if (comment) {
      // Thực hiện lưu trữ bình luận vào cơ sở dữ liệu hoặc hiển thị trực tiếp trên màn hình
      setComments([...comments, comment]);
      setComment('');
    }
  };
  return (
   <ScrollView>
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: product.image }} style={{ width: 160, height: 190,borderRadius:10 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{product.name}</Text>

        

<View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
<Text style={{ fontSize: 16, marginTop: 5,fontWeight:'bold' }}>Price: {product.price}$</Text>
        <TouchableOpacity style={styles.addToCartButton} >
                  <Text style={styles.addToCartButtonText}>+</Text>
                </TouchableOpacity></View>
                <Text style={{ fontSize: 16, marginTop: 5 }}>Price: {product.title}</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Comments:</Text>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <View style={{ marginTop: 10 }}>
              <Text>{item.content}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {/* <View style={{ marginTop: 20 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
          placeholder="Enter your comment"
          value={comment}
          onChangeText={setComment}
        />
        <Button title="Submit Comment" onPress={handleCommentSubmit} />
      </View> */}
       <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Nhập bình luận của bạn"
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
          <Text style={styles.commentButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.commentsList}>
        {comments.map((item, index) => (
          <Text key={index} style={styles.commentItem}>Người ẩn danh: {item}</Text>
        ))}
      </View>
    </View>
    </ScrollView>
  );
};

export default Chitiet;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    margin:23,
    borderRadius:10
  },
  productContainer: {
    flexDirection: 'column',
    marginVertical: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 27,
    padding: 10,
    height: 530,
    width: 310,
    margin: 10,
    position: 'relative',
  },
  productImage: {
    width: 287,
    height: 260,
    borderTopLeftRadius: 10, // Đảm bảo góc bo trái phía trên
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10, // Đảm bảo góc bo trái phía trên
    borderBottomRightRadius: 10, // Đảm bảo góc bo phải phía trên
    marginTop: 2,
  },
  productDetails: {
    marginLeft: 10,
    flex: 1,
    position: 'absolute', // Thêm thuộc tính position absolute để đặt vị trí tuyệt đối
    bottom: 0, // Đẩy lên phía dưới của phần tử cha (productItem)
    width: '99%', // Chiếm toàn bộ chiều rộng của phần tử cha
    padding: 10, // Thêm padding để giữ khoảng cách với biên của phần tử cha
    backgroundColor: '#fff', // Đặt màu nền với độ trong suốt
    borderBottomLeftRadius: 20, // Đảm bảo góc bo trái phía trên
    borderBottomRightRadius: 20,
     // Đảm bảo góc bo phải phía trênheight: 150,
  },
  productName: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    color: 'black',
    fontSize: 14,
  },
  productPrice: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  commentInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  commentButton: {
    marginLeft: 10,
    backgroundColor: '#66CCFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  commentButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  commentsList: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  commentItem: {
    fontSize: 14,
    marginBottom: 5,
    margin:10,
  }, addToCartButton: {
    backgroundColor: '#66CCFF',
    height: 30,
    width: 30,
    borderRadius: 10,
    alignItems: 'center',

    marginLeft: 100,

  },
  addToCartButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 5,
  },
  
});
